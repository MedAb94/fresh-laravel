(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/leviers/Details.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/leviers/Details.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "LevierDetails",
  methods: {
    deleteRecor: function deleteRecor() {
      var _this = this;

      this.$swal.fire({
        title: "Etes vous sur?",
        text: "Cette action de suppression est irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Supprimer",
        cancelButtonText: "Annuler"
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.$store.dispatch('deleteRecord', {
            type: "leviers",
            id: _this.$route.params.id
          }).then(function (resp) {
            _this.$swal.fire('Ok!', "La suppression est faite", 'success');

            _this.$router.push({
              name: 'AllLeviers'
            });
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['levier', 'role'])),
  created: function created() {
    this.$store.dispatch('fetchLevier', this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/leviers/Details.vue?vue&type=template&id=34b322dc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/leviers/Details.vue?vue&type=template&id=34b322dc&scoped=true& ***!
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
    "v-container",
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "white--text primary" },
            [
              _c(
                "v-layout",
                { staticClass: " py-0" },
                [
                  _c("h3", [_vm._v("Levier: " + _vm._s(_vm.levier.libelle))]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    {
                      attrs: { "offset-y": "" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    { attrs: { dark: "", text: "" } },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _vm._v(
                                    "\n                            Options\n                            "
                                  ),
                                  _c("v-icon", { attrs: { right: "" } }, [
                                    _vm._v("mdi-menu")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "primary",
                                      attrs: {
                                        disabled: _vm.role === "user",
                                        to: { name: "NewLevier" }
                                      }
                                    },
                                    [_vm._v("Creér un levier")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "secondary",
                                      attrs: {
                                        disabled: _vm.role === "user",
                                        to: {
                                          name: "AssocLevierInd",
                                          params: { id: _vm.levier.id }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Associer\n                                    indicateur\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "red white--text",
                                      attrs: { disabled: _vm.role === "user" },
                                      on: { click: _vm.deleteRecor }
                                    },
                                    [_vm._v("Supprimer")]
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _c("h4", { staticClass: "my-3 black--text text-lg" }, [
              _vm._v("Objectif")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-lg" }, [
              _vm._v(_vm._s(_vm.levier.objectif))
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "my-3 black--text text-lg" }, [
              _vm._v("Objectifs specifiques")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-lg" }, [
              _c(
                "ol",
                _vm._l(_vm.levier.objectifs, function(o) {
                  return _c("li", [_vm._v(_vm._s(o.objectif))])
                }),
                0
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.levier.chantiers.length
        ? _c(
            "div",
            [
              _c(
                "v-card",
                { staticClass: "my-8 card-shadow" },
                [
                  _c("v-card-title", { staticClass: "primary white--text" }, [
                    _c("h5", [_vm._v("Chantiers")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "stretch", justify: "center" } },
                        _vm._l(_vm.levier.chantiers, function(o) {
                          return _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "3", md: "4" } },
                            [
                              _c(
                                "v-card",
                                { staticClass: "fill-height" },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "black--text text-lg",
                                          attrs: {
                                            to: {
                                              name: "ChantierDetails",
                                              params: { id: o.id }
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(o.libelle) +
                                              "\n                                "
                                          )
                                        ]
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
                        }),
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
        : _vm._e(),
      _vm._v(" "),
      _vm.levier.indicateurs.length
        ? _c(
            "div",
            [
              _c(
                "v-card",
                { staticClass: "my-8 card-shadow" },
                [
                  _c("v-card-title", { staticClass: "primary white--text" }, [
                    _c("h5", [_vm._v("Indicateurs dans ce levier")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        { attrs: { justify: "center", align: "stretch" } },
                        _vm._l(_vm.levier.indicateurs, function(i) {
                          return _c(
                            "v-col",
                            {
                              attrs: { cols: "12", md: "4", lg: "3", sm: "6" }
                            },
                            [
                              !i.valeurs.length
                                ? _c(
                                    "v-card",
                                    {
                                      staticClass: "text-center",
                                      attrs: { "min-height": "100%" }
                                    },
                                    [
                                      _c("h3", { staticClass: "text-center" }, [
                                        _vm._v(
                                          "\n                                0\n                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "black--text text-lg",
                                              attrs: {
                                                to: {
                                                  name: "IndicateurDetails",
                                                  params: { id: i.id }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(i.intitule) +
                                                  "\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              i.valeurs.length > 0 &&
                              (!i.valeurs[0].masculin ||
                                !i.valeurs[0].feminin ||
                                !i.valeurs[0].rural ||
                                !i.valeurs[0].urbain)
                                ? _c(
                                    "v-card",
                                    {
                                      staticClass: "text-center",
                                      attrs: { "min-height": "100%" }
                                    },
                                    [
                                      _c("h3", { staticClass: "text-center" }, [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(i.valeurs[0].valeur) +
                                            "\n                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "IndicateurDetails",
                                                  params: { id: i.id }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(i.intitule) +
                                                  "\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              i.valeurs.length > 0 &&
                              i.valeurs[0].masculin &&
                              i.valeurs[0].feminin &&
                              i.valeurs[0].rural &&
                              i.valeurs[0].urbain
                                ? _c(
                                    "v-card",
                                    {
                                      staticClass: "text-center",
                                      attrs: { "min-height": "100%", flat: "" }
                                    },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c("apexchart", {
                                            attrs: {
                                              type: "pie",
                                              height: "350",
                                              width: "100%",
                                              options:
                                                _vm.valeuresCibles.chartOptions,
                                              series: [
                                                i.valeurs[0].masculin,
                                                i.valeurs[0].feminin,
                                                i.valeurs[0].rural,
                                                i.valeurs[0].urbain
                                              ]
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "IndicateurDetails",
                                                  params: { id: i.id }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(i.intitule) +
                                                  "\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        }),
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/leviers/Details.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/leviers/Details.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_34b322dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=34b322dc&scoped=true& */ "./resources/js/components/admin/leviers/Details.vue?vue&type=template&id=34b322dc&scoped=true&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/leviers/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_34b322dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_34b322dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34b322dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/leviers/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/leviers/Details.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/leviers/Details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/leviers/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/leviers/Details.vue?vue&type=template&id=34b322dc&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/leviers/Details.vue?vue&type=template&id=34b322dc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_34b322dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=34b322dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/leviers/Details.vue?vue&type=template&id=34b322dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_34b322dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_34b322dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);