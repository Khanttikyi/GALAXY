"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 91691:
/*!***********************************************!*\
  !*** ./src/app/core/biz.operation.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BizOperationService": () => (/* binding */ BizOperationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 28433);

class BizOperationService {
    constructor(httpClient, baseUri) {
        this.httpClient = httpClient;
        this.baseUri = baseUri;
    }
    save(t) {
        try {
            return this.httpClient.post(this.baseUri, t);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    delete(id) {
        try {
            return this.httpClient.delete(this.baseUri + '/' + id);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    update(id, t) {
        try {
            return this.httpClient.put(this.baseUri + "/" + id, t);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    updateNoID(t) {
        try {
            return this.httpClient.put(this.baseUri, t);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    findOne(id) {
        try {
            return this.httpClient.get(this.baseUri + "/" + id);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    findAll() {
        try {
            return this.httpClient.get(this.baseUri);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
    findAllWithQuery(query = "") {
        try {
            return this.httpClient.get(this.baseUri + "?" + query);
        }
        catch (error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
        }
    }
}


/***/ }),

/***/ 64885:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.component.html */ 90558);
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ 81518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _dashboard_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.services */ 30135);




// import { uuid } from 'uuid';




let DashboardComponent = class DashboardComponent {
    constructor(router, modalService, cdRef, dashboardService) {
        this.router = router;
        this.modalService = modalService;
        this.cdRef = cdRef;
        this.dashboardService = dashboardService;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.dashboardService.getALl().toPromise().then((res) => {
            console.log("USER==>", res);
        });
    }
    ngOnDestroy() {
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _dashboard_services__WEBPACK_IMPORTED_MODULE_3__.DashboardService }
];
DashboardComponent.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dashboard',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 52070:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 64885);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/shared/crud-table */ 70380);








let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_1__.InlineSVGModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([
                {
                    path: '',
                    component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
                },
            ]),
        ],
    })
], DashboardModule);



/***/ }),

/***/ 30135:
/*!*******************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.services.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/biz.operation.service */ 91691);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);





const API_DASHBOARD = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/users`;
let DashboardService = class DashboardService extends src_app_core_biz_operation_service__WEBPACK_IMPORTED_MODULE_0__.BizOperationService {
    constructor(httpClient) {
        super(httpClient, API_DASHBOARD);
        this.httpClient = httpClient;
    }
    getALl() {
        return this.httpClient.get(API_DASHBOARD);
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
DashboardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ 90558:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom\">\n    \n      <div class=\"card-body customer-card-body\">\n        \n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 81518:
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map