(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RenseignementDetails",
  data: function data() {
    return {
      wilayasList: [{
        id: 'wilaya_1',
        name: 'Hodh El Chergui',
        value: ''
      }, {
        id: 'wilaya_2',
        name: 'Hodh El Gharbi',
        value: ''
      }, {
        id: 'wilaya_3',
        name: 'Assaba',
        value: ''
      }, {
        id: 'wilaya_4',
        name: 'Gorgol',
        value: ''
      }, {
        id: 'wilaya_5',
        name: 'Brakna',
        value: ''
      }, {
        id: 'wilaya_6',
        name: 'Trarza',
        value: ''
      }, {
        id: 'wilaya_7',
        name: "Adrar",
        value: ''
      }, {
        id: 'wilaya_8',
        name: 'Dakhlet Nouadhibou',
        value: ''
      }, {
        id: 'wilaya_9',
        name: 'Tagant',
        value: ''
      }, {
        id: 'wilaya_10',
        name: 'Guidimakha',
        value: ''
      }, {
        id: 'wilaya_11',
        name: 'Tiris Zemmour',
        value: ''
      }, {
        id: 'wilaya_12',
        name: 'Inchiri',
        value: ''
      }, {
        id: 'wilaya_13',
        name: 'Nouakchott-Nord',
        value: ''
      }, {
        id: 'wilaya_14',
        name: 'Nouakchott-Ouest',
        value: ''
      }, {
        id: 'wilaya_15',
        name: 'Nouakchott-Sud',
        value: ''
      }]
    };
  },
  methods: {
    validateR: function validateR() {
      var _this = this;

      var payload = {
        id: this.renseignement.id,
        action: "validate"
      };
      this.$store.dispatch("renseignementAction", payload).then(function () {
        _this.$store.dispatch("fetchNonValidatedRenseignement");

        _this.$swal.fire("Ok", "Renseignement validé", "success").then(function () {
          return _this.$router.push({
            name: "Dashboard"
          });
        });
      });
    },
    rejectR: function rejectR() {
      var _this2 = this;

      var payload = {
        id: this.renseignement.id,
        action: "reject"
      };
      this.$store.dispatch("renseignementAction", payload).then(function () {
        _this2.$store.dispatch("fetchNonValidatedRenseignement");

        _this2.$swal.fire("Ok", "Renseignement rejeté", "success").then(function () {
          return _this2.$router.push({
            name: "Dashboard"
          });
        });
      });
    },
    deleteR: function deleteR() {
      var _this3 = this;

      var payload = {
        id: this.renseignement.id,
        action: "delete"
      };
      this.$store.dispatch("renseignementAction", payload).then(function () {
        _this3.$store.dispatch("fetchNonValidatedRenseignement");

        _this3.$swal.fire("Ok", "Renseignement supprimé", "success").then(function () {
          return _this3.$router.push({
            name: "Dashboard"
          });
        });
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["renseignement"])),
  created: function created() {
    this.$store.dispatch("fetchRenseignement", this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
      _c("h3", { staticClass: "text-center" }, [
        _vm._v("Validation de donnée")
      ]),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "primary white--text" },
            [
              _c(
                "v-layout",
                [
                  _c("strong", [_vm._v("Indicateur : ")]),
                  _vm._v(
                    " " +
                      _vm._s(_vm.renseignement.indicateur.intitule) +
                      "\n                "
                  ),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-tooltip",
                    {
                      attrs: { top: "" },
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
                                    {
                                      attrs: {
                                        color: "primary",
                                        dark: "",
                                        "x-small": "",
                                        text: "",
                                        to: {
                                          name: "InfoIndicateur",
                                          params: {
                                            id: _vm.renseignement.indicateur_id
                                          }
                                        }
                                      }
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { color: "white" } }, [
                                    _vm._v("mdi-information-outline")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Métadonnée ")])]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _c("p", [
              _c("strong", [_vm._v("Ajouté par")]),
              _vm._v(" : "),
              _vm.renseignement.user
                ? _c("span", [
                    _vm._v(
                      _vm._s(_vm.renseignement.user.name) +
                        " (" +
                        _vm._s(_vm.renseignement.user.email) +
                        ")"
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Date")]),
              _vm._v(
                " : " +
                  _vm._s(_vm.renseignement.created_at.slice(0, 10)) +
                  "\n            "
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-6" },
        [
          _c("h5", [_vm._v("Valeur à valider: ")]),
          _vm._v(" "),
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("tbody", [
                      _c("tr", { staticClass: "border" }, [
                        _c("td", [_vm._v("National")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-chip",
                              {
                                staticClass: "white--text",
                                attrs: { label: "", color: "red" }
                              },
                              [_vm._v(_vm._s(_vm.renseignement.valeur))]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("h5", { staticClass: "my-5" }, [_vm._v("Désagregations")]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("strong", [_vm._v("Milieu")]),
          _vm._v(" "),
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("tbody", [
                      _c("tr", { staticClass: "border" }, [
                        _c("td", [_vm._v("Urbain")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.renseignement.urbain || "Non renseigné")
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", { staticClass: "border" }, [
                        _c("td", [_vm._v("Rural")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.renseignement.rural || "Non renseigné")
                          )
                        ])
                      ])
                    ])
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("strong", [_vm._v("Genre")]),
          _vm._v(" "),
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("tbody", [
                      _c("tr", { staticClass: "border" }, [
                        _c("td", [_vm._v("Masculin")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.renseignement.homme || "Non renseigné")
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", { staticClass: "border" }, [
                        _c("td", [_vm._v("Feminin")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.renseignement.femme || "Non renseigné")
                          )
                        ])
                      ])
                    ])
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("strong", [_vm._v("Region")]),
          _vm._v(" "),
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c(
                      "tbody",
                      _vm._l(_vm.wilayasList, function(w) {
                        return _c("tr", { staticClass: "border" }, [
                          _c("td", [_vm._v(_vm._s(w.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.renseignement[w.id] || "Non renseigné")
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "primary",
                  attrs: { block: "" },
                  on: { click: _vm.validateR }
                },
                [_vm._v("Valider")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "secondary",
                  attrs: { block: "" },
                  on: { click: _vm.rejectR }
                },
                [_vm._v("Rejeter")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "red white--text",
                  attrs: { block: "" },
                  on: { click: _vm.deleteR }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/indicateurs/RenseignementDetails.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/indicateurs/RenseignementDetails.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenseignementDetails_vue_vue_type_template_id_119fca5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true& */ "./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true&");
/* harmony import */ var _RenseignementDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenseignementDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RenseignementDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RenseignementDetails_vue_vue_type_template_id_119fca5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RenseignementDetails_vue_vue_type_template_id_119fca5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "119fca5f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/indicateurs/RenseignementDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenseignementDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RenseignementDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenseignementDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RenseignementDetails_vue_vue_type_template_id_119fca5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/indicateurs/RenseignementDetails.vue?vue&type=template&id=119fca5f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RenseignementDetails_vue_vue_type_template_id_119fca5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RenseignementDetails_vue_vue_type_template_id_119fca5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);