(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_layout_module_ts"],{

/***/ 80105:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "PERFECT_SCROLLBAR_CONFIG": () => (/* binding */ PERFECT_SCROLLBAR_CONFIG),
/* harmony export */   "PerfectScrollbarComponent": () => (/* binding */ PerfectScrollbarComponent),
/* harmony export */   "PerfectScrollbarConfig": () => (/* binding */ PerfectScrollbarConfig),
/* harmony export */   "PerfectScrollbarDirective": () => (/* binding */ PerfectScrollbarDirective),
/* harmony export */   "PerfectScrollbarModule": () => (/* binding */ PerfectScrollbarModule),
/* harmony export */   "Position": () => (/* binding */ Position)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 24575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 53019);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 82585);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 76567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 31607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 95483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ 16367);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ 67888);











function PerfectScrollbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
} }
const _c0 = ["*"];
const PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
class Geometry {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
class PerfectScrollbarConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}) {
        for (const key in config) {
            this[key] = config[key];
        }
    }
}

let PerfectScrollbarDirective = class PerfectScrollbarDirective {
    constructor(zone, differs, elementRef, platformId, defaults) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        if (!this.disabled && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            const config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(() => {
                this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](this.elementRef.nativeElement, config);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(() => {
                this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](() => {
                    this.update();
                });
                if (this.elementRef.nativeElement.children[0]) {
                    this.ro.observe(this.elementRef.nativeElement.children[0]);
                }
                this.ro.observe(this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    const eventType = eventName.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.elementRef.nativeElement, eventType)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(20), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy))
                        .subscribe((event) => {
                        this[eventName].emit(event);
                    });
                });
            });
        }
    }
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(() => {
                if (this.instance) {
                    this.instance.destroy();
                }
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    }
    ps() {
        return this.instance;
    }
    update() {
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(() => {
                if (!this.disabled && this.configDiff) {
                    try {
                        this.zone.runOutsideAngular(() => {
                            if (this.instance) {
                                this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    }
    geometry(prefix = 'scroll') {
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    }
    position(absolute = false) {
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    }
    scrollable(direction = 'any') {
        const element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    }
    scrollTo(x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    }
    scrollToX(x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    }
    scrollToY(y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    }
    scrollToTop(offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }
    scrollToLeft(offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }
    scrollToRight(offset, speed) {
        const left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    }
    scrollToBottom(offset, speed) {
        const top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    }
    scrollToElement(qs, offset, speed) {
        const element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                const currentPos = this.elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                const currentPos = this.elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    }
    animateScrolling(target, value, speed) {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;
            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;
            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
                // Only continue animation if scroll position has not changed
                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    }
                    else {
                        this.elementRef.nativeElement[target] = newValue;
                        // On a zoomed out page the resulting offset may differ
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };
            window.requestAnimationFrame(step);
        }
    }
};
PerfectScrollbarDirective.??fac = function PerfectScrollbarDirective_Factory(t) { return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](PERFECT_SCROLLBAR_CONFIG, 8)); };
PerfectScrollbarDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineDirective"]({ type: PerfectScrollbarDirective, selectors: [["", "perfectScrollbar", ""]], inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]] });
PerfectScrollbarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], PerfectScrollbarDirective.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('perfectScrollbar')
], PerfectScrollbarDirective.prototype, "config", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
PerfectScrollbarDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(3, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional)()), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(4, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(PERFECT_SCROLLBAR_CONFIG))
], PerfectScrollbarDirective);

let PerfectScrollbarComponent = class PerfectScrollbarComponent {
    constructor(zone, cdRef, platformId) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.stateUpdate
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)((a, b) => (a === b && !this.stateTimeout)))
                .subscribe((state) => {
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                    this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    this.interaction = false;
                    if (state === 'x') {
                        this.indicatorX = false;
                        this.states.left = false;
                        this.states.right = false;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        this.indicatorY = false;
                        this.states.top = false;
                        this.states.bottom = false;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        this.states.left = false;
                        this.states.right = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        this.states.top = false;
                        this.states.bottom = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.indicatorY = true;
                        }
                    }
                    if (this.autoPropagation && typeof window !== 'undefined') {
                        this.stateTimeout = window.setTimeout(() => {
                            this.indicatorX = false;
                            this.indicatorY = false;
                            this.stateTimeout = null;
                            if (this.interaction && (this.states.left || this.states.right)) {
                                this.allowPropagationX = true;
                            }
                            if (this.interaction && (this.states.top || this.states.bottom)) {
                                this.allowPropagationY = true;
                            }
                            this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                this.cdRef.markForCheck();
                this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(() => {
                if (this.directiveRef) {
                    const element = this.directiveRef.elementRef.nativeElement;
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'wheel')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollDeltaX = event.deltaX;
                            const scrollDeltaY = event.deltaY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'touchmove')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollPositionX = event.touches[0].clientX;
                            const scrollPositionY = event.touches[0].clientY;
                            const scrollDeltaX = scrollPositionX - this.scrollPositionX;
                            const scrollDeltaY = scrollPositionY - this.scrollPositionY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            this.scrollPositionX = scrollPositionX;
                            this.scrollPositionY = scrollPositionY;
                        }
                    });
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-scroll-x')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)('x')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-scroll-y')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)('y')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-x-reach-end')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)('right')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-y-reach-end')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)('bottom')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-x-reach-start')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)('left')), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'ps-y-reach-start')
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)('top')))
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.ngDestroy))
                        .subscribe((state) => {
                        if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
                            this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        this.directiveRef[eventName] = this[eventName];
                    }
                });
            }, 0);
        }
    }
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    }
    ngDoCheck() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                const element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    }
    checkPropagation(event, deltaX, deltaY) {
        this.interaction = true;
        const scrollDirectionX = (deltaX < 0) ? -1 : 1;
        const scrollDirectionY = (deltaY < 0) ? -1 : 1;
        if ((this.usePropagationX && this.usePropagationY) ||
            (this.usePropagationX && (!this.allowPropagationX ||
                (this.scrollDirectionX !== scrollDirectionX))) ||
            (this.usePropagationY && (!this.allowPropagationY ||
                (this.scrollDirectionY !== scrollDirectionY)))) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
        }
        if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
        }
        this.stateUpdate.next('interaction');
        this.cdRef.detectChanges();
    }
};
PerfectScrollbarComponent.??fac = function PerfectScrollbarComponent_Factory(t) { return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID)); };
PerfectScrollbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: PerfectScrollbarComponent, selectors: [["perfect-scrollbar"]], viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](PerfectScrollbarDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.directiveRef = _t.first);
    } }, hostVars: 4, hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
    } }, inputs: { disabled: "disabled", usePSClass: "usePSClass", autoPropagation: "autoPropagation", scrollIndicators: "scrollIndicators", config: "config" }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]], template: function PerfectScrollbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????projection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("ps", ctx.usePSClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.scrollIndicators);
    } }, directives: [PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"], encapsulation: 2 });
PerfectScrollbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], PerfectScrollbarComponent.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding)('class.ps-show-limits'),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding)('class.ps-show-active'),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)()
], PerfectScrollbarComponent.prototype, "config", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)()
], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild)(PerfectScrollbarDirective, { static: true })
], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
PerfectScrollbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID))
], PerfectScrollbarComponent);

let PerfectScrollbarModule = class PerfectScrollbarModule {
};
PerfectScrollbarModule.??fac = function PerfectScrollbarModule_Factory(t) { return new (t || PerfectScrollbarModule)(); };
PerfectScrollbarModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: PerfectScrollbarModule });
PerfectScrollbarModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](PerfectScrollbarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
        args: [{
                selector: '[perfectScrollbar]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.KeyValueDiffers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['perfectScrollbar']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](PerfectScrollbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
                styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], usePSClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], autoPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
            args: ['class.ps-show-limits']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], scrollIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding,
            args: ['class.ps-show-active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: [PerfectScrollbarDirective, { static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](PerfectScrollbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
                declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](PerfectScrollbarModule, { declarations: function () { return [PerfectScrollbarComponent, PerfectScrollbarDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 16367:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ngx-perfect-scrollbar/node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerfectScrollbar);


/***/ }),

/***/ 39176:
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory()
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this, function () {
  'use strict'

  var toStr = Object.prototype.toString

  function hasOwnProperty (obj, prop) {
    if (obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty (value) {
    if (!value) {
      return true
    }
    if (isArray(value) && value.length === 0) {
      return true
    } else if (typeof value !== 'string') {
      for (var i in value) {
        if (hasOwnProperty(value, i)) {
          return false
        }
      }
      return true
    }
    return false
  }

  function toString (type) {
    return toStr.call(type)
  }

  function isObject (obj) {
    return typeof obj === 'object' && toString(obj) === '[object Object]'
  }

  var isArray = Array.isArray || function (obj) {
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]'
  }

  function isBoolean (obj) {
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]'
  }

  function getKey (key) {
    var intKey = parseInt(key)
    if (intKey.toString() === key) {
      return intKey
    }
    return key
  }

  function factory (options) {
    options = options || {}

    var objectPath = function (obj) {
      return Object.keys(objectPath).reduce(function (proxy, prop) {
        if (prop === 'create') {
          return proxy
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj)
        }

        return proxy
      }, {})
    }

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty (obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop]
      }
    }

    var getShallowPropertySafely
    if (options.includeInheritedProps) {
      getShallowPropertySafely = function (obj, currentPath) {
        if (typeof currentPath !== 'string' && typeof currentPath !== 'number') {
          currentPath = String(currentPath)
        }
        var currentValue = getShallowProperty(obj, currentPath)
        if (currentPath === '__proto__' || currentPath === 'prototype' ||
          (currentPath === 'constructor' && typeof currentValue === 'function')) {
          throw new Error('For security reasons, object\'s magic properties cannot be set')
        }
        return currentValue
      }
    } else {
      getShallowPropertySafely = function (obj, currentPath) {
        return getShallowProperty(obj, currentPath)
      }
    }

    function set (obj, path, value, doNotReplace) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace)
      }
      var currentPath = path[0]
      var currentValue = getShallowPropertySafely(obj, currentPath)
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value
        }
        return currentValue
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if (typeof path[1] === 'number') {
          obj[currentPath] = []
        } else {
          obj[currentPath] = {}
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace)
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      } else if (typeof path === 'string') {
        path = path.split('.')
      }

      if (!path || path.length === 0) {
        return !!obj
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i])

        if ((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j]
        } else {
          return false
        }
      }

      return true
    }

    objectPath.ensureExists = function (obj, path, value) {
      return set(obj, path, value, true)
    }

    objectPath.set = function (obj, path, value, doNotReplace) {
      return set(obj, path, value, doNotReplace)
    }

    objectPath.insert = function (obj, path, value, at) {
      var arr = objectPath.get(obj, path)
      at = ~~at
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }
      arr.splice(at, 0, value)
    }

    objectPath.empty = function (obj, path) {
      if (isEmpty(path)) {
        return void 0
      }
      if (obj == null) {
        return void 0
      }

      var value, i
      if (!(value = objectPath.get(obj, path))) {
        return void 0
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '')
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false)
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0)
      } else if (isArray(value)) {
        value.length = 0
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i]
          }
        }
      } else {
        return objectPath.set(obj, path, null)
      }
    }

    objectPath.push = function (obj, path /*, values */) {
      var arr = objectPath.get(obj, path)
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2))
    }

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value
        }
      }

      return defaultValue
    }

    objectPath.get = function (obj, path, defaultValue) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (obj == null) {
        return defaultValue
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue)
      }

      var currentPath = getKey(path[0])
      var nextObj = getShallowPropertySafely(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue
      }

      if (path.length === 1) {
        return nextObj
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue)
    }

    objectPath.del = function del (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      }

      if (obj == null) {
        return obj
      }

      if (isEmpty(path)) {
        return obj
      }
      if (typeof path === 'string') {
        return objectPath.del(obj, path.split('.'))
      }

      var currentPath = getKey(path[0])
      getShallowPropertySafely(obj, currentPath)
      if (!hasShallowProperty(obj, currentPath)) {
        return obj
      }

      if (path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1)
        } else {
          delete obj[currentPath]
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1))
      }

      return obj
    }

    return objectPath
  }

  var mod = factory()
  mod.create = factory
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod
})


/***/ }),

/***/ 890:
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.round(rect.width);
  i.containerHeight = Math.round(rect.height);

  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    if (e.type.startsWith('touch') && e.changedTouches.length > 1) {
      e.preventDefault();
    }
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        if (!i.element) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerfectScrollbar);


/***/ }),

/***/ 67888:
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 32098:
/*!******************************************!*\
  !*** ./src/assets/js/components/card.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 66190);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */




// Component Definition
var KTCard = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        toggleSpeed: 400,
        sticky: {
            releseOnReverse: false,
            offset: 300,
            zIndex: 101
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).has('card')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).get('card');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).set('card', the);
            }

            return the;
        },

        /**
         * Init card
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.deepExtend({}, defaultOptions, options);
            the.header = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(element, '.card-header');
            the.footer = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(element, '.card-footer');

            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(element, '.card-body')) {
                the.body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(element, '.card-body');
            } else if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(element, '.form')) {
                the.body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(element, '.form');
            }
        },

        /**
         * Build Form Wizard
         */
        build: function() {
            // Remove
            var remove = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(the.header, '[data-card-tool=remove]');
            if (remove) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(remove, 'click', function(e) {
                    e.preventDefault();
                    Plugin.remove();
                });
            }

            // Reload
            var reload = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(the.header, '[data-card-tool=reload]');
            if (reload) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(reload, 'click', function(e) {
                    e.preventDefault();
                    Plugin.reload();
                });
            }

            // Toggle
            var toggle = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(the.header, '[data-card-tool=toggle]');
            if (toggle) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(toggle, 'click', function(e) {
                    e.preventDefault();
                    Plugin.toggle();
                });
            }
        },

        /**
         * Enable stickt mode
         */
        initSticky: function() {
            var lastScrollTop = 0;
            var offset = the.options.sticky.offset;

            if (!the.header) {
                return;
            }

	        window.addEventListener('scroll', Plugin.onScrollSticky);
        },

	    /**
	     * Window scroll handle event for sticky card
	     */
	    onScrollSticky: function(e) {
		    var offset = the.options.sticky.offset;

		    if(isNaN(offset)) return;

		    var st = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getScrollTop();

		    if (st >= offset && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(body, 'card-sticky-on') === false) {
			    Plugin.eventTrigger('stickyOn');

			    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(body, 'card-sticky-on');

			    Plugin.updateSticky();

		    } else if ((st*1.5) <= offset && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(body, 'card-sticky-on')) {
			    // Back scroll mode
			    Plugin.eventTrigger('stickyOff');

			    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(body, 'card-sticky-on');

			    Plugin.resetSticky();
		    }
	    },

        updateSticky: function() {
            if (!the.header) {
                return;
            }

            var top;

            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(body, 'card-sticky-on')) {
                if (the.options.sticky.position.top instanceof Function) {
                    top = parseInt(the.options.sticky.position.top.call(this, the));
                } else {
                    top = parseInt(the.options.sticky.position.top);
                }

                var left;
                if (the.options.sticky.position.left instanceof Function) {
                    left = parseInt(the.options.sticky.position.left.call(this, the));
                } else {
                    left = parseInt(the.options.sticky.position.left);
                }

                var right;
                if (the.options.sticky.position.right instanceof Function) {
                    right = parseInt(the.options.sticky.position.right.call(this, the));
                } else {
                    right = parseInt(the.options.sticky.position.right);
                }

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'z-index', the.options.sticky.zIndex);
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'top', top + 'px');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'left', left + 'px');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'right', right + 'px');
            }
        },

        resetSticky: function() {
            if (!the.header) {
                return;
            }

            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(body, 'card-sticky-on') === false) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'z-index', '');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'top', '');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'left', '');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(the.header, 'right', '');
            }
        },

        /**
         * Remove card
         */
        remove: function() {
            if (Plugin.eventTrigger('beforeRemove') === false) {
                return;
            }

            // Remove tooltips
            var tooltips;
            if ( tooltips = document.querySelectorAll('.tooltip.show') ) {
                $(tooltips).tooltip('dispose');
            }

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.remove(element);

            Plugin.eventTrigger('afterRemove');
        },

        /**
         * Set content
         */
        setContent: function(html) {
            if (html) {
                the.body.innerHTML = html;
            }
        },

        /**
         * Get body
         */
        getBody: function() {
            return the.body;
        },

        /**
         * Get self
         */
        getSelf: function() {
            return element;
        },

        /**
         * Reload
         */
        reload: function() {
            Plugin.eventTrigger('reload');
        },

        /**
         * Toggle
         */
        toggle: function() {
            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(element, 'card-collapse') || _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(element, 'card-collapsed')) {
                Plugin.expand();
            } else {
                Plugin.collapse();
            }
        },

        /**
         * Collapse
         */
        collapse: function() {
            if (Plugin.eventTrigger('beforeCollapse') === false) {
                return;
            }

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideUp(the.body, the.options.toggleSpeed, function() {
                Plugin.eventTrigger('afterCollapse');
            });

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(element, 'card-collapse');
        },

        /**
         * Expand
         */
        expand: function() {
            if (Plugin.eventTrigger('beforeExpand') === false) {
                return;
            }

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideDown(the.body, the.options.toggleSpeed, function() {
                Plugin.eventTrigger('afterExpand');
            });

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(element, 'card-collapse');
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(element, 'card-collapsed');
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            //KTUtil.triggerCustomEvent(name);
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Remove card
     */
    the.remove = function() {
        return Plugin.remove(html);
    };

    /**
     * Init sticky card
     */
    the.initSticky = function() {
        return Plugin.initSticky();
    };

    /**
     * Rerender sticky layout
     */
    the.updateSticky = function() {
        return Plugin.updateSticky();
    };

    /**
     * Reset the sticky
     */
    the.resetSticky = function() {
        return Plugin.resetSticky();
    };

	/**
	 * Destroy sticky card
	 */
	the.destroySticky = function() {
		Plugin.resetSticky();
		window.removeEventListener('scroll', Plugin.onScrollSticky);
	};

    /**
     * Reload card
     */
    the.reload = function() {
        return Plugin.reload();
    };

    /**
     * Set card content
     */
    the.setContent = function(html) {
        return Plugin.setContent(html);
    };

    /**
     * Toggle card
     */
    the.toggle = function() {
        return Plugin.toggle();
    };

    /**
     * Collapse card
     */
    the.collapse = function() {
        return Plugin.collapse();
    };

    /**
     * Expand card
     */
    the.expand = function() {
        return Plugin.expand();
    };

    /**
     * Get cardbody
     * @returns {jQuery}
     */
    the.getBody = function() {
        return Plugin.getBody();
    };

    /**
     * Get cardbody
     * @returns {jQuery}
     */
    the.getSelf = function() {
        return Plugin.getSelf();
    };

    /**
     * Attach event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTCard);

/***/ }),

/***/ 48902:
/*!********************************************!*\
  !*** ./src/assets/js/components/cookie.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KTCookie": () => (/* binding */ KTCookie)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */

// DOCS: https://javascript.info/cookie

// Component Definition
var KTCookie = function() {
  return {
    // returns the cookie with the given name,
    // or undefined if not found
    getCookie: function(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    // Please note that a cookie value is encoded,
    // so getCookie uses a built-in decodeURIComponent function to decode it.
    setCookie: function(name, value, options) {
      if (!options) {
          options = {};
      }

      options = Object.assign({}, {path: '/'}, options);

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (var optionKey in options) {
        if (!options.hasOwnProperty(optionKey)) {
          continue;
        }
        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    },
    // To delete a cookie, we can call it with a negative expiration date:
    deleteCookie: function(name) {
      setCookie(name, "", {
        'max-age': -1
      })
    }
  }
}();

// webpack support
if ( true && typeof module.exports !== 'undefined') {
  // module.exports = KTCookie;
}


/***/ }),

/***/ 14993:
/*!******************************************!*\
  !*** ./src/assets/js/components/menu.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 66190);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */




// Component Definition
var KTMenu = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        // scrollable area with Perfect Scroll
        scroll: {
            rememberPosition: false
        },

        // accordion submenu mode
        accordion: {
            slideSpeed: 200, // accordion toggle slide speed in milliseconds
            autoScroll: false, // enable auto scrolling(focus) to the clicked menu item
            autoScrollSpeed: 1200,
            expandAll: true // allow having multiple expanded accordions in the menu
        },

        // dropdown submenu mode
        dropdown: {
            timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown
        }
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Run plugin
         * @returns {KTMenu}
         */
        construct: function(options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).has('menu')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).get('menu');
            } else {
                // reset menu
                Plugin.init(options);

                // reset menu
                Plugin.reset();

                // build menu
                Plugin.build();

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).set('menu', the);
            }

            return the;
        },

        /**
         * Handles submenu click toggle
         * @returns {KTMenu}
         */
        init: function(options) {
            the.events = [];

            the.eventHandlers = {};

            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.deepExtend({}, defaultOptions, options);

            // pause menu
            the.pauseDropdownHoverTime = 0;

            the.uid = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getUniqueID();
        },

        update: function(options) {
            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.deepExtend({}, defaultOptions, options);

            // pause menu
            the.pauseDropdownHoverTime = 0;

             // reset menu
            Plugin.reset();

            the.eventHandlers = {};

            // build menu
            Plugin.build();

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).set('menu', the);
        },

        reload: function() {
             // reset menu
            Plugin.reset();

            // build menu
            Plugin.build();

            // reset submenu props
            Plugin.resetSubmenuProps();
        },

        /**
         * Reset menu
         * @returns {KTMenu}
         */
        build: function() {
            // General accordion submenu toggle
            the.eventHandlers['event_1'] = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.on( element, '.menu-toggle', 'click', Plugin.handleSubmenuAccordion);

            // Dropdown mode(hoverable)
            if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
                // dropdown submenu - hover toggle
                the.eventHandlers['event_2'] = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.on( element, '[data-menu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
                the.eventHandlers['event_3'] = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.on( element, '[data-menu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit);

                // dropdown submenu - click toggle
                the.eventHandlers['event_4'] = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.on( element, '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownClick);
                the.eventHandlers['event_5'] = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.on( element, '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
            }

            // Handle general link click
            the.eventHandlers['event_6'] = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.on(element, '.menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)', 'click', Plugin.handleLinkClick);

            // Init scrollable menu
            if (the.options.scroll && the.options.scroll.height) {
                Plugin.scrollInit();
            }
        },

        /**
         * Reset menu
         * @returns {KTMenu}
         */
        reset: function() {
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.off( element, 'click', the.eventHandlers['event_1']);

            // dropdown submenu - hover toggle
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.off( element, 'mouseover', the.eventHandlers['event_2']);
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.off( element, 'mouseout', the.eventHandlers['event_3']);

            // dropdown submenu - click toggle
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.off( element, 'click', the.eventHandlers['event_4']);
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.off( element, 'click', the.eventHandlers['event_5']);

            // handle link click
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.off(element, 'click', the.eventHandlers['event_6']);
        },

        /**
         * Init scroll menu
         *
        */
        scrollInit: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollDestroy(element, true);
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(element, {mobileNativeScroll: true, windowScroll: false, resetHeightOnDestroy: true, handleWindowResize: true, height: the.options.scroll.height, rememberPosition: the.options.scroll.rememberPosition});
            } else {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollDestroy(element, true);
            }
        },

        /**
         * Update scroll menu
        */
        scrollUpdate: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollUpdate(element);
            }
        },

        /**
         * Scroll top
        */
        scrollTop: function() {
            if ( the.options.scroll && the.options.scroll.height ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollTop(element);
            }
        },

        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {KTMenu}
         */
        getSubmenuMode: function(el) {
            if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg') ) {
                if (el && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasAttr(el, 'data-menu-toggle') && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(el, 'data-menu-toggle') == 'hover') {
                    return 'dropdown';
                }

                if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isset(the.options.submenu, 'desktop.state.body') ) {
                    if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClasses(body, the.options.submenu.desktop.state.body) ) {
                        return the.options.submenu.desktop.state.mode;
                    } else {
                        return the.options.submenu.desktop.default;
                    }
                } else if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isset(the.options.submenu, 'desktop') ) {
                    return the.options.submenu.desktop;
                }
            } else if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('md') && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointDown('lg') && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isset(the.options.submenu, 'tablet') ) {
                return the.options.submenu.tablet;
            } else if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointDown('md') && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isset(the.options.submenu, 'mobile') ) {
                return the.options.submenu.mobile;
            } else {
                return false;
            }
        },

        /**
         * Get submenu mode for current breakpoint and menu state
         * @returns {KTMenu}
         */
        isConditionalSubmenuDropdown: function() {
            if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg') && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isset(the.options.submenu, 'desktop.state.body') ) {
                return true;
            } else {
                return false;
            }
        },


        /**
         * Reset submenu attributes
         * @returns {KTMenu}
         */
        resetSubmenuProps: function(e) {
            var submenus = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.findAll(element, '.menu-submenu');
            if ( submenus ) {
                for (var i = 0, len = submenus.length; i < len; i++) {
                    var submenu = submenus[0];

                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(submenu, 'display', '');
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(submenu, 'overflow', '');

                    if (submenu.hasAttribute('data-hor-direction')) {
                        _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(submenu, 'menu-submenu-left');
                        _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(submenu, 'menu-submenu-right');
                        _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(submenu, submenu.getAttribute('data-hor-direction'));
                    }
                }
            }
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        handleSubmenuDrodownHoverEnter: function(e) {
            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            if ( the.resumeDropdownHover() === false ) {
                return;
            }

            var item = this;

            if ( item.getAttribute('data-hover') == '1' ) {
                item.removeAttribute('data-hover');
                clearTimeout( item.getAttribute('data-timeout') );
                item.removeAttribute('data-timeout');
            }

            Plugin.showSubmenuDropdown(item);
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        handleSubmenuDrodownHoverExit: function(e) {
            if ( the.resumeDropdownHover() === false ) {
                return;
            }

            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            var item = this;
            var time = the.options.dropdown.timeout;

            var timeout = setTimeout(function() {
                if ( item.getAttribute('data-hover') == '1' ) {
                    Plugin.hideSubmenuDropdown(item, true);
                }
            }, time);

            item.setAttribute('data-hover', '1');
            item.setAttribute('data-timeout', timeout);
        },

        /**
         * Handles submenu click toggle
         * @returns {KTMenu}
         */
        handleSubmenuDropdownClick: function(e) {
            if ( Plugin.getSubmenuMode(this) === 'accordion' ) {
                return;
            }

            var item = this.closest('.menu-item');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if ( item.getAttribute('data-menu-submenu-mode') == 'accordion' ) {
                return;
            }

            if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(item, 'menu-item-hover') === false ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            } else {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(item, 'menu-item-open-dropdown' );
                Plugin.hideSubmenuDropdown(item, true);
            }

            e.preventDefault();
        },

        /**
         * Handles tab click toggle
         * @returns {KTMenu}
         */
        handleSubmenuDropdownTabClick: function(e) {
            if (Plugin.getSubmenuMode(this) === 'accordion') {
                return;
            }
            var item = this.closest('.menu-item');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if (item.getAttribute('data-menu-submenu-mode') == 'accordion') {
                return;
            }

            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(item, 'menu-item-hover') == false) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(item, 'menu-item-open-dropdown');
                Plugin.showSubmenuDropdown(item);
            }

            e.preventDefault();
        },

        /**
         * Handles link click
         * @returns {KTMenu}
         */
        handleLinkClick: function(e) {
            var submenu = this.closest('.menu-item.menu-item-submenu');

            // Trigger click event handlers
            var result = Plugin.eventTrigger('linkClick', this, e);
            if (result === false) {
                return;
            }

            if ( submenu && Plugin.getSubmenuMode(submenu) === 'dropdown' ) {
                Plugin.hideSubmenuDropdowns();
            }
        },

        /**
         * Handles submenu dropdown close on link click
         * @returns {KTMenu}
         */
        handleSubmenuDropdownClose: function(e, el) {
            // exit if its not submenu dropdown mode
            if (Plugin.getSubmenuMode(el) === 'accordion') {
                return;
            }

            var shown = element.querySelectorAll('.menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)');

            // check if currently clicked link's parent item ha
            if (shown.length > 0 && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(el, 'menu-toggle') === false && el.querySelectorAll('.menu-toggle').length === 0) {
                // close opened dropdown menus
                for (var i = 0, len = shown.length; i < len; i++) {
                    Plugin.hideSubmenuDropdown(shown[0], true);
                }
            }
        },

        /**
         * helper functions
         * @returns {KTMenu}
         */
        handleSubmenuAccordion: function(e, el) {
            var query;
            var item = el ? el : this;

            // Trigger click event handlers
            var result = Plugin.eventTrigger('submenuToggle', this, e);
            if (result === false) {
                return;
            }

            if ( Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.menu-item') ) ) {
                if (query.getAttribute('data-menu-submenu-mode') != 'accordion' ) {
                    e.preventDefault();
                    return;
                }
            }

            var li = item.closest('.menu-item');
            var submenu = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(li, '.menu-submenu, .menu-inner');

            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(item.closest('.menu-item'), 'menu-item-open-always')) {
                return;
            }

            if ( li && submenu ) {
                e.preventDefault();
                var speed = the.options.accordion.slideSpeed;
                var hasClosables = false;

                if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(li, 'menu-item-open') === false ) {
                    // hide other accordions
                    if ( the.options.accordion.expandAll === false ) {
                        var subnav = item.closest('.menu-nav, .menu-subnav');
                        var closables = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.children(subnav, '.menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)');

                        if ( subnav && closables ) {
                            for (var i = 0, len = closables.length; i < len; i++) {
                                var el_ = closables[0];
                                var submenu_ = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(el_, '.menu-submenu');
                                if ( submenu_ ) {
                                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideUp(submenu_, speed, function() {
                                        Plugin.scrollUpdate();
                                        _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(el_, 'menu-item-open');
                                    });
                                }
                            }
                        }
                    }

                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideDown(submenu, speed, function() {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();

                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });

                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(li, 'menu-item-open');

                } else {
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.slideUp(submenu, speed, function() {
                        Plugin.scrollToItem(item);
                        Plugin.scrollUpdate();
                        Plugin.eventTrigger('submenuToggle', submenu, e);
                    });

                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(li, 'menu-item-open');
                }
            }
        },

        /**
         * scroll to item function
         * @returns {KTMenu}
         */
        scrollToItem: function(item) {
            // handle auto scroll for accordion submenus
            if ( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg')  && the.options.accordion.autoScroll && element.getAttribute('data-menu-scroll') !== '1' ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollTo(item, the.options.accordion.autoScrollSpeed);
            }
        },

        /**
         * Hide submenu dropdown
         * @returns {KTMenu}
         */
        hideSubmenuDropdown: function(item, classAlso) {
            // remove submenu activation class
            if ( classAlso ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(item, 'menu-item-hover');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(item, 'menu-item-active-tab');
            }

            // clear timeout
            item.removeAttribute('data-hover');

            if ( item.getAttribute('data-menu-toggle-class') ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(body, item.getAttribute('data-menu-toggle-class'));
            }

            var timeout = item.getAttribute('data-timeout');
            item.removeAttribute('data-timeout');
            clearTimeout(timeout);
        },

        /**
         * Hide submenu dropdowns
         * @returns {KTMenu}
         */
        hideSubmenuDropdowns: function() {
            var items;
            if ( items = element.querySelectorAll('.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])') ) {
                for (var j = 0, cnt = items.length; j < cnt; j++) {
                    Plugin.hideSubmenuDropdown(items[j], true);
                }
            }
        },

        /**
         * helper functions
         * @returns {KTMenu}
         */
        showSubmenuDropdown: function(item) {
            // close active submenus
            var list = element.querySelectorAll('.menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab');

            if ( list ) {
                for (var i = 0, len = list.length; i < len; i++) {
                    var el = list[i];
                    if ( item !== el && el.contains(item) === false && item.contains(el) === false ) {
                        Plugin.hideSubmenuDropdown(el, true);
                    }
                }
            }

            // add submenu activation class
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(item, 'menu-item-hover');

            // Change the alignment of submenu is offscreen.
            var submenu = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(item, '.menu-submenu');

            if (submenu && submenu.hasAttribute('data-hor-direction') === false) {
                if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(submenu, 'menu-submenu-left')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-left');
                } else if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(submenu, 'menu-submenu-right')) {
                    submenu.setAttribute('data-hor-direction', 'menu-submenu-right');
                }
            }

            if ( submenu && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isOffscreen(submenu, 'left', 15) === true ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(submenu, 'menu-submenu-left');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(submenu, 'menu-submenu-right');
            } else if ( submenu && _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isOffscreen(submenu, 'right', 15) === true ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(submenu, 'menu-submenu-right');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(submenu, 'menu-submenu-left');
            }

            if ( item.getAttribute('data-menu-toggle-class') ) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(body, item.getAttribute('data-menu-toggle-class'));
            }
        },

        /**
         * Handles submenu slide toggle
         * @returns {KTMenu}
         */
        createSubmenuDropdownClickDropoff: function(el) {
            var query;
            var zIndex = (query = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(el, '.menu-submenu') ? _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(query, 'z-index') : 0) - 1;

            var dropoff = document.createElement('<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');

            body.appendChild(dropoff);

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(dropoff, 'click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.remove(this);
                Plugin.hideSubmenuDropdown(el, true);
            });
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        pauseDropdownHover: function(time) {
            var date = new Date();

            the.pauseDropdownHoverTime = date.getTime() + time;
        },

        /**
         * Handles submenu hover toggle
         * @returns {KTMenu}
         */
        resumeDropdownHover: function() {
            var date = new Date();

            return (date.getTime() > the.pauseDropdownHoverTime ? true : false);
        },

        /**
         * Reset menu's current active item
         * @returns {KTMenu}
         */
        resetActiveItem: function(item) {
            var list;
            var parents;

            list = element.querySelectorAll('.menu-item-active');

            for (var i = 0, len = list.length; i < len; i++) {
                var el = list[0];
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(el, 'menu-item-active');
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hide( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(el, '.menu-submenu') );
                parents = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.parents(el, '.menu-item-submenu') || [];

                for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
                    var el_ = parents[i];
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(el_, 'menu-item-open');
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hide( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(el_, '.menu-submenu') );
                }
            }

            // close open submenus
            if ( the.options.accordion.expandAll === false ) {
                if ( list = element.querySelectorAll('.menu-item-open') ) {
                    for (var i = 0, len = list.length; i < len; i++) {
                        _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(parents[0], 'menu-item-open');
                    }
                }
            }
        },

        /**
         * Sets menu's active item
         * @returns {KTMenu}
         */
        setActiveItem: function(item) {
            // reset current active item
            Plugin.resetActiveItem();

            var parents = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.parents(item, '.menu-item-submenu') || [];
            for (var i = 0, len = parents.length; i < len; i++) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(parents[i], 'menu-item-open');
            }

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(item, 'menu-item-active');
        },

        /**
         * Returns page breadcrumbs for the menu's active item
         * @returns {KTMenu}
         */
        getBreadcrumbs: function(item) {
            var query;
            var breadcrumbs = [];
            var link = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(item, '.menu-link');

            breadcrumbs.push({
                text: (query = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(link, '.menu-text') ? query.innerHTML : ''),
                title: link.getAttribute('title'),
                href: link.getAttribute('href')
            });

            var parents = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.parents(item, '.menu-item-submenu');
            for (var i = 0, len = parents.length; i < len; i++) {
                var submenuLink = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(parents[i], '.menu-link');

                breadcrumbs.push({
                    text: (query = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(submenuLink, '.menu-text') ? query.innerHTML : ''),
                    title: submenuLink.getAttribute('title'),
                    href: submenuLink.getAttribute('href')
                });
            }

            return  breadcrumbs.reverse();
        },

        /**
         * Returns page title for the menu's active item
         * @returns {KTMenu}
         */
        getPageTitle: function(item) {
            var query;

            return (query = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.child(item, '.menu-text') ? query.innerHTML : '');
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name, target, e) {
            for (var i = 0; i < the.events.length; i++ ) {
                var event = the.events[i];
                if ( event.name == name ) {
                    if ( event.one == true ) {
                        if ( event.fired == false ) {
                            the.events[i].fired = true;
                            return event.handler.call(this, target, e);
                        }
                    } else {
                        return event.handler.call(this, target, e);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        },

        removeEvent: function(name) {
            if (the.events[name]) {
                delete the.events[name];
            }
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Update scroll
     */
    the.scrollUpdate = function() {
        return Plugin.scrollUpdate();
    };

    /**
     * Re-init scroll
     */
    the.scrollReInit = function() {
        return Plugin.scrollInit();
    };

    /**
     * Scroll top
     */
    the.scrollTop = function() {
        return Plugin.scrollTop();
    };

    /**
     * Set active menu item
     */
    the.setActiveItem = function(item) {
        return Plugin.setActiveItem(item);
    };

    the.reload = function() {
        return Plugin.reload();
    };

    the.update = function(options) {
        return Plugin.update(options);
    };

    /**
     * Set breadcrumb for menu item
     */
    the.getBreadcrumbs = function(item) {
        return Plugin.getBreadcrumbs(item);
    };

    /**
     * Set page title for menu item
     */
    the.getPageTitle = function(item) {
        return Plugin.getPageTitle(item);
    };

    /**
     * Get submenu mode
     */
    the.getSubmenuMode = function(el) {
        return Plugin.getSubmenuMode(el);
    };

    /**
     * Hide dropdown
     * @returns {Object}
     */
    the.hideDropdown = function(item) {
        Plugin.hideSubmenuDropdown(item, true);
    };

    /**
     * Hide dropdowns
     * @returns {Object}
     */
    the.hideDropdowns = function() {
        Plugin.hideSubmenuDropdowns();
    };

    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.pauseDropdownHover = function(time) {
        Plugin.pauseDropdownHover(time);
    };

    /**
     * Disable menu for given time
     * @returns {Object}
     */
    the.resumeDropdownHover = function() {
        return Plugin.resumeDropdownHover();
    };

    /**
     * Register event
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    the.off = function(name) {
        return Plugin.removeEvent(name);
    };

    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Handle plugin on window resize
    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addResizeHandler(function() {
        if (init) {
            the.reload();
        }
    });

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTMenu;
}

// Plugin global lazy initialization
document.addEventListener("click", function (e) {
    var body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getByTagName('body')[0];
    var query;
    if ( query = body.querySelectorAll('.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]') ) {
        for (var i = 0, len = query.length; i < len; i++) {
            var element = query[i].closest('.menu-nav').parentNode;

            if ( element ) {
                var the = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).get('menu');

                if ( !the ) {
                    break;
                }

                if ( !the || the.getSubmenuMode() !== 'dropdown' ) {
                    break;
                }

                if ( e.target !== element && element.contains(e.target) === false ) {
                    the.hideDropdowns();
                }
            }
        }
    }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTMenu);

/***/ }),

/***/ 5703:
/*!***********************************************!*\
  !*** ./src/assets/js/components/offcanvas.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 66190);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */




// Component Definition
var KTOffcanvas = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        attrCustom: ''
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        construct: function(options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).has('offcanvas')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).get('offcanvas');
            } else {
                // Reset offcanvas
                Plugin.init(options);

                // Build offcanvas
                Plugin.build();

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).set('offcanvas', the);
            }

            return the;
        },

        init: function(options) {
            the.events = [];

            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.deepExtend({}, defaultOptions, options);

            the.classBase = the.options.baseClass;
            the.attrCustom = the.options.attrCustom;
            the.classShown = the.classBase + '-on';
            the.classOverlay = the.classBase + '-overlay';
            the.target;

            the.state = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(element, the.classShown) ? 'shown' : 'hidden';
        },

        build: function() {
            // offcanvas toggle
            if (the.options.toggleBy) {
                if (typeof the.options.toggleBy === 'string') {
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(the.options.toggleBy), 'click', function(e) {
                        e.preventDefault();
                        the.target = this;
                        Plugin.toggle();
                    });
                } else if (the.options.toggleBy && the.options.toggleBy[0]) {
                    if (the.options.toggleBy[0].target) {
                        for (var i in the.options.toggleBy) {
                            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(the.options.toggleBy[i].target), 'click', function(e) {
                                e.preventDefault();
                                the.target = this;
                                Plugin.toggle();
                            });
                        }
                    } else {
                        for (var i in the.options.toggleBy) {
                            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(the.options.toggleBy[i]), 'click', function(e) {
                                e.preventDefault();
                                the.target = this;
                                Plugin.toggle();
                            });
                        }
                    }

                } else if (the.options.toggleBy && the.options.toggleBy.target) {
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent( _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(the.options.toggleBy.target), 'click', function(e) {
                        e.preventDefault();
                        the.target = this;
                        Plugin.toggle();
                    });
                }
            }

            // offcanvas close
            var closeBy = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(the.options.closeBy);
            if (closeBy) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(closeBy, 'click', function(e) {
                    e.preventDefault();
                    the.target = this;
                    Plugin.hide();
                });
            }
        },

        isShown: function() {
            return (the.state == 'shown' ? true : false);
        },

        toggle: function() {;
            Plugin.eventTrigger('toggle');

            if (the.state == 'shown') {
                Plugin.hide();
            } else {
                Plugin.show();
            }
        },

        show: function() {
            if (the.state == 'shown') {
                return;
            }

            Plugin.eventTrigger('beforeShow');

            Plugin.toggleClass('show');

            // Offcanvas panel
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(body, 'data-offcanvas-' + the.classBase, 'on');
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(element, the.classShown);

            if (the.attrCustom.length > 0) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(body, 'data-offcanvas-' + the.classCustom, 'on');
                //KTUtil.addClass(body, the.classCustom);
            }

            the.state = 'shown';

            if (the.options.overlay) {
                the.overlay = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.insertAfter(document.createElement('DIV') , element );
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(the.overlay, the.classOverlay);

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(the.overlay, 'click', function(e) {
                    //e.stopPropagation();
                    e.preventDefault();
                    Plugin.hide(the.target);
                });
            }

            Plugin.eventTrigger('afterShow');
        },

        hide: function() {
            if (the.state == 'hidden') {
                return;
            }

            Plugin.eventTrigger('beforeHide');

            Plugin.toggleClass('hide');

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeAttr(body, 'data-offcanvas-' + the.classBase);
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(element, the.classShown);

            if (the.attrCustom.length > 0) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeAttr(body, 'data-offcanvas-' + the.attrCustom);
            }

            the.state = 'hidden';

            if (the.options.overlay && the.overlay) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.remove(the.overlay);
            }

            Plugin.eventTrigger('afterHide');
        },

        toggleClass: function(mode) {
            var id = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(the.target, 'id');
            var toggleBy;

            if (the.options.toggleBy && the.options.toggleBy[0] && the.options.toggleBy[0].target) {
                for (var i in the.options.toggleBy) {
                    if (the.options.toggleBy[i].target === id) {
                        toggleBy = the.options.toggleBy[i];
                    }
                }
            } else if (the.options.toggleBy && the.options.toggleBy.target) {
                toggleBy = the.options.toggleBy;
            }

            if (toggleBy) {
                var el = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(toggleBy.target);

                if (mode === 'show') {
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(el, toggleBy.state);
                }

                if (mode === 'hide') {
                    _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(el, toggleBy.state);
                }
            }
        },

        eventTrigger: function(name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    } else {
                        return event.handler.call(this, the, args);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     * @param options
     */
    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Check if canvas is shown
     * @returns {boolean}
     */
    the.isShown = function() {
        return Plugin.isShown();
    };

    /**
     * Set to hide the canvas
     */
    the.hide = function() {
        return Plugin.hide();
    };

    /**
     * Set to show the canvas
     */
    the.show = function() {
        return Plugin.show();
    };

    /**
     * Attach event
     * @param name
     * @param handler
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     * @param name
     * @param handler
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTOffcanvas;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTOffcanvas);

/***/ }),

/***/ 31754:
/*!***********************************************!*\
  !*** ./src/assets/js/components/scrolltop.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 66190);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */




// Component Definition
var KTScrolltop = function(elementId, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(elementId);
    var body = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody();

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        offset: 300,
        speed: 6000
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Run plugin
         * @returns {mscrolltop}
         */
        construct: function(options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).has('scrolltop')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).get('scrolltop');
            } else {
                // reset scrolltop
                Plugin.init(options);

                // build scrolltop
                Plugin.build();

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).set('scrolltop', the);
            }

            return the;
        },

        /**
         * Handles subscrolltop click toggle
         * @returns {mscrolltop}
         */
        init: function(options) {
            the.events = [];

            // merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.deepExtend({}, defaultOptions, options);
        },

        build: function() {
            var timer;

            window.addEventListener('scroll', function() {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.throttle(timer, function() {
                    Plugin.handle();
                }, 200);
            });

            // handle button click
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(element, 'click', Plugin.scroll);
        },

        /**
         * Handles scrolltop click scrollTop
         */
        handle: function() {
            var pos = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getScrollTop(); // current vertical position

            if (pos > the.options.offset) {
                if (body.hasAttribute('data-scrolltop') === false) {
                    body.setAttribute('data-scrolltop', 'on');
                }
            } else {
                if (body.hasAttribute('data-scrolltop') === true) {
                    body.removeAttribute('data-scrolltop');
                }
            }
        },

        /**
         * Handles scrolltop click scrollTop
         */
        scroll: function(e) {
            e.preventDefault();

            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollTop(0, the.options.speed);
        },


        /**
         * Trigger events
         */
        eventTrigger: function(name, args) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];
                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the, args);
                        }
                    } else {
                       return event.handler.call(this, the, args);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Get subscrolltop mode
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Set scrolltop content
     * @returns {mscrolltop}
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    ///////////////////////////////
    // ** Plugin Construction ** //
    ///////////////////////////////

    // Run plugin
    Plugin.construct.apply(the, [options]);

    // Init done
    init = true;

    // Return plugin instance
    return the;
};

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTScrolltop;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTScrolltop);

/***/ }),

/***/ 65232:
/*!********************************************!*\
  !*** ./src/assets/js/components/toggle.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 66190);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */




// Component Definition
var KTToggle = function(toggleElement, targetElement, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = toggleElement;
    var target = targetElement;

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        targetToggleMode: 'class' // class|attribute
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (_util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).has('toggle')) {
                the = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).get('toggle');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.data(element).set('toggle', the);
            }

            return the;
        },

        /**
         * Handles subtoggle click toggle
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // Merge default and user defined options
            the.options = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.deepExtend({}, defaultOptions, options);

            //alert(the.options.target.tagName);
            the.target = target;

            the.targetState = the.options.targetState;
            the.toggleState = the.options.toggleState;

            if (the.options.targetToggleMode == 'class') {
                the.state = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClasses(the.target, the.targetState) ? 'on' : 'off';
            } else {
                the.state = _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasAttr(the.target, 'data-' + the.targetState) ? _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(the.target, 'data-' + the.targetState) : 'off';
            }
        },

        /**
         * Setup toggle
         */
        build: function() {
            _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(element, 'mouseup', Plugin.toggle);
        },

        /**
         * Handles offcanvas click toggle
         */
        toggle: function(e) {
            Plugin.eventTrigger('beforeToggle');

            if (the.state == 'off') {
                Plugin.toggleOn();
            } else {
                Plugin.toggleOff();
            }

            Plugin.eventTrigger('afterToggle');

            e.preventDefault();

            return the;
        },

        /**
         * Handles toggle click toggle
         */
        toggleOn: function() {
            Plugin.eventTrigger('beforeOn');

            if (the.options.targetToggleMode == 'class') {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(the.target, the.targetState);
            } else {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(the.target, 'data-' + the.targetState, 'on');
            }

            if (the.toggleState) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(element, the.toggleState);
            }

            the.state = 'on';

            Plugin.eventTrigger('afterOn');

            Plugin.eventTrigger('toggle');

            return the;
        },

        /**
         * Handles toggle click toggle
         */
        toggleOff: function() {
            Plugin.eventTrigger('beforeOff');

            if (the.options.targetToggleMode == 'class') {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(the.target, the.targetState);
            } else {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeAttr(the.target, 'data-' + the.targetState);
            }

            if (the.toggleState) {
                _util__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(element, the.toggleState);
            }

            the.state = 'off';

            Plugin.eventTrigger('afterOff');

            Plugin.eventTrigger('toggle');

            return the;
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];

                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Get toggle state
     */
    the.getState = function() {
        return the.state;
    };

    /**
     * Toggle
     */
    the.toggle = function() {
        return Plugin.toggle();
    };

    /**
     * Toggle on
     */
    the.toggleOn = function() {
        return Plugin.toggleOn();
    };

    /**
     * Toggle off
     */
    the.toggleOff = function() {
        return Plugin.toggleOff();
    };

    /**
     * Attach event
     * @returns {KTToggle}
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     * @returns {KTToggle}
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTToggle;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTToggle);

/***/ }),

/***/ 66190:
/*!******************************************!*\
  !*** ./src/assets/js/components/util.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KTUtil": () => (/* binding */ KTUtil)
/* harmony export */ });
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ 890);
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie.js */ 48902);
/* module decorator */ module = __webpack_require__.hmd(module);
/* eslint-disable */






/**
 * @class KTUtil  base utilize class that privides helper functions
 */

// Polyfills
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}
	Element.prototype.closest = function (s) {
		var el = this;
		var ancestor = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (ancestor.matches(s)) return ancestor;
			ancestor = ancestor.parentElement;
		} while (ancestor !== null);
		return null;
	};
}

/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */
(function (elem) {
	for (var i = 0; i < elem.length; i++) {
		if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;
		window[elem[i]].prototype.remove = function () {
			this.parentNode.removeChild(this);
		};
	}
})(['Element', 'CharacterData', 'DocumentType']);


//
// requestAnimationFrame polyfill by Erik M??ller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function(arr) {
    arr.forEach(function(item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                argArr.forEach(function(argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// getAttributeNames
if (Element.prototype.getAttributeNames == undefined) {
  Element.prototype.getAttributeNames = function () {
    var attributes = this.attributes;
    var length = attributes.length;
    var result = new Array(length);
    for (var i = 0; i < length; i++) {
      result[i] = attributes[i].name;
    }
    return result;
  };
}

// Global variables
window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function() {
    var resizeHandlers = [];

    /** @type {object} breakpoints The device width breakpoints **/
    var breakpoints = {
        sm: 544, // Small screen / phone
        md: 768, // Medium screen / tablet
        lg: 992, // Large screen / desktop
        xl: 1200 // Extra large screen / wide desktop
    };

    /**
     * Handle window resize event with some
     * delay to attach event handlers upon resize complete
     */
    var _windowResizeHandler = function() {
        var _runResizeHandlers = function() {
            // reinitialize other subscribed elements
            for (var i = 0; i < resizeHandlers.length; i++) {
                var each = resizeHandlers[i];
                each.call();
            }
        };

        var timer;

        window.addEventListener('resize', function() {
            KTUtil.throttle(timer, function() {
                _runResizeHandlers();
            }, 200);
        });
    };

    return {
        /**
         * Class main initializer.
         * @param {object} settings.
         * @returns null
         */
        //main function to initiate the theme
        init: function(settings) {
            if (settings && settings.breakpoints) {
                breakpoints = settings.breakpoints;
            }

            _windowResizeHandler();
        },

        /**
         * Adds window resize event handler.
         * @param {function} callback function.
         */
        addResizeHandler: function(callback) {
            resizeHandlers.push(callback);
        },

        /**
         * Removes window resize event handler.
         * @param {function} callback function.
         */
        removeResizeHandler: function(callback) {
            for (var i = 0; i < resizeHandlers.length; i++) {
                if (callback === resizeHandlers[i]) {
                    delete resizeHandlers[i];
                }
            }
        },

        /**
         * Trigger window resize handlers.
         */
        runResizeHandlers: function() {
            _runResizeHandlers();
        },

        resize: function() {
            if (typeof(Event) === 'function') {
                // modern browsers
                window.dispatchEvent(new Event('resize'));
            } else {
                // for IE and other old browsers
                // causes deprecation warning on modern browsers
                var evt = window.document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
            }
        },

        /**
         * Get GET parameter value from URL.
         * @param {string} paramName Parameter name.
         * @returns {string}
         */
        getURLParam: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }

            return null;
        },

        /**
         * Checks whether current device is mobile touch.
         * @returns {boolean}
         */
        isMobileDevice: function() {
            var test = (this.getViewPort().width < this.getBreakpoint('lg') ? true : false);

            if (test === false) {
                // For use within normal web clients
                test = navigator.userAgent.match(/iPad/i) != null;
            }

            return test;
        },

        /**
         * Checks whether current device is desktop.
         * @returns {boolean}
         */
        isDesktopDevice: function() {
            return KTUtil.isMobileDevice() ? false : true;
        },

        /**
         * Gets browser window viewport size. Ref:
         * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
         * @returns {object}
         */
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        /**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isInResponsiveRange: function(mode) {
            var breakpoint = this.getViewPort().width;

            if (mode == 'general') {
                return true;
            } else if (mode == 'desktop' && breakpoint >= (this.getBreakpoint('lg') + 1)) {
                return true;
            } else if (mode == 'tablet' && (breakpoint >= (this.getBreakpoint('md') + 1) && breakpoint < this.getBreakpoint('lg'))) {
                return true;
            } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
                return true;
            } else if (mode == 'desktop-and-tablet' && breakpoint >= (this.getBreakpoint('md') + 1)) {
                return true;
            } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
                return true;
            } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
                return true;
            }

            return false;
        },

		/**
         * Checks whether given device mode is currently activated.
         * @param {string} mode Responsive mode name(e.g: desktop,
         *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
         * @returns {boolean}
         */
        isBreakpointUp: function(mode) {
            var width = this.getViewPort().width;
			var breakpoint = this.getBreakpoint(mode);

			return (width >= breakpoint);
        },

		isBreakpointDown: function(mode) {
            var width = this.getViewPort().width;
			var breakpoint = this.getBreakpoint(mode);

			return (width < breakpoint);
        },

        /**
         * Generates unique ID for give prefix.
         * @param {string} prefix Prefix for generated ID
         * @returns {boolean}
         */
        getUniqueID: function(prefix) {
            return prefix + Math.floor(Math.random() * (new Date()).getTime());
        },

        /**
         * Gets window width for give breakpoint mode.
         * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
         * @returns {number}
         */
        getBreakpoint: function(mode) {
            return breakpoints[mode];
        },

        /**
         * Checks whether object has property matchs given key path.
         * @param {object} obj Object contains values paired with given key path
         * @param {string} keys Keys path seperated with dots
         * @returns {object}
         */
        isset: function(obj, keys) {
            var stone;

            keys = keys || '';

            if (keys.indexOf('[') !== -1) {
                throw new Error('Unsupported object path notation.');
            }

            keys = keys.split('.');

            do {
                if (obj === undefined) {
                    return false;
                }

                stone = keys.shift();

                if (!obj.hasOwnProperty(stone)) {
                    return false;
                }

                obj = obj[stone];

            } while (keys.length);

            return true;
        },

        /**
         * Gets highest z-index of the given element parents
         * @param {object} el jQuery element object
         * @returns {number}
         */
        getHighestZindex: function(el) {
            var position, value;

            while (el && el !== document) {
                // Ignore z-index if position is set to a value where z-index is ignored by the browser
                // This makes behavior of this function consistent across browsers
                // WebKit always returns auto if the element is positioned
                position = KTUtil.css(el, 'position');

                if (position === "absolute" || position === "relative" || position === "fixed") {
                    // IE returns 0 when zIndex is not specified
                    // other browsers return a string
                    // we ignore the case of nested elements with an explicit value of 0
                    // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                    value = parseInt(KTUtil.css(el, 'z-index'));

                    if (!isNaN(value) && value !== 0) {
                        return value;
                    }
                }

                el = el.parentNode;
            }

            return null;
        },

        /**
         * Checks whether the element has any parent with fixed positionfreg
         * @param {object} el jQuery element object
         * @returns {boolean}
         */
        hasFixedPositionedParent: function(el) {
            var position;

            while (el && el !== document) {
                position = KTUtil.css(el, 'position');

                if (position === "fixed") {
                    return true;
                }

                el = el.parentNode;
            }

            return false;
        },

        /**
         * Simulates delay
         */
        sleep: function(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds) {
                    break;
                }
            }
        },

        /**
         * Gets randomly generated integer value within given min and max range
         * @param {number} min Range start value
         * @param {number} max Range end value
         * @returns {number}
         */
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        /**
         * Checks whether Angular library is included
         * @returns {boolean}
         */
        isAngularVersion: function() {
            return window.Zone !== undefined ? true : false;
        },

        // Deep extend:  $.extend(true, {}, objA, objB);
        deepExtend: function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                var obj = arguments[i];
                if (!obj) continue;

                for (var key in obj) {
                    if (!obj.hasOwnProperty(key)) {
                        continue;
                    }

                    // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
                    if ( Object.prototype.toString.call(obj[key]) === '[object Object]' ) {
                        out[key] = KTUtil.deepExtend(out[key], obj[key]);
                        continue;
                    }

                    out[key] = obj[key];
                }
            }

            return out;
        },

        // extend:  $.extend({}, objA, objB);
        extend: function(out) {
            out = out || {};

            for (var i = 1; i < arguments.length; i++) {
                if (!arguments[i])
                    continue;

                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key))
                        out[key] = arguments[i][key];
                }
            }

            return out;
        },

        getById: function(el) {
            if (typeof el === 'string') {
                return document.getElementById(el);
            } else {
                return el;
            }
        },

        getByTag: function(query) {
            return document.getElementsByTagName(query);
        },

        getByTagName: function(query) {
            return document.getElementsByTagName(query);
        },

        getByClass: function(query) {
            return document.getElementsByClassName(query);
        },

        getBody: function() {
            return document.getElementsByTagName('body')[0];
        },

        /**
         * Checks whether the element has given classes
         * @param {object} el jQuery element object
         * @param {string} Classes string
         * @returns {boolean}
         */
        hasClasses: function(el, classes) {
            if (!el) {
                return;
            }

            var classesArr = classes.split(" ");

            for (var i = 0; i < classesArr.length; i++) {
                if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
                    return false;
                }
            }

            return true;
        },

        hasClass: function(el, className) {
            if (!el) {
                return;
            }

            return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
        },

        addClass: function(el, className) {
            if (!el || typeof className === 'undefined') {
                return;
            }

            var classNames = className.split(' ');

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i] && classNames[i].length > 0) {
                        el.classList.add(KTUtil.trim(classNames[i]));
                    }
                }
            } else if (!KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className += ' ' + KTUtil.trim(classNames[x]);
                }
            }
        },

        removeClass: function(el, className) {
          if (!el || typeof className === 'undefined') {
                return;
            }

            var classNames = className.split(' ');

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    el.classList.remove(KTUtil.trim(classNames[i]));
                }
            } else if (KTUtil.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
                }
            }
        },

        triggerCustomEvent: function(el, eventName, data) {
            var event;
            if (window.CustomEvent) {
                event = new CustomEvent(eventName, {
                    detail: data
                });
            } else {
                event = document.createEvent('CustomEvent');
                event.initCustomEvent(eventName, true, true, data);
            }

            el.dispatchEvent(event);
        },

        triggerEvent: function(node, eventName) {
            // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
            var doc;
            if (node.ownerDocument) {
                doc = node.ownerDocument;
            } else if (node.nodeType == 9) {
                // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
                doc = node;
            } else {
                throw new Error("Invalid node passed to fireEvent: " + node.id);
            }

            if (node.dispatchEvent) {
                // Gecko-style approach (now the standard) takes more work
                var eventClass = "";

                // Different events have different event classes.
                // If this switch statement can't map an eventName to an eventClass,
                // the event firing is going to fail.
                switch (eventName) {
                case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
                case "mouseenter":
                case "mouseleave":
                case "mousedown":
                case "mouseup":
                    eventClass = "MouseEvents";
                    break;

                case "focus":
                case "change":
                case "blur":
                case "select":
                    eventClass = "HTMLEvents";
                    break;

                default:
                    throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
                    break;
                }
                var event = doc.createEvent(eventClass);

                var bubbles = eventName == "change" ? false : true;
                event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

                event.synthetic = true; // allow detection of synthetic events
                // The second parameter says go ahead with the default action
                node.dispatchEvent(event, true);
            } else if (node.fireEvent) {
                // IE-old school style
                var event = doc.createEventObject();
                event.synthetic = true; // allow detection of synthetic events
                node.fireEvent("on" + eventName, event);
            }
        },

        index: function( el ){
            var c = el.parentNode.children, i = 0;
            for(; i < c.length; i++ )
                if( c[i] == el ) return i;
        },

        trim: function(string) {
            return string.trim();
        },

        eventTriggered: function(e) {
            if (e.currentTarget.dataset.triggered) {
                return true;
            } else {
                e.currentTarget.dataset.triggered = true;

                return false;
            }
        },

        remove: function(el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },

        find: function(parent, query) {
            parent = KTUtil.getById(parent);
            if (parent) {
                return parent.querySelector(query);
            }
        },

        findAll: function(parent, query) {
            parent = KTUtil.getById(parent);
            if (parent) {
                return parent.querySelectorAll(query);
            }
        },

        insertAfter: function(el, referenceNode) {
            return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        },

        parents: function(elem, selector) {
            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function(s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) {}
                        return i > -1;
                    };
            }

            // Set up a parent array
            var parents = [];

            // Push each parent element to the array
            for ( ; elem && elem !== document; elem = elem.parentNode ) {
                if (selector) {
                    if (elem.matches(selector)) {
                        parents.push(elem);
                    }
                    continue;
                }
                parents.push(elem);
            }

            // Return our parent array
            return parents;
        },

        children: function(el, selector, log) {
            if (!el || !el.childNodes) {
                return;
            }

            var result = [],
                i = 0,
                l = el.childNodes.length;

            for (var i; i < l; ++i) {
                if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
                    result.push(el.childNodes[i]);
                }
            }

            return result;
        },

        child: function(el, selector, log) {
            var children = KTUtil.children(el, selector, log);

            return children ? children[0] : null;
        },

        matches: function(el, selector, log) {
            var p = Element.prototype;
            var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };

            if (el && el.tagName) {
                return f.call(el, selector);
            } else {
                return false;
            }
        },

        data: function(el) {
            return {
                set: function(name, data) {
                    if (!el) {
                        return;
                    }

                    if (el.customDataTag === undefined) {
                        window.KTUtilElementDataStoreID++;
                        el.customDataTag = window.KTUtilElementDataStoreID;
                    }

                    if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
                        window.KTUtilElementDataStore[el.customDataTag] = {};
                    }

                    window.KTUtilElementDataStore[el.customDataTag][name] = data;
                },

                get: function(name) {
                    if (!el) {
                        return;
                    }

                    if (el.customDataTag === undefined) {
                        return null;
                    }

                    return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
                },

                has: function(name) {
                    if (!el) {
                        return false;
                    }

                    if (el.customDataTag === undefined) {
                        return false;
                    }

                    return (window.KTUtilElementDataStore[el.customDataTag] && window.KTUtilElementDataStore[el.customDataTag][name]) ? true : false;
                },

                remove: function(name) {
                    if (el && this.has(name)) {
                        delete window.KTUtilElementDataStore[el.customDataTag][name];
                    }
                }
            };
        },

        outerWidth: function(el, margin) {
            var width;

            if (margin === true) {
                width = parseFloat(el.offsetWidth);
                width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));

                return parseFloat(width);
            } else {
                width = parseFloat(el.offsetWidth);

                return width;
            }
        },

        offset: function(el) {
            var rect, win;

            if ( !el ) {
                return;
            }

            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error

            if ( !el.getClientRects().length ) {
                return { top: 0, left: 0 };
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = el.getBoundingClientRect();
            win = el.ownerDocument.defaultView;

            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },

        height: function(el) {
            return KTUtil.css(el, 'height');
        },

        outerHeight: function(el, withMargin) {
            var height = el.offsetHeight;
            var style;

            if (typeof withMargin !== 'undefined' && withMargin === true) {
                style = getComputedStyle(el);
                height += parseInt(style.marginTop) + parseInt(style.marginBottom);

                return height;
            } else {
                return height;
            }
        },

        visible: function(el) {
            return !(el.offsetWidth === 0 && el.offsetHeight === 0);
        },

        attr: function(el, name, value) {
            if (el == undefined) {
                return;
            }

            if (value !== undefined) {
                el.setAttribute(name, value);
            } else {
                return el.getAttribute(name);
            }
        },

        hasAttr: function(el, name) {
            if (el == undefined) {
                return;
            }

            return el.getAttribute(name) ? true : false;
        },

        removeAttr: function(el, name) {
            if (el == undefined) {
                return;
            }

            el.removeAttribute(name);
        },

        animate: function(from, to, duration, update, easing, done) {
            /**
             * TinyAnimate.easings
             *  Adapted from jQuery Easing
             */
            var easings = {};
            var easing;

            easings.linear = function(t, b, c, d) {
                return c * t / d + b;
            };

            easing = easings.linear;

            // Early bail out if called incorrectly
            if (typeof from !== 'number' ||
                typeof to !== 'number' ||
                typeof duration !== 'number' ||
                typeof update !== 'function') {
                return;
            }

            // Create mock done() function if necessary
            if (typeof done !== 'function') {
                done = function() {};
            }

            // Pick implementation (requestAnimationFrame | setTimeout)
            var rAF = window.requestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000 / 50);
            };

            // Animation loop
            var canceled = false;
            var change = to - from;

            function loop(timestamp) {
                var time = (timestamp || +new Date()) - start;

                if (time >= 0) {
                    update(easing(time, from, change, duration));
                }
                if (time >= 0 && time >= duration) {
                    update(to);
                    done();
                } else {
                    rAF(loop);
                }
            }

            update(from);

            // Start animation loop
            var start = window.performance && window.performance.now ? window.performance.now() : +new Date();

            rAF(loop);
        },

        actualCss: function(el, prop, cache) {
            var css = '';

            if (el instanceof HTMLElement === false) {
                return;
            }

            if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
                var value;

                // the element is hidden so:
                // making the el block so we can meassure its height but still be hidden
                css = el.style.cssText;
                el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

                if (prop == 'width') {
                    value = el.offsetWidth;
                } else if (prop == 'height') {
                    value = el.offsetHeight;
                }

                el.style.cssText = css;

                // store it in cache
                el.setAttribute('kt-hidden-' + prop, value);

                return parseFloat(value);
            } else {
                // store it in cache
                return parseFloat(el.getAttribute('kt-hidden-' + prop));
            }
        },

        actualHeight: function(el, cache) {
            return KTUtil.actualCss(el, 'height', cache);
        },

        actualWidth: function(el, cache) {
            return KTUtil.actualCss(el, 'width', cache);
        },

        getScroll: function(element, method) {
            // The passed in `method` value should be 'Top' or 'Left'
            method = 'scroll' + method;
            return (element == window || element == document) ? (
                self[(method == 'scrollTop') ? 'pageYOffset' : 'pageXOffset'] ||
                (browserSupportsBoxModel && document.documentElement[method]) ||
                document.body[method]
            ) : element[method];
        },

        css: function(el, styleProp, value) {
            if (!el) {
                return;
            }

            if (value !== undefined) {
                el.style[styleProp] = value;
            } else {
                var defaultView = (el.ownerDocument || document).defaultView;
                // W3C standard way:
                if (defaultView && defaultView.getComputedStyle) {
                    // sanitize property name to css notation
                    // (hyphen separated words eg. font-Size)
                    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
                    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
                } else if (el.currentStyle) { // IE
                    // sanitize property name to camelCase
                    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
                        return letter.toUpperCase();
                    });
                    value = el.currentStyle[styleProp];
                    // convert other units to pixels on IE
                    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                        return (function(value) {
                            var oldLeft = el.style.left,
                                oldRsLeft = el.runtimeStyle.left;
                            el.runtimeStyle.left = el.currentStyle.left;
                            el.style.left = value || 0;
                            value = el.style.pixelLeft + "px";
                            el.style.left = oldLeft;
                            el.runtimeStyle.left = oldRsLeft;
                            return value;
                        })(value);
                    }
                    return value;
                }
            }
        },

        slide: function(el, dir, speed, callback, recalcMaxHeight) {
            if (!el || (dir == 'up' && KTUtil.visible(el) === false) || (dir == 'down' && KTUtil.visible(el) === true)) {
                return;
            }

            speed = (speed ? speed : 600);
            var calcHeight = KTUtil.actualHeight(el);
            var calcPaddingTop = false;
            var calcPaddingBottom = false;

            if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
                KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
            }

            if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
                KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
            }

            if (KTUtil.data(el).has('slide-padding-top')) {
                calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
            }

            if (KTUtil.data(el).has('slide-padding-bottom')) {
                calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
            }

            if (dir == 'up') { // up
                el.style.cssText = 'display: block; overflow: hidden;';

                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function(value) {
                        el.style.paddingTop = (calcPaddingTop - value) + 'px';
                    }, 'linear');
                }

                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function(value) {
                        el.style.paddingBottom = (calcPaddingBottom - value) + 'px';
                    }, 'linear');
                }

                KTUtil.animate(0, calcHeight, speed, function(value) {
                    el.style.height = (calcHeight - value) + 'px';
                }, 'linear', function() {
                    el.style.height = '';
                    el.style.display = 'none';

                    if (typeof callback === 'function') {
                        callback();
                    }
                });


            } else if (dir == 'down') { // down
                el.style.cssText = 'display: block; overflow: hidden;';

                if (calcPaddingTop) {
                    KTUtil.animate(0, calcPaddingTop, speed, function(value) {//
                        el.style.paddingTop = value + 'px';
                    }, 'linear', function() {
                        el.style.paddingTop = '';
                    });
                }

                if (calcPaddingBottom) {
                    KTUtil.animate(0, calcPaddingBottom, speed, function(value) {
                        el.style.paddingBottom = value + 'px';
                    }, 'linear', function() {
                        el.style.paddingBottom = '';
                    });
                }

                KTUtil.animate(0, calcHeight, speed, function(value) {
                    el.style.height = value + 'px';
                }, 'linear', function() {
                    el.style.height = '';
                    el.style.display = '';
                    el.style.overflow = '';

                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
        },

        slideUp: function(el, speed, callback) {
            KTUtil.slide(el, 'up', speed, callback);
        },

        slideDown: function(el, speed, callback) {
            KTUtil.slide(el, 'down', speed, callback);
        },

        show: function(el, display) {
            if (typeof el !== 'undefined') {
                el.style.display = (display ? display : 'block');
            }
        },

        hide: function(el) {
            if (typeof el !== 'undefined') {
                el.style.display = 'none';
            }
        },

        addEvent: function(el, type, handler, one) {
            if (typeof el !== 'undefined' && el !== null) {
                el.addEventListener(type, handler);
            }
        },

        removeEvent: function(el, type, handler) {
            if (el !== null) {
                el.removeEventListener(type, handler);
            }
        },

        on: function(element, selector, event, handler) {
            if (!selector) {
                return;
            }

            var eventId = KTUtil.getUniqueID('event');

            window.KTUtilDelegatedEventHandlers[eventId] = function(e) {
                var targets = element.querySelectorAll(selector);
                var target = e.target;

                while (target && target !== element) {
                    for (var i = 0, j = targets.length; i < j; i++) {
                        if (target === targets[i]) {
                            handler.call(target, e);
                        }
                    }

                    target = target.parentNode;
                }
            }

            KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);

            return eventId;
        },

        off: function(element, event, eventId) {
            if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
                return;
            }

            KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);

            delete window.KTUtilDelegatedEventHandlers[eventId];
        },

        one: function onetime(el, type, callback) {
            el.addEventListener(type, function callee(e) {
                // remove event
                if (e.target && e.target.removeEventListener) {
                    e.target.removeEventListener(e.type, callee);
                }

                // need to verify from https://themeforest.net/author_dashboard#comment_23615588
                if (el && el.removeEventListener) {
				    e.currentTarget.removeEventListener(e.type, callee);
			    }

                // call handler
                return callback(e);
            });
        },

        hash: function(str) {
            var hash = 0,
                i, chr;

            if (str.length === 0) return hash;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }

            return hash;
        },

        animateClass: function(el, animationName, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }

            KTUtil.addClass(el, 'animated ' + animationName);

            KTUtil.one(el, animation, function() {
                KTUtil.removeClass(el, 'animated ' + animationName);
            });

            if (callback) {
                KTUtil.one(el, animation, callback);
            }
        },

        transitionEnd: function(el, callback) {
            var transition;
            var transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'mozTransitionEnd',
                WebkitTransition: 'webkitTransitionEnd',
                msTransition: 'msTransitionEnd'
            };

            for (var t in transitions) {
                if (el.style[t] !== undefined) {
                    transition = transitions[t];
                }
            }

            KTUtil.one(el, transition, callback);
        },

        animationEnd: function(el, callback) {
            var animation;
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
                msAnimation: 'msAnimationEnd'
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    animation = animations[t];
                }
            }

            KTUtil.one(el, animation, callback);
        },

        animateDelay: function(el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-delay', value);
            }
        },

        animateDuration: function(el, value) {
            var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
            for (var i = 0; i < vendors.length; i++) {
                KTUtil.css(el, vendors[i] + 'animation-duration', value);
            }
        },

        scrollTo: function(target, offset, duration) {
            var duration = duration ? duration : 500;
            var targetPos = target ? KTUtil.offset(target).top : 0;
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var from, to;

            if (offset) {
                scrollPos += offset;
            }

            from = scrollPos;
            to = targetPos;

            KTUtil.animate(from, to, duration, function(value) {
                document.documentElement.scrollTop = value;
                document.body.parentNode.scrollTop = value;
                document.body.scrollTop = value;
            }); //, easing, done
        },

        scrollTop: function(offset, duration) {
            KTUtil.scrollTo(null, offset, duration);
        },

        isArray: function(obj) {
            return obj && Array.isArray(obj);
        },

        ready: function(callback) {
            if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
                callback();
            } else {
                document.addEventListener('DOMContentLoaded', callback);
            }
        },

        isEmpty: function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }

            return true;
        },

        numberString: function(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        },

        detectIE: function() {
            var ua = window.navigator.userAgent;

            // Test values; Uncomment to check result ???

            // IE 10
            // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

            // IE 11
            // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

            // Edge 12 (Spartan)
            // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

            // Edge 13
            // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;
        },

        isRTL: function() {
            var html = KTUtil.getByTagName('html')[0];

            if (html) {
                return (KTUtil.attr(html, 'direction') == 'rtl');
            }
        },

        // Scroller
        scrollInit: function(element, options) {
            if (!element) {
                return;
            }

            // Learn more: https://github.com/mdbootstrap/perfect-scrollbar#options
            var pluginDefOptions = {
                wheelSpeed: 0.5,
                swipeEasing: true,
                wheelPropagation: false,
                minScrollbarLength: 40,
                maxScrollbarLength: 300,
                suppressScrollX: true
            };

            options = KTUtil.deepExtend({}, pluginDefOptions, options);

            // Define init function
            function init() {
                var ps;
                var height;

                // Get extra options via data attributes
                var attrs = element.getAttributeNames();
                if (attrs.length > 0) {
                    attrs.forEach(function(attrName) {
            			// more options; https://github.com/ganlanyuan/tiny-slider#options
            			if ((/^data-.*/g).test(attrName)) {
                            if (['scroll', 'height', 'mobile-height'].includes(optionName) == false) {
                                var optionName = attrName.replace('data-', '').toLowerCase().replace(/(?:[\s-])\w/g, function(match) {
                					return match.replace('-', '').toUpperCase();
                				});

                                options[optionName] = KTUtil.filterBoolean(element.getAttribute(attrName));
                            }
            			}
            		});
                }

                if (options.height instanceof Function) {
                    height = options.height.call();
                } else {
                    if (KTUtil.isMobileDevice() === true && options.mobileHeight) {
                        height = parseInt(options.mobileHeight);
                    } else if (options.height) {
                        height = parseInt(options.height);
                    } else {
                        height = parseInt(KTUtil.css(element, 'height'));
                    }
                }

                if (height === false) {
                    KTUtil.scrollDestroy(element, true);

                    return;
                }

                height = parseInt(height);

                // Destroy scroll on table and mobile modes
                if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isMobileDevice() === true) {
                    ps = KTUtil.data(element).get('ps');
                    if (ps) {
                        if (options.resetHeightOnDestroy) {
                            KTUtil.css(element, 'height', 'auto');
                        } else {
                            KTUtil.css(element, 'overflow', 'auto');
                            if (height > 0) {
                                KTUtil.css(element, 'height', height + 'px');
                            }
                        }

                        ps.destroy();
                        ps = KTUtil.data(element).remove('ps');
                    } else if (height > 0){
                        KTUtil.css(element, 'overflow', 'auto');
                        KTUtil.css(element, 'height', height + 'px');
                    }

                    return;
                }

                if (height > 0) {
                    KTUtil.css(element, 'height', height + 'px');
                }

                if (options.desktopNativeScroll) {
                    KTUtil.css(element, 'overflow', 'auto');
                    return;
                }

                // Pass options via HTML Attributes
                if (KTUtil.attr(element, 'data-window-scroll') == 'true') {
                     options.windowScroll = true;
                }

                // Init scroll
                ps = KTUtil.data(element).get('ps');

                if (ps) {
                    ps.update();
                } else {
                    KTUtil.css(element, 'overflow', 'hidden');
                    KTUtil.addClass(element, 'scroll');

                    ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](element, options);

                    KTUtil.data(element).set('ps', ps);
                }

                // Remember scroll position in cookie
                var uid = KTUtil.attr(element, 'id');
                try {
                  if (uid) {
                    var cookie = _cookie_js__WEBPACK_IMPORTED_MODULE_1__.KTCookie.getCookie(uid);
                    if (options.rememberPosition === true && cookie) {
                      var pos = parseInt(cookie);
                      if (pos > 0) {
                          element.scrollTop = pos;
                      }
                      element.addEventListener('ps-scroll-y', function() {
                          _cookie_js__WEBPACK_IMPORTED_MODULE_1__.KTCookie.setCookie(uid, element.scrollTop, {});
                      });
                    }
                  }
                }
                catch (e) {
                    // console.error(e);
                }

                // Todo:Consider using Localstorage
                if (options.rememberPosition === true && _cookie_js__WEBPACK_IMPORTED_MODULE_1__.KTCookie && uid) {
                    if (_cookie_js__WEBPACK_IMPORTED_MODULE_1__.KTCookie.getCookie(uid)) {
                        var pos = parseInt(_cookie_js__WEBPACK_IMPORTED_MODULE_1__.KTCookie.getCookie(uid));

                        if (pos > 0) {
                            element.scrollTop = pos;
                        }
                    }

                    element.addEventListener('ps-scroll-y', function() {
                        _cookie_js__WEBPACK_IMPORTED_MODULE_1__.KTCookie.setCookie(uid, element.scrollTop);
                    });
                }
            }

            // Init
            init();

            // Handle window resize
            if (options.handleWindowResize) {
                KTUtil.addResizeHandler(function() {
                    init();
                });
            }
        },

        scrollUpdate: function(element) {
            var ps = KTUtil.data(element).get('ps');
            if (ps) {
                ps.update();
            }
        },

        scrollUpdateAll: function(parent) {
            var scrollers = KTUtil.findAll(parent, '.ps');
            for (var i = 0, len = scrollers.length; i < len; i++) {
                KTUtil.scrollUpdate(scrollers[i]);
            }
        },

        scrollDestroy: function(element, resetAll) {
            var ps = KTUtil.data(element).get('ps');

            if (ps) {
                ps.destroy();
                ps = KTUtil.data(element).remove('ps');
            }

            if (element && resetAll) {
                element.style.setProperty('overflow', '');
                element.style.setProperty('height', '');
            }
        },

        filterBoolean: function(val) {
            // Convert string boolean
			if (val === true || val === 'true') {
				return true;
			}

			if (val === false || val === 'false') {
				return false;
			}

            return val;
        },

        setHTML: function(el, html) {
            el.innerHTML = html;
        },

        getHTML: function(el) {
            if (el) {
                return el.innerHTML;
            }
        },

        getDocumentHeight: function() {
            var body = document.body;
            var html = document.documentElement;

            return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        },

        getScrollTop: function() {
            return  (document.scrollingElement || document.documentElement).scrollTop;
        },

        changeColor: function(col, amt) {

            var usePound = false;

            if (col[0] == "#") {
                col = col.slice(1);
                usePound = true;
            }

            var num = parseInt(col,16);

            var r = (num >> 16) + amt;

            if (r > 255) r = 255;
            else if  (r < 0) r = 0;

            var b = ((num >> 8) & 0x00FF) + amt;

            if (b > 255) b = 255;
            else if  (b < 0) b = 0;

            var g = (num & 0x0000FF) + amt;

            if (g > 255) g = 255;
            else if (g < 0) g = 0;

            return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

        },

        // Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
        throttle:  function (timer, func, delay) {
        	// If setTimeout is already scheduled, no need to do anything
        	if (timer) {
        		return;
        	}

        	// Schedule a setTimeout after delay seconds
        	timer  =  setTimeout(function () {
        		func();

        		// Once setTimeout function execution is finished, timerId = undefined so that in <br>
        		// the next scroll event function execution can be scheduled by the setTimeout
        		timer  =  undefined;
        	}, delay);
        },

        // Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
        debounce: function (timer, func, delay) {
        	// Cancels the setTimeout method execution
        	clearTimeout(timer)

        	// Executes the func after delay time.
        	timer  =  setTimeout(func, delay);
        },

        btnWait: function(el, cls, message, disable) {
            if (!el) {
                return;
            }

            if (typeof disable !== 'undefined' && disable === true) {
                KTUtil.attr(el, "disabled", true);
            }

            if (cls) {
                KTUtil.addClass(el, cls);
                KTUtil.attr(el, "wait-class", cls);
            }

            if (message) {
                var caption = KTUtil.find(el, '.btn-caption');

                if (caption) {
                    KTUtil.data(caption).set('caption', KTUtil.getHTML(caption));
                    KTUtil.setHTML(caption, message);
                } else {
                    KTUtil.data(el).set('caption', KTUtil.getHTML(el));
                    KTUtil.setHTML(el, message);
                }
            }
        },

        btnRelease: function(el) {
            if (!el) {
                return;
            }

            /// Show loading state on button
            KTUtil.removeAttr(el, "disabled");

            if (KTUtil.hasAttr(el, "wait-class")) {
                KTUtil.removeClass(el, KTUtil.attr(el, "wait-class"));
            }

            var caption = KTUtil.find(el, '.btn-caption');

            if (caption && KTUtil.data(caption).has('caption')) {
                KTUtil.setHTML(caption, KTUtil.data(caption).get('caption'));
            } else if (KTUtil.data(el).has('caption')) {
                KTUtil.setHTML(el, KTUtil.data(el).get('caption'));
            }
        },

        isOffscreen: function(el, direction, offset) {
            offset = offset || 0;

            var windowWidth = KTUtil.getViewPort().width;
            var windowHeight = KTUtil.getViewPort().height;

            var top = KTUtil.offset(el).top;
            var height = KTUtil.outerHeight(el) + offset;
            var left = KTUtil.offset(el).left;
            var width = KTUtil.outerWidth(el) + offset;

            if (direction == 'bottom') {
                if (windowHeight < top + height) {
                    return true;
                } else if (windowHeight > top + height * 1.5) {
                    return true;
                }
            }

            if (direction == 'top') {
                if (top < 0) {
                    return true;
                } else if (top > height) {
                    return true;
                }
            }

            if (direction == 'left') {
                if (left < 0) {
                    return true;
                } else if (left * 2 > width) {
                    //// console.log('left 2');
                    //return true;
                }
            }

            if (direction == 'right') {
                if (windowWidth < left + width) {
                    return true;
                } else {
                    //// console.log('right 2');
                    //return true;
                }
            }

            return false;
        }
    }
}();

// webpack support
if ( true && typeof module.exports !== 'undefined') {
    // module.exports = KTUtil;
}

// Initialize KTUtil class on document ready
KTUtil.ready(function() {
	if (typeof KTAppSettings !== 'undefined') {
		KTUtil.init(KTAppSettings);
	} else {
		KTUtil.init();
	}
});


/***/ }),

/***/ 53750:
/*!*************************************************!*\
  !*** ./src/assets/js/layout/base/aside-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _brand_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brand.js */ 51205);
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/menu.js */ 14993);
/* harmony import */ var _aside_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.js */ 79823);
/* eslint-disable */







var KTLayoutAsideMenu = function() {
    // Private properties
    var _body;
    var _element;
    var _menuObject;

	// Initialize
	var _init = function() {
		var menuDesktopMode = (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(_element, 'data-menu-dropdown') === '1' ? 'dropdown' : 'accordion');
        var scroll;

		if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.attr(_element, 'data-menu-scroll') === '1') {
			scroll = {
				rememberPosition: true, // remember position on page reload
				height: function() { // calculate available scrollable area height
					var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height);

					if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg')) {
						height = height - _brand_js__WEBPACK_IMPORTED_MODULE_1__["default"].getHeight();
					}

					height = height - (parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'marginBottom')) + parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'marginTop')));

					return height;
				}
			};
		}

		_menuObject = new _components_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"](_element, {
			// Vertical scroll
			scroll: scroll,

			// Submenu setup
			submenu: {
				desktop: menuDesktopMode,
				tablet: 'accordion', // menu set to accordion in tablet mode
				mobile: 'accordion' // menu set to accordion in mobile mode
			},

			// Accordion setup
			accordion: {
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});
	}

    var _initHover = function() {
        // Handle Minimized Aside Hover
		if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-fixed') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-minimize-hoverable')) {
			var insideTm;
			var outsideTm;

            // Handle Aside Hover Mode
			_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(_element, 'mouseenter', function(e) {
				e.preventDefault();

				if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg') === false) {
					return;
				}

				if (outsideTm) {
					clearTimeout(outsideTm);
					outsideTm = null;
				}

                if (insideTm) {
					clearTimeout(insideTm);
					insideTm = null;
				}

				insideTm = setTimeout(function() {
					if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-minimize') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg')) {
						// Hover class
						_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addClass(_body, 'aside-minimize-hover');

						KTLayoutAsideMenu.getMenu().scrollUpdate();
						KTLayoutAsideMenu.getMenu().scrollTop();
					}
				}, 50);
			});

			_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addEvent(_aside_js__WEBPACK_IMPORTED_MODULE_3__["default"].getElement(), 'mouseleave', function(e) {
				e.preventDefault();

				if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg') === false) {
					return;
				}

				if (insideTm) {
					clearTimeout(insideTm);
					insideTm = null;
				}

                if (outsideTm) {
					clearTimeout(outsideTm);
					outsideTm = null;
				}

				outsideTm = setTimeout(function() {
				    if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-minimize-hover') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isBreakpointUp('lg')) {
					    _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.removeClass(_body, 'aside-minimize-hover');

						// Hover class
                        KTLayoutAsideMenu.getMenu().scrollUpdate();
						KTLayoutAsideMenu.getMenu().scrollTop();
					}
				}, 100);
			});
		}
	}

    // Public methods
	return {
		init: function(id) {
            _body = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody();
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize menu
            _init();
            _initHover();
		},

		getElement: function() {
			return _element;
		},

        getMenu: function() {
			return _menuObject;
		},

        pauseDropdownHover: function(time) {
			if (_menuObject) {
				_menuObject.pauseDropdownHover(time);
			}
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.isMobileDevice()) {
				_menuObject.hide();
			}
		}
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutAsideMenu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutAsideMenu);

/***/ }),

/***/ 74360:
/*!***************************************************!*\
  !*** ./src/assets/js/layout/base/aside-toggle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/toggle.js */ 65232);
/* harmony import */ var _sticky_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sticky-card.js */ 65214);
/* harmony import */ var _header_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-menu.js */ 6589);
/* harmony import */ var _aside_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside-menu.js */ 53750);
/* harmony import */ var _components_cookie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/cookie.js */ 48902);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */









var KTLayoutAsideToggle = function() {
    // Private properties
    var _body;
    var _element;
    var _toggleObject;

	// Initialize
	var _init = function() {
		_toggleObject = new _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__["default"](_element, _body, {
			targetState: 'aside-minimize',
			toggleState: 'active'
		});

		_toggleObject.on('toggle', function(toggle) {
            // Update sticky card
            if (typeof _sticky_card_js__WEBPACK_IMPORTED_MODULE_1__["default"] !== 'undefined') {
                _sticky_card_js__WEBPACK_IMPORTED_MODULE_1__["default"].update();
            }

            // Pause header menu dropdowns
            if (typeof _header_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"] !== 'undefined') {
                _header_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"].pauseDropdownHover(800);
            }

            // Pause aside menu dropdowns
            if (typeof _aside_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"] !== 'undefined') {
                _aside_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"].pauseDropdownHover(800);
            }

            // Remember state in cookie
			_components_cookie_js__WEBPACK_IMPORTED_MODULE_4__.KTCookie.setCookie('kt_aside_toggle_state', toggle.getState());
			// to set default minimized left aside use this cookie value in your
			// server side code and add "kt-primary--minimize aside-minimize" classes to
			// the body tag in order to initialize the minimized left aside mode during page loading.
		});

		_toggleObject.on('beforeToggle', function(toggle) {
			if (_components_util_js__WEBPACK_IMPORTED_MODULE_5__.KTUtil.hasClass(_body, 'aside-minimize') === false && _components_util_js__WEBPACK_IMPORTED_MODULE_5__.KTUtil.hasClass(_body, 'aside-minimize-hover')) {
				_components_util_js__WEBPACK_IMPORTED_MODULE_5__.KTUtil.removeClass(_body, 'aside-minimize-hover');
			}
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_5__.KTUtil.getById(id);
            _body = _components_util_js__WEBPACK_IMPORTED_MODULE_5__.KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
		},

        getElement: function() {
            return _element;
        },

        getToggle: function() {
			return _toggleObject;
		},

		onToggle: function(handler) {
			if (typeof _toggleObject.element !== 'undefined') {
				_toggleObject.on('toggle', handler);
			}
		}
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutAsideToggle;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutAsideToggle);

/***/ }),

/***/ 79823:
/*!********************************************!*\
  !*** ./src/assets/js/layout/base/aside.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* eslint-disable */





var KTLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;

    // Private functions
	// Initialize
	var _init = function() {
		var offcanvasClass = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_element, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside';

        // Initialize mobile aside offcanvas
		_offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
			baseClass: offcanvasClass,
			overlay: true,
			closeBy: 'kt_aside_close_btn',
			toggleBy: {
				target: 'kt_aside_mobile_toggle',
				state: 'mobile-toggle-active'
			}
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);
            _body = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        },

        isFixed: function() {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-fixed');
        },

        isMinimized: function() {
            return (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-fixed') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-minimize'));
        },

        isHoverable: function() {
            return (_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-fixed') && _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_body, 'aside-minimize-hoverable'));
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutAside;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutAside);

/***/ }),

/***/ 51205:
/*!********************************************!*\
  !*** ./src/assets/js/layout/base/brand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */




var KTLayoutBrand = function() {
    // Private properties
    var _element;

    // Private functions
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(_element);
        }

        return height;
    }

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }
		},

        getElement: function() {
            return _element;
        },

        getHeight: function() {
            return _getHeight();
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutBrand;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutBrand);

/***/ }),

/***/ 63643:
/*!**********************************************!*\
  !*** ./src/assets/js/layout/base/content.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ 61597);
/* harmony import */ var _subheader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subheader.js */ 289);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ 22667);
/* eslint-disable */







var KTLayoutContent = function() {
    // Private properties
    var _element;

	// Private functions
	var _getHeight = function() {
		var height;

		height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height;

        if (_element) {
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));
        }

        height = height - _header_js__WEBPACK_IMPORTED_MODULE_1__["default"].getHeight();
        height = height - _subheader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getHeight();
        height = height - _footer_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeight();

		return height;
	}

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);
		},

		getHeight: function() {
			return _getHeight();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutContent);

/***/ }),

/***/ 22667:
/*!*********************************************!*\
  !*** ./src/assets/js/layout/base/footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */




var KTLayoutFooter = function() {
    // Private properties
    var _element;

	// Private functions
	var _getHeight = function() {
		var height = 0;

        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(_element);
        }

		return height;
	}

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);
		},

		getHeight: function() {
			return _getHeight();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutFooter;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutFooter);

/***/ }),

/***/ 6589:
/*!**************************************************!*\
  !*** ./src/assets/js/layout/base/header-menu.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/menu.js */ 14993);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */






var KTLayoutHeaderMenu = function() {
    // Private properties
	var _menuElement;
    var _menuObject;
    var _offcanvasElement;
    var _offcanvasObject;

    // Private functions
	var _init = function() {
		_offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__["default"](_offcanvasElement, {
			overlay: true,
			baseClass: 'header-menu-wrapper',
			closeBy: 'kt_header_menu_mobile_close_btn',
			toggleBy: {
				target: 'kt_header_mobile_toggle',
				state: 'mobile-toggle-active'
			}
		});
		
		_menuObject = new _components_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](_menuElement, {
			submenu: {
				desktop: 'dropdown',
				tablet: 'accordion',
				mobile: 'accordion'
			},
			accordion: {
				slideSpeed: 200, // accordion toggle slide speed in milliseconds
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});

		// Close aside offcanvas panel before page reload On tablet and mobile
        _menuObject.on('linkClick', function(menu) {
            if (_components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.isBreakpointDown('lg')) { // Tablet and mobile mode
                _offcanvasObject.hide(); // Hide offcanvas after general link click
            }
        });
	}

    // Public methods
	return {
        init: function(menuId, offcanvasId) {
            _menuElement = _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.getById(menuId);
            _offcanvasElement = _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.getById(offcanvasId);

            if (!_menuElement) {
                return;
            }

            // Initialize menu
            _init();
		},

		getMenuElement: function() {
			return _menuElement;
		},

        getOffcanvasElement: function() {
			return _offcanvasElement;
		},

        getMenu: function() {
			return _menuObject;
		},

		pauseDropdownHover: function(time) {
			if (_menuObject) {
				_menuObject.pauseDropdownHover(time);
			}
		},

        getOffcanvas: function() {
			return _offcanvasObject;
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.isMobileDevice()) {
				_offcanvasObject.hide();
			}
		}
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutHeaderMenu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutHeaderMenu);

/***/ }),

/***/ 73175:
/*!****************************************************!*\
  !*** ./src/assets/js/layout/base/header-topbar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/toggle.js */ 65232);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */





var KTLayoutHeaderTopbar = function() {
    // Private properties
	var _toggleElement;
    var _toggleObject;

    // Private functions
    var _init = function() {
        _toggleObject = new _components_toggle_js__WEBPACK_IMPORTED_MODULE_0__["default"](_toggleElement, _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.getBody(), {
            targetState: 'topbar-mobile-on',
            toggleState: 'active',
        });
    }

    // Public methods
	return {
		init: function(id) {
            _toggleElement = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.getById(id);

			if (!_toggleElement) {
                return;
            }

            // Initialize
            _init();
		},

        getToggleElement: function() {
            return _toggleElement;
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutHeaderTopbar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutHeaderTopbar);

/***/ }),

/***/ 61597:
/*!*********************************************!*\
  !*** ./src/assets/js/layout/base/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */




var KTLayoutHeader = function() {
    // Private properties
    var _element;
    var _elementForMobile;
    var _object;

	// Private functions
    // Get Height
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(_element) + 1;
        }

        return height;
    }

    // Get Height
    var _getHeightForMobile = function() {
        var height;

        height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(_elementForMobile);

        return height;
    }

    // Public Methods
	return {
		init: function(id, idForMobile) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);
            _elementForMobile = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(idForMobile);

            if (!_element) {
                return;
            }
		},

        isFixed: function() {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody(), 'header-fixed')
        },

        isFixedForMobile: function() {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody(), 'header-mobile-fixed')
        },

        getElement: function() {
            return _element;
        },

        getElementForMobile: function() {
            return _elementForMobile;
        },

        getHeader: function() {
            return _object;
        },

        getHeight: function() {
            return _getHeight();
        },

        getHeightForMobile: function() {
            return _getHeightForMobile();
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutHeader;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutHeader);

/***/ }),

/***/ 65214:
/*!**************************************************!*\
  !*** ./src/assets/js/layout/base/sticky-card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ 61597);
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/card.js */ 32098);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _subheader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subheader.js */ 289);
/* eslint-disable */







var KTLayoutStickyCard = function() {
    // Private properties
	var _element;
    var _object;

	// Private functions
	var _init = function() {
		var offset = 300;

		if (typeof _header_js__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined') {
			offset = _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeight();
		}

        _object = new _components_card_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
			sticky: {
				offset: offset,
				zIndex: 90,
				position: {
					top: function() {
						var pos = 0;
                        var body = _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.getBody();

						if (_components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.isBreakpointUp('lg')) {
							if (typeof _header_js__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined' && _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFixed()) {
								pos = pos + _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeight();
							}

							if (typeof _subheader_js__WEBPACK_IMPORTED_MODULE_3__["default"] !== 'undefined' && _subheader_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFixed()) {
								pos = pos + _subheader_js__WEBPACK_IMPORTED_MODULE_3__["default"].getHeight();
							}
						} else {
							if (typeof _header_js__WEBPACK_IMPORTED_MODULE_0__["default"] !== 'undefined' && _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFixedForMobile()) {
								pos = pos + _header_js__WEBPACK_IMPORTED_MODULE_0__["default"].getHeightForMobile();
							}
						}

						pos = pos - 1; // remove header border width

						return pos;
					},
					left: function(card) {
						return _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.offset(_element).left;
					},
					right: function(card) {
						var body = _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.getBody();

						var cardWidth = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.css(_element, 'width'));
						var bodyWidth = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.css(body, 'width'));
						var cardOffsetLeft = _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.offset(_element).left;

						return bodyWidth - cardWidth - cardOffsetLeft;
					}
				}
			}
		});

		_object.initSticky();

		_components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.addResizeHandler(function() {
			_object.updateSticky();
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_2__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
			_init();
		},

		update: function() {
			if (_object) {
				_object.updateSticky();
			}
		}
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutStickyCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutStickyCard);

/***/ }),

/***/ 13484:
/*!*****************************************************!*\
  !*** ./src/assets/js/layout/base/stretched-card.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ 63643);
/* eslint-disable */





var KTLayoutStretchedCard = function() {
    // Private properties
	var _element;

	// Private functions
	var _init = function() {
		var scroll = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.card-scroll');
		var cardBody = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.card-body');
		var cardHeader = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.card-header');

		var height = _content_js__WEBPACK_IMPORTED_MODULE_1__["default"].getHeight();

		height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(cardHeader));

		height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'marginTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'marginBottom'));
		height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));

		height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(cardBody, 'paddingTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(cardBody, 'paddingBottom'));
		height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(cardBody, 'marginTop')) - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(cardBody, 'marginBottom'));

		height = height - 3;

		_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(scroll, 'height', height + 'px');
	}

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
			_init();

            // Re-calculate on window resize
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.addResizeHandler(function() {
				_init();
			});
		},

		update: function() {
			_init();
		}
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutStretchedCard;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutStretchedCard);

/***/ }),

/***/ 289:
/*!************************************************!*\
  !*** ./src/assets/js/layout/base/subheader.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */




var KTLayoutSubheader = function() {
    // Private properties
    var _element;

    // Private functions
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(_element);
        }

        return height;
    }

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }
		},

        isFixed: function() {
            return _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.hasClass(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getBody(), 'subheader-fixed');
        },

        getElement: function() {
            return _element;
        },

        getHeight: function() {
            return _getHeight();
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutSubheader;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutSubheader);

/***/ }),

/***/ 62973:
/*!********************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-actions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* eslint-disable */





var KTLayoutQuickActions = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_actions_close',
            toggleBy: 'kt_quick_actions_toggle'
        });

        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutQuickActions;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickActions);

/***/ }),

/***/ 77605:
/*!*****************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-cart.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */





var KTLayoutQuickCartPanel = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_0__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_cart_close',
            toggleBy: 'kt_quick_cart_toggle'
        });

        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.find(_element, '.offcanvas-content');
        var wrapper = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.find(_element, '.offcanvas-wrapper');
        var footer = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.find(_element, '.offcanvas-footer');

        _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.scrollInit(wrapper, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(content, 'marginBottom'));
                }

                if (wrapper) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(wrapper, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(wrapper, 'marginBottom'));
                }

                if (footer) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.actualHeight(footer));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(footer, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(footer, 'marginBottom'));
                }

                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        }
    };
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutQuickCartPanel;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickCartPanel);

/***/ }),

/***/ 12643:
/*!**************************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-notifications.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* eslint-disable */





var KTLayoutQuickNotifications = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_notifications_close',
            toggleBy: 'kt_quick_notifications_toggle'
        });

        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutQuickNotifications;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickNotifications);

/***/ }),

/***/ 15538:
/*!******************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-panel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* eslint-disable */





var KTLayoutQuickPanel = function() {
    // Private properties
    var _element;
    var _offcanvasObject;
    var _notificationsElement;
    var _logsElement;
    var _settingsElement;

    // Private functions
    var _getContentHeight = function() {
        var height;

        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-content');

        var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height);

        if (header) {
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(header));
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginTop'));
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginBottom'));
        }

        if (content) {
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginTop'));
            height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginBottom'));
        }

        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop'));
        height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));

        height = height - 2;

        return height;
    }

    var _init = function() {
        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_panel_close',
            toggleBy: 'kt_quick_panel_toggle'
        });
    }

    var _initNotifications = function() {
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(_notificationsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return _getContentHeight();
            }
        });
    }

    var _initLogs = function() {
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(_logsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return _getContentHeight();
            }
        });
    }

    var _initSettings = function() {
        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(_settingsElement, {
            mobileNativeScroll: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                return _getContentHeight();
            }
        });
    }

    var _updateScrollbars = function() {
        $(_element).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollUpdate(_notificationsElement);
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollUpdate(_logsElement);
            _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollUpdate(_settingsElement);
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);
            _notificationsElement = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById('kt_quick_panel_notifications');
            _logsElement = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById('kt_quick_panel_logs');
            _settingsElement = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById('kt_quick_panel_settings');

            _init();
            _initNotifications();
            _initLogs();
            _initSettings();

            
        }
    };
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutQuickPanel;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickPanel);

/***/ }),

/***/ 48496:
/*!*******************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-search.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* eslint-disable */





var KTLayoutQuickSearch = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-content');
        var form = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.quick-search-form');
        var results = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.quick-search-wrapper');

        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_search_close',
            toggleBy: 'kt_quick_search_toggle'
        });

        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(results, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginBottom'));
                }

                if (results) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(form));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(form, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(form, 'marginBottom'));

                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(results, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(results, 'marginBottom'));
                }

                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutQuickSearch;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickSearch);

/***/ }),

/***/ 80088:
/*!*****************************************************!*\
  !*** ./src/assets/js/layout/extended/quick-user.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* harmony import */ var _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/offcanvas.js */ 5703);
/* eslint-disable */





var KTLayoutQuickUser = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-header');
        var content = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new _components_offcanvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'kt_quick_user_close',
            toggleBy: 'kt_quick_user_toggle'
        });

        _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.actualHeight(header));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(_components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_0__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutQuickUser;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutQuickUser);

/***/ }),

/***/ 76170:
/*!****************************************************!*\
  !*** ./src/assets/js/layout/extended/scrolltop.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/scrolltop.js */ 31754);
/* harmony import */ var _components_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/util.js */ 66190);
/* eslint-disable */





var KTLayoutScrolltop = function() {
    // Private properties
    var _element;
    var _object;

    // Private functions
    var _init = function() {
        _object = new _components_scrolltop_js__WEBPACK_IMPORTED_MODULE_0__["default"](_element, {
          offset: 300,
          speed: 600,
        });
    }

    // Public methods
	return {
		init: function(id) {
            _element = _components_util_js__WEBPACK_IMPORTED_MODULE_1__.KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
		},

        getElement: function() {
            return _element;
        }
	};
}();

// Webpack support
if (true) {
	// module.exports = KTLayoutScrolltop;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTLayoutScrolltop);

/***/ }),

/***/ 1006:
/*!************************************************************!*\
  !*** ./src/app/_metronic/configs/default-layout.config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutConfig": () => (/* binding */ DefaultLayoutConfig)
/* harmony export */ });
const DefaultLayoutConfig = {
    demo: 'demo1',
    // Javascript Settings
    js: {
        breakpoints: {
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400,
        },
        colors: {
            theme: {
                base: {
                    white: '#ffffff',
                    primary: '#3699FF',
                    secondary: '#E5EAEE',
                    success: '#1BC5BD',
                    info: '#8950FC',
                    warning: '#FFA800',
                    danger: '#F64E60',
                    light: '#E4E6EF',
                    dark: '#181C32',
                },
                light: {
                    white: '#ffffff',
                    primary: '#E1F0FF',
                    secondary: '#EBEDF3',
                    success: '#C9F7F5',
                    info: '#EEE5FF',
                    warning: '#FFF4DE',
                    danger: '#FFE2E5',
                    light: '#F3F6F9',
                    dark: '#D6D6E0',
                },
                inverse: {
                    white: '#ffffff',
                    primary: '#ffffff',
                    secondary: '#3F4254',
                    success: '#ffffff',
                    info: '#ffffff',
                    warning: '#ffffff',
                    danger: '#ffffff',
                    light: '#464E5F',
                    dark: '#ffffff',
                },
            },
            gray: {
                'gray-100': '#F3F6F9',
                'gray-200': '#EBEDF3',
                'gray-300': '#E4E6EF',
                'gray-400': '#D1D3E0',
                'gray-500': '#B5B5C3',
                'gray-600': '#7E8299',
                'gray-700': '#5E6278',
                'gray-800': '#3F4254',
                'gray-900': '#181C32',
            },
        },
        fontFamily: 'Roboto',
    },
    // Base Settins
    self: {
        layout: 'default', // blank/default page mode
    },
    // Page loader
    pageLoader: {
        type: '', // default|spinner-message|spinner-logo
    },
    // Header
    header: {
        self: {
            display: true,
            width: 'fluid',
            theme: 'light',
            fixed: {
                desktop: true,
                mobile: true,
            },
        },
        menu: {
            self: {
                display: false,
                dynamic: true,
                layout: 'default',
                rootArrow: false,
                iconStyle: 'duotone', // duotone, line, bold, solid
            },
            desktop: {
                arrow: true,
                toggle: 'click',
                submenu: {
                    theme: 'light',
                    arrow: true,
                },
            },
            mobile: {
                submenu: {
                    theme: 'dark',
                    accordion: true,
                },
            },
        },
    },
    // Subheader
    subheader: {
        display: true,
        displayDesc: true,
        displayDaterangepicker: true,
        layoutVersion: 'v1',
        fixed: true,
        width: 'fluid',
        clear: false,
        style: 'solid', // transparent/solid
    },
    // Content
    content: {
        width: 'fixed', // fluid|fixed
    },
    // Brand
    brand: {
        self: {
            theme: 'dark', // light/dark
        },
    },
    // Aside
    aside: {
        self: {
            theme: 'dark',
            display: true,
            fixed: true,
            minimize: {
                toggle: true,
                default: false,
                hoverable: true, // allow hover
            },
        },
        footer: {
            self: {
                display: false,
            },
        },
        menu: {
            dynamic: true,
            dropdown: false,
            scroll: true,
            iconStyle: 'duotone',
            submenu: {
                accordion: true,
                dropdown: {
                    arrow: true,
                    hoverTimeout: 500, // in milliseconds
                },
            },
        },
    },
    // Footer
    footer: {
        display: true,
        width: 'fluid',
        fixed: true,
    },
    // Extras
    extras: {
        // Search
        search: {
            display: true,
            layout: 'dropdown',
            offcanvas: {
                direction: 'right',
            },
        },
        // Notifications
        notifications: {
            display: true,
            layout: 'dropdown',
            dropdown: {
                style: 'dark', // light|dark
            },
            offcanvas: {
                direction: 'right',
            },
        },
        // Quick Actionss
        quickActions: {
            display: true,
            layout: 'dropdown',
            dropdown: {
                style: 'dark', // light|dark
            },
            offcanvas: {
                direction: 'right',
            },
        },
        // User
        user: {
            display: true,
            layout: 'offcanvas',
            dropdown: {
                style: 'dark', // light|dark
            },
            offcanvas: {
                direction: 'right',
            },
        },
        // Languages
        languages: {
            display: true,
        },
        // Cart
        cart: {
            display: true,
            layout: 'dropdown',
            offcanvas: {
                direction: 'right',
            },
            dropdown: {
                style: 'dark', // light|dark
            },
        },
        // Chat
        chat: {
            display: true,
        },
        // Quick Panel
        quickPanel: {
            display: true,
            offcanvas: {
                direction: 'right',
            },
        },
        // Page Toolbar
        toolbar: {
            display: true,
        },
        // Scrolltop
        scrolltop: {
            display: true,
        },
    },
};


/***/ }),

/***/ 13933:
/*!****************************************************************!*\
  !*** ./src/app/_metronic/configs/dynamic-aside-menu.config.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicAsideMenuConfig": () => (/* binding */ DynamicAsideMenuConfig)
/* harmony export */ });
const DynamicAsideMenuConfig = {
    items: [
        {
            title: 'Dashboard',
            root: true,
            icon: 'flaticon-home',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/dashboard',
            bullet: 'dot',
            show: true,
        },
        {
            title: 'Employee Management',
            root: true,
            icon: 'flaticon-users',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/employee',
            bullet: 'dot',
            show: true,
            submenu: [
                {
                    title: 'Add New Employee',
                    page: '/employee/add-new-employee'
                },
            ]
        },
        {
            title: 'User Management',
            root: true,
            icon: 'flaticon-user',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/um',
            bullet: 'dot',
            show: true,
        },
        {
            title: 'Attendance',
            root: true,
            icon: 'flaticon-time-3',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/attendance',
            bullet: 'dot',
            show: true,
        },
        {
            title: 'Leave',
            root: true,
            icon: 'flaticon-cogwheel-2',
            svg: './assets/media/svg/icons/Design/Layers.svg',
            page: '/lv',
            bullet: 'dot',
            show: true,
        },
    ]
};


/***/ }),

/***/ 57538:
/*!*****************************************************************!*\
  !*** ./src/app/_metronic/configs/dynamic-header-menu.config.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicHeaderMenuConfig": () => (/* binding */ DynamicHeaderMenuConfig)
/* harmony export */ });
const DynamicHeaderMenuConfig = {
    items: [
        {
            title: 'Dashboards',
            root: true,
            alignment: 'left',
            page: '/dashboard',
        },
        {
            title: 'Builder',
            root: true,
            alignment: 'left',
            page: '/builder',
        },
        {
            title: 'Material UI',
            bullet: 'dot',
            page: '/material',
            icon: 'flaticon-interface-7',
            submenu: [
                {
                    title: 'Form Controls',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Design/PenAndRuller.svg',
                    page: '/material/form-controls',
                    submenu: [
                        {
                            title: 'Auto Complete',
                            page: '/material/form-controls/autocomplete',
                            permission: 'accessToECommerceModule'
                        },
                        {
                            title: 'Checkbox',
                            page: '/material/form-controls/checkbox'
                        },
                        {
                            title: 'Radio Button',
                            page: '/material/form-controls/radiobutton'
                        },
                        {
                            title: 'Datepicker',
                            page: '/material/form-controls/datepicker'
                        },
                        {
                            title: 'Form Field',
                            page: '/material/form-controls/formfield'
                        },
                        {
                            title: 'Input',
                            page: '/material/form-controls/input'
                        },
                        {
                            title: 'Select',
                            page: '/material/form-controls/select'
                        },
                        {
                            title: 'Slider',
                            page: '/material/form-controls/slider'
                        },
                        {
                            title: 'Slider Toggle',
                            page: '/material/form-controls/slidertoggle'
                        }
                    ],
                },
                {
                    title: 'Navigation',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Navigation/Up-down.svg',
                    page: '/material/navigation',
                    submenu: [
                        {
                            title: 'Menu',
                            page: '/material/navigation/menu'
                        },
                        {
                            title: 'Sidenav',
                            page: '/material/navigation/sidenav'
                        },
                        {
                            title: 'Toolbar',
                            page: '/material/navigation/toolbar'
                        }
                    ]
                },
                {
                    title: 'Layout',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Layout/Layout-right-panel-2.svg',
                    page: '/material/layout',
                    submenu: [
                        {
                            title: 'Card',
                            page: '/material/layout/card'
                        },
                        {
                            title: 'Divider',
                            page: '/material/layout/divider'
                        },
                        {
                            title: 'Expansion panel',
                            page: '/material/layout/expansion-panel'
                        },
                        {
                            title: 'Grid list',
                            page: '/material/layout/grid-list'
                        },
                        {
                            title: 'List',
                            page: '/material/layout/list'
                        },
                        {
                            title: 'Tabs',
                            page: '/material/layout/tabs'
                        },
                        {
                            title: 'Stepper',
                            page: '/material/layout/stepper'
                        },
                        {
                            title: 'Tree',
                            page: '/material/layout/tree'
                        }
                    ]
                },
                {
                    title: 'Buttons & Indicators',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Home/Cupboard.svg',
                    page: '/material/buttons-and-indicators',
                    submenu: [
                        {
                            title: 'Button',
                            page: '/material/buttons-and-indicators/button'
                        },
                        {
                            title: 'Button toggle',
                            page: '/material/buttons-and-indicators/button-toggle'
                        },
                        {
                            title: 'Chips',
                            page: '/material/buttons-and-indicators/chips'
                        },
                        {
                            title: 'Icon',
                            page: '/material/buttons-and-indicators/icon'
                        },
                        {
                            title: 'Progress bar',
                            page: '/material/buttons-and-indicators/progress-bar'
                        },
                        {
                            title: 'Progress spinner',
                            page: '/material/buttons-and-indicators/progress-spinner'
                        },
                        {
                            title: 'Ripples',
                            page: '/material/buttons-and-indicators/ripples'
                        }
                    ]
                },
                {
                    title: 'Popups & Modals',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/General/Duplicate.svg',
                    page: '/material/popups-and-modals',
                    submenu: [
                        {
                            title: 'Bottom sheet',
                            page: '/material/popups-and-modals/bottom-sheet'
                        },
                        {
                            title: 'Dialog',
                            page: '/material/popups-and-modals/dialog'
                        },
                        {
                            title: 'Snackbar',
                            page: '/material/popups-and-modals/snackbar'
                        },
                        {
                            title: 'Tooltip',
                            page: '/material/popups-and-modals/tooltip'
                        }
                    ]
                },
                {
                    title: 'Data table',
                    bullet: 'dot',
                    svg: './assets/media/svg/icons/Layout/Layout-top-panel-4.svg',
                    page: '/material/data-table',
                    submenu: [
                        {
                            title: 'Paginator',
                            page: '/material/data-table/paginator'
                        },
                        {
                            title: 'Sort header',
                            page: '/material/data-table/sort-header'
                        },
                        {
                            title: 'Table',
                            page: '/material/data-table/table'
                        }
                    ]
                }
            ]
        },
        {
            title: 'NgBootstrap',
            bullet: 'dot',
            icon: 'flaticon-web',
            page: '/ngbootstrap',
            mega: true,
            submenu: [
                {
                    title: 'A ... C',
                    submenu: [{
                            title: 'Accordion',
                            page: '/ngbootstrap/accordion'
                        },
                        {
                            title: 'Alert',
                            page: '/ngbootstrap/alert'
                        },
                        {
                            title: 'Buttons',
                            page: '/ngbootstrap/buttons'
                        },
                        {
                            title: 'Carousel',
                            page: '/ngbootstrap/carousel'
                        }]
                },
                {
                    title: 'C ... M',
                    submenu: [{
                            title: 'Collapse',
                            page: '/ngbootstrap/collapse'
                        },
                        {
                            title: 'Datepicker',
                            page: '/ngbootstrap/datepicker'
                        },
                        {
                            title: 'Dropdown',
                            page: '/ngbootstrap/dropdown'
                        },
                        {
                            title: 'Modal',
                            page: '/ngbootstrap/modal'
                        }]
                },
                {
                    title: 'P ... R',
                    submenu: [{
                            title: 'Pagination',
                            page: '/ngbootstrap/pagination'
                        },
                        {
                            title: 'Popover',
                            page: '/ngbootstrap/popover'
                        },
                        {
                            title: 'Progressbar',
                            page: '/ngbootstrap/progressbar'
                        },
                        {
                            title: 'Rating',
                            page: '/ngbootstrap/rating'
                        }]
                },
                {
                    title: 'T ... Z',
                    submenu: [
                        {
                            title: 'Timepicker',
                            page: '/ngbootstrap/timepicker'
                        },
                        {
                            title: 'Tooltips',
                            page: '/ngbootstrap/tooltip'
                        },
                        {
                            title: 'Typehead',
                            page: '/ngbootstrap/typehead'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Custom',
            root: true,
            alignment: 'left',
            toggle: 'click',
            page: '',
            submenu: [
                {
                    title: 'eCommerce',
                    bullet: 'dot',
                    icon: 'flaticon-business',
                    permission: 'accessToECommerceModule',
                    page: '/ecommerce',
                    submenu: [
                        {
                            title: 'Customers',
                            page: '/ecommerce/customers'
                        },
                        {
                            title: 'Products',
                            page: '/ecommerce/products'
                        },
                    ]
                },
                {
                    title: 'User Management',
                    bullet: 'dot',
                    icon: 'flaticon-user',
                    page: '/user-management',
                    submenu: [
                        {
                            title: 'Users',
                            page: '/user-management/users'
                        },
                        {
                            title: 'Roles',
                            page: '/user-management/roles'
                        }
                    ]
                },
                {
                    title: 'Error Pages',
                    bullet: 'dot',
                    icon: 'flaticon2-list-2',
                    page: '/error',
                    submenu: [
                        {
                            title: 'Error 1',
                            page: '/error/error-1'
                        },
                        {
                            title: 'Error 2',
                            page: '/error/error-2'
                        },
                        {
                            title: 'Error 3',
                            page: '/error/error-3'
                        },
                        {
                            title: 'Error 4',
                            page: '/error/error-4'
                        },
                        {
                            title: 'Error 5',
                            page: '/error/error-5'
                        },
                        {
                            title: 'Error 6',
                            page: '/error/error-6'
                        },
                    ]
                },
                {
                    title: 'Wizards',
                    bullet: 'dot',
                    icon: 'flaticon2-mail-1',
                    page: '/wizards',
                    submenu: [
                        {
                            title: 'Wizard 1',
                            page: '/wizards/wizard-1'
                        },
                        {
                            title: 'Wizard 2',
                            page: '/wizards/wizard-2'
                        },
                        {
                            title: 'Wizard 3',
                            page: '/wizards/wizard-3'
                        },
                        {
                            title: 'Wizard 4',
                            page: '/wizards/wizard-4'
                        },
                    ]
                }
            ]
        }
    ]
};


/***/ }),

/***/ 4852:
/*!***********************************************!*\
  !*** ./src/app/_metronic/core/core.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/first-letter.pipe */ 94388);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/safe.pipe */ 76323);





let CoreModule = class CoreModule {
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_0__.FirstLetterPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        exports: [_pipes_first_letter_pipe__WEBPACK_IMPORTED_MODULE_0__.FirstLetterPipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_1__.SafePipe],
    })
], CoreModule);



/***/ }),

/***/ 39123:
/*!*****************************************!*\
  !*** ./src/app/_metronic/core/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* reexport safe */ _services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService),
/* harmony export */   "LayoutInitService": () => (/* reexport safe */ _services_layout_init_service__WEBPACK_IMPORTED_MODULE_1__.LayoutInitService),
/* harmony export */   "DynamicAsideMenuService": () => (/* reexport safe */ _services_dynamic_aside_menu_service__WEBPACK_IMPORTED_MODULE_2__.DynamicAsideMenuService),
/* harmony export */   "DynamicHeaderMenuService": () => (/* reexport safe */ _services_dynamic_header_menu_service__WEBPACK_IMPORTED_MODULE_3__.DynamicHeaderMenuService),
/* harmony export */   "getDateFromString": () => (/* reexport safe */ _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__.getDateFromString),
/* harmony export */   "toInteger": () => (/* reexport safe */ _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__.toInteger),
/* harmony export */   "CustomAdapter": () => (/* reexport safe */ _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter),
/* harmony export */   "CustomAdapter2": () => (/* reexport safe */ _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__.CustomAdapter2),
/* harmony export */   "CustomDateParserFormatter": () => (/* reexport safe */ _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__.CustomDateParserFormatter),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule)
/* harmony export */ });
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/layout.service */ 18468);
/* harmony import */ var _services_layout_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/layout-init.service */ 60111);
/* harmony import */ var _services_dynamic_aside_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dynamic-aside-menu.service */ 67033);
/* harmony import */ var _services_dynamic_header_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dynamic-header-menu.service */ 63315);
/* harmony import */ var _utils_types_convertion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/types-convertion.utils */ 42927);
/* harmony import */ var _utils_date_picker_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/date-picker.utils */ 99605);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core.module */ 4852);
// Services




// Utils


// Module



/***/ }),

/***/ 94388:
/*!***********************************************************!*\
  !*** ./src/app/_metronic/core/pipes/first-letter.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstLetterPipe": () => (/* binding */ FirstLetterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);

// Angular

/**
 * Returns only first letter of string
 */
let FirstLetterPipe = class FirstLetterPipe {
    /**
     * Transform
     *
     * @param value: any
     * @param args: any
     */
    transform(value, args) {
        return value
            .split(' ')
            .map((n) => n[0])
            .join('');
    }
};
FirstLetterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'firstLetter',
    })
], FirstLetterPipe);



/***/ }),

/***/ 76323:
/*!***************************************************!*\
  !*** ./src/app/_metronic/core/pipes/safe.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 86219);

// Angular


/**
 * Sanitize HTML
 */
let SafePipe = class SafePipe {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'safe',
    })
], SafePipe);



/***/ }),

/***/ 67033:
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/core/services/dynamic-aside-menu.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicAsideMenuService": () => (/* binding */ DynamicAsideMenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var _configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configs/dynamic-aside-menu.config */ 13933);




const emptyMenuConfig = {
    items: []
};
let DynamicAsideMenuService = class DynamicAsideMenuService {
    constructor() {
        this.menuConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(emptyMenuConfig);
        this.menuConfig$ = this.menuConfigSubject.asObservable();
        this.loadMenu();
    }
    // Here you able to load your menu from server/data-base/localStorage
    // Default => from DynamicAsideMenuConfig
    loadMenu() {
        this.setMenu(_configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_0__.DynamicAsideMenuConfig);
    }
    setMenu(menuConfig) {
        this.menuConfigSubject.next(menuConfig);
    }
    getMenu() {
        return this.menuConfigSubject.value;
    }
};
DynamicAsideMenuService.ctorParameters = () => [];
DynamicAsideMenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DynamicAsideMenuService);



/***/ }),

/***/ 63315:
/*!************************************************************************!*\
  !*** ./src/app/_metronic/core/services/dynamic-header-menu.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicHeaderMenuService": () => (/* binding */ DynamicHeaderMenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var _configs_dynamic_header_menu_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configs/dynamic-header-menu.config */ 57538);




const emptyMenuConfig = {
    items: []
};
let DynamicHeaderMenuService = class DynamicHeaderMenuService {
    constructor() {
        this.menuConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(emptyMenuConfig);
        this.menuConfig$ = this.menuConfigSubject.asObservable();
        this.loadMenu();
    }
    // Here you able to load your menu from server/data-base/localeStorage
    // Default => from DynamicHeaderMenuConfig
    loadMenu() {
        this.setMenu(_configs_dynamic_header_menu_config__WEBPACK_IMPORTED_MODULE_0__.DynamicHeaderMenuConfig);
    }
    setMenu(menuConfig) {
        this.menuConfigSubject.next(menuConfig);
    }
    getMenu() {
        return this.menuConfigSubject.value;
    }
};
DynamicHeaderMenuService.ctorParameters = () => [];
DynamicHeaderMenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DynamicHeaderMenuService);



/***/ }),

/***/ 60111:
/*!****************************************************************!*\
  !*** ./src/app/_metronic/core/services/layout-init.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutInitService": () => (/* binding */ LayoutInitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.service */ 18468);



let LayoutInitService = class LayoutInitService {
    constructor(layout) {
        this.layout = layout;
    }
    init() {
        this.layout.initConfig();
        this.preInitLayout();
        // init base layout
        this.initLayout();
        this.initLoader();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init content
        this.initContent();
        // init aside and aside menu
        this.initAside();
        // init footer
        this.initFooter();
        this.initSkins();
    }
    // init base layout
    preInitLayout() {
        const config = this.layout.getConfig();
        const updatedConfig = Object.assign({}, config);
        const subheaderFixed = this.layout.getProp('subheader.fixed');
        const headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');
        if (subheaderFixed && headerSelfFixedDesktop) {
            updatedConfig.subheader.style = 'solid';
        }
        else {
            updatedConfig.subheader.fixed = false;
        }
        this.layout.setConfigWithoutLocalStorageChanges(updatedConfig);
    }
    initLayout() {
        const selfBodyBackgroundImage = this.layout.getProp('self.body.background-image');
        if (selfBodyBackgroundImage) {
            document.body.style.backgroundImage = `url("${selfBodyBackgroundImage}")`;
        }
        const selfBodyClass = (this.layout.getProp('self.body.class') || '').toString();
        if (selfBodyClass) {
            const bodyClasses = selfBodyClass.split(' ');
            bodyClasses.forEach((cssClass) => document.body.classList.add(cssClass));
        }
    }
    initLoader() { }
    // init header and subheader menu
    initHeader() {
        // Fixed header
        const headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');
        if (headerSelfFixedDesktop) {
            document.body.classList.add('header-fixed');
            this.layout.setCSSClass('header', 'header-fixed');
        }
        else {
            document.body.classList.add('header-static');
        }
        const headerSelfFixedMobile = this.layout.getProp('header.self.fixed.mobile');
        if (headerSelfFixedMobile) {
            document.body.classList.add('header-mobile-fixed');
            this.layout.setCSSClass('header_mobile', 'header-mobile-fixed');
        }
        // Menu
        const headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
        const headerMenuSelfLayout = this.layout.getProp('header.menu.self.layout');
        if (headerMenuSelfDisplay) {
            this.layout.setCSSClass('header_menu', `header-menu-layout-${headerMenuSelfLayout}`);
            if (this.layout.getProp('header.menu.self.rootArrow')) {
                this.layout.setCSSClass('header_menu', 'header-menu-root-arrow');
            }
        }
        if (this.layout.getProp('header.self.width') === 'fluid') {
            this.layout.setCSSClass('header_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('header_container', 'container');
        }
    }
    initSubheader() {
        const subheaderDisplay = this.layout.getProp('subheader.display');
        if (subheaderDisplay) {
            document.body.classList.add('subheader-enabled');
        }
        else {
            return;
        }
        // Fixed content head
        const subheaderFixed = this.layout.getProp('subheader.fixed');
        const headerSelfFixedDesktop = this.layout.getProp('header.self.fixed.desktop');
        if (subheaderFixed && headerSelfFixedDesktop) {
            document.body.classList.add('subheader-fixed');
        }
        const subheaderStyle = this.layout.getProp('subheader.style');
        if (subheaderStyle) {
            this.layout.setCSSClass('subheader', `subheader-${subheaderStyle}`);
        }
        if (this.layout.getProp('subheader.width') === 'fluid') {
            this.layout.setCSSClass('subheader_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('subheader_container', 'container');
        }
        if (this.layout.getProp('subheader.clear')) {
            this.layout.setCSSClass('subheader', 'mb-0');
        }
    }
    // init content
    initContent() {
        if (this.layout.getProp('content.fit-top')) {
            this.layout.setCSSClass('content', 'pt-0');
        }
        if (this.layout.getProp('content.fit-bottom')) {
            this.layout.setCSSClass('content', 'pb-0');
        }
        if (this.layout.getProp('content.width') === 'fluid') {
            this.layout.setCSSClass('content_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('content_container', 'container');
        }
    }
    // init aside and aside menu
    initAside() {
        if (this.layout.getProp('aside.self.display') !== true) {
            return;
        }
        // Enable Aside
        document.body.classList.add('aside-enabled');
        // Fixed Aside
        if (this.layout.getProp('aside.self.fixed')) {
            document.body.classList.add('aside-fixed');
            this.layout.setCSSClass('aside', 'aside-fixed');
        }
        else {
            document.body.classList.add('aside-static');
        }
        // Check Aside
        if (this.layout.getProp('aside.self.display') !== true) {
            return;
        }
        // Default fixed
        if (this.layout.getProp('aside.self.minimize.default')) {
            document.body.classList.add('aside-minimize');
        }
        if (this.layout.getProp('aside.self.minimize.hoverable')) {
            document.body.classList.add('aside-minimize-hoverable');
        }
        // Menu
        // Dropdown Submenu
        const asideMenuDropdown = this.layout.getProp('aside.menu.dropdown');
        if (asideMenuDropdown) {
            this.layout.setCSSClass('aside_menu', 'aside-menu-dropdown');
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown', '1');
        }
        // Scrollable Menu
        if (asideMenuDropdown !== true) {
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '1');
        }
        else {
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-scroll', '0');
        }
        const asideMenuSubmenuDropdownHoverTimout = this.layout.getProp('aside.menu.submenu.dropdown.hoverTimeout');
        if (asideMenuSubmenuDropdownHoverTimout) {
            this.layout.setHTMLAttribute('aside_menu', 'data-menu-dropdown-timeout', asideMenuSubmenuDropdownHoverTimout);
        }
    }
    // init footer
    initFooter() {
        // Fixed header
        if (this.layout.getProp('footer.fixed') === true) {
            document.body.classList.add('footer-fixed');
        }
        if (this.layout.getProp('footer.width') === 'fluid') {
            this.layout.setCSSClass('footer_container', 'container-fluid');
        }
        else {
            this.layout.setCSSClass('footer_container', 'container');
        }
    }
    /**
     * Set the body class name based on page skin options
     */
    initSkins() {
        const headerSelfTheme = this.layout.getProp('header.self.theme') || '';
        const brandSelfTheme = this.layout.getProp('brand.self.theme') || '';
        const asideSelfDisplay = this.layout.getProp('aside.self.display');
        if (asideSelfDisplay === false) {
            document.body.classList.add(`brand-${headerSelfTheme}`);
        }
        else {
            document.body.classList.add(`brand-${brandSelfTheme}`);
        }
    }
};
LayoutInitService.ctorParameters = () => [
    { type: _layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService }
];
LayoutInitService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], LayoutInitService);



/***/ }),

/***/ 18468:
/*!***********************************************************!*\
  !*** ./src/app/_metronic/core/services/layout.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var _configs_default_layout_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/default-layout.config */ 1006);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ 39176);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);






const LAYOUT_CONFIG_LOCAL_STORAGE_KEY = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion}-layoutConfig`;
let LayoutService = class LayoutService {
    constructor() {
        this.layoutConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
        // scope list of css classes
        this.classes = {
            header: [],
            header_container: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: [],
            subheader: [],
            subheader_container: [],
            content: [],
            content_container: [],
            footer_container: [],
        };
        // scope list of html attributes
        this.attrs = {
            aside_menu: {},
        };
    }
    initConfig() {
        const configFromLocalStorage = localStorage.getItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY);
        if (configFromLocalStorage) {
            try {
                this.layoutConfigSubject.next(JSON.parse(configFromLocalStorage));
                return;
            }
            catch (error) {
                this.removeConfig();
                // console.error('config parse from local storage', error);
            }
        }
        this.layoutConfigSubject.next(_configs_default_layout_config__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutConfig);
    }
    removeConfig() {
        localStorage.removeItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY);
    }
    refreshConfigToDefault() {
        this.setConfigWithPageRefresh(undefined);
    }
    getConfig() {
        const config = this.layoutConfigSubject.value;
        if (!config) {
            return _configs_default_layout_config__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutConfig;
        }
        return config;
    }
    setConfig(config) {
        if (!config) {
            this.removeConfig();
        }
        else {
            localStorage.setItem(LAYOUT_CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
        }
        this.layoutConfigSubject.next(config);
    }
    setConfigWithoutLocalStorageChanges(config) {
        this.layoutConfigSubject.next(config);
    }
    setConfigWithPageRefresh(config) {
        this.setConfig(config);
        document.location.reload();
    }
    getProp(path) {
        return object_path__WEBPACK_IMPORTED_MODULE_2__.get(this.layoutConfigSubject.value, path);
    }
    setCSSClass(path, classesInStr) {
        const cssClasses = this.classes[path];
        if (!cssClasses) {
            this.classes[path] = [];
        }
        classesInStr
            .split(' ')
            .forEach((cssClass) => this.classes[path].push(cssClass));
    }
    getCSSClasses(path) {
        const cssClasses = this.classes[path];
        if (!cssClasses) {
            return [];
        }
        return cssClasses;
    }
    getStringCSSClasses(path) {
        return this.getCSSClasses(path).join(' ');
    }
    getHTMLAttributes(path) {
        const attributesObj = this.attrs[path];
        if (!attributesObj) {
            return {};
        }
        return attributesObj;
    }
    setHTMLAttribute(path, attrKey, attrValue) {
        const attributesObj = this.attrs[path];
        if (!attributesObj) {
            this.attrs[path] = {};
        }
        this.attrs[path][attrKey] = attrValue;
    }
};
LayoutService.ctorParameters = () => [];
LayoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], LayoutService);



/***/ }),

/***/ 99605:
/*!***********************************************************!*\
  !*** ./src/app/_metronic/core/utils/date-picker.utils.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAdapter": () => (/* binding */ CustomAdapter),
/* harmony export */   "CustomAdapter2": () => (/* binding */ CustomAdapter2),
/* harmony export */   "CustomDateParserFormatter": () => (/* binding */ CustomDateParserFormatter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
let CustomAdapter = class CustomAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                month: parseInt(date[1], 10),
                day: parseInt(date[2], 10),
                year: parseInt(date[0], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? date.year + this.DELIMITER + ("0" + date.month).substr(-2) + this.DELIMITER + ("0" + date.day).substr(-2) : null;
    }
};
CustomAdapter = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomAdapter);

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
let CustomAdapter2 = class CustomAdapter2 extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    fromModel(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                month: parseInt(date[1], 10),
                day: parseInt(date[0], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? ("0" + date.day).substr(-2) + this.DELIMITER + ("0" + date.month).substr(-2) + this.DELIMITER + date.year : null;
    }
};
CustomAdapter2 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomAdapter2);

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
let CustomDateParserFormatter = class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateParserFormatter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                month: parseInt(date[1], 10),
                day: parseInt(date[0], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    format(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
    }
};
CustomDateParserFormatter = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomDateParserFormatter);



/***/ }),

/***/ 42927:
/*!****************************************************************!*\
  !*** ./src/app/_metronic/core/utils/types-convertion.utils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateFromString": () => (/* binding */ getDateFromString),
/* harmony export */   "toInteger": () => (/* binding */ toInteger)
/* harmony export */ });
/**
 * Convert string to Date
 *
 * @param dateInStr: string (format => 'MM/dd/yyyy')
 */
function getDateFromString(dateInStr = '') {
    if (dateInStr && dateInStr.length > 0) {
        const dateParts = dateInStr.trim().split('/');
        const year = toInteger(dateParts[2]);
        const month = toInteger(dateParts[0]);
        const day = toInteger(dateParts[1]);
        // tslint:disable-next-line:prefer-const
        let result = new Date();
        result.setDate(day);
        result.setMonth(month - 1);
        result.setFullYear(year);
        return result;
    }
    return new Date();
}
/**
 * Covert value to number
 *
 * @param value: any
 */
function toInteger(value) {
    return parseInt(`${value}`, 10);
}


/***/ }),

/***/ 300:
/*!******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenu1Component": () => (/* binding */ DropdownMenu1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dropdown-menu1.component.html */ 87272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let DropdownMenu1Component = class DropdownMenu1Component {
    constructor() { }
    ngOnInit() { }
};
DropdownMenu1Component.ctorParameters = () => [];
DropdownMenu1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dropdown-menu1',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], DropdownMenu1Component);



/***/ }),

/***/ 23838:
/*!******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenu2Component": () => (/* binding */ DropdownMenu2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dropdown-menu2.component.html */ 5102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let DropdownMenu2Component = class DropdownMenu2Component {
    constructor() { }
    ngOnInit() { }
};
DropdownMenu2Component.ctorParameters = () => [];
DropdownMenu2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dropdown-menu2',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], DropdownMenu2Component);



/***/ }),

/***/ 91619:
/*!******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu3/dropdown-menu3.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenu3Component": () => (/* binding */ DropdownMenu3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dropdown-menu3.component.html */ 5542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let DropdownMenu3Component = class DropdownMenu3Component {
    constructor() { }
    ngOnInit() { }
};
DropdownMenu3Component.ctorParameters = () => [];
DropdownMenu3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dropdown-menu3',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], DropdownMenu3Component);



/***/ }),

/***/ 24599:
/*!******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu4/dropdown-menu4.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenu4Component": () => (/* binding */ DropdownMenu4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dropdown-menu4.component.html */ 96259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let DropdownMenu4Component = class DropdownMenu4Component {
    constructor() { }
    ngOnInit() { }
};
DropdownMenu4Component.ctorParameters = () => [];
DropdownMenu4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dropdown-menu4',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dropdown_menu4_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], DropdownMenu4Component);



/***/ }),

/***/ 11735:
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/content/dropdown-menus/dropdown-menus.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenusModule": () => (/* binding */ DropdownMenusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-menu1/dropdown-menu1.component */ 300);
/* harmony import */ var _dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-menu2/dropdown-menu2.component */ 23838);
/* harmony import */ var _dropdown_menu3_dropdown_menu3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-menu3/dropdown-menu3.component */ 91619);
/* harmony import */ var _dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-menu4/dropdown-menu4.component */ 24599);







let DropdownMenusModule = class DropdownMenusModule {
};
DropdownMenusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu1Component,
            _dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu2Component,
            _dropdown_menu3_dropdown_menu3_component__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu3Component,
            _dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu4Component,
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
        exports: [
            _dropdown_menu1_dropdown_menu1_component__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu1Component,
            _dropdown_menu2_dropdown_menu2_component__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu2Component,
            _dropdown_menu3_dropdown_menu3_component__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu3Component,
            _dropdown_menu4_dropdown_menu4_component__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu4Component,
        ],
    })
], DropdownMenusModule);



/***/ }),

/***/ 46662:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/cart-dropdown-inner/cart-dropdown-inner.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDropdownInnerComponent": () => (/* binding */ CartDropdownInnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cart-dropdown-inner.component.html */ 68014);
/* harmony import */ var _cart_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-dropdown-inner.component.scss */ 58069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let CartDropdownInnerComponent = class CartDropdownInnerComponent {
    constructor(layout) {
        this.layout = layout;
        this.extrasCartDropdownStyle = 'light';
    }
    ngOnInit() {
        this.extrasCartDropdownStyle = this.layout.getProp('extras.cart.dropdown.style');
    }
};
CartDropdownInnerComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
CartDropdownInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cart-dropdown-inner',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cart_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartDropdownInnerComponent);



/***/ }),

/***/ 10903:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/notifications-dropdown-inner/notifications-dropdown-inner.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsDropdownInnerComponent": () => (/* binding */ NotificationsDropdownInnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications-dropdown-inner.component.html */ 87367);
/* harmony import */ var _notifications_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications-dropdown-inner.component.scss */ 16101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let NotificationsDropdownInnerComponent = class NotificationsDropdownInnerComponent {
    constructor(layout) {
        this.layout = layout;
        this.extrasNotificationsDropdownStyle = 'dark';
        this.activeTabId = 'topbar_notifications_notifications';
    }
    ngOnInit() {
        this.extrasNotificationsDropdownStyle = this.layout.getProp('extras.notifications.dropdown.style');
    }
    setActiveTabId(tabId) {
        this.activeTabId = tabId;
    }
    getActiveCSSClasses(tabId) {
        if (tabId !== this.activeTabId) {
            return '';
        }
        return 'active show';
    }
};
NotificationsDropdownInnerComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
NotificationsDropdownInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notifications-dropdown-inner',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifications_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsDropdownInnerComponent);



/***/ }),

/***/ 28403:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/quick-actions-dropdown-inner/quick-actions-dropdown-inner.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickActionsDropdownInnerComponent": () => (/* binding */ QuickActionsDropdownInnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quick_actions_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quick-actions-dropdown-inner.component.html */ 21389);
/* harmony import */ var _quick_actions_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-actions-dropdown-inner.component.scss */ 63141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let QuickActionsDropdownInnerComponent = class QuickActionsDropdownInnerComponent {
    constructor(layout) {
        this.layout = layout;
        this.extrasQuickActionsDropdownStyle = 'light';
    }
    ngOnInit() {
        this.extrasQuickActionsDropdownStyle = this.layout.getProp('extras.quickActions.dropdown.style');
    }
};
QuickActionsDropdownInnerComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
QuickActionsDropdownInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quick-actions-dropdown-inner',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quick_actions_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_quick_actions_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuickActionsDropdownInnerComponent);



/***/ }),

/***/ 93245:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/search-dropdown-inner/search-dropdown-inner.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchDropdownInnerComponent": () => (/* binding */ SearchDropdownInnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-dropdown-inner.component.html */ 42069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const documents = {
    title: 'Documents',
    type: 0,
    items: [
        {
            svgPath: 'assets/media/svg/files/doc.svg',
            title: 'AirPlus Requirements',
            description: 'by Grog John',
        },
        {
            svgPath: 'assets/media/svg/files/pdf.svg',
            title: 'TechNav Documentation',
            description: 'by Mary Brown',
        },
        {
            svgPath: 'assets/media/svg/files/xml.svg',
            title: 'All Framework Docs',
            description: 'by Nick Stone',
        },
        {
            svgPath: 'assets/media/svg/files/csv.svg',
            title: 'Finance & Accounting Reports',
            description: 'by Jhon Larson',
        },
    ],
};
const members = {
    title: 'Members',
    type: 1,
    items: [
        {
            imgPath: 'assets/media/users/300_20.jpg',
            title: 'Milena Gibson',
            description: 'UI Designer',
        },
        {
            imgPath: 'assets/media/users/300_15.jpg',
            title: 'Stefan JohnStefan',
            description: 'Marketing Manager',
        },
        {
            imgPath: 'assets/media/users/300_12.jpg',
            title: 'Anna Strong',
            description: 'Software Developer',
        },
        {
            imgPath: 'assets/media/users/300_16.jpg',
            title: 'Nick Bold',
            description: 'Project Coordinator',
        },
    ],
};
const files = {
    title: 'Files',
    type: 2,
    items: [
        {
            iconClasses: 'flaticon-psd text-primary',
            title: '79 PSD files generated',
            description: 'by Grog John',
        },
        {
            iconClasses: 'flaticon2-supermarket text-warning',
            title: '$2900 worth products sold',
            description: 'Total 234 items',
        },
        {
            iconClasses: 'flaticon-safe-shield-protection text-info',
            title: '4 New items submitted',
            description: 'Marketing Manager',
        },
        {
            iconClasses: 'flaticon-safe-shield-protection text-warning',
            title: '4 New items submitted',
            description: 'Marketing Manager',
        },
    ],
};
let SearchDropdownInnerComponent = class SearchDropdownInnerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.data = null;
    }
    ngOnInit() { }
    /**
     * Search
     * @param e: Event
     */
    search(e) {
        this.data = null;
        if (e.target.value.length > 1) {
            this.loading = true;
            // simulate getting search result
            setTimeout(() => {
                // Uncomment this. Right now it's just mock
                // this.data = this.searchInData(e.target.value);
                this.data = [documents, members, files];
                this.loading = false;
                this.cdr.markForCheck();
            }, 500);
        }
    }
    /**
     * Clear search
     *
     * @param e: Event
     */
    clear(e) {
        this.data = null;
        this.searchInput.nativeElement.value = '';
    }
    openChange() {
        setTimeout(() => this.searchInput.nativeElement.focus());
    }
    showCloseButton() {
        return this.data && this.data.length && !this.loading;
    }
};
SearchDropdownInnerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef }
];
SearchDropdownInnerComponent.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['searchInput', { static: true },] }]
};
SearchDropdownInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-search-dropdown-inner',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], SearchDropdownInnerComponent);



/***/ }),

/***/ 67293:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/search-dropdown-inner/search-result/search-result.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultComponent": () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_result_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-result.component.html */ 80843);
/* harmony import */ var _search_result_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-result.component.scss */ 56050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let SearchResultComponent = class SearchResultComponent {
    constructor() { }
    ngOnInit() { }
};
SearchResultComponent.ctorParameters = () => [];
SearchResultComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SearchResultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-search-result',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_result_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_result_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchResultComponent);



/***/ }),

/***/ 91860:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/user-dropdown-inner/user-dropdown-inner.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDropdownInnerComponent": () => (/* binding */ UserDropdownInnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-dropdown-inner.component.html */ 52774);
/* harmony import */ var _user_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-dropdown-inner.component.scss */ 19717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/auth/_services/auth.service */ 69380);






let UserDropdownInnerComponent = class UserDropdownInnerComponent {
    constructor(layout, auth) {
        this.layout = layout;
        this.auth = auth;
        this.extrasUserDropdownStyle = 'light';
    }
    ngOnInit() {
        this.extrasUserDropdownStyle = this.layout.getProp('extras.user.dropdown.style');
        this.user$ = this.auth.currentUserSubject.asObservable();
    }
    logout() {
        this.auth.logout();
        document.location.reload();
    }
};
UserDropdownInnerComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
UserDropdownInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-dropdown-inner',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_dropdown_inner_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_dropdown_inner_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserDropdownInnerComponent);



/***/ }),

/***/ 84353:
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/extras.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrasModule": () => (/* binding */ ExtrasModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _dropdown_inner_search_dropdown_inner_search_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-inner/search-dropdown-inner/search-dropdown-inner.component */ 93245);
/* harmony import */ var _dropdown_inner_notifications_dropdown_inner_notifications_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-inner/notifications-dropdown-inner/notifications-dropdown-inner.component */ 10903);
/* harmony import */ var _dropdown_inner_quick_actions_dropdown_inner_quick_actions_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-inner/quick-actions-dropdown-inner/quick-actions-dropdown-inner.component */ 28403);
/* harmony import */ var _dropdown_inner_cart_dropdown_inner_cart_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-inner/cart-dropdown-inner/cart-dropdown-inner.component */ 46662);
/* harmony import */ var _dropdown_inner_user_dropdown_inner_user_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-inner/user-dropdown-inner/user-dropdown-inner.component */ 91860);
/* harmony import */ var _offcanvas_search_offcanvas_search_offcanvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offcanvas/search-offcanvas/search-offcanvas.component */ 5472);
/* harmony import */ var _dropdown_inner_search_dropdown_inner_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-inner/search-dropdown-inner/search-result/search-result.component */ 67293);
/* harmony import */ var _offcanvas_notifications_offcanvas_notifications_offcanvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offcanvas/notifications-offcanvas/notifications-offcanvas.component */ 61003);
/* harmony import */ var _offcanvas_quick_actions_offcanvas_quick_actions_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offcanvas/quick-actions-offcanvas/quick-actions-offcanvas.component */ 32750);
/* harmony import */ var _offcanvas_cart_offcanvas_cart_offcanvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offcanvas/cart-offcanvas/cart-offcanvas.component */ 8069);
/* harmony import */ var _offcanvas_quick_panel_offcanvas_quick_panel_offcanvas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./offcanvas/quick-panel-offcanvas/quick-panel-offcanvas.component */ 69892);
/* harmony import */ var _offcanvas_user_offcanvas_user_offcanvas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./offcanvas/user-offcanvas/user-offcanvas.component */ 50456);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core */ 39123);
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ 21648);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 69986);






















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};
let ExtrasModule = class ExtrasModule {
};
ExtrasModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [
            _dropdown_inner_search_dropdown_inner_search_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_1__.SearchDropdownInnerComponent,
            _dropdown_inner_notifications_dropdown_inner_notifications_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsDropdownInnerComponent,
            _dropdown_inner_quick_actions_dropdown_inner_quick_actions_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_3__.QuickActionsDropdownInnerComponent,
            _dropdown_inner_cart_dropdown_inner_cart_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_4__.CartDropdownInnerComponent,
            _dropdown_inner_user_dropdown_inner_user_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_5__.UserDropdownInnerComponent,
            _offcanvas_search_offcanvas_search_offcanvas_component__WEBPACK_IMPORTED_MODULE_6__.SearchOffcanvasComponent,
            _dropdown_inner_search_dropdown_inner_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__.SearchResultComponent,
            _offcanvas_notifications_offcanvas_notifications_offcanvas_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsOffcanvasComponent,
            _offcanvas_quick_actions_offcanvas_quick_actions_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__.QuickActionsOffcanvasComponent,
            _offcanvas_cart_offcanvas_cart_offcanvas_component__WEBPACK_IMPORTED_MODULE_10__.CartOffcanvasComponent,
            _offcanvas_quick_panel_offcanvas_quick_panel_offcanvas_component__WEBPACK_IMPORTED_MODULE_11__.QuickPanelOffcanvasComponent,
            _offcanvas_user_offcanvas_user_offcanvas_component__WEBPACK_IMPORTED_MODULE_12__.UserOffcanvasComponent,
            _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_14__.ScrollTopComponent,
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__.ToolbarComponent,
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PerfectScrollbarModule, _core__WEBPACK_IMPORTED_MODULE_13__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            },
        ],
        exports: [
            _dropdown_inner_search_dropdown_inner_search_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_1__.SearchDropdownInnerComponent,
            _dropdown_inner_notifications_dropdown_inner_notifications_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsDropdownInnerComponent,
            _dropdown_inner_quick_actions_dropdown_inner_quick_actions_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_3__.QuickActionsDropdownInnerComponent,
            _dropdown_inner_cart_dropdown_inner_cart_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_4__.CartDropdownInnerComponent,
            _dropdown_inner_user_dropdown_inner_user_dropdown_inner_component__WEBPACK_IMPORTED_MODULE_5__.UserDropdownInnerComponent,
            _offcanvas_search_offcanvas_search_offcanvas_component__WEBPACK_IMPORTED_MODULE_6__.SearchOffcanvasComponent,
            _offcanvas_notifications_offcanvas_notifications_offcanvas_component__WEBPACK_IMPORTED_MODULE_8__.NotificationsOffcanvasComponent,
            _offcanvas_quick_actions_offcanvas_quick_actions_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__.QuickActionsOffcanvasComponent,
            _offcanvas_cart_offcanvas_cart_offcanvas_component__WEBPACK_IMPORTED_MODULE_10__.CartOffcanvasComponent,
            _offcanvas_quick_panel_offcanvas_quick_panel_offcanvas_component__WEBPACK_IMPORTED_MODULE_11__.QuickPanelOffcanvasComponent,
            _offcanvas_user_offcanvas_user_offcanvas_component__WEBPACK_IMPORTED_MODULE_12__.UserOffcanvasComponent,
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__.ToolbarComponent,
            _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_14__.ScrollTopComponent,
        ],
    })
], ExtrasModule);



/***/ }),

/***/ 8069:
/*!*******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/cart-offcanvas/cart-offcanvas.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartOffcanvasComponent": () => (/* binding */ CartOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cart-offcanvas.component.html */ 37228);
/* harmony import */ var _cart_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-offcanvas.component.scss */ 76885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let CartOffcanvasComponent = class CartOffcanvasComponent {
    constructor(layout) {
        this.layout = layout;
        this.extrasCartOffcanvasDirectionCSSClass = 'offcanvas-right';
    }
    ngOnInit() {
        this.extrasCartOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp('extras.cart.offcanvas.direction')}`;
    }
};
CartOffcanvasComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
CartOffcanvasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cart-offcanvas',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cart_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cart_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartOffcanvasComponent);



/***/ }),

/***/ 61003:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/notifications-offcanvas/notifications-offcanvas.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsOffcanvasComponent": () => (/* binding */ NotificationsOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications-offcanvas.component.html */ 89416);
/* harmony import */ var _notifications_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications-offcanvas.component.scss */ 86066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let NotificationsOffcanvasComponent = class NotificationsOffcanvasComponent {
    constructor(layout) {
        this.layout = layout;
    }
    ngOnInit() {
        this.extrasNotificationsOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp('extras.notifications.offcanvas.direction')}`;
    }
};
NotificationsOffcanvasComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
NotificationsOffcanvasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notifications-offcanvas',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notifications_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsOffcanvasComponent);



/***/ }),

/***/ 32750:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/quick-actions-offcanvas/quick-actions-offcanvas.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickActionsOffcanvasComponent": () => (/* binding */ QuickActionsOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quick_actions_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quick-actions-offcanvas.component.html */ 52073);
/* harmony import */ var _quick_actions_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-actions-offcanvas.component.scss */ 40683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let QuickActionsOffcanvasComponent = class QuickActionsOffcanvasComponent {
    constructor(layout) {
        this.layout = layout;
        this.extrasQuickActionsOffcanvasDirectionCSSClasses = 'offcanvas-right';
    }
    ngOnInit() {
        this.extrasQuickActionsOffcanvasDirectionCSSClasses = `offcanvas-${this.layout.getProp('extras.quickActions.offcanvas.direction')}`;
    }
};
QuickActionsOffcanvasComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
QuickActionsOffcanvasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quick-actions-offcanvas',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quick_actions_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_quick_actions_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuickActionsOffcanvasComponent);



/***/ }),

/***/ 69892:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/quick-panel-offcanvas/quick-panel-offcanvas.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickPanelOffcanvasComponent": () => (/* binding */ QuickPanelOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quick_panel_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quick-panel-offcanvas.component.html */ 1287);
/* harmony import */ var _quick_panel_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-panel-offcanvas.component.scss */ 2954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let QuickPanelOffcanvasComponent = class QuickPanelOffcanvasComponent {
    constructor(layout) {
        this.layout = layout;
        this.extrasQuickPanelOffcanvasDirectionCSSClass = 'offcanvas-right';
        this.activeTabId = 'kt_quick_panel_logs';
    }
    ngOnInit() {
        this.extrasQuickPanelOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp('extras.quickPanel.offcanvas.direction')}`;
    }
    setActiveTabId(tabId) {
        this.activeTabId = tabId;
    }
    getActiveCSSClasses(tabId) {
        if (tabId !== this.activeTabId) {
            return '';
        }
        return 'active show';
    }
};
QuickPanelOffcanvasComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
QuickPanelOffcanvasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quick-panel-offcanvas',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quick_panel_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_quick_panel_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuickPanelOffcanvasComponent);



/***/ }),

/***/ 5472:
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/search-offcanvas/search-offcanvas.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchOffcanvasComponent": () => (/* binding */ SearchOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-offcanvas.component.html */ 98022);
/* harmony import */ var _search_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-offcanvas.component.scss */ 67525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);





let SearchOffcanvasComponent = class SearchOffcanvasComponent {
    constructor(layout) {
        this.layout = layout;
    }
    ngOnInit() {
        this.extrasSearchOffcanvasDirectionCSSClass = `offcanvas-${this.layout.getProp('extras.search.offcanvas.direction')}`;
    }
};
SearchOffcanvasComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
SearchOffcanvasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-search-offcanvas',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchOffcanvasComponent);



/***/ }),

/***/ 50456:
/*!*******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/user-offcanvas/user-offcanvas.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserOffcanvasComponent": () => (/* binding */ UserOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-offcanvas.component.html */ 31960);
/* harmony import */ var _user_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-offcanvas.component.scss */ 90205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core */ 39123);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../modules/auth/_services/auth.service */ 69380);






let UserOffcanvasComponent = class UserOffcanvasComponent {
    constructor(layout, auth) {
        this.layout = layout;
        this.auth = auth;
        this.extrasUserOffcanvasDirection = 'offcanvas-right';
    }
    ngOnInit() {
        this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp('extras.user.offcanvas.direction')}`;
        this.user$ = this.auth.currentUserSubject.asObservable();
    }
    logout() {
        this.auth.logout();
        document.location.reload();
    }
};
UserOffcanvasComponent.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
UserOffcanvasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-offcanvas',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_offcanvas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_offcanvas_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserOffcanvasComponent);



/***/ }),

/***/ 21648:
/*!*************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/scroll-top/scroll-top.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": () => (/* binding */ ScrollTopComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scroll_top_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./scroll-top.component.html */ 19870);
/* harmony import */ var _scroll_top_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-top.component.scss */ 38439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _assets_js_layout_extended_scrolltop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/js/layout/extended/scrolltop */ 76170);
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../assets/js/components/util */ 66190);






let ScrollTopComponent = class ScrollTopComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        _assets_js_components_util__WEBPACK_IMPORTED_MODULE_3__.KTUtil.ready(() => {
            // Init Scrolltop
            _assets_js_layout_extended_scrolltop__WEBPACK_IMPORTED_MODULE_2__["default"].init('kt_scrolltop');
        });
    }
};
ScrollTopComponent.ctorParameters = () => [];
ScrollTopComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-scroll-top',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scroll_top_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_scroll_top_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScrollTopComponent);



/***/ }),

/***/ 69986:
/*!*******************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/toolbar/toolbar.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./toolbar.component.html */ 785);
/* harmony import */ var _toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.component.scss */ 84557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let ToolbarComponent = class ToolbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToBuilder() {
        this.router.navigate(['/builder']);
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-toolbar',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToolbarComponent);



/***/ }),

/***/ 61488:
/*!********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/_models/subheader.model.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubheaderModel": () => (/* binding */ SubheaderModel)
/* harmony export */ });
class SubheaderModel {
    constructor() {
        this.breadcrumbs = [];
        this.title = '';
    }
}


/***/ }),

/***/ 80832:
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/_services/subheader.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubheaderService": () => (/* binding */ SubheaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 58824);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _models_subheader_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/subheader.model */ 61488);
/* harmony import */ var _configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../configs/dynamic-aside-menu.config */ 13933);






// kt_header_menu
// kt_aside_menu
let SubheaderService = class SubheaderService {
    constructor(layout) {
        this.layout = layout;
        this.titleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('Dashboard');
        this.descriptionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.breadCrumbsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.subheaderVersionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('v1'); // [1-6]
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.setDefaultSubheader();
    }
    setDefaultSubheader() {
        this.setSubheaderVersion(this.layout.getProp('subheader.layoutVersion'));
    }
    setBreadcrumbs(breadcrumbs = []) {
        this.breadCrumbsSubject.next(breadcrumbs);
    }
    setTitle(title = '') {
        this.titleSubject.next(title);
    }
    setDescription(description) {
        this.descriptionSubject.next(description);
    }
    setSubheaderVersion(version = 'v1') {
        this.subheaderVersionSubject.next(version);
    }
    // use this method in SubheaderWrapper
    updateAfterRouteChanges(pathName) {
        const aside = this.getBreadcrumbsAndTitleNewFromAside(pathName.split("?")[0]);
        const header = this.getBreadcrumbsAndTitle('kt_header_menu', pathName);
        const breadcrumbs = aside && aside.breadcrumbs.length > 0
            ? aside.breadcrumbs
            : header.breadcrumbs;
        this.setBreadcrumbs(breadcrumbs);
        this.setTitle(aside && aside.title && aside.title.length > 0
            ? aside.title
            : header.title);
    }
    getBreadcrumbsAndTitleNewFromAside(pathName) {
        const result = new _models_subheader_model__WEBPACK_IMPORTED_MODULE_1__.SubheaderModel();
        const menus = _configs_dynamic_aside_menu_config__WEBPACK_IMPORTED_MODULE_2__.DynamicAsideMenuConfig;
        let breakBol = false;
        for (let menu of menus.items) {
            let breadCrumbs = [];
            breadCrumbs.push({
                title: menu.title,
                linkPath: menu.page,
                linkText: menu.title,
            });
            if (menu.submenu) {
                for (let sub of menu.submenu) {
                    if (pathName == sub.page) {
                        breadCrumbs.push({
                            title: sub.title,
                            linkPath: sub.page,
                            linkText: sub.title,
                        });
                        result.title = sub.title;
                        breakBol = true;
                        break;
                    }
                    if (sub.submenu) {
                        breadCrumbs.push({
                            title: sub.title,
                            linkPath: sub.page,
                            linkText: sub.title,
                        });
                        for (let item of sub.submenu) {
                            if (pathName == item.page) {
                                breadCrumbs.push({
                                    title: item.title,
                                    linkPath: item.page,
                                    linkText: item.title,
                                });
                                result.title = item.title;
                                breakBol = true;
                                break;
                            }
                        }
                    }
                    if (breakBol)
                        break;
                }
            }
            if (breakBol) {
                result.breadcrumbs = breadCrumbs;
                break;
            }
            result.breadcrumbs = breadCrumbs;
            if (pathName == menu.page) {
                result.breadcrumbs = breadCrumbs;
                result.title = menu.title;
                break;
            }
        }
        return result;
    }
    getLinksFromMenu(menu) {
        const parentLiElements = Array.from(menu.getElementsByClassName('menu-item-open') || []);
        const childLiElements = Array.from(menu.getElementsByClassName('menu-item-active') || []);
        const result = [];
        parentLiElements.forEach((el) => {
            const links = Array.from(el.getElementsByClassName('menu-link') || []);
            if (links && links.length > 0) {
                const aLink = links[0];
                if (aLink.href &&
                    aLink.href.length &&
                    aLink.href.length > 0 &&
                    aLink.innerHTML !== '/') {
                    result.push(aLink);
                }
            }
        });
        childLiElements.forEach((el) => {
            const links = Array.from(el.getElementsByClassName('menu-link') || []);
            if (links && links.length > 0) {
                const aLink = links[0];
                if (aLink.href &&
                    aLink.href.length &&
                    aLink.href.length > 0 &&
                    aLink.innerHTML !== '/') {
                    result.push(aLink);
                }
            }
        });
        return result;
    }
    getBreadcrumbsAndTitle(menuId, pathName) {
        const result = new _models_subheader_model__WEBPACK_IMPORTED_MODULE_1__.SubheaderModel();
        const menu = document.getElementById(menuId);
        if (!menu) {
            return result;
        }
        const activeLinksArray = this.getLinksFromMenu(menu);
        const activeLinks = activeLinksArray.filter((el) => el.tagName === 'A');
        if (!activeLinks) {
            return result;
        }
        activeLinks.forEach((link) => {
            const titleSpans = link.getElementsByClassName('menu-text');
            if (titleSpans) {
                const titleSpan = Array.from(titleSpans).find((t) => t.innerHTML && t.innerHTML.trim().length > 0);
                if (titleSpan) {
                    result.breadcrumbs.push({
                        title: titleSpan.innerHTML,
                        linkPath: link.pathname,
                        linkText: titleSpan.innerHTML,
                    });
                }
            }
        });
        result.title = this.getTitle(result.breadcrumbs, pathName);
        return result;
    }
    parseUrlAndReturnPathname(href) {
        const url = document.createElement('a');
        url.href =
            'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
        return url.pathname;
    }
    getTitle(breadCrumbs, pathname) {
        if (!breadCrumbs || !pathname) {
            return '';
        }
        const length = breadCrumbs.length;
        if (!length) {
            return '';
        }
        return breadCrumbs[length - 1].title;
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
};
SubheaderService.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_0__.LayoutService }
];
SubheaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], SubheaderService);



/***/ }),

/***/ 12438:
/*!******************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader-wrapper/subheader-wrapper.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubheaderWrapperComponent": () => (/* binding */ SubheaderWrapperComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader-wrapper.component.html */ 41031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/js/components/util */ 66190);
/* harmony import */ var _assets_js_layout_base_subheader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../assets/js/layout/base/subheader */ 289);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 31569);








let SubheaderWrapperComponent = class SubheaderWrapperComponent {
    constructor(subheader, router) {
        this.subheader = subheader;
        this.router = router;
        this.subheader.setDefaultSubheader();
        this.subheaderVersion$ = this.subheader.subheaderVersionSubject.asObservable();
        const initSubheader = () => {
            setTimeout(() => {
                this.subheader.updateAfterRouteChanges(this.router.url);
            }, 0);
        };
        initSubheader();
        // subscribe to router events
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ResolveEnd))
            .subscribe(initSubheader);
    }
    ngOnInit() { }
    ngAfterViewInit() {
        _assets_js_components_util__WEBPACK_IMPORTED_MODULE_2__.KTUtil.ready(() => {
            _assets_js_layout_base_subheader__WEBPACK_IMPORTED_MODULE_3__["default"].init('kt_subheader');
        });
    }
};
SubheaderWrapperComponent.ctorParameters = () => [
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_1__.SubheaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SubheaderWrapperComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-subheader-wrapper',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader_wrapper_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], SubheaderWrapperComponent);



/***/ }),

/***/ 75628:
/*!*************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubheaderModule": () => (/* binding */ SubheaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _subheader1_subheader1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subheader1/subheader1.component */ 18572);
/* harmony import */ var _subheader2_subheader2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subheader2/subheader2.component */ 91127);
/* harmony import */ var _subheader3_subheader3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subheader3/subheader3.component */ 94515);
/* harmony import */ var _subheader4_subheader4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subheader4/subheader4.component */ 78127);
/* harmony import */ var _subheader5_subheader5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subheader5/subheader5.component */ 87396);
/* harmony import */ var _subheader6_subheader6_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subheader6/subheader6.component */ 18990);
/* harmony import */ var _subheader7_subheader7_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subheader7/subheader7.component */ 80084);
/* harmony import */ var _subheader_wrapper_subheader_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subheader-wrapper/subheader-wrapper.component */ 12438);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../content/dropdown-menus/dropdown-menus.module */ 11735);















let SubheaderModule = class SubheaderModule {
};
SubheaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _subheader1_subheader1_component__WEBPACK_IMPORTED_MODULE_1__.Subheader1Component,
            _subheader2_subheader2_component__WEBPACK_IMPORTED_MODULE_2__.Subheader2Component,
            _subheader3_subheader3_component__WEBPACK_IMPORTED_MODULE_3__.Subheader3Component,
            _subheader4_subheader4_component__WEBPACK_IMPORTED_MODULE_4__.Subheader4Component,
            _subheader5_subheader5_component__WEBPACK_IMPORTED_MODULE_5__.Subheader5Component,
            _subheader6_subheader6_component__WEBPACK_IMPORTED_MODULE_6__.Subheader6Component,
            _subheader7_subheader7_component__WEBPACK_IMPORTED_MODULE_7__.Subheader7Component,
            _subheader_wrapper_subheader_wrapper_component__WEBPACK_IMPORTED_MODULE_8__.SubheaderWrapperComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownModule,
            _content_dropdown_menus_dropdown_menus_module__WEBPACK_IMPORTED_MODULE_9__.DropdownMenusModule,
        ],
        exports: [_subheader_wrapper_subheader_wrapper_component__WEBPACK_IMPORTED_MODULE_8__.SubheaderWrapperComponent],
    })
], SubheaderModule);



/***/ }),

/***/ 18572:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader1/subheader1.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader1Component": () => (/* binding */ Subheader1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader1.component.html */ 94340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);





let Subheader1Component = class Subheader1Component {
    constructor(layout, subheader, cdr) {
        this.layout = layout;
        this.subheader = subheader;
        this.cdr = cdr;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.breadcrumbs = [];
        this.title$ = this.subheader.titleSubject.asObservable();
    }
    ngOnInit() {
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
        this.breadcrumbs$.subscribe((res) => {
            this.breadcrumbs = res;
            this.cdr.detectChanges();
        });
    }
};
Subheader1Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__.SubheaderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
];
Subheader1Component.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
Subheader1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-subheader1',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader1Component);



/***/ }),

/***/ 91127:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader2/subheader2.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader2Component": () => (/* binding */ Subheader2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader2.component.html */ 13029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);





let Subheader2Component = class Subheader2Component {
    constructor(layout, subheader) {
        this.layout = layout;
        this.subheader = subheader;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
    }
    ngOnInit() {
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
    }
};
Subheader2Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__.SubheaderService }
];
Subheader2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-subheader2',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader2Component);



/***/ }),

/***/ 94515:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader3/subheader3.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader3Component": () => (/* binding */ Subheader3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader3.component.html */ 85342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);





let Subheader3Component = class Subheader3Component {
    constructor(layout, subheader) {
        this.layout = layout;
        this.subheader = subheader;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
    }
    ngOnInit() {
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
    }
};
Subheader3Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__.SubheaderService }
];
Subheader3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-subheader3',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader3Component);



/***/ }),

/***/ 78127:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader4/subheader4.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader4Component": () => (/* binding */ Subheader4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader4.component.html */ 30937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);





let Subheader4Component = class Subheader4Component {
    constructor(layout, subheader) {
        this.layout = layout;
        this.subheader = subheader;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
    }
    ngOnInit() {
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
    }
};
Subheader4Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__.SubheaderService }
];
Subheader4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-subheader4',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader4_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader4Component);



/***/ }),

/***/ 87396:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader5/subheader5.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader5Component": () => (/* binding */ Subheader5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader5.component.html */ 86216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core */ 39123);





let Subheader5Component = class Subheader5Component {
    constructor(layout, subheader) {
        this.layout = layout;
        this.subheader = subheader;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
    }
    ngOnInit() {
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
    }
};
Subheader5Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_1__.SubheaderService }
];
Subheader5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-subheader5',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader5_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader5Component);



/***/ }),

/***/ 18990:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader6/subheader6.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader6Component": () => (/* binding */ Subheader6Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader6_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader6.component.html */ 50681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);





let Subheader6Component = class Subheader6Component {
    constructor(layout, subheader) {
        this.layout = layout;
        this.subheader = subheader;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
    }
    ngOnInit() {
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
    }
};
Subheader6Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__.SubheaderService }
];
Subheader6Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-subheader6',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader6_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader6Component);



/***/ }),

/***/ 80084:
/*!****************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/subheader/subheader7/subheader7.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subheader7Component": () => (/* binding */ Subheader7Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader7_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./subheader7.component.html */ 70935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core */ 39123);
/* harmony import */ var _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/subheader.service */ 80832);





let Subheader7Component = class Subheader7Component {
    constructor(layout, subheader) {
        this.layout = layout;
        this.subheader = subheader;
        this.subheaderCSSClasses = '';
        this.subheaderContainerCSSClasses = '';
        this.subheaderMobileToggle = false;
        this.subheaderDisplayDesc = false;
        this.subheaderDisplayDaterangepicker = false;
        this.title$ = this.subheader.titleSubject.asObservable();
        this.breadcrumbs$ = this.subheader.breadCrumbsSubject.asObservable();
        this.description$ = this.subheader.descriptionSubject.asObservable();
    }
    ngOnInit() {
        this.subheaderCSSClasses = this.layout.getStringCSSClasses('subheader');
        this.subheaderContainerCSSClasses = this.layout.getStringCSSClasses('subheader_container');
        this.subheaderMobileToggle = this.layout.getProp('subheader.mobileToggle');
        this.subheaderDisplayDesc = this.layout.getProp('subheader.displayDesc');
        this.subheaderDisplayDaterangepicker = this.layout.getProp('subheader.displayDaterangepicker');
    }
};
Subheader7Component.ctorParameters = () => [
    { type: _core__WEBPACK_IMPORTED_MODULE_1__.LayoutService },
    { type: _services_subheader_service__WEBPACK_IMPORTED_MODULE_2__.SubheaderService }
];
Subheader7Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-subheader7',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_subheader7_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], Subheader7Component);



/***/ }),

/***/ 77319:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/_layout/components/aside-dynamic/aside-dynamic.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideDynamicComponent": () => (/* binding */ AsideDynamicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_aside_dynamic_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./aside-dynamic.component.html */ 59745);
/* harmony import */ var _aside_dynamic_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside-dynamic.component.scss */ 17031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 31569);
/* harmony import */ var src_app_modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/auth/_services/user-profile.service */ 55631);
/* harmony import */ var src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_metronic/shared/crud-table/services/database.service */ 17371);
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/auth */ 67198);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);










let AsideDynamicComponent = class AsideDynamicComponent {
    constructor(layout, router, menu, auth, cdr, databaseService, userService) {
        this.layout = layout;
        this.router = router;
        this.menu = menu;
        this.auth = auth;
        this.cdr = cdr;
        this.databaseService = databaseService;
        this.userService = userService;
        this.subscriptions = [];
        this.asideMenuHTMLAttributes = {};
        this.asideMenuScroll = 1;
        this.asideSelfMinimizeToggle = false;
        this.role = '';
        this.userAccess = [
            "Administration", "Setup", "Report"
        ];
    }
    ngOnInit() {
        // load view settings
        this.role = this.getLoginUserRole();
        this.disableAsideSelfDisplay =
            this.layout.getProp('aside.self.display') === false;
        this.brandSkin = this.layout.getProp('brand.self.theme');
        this.headerLogo = this.getLogo();
        this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
        this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
        this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
        this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
        this.brandClasses = this.layout.getProp('brand');
        this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle');
        this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
        // this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${this.asideMenuScroll === 1 ? 'scroll my-4 ps ps--active-y' : ''}`;
        // router subscription
        this.currentUrl = this.router.url.split(/[?#]/)[0];
        const routerSubscr = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe((event) => {
            this.currentUrl = event.url;
            this.cdr.detectChanges();
        });
        this.subscriptions.push(routerSubscr);
        // menu load
        const menuSubscr = this.menu.menuConfig$.subscribe(res => {
            if (this.userService.userInfo.userRole == 'USR') {
                for (var i = res.items.length - 1; i >= 0; i--) {
                    for (var j = 0; j < this.userAccess.length; j++) {
                        if (res.items[i].title === this.userAccess[j]) {
                            res.items.splice(i, 1);
                        }
                    }
                }
            }
            this.menuConfig = res;
            this.cdr.detectChanges();
        });
        this.subscriptions.push(menuSubscr);
    }
    getLogo() {
        return './assets/LOGO1.png';
        if (this.brandSkin === 'light') {
            return './assets/media/logo_text_blue.png';
        }
        else {
            return './assets/media/bss_logo_white.png';
        }
    }
    getLoginUserRole() {
        console.log(this.userService.userInfo);
        return this.userService.userInfo.userRole;
    }
    isMenuItemActive(path) {
        if (!this.currentUrl || !path) {
            return false;
        }
        if (this.currentUrl === path) {
            return true;
        }
        if (this.currentUrl.indexOf(path) > -1) {
            return true;
        }
        return false;
    }
    logout() {
        this.router.navigate(['auth']);
        // this.auth.logout();
        // document.location.reload();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
};
AsideDynamicComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.LayoutService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.DynamicAsideMenuService },
    { type: _modules_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: src_app_metronic_shared_crud_table_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: src_app_modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_2__.UserProfileService }
];
AsideDynamicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-aside-dynamic',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_aside_dynamic_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_aside_dynamic_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsideDynamicComponent);



/***/ }),

/***/ 62078:
/*!*******************************************************************!*\
  !*** ./src/app/pages/_layout/components/aside/aside.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsideComponent": () => (/* binding */ AsideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_aside_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./aside.component.html */ 87898);
/* harmony import */ var _aside_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aside.component.scss */ 91102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);






let AsideComponent = class AsideComponent {
    constructor(layout, loc) {
        this.layout = layout;
        this.loc = loc;
        this.asideMenuHTMLAttributes = {};
        this.asideMenuScroll = 1;
        this.asideSelfMinimizeToggle = false;
    }
    ngOnInit() {
        // load view settings
        this.disableAsideSelfDisplay =
            this.layout.getProp('aside.self.display') === false;
        this.brandSkin = this.layout.getProp('brand.self.theme');
        this.headerLogo = this.getLogo();
        this.ulCSSClasses = this.layout.getProp('aside_menu_nav');
        this.asideMenuCSSClasses = this.layout.getStringCSSClasses('aside_menu');
        this.asideMenuHTMLAttributes = this.layout.getHTMLAttributes('aside_menu');
        this.asideMenuDropdown = this.layout.getProp('aside.menu.dropdown') ? '1' : '0';
        this.brandClasses = this.layout.getProp('brand');
        this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle');
        this.asideMenuScroll = this.layout.getProp('aside.menu.scroll') ? 1 : 0;
        // this.asideMenuCSSClasses = `${this.asideMenuCSSClasses} ${this.asideMenuScroll === 1 ? 'scroll my-4 ps ps--active-y' : ''}`;
        // Routing
        this.location = this.loc;
    }
    getLogo() {
        if (this.brandSkin === 'light') {
            return './assets/media/logos/logo-dark.png';
        }
        else {
            return './assets/media/logos/logo-light.png';
        }
    }
};
AsideComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
AsideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-aside',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_aside_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_aside_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsideComponent);



/***/ }),

/***/ 82400:
/*!*********************************************************************!*\
  !*** ./src/app/pages/_layout/components/footer/footer.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 52804);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 13524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);
/* harmony import */ var _assets_js_layout_base_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/footer */ 22667);






let FooterComponent = class FooterComponent {
    constructor(layout) {
        this.layout = layout;
        const currentDate = new Date();
        this.currentYear = currentDate.getFullYear().toString();
    }
    ngOnInit() {
        this.footerContainerCSSClasses = this.layout.getStringCSSClasses('footer_container');
    }
    ngAfterViewInit() {
        // Init Footer
        _assets_js_layout_base_footer__WEBPACK_IMPORTED_MODULE_3__["default"].init('kt_footer');
    }
};
FooterComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-footer',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 25376:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/_layout/components/header-mobile/header-mobile.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMobileComponent": () => (/* binding */ HeaderMobileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_mobile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-mobile.component.html */ 33760);
/* harmony import */ var _header_mobile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-mobile.component.scss */ 61711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);





let HeaderMobileComponent = class HeaderMobileComponent {
    constructor(layout) {
        this.layout = layout;
        this.headerLogo = '';
        this.asideSelfDisplay = true;
        this.headerMenuSelfDisplay = true;
        this.headerMobileClasses = '';
        this.headerMobileAttributes = {};
    }
    ngOnInit() {
        // build view by layout config settings
        this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile');
        this.headerMobileAttributes = this.layout.getHTMLAttributes('header_mobile');
        this.headerLogo = this.getLogoUrl();
        this.asideSelfDisplay = this.layout.getProp('aside.self.display');
        this.headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
    }
    ngAfterViewInit() {
        // Init Header Topbar For Mobile Mode
        // KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');
    }
    getLogoUrl() {
        const headerSelfTheme = this.layout.getProp('header.self.theme') || '';
        const brandSelfTheme = this.layout.getProp('brand.self.theme') || '';
        let result = 'LOGO1.png';
        if (!this.asideSelfDisplay) {
            if (headerSelfTheme === 'light') {
                result = 'LOGO1.png';
            }
        }
        else {
            if (brandSelfTheme === 'light') {
                result = 'LOGO1.png';
            }
        }
        // assets/images/kbzms.png
        return `./assets/${result}`;
    }
};
HeaderMobileComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
HeaderMobileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header-mobile',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_mobile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_mobile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderMobileComponent);



/***/ }),

/***/ 86800:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/_layout/components/header/header-menu-dynamic/header-menu-dynamic.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMenuDynamicComponent": () => (/* binding */ HeaderMenuDynamicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_menu_dynamic_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-menu-dynamic.component.html */ 3597);
/* harmony import */ var _header_menu_dynamic_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-menu-dynamic.component.scss */ 14959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 31569);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_metronic/core */ 39123);







let HeaderMenuDynamicComponent = class HeaderMenuDynamicComponent {
    constructor(layout, router, menu, cdr) {
        this.layout = layout;
        this.router = router;
        this.menu = menu;
        this.cdr = cdr;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.ulCSSClasses = this.layout.getStringCSSClasses('header_menu_nav');
        this.rootArrowEnabled = this.layout.getProp('header.menu.self.rootArrow');
        this.headerMenuDesktopToggle = this.layout.getProp('header.menu.desktop.toggle');
        // router subscription
        this.currentUrl = this.router.url.split(/[?#]/)[0];
        const routerSubscr = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe((event) => {
            this.currentUrl = event.url;
            this.cdr.detectChanges();
        });
        this.subscriptions.push(routerSubscr);
        // menu load
        const menuSubscr = this.menu.menuConfig$.subscribe(res => {
            this.menuConfig = res;
            this.cdr.detectChanges();
        });
        this.subscriptions.push(menuSubscr);
    }
    isMenuItemActive(path) {
        if (!this.currentUrl || !path) {
            return false;
        }
        if (this.currentUrl === path) {
            return true;
        }
        if (this.currentUrl.indexOf(path) > -1) {
            return true;
        }
        return false;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }
};
HeaderMenuDynamicComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.DynamicHeaderMenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
HeaderMenuDynamicComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header-menu-dynamic',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_menu_dynamic_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_menu_dynamic_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderMenuDynamicComponent);



/***/ }),

/***/ 40602:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/_layout/components/header/header-menu/header-menu.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMenuComponent": () => (/* binding */ HeaderMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header-menu.component.html */ 54780);
/* harmony import */ var _header_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-menu.component.scss */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_metronic/core */ 39123);






function getCurrentURL(location) {
    return location.split(/[?#]/)[0];
}
let HeaderMenuComponent = class HeaderMenuComponent {
    constructor(layout, loc) {
        this.layout = layout;
        this.loc = loc;
        this.location = this.loc;
    }
    ngOnInit() {
        this.ulCSSClasses = this.layout.getStringCSSClasses('header_menu_nav');
        this.rootArrowEnabled = this.layout.getProp('header.menu.self.rootArrow');
        this.headerMenuDesktopToggle = this.layout.getProp('header.menu.desktop.toggle');
    }
    getMenuItemActive(url) {
        return this.checkIsActive(url) ? 'menu-item-active' : '';
    }
    checkIsActive(url) {
        const location = this.location.path();
        const current = getCurrentURL(location);
        if (!current || !url) {
            return false;
        }
        if (current === url) {
            return true;
        }
        if (current.indexOf(url) > -1) {
            return true;
        }
        return false;
    }
};
HeaderMenuComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
HeaderMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header-menu',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderMenuComponent);



/***/ }),

/***/ 63425:
/*!*********************************************************************!*\
  !*** ./src/app/pages/_layout/components/header/header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 76656);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 44868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);
/* harmony import */ var _assets_js_layout_base_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/header */ 61597);
/* harmony import */ var _assets_js_layout_base_header_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/header-menu */ 6589);
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/js/components/util */ 66190);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 58824);










let HeaderComponent = class HeaderComponent {
    constructor(layout, router) {
        this.layout = layout;
        this.router = router;
        this.headerMenuHTMLAttributes = {};
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.loader$ = this.loaderSubject;
        // page progress bar percentage
        const routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart) {
                // set page progress bar loading to start on NavigationStart event router
                this.loaderSubject.next(10);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteConfigLoadStart) {
                this.loaderSubject.next(65);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteConfigLoadEnd) {
                this.loaderSubject.next(90);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationCancel) {
                // set page progress bar loading to end on NavigationEnd event router
                this.loaderSubject.next(100);
                if (this.routerLoaderTimout) {
                    clearTimeout(this.routerLoaderTimout);
                }
                this.routerLoaderTimout = setTimeout(() => {
                    this.loaderSubject.next(0);
                }, 300);
            }
        });
        this.unsubscribe.push(routerSubscription);
    }
    ngOnInit() {
        this.headerContainerCSSClasses = this.layout.getStringCSSClasses('header_container');
        this.headerMenuSelfDisplay = this.layout.getProp('header.menu.self.display');
        this.headerMenuSelfStatic = this.layout.getProp('header.menu.self.static');
        this.asideSelfDisplay = this.layout.getProp('aside.self.display');
        this.headerSelfTheme = this.layout.getProp('header.self.theme') || '';
        this.headerLogo = this.getLogoURL();
        this.headerMenuCSSClasses = this.layout.getStringCSSClasses('header_menu');
        this.headerMenuHTMLAttributes = this.layout.getHTMLAttributes('header_menu');
    }
    getLogoURL() {
        let result = 'logo-light.png';
        if (this.headerSelfTheme && this.headerSelfTheme === 'light') {
            result = 'logo-dark.png';
        }
        if (this.headerSelfTheme && this.headerSelfTheme === 'dark') {
            result = 'logo-dark.png';
        }
        return `./assets/media/logos/${result}`;
    }
    ngAfterViewInit() {
        if (this.ktHeaderMenu) {
            for (const key in this.headerMenuHTMLAttributes) {
                if (this.headerMenuHTMLAttributes.hasOwnProperty(key)) {
                    this.ktHeaderMenu.nativeElement.attributes[key] = this.headerMenuHTMLAttributes[key];
                }
            }
        }
        _assets_js_components_util__WEBPACK_IMPORTED_MODULE_5__.KTUtil.ready(() => {
            // Init Desktop & Mobile Headers
            _assets_js_layout_base_header__WEBPACK_IMPORTED_MODULE_3__["default"].init('kt_header', 'kt_header_mobile');
            // Init Header Menu
            _assets_js_layout_base_header_menu__WEBPACK_IMPORTED_MODULE_4__["default"].init('kt_header_menu', 'kt_header_menu_wrapper');
        });
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
        if (this.routerLoaderTimout) {
            clearTimeout(this.routerLoaderTimout);
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
HeaderComponent.propDecorators = {
    ktHeaderMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['ktHeaderMenu', { static: true },] }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-header',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 75244:
/*!*********************************************************************!*\
  !*** ./src/app/pages/_layout/components/topbar/topbar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_topbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./topbar.component.html */ 40742);
/* harmony import */ var _topbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.component.scss */ 50538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/auth/_services/auth.service */ 69380);
/* harmony import */ var _modules_auth_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/auth/_models/user.model */ 13902);
/* harmony import */ var _assets_js_layout_extended_quick_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/quick-search */ 48496);
/* harmony import */ var _assets_js_layout_extended_quick_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/quick-notifications */ 12643);
/* harmony import */ var _assets_js_layout_extended_quick_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/quick-actions */ 62973);
/* harmony import */ var _assets_js_layout_extended_quick_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/quick-cart */ 77605);
/* harmony import */ var _assets_js_layout_extended_quick_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/quick-panel */ 15538);
/* harmony import */ var _assets_js_layout_extended_quick_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../assets/js/layout/extended/quick-user */ 80088);
/* harmony import */ var _assets_js_layout_base_header_topbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/header-topbar */ 73175);
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../assets/js/components/util */ 66190);
/* harmony import */ var src_app_modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/auth/_services/user-profile.service */ 55631);
















let TopbarComponent = class TopbarComponent {
    constructor(layout, auth, userService) {
        this.layout = layout;
        this.auth = auth;
        this.userService = userService;
        this.currentUser = new _modules_auth_models_user_model__WEBPACK_IMPORTED_MODULE_4__.UserModel();
        this.user$ = this.auth.currentUserSubject.asObservable();
    }
    ngOnInit() {
        // this.currentUser.username=this.userService.userInfo.userName
        this.currentUser.username = 'Admin';
        // topbar extras
        this.extraSearchDisplay = this.layout.getProp('extras.search.display');
        this.extrasSearchLayout = this.layout.getProp('extras.search.layout');
        this.extrasNotificationsDisplay = this.layout.getProp('extras.notifications.display');
        this.extrasNotificationsLayout = this.layout.getProp('extras.notifications.layout');
        this.extrasQuickActionsDisplay = this.layout.getProp('extras.quickActions.display');
        this.extrasQuickActionsLayout = this.layout.getProp('extras.quickActions.layout');
        this.extrasCartDisplay = this.layout.getProp('extras.cart.display');
        this.extrasCartLayout = this.layout.getProp('extras.cart.layout');
        this.extrasLanguagesDisplay = this.layout.getProp('extras.languages.display');
        this.extrasUserDisplay = this.layout.getProp('extras.user.display');
        this.extrasUserLayout = this.layout.getProp('extras.user.layout');
        this.extrasQuickPanelDisplay = this.layout.getProp('extras.quickPanel.display');
        // this.user$.subscribe(res=>{
        //   this.currentUser = res
        // })
    }
    ngAfterViewInit() {
        _assets_js_components_util__WEBPACK_IMPORTED_MODULE_12__.KTUtil.ready(() => {
            // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
            // Add 'implements AfterViewInit' to the class.
            if (this.extraSearchDisplay && this.extrasSearchLayout === 'offcanvas') {
                _assets_js_layout_extended_quick_search__WEBPACK_IMPORTED_MODULE_5__["default"].init('kt_quick_search');
            }
            if (this.extrasNotificationsDisplay &&
                this.extrasNotificationsLayout === 'offcanvas') {
                // Init Quick Notifications Offcanvas Panel
                _assets_js_layout_extended_quick_notifications__WEBPACK_IMPORTED_MODULE_6__["default"].init('kt_quick_notifications');
            }
            if (this.extrasQuickActionsDisplay &&
                this.extrasQuickActionsLayout === 'offcanvas') {
                // Init Quick Actions Offcanvas Panel
                _assets_js_layout_extended_quick_actions__WEBPACK_IMPORTED_MODULE_7__["default"].init('kt_quick_actions');
            }
            if (this.extrasCartDisplay && this.extrasCartLayout === 'offcanvas') {
                // Init Quick Cart Panel
                _assets_js_layout_extended_quick_cart__WEBPACK_IMPORTED_MODULE_8__["default"].init('kt_quick_cart');
            }
            if (this.extrasQuickPanelDisplay) {
                // Init Quick Offcanvas Panel
                _assets_js_layout_extended_quick_panel__WEBPACK_IMPORTED_MODULE_9__["default"].init('kt_quick_panel');
            }
            if (this.extrasUserDisplay && this.extrasUserLayout === 'offcanvas') {
                // Init Quick User Panel
                _assets_js_layout_extended_quick_user__WEBPACK_IMPORTED_MODULE_10__["default"].init('kt_quick_user');
            }
            // Init Header Topbar For Mobile Mode
            _assets_js_layout_base_header_topbar__WEBPACK_IMPORTED_MODULE_11__["default"].init('kt_header_mobile_topbar_toggle');
        });
    }
};
TopbarComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService },
    { type: _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_modules_auth_services_user_profile_service__WEBPACK_IMPORTED_MODULE_13__.UserProfileService }
];
TopbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-topbar',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_topbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_topbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopbarComponent);



/***/ }),

/***/ 65447:
/*!**************************************************************************!*\
  !*** ./src/app/pages/_layout/init/scipts-init/scripts-init.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptsInitComponent": () => (/* binding */ ScriptsInitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scripts_init_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./scripts-init.component.html */ 97198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _assets_js_components_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/js/components/util */ 66190);
/* harmony import */ var _assets_js_layout_base_aside_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/aside-toggle */ 74360);
/* harmony import */ var _assets_js_layout_base_sticky_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/sticky-card */ 65214);
/* harmony import */ var _assets_js_layout_base_stretched_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/stretched-card */ 13484);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_metronic/core */ 39123);
/* harmony import */ var _assets_js_layout_base_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/brand */ 51205);
/* harmony import */ var _assets_js_layout_base_aside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/aside */ 79823);
/* harmony import */ var _assets_js_layout_base_aside_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../assets/js/layout/base/aside-menu */ 53750);











let ScriptsInitComponent = class ScriptsInitComponent {
    constructor(layout) {
        this.layout = layout;
        this.asideSelfMinimizeToggle = false;
    }
    ngOnInit() {
        this.asideSelfMinimizeToggle = this.layout.getProp('aside.self.minimize.toggle');
    }
    ngAfterViewInit() {
        _assets_js_components_util__WEBPACK_IMPORTED_MODULE_1__.KTUtil.ready(() => {
            // Init Brand Panel For Logo
            _assets_js_layout_base_brand__WEBPACK_IMPORTED_MODULE_6__["default"].init('kt_brand');
            // Init Aside
            _assets_js_layout_base_aside__WEBPACK_IMPORTED_MODULE_7__["default"].init('kt_aside');
            // Init Aside Menu
            _assets_js_layout_base_aside_menu__WEBPACK_IMPORTED_MODULE_8__["default"].init('kt_aside_menu');
            if (this.asideSelfMinimizeToggle) {
                // Init Aside Menu Toggle
                _assets_js_layout_base_aside_toggle__WEBPACK_IMPORTED_MODULE_2__["default"].init('kt_aside_toggle');
            }
            // Init Sticky Card
            _assets_js_layout_base_sticky_card__WEBPACK_IMPORTED_MODULE_3__["default"].init('kt_page_sticky_card');
            // Init Stretched Card
            _assets_js_layout_base_stretched_card__WEBPACK_IMPORTED_MODULE_4__["default"].init('kt_page_stretched_card');
        });
    }
};
ScriptsInitComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_5__.LayoutService }
];
ScriptsInitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-scripts-init',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scripts_init_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    })
], ScriptsInitComponent);



/***/ }),

/***/ 51557:
/*!***************************************************!*\
  !*** ./src/app/pages/_layout/layout.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./layout.component.html */ 49430);
/* harmony import */ var _layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss */ 65892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_metronic/core */ 39123);
/* harmony import */ var _assets_js_layout_base_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/layout/base/content */ 63643);






let LayoutComponent = class LayoutComponent {
    constructor(initService, layout) {
        this.initService = initService;
        this.layout = layout;
        // Public variables
        this.selfLayout = 'default';
        this.contentClasses = '';
        this.contentContainerClasses = '';
        this.subheaderDisplay = true;
        this.asideHTMLAttributes = {};
        this.headerMobileClasses = '';
        this.headerMobileAttributes = {};
        this.headerHTMLAttributes = {};
        // offcanvases
        this.extrasSearchOffcanvasDisplay = false;
        this.extrasNotificationsOffcanvasDisplay = false;
        this.extrasQuickActionsOffcanvasDisplay = false;
        this.extrasCartOffcanvasDisplay = false;
        this.extrasUserOffcanvasDisplay = false;
        this.extrasQuickPanelDisplay = false;
        this.extrasScrollTopDisplay = false;
        this.initService.init();
    }
    ngOnInit() {
        // build view by layout config settings
        this.selfLayout = this.layout.getProp('self.layout');
        this.asideSelfDisplay = this.layout.getProp('aside.self.display');
        this.asideMenuStatic = this.layout.getProp('aside.menu.static');
        this.subheaderDisplay = this.layout.getProp('subheader.display');
        this.contentClasses = this.layout.getStringCSSClasses('content');
        this.contentContainerClasses = this.layout.getStringCSSClasses('content_container');
        this.contentExtended = this.layout.getProp('content.extended');
        this.asideHTMLAttributes = this.layout.getHTMLAttributes('aside');
        this.asideCSSClasses = this.layout.getStringCSSClasses('aside');
        this.headerMobileClasses = this.layout.getStringCSSClasses('header_mobile');
        this.headerMobileAttributes = this.layout.getHTMLAttributes('header_mobile');
        this.footerDisplay = this.layout.getProp('footer.display');
        this.footerCSSClasses = this.layout.getStringCSSClasses('footer');
        this.headerCSSClasses = this.layout.getStringCSSClasses('header');
        this.headerHTMLAttributes = this.layout.getHTMLAttributes('header');
        // offcanvases
        if (this.layout.getProp('extras.search.display')) {
            this.extrasSearchOffcanvasDisplay =
                this.layout.getProp('extras.search.layout') === 'offcanvas';
        }
        if (this.layout.getProp('extras.notifications.display')) {
            this.extrasNotificationsOffcanvasDisplay =
                this.layout.getProp('extras.notifications.layout') === 'offcanvas';
        }
        if (this.layout.getProp('extras.quickActions.display')) {
            this.extrasQuickActionsOffcanvasDisplay =
                this.layout.getProp('extras.quickActions.layout') === 'offcanvas';
        }
        if (this.layout.getProp('extras.cart.display')) {
            this.extrasCartOffcanvasDisplay =
                this.layout.getProp('extras.cart.layout') === 'offcanvas';
        }
        if (this.layout.getProp('extras.user.display')) {
            this.extrasUserOffcanvasDisplay =
                this.layout.getProp('extras.user.layout') === 'offcanvas';
        }
        this.extrasQuickPanelDisplay = this.layout.getProp('extras.quickPanel.display');
        this.extrasScrollTopDisplay = this.layout.getProp('extras.scrolltop.display');
    }
    ngAfterViewInit() {
        if (this.ktAside) {
            for (const key in this.asideHTMLAttributes) {
                if (this.asideHTMLAttributes.hasOwnProperty(key)) {
                    this.ktAside.nativeElement.attributes[key] = this.asideHTMLAttributes[key];
                }
            }
        }
        if (this.ktHeaderMobile) {
            for (const key in this.headerMobileAttributes) {
                if (this.headerMobileAttributes.hasOwnProperty(key)) {
                    this.ktHeaderMobile.nativeElement.attributes[key] = this.headerMobileAttributes[key];
                }
            }
        }
        if (this.ktHeader) {
            for (const key in this.headerHTMLAttributes) {
                if (this.headerHTMLAttributes.hasOwnProperty(key)) {
                    this.ktHeader.nativeElement.attributes[key] = this.headerHTMLAttributes[key];
                }
            }
        }
        // Init Content
        _assets_js_layout_base_content__WEBPACK_IMPORTED_MODULE_3__["default"].init('kt_content');
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutInitService },
    { type: _metronic_core__WEBPACK_IMPORTED_MODULE_2__.LayoutService }
];
LayoutComponent.propDecorators = {
    ktAside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['ktAside', { static: true },] }],
    ktHeaderMobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['ktHeaderMobile', { static: true },] }],
    ktHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['ktHeader', { static: true },] }]
};
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-layout',
        template: _Users_khanttikyi_Workspace_MyWork_GALAXY_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutComponent);



/***/ }),

/***/ 20913:
/*!****************************************!*\
  !*** ./src/app/pages/layout.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-inline-svg */ 93181);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ 64205);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/layout.component */ 51557);
/* harmony import */ var _layout_init_scipts_init_scripts_init_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout/init/scipts-init/scripts-init.component */ 65447);
/* harmony import */ var _layout_components_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_layout/components/header-mobile/header-mobile.component */ 25376);
/* harmony import */ var _layout_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_layout/components/aside/aside.component */ 62078);
/* harmony import */ var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_layout/components/footer/footer.component */ 82400);
/* harmony import */ var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/components/header/header.component */ 63425);
/* harmony import */ var _layout_components_header_header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_layout/components/header/header-menu/header-menu.component */ 40602);
/* harmony import */ var _layout_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_layout/components/topbar/topbar.component */ 75244);
/* harmony import */ var _metronic_partials_layout_extras_extras_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_metronic/partials/layout/extras/extras.module */ 84353);
/* harmony import */ var _metronic_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_metronic/core */ 39123);
/* harmony import */ var _metronic_partials_layout_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_metronic/partials/layout/subheader/subheader.module */ 75628);
/* harmony import */ var _layout_components_aside_dynamic_aside_dynamic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_layout/components/aside-dynamic/aside-dynamic.component */ 77319);
/* harmony import */ var _layout_components_header_header_menu_dynamic_header_menu_dynamic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_layout/components/header/header-menu-dynamic/header-menu-dynamic.component */ 86800);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 18346);




















let LayoutModule = class LayoutModule {
};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
            _layout_init_scipts_init_scripts_init_component__WEBPACK_IMPORTED_MODULE_3__.ScriptsInitComponent,
            _layout_components_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_4__.HeaderMobileComponent,
            _layout_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__.AsideComponent,
            _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
            _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent,
            _layout_components_header_header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_8__.HeaderMenuComponent,
            _layout_components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_9__.TopbarComponent,
            _layout_components_aside_dynamic_aside_dynamic_component__WEBPACK_IMPORTED_MODULE_13__.AsideDynamicComponent,
            _layout_components_header_header_menu_dynamic_header_menu_dynamic_component__WEBPACK_IMPORTED_MODULE_14__.HeaderMenuDynamicComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule,
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_0__.InlineSVGModule,
            _metronic_partials_layout_extras_extras_module__WEBPACK_IMPORTED_MODULE_10__.ExtrasModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbProgressbarModule,
            _metronic_core__WEBPACK_IMPORTED_MODULE_11__.CoreModule,
            _metronic_partials_layout_subheader_subheader_module__WEBPACK_IMPORTED_MODULE_12__.SubheaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        ],
    })
], LayoutModule);



/***/ }),

/***/ 64205:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_layout/layout.component */ 51557);




const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 52070)).then((m) => m.DashboardModule),
            },
            {
                path: 'user-registration',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user-registration_user-registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user-registration/user-registration.module */ 96051)).then(m => m.UserRegistrationPageModule)
            },
            {
                path: 'user-role',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user-role_user-role_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user-role/user-role.module */ 24481)).then(m => m.UserRolePageModule)
            },
            {
                path: 'employee',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_employee_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee/employee.module */ 83310)).then(m => m.EmployeePageModule)
            },
            {
                path: 'attendance',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_attendance_attendance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./attendance/attendance.module */ 20830)).then(m => m.AttendancePageModule)
            },
            // {
            //   path: 'employee/add-new-employee',
            //   loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
            // },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                redirectTo: 'error/404',
            },
        ],
    },
    {
        path: 'attendance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_attendance_attendance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./attendance/attendance.module */ 20830)).then(m => m.AttendancePageModule)
    },
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagesRoutingModule);



/***/ }),

/***/ 87272:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu1/dropdown-menu1.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Navigation-->\r\n<ul class=\"navi navi-hover\">\r\n  <li class=\"navi-header font-weight-bold py-4\">\r\n    <span class=\"font-size-lg\">Choose Label:</span>\r\n    <i\r\n      class=\"flaticon2-information icon-md text-muted\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"right\"\r\n      title=\"Click to learn more...\"\r\n    ></i>\r\n  </li>\r\n  <li class=\"navi-separator mb-3 opacity-70\"></li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-text\">\r\n        <span class=\"label label-xl label-inline label-light-success\"\r\n          >Customer</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-text\">\r\n        <span class=\"label label-xl label-inline label-light-danger\"\r\n          >Partner</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-text\">\r\n        <span class=\"label label-xl label-inline label-light-warning\"\r\n          >Suplier</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-text\">\r\n        <span class=\"label label-xl label-inline label-light-primary\"\r\n          >Member</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-text\">\r\n        <span class=\"label label-xl label-inline label-light-dark\">Staff</span>\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-separator mt-3 opacity-70\"></li>\r\n  <li class=\"navi-footer py-4\">\r\n    <a class=\"btn btn-clean font-weight-bold btn-sm cursor-pointer\">\r\n      <i class=\"ki ki-plus icon-sm\"></i>\r\n      Add new\r\n    </a>\r\n  </li>\r\n</ul>\r\n<!--end::Navigation-->\r\n");

/***/ }),

/***/ 5102:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu2/dropdown-menu2.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Navigation-->\r\n<ul class=\"navi navi-hover\">\r\n  <li class=\"navi-header pb-1\">\r\n    <span class=\"text-primary text-uppercase font-weight-bold font-size-sm\"\r\n      >Add new:</span\r\n    >\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-shopping-cart-1\"></i></span>\r\n      <span class=\"navi-text\">Order</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-calendar-8\"></i></span>\r\n      <span class=\"navi-text\">Event</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-graph-1\"></i></span>\r\n      <span class=\"navi-text\">Report</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-rocket-1\"></i></span>\r\n      <span class=\"navi-text\">Post</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-writing\"></i></span>\r\n      <span class=\"navi-text\">File</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<!--end::Navigation-->\r\n");

/***/ }),

/***/ 5542:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu3/dropdown-menu3.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Naviigation-->\r\n<ul class=\"navi\">\r\n  <li class=\"navi-header font-weight-bold py-5\">\r\n    <span class=\"font-size-lg\">Add New:</span>\r\n    <i\r\n      class=\"flaticon2-information icon-md text-muted\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"right\"\r\n      title=\"Click to learn more...\"\r\n    ></i>\r\n  </li>\r\n  <li class=\"navi-separator mb-3 opacity-70\"></li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-shopping-cart-1\"></i></span>\r\n      <span class=\"navi-text\">Order</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"\r\n        ><i class=\"navi-icon flaticon2-calendar-8\"></i\r\n      ></span>\r\n      <span class=\"navi-text\">Members</span>\r\n      <span class=\"navi-label\">\r\n        <span class=\"label label-light-danger label-rounded font-weight-bold\"\r\n          >3</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"\r\n        ><i class=\"navi-icon flaticon2-telegram-logo\"></i\r\n      ></span>\r\n      <span class=\"navi-text\">Project</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"\r\n        ><i class=\"navi-icon flaticon2-new-email\"></i\r\n      ></span>\r\n      <span class=\"navi-text\">Record</span>\r\n      <span class=\"navi-label\">\r\n        <span class=\"label label-light-success label-rounded font-weight-bold\"\r\n          >5</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-separator mt-3 opacity-70\"></li>\r\n  <li class=\"navi-footer pt-5 pb-4\">\r\n    <a class=\"btn btn-light-primary font-weight-bolder btn-sm cursor-pointer\"\r\n      >More options</a\r\n    >\r\n    <a\r\n      class=\"btn btn-clean font-weight-bold btn-sm d-none cursor-pointer\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"right\"\r\n      title=\"Click to learn more...\"\r\n      >Learn more</a\r\n    >\r\n  </li>\r\n</ul>\r\n<!--end::Naviigation-->\r\n");

/***/ }),

/***/ 96259:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/content/dropdown-menus/dropdown-menu4/dropdown-menu4.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Navigation-->\r\n<ul class=\"navi navi-hover py-5\">\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-drop\"></i></span>\r\n      <span class=\"navi-text\">New Group</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-list-3\"></i></span>\r\n      <span class=\"navi-text\">Contacts</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-rocket-1\"></i></span>\r\n      <span class=\"navi-text\">Groups</span>\r\n      <span class=\"navi-link-badge\">\r\n        <span class=\"label label-light-primary label-inline font-weight-bold\"\r\n          >new</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-bell-2\"></i></span>\r\n      <span class=\"navi-text\">Calls</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-gear\"></i></span>\r\n      <span class=\"navi-text\">Settings</span>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"navi-separator my-3\"></li>\r\n\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-magnifier-tool\"></i></span>\r\n      <span class=\"navi-text\">Help</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"navi-item\">\r\n    <a class=\"navi-link cursor-pointer\">\r\n      <span class=\"navi-icon\"><i class=\"flaticon2-bell-2\"></i></span>\r\n      <span class=\"navi-text\">Privacy</span>\r\n      <span class=\"navi-link-badge\">\r\n        <span class=\"label label-light-danger label-rounded font-weight-bold\"\r\n          >5</span\r\n        >\r\n      </span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<!--end::Navigation-->\r\n");

/***/ }),

/***/ 68014:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/dropdown-inner/cart-dropdown-inner/cart-dropdown-inner.component.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"extrasCartDropdownStyle === 'light'\">\r\n  <!--begin::Header-->\r\n  <div class=\"d-flex align-items-center p-10 rounded-top bg-light\">\r\n    <span class=\"btn btn-md btn-icon bg-light-success mr-4\">\r\n      <i class=\"flaticon2-shopping-cart-1 text-success\"></i>\r\n    </span>\r\n    <h4 class=\"flex-grow-1 m-0 mr-3\">My Cart</h4>\r\n    <button type=\"button\" class=\"btn btn-success btn-sm\">2 Items</button>\r\n  </div>\r\n  <!--end::Header-->\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"extrasCartDropdownStyle === 'dark'\">\r\n  <!--begin::Header-->\r\n  <div\r\n    class=\"d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top\"\r\n    style=\"background-image: url('./assets/media/misc/bg-1.jpg');\"\r\n  >\r\n    <span class=\"btn btn-md btn-icon bg-white-o-15 mr-4\">\r\n      <i class=\"flaticon2-shopping-cart-1 text-success\"></i>\r\n    </span>\r\n    <h4 class=\"text-white m-0 flex-grow-1 mr-3\">My Cart</h4>\r\n    <button type=\"button\" class=\"btn btn-success btn-sm\">2 Items</button>\r\n  </div>\r\n  <!--end::Header-->\r\n</ng-container>\r\n\r\n<!--begin::Scroll-->\r\n<div\r\n  class=\"scroll scroll-push\"\r\n  data-scroll=\"true\"\r\n  style=\"position: relative; max-height: 250px;\"\r\n  perfectScrollbar\r\n>\r\n  <!--begin::Item-->\r\n  <div class=\"d-flex align-items-center justify-content-between p-8\">\r\n    <div class=\"d-flex flex-column mr-2\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"font-weight-bold text-dark-75 font-size-lg text-hover-primary\"\r\n      >\r\n        iBlender\r\n      </a>\r\n      <span class=\"text-muted\">\r\n        Best kichen gadget in 2020\r\n      </span>\r\n      <div class=\"d-flex align-items-center mt-2\">\r\n        <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n          >$ 350</span\r\n        >\r\n        <span class=\"text-muted mr-1\">for</span>\r\n        <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\">5</span>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n          ><i class=\"ki ki-minus icon-xs\"></i\r\n        ></a>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n          ><i class=\"ki ki-plus icon-xs\"></i\r\n        ></a>\r\n      </div>\r\n    </div>\r\n    <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n      <img src=\"./assets/media/stock-600x400/img-1.jpg\" title=\"\" alt=\"\" />\r\n    </a>\r\n  </div>\r\n  <!--end::Item-->\r\n\r\n  <!--begin::Separator-->\r\n  <div class=\"separator separator-solid\"></div>\r\n  <!--end::Separator-->\r\n\r\n  <!--begin::Item-->\r\n  <div class=\"d-flex align-items-center justify-content-between p-8\">\r\n    <div class=\"d-flex flex-column mr-2\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"font-weight-bold text-dark-75 font-size-lg text-hover-primary\"\r\n      >\r\n        SmartCleaner\r\n      </a>\r\n      <span class=\"text-muted\">\r\n        Smart tool for cooking\r\n      </span>\r\n      <div class=\"d-flex align-items-center mt-2\">\r\n        <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n          >$ 650</span\r\n        >\r\n        <span class=\"text-muted mr-1\">for</span>\r\n        <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\">4</span>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n          ><i class=\"ki ki-minus icon-xs\"></i\r\n        ></a>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n          ><i class=\"ki ki-plus icon-xs\"></i\r\n        ></a>\r\n      </div>\r\n    </div>\r\n    <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n      <img src=\"./assets/media/stock-600x400/img-2.jpg\" title=\"\" alt=\"\" />\r\n    </a>\r\n  </div>\r\n  <!--end::Item-->\r\n\r\n  <!--begin::Separator-->\r\n  <div class=\"separator separator-solid\"></div>\r\n  <!--end::Separator-->\r\n\r\n  <!--begin::Item-->\r\n  <div class=\"d-flex align-items-center justify-content-between p-8\">\r\n    <div class=\"d-flex flex-column mr-2\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"font-weight-bold text-dark-75 font-size-lg text-hover-primary\"\r\n      >\r\n        CameraMax\r\n      </a>\r\n      <span class=\"text-muted\">\r\n        Professional camera for edge cutting shots\r\n      </span>\r\n      <div class=\"d-flex align-items-center mt-2\">\r\n        <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n          >$ 150</span\r\n        >\r\n        <span class=\"text-muted mr-1\">for</span>\r\n        <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\">3</span>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n          ><i class=\"ki ki-minus icon-xs\"></i\r\n        ></a>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n          ><i class=\"ki ki-plus icon-xs\"></i\r\n        ></a>\r\n      </div>\r\n    </div>\r\n    <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n      <img src=\"./assets/media/stock-600x400/img-3.jpg\" title=\"\" alt=\"\" />\r\n    </a>\r\n  </div>\r\n  <!--end::Item-->\r\n\r\n  <!--begin::Separator-->\r\n  <div class=\"separator separator-solid\"></div>\r\n  <!--end::Separator-->\r\n\r\n  <!--begin::Item-->\r\n  <div class=\"d-flex align-items-center justify-content-between p-8\">\r\n    <div class=\"d-flex flex-column mr-2\">\r\n      <a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n        4DPrinter\r\n      </a>\r\n      <span class=\"text-muted\">\r\n        Manufactoring unique objects\r\n      </span>\r\n      <div class=\"d-flex align-items-center mt-2\">\r\n        <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n          >$ 1450</span\r\n        >\r\n        <span class=\"text-muted mr-1\">for</span>\r\n        <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\">7</span>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n          ><i class=\"ki ki-minus icon-xs\"></i\r\n        ></a>\r\n        <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n          ><i class=\"ki ki-plus icon-xs\"></i\r\n        ></a>\r\n      </div>\r\n    </div>\r\n    <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n      <img src=\"./assets/media/stock-600x400/img-4.jpg\" title=\"\" alt=\"\" />\r\n    </a>\r\n  </div>\r\n  <!--end::Item-->\r\n</div>\r\n<!--end::Scroll-->\r\n\r\n<!--begin::Summary-->\r\n<div class=\"p-8\">\r\n  <div class=\"d-flex align-items-center justify-content-between mb-4\">\r\n    <span class=\"font-weight-bold text-muted font-size-sm mr-2\">Total</span>\r\n    <span class=\"font-weight-bolder text-dark-50 text-right\">$1840.00</span>\r\n  </div>\r\n  <div class=\"d-flex align-items-center justify-content-between mb-7\">\r\n    <span class=\"font-weight-bold text-muted font-size-sm mr-2\">Sub total</span>\r\n    <span class=\"font-weight-bolder text-primary text-right\">$5640.00</span>\r\n  </div>\r\n  <div class=\"text-right\">\r\n    <button type=\"button\" class=\"btn btn-primary text-weight-bold\">\r\n      Place Order\r\n    </button>\r\n  </div>\r\n</div>\r\n<!--end::Summary-->\r\n");

/***/ }),

/***/ 87367:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/dropdown-inner/notifications-dropdown-inner/notifications-dropdown-inner.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Header-->\r\n<ng-container *ngIf=\"extrasNotificationsDropdownStyle === 'light'\">\r\n  <div class=\"d-flex flex-column pt-12 bg-dark-o-5 rounded-top\">\r\n    <!--begin::Title-->\r\n    <h4 class=\"d-flex flex-center\">\r\n      <span class=\"text-dark\">User Notifications</span>\r\n      <span\r\n        class=\"btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2\"\r\n        >23 new</span\r\n      >\r\n    </h4>\r\n    <!--end::Title-->\r\n\r\n    <!--begin::Tabs-->\r\n    <ul\r\n      class=\"nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary mt-3 px-8\"\r\n      role=\"tablist\"\r\n    >\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          (click)=\"setActiveTabId('topbar_notifications_notifications')\"\r\n          [ngClass]=\"getActiveCSSClasses('topbar_notifications_notifications')\"\r\n          >Alerts</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          (click)=\"setActiveTabId('topbar_notifications_events')\"\r\n          [ngClass]=\"getActiveCSSClasses('topbar_notifications_events')\"\r\n          >Events</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          (click)=\"setActiveTabId('topbar_notifications_logs')\"\r\n          [ngClass]=\"getActiveCSSClasses('topbar_notifications_logs')\"\r\n          >Logs</a\r\n        >\r\n      </li>\r\n    </ul>\r\n    <!--end::Tabs-->\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"extrasNotificationsDropdownStyle === 'dark'\">\r\n  <div\r\n    class=\"d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top\"\r\n    style=\"background-image: url('./assets/media/misc/bg-1.jpg');\"\r\n  >\r\n    <!--begin::Title-->\r\n    <h4 class=\"d-flex flex-center rounded-top\">\r\n      <span class=\"text-white\">User Notifications</span>\r\n      <span\r\n        class=\"btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2\"\r\n        >23 new</span\r\n      >\r\n    </h4>\r\n    <!--end::Title-->\r\n\r\n    <!--begin::Tabs-->\r\n    <ul\r\n      class=\"nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8\"\r\n      role=\"tablist\"\r\n    >\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          (click)=\"setActiveTabId('topbar_notifications_notifications')\"\r\n          [ngClass]=\"getActiveCSSClasses('topbar_notifications_notifications')\"\r\n          >Alerts</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          (click)=\"setActiveTabId('topbar_notifications_events')\"\r\n          [ngClass]=\"getActiveCSSClasses('topbar_notifications_events')\"\r\n          >Events</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          (click)=\"setActiveTabId('topbar_notifications_logs')\"\r\n          [ngClass]=\"getActiveCSSClasses('topbar_notifications_logs')\"\r\n          >Logs</a\r\n        >\r\n      </li>\r\n    </ul>\r\n    <!--end::Tabs-->\r\n  </div>\r\n</ng-container>\r\n<!--end::Header-->\r\n\r\n<!--begin::Content-->\r\n<div class=\"tab-content\">\r\n  <!--begin::Tabpane-->\r\n  <div\r\n    class=\"tab-pane p-8\"\r\n    id=\"topbar_notifications_notifications\"\r\n    role=\"tabpanel\"\r\n    [ngClass]=\"getActiveCSSClasses('topbar_notifications_notifications')\"\r\n  >\r\n    <!--begin::Scroll-->\r\n    <div\r\n      class=\"scroll pr-7 mr-n7 ps\"\r\n      style=\"position: relative; max-height: 300px;\"\r\n      perfectScrollbar\r\n    >\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-primary mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/Home/Library.svg'\"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-primary\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark text-hover-primary mb-1 font-size-lg\"\r\n            >Cool App</a\r\n          >\r\n          <span class=\"text-muted\">Marketing campaign planning</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-warning mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-warning\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark-75 text-hover-primary mb-1 font-size-lg\"\r\n            >Awesome SAAS</a\r\n          >\r\n          <span class=\"text-muted\">Project status update meeting</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-success mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"\r\n                './assets/media/svg/icons/Communication/Group-chat.svg'\r\n              \"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-success\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark text-hover-primary mb-1 font-size-lg\"\r\n            >Claudy Sys</a\r\n          >\r\n          <span class=\"text-muted\">Project Deployment & Launch</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-danger mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/General/Attachment2.svg'\"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-danger\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark text-hover-primary mb-1 font-size-lg\"\r\n            >Trilo Service</a\r\n          >\r\n          <span class=\"text-muted\">Analytics & Requirement Study</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-info mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"\r\n                './assets/media/svg/icons/Communication/Shield-user.svg'\r\n              \"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-info\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark text-hover-primary mb-1 font-size-lg\"\r\n            >Bravia SAAS</a\r\n          >\r\n          <span class=\"text-muted\">Reporting Application</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-danger mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"\r\n                './assets/media/svg/icons/Communication/Mail-notification.svg'\r\n              \"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-danger\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark text-hover-primary mb-1 font-size-lg\"\r\n            >Express Wind</a\r\n          >\r\n          <span class=\"text-muted\">Software Analytics & Design</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center mb-6\">\r\n        <!--begin::Symbol-->\r\n        <div class=\"symbol symbol-40 symbol-light-success mr-5\">\r\n          <span class=\"symbol-label\">\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/Design/Bucket.svg'\"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-xl svg-icon-success\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n        <!--end::Symbol-->\r\n\r\n        <!--begin::Text-->\r\n        <div class=\"d-flex flex-column font-weight-bold\">\r\n          <a href=\"#\" class=\"text-dark text-hover-primary mb-1 font-size-lg\"\r\n            >Bruk Fitness</a\r\n          >\r\n          <span class=\"text-muted\">Web Design & Development</span>\r\n        </div>\r\n        <!--end::Text-->\r\n      </div>\r\n      <!--end::Item-->\r\n    </div>\r\n    <!--end::Scroll-->\r\n\r\n    <!--begin::Action-->\r\n    <div class=\"d-flex flex-center pt-7\">\r\n      <a href=\"#\" class=\"btn btn-light-primary font-weight-bold text-center\"\r\n        >See All</a\r\n      >\r\n    </div>\r\n    <!--end::Action-->\r\n  </div>\r\n  <!--end::Tabpane-->\r\n\r\n  <!--begin::Tabpane-->\r\n  <div\r\n    class=\"tab-pane\"\r\n    id=\"topbar_notifications_events\"\r\n    role=\"tabpanel\"\r\n    [ngClass]=\"getActiveCSSClasses('topbar_notifications_events')\"\r\n  >\r\n    <!--begin::Nav-->\r\n    <div\r\n      class=\"navi navi-hover scroll my-4\"\r\n      data-scroll=\"true\"\r\n      style=\"position: relative; max-height: 300px;\"\r\n      perfectScrollbar\r\n    >\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-line-chart text-success\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New report has been received\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              23 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-paper-plane text-danger\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              Finance report has been generated\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              25 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-user flaticon2-line- text-success\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New order has been received\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              2 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-pin text-primary\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New customer is registered\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              3 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-sms text-danger\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              Application has been approved\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              3 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-pie-chart-3 text-warning\"></i>\r\n          </div>\r\n          <div class=\"navinavinavi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New file has been uploaded\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              5 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon-pie-chart-1 text-info\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New user feedback received\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              8 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-settings text-success\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              System reboot has been successfully completed\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              12 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon-safe-shield-protection text-primary\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New order has been placed\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              15 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-notification text-primary\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              Company meeting canceled\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              19 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-fax text-success\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New report has been received\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              23 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon-download-1 text-danger\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              Finance report has been generated\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              25 hrs ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon-security text-warning\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New customer comment recieved\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              2 days ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link\">\r\n          <div class=\"navi-icon mr-2\">\r\n            <i class=\"flaticon2-analytics-1 text-success\"></i>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold\">\r\n              New customer is registered\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              3 days ago\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n    </div>\r\n    <!--end::Nav-->\r\n  </div>\r\n  <!--end::Tabpane-->\r\n\r\n  <!--begin::Tabpane-->\r\n  <div\r\n    class=\"tab-pane\"\r\n    id=\"topbar_notifications_logs\"\r\n    role=\"tabpanel\"\r\n    [ngClass]=\"getActiveCSSClasses('topbar_notifications_logs')\"\r\n  >\r\n    <!--begin::Nav-->\r\n    <div class=\"d-flex flex-center text-center text-muted min-h-200px\">\r\n      All caught up!\r\n      <br />\r\n      No new notifications.\r\n    </div>\r\n    <!--end::Nav-->\r\n  </div>\r\n  <!--end::Tabpane-->\r\n</div>\r\n<!--end::Content-->\r\n");

/***/ }),

/***/ 21389:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/dropdown-inner/quick-actions-dropdown-inner/quick-actions-dropdown-inner.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin:Header-->\r\n<ng-container *ngIf=\"extrasQuickActionsDropdownStyle === 'light'\">\r\n  <div\r\n    class=\"d-flex flex-column flex-center py-10 bg-dark-o-5 rounded-top bg-light\"\r\n  >\r\n    <h4 class=\"text-dark font-weight-bold\">\r\n      Quick Actions\r\n    </h4>\r\n    <span class=\"btn btn-success btn-sm font-weight-bold font-size-sm mt-2\"\r\n      >23 tasks pending</span\r\n    >\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"extrasQuickActionsDropdownStyle === 'dark'\">\r\n  <div\r\n    class=\"d-flex flex-column flex-center py-10 bgi-size-cover bgi-no-repeat rounded-top\"\r\n    style=\"background-image: url('./assets/media/misc/bg-1.jpg');\"\r\n  >\r\n    <h4 class=\"text-white font-weight-bold\">\r\n      Quick Actions\r\n    </h4>\r\n    <span class=\"btn btn-success btn-sm font-weight-bold font-size-sm mt-2\"\r\n      >23 tasks pending</span\r\n    >\r\n  </div>\r\n</ng-container>\r\n<!--end:Header-->\r\n\r\n<!--begin:Nav-->\r\n<div class=\"row row-paddingless\">\r\n  <!--begin:Item-->\r\n  <div class=\"col-6\">\r\n    <a\r\n      href=\"#\"\r\n      class=\"d-block py-10 px-5 text-center bg-hover-light border-right border-bottom\"\r\n    >\r\n      <span\r\n        [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Euro.svg'\"\r\n        cacheSVG=\"true\"\r\n        class=\"svg-icon svg-icon-3x svg-icon-success m-0\"\r\n      ></span>\r\n      <span class=\"d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1\"\r\n        >Accounting</span\r\n      >\r\n      <span class=\"d-block text-dark-50 font-size-lg\">eCommerce</span>\r\n    </a>\r\n  </div>\r\n  <!--end:Item-->\r\n\r\n  <!--begin:Item-->\r\n  <div class=\"col-6\">\r\n    <a\r\n      href=\"#\"\r\n      class=\"d-block py-10 px-5 text-center bg-hover-light border-bottom\"\r\n    >\r\n      <span\r\n        [inlineSVG]=\"\r\n          './assets/media/svg/icons/Communication/Mail-attachment.svg'\r\n        \"\r\n        cacheSVG=\"true\"\r\n        class=\"svg-icon svg-icon-3x svg-icon-success m-0\"\r\n      ></span>\r\n      <span class=\"d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1\"\r\n        >Administration</span\r\n      >\r\n      <span class=\"d-block text-dark-50 font-size-lg\">// console</span>\r\n    </a>\r\n  </div>\r\n  <!--end:Item-->\r\n\r\n  <!--begin:Item-->\r\n  <div class=\"col-6\">\r\n    <a\r\n      href=\"#\"\r\n      class=\"d-block py-10 px-5 text-center bg-hover-light border-right\"\r\n    >\r\n      <span\r\n        [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Box2.svg'\"\r\n        cacheSVG=\"true\"\r\n        class=\"svg-icon svg-icon-3x svg-icon-success m-0\"\r\n      ></span>\r\n      <span class=\"d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1\"\r\n        >Projects</span\r\n      >\r\n      <span class=\"d-block text-dark-50 font-size-lg\">Pending Tasks</span>\r\n    </a>\r\n  </div>\r\n  <!--end:Item-->\r\n\r\n  <!--begin:Item-->\r\n  <div class=\"col-6\">\r\n    <a href=\"#\" class=\"d-block py-10 px-5 text-center bg-hover-light\">\r\n      <span\r\n        [inlineSVG]=\"'./assets/media/svg/icons/Communication/Group.svg'\"\r\n        cacheSVG=\"true\"\r\n        class=\"svg-icon svg-icon-3x svg-icon-success m-0\"\r\n      ></span>\r\n      <span class=\"d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1\"\r\n        >Customers</span\r\n      >\r\n      <span class=\"d-block text-dark-50 font-size-lg\">Latest cases</span>\r\n    </a>\r\n  </div>\r\n  <!--end:Item-->\r\n</div>\r\n<!--end:Nav-->\r\n");

/***/ }),

/***/ 42069:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/dropdown-inner/search-dropdown-inner/search-dropdown-inner.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\r\n  class=\"quick-search quick-search-dropdown\"\r\n  [ngClass]=\"{ 'quick-search-has-result': data?.length }\"\r\n  id=\"kt_quick_search_dropdown\"\r\n>\r\n  <!--begin:Form-->\r\n  <form method=\"get\" class=\"quick-search-form\">\r\n    <div class=\"input-group\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">\r\n          <span\r\n            class=\"svg-icon svg-icon-lg\"\r\n            [inlineSVG]=\"'./assets/media/svg/icons/General/Search.svg'\"\r\n          ></span>\r\n        </span>\r\n      </div>\r\n      <input\r\n        #searchInput\r\n        (keyup)=\"search($event)\"\r\n        type=\"text\"\r\n        class=\"form-control form-control-sm\"\r\n        placeholder=\"Search...\"\r\n      />\r\n      <div\r\n        class=\"input-group-append\"\r\n        [ngClass]=\"{ 'spinner spinner-sm spinner-primary': loading }\"\r\n      >\r\n        <span class=\"input-group-text\">\r\n          <i\r\n            (click)=\"clear($event)\"\r\n            class=\"quick-search-close ki ki-close icon-sm text-muted\"\r\n            [style.display]=\"showCloseButton() ? 'block' : 'none'\"\r\n          ></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <!--end::Form-->\r\n\r\n  <app-search-result [data]=\"data\"></app-search-result>\r\n</div>\r\n");

/***/ }),

/***/ 80843:
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/dropdown-inner/search-dropdown-inner/search-result/search-result.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"data !== null\">\r\n  <!--begin::Wrapper-->\r\n  <div class=\"quick-search-wrapper pt-5\">\r\n    <div\r\n      [ngStyle]=\"{ 'max-height': '30vh', position: 'relative' }\"\r\n      class=\"scroll\"\r\n      perfectScrollbar\r\n    >\r\n      <div class=\"quick-search-result\">\r\n        <!-- Has Result -->\r\n        <ng-container *ngIf=\"data.length > 0\">\r\n          <ng-container *ngFor=\"let item of data\">\r\n            <ng-container\r\n              *ngIf=\"item.type === 0\"\r\n              [ngTemplateOutlet]=\"documentsTemplate\"\r\n              [ngTemplateOutletContext]=\"{ item: item }\"\r\n            ></ng-container>\r\n            <ng-container\r\n              *ngIf=\"item.type === 1\"\r\n              [ngTemplateOutlet]=\"membersTemplate\"\r\n              [ngTemplateOutletContext]=\"{ item: item }\"\r\n            ></ng-container>\r\n            <ng-container\r\n              *ngIf=\"item.type === 2\"\r\n              [ngTemplateOutlet]=\"filesTemplate\"\r\n              [ngTemplateOutletContext]=\"{ item: item }\"\r\n            ></ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n        <!-- No Result -->\r\n        <ng-container *ngIf=\"data.length === 0\">\r\n          <div class=\"text-muted d-none\">\r\n            No record found\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--end::Wrapper-->\r\n</ng-container>\r\n\r\n<ng-template #documentsTemplate let-item=\"item\">\r\n  <div class=\"font-size-sm text-primary font-weight-bolder text-uppercase mb-2\">\r\n    Documents\r\n  </div>\r\n  <div class=\"mb-10\">\r\n    <ng-container *ngFor=\"let el of item.items\">\r\n      <div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n        <div class=\"symbol symbol-45 bg-transparent flex-shrink-0\">\r\n          <!-- <span class=\"icon-svg\" [inlineSVG]=\"el.svgPath\"></span> -->\r\n          <img [src]=\"el.svgPath\" alt=\"\" />\r\n        </div>\r\n        <div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n          <a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n            {{ el.title }}\r\n          </a>\r\n          <span class=\"font-size-sm font-weight-bold text-muted\">\r\n            {{ el.description }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #membersTemplate let-item=\"item\">\r\n  <div class=\"font-size-sm text-primary font-weight-bolder text-uppercase mb-2\">\r\n    Members\r\n  </div>\r\n  <div class=\"mb-10\">\r\n    <ng-container *ngFor=\"let el of item.items\">\r\n      <div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n        <div class=\"symbol symbol-45 symbol-circle flex-shrink-0\">\r\n          <div\r\n            class=\"symbol-label\"\r\n            [ngStyle]=\"{ 'background-image': 'url(' + el.imgPath + ')' }\"\r\n          ></div>\r\n        </div>\r\n        <div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n          <a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n            {{ el.title }}\r\n          </a>\r\n          <span class=\"font-size-sm font-weight-bold text-muted\">\r\n            {{ el.description }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #filesTemplate let-item=\"item\">\r\n  <div class=\"font-size-sm text-primary font-weight-bolder text-uppercase mb-2\">\r\n    Files\r\n  </div>\r\n  <div class=\"mb-10\">\r\n    <ng-container *ngFor=\"let el of item.items\">\r\n      <div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n        <div class=\"symbol symbol-45 symbol-circle flex-shrink-0\">\r\n          <div class=\"symbol-label\">\r\n            <i [ngClass]=\"el.iconClasses\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n          <a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n            {{ el.title }}\r\n          </a>\r\n          <span class=\"font-size-sm font-weight-bold text-muted\">\r\n            {{ el.description }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ 52774:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/dropdown-inner/user-dropdown-inner/user-dropdown-inner.component.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"user$ | async as _user\">\r\n  <ng-container *ngIf=\"extrasUserDropdownStyle === 'light'\">\r\n    <!--begin::Header-->\r\n    <div class=\"d-flex align-items-center p-8 rounded-top\">\r\n      <!--begin::Symbol-->\r\n      <div class=\"symbol symbol-md bg-light-primary mr-3 flex-shrink-0\">\r\n        <img src=\"./assets/media/users/300_21.jpg\" alt=\"\" />\r\n      </div>\r\n      <!--end::Symbol-->\r\n\r\n      <!--begin::Text-->\r\n      <div class=\"text-dark m-0 flex-grow-1 mr-3 font-size-h5\">\r\n        {{ _user.firstname }} {{ _user.lastname }}\r\n      </div>\r\n      <span\r\n        class=\"label label-light-success label-lg font-weight-bold label-inline\"\r\n        >3 messages</span\r\n      >\r\n      <!--end::Text-->\r\n    </div>\r\n    <div class=\"separator separator-solid\"></div>\r\n    <!--end::Header-->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"extrasUserDropdownStyle === 'dark'\">\r\n    <!--begin::Header-->\r\n    <!-- <div\r\n      class=\"d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top\"\r\n      style=\"background-image: url('./assets/media/misc/bg-1.jpg');\"\r\n    >\r\n      <div class=\"d-flex align-items-center mr-2\">\r\n        <div class=\"symbol bg-white-o-15 mr-3\">\r\n          <span\r\n            class=\"symbol-label text-success font-weight-bold font-size-h4\"\r\n            >{{ _user.firstname | firstLetter }}</span\r\n          >\r\n        </div>\r\n\r\n        <div class=\"text-white m-0 flex-grow-1 mr-3 font-size-h5\">\r\n          {{ _user.firstname }} {{ _user.lastname }}\r\n        </div>\r\n      </div>\r\n      <span class=\"label label-success label-lg font-weight-bold label-inline\"\r\n        >3 messages</span\r\n      >\r\n    </div> -->\r\n    <!--end::Header-->\r\n  </ng-container>\r\n\r\n  <!--begin::Nav-->\r\n  <div class=\"navi navi-spacer-x-0 pt-5\">\r\n    <!--begin::Item-->\r\n    <!-- <a class=\"navi-item px-8 cursor-pointer\" routerLink=\"/user-profile\">\r\n      <div class=\"navi-link\">\r\n        <div class=\"navi-icon mr-2\">\r\n          <i class=\"flaticon2-calendar-3 text-success\"></i>\r\n        </div>\r\n        <div class=\"navi-text\">\r\n          <div class=\"font-weight-bold\">\r\n            My Profile\r\n          </div>\r\n          <div class=\"text-muted\">\r\n            Account settings and more\r\n            <span class=\"label label-light-danger label-inline font-weight-bold\"\r\n              >update</span\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a> -->\r\n    <!--end::Item-->\r\n\r\n    <!--begin::Item-->\r\n    <!-- <a class=\"navi-item px-8 cursor-pointer\">\r\n      <div class=\"navi-link\">\r\n        <div class=\"navi-icon mr-2\">\r\n          <i class=\"flaticon2-mail text-warning\"></i>\r\n        </div>\r\n        <div class=\"navi-text\">\r\n          <div class=\"font-weight-bold\">\r\n            My Messages\r\n          </div>\r\n          <div class=\"text-muted\">\r\n            Inbox and tasks\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a> -->\r\n    <!--end::Item-->\r\n\r\n    <!--begin::Item-->\r\n    <!-- <a class=\"navi-item px-8 cursor-pointer\">\r\n      <div class=\"navi-link\">\r\n        <div class=\"navi-icon mr-2\">\r\n          <i class=\"flaticon2-rocket-1 text-danger\"></i>\r\n        </div>\r\n        <div class=\"navi-text\">\r\n          <div class=\"font-weight-bold\">\r\n            My Activities\r\n          </div>\r\n          <div class=\"text-muted\">\r\n            Logs and notifications\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a> -->\r\n    <!--end::Item-->\r\n\r\n    <!--begin::Item-->\r\n    <!-- <a class=\"navi-item px-8 cursor-pointer\">\r\n      <div class=\"navi-link\">\r\n        <div class=\"navi-icon mr-2\">\r\n          <i class=\"flaticon2-hourglass text-primary\"></i>\r\n        </div>\r\n        <div class=\"navi-text\">\r\n          <div class=\"font-weight-bold\">\r\n            My Tasks\r\n          </div>\r\n          <div class=\"text-muted\">\r\n            latest tasks and projects\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a> -->\r\n    <!--end::Item-->\r\n\r\n    <!--begin::Footer-->\r\n    <div class=\"navi-separator mt-3\"></div>\r\n    <div class=\"navi-footer px-8 py-5\">\r\n      <a\r\n        class=\"btn btn-light-primary font-weight-bold cursor-pointer\"\r\n        (click)=\"logout()\"\r\n        >Sign Out</a\r\n      >\r\n      <!-- <a class=\"btn btn-clean font-weight-bold cursor-pointer\">Upgrade Plan</a> -->\r\n    </div>\r\n    <!--end::Footer-->\r\n  </div>\r\n  <!--end::Nav-->\r\n</ng-container>\r\n");

/***/ }),

/***/ 37228:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/offcanvas/cart-offcanvas/cart-offcanvas.component.html ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Quick Cart-->\r\n<div\r\n  id=\"kt_quick_cart\"\r\n  class=\"offcanvas p-10\"\r\n  [ngClass]=\"extrasCartOffcanvasDirectionCSSClass\"\r\n>\r\n  <!--begin::Header-->\r\n  <div\r\n    class=\"offcanvas-header d-flex align-items-center justify-content-between pb-7\"\r\n  >\r\n    <h4 class=\"font-weight-bold m-0\">\r\n      Shopping Cart\r\n    </h4>\r\n    <a\r\n      href=\"#\"\r\n      class=\"btn btn-xs btn-icon btn-light btn-hover-primary\"\r\n      id=\"kt_quick_cart_close\"\r\n    >\r\n      <i class=\"ki ki-close icon-xs text-muted\"></i>\r\n    </a>\r\n  </div>\r\n  <!--end::Header-->\r\n\r\n  <!--begin::Content-->\r\n  <div class=\"offcanvas-content\">\r\n    <!--begin::Wrapper-->\r\n    <div class=\"offcanvas-wrapper mb-5 scroll-pull\">\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center justify-content-between py-8\">\r\n        <div class=\"d-flex flex-column mr-2\">\r\n          <a\r\n            href=\"#\"\r\n            class=\"font-weight-bold text-dark-75 font-size-lg text-hover-primary\"\r\n          >\r\n            iBlender\r\n          </a>\r\n          <span class=\"text-muted\">\r\n            The best kitchen gadget in 2020\r\n          </span>\r\n          <div class=\"d-flex align-items-center mt-2\">\r\n            <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n              >$ 350</span\r\n            >\r\n            <span class=\"text-muted mr-1\">for</span>\r\n            <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\"\r\n              >5</span\r\n            >\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n              ><i class=\"ki ki-minus icon-xs\"></i\r\n            ></a>\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n              ><i class=\"ki ki-plus icon-xs\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n          <img src=\"./assets/media/stock-600x400/img-1.jpg\" title=\"\" alt=\"\" />\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Separator-->\r\n      <div class=\"separator separator-solid\"></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center justify-content-between py-8\">\r\n        <div class=\"d-flex flex-column mr-2\">\r\n          <a\r\n            href=\"#\"\r\n            class=\"font-weight-bold text-dark-75 font-size-lg text-hover-primary\"\r\n          >\r\n            SmartCleaner\r\n          </a>\r\n          <span class=\"text-muted\">\r\n            Smart tool for cooking\r\n          </span>\r\n          <div class=\"d-flex align-items-center mt-2\">\r\n            <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n              >$ 650</span\r\n            >\r\n            <span class=\"text-muted mr-1\">for</span>\r\n            <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\"\r\n              >4</span\r\n            >\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n              ><i class=\"ki ki-minus icon-xs\"></i\r\n            ></a>\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n              ><i class=\"ki ki-plus icon-xs\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n          <img src=\"./assets/media/stock-600x400/img-2.jpg\" title=\"\" alt=\"\" />\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Separator-->\r\n      <div class=\"separator separator-solid\"></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center justify-content-between py-8\">\r\n        <div class=\"d-flex flex-column mr-2\">\r\n          <a\r\n            href=\"#\"\r\n            class=\"font-weight-bold text-dark-75 font-size-lg text-hover-primary\"\r\n          >\r\n            CameraMax\r\n          </a>\r\n          <span class=\"text-muted\">\r\n            Professional camera for edge cutting shots\r\n          </span>\r\n          <div class=\"d-flex align-items-center mt-2\">\r\n            <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n              >$ 150</span\r\n            >\r\n            <span class=\"text-muted mr-1\">for</span>\r\n            <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\"\r\n              >3</span\r\n            >\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n              ><i class=\"ki ki-minus icon-xs\"></i\r\n            ></a>\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n              ><i class=\"ki ki-plus icon-xs\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n          <img src=\"./assets/media/stock-600x400/img-3.jpg\" title=\"\" alt=\"\" />\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Separator-->\r\n      <div class=\"separator separator-solid\"></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center justify-content-between py-8\">\r\n        <div class=\"d-flex flex-column mr-2\">\r\n          <a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n            4D Printer\r\n          </a>\r\n          <span class=\"text-muted\">\r\n            Manufactoring unique objects\r\n          </span>\r\n          <div class=\"d-flex align-items-center mt-2\">\r\n            <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n              >$ 1450</span\r\n            >\r\n            <span class=\"text-muted mr-1\">for</span>\r\n            <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\"\r\n              >7</span\r\n            >\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n              ><i class=\"ki ki-minus icon-xs\"></i\r\n            ></a>\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n              ><i class=\"ki ki-plus icon-xs\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n          <img src=\"./assets/media/stock-600x400/img-4.jpg\" title=\"\" alt=\"\" />\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Separator-->\r\n      <div class=\"separator separator-solid\"></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"d-flex align-items-center justify-content-between py-8\">\r\n        <div class=\"d-flex flex-column mr-2\">\r\n          <a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n            MotionWire\r\n          </a>\r\n          <span class=\"text-muted\">\r\n            Perfect animation tool\r\n          </span>\r\n          <div class=\"d-flex align-items-center mt-2\">\r\n            <span class=\"font-weight-bold mr-1 text-dark-75 font-size-lg\"\r\n              >$ 650</span\r\n            >\r\n            <span class=\"text-muted mr-1\">for</span>\r\n            <span class=\"font-weight-bold mr-2 text-dark-75 font-size-lg\"\r\n              >7</span\r\n            >\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon mr-2\"\r\n              ><i class=\"ki ki-minus icon-xs\"></i\r\n            ></a>\r\n            <a href=\"#\" class=\"btn btn-xs btn-light-success btn-icon\"\r\n              ><i class=\"ki ki-plus icon-xs\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n        <a href=\"#\" class=\"symbol symbol-70 flex-shrink-0\">\r\n          <img src=\"./assets/media/stock-600x400/img-8.jpg\" title=\"\" alt=\"\" />\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n    </div>\r\n    <!--end::Wrapper-->\r\n\r\n    <!--begin::Purchase-->\r\n    <div class=\"offcanvas-footer\">\r\n      <div class=\"d-flex align-items-center justify-content-between mb-4\">\r\n        <span class=\"font-weight-bold text-muted font-size-sm mr-2\">Total</span>\r\n        <span class=\"font-weight-bolder text-dark-50 text-right\">$1840.00</span>\r\n      </div>\r\n      <div class=\"d-flex align-items-center justify-content-between mb-7\">\r\n        <span class=\"font-weight-bold text-muted font-size-sm mr-2\"\r\n          >Sub total</span\r\n        >\r\n        <span class=\"font-weight-bolder text-primary text-right\">$5640.00</span>\r\n      </div>\r\n      <div class=\"text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary text-weight-bold\">\r\n          Place Order\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!--end::Purchase-->\r\n  </div>\r\n  <!--end::Content-->\r\n</div>\r\n<!--end::Quick Cart-->\r\n");

/***/ }),

/***/ 89416:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/offcanvas/notifications-offcanvas/notifications-offcanvas.component.html ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- begin::Notifications Panel-->\r\n<div\r\n  id=\"kt_quick_notifications\"\r\n  class=\"offcanvas p-10\"\r\n  [ngClass]=\"extrasNotificationsOffcanvasDirectionCSSClass\"\r\n>\r\n  <!--begin::Header-->\r\n  <div\r\n    class=\"offcanvas-header d-flex align-items-center justify-content-between mb-10\"\r\n  >\r\n    <h3 class=\"font-weight-bold m-0\">\r\n      Notifications\r\n      <small class=\"text-muted font-size-sm ml-2\">24 New</small>\r\n    </h3>\r\n    <a\r\n      href=\"#\"\r\n      class=\"btn btn-xs btn-icon btn-light btn-hover-primary\"\r\n      id=\"kt_quick_notifications_close\"\r\n    >\r\n      <i class=\"ki ki-close icon-xs text-muted\"></i>\r\n    </a>\r\n  </div>\r\n  <!--end::Header-->\r\n\r\n  <!--begin::Content-->\r\n  <div class=\"offcanvas-content pr-5 mr-n5\">\r\n    <!--begin::Nav-->\r\n    <div class=\"navi navi-icon-circle navi-spacer-x-0\">\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-bell text-success icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              5 new user generated report\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Reports based on sales\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon2-box text-danger icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              2 new items submited\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              by Grog John\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-psd text-primary icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              79 PSD files generated\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Reports based on sales\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon2-supermarket text-warning icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              $2900 worth producucts sold\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Total 234 items\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-paper-plane-1 text-success icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              4.5h-avarage response time\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Fostest is Barry\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i\r\n                class=\"flaticon-safe-shield-protection text-danger icon-lg\"\r\n              ></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              3 Defence alerts\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              40% less alerts thar last week\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-notepad text-primary icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              Avarage 4 blog posts per author\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Most posted 12 time\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-users-1 text-warning icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              16 authors joined last week\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              9 photodrapehrs, 7 designer\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon2-box text-info icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              2 new items have been submited\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              by Grog John\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon2-download text-success icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              2.8 GB-total downloads size\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Mostly PSD end AL concepts\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon2-supermarket text-danger icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              $2900 worth producucts sold\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Total 234 items\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-bell text-primary icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              7 new user generated report\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Reports based on sales\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <a href=\"#\" class=\"navi-item\">\r\n        <div class=\"navi-link rounded\">\r\n          <div class=\"symbol symbol-50 symbol-circle mr-3\">\r\n            <div class=\"symbol-label\">\r\n              <i class=\"flaticon-paper-plane-1 text-success icon-lg\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"navi-text\">\r\n            <div class=\"font-weight-bold font-size-lg\">\r\n              4.5h-avarage response time\r\n            </div>\r\n            <div class=\"text-muted\">\r\n              Fostest is Barry\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      <!--end::Item-->\r\n    </div>\r\n    <!--end::Nav-->\r\n  </div>\r\n  <!--end::Content-->\r\n</div>\r\n<!-- end::Notifications Panel-->\r\n");

/***/ }),

/***/ 52073:
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/offcanvas/quick-actions-offcanvas/quick-actions-offcanvas.component.html ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Quick Actions Panel-->\r\n<div\r\n  id=\"kt_quick_actions\"\r\n  class=\"offcanvas p-10\"\r\n  [ngClass]=\"extrasQuickActionsOffcanvasDirectionCSSClasses\"\r\n>\r\n  <!--begin::Header-->\r\n  <div\r\n    class=\"offcanvas-header d-flex align-items-center justify-content-between pb-10\"\r\n  >\r\n    <h3 class=\"font-weight-bold m-0\">\r\n      Quick Actions\r\n      <small class=\"text-muted font-size-sm ml-2\">finance & reports</small>\r\n    </h3>\r\n    <a\r\n      href=\"#\"\r\n      class=\"btn btn-xs btn-icon btn-light btn-hover-primary\"\r\n      id=\"kt_quick_actions_close\"\r\n    >\r\n      <i class=\"ki ki-close icon-xs text-muted\"></i>\r\n    </a>\r\n  </div>\r\n  <!--end::Header-->\r\n\r\n  <!--begin::Content-->\r\n  <div class=\"offcanvas-content pr-5 mr-n5\">\r\n    <div class=\"row gutter-b\">\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Euro.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\"\r\n            >Accounting</span\r\n          >\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"\r\n              './assets/media/svg/icons/Communication/Mail-attachment.svg'\r\n            \"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\"\r\n            >Members</span\r\n          >\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n    </div>\r\n    <div class=\"row gutter-b\">\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Box2.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\"\r\n            >Projects</span\r\n          >\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Communication/Group.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\"\r\n            >Customers</span\r\n          >\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n    </div>\r\n    <div class=\"row gutter-b\">\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Chart-bar1.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\">Email</span>\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Design/Color-profile.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\"\r\n            >Settings</span\r\n          >\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n    </div>\r\n    <div class=\"row\">\r\n      <!--begin::Item-->\r\n      <div class=\"col-6\">\r\n        <a\r\n          href=\"#\"\r\n          class=\"btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Euro.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-3x svg-icon-primary m-0\"\r\n          ></span>\r\n          <span class=\"d-block font-weight-bold font-size-h6 mt-2\">Orders</span>\r\n        </a>\r\n      </div>\r\n      <!--end::Item-->\r\n    </div>\r\n  </div>\r\n  <!--end::Content-->\r\n</div>\r\n<!--end::Quick Actions Panel-->\r\n");

/***/ }),

/***/ 1287:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/offcanvas/quick-panel-offcanvas/quick-panel-offcanvas.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Quick Panel-->\r\n<div\r\n  id=\"kt_quick_panel\"\r\n  class=\"offcanvas pt-5 pb-10\"\r\n  [ngClass]=\"extrasQuickPanelOffcanvasDirectionCSSClass\"\r\n>\r\n  <!--begin::Header-->\r\n  <div\r\n    class=\"offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5\"\r\n  >\r\n    <ul\r\n      class=\"nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10\"\r\n      role=\"tablist\"\r\n    >\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          [ngClass]=\"getActiveCSSClasses('kt_quick_panel_logs')\"\r\n          (click)=\"setActiveTabId('kt_quick_panel_logs')\"\r\n          >Audit Logs</a\r\n        >\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          data-toggle=\"tab\"\r\n          [ngClass]=\"getActiveCSSClasses('kt_quick_panel_notifications')\"\r\n          (click)=\"setActiveTabId('kt_quick_panel_notifications')\"\r\n          >Notifications</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link cursor-pointer\"\r\n          [ngClass]=\"getActiveCSSClasses('kt_quick_panel_settings')\"\r\n          (click)=\"setActiveTabId('kt_quick_panel_settings')\"\r\n          data-toggle=\"tab\"\r\n          >Settings</a\r\n        >\r\n      </li>\r\n    </ul>\r\n    <div class=\"offcanvas-close mt-n1 pr-5\">\r\n      <a\r\n        href=\"#\"\r\n        class=\"btn btn-xs btn-icon btn-light btn-hover-primary\"\r\n        id=\"kt_quick_panel_close\"\r\n      >\r\n        <i class=\"ki ki-close icon-xs text-muted\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <!--end::Header-->\r\n\r\n  <!--begin::Content-->\r\n  <div class=\"offcanvas-content px-10\">\r\n    <div class=\"tab-content\">\r\n      <!--begin::Tabpane-->\r\n      <div\r\n        class=\"tab-pane fade pt-3 pr-5 mr-n5\"\r\n        id=\"kt_quick_panel_logs\"\r\n        [ngClass]=\"getActiveCSSClasses('kt_quick_panel_logs')\"\r\n        role=\"tabpanel\"\r\n      >\r\n        <!--begin::Section-->\r\n        <div class=\"mb-15\">\r\n          <h5 class=\"font-weight-bold mb-5\">System Messages</h5>\r\n          <!--begin: Item-->\r\n          <div class=\"d-flex align-items-center flex-wrap mb-5\">\r\n            <div class=\"symbol symbol-50 symbol-light mr-5\">\r\n              <span class=\"symbol-label\">\r\n                <span\r\n                  [inlineSVG]=\"'./assets/media/svg/misc/006-plurk.svg'\"\r\n                  cacheSVG=\"true\"\r\n                  class=\"svg-icon h-50 align-self-center\"\r\n                ></span>\r\n              </span>\r\n            </div>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Top Authors</a\r\n              >\r\n              <span class=\"text-muted font-weight-bold\"\r\n                >Most Successful Fellas</span\r\n              >\r\n            </div>\r\n            <span\r\n              class=\"btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50\"\r\n              >+82$</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div class=\"d-flex align-items-center flex-wrap mb-5\">\r\n            <div class=\"symbol symbol-50 symbol-light mr-5\">\r\n              <span class=\"symbol-label\">\r\n                <span\r\n                  [inlineSVG]=\"'./assets/media/svg/misc/015-telegram.svg'\"\r\n                  cacheSVG=\"true\"\r\n                  class=\"svg-icon h-50 align-self-center\"\r\n                ></span>\r\n              </span>\r\n            </div>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Popular Authors</a\r\n              >\r\n              <span class=\"text-muted font-weight-bold\"\r\n                >Most Successful Fellas</span\r\n              >\r\n            </div>\r\n            <span\r\n              class=\"btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50\"\r\n              >+280$</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div class=\"d-flex align-items-center flex-wrap mb-5\">\r\n            <div class=\"symbol symbol-50 symbol-light mr-5\">\r\n              <span class=\"symbol-label\">\r\n                <span\r\n                  [inlineSVG]=\"'./assets/media/svg/misc/003-puzzle.svg'\"\r\n                  cacheSVG=\"true\"\r\n                  class=\"svg-icon h-50 align-self-center\"\r\n                ></span>\r\n              </span>\r\n            </div>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >New Users</a\r\n              >\r\n              <span class=\"text-muted font-weight-bold\"\r\n                >Most Successful Fellas</span\r\n              >\r\n            </div>\r\n            <span\r\n              class=\"btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50\"\r\n              >+4500$</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div class=\"d-flex align-items-center flex-wrap mb-5\">\r\n            <div class=\"symbol symbol-50 symbol-light mr-5\">\r\n              <span class=\"symbol-label\">\r\n                <span\r\n                  [inlineSVG]=\"'./assets/media/svg/misc/005-bebo.svg'\"\r\n                  cacheSVG=\"true\"\r\n                  class=\"svg-icon h-50 align-self-center\"\r\n                ></span>\r\n              </span>\r\n            </div>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Active Customers</a\r\n              >\r\n              <span class=\"text-muted font-weight-bold\"\r\n                >Most Successful Fellas</span\r\n              >\r\n            </div>\r\n            <span\r\n              class=\"btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50\"\r\n              >+4500$</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div class=\"d-flex align-items-center flex-wrap\">\r\n            <div class=\"symbol symbol-50 symbol-light mr-5\">\r\n              <span class=\"symbol-label\">\r\n                <span\r\n                  [inlineSVG]=\"'./assets/media/svg/misc/014-kickstarter.svg'\"\r\n                  cacheSVG=\"true\"\r\n                  class=\"svg-icon h-50 align-self-center\"\r\n                ></span>\r\n              </span>\r\n            </div>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Bestseller Theme</a\r\n              >\r\n              <span class=\"text-muted font-weight-bold\"\r\n                >Most Successful Fellas</span\r\n              >\r\n            </div>\r\n            <span\r\n              class=\"btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50\"\r\n              >+4500$</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n        </div>\r\n        <!--end::Section-->\r\n\r\n        <!--begin::Section-->\r\n        <div class=\"mb-5\">\r\n          <h5 class=\"font-weight-bold mb-5\">Notifications</h5>\r\n\r\n          <!--begin: Item-->\r\n          <div\r\n            class=\"d-flex align-items-center bg-light-warning rounded p-5 mb-5\"\r\n          >\r\n            <span class=\"svg-icon svg-icon-warning mr-5\">\r\n              <span\r\n                [inlineSVG]=\"'./assets/media/svg/icons/Home/Library.svg'\"\r\n                cacheSVG=\"true\"\r\n                class=\"svg-icon svg-icon-lg\"\r\n              ></span>\r\n            </span>\r\n\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Another purpose persuade</a\r\n              >\r\n              <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n            </div>\r\n\r\n            <span class=\"font-weight-bolder text-warning py-1 font-size-lg\"\r\n              >+28%</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div\r\n            class=\"d-flex align-items-center bg-light-success rounded p-5 mb-5\"\r\n          >\r\n            <span class=\"svg-icon svg-icon-success mr-5\">\r\n              <span\r\n                [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\"\r\n                cacheSVG=\"true\"\r\n                class=\"svg-icon svg-icon-lg\"\r\n              ></span>\r\n            </span>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Would be to people</a\r\n              >\r\n              <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n            </div>\r\n\r\n            <span class=\"font-weight-bolder text-success py-1 font-size-lg\"\r\n              >+50%</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div\r\n            class=\"d-flex align-items-center bg-light-danger rounded p-5 mb-5\"\r\n          >\r\n            <span class=\"svg-icon svg-icon-danger mr-5\">\r\n              <span\r\n                [inlineSVG]=\"\r\n                  './assets/media/svg/icons/Communication/Group-chat.svg'\r\n                \"\r\n                cacheSVG=\"true\"\r\n                class=\"svg-icon svg-icon-lg\"\r\n              ></span>\r\n            </span>\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >Purpose would be to persuade</a\r\n              >\r\n              <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n            </div>\r\n\r\n            <span class=\"font-weight-bolder text-danger py-1 font-size-lg\"\r\n              >-27%</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n\r\n          <!--begin: Item-->\r\n          <div class=\"d-flex align-items-center bg-light-info rounded p-5\">\r\n            <span class=\"svg-icon svg-icon-info mr-5\">\r\n              <span\r\n                [inlineSVG]=\"'./assets/media/svg/icons/General/Attachment2.svg'\"\r\n                cacheSVG=\"true\"\r\n                class=\"svg-icon svg-icon-lg\"\r\n              ></span>\r\n            </span>\r\n\r\n            <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n              <a\r\n                href=\"#\"\r\n                class=\"font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1\"\r\n                >The best product</a\r\n              >\r\n              <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n            </div>\r\n\r\n            <span class=\"font-weight-bolder text-info py-1 font-size-lg\"\r\n              >+8%</span\r\n            >\r\n          </div>\r\n          <!--end: Item-->\r\n        </div>\r\n\r\n        <!--end::Section-->\r\n      </div>\r\n      <!--end::Tabpane-->\r\n\r\n      <!--begin::Tabpane-->\r\n      <div\r\n        class=\"tab-pane fade pt-2 pr-5 mr-n5\"\r\n        id=\"kt_quick_panel_notifications\"\r\n        [ngClass]=\"getActiveCSSClasses('kt_quick_panel_notifications')\"\r\n        role=\"tabpanel\"\r\n      >\r\n        <!--begin::Nav-->\r\n        <div class=\"navi navi-icon-circle navi-spacer-x-0\">\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-bell text-success icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  5 new user generated report\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Reports based on sales\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon2-box text-danger icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  2 new items submited\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  by Grog John\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-psd text-primary icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  79 PSD files generated\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Reports based on sales\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon2-supermarket text-warning icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  $2900 worth producucts sold\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Total 234 items\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-paper-plane-1 text-success icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  4.5h-avarage response time\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Fostest is Barry\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i\r\n                    class=\"flaticon-safe-shield-protection text-danger icon-lg\"\r\n                  ></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  3 Defence alerts\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  40% less alerts thar last week\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-notepad text-primary icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  Avarage 4 blog posts per author\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Most posted 12 time\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-users-1 text-warning icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  16 authors joined last week\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  9 photodrapehrs, 7 designer\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon2-box text-info icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  2 new items have been submited\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  by Grog John\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon2-download text-success icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  2.8 GB-total downloads size\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Mostly PSD end AL concepts\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon2-supermarket text-danger icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  $2900 worth producucts sold\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Total 234 items\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-bell text-primary icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  7 new user generated report\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Reports based on sales\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n          <!--begin::Item-->\r\n          <a href=\"#\" class=\"navi-item\">\r\n            <div class=\"navi-link rounded\">\r\n              <div class=\"symbol symbol-50 mr-3\">\r\n                <div class=\"symbol-label\">\r\n                  <i class=\"flaticon-paper-plane-1 text-success icon-lg\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"navi-text\">\r\n                <div class=\"font-weight-bold font-size-lg\">\r\n                  4.5h-avarage response time\r\n                </div>\r\n                <div class=\"text-muted\">\r\n                  Fostest is Barry\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </a>\r\n          <!--end::Item-->\r\n        </div>\r\n        <!--end::Nav-->\r\n      </div>\r\n      <!--end::Tabpane-->\r\n\r\n      <!--begin::Tabpane-->\r\n      <div\r\n        class=\"tab-pane fade pt-3 pr-5 mr-n5\"\r\n        id=\"kt_quick_panel_settings\"\r\n        [ngClass]=\"getActiveCSSClasses('kt_quick_panel_settings')\"\r\n        role=\"tabpanel\"\r\n      >\r\n        <form class=\"form\">\r\n          <!--begin::Section-->\r\n          <div>\r\n            <h5 class=\"font-weight-bold mb-3\">Customer Care</h5>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Enable Notifications:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-success switch-sm\">\r\n                  <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Enable Case Tracking:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-success switch-sm\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"quick_panel_notifications_2\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Support Portal:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-success switch-sm\">\r\n                  <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--end::Section-->\r\n\r\n          <div class=\"separator separator-dashed my-6\"></div>\r\n\r\n          <!--begin::Section-->\r\n          <div class=\"pt-2\">\r\n            <h5 class=\"font-weight-bold mb-3\">Reports</h5>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Generate Reports:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-sm switch-danger\">\r\n                  <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Enable Report Export:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-sm switch-danger\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Allow Data Collection:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-sm switch-danger\">\r\n                  <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--end::Section-->\r\n\r\n          <div class=\"separator separator-dashed my-6\"></div>\r\n\r\n          <!--begin::Section-->\r\n          <div class=\"pt-2\">\r\n            <h5 class=\"font-weight-bold mb-3\">Memebers</h5>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Enable Member singup:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-sm switch-primary\">\r\n                  <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\">Allow User Feedbacks:</label>\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-sm switch-primary\">\r\n                  <label>\r\n                    <input type=\"checkbox\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mb-0 row align-items-center\">\r\n              <label class=\"col-8 col-form-label\"\r\n                >Enable Customer Portal:</label\r\n              >\r\n              <div class=\"col-4 d-flex justify-content-end\">\r\n                <span class=\"switch switch-sm switch-primary\">\r\n                  <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"select\" />\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--end::Section-->\r\n        </form>\r\n      </div>\r\n      <!--end::Tabpane-->\r\n    </div>\r\n  </div>\r\n  <!--end::Content-->\r\n</div>\r\n<!--end::Quick Panel-->\r\n");

/***/ }),

/***/ 98022:
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/offcanvas/search-offcanvas/search-offcanvas.component.html ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Search Panel-->\r\n<div\r\n  id=\"kt_quick_search\"  \r\n  class=\"offcanvas p-10\"\r\n  [ngClass]=\"extrasSearchOffcanvasDirectionCSSClass\">\r\n  <!--begin::Header-->\r\n  <div class=\"offcanvas-header d-flex align-items-center justify-content-between mb-5\">\r\n\t\t<h3 class=\"font-weight-bold m-0\">\r\n\t\t\tSearch\r\n\t\t\t<small class=\"text-muted font-size-sm ml-2\">files, reports, members</small>\r\n\t\t</h3>\r\n\t\t<a href=\"#\" class=\"btn btn-xs btn-icon btn-light btn-hover-primary\" id=\"kt_quick_search_close\">\r\n\t\t\t<i class=\"ki ki-close icon-xs text-muted\"></i>\r\n\t\t</a>\r\n\t</div>\r\n  <!--end::Header-->\r\n  \r\n  <!--begin::Content-->\r\n  <div class=\"offcanvas-content\">\r\n\t\t<!--begin::Container-->\r\n\t\t<div class=\"quick-search quick-search-offcanvas quick-search-has-result\" id=\"kt_quick_search_offcanvas\">\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form method=\"get\" class=\"quick-search-form border-bottom pt-5 pb-1\">\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<div class=\"input-group-prepend\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\">\r\n              <span [inlineSVG]=\"'./assets/media/svg/icons/General/Search.svg'\" cacheSVG=\"true\" class=\"svg-icon svg-icon-lg\"></span>\r\n            </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-sm \" placeholder=\"Search...\"/>\r\n\t\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t\t\t<span class=\"input-group-text\">\r\n              <i class=\"quick-search-close ki ki-close icon-sm text-muted\"></i>\r\n            </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\r\n\t\t\t<!--begin::Wrapper-->\r\n\t\t\t<div class=\"quick-search-wrapper pt-5\">\r\n\t\t\t\t<div class=\"quick-search-result\">\r\n\t\t\t\t\t<!--begin::Message-->\r\n\t\t\t\t\t<div class=\"text-muted d-none\">\r\n\t\t\t\t\t\tNo record found\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--end::Message-->\r\n\r\n\t\t\t\t\t<!--begin::Section-->\r\n\t\t\t\t\t<div class=\"font-size-sm text-primary font-weight-bolder text-uppercase mb-2\">\r\n\t\t\t\t\t\tDocuments\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-10\">\r\n\t\t\t\t\t\t<!--begin::Item-->\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 bg-transparent flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<img src=\"./assets/media/svg/files/doc.svg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\t\tAirPlus Requirements\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\t\tby Grog John\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--end::Item-->\r\n\r\n\t\t\t\t\t\t<!--begin::Item-->\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 bg-transparent flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<img src=\"./assets/media/svg/files/pdf.svg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\tTechNav Documentation\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tby Mary Broun\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--end::Item-->\r\n\r\n\t\t\t\t\t\t<!--begin::Item-->\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 bg-transparent flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<img src=\"./assets/media/svg/files/xml.svg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\tAll Framework Docs\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tby Nick Stone\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--end::Item-->\r\n\r\n\t\t\t\t\t\t<!--begin::Item-->\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 bg-transparent flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<img src=\"./assets/media/svg/files/csv.svg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\t\tFinance & Accounting Reports\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\t\tby Jhon Larson\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--end::Item-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--end::Section-->\r\n\r\n\t\t\t\t\t<!--begin::Section-->\r\n\t\t\t\t\t<div class=\"font-size-sm text-primary font-weight-bolder text-uppercase mb-2\">\r\n\t\t\t\t\t\tMembers\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-10\">\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\" style=\"background-image:url('./assets/media/users/300_20.jpg')\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\tMilena Gibson\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tUI Designer\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\"  style=\"background-image:url('./assets/media/users/300_15.jpg')\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\tStefan JohnStefan\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tMarketing Manager\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\"  style=\"background-image:url('./assets/media/users/300_12.jpg')\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\tAnna Strong\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tSoftware Developer\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\" >\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\" style=\"background-image:url('./assets/media/users/300_16.jpg')\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\tNick Bold\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tProject Coordinator\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--end::Section-->\r\n\r\n\t\t\t\t\t<!--begin::Section-->\r\n\t\t\t\t\t<div class=\"font-size-sm text-primary font-weight-bolder text-uppercase mb-2\">\r\n\t\t\t\t\t\tFiles\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mb-10\">\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"flaticon-psd text-primary\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\t79 PSD files generated\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tby Grog John\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"flaticon2-supermarket text-warning\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\t$2900 worth products sold\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tTotal 234 items\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"flaticon-safe-shield-protection text-info\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\t4 New items submitted\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tMarketing Manager\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"d-flex align-items-center flex-grow-1 mb-2\">\r\n\t\t\t\t\t\t\t<div class=\"symbol symbol-30 flex-shrink-0\">\r\n\t\t\t\t\t\t\t\t<div class=\"symbol-label\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"flaticon-safe-shield-protection text-warning\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column ml-3 mt-2 mb-2\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"font-weight-bold text-dark text-hover-primary\">\r\n\t\t\t\t\t\t\t\t4 New items submitted\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"font-size-sm font-weight-bold text-muted\">\r\n\t\t\t\t\t\t\t\tMarketing Manager\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--end::Section-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--end::Wrapper-->\r\n\t\t</div>\r\n\t\t<!--end::Container-->\r\n\t</div>\r\n\t<!--end::Content-->\r\n</div>\r\n<!--end::Search Panel-->\r\n");

/***/ }),

/***/ 31960:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/offcanvas/user-offcanvas/user-offcanvas.component.html ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- begin::User Panel-->\r\n<div id=\"kt_quick_user\" class=\"offcanvas p-10\" [ngClass]=\"extrasUserOffcanvasDirection\">\r\n  <ng-container *ngIf=\"user$ | async as _user\">\r\n    <!--begin::Header-->\r\n    <div class=\"offcanvas-header d-flex align-items-center justify-content-between pb-5\">\r\n      <h3 class=\"font-weight-bold m-0\">\r\n        User Profile\r\n        <small class=\"text-muted font-size-sm ml-2\">12 messages</small>\r\n      </h3>\r\n      <a href=\"#\" class=\"btn btn-xs btn-icon btn-light btn-hover-primary\" id=\"kt_quick_user_close\">\r\n        <i class=\"ki ki-close icon-xs text-muted\"></i>\r\n      </a>\r\n    </div>\r\n    <!--end::Header-->\r\n\r\n    <!--begin::Content-->\r\n    <div class=\"offcanvas-content pr-5 mr-n5\">\r\n      <!--begin::Header-->\r\n      <div class=\"d-flex align-items-center mt-5\">\r\n        <div class=\"symbol symbol-100 mr-5\">\r\n          <div class=\"symbol-label\" style=\"background-image: url('./assets/media/users/300_21.jpg');\"></div>\r\n          <i class=\"symbol-badge bg-success\"></i>\r\n        </div>\r\n        <div class=\"d-flex flex-column\">\r\n          <a href=\"#\" class=\"font-weight-bold font-size-h5 text-dark-75 text-hover-primary\">\r\n            {{ _user.firstname }} {{ _user.lastname }}\r\n          </a>\r\n          <div class=\"text-muted mt-1\">\r\n            Application Developer\r\n          </div>\r\n          <div class=\"navi mt-2\">\r\n            <a href=\"#\" class=\"navi-item\">\r\n              <span class=\"navi-link p-0 pb-2\">\r\n                <span class=\"navi-icon mr-1\">\r\n                  <span [inlineSVG]=\"\r\n                      './assets/media/svg/icons/Communication/Mail-notification.svg'\r\n                    \" cacheSVG=\"true\" class=\"svg-icon svg-icon-lg svg-icon-primary\"></span>\r\n                </span>\r\n                <span class=\"navi-text text-muted text-hover-primary\">{{\r\n                  _user.email\r\n                }}</span>\r\n              </span>\r\n            </a>\r\n\r\n            <a class=\"btn btn-sm btn-light-primary font-weight-bolder py-2 px-5 cursor-pointer\" (click)=\"logout()\">Sign\r\n              Out</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--end::Header-->\r\n\r\n      <!--begin::Separator-->\r\n      <div class=\"separator separator-dashed mt-8 mb-5\"></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Nav-->\r\n      <div class=\"navi navi-spacer-x-0 p-0\">\r\n        <!--begin::Item-->\r\n        <a class=\"navi-item cursor-pointer\" routerLink=\"/user-profile\">\r\n          <div class=\"navi-link\">\r\n            <div class=\"symbol symbol-40 bg-light mr-3\">\r\n              <div class=\"symbol-label\">\r\n                <span [inlineSVG]=\"\r\n                    './assets/media/svg/icons/General/Notification2.svg'\r\n                  \" cacheSVG=\"true\" class=\"svg-icon svg-icon-md svg-icon-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"navi-text\">\r\n              <div class=\"font-weight-bold\">\r\n                My Profile\r\n              </div>\r\n              <div class=\"text-muted\">\r\n                Account settings and more\r\n                <span class=\"label label-light-danger label-inline font-weight-bold\">update</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <!--end:Item-->\r\n\r\n        <!--begin::Item-->\r\n        <a class=\"navi-item cursor-pointer\">\r\n          <div class=\"navi-link\">\r\n            <div class=\"symbol symbol-40 bg-light mr-3\">\r\n              <div class=\"symbol-label\">\r\n                <span [inlineSVG]=\"\r\n                    './assets/media/svg/icons/Shopping/Chart-bar1.svg'\r\n                  \" cacheSVG=\"true\" class=\"svg-icon svg-icon-md svg-icon-warning\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"navi-text\">\r\n              <div class=\"font-weight-bold\">\r\n                My Messages\r\n              </div>\r\n              <div class=\"text-muted\">\r\n                Inbox and tasks\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <!--end:Item-->\r\n\r\n        <!--begin::Item-->\r\n        <a class=\"navi-item cursor-pointer\">\r\n          <div class=\"navi-link\">\r\n            <div class=\"symbol symbol-40 bg-light mr-3\">\r\n              <div class=\"symbol-label\">\r\n                <span [inlineSVG]=\"\r\n                    './assets/media/svg/icons/Files/Selected-file.svg'\r\n                  \" cacheSVG=\"true\" class=\"svg-icon svg-icon-md svg-icon-danger\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"navi-text\">\r\n              <div class=\"font-weight-bold\">\r\n                My Activities\r\n              </div>\r\n              <div class=\"text-muted\">\r\n                Logs and notifications\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <!--end:Item-->\r\n\r\n        <!--begin::Item-->\r\n        <a class=\"navi-item cursor-pointer\">\r\n          <div class=\"navi-link\">\r\n            <div class=\"symbol symbol-40 bg-light mr-3\">\r\n              <div class=\"symbol-label\">\r\n                <span [inlineSVG]=\"\r\n                    './assets/media/svg/icons/Communication/Mail-opened.svg'\r\n                  \" cacheSVG=\"true\" class=\"svg-icon svg-icon-md svg-icon-primary\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"navi-text\">\r\n              <div class=\"font-weight-bold\">\r\n                My Tasks\r\n              </div>\r\n              <div class=\"text-muted\">\r\n                latest tasks and projects\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <!--end:Item-->\r\n      </div>\r\n      <!--end::Nav-->\r\n\r\n      <!--begin::Separator-->\r\n      <div class=\"separator separator-dashed my-7\"></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Notifications-->\r\n      <div>\r\n        <!--begin:Heading-->\r\n        <h5 class=\"mb-5\">\r\n          Recent Notifications\r\n        </h5>\r\n        <!--end:Heading-->\r\n\r\n        <!--begin::Item-->\r\n        <div class=\"d-flex align-items-center bg-light-warning rounded p-5 gutter-b\">\r\n          <span class=\"svg-icon svg-icon-warning mr-5\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/Home/Library.svg'\" cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-lg\"></span>\r\n          </span>\r\n\r\n          <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n            <a href=\"#\" class=\"font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1\">Another purpose\r\n              persuade</a>\r\n            <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n          </div>\r\n\r\n          <span class=\"font-weight-bolder text-warning py-1 font-size-lg\">+28%</span>\r\n        </div>\r\n        <!--end::Item-->\r\n\r\n        <!--begin::Item-->\r\n        <div class=\"d-flex align-items-center bg-light-success rounded p-5 gutter-b\">\r\n          <span class=\"svg-icon svg-icon-success mr-5\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/Communication/Write.svg'\" cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-lg\"></span>\r\n          </span>\r\n          <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n            <a href=\"#\" class=\"font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1\">Would be to\r\n              people</a>\r\n            <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n          </div>\r\n\r\n          <span class=\"font-weight-bolder text-success py-1 font-size-lg\">+50%</span>\r\n        </div>\r\n        <!--end::Item-->\r\n\r\n        <!--begin::Item-->\r\n        <div class=\"d-flex align-items-center bg-light-danger rounded p-5 gutter-b\">\r\n          <span class=\"svg-icon svg-icon-danger mr-5\">\r\n            <span [inlineSVG]=\"\r\n                './assets/media/svg/icons/Communication/Group-chat.svg'\r\n              \" cacheSVG=\"true\" class=\"svg-icon svg-icon-lg\"></span>\r\n          </span>\r\n          <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n            <a href=\"#\" class=\"font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1\">Purpose would be to\r\n              persuade</a>\r\n            <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n          </div>\r\n\r\n          <span class=\"font-weight-bolder text-danger py-1 font-size-lg\">-27%</span>\r\n        </div>\r\n        <!--end::Item-->\r\n\r\n        <!--begin::Item-->\r\n        <div class=\"d-flex align-items-center bg-light-info rounded p-5\">\r\n          <span class=\"svg-icon svg-icon-info mr-5\">\r\n            <span [inlineSVG]=\"'./assets/media/svg/icons/General/Attachment2.svg'\" cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-lg\"></span>\r\n          </span>\r\n\r\n          <div class=\"d-flex flex-column flex-grow-1 mr-2\">\r\n            <a href=\"#\" class=\"font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1\">The best\r\n              product</a>\r\n            <span class=\"text-muted font-size-sm\">Due in 2 Days</span>\r\n          </div>\r\n\r\n          <span class=\"font-weight-bolder text-info py-1 font-size-lg\">+8%</span>\r\n        </div>\r\n        <!--end::Item-->\r\n      </div>\r\n      <!--end::Notifications-->\r\n    </div>\r\n    <!--end::Content-->\r\n  </ng-container>\r\n</div>\r\n<!-- end::User Panel-->");

/***/ }),

/***/ 19870:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/scroll-top/scroll-top.component.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Scrolltop-->\r\n<div id=\"kt_scrolltop\" class=\"scrolltop\">\r\n  <span\r\n    [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Up-2.svg'\"\r\n    cacheSVG=\"true\"\r\n    class=\"svg-icon\"\r\n  ></span>\r\n</div>\r\n<!--end::Scrolltop-->\r\n");

/***/ }),

/***/ 785:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/extras/toolbar/toolbar.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Sticky Toolbar-->\r\n<ul class=\"sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4\">\r\n  <!--begin::Item-->\r\n  <li\r\n    class=\"nav-item mb-2\"\r\n    data-toggle=\"tooltip\"\r\n    title=\"Layout Builder\"\r\n    data-placement=\"left\"\r\n    (click)=\"navigateToBuilder()\"\r\n  >\r\n    <a\r\n      class=\"btn btn-sm btn-icon btn-bg-light btn-icon-primary btn-hover-primary cursor-pointer\"\r\n    >\r\n      <i class=\"flaticon2-gear\"></i>\r\n    </a>\r\n  </li>\r\n  <!--end::Item-->\r\n\r\n  <!--begin::Item-->\r\n  <li\r\n    class=\"nav-item mb-2\"\r\n    data-toggle=\"tooltip\"\r\n    title=\"Documentation\"\r\n    data-placement=\"left\"\r\n  >\r\n    <a\r\n      class=\"btn btn-sm btn-icon btn-bg-light btn-icon-warning btn-hover-warning\"\r\n      href=\"https://keenthemes.com/metronic/?page=docs&section=angular-overview\"\r\n      target=\"_blank\"\r\n    >\r\n      <i class=\"flaticon2-telegram-logo\"></i>\r\n    </a>\r\n  </li>\r\n  <!--end::Item-->\r\n</ul>\r\n<!--end::Sticky Toolbar-->\r\n");

/***/ }),

/***/ 41031:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader-wrapper/subheader-wrapper.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-subheader1></app-subheader1>");

/***/ }),

/***/ 94340:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader1/subheader1.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div class=\"subheader py-2 py-lg-6\" [ngClass]=\"subheaderCSSClasses\" id=\"kt_subheader\">\r\n    <div [ngClass]=\"subheaderContainerCSSClasses\" class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\">\r\n        <!--begin::Info-->\r\n        <div class=\"d-flex align-items-center flex-wrap mr-1\">\r\n            <ng-container *ngIf=\"subheaderMobileToggle\">\r\n                <!--begin::Mobile Toggle-->\r\n                <button class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\" id=\"kt_subheader_mobile_toggle\">\r\n          <span></span>\r\n        </button>\r\n                <!--end::Mobile Toggle-->\r\n            </ng-container>\r\n\r\n            <!--begin::Page Heading-->\r\n            <div class=\"d-flex align-items-baseline flex-wrap mr-5\">\r\n                <!--begin::Page Title-->\r\n                <ng-container *ngIf=\"title$ | async as _title\">\r\n                    <h5 class=\" font-weight-bold my-1 mr-5\">\r\n                        {{ _title }}\r\n                        <ng-container *ngIf=\"subheaderDisplayDesc\">\r\n                            <ng-container *ngIf=\"description$ | async as _description\">\r\n                                <small>{{ _description }}</small>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </h5>\r\n                </ng-container>\r\n                <!--end::Page Title-->\r\n\r\n                <!--begin::Breadcrumb-->\r\n                <ul class=\"breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2\">\r\n                    <li class=\"breadcrumb-item\" *ngFor=\"let bc of breadcrumbs ;let index=index\" routerLinkActive=\"active\">\r\n                        <a *ngIf=\"index==breadcrumbs.length -1\" class=\"text-muted\">\r\n              {{ bc.linkText }}\r\n            </a>\r\n                        <a *ngIf=\"index!=breadcrumbs.length -1\" [routerLink]=\"bc.linkPath\" class=\"text-muted\">\r\n              {{ bc.linkText }}\r\n            </a>\r\n\r\n                    </li>\r\n                </ul>\r\n                <!--end::Breadcrumb-->\r\n            </div>\r\n            <!--end::Page Heading-->\r\n        </div>\r\n        <!--end::Info-->\r\n\r\n        <!--begin::Toolbar-->\r\n        <div class=\"d-flex align-items-center\" *ngIf=\"false\">\r\n            <ng-container *ngIf=\"subheaderDisplayDaterangepicker\">\r\n                <!--begin::Daterange-->\r\n                <a class=\"btn btn-light-primary btn-sm font-weight-bold mr-2 cursor-pointer\" id=\"kt_dashboard_daterangepicker\" data-toggle=\"tooltip\" title=\"Select dashboard daterange\" data-placement=\"left\">\r\n                    <span class=\"opacity-60 font-weight-bold mr-2\" id=\"kt_dashboard_daterangepicker_title\">Today</span\r\n          >\r\n          <span class=\"font-weight-bold\" id=\"kt_dashboard_daterangepicker_date\"\r\n            >Aug 16</span\r\n          >\r\n        </a>\r\n        <!--end::Daterange-->\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!subheaderDisplayDaterangepicker\">\r\n        <!--begin::Actions-->\r\n        <a\r\n          class=\"btn btn-light-primary font-weight-bolder btn-sm cursor-pointer\"\r\n        >\r\n          Actions\r\n        </a>\r\n        <!--end::Actions-->\r\n      </ng-container>\r\n\r\n      <!--begin::Dropdown-->\r\n      <!-- <div\r\n        class=\"dropdown dropdown-inline\"\r\n        data-toggle=\"tooltip\"\r\n        title=\"Quick actions\"\r\n        placement=\"bottom-right\"\r\n        ngbDropdown\r\n      >\r\n        <a\r\n          class=\"btn btn-icon cursor-pointer\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          ngbDropdownToggle\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Files/File-plus.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-success svg-icon-2x\"\r\n          ></span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-md dropdown-menu-right p-0 m-0\" ngbDropdownMenu>\r\n                    <app-dropdown-menu1></app-dropdown-menu1>\r\n                </div>\r\n        </div> -->\r\n        <!--end::Dropdown-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n</div>\r\n</div>\r\n<!--end::Subheader-->");

/***/ }),

/***/ 13029:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader2/subheader2.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div\r\n  class=\"subheader py-2 py-lg-6\"\r\n  [ngClass]=\"subheaderCSSClasses\"\r\n  id=\"kt_subheader\"\r\n>\r\n  <div\r\n    [ngClass]=\"subheaderContainerCSSClasses\"\r\n    class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\"\r\n  >\r\n    <!--begin::Info-->\r\n    <div class=\"d-flex align-items-center flex-wrap mr-2\">\r\n      <ng-container *ngIf=\"subheaderMobileToggle\">\r\n        <!--begin::Mobile Toggle-->\r\n        <button\r\n          class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\"\r\n          id=\"kt_subheader_mobile_toggle\"\r\n        >\r\n          <span></span>\r\n        </button>\r\n        <!--end::Mobile Toggle-->\r\n      </ng-container>\r\n\r\n      <!--begin::Page Title-->\r\n      <ng-container *ngIf=\"title$ | async as _title\">\r\n        <h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">\r\n          {{ _title }}\r\n          <ng-container *ngIf=\"subheaderDisplayDesc\">\r\n            <ng-container *ngIf=\"description$ | async as _description\">\r\n              <small>{{ _description }}</small>\r\n            </ng-container>\r\n          </ng-container>\r\n        </h5>\r\n      </ng-container>\r\n      <!--end::Page Title-->\r\n      <!--begin::Action-->\r\n      <div\r\n        class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200\"\r\n      ></div>\r\n\r\n      <span class=\"text-muted font-weight-bold mr-4\">#XRS-45670</span>\r\n\r\n      <a href=\"#\" class=\"btn btn-light-primary font-weight-bolder btn-sm\">\r\n        Add New\r\n      </a>\r\n      <!--end::Action-->\r\n    </div>\r\n    <!--end::Info-->\r\n\r\n    <!--begin::Toolbar-->\r\n    <div class=\"d-flex align-items-center flex-wrap\">\r\n      <!--begin::Actions-->\r\n      <a\r\n        class=\"btn btn-bg-white btn-icon-info btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon2-file icon-md\"></i>\r\n      </a>\r\n\r\n      <a\r\n        class=\"btn btn-bg-white btn-icon-danger btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon-download-1 icon-md\"></i>\r\n      </a>\r\n\r\n      <a\r\n        class=\"btn btn-bg-white btn-icon-success btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon2-fax icon-md\"></i>\r\n      </a>\r\n\r\n      <a\r\n        class=\"btn btn-bg-white btn-icon-warning btn-hover-primary btn-icon mr-3 my-2 my-lg-0 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon2-settings icon-md\"></i>\r\n      </a>\r\n      <!--end::Actions-->\r\n\r\n      <ng-container *ngIf=\"subheaderDisplayDaterangepicker\">\r\n        <!--begin::Daterange-->\r\n        <a\r\n          class=\"btn btn-bg-white font-weight-bold mr-3 my-2 my-lg-0 cursor-pointer\"\r\n          id=\"kt_dashboard_daterangepicker\"\r\n          data-toggle=\"tooltip\"\r\n          title=\"Select dashboard daterange\"\r\n          data-placement=\"left\"\r\n        >\r\n          <span\r\n            class=\"text-muted font-weight-bold mr-2\"\r\n            id=\"kt_dashboard_daterangepicker_title\"\r\n            >Today</span\r\n          >\r\n          <span\r\n            class=\"text-primary font-weight-bolder\"\r\n            id=\"kt_dashboard_daterangepicker_date\"\r\n            >Aug 16</span\r\n          >\r\n        </a>\r\n        <!--end::Daterange-->\r\n      </ng-container>\r\n\r\n      <!--begin::Dropdown-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n    <div\r\n      class=\"dropdown dropdown-inline my-2 my-lg-0\"\r\n      data-toggle=\"tooltip\"\r\n      title=\"Quick actions\"\r\n      data-placement=\"left\"\r\n      placement=\"bottom-right\"\r\n      ngbDropdown\r\n    >\r\n      <a\r\n        class=\"btn btn-primary btn-icon cursor-pointer\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        ngbDropdownToggle\r\n      >\r\n        <span\r\n          [inlineSVG]=\"'./assets/media/svg/icons/General/Settings-2.svg'\"\r\n          cacheSVG=\"true\"\r\n          class=\"svg-icon svg-icon-md\"\r\n        ></span>\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu p-0 sm-0 dropdown-menu-md dropdown-menu-right\"\r\n        ngbDropdownMenu\r\n      >\r\n        <app-dropdown-menu1></app-dropdown-menu1>\r\n      </div>\r\n    </div>\r\n    <!--end::Dropdown-->\r\n  </div>\r\n</div>\r\n<!--end::Subheader-->\r\n");

/***/ }),

/***/ 85342:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader3/subheader3.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div\r\n  class=\"subheader py-2 py-lg-4\"\r\n  id=\"kt_subheader\"\r\n  [ngClass]=\"subheaderCSSClasses\"\r\n>\r\n  <div\r\n    [ngClass]=\"subheaderContainerCSSClasses\"\r\n    class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\"\r\n  >\r\n    <!--begin::Info-->\r\n    <div class=\"d-flex align-items-center flex-wrap mr-2\">\r\n      <ng-container *ngIf=\"subheaderMobileToggle\">\r\n        <!--begin::Mobile Toggle-->\r\n        <button\r\n          class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\"\r\n          id=\"kt_subheader_mobile_toggle\"\r\n        >\r\n          <span></span>\r\n        </button>\r\n        <!--end::Mobile Toggle-->\r\n      </ng-container>\r\n\r\n      <!--begin::Page Title-->\r\n      <ng-container *ngIf=\"title$ | async as _title\">\r\n        <h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">\r\n          {{ _title }}\r\n          <ng-container *ngIf=\"subheaderDisplayDesc\">\r\n            <ng-container *ngIf=\"description$ | async as _description\">\r\n              <small>{{ _description }}</small>\r\n            </ng-container>\r\n          </ng-container>\r\n        </h5>\r\n      </ng-container>\r\n      <!--end::Page Title-->\r\n\r\n      <!--begin::Actions-->\r\n      <div\r\n        class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200\"\r\n      ></div>\r\n\r\n      <span class=\"text-muted font-weight-bold mr-4\">#XRS-45670</span>\r\n\r\n      <a class=\"btn btn-light-warning font-weight-bolder btn-sm cursor-pointer\">\r\n        Add New\r\n      </a>\r\n      <!--end::Actions-->\r\n    </div>\r\n    <!--end::Info-->\r\n\r\n    <!--begin::Toolbar-->\r\n    <div class=\"d-flex align-items-center\">\r\n      <!--begin::Actions-->\r\n      <a\r\n        class=\"btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer\"\r\n      >\r\n        Today\r\n      </a>\r\n      <a\r\n        class=\"btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer\"\r\n      >\r\n        Month\r\n      </a>\r\n      <a\r\n        class=\"btn btn-clean btn-sm font-weight-bold font-size-base mr-1 cursor-pointer\"\r\n      >\r\n        Year\r\n      </a>\r\n      <!--end::Actions-->\r\n\r\n      <ng-container *ngIf=\"subheaderDisplayDaterangepicker\">\r\n        <!--begin::Daterange-->\r\n        <a\r\n          class=\"btn btn-sm btn-light font-weight-bold mr-2 cursor-pointer\"\r\n          id=\"kt_dashboard_daterangepicker\"\r\n          data-toggle=\"tooltip\"\r\n          title=\"Select dashboard daterange\"\r\n          data-placement=\"left\"\r\n        >\r\n          <span\r\n            class=\"text-muted font-size-base font-weight-bold mr-2\"\r\n            id=\"kt_dashboard_daterangepicker_title\"\r\n            >Today</span\r\n          >\r\n          <span\r\n            class=\"text-primary font-size-base font-weight-bolder\"\r\n            id=\"kt_dashboard_daterangepicker_date\"\r\n            >Aug 16</span\r\n          >\r\n        </a>\r\n        <!--end::Daterange-->\r\n      </ng-container>\r\n\r\n      <!--begin::Dropdowns-->\r\n      <div\r\n        class=\"dropdown dropdown-inline\"\r\n        data-toggle=\"tooltip\"\r\n        title=\"Quick actions\"\r\n        data-placement=\"left\"\r\n        placement=\"bottom-right\"\r\n        ngbDropdown\r\n      >\r\n        <a\r\n          class=\"btn btn-sm btn-clean btn-icon cursor-pointer\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          ngbDropdownToggle\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Files/File-plus.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-success svg-icon-lg\"\r\n          ></span>\r\n        </a>\r\n        <div\r\n          ngbDropdownMenu\r\n          class=\"dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right py-3\"\r\n        >\r\n          <app-dropdown-menu4></app-dropdown-menu4>\r\n        </div>\r\n      </div>\r\n      <!--end::Dropdowns-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n  </div>\r\n</div>\r\n<!--end::Subheader-->\r\n");

/***/ }),

/***/ 30937:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader4/subheader4.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div\r\n  class=\"subheader py-2 py-lg-4\"\r\n  id=\"kt_subheader\"\r\n  [ngClass]=\"subheaderCSSClasses\"\r\n>\r\n  <div\r\n    [ngClass]=\"subheaderContainerCSSClasses\"\r\n    class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\"\r\n  >\r\n    <!--begin::Info-->\r\n    <div class=\"d-flex align-items-center flex-wrap mr-2\">\r\n      <ng-container *ngIf=\"subheaderMobileToggle\">\r\n        <!--begin::Mobile Toggle-->\r\n        <button\r\n          class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\"\r\n          id=\"kt_subheader_mobile_toggle\"\r\n        >\r\n          <span></span>\r\n        </button>\r\n        <!--end::Mobile Toggle-->\r\n      </ng-container>\r\n\r\n      <!--begin::Actions-->\r\n      <a\r\n        class=\"btn btn-light-danger font-weight-bolder btn-sm mr-2 cursor-pointer\"\r\n      >\r\n        Reports\r\n      </a>\r\n      <a\r\n        class=\"btn btn-light-success font-weight-bolder btn-sm mr-2 cursor-pointer\"\r\n      >\r\n        Import\r\n      </a>\r\n      <!--end::Actions-->\r\n\r\n      <!--begin::Inputs-->\r\n      <div class=\"input-group input-group-sm input-group-solid max-w-175px\">\r\n        <input type=\"text\" class=\"form-control form-control-sm pl-4\" placeholder=\"Search...\" />\r\n        <div class=\"input-group-append\">\r\n          <span class=\"input-group-text\">\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/General/Search.svg'\"\r\n              cacheSVG=\"true\"\r\n              class=\"svg-icon svg-icon-md\"\r\n            ></span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <!--end::Inputs-->\r\n    </div>\r\n    <!--end::Info-->\r\n\r\n    <!--begin::Toolbar-->\r\n    <div class=\"d-flex align-items-center\">\r\n      <ng-container *ngIf=\"subheaderDisplayDaterangepicker\">\r\n        <!--begin::Daterange-->\r\n        <a\r\n          class=\"btn btn-light btn-sm font-weight-bold mr-2 cursor-pointer\"\r\n          id=\"kt_dashboard_daterangepicker\"\r\n          data-toggle=\"tooltip\"\r\n          title=\"Select dashboard daterange\"\r\n          data-placement=\"left\"\r\n        >\r\n          <span\r\n            class=\"text-muted font-weight-bold mr-2\"\r\n            id=\"kt_dashboard_daterangepicker_title\"\r\n            >Today</span\r\n          >\r\n          <span\r\n            class=\"text-primary font-weight-bold\"\r\n            id=\"kt_dashboard_daterangepicker_date\"\r\n            >Aug 16</span\r\n          >\r\n          <span\r\n            [inlineSVG]=\"\r\n              './assets/media/svg/icons/Communication/Chat-check.svg'\r\n            \"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-sm svg-icon-primary ml-1\"\r\n          ></span>\r\n        </a>\r\n        <!--end::Daterange-->\r\n      </ng-container>\r\n\r\n      <!--begin::Actions-->\r\n      <a\r\n        class=\"btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon2-file text-muted\"></i>\r\n      </a>\r\n      <a\r\n        class=\"btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon-download-1 text-muted\"></i>\r\n      </a>\r\n      <a\r\n        class=\"btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon2-fax text-muted\"></i>\r\n      </a>\r\n      <a\r\n        class=\"btn btn-light btn-hover-primary btn-sm btn-icon mr-2 cursor-pointer\"\r\n      >\r\n        <i class=\"flaticon2-settings text-muted\"></i>\r\n      </a>\r\n      <!--end::Actions-->\r\n\r\n      <!--begin::Dropdowns-->\r\n      <div\r\n        class=\"dropdown dropdown-inline\"\r\n        data-toggle=\"tooltip\"\r\n        title=\"Quick actions\"\r\n        data-placement=\"left\"\r\n        placement=\"bottom-right\"\r\n        ngbDropdown\r\n      >\r\n        <a\r\n          class=\"btn btn-icon btn-light-primary btn-sm cursor-pointer\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          ngbDropdownToggle\r\n        >\r\n          <i class=\"ki ki-plus icon-1x\"></i>\r\n        </a>\r\n        <div\r\n          ngbDropdownMenu\r\n          class=\"dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right\"\r\n        >\r\n          <app-dropdown-menu2></app-dropdown-menu2>\r\n        </div>\r\n      </div>\r\n      <!--end::Dropdowns-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n  </div>\r\n</div>\r\n<!--end::Subheader-->\r\n");

/***/ }),

/***/ 86216:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader5/subheader5.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div\r\n  class=\"subheader py-2 py-lg-4\"\r\n  [ngClass]=\"subheaderCSSClasses\"\r\n  id=\"kt_subheader\"\r\n>\r\n  <div\r\n    [ngClass]=\"subheaderContainerCSSClasses\"\r\n    class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\"\r\n  >\r\n    <!--begin::Details-->\r\n    <div class=\"d-flex align-items-center flex-wrap mr-2\">\r\n      <ng-container *ngIf=\"subheaderMobileToggle\">\r\n        <!--begin::Mobile Toggle-->\r\n        <button\r\n          class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\"\r\n          id=\"kt_subheader_mobile_toggle\"\r\n        >\r\n          <span></span>\r\n        </button>\r\n        <!--end::Mobile Toggle-->\r\n      </ng-container>\r\n\r\n      <!--begin::Title-->\r\n      <ng-container *ngIf=\"title$ | async as _title\">\r\n        <h5 class=\"text-dark font-weight-bold mt-2 mb-2 mr-5\">\r\n          {{ _title }}\r\n        </h5>\r\n      </ng-container>\r\n      <!--end::Title-->\r\n\r\n      <!--begin::Separator-->\r\n      <div\r\n        class=\"subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200\"\r\n      ></div>\r\n      <!--end::Separator-->\r\n\r\n      <!--begin::Search Form-->\r\n      <div class=\"d-flex align-items-center\" id=\"kt_subheader_search\">\r\n        <ng-container *ngIf=\"subheaderDisplayDesc\">\r\n          <ng-container *ngIf=\"description$ | async as _description\">\r\n            <span class=\"text-dark-50 font-weight-bold\" id=\"kt_subheader_total\">\r\n              {{ _description }}</span\r\n            >\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n        <form class=\"ml-5\">\r\n          <div\r\n            class=\"input-group input-group-sm input-group-solid\"\r\n            style=\"max-width: 175px;\"\r\n          >\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control form-control-sm\"\r\n              id=\"kt_subheader_search_form\"\r\n              placeholder=\"Search...\"\r\n            />\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\">\r\n                <span\r\n                  [inlineSVG]=\"'./assets/media/svg/icons/General/Search.svg'\"\r\n                  cacheSVG=\"true\"\r\n                  class=\"svg-icon\"\r\n                ></span>\r\n                <!--<i class=\"flaticon2-search-1 icon-sm\"></i>-->\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <!--end::Search Form-->\r\n    </div>\r\n    <!--end::Details-->\r\n\r\n    <!--begin::Toolbar-->\r\n    <div class=\"d-flex align-items-center\">\r\n      <!--begin::Dropdown-->\r\n      <div\r\n        class=\"dropdown dropdown-inline\"\r\n        data-toggle=\"tooltip\"\r\n        title=\"Quick actions\"\r\n        placement=\"bottom-right\"\r\n        ngbDropdown\r\n      >\r\n        <a\r\n          class=\"btn btn-icon cursor-pointer\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          ngbDropdownToggle\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Files/File-plus.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-success svg-icon-2x\"\r\n          ></span>\r\n        </a>\r\n        <div\r\n          class=\"dropdown-menu dropdown-menu-md dropdown-menu-right p-0 m-0\"\r\n          ngbDropdownMenu\r\n        >\r\n          <app-dropdown-menu3></app-dropdown-menu3>\r\n        </div>\r\n      </div>\r\n      <!--end::Dropdown-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n  </div>\r\n</div>\r\n<!--end::Subheader-->\r\n");

/***/ }),

/***/ 50681:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader6/subheader6.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div\r\n  class=\"subheader py-3 py-lg-8\"\r\n  [ngClass]=\"subheaderCSSClasses\"\r\n  id=\"kt_subheader\"\r\n>\r\n  <div\r\n    [ngClass]=\"subheaderContainerCSSClasses\"\r\n    class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\"\r\n  >\r\n    <!--begin::Info-->\r\n    <div class=\"d-flex align-items-center mr-1\">\r\n      <ng-container *ngIf=\"subheaderMobileToggle\">\r\n        <!--begin::Mobile Toggle-->\r\n        <button\r\n          class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\"\r\n          id=\"kt_subheader_mobile_toggle\"\r\n        >\r\n          <span></span>\r\n        </button>\r\n        <!--end::Mobile Toggle-->\r\n      </ng-container>\r\n\r\n      <!--begin::Page Heading-->\r\n      <div class=\"d-flex align-items-baseline flex-wrap mr-5\">\r\n        <!--begin::Page Title-->\r\n        <ng-container *ngIf=\"title$ | async as _title\">\r\n          <h2\r\n            class=\"d-flex align-items-center text-dark font-weight-bold my-1 mr-3\"\r\n          >\r\n            {{ _title }}\r\n            <ng-container *ngIf=\"subheaderDisplayDesc\">\r\n              <ng-container *ngIf=\"description$ | async as _description\">\r\n                <small>{{ _description }}</small>\r\n              </ng-container>\r\n            </ng-container>\r\n          </h2>\r\n        </ng-container>\r\n        <!--end::Page Title-->\r\n        <!--begin::Breadcrumb-->\r\n        <ul\r\n          class=\"breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold my-2 p-0\"\r\n        >\r\n          <li\r\n            class=\"breadcrumb-item\"\r\n            *ngFor=\"let bc of breadcrumbs$ | async\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            <a [routerLink]=\"bc.linkPath\" class=\"text-muted\">\r\n              {{ bc.linkText }}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!--end::Breadcrumb-->\r\n      </div>\r\n      <!--end::Page Heading-->\r\n    </div>\r\n    <!--end::Info-->\r\n\r\n    <!--begin::Toolbar-->\r\n    <div class=\"d-flex align-items-center flex-wrap\">\r\n      <!--begin::Button-->\r\n      <a\r\n        class=\"btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2\"\r\n      >\r\n        <span\r\n          [inlineSVG]=\"'./assets/media/svg/icons/Communication/Add-user.svg'\"\r\n          cacheSVG=\"true\"\r\n          class=\"svg-icon svg-icon-lg\"\r\n        ></span>\r\n        <span class=\"d-none d-md-inline\">New Member</span>\r\n      </a>\r\n      <!--end::Button-->\r\n\r\n      <!--begin::Dropdown-->\r\n      <div\r\n        class=\"dropdown dropdown-inline\"\r\n        data-toggle=\"tooltip\"\r\n        title=\"Quick actions\"\r\n        data-placement=\"left\"\r\n        placement=\"bottom-right\"\r\n        ngbDropdown\r\n      >\r\n        <a\r\n          class=\"btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\"\r\n          ngbDropdownToggle\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Files/File.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon svg-icon-lg\"\r\n          ></span>\r\n          <span class=\"d-none d-md-inline\">New Report</span>\r\n        </a>\r\n        <div\r\n          class=\"dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right\"\r\n          ngbDropdownMenu\r\n        >\r\n          <app-dropdown-menu1></app-dropdown-menu1>\r\n        </div>\r\n      </div>\r\n      <!--end::Dropdown-->\r\n      <!--begin::Button-->\r\n      <a\r\n        class=\"btn btn-primary btn-icon font-weight-bold\"\r\n        data-toggle=\"modal\"\r\n        data-target=\"#kt_chat_modal\"\r\n      >\r\n        <span\r\n          [inlineSVG]=\"'./assets/media/svg/icons/Communication/Group-chat.svg'\"\r\n          cacheSVG=\"true\"\r\n          class=\"svg-icon svg-icon-lg\"\r\n        ></span>\r\n      </a>\r\n      <!--end::Button-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n  </div>\r\n</div>\r\n<!--end::Subheader-->\r\n");

/***/ }),

/***/ 70935:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_metronic/partials/layout/subheader/subheader7/subheader7.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Subheader-->\r\n<div class=\"subheader py-2 py-lg-12\" [ngClass]=\"subheaderCSSClasses\" id=\"kt_subheader\">\r\n  <div [ngClass]=\"subheaderContainerCSSClasses\"\r\n    class=\"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap\">\r\n    <!--begin::Info-->\r\n    <div class=\"d-flex align-items-center flex-wrap mr-1\">\r\n      <ng-container *ngIf=\"subheaderMobileToggle\">\r\n        <!--begin::Mobile Toggle-->\r\n        <button class=\"burger-icon burger-icon-left mr-4 d-inline-block d-lg-none\" id=\"kt_subheader_mobile_toggle\">\r\n          <span></span>\r\n        </button>\r\n        <!--end::Mobile Toggle-->\r\n      </ng-container>\r\n\r\n      <!--begin::Page Heading-->\r\n      <div class=\"d-flex flex-column\">\r\n        <!--begin::Page Title-->\r\n        <ng-container *ngIf=\"title$ | async as _title\">\r\n          <h2 class=\"text-white font-weight-bold my-2 mr-5\">\r\n            {{ _title }}\r\n            <ng-container *ngIf=\"subheaderDisplayDesc\">\r\n              <ng-container *ngIf=\"description$ | async as _description\">\r\n                <small>{{ _description }}</small>\r\n              </ng-container>\r\n            </ng-container>\r\n          </h2>\r\n        </ng-container>\r\n        <!--end::Page Title-->\r\n        <!--begin::Breadcrumb-->\r\n        <ng-container *ngIf=\"breadcrumbs$ | async as breadcrumbs\">\r\n          <div class=\"d-flex align-items-center font-weight-bold my-2\">\r\n            <a href=\"/\" class=\"opacity-75 hover-opacity-100\">\r\n              <i class=\"flaticon2-shelter text-white icon-1x\"></i>\r\n            </a>\r\n            <ng-container *ngFor=\"let bc of breadcrumbs\">\r\n              <span class=\"label label-dot label-sm bg-white opacity-75 mx-3\"></span>\r\n              <a [routerLink]=\"bc.linkPath\" routerLinkActive=\"active\"\r\n                class=\"text-white text-hover-white opacity-75 hover-opacity-100\">\r\n                {{ bc.linkText }}\r\n              </a>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n        <!--end::Breadcrumb-->\r\n      </div>\r\n      <!--end::Page Heading-->\r\n    </div>\r\n    <!--end::Info-->\r\n\r\n    <!--begin::Toolbar-->\r\n    <div class=\"d-flex align-items-center\">\r\n      <!--begin::Button-->\r\n      <a href=\"#\" class=\"btn btn-transparent-white font-weight-bold py-3 px-6 mr-2\">\r\n        Reports\r\n      </a>\r\n      <!--end::Button-->\r\n\r\n      <!--begin::Dropdown-->\r\n      <div class=\"dropdown dropdown-inline ml-2\" data-toggle=\"tooltip\" title=\"Quick actions\" data-placement=\"left\"\r\n        placement=\"bottom-right\" ngbDropdown>\r\n        <a class=\"btn btn-white font-weight-bold py-3 px-6\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\" ngbDropdownToggle>\r\n          Actions\r\n        </a>\r\n        <div class=\"dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right\" ngbDropdownMenu>\r\n          <app-dropdown-menu4></app-dropdown-menu4>\r\n        </div>\r\n      </div>\r\n      <!--end::Dropdown-->\r\n    </div>\r\n    <!--end::Toolbar-->\r\n  </div>\r\n</div>\r\n<!--end::Subheader-->");

/***/ }),

/***/ 59745:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/aside-dynamic/aside-dynamic.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Brand-->\r\n<div class=\"brand flex-column-auto\" id=\"kt_brand\" [ngClass]=\"brandClasses\" style=\"padding-right: 5px;\">\r\n  <!--begin::Logo-->\r\n  <a routerLink=\"/\" class=\"brand-logo\">\r\n      <img alt=\"Logo\" [attr.src]=\"headerLogo\" style=\"width: 55px;\" />\r\n      <!-- <h2>BlueStone</h2> -->\r\n  </a>\r\n  <!--end::Logo-->\r\n\r\n  <ng-container *ngIf=\"asideSelfMinimizeToggle\">\r\n      <button class=\"brand-toggle btn btn-sm px-0\" id=\"kt_aside_toggle\">\r\n          <span [inlineSVG]=\"\r\n        './assets/media/svg/icons/Navigation/Angle-double-left.svg'\r\n      \" [cacheSVG]=\"true\" class=\"svg-icon svg-icon-xl\"></span>\r\n      </button>\r\n  </ng-container>\r\n</div>\r\n<!--end::Brand-->\r\n\r\n<!--begin::Aside Menu-->\r\n<div class=\"aside-menu-wrapper flex-column-fluid\" id=\"kt_aside_menu_wrapper\">\r\n  <ng-container *ngIf=\"disableAsideSelfDisplay\">\r\n      <!--begin::Header Logo-->\r\n      <a routerLink=\"/\">\r\n          <img alt=\"Logo\" [attr.src]=\"headerLogo\" />\r\n      </a>\r\n      <!--end::Header Logo-->\r\n  </ng-container>\r\n  <!--begin::Menu Container-->\r\n  <ng-container *ngIf=\"menuConfig && menuConfig.items\">\r\n      <div id=\"kt_aside_menu\" class=\"aside-menu\" [ngClass]=\"asideMenuCSSClasses\" data-menu-vertical=\"1\"\r\n          [attr.data-menu-scroll]=\"asideMenuScroll\" [attr.data-menu-dropdown]=\"asideMenuDropdown\"\r\n          data-menu-dropdown-timeout=\"500\">\r\n          <!-- begin::Menu Nav -->\r\n          <ul class=\"menu-nav\" [ngClass]=\"ulCSSClasses\">\r\n              <ng-container *ngFor=\"let item of menuConfig.items\">\r\n                  <ng-container *ngIf=\"item.section\" [ngTemplateOutlet]=\"menuItemSectionTemplate\"\r\n                      [ngTemplateOutletContext]=\"{ item: item }\"></ng-container>\r\n                  <ng-container *ngIf=\"item.separator\" [ngTemplateOutlet]=\"menuItemSeparatorTemplate\"></ng-container>\r\n                  <ng-container *ngIf=\"(item.title || item.titleMM) && item.show\"\r\n                      [ngTemplateOutlet]=\"menu1LevelTemplate\" [ngTemplateOutletContext]=\"{ item: item }\">\r\n                  </ng-container>\r\n              </ng-container>\r\n              <!-- <li class=\"menu-item \">\r\n                  <a class=\"menu-link\" href=\"javascript:;\" (click)=\"reRun()\">\r\n                      <span class=\"flaticon-refresh svg-icon menu-icon\"></span>\r\n                      <span class=\"menu-text\">ReRun</span>\r\n                  </a>\r\n              </li> -->\r\n              <li class=\"menu-item \">\r\n                  <a class=\"menu-link\" href=\"javascript:;\" (click)=\"logout()\">\r\n                      <span class=\"flaticon-logout svg-icon menu-icon\"></span>\r\n                      <span class=\"menu-text\">Logout</span>\r\n                  </a>\r\n              </li>\r\n\r\n          </ul>\r\n          <!-- end::Menu Nav -->\r\n      </div>\r\n      <!--end::Menu Container-->\r\n  </ng-container>\r\n</div>\r\n<!--end::Aside Menu-->\r\n\r\n<!-- begin::1 Level -->\r\n<ng-template #menu1LevelTemplate let-item=\"item\">\r\n  <!-- begin::if don't have submenu -->\r\n  <ng-container *ngIf=\"!item.submenu_show && item.show\">\r\n      <li class=\"menu-item\" aria-haspopup=\"true\" routerLinkActive=\"menu-item-active\">\r\n          <a class=\"menu-link\" [routerLink]=\"item.page\" routerLinkActive=\"active\">\r\n              <span  [class]=\"item.icon\"\r\n                  cacheSVG=\"true\" class=\"svg-icon menu-icon\"></span>\r\n              <span class=\"menu-text\">{{\r\n                  item.title\r\n                  }}</span>\r\n\r\n          </a>\r\n      </li>\r\n  </ng-container>\r\n  <!-- end::if don't have submenu -->\r\n\r\n  <!-- begin::if has submenu -->\r\n  <ng-container *ngIf=\"item.submenu_show\">\r\n      <li class=\"menu-item menu-item-submenu\" aria-haspopup=\"true\" data-menu-toggle=\"hover\"\r\n          [ngClass]=\"{ 'menu-item-open': isMenuItemActive(item.page) }\" routerLinkActive=\"menu-item-open\">\r\n          <a class=\"menu-link menu-toggle\" [attr.href]=\"item.page\" routerLinkActive=\"active\"\r\n              [ngClass]=\"{ 'active ': isMenuItemActive(item.page) }\">\r\n              <span [class]=\"item.icon\" cacheSVG=\"true\" class=\"svg-icon menu-icon\"></span>\r\n              <!-- <span class=\"menu-text\">{{\r\n                  \"MENU.\"+item.title\r\n                  }}</span> -->\r\n              <span class=\"menu-text\">{{\r\n                  item.title\r\n                  }}</span>\r\n              <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu\">\r\n              <i class=\"menu-arrow\"></i>\r\n              <ul class=\"menu-subnav\">\r\n                  <li class=\"menu-item menu-item-parent\" aria-haspopup=\"true\">\r\n                      <span class=\"menu-link\">\r\n                          <!-- <span class=\"menu-text\">{{\r\n                              \"MENU.\"+item.title\r\n                              }}</span> -->\r\n                          <span class=\"menu-text\">{{\r\n                              item.title\r\n                              }}</span>\r\n                      </span>\r\n                  </li>\r\n                  <ng-container *ngFor=\"let sub of item.submenu\" [ngTemplateOutlet]=\"menu2LevelTemplate\"\r\n                      [ngTemplateOutletContext]=\"{ item: sub }\"></ng-container>\r\n              </ul>\r\n          </div>\r\n      </li>\r\n  </ng-container>\r\n  <!-- end::if has submenu -->\r\n</ng-template>\r\n<!-- end::1 Level -->\r\n\r\n<!-- begin::2 Level -->\r\n<ng-template #menu2LevelTemplate let-item=\"item\">\r\n  <!-- begin::if don't have submenu -->\r\n  <ng-container *ngIf=\"!item.submenu_show && item.show\">\r\n      <li class=\"menu-item\" routerLinkActive=\"menu-item-active\" aria-haspopup=\"true\" *ngIf=\"item.show\"\r\n          data-menu-toggle=\"hover\">\r\n          <a class=\"menu-link\" [routerLink]=\"item.page\" routerLinkActive=\"active\">\r\n              <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n              </i>\r\n              <!-- <span class=\"menu-text\">{{\r\n                  \"MENU.\"+item.title\r\n                  }}</span> -->\r\n              <span class=\"menu-text\">{{\r\n                  item.title\r\n                  }}</span>\r\n          </a>\r\n      </li>\r\n  </ng-container>\r\n  <!-- end::if don't have submenu -->\r\n\r\n  <!-- begin::if has submenu -->\r\n  <ng-container *ngIf=\"item.submenu_show\">\r\n      <li class=\"menu-item menu-item-submenu\" aria-haspopup=\"true\" data-menu-toggle=\"hover\"\r\n          [ngClass]=\"{ 'menu-item-open': isMenuItemActive(item.page) }\" routerLinkActive=\"menu-item-open\">\r\n          <a class=\"menu-link menu-toggle\" [attr.href]=\"item.page\"\r\n              [ngClass]=\"{ 'active ': isMenuItemActive(item.page) }\" routerLinkActive=\"active\">\r\n              <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n              </i>\r\n              <!-- <span class=\"menu-text\">{{\r\n                  \"MENU.\"+item.title\r\n                  }}</span> -->\r\n              <span class=\"menu-text\">{{\r\n                  item.title\r\n                  }}</span>\r\n              <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu\">\r\n              <i class=\"menu-arrow\"></i>\r\n              <ul class=\"menu-subnav\">\r\n                  <!-- {{item| json}} -->\r\n                  <!-- submenu-->\r\n                  <ng-container *ngFor=\"let sub of item.submenu\" [ngTemplateOutlet]=\"menu3LevelTemplate\"\r\n                      [ngTemplateOutletContext]=\"{ item: sub }\"></ng-container>\r\n              </ul>\r\n          </div>\r\n      </li>\r\n  </ng-container>\r\n  <!-- end::if has submenu -->\r\n</ng-template>\r\n<!-- end::2 Level -->\r\n\r\n<!-- begin::3 Level -->\r\n<ng-template #menu3LevelTemplate let-item=\"item\">\r\n  <li *ngIf=\"item.show\" class=\"menu-item\" aria-haspopup=\"true\" routerLinkActive=\"menu-item-active\">\r\n      <a class=\"menu-link\" [routerLink]=\"item.page\" routerLinkActive=\"active\">\r\n          <i class=\"menu-bullet menu-bullet-dot\">\r\n              <span></span>\r\n          </i>\r\n          <!-- <span class=\"menu-text\">{{\r\n              \"MENU.\"+item.title\r\n              }}</span> -->\r\n          <span class=\"menu-text\">{{\r\n              item.title\r\n              }}</span>\r\n      </a>\r\n  </li>\r\n</ng-template>\r\n<!-- end::3 Level -->\r\n\r\n<!-- begin::Separator -->\r\n<ng-template #menuItemSeparatorTemplate>\r\n  <li class=\"menu-separator\"><span></span></li>\r\n</ng-template>\r\n<!-- end::3 Separator -->\r\n\r\n<!-- begin::Section -->\r\n<ng-template #menuItemSectionTemplate let-item=\"item\">\r\n  <li class=\"menu-section\">\r\n      <h4 class=\"menu-text\">{{ item.section }}</h4>\r\n      <i class=\"menu-icon flaticon-more-v2\"></i>\r\n  </li>\r\n</ng-template>\r\n<!-- end::Section -->");

/***/ }),

/***/ 87898:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/aside/aside.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Brand-->\r\n<div class=\"brand flex-column-auto\" id=\"kt_brand\" [ngClass]=\"brandClasses\">\r\n  <!--begin::Logo-->\r\n  <a routerLink=\"/\" class=\"brand-logo\">\r\n    <img alt=\"Logo\" [attr.src]=\"headerLogo\" />\r\n  </a>\r\n  <!--end::Logo-->\r\n\r\n  <ng-container *ngIf=\"asideSelfMinimizeToggle\">\r\n    <button class=\"brand-toggle btn btn-sm px-0\" id=\"kt_aside_toggle\">\r\n      <span\r\n        [inlineSVG]=\"\r\n          './assets/media/svg/icons/Navigation/Angle-double-left.svg'\r\n        \"\r\n        cacheSVG=\"true\"\r\n        class=\"svg-icon svg-icon-xl\"\r\n      ></span>\r\n    </button>\r\n  </ng-container>\r\n</div>\r\n<!--end::Brand-->\r\n\r\n<!--begin::Aside Menu-->\r\n<div class=\"aside-menu-wrapper flex-column-fluid\" id=\"kt_aside_menu_wrapper\">\r\n  <ng-container *ngIf=\"disableAsideSelfDisplay\">\r\n    <!--begin::Header Logo-->\r\n    <a routerLink=\"/\">\r\n      <img alt=\"Logo\" [attr.src]=\"headerLogo\" />\r\n    </a>\r\n    <!--end::Header Logo-->\r\n  </ng-container>\r\n  <!--begin::Menu Container-->\r\n  <div\r\n    id=\"kt_aside_menu\"\r\n    class=\"aside-menu\"\r\n    [ngClass]=\"asideMenuCSSClasses\"\r\n    data-menu-vertical=\"1\"\r\n    [attr.data-menu-scroll]=\"asideMenuScroll\"\r\n    [attr.data-menu-dropdown]=\"asideMenuDropdown\"\r\n    data-menu-dropdown-timeout=\"500\"\r\n  >\r\n    <!-- begin::Menu Nav -->\r\n    <ul class=\"menu-nav\" [ngClass]=\"ulCSSClasses\">\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item\"\r\n        aria-haspopup=\"true\"\r\n        routerLinkActive=\"menu-item-active\"\r\n      >\r\n        <a class=\"menu-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Design/Layers.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\"></span>\r\n        </a>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item\"\r\n        aria-haspopup=\"true\"\r\n        routerLinkActive=\"menu-item-active\"\r\n      >\r\n        <a class=\"menu-link\" routerLink=\"/builder\" routerLinkActive=\"active\">\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Home/Library.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">Layout Builder</span>\r\n        </a>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- Components -->\r\n      <!-- begin::section -->\r\n      <li class=\"menu-section\">\r\n        <h4 class=\"menu-text\">Components</h4>\r\n        <i class=\"menu-icon flaticon-more-v2\"></i>\r\n      </li>\r\n      <!-- end:: section -->\r\n\r\n      <!-- Material-UI -->\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item menu-item-submenu\"\r\n        aria-haspopup=\"true\"\r\n        data-menu-toggle=\"hover\"\r\n        routerLinkActive=\"menu-item-open\"\r\n      >\r\n        <a\r\n          class=\"menu-link menu-toggle\"\r\n          href=\"/material\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Design/Cap-2.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">Material UI</span>\r\n          <i class=\"menu-arrow\"></i>\r\n        </a>\r\n        <div class=\"menu-submenu\">\r\n          <i class=\"menu-arrow\"></i>\r\n          <ul class=\"menu-subnav\">\r\n            <li class=\"menu-item menu-item-parent\" aria-haspopup=\"true\">\r\n              <span class=\"menu-link\">\r\n                <span class=\"menu-text\">Material UI</span>\r\n              </span>\r\n            </li>\r\n\r\n            <!-- Form Controls -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item menu-item-submenu\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n              routerLinkActive=\"menu-item-open\"\r\n            >\r\n              <a\r\n                class=\"menu-link menu-toggle\"\r\n                href=\"/material/form-controls\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Form Controls</span>\r\n                <i class=\"menu-arrow\"></i>\r\n              </a>\r\n              <div class=\"menu-submenu\">\r\n                <i class=\"menu-arrow\"></i>\r\n                <ul class=\"menu-subnav\">\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    aria-haspopup=\"true\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/autocomplete\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Auto Complete</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    aria-haspopup=\"true\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/checkbox\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Checkbox</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    aria-haspopup=\"true\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/radiobutton\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Radio Button</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/datepicker\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Datepicker</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"material/form-controls/formfield\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Form Field</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/input\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Input</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/select\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Select</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/slider\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Slider</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/form-controls/slidertoggle\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Slider Toggle</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- Navigation -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item menu-item-submenu\"\r\n              routerLinkActive=\"menu-item-open\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link menu-toggle\"\r\n                routerLinkActive=\"active\"\r\n                href=\"/material/navigation\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Navigation</span>\r\n                <i class=\"menu-arrow\"></i>\r\n              </a>\r\n              <div class=\"menu-submenu\">\r\n                <i class=\"menu-arrow\"></i>\r\n                <ul class=\"menu-subnav\">\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/navigation/menu\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Menu</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/navigation/sidenav\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Sidenav</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/navigation/toolbar\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Toolbar</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- Layout -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item menu-item-submenu\"\r\n              routerLinkActive=\"menu-item-open\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link menu-toggle\"\r\n                href=\"/material/layout\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Layout</span>\r\n                <i class=\"menu-arrow\"></i>\r\n              </a>\r\n              <div class=\"menu-submenu\">\r\n                <i class=\"menu-arrow\"></i>\r\n                <ul class=\"menu-subnav\">\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/card\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Card</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/divider\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Divider</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/expansion-panel\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Expansion panel</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/grid-list\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Grid list</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/list\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">List</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/tabs\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Tabs</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/stepper\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Stepper</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/layout/tree\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Tree</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- Buttons and Indicators -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item menu-item-submenu\"\r\n              routerLinkActive=\"menu-item-open\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link menu-toggle\"\r\n                routerLinkActive=\"active\"\r\n                href=\"/material/buttons-and-indicators\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Buttons and Indicators</span>\r\n                <i class=\"menu-arrow\"></i>\r\n              </a>\r\n              <div class=\"menu-submenu\">\r\n                <i class=\"menu-arrow\"></i>\r\n                <ul class=\"menu-subnav\">\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/button\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Button</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/button-toggle\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Button toggle</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level --><!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/chips\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Chips</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/icon\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Icon</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/progress-bar\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Progress bar</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/progress-spinner\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Progress spinner</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/buttons-and-indicators/ripples\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Ripples</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n\r\n            <!-- Popups and Modals -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item menu-item-submenu\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n              routerLinkActive=\"menu-item-open\"\r\n            >\r\n              <a\r\n                class=\"menu-link menu-toggle\"\r\n                routerLinkActive=\"active\"\r\n                href=\"/material/bottom-sheet\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Popups and Modals</span>\r\n                <i class=\"menu-arrow\"></i>\r\n              </a>\r\n              <div class=\"menu-submenu\">\r\n                <i class=\"menu-arrow\"></i>\r\n                <ul class=\"menu-subnav\">\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/popups-and-modals/bottom-sheet\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Bottom sheet</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/popups-and-modals/dialog\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Dialog</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/popups-and-modals/snackbar\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Snackbar</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/popups-and-modals/tooltip\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Tooltip</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n\r\n            <!-- Data table -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item menu-item-submenu\"\r\n              routerLinkActive=\"menu-item-open\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link menu-toggle\"\r\n                routerLinkActive=\"active\"\r\n                href=\"/material/data-table\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Data table</span>\r\n                <i class=\"menu-arrow\"></i>\r\n              </a>\r\n              <div class=\"menu-submenu\">\r\n                <i class=\"menu-arrow\"></i>\r\n                <ul class=\"menu-subnav\">\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/data-table/paginator\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Paginator</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/data-table/sort-header\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Sort header</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                  <!-- begin::3 Level -->\r\n                  <li\r\n                    class=\"menu-item\"\r\n                    routerLinkActive=\"menu-item-active\"\r\n                    aria-haspopup=\"true\"\r\n                  >\r\n                    <a\r\n                      class=\"menu-link\"\r\n                      routerLink=\"/material/data-table/table\"\r\n                      routerLinkActive=\"active\"\r\n                    >\r\n                      <i class=\"menu-bullet menu-bullet-dot\">\r\n                        <span></span>\r\n                      </i>\r\n                      <span class=\"menu-text\">Table</span>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end::3 Level -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- Ng-Bootstrap -->\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item menu-item-submenu\"\r\n        aria-haspopup=\"true\"\r\n        data-menu-toggle=\"hover\"\r\n        routerLinkActive=\"menu-item-open\"\r\n      >\r\n        <a\r\n          class=\"menu-link menu-toggle\"\r\n          href=\"/ngbootstrap\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Bitcoin.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">NgBootstrap</span>\r\n          <i class=\"menu-arrow\"></i>\r\n        </a>\r\n        <div class=\"menu-submenu\">\r\n          <i class=\"menu-arrow\"></i>\r\n          <ul class=\"menu-subnav\">\r\n            <li class=\"menu-item menu-item-parent\" aria-haspopup=\"true\">\r\n              <span class=\"menu-link\">\r\n                <span class=\"menu-text\">NgBootstrap</span>\r\n              </span>\r\n            </li>\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/accordion\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Accordion</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/alert\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Alert</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level --\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/buttons\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Buttons</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/carousel\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Carousel</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/collapse\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Collapse</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/datepicker\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Datepicker</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/dropdown\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Dropdown</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/modal\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Modal</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/pagination\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Pagination</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/popover\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Popover</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/progressbar\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Progressbar</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/rating\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Rating</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/timepicker\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Timepicker</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/tooltip\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Tooltips</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ngbootstrap/typehead\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Typehead</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- Applications -->\r\n      <!-- begin::section -->\r\n      <li class=\"menu-section\">\r\n        <h4 class=\"menu-text\">Applications</h4>\r\n        <i class=\"menu-icon flaticon-more-v2\"></i>\r\n      </li>\r\n      <!-- end:: section -->\r\n\r\n      <!-- ECommerce -->\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item menu-item-submenu\"\r\n        aria-haspopup=\"true\"\r\n        data-menu-toggle=\"hover\"\r\n        routerLinkActive=\"menu-item-open\"\r\n      >\r\n        <a\r\n          class=\"menu-link menu-toggle\"\r\n          routerLinkActive=\"active\"\r\n          href=\"/ecommerce\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Cart3.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">eCommerce</span>\r\n          <i class=\"menu-arrow\"></i>\r\n        </a>\r\n        <div class=\"menu-submenu\">\r\n          <i class=\"menu-arrow\"></i>\r\n          <ul class=\"menu-subnav\">\r\n            <!-- <li class=\"menu-item\" aria-haspopup=\"true\">\r\n              <span class=\"menu-link\">\r\n                <span class=\"menu-text\">eCommerce</span>\r\n              </span>\r\n            </li> -->\r\n\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n              routerLinkActive=\"menu-item-active\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ecommerce/customers\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Customers</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n              routerLinkActive=\"menu-item-active\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/ecommerce/products\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Products</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- User Management -->\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item menu-item-submenu\"\r\n        aria-haspopup=\"true\"\r\n        data-menu-toggle=\"hover\"\r\n        routerLinkActive=\"menu-item-open\"\r\n      >\r\n        <a\r\n          class=\"menu-link menu-toggle\"\r\n          routerLinkActive=\"active\"\r\n          href=\"/user-management\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/General/User.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">User Management</span>\r\n          <i class=\"menu-arrow\"></i>\r\n        </a>\r\n        <div class=\"menu-submenu\">\r\n          <i class=\"menu-arrow\"></i>\r\n          <ul class=\"menu-subnav\">\r\n            <!-- <li class=\"menu-item menu-item-parent\" aria-haspopup=\"true\">\r\n              <span class=\"menu-link\">\r\n                <span class=\"menu-text\">User Management</span>\r\n              </span>\r\n            </li> -->\r\n\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/user-management/users\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Users</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/user-management/roles\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Roles</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item\"\r\n        aria-haspopup=\"true\"\r\n        routerLinkActive=\"menu-item-active\"\r\n      >\r\n        <a\r\n          class=\"menu-link\"\r\n          routerLink=\"/user-profile\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Communication/Add-user.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">User Profile</span>\r\n        </a>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- Custom -->\r\n      <!-- begin::section -->\r\n      <li class=\"menu-section\">\r\n        <h4 class=\"menu-text\">Custom</h4>\r\n        <i class=\"menu-icon flaticon-more-v2\"></i>\r\n      </li>\r\n      <!-- end:: section -->\r\n\r\n      <!-- Wizards -->\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item menu-item-submenu\"\r\n        aria-haspopup=\"true\"\r\n        data-menu-toggle=\"hover\"\r\n        routerLinkActive=\"menu-item-open\"\r\n      >\r\n        <a\r\n          class=\"menu-link menu-toggle\"\r\n          routerLinkActive=\"active\"\r\n          href=\"/wizards\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Box1.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">Wizards</span>\r\n          <i class=\"menu-arrow\"></i>\r\n        </a>\r\n        <div class=\"menu-submenu\">\r\n          <i class=\"menu-arrow\"></i>\r\n          <ul class=\"menu-subnav\">\r\n            <li class=\"menu-item menu-item-parent\" aria-haspopup=\"true\">\r\n              <span class=\"menu-link\">\r\n                <span class=\"menu-text\">Wizards</span>\r\n              </span>\r\n            </li>\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/wizards/wizard-1\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Wizard 1</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/wizards/wizard-2\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Wizard 2</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/wizards/wizard-3\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Wizard 3</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/wizards/wizard-4\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Wizard 4</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n\r\n      <!-- Errors -->\r\n      <!-- begin::1 Level -->\r\n      <li\r\n        class=\"menu-item menu-item-submenu\"\r\n        aria-haspopup=\"true\"\r\n        data-menu-toggle=\"hover\"\r\n        routerLinkActive=\"menu-item-open\"\r\n      >\r\n        <a\r\n          class=\"menu-link menu-toggle\"\r\n          routerLinkActive=\"active\"\r\n          href=\"/error\"\r\n        >\r\n          <span\r\n            [inlineSVG]=\"'./assets/media/svg/icons/Code/Warning-2.svg'\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n          <span class=\"menu-text\">Error Pages</span>\r\n          <i class=\"menu-arrow\"></i>\r\n        </a>\r\n        <div class=\"menu-submenu\">\r\n          <i class=\"menu-arrow\"></i>\r\n          <ul class=\"menu-subnav\">\r\n            <li class=\"menu-item menu-item-parent\" aria-haspopup=\"true\">\r\n              <span class=\"menu-link\">\r\n                <span class=\"menu-text\">Error Pages</span>\r\n              </span>\r\n            </li>\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/error/error-1\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Error 1</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/error/error-2\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Error 2</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/error/error-3\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Error 3</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/error/error-4\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Error 4</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/error/error-5\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Error 5</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n            <!-- begin::2 Level -->\r\n            <li\r\n              class=\"menu-item\"\r\n              routerLinkActive=\"menu-item-active\"\r\n              aria-haspopup=\"true\"\r\n              data-menu-toggle=\"hover\"\r\n            >\r\n              <a\r\n                class=\"menu-link\"\r\n                routerLink=\"/error/error-6\"\r\n                routerLinkActive=\"active\"\r\n              >\r\n                <i class=\"menu-bullet menu-bullet-dot\">\r\n                  <span></span>\r\n                </i>\r\n                <span class=\"menu-text\">Error 6</span>\r\n              </a>\r\n            </li>\r\n            <!-- end::2 Level -->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n      <!-- end::1 Level -->\r\n    </ul>\r\n    <!-- end::Menu Nav -->\r\n  </div>\r\n  <!--end::Menu Container-->\r\n</div>\r\n<!--end::Aside Menu-->\r\n");

/***/ }),

/***/ 52804:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/footer/footer.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Container-->\r\n<div\r\n  [ngClass]=\"footerContainerCSSClasses\"\r\n  class=\"d-flex flex-column flex-md-row align-items-center justify-content-between\"\r\n>\r\n  <!--begin::Copyright-->\r\n  <!-- <div class=\"text-dark order-2 order-md-1\">\r\n    <span class=\"text-muted font-weight-bold mr-2\"\r\n      >{{ currentYear }} &copy;</span\r\n    >\r\n    <a\r\n      href=\"http://keenthemes.com/metronic\"\r\n      target=\"_blank\"\r\n      class=\"text-dark-75 text-hover-primary\"\r\n      >Keenthemes</a\r\n    >\r\n  </div> -->\r\n  <!--end::Copyright-->\r\n\r\n  <!--begin::Nav-->\r\n  <div class=\"nav nav-dark\">\r\n    <a\r\n      href=\"javascript:;\"\r\n     \r\n      class=\"nav-link pl-0 pr-5\"\r\n      >About</a\r\n    >\r\n    <a\r\n      href=\"javascript:;\"\r\n     \r\n      class=\"nav-link pl-0 pr-5\"\r\n      >Team</a\r\n    >\r\n    <a\r\n      href=\"javascript:;\"\r\n     \r\n      class=\"nav-link pl-0 pr-0\"\r\n      >Contact</a\r\n    >\r\n  </div>\r\n  <!--end::Nav-->\r\n</div>\r\n<!--end::Container-->\r\n");

/***/ }),

/***/ 33760:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/header-mobile/header-mobile.component.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Logo-->\r\n<a routerLink=\"/\">\r\n\t<img alt=\"Logo\" [attr.src]=\"headerLogo\" style=\"width: 55px;\"/>\r\n</a>\r\n<!--end::Logo-->\r\n\r\n<!--begin::Toolbar-->\r\n<div class=\"d-flex align-items-center\">\r\n\t<ng-container *ngIf=\"asideSelfDisplay\">\r\n\t\t<!--begin::Aside Mobile Toggle-->\r\n\t\t<button class=\"btn p-0 burger-icon burger-icon-left\" id=\"kt_aside_mobile_toggle\">\r\n\t\t\t<span></span>\r\n\t\t</button>\r\n\t\t<!--end::Aside Mobile Toggle-->\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"headerMenuSelfDisplay\">\r\n\t\t<!--begin::Header Menu Mobile Toggle-->\r\n\t\t<button class=\"btn p-0 burger-icon ml-4\" id=\"kt_header_mobile_toggle\">\r\n\t\t\t<span></span>\r\n\t\t</button>\r\n\t\t<!--end::Header Menu Mobile Toggle-->\r\n\t</ng-container>\r\n\r\n\t<!--begin::Topbar Mobile Toggle-->\r\n\t<button class=\"btn btn-hover-text-primary p-0 ml-2\" id=\"kt_header_mobile_topbar_toggle\">\r\n\t\t<span [inlineSVG]=\"'./assets/media/svg/icons/General/User.svg'\"  class=\"svg-icon svg-icon-xl\"></span>\r\n\t</button>\r\n\t<!--end::Topbar Mobile Toggle-->\r\n</div>\r\n<!--end::Toolbar-->");

/***/ }),

/***/ 3597:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/header/header-menu-dynamic/header-menu-dynamic.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngIf=\"menuConfig && menuConfig.items\">\r\n  <!-- begin::Header Nav -->\r\n  <ul class=\"menu-nav\" [ngClass]=\"ulCSSClasses\">\r\n    <ng-container *ngFor=\"let item of menuConfig.items\">\r\n      <ng-container\r\n        *ngIf=\"item.title\"\r\n        [ngTemplateOutlet]=\"menu1LevelTemplate\"\r\n        [ngTemplateOutletContext]=\"{ item: item }\"\r\n      ></ng-container>\r\n    </ng-container>\r\n  </ul>\r\n  <!-- end::Header Nav -->\r\n</ng-container>\r\n\r\n<!-- begin::1 Level -->\r\n<ng-template #menu1LevelTemplate let-item=\"item\">\r\n  <!-- begin::if don't have submenu -->\r\n  <ng-container *ngIf=\"!item.submenu\">\r\n    <!-- begin::1 Level -->\r\n    <li class=\"menu-item menu-item-rel\" routerLinkActive=\"menu-item-active\">\r\n      <a class=\"menu-link\" [routerLink]=\"item.page\" routerLinkActive=\"active\">\r\n        <span class=\"menu-text\" >{{\r\n          item.title\r\n        }}</span>\r\n        <ng-container *ngIf=\"rootArrowEnabled\">\r\n          <i class=\"menu-arrow\"></i>\r\n        </ng-container>\r\n      </a>\r\n    </li>\r\n    <!-- end::1 Level -->\r\n  </ng-container>\r\n  <!-- end::if don't have submenu -->\r\n\r\n  <!-- begin::if has submenu classic -->\r\n  <ng-container *ngIf=\"item.submenu && !item.mega\">\r\n    <!-- begin::1 Level -->\r\n    <li\r\n      [attr.data-menu-toggle]=\"headerMenuDesktopToggle\"\r\n      aria-haspopup=\"true\"\r\n      class=\"menu-item menu-item-submenu menu-item-rel\"\r\n      routerLinkActive=\"menu-item-active\"\r\n      [ngClass]=\"{ 'menu-item-active': isMenuItemActive(item.page) }\"\r\n    >\r\n      <a\r\n        class=\"menu-link menu-toggle\"\r\n        [attr.href]=\"item.page\"\r\n        routerLinkActive=\"active\"\r\n        [ngClass]=\"{ 'active ': isMenuItemActive(item.page) }\"\r\n      >\r\n        <span class=\"menu-text\" >{{\r\n          item.title\r\n        }}</span>\r\n        <i class=\"menu-arrow\"></i>\r\n      </a>\r\n      <div class=\"menu-submenu menu-submenu-classic menu-submenu-left\">\r\n        <ul class=\"menu-subnav\">\r\n          <ng-container\r\n            *ngFor=\"let sub of item.submenu\"\r\n            [ngTemplateOutlet]=\"menu2LevelTemplate\"\r\n            [ngTemplateOutletContext]=\"{ item: sub }\"\r\n          ></ng-container>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n  </ng-container>\r\n  <!-- end::if has submenu classic -->\r\n\r\n  <!-- begin::if has submenu mega -->\r\n  <ng-container *ngIf=\"item.submenu && item.mega\">\r\n    <!-- begin::1 Level -->\r\n    <li\r\n      class=\"menu-item menu-item-submenu menu-item-rel\"\r\n      routerLinkActive=\"menu-item-active\"\r\n      [attr.data-menu-toggle]=\"headerMenuDesktopToggle\"\r\n      aria-haspopup=\"true\"\r\n      [ngClass]=\"{ 'menu-item-active ': isMenuItemActive(item.page) }\"\r\n    >\r\n      <a\r\n        class=\"menu-link menu-toggle\"\r\n        routerLinkActive=\"active\"\r\n        [attr.href]=\"item.page\"\r\n        [ngClass]=\"{ 'active ': isMenuItemActive(item.page) }\"\r\n      >\r\n        <span class=\"menu-text\" >{{\r\n          item.title\r\n        }}</span>\r\n        <i class=\"menu-arrow\"></i>\r\n      </a>\r\n      <div\r\n        class=\"menu-submenu menu-submenu-fixed menu-submenu-left\"\r\n        style=\"width: '1000px'\"\r\n      >\r\n        <div class=\"menu-subnav\">\r\n          <ul class=\"menu-content\">\r\n            <ng-container\r\n              *ngFor=\"let sub of item.submenu\"\r\n              [ngTemplateOutlet]=\"menu2LevelTemplateMega\"\r\n              [ngTemplateOutletContext]=\"{ item: sub }\"\r\n            ></ng-container>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ng-container>\r\n  <!-- end::if has submenu mega -->\r\n</ng-template>\r\n\r\n<!-- begin::2 Level -->\r\n<ng-template #menu2LevelTemplate let-item=\"item\">\r\n  <!-- begin::if don't have submenu -->\r\n  <ng-container *ngIf=\"!item.submenu\">\r\n    <li\r\n      class=\"menu-item\"\r\n      aria-haspopup=\"true\"\r\n      routerLinkActive=\"menu-item-active\"\r\n    >\r\n      <a class=\"menu-link\" [attr.href]=\"item.page\" routerLinkActive=\"active\"\r\n        ><span class=\"menu-text\" >{{\r\n          item.title\r\n        }}</span></a\r\n      >\r\n    </li>\r\n  </ng-container>\r\n  <!-- end::if don't have submenu -->\r\n\r\n  <!-- begin::if has submenu -->\r\n  <ng-container *ngIf=\"item.submenu\">\r\n    <!-- begin::2 Level -->\r\n    <li\r\n      class=\"menu-item menu-item-submenu\"\r\n      data-menu-toggle=\"hover\"\r\n      aria-haspopup=\"true\"\r\n      routerLinkActive=\"menu-item-active\"\r\n      [ngClass]=\"{ 'menu-item-active ': isMenuItemActive(item.page) }\"\r\n    >\r\n      <a\r\n        class=\"menu-link menu-toggle\"\r\n        [attr.href]=\"item.page\"\r\n        routerLinkActive=\"active\"\r\n        [ngClass]=\"{ 'active ': isMenuItemActive(item.page) }\"\r\n      >\r\n        <ng-container *ngIf=\"item.svg\">\r\n          <span\r\n            [inlineSVG]=\"item.svg\"\r\n            cacheSVG=\"true\"\r\n            class=\"svg-icon menu-icon\"\r\n          ></span>\r\n        </ng-container>\r\n        <span class=\"menu-text\" >{{\r\n          item.title\r\n        }}</span>\r\n        <i class=\"menu-arrow\"></i>\r\n      </a>\r\n      <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n        <ul class=\"menu-subnav\">\r\n          <!-- submenu-->\r\n          <ng-container\r\n            *ngFor=\"let sub of item.submenu\"\r\n            [ngTemplateOutlet]=\"menu3LevelTemplate\"\r\n            [ngTemplateOutletContext]=\"{ item: sub }\"\r\n          ></ng-container>\r\n        </ul>\r\n      </div>\r\n    </li>\r\n  </ng-container>\r\n  <!-- end::if has submenu -->\r\n</ng-template>\r\n<!-- end::2 Level -->\r\n\r\n<!-- begin::3 Level -->\r\n<ng-template #menu3LevelTemplate let-item=\"item\">\r\n  <!-- begin::3 Level -->\r\n  <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n    <a class=\"menu-link\" [routerLink]=\"item.page\" routerLinkActive=\"active\">\r\n      <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n      <span class=\"menu-text\" >{{\r\n        item.title\r\n      }}</span>\r\n    </a>\r\n  </li>\r\n  <!-- end::3 Level -->\r\n</ng-template>\r\n<!-- end::3 Level -->\r\n\r\n<!-- begin::2 Level Mega -->\r\n<ng-template #menu2LevelTemplateMega let-item=\"item\">\r\n  <li class=\"menu-item\">\r\n    <h3 class=\"menu-heading menu-toggle\">\r\n      <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n      <span class=\"menu-text\" >{{\r\n        item.title\r\n      }}</span>\r\n      <i class=\"menu-arrow\"></i>\r\n    </h3>\r\n    <ul class=\"menu-inner\">\r\n      <!-- submenu-->\r\n      <ng-container\r\n        *ngFor=\"let sub of item.submenu\"\r\n        [ngTemplateOutlet]=\"menu3LevelTemplate\"\r\n        [ngTemplateOutletContext]=\"{ item: sub }\"\r\n      ></ng-container>\r\n    </ul>\r\n  </li>\r\n</ng-template>\r\n<!-- end::3 Level -->\r\n");

/***/ }),

/***/ 54780:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/header/header-menu/header-menu.component.html ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- begin::Header Nav -->\r\n<ul class=\"menu-nav\" [ngClass]=\"ulCSSClasses\">\r\n  <!-- begin::1 Level -->\r\n  <li class=\"menu-item menu-item-rel\" routerLinkActive=\"menu-item-active\">\r\n    <a class=\"menu-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n      <span class=\"menu-text\" ></span>\r\n      <ng-container *ngIf=\"rootArrowEnabled\">\r\n        <i class=\"menu-arrow\"></i>\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n  <!-- end::1 Level -->\r\n\r\n  <!-- begin::1 Level -->\r\n  <li class=\"menu-item menu-item-rel\" routerLinkActive=\"menu-item-active\">\r\n    <a class=\"menu-link\" routerLink=\"/builder\" routerLinkActive=\"active\">\r\n      <span class=\"menu-text\">Builder</span>\r\n      <ng-container *ngIf=\"rootArrowEnabled\">\r\n        <i class=\"menu-arrow\"></i>\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n  <!-- end::1 Level -->\r\n\r\n  <!-- Classic submenu -->\r\n  <!-- begin::1 Level -->\r\n  <li\r\n    [attr.data-menu-toggle]=\"headerMenuDesktopToggle\"\r\n    aria-haspopup=\"true\"\r\n    class=\"menu-item menu-item-submenu menu-item-rel\"\r\n    routerLinkActive=\"menu-item-active\"\r\n  >\r\n    <a class=\"menu-link menu-toggle\" href=\"/material\" routerLinkActive=\"active\">\r\n      <span class=\"menu-text\">Material UI</span>\r\n      <i class=\"menu-arrow\"></i>\r\n    </a>\r\n    <div class=\"menu-submenu menu-submenu-classic menu-submenu-left\">\r\n      <ul class=\"menu-subnav\">\r\n        <!-- Form Controls -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n          routerLinkActive=\"menu-item-active\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            href=\"/material/form-controls/autocomplete\"\r\n            routerLinkActive=\"active\"\r\n          >\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/Design/PenAndRuller.svg'\"\r\n             \r\n              class=\"svg-icon menu-icon\"\r\n            ></span>\r\n            <span class=\"menu-text\">Form Controls</span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/autocomplete\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Autocomplete</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/checkbox\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Checkbox</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/radiobutton\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Radio Button</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/datepicker\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Datepicker</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/formfield\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Form Field</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/input\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Input</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/select\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Select</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/slider\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Slider</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/slidertoggle\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Slider Toggle</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- Navigation  -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n          routerLinkActive=\"menu-item-active\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/material/navigation\"\r\n          >\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/Navigation/Up-down.svg'\"\r\n              \r\n              class=\"svg-icon menu-icon\"\r\n            ></span>\r\n            <span class=\"menu-text\">Navigation</span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/navigation/menu\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Menu</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/navigation/sidenav\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Sidenav</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/navigation/toolbar\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Toolbar</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- Layout -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n          routerLinkActive=\"menu-item-active\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/material/layout\"\r\n          >\r\n            <span\r\n              [inlineSVG]=\"\r\n                './assets/media/svg/icons/Layout/Layout-right-panel-2.svg'\r\n              \"\r\n              \r\n              class=\"svg-icon menu-icon\"\r\n            ></span>\r\n            <span class=\"menu-text\">Layout</span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/card\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Card</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/divider\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Divider</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/form-controls/radiobutton\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Radio Button</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/expansion-panel\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Expansion panel</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/grid-list\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Grid list</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/list\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">List</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/tabs\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Tabs</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/stepper\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Stepper</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/layout/tree\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Tree</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- Buttons and Indicators -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n          routerLinkActive=\"menu-item-active\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/material/buttons-and-indicators\"\r\n          >\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/Home/Cupboard.svg'\"\r\n              \r\n              class=\"svg-icon menu-icon\"\r\n            ></span>\r\n            <span class=\"menu-text\">Buttons and Indicators</span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/buttons-and-indicators/button-toggle\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Button</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/buttons-and-indicators/chips\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Chips</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/buttons-and-indicators/icon\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Icon</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/buttons-and-indicators/progress-bar\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Progress bar</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/buttons-and-indicators/progress-spinner\"\r\n                  routerLinkActive=\"true\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Progress spinner</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/buttons-and-indicators/ripples\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Ripples</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- Popups and Modals -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n          routerLinkActive=\"menu-item-active\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/material/popups-and-modals\"\r\n          >\r\n            <span\r\n              [inlineSVG]=\"'./assets/media/svg/icons/General/Duplicate.svg'\"\r\n              \r\n              class=\"svg-icon menu-icon\"\r\n            ></span>\r\n            <span class=\"menu-text\">Popups and Modals</span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/popups-and-modals/bottom-sheet\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Bottom sheet</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/popups-and-modals/dialog\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Dialog</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/popups-and-modals/snackbar\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Snackbar</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/popups-and-modals/tooltip\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Tooltip</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- Data table -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n          routerLinkActive=\"menu-item-active\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/material/data-table\"\r\n          >\r\n            <span\r\n              [inlineSVG]=\"\r\n                './assets/media/svg/icons/Layout/Layout-top-panel-4.svg'\r\n              \"\r\n              \r\n              class=\"svg-icon menu-icon\"\r\n            ></span>\r\n            <span class=\"menu-text\">Data table</span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/data-table/paginator\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Paginator</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/data-table/sort-header\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Sort header</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/material/data-table/table\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Table</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n      </ul>\r\n    </div>\r\n  </li>\r\n  <!-- end::1 Level -->\r\n\r\n  <!-- Mega submenu -->\r\n  <!-- begin::1 Level -->\r\n  <li\r\n    class=\"menu-item menu-item-submenu menu-item-rel\"\r\n    routerLinkActive=\"menu-item-active\"\r\n    [attr.data-menu-toggle]=\"headerMenuDesktopToggle\"\r\n    aria-haspopup=\"true\"\r\n  >\r\n    <a\r\n      class=\"menu-link menu-toggle\"\r\n      routerLinkActive=\"active\"\r\n      href=\"/ngbootstrap\"\r\n    >\r\n      <span class=\"menu-text\">NgBootstrap</span>\r\n      <i class=\"menu-arrow\"></i>\r\n    </a>\r\n    <div\r\n      class=\"menu-submenu menu-submenu-fixed menu-submenu-left\"\r\n      style=\"width: '1000px'\"\r\n    >\r\n      <div class=\"menu-subnav\">\r\n        <ul class=\"menu-content\">\r\n          <li class=\"menu-item\">\r\n            <h3 class=\"menu-heading menu-toggle\">\r\n              <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n              <span class=\"menu-text\">A ... C</span>\r\n              <i class=\"menu-arrow\"></i>\r\n            </h3>\r\n            <ul class=\"menu-inner\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/accordion\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Accordion</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"/ngbootstrap/alert\"\r\n                >\r\n                  <span class=\"menu-text\">Alert</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"/ngbootstrap/buttons\"\r\n                >\r\n                  <span class=\"menu-text\">Buttons</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/carousel\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Carousel</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </li>\r\n\r\n          <li class=\"menu-item\">\r\n            <h3 class=\"menu-heading menu-toggle\">\r\n              <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n              <span class=\"menu-text\">C ... M</span>\r\n              <i class=\"menu-arrow\"></i>\r\n            </h3>\r\n            <ul class=\"menu-inner\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/collapse\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Collapse</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/datepicker\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Datepicker</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/dropdown\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Dropdown</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/modal\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Modal</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </li>\r\n\r\n          <li class=\"menu-item\">\r\n            <h3 class=\"menu-heading menu-toggle\">\r\n              <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n              <span class=\"menu-text\">P ... R</span>\r\n              <i class=\"menu-arrow\"></i>\r\n            </h3>\r\n            <ul class=\"menu-inner\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/pagination\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Pagination</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ngbootstrap/popover\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <span class=\"menu-text\">Popover</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"active\"\r\n                  routerLinkActive=\"/ngbootstrap/progressbar\"\r\n                >\r\n                  <span class=\"menu-text\">Progressbar</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"/ngbootstrap/rating\"\r\n                >\r\n                  <span class=\"menu-text\">Rating</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </li>\r\n\r\n          <li class=\"menu-item\">\r\n            <h3 class=\"menu-heading menu-toggle\">\r\n              <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n              <span class=\"menu-text\">T ... Z</span>\r\n              <i class=\"menu-arrow\"></i>\r\n            </h3>\r\n            <ul class=\"menu-inner\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"/ngbootstrap/timepicker\"\r\n                >\r\n                  <span class=\"menu-text\">Timepicker</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"/ngbootstrap/tooltip\"\r\n                >\r\n                  <span class=\"menu-text\">Tooltips</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"/ngbootstrap/typehead\"\r\n                >\r\n                  <span class=\"menu-text\">Typehead</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <!-- end::1 Level -->\r\n\r\n  <!-- Classic submenu -->\r\n  <!-- begin::1 Level -->\r\n  <li\r\n    class=\"menu-item menu-item-submenu menu-item-rel\"\r\n    routerLinkActive=\"menu-item-active\"\r\n    [attr.data-menu-toggle]=\"headerMenuDesktopToggle\"\r\n    aria-haspopup=\"true\"\r\n  >\r\n    <a class=\"menu-link menu-toggle\" routerLinkActive=\"active\">\r\n      <span class=\"menu-text\">Custom</span>\r\n      <i class=\"menu-arrow\"></i>\r\n    </a>\r\n    <div class=\"menu-submenu menu-submenu-classic menu-submenu-left\">\r\n      <ul class=\"menu-subnav\">\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          routerLinkActive=\"menu-item-active\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/ecommerce\"\r\n          >\r\n            <span class=\"menu-text\"> eCommerce </span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ecommerce/customers\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Customers</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/ecommerce/products\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Products</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          routerLinkActive=\"menu-item-active\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n        >\r\n          <a\r\n            class=\"menu-link menu-toggle\"\r\n            routerLinkActive=\"active\"\r\n            href=\"/user-management\"\r\n          >\r\n            <span class=\"menu-text\"> User Management </span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/user-management/users\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Users</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/user-management/roles\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Roles</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          routerLinkActive=\"menu-item-active\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n        >\r\n          <a\r\n            routerLinkActive=\"active\"\r\n            class=\"menu-link menu-toggle\"\r\n            href=\"/error\"\r\n          >\r\n            <span class=\"menu-text\"> Error Pages </span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/error/error-1\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Error 1</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/error/error-2\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Error 2</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/error/error-3\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Error 3</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/error/error-4\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Error 4</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/error/error-5\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Error 5</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/error/error-6\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Error 6</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n\r\n        <!-- Wizards -->\r\n        <!-- begin::2 Level -->\r\n        <li\r\n          class=\"menu-item menu-item-submenu\"\r\n          routerLinkActive=\"menu-item-active\"\r\n          data-menu-toggle=\"hover\"\r\n          aria-haspopup=\"true\"\r\n        >\r\n          <a\r\n            routerLinkActive=\"active\"\r\n            class=\"menu-link menu-toggle\"\r\n            href=\"/wizards\"\r\n          >\r\n            <span class=\"menu-text\"> Wizards </span>\r\n            <i class=\"menu-arrow\"></i>\r\n          </a>\r\n          <div class=\"menu-submenu menu-submenu-classic menu-submenu-right\">\r\n            <ul class=\"menu-subnav\">\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/wizards/wizard-1\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Wizard 1</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/wizards/wizard-2\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Wizard 2</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/wizards/wizard-3\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Wizard 3</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n\r\n              <!-- begin::3 Level -->\r\n              <li class=\"menu-item\" routerLinkActive=\"menu-item-active\">\r\n                <a\r\n                  class=\"menu-link\"\r\n                  routerLink=\"/wizards/wizard-4\"\r\n                  routerLinkActive=\"active\"\r\n                >\r\n                  <i class=\"menu-bullet menu-bullet-dot\"><span></span></i>\r\n                  <span class=\"menu-text\">Wizard 4</span>\r\n                </a>\r\n              </li>\r\n              <!-- end::3 Level -->\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <!-- end::2 Level -->\r\n      </ul>\r\n    </div>\r\n  </li>\r\n  <!-- end::1 Level -->\r\n</ul>\r\n<!-- end::Header Nav -->\r\n");

/***/ }),

/***/ 76656:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/header/header.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Container-->\r\n<div\r\n  [ngClass]=\"headerContainerCSSClasses\"\r\n  class=\"d-flex align-items-stretch justify-content-between\"\r\n>\r\n  <ng-container *ngIf=\"loader$ | async as _loader\">\r\n    <ngb-progressbar\r\n      class=\"loading-bar\"\r\n      height=\"3px\"\r\n      [value]=\"_loader\"\r\n    ></ngb-progressbar>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"headerMenuSelfDisplay\">\r\n    <!--begin::Header Menu Wrapper-->\r\n    <div\r\n      class=\"header-menu-wrapper header-menu-wrapper-left\"\r\n      id=\"kt_header_menu_wrapper\"\r\n    >\r\n      <ng-container *ngIf=\"!asideSelfDisplay\">\r\n        <!--begin::Header Logo-->\r\n        <div class=\"header-logo\">\r\n          <a routerLink=\"/\">\r\n            <img alt=\"Logo\" [attr.src]=\"headerLogo\" />\r\n          </a>\r\n        </div>\r\n        <!--end::Header Logo-->\r\n      </ng-container>\r\n\r\n      <!--begin::Header Menu-->\r\n      <!-- Don't change id => 'kt_header_menu' -->\r\n      <ng-container *ngIf=\"headerMenuSelfStatic\">\r\n        <!-- STATIC MENU -->\r\n        <app-header-menu\r\n          #ktHeaderMenu\r\n          id=\"kt_header_menu\"\r\n          class=\"header-menu header-menu-mobile\"\r\n          [ngClass]=\"headerMenuCSSClasses\"\r\n        ></app-header-menu>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!headerMenuSelfStatic\">\r\n        <!-- DYNAMIC MENU -->\r\n        <app-header-menu-dynamic\r\n          #ktHeaderMenu\r\n          id=\"kt_header_menu\"\r\n          class=\"header-menu header-menu-mobile\"\r\n          [ngClass]=\"headerMenuCSSClasses\"\r\n        ></app-header-menu-dynamic>\r\n      </ng-container>\r\n      <!--end::Header Menu-->\r\n    </div>\r\n    <!--end::Header Menu Wrapper-->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!headerMenuSelfDisplay\">\r\n    <div></div>\r\n  </ng-container>\r\n\r\n  <app-topbar class=\"topbar\"></app-topbar>\r\n</div>\r\n<!--end::Container-->\r\n");

/***/ }),

/***/ 40742:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/components/topbar/topbar.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <div class=\"topbar-item\"> -->\r\n<!-- <div class=\"btn btn-icon btn-clean btn-lg mr-1\" id=\"kt_quick_panel_toggle\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Layout/Layout-4-blocks.svg'\" cacheSVG=\"true\"\r\n      class=\"svg-icon svg-icon-xl svg-icon-primary\"></span>\r\n  </div> -->\r\n<!-- </div> -->\r\n<!-- <div class=\"topbar-item\">\r\n  <div class=\"btn btn-icon btn-clean btn-lg mr-1 pulse pulse-primary\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Code/Compiling.svg'\" cacheSVG=\"true\"\r\n      class=\"svg-icon svg-icon-xl svg-icon-primary\"></span>\r\n    <span class=\"pulse-ring\"></span>\r\n  </div>\r\n</div>\r\n<div class=\"topbar-item\">\r\n  <div class=\"btn btn-icon btn-clean btn-lg mr-1\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Media/Equalizer.svg'\" cacheSVG=\"true\"\r\n      class=\"svg-icon svg-icon-xl svg-icon-primary\"></span>\r\n  </div>\r\n</div> -->\r\n<!-- <div class=\"topbar-item\">\r\n  <div class=\"btn btn-icon btn-clean btn-lg mr-1\" id=\"kt_quick_cart_toggle\">\r\n    <span [inlineSVG]=\"'./assets/media/svg/icons/Shopping/Cart3.svg'\" cacheSVG=\"true\"\r\n      class=\"svg-icon svg-icon-xl svg-icon-primary\"></span>\r\n  </div>\r\n</div> -->\r\n<!-- *ngIf=\"user$ | async as _user\" -->\r\n<ng-container>\r\n  <div ngbDropdown class=\"dropdown\" placement=\"bottom-right\">\r\n    <div class=\"topbar-item\" ngbDropdownToggle data-offset=\"0px,0px\">\r\n      <div class=\"btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2\">\r\n        <span class=\"text-muted font-weight-bold font-size-base d-none d-md-inline mr-1\"></span>\r\n        <span class=\"font-weight-bolder font-size-base d-none d-md-inline mr-3\" style=\"color: #fff;\">{{ currentUser.username | titlecase\r\n          }}</span>\r\n        <span class=\"symbol symbol-35 symbol-light-primary\">\r\n          <span class=\"symbol-label font-size-h5 font-weight-bold\">{{\r\n            (currentUser.username | firstLetter) | titlecase\r\n            }}</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <!--end::Toggle-->\r\n    <!--begin::Dropdown-->\r\n    <div ngbDropdownMenu class=\"dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg p-0\">\r\n      <app-user-dropdown-inner></app-user-dropdown-inner>\r\n    </div>\r\n  </div>\r\n</ng-container>");

/***/ }),

/***/ 97198:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/init/scipts-init/scripts-init.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

/***/ }),

/***/ 49430:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/_layout/layout.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--begin::Main-->\r\n<ng-container *ngIf=\"selfLayout !== 'blank'; else blankLayout\">\r\n  <!-- begin:: Header Mobile -->\r\n  <app-header-mobile\r\n    #ktHeaderMobile\r\n    id=\"kt_header_mobile\"\r\n    class=\"header-mobile align-items-center\"\r\n    [ngClass]=\"headerMobileClasses\"\r\n  ></app-header-mobile>\r\n  <!-- end:: Header Mobile -->\r\n  <div class=\"d-flex flex-column flex-root\">\r\n    <!--begin::Page-->\r\n    <div class=\"d-flex flex-row flex-column-fluid page\">\r\n      <!-- begin:: Aside Left -->\r\n      <ng-container *ngIf=\"asideSelfDisplay\">\r\n        <ng-container *ngIf=\"asideMenuStatic\">\r\n          <!--begin::STATIC Aside-->\r\n          <app-aside\r\n            #ktAside\r\n            id=\"kt_aside\"\r\n            class=\"aside aside-left d-flex flex-column flex-row-auto\"\r\n            [ngClass]=\"asideCSSClasses\"\r\n          ></app-aside>\r\n          <!--end::STATIC Aside-->\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!asideMenuStatic\">\r\n          <!--begin::DYNAMIC Aside-->\r\n          <app-aside-dynamic\r\n            #ktAside\r\n            id=\"kt_aside\"\r\n            class=\"aside aside-left d-flex flex-column flex-row-auto\"\r\n            [ngClass]=\"asideCSSClasses\"\r\n          ></app-aside-dynamic>\r\n          <!--end::DYNAMIC Aside-->\r\n        </ng-container>\r\n      </ng-container>\r\n      <!-- end:: Aside Left -->\r\n\r\n      <!--begin::Wrapper-->\r\n      <div class=\"d-flex flex-column flex-row-fluid wrapper\" id=\"kt_wrapper\">\r\n        <!-- begin:: Header -->\r\n        <app-header\r\n          #ktHeader\r\n          id=\"kt_header\"\r\n          class=\"header\"\r\n          [ngClass]=\"headerCSSClasses\"\r\n        ></app-header>\r\n        <!-- end:: Header -->\r\n\r\n        <!-- begin:: Content -->\r\n        <div\r\n          class=\"content d-flex flex-column flex-column-fluid\"\r\n          id=\"kt_content\"\r\n          [ngClass]=\"contentClasses\"\r\n        >\r\n          <!-- begin:: Content Head -->\r\n          <ng-container *ngIf=\"subheaderDisplay\">\r\n            <app-subheader-wrapper></app-subheader-wrapper>\r\n          </ng-container>\r\n          <!-- end:: Content Head -->\r\n\r\n          <!-- begin:: Content Body -->\r\n          <ng-container *ngIf=\"contentExtended\">\r\n            <router-outlet></router-outlet>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!contentExtended\">\r\n            <!--begin::Entry-->\r\n            <div class=\"d-flex flex-column-fluid\">\r\n              <!--begin::Container-->\r\n              <div [ngClass]=\"contentContainerClasses\">\r\n                <router-outlet></router-outlet>\r\n                <!--end::Container-->\r\n              </div>\r\n            </div>\r\n            <!--end::Entry-->\r\n          </ng-container>\r\n          <!-- end:: Content Body -->\r\n        </div>\r\n        <!-- end:: Content -->\r\n        <ng-container *ngIf=\"footerDisplay\">\r\n          <!--begin::Footer-->\r\n          <app-footer\r\n            class=\"footer bg-white py-4 d-flex flex-lg-column w-100\"\r\n            id=\"kt_footer\"\r\n            [ngClass]=\"footerCSSClasses\"\r\n          ></app-footer>\r\n          <!--end::Footer-->\r\n        </ng-container>\r\n      </div>\r\n      <!--end::Wrapper-->\r\n    </div>\r\n    <!-- end:: Body -->\r\n    <!--end::Page-->\r\n\r\n    <!--begin::Offcanvases-->\r\n   \r\n\r\n    <ng-container *ngIf=\"extrasScrollTopDisplay\">\r\n      <app-scroll-top></app-scroll-top>\r\n    </ng-container>\r\n    <!--end::Offcanvases-->\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #blankLayout>\r\n  <div class=\"d-flex flex-column flex-root\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</ng-template>\r\n<app-scripts-init></app-scripts-init>\r\n<!--end::Main-->\r\n");

/***/ }),

/***/ 58069:
/*!************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/cart-dropdown-inner/cart-dropdown-inner.component.scss ***!
  \************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRyb3Bkb3duLWlubmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 16101:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/notifications-dropdown-inner/notifications-dropdown-inner.component.scss ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLWRyb3Bkb3duLWlubmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 63141:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/quick-actions-dropdown-inner/quick-actions-dropdown-inner.component.scss ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWljay1hY3Rpb25zLWRyb3Bkb3duLWlubmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 56050:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/search-dropdown-inner/search-result/search-result.component.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host .quick-search-category:first-child {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxhQUFBO0FBQUYiLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQucXVpY2stc2VhcmNoLWNhdGVnb3J5OmZpcnN0LWNoaWxkIHtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0fVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 19717:
/*!************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/dropdown-inner/user-dropdown-inner/user-dropdown-inner.component.scss ***!
  \************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRyb3Bkb3duLWlubmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 76885:
/*!*********************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/cart-offcanvas/cart-offcanvas.component.scss ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LW9mZmNhbnZhcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 86066:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/notifications-offcanvas/notifications-offcanvas.component.scss ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLW9mZmNhbnZhcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 40683:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/quick-actions-offcanvas/quick-actions-offcanvas.component.scss ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWljay1hY3Rpb25zLW9mZmNhbnZhcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 2954:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/quick-panel-offcanvas/quick-panel-offcanvas.component.scss ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWljay1wYW5lbC1vZmZjYW52YXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 67525:
/*!*************************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/search-offcanvas/search-offcanvas.component.scss ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtb2ZmY2FudmFzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 90205:
/*!*********************************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/offcanvas/user-offcanvas/user-offcanvas.component.scss ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW9mZmNhbnZhcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 38439:
/*!***************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/scroll-top/scroll-top.component.scss ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JvbGwtdG9wLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 84557:
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/extras/toolbar/toolbar.component.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 17031:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/_layout/components/aside-dynamic/aside-dynamic.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host .aside {\n  height: 100%;\n}\n:host .aside .aside-menu {\n  margin: 0;\n}\n:host .menu-text {\n  white-space: nowrap;\n}\n.lbl {\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLWR5bmFtaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFFSTtFQUNFLFNBQUE7QUFBTjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFIRiIsImZpbGUiOiJhc2lkZS1keW5hbWljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5hc2lkZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLmFzaWRlLW1lbnUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBmaXhlZCB0ZXh0IGxpbmUgYnJlYWsgaXNzdWUgb24gbWluaW1pemVkIGFzaWRlIGhvdmVyXHJcbiAgLm1lbnUtdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG4ubGJse1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 91102:
/*!*********************************************************************!*\
  !*** ./src/app/pages/_layout/components/aside/aside.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host .aside {\n  height: 100%;\n}\n:host .aside .aside-menu {\n  margin: 0;\n}\n:host .menu-text {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKO0FBRUk7RUFDRSxTQUFBO0FBQU47QUFLRTtFQUNFLG1CQUFBO0FBSEoiLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmFzaWRlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuYXNpZGUtbWVudSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZpeGVkIHRleHQgbGluZSBicmVhayBpc3N1ZSBvbiBtaW5pbWl6ZWQgYXNpZGUgaG92ZXJcclxuICAubWVudS10ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 13524:
/*!***********************************************************************!*\
  !*** ./src/app/pages/_layout/components/footer/footer.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 61711:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/_layout/components/header-mobile/header-mobile.component.scss ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItbW9iaWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 14959:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/_layout/components/header/header-menu-dynamic/header-menu-dynamic.component.scss ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host ::ng-deep .loading-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n:host ::ng-deep .loading-bar .progress-bar {\n  background-color: #5d78ff;\n}\n:host ::ng-deep .topbar-item {\n  height: 100%;\n}\n@media (min-width: 1025px) {\n  :host ::ng-deep .topbar,\n:host ::ng-deep .topbar-item-wrapper {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1tZW51LWR5bmFtaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFETjtBQUdNO0VBRUUseUJBQUE7QUFGUjtBQU1JO0VBQ0UsWUFBQTtBQUpOO0FBT0k7RUFDRTs7SUFFRSxZQUFBO0VBTE47QUFDRiIsImZpbGUiOiJoZWFkZXItbWVudS1keW5hbWljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDo6bmctZGVlcCB7XHJcbiAgICAubG9hZGluZy1iYXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgLy8gYnJhbmQgY29sb3JcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ3OGZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcGJhci1pdGVtIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgLnRvcGJhcixcclxuICAgICAgLnRvcGJhci1pdGVtLXdyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 26078:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/_layout/components/header/header-menu/header-menu.component.scss ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 44868:
/*!***********************************************************************!*\
  !*** ./src/app/pages/_layout/components/header/header.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host ::ng-deep .loading-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n:host ::ng-deep .loading-bar .progress-bar {\n  background-color: #5d78ff;\n}\n:host ::ng-deep .topbar-item {\n  height: 100%;\n}\n@media (min-width: 1025px) {\n  :host ::ng-deep .topbar,\n:host ::ng-deep .topbar-item-wrapper {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUROO0FBR007RUFFRSx5QkFBQTtBQUZSO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFPSTtFQUNFOztJQUVFLFlBQUE7RUFMTjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLmxvYWRpbmctYmFyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIC8vIGJyYW5kIGNvbG9yXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkNzhmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3BiYXItaXRlbSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgIC50b3BiYXIsXHJcbiAgICAgIC50b3BiYXItaXRlbS13cmFwcGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 50538:
/*!***********************************************************************!*\
  !*** ./src/app/pages/_layout/components/topbar/topbar.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 65892:
/*!*****************************************************!*\
  !*** ./src/app/pages/_layout/layout.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "app-layout {\n  opacity: 0;\n  height: 100%;\n}\napp-layout .grid-root {\n  height: 100%;\n}\n.page-loaded app-layout {\n  opacity: 1;\n  transition: opacity 1s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGtDQUFBO0FBREoiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxheW91dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5ncmlkLXJvb3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtbG9hZGVkIHtcclxuICBhcHAtbGF5b3V0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout_module_ts.js.map