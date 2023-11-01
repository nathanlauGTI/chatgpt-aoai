"use strict";
(() => {
var exports = {};
exports.id = 5649;
exports.ids = [5649];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 72254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ 87561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 88849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 22286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 87503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 49411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 72477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 41041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 47261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 65628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 24584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/image/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(53488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 21 modules
var esm = __webpack_require__(98460);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
// EXTERNAL MODULE: ./node_modules/@azure/openai/dist-esm/src/OpenAIClient.js + 10 modules
var OpenAIClient = __webpack_require__(56522);
// EXTERNAL MODULE: ./node_modules/@azure/core-auth/dist/index.js
var dist = __webpack_require__(87660);
// EXTERNAL MODULE: ./lib/subscription.ts
var subscription = __webpack_require__(50294);
// EXTERNAL MODULE: ./lib/api-limit.ts + 1 modules
var api_limit = __webpack_require__(68285);
;// CONCATENATED MODULE: ./app/api/image/route.ts





const endpoint = process.env.IMAGE_OPENAI_ENDPOINT;
const azureApiKey = process.env.IMAGE_OPENAI_API_KEY;
if (!endpoint || !azureApiKey) {
    console.error("Missing required environment variables.");
    process.exit(1);
}
const client = new OpenAIClient/* OpenAIClient */.D(endpoint, new dist.AzureKeyCredential(azureApiKey));
const deploymentId = "chat";
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
async function POST(req) {
    try {
        const { userId } = (0,esm/* auth */.I8)();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "512x512" } = body;
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        // if (!configuration.apiKey) {
        //   return new NextResponse("OpenAI API Key not configured.", {
        //     status: 500,
        //   });
        // }
        if (!prompt) {
            return new next_response/* default */.Z("Prompt is required", {
                status: 400
            });
        }
        if (!amount) {
            return new next_response/* default */.Z("Amount is required", {
                status: 400
            });
        }
        if (!resolution) {
            return new next_response/* default */.Z("Resolution is required", {
                status: 400
            });
        }
        const freeTrial = await (0,api_limit/* checkApiLimit */.OI)();
        const isPro = await (0,subscription/* checkSubscription */.b)();
        if (!freeTrial && !isPro) {
            return new next_response/* default */.Z("Free trial has expired. Please upgrade to pro.", {
                status: 403
            });
        }
        // const response = await openai.createImage({
        //   prompt,
        //   n: parseInt(amount, 10),
        //   size: resolution,
        // });
        const response = await fetch("https://cog-c2bp42wxw3ed4.openai.azure.com/openai/images/generations:submit?api-version=2023-06-01-preview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": "55d1707d9cf44c8e81a4e6f7a16fe31f"
            },
            body: JSON.stringify({
                prompt: prompt,
                n: parseInt(amount, 10),
                size: resolution
            })
        });
        const imageStatus = await response.json();
        if (response.status > 299 || !response.ok) {
            throw Error(imageStatus.error || "Unknown error");
        }
        const parsedImageStatus = JSON.parse(JSON.stringify(imageStatus)).id;
        const imageResponse = await fetch(`https://cog-c2bp42wxw3ed4.openai.azure.com/openai/operations/images/${parsedImageStatus}?api-version=2023-06-01-preview`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "api-key": "55d1707d9cf44c8e81a4e6f7a16fe31f"
            }
        });
        const imageInfo = await imageResponse.json();
        if (imageResponse.status > 299 || !imageResponse.ok) {
            throw Error(imageInfo.error || "Unknown error");
        }
        if (!isPro) {
            await (0,api_limit/* incrementApiLimit */.y_)();
        }
        return next_response/* default */.Z.json(imageInfo.result.data);
    // return NextResponse.json(response.result?.data.values);
    } catch (error) {
        console.log("[IMAGE_ERROR]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fimage%2Froute&name=app%2Fapi%2Fimage%2Froute&pagePath=private-next-app-dir%2Fapi%2Fimage%2Froute.ts&appDir=D%3A%5CProgram%20Files%5Cbot%5Caoai%5Cchatgpt-aoai%5Capp&appPaths=%2Fapi%2Fimage%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/image/route","pathname":"/api/image","filename":"route","bundlePath":"app/api/image/route"},"resolvedPagePath":"D:\\Program Files\\bot\\aoai\\chatgpt-aoai\\app\\api\\image\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/image/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4410,6382,8460,5052,8451,6522,4067], () => (__webpack_exec__(24584)));
module.exports = __webpack_exports__;

})();