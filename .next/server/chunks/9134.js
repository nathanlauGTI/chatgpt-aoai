exports.id = 9134;
exports.ids = [9134];
exports.modules = {

/***/ 64387:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31440))

/***/ }),

/***/ 38431:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92557));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25950));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95525));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22769));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3150));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 36703))

/***/ }),

/***/ 31440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55960);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Error = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_empty__WEBPACK_IMPORTED_MODULE_1__/* .Empty */ .H, {
        label: "Something went wrong."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 3150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MobileSidebar: () => (/* binding */ MobileSidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(96940);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 1 modules
var dist = __webpack_require__(54661);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(17247);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(48379);
;// CONCATENATED MODULE: ./components/ui/sheet.tsx
/* __next_internal_client_entry_do_not_use__ Sheet,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,SheetDescription auto */ 





const Sheet = dist/* Root */.fC;
const SheetTrigger = dist/* Trigger */.xz;
const SheetClose = dist/* Close */.x8;
const SheetPortal = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Portal */.h_, {
        className: (0,utils.cn)(className),
        ...props
    });
SheetPortal.displayName = dist/* Portal */.h_.displayName;
const SheetOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
        className: (0,utils.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }));
SheetOverlay.displayName = dist/* Overlay */.aV.displayName;
const sheetVariants = (0,class_variance_authority_dist/* cva */.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ react_.forwardRef(({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SheetOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Content */.VY, {
                ref: ref,
                className: (0,utils.cn)(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
SheetContent.displayName = dist/* Content */.VY.displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold text-foreground", className),
        ...props
    }));
SheetTitle.displayName = dist/* Title */.Dx.displayName;
const SheetDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
SheetDescription.displayName = dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./components/sidebar.tsx + 2 modules
var sidebar = __webpack_require__(36703);
;// CONCATENATED MODULE: ./components/mobile-sidebar.tsx
/* __next_internal_client_entry_do_not_use__ MobileSidebar auto */ 





const MobileSidebar = ({ apiLimitCount = 0, isPro = false })=>{
    const [isMounted, setIsMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sheet, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SheetTrigger, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Menu */.v2r, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SheetContent, {
                side: "left",
                className: "p-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar.Sidebar, {
                    isPro: isPro,
                    apiLimitCount: apiLimitCount
                })
            })
        ]
    });
};


/***/ }),

/***/ 36703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Sidebar: () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"components\\sidebar.tsx","import":"Montserrat","arguments":[{"weight":"600","subsets":["latin"]}],"variableName":"poppins"}
var target_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_poppins_ = __webpack_require__(49795);
var target_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(target_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_poppins_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(48379);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__(41981);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(83280);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(96940);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-progress/dist/index.mjs
var dist = __webpack_require__(54352);
;// CONCATENATED MODULE: ./components/ui/progress.tsx
/* __next_internal_client_entry_do_not_use__ Progress auto */ 



const Progress = /*#__PURE__*/ react_.forwardRef(({ className, value, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(dist/* Indicator */.z$, {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        })
    }));
Progress.displayName = dist/* Root */.fC.displayName;


// EXTERNAL MODULE: ./hooks/use-pro-modal.ts
var use_pro_modal = __webpack_require__(32188);
;// CONCATENATED MODULE: ./components/free-counter.tsx








const FreeCounter = ({ isPro = false, apiLimitCount = 0 })=>{
    const [mounted, setMounted] = (0,react_.useState)(false);
    const proModal = (0,use_pro_modal/* useProModal */.t)();
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    if (isPro) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx(card/* Card */.Zb, {
            className: "bg-white/10 border-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardContent */.aY, {
                className: "py-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center text-sm text-white mb-4 space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    apiLimitCount,
                                    " / ",
                                    constants/* MAX_FREE_COUNTS */.x,
                                    " Free Generations"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Progress, {
                                className: "h-3",
                                value: apiLimitCount / constants/* MAX_FREE_COUNTS */.x * 100
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                        onClick: proModal.onOpen,
                        variant: "premium",
                        className: "w-full",
                        children: [
                            "Upgrade",
                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Zap */.itc, {
                                className: "w-4 h-4 ml-2 fill-white"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/sidebar.tsx
/* __next_internal_client_entry_do_not_use__ Sidebar auto */ 







const routes = [
    {
        label: "Dashboard",
        icon: lucide_react/* LayoutDashboard */.yYn,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: lucide_react/* MessageSquare */.tjY,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: lucide_react/* ImageIcon */.XBm,
        color: "text-pink-700",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: lucide_react/* VideoIcon */.Odl,
        color: "text-orange-700",
        href: "/video"
    },
    {
        label: "Music Generation",
        icon: lucide_react/* Music */.Vqy,
        color: "text-emerald-500",
        href: "/music"
    },
    {
        label: "Code Generation",
        icon: lucide_react/* Code */.EKh,
        color: "text-green-700",
        href: "/code"
    },
    {
        label: "Settings",
        icon: lucide_react/* Settings */.Zrf,
        href: "/settings"
    }
];
const Sidebar = ({ apiLimitCount = 0, isPro = false })=>{
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-3 py-2 flex-1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/dashboard",
                        className: "flex items-center pl-3 mb-14",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative h-8 w-8 mr-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    fill: true,
                                    alt: "Logo",
                                    src: "/logo.png"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (0,utils.cn)("text-2xl font-bold", (target_path_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_poppins_default()).className),
                                children: "Uni Ai"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-y-1",
                        children: routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: route.href,
                                className: (0,utils.cn)("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center flex-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(route.icon, {
                                            className: (0,utils.cn)("h-5 w-5 mr-3", route.color)
                                        }),
                                        route.label
                                    ]
                                })
                            }, route.href))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FreeCounter, {
                apiLimitCount: apiLimitCount,
                isPro: isPro
            })
        ]
    });
};


/***/ }),

/***/ 73242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Program Files\bot\aoai\chatgpt-aoai\app\(dashboard)\error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 13155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/client-boundary/uiComponents.js
var uiComponents = __webpack_require__(82725);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./components/mobile-sidebar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Program Files\bot\aoai\chatgpt-aoai\components\mobile-sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["MobileSidebar"];

// EXTERNAL MODULE: ./lib/api-limit.ts + 1 modules
var api_limit = __webpack_require__(68285);
// EXTERNAL MODULE: ./lib/subscription.ts
var subscription = __webpack_require__(50294);
;// CONCATENATED MODULE: ./components/navbar.tsx





const Navbar = async ()=>{
    const apiLimitCount = await (0,api_limit/* getApiLimitCount */.ge)();
    const isPro = await (0,subscription/* checkSubscription */.b)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center p-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                isPro: isPro,
                apiLimitCount: apiLimitCount
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-full justify-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* UserButton */.l8, {
                    afterSignOutUrl: "/"
                })
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/sidebar.tsx

const sidebar_proxy = (0,module_proxy.createProxy)(String.raw`D:\Program Files\bot\aoai\chatgpt-aoai\components\sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: sidebar_esModule, $$typeof: sidebar_$$typeof } = sidebar_proxy;
const sidebar_default_ = sidebar_proxy.default;

const sidebar_e0 = sidebar_proxy["Sidebar"];

;// CONCATENATED MODULE: ./app/(dashboard)/layout.tsx





const DashboardLayout = async ({ children })=>{
    const apiLimitCount = await (0,api_limit/* getApiLimitCount */.ge)();
    const isPro = await (0,subscription/* checkSubscription */.b)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900",
                children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_e0, {
                    isPro: isPro,
                    apiLimitCount: apiLimitCount
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "md:pl-72 pb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (DashboardLayout);


/***/ })

};
;