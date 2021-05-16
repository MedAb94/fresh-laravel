(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "All",
  components: {
    downloadExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      search: '',
      page: 1,
      loading: true,
      dialog: false,
      indicateurs: [],
      headers: [{
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id'
      }, {
        text: 'Intitule',
        value: 'intitule'
      }, {
        text: 'Valeur',
        value: 'valeurs[0].valeur'
      }, {
        text: 'Valeur cible',
        value: 'valeur_cible'
      }, {
        text: 'Dernier renseignement',
        value: 'valeurs[0].date'
      }, {
        text: 'Odd',
        value: 'cible.objectif.objectif'
      }],
      export_fields: {
        Num: "id",
        Intitule: "intitule",
        "Valeur": {
          field: "valeurs",
          callback: function callback(value) {
            return value.length ? value[0].valeur : "non renseigné";
          }
        },
        "Valeur cible": "valeur_cible",
        "Dernier renseignement": {
          field: "valeurs",
          callback: function callback(value) {
            return value.length ? value[0].created_at.slice(0, 10) : "";
          }
        },
        "Instance responsable": "instance"
      },
      filter: {
        strategie: "Tout",
        levier: "Tout",
        chantier: "Tout",
        intervention: "Tout",
        odd: "Tout"
      },
      filterData: {
        wilaya_id: 0,
        odd_id: 0
      }
    };
  },
  methods: {
    oddChanged: function oddChanged(e) {
      if (e === "Tout") {
        this.filterData.odd_id = 0;
        if (this.filterData.wilaya_id === 0) this.indicateurs = this.indicateursOdd;else {
          this.wilayaChanged(this.filterData.wilaya_id);
        }
      } else {
        var id = e.split("-")[0];
        this.filterData.odd_id = id;
        if (this.filterData.wilaya_id === 0) this.indicateurs = this.indicateursOdd.filter(function (i) {
          return i.cible !== null && i.cible.objectf_id == id;
        });else {
          this.wilayaChanged(this.filterData.wilaya_id);
        }
      }
    },
    wilayaChanged: function wilayaChanged(e) {
      if (e === "Tout") {
        this.filterData.wilaya_id = 0;

        if (this.filterData.odd_id !== 0) {
          this.oddChanged(this.filterData.odd_id);
        } else this.indicateurs = this.indicateursOdd;
      } else {
        var id = e.split("-")[0];
        var wilaya = "wilaya_" + id;

        if (this.filterData.odd_id === 0) {
          this.indicateurs = this.indicateursOdd.filter(function (i) {
            return i.valeurs && i.valeurs.map(function (v) {
              return v[wilaya];
            }).filter(function (e) {
              return e !== "" && e !== null;
            }).length;
          });
        } else {
          var temp = this.indicateurs;
          this.indicateurs = temp.filter(function (i) {
            return i.valeurs && i.valeurs.map(function (v) {
              return v[wilaya];
            }).filter(function (e) {
              return e !== "" && e !== null;
            }).length;
          });
        }
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["indicateursOdd", "allWilayas", "allObjectifs"])), {}, {
    odds: function odds() {
      var cams = [];
      var items = this.allObjectifs;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].objectif);
      }

      return cams;
    },
    wilayas: function wilayas() {
      var cams = [];
      var items = this.allWilayas;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    }
  }),
  created: function created() {
    var _this = this;

    this.$store.dispatch('fetchObjectifs');
    this.$store.dispatch('fetchWilayas');
    this.$store.dispatch('fetchIndicateursOdd').then(function () {
      _this.indicateurs = _this.indicateursOdd;
      _this.loading = false;
      _this.dialog = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: " card-shadow", attrs: { flat: "" } },
        [
          _c(
            "v-layout",
            { staticClass: "justify-space-between align-center" },
            [
              _c("v-card-title", [_vm._v("Liste des indicateurs")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mr-3 px-5",
                staticStyle: { "max-width": "250px" },
                attrs: {
                  placeholder: "Rechercher",
                  "background-color": "light",
                  "append-icon": "mdi-magnify",
                  dense: "",
                  shaped: "",
                  outlined: ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "2", md: "2" } },
                            [_c("strong", [_vm._v("Filtrer par:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "2", md: "2" } },
                            [
                              _c("v-subheader", [_vm._v("ODD")]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  items: ["Tout"].concat(_vm.odds),
                                  dense: "",
                                  outlined: "",
                                  "no-data-text": _vm.$t("filtre.no_data")
                                },
                                on: { change: _vm.oddChanged },
                                model: {
                                  value: _vm.filter.odd,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "odd", $$v)
                                  },
                                  expression: "filter.odd"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "2", md: "2" } },
                            [
                              _c("v-subheader", [_vm._v("Wilaya")]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  items: ["Tout"].concat(_vm.wilayas),
                                  dense: "",
                                  outlined: "",
                                  "no-data-text": _vm.$t("filtre.no_data")
                                },
                                on: { change: _vm.wilayaChanged },
                                model: {
                                  value: _vm.filter.strategie,
                                  callback: function($$v) {
                                    _vm.$set(_vm.filter, "strategie", $$v)
                                  },
                                  expression: "filter.strategie"
                                }
                              })
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
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.indicateurs,
                              search: _vm.search,
                              page: _vm.page,
                              loading: _vm.loading,
                              "loading-text":
                                "Telechargement de données en cours"
                            },
                            on: {
                              "update:page": function($event) {
                                _vm.page = $event
                              }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item.intitule",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass:
                                          "black--text font-weight-bold",
                                        attrs: {
                                          to: {
                                            name: "PublicIndicateurDetails",
                                            params: { id: item.id }
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(item.intitule) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.valeurs[0].created_at",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.created_at.slice(0, 10)) +
                                        "\n                            "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.action",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: { "offset-y": "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            dark: ""
                                                          }
                                                        },
                                                        "v-icon",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _vm._v(
                                                        "\n                                            mdi-dots-horizontal\n                                        "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: {
                                                  link: "",
                                                  to: {
                                                    name: "IndicateurDetails",
                                                    params: { id: item.id }
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Historique")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: {
                                                  link: "",
                                                  to: {
                                                    name: "InfoIndicateur",
                                                    params: { id: item.id }
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Détails")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: {
                                                  link: "",
                                                  to: {
                                                    name: "EditIndicateur",
                                                    params: { id: item.id }
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Modifier")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              { attrs: { link: "" } },
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deleteRecor(
                                                          item.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                Supprimer\n                                            "
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
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "download-excel",
                                {
                                  staticClass: "btn btn-default",
                                  attrs: {
                                    data: _vm.indicateurs,
                                    fields: _vm.export_fields,
                                    worksheet: "Page_1",
                                    name: "indicateurs.xls"
                                  }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    { staticClass: "primary" },
                                    [
                                      _c("v-icon", [_vm._v("mdi-download")]),
                                      _vm._v(
                                        "\n                                    Telecharger la liste\n                                "
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
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-dialog",
            {
              attrs: { "hide-overlay": "", persistent: "", width: "300" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { color: "primary", dark: "" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _vm._v(
                        "\n                    Veuillez patienter\n                    "
                      ),
                      _c("v-progress-linear", {
                        staticClass: "mb-0",
                        attrs: { indeterminate: "", color: "white" }
                      })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/home/odd/IndicateursOdd.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/home/odd/IndicateursOdd.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndicateursOdd_vue_vue_type_template_id_262fe2f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true& */ "./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true&");
/* harmony import */ var _IndicateursOdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndicateursOdd.vue?vue&type=script&lang=js& */ "./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndicateursOdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndicateursOdd_vue_vue_type_template_id_262fe2f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndicateursOdd_vue_vue_type_template_id_262fe2f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "262fe2f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/odd/IndicateursOdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndicateursOdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IndicateursOdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndicateursOdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndicateursOdd_vue_vue_type_template_id_262fe2f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/odd/IndicateursOdd.vue?vue&type=template&id=262fe2f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndicateursOdd_vue_vue_type_template_id_262fe2f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndicateursOdd_vue_vue_type_template_id_262fe2f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);