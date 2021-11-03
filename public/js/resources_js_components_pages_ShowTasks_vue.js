"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_ShowTasks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/ShowTasks.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/ShowTasks.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: [{
        key: 'name',
        label: 'Задача',
        sortable: true
      }, {
        key: 'date',
        label: 'Дата',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'time',
        label: 'Время выполения',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'comment',
        label: 'Комментарий',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'status',
        label: 'Статус',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'actions',
        label: '',
        "class": 'text-center '
      }],
      items: {
        name: '',
        date: '',
        time: '',
        comment: '',
        status: ''
      }
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    },
    tasks: function tasks() {
      return this.$store.state.tasks;
    }
  },
  created: function created() {
    this.getTasks();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['getTasks'])), {}, {
    deleteTask: function deleteTask(task) {
      this.$store.dispatch('deleteTaskFromDB', {
        task: task
      });
      this.getTasks();
    },
    changeField: function changeField(task) {
      task._showDetails = false;
      this.$store.dispatch('changeTaskFromDB', {
        task: task
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/components/pages/ShowTasks.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pages/ShowTasks.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowTasks_vue_vue_type_template_id_37f8d76b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowTasks.vue?vue&type=template&id=37f8d76b& */ "./resources/js/components/pages/ShowTasks.vue?vue&type=template&id=37f8d76b&");
/* harmony import */ var _ShowTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowTasks.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/ShowTasks.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowTasks_vue_vue_type_template_id_37f8d76b___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowTasks_vue_vue_type_template_id_37f8d76b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/ShowTasks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/ShowTasks.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/ShowTasks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowTasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/ShowTasks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/ShowTasks.vue?vue&type=template&id=37f8d76b&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/ShowTasks.vue?vue&type=template&id=37f8d76b& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTasks_vue_vue_type_template_id_37f8d76b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTasks_vue_vue_type_template_id_37f8d76b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowTasks_vue_vue_type_template_id_37f8d76b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowTasks.vue?vue&type=template&id=37f8d76b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/ShowTasks.vue?vue&type=template&id=37f8d76b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/ShowTasks.vue?vue&type=template&id=37f8d76b&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/ShowTasks.vue?vue&type=template&id=37f8d76b& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c(
        "b-container",
        { attrs: { fluid: "" } },
        [
          _c("b-table", {
            attrs: {
              items: _vm.tasks,
              fields: _vm.fields,
              "show-empty": "",
              small: "",
            },
            scopedSlots: _vm._u([
              {
                key: "cell(name)",
                fn: function (row) {
                  return [
                    _vm._v(
                      "\n            " + _vm._s(row.value) + "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(actions)",
                fn: function (row) {
                  return [
                    _c(
                      "b-button",
                      {
                        attrs: { size: "sm" },
                        on: { click: row.toggleDetails },
                      },
                      [_c("b-icon-pencil")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-1",
                        attrs: { size: "sm" },
                        on: {
                          click: function ($event) {
                            return _vm.deleteTask(row.item)
                          },
                        },
                      },
                      [_c("b-icon-basket")],
                      1
                    ),
                  ]
                },
              },
              {
                key: "row-details",
                fn: function (row) {
                  return [
                    _c(
                      "b-card",
                      [
                        _vm._l(row.item, function (value, key) {
                          return _c(
                            "b-row",
                            { key: key, staticClass: "my-1" },
                            [
                              key !== "id" && key !== "_showDetails"
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-col", { attrs: { sm: "2" } }, [
                                        _c(
                                          "label",
                                          { attrs: { for: "input-small" } },
                                          [_vm._v(_vm._s(key) + ":")]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { sm: "10" } },
                                        [
                                          _c("b-form-input", {
                                            attrs: {
                                              id: "input-small",
                                              size: "sm",
                                              value: value,
                                            },
                                            model: {
                                              value: row.item[key],
                                              callback: function ($$v) {
                                                _vm.$set(row.item, key, $$v)
                                              },
                                              expression: "row.item[key]",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "mr-2",
                            attrs: { size: "sm" },
                            on: {
                              click: function ($event) {
                                return _vm.changeField(row.item)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                        Сохранить изменения\n                    "
                            ),
                          ]
                        ),
                      ],
                      2
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);