(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_carousel_carousel_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/carousel/carousel.animations */ "./src/app/shared/carousel/carousel.animations.ts");
/* harmony import */ var src_app_shared_slides_barcelona92_slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/slides/barcelona92.slides */ "./src/app/shared/slides/barcelona92.slides.ts");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/player.service */ "./src/app/shared/services/player.service.ts");
/* harmony import */ var _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/carousel/carousel.component */ "./src/app/shared/carousel/carousel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./streamer/streamer.component */ "./src/app/streamer/streamer.component.ts");









function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sintonitza\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { pointer: a0 }; };
class AppComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.title = 'dublab';
        this.canShowTooltip = false;
        this.animationType = _shared_carousel_carousel_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationType"].Fade;
        this.slides = new src_app_shared_slides_barcelona92_slides__WEBPACK_IMPORTED_MODULE_2__["Barcelona92"]().slides;
    }
    ngOnInit() {
        this.initializeTooltip();
    }
    get hasTunedIn() {
        return this.playerService.hasTunedIn;
    }
    onTuneIn() {
        this.playerService.tuneIn();
    }
    initializeTooltip() {
        const tooltip = document.getElementsByClassName("tooltip");
        document.addEventListener('mousemove', fn, false);
        function fn(e) {
            for (let i = tooltip.length; i--;) {
                tooltip[i].style.left = e.pageX + 'px';
                tooltip[i].style.top = e.pageY + 'px';
            }
        }
    }
    showTooltip() {
        this.canShowTooltip = true;
    }
    hideTooltip() {
        this.canShowTooltip = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 8, consts: [[1, "content-container"], [3, "ngClass", "slides", "animationType", "autoTime", "random", "click", "mouseenter", "mouseleave"], [3, "mouseenter"], ["class", "tooltip", 4, "ngIf"], [1, "tooltip"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_carousel_click_2_listener() { return ctx.onTuneIn(); })("mouseenter", function AppComponent_Template_carousel_mouseenter_2_listener() { return ctx.showTooltip(); })("mouseleave", function AppComponent_Template_carousel_mouseleave_2_listener() { return ctx.hideTooltip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_menu_mouseenter_3_listener() { return ctx.hideTooltip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "streamer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.canShowTooltip && !ctx.hasTunedIn))("slides", ctx.slides)("animationType", ctx.animationType)("autoTime", 30000)("random", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canShowTooltip && !ctx.hasTunedIn);
    } }, directives: [_shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_7__["StreamerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".splash[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  position: relative;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  \r\n  color: white;\r\n  margin-left: 10px;\r\n  padding: 10px;\r\n  position: absolute;\r\n  z-index: 1000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxhc2gge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lcjpob3ZlciAudG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./streamer/streamer.component */ "./src/app/streamer/streamer.component.ts");
/* harmony import */ var _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/carousel/carousel.component */ "./src/app/shared/carousel/carousel.component.ts");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/player.service */ "./src/app/shared/services/player.service.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_6__["StreamerComponent"],
        _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                    _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_6__["StreamerComponent"],
                    _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                providers: [src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MenuComponent {
    constructor() { }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu"]], decls: 20, vars: 0, consts: [[1, "logo-wrapper", "menu-item"], ["src", "assets/dublab_menu_logo.png", "alt", "Dublab", 1, "logo"], [1, "programacio", "menu-item"], [1, "pointer"], [1, "sisters", "menu-item"], [1, "explora", "menu-item"], [1, "info", "menu-item"], [1, "search", "menu-item"], [1, "material-icons", "search-icon", "pointer"], [1, "options", "menu-item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Programaci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sisters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Explora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-bottom: var(--menu-height);\r\n    padding: 0;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr repeat(3, 120px) 100px 70px;\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  .programacio[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    grid-area: 1 / 2 / 2 / 3;\r\n  }\r\n\r\n  .sisters[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 3 / 2 / 4;\r\n  }\r\n\r\n  .explora[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 4 / 2 / 5;\r\n  }\r\n\r\n  .info[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 5 / 2 / 6;\r\n  }\r\n\r\n\r\n  .search[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 6 / 2 / 7;\r\n    text-align: right;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .options[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-bottom: var(--menu-height);\r\n    padding: 0;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 50px 35px;\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .programacio[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .sisters[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .explora[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .info[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n\r\n.logo-wrapper[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: inherit;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  padding: var(---menu-padding);\r\n  width: var(--logo-size);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixzREFBc0Q7SUFDdEQsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7O0lBRWpCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7OztFQUdBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7O0lBRWpCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIDEyMHB4KSAxMDBweCA3MHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMHB4O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcblxyXG4gIC5wcm9ncmFtYWNpbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xyXG4gIH1cclxuXHJcbiAgLnNpc3RlcnMge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xyXG4gIH1cclxuXHJcbiAgLmV4cGxvcmEge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xyXG4gIH1cclxuXHJcblxyXG4gIC5zZWFyY2gge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gNiAvIDIgLyA3O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgLm9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHggMzVweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmFtYWNpbyB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2lzdGVycyB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXhwbG9yYSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyogTWVudSAqL1xyXG5cclxuLmxvZ28td3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGluaGVyaXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZzogdmFyKC0tLW1lbnUtcGFkZGluZyk7XHJcbiAgd2lkdGg6IHZhcigtLWxvZ28tc2l6ZSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/carousel/carousel.animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/carousel/carousel.animations.ts ***!
  \********************************************************/
/*! exports provided: AnimationType, scaleIn, scaleOut, fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationType", function() { return AnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIn", function() { return scaleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOut", function() { return scaleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipIn", function() { return flipIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOut", function() { return flipOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackIn", function() { return jackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackOut", function() { return jackOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

// =========================
// Enum for referencing animations
// =========================
var AnimationType;
(function (AnimationType) {
    AnimationType["Scale"] = "scale";
    AnimationType["Fade"] = "fade";
    AnimationType["Flip"] = "flip";
    AnimationType["JackInTheBox"] = "jackInTheBox";
})(AnimationType || (AnimationType = {}));
// =========================
// Scale
// =========================
const scaleIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: "scale(0.5)" }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: "scale(1)" }))
]);
const scaleOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: "scale(0.5)" }))
]);
// =========================
// Fade
// =========================
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
]);
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
]);
// =========================
// Flip
// =========================
const flipIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: "perspective(400px)", offset: 1 })
    ]))
]);
const flipOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
// just hide it
]);
// =========================
// Jack in the box
// =========================
const jackIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("{{time}} ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            animationFillMode: "forwards",
            transform: "scale(0.1) rotate(30deg)",
            transformOrigin: "center bottom",
            offset: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: "rotate(-10deg)",
            offset: 0.5
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: "rotate(3deg)",
            offset: 0.7
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: "perspective(400px)",
            offset: 1
        })
    ]))
]);
const jackOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
// just hide it
]);


/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _carousel_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.animations */ "./src/app/shared/carousel/carousel.animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CarouselComponent_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const slide_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("@slideAnimation", ctx_r4.animationType);
} }
function CarouselComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 === ctx_r0.currentSlide);
} }
function CarouselComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onPreviousClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onNextClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CarouselComponent {
    constructor() {
        this.controls = false;
        this.random = false;
        this.autoTime = 0;
        this.animationType = _carousel_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationType"].Fade;
        this.currentSlide = 0;
    }
    ngOnInit() {
        this.preloadImages();
        if (this.random)
            this.randomClick();
        if (this.autoTime > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.autoTime).subscribe(x => {
                if (this.random)
                    this.randomClick();
                else
                    this.onNextClick();
            });
        }
    }
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    }
    onNextClick(skip = 1) {
        const next = this.currentSlide + skip;
        this.currentSlide = next === this.slides.length ? 0 : next;
    }
    randomClick() {
        const next = this.getRandomInt(1, this.slides.length);
        this.currentSlide = next === this.slides.length ?
            0 :
            next;
    }
    onRightClick(event) {
        event.preventDefault();
    }
    preloadImages() {
        for (const slide of this.slides) {
            new Image().src = slide.src;
        }
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { slides: "slides", controls: "controls", random: "random", autoTime: "autoTime", animationType: "animationType" }, decls: 3, vars: 2, consts: [[1, "carousel", 3, "contextmenu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "slide", 3, "src", 4, "ngIf"], [1, "slide", 3, "src"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function CarouselComponent_Template_div_contextmenu_0_listener($event) { return ctx.onRightClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_container_2_Template, 5, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\r\n}\r\n\r\n.control[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: 0;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 0.5em;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 3em;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  height: 100%;\r\n  opacity: 80%;\r\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\r\n\r\n}\r\n\r\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\r\n    opacity: 1;\r\n  }\r\n\r\n.control.next[_ngcontent-%COMP%] {\r\n    right: 0;\r\n  }\r\n\r\n.control.prev[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n\r\n\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  display: block;\r\n  border-left: 0.1em solid white;\r\n  border-bottom: 0.1em solid white;\r\n  width: 0.5em;\r\n  height: 0.5em;\r\n}\r\n\r\n.arrow.left[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.arrow.right[_ngcontent-%COMP%] {\r\n  transform: rotate(225deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBaUI7S0FBakIsc0JBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDhEQUE4RDtBQUNoRSx5QkFBeUI7QUFDekI7O0FBRUU7SUFDRSxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxRQUFRO0VBQ1Y7O0FBQ0E7SUFDRSxPQUFPO0VBQ1Q7O0FBRUYscUJBQXFCOztBQUNyQjtFQUNFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XHJcbn1cclxuXHJcbi5jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDgwJTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcclxuLyogUG9zaXRpb24gdGhlIGJ1dHRvbnMgKi9cclxufVxyXG5cclxuICAuY29udHJvbDpob3ZlciwgLmNvbnRyb2w6Zm9jdXMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLmNvbnRyb2wubmV4dCB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLmNvbnRyb2wucHJldiB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbi8qIHN0eWxlIHRoZSBhcnJvd3MgKi9cclxuLmFycm93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItbGVmdDogMC4xZW0gc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgd2hpdGU7XHJcbiAgd2lkdGg6IDAuNWVtO1xyXG4gIGhlaWdodDogMC41ZW07XHJcbn1cclxuLmFycm93LmxlZnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uYXJyb3cucmlnaHQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("slideAnimation", [
                /* scale */
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => scale", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["scaleIn"], { params: { time: "500ms" } })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("scale => void", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["scaleOut"], { params: { time: "500ms" } })
                ]),
                /* fade */
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], { params: { time: "2500ms" } })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("fade => void", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeOut"], { params: { time: "2500ms" } })
                ]),
                /* flip */
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => flip", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["flipIn"], { params: { time: "500ms" } })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("flip => void", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["flipOut"], { params: { time: "500ms" } })
                ]),
                /* JackInTheBox */
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => jackInTheBox", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["jackIn"], { params: { time: "700ms" } })
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("jackInTheBox => void", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["jackOut"], { params: { time: "700ms" } })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("slideAnimation", [
                        /* scale */
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => scale", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["scaleIn"], { params: { time: "500ms" } })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("scale => void", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["scaleOut"], { params: { time: "500ms" } })
                        ]),
                        /* fade */
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => fade", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], { params: { time: "2500ms" } })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("fade => void", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["fadeOut"], { params: { time: "2500ms" } })
                        ]),
                        /* flip */
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => flip", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["flipIn"], { params: { time: "500ms" } })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("flip => void", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["flipOut"], { params: { time: "500ms" } })
                        ]),
                        /* JackInTheBox */
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => jackInTheBox", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["jackIn"], { params: { time: "700ms" } })
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("jackInTheBox => void", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["jackOut"], { params: { time: "700ms" } })
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], random: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animationType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/player.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlayerService {
    constructor() {
        this.hasTunedIn = false;
        this.playing = false;
    }
    toggleTuneIn() {
        if (!this.hasTunedIn)
            this.hasTunedIn = true;
        if (this.playing)
            this.playing = false;
        else
            this.playing = true;
    }
    tuneIn() {
        if (!this.hasTunedIn)
            this.toggleTuneIn();
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/slides/barcelona92.slides.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/slides/barcelona92.slides.ts ***!
  \*****************************************************/
/*! exports provided: Barcelona92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Barcelona92", function() { return Barcelona92; });
class Barcelona92 {
    constructor() {
        this.slides = [
            {
                headline: "Panorámica Barcelona - Luis Ochandorena",
                src: "assets/collections/barcelona92/1_panoramica_luis_ochandorena.jpg"
            },
            {
                headline: "Pabellón Mies van der Rohe",
                src: "assets/collections/barcelona92/2_mies_van_der_rohe.jpg"
            },
            {
                headline: "Pavelló Mies van der Rohe",
                src: "assets/collections/barcelona92/2_mies_van_der_rohe.jpg"
            },
            {
                headline: "Tibidabo - Luis Ochandorena",
                src: "assets/collections/barcelona92/3_tibidabo_ochandorena.jpg"
            },
            {
                headline: "Platja - Luis Ochandorena",
                src: "assets/collections/barcelona92/4_playa_ochandorena.jpg"
            },
            {
                headline: "Dibuix Sant Jordi",
                src: "assets/collections/barcelona92/5_dibuix_sant_jordi.jpg"
            },
            {
                headline: "La Segrera - Luis Ochandorena",
                src: "assets/collections/barcelona92/6_la_segrera_ochandorena.jpg"
            },
            {
                headline: "El Liceu",
                src: "assets/collections/barcelona92/7_liceu.jpg"
            },
            {
                headline: "La Pedrera - Pérez Reus",
                src: "assets/collections/barcelona92/8_pedrera_perez_reus.jpg"
            },
            {
                headline: "Barretines",
                src: "assets/collections/barcelona92/9_barretines.jpg"
            },
            {
                headline: "Molino - Manel Armengol",
                src: "assets/collections/barcelona92/10_molino.jpg"
            },
            {
                headline: "Floquet de Neu",
                src: "assets/collections/barcelona92/11_floquet.jpg"
            },
            {
                headline: "Nus Trinitat",
                src: "assets/collections/barcelona92/12_nus_trinitat.jpg"
            },
            {
                headline: "Anelles Olímpiques 1992",
                src: "assets/collections/barcelona92/13_anelles.jpg"
            },
            {
                headline: "Palau Sant Jordi",
                src: "assets/collections/barcelona92/14_palau_st_jordi.jpg"
            },
            {
                headline: "Moll de la Fusta",
                src: "assets/collections/barcelona92/15_moll_de_la_fusta.jpg"
            },
            {
                headline: "Parc de l'Espanya Industrial",
                src: "assets/collections/barcelona92/16_espanya_industrial.jpg"
            },
            {
                headline: "Velòdrom Vall d'Hebron - Jordi Mestre",
                src: "assets/collections/barcelona92/17_velodrom_jordi_mestre.jpg"
            },
            {
                headline: "Ramblas",
                src: "assets/collections/barcelona92/18_ramblas.jpg"
            },
            {
                headline: "Fundació Joan Mirò",
                src: "assets/collections/barcelona92/19_fundacio_joan_miro.jpg"
            },
            {
                headline: "Lluminós 1992",
                src: "assets/collections/barcelona92/20_lluminos.jpg"
            },
            {
                headline: "Foc i Diables",
                src: "assets/collections/barcelona92/21_foc_i_diables.jpg"
            },
            {
                headline: "Crema Catalana",
                src: "assets/collections/barcelona92/22_crema_catalana.jpg"
            },
            {
                headline: "Cantiners",
                src: "assets/collections/barcelona92/23_cantiners.jpg"
            },
            {
                headline: "Mapa del Barcelonès",
                src: "assets/collections/barcelona92/24_mapa_barcelones.jpg"
            },
            {
                headline: "Port de Barcelona",
                src: "assets/collections/barcelona92/25_port_barcelona.jpg"
            },
            {
                headline: "Plaça Reial",
                src: "assets/collections/barcelona92/26_placa_reial.jpg"
            },
            {
                headline: "Gent",
                src: "assets/collections/barcelona92/27_gent_random.jpg"
            },
            {
                headline: "Grues - Studio Pomes",
                src: "assets/collections/barcelona92/28_grues_studio_pomes.jpg"
            },
            {
                headline: "Baixell - Studio Pomes",
                src: "assets/collections/barcelona92/29_baixell_studio_pomes.jpg"
            },
            {
                headline: "Raval - Studio Pomes",
                src: "assets/collections/barcelona92/30_raval_studio_pomes.jpg"
            },
            {
                headline: "Parella - Studio Pomes",
                src: "assets/collections/barcelona92/31_parella_studio_pomes.jpg"
            },
            {
                headline: "Museo Picasso - Studio Pomes",
                src: "assets/collections/barcelona92/32_museo_picasso_studio_pomes.jpg"
            },
            {
                headline: "Ciutat Vella - Studio Pomes",
                src: "assets/collections/barcelona92/33_ciutat_vella_studio_pomes.jpg"
            },
            {
                headline: "Colmado - Studio Pomes",
                src: "assets/collections/barcelona92/34_colmado_studio_pomes.jpg"
            },
            {
                headline: "Terrat - Studio Pomes",
                src: "assets/collections/barcelona92/35_terrat_studio_pomes.jpg"
            },
            {
                headline: "Entrada a casa - Studio Pomes",
                src: "assets/collections/barcelona92/36_entrada_casa_studio_pomes.jpg"
            },
            {
                headline: "Carrer Hospital - Studio Pomes",
                src: "assets/collections/barcelona92/37_carrer_hospital_studio_pomes.jpg"
            },
            {
                headline: "Sala Bagdad - Studio Pomes",
                src: "assets/collections/barcelona92/38_bagdad_studio_pomes.jpg"
            },
            {
                headline: "Palmeres - Studio Pomes",
                src: "assets/collections/barcelona92/39_palmeres_studio_pomes.jpg"
            },
            {
                headline: "Manifestació feminista - P. Virgili",
                src: "assets/collections/barcelona92/40_manifa_dones_p_virgili.jpg"
            },
            {
                headline: "Senyores amb un ordinador",
                src: "assets/collections/barcelona92/41_senyores_ordinador.jpg"
            },
            {
                headline: "Pau i Sagrada Familia",
                src: "assets/collections/barcelona92/42_pau_sagrada_familia.jpg"
            },
            {
                headline: "Manifestació Anti-globalització",
                src: "assets/collections/barcelona92/43_antiglobalitzacio_p_virgili.jpg"
            },
            {
                headline: "Oficina - P. Virgili",
                src: "assets/collections/barcelona92/44_oficina_p_virgili.jpg"
            },
            {
                headline: "Ordinadors - P. Virgili",
                src: "assets/collections/barcelona92/45_ordinadors_p_virgili.jpg"
            },
            {
                headline: "Capgrossos - P. Virgili",
                src: "assets/collections/barcelona92/46_capgrossos_p_virgili.jpg"
            },
            {
                headline: "La Fura dels Baus",
                src: "assets/collections/barcelona92/47_fura_baus.jpg"
            },
            {
                headline: "La Ciutadella - P. Virgili",
                src: "assets/collections/barcelona92/48_ciutadella_p_virgili.jpg"
            },
            {
                headline: "Nus Trinitat - J. Todó",
                src: "assets/collections/barcelona92/49_nus_trinitat_j_todo.jpg"
            },
            {
                headline: "Torre de Collserola - J. Todó",
                src: "assets/collections/barcelona92/50_torre_collserola_j_todo.jpg"
            },
            {
                headline: "Diagonal - J. Todó",
                src: "assets/collections/barcelona92/51_diagonal_j_todo.jpg"
            },
            {
                headline: "Sant Adrià - J. Todó",
                src: "assets/collections/barcelona92/52_sant_adria_j_todo.jpg"
            },
            {
                headline: "Grill Room",
                src: "assets/collections/barcelona92/53_grill_room.jpg"
            },
            {
                headline: "Manifestació LGTB - Man Costas",
                src: "assets/collections/barcelona92/54_manifa_gay_man_costas.jpg"
            },
            {
                headline: "Institut Botànic - Jordi Folch",
                src: "assets/collections/barcelona92/55_institut_botanic_j_folch.jpg"
            },
            {
                headline: "Rentadores - Pau Quesada i Vila",
                src: "assets/collections/barcelona92/56_rentadores_pau_quesada_i_vila.jpg"
            },
            {
                headline: "Casa Lleo Morera - Francisco Ontañón Núñez",
                src: "assets/collections/barcelona92/57_casa_lleo_morera_francisco_ontanon_nunez.jpg"
            },
            {
                headline: "Montjuïc - Francesc Goma",
                src: "assets/collections/barcelona92/58_montjuic_francesc_goma.jpg"
            },
            {
                headline: "Carrer Muntaner - Man Costa",
                src: "assets/collections/barcelona92/59_carrer_muntaner_man_costa.jpg"
            },
            {
                headline: "MACBA - Jordi Trullas",
                src: "assets/collections/barcelona92/60_macba_jordi_trullas.jpg"
            },
            {
                headline: "Museo de Cera",
                src: "assets/collections/barcelona92/61_museu_cera.jpg"
            },
            {
                headline: "Auditori - Antonio Lajusticia",
                src: "assets/collections/barcelona92/62_auditori_antoni_lajusticia.jpg"
            },
            {
                headline: "Concert a Plaça Reial - Pau Quesada i Vila",
                src: "assets/collections/barcelona92/63_concert_placa_reial_pau_quesda_i_vila.jpg"
            },
            {
                headline: "Maternitat - Pepe Encinas",
                src: "assets/collections/barcelona92/64_maternitat_pepe_encinas.jpg"
            },
            {
                headline: "Jardins Mossen Verdaguer - Josep Moragues",
                src: "assets/collections/barcelona92/65_jardins_mossen_verdaguer_josep_moragues.jpg"
            },
            {
                headline: "Pavelló de Mies Van der Rohe - Montse Catalán",
                src: "assets/collections/barcelona92/66_pavello_mies_montse_catalan.jpg"
            },
            {
                headline: "Poble Nou Mar - Paco Elvira",
                src: "assets/collections/barcelona92/67_poble_nou_mar_paco_elvira.jpg"
            },
            {
                headline: "Besós - Paco Elvira",
                src: "assets/collections/barcelona92/68_besos_paco_elvira.jpg"
            },
            {
                headline: "Besós - Paco Elvira",
                src: "assets/collections/barcelona92/69_besos2_paco_elvira.jpg"
            },
            {
                headline: "Port de Barcelona - Paco Elvira",
                src: "assets/collections/barcelona92/70_port_bcn_paco_elvira.jpg"
            },
            {
                headline: "Platja de Barcelona - Paco Elvira",
                src: "assets/collections/barcelona92/71_platja_bcn_paco_elvira.jpg"
            },
            {
                headline: "Barceloneta - Paco Elvira",
                src: "assets/collections/barcelona92/72_barceloneta_paco_elvira.jpg"
            },
            {
                headline: "Pescadors - Paco Elvira",
                src: "assets/collections/barcelona92/73_pescadors_paco_elvira.jpg"
            },
            {
                headline: "Voluntaris Olímpics - Genín Andrada",
                src: "assets/collections/barcelona92/74_voluntaris_olimpics_genin_andrada.jpg"
            },
            {
                headline: "Pavelló - Roser Puigdefabregat",
                src: "assets/collections/barcelona92/75_pavello_roser_puigdefabregat.jpg"
            },
            {
                headline: "Picornell - Francisco José García Comaposada",
                src: "assets/collections/barcelona92/76_picornell_francisco_jose_garcia_comaposada.jpg"
            },
            {
                headline: "Jutges Olímpics - Inma Reventós Moret",
                src: "assets/collections/barcelona92/77_jutges_inma_reventos_moret.jpg"
            },
            {
                headline: "Port Olímpic - Maria Dolors Vinuesa",
                src: "assets/collections/barcelona92/78_port_olimpic_maria_dolors_vinuesa.jpg"
            },
            {
                headline: "Estadi Olímpic - Helena Mallafré",
                src: "assets/collections/barcelona92/79_estadi_olimpic_helena_mallafre.jpg"
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/streamer/marquee.ts":
/*!*************************************!*\
  !*** ./src/app/streamer/marquee.ts ***!
  \*************************************/
/*! exports provided: initializeMarquee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeMarquee", function() { return initializeMarquee; });
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);

function initializeMarquee() {
    //
    //   Variables
    //
    //////////////////////////////////////////////////////////////////////
    // Play with this value to change the speed
    let tickerSpeed = 1;
    let flickity = null;
    let isPaused = false;
    const slideshowEl = document.getElementById('js-slideshow');
    //
    //   Functions
    //
    //////////////////////////////////////////////////////////////////////
    const update = () => {
        if (isPaused)
            return;
        if (flickity.slides) {
            flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
            flickity.selectedIndex = flickity.dragEndRestingSelect();
            flickity.updateSelectedSlide();
            flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
    };
    const pause = () => {
        isPaused = true;
    };
    const play = () => {
        if (isPaused) {
            isPaused = false;
            window.requestAnimationFrame(update);
        }
    };
    //
    //   Create Flickity
    //
    //////////////////////////////////////////////////////////////////////
    flickity = new flickity__WEBPACK_IMPORTED_MODULE_0__(slideshowEl, {
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        selectedAttraction: 0,
        friction: 0
    });
    flickity.x = 0;
    //
    //   Add Event Listeners
    //
    //////////////////////////////////////////////////////////////////////
    // slideshowEl.addEventListener('focusin', pause, false);
    slideshowEl.addEventListener('mouseleave', play, false);
    slideshowEl.addEventListener('focusout', play, false);
    flickity.on('dragStart', () => {
        isPaused = true;
    });
    //
    //   Start Ticker
    //
    //////////////////////////////////////////////////////////////////////
    update();
}


/***/ }),

/***/ "./src/app/streamer/streamer.component.ts":
/*!************************************************!*\
  !*** ./src/app/streamer/streamer.component.ts ***!
  \************************************************/
/*! exports provided: StreamerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamerComponent", function() { return StreamerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_streamer_marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/streamer/marquee */ "./src/app/streamer/marquee.ts");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/player.service */ "./src/app/shared/services/player.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function StreamerComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamerComponent_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleTuneIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StreamerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamerComponent_ng_template_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleTuneIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StreamerComponent {
    constructor(playerService) {
        this.playerService = playerService;
        setInterval(() => {
            this.hour = new Date().toString().split(' ')[4].substr(0, 5);
        }, 1);
    }
    ngOnInit() {
        src_app_streamer_marquee__WEBPACK_IMPORTED_MODULE_1__["initializeMarquee"]();
    }
    get playing() {
        return this.playerService.playing;
    }
    toggleTuneIn() {
        this.playerService.toggleTuneIn();
    }
}
StreamerComponent.ɵfac = function StreamerComponent_Factory(t) { return new (t || StreamerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"])); };
StreamerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StreamerComponent, selectors: [["streamer"]], decls: 34, vars: 3, consts: [["id", "purple-text-section", 1, "purple-section", "streamer-item"], [1, "play", "streamer-item"], ["class", "material-icons play-icon pointer", 3, "click", 4, "ngIf", "ngIfElse"], ["paused", ""], [1, "on-air", "streamer-item"], [1, "shadow-left"], [1, "shadow-right"], ["id", "js-slideshow", 1, "slideshow", "js-slideshow"], [1, "slide"], [1, "signal"], ["scrollamount", "1", "scrolldelay", "6", "truespeed", "truespeed", 1, "mob-marquee"], [1, "mob-signal"], [1, "language-picker", "streamer-item"], [1, "material-icons", "play-icon", "pointer", 3, "click"]], template: function StreamerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "comunitat :: r\u00E0dio :: barcelona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StreamerComponent_span_5_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StreamerComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " (ara) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Latitudes :: Cosmic d'Alessandro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " (despr\u00E9s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " McGuffin :: Carles Yag\u00FCez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "marquee", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (ara) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Latitudes :: Cosmic d'Alessandro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " (despr\u00E9s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " McGuffin :: Carles Yag\u00FCez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playing)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hour);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@media (min-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-top: -var(--menu-height);\r\n    padding: 0 !important;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 290px 45px auto 110px;\r\n    grid-template-rows: 1fr;\r\n    grid-gap: 0px;\r\n  }\r\n\r\n  .purple-section[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    padding: var(---menu-padding);\r\n    background-color: var(--brand-purple);\r\n    color: white;\r\n  }\r\n\r\n  .slideshow[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    cursor: grab;\r\n  }\r\n\r\n  .slide[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    height: var(--menu-height);\r\n    color: black;\r\n    place-items: center;\r\n    display: inline-flex;\r\n  }\r\n\r\n  .mob-marquee[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-top: -var(--menu-height);\r\n    padding: 0 !important;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 50px 1fr 80px;\r\n    grid-template-rows: 1fr;\r\n    grid-gap: 0px;\r\n  }\r\n\r\n  .slideshow[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  #purple-text-section[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.signal[_ngcontent-%COMP%] {\r\n  font-weight: 100;\r\n  margin-right: 10px;\r\n}\r\n\r\n.mob-signal[_ngcontent-%COMP%] {\r\n  margin-right: 70px;\r\n}\r\n\r\n.streamer-item[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.on-air[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  position: relative;\r\n}\r\n\r\n.play-icon[_ngcontent-%COMP%] {\r\n  transform: var(--icons-fx);\r\n}\r\n\r\n.language-picker[_ngcontent-%COMP%] {\r\n  background-color: var(--brand-purple);\r\n  color: white;\r\n}\r\n\r\n.current-language[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\n.next[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.marquee-spacer[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.shadow-left[_ngcontent-%COMP%] {\r\n  box-shadow: inset 10px 0px 10px 0px white;\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  display: revert;\r\n  place-items: center;\r\n  width: 50px;\r\n}\r\n\r\n.shadow-right[_ngcontent-%COMP%] {\r\n  box-shadow: inset 10px 0px 10px 0px white;\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  display: revert;\r\n  place-items: center;\r\n  width: 50px;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyZWFtZXIvc3RyZWFtZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTs7SUFFWiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFlBQVk7O0FBRVo7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsc0JBQXNCIiwiZmlsZSI6InNyYy9hcHAvc3RyZWFtZXIvc3RyZWFtZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgbWFyZ2luLXRvcDogLXZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5MHB4IDQ1cHggYXV0byAxMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDBweDtcclxuICB9XHJcblxyXG4gIC5wdXJwbGUtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS0tbWVudS1wYWRkaW5nKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVzaG93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgfVxyXG5cclxuICAubW9iLW1hcnF1ZWUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XHJcbiAgICBtYXJnaW4tdG9wOiAtdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnIgODBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDBweDtcclxuICB9XHJcblxyXG4gIC5zbGlkZXNob3cge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI3B1cnBsZS10ZXh0LXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZ25hbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5tb2Itc2lnbmFsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5zdHJlYW1lci1pdGVtIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ub24tYWlyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGxheS1pY29uIHtcclxuICB0cmFuc2Zvcm06IHZhcigtLWljb25zLWZ4KTtcclxufVxyXG5cclxuLmxhbmd1YWdlLXBpY2tlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXJyZW50LWxhbmd1YWdlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm5leHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hcnF1ZWUtc3BhY2VyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFNoYWRvd3MgKi9cclxuXHJcbi5zaGFkb3ctbGVmdCB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAwcHggMTBweCAwcHggd2hpdGU7XHJcbiAgei1pbmRleDogNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IHJldmVydDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uc2hhZG93LXJpZ2h0IHtcclxuICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDBweCAxMHB4IDBweCB3aGl0ZTtcclxuICB6LWluZGV4OiA1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IHJldmVydDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogU0xJREVTSE9XIE1BUlFVRUUgKi9cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'streamer',
                templateUrl: './streamer.component.html',
                styleUrls: ['./streamer.component.css'],
            }]
    }], function () { return [{ type: _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PROGRAMMING\PROJECTS\dublab\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map