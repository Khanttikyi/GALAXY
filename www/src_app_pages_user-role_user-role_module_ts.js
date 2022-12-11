"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-role_user-role_module_ts"],{

/***/ 99595:
/*!****************************************************!*\
  !*** ./src/app/pages/user-role/user-role-const.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userRoleCol": () => (/* binding */ userRoleCol),
/* harmony export */   "UserRoleDisplayCol": () => (/* binding */ UserRoleDisplayCol)
/* harmony export */ });
const userRoleCol = [
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
        title: "User Role",
        type: "field",
        field: "userRole"
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
const UserRoleDisplayCol = [
    "no",
    "userName",
    "userRole",
    "actions"
];


/***/ }),

/***/ 12767:
/*!*************************************************************!*\
  !*** ./src/app/pages/user-role/user-role-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolePageRoutingModule": () => (/* binding */ UserRolePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _user_role_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-role.page */ 14925);




const routes = [
    {
        path: '',
        component: _user_role_page__WEBPACK_IMPORTED_MODULE_0__.UserRolePage
    }
];
let UserRolePageRoutingModule = class UserRolePageRoutingModule {
};
UserRolePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserRolePageRoutingModule);



/***/ }),

/***/ 24481:
/*!*****************************************************!*\
  !*** ./src/app/pages/user-role/user-role.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolePageModule": () => (/* binding */ UserRolePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _user_role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-role-routing.module */ 12767);
/* harmony import */ var _user_role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-role.page */ 14925);
/* harmony import */ var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table */ 70380);








let UserRolePageModule = class UserRolePageModule {
};
UserRolePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_2__.CRUDTableModule,
            _user_role_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRolePageRoutingModule
        ],
        declarations: [_user_role_page__WEBPACK_IMPORTED_MODULE_1__.UserRolePage]
    })
], UserRolePageModule);



/***/ }),

/***/ 14925:
/*!***************************************************!*\
  !*** ./src/app/pages/user-role/user-role.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolePage": () => (/* binding */ UserRolePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_role_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-role.page.html */ 9026);
/* harmony import */ var _user_role_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-role.page.scss */ 54540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/services/database.service */ 17371);
/* harmony import */ var _add_user_role_add_user_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user-role/add-user-role.component */ 91699);
/* harmony import */ var _user_role_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-role-const */ 99595);










let UserRolePage = class UserRolePage {
    constructor(cdf, modalCtrl, modalService, database) {
        this.cdf = cdf;
        this.modalCtrl = modalCtrl;
        this.modalService = modalService;
        this.database = database;
        this.userList = [];
        this.ELEMENT_COL = _user_role_const__WEBPACK_IMPORTED_MODULE_5__.userRoleCol;
        this.displayedColumns = _user_role_const__WEBPACK_IMPORTED_MODULE_5__.UserRoleDisplayCol;
    }
    ngOnInit() {
        this.getuserList();
    }
    getuserList() {
        this.database.getData('USER_ROLE').then((res) => {
            console.log(res);
            this.userList = res;
            this.cdf.detectChanges();
            this.matTable.reChangeData();
        });
    }
    addNewUserRole(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modalRef = this.modalService.open(_add_user_role_add_user_role_component__WEBPACK_IMPORTED_MODULE_4__.AddUserRoleComponent, { size: 'md', backdrop: false });
            modalRef.componentInstance.type = 'modal';
            modalRef.componentInstance.isCreate = data ? false : true;
            modalRef.componentInstance.data = data;
            modalRef.result.then(() => { }, (res) => {
                if (res) {
                    let result = res.data;
                    // console.log(result);
                    if (data) {
                        this.database.update('USER_ROLE', result);
                        this.getuserList();
                    }
                    else {
                        this.database.create('USER_ROLE', result);
                        this.getuserList();
                    }
                }
            });
        });
    }
    actionBtn(event) {
        // console.log(event);
        if (event.cmd == 'edit') {
            this.addNewUserRole(event.data);
        }
        else {
            this.database.remove("USER_ROLE", event.data.userId, "userId");
            this.getuserList();
        }
    }
};
UserRolePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal },
    { type: src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
UserRolePage.propDecorators = {
    matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [src_app_metronic_shared_crud_table_components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableViewComponent,] }]
};
UserRolePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-role',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_role_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_role_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserRolePage);



/***/ }),

/***/ 9026:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/user-role/user-role.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-custom\">\n      <div class=\"card-header\">\n        <div class=\"card-title\">\n          <h3 class=\"card-label left-border-image\">User Role</h3>\n        </div>\n        <div class=\"card-toolbar\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewCategory()\">\n           Add New Data\n          </button>\n         </div>\n      </div>\n      <div class=\"card-body customer-card-body\">\n        <app-material-table-view [data]=\"userList\" [colum]=\"ELEMENT_COL\" [displayedColumns]=\"displayedColumns\"\n          (emitter)=\"actionBtn($event)\">\n        </app-material-table-view>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ 54540:
/*!*****************************************************!*\
  !*** ./src/app/pages/user-role/user-role.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJvbGUucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-role_user-role_module_ts.js.map