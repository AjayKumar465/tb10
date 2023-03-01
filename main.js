"use strict";
(self["webpackChunkthebest10p_web"] = self["webpackChunkthebest10p_web"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb/breabcrumb.module */ 3616);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ 3529);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/app.service */ 6475);
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
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__.HashLocationStrategy
  }, _services_app_service__WEBPACK_IMPORTED_MODULE_4__.TheB10ProductsService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _routes__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _views_views_module__WEBPACK_IMPORTED_MODULE_5__.ViewesModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _routes__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _views_views_module__WEBPACK_IMPORTED_MODULE_5__.ViewesModule]
  });
})();

/***/ }),

/***/ 3616:
/*!*************************************************!*\
  !*** ./src/app/breadcrumb/breabcrumb.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home/home.component */ 9470);
/* harmony import */ var _views_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/layout */ 9149);
/* harmony import */ var _views_product_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/product/product-details.component */ 7166);
/* harmony import */ var _app_routing_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing-loader */ 1559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
  data: {
    title: ''
  }
}, {
  path: '',
  component: _views_layout__WEBPACK_IMPORTED_MODULE_1__.FullLayoutComponent,
  data: {
    title: 'Home',
    breadcrumb: 'Home'
  },
  children: [{
    path: 'home',
    component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    data: {
      title: 'home',
      breadcrumb: 'Home',
      preload: true
    }
  }, {
    path: 'product',
    component: _views_product_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent,
    data: {
      title: 'Product Details View',
      breadcrumb: 'Product Details View',
      preload: true
    }
  }]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_app_routing_loader__WEBPACK_IMPORTED_MODULE_3__.AppCustomPreloader],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 3529:
/*!*********************************!*\
  !*** ./src/app/routes/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* reexport safe */ _app_routes__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule),
/* harmony export */   "routes": () => (/* reexport safe */ _app_routes__WEBPACK_IMPORTED_MODULE_0__.routes)
/* harmony export */ });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 8788);


/***/ }),

/***/ 6475:
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _products_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheB10ProductsService": () => (/* binding */ TheB10ProductsService)
/* harmony export */ });
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.json */ 6272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class TheB10ProductsService {
  getRecentlyAddedProducts() {
    let resultJson = {};
    for (const [key, value] of Object.entries(/*#__PURE__*/ (_products_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_products_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_products_json__WEBPACK_IMPORTED_MODULE_0__, 2))))) {
      if (value.data) if (value.data.length < 10) {
        resultJson[key] = value;
      } else {
        resultJson[key] = {
          title: value.title,
          data: value.data.slice(10)
        };
      }
    }
    return Object.values(resultJson);
  }
  getProduct(category, id) {
    let productsJson = {
      .../*#__PURE__*/ (_products_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_products_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_products_json__WEBPACK_IMPORTED_MODULE_0__, 2)))
    };
    if (productsJson[category] && productsJson[category]['data']) {
      return productsJson[category]['data'].find(element => element.id == id);
    }
  }
}
TheB10ProductsService.ɵfac = function TheB10ProductsService_Factory(t) {
  return new (t || TheB10ProductsService)();
};
TheB10ProductsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TheB10ProductsService,
  factory: TheB10ProductsService.ɵfac
});

/***/ }),

/***/ 8306:
/*!********************************************!*\
  !*** ./src/app/services/safe-html.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 3841:
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/app.service */ 6475);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);







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
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 758,
  vars: 0,
  consts: [[1, "preloader"], ["id", "header", 1, "page-topbar"], ["viewport", ""], ["id", "wd-header", 1, "dark-header"], [1, "container-fluid", "custom-width"], [1, "row"], [1, "col-md-12", "col-lg-3", "col-xl-3", "text-center", "second-home-main-logo"], ["href", "#"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "col-md-6", "col-lg-6", "slider-search-section", "d-none", "d-lg-block", "slider"], [1, "input-group"], [1, "input-group-btn"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "wd-slider-search-btn"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [1, "dropdown-menu", "wd-dropdown-menu"], [1, "search-category"], [1, "col-md-6"], [1, "search-category-title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], ["type", "text", "placeholder", "Enter your search key ...", 1, "form-control", "input-search-box"], ["type", "button", 1, "btn", "btn-secondary", "wd-search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["id", "wd-header-2", 1, "wd-header-nav", "sticker-nav", "mob-sticky", "bg-orange"], [1, "col-md-8", "col-2", "col-sm-6", "col-md-4", "d-block", "d-lg-none"], [1, "accordion-wrapper", "hide-sm-up"], ["href", "#", 1, "mobile-open"], [1, "fa", "fa-bars"], ["id", "mobilemenu", 1, "accordion"], ["href", "#", 1, "closeme"], [1, "fa", "fa-times"], [1, "mob-logo"], ["src", "assets/img/logo.png", "alt", ""], [1, "link"], [1, "fa", "fa-chevron-down"], [1, "submenu", "font-sky"], ["href", "compare-products.html"], ["href", "compare-products-single.html"], ["href", "compare-products-choose-market.html"], [1, "submenu"], ["href", "shop-left-sidebar.html"], ["href", "shop-right-sidebar.html"], ["href", "shop-left-sidebar-full-grid.html"], ["href", "shop-right-sidebar-full-grid.html"], ["href", "product-details.html"], ["href", "product-details-scroll.html"], ["href", "wishlist.html"], ["href", "product-details-review-history.html"], ["href", "product-details-single-review.html"], ["href", "review-left-sidebar.html"], ["href", "review-right-sidebar.html"], ["href", "blog-full-grid.html"], ["href", "blog-two-grid.html"], ["href", "blog-three-grid.html"], ["href", "blog-four-grid.html"], ["href", "blog-four-grid-left-sidebar.html"], ["href", "blog-four-grid-right-sidebar.html"], ["href", "single-blog-with.html"], ["href", "single-blog-with-add.html"], [1, "out-link"], ["href", "contact-us.html", 1, ""], ["href", "coupon.html", 1, ""], [1, "col-xl-3", "d-none", "d-xl-block"], ["id", "cat-department", 1, "department"], ["src", "assets/img/menu-bar.png", "alt", "menu-bar"], [1, "shape-img"], ["src", "assets/img/department-shape-img.png", "alt", "department img", 1, "img-fluid"], ["id", "department-list", 1, "department-list", 2, "display", "none"], [1, "list-group"], [1, "list-group-item"], ["href", "#!"], [1, "department-list-logo"], ["src", "assets/img/department-img/department-img-1.png", "alt", ""], [1, "sub-list-main-menu"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "wd-sub-list"], [1, "container"], [1, "col-md-4"], [1, "black-color", "wd-sub-list-title"], [1, "wd-sub-menu"], ["src", "assets/img/department-img/department-sub-list-img-1.jpg", "alt", "department-sub-list-img", 1, "department-sub-list-img"], ["src", "assets/img/department-img/department-sub-list-img-2.jpg", "alt", "department-sub-list-img", 1, "department-sub-list-img"], ["src", "assets/img/department-img/department-img-2.png", "alt", ""], ["src", "assets/img/department-img/department-img-3.png", "alt", ""], ["src", "assets/img/department-img/department-img-4.png", "alt", ""], ["src", "assets/img/department-img/department-img-5.png", "alt", ""], ["src", "assets/img/department-img/department-img-6.png", "alt", ""], ["src", "assets/img/department-img/department-img-7.png", "alt", ""], ["src", "assets/img/department-img/department-img-8.png", "alt", ""], ["src", "assets/img/department-img/department-img-9.png", "alt", ""], ["src", "assets/img/department-img/department-img-10.png", "alt", ""], [1, "col-md-6", "col-lg-10", "col-xl-7", "header-search-box", "d-none", "d-lg-block"], ["id", "main-menu-2", 1, "main-menu-desktop", "no-border", "main-menu-sh"], [1, "menu-container", "wd-megamenu", "text-left"], [1, "menu"], [1, "wd-megamenu-ul"], ["href", "#", 1, "main-menu-list"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["aria-hidden", "true", 1, "fa", "fa-angle-down", "angle-down"], ["href", "compare-products.html", 1, "main-menu-list"], [1, "single-dropdown"], ["href", "shop-left-sidebar.html", 1, "main-menu-list"], [1, "pos-inherit"], [1, "single-dropdown", "megamenu"], ["href", "#", 1, "menu-subtitle"], [1, "sub-menu-list"], ["href", "blurb-blog.html"], ["href", "blurb-call-to-action.html"], ["href", "blurb-carousel.html"], ["href", "blurb-compare-products.html"], ["href", "blurb-footer.html"], ["href", "blurb-counterup.html"], ["href", "404.html"], ["href", "blurb-product.html"], ["href", "blurb-reveiw.html"], ["href", "blurb-service.html"], ["href", "blurb-widgetstyle-1.html"], ["href", "blurb-social.html"], ["href", "blurb-subscribe.html"], ["href", "coming-soon.html"], ["href", "blurb-widgetstyle-2.html"], ["href", "blurb-widgetstyle-3.html"], ["href", "blurb-widgetstyle-4.html"], ["href", "blurb-widgetstyle-5.html"], ["href", "blurb-widgetstyle-6.html"], ["href", "product-details-scroll.html", 1, "add-img"], ["src", "assets/img/nav-img-1.jpg", "alt", "Product Img", 1, "figure-img", "img-fluid"], ["src", "assets/img/nav-img-2.jpg", "alt", "Product Img", 1, "figure-img", "img-fluid"], ["href", "review-left-sidebar.html", 1, "main-menu-list"], ["href", "blog-four-grid-left-sidebar.html", 1, "main-menu-list"], ["href", "coupon.html", 1, "main-menu-list"], [1, "col-10", "col-sm-6", "col-md-4", "col-lg-2", "col-xl-2", "text-right"], [1, "header-cart"], [1, "account-section", "d-md-block", "d-lg-none"], ["data-toggle", "modal", "data-target", ".bd-example-modal-lg2", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-sign-in"], [1, "serch-wrapper"], [1, "search"], ["placeholder", "Search", "type", "text", 1, "search-input"], ["href", "javascript:void(0)"], [1, "fa", "fa-search"], ["href", "coupon.html", 1, "coupon-save"], ["aria-hidden", "true", 1, "fa", "fa-star-o"], [1, "count"], ["href", "wishlist.html", 1, "header-wishlist"], ["aria-hidden", "true", 1, "fa", "fa-heart-o"], [1, "dropdown", "wd-compare-btn"], ["type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "compare-btn"], [1, "fa", "fa-balance-scale"], ["aria-labelledby", "dropdownMenu2", 1, "dropdown-menu", "dropdown-menu-right"], [1, "wd-item-list"], [1, "media"], ["src", "assets/img/cart-img-1.jpg", "alt", "cart-img", 1, "d-flex", "mr-3"], [1, "media-body"], [1, "mt-0", "list-group-title"], [1, "rating"], ["aria-hidden", "true", 1, "fa", "fa-star", "active-color"], [1, "cart-price"], ["src", "assets/img/cart-img-2.jpg", "alt", "cart-img", 1, "d-flex", "mr-3"], [1, "media", "text-center"], ["href", "compare-products.html", 1, "btn", "btn-primary", "go-compare-page"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "example-container", "1"], ["id", "main"], [1, "carousel-c"], [1, "container-fluid", "main-sec"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 1, 2)(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " All Categories ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 5)(19, "div", 16)(20, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cameras and photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul")(23, "li")(24, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li")(28, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li")(32, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16)(44, "h6", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cameras and photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ul")(47, "li")(48, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li")(64, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 11)(69, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "section", 22)(72, "div", 4)(73, "div", 5)(74, "div", 23)(75, "div", 24)(76, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ul", 27)(79, "li")(80, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 30)(83, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li")(86, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "ul", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li")(91, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Comparison Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ul", 34)(95, "li")(96, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Comparison Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li")(99, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Compare Products Single");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li")(102, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Compare Products Choose Market");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "shop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "ul", 38)(109, "li")(110, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Shop Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li")(113, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Shop Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li")(116, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Shop Left Sidebar Full Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li")(119, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Shop Right Sidebar Full Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li")(122, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Product Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li")(125, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Product Details v2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li")(128, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Wishlist View");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li")(131, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "megamenu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "ul", 38)(135, "li")(136, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Visual Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li")(139, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Chinese phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li")(142, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Google Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li")(145, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li")(148, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li")(151, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li")(154, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li")(157, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li")(160, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li")(163, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Phone Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "li")(166, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Phone Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "li")(169, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Visual Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "li")(172, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Chinese phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li")(175, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Google Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li")(178, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Cheap Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li")(181, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Luxury phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "li")(184, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Simple phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li")(187, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "li")(190, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li")(193, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li")(196, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "li")(199, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "li")(202, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "li")(205, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "li")(208, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li")(211, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li")(214, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "ul", 38)(218, "li")(219, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Product History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "li")(222, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Single Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li")(225, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Review Left Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li")(228, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Review Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "li")(231, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "ul", 38)(235, "li")(236, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Blog Full Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li")(239, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Blog Two Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li")(242, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Blog Three Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "li")(245, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Blog Four Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "li")(248, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Blog Four Grid Left Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li")(251, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Blog Four Grid Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li")(254, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Single Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li")(257, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Single Blog With Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "li", 58)(260, "a", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "li", 58)(263, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Coupon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 61)(266, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " All Department ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 66)(272, "ul", 67)(273, "li", 68)(274, "a", 69)(275, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "img", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Furniture");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 74)(281, "div", 75)(282, "div", 5)(283, "div", 76)(284, "h6", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "ul", 78)(287, "li")(288, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "li")(291, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "li")(294, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "li")(297, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "li")(300, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "li")(303, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "li")(306, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "li")(309, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "li")(312, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 76)(315, "h6", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "ul", 78)(318, "li")(319, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "li")(322, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "li")(325, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "li")(328, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "li")(331, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "li")(334, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "li")(337, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "li")(340, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "li")(343, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 76)(346, "h6", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "ul", 78)(349, "li")(350, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "li")(353, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "li")(356, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "li")(359, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "li")(362, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "Top Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "li")(365, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "li")(368, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "li")(371, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "li")(374, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 16)(377, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](378, "img", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 16)(380, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "img", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "li", 68)(383, "a", 44)(384, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "li", 68)(389, "a", 44)(390, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "img", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "Clothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "li", 68)(395, "a", 44)(396, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "li", 68)(401, "a", 44)(402, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "li", 68)(407, "a", 44)(408, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "img", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "Corporate staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "li", 68)(413, "a", 44)(414, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "img", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Sinking staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "li", 68)(419, "a", 44)(420, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](421, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Plant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "li", 68)(425, "a", 44)(426, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](427, "img", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "Washing machine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "li", 68)(431, "a", 44)(432, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](433, "img", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Winding staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 90)(437, "div", 91)(438, "div", 92)(439, "div", 93)(440, "ul", 94)(441, "li")(442, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "i", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "li")(447, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Comparison Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](449, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "ul", 99)(451, "li")(452, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "Comparison Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "li")(455, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Compare Products Single");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "li")(458, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Compare Products Choose Market");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "li")(461, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Shop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](463, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "ul", 99)(465, "li")(466, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Shop Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "li")(469, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "Shop Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "li")(472, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Shop Left Sidebar Full Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "li")(475, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, "Shop Right Sidebar Full Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "li")(478, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Product Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "li")(481, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Product Details v2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "li")(484, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Wishlist View");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "li", 101)(487, "a", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Shortcode ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "ul", 102)(491, "li")(492, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "Shortcode One");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "ul", 104)(495, "li")(496, "a", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](497, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, " blurb-blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "li")(500, "a", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](501, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "blurb-call-to-action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "li")(504, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](505, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](506, "blurb-carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "li")(508, "a", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "blurb-compare-products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "li")(512, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](513, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "blurb-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "li")(516, "a", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](517, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "blurb Count up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "li")(520, "a", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](521, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "404 page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "li")(524, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Shortcode Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "ul", 104)(527, "li")(528, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](529, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "blurb-product");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "li")(532, "a", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](533, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, "blurb-reveiw");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "li")(536, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](537, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "blurb-service");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "li")(540, "a", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](541, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "blurb-widgetstyle-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "li")(544, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](545, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, "blurb social icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "li")(548, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](549, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](550, "blurb Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "li")(552, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](553, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "Coming Soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "li")(556, "a", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](557, "Shortcode three");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "ul", 104)(559, "li")(560, "a", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](562, "blurb-widgetstyle-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "li")(564, "a", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](565, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](566, "blurb-widgetstyle-3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "li")(568, "a", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](569, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "blurb-widgetstyle-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "li")(572, "a", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, "blurb-widgetstyle-5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "li")(576, "a", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](577, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](578, "blurb-widgetstyle-6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "li")(580, "a", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](581, "img", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "a", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](583, "img", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "li")(585, "a", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, "REVIEWS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "ul", 99)(588, "li")(589, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](590, "Product History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "li")(592, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](593, "Single Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "li")(595, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](596, "Review Left Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "li")(598, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, "Review Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "li")(601, "a", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](602, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "ul", 99)(604, "li")(605, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](606, "Blog Full Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "li")(608, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, "Blog Two Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "li")(611, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "Blog Three Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "li")(614, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](615, "Blog Four Grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "li")(617, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "Blog Four Grid Left Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "li")(620, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "Blog Four Grid Right Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "li")(623, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "Single Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "li")(626, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](627, "Single Blog With Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](628, "li")(629, "a", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](630, "Coupon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](631, "div", 130)(632, "div", 131)(633, "div", 132)(634, "button", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](635, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "Login/Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "div", 135)(639, "div", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](640, "input", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](641, "a", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](642, "i", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "a", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](644, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "span", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](646, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "a", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](648, "i", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](649, "span", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](650, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "div", 145)(652, "button", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](653, "i", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](654, "span", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](655, "9");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](656, "div", 148)(657, "div", 149)(658, "div", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](659, "img", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](660, "div", 152)(661, "h6", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](662, "Voyage Yoga Bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](663, "div", 154)(664, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](665, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](666, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](667, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](668, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](669, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](670, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](671, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](672, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](673, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](674, "div", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](675, "$59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](676, "div", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](677, "img", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](678, "div", 152)(679, "h6", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](680, "Voyage Yoga Bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "div", 154)(682, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](683, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](684, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](685, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](686, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](687, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](688, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](689, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](690, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](691, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](692, "div", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](693, "$59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](694, "div", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](695, "img", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](696, "div", 152)(697, "h6", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](698, "Voyage Yoga Bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](699, "div", 154)(700, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](701, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](702, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](703, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](704, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](705, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](706, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](707, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](708, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](709, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "div", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](711, "$59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](712, "div", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](713, "img", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](714, "div", 152)(715, "h6", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](716, "Voyage Yoga Bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](717, "div", 154)(718, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](719, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](720, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](721, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](722, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](723, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](724, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](725, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](726, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](727, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](728, "div", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](729, "$59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](730, "div", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](731, "img", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](732, "div", 152)(733, "h6", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](734, "Voyage Yoga Bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](735, "div", 154)(736, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](737, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](738, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](739, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](740, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](741, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](742, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](743, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](744, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](745, "i", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](746, "div", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](747, "$59");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](748, "div", 158)(749, "a", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](750, "Compare ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](751, "i", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](752, "mat-sidenav-container", 161)(753, "mat-sidenav-content")(754, "div", 162)(755, "div", 163)(756, "div", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](757, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent],
  encapsulation: 2
});

/***/ }),

/***/ 9470:
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/app.service */ 6475);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Add to compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", product_r6 == null ? null : product_r6.images == null ? null : product_r6.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs ", product_r6 == null ? null : product_r6.markets == null ? null : product_r6.markets[0].price, "");
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
    $('#product-slider-two').owlCarousel({
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
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["home"]],
  decls: 39,
  vars: 2,
  consts: [["viewport", ""], ["id", "main-slider-section"], ["id", "main-slider", 1, "slider-bg2", "owl-carousel", "owl-theme", "product-review", "slider-cat"], [1, "item", "d-flex", "slider-bg", "align-items-center"], [1, "container-fluid"], [1, "row", "justify-content-end"], [1, "slider-text", "col-sm-6", "col-xl-4", "col-md-6", "order-2", "order-sm-1"], [1, "slider-title"], [1, "highlights-text"], [1, "slider-content"], ["href", "shop-left-sidebar.html", 1, "btn", "btn-primary", "wd-shop-btn", "slider-btn"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "col-sm-6", "col-md-6", "col-xl-6", "order-1", "order-sm-2", "slider-img"], ["src", "assets/img/slider-img/slider.png", "alt", ""], [1, "slider-text", "col-sm-6", "col-xl-4", "col-md-6"], [1, "sub-title"], [1, "col-sm-6", "col-md-6", "col-xl-6", "slider-img", "fadeInDown", "animated"], ["id", "product-amazon", "class", "style-fd", 4, "ngIf"], [3, "product"], ["id", "product-amazon", 1, "style-fd"], ["class", "container-fluid custom-width", 4, "ngFor", "ngForOf"], [1, "container-fluid", "custom-width"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "section-title-center", "text-left"], [1, "title", "pl-0"], ["id", "product-slider-two", 1, "owl-carousel", "owl-theme"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "figure", "product-box"], [1, "product-box-img"], [3, "click"], ["alt", "Product Img", 1, "figure-img", "img-fluid", 3, "src"], [1, "quick-view-btn"], [1, "compare-btn"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "figure-caption", "text-center"], [1, "badge", "badge-secondary", "wd-badge", "text-uppercase"], [1, "wishlist"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "price-start"], [1, "active-color"], [1, "content-excerpt"], [1, "rating"], ["href", "#"], ["aria-hidden", "true"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-exchange"]],
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/app.service */ 6475);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs ", market_r3 == null ? null : market_r3.price, "");
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
  return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs ", market_r2 == null ? null : market_r2.price, "");
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewesModule": () => (/* binding */ ViewesModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/breadcrumb/breabcrumb.module */ 3616);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material.module */ 3806);
/* harmony import */ var _services_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/safe-html.pipe */ 8306);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3841);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 9470);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ 9149);
/* harmony import */ var _product_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product-details.component */ 7166);
/* harmony import */ var _product_product_quick_view_model_componet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product-quick-view.model.componet */ 3717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class ViewesModule {}
ViewesModule.ɵfac = function ViewesModule_Factory(t) {
  return new (t || ViewesModule)();
};
ViewesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ViewesModule
});
ViewesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, src_app_breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ViewesModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _layout__WEBPACK_IMPORTED_MODULE_5__.FullLayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _product_product_details_component__WEBPACK_IMPORTED_MODULE_6__.ProductDetailsComponent, _services_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe, _product_product_quick_view_model_componet__WEBPACK_IMPORTED_MODULE_7__.ProductDetailsQuickViewComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, src_app_breadcrumb_breabcrumb_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6272:
/*!****************************************!*\
  !*** ./src/app/services/products.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"electronics":{"title":"Electronics","data":[{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}}]},"clothes":{"title":"Clothes","data":[]},"appliances":{"title":"Appliances","data":[]},"toys":{"title":"Toys","data":[]},"furniture":{"title":"Furniture","data":[]},"books":{"title":"Books","data":[]},"jewelry":{"title":"Jewelry","data":[]},"gardenAndOutdoor":{"title":"Garden & Outdoor","data":[]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map