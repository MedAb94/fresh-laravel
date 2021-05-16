(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/MailVerification.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MailVerification",
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    resend: function resend() {
      var _this = this;

      this.loading = true;
      this.$store.dispatch('resendVerificationEmail', this.$route.params.email).then(function (res) {
        console.log(res);

        _this.$swal.fire('Bravo!', "Un email de verification a été envoyé à votre adresse", 'success').then(function () {
          return _this.$router.push({
            name: 'Connexion'
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np[data-v-3169ad5e] {\n    font-size: 17px;\n    text-align: center;\n    margin: 20px 0;\n}\n.center-btn[data-v-3169ad5e] {\n    display: block;\n    margin: 0 auto;\n}\n.input-form[data-v-3169ad5e] {\n    background: rgba(142, 144, 166, 0.1);\n    width: 100%;\n    outline: none;\n    padding: 10px 20px;\n    margin: 20px 0;\n    border-radius: 8px;\n}\n.input-form[data-v-3169ad5e]:focus {\n    background: rgba(142, 144, 166, 0.3);\n}\n.mail-verification[data-v-3169ad5e] {\n    background: rgba(247, 250, 252, 1);\n}\n.btn[data-v-3169ad5e] {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "mail-verification" },
    [
      _c(
        "v-container",
        [
          _c("h3", { staticClass: "text-center" }, [_vm._v("Sesur")]),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "7" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "pa-12" },
                    [
                      _c("h4", {}, [_vm._v("Veuillez confirmer votre e-mail")]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { color: "#16133d" } }, [
                        _vm._v(
                          "\n                        Vous avez presque terminé! Nous avons envoyé un mail à\n                        "
                        ),
                        _c("strong", [
                          _vm._v(_vm._s(this.$route.params.email) + ".")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", {}, [
                        _vm._v(
                          "\n                        Cliquez sur le lien de verification dans le mail pour confirmer\n                        votre adresse mail et terminer votre inscription. Si vous ne voyez\n                        pas le mail, vous devrez peut-être vérifier votre dossier spam.\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Vous ne voyez toujours pas le mail?")]),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "primary mt-5 btn",
                          attrs: { text: "", large: "", loading: _vm.loading },
                          on: { click: _vm.resend }
                        },
                        [_vm._v("Renvoyez le mail\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        {
                          staticClass: "py-8",
                          attrs: { "justify-center": "" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-capitalize",
                              attrs: { text: "" }
                            },
                            [
                              _vm._v(
                                "Vous avez besoin d’aide?\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "text-capitalize",
                              attrs: { text: "" }
                            },
                            [_vm._v("Contactez-nous")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/MailVerification.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/auth/MailVerification.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailVerification_vue_vue_type_template_id_3169ad5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true& */ "./resources/js/components/auth/MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true&");
/* harmony import */ var _MailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailVerification.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/MailVerification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MailVerification_vue_vue_type_style_index_0_id_3169ad5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css& */ "./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailVerification_vue_vue_type_template_id_3169ad5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MailVerification_vue_vue_type_template_id_3169ad5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3169ad5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/MailVerification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/MailVerification.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/auth/MailVerification.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MailVerification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_style_index_0_id_3169ad5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=style&index=0&id=3169ad5e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_style_index_0_id_3169ad5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_style_index_0_id_3169ad5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_style_index_0_id_3169ad5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_style_index_0_id_3169ad5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/auth/MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/auth/MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_template_id_3169ad5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/MailVerification.vue?vue&type=template&id=3169ad5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_template_id_3169ad5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailVerification_vue_vue_type_template_id_3169ad5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);