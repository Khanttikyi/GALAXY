"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-registration_user-registration_module_ts"],{

/***/ 38814:
/*!*******************************************************!*\
  !*** ./src/app/pages/user-registration/user-const.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userCol": () => (/* binding */ userCol),
/* harmony export */   "UserDisplayCol": () => (/* binding */ UserDisplayCol)
/* harmony export */ });
const userCol = [
    {
        title: "No",
        type: "field",
        field: "no",
        isNo: true
    },
    {
        title: "User Name",
        type: "field",
        field: "userName"
    },
    {
        title: "User Phone ",
        type: "field",
        field: "userPhone"
    },
    {
        title: "Email ",
        type: "field",
        field: "userEmail"
    },
    {
        title: "Action",
        type: "action",
        field: "actions",
        btn: {
            edit: true,
            delete: true
        }
    },
];
const UserDisplayCol = [
    "no",
    "userName",
    "userPhone",
    "userEmail",
    "actions"
];


/***/ }),

/***/ 89092:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistrationPageRoutingModule": () => (/* binding */ UserRegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-registration.page */ 48124);




const routes = [
    {
        path: '',
        component: _user_registration_page__WEBPACK_IMPORTED_MODULE_0__.UserRegistrationPage
    }
];
let UserRegistrationPageRoutingModule = class UserRegistrationPageRoutingModule {
};
UserRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserRegistrationPageRoutingModule);



/***/ }),

/***/ 96051:
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistrationPageModule": () => (/* binding */ UserRegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-registration-routing.module */ 89092);
/* harmony import */ var _user_registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-registration.page */ 48124);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);








let UserRegistrationPageModule = class UserRegistrationPageModule {
};
UserRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _user_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRegistrationPageRoutingModule
        ],
        declarations: [_user_registration_page__WEBPACK_IMPORTED_MODULE_1__.UserRegistrationPage]
    })
], UserRegistrationPageModule);



/***/ }),

/***/ 48124:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegistrationPage": () => (/* binding */ UserRegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-registration.page.html */ 64583);
/* harmony import */ var _user_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-registration.page.scss */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/services/database.service */ 17371);
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ 93551);
/* harmony import */ var _user_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-const */ 38814);










let UserRegistrationPage = class UserRegistrationPage {
    constructor(cdf, modalCtrl, modalService, database) {
        this.cdf = cdf;
        this.modalCtrl = modalCtrl;
        this.modalService = modalService;
        this.database = database;
        this.userList = [];
        this.ELEMENT_COL = _user_const__WEBPACK_IMPORTED_MODULE_5__.userCol;
        this.displayedColumns = _user_const__WEBPACK_IMPORTED_MODULE_5__.UserDisplayCol;
    }
    ngOnInit() {
        this.getUserList();
    }
    getUserList() {
        this.database.getData('USER').then((res) => {
            // console.log(res);
            this.userList = res;
            this.cdf.detectChanges();
            this.matTable.reChangeData();
        });
    }
    addNewUser(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__.AddUserComponent, { size: 'lg', backdrop: false });
            modalRef.componentInstance.type = 'modal';
            modalRef.componentInstance.isCreate = data ? false : true;
            modalRef.componentInstance.data = data;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    let result = res.data;
                    // console.log(result);
                    if (data) {
                        this.database.update('USER', result);
                        this.getUserList();
                    }
                    else {
                        this.database.create('USER', result);
                        this.getUserList();
                    }
                }
            });
        });
    }
    actionBtn(event) {
        // console.log(event);
        if (event.cmd == 'edit') {
            this.addNewUser(event.data);
        }
        else {
            this.database.remove("USER", event.data.UserCode, "UserCode");
            this.getUserList();
        }
    }
};
UserRegistrationPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal },
    { type: src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
UserRegistrationPage.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
UserRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-registration',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_registration_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserRegistrationPage);



/***/ }),

/***/ 64583:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/user-registration/user-registration.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom\">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">User Registration</h3>\n        </div>\n        <div class=\"card-toolbar\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewUser()\">\n           Add New Data\n          </button>\n         </div>\n      </div>\n      <div class=\"card-body customer-card-body\">\n        <app-material-table-view [data]=\"userList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n          (emitter)=\"actionBtn($event)\">\n        </app-material-table-view>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ 34205:
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-registration/user-registration.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-registration_user-registration_module_ts.js.map