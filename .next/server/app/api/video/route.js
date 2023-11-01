"use strict";
(() => {
var exports = {};
exports.id = 2700;
exports.ids = [2700];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ 77282:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 80004:
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

// NAMESPACE OBJECT: ./app/api/video/route.ts
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
// EXTERNAL MODULE: ./node_modules/replicate/index.js
var replicate = __webpack_require__(73555);
var replicate_default = /*#__PURE__*/__webpack_require__.n(replicate);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 21 modules
var esm = __webpack_require__(98460);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
// EXTERNAL MODULE: ./lib/api-limit.ts + 1 modules
var api_limit = __webpack_require__(68285);
// EXTERNAL MODULE: ./lib/subscription.ts
var subscription = __webpack_require__(50294);
;// CONCATENATED MODULE: ./app/api/video/route.ts





const route_replicate = new (replicate_default())({
    auth: process.env.REPLICATE_API_TOKEN
});
async function POST(req) {
    try {
        const { userId } = (0,esm/* auth */.I8)();
        const body = await req.json();
        const { prompt } = body;
        if (!userId) {
            return new next_response/* default */.Z("Unauthorized", {
                status: 401
            });
        }
        if (!prompt) {
            return new next_response/* default */.Z("Prompt is required", {
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
        const response = await route_replicate.run("anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f", {
            input: {
                prompt
            }
        });
        if (!isPro) {
            await (0,api_limit/* incrementApiLimit */.y_)();
        }
        return next_response/* default */.Z.json(response);
    } catch (error) {
        console.log("[VIDEO_ERROR]", error);
        return new next_response/* default */.Z("Internal Error", {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fvideo%2Froute&name=app%2Fapi%2Fvideo%2Froute&pagePath=private-next-app-dir%2Fapi%2Fvideo%2Froute.ts&appDir=D%3A%5CProgram%20Files%5Cbot%5Caoai%5Cchatgpt-aoai%5Capp&appPaths=%2Fapi%2Fvideo%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/video/route","pathname":"/api/video","filename":"route","bundlePath":"app/api/video/route"},"resolvedPagePath":"D:\\Program Files\\bot\\aoai\\chatgpt-aoai\\app\\api\\video\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/video/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4410,6382,8460,5052,8451,3555,4067], () => (__webpack_exec__(80004)));
module.exports = __webpack_exports__;

})();