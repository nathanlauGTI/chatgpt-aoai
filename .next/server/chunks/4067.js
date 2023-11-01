"use strict";
exports.id = 4067;
exports.ids = [4067];
exports.modules = {

/***/ 68285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OI: () => (/* binding */ checkApiLimit),
  ge: () => (/* binding */ getApiLimitCount),
  y_: () => (/* binding */ incrementApiLimit)
});

// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 21 modules
var esm = __webpack_require__(98460);
// EXTERNAL MODULE: ./lib/prismadb.ts
var prismadb = __webpack_require__(91972);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(85052);
;// CONCATENATED MODULE: ./constants.ts

const MAX_FREE_COUNTS = 5;
const tools = [
    {
        label: "Conversation",
        icon: lucide_react/* MessageSquare */.tjY,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
    },
    {
        label: "Music Generation",
        icon: lucide_react/* Music */.Vqy,
        href: "/music",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        label: "Image Generation",
        icon: lucide_react/* ImageIcon */.XBm,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: lucide_react/* VideoIcon */.Odl,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video"
    },
    {
        label: "Code Generation",
        icon: lucide_react/* Code */.EKh,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code"
    }
];

;// CONCATENATED MODULE: ./lib/api-limit.ts



const incrementApiLimit = async ()=>{
    const { userId } = (0,esm/* auth */.I8)();
    if (!userId) {
        return;
    }
    const userApiLimit = await prismadb/* default */.Z.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    });
    if (userApiLimit) {
        await prismadb/* default */.Z.userApiLimit.update({
            where: {
                userId: userId
            },
            data: {
                count: userApiLimit.count + 1
            }
        });
    } else {
        await prismadb/* default */.Z.userApiLimit.create({
            data: {
                userId: userId,
                count: 1
            }
        });
    }
};
const checkApiLimit = async ()=>{
    const { userId } = (0,esm/* auth */.I8)();
    if (!userId) {
        return false;
    }
    const userApiLimit = await prismadb/* default */.Z.userApiLimit.findUnique({
        where: {
            userId: userId
        }
    });
    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
        return true;
    } else {
        return false;
    }
};
const getApiLimitCount = async ()=>{
    const { userId } = (0,esm/* auth */.I8)();
    if (!userId) {
        return 0;
    }
    const userApiLimit = await prismadb/* default */.Z.userApiLimit.findUnique({
        where: {
            userId
        }
    });
    if (!userApiLimit) {
        return 0;
    }
    return userApiLimit.count;
};


/***/ }),

/***/ 91972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prismadb = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prismadb);


/***/ }),

/***/ 50294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ checkSubscription)
/* harmony export */ });
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98460);
/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91972);


const DAY_IN_MS = 86400000;
const checkSubscription = async ()=>{
    const { userId } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__/* .auth */ .I8)();
    if (!userId) {
        return false;
    }
    const userSubscription = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.userSubscription.findUnique({
        where: {
            userId: userId
        },
        select: {
            stripeSubscriptionId: true,
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true
        }
    });
    if (!userSubscription) {
        return false;
    }
    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime() + DAY_IN_MS > Date.now();
    return !!isValid;
};


/***/ })

};
;