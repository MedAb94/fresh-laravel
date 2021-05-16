(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_imagesBase64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/imagesBase64 */ "./resources/js/assets/imagesBase64.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Dashboard",
  data: function data() {
    return {
      tab: "tab-0",
      export_fields: {
        Num: "id",
        Intitule: "intitule",
        "Derniere valeur": {
          field: "valeurs",
          callback: function callback(value) {
            return value.length ? value[0].valeur : "non renseigné";
          }
        },
        "Dernier renseignement": {
          field: "valeurs",
          callback: function callback(value) {
            return value.length ? value[0].created_at.slice(0, 10) : "";
          }
        },
        "Valeur precedente": {
          field: "valeurs",
          callback: function callback(value) {
            return value.length > 1 ? value[1].valeur : "Indisponible";
          }
        },
        "Renseignement precedent": {
          field: "valeurs",
          callback: function callback(value) {
            return value.length > 1 ? value[1].created_at.slice(0, 10) : "";
          }
        }
      },
      filter: {
        strategie: [],
        levier: [],
        chantier: [],
        intervention: [],
        indicateur: []
      },
      requestFilteredData: {
        niveau: "Strategie",
        year: "Tout",
        strategie_id: [2],
        levier_id: [],
        chantier_id: [],
        intervention_id: [],
        indicateur_id: [],
        objectif_id: [],
        cds_id: []
      },
      dialog: false,
      dialogResult: false,
      generatingPdf: false,
      result: false,
      radioGroup: '',
      radioGroupResult: '',
      chartOptions: {
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ['Average Results']
      },
      chartOptions1: {
        chart: {
          height: 350,
          type: 'bar'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['Apples', 'Oranges', 'Strawberries'],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Valeurs'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      }
    };
  },
  components: {
    downloadExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    strategieChanged: function strategieChanged(e) {
      var _this = this;

      this.requestFilteredData.strategie_id = e.split("-")[0];
      this.dialog = true;
      this.$store.dispatch("fetchStrategieLeviers", this.requestFilteredData.strategie_id).then(function () {
        _this.$store.commit('setLeviers', _this.$store.getters.allLeviersStrategique);

        _this.dialog = false;
      })["catch"](function () {
        return _this.dialog = false;
      });
      this.fetchFilteredIndicateurs();
    },
    levierChanged: function levierChanged(e) {
      var _this2 = this;

      this.requestFilteredData.levier_id = [];
      e.map(function (i) {
        _this2.requestFilteredData.levier_id.push(i.split("-")[0]);
      });
      this.dialog = true;
      this.$store.dispatch("fetchLevierChantiers", this.requestFilteredData.levier_id).then(function () {
        _this2.$store.commit('setChantiers', _this2.$store.getters.levierChantiers);

        _this2.dialog = false;
      })["catch"](function () {
        return _this2.dialog = false;
      });
      this.fetchFilteredIndicateurs();
    },
    chantierChanged: function chantierChanged(e) {
      var _this3 = this;

      this.requestFilteredData.chantier_id = [];
      e.map(function (i) {
        _this3.requestFilteredData.chantier_id.push(i.split("-")[0]);
      });
      this.dialog = true;
      this.$store.dispatch("fetchChantierInterventions", this.requestFilteredData.chantier_id).then(function () {
        _this3.$store.commit('setInterventions', _this3.$store.getters.chantierInterventions);

        _this3.dialog = false;
      })["catch"](function () {
        return _this3.dialog = false;
      });
      this.fetchFilteredIndicateurs();
    },
    interventionChanged: function interventionChanged(e) {
      var _this4 = this;

      this.requestFilteredData.intervention_id = [];
      e.map(function (i) {
        _this4.requestFilteredData.intervention_id.push(i.split("-")[0]);
      });
      this.dialog = true;
      this.$store.dispatch("fetchInterventionIndicateurs", this.requestFilteredData.intervention_id).then(function () {
        _this4.$store.commit('setAllIndicateurs', _this4.$store.getters.allInterventionIndicateurs);

        _this4.dialog = false;
      })["catch"](function () {
        return _this4.dialog = false;
      });
    },
    indicateurChanged: function indicateurChanged(e) {
      var _this5 = this;

      this.requestFilteredData.indicateur_id = [];
      e.map(function (i) {
        _this5.requestFilteredData.indicateur_id.push(i.split("-")[0]);
      });
    },
    cdsChanged: function cdsChanged(e) {
      var _this6 = this;

      this.requestFilteredData.cds_id = [];
      e.map(function (i) {
        _this6.requestFilteredData.cds_id.push(i.split("-")[0]);
      });
      this.dialog = true;
      this.$store.dispatch("fetchCdssInterventions", this.requestFilteredData.cds_id).then(function () {
        _this6.$store.commit('setInterventions', _this6.$store.getters.cdsInterventions);

        _this6.dialog = false;
      })["catch"](function () {
        return _this6.dialog = false;
      });
      this.fetchFilteredIndicateurs().then(function () {
        return _this6.dialog = false;
      });
    },
    selectAllInds: function selectAllInds() {
      var _this7 = this;

      this.filter.indicateur = this.indicateurs;
      this.requestFilteredData.indicateur_id = [];
      this.filter.indicateur.map(function (i) {
        _this7.requestFilteredData.indicateur_id.push(i.split("-")[0]);
      });
    },
    selectAllIntervs: function selectAllIntervs() {
      var _this8 = this;

      this.filter.intervention = this.interventions;
      this.requestFilteredData.intervention_id = [];
      this.filter.intervention.map(function (i) {
        _this8.requestFilteredData.intervention_id.push(i.split("-")[0]);
      });
    },
    search: function search() {
      var _this9 = this;

      this.$store.dispatch("dashboardSearch", this.requestFilteredData).then(function () {
        _this9.dialogResult = true;
        console.log(_this9.dialogResult);
      });
    },
    valueToPercent: function valueToPercent(value, max) {
      return value * 100 / max;
    },
    fetchFilteredIndicateurs: function fetchFilteredIndicateurs() {
      this.$store.dispatch("fetchFilteredIndicateurs", this.requestFilteredData);
    },
    exportAsPdf: function exportAsPdf() {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]();
      doc.addImage(_assets_imagesBase64__WEBPACK_IMPORTED_MODULE_4__["default"].entete, 'JPEG', 0, 0, 220, 25);
      doc.addImage(_assets_imagesBase64__WEBPACK_IMPORTED_MODULE_4__["default"].logo, 'JPEG', 85, 30, 50, 18);
      doc.autoTable({
        html: '#table-to-export',
        startY: 50
      }); // doc.autoTable({
      //     head: [
      //         [
      //             'Intitule', 'Derniere valeur', 'Dernier renseignement', 'Valeur precedente', 'Renseignement precedent'
      //         ]
      //     ],
      //     body:
      //         this.dashboardResult.indis.map(e => [
      //             e.intitule, e.valeurs.length ? e.valeurs[0].valeur : '', e.valeurs.length ? e.valeurs[0].date : '', e.valeurs.length && e.valeurs.length > 1 ? e.valeurs[1].valeur : '', e.valeurs.length && e.valeurs.length > 1 ? e.valeurs[1].date : ''
      //         ])
      //     ,
      //     startY: 50
      //
      // })

      doc.setTextColor(150);
      doc.setFontSize(10);
      doc.text("Developpé par SoftConsult", 150, 285);
      doc.save("Ramo.pdf");
    },
    imprimer: function imprimer() {
      var printContents = document.getElementById("dash-to-export").innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      location.reload(); // html2pdf(this.$refs.document, {
      //     margin: 1,
      //     filename: 'document.pdf',
      //     image: {type: 'jpeg', quality: 0.98},
      //     html2canvas: {dpi: 192, letterRendering: true},
      //     jsPDF: {unit: 'in', format: 'letter', orientation: 'landscape'}
      // })
      // this.$refs.html2Pdf.generatePdf()
    },
    hasStartedGeneration: function hasStartedGeneration() {
      this.dialog = true;
    },
    hasGenerated: function hasGenerated() {
      this.dialog = false;
    },
    randomAffichage: function randomAffichage(n) {
      n = Number(n); // return Math.floor(Math.random() * Math.floor(4));

      return !!(n && !(n % 2));
    },
    reverseArray: function reverseArray(arr) {
      return arr.reverse();
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["allIndicateurs", "ListOfAllIndicateurs", "allThemes", "allStrategies", "allLeviers", "allChantiers", "allInterventions", "allCounts", "dashboardResult", "dashboardIndicateurs", "allCdss", "allObjectifs"])), {}, {
    objectifs: function objectifs() {
      var cams = [];
      var items = this.allObjectifs;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].objectif);
      }

      return cams;
    },
    themes: function themes() {
      var cams = [];
      var items = this.allThemes;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    },
    strategies: function strategies() {
      var cams = [];
      var items = this.allStrategies;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    },
    leviers: function leviers() {
      var cams = [];
      var items = this.allLeviers;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    },
    chantiers: function chantiers() {
      var cams = [];
      var items = this.allChantiers;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    },
    interventions: function interventions() {
      var cams = [];
      var items = this.allInterventions;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    },
    indicateurs: function indicateurs() {
      var cams = [];
      var items = this.ListOfAllIndicateurs;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].intitule);
      }

      return cams;
    },
    cdss: function cdss() {
      var cams = [];
      var items = this.allCdss;

      for (var o in items) {
        cams.push(items[o].id + "-" + items[o].libelle);
      }

      return cams;
    },
    valeuresCibles: function valeuresCibles() {
      return {
        chart: {
          width: "100%"
        },
        series: [18, 40, 20, 10],
        chartOptions: {
          legend: {
            position: "bottom"
          },
          labels: ["Masculin", "Féminin", "Rural", "Urbain"],
          colors: ["#5e5ce6", "#ff5252", "#ff8a48", "#304156"],
          grid: {
            padding: {
              top: 20,
              right: 0,
              bottom: 20,
              left: 0
            }
          }
        }
      };
    },
    affichage0: function affichage0() {
      return Math.floor(Math.random() * Math.floor(4));
    },
    years: function years() {
      var currYear = new Date().getFullYear();
      var years = [];

      for (var i = 2014; i < currYear; i++) {
        years.push(i);
      }

      return years;
    }
  }),
  created: function created() {
    var _this10 = this;

    this.$store.dispatch('fetchIndicateurs').then(function () {
      return _this10.dialog = false;
    })["catch"](function () {
      return _this10.dialog = false;
    });
    this.$store.dispatch('fetchStrategies');
    this.$store.dispatch('fetchLeviers');
    this.$store.dispatch('fetchChantiers');
    this.$store.dispatch('fetchInterventions');
    this.$store.dispatch('fetchThemes');
    this.$store.dispatch('fetchCounts');
    this.$store.dispatch('fetchDashboardIndicateurs');
    this.$store.dispatch('fetchCdss');
    this.$store.dispatch('fetchObjectifs');
    this.$store.dispatch('fetchAllIndicateurs');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nthead td[data-v-2c15e057] {\n    height: 29px !important;\n    text-align: center !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=template&id=2c15e057&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=template&id=2c15e057&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("v-container", [
    _c("h3", { staticClass: "text-center" }, [
      _vm._v("\n        Rapport Annuel de Mise en Œuvre de la SCAPP\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "white" }, [
      _c("div", { staticClass: "border rounded mt-5" }, [
        _c("div", { staticClass: "bg-light py-3 px-3 rounded" }, [
          _c("strong", [_vm._v("Tableau de bord personnalisé")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "pa-8 " },
          [
            _c(
              "v-row",
              [
                _c("v-col", { attrs: { cols: "12", lg: "6", md: "6" } }, [
                  1
                    ? _c(
                        "div",
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.strategies.filter(function(s) {
                                return s !== "1-ODD"
                              }),
                              dense: "",
                              outlined: "",
                              label: "Strategie",
                              "no-data-text": _vm.$t("filtre.no_data")
                            },
                            on: { change: _vm.strategieChanged },
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
                    : undefined
                ]),
                _vm._v(" "),
                _vm.requestFilteredData.niveau === "Strategie" &&
                _vm.requestFilteredData.strategie_id == 1
                  ? _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "6", md: "6" } },
                      [
                        _c("v-select", {
                          staticClass: "ma-0 pa-0",
                          attrs: {
                            items: _vm.objectifs,
                            dense: "",
                            outlined: "",
                            multiple: "",
                            label: "Objectif",
                            "no-data-text": _vm.$t("filtre.no_data")
                          },
                          on: { change: _vm.objectifChanged },
                          model: {
                            value: _vm.filter.objectif,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "objectif", $$v)
                            },
                            expression: "filter.objectif"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                 true && _vm.requestFilteredData.strategie_id == 2
                  ? _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "6", md: "6" } },
                      [
                        _c("v-select", {
                          staticClass: "ma-0 pa-0",
                          attrs: {
                            items: _vm.leviers,
                            dense: "",
                            outlined: "",
                            multiple: "",
                            label: "Levier",
                            "no-data-text": _vm.$t("filtre.no_data")
                          },
                          on: { change: _vm.levierChanged },
                          model: {
                            value: _vm.filter.levier,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "levier", $$v)
                            },
                            expression: "filter.levier"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                 true && _vm.requestFilteredData.strategie_id == 2
                  ? _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "6", md: "6" } },
                      [
                        _c("v-select", {
                          staticClass: "ma-0 pa-0",
                          attrs: {
                            items: _vm.chantiers,
                            dense: "",
                            outlined: "",
                            multiple: "",
                            label: "Chantier",
                            "no-data-text": _vm.$t("filtre.no_data")
                          },
                          on: { change: _vm.chantierChanged },
                          model: {
                            value: _vm.filter.chantier,
                            callback: function($$v) {
                              _vm.$set(_vm.filter, "chantier", $$v)
                            },
                            expression: "filter.chantier"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c(
                    "div",
                    [
                      _c(
                        "div",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "primary",
                              attrs: { "x-small": "" },
                              on: { click: _vm.selectAllIntervs }
                            },
                            [_vm._v("Tout")]
                          ),
                          _vm._v(" "),
                          _vm.filter.intervention.length > 1
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "secondary",
                                  attrs: { "x-small": "" },
                                  on: {
                                    click: function($event) {
                                      _vm.filter.intervention = []
                                      _vm.requestFilteredData.intervention_id = []
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Vider\n                                "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "ma-0 pa-0",
                        attrs: {
                          items: _vm.interventions,
                          dense: "",
                          outlined: "",
                          multiple: "",
                          label: "Intervention",
                          "no-data-text": _vm.$t("filtre.no_data")
                        },
                        on: { change: _vm.interventionChanged },
                        model: {
                          value: _vm.filter.intervention,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "intervention", $$v)
                          },
                          expression: "filter.intervention"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c(
                    "div",
                    [
                      _c(
                        "div",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "primary",
                              attrs: { "x-small": "" },
                              on: { click: _vm.selectAllInds }
                            },
                            [_vm._v("Tout")]
                          ),
                          _vm._v(" "),
                          _vm.filter.indicateur.length > 1
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "secondary",
                                  attrs: { "x-small": "" },
                                  on: {
                                    click: function($event) {
                                      _vm.filter.indicateur = []
                                      _vm.requestFilteredData.indicateur_id = []
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Vider\n                                "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "ma-0 pa-0",
                        attrs: {
                          items: _vm.indicateurs,
                          dense: "",
                          outlined: "",
                          multiple: "",
                          label: "Indicateur",
                          "no-data-text": _vm.$t("filtre.no_data")
                        },
                        on: { change: _vm.indicateurChanged },
                        model: {
                          value: _vm.filter.indicateur,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "indicateur", $$v)
                          },
                          expression: "filter.indicateur"
                        }
                      })
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-right" },
              [
                _c(
                  "v-btn",
                  { staticClass: "primary", on: { click: _vm.search } },
                  [_vm._v("Valider")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "text-center dialogStatistiques " },
      [
        _c(
          "v-dialog",
          {
            staticClass: "elevation-1",
            model: {
              value: _vm.dialogResult,
              callback: function($$v) {
                _vm.dialogResult = $$v
              },
              expression: "dialogResult"
            }
          },
          [
            _c(
              "v-container",
              { staticClass: "white" },
              [
                _c(
                  "div",
                  { staticClass: "text-right" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { text: "" },
                        on: {
                          click: function($event) {
                            _vm.dialogResult = false
                          }
                        }
                      },
                      [_vm._v("X")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-tabs",
                  {
                    attrs: { centered: "" },
                    model: {
                      value: _vm.tab,
                      callback: function($$v) {
                        _vm.tab = $$v
                      },
                      expression: "tab"
                    }
                  },
                  [
                    _c("v-tabs-slider"),
                    _vm._v(" "),
                    _c("v-tab", { attrs: { href: "#tab-0" } }, [
                      _vm._v(
                        "\n                        Tableau\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-tab", { attrs: { href: "#tab-1" } }, [
                      _vm._v(
                        "\n                        Graphes\n                    "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-tabs-items",
                  {
                    model: {
                      value: _vm.tab,
                      callback: function($$v) {
                        _vm.tab = $$v
                      },
                      expression: "tab"
                    }
                  },
                  [
                    _c(
                      "v-tab-item",
                      { attrs: { value: "tab-0" } },
                      [
                        _c("section", { staticClass: "pdf-item" }, [
                          _c(
                            "div",
                            {
                              staticClass: "headerMr green",
                              staticStyle: {
                                border: "10px solid red !important",
                                "border-left": "none",
                                "border-right": "none"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        " text-center white--text my-0",
                                      attrs: {
                                        cols: "12",
                                        xl: "5",
                                        lg: "5",
                                        md: "5",
                                        sm: "12",
                                        xs: "12"
                                      }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                            Ministère des affaires économiques et de la promotion des\n                                            secteurs productifs\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                                            Direction Générale des politiques et strategies de developpement\n                                        "
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center my-0",
                                      attrs: {
                                        cols: "12",
                                        xl: "2",
                                        lg: "2",
                                        md: "2",
                                        sm: "12",
                                        xs: "12"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "shrink",
                                        staticStyle: { "max-height": "80px" },
                                        attrs: {
                                          alt: "Logo",
                                          src: __webpack_require__(/*! ../../../assets/logo.png */ "./resources/js/assets/logo.png")
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        " text-center white--text my-0",
                                      staticStyle: {
                                        "font-family": "'Louguiya'"
                                      },
                                      attrs: {
                                        cols: "12",
                                        xl: "5",
                                        lg: "5",
                                        md: "5",
                                        sm: "12",
                                        xs: "12"
                                      }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                            وزارة الشؤون الاقتصادية وترقية القطاعات الانتاجية\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                                            المديرية العامة للسياسات واستراتيجيات التنمية\n                                        "
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass: "w-100",
                            attrs: {
                              id: "table-to-export",
                              border: "1",
                              bordercolor: "black"
                            }
                          },
                          [
                            _c("thead", { staticClass: "blue white--text" }, [
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "border border-white border-bottom-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Code ODD\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "border border-white border-bottom-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Indicateurs\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "text-center border border-white",
                                    attrs: { colspan: _vm.years.length }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Réalisation\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "border border-white  border-bottom-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Cible\n                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "py-0" },
                                [
                                  _c("td", {
                                    staticClass:
                                      "border border-top-0 border-white"
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass:
                                      "border border-top-0 border-white"
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass:
                                      "border border-top-0 border-white"
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.years, function(y) {
                                    return _c(
                                      "td",
                                      {
                                        key: y,
                                        staticClass: "border border-white"
                                      },
                                      [_vm._v(" " + _vm._s(y))]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass:
                                      "border border-top-0 border-white"
                                  })
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.dashboardResult.indis, function(i) {
                                return _c(
                                  "tr",
                                  [
                                    _c("td", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            i.cible
                                              ? i.cibe.id +
                                                  "." +
                                                  i.cible.objectf_id
                                              : ""
                                          )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(" " + _vm._s(i.intitule))
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.years, function(y) {
                                      return _c("td", { key: y }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              i.valeurs &&
                                                i.valeurs.filter(function(v) {
                                                  return v.date.includes(y)
                                                }).length
                                                ? i.valeurs.filter(function(v) {
                                                    return v.date.includes(y)
                                                  })[0].valeur
                                                : ""
                                            ) +
                                            "\n                                "
                                        )
                                      ])
                                    }),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "border-right" }, [
                                      _vm._v(" " + _vm._s(i.valeur_cible))
                                    ])
                                  ],
                                  2
                                )
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("v-divider")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tab-item",
                      { attrs: { value: "tab-1" } },
                      [
                        _c("section", { staticClass: "pdf-item" }, [
                          _c(
                            "div",
                            {
                              staticClass: "headerMr green",
                              staticStyle: {
                                border: "10px solid red !important",
                                "border-left": "none",
                                "border-right": "none"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { attrs: { align: "center" } },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        " text-center white--text my-0",
                                      attrs: {
                                        cols: "12",
                                        xl: "5",
                                        lg: "5",
                                        md: "5",
                                        sm: "12",
                                        xs: "12"
                                      }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                            Ministère des affaires économiques et de la promotion des\n                                            secteurs productifs\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                                            Direction Générale des politiques et strategies de developpement\n                                        "
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center my-0",
                                      attrs: {
                                        cols: "12",
                                        xl: "2",
                                        lg: "2",
                                        md: "2",
                                        sm: "12",
                                        xs: "12"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "shrink",
                                        staticStyle: { "max-height": "80px" },
                                        attrs: {
                                          alt: "Logo",
                                          src: __webpack_require__(/*! ../../../assets/logo.png */ "./resources/js/assets/logo.png")
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        " text-center white--text my-0",
                                      staticStyle: {
                                        "font-family": "'Louguiya'"
                                      },
                                      attrs: {
                                        cols: "12",
                                        xl: "5",
                                        lg: "5",
                                        md: "5",
                                        sm: "12",
                                        xs: "12"
                                      }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            "\n                                            وزارة الشؤون الاقتصادية وترقية القطاعات الانتاجية\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                                            المديرية العامة للسياسات واستراتيجيات التنمية\n                                        "
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-row",
                          {
                            staticClass: "indicateurs-grid",
                            attrs: {
                              justify: "space-between",
                              align: "stretch"
                            }
                          },
                          _vm._l(_vm.dashboardResult.indis, function(i) {
                            return _c(
                              "v-col",
                              { attrs: { cols: "12", md: "4", lg: "4" } },
                              [
                                !i.valeurs.length
                                  ? _c(
                                      "v-card",
                                      {
                                        staticClass: "text-center",
                                        attrs: {
                                          flat: "",
                                          "min-height": "100%"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-card-title",
                                          { staticClass: "blue white--text" },
                                          [
                                            _vm._v(
                                              "\n                                        Indicateur " +
                                                _vm._s(i.id) +
                                                " : " +
                                                _vm._s(i.intitule) +
                                                "\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "fill-height",
                                                attrs: {
                                                  cols: "12",
                                                  align: "center",
                                                  justify: "center"
                                                }
                                              },
                                              [
                                                _c(
                                                  "h5",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Aucun renseignement"
                                                    )
                                                  ]
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
                                i.valeurs.length > 0
                                  ? _c(
                                      "v-card",
                                      {
                                        staticClass: "text-center",
                                        attrs: {
                                          flat: "",
                                          "min-height": "100%"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-card-title",
                                          { staticClass: "blue white--text" },
                                          [
                                            _vm._v(
                                              "\n                                        Indicateur " +
                                                _vm._s(i.id) +
                                                " : " +
                                                _vm._s(i.intitule) +
                                                "\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-row",
                                              [
                                                !i.affichage || i.affichage == 1
                                                  ? _c(
                                                      "v-col",
                                                      { attrs: { cols: "12" } },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "text-center"
                                                          },
                                                          [
                                                            _c(
                                                              "v-radio-group",
                                                              {
                                                                staticClass:
                                                                  "d-print-none text-center",
                                                                attrs: {
                                                                  row: ""
                                                                },
                                                                model: {
                                                                  value:
                                                                    i.affichage,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      i,
                                                                      "affichage",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "i.affichage"
                                                                }
                                                              },
                                                              [
                                                                _c("v-radio", {
                                                                  attrs: {
                                                                    label:
                                                                      "Valeur cible",
                                                                    value: "1"
                                                                  }
                                                                }),
                                                                _vm._v(" "),
                                                                _c("v-radio", {
                                                                  attrs: {
                                                                    label:
                                                                      "Histogramme",
                                                                    value: "2"
                                                                  }
                                                                }),
                                                                _vm._v(" "),
                                                                _c("v-radio", {
                                                                  attrs: {
                                                                    label:
                                                                      "Line chart",
                                                                    value: "3"
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("apexchart", {
                                                          attrs: {
                                                            type: "radialBar",
                                                            options:
                                                              _vm.chartOptions,
                                                            series: [
                                                              _vm.valueToPercent(
                                                                i.valeurs[
                                                                  i.valeurs
                                                                    .length - 1
                                                                ].valeur,
                                                                i.valeur_cible
                                                              )
                                                            ]
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "mx-auto",
                                                            staticStyle: {
                                                              width: "150px"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "float-left"
                                                              },
                                                              [_vm._v("0")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "float-right"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    i.valeur_cible
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                i.affichage == 2
                                                  ? _c(
                                                      "v-col",
                                                      { attrs: { cols: "12" } },
                                                      [
                                                        _c("div", [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              _c(
                                                                "v-radio-group",
                                                                {
                                                                  staticClass:
                                                                    "d-print-none text-center",
                                                                  attrs: {
                                                                    row: ""
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      i.affichage,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        i,
                                                                        "affichage",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "i.affichage"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-radio",
                                                                    {
                                                                      attrs: {
                                                                        label:
                                                                          "Valeur cible",
                                                                        value:
                                                                          "1"
                                                                      }
                                                                    }
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-radio",
                                                                    {
                                                                      attrs: {
                                                                        label:
                                                                          "Histogramme",
                                                                        value:
                                                                          "2"
                                                                      }
                                                                    }
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-radio",
                                                                    {
                                                                      attrs: {
                                                                        label:
                                                                          "Line chart",
                                                                        value:
                                                                          "3"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "text-right pr-12 red--text font-weight-bold"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        Valeur cible :" +
                                                                  _vm._s(
                                                                    i.valeur_cible
                                                                  ) +
                                                                  " "
                                                              )
                                                            ]
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("apexchart", {
                                                          attrs: {
                                                            type: "bar",
                                                            height: "200",
                                                            options: {
                                                              chart: {
                                                                height: 200,
                                                                type: "bar"
                                                              },
                                                              plotOptions: {
                                                                bar: {
                                                                  columnWidth:
                                                                    "50%",
                                                                  endingShape:
                                                                    "rounded"
                                                                }
                                                              },
                                                              dataLabels: {
                                                                enabled: false
                                                              },
                                                              stroke: {
                                                                width: 2
                                                              },
                                                              grid: {
                                                                row: {
                                                                  colors: [
                                                                    "#fff",
                                                                    "#f2f2f2"
                                                                  ]
                                                                }
                                                              },
                                                              xaxis: {
                                                                labels: {
                                                                  rotate: -45
                                                                },
                                                                categories: i.valeurs.map(
                                                                  function(e) {
                                                                    return e.date
                                                                  }
                                                                ),
                                                                tickPlacement:
                                                                  "on"
                                                              },
                                                              yaxis: {
                                                                title: {
                                                                  text:
                                                                    "Valeurs"
                                                                }
                                                              },
                                                              fill: {
                                                                type:
                                                                  "gradient",
                                                                gradient: {
                                                                  shade:
                                                                    "light",
                                                                  type:
                                                                    "horizontal",
                                                                  shadeIntensity: 0,
                                                                  gradientToColors: undefined,
                                                                  inverseColors: true,
                                                                  opacityFrom: 1,
                                                                  opacityTo: 1,
                                                                  stops: [
                                                                    50,
                                                                    0,
                                                                    100
                                                                  ]
                                                                }
                                                              }
                                                            },
                                                            series: [
                                                              {
                                                                name: "Valeur",
                                                                data: i.valeurs.map(
                                                                  function(e) {
                                                                    return e.valeur
                                                                  }
                                                                )
                                                              }
                                                            ]
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                i.affichage == 3
                                                  ? _c(
                                                      "v-col",
                                                      { attrs: { cols: "12" } },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "text-center"
                                                          },
                                                          [
                                                            _c(
                                                              "v-radio-group",
                                                              {
                                                                staticClass:
                                                                  "d-print-none text-center",
                                                                attrs: {
                                                                  row: ""
                                                                },
                                                                model: {
                                                                  value:
                                                                    i.affichage,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      i,
                                                                      "affichage",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "i.affichage"
                                                                }
                                                              },
                                                              [
                                                                _c("v-radio", {
                                                                  attrs: {
                                                                    label:
                                                                      "Valeur cible",
                                                                    value: "1"
                                                                  }
                                                                }),
                                                                _vm._v(" "),
                                                                _c("v-radio", {
                                                                  attrs: {
                                                                    label:
                                                                      "Histogramme",
                                                                    value: "2"
                                                                  }
                                                                }),
                                                                _vm._v(" "),
                                                                _c("v-radio", {
                                                                  attrs: {
                                                                    label:
                                                                      "Line chart",
                                                                    value: "3"
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("apexchart", {
                                                          staticClass:
                                                            "mx-auto",
                                                          attrs: {
                                                            type: "line",
                                                            height: "350",
                                                            options: {
                                                              chart: {
                                                                type: "line",
                                                                height: 350,

                                                                toolbar: {
                                                                  show: false
                                                                }
                                                              },
                                                              dropShadow: {
                                                                enabled: true,
                                                                color: "#000",
                                                                top: 18,
                                                                left: 7,
                                                                blur: 10,
                                                                opacity: 1
                                                              },
                                                              colors: [
                                                                "#5d78cc"
                                                              ],
                                                              stroke: {
                                                                width: 7,
                                                                curve: "smooth"
                                                              },

                                                              xaxis: {
                                                                categories: i.valeurs.map(
                                                                  function(e) {
                                                                    return e.date
                                                                  }
                                                                ),
                                                                title: {
                                                                  text: ""
                                                                },
                                                                axisBorder: {
                                                                  show: false
                                                                }
                                                              },
                                                              yaxis: {
                                                                title: {
                                                                  text: ""
                                                                },
                                                                min: 0,
                                                                max: 100
                                                              },
                                                              markers: {
                                                                size: 5,
                                                                hover: {
                                                                  size: 7
                                                                }
                                                              },
                                                              grid: {
                                                                borderColor:
                                                                  "transparent",
                                                                row: {
                                                                  colors: [
                                                                    "transparent",
                                                                    "transparent"
                                                                  ], // takes an array which will be repeated on columns
                                                                  opacity: 0
                                                                }
                                                              },
                                                              legend: {
                                                                position: "top",
                                                                horizontalAlign:
                                                                  "right",
                                                                floating: true,
                                                                offsetY: -25,
                                                                offsetX: -5
                                                              }
                                                            },
                                                            series: [
                                                              {
                                                                name: "Valeurs",
                                                                data: i.valeurs.map(
                                                                  function(e) {
                                                                    return Number(
                                                                      e.valeur
                                                                    )
                                                                  }
                                                                )
                                                              }
                                                            ]
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
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
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c("v-divider")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-layout",
                  [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "download-excel",
                      {
                        staticClass: "btn btn-default",
                        attrs: {
                          data: _vm.dashboardResult.indis,
                          fields: _vm.export_fields,
                          worksheet: "Page_1",
                          name: "ramo.xls"
                        }
                      },
                      [
                        _c(
                          "v-btn",
                          { staticClass: "primary" },
                          [
                            _c("v-icon", { attrs: { color: "white" } }, [
                              _vm._v("mdi-download")
                            ]),
                            _vm._v(
                              "\n                            Excel\n                        "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "blue white--text mx-3 mt-2",
                        attrs: { text: "" },
                        on: { click: _vm.exportAsPdf }
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-download")
                        ]),
                        _vm._v(
                          "\n                        PDF\n                    "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "success white--text mx-3 mt-2",
                        attrs: { text: "" },
                        on: { click: _vm.imprimer }
                      },
                      [
                        _c("v-icon", { attrs: { color: "white" } }, [
                          _vm._v("mdi-printer")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "secondary white--text mt-2",
                        attrs: { text: "" },
                        on: {
                          click: function($event) {
                            _vm.dialogResult = false
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        Fermer\n                    "
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/dashboard/Ramo.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/dashboard/Ramo.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ramo_vue_vue_type_template_id_2c15e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ramo.vue?vue&type=template&id=2c15e057&scoped=true& */ "./resources/js/components/admin/dashboard/Ramo.vue?vue&type=template&id=2c15e057&scoped=true&");
/* harmony import */ var _Ramo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ramo.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/dashboard/Ramo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ramo_vue_vue_type_style_index_0_id_2c15e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css& */ "./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ramo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ramo_vue_vue_type_template_id_2c15e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ramo_vue_vue_type_template_id_2c15e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c15e057",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/dashboard/Ramo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/dashboard/Ramo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard/Ramo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ramo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_style_index_0_id_2c15e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=style&index=0&id=2c15e057&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_style_index_0_id_2c15e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_style_index_0_id_2c15e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_style_index_0_id_2c15e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_style_index_0_id_2c15e057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/admin/dashboard/Ramo.vue?vue&type=template&id=2c15e057&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/dashboard/Ramo.vue?vue&type=template&id=2c15e057&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_template_id_2c15e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ramo.vue?vue&type=template&id=2c15e057&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/dashboard/Ramo.vue?vue&type=template&id=2c15e057&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_template_id_2c15e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ramo_vue_vue_type_template_id_2c15e057_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);