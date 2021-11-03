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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _templates_AddTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/AddTask */ "./resources/js/components/templates/AddTask.vue");
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
//
//
//
//
//
//
//
//
//
//
//
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
      },
      visibleAddTask: false
    };
  },
  components: {
    AddTask: _templates_AddTask__WEBPACK_IMPORTED_MODULE_0__["default"]
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
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['getTasks'])), {}, {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AddTask.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AddTask.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: {
        name: '',
        date: '',
        time: '',
        comment: '',
        status: ''
      },
      addDisabled: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['getTasks', 'addTaskToDB'])), {}, {
    addTask: function addTask() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var task;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.addDisabled = true;
                task = {
                  name: _this.items.name,
                  date: _this.items.date,
                  time: _this.items.time,
                  comment: _this.items.comment,
                  status: _this.items.status
                };
                console.log('Добавлены в хранилище' + JSON.stringify(task));
                _context.next = 5;
                return _this.addTaskToDB({
                  task: task
                });

              case 5:
                _this.addDisabled = false;
                _this.items = {
                  name: '',
                  date: '',
                  time: '',
                  comment: '',
                  status: ''
                };

                _this.getTasks();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
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

/***/ "./resources/js/components/templates/AddTask.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/templates/AddTask.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddTask_vue_vue_type_template_id_1364ce15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTask.vue?vue&type=template&id=1364ce15& */ "./resources/js/components/templates/AddTask.vue?vue&type=template&id=1364ce15&");
/* harmony import */ var _AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTask.vue?vue&type=script&lang=js& */ "./resources/js/components/templates/AddTask.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddTask_vue_vue_type_template_id_1364ce15___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddTask_vue_vue_type_template_id_1364ce15___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templates/AddTask.vue"
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

/***/ "./resources/js/components/templates/AddTask.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/templates/AddTask.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddTask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AddTask.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/templates/AddTask.vue?vue&type=template&id=1364ce15&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/templates/AddTask.vue?vue&type=template&id=1364ce15& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_template_id_1364ce15___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_template_id_1364ce15___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTask_vue_vue_type_template_id_1364ce15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddTask.vue?vue&type=template&id=1364ce15& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AddTask.vue?vue&type=template&id=1364ce15&");


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
    "b-form",
    [
      _c(
        "b-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "b-navbar",
            [
              _c(
                "b-navbar-nav",
                [
                  _c(
                    "b-nav-item",
                    {
                      on: {
                        click: function ($event) {
                          _vm.visibleAddTask = !_vm.visibleAddTask
                        },
                      },
                    },
                    [
                      _c("b-icon-plus-circle"),
                      _vm._v(
                        "\n                    Добавить задачу\n                "
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("add-task", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.visibleAddTask,
                expression: "visibleAddTask",
              },
            ],
          }),
          _vm._v(" "),
          _vm.tasks == ""
            ? _c(
                "b-card",
                {
                  staticClass: "text-center",
                  attrs: { "bg-variant": "light" },
                },
                [
                  _c("b-card-text", { attrs: { variant: "light" } }, [
                    _vm._v("Нет задач"),
                  ]),
                ],
                1
              )
            : _c("b-table", {
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
                          "\n            " +
                            _vm._s(row.value) +
                            "\n            "
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
                                  "\n                        Сохранить\n                    "
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AddTask.vue?vue&type=template&id=1364ce15&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/templates/AddTask.vue?vue&type=template&id=1364ce15& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "b-form",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.addDisabled,
          expression: "addDisabled",
        },
      ],
    },
    [
      _c(
        "b-card",
        { staticClass: "text-center", attrs: { "bg-variant": "light" } },
        [
          _vm._l(_vm.items, function (value, key) {
            return _c(
              "b-row",
              { key: key, staticClass: "my-1" },
              [
                _c("b-col", { attrs: { sm: "2" } }, [
                  _c("label", { attrs: { for: "input-small" } }, [
                    _vm._v(_vm._s(key) + ":"),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { sm: "10" } },
                  [
                    _c("b-form-input", {
                      attrs: { id: "input-small", size: "sm", value: value },
                      model: {
                        value: _vm.items[key],
                        callback: function ($$v) {
                          _vm.$set(_vm.items, key, $$v)
                        },
                        expression: "items[key]",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: { variant: "outline-secondary" },
              on: {
                click: function ($event) {
                  return _vm.addTask()
                },
              },
            },
            [_vm._v("Сохранить")]
          ),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);