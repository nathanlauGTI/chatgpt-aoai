"use strict";
exports.id = 3555;
exports.ids = [3555];
exports.modules = {

/***/ 73555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const collections = __webpack_require__(62287);
const models = __webpack_require__(63858);
const predictions = __webpack_require__(38221);
const trainings = __webpack_require__(71072);
const packageJSON = __webpack_require__(12939);
/**
 * Replicate API client library
 *
 * @see https://replicate.com/docs/reference/http
 * @example
 * // Create a new Replicate API client instance
 * const Replicate = require("replicate");
 * const replicate = new Replicate({
 *     // get your token from https://replicate.com/account
 *     auth: process.env.REPLICATE_API_TOKEN,
 *     userAgent: "my-app/1.2.3"
 * });
 *
 * // Run a model and await the result:
 * const model = 'owner/model:version-id'
 * const input = {text: 'Hello, world!'}
 * const output = await replicate.run(model, { input });
 */ class Replicate {
    /**
   * Create a new Replicate API client instance.
   *
   * @param {object} options - Configuration options for the client
   * @param {string} options.auth - Required. API access token
   * @param {string} options.userAgent - Identifier of your app
   * @param {string} [options.baseUrl] - Defaults to https://api.replicate.com/v1
   * @param {Function} [options.fetch] - Fetch function to use. Defaults to `globalThis.fetch`
   */ constructor(options){
        if (!options.auth) {
            throw new Error("Missing required parameter: auth");
        }
        this.auth = options.auth;
        this.userAgent = options.userAgent || `replicate-javascript/${packageJSON.version}`;
        this.baseUrl = options.baseUrl || "https://api.replicate.com/v1";
        this.fetch = options.fetch || globalThis.fetch;
        this.collections = {
            list: collections.list.bind(this),
            get: collections.get.bind(this)
        };
        this.models = {
            get: models.get.bind(this),
            versions: {
                list: models.versions.list.bind(this),
                get: models.versions.get.bind(this)
            }
        };
        this.predictions = {
            create: predictions.create.bind(this),
            get: predictions.get.bind(this),
            cancel: predictions.cancel.bind(this),
            list: predictions.list.bind(this)
        };
        this.trainings = {
            create: trainings.create.bind(this),
            get: trainings.get.bind(this),
            cancel: trainings.cancel.bind(this),
            list: trainings.list.bind(this)
        };
    }
    /**
   * Run a model and wait for its output.
   *
   * @param {string} identifier - Required. The model version identifier in the format "{owner}/{name}:{version}"
   * @param {object} options
   * @param {object} options.input - Required. An object with the model inputs
   * @param {object} [options.wait] - Whether to wait for the prediction to finish. Defaults to false
   * @param {number} [options.wait.interval] - Polling interval in milliseconds. Defaults to 250
   * @param {number} [options.wait.maxAttempts] - Maximum number of polling attempts. Defaults to no limit
   * @param {string} [options.webhook] - An HTTPS URL for receiving a webhook when the prediction has new output
   * @param {string[]} [options.webhook_events_filter] - You can change which events trigger webhook requests by specifying webhook events (`start`|`output`|`logs`|`completed`)
   * @throws {Error} If the prediction failed
   * @returns {Promise<object>} - Resolves with the output of running the model
   */ async run(identifier, options) {
        // Define a pattern for owner and model names that allows
        // letters, digits, and certain special characters.
        // Example: "user123", "abc__123", "user.name"
        const namePattern = /[a-zA-Z0-9]+(?:(?:[._]|__|[-]*)[a-zA-Z0-9]+)*/;
        // Define a pattern for "owner/name:version" format with named capturing groups.
        // Example: "user123/repo_a:1a2b3c"
        const pattern = new RegExp(`^(?<owner>${namePattern.source})/(?<name>${namePattern.source}):(?<version>[0-9a-fA-F]+)$`);
        const match = identifier.match(pattern);
        if (!match || !match.groups) {
            throw new Error('Invalid version. It must be in the format "owner/name:version"');
        }
        const { version } = match.groups;
        const prediction = await this.predictions.create({
            wait: true,
            ...options,
            version
        });
        if (prediction.status === "failed") {
            throw new Error(`Prediction failed: ${prediction.error}`);
        }
        return prediction.output;
    }
    /**
   * Make a request to the Replicate API.
   *
   * @param {string} route - REST API endpoint path
   * @param {object} parameters - Request parameters
   * @param {string} [parameters.method] - HTTP method. Defaults to GET
   * @param {object} [parameters.params] - Query parameters
   * @param {object} [parameters.data] - Body parameters
   * @returns {Promise<object>} - Resolves with the API response data
   * @throws {Error} If the request failed
   */ async request(route, parameters) {
        const { auth, baseUrl, userAgent } = this;
        const url = new URL(route.startsWith("/") ? route.slice(1) : route, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
        const { method = "GET", params = {}, data } = parameters;
        Object.entries(params).forEach(([key, value])=>{
            url.searchParams.append(key, value);
        });
        const headers = {
            Authorization: `Token ${auth}`,
            "Content-Type": "application/json",
            "User-Agent": userAgent
        };
        const response = await this.fetch(url, {
            method,
            headers,
            body: data ? JSON.stringify(data) : undefined
        });
        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }
        return response.json();
    }
    /**
   * Paginate through a list of results.
   *
   * @generator
   * @example
   * for await (const page of replicate.paginate(replicate.predictions.list) {
   *    console.log(page);
   * }
   * @param {Function} endpoint - Function that returns a promise for the next page of results
   * @yields {object[]} Each page of results
   */ async *paginate(endpoint) {
        const response = await endpoint();
        yield response.results;
        if (response.next) {
            const nextPage = ()=>this.request(response.next, {
                    method: "GET"
                });
            yield* this.paginate(nextPage);
        }
    }
    /**
   * Wait for a prediction to finish.
   *
   * If the prediction has already finished,
   * this function returns immediately.
   * Otherwise, it polls the API until the prediction finishes.
   *
   * @async
   * @param {object} prediction - Prediction object
   * @param {object} options - Options
   * @param {number} [options.interval] - Polling interval in milliseconds. Defaults to 250
   * @param {number} [options.maxAttempts] - Maximum number of polling attempts. Defaults to no limit
   * @throws {Error} If the prediction doesn't complete within the maximum number of attempts
   * @throws {Error} If the prediction failed
   * @returns {Promise<object>} Resolves with the completed prediction object
   */ async wait(prediction, options) {
        const { id } = prediction;
        if (!id) {
            throw new Error("Invalid prediction");
        }
        if (prediction.status === "succeeded" || prediction.status === "failed" || prediction.status === "canceled") {
            return prediction;
        }
        let updatedPrediction = await this.predictions.get(id);
        // eslint-disable-next-line no-promise-executor-return
        const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
        let attempts = 0;
        const interval = options.interval || 250;
        const maxAttempts = options.maxAttempts || null;
        while(updatedPrediction.status !== "succeeded" && updatedPrediction.status !== "failed" && updatedPrediction.status !== "canceled"){
            attempts += 1;
            if (maxAttempts && attempts > maxAttempts) {
                throw new Error(`Prediction ${id} did not finish after ${maxAttempts} attempts`);
            }
            /* eslint-disable no-await-in-loop */ await sleep(interval);
            updatedPrediction = await this.predictions.get(prediction.id);
        /* eslint-enable no-await-in-loop */ }
        if (updatedPrediction.status === "failed") {
            throw new Error(`Prediction failed: ${updatedPrediction.error}`);
        }
        return updatedPrediction;
    }
}
module.exports = Replicate;


/***/ }),

/***/ 62287:
/***/ ((module) => {

/**
 * Fetch a model collection
 *
 * @param {string} collection_slug - Required. The slug of the collection. See http://replicate.com/collections
 * @returns {Promise<object>} - Resolves with the collection data
 */ 
async function getCollection(collection_slug) {
    return this.request(`/collections/${collection_slug}`, {
        method: "GET"
    });
}
/**
 * Fetch a list of model collections
 *
 * @returns {Promise<object>} - Resolves with the collections data
 */ async function listCollections() {
    return this.request("/collections", {
        method: "GET"
    });
}
module.exports = {
    get: getCollection,
    list: listCollections
};


/***/ }),

/***/ 63858:
/***/ ((module) => {

/**
 * Get information about a model
 *
 * @param {string} model_owner - Required. The name of the user or organization that owns the model
 * @param {string} model_name - Required. The name of the model
 * @returns {Promise<object>} Resolves with the model data
 */ 
async function getModel(model_owner, model_name) {
    return this.request(`/models/${model_owner}/${model_name}`, {
        method: "GET"
    });
}
/**
 * List model versions
 *
 * @param {string} model_owner - Required. The name of the user or organization that owns the model
 * @param {string} model_name - Required. The name of the model
 * @returns {Promise<object>} Resolves with the list of model versions
 */ async function listModelVersions(model_owner, model_name) {
    return this.request(`/models/${model_owner}/${model_name}/versions`, {
        method: "GET"
    });
}
/**
 * Get a specific model version
 *
 * @param {string} model_owner - Required. The name of the user or organization that owns the model
 * @param {string} model_name - Required. The name of the model
 * @param {string} version_id - Required. The model version
 * @returns {Promise<object>} Resolves with the model version data
 */ async function getModelVersion(model_owner, model_name, version_id) {
    return this.request(`/models/${model_owner}/${model_name}/versions/${version_id}`, {
        method: "GET"
    });
}
module.exports = {
    get: getModel,
    versions: {
        list: listModelVersions,
        get: getModelVersion
    }
};


/***/ }),

/***/ 38221:
/***/ ((module) => {

/**
 * Create a new prediction
 *
 * @param {object} options
 * @param {string} options.version - Required. The model version
 * @param {object} options.input - Required. An object with the model inputs
 * @param {boolean|object} [options.wait] - Whether to wait for the prediction to finish. Defaults to false
 * @param {number} [options.wait.interval] - Polling interval in milliseconds. Defaults to 250
 * @param {number} [options.wait.maxAttempts] - Maximum number of polling attempts. Defaults to no limit
 * @param {string} [options.webhook] - An HTTPS URL for receiving a webhook when the prediction has new output
 * @param {string[]} [options.webhook_events_filter] - You can change which events trigger webhook requests by specifying webhook events (`start`|`output`|`logs`|`completed`)
 * @returns {Promise<object>} Resolves with the created prediction data
 */ 
async function createPrediction(options) {
    const { wait, ...data } = options;
    if (data.webhook) {
        try {
            // eslint-disable-next-line no-new
            new URL(data.webhook);
        } catch (err) {
            throw new Error("Invalid webhook URL");
        }
    }
    const prediction = this.request("/predictions", {
        method: "POST",
        data
    });
    if (wait) {
        const { maxAttempts, interval } = wait;
        // eslint-disable-next-line no-promise-executor-return
        const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
        await sleep(interval || 250);
        return this.wait(await prediction, {
            maxAttempts,
            interval
        });
    }
    return prediction;
}
/**
 * Fetch a prediction by ID
 *
 * @param {number} prediction_id - Required. The prediction ID
 * @returns {Promise<object>} Resolves with the prediction data
 */ async function getPrediction(prediction_id) {
    return this.request(`/predictions/${prediction_id}`, {
        method: "GET"
    });
}
/**
 * Cancel a prediction by ID
 *
 * @param {string} prediction_id - Required. The training ID
 * @returns {Promise<object>} Resolves with the data for the training
 */ async function cancelPrediction(prediction_id) {
    return this.request(`/predictions/${prediction_id}/cancel`, {
        method: "POST"
    });
}
/**
 * List all predictions
 *
 * @returns {Promise<object>} - Resolves with a page of predictions
 */ async function listPredictions() {
    return this.request("/predictions", {
        method: "GET"
    });
}
module.exports = {
    create: createPrediction,
    get: getPrediction,
    cancel: cancelPrediction,
    list: listPredictions
};


/***/ }),

/***/ 71072:
/***/ ((module) => {

/**
 * Create a new training
 *
 * @param {string} model_owner - Required. The username of the user or organization who owns the model
 * @param {string} model_name - Required. The name of the model
 * @param {string} version_id - Required. The version ID
 * @param {object} options
 * @param {string} options.destination - Required. The destination for the trained version in the form "{username}/{model_name}"
 * @param {object} options.input - Required. An object with the model inputs
 * @param {string} [options.webhook] - An HTTPS URL for receiving a webhook when the training updates
 * @param {string[]} [options.webhook_events_filter] - You can change which events trigger webhook requests by specifying webhook events (`start`|`output`|`logs`|`completed`)
 * @returns {Promise<object>} Resolves with the data for the created training
 */ 
async function createTraining(model_owner, model_name, version_id, options) {
    const { ...data } = options;
    if (data.webhook) {
        try {
            // eslint-disable-next-line no-new
            new URL(data.webhook);
        } catch (err) {
            throw new Error("Invalid webhook URL");
        }
    }
    const training = this.request(`/models/${model_owner}/${model_name}/versions/${version_id}/trainings`, {
        method: "POST",
        data
    });
    return training;
}
/**
 * Fetch a training by ID
 *
 * @param {string} training_id - Required. The training ID
 * @returns {Promise<object>} Resolves with the data for the training
 */ async function getTraining(training_id) {
    return this.request(`/trainings/${training_id}`, {
        method: "GET"
    });
}
/**
 * Cancel a training by ID
 *
 * @param {string} training_id - Required. The training ID
 * @returns {Promise<object>} Resolves with the data for the training
 */ async function cancelTraining(training_id) {
    return this.request(`/trainings/${training_id}/cancel`, {
        method: "POST"
    });
}
/**
 * List all trainings
 *
 * @returns {Promise<object>} - Resolves with a page of trainings
 */ async function listTrainings() {
    return this.request("/trainings", {
        method: "GET"
    });
}
module.exports = {
    create: createTraining,
    get: getTraining,
    cancel: cancelTraining,
    list: listTrainings
};


/***/ }),

/***/ 12939:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"replicate","version":"0.12.3","description":"JavaScript client for Replicate","repository":"github:replicate/replicate-javascript","homepage":"https://github.com/replicate/replicate-javascript#readme","bugs":"https://github.com/replicate/replicate-javascript/issues","license":"Apache-2.0","main":"index.js","engines":{"node":">=16.6.0","npm":">=7.19.0","git":">=2.11.0","yarn":">=1.7.0"},"scripts":{"lint":"eslint .","test":"jest"},"devDependencies":{"@types/jest":"^29.5.0","@typescript-eslint/eslint-plugin":"^5.56.0","cross-fetch":"^3.1.5","eslint":"^8.36.0","eslint-config-airbnb-base":"^15.0.0","eslint-plugin-import":"^2.27.5","eslint-plugin-jest":"^27.2.1","eslint-plugin-jsdoc":"^46.2.6","eslint-plugin-n":"^15.6.1","eslint-plugin-promise":"^6.1.1","jest":"^29.5.0","nock":"^13.3.0","ts-jest":"^29.1.0","typescript":"^5.0.2"}}');

/***/ })

};
;