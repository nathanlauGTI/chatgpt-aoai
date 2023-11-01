exports.id = 2982;
exports.ids = [2982];
exports.modules = {

/***/ 21729:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92557));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25950));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95525));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 22769));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88454));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8198));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29801))

/***/ }),

/***/ 85712:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 29801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CrispProvider: () => (/* binding */ CrispProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/crisp-sdk-web/dist/crisp.umd.js
var crisp_umd = __webpack_require__(45654);
;// CONCATENATED MODULE: ./components/crisp-chat.tsx
/* __next_internal_client_entry_do_not_use__ CrispChat auto */ 

const CrispChat = ()=>{
    (0,react_.useEffect)(()=>{
        crisp_umd.Crisp.configure("8254f25a-eca0-421e-b4de-2bf655c03887");
    }, []);
    return null;
};

;// CONCATENATED MODULE: ./components/crisp-provider.tsx
/* __next_internal_client_entry_do_not_use__ CrispProvider auto */ 

const CrispProvider = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CrispChat, {});
};


/***/ }),

/***/ 8198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ModalProvider: () => (/* binding */ ModalProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(64660);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 1 modules
var react_dialog_dist = __webpack_require__(54661);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(48379);
;// CONCATENATED MODULE: ./components/ui/dialog.tsx
/* __next_internal_client_entry_do_not_use__ Dialog,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = react_dialog_dist/* Root */.fC;
const DialogTrigger = react_dialog_dist/* Trigger */.xz;
const DialogPortal = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Portal */.h_, {
        className: (0,utils.cn)(className),
        ...props
    });
DialogPortal.displayName = react_dialog_dist/* Portal */.h_.displayName;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Overlay */.aV, {
        ref: ref,
        className: (0,utils.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = react_dialog_dist/* Overlay */.aV.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_dist/* Content */.VY, {
                ref: ref,
                className: (0,utils.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
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
DialogContent.displayName = react_dialog_dist/* Content */.VY.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = react_dialog_dist/* Title */.Dx.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = react_dialog_dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(17247);
;// CONCATENATED MODULE: ./components/ui/badge.tsx




const badgeVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center rounded-full border px-2.5 py-0.25 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            premium: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-foreground border-0"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(96940);
// EXTERNAL MODULE: ./hooks/use-pro-modal.ts
var use_pro_modal = __webpack_require__(32188);
// EXTERNAL MODULE: ./constants.ts
var constants = __webpack_require__(41981);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(83280);
;// CONCATENATED MODULE: ./components/pro-modal.tsx
/* __next_internal_client_entry_do_not_use__ ProModal auto */ 











const ProModal = ()=>{
    const proModal = (0,use_pro_modal/* useProModal */.t)();
    const [loading, setLoading] = (0,react_.useState)(false);
    const onSubscribe = async ()=>{
        try {
            setLoading(true);
            const response = await axios/* default */.Z.get("/api/stripe");
            window.location.href = response.data.url;
        } catch (error) {
            dist/* toast */.Am.error("Something went wrong");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Dialog, {
        open: proModal.isOpen,
        onOpenChange: proModal.onClose,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                            className: "flex justify-center items-center flex-col gap-y-4 pb-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-x-2 font-bold text-xl",
                                children: [
                                    "Upgrade to Uni Ai",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        variant: "premium",
                                        className: "uppercase text-sm py-1",
                                        children: "pro"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(DialogDescription, {
                            className: "text-center pt-2 space-y-2 text-zinc-900 font-medium",
                            children: constants/* tools */.r.map((tool)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                                    className: "p-3 border-black/5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center gap-x-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (0,utils.cn)("p-2 w-fit rounded-md", tool.bgColor),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(tool.icon, {
                                                        className: (0,utils.cn)("w-6 h-6", tool.color)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "font-semibold text-sm",
                                                    children: tool.label
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Check */.JrY, {
                                            className: "text-primary w-5 h-5"
                                        })
                                    ]
                                }, tool.href))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DialogFooter, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                        disabled: loading,
                        onClick: onSubscribe,
                        size: "lg",
                        variant: "premium",
                        className: "w-full",
                        children: [
                            "Upgrade",
                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Zap */.itc, {
                                className: "w-4 h-4 ml-2 fill-white"
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/modal-provider.tsx
/* __next_internal_client_entry_do_not_use__ ModalProvider auto */ 


const ModalProvider = ()=>{
    const [isMounted, setIsMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ProModal, {})
    });
};


/***/ }),

/***/ 88454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToasterProvider: () => (/* binding */ ToasterProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33518);
/* __next_internal_client_entry_do_not_use__ ToasterProvider auto */ 

const ToasterProvider = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__/* .Toaster */ .x7, {});
};


/***/ }),

/***/ 96940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59818);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17247);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48379);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            premium: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 83280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: () => (/* binding */ CardHeader),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   aY: () => (/* binding */ CardContent),
/* harmony export */   eW: () => (/* binding */ CardFooter),
/* harmony export */   ll: () => (/* binding */ CardTitle)
/* harmony export */ });
/* unused harmony export CardDescription */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48379);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(" flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 55960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Empty = ({ label })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full p-20 flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative h-72 w-72",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/empty.png",
                    fill: true,
                    alt: "Empty"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-muted-foreground text-sm text-center",
                children: label
            })
        ]
    });
};


/***/ }),

/***/ 41981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ tools),
/* harmony export */   x: () => (/* binding */ MAX_FREE_COUNTS)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64660);

const MAX_FREE_COUNTS = 5;
const tools = [
    {
        label: "Conversation",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .MessageSquare */ .tjY,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
    },
    {
        label: "Music Generation",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Music */ .Vqy,
        href: "/music",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        label: "Image Generation",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .ImageIcon */ .XBm,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .VideoIcon */ .Odl,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video"
    },
    {
        label: "Code Generation",
        icon: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Code */ .EKh,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code"
    }
];


/***/ }),

/***/ 32188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useProModal)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13998);

const useProModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__/* .create */ .Ue)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));


/***/ }),

/***/ 48379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* unused harmony export absoluteUrl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4798);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function absoluteUrl(path) {
    return `${"http://localhost:3000"}${path}`;
}


/***/ }),

/***/ 19037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"font"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_font_ = __webpack_require__(67224);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_font_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_font_);
// EXTERNAL MODULE: ./node_modules/@clerk/nextjs/dist/esm/index.js + 21 modules
var esm = __webpack_require__(98460);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./components/toaster-provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Program Files\bot\aoai\chatgpt-aoai\components\toaster-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ToasterProvider"];

;// CONCATENATED MODULE: ./components/modal-provider.tsx

const modal_provider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Program Files\bot\aoai\chatgpt-aoai\components\modal-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: modal_provider_esModule, $$typeof: modal_provider_$$typeof } = modal_provider_proxy;
const modal_provider_default_ = modal_provider_proxy.default;

const modal_provider_e0 = modal_provider_proxy["ModalProvider"];

;// CONCATENATED MODULE: ./components/crisp-provider.tsx

const crisp_provider_proxy = (0,module_proxy.createProxy)(String.raw`D:\Program Files\bot\aoai\chatgpt-aoai\components\crisp-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: crisp_provider_esModule, $$typeof: crisp_provider_$$typeof } = crisp_provider_proxy;
const crisp_provider_default_ = crisp_provider_proxy.default;

const crisp_provider_e0 = crisp_provider_proxy["CrispProvider"];

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
;// CONCATENATED MODULE: ./app/layout.tsx







const metadata = {
    title: "Uni AI",
    description: "AI Platform for HONG KONG"
};
async function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(esm/* ClerkProvider */.El, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
            lang: "en",
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(crisp_provider_e0, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_font_default()).className,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(modal_provider_e0, {}),
                        children
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;