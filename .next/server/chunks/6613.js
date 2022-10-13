"use strict";
exports.id = 6613;
exports.ids = [6613];
exports.modules = {

/***/ 6613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4629);
/* harmony import */ var _src_components_common_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6193);



// component


const MyError = ({ message  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_HeadInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "BleShop - 에러"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "flex justify-center items-center text-[#FF0000] text-[120px] xs:text-[180px] space-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                version: "1.1",
                                id: "layer",
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 40 40",
                                xmlSpace: "preserve",
                                fill: "#FF0000",
                                className: "w-[90px] h-[90px] xs:w-[140px] xs:h-[140px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M14.8,5.1L8.8,33C5.8,29.9,4,25.5,4,21C4,13.6,8.5,7.3,14.8,5.1 M20,0C9,0,0,9.4,0,21c0,8.4,4.7,15.5,11.4,19L20,0L20,0z"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M25.2,5.1C31.5,7.3,36,13.6,36,21c0,4.5-1.8,8.9-4.8,12L25.2,5.1 M20,0l8.6,40C35.3,36.5,40,29.4,40,21C40,9.4,31,0,20,0L20,0z"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                version: "1.1",
                                id: "layer",
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 40 40",
                                xmlSpace: "preserve",
                                fill: "#FF0000",
                                className: "w-[90px] h-[90px] xs:w-[140px] xs:h-[140px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M14.8,5.1L8.8,33C5.8,29.9,4,25.5,4,21C4,13.6,8.5,7.3,14.8,5.1 M20,0C9,0,0,9.4,0,21c0,8.4,4.7,15.5,11.4,19L20,0L20,0z"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M25.2,5.1C31.5,7.3,36,13.6,36,21c0,4.5-1.8,8.9-4.8,12L25.2,5.1 M20,0l8.6,40C35.3,36.5,40,29.4,40,21C40,9.4,31,0,20,0L20,0z"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "whitespace-pre-line text-center text-xl xs:text-2xl font-bolder",
                            children: message
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "flex flex-col space-y-2 mt-10 text-red-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_common_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                shape: "doubleDown",
                                className: "w-10 h-10 xs:w-14 xs:h-14 animate-bounce mx-auto"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "mx-auto px-6 py-2 xs:px-8 xs:py-4 text-lg xs:text-xl font-bolder border-2 border-red-400 rounded-md transition-colors hover:bg-red-400 hover:text-white",
                                onClick: ()=>router.reload(),
                                children: "새로고침"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "mx-auto px-6 py-2 xs:px-8 xs:py-4 text-lg xs:text-xl font-bolder border-2 border-red-400 rounded-md transition-colors hover:bg-red-400 hover:text-white",
                                    children: "홈 페이지로 이동"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyError);


/***/ })

};
;