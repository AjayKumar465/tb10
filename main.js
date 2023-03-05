(self["webpackChunkthebest10p_web"] = self["webpackChunkthebest10p_web"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'thebest10p-web';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breabcrumb.module */ 3616);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ 3529);
/* harmony import */ var _services_theb10_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/theb10.service */ 2735);
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/views.module */ 5397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_services_theb10_service__WEBPACK_IMPORTED_MODULE_4__.TheB10ProductsService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _routes__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _views_views_module__WEBPACK_IMPORTED_MODULE_5__.ViewesModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _routes__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _views_views_module__WEBPACK_IMPORTED_MODULE_5__.ViewesModule]
  });
})();

/***/ }),

/***/ 3616:
/*!*************************************************!*\
  !*** ./src/app/breadcrumb/breabcrumb.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": () => (/* binding */ BreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb */ 6085);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class BreadcrumbModule {}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || BreadcrumbModule)();
};
BreadcrumbModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: BreadcrumbModule
});
BreadcrumbModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
    declarations: [_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule],
    exports: [_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent]
  });
})();

/***/ }),

/***/ 6085:
/*!******************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function BreadcrumbComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pageTitle$);
  }
}
;
class BreadcrumbComponent {
  constructor(activatedRoute, router, dialogModel) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.dialogModel = dialogModel;
    this.breadcrumbs$ = [];
    this.data = {};
    this.breadcrumbs$ = this.buildBreadCrumb(this.activatedRoute.root);
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
        return;
      }
      this.breadcrumbs$ = this.buildBreadCrumb(this.activatedRoute.root);
    });
    // Build your breadcrumb starting with the root route of your current activated route
  }

  buildBreadCrumb(route, url = '', breadcrumbs = []) {
    // If no routeConfig is avalailable we are on the root path
    if (route) {
      const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : '';
      this.pageTitle$ = route.routeConfig ? route.routeConfig.data['title'] : '';
      this.pageHelpText$ = route.routeConfig ? route.routeConfig.data['helpText'] : '';
      const path = route.routeConfig ? route.routeConfig.path : '';
      var queryParams;
      const paramsData = route.queryParams.subscribe(params => {
        if (typeof params == 'object') queryParams = params;
      });
      // In the routeConfig the complete path is not available,
      // so we rebuild it each time
      const nextUrl = `${url}${path}/`;
      const breadcrumb = {
        label: label,
        url: nextUrl
      };
      const newBreadcrumbs = [...breadcrumbs, breadcrumb];
      if (route.firstChild) {
        // If we are not on our current path yet,
        // there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
      }
      var breadCrumbs = [];
      lodash__WEBPACK_IMPORTED_MODULE_0__.forEach(newBreadcrumbs, function (item, index) {
        if (item.label == undefined || item.label == '') {} else {
          item.queryParams = {};
          breadCrumbs.push(item);
        }
      });
      if (queryParams != undefined) {
        breadCrumbs = this.prepareUrl(queryParams, breadCrumbs);
      }
      return breadCrumbs;
    }
  }
  prepareUrl(queryParams, breadCrumbs) {
    var prepareUrlData = breadCrumbs[breadCrumbs.length - 1];
    breadCrumbs[breadCrumbs.length - 1].queryParams = queryParams;
    return breadCrumbs;
  }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog));
};
BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  decls: 1,
  vars: 1,
  consts: [["class", "breadcrumb", 4, "ngIf"], [1, "breadcrumb"], [1, "row", "mx-0", "w-100"], [1, "col-9", "px-0", "my-auto"], [1, "font-weight-bold", "m-0", "fs-18"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 5, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageTitle$);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


































class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule],
    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__.MatTreeModule]
  });
})();

/***/ }),

/***/ 1559:
/*!**********************************************!*\
  !*** ./src/app/routes/app-routing-loader.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCustomPreloader": () => (/* binding */ AppCustomPreloader)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AppCustomPreloader {
  preload(route, load) {
    return route.data && route.data['preload'] ? load() : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
  }
}
AppCustomPreloader.ɵfac = function AppCustomPreloader_Factory(t) {
  return new (t || AppCustomPreloader)();
};
AppCustomPreloader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AppCustomPreloader,
  factory: AppCustomPreloader.ɵfac
});

/***/ }),

/***/ 8788:
/*!**************************************!*\
  !*** ./src/app/routes/app.routes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/blogs/blogs.component */ 9614);
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/home/home.component */ 9470);
/* harmony import */ var _views_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/layout */ 9149);
/* harmony import */ var _views_product_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/product/product-details.component */ 7166);
/* harmony import */ var _app_routing_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing-loader */ 1559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
  data: {
    title: ''
  }
}, {
  path: '',
  component: _views_layout__WEBPACK_IMPORTED_MODULE_2__.FullLayoutComponent,
  data: {
    title: 'Home',
    breadcrumb: 'Home'
  },
  children: [{
    path: 'home',
    component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
    data: {
      title: 'home',
      breadcrumb: 'Home',
      preload: true
    }
  }, {
    path: 'product',
    component: _views_product_product_details_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailsComponent,
    data: {
      title: 'Product Details View',
      breadcrumb: 'Product Details View',
      preload: true
    }
  }, {
    path: 'blog/all',
    component: _views_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_0__.BlogsComponent,
    data: {
      title: 'Blogs',
      breadcrumb: 'Blogs',
      preload: true
    }
  }]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [_app_routing_loader__WEBPACK_IMPORTED_MODULE_4__.AppCustomPreloader],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 3529:
/*!*********************************!*\
  !*** ./src/app/routes/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* reexport safe */ _app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule),
/* harmony export */   "routes": () => (/* reexport safe */ _app_routes__WEBPACK_IMPORTED_MODULE_0__.routes)
/* harmony export */ });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 8788);


/***/ }),

/***/ 8306:
/*!********************************************!*\
  !*** ./src/app/services/safe-html.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafeHtmlPipe {
  constructor(sanitized) {
    this.sanitized = sanitized;
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafeHtmlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true
});

/***/ }),

/***/ 2735:
/*!********************************************!*\
  !*** ./src/app/services/theb10.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _products_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheB10ProductsService": () => (/* binding */ TheB10ProductsService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.json */ 6272);
/* harmony import */ var _blogs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogs.json */ 4539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





let blogsData = /*#__PURE__*/ (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_blogs_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
class TheB10ProductsService {
  getRecentlyAddedProducts() {
    let resultJson = {};
    for (const [key, value] of Object.entries(/*#__PURE__*/ (_products_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_products_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_products_json__WEBPACK_IMPORTED_MODULE_2__, 2))))) {
      if (value.data) if (value.data.length < 10) {
        resultJson[key] = value;
      } else {
        resultJson[key] = {
          title: value.title,
          data: value.data.slice(-10)
        };
      }
    }
    return Object.values(resultJson);
  }
  getProduct(category, id) {
    let productsJson = {
      .../*#__PURE__*/ (_products_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_products_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_products_json__WEBPACK_IMPORTED_MODULE_2__, 2)))
    };
    if (productsJson[category] && productsJson[category]['data']) {
      return productsJson[category]['data'].find(element => element.id == id);
    }
  }
  getBlogsForPagination(category, type, publishedYear, searchByKey) {
    let resultArr = [];
    if (category) {
      resultArr = blogsData[category];
    } else if (type) {
      for (const [key, value] of Object.entries(/*#__PURE__*/ (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_blogs_json__WEBPACK_IMPORTED_MODULE_3__, 2))))) {
        resultArr = resultArr.concat(value.filter(function checkAdult(element) {
          return element.type == type;
        }));
      }
    } else if (publishedYear) {
      for (const [key, value] of Object.entries(/*#__PURE__*/ (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_blogs_json__WEBPACK_IMPORTED_MODULE_3__, 2))))) {
        resultArr = resultArr.concat(value.filter(function checkAdult(element) {
          return element.publishedDate.split("-")[2] == publishedYear;
        }));
      }
    } else if (searchByKey) {
      for (const [key, value] of Object.entries(/*#__PURE__*/ (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_blogs_json__WEBPACK_IMPORTED_MODULE_3__, 2))))) {
        resultArr = resultArr.concat(value.filter(function checkAdult(element) {
          return element.title.includes(searchByKey) || element.overview.includes(searchByKey);
        }));
      }
    } else {
      for (const [key, value] of Object.entries(/*#__PURE__*/ (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_blogs_json__WEBPACK_IMPORTED_MODULE_3__, 2))))) {
        if (value && value.length > 0) {
          resultArr = resultArr.concat(value);
        }
      }
    }
    resultArr.forEach(element => {
      let date = moment__WEBPACK_IMPORTED_MODULE_1___default()(element.publishedDate);
      element['pMonth'] = date.format('MMMM');
      element['pDate'] = date.format('MM/YYYY');
    });
    return lodash__WEBPACK_IMPORTED_MODULE_0__.chunk(resultArr, 9);
  }
  getBlogCategories() {
    let categories = Object.keys(/*#__PURE__*/ (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_blogs_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_blogs_json__WEBPACK_IMPORTED_MODULE_3__, 2))));
    categories.splice(-1);
    return categories;
  }
}
TheB10ProductsService.ɵfac = function TheB10ProductsService_Factory(t) {
  return new (t || TheB10ProductsService)();
};
TheB10ProductsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: TheB10ProductsService,
  factory: TheB10ProductsService.ɵfac
});

/***/ }),

/***/ 9614:
/*!************************************************!*\
  !*** ./src/app/views/blogs/blogs.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsComponent": () => (/* binding */ BlogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/theb10.service */ 2735);






function BlogsComponent_ngtemplate_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngtemplate")(1, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_ngtemplate_208_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const tag_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.showByCategory(tag_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", tag_r3, " ");
  }
}
function BlogsComponent_div_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "h2", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 70)(10, "a", 71)(11, "h4", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 74)(16, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " READ MORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const blogData_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blogData_r6.pDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blogData_r6.pMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", blogData_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", blogData_r6.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blogData_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](blogData_r6.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", blogData_r6.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function BlogsComponent_ngtemplate_223_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngtemplate")(1, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_ngtemplate_223_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const blogData_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.showPageData(i_r8, blogData_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("page-item ", i_r8 + 1 == ctx_r2.activePageIndex ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r8 + 1);
  }
}
class BlogsComponent {
  constructor(location, fb, dialog, router, cdr, route, theB10ProductsService) {
    this.location = location;
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.cdr = cdr;
    this.route = route;
    this.theB10ProductsService = theB10ProductsService;
    this.activePageIndex = 1;
    this.selectedBreadcrumb = "All";
    this.blogsData = theB10ProductsService.getBlogsForPagination(undefined, undefined, undefined, undefined);
    this.currentPageData = this.blogsData[0];
    this.tags = theB10ProductsService.getBlogCategories();
  }
  ngOnInit() {}
  ngAfterViewInit() {}
  previousPage() {
    if (this.activePageIndex == 1) {
      return;
    }
    --this.activePageIndex;
    this.currentPageData = this.blogsData[this.activePageIndex - 1];
    document.getElementById("blog-section").scrollIntoView();
  }
  nextPage() {
    if (this.activePageIndex == this.blogsData.length) {
      return;
    }
    ++this.activePageIndex;
    this.currentPageData = this.blogsData[this.activePageIndex - 1];
    document.getElementById("blog-section").scrollIntoView();
  }
  gotoFirstPage() {
    if (this.activePageIndex == 1) {
      return;
    }
    this.activePageIndex = 1;
    this.currentPageData = this.blogsData[this.activePageIndex - 1];
    document.getElementById("blog-section").scrollIntoView();
  }
  gotoLastPage() {
    if (this.activePageIndex == this.blogsData.length) {
      return;
    }
    this.activePageIndex = this.blogsData.length;
    this.currentPageData = this.blogsData[this.activePageIndex - 1];
    document.getElementById("blog-section").scrollIntoView();
  }
  showPageData(i, blogData) {
    this.activePageIndex = i + 1;
    this.currentPageData = blogData;
    document.getElementById("blog-section").scrollIntoView();
  }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) {
  return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
BlogsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BlogsComponent,
  selectors: [["ng-component"]],
  decls: 230,
  vars: 16,
  consts: [[1, "blog-slider-tow-grid", "wd-slider-section"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "text-center"], [1, "wishlist-slider-title"], ["id", "blog-section", 1, "page-location", "pt-0"], ["href", "javascript:void()"], [1, "divider"], ["href", "javascript:void()", 1, "page-location-active"], [1, "active-color"], [1, "blog-section"], [1, "row", "four-grid"], [1, "col-md-4", "col-lg-3", "pl-0"], [1, "sidebar-search"], [1, "input-group", "wd-btn-group", "col-12", "p0"], ["type", "text", "placeholder", "Search ...", "aria-label", "Search for...", 1, "form-control"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-secondary", "wd-btn-search"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapse-category", 1, "btn", "btn-info", "collapse-category", "collapsed"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["id", "collapse-category", 1, "collapse"], [1, "side-bar", "category", "category-sm"], [1, "dropdown-list-menu"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], [1, "sidebar-dropdown"], [1, "dropdown-sub-menu"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "side-bar", "category", "category-md"], [1, "title"], [1, "side-bar", "sheare-option"], [1, "sheare-title"], [1, "sheare-box", "share-facebook"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "sheare-box", "share-twitter"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], [1, "sheare-box", "share-pinterest"], ["aria-hidden", "true", 1, "fa", "fa-pinterest-p"], [1, "sheare-box", "share-behance"], ["aria-hidden", "true", 1, "fa", "fa-behance"], [1, "sheare-box", "share-skype"], ["aria-hidden", "true", 1, "fa", "fa-skype"], [1, "sheare-box", "share-instagram"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "sheare-box", "share-linkedin"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], [1, "sheare-box", "share-google"], ["aria-hidden", "true", 1, "fa", "fa-google-plus"], [1, "side-bar", "archive-option"], [1, "archive-review-title"], [1, "side-bar", "tags-box"], [4, "ngFor", "ngForOf"], [1, "col-md-8", "col-lg-9"], [1, "row", "three-grid"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "float-right"], [1, "wd-pagination"], [1, "pagination"], [3, "click"], ["href", "javascript:void()", 1, "page-link"], ["href", "javascript:void()", "tabindex", "-1", 1, "page-link"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-left"], [1, "col-sm-6", "col-lg-4"], [1, "blog-box"], [1, "blog-date", "text-center"], [1, "date"], [1, "monthe"], [1, "blog-img"], ["alt", "blog-img", 1, "figure-img", "img-fluid", 3, "src"], [1, "blog-content-box"], [3, "href"], [1, "blog-title"], [1, "blog-content"], [1, "raed-more"], [1, "btn", "btn-link", 3, "href"]],
  template: function BlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "ul")(9, "li")(10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 9)(16, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "section", 11)(21, "div", 1)(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 17)(28, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Our Category ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22)(34, "div", 23)(35, "ul", 24)(36, "li")(37, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Mobiles");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Tablet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Visual");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li", 26)(53, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Handset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ul", 27)(57, "li")(58, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Speaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li")(70, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Protector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li")(74, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Mini-pad");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Headphones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li")(82, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Camera");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li")(86, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Lens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li")(90, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Laptop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li")(94, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Desktop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 29)(98, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 24)(101, "li")(102, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li")(106, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Tablet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li")(110, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li")(114, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Visual");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li", 26)(118, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " Handset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "ul", 27)(122, "li")(123, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Touch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li")(127, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li")(131, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " Speaker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li")(135, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " Protector");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li")(139, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Mini-pad");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li")(143, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " Headphones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li")(147, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " Camera");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li")(151, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " Lens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li")(155, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Laptop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li")(159, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " Desktop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 31)(163, "h6", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Share");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 7)(166, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "a", 7)(169, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "a", 7)(172, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "a", 7)(175, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "a", 7)(178, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "a", 7)(181, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 7)(184, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "a", 7)(187, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 49)(190, "h6", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Archive");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p")(193, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "2021 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p")(197, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "2022 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p")(201, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 51)(205, "h5", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](208, BlogsComponent_ngtemplate_208_Template, 4, 1, "ngtemplate", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 53)(210, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](211, BlogsComponent_div_211_Template, 19, 7, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 2)(213, "div", 3)(214, "div", 56)(215, "nav", 57)(216, "ul", 58)(217, "li", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_Template_li_click_217_listener() {
        return ctx.gotoFirstPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "First");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_Template_li_click_220_listener() {
        return ctx.previousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](223, BlogsComponent_ngtemplate_223_Template, 4, 4, "ngtemplate", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_Template_li_click_224_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlogsComponent_Template_li_click_227_listener() {
        return ctx.gotoLastPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Last");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedBreadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](191);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currentPageData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("page-item ", ctx.activePageIndex == 1 ? "disabled" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("page-item ", ctx.activePageIndex == 1 ? "disabled" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.blogsData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("page-item  ", ctx.activePageIndex == ctx.blogsData.length ? "disabled" : "", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("page-item  ", ctx.activePageIndex == ctx.blogsData.length ? "disabled" : "", "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 259:
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class FooterComponent {
  constructor(location, fb, dialog, router, cdr, route) {
    this.location = location;
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.cdr = cdr;
    this.route = route;
  }
  ngAfterViewInit() {}
  ngOnInit() {
    // this.recentlyAddedProducts = this.theB10ProductsService.getRecentlyAddedProducts();
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 177,
  vars: 0,
  consts: [["id", "call-to-action", 1, "d-flex", "align-items-center"], [1, "container"], [1, "row"], [1, "col-12", "col-md-6"], [1, "call-to-action-message"], [1, "bold-font"], [1, "col-12", "col-md-6", "text-right"], [1, "call-to-action-buy-now"], ["href", "#", 1, "btn", "btn-primary", "wd-shop-btn"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["id", "details"], ["data-wow-delay", "600ms", 1, "row", "wow", "fadeInLeft", "animated", "justify-content-center"], [1, "col-10", "col-sm-8", "col-lg-3", "details-box"], [1, "col-sm-3", "p0", "text-center"], [1, "details-img"], ["src", "assets/img/details-img/compare-icon.png", "alt", "compare-icon", 1, "assets/img-fluid", "main-hover-icon-compare"], ["src", "assets/img/details-img/compare.png", "alt", "compare-icon", 1, "assets/img-fluid", "hover-icon-compare"], [1, "col-sm-9", "p0", "details-description"], [1, "details-title"], [1, "arow"], ["src", "assets/img/details-img/angle2.png", "alt", ""], ["src", "assets/img/details-img/review-icon.png", "alt", "review-icon", 1, "assets/img-fluid", "main-hover-icon-user"], ["src", "assets/img/details-img/user-2.png", "alt", "review-icon", 1, "assets/img-fluid", "hover-icon-user"], ["src", "assets/img/details-img/shop.png", "alt", "vendor-icon", 1, "assets/img-fluid", "main-hover-icon-vendor"], ["src", "assets/img/details-img/vendor-icon.png", "alt", "vendor-icon", 1, "assets/img-fluid", "hover-icon-vendor"], [1, "col-10", "col-sm-8", "col-lg-3", "details-box", "details-active"], [1, "text-center"], ["src", "assets/img/details-img/gift-icon.png", "alt", "gift-icon", 1, "assets/img-fluid"], [1, "details-active-title"], ["data-wow-delay", "900ms", 1, "footer", "wow", "fadeInUp", "animated", "footer-3"], [1, "container-fluid", "custom-width"], [1, "col-md-12", "col-lg-2"], [1, "footer-about"], ["href", "index.html", 1, "footer-about-logo"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "footer-description"], [1, "wb-social-media"], ["href", "#", 1, "bh"], [1, "fa", "fa-behance"], ["href", "#", 1, "fb"], [1, "fa", "fa-facebook-official"], ["href", "#", 1, "db"], [1, "fa", "fa-dribbble"], ["href", "#", 1, "gp"], [1, "fa", "fa-google-plus"], ["href", "#", 1, "vn"], [1, "fa", "fa-vine"], ["href", "#", 1, "yt"], [1, "fa", "fa-youtube-play"], [1, "col-6", "col-md-3", "col-lg-2", "footer-nav"], [1, "footer-subtitle"], ["href", "#"], [1, "stores-list"], [1, "col-12", "col-md-12", "col-lg-2"], [1, "newsletter-content"], [1, "newsletter-form"], [1, "form-group"], ["type", "text", "placeholder", "Enter your email", 1, "form-control", "newsletter-input"], ["type", "submit", 1, "btn", "btn-primary", "newsletter-btn"], ["data-wow-delay", "900ms", 1, "copyright", "wow", "fadeInUp", "animated", "copyright-2"], [1, "col-md-6"], [1, "copyright-text"], [1, "text-uppercase"], ["href", "https://thebest10products.com/", 1, "created-by"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The most happy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comparison");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to buy product with great ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Features.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Go ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 10)(17, "div", 1)(18, "div", 11)(19, "div", 12)(20, "div", 2)(21, "div", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15)(24, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17)(26, "h6", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lets Compare");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Choose your product with price comparisons make your best deal today");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12)(33, "div", 2)(34, "div", 13)(35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21)(37, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17)(39, "h6", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Take Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Take your selected product review choose best one");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12)(46, "div", 2)(47, "div", 13)(48, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23)(50, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17)(52, "h6", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Choose Multi-Vendor Store");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lets check your product from multivendor store get satisfy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25)(59, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Enjoy Result");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "footer", 29)(64, "div", 30)(65, "div", 2)(66, "div", 31)(67, "div", 32)(68, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35)(71, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Quality is not an act, it is a habit. And these 10 products embody that habit, consistently delivering excellence to their users - thebest10products.com.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36)(74, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49)(87, "h6", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Festival Deals");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul")(90, "li")(91, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Comparison Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li")(97, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li")(100, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 49)(103, "div", 52)(104, "h6", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Top Stores");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul")(107, "li")(108, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Amazon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li")(111, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Flipkart");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li")(114, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Croma");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li")(117, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "TataCliq");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li")(120, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Myntra");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 49)(123, "h6", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Need Help ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul")(126, "li")(127, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Getting Started");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li")(130, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li")(133, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "FAQ's");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li")(136, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Press");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li")(139, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Product Feed");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li")(142, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Best Rated Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li")(145, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Feature product");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 49)(148, "h6", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul")(151, "li")(152, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Privacy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li")(155, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Return Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 53)(158, "h6", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Newsletter Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "By subscribing to our mailing list you will always be update with the latest news from us.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 55)(163, "form")(164, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Join us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "section", 59)(169, "div", 1)(170, "div", 2)(171, "div", 60)(172, "div", 61)(173, "p", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "COPYRIGHT \u00A9 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "thebest10products.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 3841:
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/theb10.service */ 2735);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 259);








class HeaderComponent {
  constructor(location, fb, dialog, router, cdr, route, theB10ProductsService) {
    this.location = location;
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.cdr = cdr;
    this.route = route;
    this.theB10ProductsService = theB10ProductsService;
    this.recentlyAddedProducts = {};
  }
  ngAfterViewInit() {}
  ngOnInit() {
    // this.recentlyAddedProducts = this.theB10ProductsService.getRecentlyAddedProducts();
  }
  gotToProductView(product) {
    this.router.navigate(['/product'], {
      queryParams: {
        category: product.category,
        id: product.id
      }
    });
    //.then(() => {
    //  window.location.reload();
    //})
    // window.open(window.location.protocol + "//" + window.location.host + `/product?category=${product.category}&id=${product.id}`, "_blank");
  }
}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 464,
  vars: 0,
  consts: [[1, "preloader"], ["id", "header", 1, "page-topbar"], ["viewport", ""], ["id", "wd-header", 1, "dark-header"], [1, "container-fluid", "custom-width"], [1, "row"], [1, "col-md-12", "col-lg-3", "col-xl-3", "text-center", "second-home-main-logo"], ["href", "#"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "col-md-6", "col-lg-6", "slider-search-section", "d-none", "d-lg-block", "slider"], [1, "input-group"], [1, "input-group-btn"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "wd-slider-search-btn"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [1, "dropdown-menu", "wd-dropdown-menu"], [1, "search-category"], [1, "col-md-6"], [1, "search-category-title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], ["type", "text", "placeholder", "Enter your search key ...", 1, "form-control", "input-search-box"], ["type", "button", 1, "btn", "btn-secondary", "wd-search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["id", "wd-header-2", 1, "wd-header-nav", "sticker-nav", "mob-sticky", "bg-orange"], [1, "col-md-8", "col-2", "col-sm-6", "col-md-4", "d-block", "d-lg-none"], [1, "accordion-wrapper", "hide-sm-up"], [1, "mobile-open"], [1, "fa", "fa-bars"], ["id", "mobilemenu", 1, "accordion"], [1, "closeme"], [1, "fa", "fa-times"], [1, "mob-logo"], ["src", "assets/img/logo.png", "alt", ""], [1, "link"], [1, "fa", "fa-chevron-down"], [1, "submenu", "font-sky"], [1, "submenu"], [1, "out-link"], ["href", "blog/all", 1, ""], ["href", "#", 1, ""], [1, "col-xl-3", "d-none", "d-xl-block"], ["id", "cat-department", 1, "department"], ["src", "assets/img/menu-bar.png", "alt", "menu-bar"], [1, "shape-img"], ["src", "assets/img/department-shape-img.png", "alt", "department img", 1, "img-fluid"], ["id", "department-list", 1, "department-list", 2, "display", "none"], [1, "list-group"], [1, "list-group-item"], ["href", "#!"], [1, "department-list-logo"], ["src", "assets/img/department-img/department-img-5.png", "alt", ""], [1, "sub-list-main-menu"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "wd-sub-list"], [1, "container"], [1, "col-md-4"], [1, "black-color", "wd-sub-list-title"], [1, "wd-sub-menu"], ["src", "assets/img/department-img/department-sub-list-img-1.jpg", "alt", "department-sub-list-img", 1, "department-sub-list-img"], ["src", "assets/img/department-img/department-sub-list-img-2.jpg", "alt", "department-sub-list-img", 1, "department-sub-list-img"], ["src", "assets/img/department-img/department-img-2.png", "alt", ""], ["src", "assets/img/department-img/department-img-3.png", "alt", ""], ["src", "assets/img/department-img/department-img-4.png", "alt", ""], ["src", "assets/img/department-img/department-img-1.png", "alt", ""], ["src", "assets/img/department-img/department-img-6.png", "alt", ""], ["src", "assets/img/department-img/department-img-7.png", "alt", ""], ["src", "assets/img/department-img/department-img-8.png", "alt", ""], ["src", "assets/img/department-img/department-img-9.png", "alt", ""], ["src", "assets/img/department-img/department-img-10.png", "alt", ""], [1, "col-md-6", "col-lg-10", "col-xl-7", "header-search-box", "d-none", "d-lg-block"], ["id", "main-menu-2", 1, "main-menu-desktop", "no-border", "main-menu-sh"], [1, "menu-container", "wd-megamenu", "text-left"], [1, "menu"], [1, "wd-megamenu-ul"], ["href", "#", 1, "main-menu-list"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["aria-hidden", "true", 1, "fa", "fa-angle-down", "angle-down"], [1, "pos-inherit"], [1, "single-dropdown", "megamenu"], ["href", "#", 1, "menu-subtitle"], [1, "sub-menu-list"], ["href", "/blog/best-10-laptops-sold-in-amazon-in-2021.html"], ["href", ""], ["href", "#", 1, "add-img"], ["src", "assets/img/nav-img-1.jpg", "alt", "Product Img", 1, "figure-img", "img-fluid"], ["src", "assets/img/nav-img-2.jpg", "alt", "Product Img", 1, "figure-img", "img-fluid"], ["href", "blog/all", 1, "main-menu-list"], [1, "single-dropdown"], ["href", "contact-us.html", 1, "main-menu-list"], [1, "col-10", "col-sm-6", "col-md-4", "col-lg-2", "col-xl-2", "text-right"], [1, "example-container", "1"], ["id", "main"], [1, "carousel-c"], [1, "container-fluid", "main-sec"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "header", 1, 2)(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " All Categories ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 5)(19, "div", 16)(20, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Cameras and photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ul")(23, "li")(24, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li")(28, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li")(32, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li")(36, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li")(40, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 16)(44, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul")(47, "li")(48, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Laptops");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li")(52, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Computer Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li")(56, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Mobiles");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "li")(60, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Smartwatches");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "li")(64, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Refrigerators");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 11)(69, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "section", 22)(72, "div", 4)(73, "div", 5)(74, "div", 23)(75, "div", 24)(76, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "ul", 27)(79, "li")(80, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li", 30)(83, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li")(86, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "ul", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li")(91, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "ul", 35)(95, "li")(96, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Visual Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li")(99, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Chinese phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "li")(102, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Google Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "li")(105, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "li")(108, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "li")(111, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "li")(114, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "li")(117, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "li")(120, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "li")(123, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Phone Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "li")(126, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Phone Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "li")(129, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Visual Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "li")(132, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Chinese phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "li")(135, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Google Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "li")(138, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Cheap Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "li")(141, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Luxury phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "li")(144, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Simple phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "li")(147, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li")(150, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "li")(153, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "li")(156, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "li")(159, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "li")(162, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "li")(165, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "li")(168, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "li")(171, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "li", 36)(174, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "li", 36)(177, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Coupon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "li", 36)(180, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 39)(183, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "img", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, " All Department ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 44)(189, "ul", 45)(190, "li", 46)(191, "a", 47)(192, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 52)(198, "div", 53)(199, "div", 5)(200, "div", 54)(201, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "ul", 56)(204, "li")(205, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "li")(208, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "li")(211, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "li")(214, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "li")(217, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "li")(220, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "li")(223, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "li")(226, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "li")(229, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 54)(232, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Laptops by brand ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "ul", 56)(235, "li")(236, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "Apple");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "li")(239, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Lenovo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "li")(242, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "Hp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "li")(245, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "Asus");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "li")(248, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "Acer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "li")(251, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Microsoft");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "li")(254, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "LG");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "li")(257, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Infinix");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "li")(260, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](261, "Honor");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 54)(263, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, "Home & Kitchen Appliances ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "ul", 56)(266, "li")(267, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "Refrigerators");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "li")(270, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271, "Air Conditioners");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "li")(273, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "Microvens");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "li")(276, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, "Air Fryers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "li")(279, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "Fans");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "li", 46)(286, "a", 7)(287, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "li", 46)(292, "a", 7)(293, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](294, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "Clothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "li", 46)(298, "a", 7)(299, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](300, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "li", 46)(304, "a", 7)(305, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "Furniture");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "li", 46)(310, "a", 7)(311, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](312, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "Corporate staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "li", 46)(316, "a", 7)(317, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](318, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](320, "Sinking staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "li", 46)(322, "a", 7)(323, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](324, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](326, "Plant");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "li", 46)(328, "a", 7)(329, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](330, "img", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Washing machine");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "li", 46)(334, "a", 7)(335, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "img", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "Winding staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 68)(340, "div", 69)(341, "div", 70)(342, "div", 71)(343, "ul", 72)(344, "li")(345, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](346, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](347, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "i", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "li", 76)(350, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "best10 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](352, "i", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "ul", 77)(354, "li")(355, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](356, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "ul", 79)(358, "li")(359, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](360, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](361, " Best 10 Laptops");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "li")(363, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](364, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](365, "Best 10 Smartwatches");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "li")(367, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](368, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "Best 10 Mobiles");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "li")(371, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](372, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "Best 10 AC's");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "li")(375, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, "Best 10 Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "li")(379, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](380, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, "Best 10 Projectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "li")(383, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](384, "Home & Kitchen Appliances");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "ul", 79)(386, "li")(387, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](388, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, "Best 10 Washing machines");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "li")(391, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](392, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "Best 10 Washing machines under 20000Rs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "li")(395, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](396, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "Best 10 Microvens");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "li")(399, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](400, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, "Best 10 Refrigerators");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "li")(403, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](404, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](405, "Best 10 Refrigerators under 30000Rs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "li")(407, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](408, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](409, "Best 10 Mixers & Grinders");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](410, "li")(411, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](412, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "Best 10 budget kettels");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "li")(415, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](416, "Markets");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "ul", 79)(418, "li")(419, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](420, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "Best 10 TV's in Flipkart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "li")(423, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](424, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](425, "Best 10 TV's in Amazon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "li")(427, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](428, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](429, "Best Buy Products in Myntra");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "li")(431, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](432, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "Best Home & Kitchen Appliances in Amazon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "li")(435, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](436, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](438, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "li")(440, "a", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](441, "blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "li")(443, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](444, "Comparison Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "i", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "ul", 86)(447, "li")(448, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "Coming soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "li")(451, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](452, "Coupons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "li")(454, "a", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](456, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "mat-sidenav-container", 89)(458, "mat-sidenav-content")(459, "div", 90)(460, "div", 91)(461, "div", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](462, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](463, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  encapsulation: 2
});

/***/ }),

/***/ 9470:
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/theb10.service */ 2735);
/* harmony import */ var _product_product_quick_view_model_componet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/product-quick-view.model.componet */ 3717);







function HomeComponent_section_37_div_1_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "figure", 30)(2, "div", 31)(3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_section_37_div_1_div_1_div_6_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.gotToProductView(product_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 34)(6, "div", 35)(7, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_section_37_div_1_div_1_div_6_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.showProductQuickView(product_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Quick view");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "figcaption", 38)(11, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 42)(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Price start from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong", 43)(19, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 44)(22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 45)(25, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 35)(36, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", product_r6 == null ? null : product_r6.images == null ? null : product_r6.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9 ", product_r6 == null ? null : product_r6.markets == null ? null : product_r6.markets[0].price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r6.brand, " ", product_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", product_r6.overallRating >= 1 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", product_r6.overallRating >= 2 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", product_r6.overallRating >= 3 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", product_r6.overallRating >= 4 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", product_r6.overallRating >= 5 ? " active-color" : "-o", "");
  }
}
function HomeComponent_section_37_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HomeComponent_section_37_div_1_div_1_div_6_Template, 39, 19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const recentlyAddedProduct_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", recentlyAddedProduct_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", recentlyAddedProduct_r3.data);
  }
}
function HomeComponent_section_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_section_37_div_1_div_1_Template, 7, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const recentlyAddedProduct_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", recentlyAddedProduct_r3.data && recentlyAddedProduct_r3.data.length > 0);
  }
}
function HomeComponent_section_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_section_37_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.recentlyAddedProducts);
  }
}
class HomeComponent {
  constructor(location, fb, dialog, router, cdr, route, theB10ProductsService) {
    this.location = location;
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.cdr = cdr;
    this.route = route;
    this.theB10ProductsService = theB10ProductsService;
    this.recentlyAddedProducts = {};
  }
  ngOnInit() {
    this.recentlyAddedProducts = this.theB10ProductsService.getRecentlyAddedProducts();
  }
  ngAfterViewInit() {
    $('.products-by-category').owlCarousel({
      loop: false,
      nav: true,
      navText: ['<i class=\'fa fa-angle-left\'></i>', '<i class=\'fa fa-angle-right\'></i>'],
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 4
        },
        1550: {
          items: 5
        }
      }
    });
    $('#main-slider').owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      navText: ['<i class=\'fa fa-angle-left\'></i>', '<i class=\'fa fa-angle-right\'></i>'],
      dots: false
    });
    $('#main-slider').on('translate.owl.carousel', function () {
      $('.slider-text').removeClass('fadeInUp animated').hide();
    });
    $('#main-slider').on('translated.owl.carousel', function () {
      $('.slider-text').addClass('fadeInUp animated').show();
    });
    $('#main-slider').on('translate.owl.carousel', function () {
      $('.slider-img').removeClass('fadeInDown animated').hide();
    });
    $('#main-slider').on('translated.owl.carousel', function () {
      $('.slider-img').addClass('fadeInDown animated').show();
    });
    $('#main-slider').on('translate.owl.carousel', function () {
      $('.slider-img-two').removeClass('fadeInDown animated').hide();
    });
    $('#main-slider').on('translated.owl.carousel', function () {
      $('.slider-img-two').addClass('fadeInDown animated').show();
    });
    $('#main-slider').on('translate.owl.carousel', function () {
      $('.slider-countdown').removeClass('fadeInUp animated').hide();
    });
    $('#main-slider').on('translated.owl.carousel', function () {
      $('.slider-countdown').addClass('fadeInUp animated').show();
    });
    $('#main-slider').on('translate.owl.carousel', function () {
      $('.cou-slider-img').removeClass('fadeInDown animated').hide();
    });
    $('#main-slider').on('translated.owl.carousel', function () {
      $('.cou-slider-img').addClass('fadeInDown animated').show();
    });
    window.scrollTo(0, 10);
  }
  gotToProductView(product) {
    this.router.navigate(['/product'], {
      queryParams: {
        category: product.category,
        id: product.id
      }
    });
    //.then(() => {
    //   window.location.reload();
    // })
    // window.open(window.location.protocol + "//" + window.location.host + `/product?category=${product.category}&id=${product.id}`, "_blank");
  }

  showProductQuickView(product) {
    this.selectedProdct = product;
    $('#product-quick-view-modal').appendTo("body").modal('show');
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["home"]],
  decls: 39,
  vars: 2,
  consts: [["viewport", ""], ["id", "main-slider-section"], ["id", "main-slider", 1, "slider-bg2", "owl-carousel", "owl-theme", "product-review", "slider-cat"], [1, "item", "d-flex", "slider-bg", "align-items-center"], [1, "container-fluid"], [1, "row", "justify-content-end"], [1, "slider-text", "col-sm-6", "col-xl-4", "col-md-6", "order-2", "order-sm-1"], [1, "slider-title"], [1, "highlights-text"], [1, "slider-content"], ["href", "shop-left-sidebar.html", 1, "btn", "btn-primary", "wd-shop-btn", "slider-btn"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "col-sm-6", "col-md-6", "col-xl-6", "order-1", "order-sm-2", "slider-img"], ["src", "assets/img/slider-img/slider.png", "alt", ""], [1, "slider-text", "col-sm-6", "col-xl-4", "col-md-6"], [1, "sub-title"], [1, "col-sm-6", "col-md-6", "col-xl-6", "slider-img", "fadeInDown", "animated"], ["id", "product-amazon", "class", "style-fd", 4, "ngIf"], [3, "product"], ["id", "product-amazon", 1, "style-fd"], ["class", "container-fluid custom-width", 4, "ngFor", "ngForOf"], [1, "container-fluid", "custom-width"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "section-title-center", "text-left"], [1, "title", "pl-0"], ["id", "product-slider-two", 1, "products-by-category", "owl-carousel", "owl-theme"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "figure", "product-box"], [1, "product-box-img"], [3, "click"], ["alt", "Product Img", 1, "figure-img", "img-fluid", 3, "src"], [1, "quick-view-btn"], [1, "compare-btn"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "figure-caption", "text-center"], [1, "badge", "badge-secondary", "wd-badge", "text-uppercase"], [1, "wishlist"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "price-start"], [1, "active-color"], [1, "content-excerpt"], [1, "rating"], ["href", "#"], ["aria-hidden", "true"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0)(2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h1", 7)(9, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Compare");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Best Prices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Grabe it hurry.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Choose your favourite market");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "div", 5)(22, "div", 14)(23, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Choose your favourite market");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h1", 7)(26, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Compare");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Best Prices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Grabe it hurry.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Go to store ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, HomeComponent_section_37_Template, 2, 1, "section", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "product-quick-view-modal", 18);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recentlyAddedProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", ctx.selectedProdct);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _product_product_quick_view_model_componet__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsQuickViewComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4612:
/*!*******************************************************!*\
  !*** ./src/app/views/layout/full-layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3841);



class FullLayoutComponent {
  toggled(open) {}
  toggleDropdown($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  constructor(location) {
    this.location = location;
    this.loading = true;
    this.disabled = false;
    this.status = {
      isopen: false
    };
    this.reloadCounter = 0;
  }
  ngOnInit() {}
}
FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
  return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
};
FullLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FullLayoutComponent,
  selectors: [["app-layout"]],
  decls: 1,
  vars: 0,
  template: function FullLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
    }
  },
  dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  encapsulation: 2
});

/***/ }),

/***/ 9149:
/*!***************************************!*\
  !*** ./src/app/views/layout/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* reexport safe */ _full_layout_component__WEBPACK_IMPORTED_MODULE_0__.FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _full_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-layout.component */ 4612);


/***/ }),

/***/ 7166:
/*!************************************************************!*\
  !*** ./src/app/views/product/product-details.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/theb10.service */ 2735);
/* harmony import */ var _services_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/safe-html.pipe */ 8306);







function ProductDetailsComponent_section_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 3)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 46)(5, "div", 47)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 48)(9, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Buy it now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const market_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/img/brands/", market_r3.title, ".webp", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9 ", market_r3 == null ? null : market_r3.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", market_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductDetailsComponent_section_0_li_77_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r7.specKeys[i_r5], " : ", ctx_r7.product.spec[ctx_r7.specKeys[i_r5]], "");
  }
}
function ProductDetailsComponent_section_0_li_77_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r8.specKeys[i_r5 + 1], " : ", ctx_r8.product.spec[ctx_r8.specKeys[i_r5 + 1]], "");
  }
}
function ProductDetailsComponent_section_0_li_77_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 56);
  }
}
function ProductDetailsComponent_section_0_li_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductDetailsComponent_section_0_li_77_div_1_Template, 3, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductDetailsComponent_section_0_li_77_div_2_Template, 3, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductDetailsComponent_section_0_li_77_div_3_Template, 1, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const even_r6 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", even_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", even_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", even_r6);
  }
}
function ProductDetailsComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "ul")(6, "li")(7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9)(17, "div", 3)(18, "div", 10)(19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16)(28, "div", 17)(29, "div", 18)(30, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20)(41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 22)(46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " 100% Original product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Manufacturer Warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProductDetailsComponent_section_0_div_53_Template, 11, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 3)(55, "div", 26)(56, "div", 27)(57, "div", 28)(58, "ul", 29)(59, "li", 30)(60, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li", 30)(63, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Ful Specifiction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 33)(66, "div", 34)(67, "div", 35)(68, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "ul", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, ProductDetailsComponent_section_0_li_77_Template, 4, 3, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.product.brand, " ", ctx_r0.product.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 27, ctx_r0.lightSlider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.product.brand, " ", ctx_r0.product.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 1 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 2 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 3 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 4 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 5 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.product.overallRating, "/5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" -", ctx_r0.product.totalNoOfRatings ? ctx_r0.product.totalNoOfRatings : 17233, " Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.product.markets);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.product.brand, " ", ctx_r0.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.specKeys);
  }
}
class ProductDetailsComponent {
  constructor(location, fb, dialog, router, cdr, route, theB10ProductsService) {
    this.location = location;
    this.fb = fb;
    this.dialog = dialog;
    this.router = router;
    this.cdr = cdr;
    this.route = route;
    this.theB10ProductsService = theB10ProductsService;
    this.showData = false;
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.id = params['id'];
      this.product = this.theB10ProductsService.getProduct(this.category, this.id);
      this.specKeys = Object.keys(this.product.spec);
      this.buildLightSlider();
      this.showData = true;
    });
  }
  ngOnInit() {
    if (!this.product) {}
  }
  ngAfterViewInit() {
    $('#lightSlider').lightSlider({
      gallery: true,
      item: 1,
      loop: true,
      slideMargin: 0,
      thumbItem: 5
    });
  }
  buildLightSlider() {
    let sliderHtml = `<ul id="lightSlider">`;
    for (let imgLink of this.product.images) {
      sliderHtml = sliderHtml + ` <li data-thumb="${imgLink}">
             <img class="figure-img img-fluid" src="${imgLink}" alt="product-img" />
         </li>`;
    }
    sliderHtml = sliderHtml + "</ul>";
    this.lightSlider = sliderHtml;
  }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
  return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_theb10_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductDetailsComponent,
  selectors: [["product-details"]],
  decls: 1,
  vars: 1,
  consts: [["class", "product-details", 4, "ngIf"], [1, "product-details"], [1, "container"], [1, "row"], [1, "col-12", "p0"], [1, "page-location"], ["href", "#"], [1, "divider"], [1, "page-location-active"], [1, "col-12", "product-details-section"], [1, "product-gallery", "col-12", "col-md-12", "col-lg-6"], [1, "col-md-12", "product-slier-details", 3, "innerHTML"], [1, "col-6", "col-12", "col-md-12", "col-lg-6"], [1, "product-details-gallery"], [1, "list-group"], [1, "list-group-item-heading", "product-title"], [1, "media"], [1, "media-left", "media-middle"], [1, "rating"], ["aria-hidden", "true"], [1, "media-body"], [1, "product-ratings-text"], [1, "list-group", "content-list"], ["aria-hidden", "true", 1, "fa", "fa-dot-circle-o"], [1, "product-store", "row"], ["class", "col-12 product-store-box", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "wd-tab-section"], [1, "bd-example", "bd-example-tabs"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3", "wd-tab-menu"], [1, "nav-item", "col-6", "col-md"], ["id", "description-tab", "data-toggle", "pill", "href", "#description-section", "role", "tab", "aria-controls", "description-section", "aria-expanded", "true", 1, "nav-link", "active"], ["id", "full-specifiction-tab", "data-toggle", "pill", "href", "#full-specifiction", "role", "tab", "aria-controls", "full-specifiction", "aria-expanded", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "description-section", "role", "tabpanel", "aria-labelledby", "description-tab", "aria-expanded", "true", 1, "tab-pane", "fade", "active", "show"], [1, "product-tab-content"], [1, "description-title"], [1, "description-subtitle"], [1, "description-subcontent"], ["id", "full-specifiction", 1, "tab-pane", "fade"], [1, "wd-opacity"], [1, "list-group", "wd-info-section"], ["class", "list-group-item d-flex justify-content-between align-items-center p0", 4, "ngFor", "ngForOf"], [1, "col-12", "product-store-box"], [1, "col-3", "p0", "store-border-img"], ["alt", "Product Img", 1, "figure-img", "img-fluid", 2, "padding-top", "17px", 3, "src"], [1, "col-5", "store-border-price", "text-center"], [1, "price"], [1, "col-4", "store-border-button", 2, "padding-bottom", "10px"], ["target", "_blank", 1, "btn", "btn-primary", "wd-shop-btn", "pull-right", 3, "href"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "p0"], ["class", "col-12 col-md-6 info-section", 4, "ngIf"], ["class", "col-12 col-md-5 info-section", 4, "ngIf"], ["class", "col-1", 4, "ngIf"], [1, "col-12", "col-md-6", "info-section"], [1, "col-12", "col-md-5", "info-section"], [1, "col-1"]],
  template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductDetailsComponent_section_0_Template, 78, 29, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _services_safe_html_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtmlPipe],
  encapsulation: 2
});

/***/ }),

/***/ 3717:
/*!********************************************************************!*\
  !*** ./src/app/views/product/product-quick-view.model.componet.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsQuickViewComponent": () => (/* binding */ ProductDetailsQuickViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ProductDetailsQuickViewComponent_div_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 4)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28)(5, "div", 29)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30)(9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Buy it now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const market_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/brands/", market_r2.title, ".webp", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", market_r2 == null ? null : market_r2.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", market_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProductDetailsQuickViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 4)(4, "div", 6)(5, "div", 7)(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10)(9, "div", 11)(10, "div", 12)(11, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19)(27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21)(32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 100% Original product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Manufacturer Warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProductDetailsQuickViewComponent_div_2_div_39_Template, 11, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.product == null ? null : ctx_r0.product.images == null ? null : ctx_r0.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.product.brand, " ", ctx_r0.product.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 1 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 2 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 3 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 4 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-star", ctx_r0.product.overallRating >= 5 ? " active-color" : "-o", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.overallRating, "/5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" -", ctx_r0.product.totalNoOfRatings ? ctx_r0.product.totalNoOfRatings : 17233, " Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.product.markets);
  }
}
class ProductDetailsQuickViewComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    //this.product = data.product
  }

  ngAfterViewInit() {}
  cancel() {
    //	this.dialogRef.close();
  }
  ngOnInit() {}
}
ProductDetailsQuickViewComponent.ɵfac = function ProductDetailsQuickViewComponent_Factory(t) {
  return new (t || ProductDetailsQuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
ProductDetailsQuickViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductDetailsQuickViewComponent,
  selectors: [["product-quick-view-modal"]],
  inputs: {
    product: "product"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])],
  decls: 3,
  vars: 1,
  consts: [["id", "product-quick-view-modal", "tabindex", "-1", "aria-hidden", "true", 1, "product-view-modal", "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "row"], [1, "product-gallery", "col-12", "col-md-12", "col-lg-6"], [1, "col-md-12", "product-slier-details"], ["id", "product-view-model", 1, "product-view"], [1, "item"], ["alt", "Product Img", 3, "src"], [1, "col-6", "col-12", "col-md-12", "col-lg-6"], [1, "product-details-gallery"], [1, "list-group"], [1, "list-group-item-heading", "product-title"], [1, "media"], [1, "media-left", "media-middle"], [1, "rating"], ["href", "#"], ["aria-hidden", "true"], [1, "media-body"], [1, "product-ratings-text"], [1, "list-group", "content-list"], ["aria-hidden", "true", 1, "fa", "fa-dot-circle-o"], [1, "product-store", "row"], ["class", "col-12 product-store-box", 4, "ngFor", "ngForOf"], [1, "col-12", "product-store-box"], [1, "col-3", "p0", "store-border-img"], ["alt", "Product Img", 1, "figure-img", "img-fluid", 2, "padding-top", "17px", 3, "src"], [1, "col-5", "store-border-price", "text-center"], [1, "price"], [1, "col-4", "store-border-button", 2, "padding-bottom", "10px"], ["target", "_blank", 1, "btn", "btn-primary", "wd-shop-btn", "pull-right", 3, "href"]],
  template: function ProductDetailsQuickViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsQuickViewComponent_div_2_Template, 40, 21, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 5397:
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewesModule": () => (/* binding */ ViewesModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/breadcrumb/breabcrumb.module */ 3616);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var _services_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/safe-html.pipe */ 8306);
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogs/blogs.component */ 9614);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 259);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ 3841);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 9470);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout */ 9149);
/* harmony import */ var _product_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product-details.component */ 7166);
/* harmony import */ var _product_product_quick_view_model_componet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-quick-view.model.componet */ 3717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













class ViewesModule {}
ViewesModule.ɵfac = function ViewesModule_Factory(t) {
  return new (t || ViewesModule)();
};
ViewesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: ViewesModule
});
ViewesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, src_app_breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ViewesModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _layout__WEBPACK_IMPORTED_MODULE_7__.FullLayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _product_product_details_component__WEBPACK_IMPORTED_MODULE_8__.ProductDetailsComponent, _services_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe, _product_product_quick_view_model_componet__WEBPACK_IMPORTED_MODULE_9__.ProductDetailsQuickViewComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_3__.BlogsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, src_app_breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 5773,
	"./ro.js": 5773,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 4539:
/*!*************************************!*\
  !*** ./src/app/services/blogs.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Electronics":[{"publishedDate":"05-03-2022","category":"Electronics","title":"Top 10 Best-Sold Laptops of 2021: The Ultimate Amazon Guide to Finding Your Perfect Machine","type":"Laptops","link":"/blog/best-10-laptops-sold-in-amazon-in-2021.html","image":"//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B2WRG4RX&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN","overview":"Choosing the right laptop can be a challenging task, but with the above list of top-selling laptops on Amazon in the last year, we hope we\'ve made it a little easier for you. Whether you\'re looking for a budget-friendly option or a mid-range laptop with good performance and features, there is a laptop for everyone on this list."}]}');

/***/ }),

/***/ 6272:
/*!****************************************!*\
  !*** ./src/app/services/products.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Electronics":{"title":"Electronics","data":[{"id":"A515-54-37U3","createdAt":"05-03-2023","brand":"Acer","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Acer-Display-i3-10110U-802-11ax-A515-54-37U3/dp/B07XPLHL3K?crid=XYJE7L4HJEK8&keywords=Acer%2BAspire%2B5%2BSlim%2BLaptop&qid=1677996981&s=computers&sprefix=acer%2Baspire%2B5%2Bslim%2Blaptop%2Ccomputers%2C233&sr=1-3&th=1&linkCode=li3&tag=thebest10prod-21&linkId=48009157773af162bf7f86b3785805d1&language=en_IN&ref_=as_li_ss_il","rating":4.4,"available":true,"price":32990}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07XPLHL3K&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":48234,"overview":"The Acer Aspire 5 Slim is a budget-friendly laptop that offers decent specs and performance. It comes with a 15.6-inch Full HD IPS display, which provides sharp and clear images. InteI i3 processor powers the laptop, and it comes with 4GB of DDR4 RAM and a 128GB SSD. The laptop is suitable for everyday tasks such as browsing the web, checking emails, and light productivity work.\\r\\nThe keyboard is backlit, which is handy in low-light conditions, and the touchpad is responsive and accurate. The laptop also has a fingerprint reader, which adds an extra layer of security to your device. The battery life is impressive, lasting up to 7.5 hours, making it an excellent option for users on the go.\\r\\nThe Acer Aspire 5 Slim has received positive reviews from customers, with many praising its affordability, performance, and battery life.","desc":"The Acer Aspire 5 Slim is a budget-friendly laptop that offers decent specs and performance. It comes with a 15.6-inch Full HD IPS display, which provides sharp and clear images. Intel i3 processor powers the laptop, and it comes with 4GB of DDR4 RAM and a 128GB SSD. The laptop is suitable for everyday tasks such as browsing the web, checking emails, and light productivity work","size":15.6,"score":9,"totalNoOfRatings":1133,"overallRating":4.4,"spec":{"Brand":"Acer","Manufacturer":"Acer, Acer","Series":"A515-54-37U3","Colour":"Silver","Form Factor":"Laptop","Item Height":"0.71 Inches","Item Width":"9.86 Inches","Standing screen display size":"15.6 Inches","Resolution":"1920x1080 Pixels","Product Dimensions":"36.35 x 25.04 x 1.8 cm; 1.8 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"A515-54-37U3","Processor Brand":"Intel","Processor Speed":"1 GHz","Processor Count":"2","RAM Size":"4 GB","Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Maximum Memory Supported":"20 GB","Hard Drive Size":"128 GB","Hard Disk Description":"SSD","Hard Drive Interface":"ATA","Hard Disk Rotational Speed":"0.01 RPM","Audio Details":"Speakers","Graphics Coprocessor":"Intel UHD Graphics","Graphics Chipset Brand":"Intel","Graphics Card Description":"Intel UHD Graphics","Graphics RAM Type":"Shared","Graphics Card Ram Size":"2 MB","Graphics Card Interface":"Integrated","Connectivity Type":"Wi-Fi","Wireless Type":"802.11ax","Number of USB 2.0 Ports":"1","Number of HDMI Ports":"1","Wattage":"65 Watts","Optical Drive Type":"No Optical Drive","Power Source":"Battery Powered","Operating System":"Windows 10 S Mode","Average Battery Standby Life (in hours)":"9.5 Hours","Average Battery Life (in hours)":"5 Hours","Are Batteries Included":"Yes","Lithium Battery Energy Content":"3220 Milliamp Hours (mAh)","Number Of Lithium Ion Cells":"4","Included Components":"Laptop, User Manual, charger","Country of Origin":"China","Item Weight":"1 kg 800 g"}},{"id":"F512DA-WH31","createdAt":"05-03-2023","brand":"Asus","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/ASUS-VivoBook-Dual-Core-R3-3200U-F512DA-WH31/dp/B07Y3VZQQT?crid=9CCLQUR5NH8H&keywords=ASUS%2BVivoBook%2BF512DA%2B128&qid=1678007578&s=computers&sprefix=asus%2Bvivobook%2Bf512da%2B12%2Ccomputers%2C235&sr=1-2&th=1&linkCode=li3&tag=thebest10prod-21&linkId=6ffdca0c93176b12a96729d18ff8a14f&language=en_IN&ref_=as_li_ss_il","rating":4.1,"available":true,"price":75083}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07Y3VZQQT&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":96985,"overview":"The ASUS VivoBook F512DA is another budget-friendly option that offers good performance and features. It comes with a 15.6-inch Full HD display, which produces vivid and clear visuals. The AMD Ryzen 3 3200U processor powers the laptop, and it comes with 8GB of DDR4 RAM and a 128GB SSD.\\r\\nThe laptop is slim and lightweight, making it easy to carry around. The keyboard is backlit, and the touchpad is smooth and responsive. The laptop also has a fingerprint reader, which provides an extra layer of security to your device.\\r\\nThe ASUS VivoBook F512DA has received positive reviews from customers, with many praising its affordability, performance, and design.","desc":"The ASUS VivoBook F512DA-WH31 is another budget-friendly option that offers good performance and features. It comes with a 15.6-inch Full HD display, which produces vivid and clear visuals. The AMD Ryzen 3 3200U processor powers the laptop, and it comes with 8GB of DDR4 RAM and a 128GB SSD.","size":15.6,"score":9,"totalNoOfRatings":33,"overallRating":4.1,"spec":{"Brand":"ASUS","Manufacturer":"Asus","Series":"ASUS VivoBook","Form Factor":"laptop","Standing screen display size":"15.6 Inches","Package Dimensions":"45.7 x 27.5 x 6.4 cm; 2.48 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item part number":"F512DA-WH31","Processor Brand":"AMD","Processor Type":"R Series","Processor Speed":"2.6 GHz","Processor Count":2,"RAM Size":"4 GB","Memory Technology":"DDR4","Computer Memory Type":"DDR SDRAM","Memory Clock Speed":"3.5 GHz","Hard Drive Size":"128 GB","Hard Disk Description":"SSD","Hard Drive Interface":"Solid State","Graphics Coprocessor":"AMD Radeon Vega 3","Graphics Chipset Brand":"AMD","Graphics Card Description":"Integrated","Connectivity Type":"Wi-Fi","Wireless Type":"802.11ac","Hardware Platform":"PC","Operating System":"Windows 10","Are Batteries Included":"Yes","Lithium Battery Energy Content":"7 Watt Hours","Lithium Battery Weight":"0.8 Grams","Number Of Lithium Ion Cells":7,"Country of Origin":"USA","Item Weight":"2 kg 480 g"}},{"id":"Inspiron 5518","createdAt":"05-03-2023","brand":"Dell","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Dell-Inspiron-5518-i5-11320H-D560812WIN9S/dp/B0B2WRG4RX?crid=2IMHOQQTKSE1&keywords=Dell%2BInspiron%2B15%2B3000&qid=1678016302&s=computers&sprefix=dell%2Binspiron%2B15%2B3000%2B%2Ccomputers%2C371&sr=1-9&th=1&linkCode=li3&tag=thebest10prod-21&linkId=f307058a50c4e3f033197ec73472e4b4&language=en_IN&ref_=as_li_ss_il","rating":4.1,"available":true,"price":65490}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B2WRG4RX&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":89902,"overview":"Dell has always been a reliable name in the world of laptops, and the Inspiron 5518 is no exception. With its powerful processor, ample storage space, and dedicated graphics card, the Inspiron 5518 is a powerhouse for productivity.","desc":"Dell has always been a reliable name in the world of laptops, and the Inspiron 5518 is no exception. With its powerful processor, ample storage space, and dedicated graphics card, the Inspiron 5518 is a powerhouse for productivity.","size":15.6,"score":9,"totalNoOfRatings":151,"overallRating":4.1,"spec":{"Brand":"Dell","Manufacturer":"Dell, Dell India Pvt Ltd","Model":"Inspiron 5518","Model Name":"Inspiron 5518","Model Year":2022,"Product Dimensions":"22.9 x 35.6 x 1.8 cm; 1.64 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"Inspiron 5518","RAM Size":"8 GB","Flash Memory Installed Size":"512 GB","Ram Memory Installed Size":"8 GB","RAM memory maximum size":"32 GB","Ram Memory Technology":"DDR4","Hard Drive Size":"512 GB","Hard Disk Description":"SSD","Optical Drive Type":"CD-R","Operating System":"Windows 11","Processor Brand":"Intel","Processor Speed":"2.5 GHz","Processor Type":"Core i5","Processor Count":1,"Processor model number":"i5-11320H","Graphics Card Description":"Dedicated","Graphics RAM Type":"GDDR5","Graphics Card Interface":"PCI Express","Special Features":"Fingerprint Reader, Backlit Keyboard","Mounting Hardware":"Laptop, Battery, AC Adapter, User Guide, Manuals","Number of items":1,"Software included":"Microsoft Office 365","Standing screen display size":"15.6 Inches","Display Type":"LED","Resolution":"1920 x 1080 Pixels","Batteries Included":"Yes","Batteries Required":"Yes","Battery cell composition":"Lithium Ion","Keyboard Description":"Backlit","Device interface - primary":"Keyboard","Form Factor":"laptop","Country of Origin":"India","Item Weight":"1 kg 640 g"}},{"id":"15s-fq5111TU","createdAt":"05-03-2023","brand":"HP","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Micro-Edge-Anti-Glare-15s-fq5111TU/dp/B0B6F5V23N?keywords=hp%2Blaptop%2Bi5&qid=1678017743&refinements=p_72%3A1318476031&rnid=1318475031&s=computers&sprefix=hp%2Bla%2Ccomputers%2C260&sr=1-3&th=1&linkCode=li3&tag=thebest10prod-21&linkId=09f8162becf9ac6db60283acda49eb43&language=en_IN&ref_=as_li_ss_il","rating":4.1,"available":true,"price":56713}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B6F5V23N&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":67832,"overview":"Introducing the HP 15s, a sleek and powerful laptop that\'s perfect for both work and play. Powered by a 12th Gen Intel Core i5 processor, this laptop offers lightning-fast performance that can handle even the most demanding tasks with ease. With 8GB of RAM and a 512GB SSD, you\'ll have plenty of space for all your files and applications, and with a 15.6-inch Micro-Edge Anti-Glare FHD display, you\'ll be able to enjoy crystal-clear visuals and vibrant colors.\\r\\n\\r\\nThe HP 15s also features Intel Iris Xe Graphics, which delivers stunning graphics performance that\'s perfect for gaming, video editing, and more. With Alexa built-in, you can control your laptop using your voice, making it easier than ever to stay productive on-the-go.\\r\\n\\r\\nThe laptop also comes equipped with dual speakers, delivering an immersive audio experience that\'s perfect for music, movies, and more. It runs on Windows 11 and comes with Microsoft Office 2021 pre-installed, providing you with all the tools you need to get work done. Weighing just 1.41 Kg, this laptop is light and portable, making it easy to take with you wherever you go","desc":"Introducing the HP 15s, a sleek and powerful laptop that\'s perfect for both work and play. Powered by a 12th Gen Intel Core i5 processor, this laptop offers lightning-fast performance that can handle even the most demanding tasks with ease. With 8GB of RAM and a 512GB SSD.","size":15.6,"score":9,"totalNoOfRatings":931,"overallRating":4.1,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd.","Model":"15s-fq5111TU","Model Name":"15s- fq5111TU","Model Year":"2022","Product Dimensions":"35.8 x 24.2 x 1.8 cm; 1.69 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"15s- fq5111TU","RAM Size":"8 GB","Memory Slots Available":"1","Flash Memory Installed Size":"512 GB","Ram Memory Installed Size":"8 GB","RAM memory maximum size":"16 GB","Ram Memory Technology":"DDR4","Hard Disk Description":"SSD","Operating System":"Windows 11 Home","Processor Brand":"Intel","Processor Speed":"4.4 GHz","Processor Type":"Core i5","Processor Count":"1","Processor model number":"i5-1235U","Graphics Card Description":"Integrated","Graphics Card Interface":"Integrated","Graphics Coprocessor":"Intel Iris Xe Graphics","Special Features":"FHD, Micro-Edge Display","Mounting Hardware":"Laptop, Power Adapter","Number of items":"1","Software included":"Microsoft Office 365, Internet Security","Standing screen display size":"15.6 Inches","Display Type":"FHD","Resolution":"1920 X 1080 (FHD) Pixels","Audio Output Type":"Headphones, Speakers","Batteries Included":"Yes","Batteries Required":"Yes","Battery cell composition":"Lithium Ion","Total USB ports":"3","Keyboard Description":"Traditional","Connector Type":"Bluetooth, Wi-Fi, USB, HDMI","Device interface - primary":"Microphone, Keyboard, Numeric Keypad","Form Factor":"Netbook","Country of Origin":"China","Item Weight":"1 kg 690 g"}},{"id":"IdeaPad-82KU017KIN","createdAt":"05-03-2023","brand":"Lenovo","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Lenovo-Ideapad-Keyboard-Warranty-82KU017KIN/dp/B09MM58Y7Q?keywords=lenovo%2Bideapad&qid=1678018779&rnid=1318475031&s=computers&sprefix=lenov%2Bide%2Ccomputers%2C297&sr=1-6&th=1&linkCode=li3&tag=thebest10prod-21&linkId=2e91d460076e7530d9bba828009ef403&language=en_IN&ref_=as_li_ss_il","rating":4.2,"available":true,"price":45126}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09MM58Y7Q&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":68490,"overview":"The Lenovo IdeaPad 82KU017KIN is a powerful ultrabook designed to cater to the needs of modern-day professionals and students alike. With its AMD Ryzen 5 processor, 8GB DDR4 RAM, and 512GB SSD, this laptop offers a smooth and efficient computing experience. It comes with a 15.6-inch Full HD display that delivers crisp and clear visuals, making it perfect for streaming movies or working on projects.This laptop also features integrated AMD Radeon Graphics, which allows for smooth and seamless graphics performance, whether you\'re working on a design project or playing a game. The IdeaPad comes with pre-installed Microsoft Office Home and Student 2019, so you can start working right out of the box. It runs on Windows 11 Home, the latest operating system from Microsoft, which provides a sleek and modern interface and features that are tailored to your needs.The Lenovo IdeaPad 82KU017KIN is lightweight and ultra-portable, weighing only 1.65 kilograms, making it easy to carry around with you wherever you go. It also features a backlit keyboard, making it easy to work in low-light environments, and has a battery life of up to 7 hours, so you can work or play for longer periods without worrying about running out of power.Overall, the Lenovo IdeaPad 82KU017KIN is a great choice for anyone looking for a powerful, yet compact and lightweight laptop that is perfect for everyday use. Whether you\'re a student, a professional, or just someone who needs a reliable laptop for day-to-day tasks, the IdeaPad is sure to meet all your needs.","desc":"The Lenovo IdeaPad 82KU017KIN is a powerful ultrabook designed to cater to the needs of modern-day professionals and students alike. With its AMD Ryzen 5 processor, 8GB DDR4 RAM, and 512GB SSD, this laptop offers a smooth and efficient computing experience. It comes with a 15.6-inch Full HD display that delivers crisp and clear visuals, making it perfect for streaming movies or working on projects","size":15.6,"score":9,"totalNoOfRatings":1308,"overallRating":4.2,"spec":{"Brand":"Lenovo","Model":"82KU017KIN","Model Name":"IdeaPad","Model Year":"2021","Product Dimensions":"35.9 x 23.7 x 2 cm; 1.65 Kilograms","Batteries":"1 Lithium Polymer batteries required. (included)","Item model number":"82KU017KIN","RAM Size":"8 GB","Memory Storage Capacity":"512 GB","Memory Slots Available":"2","Flash Memory Installed Size":"512 GB","Ram Memory Installed Size":"8 GB","RAM memory maximum size":"12 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"512 GB","Hard Drive Interface":"USB 3.2","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 11 Home","Processor Brand":"AMD","Processor Speed":"2.1 GHz","Processor Type":"Ryzen 5","Processor Count":"6","Processor model number":"5500U","Hardware Interface":"USB, HDMI, SDHC, SDXC, USB 2.0, Secure Digital Card","Graphics Card Description":"Integrated","Graphics RAM Type":"Shared","Graphics Card Interface":"Integrated","Graphics Coprocessor":"AMD Radeon Graphics","Special Features":"Built-in Microphone","Mounting Hardware":"Laptop, User Manual, Power Adapter","Number of items":"3","Software included":"Pre-Installed: MS Office Home and Student 2019, Windows® 11 Home 64, English","Display Technology":"LED","Standing screen display size":"15.6 Inches","Display Type":"FHD","Resolution":"1920 X 1080 (FHD) Pixels","Audio Output Type":"Headphones, Speakers","Power Source":"Battery Powered","Battery Average Life":"7 Hours","Battery Average Life Standby":"7 Hours","Batteries Included":"Yes","Batteries Required":"Yes","Battery cell composition":"Polymer","Wireless Type":"Bluetooth","Refresh Rate":"4 GHz","Total USB ports":"3","Keyboard Description":"Backlit","Connector Type":"Wi-Fi, USB, Ethernet, HDMI","Device interface - primary":"Keyboard","Form Factor":"Ultra-Portable","Device type":"ultrabook","Manufacturer":"Lenovo","Country of Origin":"China","Item Weight":"1 kg 650 g"}},{"id":"Surface-Laptop3","createdAt":"05-03-2023","brand":"Microsoft","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Microsoft-Touchscreen-Graphics-Platinum-V4G-00021/dp/B08692HGGZ?crid=3CXYKY9TTY95G&keywords=Microsoft%2BSurface%2BLaptop%2B3&qid=1678020078&s=computers&sprefix=microsoft%2Bsurface%2Blaptop%2B3%2Ccomputers%2C241&sr=1-3&th=1&linkCode=li3&tag=thebest10prod-21&linkId=95df778bb8a9924a309ea51ac34db6fa&language=en_IN&ref_=as_li_ss_il","rating":4.2,"available":true,"price":104999}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08692HGGZ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":68490,"overview":"The Microsoft Surface Laptop 3 is a sleek and stylish laptop that\'s perfect for users who are always on the go. Its platinum finish and slim form factor make it a great choice for anyone who wants a laptop that\'s both powerful and elegant.At just 1.54 kilograms, the Laptop 3 is lightweight and easy to carry around. It has a 15-inch display with a resolution of 2496 x 1664 pixels, which delivers crisp and clear visuals. The laptop is powered by an AMD R Series processor with eight cores, making it a great choice for multitasking and running demanding applications.The Laptop 3 comes with 8 GB of RAM and a 128 GB SSD, providing plenty of space to store files and run applications. The laptop has integrated AMD Radeon Vega 9 graphics, which deliver smooth and fluid visuals for gaming and video playback. The omnisonic speakers with Dolby Audio provide high-quality sound that\'s perfect for listening to music or watching movies.The Laptop 3 comes with Wi-Fi connectivity and features one USB 3.0 port, one audio-out port, and one microphone port for easy connectivity. It runs on Windows 10 Home and has an impressive battery life of up to 11.5 hours, ensuring you can work or play for an extended period without worrying about running out of power.In the box, you\'ll find the Surface Laptop 3, a power supply, a quick start guide, and safety and warranty documents. The Laptop 3 also includes a lithium-ion battery with a capacity of 4.9 watt-hours, providing long-lasting power in a compact package. Whether you\'re a student, a professional, or someone who wants a reliable and powerful laptop, the Microsoft Surface Laptop 3 is an excellent choice.","desc":"The Microsoft Surface Laptop 3 is a sleek and stylish laptop that\'s perfect for users who are always on the go. Its platinum finish and slim form factor make it a great choice for anyone who wants a laptop that\'s both powerful and elegant.","size":15,"score":9,"totalNoOfRatings":134,"overallRating":4.2,"spec":{"Brand":"Microsoft","Series":"Laptop 3","Colour":"Platinum","Form Factor":"Laptop","Item Height":"15 Centimeters","Item Width":"24.4 Centimeters","Standing screen display size":"15 Inches","Resolution":"2496 x1664","Product Dimensions":"33.9 x 24.4 x 15 cm; 1.54 Kilograms","Item model number":"1873","Processor Brand":"AMD","Processor Type":"R Series","Processor Count":"8","RAM Size":"8 GB","Memory Technology":"DDR4","Hard Drive Size":"128 GB","Hard Disk Description":"SSD","Speaker Description":"Omnisonic Speakers with Dolby® Audio™","Graphics Coprocessor":"AMD Radeon Vega 9","Graphics Chipset Brand":"AMD","Graphics Card Description":"Integrated","Connectivity Type":"Wi-Fi","Number of USB 3.0 Ports":"1","Number of Audio-out Ports":"1","Number of Microphone Ports":"1","Operating System":"Windows 10 Home","Battery Charge Cycles":"11.5 Hours","Average Battery Life (in hours)":"11.5 Hours","Are Batteries Included":"Yes","Lithium Battery Energy Content":"4.9 Watt Hours","Lithium Battery Weight":"100 Grams","Included Components":"Surface Laptop 3, Power Supply, Quick Start Guide, Safety and warranty documents (Mouse, Stylus Pen are not Included – to be bought separately)","Manufacturer":"Microsoft","Country of Origin":"USA","Item Weight":"1 kg 540 g"}},{"id":"Mi Notebook Pro","createdAt":"05-03-2023","brand":"Mi","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Notebook-Display-i5-11300H-Graphics-Fingerprint/dp/B098XL8VSM?crid=TG7PN13UHX7W&keywords=laptop+i5&qid=1678021896&rnid=1318475031&s=computers&sprefix=laptop+i%2Ccomputers%2C231&sr=1-23&linkCode=li3&tag=thebest10prod-21&linkId=6997d0f814e3295bfdc6741a4d7b8923&language=en_IN&ref_=as_li_ss_il","rating":4.3,"available":true,"price":56999}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B098XL8VSM&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":74999,"overview":"This laptop from Xiaomi, the Mi Notebook Pro, is a sleek and powerful machine that\'s perfect for anyone who needs a laptop for both work and play. It comes in a lustrous gray color and has a thin and light form factor, making it easy to take with you wherever you go. With its 14-inch screen and high-resolution display, you can enjoy crystal-clear visuals whether you\'re working on a project or streaming your favorite shows. The laptop also features an Intel Core i5 processor, 16 GB of RAM, and a fast SSD, ensuring that you can work and play with ease.","desc":"This laptop from Xiaomi, the Mi Notebook Pro, is a sleek and powerful machine that\'s perfect for anyone who needs a laptop for both work and play. It comes in a lustrous gray color and has a thin and light form factor, making it easy to take with you wherever you go. With its 14-inch screen and high-resolution display, you can enjoy crystal-clear visuals whether you\'re working on a project or streaming your favorite shows.","size":14,"score":9,"totalNoOfRatings":948,"overallRating":4.3,"spec":{"Brand":"MI","Series":"Mi Notebook Pro","Colour":"Lustrous Gray","Form Factor":"Thin & light Laptop","Item Height":"22 Centimeters","Item Width":"17 Millimeters","Standing screen display size":"14 Inches","Screen Resolution":"2500 x 1600 pixels","Resolution":"2560 X 1600 (QHD) Pixels","Product Dimensions":"31.6 x 1.7 x 22 cm; 1.4 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"XMA2006-FK","Processor Brand":"Intel","Processor Type":"Core i5","Processor Speed":"3.1 GHz","Processor Count":"1","RAM Size":"16 GB","Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Maximum Memory Supported":"8 GB","Memory Clock Speed":"3200 MHz","Hard Disk Description":"SSD","Audio Details":"Headphones, Speakers","Speaker Description":"Built-in Stereo Speakers","Graphics Coprocessor":"Intel Iris Xe Graphics","Graphics Chipset Brand":"Intel","Graphics Card Description":"Integrated","Graphics RAM Type":"Shared","Graphics Card Interface":"Integrated","Connectivity Type":"Bluetooth","Wireless Type":"Bluetooth","Number of USB 2.0 Ports":"1","Number of USB 3.0 Ports":"2","Number of HDMI Ports":"1","Hardware Platform":"PC","Operating System":"Windows 11 Home","Average Battery Life (in hours)":"11 Hours","Are Batteries Included":"Yes","Number Of Lithium Ion Cells":"4","Included Components":"Power Adapter, User Manual, Notebook, Power Cord","Manufacturer":"Xiaomi","Country of Origin":"China","Item Weight":"1 kg 400 g"}},{"id":"EX 215-54","createdAt":"05-03-2023","brand":"Acer","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Acer-Lightweight-Processor-Display-Graphics/dp/B0B5ZMZ8GF?crid=3OW3GO13SQI1G&keywords=laptop%2Bi3&qid=1678022705&refinements=p_72%3A1318476031&rnid=1318475031&s=computers&sprefix=laptop%2Bi5%2Ccomputers%2C930&sr=1-3&th=1&linkCode=li3&tag=thebest10prod-21&linkId=3bed359cf90d26638041348d3365fbec&language=en_IN&ref_=as_li_ss_il","rating":4,"available":true,"price":32990}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B5ZMZ8GF&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":43999,"overview":"This laptop from Xiaomi, the Mi Notebook Pro, is a sleek and powerful machine that\'s perfect for anyone who needs a laptop for both work and play. It comes in a lustrous gray color and has a thin and light form factor, making it easy to take with you wherever you go. With its 14-inch screen and high-resolution display, you can enjoy crystal-clear visuals whether you\'re working on a project or streaming your favorite shows. The laptop also features an Intel Core i5 processor, 16 GB of RAM, and a fast SSD, ensuring that you can work and play with ease.","desc":"This laptop from Xiaomi, the Mi Notebook Pro, is a sleek and powerful machine that\'s perfect for anyone who needs a laptop for both work and play. It comes in a lustrous gray color and has a thin and light form factor, making it easy to take with you wherever you go. With its 14-inch screen and high-resolution display, you can enjoy crystal-clear visuals whether you\'re working on a project or streaming your favorite shows.","size":14,"score":9,"totalNoOfRatings":948,"overallRating":4,"spec":{"Brand":"Acer","Model":"EX 215-54","Model Name":"Extensa","Model Year":"2022","Product Dimensions":"23.8 x 36.3 x 2 cm; 1.7 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"EX 215-54","Flash Memory Installed Size":"256 GB","Ram Memory Installed Size":"8 GB","RAM memory maximum size":"12 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Disk Description":"SSD","Operating System":"Windows 11 Home","Processor Brand":"Intel","Processor Speed":"1.7 GHz","Processor Type":"Core i3","Processor Count":"1","Processor model number":"Core i3 1115G4","Graphics Card Description":"Integrated","Graphics Card Interface":"Integrated","Graphics Coprocessor":"Intel UHD Graphics","Resolution":"1080p, 1280 x 720","Special Features":"Bluetooth 5.1","Mounting Hardware":"1U (contains Laptop 1N, Power cord 1N, Adapter 1N, User Manual 1N)","Number of items":"1","Software included":"Webcam","Display Technology":"LCD","Standing screen display size":"15.6 Inches","Display Type":"FHD","Aspect Ratio":"16:9","Audio Output Type":"Speakers","Wattage":"45 Watts","Battery Average Life":"8 Hours","Batteries Included":"Yes","Batteries Required":"Yes","Battery cell composition":"Lithium Ion","Wireless Type":"802.11a/b/g/n/ac","Total USB ports":"3","Connector Type":"Bluetooth, Ethernet","Form Factor":"laptop","Manufacturer":"Acer","Country of Origin":"China","Item Weight":"1 kg 700 g"}},{"id":"15s-fq2673TU","createdAt":"05-03-2023","brand":"HP","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-15s-fq2673TU/dp/B0B4N6JVMW?crid=3OW3GO13SQI1G&keywords=laptop%2Bi3&qid=1678022705&refinements=p_72%3A1318476031&rnid=1318475031&s=computers&sprefix=laptop%2Bi5%2Ccomputers%2C930&sr=1-17&th=1&linkCode=li3&tag=thebest10prod-21&linkId=d174c2408be299bfb96b7c04e89335e6&language=en_IN&ref_=as_li_ss_il","rating":4,"available":true,"price":41490}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B4N6JVMW&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":43999,"overview":"The world of technology is constantly evolving, and the demand for faster, more efficient devices is ever-increasing. HP, one of the world\'s leading technology companies, has recently released its latest model, the 15s-fq2673TU. This laptop boasts impressive specifications, making it a top contender in the market.","desc":"The world of technology is constantly evolving, and the demand for faster, more efficient devices is ever-increasing. HP, one of the world\'s leading technology companies, has recently released its latest model, the 15s-fq2673TU. This laptop boasts impressive specifications, making it a top contender in the market.","size":15.6,"score":9,"totalNoOfRatings":948,"overallRating":4,"spec":{"Brand":"HP","Model":"15s-fq2673TU","Model Name":"15s-fq2673TU","Model Year":"2022","Product Dimensions":"35.8 x 24.2 x 1.8 cm; 1.69 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"15s-fq2673TU","RAM Size":"8 GB","Flash Memory Installed Size":"512 GB","Ram Memory Installed Size":"8 GB","Ram Memory Technology":"DDR4","Hard Drive Size":"512 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Operating System":"Windows 11 Home","Processor Brand":"Intel","Processor Speed":"4.1 GHz","Processor Type":"Core i3","Processor Count":"1","Processor model number":"i3-1115G4","Hardware Interface":"USB","Graphics Card Description":"Integrated","Graphics Card Interface":"Integrated","Graphics Coprocessor":"Intel UHD Graphics","Special Features":"Micro-Edge Display","Mounting Hardware":"Laptop, Power Adapter","Number of items":"1","Software included":"Microsoft Office 365","Standing screen display size":"15.6 Inches","Display Type":"LED","Screen Resolution":"1920 x 1080 pixels","Resolution":"1920 x 1080","Audio Output Type":"Headphones, Speakers","Batteries Included":"Yes","Batteries Required":"Yes","Battery cell composition":"Lithium Ion","Total USB ports":"3","Keyboard Description":"Chiclet","Connector Type":"Bluetooth, USB, HDMI","Device interface - primary":"Microphone","Form Factor":"Laptop","Manufacturer":"HP","Country of Origin":"China","Item Weight":"1 kg 690 g"}},{"id":"AN515-57","createdAt":"05-03-2023","brand":"Acer","type":"Laptop","category":"Electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/Acer-i5-11400H-Processor-Graphics-AN515-57/dp/B0B3XPG9WG?crid=3MXN8CB0ZQN6L&keywords=laptop%2Bi5&qid=1678025498&refinements=p_72%3A1318476031&rnid=1318475031&s=computers&sprefix=laptop%2Bi5%2Ccomputers%2C1483&sr=1-40&th=1&linkCode=li3&tag=thebest10prod-21&linkId=e70e18811f5873a051d988d711c6b395&language=en_IN&ref_=as_li_ss_il","rating":4.2,"available":true,"price":62990}],"images":["//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B3XPG9WG&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=thebest10prod-21&language=en_IN"],"mrp":88999,"overview":"The world of technology is constantly evolving, and the demand for faster, more efficient devices is ever-increasing. HP, one of the world\'s leading technology companies, has recently released its latest model, the 15s-fq2673TU. This laptop boasts impressive specifications, making it a top contender in the market.","desc":"The world of technology is constantly evolving, and the demand for faster, more efficient devices is ever-increasing. HP, one of the world\'s leading technology companies, has recently released its latest model, the 15s-fq2673TU. This laptop boasts impressive specifications, making it a top contender in the market.","size":15.6,"score":9,"totalNoOfRatings":470,"overallRating":4.2,"spec":{"Brand":"Acer","Model":"AN515-57","Model Name":"AN515-57","Model Year":"2022","Product Dimensions":"25.5 x 36.3 x 2.4 cm; 2.2 Kilograms","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"AN515-57","RAM Size":"16 GB","Flash Memory Installed Size":"512 GB","Ram Memory Installed Size":"16 GB","RAM memory maximum size":"32 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"512 GB","Hard Disk Description":"SSD","Operating System":"Windows 11","Processor Brand":"Intel","Processor Speed":"2.2 GHz","Processor Type":"Core i5","Processor Count":"1","Processor model number":"Intel Core i5-11400H","Hardware Interface":"USB","Graphics Card Description":"Dedicated","Graphics Card Ram Size":"4 GB","Graphics RAM Type":"GDDR6","Graphics Card Interface":"AGP","Graphics Coprocessor":"NVIDIA GeForce GTX 1650","Resolution":"1080p","Special Features":"Dual M.2 Support +, Acer Nitro Sense, Killer DoubleShot Pro, Double Fan With Quad Exhaust port, dts X Immersive Gaming Audio","Mounting Hardware":"1U (contains Laptop 1N, Power cord 1N, Adapter 1N, User Manual 1N)","Number of items":"1","Software included":"Windows 11","Standing screen display size":"15.6 Inches","Display Type":"FHD","Aspect Ratio":"16:9","Screen Resolution":"1920 x 1080 pixels","Audio Output Type":"Speakers","Wattage":"57.5 Watts","Batteries Included":"Yes","Batteries Required":"Yes","Battery cell composition":"Lithium Ion","Wireless Type":"802.11ax","Total USB ports":"3","Keyboard Description":"Chiclet","Connector Type":"Wi-Fi, Ethernet","Device interface - primary":"Keyboard","Form Factor":"laptop","Device type":"Gaming Laptop","Manufacturer":"Acer","Country of Origin":"China","Item Weight":"2 kg 200 g"}}]},"clothes":{"title":"Clothes","data":[]},"Appliances":{"title":"Appliances","data":[]},"toys":{"title":"Toys","data":[]},"furniture":{"title":"Furniture","data":[]},"books":{"title":"Books","data":[]},"jewelry":{"title":"Jewelry","data":[]},"gardenAndOutdoor":{"title":"Garden & Outdoor","data":[]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map