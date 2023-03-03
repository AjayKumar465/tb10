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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
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
  providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_4__.TheB10ProductsService],
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
  decls: 478,
  vars: 0,
  consts: [[1, "preloader"], ["id", "header", 1, "page-topbar"], ["viewport", ""], ["id", "wd-header", 1, "dark-header"], [1, "container-fluid", "custom-width"], [1, "row"], [1, "col-md-12", "col-lg-3", "col-xl-3", "text-center", "second-home-main-logo"], ["href", "#"], ["src", "assets/img/logo.png", "alt", "Logo"], [1, "col-md-6", "col-lg-6", "slider-search-section", "d-none", "d-lg-block", "slider"], [1, "input-group"], [1, "input-group-btn"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "wd-slider-search-btn"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], [1, "dropdown-menu", "wd-dropdown-menu"], [1, "search-category"], [1, "col-md-6"], [1, "search-category-title"], ["aria-hidden", "true", 1, "fa", "fa-angle-double-right"], ["type", "text", "placeholder", "Enter your search key ...", 1, "form-control", "input-search-box"], ["type", "button", 1, "btn", "btn-secondary", "wd-search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["id", "wd-header-2", 1, "wd-header-nav", "sticker-nav", "mob-sticky", "bg-orange"], [1, "col-md-8", "col-2", "col-sm-6", "col-md-4", "d-block", "d-lg-none"], [1, "accordion-wrapper", "hide-sm-up"], [1, "mobile-open"], [1, "fa", "fa-bars"], ["id", "mobilemenu", 1, "accordion"], [1, "closeme"], [1, "fa", "fa-times"], [1, "mob-logo"], ["src", "assets/img/logo.png", "alt", ""], [1, "link"], [1, "fa", "fa-chevron-down"], [1, "submenu", "font-sky"], [1, "submenu"], [1, "out-link"], ["href", "#", 1, ""], [1, "col-xl-3", "d-none", "d-xl-block"], ["id", "cat-department", 1, "department"], ["src", "assets/img/menu-bar.png", "alt", "menu-bar"], [1, "shape-img"], ["src", "assets/img/department-shape-img.png", "alt", "department img", 1, "img-fluid"], ["id", "department-list", 1, "department-list", 2, "display", "none"], [1, "list-group"], [1, "list-group-item"], ["href", "#!"], [1, "department-list-logo"], ["src", "assets/img/department-img/department-img-5.png", "alt", ""], [1, "sub-list-main-menu"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], [1, "wd-sub-list"], [1, "container"], [1, "col-md-4"], [1, "black-color", "wd-sub-list-title"], [1, "wd-sub-menu"], ["src", "assets/img/department-img/department-sub-list-img-1.jpg", "alt", "department-sub-list-img", 1, "department-sub-list-img"], ["src", "assets/img/department-img/department-sub-list-img-2.jpg", "alt", "department-sub-list-img", 1, "department-sub-list-img"], ["src", "assets/img/department-img/department-img-2.png", "alt", ""], ["src", "assets/img/department-img/department-img-3.png", "alt", ""], ["src", "assets/img/department-img/department-img-4.png", "alt", ""], ["src", "assets/img/department-img/department-img-1.png", "alt", ""], ["src", "assets/img/department-img/department-img-6.png", "alt", ""], ["src", "assets/img/department-img/department-img-7.png", "alt", ""], ["src", "assets/img/department-img/department-img-8.png", "alt", ""], ["src", "assets/img/department-img/department-img-9.png", "alt", ""], ["src", "assets/img/department-img/department-img-10.png", "alt", ""], [1, "col-md-6", "col-lg-10", "col-xl-7", "header-search-box", "d-none", "d-lg-block"], ["id", "main-menu-2", 1, "main-menu-desktop", "no-border", "main-menu-sh"], [1, "menu-container", "wd-megamenu", "text-left"], [1, "menu"], [1, "wd-megamenu-ul"], ["href", "#", 1, "main-menu-list"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["aria-hidden", "true", 1, "fa", "fa-angle-down", "angle-down"], [1, "single-dropdown"], [1, "pos-inherit"], [1, "single-dropdown", "megamenu"], ["href", "#", 1, "menu-subtitle"], [1, "sub-menu-list"], ["href", ""], ["href", "#", 1, "add-img"], ["src", "assets/img/nav-img-1.jpg", "alt", "Product Img", 1, "figure-img", "img-fluid"], ["src", "assets/img/nav-img-2.jpg", "alt", "Product Img", 1, "figure-img", "img-fluid"], [1, "col-10", "col-sm-6", "col-md-4", "col-lg-2", "col-xl-2", "text-right"], [1, "example-container", "1"], ["id", "main"], [1, "carousel-c"], [1, "container-fluid", "main-sec"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Best Cameras");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 11)(69, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "section", 22)(72, "div", 4)(73, "div", 5)(74, "div", 23)(75, "div", 24)(76, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ul", 27)(79, "li")(80, "span", 28);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "megamenu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ul", 35)(95, "li")(96, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Visual Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li")(99, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Chinese phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li")(102, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Google Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li")(108, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li")(111, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li")(114, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li")(117, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li")(120, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li")(123, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Phone Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li")(126, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Phone Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li")(129, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Visual Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li")(132, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Chinese phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li")(135, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Google Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li")(138, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Cheap Phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li")(141, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Luxury phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "li")(144, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Simple phones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li")(147, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li")(150, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li")(153, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li")(156, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li")(159, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li")(162, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li")(165, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li")(168, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li")(171, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "li", 36)(174, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li", 36)(177, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Coupon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li", 36)(180, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 38)(183, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, " All Department ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 43)(189, "ul", 44)(190, "li", 45)(191, "a", 46)(192, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 51)(198, "div", 52)(199, "div", 5)(200, "div", 53)(201, "h6", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "ul", 55)(204, "li")(205, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "li")(208, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li")(211, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li")(214, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li")(217, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "li")(220, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "li")(223, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li")(226, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "li")(229, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 53)(232, "h6", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "ul", 55)(235, "li")(236, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li")(239, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li")(242, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "li")(245, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "li")(248, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li")(251, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li")(254, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li")(257, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "li")(260, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 53)(263, "h6", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Cameras and photos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "ul", 55)(266, "li")(267, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Camera Electronice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "li")(270, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Camera Appereances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "li")(273, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "DSLR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "li")(276, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Video cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li")(279, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "li")(282, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Cheap Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "li")(285, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Best Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li")(288, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Luxury Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "li")(291, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Simple Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 16)(294, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "img", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 16)(297, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "img", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "li", 45)(300, "a", 7)(301, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Household");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "li", 45)(306, "a", 7)(307, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "img", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Clothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "li", 45)(312, "a", 7)(313, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](314, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "li", 45)(318, "a", 7)(319, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Furniture");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "li", 45)(324, "a", 7)(325, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Corporate staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "li", 45)(330, "a", 7)(331, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Sinking staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "li", 45)(336, "a", 7)(337, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "Plant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "li", 45)(342, "a", 7)(343, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Washing machine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "li", 45)(348, "a", 7)(349, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "img", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Winding staff");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 67)(354, "div", 68)(355, "div", 69)(356, "div", 70)(357, "ul", 71)(358, "li")(359, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "i", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "li")(364, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Comparison Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "ul", 75)(368, "li")(369, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Coming soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "li", 76)(372, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "blog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "ul", 77)(376, "li")(377, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "ul", 79)(380, "li")(381, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, " Best 10 Laptops");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "li")(385, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](386, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Best 10 Smartwatches");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "li")(389, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](390, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Best 10 Mobiles");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "li")(393, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](394, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Best 10 AC's");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "li")(397, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Best 10 Cameras");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "li")(401, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](402, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Best 10 Projectors");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "li")(405, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "Home & Kitchen Appliances");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "ul", 79)(408, "li")(409, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "Best 10 Washing machines");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "li")(413, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Best 10 Washing machines under 20000Rs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "li")(417, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](418, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Best 10 Microvens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "li")(421, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](422, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Best 10 Refrigerators");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "li")(425, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "Best 10 Refrigerators under 30000Rs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "li")(429, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "Best 10 Mixers & Grinders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "li")(433, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Best 10 budget kettels");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "li")(437, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Markets");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "ul", 79)(440, "li")(441, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](442, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](443, "Best 10 TV's in Flipkart");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "li")(445, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](446, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "Best 10 TV's in Amazon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "li")(449, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](450, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Best Buy Products in Myntra");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "li")(453, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](454, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Best Home & Kitchen Appliances in Amazon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "li")(457, "a", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](458, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Best ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "li")(461, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](462, "img", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "a", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "li")(466, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Coupons");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "li")(469, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](471, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "mat-sidenav-container", 85)(473, "mat-sidenav-content")(474, "div", 86)(475, "div", 87)(476, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](477, "router-outlet");
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
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__.TheB10ProductsService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["home"]],
  decls: 39,
  vars: 2,
  consts: [["viewport", ""], ["id", "main-slider-section"], ["id", "main-slider", 1, "slider-bg2", "owl-carousel", "owl-theme", "product-review", "slider-cat"], [1, "item", "d-flex", "slider-bg", "align-items-center"], [1, "container-fluid"], [1, "row", "justify-content-end"], [1, "slider-text", "col-sm-6", "col-xl-4", "col-md-6", "order-2", "order-sm-1"], [1, "slider-title"], [1, "highlights-text"], [1, "slider-content"], ["href", "shop-left-sidebar.html", 1, "btn", "btn-primary", "wd-shop-btn", "slider-btn"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "col-sm-6", "col-md-6", "col-xl-6", "order-1", "order-sm-2", "slider-img"], ["src", "assets/img/slider-img/slider.png", "alt", ""], [1, "slider-text", "col-sm-6", "col-xl-4", "col-md-6"], [1, "sub-title"], [1, "col-sm-6", "col-md-6", "col-xl-6", "slider-img", "fadeInDown", "animated"], ["id", "product-amazon", "class", "style-fd", 4, "ngIf"], [3, "product"], ["id", "product-amazon", 1, "style-fd"], ["class", "container-fluid custom-width", 4, "ngFor", "ngForOf"], [1, "container-fluid", "custom-width"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "section-title-center", "text-left"], [1, "title", "pl-0"], ["id", "product-slider-two", 1, "products-by-category", "owl-carousel", "owl-theme"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "figure", "product-box"], [1, "product-box-img"], [3, "click"], ["alt", "Product Img", 1, "figure-img", "img-fluid", 3, "src"], [1, "quick-view-btn"], [1, "compare-btn"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], [1, "figure-caption", "text-center"], [1, "badge", "badge-secondary", "wd-badge", "text-uppercase"], [1, "wishlist"], ["aria-hidden", "true", 1, "fa", "fa-heart"], [1, "price-start"], [1, "active-color"], [1, "content-excerpt"], [1, "rating"], ["href", "#"], ["aria-hidden", "true"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-exchange"]],
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

module.exports = JSON.parse('{"electronics":{"title":"Electronics","data":[{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/61bUZO2IXpL._SX679_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/31nXVvSk7GL._SX300_SY300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_10pro-v2_580x800_in-en.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}}]},"clothes":{"title":"Clothes","data":[]},"appliances":{"title":"Appliances","data":[{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/61bUZO2IXpL._SX679_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/31nXVvSk7GL._SX300_SY300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_10pro-v2_580x800_in-en.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}},{"id":"14s-dq3017TU","createdAt":"28-02-2023","brand":"HP","type":"laptop","category":"electronics","markets":[{"title":"amazon","link":"https://www.amazon.in/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999},{"title":"flipkart","link":"https://www.flipkart.com/HP-Celeron-14-inch-Windows-14s-dq3017TU/dp/B0928TF49H/ref=sr_1_2?crid=1RSG3S19V6DHY&keywords=HP%2B14q&qid=1677566264&sprefix=lenovo%2Bideapad%2Bs145%2Caps%2C228&sr=8-2&th=1","rating":3.9,"available":true,"price":30999}],"images":["https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/41GetVpmncL._SY300_SX300_QL70_FMwebp_.jpg"],"mrp":48234,"overview":"The HP 14q is a lightweight and portable laptop that comes with a 14-inch HD display and an Intel Pentium Silver N6000 processor. It also features 4GB DDR4 RAM, 256GB SSD storage, and a pre-installed Windows 10 operating system. The laptop has an integrated graphics card and a battery life of up to 7 hours. The HP 14q is an excellent option for students and professionals who need a laptop for everyday use.","desc":"Processor: Intel Celeron N4500 (1.1 GHz base clock speed, up to 2.8 GHz with Intel Turbo Boost Technology, 4MB L3 cache, 2 cores)\\r\\nMemory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB), upgradable up to 16 GB (2 x 8 GB) | Storage: 256 GB PCIe NVMe M.2 SSD; Display: 14-Inch (35.6 cm) HD anti-glare micro-edge, 250 nits, 45% NTSC (1366 x 768)\\r\\nOperating System & Software: Pre-loaded Windows 10 Home with lifetime validity | Pre-installed Microsoft Office Home & Student 2019, Alexa Built-in\\r\\nIn an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request.\\r\\nHuman Interface Input: Keyboardmicrophonenumeric Keypad; Hard Disk Interface: Solid State; Software Included: Microsoft Office 365; Resolution: 1080p; Hardware Interface: Usb","size":15,"score":9,"totalNoOfRatings":2000,"overallRating":3.9,"spec":{"Brand":"HP","Manufacturer":"HP, HP India Sales Pvt. Ltd","Model":"14s-dq3017TU","Model Name":"Celeron N4500","Model Year":"2021","Batteries":"1 Lithium Ion batteries required. (included)","Item model number":"14s-dq3017TU","RAM Size":"8 GB","Memory Storage Capacity":"256 GB","Memory Slots Available":"2","Ram Memory Installed Size":"8 GB","Ram Memory Maximum Size":"16 GB","Ram Memory Technology":"DDR4","Computer Memory Type":"DDR4 SDRAM","Hard Drive Size":"256 GB","Hard Drive Interface":"Solid State","Hard Disk Description":"SSD","Optical Drive Type":"No Optical Drive","Operating System":"Windows 10 Home","Processor":"i3","Processor Brand":"Intel","Processor Speed":"1.1 GHz","Processor Type":"Celeron","Processor Count":"1","Processor model number":"Celeron N4500","Hardware Interface":"DisplayPort, USB, HDMI","Graphics Card Description":"Integrated","Graphics RAM Type":"VRAM","Graphics Card Interface":"Integrated","Resolution":"1080p","Special Features":"Anti reflective","Mounting Hardware":"Laptop, Power Adapter","Number Of Items":"1","Software Included":"Microsoft Office 365","Standing screen display size":"14 Inches","Display Type":"LED","Audio Output Type":"Headphones","Battery Average Life":"4 Hours","Battery Cell Composition":"Lithium Ion","Wireless Type":"5 GHz Radio Frequency","Connector Type":"Wi-Fi","Device type":"Ultrabook","Country of Origin":"India","Item Weight":"1 kg 460 g"}}]},"toys":{"title":"Toys","data":[]},"furniture":{"title":"Furniture","data":[]},"books":{"title":"Books","data":[]},"jewelry":{"title":"Jewelry","data":[]},"gardenAndOutdoor":{"title":"Garden & Outdoor","data":[]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map