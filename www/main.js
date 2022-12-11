(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 40906:
/*!*************************************************************!*\
  !*** ./src/app/_metronic/core/services/products.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58824);



const productData = {
    forms: [],
    products: [],
    formObjs: [],
    configPage: []
};
let ProductsService = class ProductsService {
    constructor() {
        this.prodSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(productData);
        this.items$ = this.prodSubject.asObservable();
    }
    // Here you able to load your menu from server/data-base/localStorage
    // Default => from DynamicAsideMenuConfig
    loadItems(data) {
        this.setProduct(data);
    }
    setProduct(data) {
        this.prodSubject.next(data);
    }
};
ProductsService.ctorParameters = () => [];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ 56526:
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splash_screen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./splash-screen.component.html */ 67648);
/* harmony import */ var _splash_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.component.scss */ 70706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.service */ 36052);





let SplashScreenComponent = class SplashScreenComponent {
    constructor(el, splashScreenService) {
        this.el = el;
        this.splashScreenService = splashScreenService;
    }
    ngOnInit() {
        this.splashScreenService.init(this.splashScreen);
    }
};
SplashScreenComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef },
    { type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__.SplashScreenService }
];
SplashScreenComponent.propDecorators = {
    splashScreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['splashScreen', { static: true },] }]
};
SplashScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-splash-screen',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_splash_screen_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_splash_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SplashScreenComponent);



/***/ }),

/***/ 95312:
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenModule": () => (/* binding */ SplashScreenModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _splash_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-screen.component */ 56526);




let SplashScreenModule = class SplashScreenModule {
};
SplashScreenModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_0__.SplashScreenComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_0__.SplashScreenComponent],
    })
], SplashScreenModule);



/***/ }),

/***/ 36052:
/*!**********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenService": () => (/* binding */ SplashScreenService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);



let SplashScreenService = class SplashScreenService {
    /**
     * Service constructor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped || !this.el) {
            return;
        }
        const player = this.animationBuilder
            .build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '1' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(800, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: '0' }))])
            .create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none !important';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 100);
    }
};
SplashScreenService.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder }
];
SplashScreenService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], SplashScreenService);



/***/ }),

/***/ 51265:
/*!*************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/action-button/action-button.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButtonComponent": () => (/* binding */ ActionButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_action_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./action-button.component.html */ 60942);
/* harmony import */ var _action_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-button.component.scss */ 78560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let ActionButtonComponent = class ActionButtonComponent {
    constructor() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.data = {};
        this.viewBtn = {};
    }
    ngOnInit() { }
    onActionEdit() {
        this.emitter.emit({
            cmd: "edit",
            data: this.data,
        });
    }
    onActionView() {
        this.emitter.emit({
            cmd: "view",
            data: this.data,
        });
    }
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
    onActionDelete() {
        this.emitter.emit({
            cmd: "delete",
            data: this.data,
        });
    }
    onActionDetail() {
        this.emitter.emit({
            cmd: "detail",
            data: this.data,
        });
    }
    onActionDownload() {
        this.emitter.emit({
            cmd: "download",
            data: this.data,
        });
    }
};
ActionButtonComponent.ctorParameters = () => [];
ActionButtonComponent.propDecorators = {
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    viewBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ActionButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-action-button',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_action_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_action_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActionButtonComponent);



/***/ }),

/***/ 11336:
/*!**********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/custom-paginator.directive.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePaginatorDirective": () => (/* binding */ StylePaginatorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 4578);



let StylePaginatorDirective = class StylePaginatorDirective {
    constructor(matPag, vr, ren) {
        this.matPag = matPag;
        this.vr = vr;
        this.ren = ren;
        this._currentPage = 1;
        this._pageGapTxt = "...";
        this.directiveLoaded = false;
        this._buttons = [];
        // set showTotalPages(value: number) {
        //   this._showTotalPages = value % 2 == 0 ? value + 1 : value;
        // }
        this._showTotalPages = 3;
        //Sub to rerender buttons when next page and last page is used
        // this.matPag.page.subscribe((v) => {
        //   this.switchPage(v.pageIndex);
        // })
    }
    get showTotalPages() { return this._showTotalPages; }
    buildPageNumbers(pageCount, pageRange) {
        let dots = false;
        let dots2 = false;
        let paglast = pageCount;
        let pagcurrent = this.matPag.pageIndex;
        let rangeStart = pagcurrent - this._showTotalPages / 2;
        let rangeEnd = pagcurrent + this._showTotalPages / 2;
        for (let i = 0; i < paglast; i = i + 1) {
            if ((i < this._showTotalPages && pagcurrent < this._showTotalPages && i > rangeStart) ||
                (i >= rangeStart && i <= rangeEnd)) {
                this.ren.insertBefore(pageRange, this.createPage(i, this.matPag.pageIndex), null);
            }
            else {
                if (i < rangeStart && !dots2) {
                    this.ren.insertBefore(pageRange, this.createPage(this._pageGapTxt, this.matPag.pageIndex), null);
                    dots2 = true;
                }
                if (i > rangeEnd && !dots) {
                    this.ren.insertBefore(pageRange, this.createPage(this._pageGapTxt, this.matPag.pageIndex), null);
                    dots = true;
                }
            }
        }
    }
    createPage(i, pageIndex) {
        const linkBtn = this.ren.createElement('mat-button');
        this.ren.addClass(linkBtn, 'mat-icon-button');
        // this.ren.addClass(linkBtn, "mat-mini-fab");
        // this.ren.setStyle(linkBtn, "margin", "1%");
        const pagingTxt = isNaN(i) ? this._pageGapTxt : +(i + 1);
        const text = this.ren.createText(pagingTxt + '');
        this.ren.addClass(linkBtn, 'mat-custom-page');
        switch (i) {
            case pageIndex:
                this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
                break;
            case this._pageGapTxt:
                this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
                this.ren.addClass(linkBtn, 'cus-disabled');
                break;
            default:
                this.ren.listen(linkBtn, 'click', () => {
                    this._currentPage = i;
                    this.switchPage(i);
                });
                break;
        }
        this.ren.appendChild(linkBtn, text);
        return linkBtn;
    }
    initPageRange() {
        const pagingContainerMain = this.vr.element.nativeElement.querySelector('.mat-paginator-range-actions');
        if (this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions div.btn_custom-paging-container')) {
            this.ren.removeChild(pagingContainerMain, this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions div.btn_custom-paging-container'));
        }
        const pagingContainerBtns = this.ren.createElement('div');
        const refNode = this.vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[2].childNodes[5];
        this.ren.addClass(pagingContainerBtns, 'btn_custom-paging-container');
        this.ren.insertBefore(pagingContainerMain, pagingContainerBtns, refNode);
        const pageRange = this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions div.btn_custom-paging-container');
        pageRange.innerHtml = '';
        let totalPageSize = this.matPag.getNumberOfPages() > 0 ? this.matPag.getNumberOfPages() : this._dumPageTotal;
        const pageCount = totalPageSize;
        this.buildPageNumbers(pageCount, pageRange);
    }
    // private pageCount(length: number, pageSize: number): number {
    //   return Math.floor(length / pageSize) + 1;
    // }
    switchPage(i) {
        this.matPag.pageIndex = i;
        this.matPag._changePageSize(this.matPag.pageSize);
    }
    ngAfterViewInit() {
    }
    ngDoCheck() {
        if (this.directiveLoaded) {
            this.initPageRange();
        }
    }
    viewInit(pageTotal) {
        // // console.log("data");
        this._dumPageTotal = pageTotal;
        this.initPageRange();
        setTimeout(() => {
            this.directiveLoaded = true;
        }, 500);
    }
};
StylePaginatorDirective.ctorParameters = () => [
    { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginator, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }
];
StylePaginatorDirective.propDecorators = {
    showTotalPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
StylePaginatorDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: "[style-paginator]"
    })
], StylePaginatorDirective);



/***/ }),

/***/ 51946:
/*!*************************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialTableViewComponent": () => (/* binding */ MaterialTableViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_material_table_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./material-table-view.component.html */ 92321);
/* harmony import */ var _material_table_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-table-view.component.scss */ 57443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _table_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-dto */ 18510);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 4578);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 98536);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 68859);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 28288);
/* harmony import */ var _custom_paginator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-paginator.directive */ 11336);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ 18260);












let MaterialTableViewComponent = class MaterialTableViewComponent {
    constructor(cdf) {
        this.cdf = cdf;
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource([]);
        this.displayedColumns = [];
        this.data = [];
        this.colum = [];
        this.pageSizeOptions = [5, 10, 20];
        this.selectable = false;
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.Default_DOWNLOAD_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl}/attachment-downloader`;
        this.totalAmount = {};
        this.calTotal = false;
        this.calField = [];
        this.activityStatusColor = {
            // "success": "success"
            "01": "secondary",
            "02": "primary",
            "03": "danger",
        };
        this.prodStatusColor = {
            "01": "secondary",
            "02": "primary",
        };
        this.statusColor = {
            "in_progress": "secondary",
            "complete": "primary",
            "cancel": "danger",
        };
        this.customerStatusColor = {
            "A": "secondary",
            "I": "danger",
        };
        this.customerStatus = {
            "A": "Active",
            "I": "Inactive",
        };
        this.leadStatus = {
            "01": "Open",
            "02": "Assigned",
            "03": "Folllow Up",
            "04": "Reject",
            "05": "Win",
            "06": "Lost",
        };
        this.leadStatusColor = {
            "01": "default",
            "04": "default",
            "05": "success",
            "03": "secondary",
            "02": "primary",
            "06": "danger",
        };
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(false, []);
        this.activityStatus = _table_dto__WEBPACK_IMPORTED_MODULE_2__.ActivityStatus;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.cdf.detectChanges();
    }
    reChangeData() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        let totalPage = Math.floor(this.data.length / 5) + 1;
        // console.log("TOTALPAGE", this.data)
        if (this.calTotal)
            this.calTotalData();
        if (this.customPaginator)
            this.customPaginator.viewInit(totalPage);
    }
    ngOnDestroy() {
        this.emitter.unsubscribe();
    }
    actionBtn(event) {
        this.emitter.emit(event);
    }
    FormatedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date, "YYYYMMDD").format('MM/DD/YYYY');
    }
    getFreq(data) {
        let val = "";
        let ary = data.split(", ");
        for (const item of ary) {
            if (item == "lump") {
                val = val.length > 2 ? val + ", Lump Sum" : "Lump Sum";
            }
            else if (item == "annually") {
                val = val.length > 2 ? val + ", Semi Annually" : "Semi Annually";
            }
        }
        return val;
    }
    createPolicyBtn(data) {
        this.emitter.emit({
            cmd: "create",
            data: data,
        });
    }
    getStatusColor(status) {
    }
    selectRow(row) {
        this.selection.toggle(row);
        if (this.selection.isSelected(row)) {
            this.rowSelected.emit(row);
        }
        else {
            this.rowSelected.emit(null);
        }
    }
    calTotalData() {
        this.totalAmount = [];
        this.data.forEach((data) => {
            this.calField.map(field => {
                if (data[field])
                    this.totalAmount[field] = this.totalAmount[field] ? this.totalAmount[field] + parseFloat(data[field].toString().split(',').join('')) : parseFloat(data[field].toString().split(',').join(''));
            });
        });
        // this.calField.includes()
    }
};
MaterialTableViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
MaterialTableViewComponent.propDecorators = {
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    displayedColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    colum: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    pageSizeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator,] }],
    customPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_4__.StylePaginatorDirective,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort,] }],
    rowSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output, args: ['rowselect',] }],
    calTotal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    calField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
MaterialTableViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-material-table-view',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_material_table_view_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
        styles: [_material_table_view_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MaterialTableViewComponent);



/***/ }),

/***/ 18510:
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/table-dto.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLTYPE": () => (/* binding */ COLTYPE),
/* harmony export */   "ActivityStatus": () => (/* binding */ ActivityStatus)
/* harmony export */ });
var COLTYPE;
(function (COLTYPE) {
    COLTYPE["FEILD"] = "field";
    COLTYPE["TEXT"] = "text";
    COLTYPE["ACTION"] = "action";
})(COLTYPE || (COLTYPE = {}));
const ActivityStatus = {
    "01": "Open",
    "02": "Complete",
    "03": "Cancel",
};


/***/ }),

/***/ 65370:
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPaginationEllipsis": () => (/* binding */ NgPaginationEllipsis),
/* harmony export */   "NgPaginationFirst": () => (/* binding */ NgPaginationFirst),
/* harmony export */   "NgPaginationLast": () => (/* binding */ NgPaginationLast),
/* harmony export */   "NgPaginationNext": () => (/* binding */ NgPaginationNext),
/* harmony export */   "NgPaginationNumber": () => (/* binding */ NgPaginationNumber),
/* harmony export */   "NgPaginationPrevious": () => (/* binding */ NgPaginationPrevious),
/* harmony export */   "NgPagination": () => (/* binding */ NgPagination)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ng_pagination_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ng-pagination.component.html */ 37651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-pagination.config */ 97483);


// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts


function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
let NgPaginationEllipsis = class NgPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationEllipsis.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationEllipsis = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationEllipsis]' })
], NgPaginationEllipsis);

/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
let NgPaginationFirst = class NgPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationFirst.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationFirst = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationFirst]' })
], NgPaginationFirst);

/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
let NgPaginationLast = class NgPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationLast.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationLast = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationLast]' })
], NgPaginationLast);

/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
let NgPaginationNext = class NgPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationNext.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationNext = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationNext]' })
], NgPaginationNext);

/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
let NgPaginationNumber = class NgPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationNumber.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationNumber = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationNumber]' })
], NgPaginationNumber);

/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
let NgPaginationPrevious = class NgPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
};
NgPaginationPrevious.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef }
];
NgPaginationPrevious = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({ selector: 'ng-template[ngPaginationPrevious]' })
], NgPaginationPrevious);

/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
let NgPagination = class NgPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
};
NgPagination.ctorParameters = () => [
    { type: _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__.NgPaginationConfig }
];
NgPagination.propDecorators = {
    tplEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationEllipsis, { static: false },] }],
    tplFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationFirst, { static: false },] }],
    tplLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationLast, { static: false },] }],
    tplNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationNext, { static: false },] }],
    tplNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationNumber, { static: false },] }],
    tplPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild, args: [NgPaginationPrevious, { static: false },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ellipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    collectionSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NgPagination = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ng-pagination',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
        host: { 'role': 'navigation' },
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ng_pagination_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], NgPagination);



/***/ }),

/***/ 97483:
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.config.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPaginationConfig": () => (/* binding */ NgPaginationConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/paginator.model */ 84618);

// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination-config.ts


/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
let NgPaginationConfig = class NgPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__.PageSizes[2];
        this.rotate = false;
    }
};
NgPaginationConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], NgPaginationConfig);



/***/ }),

/***/ 72430:
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatorComponent": () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./paginator.component.html */ 29880);
/* harmony import */ var _paginator_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator.component.scss */ 45777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/paginator.model */ 84618);





let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.pageSizes = _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__.PageSizes;
    }
    ngOnInit() {
    }
    pageChange(num) {
        this.paginator.page = num;
        this.paginate.emit(this.paginator);
    }
    sizeChange() {
        this.paginator.pageSize = +this.paginator.pageSize;
        this.paginator.page = 1;
        this.paginate.emit(this.paginator);
    }
};
PaginatorComponent.ctorParameters = () => [];
PaginatorComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    paginate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PaginatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-paginator',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_paginator_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_paginator_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaginatorComponent);



/***/ }),

/***/ 97542:
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortIconComponent": () => (/* binding */ SortIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sort_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sort-icon.component.html */ 76141);
/* harmony import */ var _sort_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-icon.component.scss */ 72087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let SortIconComponent = class SortIconComponent {
    constructor(el) {
        this.el = el;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isActive = false;
    }
    ngOnChanges() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        // Load css classes
        parent.classList.add('sortable');
        parent.classList.remove('sortable-active');
        if (this.column === this.activeColumn) {
            parent.classList.add('sortable-active');
        }
        // load icons
        this.isActive = this.column === this.activeColumn;
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        parent.addEventListener('click', () => {
            this.sort.emit(this.column);
        });
    }
};
SortIconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
SortIconComponent.propDecorators = {
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    activeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    activeDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SortIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-sort-icon',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sort_icon_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sort_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SortIconComponent);



/***/ }),

/***/ 91970:
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/crud-table.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CRUDTableModule": () => (/* binding */ CRUDTableModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/paginator/paginator.component */ 72430);
/* harmony import */ var _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/paginator/ng-pagination/ng-pagination.component */ 65370);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 64744);
/* harmony import */ var _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sort-icon/sort-icon.component */ 97542);
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action-button/action-button.component */ 51265);
/* harmony import */ var _components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/material-table-view/material-table-view.component */ 51946);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 98536);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 4578);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 68859);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _components_material_table_view_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/material-table-view/custom-paginator.directive */ 11336);
















let CRUDTableModule = class CRUDTableModule {
};
CRUDTableModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_0__.PaginatorComponent, _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_1__.NgPagination, _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_3__.SortIconComponent, _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_4__.ActionButtonComponent, _components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableViewComponent, _components_material_table_view_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_6__.StylePaginatorDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__.InlineSVGModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.DragDropModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.OverlayModule,],
        exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_0__.PaginatorComponent, _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_1__.NgPagination, _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_3__.SortIconComponent, _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_4__.ActionButtonComponent, _components_material_table_view_material_table_view_component__WEBPACK_IMPORTED_MODULE_5__.MaterialTableViewComponent, _components_material_table_view_custom_paginator_directive__WEBPACK_IMPORTED_MODULE_6__.StylePaginatorDirective],
        entryComponents: []
    })
], CRUDTableModule);



/***/ }),

/***/ 70380:
/*!******************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortState": () => (/* reexport safe */ _models_sort_model__WEBPACK_IMPORTED_MODULE_1__.SortState),
/* harmony export */   "PageSizes": () => (/* reexport safe */ _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__.PageSizes),
/* harmony export */   "PaginatorState": () => (/* reexport safe */ _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__.PaginatorState),
/* harmony export */   "GroupingState": () => (/* reexport safe */ _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__.GroupingState),
/* harmony export */   "TableService": () => (/* reexport safe */ _services_table_service__WEBPACK_IMPORTED_MODULE_6__.TableService),
/* harmony export */   "TableExtendedService": () => (/* reexport safe */ _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__.TableExtendedService),
/* harmony export */   "CRUDTableModule": () => (/* reexport safe */ _crud_table_module__WEBPACK_IMPORTED_MODULE_8__.CRUDTableModule)
/* harmony export */ });
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/table.model */ 75596);
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sort.model */ 12790);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginator.model */ 84618);
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/grouping.model */ 85315);
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search.model */ 57777);
/* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/filter.model */ 18873);
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table.service */ 79828);
/* harmony import */ var _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/table.extended.service */ 79373);
/* harmony import */ var _crud_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-table.module */ 91970);
// Models






// Directives
// Services


// Module



/***/ }),

/***/ 18873:
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/filter.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 85315:
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/grouping.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupingState": () => (/* binding */ GroupingState)
/* harmony export */ });
class GroupingState {
    constructor() {
        this.selectedRowIds = new Set();
        this.itemIds = [];
    }
    checkAreAllRowsSelected() {
        if (this.itemIds.length === 0) {
            return false;
        }
        return this.selectedRowIds.size === this.itemIds.length;
    }
    selectRow(id) {
        if (this.selectedRowIds.has(id)) {
            this.selectedRowIds.delete(id);
        }
        else {
            this.selectedRowIds.add(id);
        }
        return this;
    }
    // tslint:disable-next-line:variable-name
    clearRows(_itemIds) {
        this.itemIds = _itemIds;
        this.selectedRowIds = new Set();
        return this;
    }
    isRowSelected(id) {
        return this.selectedRowIds.has(id);
    }
    selectAllRows() {
        const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
        if (areAllSelected) {
            this.selectedRowIds = new Set();
        }
        else {
            this.selectedRowIds = new Set();
            this.itemIds.forEach(id => this.selectedRowIds.add(id));
        }
        return this;
    }
    getSelectedRows() {
        return Array.from(this.selectedRowIds);
    }
    getSelectedRowsCount() {
        return this.selectedRowIds.size;
    }
}


/***/ }),

/***/ 84618:
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/paginator.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSizes": () => (/* binding */ PageSizes),
/* harmony export */   "PaginatorState": () => (/* binding */ PaginatorState)
/* harmony export */ });
const PageSizes = [3, 5, 10, 15, 50, 100];
class PaginatorState {
    constructor() {
        this.page = 1;
        this.pageSize = PageSizes[2];
        this.total = 0;
        this.pageSizes = [];
    }
    recalculatePaginator(total) {
        this.total = total;
        return this;
    }
}


/***/ }),

/***/ 57777:
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/search.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 12790:
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/sort.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortState": () => (/* binding */ SortState)
/* harmony export */ });
class SortState {
    constructor() {
        this.column = 'id'; // Id by default
        this.direction = 'asc'; // asc by default;
    }
}


/***/ }),

/***/ 75596:
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/table.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 17371:
/*!**************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/database.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService),
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "browserDBInstance": () => (/* binding */ browserDBInstance),
/* harmony export */   "DatabaseError": () => (/* binding */ DatabaseError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 64297);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 24842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 24575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/user-profile.service */ 55631);








const SQL_DB_NAME = 'liquor_emperor.db';
let DatabaseService = class DatabaseService {
    //@Inject(forwardRef(() => MasterDataService)) private masterData: MasterDataService
    constructor(sqlite, platform, userService, sqlitePorter, http) {
        //this.database = window.openDatabase(this.database_name, '1.0', 'database', 5 * 1024 * 1024);
        // this.init()
        this.sqlite = sqlite;
        this.platform = platform;
        this.userService = userService;
        this.sqlitePorter = sqlitePorter;
        this.http = http;
        this.database_name = "liquor_emperor.db";
        this.database = null;
        this.initDatabase = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.updateingMasterData = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    createDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.sqlite.create({
                    name: SQL_DB_NAME,
                    location: 'default'
                })
                    .then((db) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.databaseObj = db;
                    yield this.createTableWithSql();
                    yield this.createTable();
                }))
                    .catch(e => {
                    // console.log("error " + JSON.stringify(e))
                });
            });
        });
    }
    createTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (var i = 0; i < this.tables_data.length; i++) {
                try {
                    let dbtable = yield this.database_instance.executeSql(new Query(this.tables_data[i]));
                }
                catch (error) {
                    // console.log("error " + JSON.stringify(error))
                }
            }
        });
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let db;
            if (this.platform.is('ios') || this.platform.is('android')) {
                this.database = yield this.sqlite.create({ name: SQL_DB_NAME, location: 'default' });
            }
            else {
                this.database = window.openDatabase(SQL_DB_NAME, '1.0', 'DEV', 5 * 1024 * 1024);
            }
            // console.log('enter init')
            this.createTableWithSql();
            this.database_instance = yield browserDBInstance(this.database);
            yield this.createTable();
            yield this.initData();
        });
    }
    createTables() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (var i = 0; i < this.tables_data.length; i++) {
                let query = new Query(this.tables_data[i], []);
                yield this.database_instance.executeSql(query);
            }
        });
    }
    create(tableName, item) {
        let sqlText;
        let values;
        // console.log("saleitemprice", item.saleItem.length)
        switch (tableName) {
            case "CATEGORY":
                sqlText = "INSERT INTO CATEGORY (categoryName, categoryCode, categoryDescription, createddate, updateddate) VALUES (?,?,?,?,?) ";
                values = [item.categoryName || null, item.categoryCode || null, item.categoryDescription || null, item.createddate || null, item.updateddate || null];
                break;
            case "BRAND_DATA":
                sqlText = "INSERT INTO BRAND_DATA (categoryCode, brandName, brandCode, brandDescription, createddate, updateddate) VALUES (?,?,?,?,?,?) ";
                values = [item.categoryCode || null, item.brandName || null, item.brandCode || null, item.brandDescription || null, item.createddate || null, item.updateddate || null];
                break;
            case "SUB_BRAND_DATA":
                sqlText = "INSERT INTO SUB_BRAND_DATA (brandCode, subBrandCode, name, description,size, createddate, updateddate) VALUES (?,?,?,?,?,?,?) ";
                values = [item.brandCode || null, item.subBrandCode || null, item.name || null, item.description || null, item.size || null, item.createddate || null, item.updateddate || null];
                break;
            case "SUPPLIER":
                sqlText = "INSERT INTO SUPPLIER (supplierCode, supplierName, supplierAddress,supplierPhoneno, description, createddate, updateddate) VALUES (?,?,?,?,?,?,?) ";
                values = [item.supplierCode || null, item.supplierName || null, item.supplierAddress || null, item.supplierPhoneno, item.description || null, item.createddate || null, item.updateddate || null];
                break;
            case "PURCHASE":
                sqlText = "INSERT INTO PURCHASE (purchaseCode, voucherCode, date, supplierName, supplierAddress,supplierPhone,categoryCode,  brandCode, subBrandCode, size, quantity, purchase, isRetail, isWholeSale, retailPrice, wholeSalePrice, totalAmount, createddate, updateddate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
                values = [item.purchaseCode || null, item.voucherCode || null, item.date || null, item.supplierName || null, item.supplierAddress || null, item.supplierPhone || null, item.categoryCode || null, item.brandCode || null, item.subBrandCode || null, item.size || null, item.quantity || null, item.purchase || null, item.isRetail || null, item.isWholeSale || null, item.retailPrice || null, item.wholeSalePrice || null, item.totalAmount || null, item.createddate || null, item.updateddate || null];
                break;
            case "ITEM_PRICE":
                sqlText = "INSERT INTO ITEM_PRICE (itemPriceCode, brandCode, subBrandCode, size, retailPrice, wholeSalePrice, createddate, updateddate) VALUES (?,?,?,?,?,?,?,?) ";
                values = [item.itemPriceCode || null, item.brandCode || null, item.subBrandCode || null, item.size || null, item.retailPrice || null, item.wholeSalePrice || null, item.createddate || null, item.updateddate || null];
                break;
            case "SIZE":
                sqlText = "INSERT INTO SIZE (code, value, createddate, updateddate) VALUES (?,?,?,?) ";
                values = [item.code || null, item.value || null, item.createddate || null, item.updateddate || null];
                break;
            case "USER":
                sqlText = "INSERT INTO USER (userId,userPhone,userName,userPassword,confirmPassword,userEmail,userRole,createddate,updateddate) VALUES (?,?,?,?,?,?,?,?,?) ";
                values = [item.userId || null, item.userPhone || null, item.userName || null, item.password || null, item.confirmPassword || null, item.userEmail || null, item.userRole || null, item.createddate || null, item.updateddate || null];
                break;
            case "USER_ROLE":
                sqlText = "INSERT INTO USER_ROLE (userId ,userName,userRole,createddate,updateddate) VALUES (?,?,?,?,?)";
                values = [item.userId || null, item.userName || null, item.userRole || null, item.createddate || null, item.updateddate || null];
                break;
            case "LOGIN_USER":
                sqlText = "INSERT INTO LOGIN_USER (userId,userRole,userName,userPassword) VALUES (?,?,?,?,?)";
                values = [item.userId || null, item.userRole || null, item.userName || null, item.userPassword || null];
                break;
            case "SALES":
                sqlText = "INSERT INTO SALES (saleCode ,saleVoucherCode ,saledate ,staffName ,netAmount ,totalDiscount ,isTax ,isDiscount ,isPaid ,totalTax ,balance , paidAmount , changeAmount ,createddate ,updateddate ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
                values = [item.saleCode || null, item.saleVoucherCode || null, item.saledate || null, item.staffName || null, item.netAmount || null, item.totalDiscount || null, item.isTax || null, item.isDiscount || null, item.isPaid || null, item.totalTax || null, item.balance || null, item.paidAmount || null, item.changeAmount || null, item.createddate || null, item.updateddate || null];
                if (item.saleItem.length > 0) {
                    for (let data of item.saleItem) {
                        this.createSaleItem(data);
                    }
                }
                break;
            default:
                return;
        }
        let query = new Query(sqlText, values);
        console.log("query", query);
        let res = this.database_instance.executeSql(query);
    }
    createSaleItem(data) {
        let sqlText;
        let values;
        console.log('createSaleItem', data);
        sqlText = "INSERT INTO SALES_ITEM (itemCode,saleCode, saleVoucherCode, brandCode, subBrandCode, quantity, price,amount, size) VALUES (?,?,?,?,?,?,?,?,?) ";
        values = [data.itemCode || null, data.saleCode || null, data.saleVoucherCode || null, data.brandCode || null, data.subBrandCode || null, data.quantity || null, data.price || null, data.amount || null, data.size || null];
        let query = new Query(sqlText, values);
        let res = this.database_instance.executeSql(query);
    }
    updateSaleItem(data) {
        let sqlText;
        let values;
        console.log('updateSaleItem', data);
        sqlText = "UPDATE SALES_ITEM SET(itemCode,saleCode, saleVoucherCode, brandCode, subBrandCode, quantity, price,amount, size) = (?,?,?,?,?,?,?,?,?) where itemCode=? ; ";
        values = [data.itemCode || null, data.saleCode || null, data.saleVoucherCode || null, data.brandCode || null, data.subBrandCode || null, data.quantity || null, data.price || null, data.amount || null, data.size || null, data.itemCode];
        let query = new Query(sqlText, values);
        let res = this.database_instance.executeSql(query);
    }
    update(tableName, item, isItemUpdate) {
        let sqlText;
        let values;
        switch (tableName) {
            case "CATEGORY":
                sqlText = "UPDATE CATEGORY SET (categoryName , categoryCode , categoryDescription ,createddate, updateddate) = ( ? , ? , ? ,? ,?) where categoryCode = ? ;";
                values = [item.categoryName || null, item.categoryCode || null, item.categoryDescription || null, item.createddate || null, item.updateddate || null, item.categoryCode];
                break;
            case "BRAND_DATA":
                sqlText = "UPDATE BRAND_DATA SET (categoryCode, brandName , brandCode , brandDescription ,createddate, updateddate) = (?, ? , ? , ? ,? ,?) where brandCode = ? ;";
                values = [item.categoryCode || null, item.brandName || null, item.brandCode || null, item.brandDescription || null, item.createddate || null, item.updateddate || null, item.brandCode];
                break;
            case "SUB_BRAND_DATA":
                sqlText = "UPDATE SUB_BRAND_DATA SET (brandCode, subBrandCode, name, description,size,createddate, updateddate)  = ( ? , ? , ? , ? , ? , ? ,?) where subBrandCode = ? ;";
                values = [item.brandCode || null, item.subBrandCode || null, item.name || null, item.description || null, item.size || null, item.createddate || null, item.updateddate || null, item.subBrandCode];
                break;
            case "SUPPLIER":
                sqlText = "UPDATE SUPPLIER SET (supplierCode , supplierName, supplierAddress, supplierPhoneno , description ,createddate, updateddate) = ( ? , ? , ? , ? , ? , ? , ?) where supplierCode = ? ;";
                values = [item.supplierCode || null, item.supplierName || null, item.supplierAddress || null, item.supplierPhoneno, item.description || null, item.createddate || null, item.updateddate || null, item.supplierCode];
                break;
            case "PURCHASE":
                sqlText = "UPDATE PURCHASE SET (purchaseCode, voucherCode, date, supplierName, supplierAddress,supplierPhone,categoryCode, brandCode, subBrandCode, size, quantity, purchase, isRetail, isWholeSale, retailPrice, wholeSalePrice, totalAmount,createddate, updateddate) =  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ? , ?) where voucherCode = ? ;";
                values = [item.purchaseCode || null, item.voucherCode || null, item.date || null, item.supplierName || null, item.supplierAddress || null, item.supplierPhone || null, item.categoryCode || null, item.brandCode || null, item.subBrandCode || null, item.size || null, item.quantity || null, item.purchase || null, item.isRetail || null, item.isWholeSale || null, item.retailPrice || null, item.wholeSalePrice || null, item.totalAmount || null, item.createddate || null, item.updateddate || null, item.voucherCode];
                break;
            case "ITEM_PRICE":
                sqlText = "UPDATE ITEM_PRICE SET(itemPriceCode, brandCode, subBrandCode, size, retailPrice, wholeSalePrice, createddate, updateddate) = (?,?,?,?,?,?,?,?) where itemPriceCode = ? ;";
                values = [item.itemPriceCode || null, item.brandCode || null, item.subBrandCode || null, item.size || null, item.retailPrice || null, item.wholeSalePrice || null, item.createddate || null, item.updateddate || null, item.itemPriceCode];
                break;
            case "USER":
                sqlText = "UPDATE USER SET(userId,userPhone,userName,userPassword,confirmPassword,userEmail,userRole,createddate,updateddate) = (?,?,?,?,?,?,?,?,?) where userId = ? ;";
                values = [item.userId || null, item.userPhone || null, item.userName || null, item.password || null, item.confirmPassword || null, item.userEmail || null, item.userRole || null, item.createddate || null, item.updateddate || null, item.userId];
                break;
            case "USER_ROLE":
                sqlText = "UPDATE USER_ROLE SET(userId,userRole,userName,createddate,updateddate) = (?,?,?,?,?) where userId = ? ;";
                values = [item.userId || null, item.userRole || null, item.userName || null, item.createddate || null, item.updateddate || null, item.userId];
                break;
            case "LOGIN_USER":
                sqlText = "UPDATE LOGIN_USER SET(userId,userRole,userName,userPassword) = (?,?,?,?);";
                values = [item.userId || null, item.userRole || null, item.userName || null, item.userPassword || null];
                break;
            case "SALES":
                sqlText = "UPDATE SALES SET(saleCode ,saleVoucherCode ,saledate ,staffName ,netAmount ,totalDiscount ,isTax ,isDiscount ,isPaid ,totalTax ,balance , paidAmount , changeAmount ,createddate ,updateddate ) = (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) where saleCode=?; ";
                values = [item.saleCode || null, item.saleVoucherCode || null, item.saledate || null, item.staffName || null, item.netAmount || null, item.totalDiscount || null, item.isTax || null, item.isDiscount || null, item.isPaid || null, item.totalTax || null, item.balance || null, item.paidAmount || null, item.changeAmount || null, item.createddate || null, item.updateddate || null, item.saleCode];
                if (item.saleItem.length > 0) {
                    for (let data of item.saleItem) {
                        if (isItemUpdate) {
                            this.updateSaleItem(data);
                        }
                        else {
                            this.createSaleItem(data);
                        }
                    }
                }
                break;
            default:
                return;
        }
        let query = new Query(sqlText, values);
        console.log("queryupdate", query);
        let res = this.database_instance.executeSql(query);
    }
    remove(tableName, data, type) {
        let sqlText;
        let values;
        sqlText = `delete from ${tableName} where ${type} = ? `;
        values = [data || null];
        let query = new Query(sqlText, values);
        // console.log(query);
        let res = this.database_instance.executeSql(query);
    }
    getData(tableName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data;
            switch (tableName) {
                case "CATEGORY":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM CATEGORY"));
                    break;
                case "BRAND_DATA":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM BRAND_DATA"));
                    break;
                case "SUB_BRAND_DATA":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM SUB_BRAND_DATA"));
                    break;
                case "SUPPLIER":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM SUPPLIER"));
                    break;
                case "SIZE":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM SIZE"));
                    break;
                case "PURCHASE":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM PURCHASE"));
                    break;
                case "STOCK":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM STOCK LEFT JOIN PURCHASE ON STOCK.purchaseCode=PURCHASE.purchaseCode"));
                    break;
                case "ITEM_PRICE":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM ITEM_PRICE"));
                    break;
                case "SALES":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM SALES "));
                    break;
                case "USER_ROLE":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM USER_ROLE "));
                    break;
                case "USER":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM USER "));
                    break;
                case "ROLE":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM ROLE "));
                    break;
                case "LOGIN_USER":
                    data = yield this.database_instance.executeSql(new Query("SELECT * FROM LOGIN_USER "));
                    break;
                default:
                    return;
            }
            // console.log("firstdata", data);
            return data;
        });
    }
    checkUserExist(userInfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM USER "));
            console.log(data);
            const found = data.find((obj) => {
                return obj.userName === userInfo.userName && obj.userPassword === userInfo.userPassword;
            });
            return found;
        });
    }
    getPurchaseData(purchaseCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM PURCHASE WHERE purchaseCode=?", [purchaseCode]));
            return data;
        });
    }
    getBrandByCategoryCode(categoryCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM BRAND_DATA WHERE categoryCode=?", [categoryCode]));
            return data;
        });
    }
    getSubBrandByBrandCode(brandCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM SUB_BRAND_DATA WHERE brandCode=?", [brandCode]));
            return data;
        });
    }
    getBrandByBrandCode(brandCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM SUB_BRAND_DATA WHERE brandCode=?", [brandCode]));
            return data;
        });
    }
    getSalePrice(brand, subbrand, code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("d", brand, subbrand, code);
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM PURCHASE WHERE brandCode=? AND  subBrandCode=? AND size =? ORDER BY updateddate asc", [brand, subbrand, code]));
            //console.log("sqlquery", data);
            return data;
        });
    }
    getSizeBysubBrandCode(subBrandCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT SIZE.code,SIZE.value FROM PURCHASE  LEFT JOIN SIZE ON PURCHASE.size = SIZE.code WHERE subBrandCode=? GROUP BY size", [subBrandCode]));
            //console.log("sqlquery", data);
            return data;
        });
    }
    getSubBrand() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM PURCHASE P LEFT JOIN SUB_BRAND_DATA B ON P.subBrandCode = B.subBrandCode GROUP BY B.subBrandCode "));
            //console.log("sqlquery", data);
            return data;
        });
    }
    getBrand() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT B.brandName,B.brandCode FROM PURCHASE P LEFT JOIN BRAND_DATA B ON P.brandCode = B.brandCode GROUP BY B.brandCode"));
            // console.log("sqlquery", data);
            return data;
        });
    }
    getBrandByBrand(brandCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT SB.subBrandCode,SB.name FROM PURCHASE P LEFT JOIN BRAND_DATA B ON P.brandCode = B.brandCode LEFT JOIN SUB_BRAND_DATA SB ON B.brandCode = SB.brandCode WHERE P.brandCode =? GROUP BY B.brandCode", [brandCode]));
            //console.log("sqlquery", data);
            return data;
        });
    }
    getPriceBySize(brand, subbrand, code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("d", brand, subbrand, code);
            let data = yield this.database_instance.executeSql(new Query("SELECT retailPrice FROM ITEM_PRICE WHERE brandCode=? AND  subBrandCode=? AND size =? LIMIT 1", [brand, subbrand, code]));
            console.log("sqlw", data);
            return data;
        });
    }
    getItemList(salecode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM SALES_ITEM WHERE saleCode = ?", [salecode]));
            return data;
        });
    }
    createTableWithSql() {
        this.tables_data = [
            'CREATE TABLE IF NOT EXISTS CATEGORY(id INTEGER PRIMARY KEY AUTOINCREMENT,categoryName VARCHAR(25),categoryCode VARCHAR(25),categoryDescription VARCHAR(225),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS BRAND_DATA(id INTEGER PRIMARY KEY AUTOINCREMENT,categoryCode VARCHAR(25),brandName VARCHAR(25),brandCode VARCHAR(25),brandDescription VARCHAR(225),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS SUB_BRAND_DATA(id INTEGER PRIMARY KEY AUTOINCREMENT,brandCode VARCHAR(25),subBrandCode VARCHAR(25),name VARCHAR(25),description VARCHAR(225),size VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS SUPPLIER(id INTEGER PRIMARY KEY AUTOINCREMENT,supplierName VARCHAR(25),supplierCode VARCHAR(25),supplierAddress VARCHAR(25),supplierPhoneno VARCHAR(25),description VARCHAR(225),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS SIZE(id INTEGER PRIMARY KEY AUTOINCREMENT,code VARCHAR(25),value VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS PURCHASE(id INTEGER PRIMARY KEY AUTOINCREMENT,purchaseCode VARCHAR(25),voucherCode VARCHAR(25),date VARCHAR(25),supplierName VARCHAR(25),supplierPhone VARCHAR(25),categoryCode VARCHAR(25),supplierAddress VARCHAR(25),brandCode VARCHAR(25),subBrandCode VARCHAR(25),size VARCHAR(25),quantity VARCHAR(25),purchase VARCHAR(25),isRetail VARCHAR(25),isWholeSale VARCHAR(25),retailPrice VARCHAR(25),wholeSalePrice VARCHAR(25),totalAmount VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS STOCK(id INTEGER PRIMARY KEY AUTOINCREMENT,stockCode VARCHAR(25),purchaseCode VARCHAR(25),date VARCHAR(25),brandCode VARCHAR(25),subBrandCode VARCHAR(25),size VARCHAR(25),quantity VARCHAR(25),purchase VARCHAR(25),retailPrice VARCHAR(25),wholeSalePrice VARCHAR(25),status VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS ITEM_PRICE(id INTEGER PRIMARY KEY AUTOINCREMENT,itemPriceCode VARCHAR(25),brandCode VARCHAR(25),subBrandCode VARCHAR(25),size VARCHAR(25),retailPrice VARCHAR(25),wholeSalePrice VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS SALES(id INTEGER PRIMARY KEY AUTOINCREMENT,saleCode VARCHAR(25),saleVoucherCode VARCHAR(25),saledate VARCHAR(25),staffName VARCHAR(25),netAmount VARCHAR(25),totalDiscount VARCHAR(25),isTax VARCHAR(25),isDiscount VARCHAR(25),isPaid VARCHAR(25),totalTax VARCHAR(25),balance VARCHAR(25), paidAmount VARCHAR(25), changeAmount VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS SALES_ITEM(id INTEGER PRIMARY KEY AUTOINCREMENT,itemCode VARCHAR(25),saleCode VARCHAR(25),saleVoucherCode VARCHAR(25),brandCode VARCHAR(25),subBrandCode VARCHAR(25),quantity VARCHAR(25),price VARCHAR(25),amount VARCHAR(25),size VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS PROGRAM(id INTEGER PRIMARY KEY AUTOINCREMENT,code VARCHAR(25),programCode VARCHAR(25),name VARCHAR(25),description VARCHAR(25),isActive VARCHAR(25),isRead VARCHAR(25),isWrite VARCHAR(25),isDelete VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS USER(id INTEGER PRIMARY KEY AUTOINCREMENT,userId VARCHAR(25),userPhone VARCHAR(25),userName VARCHAR(30),userPassword VARCHAR(30),confirmPassword VARCHAR(30),userEmail VARCHAR(30),userRole VARCHAR(20),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS USER_ROLE(id INTEGER PRIMARY KEY AUTOINCREMENT,userId VARCHAR(25),userName VARCHAR(30),userRole VARCHAR(20),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS ROLE(id INTEGER PRIMARY KEY AUTOINCREMENT,roleCode VARCHAR(25),roleValue VARCHAR(25),createddate VARCHAR(25),updateddate VARCHAR(25))',
            'CREATE TABLE IF NOT EXISTS LOGIN_USER(id INTEGER PRIMARY KEY AUTOINCREMENT,userId VARCHAR(25),userRole VARCHAR(25),userName VARCHAR(25),userPassword VARCHAR(25))',
        ];
    }
    initData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.database_instance.executeSql(new Query("SELECT * FROM BRAND_DATA"));
            if (data.length == 0) {
                this.http.get('assets/dummy_data.sql', { responseType: 'text' }).subscribe(sql => {
                    if (this.platform.is('ios') || this.platform.is('android')) {
                        this.sqlitePorter.importSqlToDb(this.database, sql)
                            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        }))
                            .catch(e => console.error(e));
                    }
                    else {
                        let data_list = sql.split(';');
                        for (var i = 0; i < data_list.length; i++) {
                            // console.log(data_list);
                            this.database_instance.executeSql(new Query(data_list[i] + ''), []);
                        }
                    }
                });
            }
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__.UserProfileService },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLitePorter },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], DatabaseService);

class Query {
    constructor(queryString, parameter) {
        this._queryString = queryString;
        if (parameter instanceof Array) {
            this._parameter = parameter;
        }
        else if (parameter === undefined) {
            this._parameter = [];
        }
        else {
            this._parameter = [parameter];
        }
    }
    get queryString() {
        return this._queryString;
    }
    get parameter() {
        return this._parameter;
    }
    getStatement() {
        if (this._parameter !== null) {
            return [this._queryString, this._parameter];
        }
        else {
            return this._queryString;
        }
    }
}
const browserDBInstance = (db) => {
    return {
        executeSql: (query) => {
            return new Promise((resolve, reject) => {
                db.transaction((tx) => {
                    tx.executeSql(query.queryString, query.parameter, (tx, rs) => {
                        let resultSet = [];
                        for (let i = 0; i < rs.rows.length; i++) {
                            resultSet.push(rs.rows.item(i));
                        }
                        resolve(resultSet);
                        //resolve(rs)
                    });
                });
            });
        },
        sqlBatch: (arr) => {
            return new Promise((r, rr) => {
                let batch = [];
                db.transaction((tx) => {
                    for (let i = 0; i < arr.length; i++) {
                        batch.push(new Promise((resolve, reject) => {
                            tx.executeSql(arr[i], [], () => { resolve(true); });
                        }));
                        Promise.all(batch).then(() => r(true));
                    }
                });
            });
        }
    };
};
class DatabaseError {
    constructor(message, error) {
        this.message = message;
        this.error = error;
        this.name = 'DatabaseError';
    }
    toString() {
        return this.name + ': ' + this.message + '\n' + this.error;
    }
}


/***/ }),

/***/ 79373:
/*!********************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.extended.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableExtendedService": () => (/* binding */ TableExtendedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.service */ 79828);




let TableExtendedService = class TableExtendedService extends _table_service__WEBPACK_IMPORTED_MODULE_0__.TableService {
    constructor(http) {
        super(http);
    }
};
TableExtendedService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient,] }] }
];
TableExtendedService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], TableExtendedService);



/***/ }),

/***/ 79828:
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableService": () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 45309);
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/paginator.model */ 84618);
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sort.model */ 12790);
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/grouping.model */ 85315);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);






const DEFAULT_STATE = {
    filter: {},
    paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__.PaginatorState(),
    sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_1__.SortState(),
    searchTerm: '',
    grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_2__.GroupingState(),
    entityId: undefined
};
class TableService {
    constructor(http) {
        // Private fields
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this._isFirstLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(true);
        this._tableState$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(DEFAULT_STATE);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
        this._subscriptions = [];
        // API URL has to be overrided
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/endpoint`;
        this.http = http;
    }
    // Getters
    get items$() {
        return this._items$.asObservable();
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isFirstLoading$() {
        return this._isFirstLoading$.asObservable();
    }
    get errorMessage$() {
        return this._errorMessage.asObservable();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    // State getters
    get paginator() {
        return this._tableState$.value.paginator;
    }
    get filter() {
        return this._tableState$.value.filter;
    }
    get sorting() {
        return this._tableState$.value.sorting;
    }
    get searchTerm() {
        return this._tableState$.value.searchTerm;
    }
    get grouping() {
        return this._tableState$.value.grouping;
    }
    // CREATE
    // server should return the object with ID
    create(item) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.post(this.API_URL, item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('CREATE ITEM', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ id: undefined });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // READ (Returning filtered list of entities)
    find(tableState) {
        const url = this.API_URL + '/find';
        this._errorMessage.next('');
        return this.http.post(url, tableState).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('FIND ITEMS', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ items: [], total: 0 });
        }));
    }
    getItemById(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('GET ITEM BY IT', id, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ id: undefined });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // UPDATE
    update(item) {
        const url = `${this.API_URL}/${item.id}`;
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.put(url, item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('UPDATE ITEM', item, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(item);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // UPDATE Status
    updateStatusForItems(ids, status) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const body = { ids, status };
        const url = this.API_URL + '/updateStatus';
        return this.http.put(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('UPDATE STATUS FOR SELECTED ITEMS', ids, status, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // DELETE
    delete(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('DELETE ITEM', id, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({});
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    // delete list of items
    deleteItems(ids = []) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = this.API_URL + '/deleteItems';
        const body = { ids };
        return this.http.put(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            this._errorMessage.next(err);
            // console.error('DELETE SELECTED ITEMS', ids, err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._isLoading$.next(false)));
    }
    fetch() {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const request = this.find(this._tableState$.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)((res) => {
            this._items$.next(res.items);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(res.total),
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            this._errorMessage.next(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
                items: [],
                total: 0
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            this._isLoading$.next(false);
            const itemIds = this._items$.value.map((el) => {
                const item = el;
                return item.id;
            });
            this.patchStateWithoutFetch({
                grouping: this._tableState$.value.grouping.clearRows(itemIds),
            });
        }))
            .subscribe();
        this._subscriptions.push(request);
    }
    setDefaults() {
        this.patchStateWithoutFetch({ filter: {} });
        this.patchStateWithoutFetch({ sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_1__.SortState() });
        this.patchStateWithoutFetch({ grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_2__.GroupingState() });
        this.patchStateWithoutFetch({ searchTerm: '' });
        this.patchStateWithoutFetch({
            paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_0__.PaginatorState()
        });
        this._isFirstLoading$.next(true);
        this._isLoading$.next(true);
        this._tableState$.next(DEFAULT_STATE);
        this._errorMessage.next('');
    }
    // Base Methods
    patchState(patch) {
        this.patchStateWithoutFetch(patch);
        this.fetch();
    }
    patchStateWithoutFetch(patch) {
        const newState = Object.assign(this._tableState$.value, patch);
        this._tableState$.next(newState);
    }
}


/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/_services/auth.guard */ 41785);




const routes = [
    // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 61142)).then((m) => m.AuthModule),
    },
    {
        path: '',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/layout.module */ 20913)).then((m) => m.LayoutModule),
    },
    { path: '**', redirectTo: 'error/404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.service */ 36052);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_metronic/shared/crud-table */ 70380);
/* harmony import */ var _metronic_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_metronic/core/services/products.service */ 40906);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/auth */ 67198);
/* harmony import */ var _metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_metronic/shared/crud-table/services/database.service */ 17371);
/* harmony import */ var _modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/auth/_services/user-profile.service */ 55631);











let AppComponent = class AppComponent {
    constructor(splashScreenService, router, tableService, itemService, authService, database, userService) {
        this.splashScreenService = splashScreenService;
        this.router = router;
        this.tableService = tableService;
        this.itemService = itemService;
        this.authService = authService;
        this.database = database;
        this.userService = userService;
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // router.navigate(['/auth']);
    }
    beforeUnloadHandler(event) {
        // const data = this.itemService.prodSubject.getValue()
        //// console.log(`I'm leaving the app!`, data);
        // localStorage.setItem("itemsData", JSON.stringify(data));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.database.init();
            const routerSubscription = this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
                    // clear filtration paginations and others
                    this.tableService.setDefaults();
                    // hide splash screen
                    this.splashScreenService.hide();
                    // scroll to top on every route change
                    window.scrollTo(0, 0);
                    // to display back the body content
                    setTimeout(() => {
                        document.body.classList.add('page-loaded');
                    }, 2500);
                }
            });
        });
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
};
AppComponent.ctorParameters = () => [
    { type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__.SplashScreenService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_3__.TableExtendedService },
    { type: _metronic_core_services_products_service__WEBPACK_IMPORTED_MODULE_4__.ProductsService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService },
    { type: _modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_7__.UserProfileService }
];
AppComponent.propDecorators = {
    beforeUnloadHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ['window:unload', ['$event'],] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        // tslint:disable-next-line:component-selector
        selector: 'app-root',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-clipboard */ 82349);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/_services/auth.service */ 69380);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-highlightjs */ 46300);
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.module */ 95312);
/* harmony import */ var _core_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/httpconfig.interceptor */ 40962);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 14415);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 36109);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_metronic/shared/crud-table/services/database.service */ 17371);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 64297);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 24842);
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_metronic/shared/crud-table */ 70380);
/* harmony import */ var _pages_user_role_add_user_role_add_user_role_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user-role/add-user-role/add-user-role.component */ 91699);
/* harmony import */ var _pages_user_registration_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/user-registration/add-user/add-user.component */ 93551);
/* harmony import */ var _modules_loading_toast_alert_model_alert_model_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/loading-toast/alert-model/alert-model.module */ 24373);
/* harmony import */ var _modules_loading_toast_loading_loading_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/loading-toast/loading/loading.module */ 90872);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-currency */ 40287);











// Highlight JS



















// #fake-start#
// #fake-end#
function appInitializer(authService) {
    return () => {
        return new Promise((resolve) => {
            authService.getUserByToken().subscribe().add(resolve);
        });
    };
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _pages_user_registration_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__.AddUserComponent, _pages_user_role_add_user_role_add_user_role_component__WEBPACK_IMPORTED_MODULE_10__.AddUserRoleComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_4__.SplashScreenModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _modules_loading_toast_alert_model_alert_model_module__WEBPACK_IMPORTED_MODULE_12__.AlertModelModule,
            _modules_loading_toast_loading_loading_module__WEBPACK_IMPORTED_MODULE_13__.KBZLoadingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_21__.HighlightModule,
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_22__.ClipboardModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.OverlayModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectModule,
            _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_9__.CRUDTableModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_28__.NgxCurrencyModule
        ],
        providers: [
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.APP_INITIALIZER,
                useFactory: appInitializer,
                multi: true,
                deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService],
            },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS, useClass: _core_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_5__.HttpConfigInterceptor, multi: true },
            {
                provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_21__.HIGHLIGHT_OPTIONS,
                useValue: {
                    coreLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_core_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/core */ 38297, 23)),
                    languages: {
                        xml: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_xml_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ 61620, 23)),
                        typescript: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_typescript_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ 7404, 23)),
                        scss: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_scss_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/scss */ 39085, 23)),
                        json: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_languages_json_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js/lib/languages/json */ 13703, 23))
                    },
                },
            },
            _angular_common__WEBPACK_IMPORTED_MODULE_29__.DecimalPipe,
            _metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_6__.DatabaseService,
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__.SQLite,
            _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_8__.SQLitePorter,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 40962:
/*!************************************************!*\
  !*** ./src/app/core/httpconfig.interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": () => (/* binding */ HttpConfigInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 56769);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/auth */ 67198);
/* harmony import */ var _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/loading-toast/loading/loading.service */ 60807);
/* harmony import */ var _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loading-toast/alert-model/alert.service */ 60940);








let HttpConfigInterceptor = class HttpConfigInterceptor {
    constructor(authService, loading, alertService) {
        this.authService = authService;
        this.loading = loading;
        this.alertService = alertService;
    }
    intercept(request, next) {
        // if (!this.userProfile.isOnline) {
        // return throwError('Please Check Your Network Connection !');
        //     return EMPTY;
        // }
        // const token: string = this.userProfile.token;
        // if (this.authService.authToken) {
        // this.authService.authToken
        // request = request.clone({ headers: request.headers.set('authorization', "Bearer " +"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjQxZDY2ZC02NDRlLTQ1YmItOTUzOS01MTRkMGMyNDY3ZWEiLCJuYW1lIjoiSnNvbiBXZWIgVG9rZW4iLCJpYXQiOjE2Njk3Mzk4OTI1MjV9.GeEQPhV7iIh9pVvH7D5dw1tsKs7wyiURPaNbSm6bq5k") });
        // let body = request.body
        // request = request.clone({ body: { ...body, userId: this.userProfile.userInfo.userId } });
        // }
        // if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') });
        // }
        // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin','*')});
        // request = request.clone({ headers: request.headers.set('accept', 'application/json, text/javascript, */*; q=0.01') });
        // request = request.clone({ headers: request.headers.set('X-Tenant-ID', 'kbzms') });
        // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyODQyMzI5OCwiaWF0IjoxNjI3ODE4NDk4fQ.K08GdAdgMVisiUjOO8ySxRA68Rj6PWTjRdoOBAnpRiCJ5aAY4pqJPKrhKS0ulK6K9qjU4jpOx2wuFdVi-XHw4A') });
        this.loading.activate();
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                // // console.log('event--->>>', event);
                // if(event.body === null){
                //     this.authService.logout()
                // }
                if (event.body) {
                    return event.clone({
                        body: event.body.body
                    });
                    // return event.body;
                }
            }
            // // console.log('event--->>>', event);
            return event;
        }), 
        // catchError(this.errorHandler)
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.loading.deactivate();
            if (error.error) {
                if (typeof error.error == 'string') {
                    this.alertService.activate("Internal Server error!", "Error");
                }
                else {
                    this.alertService.activate(error.error.message || "Internal Server error!", 'error');
                    if (error.error.code == "403") {
                        this.authService.logout();
                        document.location.reload();
                    }
                }
            }
            else
                this.alertService.activate("Sorry!, Try again later", 'error');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            this.loading.deactivate();
        }));
    }
};
HttpConfigInterceptor.ctorParameters = () => [
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _modules_loading_toast_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService },
    { type: _modules_loading_toast_alert_model_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
HttpConfigInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()
], HttpConfigInterceptor);



/***/ }),

/***/ 73027:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/auth.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModel": () => (/* binding */ AuthModel)
/* harmony export */ });
class AuthModel {
    setAuth(auth) {
        this.accessToken = auth.token;
        this.refreshToken = auth.refreshToken;
        this.expiresIn = auth.expiresIn;
        this.username = auth.username;
        this.id = auth.employeeId;
        this.firstName = auth.firstName;
        this.lastName = auth.lastName;
    }
}


/***/ }),

/***/ 13902:
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/user.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* binding */ UserModel)
/* harmony export */ });
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.model */ 73027);

class UserModel extends _auth_model__WEBPACK_IMPORTED_MODULE_0__.AuthModel {
    setUser(user) {
        this.id = user.id;
        this.userName = user.userName || '';
        this.firstName = user.firstName || '';
        this.lastName = user.lastName || '';
        this.userPassword = user.userPassword || '';
        this.fullname = user.fullname || '';
        this.email = user.email || '';
        this.pic = user.pic || './assets/media/users/default.jpg';
        this.roles = user.roles || [];
        this.occupation = user.occupation || '';
        this.companyName = user.companyName || '';
        this.phone = user.phone || '';
        this.address = user.address;
    }
}


/***/ }),

/***/ 51547:
/*!***********************************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/auth-http.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHTTPService": () => (/* binding */ AuthHTTPService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 18260);




const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`;
const API_LOGIN_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/login`;
let AuthHTTPService = class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
    // public methods
    login(username, password) {
        return this.http.post(API_LOGIN_URL, { username, password });
    }
    // CREATE =>  POST: add a new user to the server
    createUser(user) {
        return this.http.post(API_USERS_URL, user);
    }
    // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
    forgotPassword(email) {
        return this.http.post(`${API_USERS_URL}/forgot-password`, {
            email,
        });
    }
    getUserByToken(token) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        return this.http.get(`${API_USERS_URL}`, {
            headers: httpHeaders,
        });
    }
};
AuthHTTPService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthHTTPService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthHTTPService);



/***/ }),

/***/ 88162:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHTTPService": () => (/* reexport safe */ _auth_http_service__WEBPACK_IMPORTED_MODULE_0__.AuthHTTPService)
/* harmony export */ });
/* harmony import */ var _auth_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-http.service */ 51547);
// #fake-start#
// #fake-end#
// #real-start#
 // You have to uncomment this, when your real back-end is done
// #real-end#


/***/ }),

/***/ 41785:
/*!******************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 69380);



let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        //   return true;
        //   const currentUser = this.authService.currentUserValue;
        // if (currentUser) {
        //   // logged in so return true
        //   return true;
        // }
        // // not logged in so redirect to login page with the return url
        // this.authService.logout();
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ 69380:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 28433);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 72407);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 62489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53951);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/user.model */ 13902);
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/auth.model */ 73027);
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-http */ 88162);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);









let AuthService = class AuthService {
    constructor(authHttpService, router) {
        this.authHttpService = authHttpService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    get authToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.accessToken) {
            return null;
        }
        return auth.accessToken;
    }
    // public methods
    login(userName, userPassword) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(userName, userPassword).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            // console.log(res);
            let auth = new _models_auth_model__WEBPACK_IMPORTED_MODULE_1__.AuthModel();
            auth.setAuth(res);
            const result = this.setAuthFromLocalStorage(auth);
            return result;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.getUserByToken()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            // console.error('err', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    logout() {
        // localStorage.removeItem(this.authLocalStorageToken);
        // this.router.navigate(['auth'])
    }
    getUserByToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.accessToken) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined);
        }
        // this.isLoadingSubject.next(true);
        // return this.authHttpService.getUserByToken(auth.accessToken).pipe(
        //   map((user: UserModel) => {
        //     if (user) {
        //       this.currentUserSubject = new BehaviorSubject<UserModel>(user);
        //     } else {
        //       this.logout();
        //     }
        //     return user;
        //   }),
        //   finalize(() => this.isLoadingSubject.next(false))
        // );
        let user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.UserModel();
        user.setUser(auth);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(user);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(user);
    }
    // need create new user then login
    registration(user) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.isLoadingSubject.next(false);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.login(user.userName, user.userPassword)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            // console.error('err', err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    forgotPassword(userName) {
        this.isLoadingSubject.next(true);
        return this.authHttpService
            .forgotPassword(userName)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.isLoadingSubject.next(false)));
    }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (auth && auth.accessToken) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            // console.error(error);
            return undefined;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
};
AuthService.ctorParameters = () => [
    { type: _auth_http__WEBPACK_IMPORTED_MODULE_2__.AuthHTTPService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 55631:
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/_services/user-profile.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileService": () => (/* binding */ UserProfileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 24575);



let UserProfileService = class UserProfileService {
    constructor() {
        this.showChatIcon = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.isLoggedIn = false;
        this.isOnline = false;
        this.userInfo = {};
        this.talkEmp = {};
        this.changeUserId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    setUserId(id) {
        this.userInfo['userId'] = id;
        return true;
    }
    logOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoggedIn = false;
            this.userId = "";
            this.token = "";
            this.userInfo = {};
        });
    }
};
UserProfileService.ctorParameters = () => [];
UserProfileService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserProfileService);



/***/ }),

/***/ 67198:
/*!***************************************!*\
  !*** ./src/app/modules/auth/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* reexport safe */ _models_user_model__WEBPACK_IMPORTED_MODULE_0__.UserModel),
/* harmony export */   "AuthService": () => (/* reexport safe */ _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)
/* harmony export */ });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models/user.model */ 13902);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ 69380);
// models

// services

// validators


/***/ }),

/***/ 42965:
/*!****************************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert-model.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModelComponet": () => (/* binding */ AlertModelComponet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



let AlertModelComponet = class AlertModelComponet {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    closeSuccess() {
        this.modal.dismiss({ type: 'ok' });
    }
    ngOnDestroy() {
    }
};
AlertModelComponet.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbActiveModal }
];
AlertModelComponet = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        // moduleId: module.id,
        template: `
    <div class="modal-content" >
        <div class="modal-header">
            <div class="modal-title h4 left-border-image" id="example-modal-sizes-title-md">
            {{title}}
            </div>
        </div>
        <div class="modal-body">
            {{message}}
        </div>
        <div class="modal-footer">
        <button type="button" *ngIf= "title == 'Warning Message' " class="btn btn-light btn-elevate mr-2" (click)="modal.dismiss()">
            Cancel
        </button>
        <button type="submit" class="btn btn-primary btn-elevate" (click)="closeSuccess()">OK</button>
        </div>
    </div>
    
    `,
        selector: "kbz-alert"
    })
], AlertModelComponet);



/***/ }),

/***/ 24373:
/*!*************************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert-model.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModelModule": () => (/* binding */ AlertModelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-import-guard */ 12747);
/* harmony import */ var _alert_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-model.component */ 42965);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ 39936);




// import { NgbToast } from "@ng-bootstrap/ng-bootstrap";



let AlertModelModule = class AlertModelModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'AlertModelModule');
    }
};
AlertModelModule.ctorParameters = () => [
    { type: AlertModelModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf }] }
];
AlertModelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule],
        exports: [_alert_model_component__WEBPACK_IMPORTED_MODULE_1__.AlertModelComponet, _alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponet],
        declarations: [_alert_model_component__WEBPACK_IMPORTED_MODULE_1__.AlertModelComponet, _alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponet],
        // providers: [AlertService]
    })
], AlertModelModule);



/***/ }),

/***/ 39936:
/*!**********************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponet": () => (/* binding */ AlertComponet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _alert_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-model.component */ 42965);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 60940);





let AlertComponet = class AlertComponet {
    constructor(alertService, modalService) {
        this.alertService = alertService;
        this.modalService = modalService;
        alertService.activate = this.activate.bind(this);
        alertService.deactivate = this.deactivate.bind(this);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    activate(message, title) {
        return new Promise((resolve, reject) => {
            const modalRef = this.modalService.open(_alert_model_component__WEBPACK_IMPORTED_MODULE_0__.AlertModelComponet, { size: 'sm', backdrop: false });
            modalRef.componentInstance.title = title;
            modalRef.componentInstance.message = message;
            modalRef.result.then(() => { }, (res) => {
                resolve(res);
            });
        });
    }
    deactivate() {
        this.modalService.dismissAll();
    }
};
AlertComponet.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal }
];
AlertComponet = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        template: "",
        selector: "app-alert"
    })
], AlertComponet);



/***/ }),

/***/ 60940:
/*!********************************************************************!*\
  !*** ./src/app/modules/loading-toast/alert-model/alert.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let AlertService = class AlertService {
};
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 54576:
/*!********************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZLoadingComponent": () => (/* binding */ KBZLoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _loading_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.component.scss */ 75575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ 60807);




let KBZLoadingComponent = class KBZLoadingComponent {
    constructor(loadingSerice, cdf) {
        this.loadingSerice = loadingSerice;
        this.cdf = cdf;
        this.showLoading = false;
        this.requestCount = 0;
        this.loadingHtml = "";
        loadingSerice.activate = this.activate.bind(this);
        loadingSerice.deactivate = this.deactivate.bind(this);
    }
    ngOnInit() {
        this.loadingHtml = `<div id="loading-wrapper">
        <div id="loading-text">LOADING</div>
        <div id="loading-content"></div>
        </div>`;
    }
    deactivate() {
        this.requestCount--;
        if (this.requestCount <= 0) {
            this.showLoading = false;
            this.hideLoading();
            this.cdf.detectChanges();
        }
        else {
            this.cdf.detectChanges();
        }
        // clearInterval(this.inter)
    }
    activate() {
        if (this.requestCount < 0) {
            this.requestCount = 0;
        }
        this.requestCount++;
        this.showLoading = true;
        if (!this.loadingContainer.nativeElement.innerHTML)
            this.appendLoading();
        // this.inter = setInterval(() => {
        //     this.deactivate()
        // }, 1000 * 60 * 3)
    }
    appendLoading() {
        this.loadingContainer.nativeElement.innerHTML = this.loadingHtml;
    }
    hideLoading() {
        this.loadingContainer.nativeElement.innerHTML = null;
    }
};
KBZLoadingComponent.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
KBZLoadingComponent.propDecorators = {
    loadingContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['loadingContainer', { static: true },] }]
};
KBZLoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        // moduleId: module.id,
        template: `
    <div #loadingContainer>
        
    </div>
    `,
        selector: "kbz-loading",
        styles: [_loading_component_scss__WEBPACK_IMPORTED_MODULE_0__]
    })
], KBZLoadingComponent);



/***/ }),

/***/ 90872:
/*!*****************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KBZLoadingModule": () => (/* binding */ KBZLoadingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-import-guard */ 12747);
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component */ 54576);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ 60807);






let KBZLoadingModule = class KBZLoadingModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'KBZLoadingModule');
    }
};
KBZLoadingModule.ctorParameters = () => [
    { type: KBZLoadingModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.SkipSelf }] }
];
KBZLoadingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
        declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_1__.KBZLoadingComponent],
        exports: [_loading_component__WEBPACK_IMPORTED_MODULE_1__.KBZLoadingComponent],
        providers: [_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService],
    })
], KBZLoadingModule);



/***/ }),

/***/ 60807:
/*!******************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let LoadingService = class LoadingService {
};
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], LoadingService);



/***/ }),

/***/ 12747:
/*!**************************************************************!*\
  !*** ./src/app/modules/loading-toast/module-import-guard.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 93551:
/*!************************************************************************!*\
  !*** ./src/app/pages/user-registration/add-user/add-user.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-user.component.html */ 74895);
/* harmony import */ var _add_user_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user.component.scss */ 53465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/services/database.service */ 17371);









let AddUserComponent = class AddUserComponent {
    constructor(modalCtrl, modal, database, cdf) {
        this.modalCtrl = modalCtrl;
        this.modal = modal;
        this.database = database;
        this.cdf = cdf;
        this.isCreate = true;
        this.isMatch = false;
        this.submited = false;
        this.userId = "";
        this.date = new Date;
        this.currentTimeInSeconds = Math.floor(Date.now() / 1000);
        this.roleOption = [];
        this.data = {};
    }
    ngOnInit() {
        this.getRole();
        this.loadForm();
    }
    ngAfterViewInit() {
        this.userId = this.data ? this.data.userId : "USER-" + this.currentTimeInSeconds;
        // console.log(this.userId);
    }
    getRole() {
        this.database.getData('ROLE').then((res) => {
            console.log(res);
            this.roleOption = this.getFormatOpt(res);
            this.cdf.detectChanges();
        });
    }
    getFormatOpt(res) {
        return res.map(x => {
            return { 'code': x.roleCode, 'value': x.roleValue };
        });
    }
    loadForm() {
        console.log("data", this.data);
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.userId || null),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userName : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            userPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userPhone : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userEmail : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userRole : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userPassword : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.confirmPassword : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            createddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.createddate : (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.date, 'dd-MM-yyyy', 'en')),
            updateddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.date, 'dd-MM-yyyy', 'en')),
        });
    }
    cancel() {
        this.modal.dismissAll();
    }
    createUser() {
        if (this.userForm.valid && this.isMatch) {
            let value = Object.assign(Object.assign({}, this.userForm.value), { userId: this.userId });
            this.modal.dismissAll({ data: value });
        }
    }
    //for View
    isControlValid(controlName) {
        const control = this.userForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.userForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.userForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.userForm.controls[controlName];
        return control.dirty || control.touched;
    }
    confirmPassword() {
        if (this.userForm.value['password'] != null && this.userForm.value['confirmPassword'] != null) {
            const password = this.userForm.value['password'];
            const confirmPassword = this.userForm.value['confirmpassword'];
            var result = password === confirmPassword ? true : false;
            return this.submited ? !result : false;
        }
        if (this.submited) {
            return this.userForm.controls['confirmPassword'].invalid;
        }
    }
    iscomfirmPassword(newPass, confirmpassword) {
        const password = this.userForm.controls[newPass];
        const confirmPassword = this.userForm.controls[confirmpassword];
        // console.log(password.value, comfirmPassword.value)
        if (password.value == confirmPassword.value) {
            this.isMatch = true;
            return confirmPassword.hasError('Match') && (confirmPassword.dirty || confirmPassword.touched);
        }
        else {
            this.isMatch = false;
            return confirmPassword.hasError('Not Match') && (confirmPassword.dirty || confirmPassword.touched);
        }
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal },
    { type: src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef }
];
AddUserComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AddUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-user',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_user_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddUserComponent);



/***/ }),

/***/ 91699:
/*!**************************************************************************!*\
  !*** ./src/app/pages/user-role/add-user-role/add-user-role.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserRoleComponent": () => (/* binding */ AddUserRoleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_user_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-user-role.component.html */ 6678);
/* harmony import */ var _add_user_role_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user-role.component.scss */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/services/database.service */ 17371);









let AddUserRoleComponent = class AddUserRoleComponent {
    constructor(modalCtrl, cdf, modal, database) {
        this.modalCtrl = modalCtrl;
        this.cdf = cdf;
        this.modal = modal;
        this.database = database;
        this.isCreate = true;
        this.userId = "";
        this.date = new Date;
        this.roleOption = [];
        this.userOption = [];
        this.currentTimeInSeconds = Math.floor(Date.now() / 1000);
        this.data = {};
    }
    ngOnInit() {
        this.getRole();
        this.getUser();
        this.loadForm();
    }
    getRole() {
        this.database.getData('ROLE').then((res) => {
            console.log(res);
            this.roleOption = this.getFormatOpt(res);
            this.cdf.detectChanges();
        });
    }
    getFormatOpt(res) {
        return res.map(x => {
            return { 'code': x.roleCode, 'value': x.roleValue };
        });
    }
    getUser() {
        this.database.getData('USER').then((res) => {
            console.log(res);
            this.userOption = this.getFormatOptUser(res);
            this.cdf.detectChanges();
        });
    }
    getFormatOptUser(res) {
        return res.map(x => {
            return { 'code': x.userId, 'value': x.userName };
        });
    }
    ngAfterViewInit() {
        this.userId = this.data ? this.data.userId : "USER-" + this.currentTimeInSeconds;
        // console.log(this.userId);
    }
    loadForm() {
        console.log("data", this.data);
        this.userRoleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.userId || null),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userName : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.userRole : null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            createddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data ? this.data.createddate : (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.date, 'dd-MM-yyyy', 'en')),
            updateddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.date, 'dd-MM-yyyy', 'en')),
        });
    }
    cancel() {
        this.modal.dismissAll();
    }
    createUserRole() {
        let value = Object.assign(Object.assign({}, this.userRoleForm.value), { userId: this.userId });
        this.modal.dismissAll({ data: value });
    }
    //for View
    isControlValid(controlName) {
        const control = this.userRoleForm.controls[controlName];
        return control.valid && (control.dirty || control.touched);
    }
    isControlInvalid(controlName) {
        const control = this.userRoleForm.controls[controlName];
        return control.invalid && (control.dirty || control.touched);
    }
    controlHasError(validation, controlName) {
        const control = this.userRoleForm.controls[controlName];
        return control.hasError(validation) && (control.dirty || control.touched);
    }
    isControlTouched(controlName) {
        const control = this.userRoleForm.controls[controlName];
        return control.dirty || control.touched;
    }
};
AddUserRoleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal },
    { type: src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
AddUserRoleComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
AddUserRoleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-user-role',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_user_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_user_role_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddUserRoleComponent);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    appVersion: 'v717demo1',
    USERDATA_KEY: 'authf649fc9a5f55',
    isMockEnabled: false,
    // apiUrl: 'http://104.248.152.205:8082/sale/api/v1',
    // apiUrl:'http://192.168.100.56:3200/api'
    apiUrl: 'https://galaxy-mnu579fyk-khanttikyi.vercel.app'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//cd dist
//jar -cvf bss-kbzms-sale-portal.war *


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		70171,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"default-node_modules_ionic_core_dist_esm_parse-250f021a_js-node_modules_ionic_core_dist_esm_t-7df007",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 67648:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- splash screen -->\r\n<div #splashScreen id=\"splash-screen\">\r\n  <img src=\"assets/LOGO1.png\" alt=\"Logo\" style=\"width: 150px;\"/>\r\n  <svg class=\"splash-spinner\" viewBox=\"0 0 50 50\">\r\n    <circle\r\n      class=\"path\"\r\n      cx=\"25\"\r\n      cy=\"25\"\r\n      r=\"20\"\r\n      fill=\"none\"\r\n      stroke-width=\"5\"\r\n    ></circle>\r\n  </svg>\r\n</div>\r\n");

/***/ }),

/***/ 60942:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/action-button/action-button.component.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"white-space: nowrap;\">\r\n    <a *ngIf=\"viewBtn.view\" title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionView()\">\r\n        <span class=\"flaticon-eye\"></span>\r\n        <!-- <span [inlineSVG]=\"'./assets/media/svg/icons/General/Visible.svg'\" cacheSVG=\"true\"\r\n      class=\"svg-icon svg-icon-md svg-icon-white\">\r\n    </span> -->\r\n    </a>\r\n\r\n    <!-- <ng-container *ngIf=\"prod.application || prod.quotation\"> -->\r\n    <ng-container *ngIf=\"viewBtn.editOnState;else editBtn\">\r\n        <a *ngIf=\"viewBtn.edit && data['status'] == 'in_progress'\" title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionEdit()\">\r\n            <span class=\"flaticon-edit\"></span>\r\n        </a>\r\n    </ng-container>\r\n    <ng-template #editBtn>\r\n        <a *ngIf=\"viewBtn.edit\" title=\"Edit Form Page\" class=\"btn btn-primary btn-cus btn-sm mx-1\" (click)=\"onActionEdit()\">\r\n            <span class=\"flaticon-edit\"></span>\r\n        </a>\r\n    </ng-template>\r\n    <a *ngIf=\"viewBtn.delete\" title=\"Edit Form Page\" class=\"btn btn-danger btn-hover-danger btn-sm mx-1\" (click)=\"onActionDelete()\">\r\n        <span class=\"flaticon-delete\"></span>\r\n        <!-- <span [inlineSVG]=\"'./assets/media/svg/icons/General/Trash.svg'\" cacheSVG=\"true\"\r\n      class=\"svg-icon svg-icon-md svg-icon-white\">\r\n    </span> -->\r\n    </a>\r\n    <a *ngIf=\"viewBtn.download\" title=\"Downlaod Form Page\" class=\"btn btn-primary btn-hover-primary btn-sm mx-1\" (click)=\"onActionDownload()\">\r\n        <span class=\"flaticon-download\"></span>\r\n\r\n    </a>\r\n</div>");

/***/ }),

/***/ 92321:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component.html ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"example-preview\" *ngIf=\"data.length > 0\">\r\n    <div class=\"example-container table-responsive angular-bootstrap-table\">\r\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table table-head-custom table-vertical-center\"\r\n            style=\"margin-bottom: 0px;\">\r\n\r\n            <ng-container *ngFor=\"let item of colum; let i = index\">\r\n                <ng-container matColumnDef=\"{{item.field}}\">\r\n                    <ng-container *ngIf=\"item.type == 'field';else actTemp\" >\r\n                        <!-- mat-sort-header -->\r\n                        <th mat-header-cell *matHeaderCellDef   [ngStyle]=\"{'text-align': 'center'}\"> {{item.title}} </th>\r\n                        <td mat-cell *matCellDef=\"let element ; let i = index;\"\r\n                            [ngStyle]=\"{'text-align': 'center'}\">\r\n                            <ng-container *ngIf=\"item.isNo\">\r\n                                {{i+1}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isImg\">\r\n                                <img [src]=\"Default_DOWNLOAD_URL+'/'+element[item.field]\" alt=\"\" srcset=\"\"\r\n                                    class=\"table-img\">\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngIf=\"item.amtFormat\">\r\n                                {{(element[item.field] > 0 ? (element[item.field] | number) : '0')}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isAttachment\">\r\n                                {{element[item.field]}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isTitle\">\r\n                                {{element[item.field] ? (element[item.field]+\"\" | titlecase) : \"\"}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isUpper\">\r\n                                {{ element[item.field] ? (element[item.field]+\"\" | uppercase) : \"\"}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isDate\">\r\n                                {{FormatedDate(element[item.field])}}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isFromatDate\">\r\n                                {{element[item.field] | date : \"dd/MM/Y\" }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isActivityStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{activityStatusColor[element[item.field]]}}\">{{\r\n                                    activityStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isLeadStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{leadStatusColor[element[item.field]]}}\">{{\r\n                                    leadStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isCustomerStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{customerStatusColor[element[item.field]]}}\">{{\r\n                                    customerStatus[element[item.field]] }}</span>\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngIf=\"item.isQuotationDay\">\r\n                                <ng-container *ngIf=\"element[item.field]\">{{element[item.field]}}\r\n                                    {{(element['quotationRule']+\"s\") | lowercase}} after creation dates</ng-container>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isPolicyDay\">\r\n                                <ng-container *ngIf=\"element[item.field]\">{{element[item.field]}}\r\n                                    {{(element['policyRule']+\"s\") | lowercase}} after creation dates</ng-container>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isAllowBackDate\">\r\n                                {{element[item.field] == \"30days\" ? \"30 days\" : (element[item.field] | titlecase) }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isPaymentFrequencyType\">\r\n                                {{ getFreq(element[item.field]) }}\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.isStatus\">\r\n                                <span\r\n                                    class=\"label label-custom-round label-inline label-{{statusColor[element[item.field]]}}\">\r\n                                    {{ element[item.field] == \"in_progress\" ? \"In Progress\" : (element[item.field] |\r\n                                    titlecase ) }}</span>\r\n                                <!-- {{ getFreq(element[item.field]) }} -->\r\n                            </ng-container>\r\n                            <ng-container\r\n                                *ngIf=\"!item.isDate && !item.isTitle && !item.amtFormat && !item.isFromatDate && !item.isActivityStatus && !item.isQuotationDay && !item.isAllowBackDate && !item.isPaymentFrequencyType && !item.isUpper && !item.isStatus && !item.isProdStatus && !item.isImg && !item.isCustomerStatus  && !item.isLeadStatus\">\r\n                                {{element[item.field]}}\r\n                            </ng-container>\r\n                        </td>\r\n                        <ng-container *ngIf=\"calField.includes(item.field) && calTotal; else footer\">\r\n                            <td mat-footer-cell *matFooterCellDef style=\"padding: 0 10px;\">{{ (totalAmount[item.field]\r\n                                || '') | number }}</td>\r\n                        </ng-container>\r\n\r\n                        <ng-template #footer>\r\n                            <td mat-footer-cell *matFooterCellDef style=\"padding-left: 10px;\">\r\n                                <label *ngIf=\"i == 0\">Total</label>\r\n                            </td>\r\n                        </ng-template>\r\n\r\n                    </ng-container>\r\n                    <ng-template #actTemp>\r\n                        <th mat-header-cell *matHeaderCellDef [ngStyle]=\"{'text-align':'center'}\"> {{item.title | titlecase}} </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <app-action-button *ngIf=\"item.type == 'action'\" [data]=\"element\"\r\n                                (emitter)=\"actionBtn($event)\" [viewBtn]=\"item.btn\">\r\n                            </app-action-button>\r\n                            <span *ngIf=\"item.type == 'text'\" class=\"text-primary\"\r\n                                style=\"text-decoration: underline;white-space: nowrap;cursor: pointer;\"\r\n                                (click)=\"createPolicyBtn(element)\">{{item.field | titlecase}}</span>\r\n                        </td>\r\n                        <ng-container *ngIf=\"calTotal\">\r\n                            <td mat-footer-cell *matFooterCellDef></td>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n            <!-- Position Column -->\r\n            <!-- 'hidden-row': selectable && !row.config -->\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <ng-container *ngIf=\"selectable;else noSelectTable\">\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\r\n                    [ngClass]=\"{hovered: row.hovered, highlighted: selection.isSelected(row)}\"\r\n                    (mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"></tr>\r\n            </ng-container>\r\n            <ng-template #noSelectTable>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"calTotal\">\r\n                <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n            </ng-container>\r\n\r\n        </table>\r\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" style-paginator showFirstLastButtons\r\n            aria-label=\"Select page of periodic elements\">\r\n        </mat-paginator>\r\n    </div>\r\n</div>\r\n<div class=\"text-center\" *ngIf=\"data.length == 0\">\r\n    <span style=\"color: gray;\">There is no data</span>\r\n</div>");

/***/ }),

/***/ 37651:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-template #first>\r\n  <i\r\n    class=\"ki ki-bold-double-arrow-back icon-xs\"\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.first\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #previous>\r\n  <i\r\n    class=\"ki ki-bold-arrow-back icon-xs\"\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.previous\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #next>\r\n  <i\r\n    class=\"ki ki-bold-arrow-next icon-xs\"\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.next\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #last>\r\n  <i\r\n    aria-hidden=\"true\"\r\n    i18n=\"@@ng.pagination.last\"\r\n    class=\"ki ki-bold-double-arrow-next icon-xs\"\r\n  ></i>\r\n</ng-template>\r\n<ng-template #ellipsis>...</ng-template>\r\n<ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\r\n  {{ page }}\r\n  <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\r\n</ng-template>\r\n<a\r\n  *ngIf=\"boundaryLinks\"\r\n  [class.disabled]=\"previousDisabled()\"\r\n  aria-label=\"First\"\r\n  i18n-aria-label=\"@@ng.pagination.first-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  href\r\n  (click)=\"selectPage(1); $event.preventDefault()\"\r\n  [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\r\n    [ngTemplateOutletContext]=\"{\r\n      disabled: previousDisabled(),\r\n      currentPage: page\r\n    }\"\r\n  ></ng-template>\r\n</a>\r\n<a\r\n  *ngIf=\"directionLinks\"\r\n  [class.disabled]=\"previousDisabled()\"\r\n  aria-label=\"Previous\"\r\n  i18n-aria-label=\"@@ng.pagination.previous-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  href\r\n  (click)=\"selectPage(page - 1); $event.preventDefault()\"\r\n  [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\r\n    [ngTemplateOutletContext]=\"{ disabled: previousDisabled() }\"\r\n  ></ng-template>\r\n</a>\r\n<ng-container *ngFor=\"let pageNumber of pages\">\r\n  <a\r\n    *ngIf=\"isEllipsis(pageNumber)\"\r\n    class=\"btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1\"\r\n    tabindex=\"-1\"\r\n    aria-disabled=\"true\"\r\n    [class.active]=\"pageNumber === page\"\r\n    [class.disabled]=\"isEllipsis(pageNumber) || disabled\"\r\n    [attr.aria-current]=\"pageNumber === page ? 'page' : null\"\r\n  >\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\r\n      [ngTemplateOutletContext]=\"{ disabled: true, currentPage: page }\"\r\n    ></ng-template>\r\n  </a>\r\n  <a\r\n    *ngIf=\"!isEllipsis(pageNumber)\"\r\n    class=\"btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1\"\r\n    (click)=\"selectPage(pageNumber); $event.preventDefault()\"\r\n    [attr.tabindex]=\"disabled ? '-1' : null\"\r\n    [attr.aria-disabled]=\"disabled ? 'true' : null\"\r\n    [class.active]=\"pageNumber === page\"\r\n    [class.disabled]=\"isEllipsis(pageNumber) || disabled\"\r\n    [attr.aria-current]=\"pageNumber === page ? 'page' : null\"\r\n  >\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\r\n      [ngTemplateOutletContext]=\"{\r\n        disabled: disabled,\r\n        $implicit: pageNumber,\r\n        currentPage: page\r\n      }\"\r\n    ></ng-template>\r\n  </a>\r\n</ng-container>\r\n<a\r\n  aria-label=\"Next\"\r\n  i18n-aria-label=\"@@ng.pagination.next-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  (click)=\"selectPage(page + 1); $event.preventDefault()\"\r\n  [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\"\r\n  *ngIf=\"directionLinks\"\r\n  [class.disabled]=\"nextDisabled()\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\r\n    [ngTemplateOutletContext]=\"{\r\n      disabled: nextDisabled(),\r\n      currentPage: page\r\n    }\"\r\n  ></ng-template>\r\n</a>\r\n<a\r\n  aria-label=\"Last\"\r\n  i18n-aria-label=\"@@ng.pagination.last-aria\"\r\n  class=\"btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1\"\r\n  (click)=\"selectPage(pageCount); $event.preventDefault()\"\r\n  [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\r\n  [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\"\r\n  *ngIf=\"boundaryLinks\"\r\n  [class.disabled]=\"nextDisabled()\"\r\n>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\r\n    [ngTemplateOutletContext]=\"{\r\n      disabled: nextDisabled(),\r\n      currentPage: page\r\n    }\"\r\n  ></ng-template>\r\n</a>\r\n");

/***/ }),

/***/ 29880:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- start: Paginator -->\r\n<div class=\"d-flex flex-wrap py-2 mr-3\">\r\n  <ng-pagination\r\n    [collectionSize]=\"paginator.total\"\r\n    [(page)]=\"paginator.page\"\r\n    [maxSize]=\"4\"\r\n    [rotate]=\"true\"\r\n    [boundaryLinks]=\"true\"\r\n    [pageSize]=\"paginator.pageSize\"\r\n    (pageChange)=\"pageChange($event)\"\r\n  ></ng-pagination>\r\n</div>\r\n<div class=\"d-flex align-items-center py-3\">\r\n  <!-- begin: loading -->\r\n  <div class=\"d-flex align-items-center\" *ngIf=\"isLoading\">\r\n    <div class=\"mr-2 text-muted\">Loading...</div>\r\n    <div class=\"spinner spinner-primary mr-10\"></div>\r\n  </div>\r\n  <!-- end: loading -->\r\n\r\n  <!-- begin: pageSize -->\r\n  <select\r\n    class=\"form-control form-control-sm form-control-sm font-weight-bold mr-4 border-0 bg-light false\"\r\n    style=\"width: 75px\"\r\n    [(ngModel)]=\"paginator.pageSize\"\r\n    (change)=\"sizeChange()\"\r\n  >\r\n    <option class=\"btn\" *ngFor=\"let ps of pageSizes\">\r\n      {{ ps }}\r\n    </option></select\r\n  ><span class=\"react-bootstrap-table-pagin ation-total\"\r\n    >&nbsp;Showing rows {{ paginator.page }} to&nbsp;{{\r\n      paginator.pageSize\r\n    }}\r\n    of&nbsp;{{ paginator.total }}</span\r\n  >\r\n  <!-- end: pageSize -->\r\n</div>\r\n<!-- end: Paginator -->\r\n");

/***/ }),

/***/ 76141:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"isActive\">\r\n  <ng-container *ngIf=\"activeDirection === 'asc'\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Up-2.svg'\"\r\n\r\n      class=\"svg-icon svg-icon-sm svg-icon-primary ml-1\">\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"activeDirection === 'desc'\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Down-2.svg'\"\r\n\r\n      class=\"svg-icon svg-icon-sm svg-icon-primary ml-1\">\r\n  </span>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!isActive\">\r\n  <span [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Sort1.svg'\"\r\n    class=\"svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort\">\r\n  </span>\r\n</ng-container>\r\n");

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<kbz-loading></kbz-loading>\r\n<ion-app>\r\n  <ion-content>\r\n    <app-splash-screen></app-splash-screen>\r\n    <router-outlet></router-outlet>\r\n    <app-alert></app-alert>\r\n  </ion-content>\r\n</ion-app>");

/***/ }),

/***/ 74895:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/user-registration/add-user/add-user.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n      <h3 class=\"card-label\" *ngIf=\"isCreate\">Create User </h3>\n      <h3 class=\"card-label\" *ngIf=\"!isCreate\">Edit User Info</h3>\n    </div>\n\n  </div>\n  <div class=\"overlay overlay-block cursor-default modal-body\">\n    <form action=\"#\" class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"createUser()\">\n      <div>\n        <div class=\"row\" style=\"align-items: center\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 col-form-label\">Name\n                <span>*</span></label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm \"\n                  [class.is-invalid]=\"isControlInvalid('userName')\" [class.is-valid]=\"isControlValid('userName')\"\n                  formControlName=\"userName\" />\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 col-form-label\">Phone <span>*</span></label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\"\n                  [class.is-invalid]=\"isControlInvalid('userPhone')\" [class.is-valid]=\"isControlValid('userPhone')\"\n                  formControlName=\"userPhone\" />\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 col-form-label\">Email <span>*</span></label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-sm\" \n                  [class.is-invalid]=\"isControlInvalid('userEmail')\" [class.is-valid]=\"isControlValid('userEmail')\"\n                  formControlName=\"userEmail\" />\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 col-form-label\">Role <span>*</span></label>\n              <div class=\"col-sm-6\">\n                <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                  [class.is-invalid]=\"isControlInvalid('userRole')\" [class.is-valid]=\"isControlValid('userRole')\"\n                  [items]=\"roleOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"userRole\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n              <div class=\"form-group row inner-addon left-addon\">\n                <label class=\"col-sm-6 col-form-label\">Password<span>*</span></label>\n                <div class=\"col-sm-6\">\n                  <div class=\"input-group\">\n                    <input name=\"password\" [type]=\"showPassword ? 'text' : 'password'\" id=\"password-field\"\n                      class=\"pwd-control form-control form-control-sm \" name=\"password\" placeholder=\"Password\"\n                      autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\"\n                      [class.is-invalid]=\"iscomfirmPassword('password','confirmPassword')\"\n                      [class.is-invalid]=\"isControlInvalid('password')\" [class.is-valid]=\"isControlValid('password')\"\n                      formControlName=\"password\">\n                    <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"showPassword = !showPassword\"\n                      [class.hide]=\"showPassword\"></i>\n                    <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"showPassword = !showPassword\"\n                      [class.hide]=\"!showPassword\"></i>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n\n              <div class=\"form-group row inner-addon left-addon\">\n                <label class=\"col-sm-6 col-form-label\">Confirm Password<span>*</span></label>\n                <div class=\"col-sm-6\">\n                  <div class=\"input-group\">\n                    <input name=\"password\" [type]=\"showConfirmPassword ? 'text' : 'password'\" id=\"password-field\"\n                      class=\"pwd-control form-control form-control-sm \" name=\"confirmPassword\"\n                      placeholder=\"Confirm Password\" autocomplete=\"off\" [class.is-invalid]=\"confirmPassword()\"\n                      [class.is-invalid]=\"iscomfirmPassword('password','confirmPassword')\"\n                      [class.is-invalid]=\"isControlInvalid('confirmPassword')\"\n                      [class.is-valid]=\"isControlValid('confirmPassword')\" formControlName=\"confirmPassword\">\n                    <i alt=\"show\" class=\"fas fa-eye eye-show\" (click)=\"showConfirmPassword = !showConfirmPassword\"\n                      [class.hide]=\"showConfirmPassword\"></i>\n                    <i alt=\"hide\" class=\"fas fa-eye-slash eye-hide\" (click)=\"showConfirmPassword = !showConfirmPassword\"\n                      [class.hide]=\"!showConfirmPassword\"></i>\n                  </div>\n                  <div *ngIf=\"!isMatch\"><label class=\"error col-12\">Password does not match</label></div>\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n\n        </div>\n\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"cancel()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" [disabled]=\"userForm.invalid\"\n      (click)=\"createUser()\">Save</button>\n  </div>\n</div>");

/***/ }),

/***/ 6678:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/user-role/add-user-role/add-user-role.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title h4 left-border-image\" id=\"example-modal-sizes-title-lg\">\n      <h3 class=\"card-label\" *ngIf=\"isCreate\">Create User Role</h3>\n      <h3 class=\"card-label\" *ngIf=\"!isCreate\">User Role Detail</h3>\n    </div>\n\n  </div>\n  <div class=\"overlay overlay-block cursor-default modal-body\">\n    <form action=\"#\" class=\"form\" [formGroup]=\"userRoleForm\" (ngSubmit)=\"createUserRole()\">\n      <div>\n        <div class=\"row\" style=\"align-items: center\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 col-form-label\">User Name\n                <span>*</span></label>\n              <div class=\"col-sm-6\">\n                <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                [class.is-invalid]=\"isControlInvalid('userName')\" [class.is-valid]=\"isControlValid('userName')\"\n                [items]=\"userOption\" bindLabel=\"value\" bindValue=\"value\" formControlName=\"userName\">\n              </ng-select>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-6 col-form-label\">User Role  <span>*</span></label>\n              <div class=\"col-sm-6\">\n                <ng-select class=\"ng-custom-select ng-custom-select-sm\"\n                  [class.is-invalid]=\"isControlInvalid('userRole')\" [class.is-valid]=\"isControlValid('userRole')\"\n                  [items]=\"roleOption\" bindLabel=\"value\" bindValue=\"code\" formControlName=\"userRole\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light btn-elevate mr-2\" (click)=\"cancel()\">Cancel</button>\n    <button type=\"submit\" class=\"btn btn-primary btn-elevate\" [disabled]=\"userRoleForm.invalid\" (click)=\"createUserRole()\">Save</button>\n  </div>\n  </div>");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 52530,
	"./sw.js": 52530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 4569,
	"./zh-hk.js": 4569,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
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
webpackContext.id = 46700;

/***/ }),

/***/ 70706:
/*!**************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#splash-screen {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #0d0e19;\n}\n\n#splash-screen img {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner {\n  animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner .path {\n  stroke: #d8ae53;\n  stroke-linecap: round;\n  animation: dash 1.5s ease-in-out infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BsYXNoLXNjcmVlbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDBlMTk7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuIGltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwdncgLSAxMDAlKTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jc3BsYXNoLXNjcmVlbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIge1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNwbGFzaC1zcGlubmVyIC5wYXRoIHtcclxuICBzdHJva2U6ICNkOGFlNTM7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 78560:
/*!***************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/action-button/action-button.component.scss ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 57443:
/*!***************************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/material-table-view/material-table-view.component.scss ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".mat-paginator-container {\n  justify-content: space-between;\n}\n\n.label.label-custom-round {\n  line-height: 20px;\n  white-space: nowrap;\n  border-radius: 10px;\n  min-width: 80px;\n  color: white;\n}\n\n.table-img {\n  max-width: 50px;\n  max-height: 50px;\n}\n\n.label-default {\n  color: black !important;\n}\n\n.act-btn-box {\n  padding: 0px 10px;\n  background-color: #005f99;\n  border-color: #005f99;\n  color: #fff !important;\n  text-decoration: none;\n  padding: 0.35rem 0.75rem;\n  font-size: 0.925rem;\n  line-height: 1.35;\n  border-radius: 0.42rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLXRhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUdBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7QUFESjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUhKIiwiZmlsZSI6Im1hdGVyaWFsLXRhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxufVxuXG4ubGFiZWwubGFiZWwtY3VzdG9tLXJvdW5kIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIC8vIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYmxlLWltZyB7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbi5sYWJlbC1kZWZhdWx0IHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuXG5cbi5hY3QtYnRuLWJveHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Zjk5O1xuICAgIGJvcmRlci1jb2xvcjogIzAwNWY5OTtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjkyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjQycmVtO1xufSJdfQ== */";

/***/ }),

/***/ 45777:
/*!*******************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 72087:
/*!*******************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.scss ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWljb24uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  height: 100%;\n  margin: 0;\n}\n\n.show-false {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxhQUFBO0FBRUQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuLnNob3ctZmFsc2V7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 75575:
/*!**********************************************************************!*\
  !*** ./src/app/modules/loading-toast/loading/loading.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#loading-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  z-index: 10000;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  display: block !important;\n}\n\n#loading-text {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #fff;\n  width: 100px;\n  height: 30px;\n  margin: -7px 0 0 -45px;\n  text-align: center;\n  font-family: \"PT Sans Narrow\", sans-serif;\n  font-size: 20px;\n}\n\n#loading-content {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 170px;\n  height: 170px;\n  margin: -85px 0 0 -85px;\n  border: 3px solid #00aaff;\n}\n\n#loading-content:after {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #0F0;\n  left: 15px;\n  right: 15px;\n  top: 15px;\n  bottom: 15px;\n}\n\n#loading-content:before {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #f2a408;\n  left: 5px;\n  right: 5px;\n  top: 5px;\n  bottom: 5px;\n}\n\n#loading-content {\n  border: 3px solid transparent;\n  border-top-color: #4D658D;\n  border-bottom-color: #4D658D;\n  border-radius: 50%;\n  animation: loader 2s linear infinite;\n}\n\n#loading-content:before {\n  border: 3px solid transparent;\n  border-top-color: #e1d118;\n  border-bottom-color: #e6d413;\n  border-radius: 50%;\n  animation: loader 3s linear infinite;\n}\n\n#loading-content:after {\n  border: 3px solid transparent;\n  border-top-color: #84417C;\n  border-bottom-color: #84417C;\n  border-radius: 50%;\n  animation: loader 1.5s linear infinite;\n  -moz-animation: loader 2s linear infinite;\n  -o-animation: loader 2s linear infinite;\n}\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#content-wrapper {\n  color: #FFF;\n  position: fixed;\n  left: 0;\n  top: 20px;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFJQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFJQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQ0FBQTtFQUNFLHlDQUFBO0VBQ0YsdUNBQUE7QUFERjs7QUFpQkE7RUFDRTtJQUdFLHVCQUFBO0VBRkY7RUFJQTtJQUdFLHlCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuI2xvYWRpbmctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwMCwwMCwwMCwwLjIpO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4jbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IC03cHggMCAwIC00NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBOYXJyb3cnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbjogLTg1cHggMCAwIC04NXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMTcwLCAyNTUpO1xufVxuXG4jbG9hZGluZy1jb250ZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMEYwO1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBib3R0b206IDE1cHg7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjJhNDA4O1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuI2xvYWRpbmctY29udGVudCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjNEQ2NThEO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNEQ2NThEO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQ6YmVmb3JlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlMWQxMTg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlNmQ0MTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkZXIgM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG4jbG9hZGluZy1jb250ZW50OmFmdGVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICM4NDQxN0M7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM4NDQxN0M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlcnMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsb2FkZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuI2NvbnRlbnQtd3JhcHBlciB7XG4gIGNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 53465:
/*!**************************************************************************!*\
  !*** ./src/app/pages/user-registration/add-user/add-user.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".error {\n  color: red;\n}\n\n.hide {\n  display: none;\n}\n\n.inner-addon {\n  position: relative;\n}\n\n.input-group i {\n  line-height: 0;\n  font-size: 0.9rem;\n}\n\n.inner-addon .fas {\n  position: absolute;\n  padding: 16px 17px;\n  z-index: 100;\n  cursor: pointer;\n}\n\n.left-addon .fas {\n  right: 0px;\n}\n\n.right-addon .fas {\n  right: 0px;\n}\n\n.left-addon input {\n  padding-left: 5px;\n}\n\n.right-addon input {\n  padding-right: 5px;\n}\n\n.next-btn {\n  overflow: hidden;\n  margin: 47px 0 0 0;\n}\n\n.fna-segment {\n  margin: 0 15px;\n  overflow: hidden;\n}\n\n.fna-segment div {\n  width: 49%;\n  color: #fff;\n  float: left;\n}\n\n.fna-segment div:last-child {\n  float: right;\n}\n\n@media screen and (min-width: 320px) and (max-width: 460px) {\n  .chart-grid {\n    width: 100%;\n    padding: 0 !important;\n  }\n\n  .fna-segment {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 461px) and (max-width: 680px) {\n  .fna-segment {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUNRO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBS0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQUZOOztFQUlFO0lBQ0ksV0FBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLFdBQUE7RUFGTjtBQUNGIiwiZmlsZSI6ImFkZC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlubmVyLWFkZG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC1ncm91cCBpIHtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlubmVyLWFkZG9uIC5mYXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDE3cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQtYWRkb24gLmZhcyB7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIC5mYXMge1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cbi5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cblxuLm5leHQtYnRue1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiA0N3B4IDAgMCAwO1xufVxuLmZuYS1zZWdtZW50IHtcbiAgIC8vIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgLmNoYXJ0LWdyaWQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm5hLXNlZ21lbnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDYxcHgpIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xuICAgIC5mbmEtc2VnbWVudHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 94817:
/*!****************************************************************************!*\
  !*** ./src/app/pages/user-role/add-user-role/add-user-role.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map