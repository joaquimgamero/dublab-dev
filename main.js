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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_carousel_carousel_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/carousel/carousel.animations */ "./src/app/shared/carousel/carousel.animations.ts");
/* harmony import */ var src_app_shared_slides_barcelona92_slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/slides/barcelona92.slides */ "./src/app/shared/slides/barcelona92.slides.ts");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/player.service */ "./src/app/shared/services/player.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/carousel/carousel.component */ "./src/app/shared/carousel/carousel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/drop-down/drop-down.component */ "./src/app/shared/drop-down/drop-down.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./streamer/streamer.component */ "./src/app/streamer/streamer.component.ts");












function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sintonitza ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { pointer: a0 }; };
const _c1 = function (a0) { return { invisible: a0 }; };
class AppComponent {
    constructor(playerService, dataService) {
        this.playerService = playerService;
        this.dataService = dataService;
        this.title = 'dublab';
        this.canShowTooltip = false;
        this.animationType = _shared_carousel_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationType"].Fade;
        this.slides = new src_app_shared_slides_barcelona92_slides__WEBPACK_IMPORTED_MODULE_3__["Barcelona92"]().slides;
        this.mouseOnScheduleDropDown = false;
        this.mouseOnScheduleMenu = false;
        this.mouseOnScheduleMenuToBeFalse = false;
        // Explore
        this.exploreData = [
            { display: 'Shows', link: '/shows' },
            { display: 'B-Sides', link: '/b-sides' },
            { display: 'Destacats', link: '/destacats' },
            { display: 'Ex-Shows', link: '/ex-shows' },
        ];
        this.mouseOnExploreDropDown = false;
        this.mouseOnExploreMenu = false;
        this.mouseOnExploreMenuToBeFalse = false;
        // Sisters
        this.sistersLinks = [
            { display: 'dublab.com', link: 'dublab.com' },
            { display: 'dublab.de', link: 'dublab.de' },
            { display: 'dublab.jp', link: 'dublab.jp' },
            { display: 'dublab.br', link: 'dublab.com.br' },
        ];
        this.mouseOnSistersDropDown = false;
        this.mouseOnSistersMenu = false;
        this.mouseOnSistersMenuToBeFalse = false;
    }
    ngOnInit() {
        this.initializeTooltip();
        this.dataService.createTodaysSchedule();
    }
    get todaysSchedule() {
        return this.dataService.todaysSchedule;
    }
    get hasTunedIn() {
        return this.playerService.hasTunedIn;
    }
    // Events
    onTuneIn() {
        this.playerService.tuneIn();
    }
    // Dropdown Managers
    // Schedule
    onShowSchedule() {
        this.mouseOnScheduleMenu = true;
        this.mouseOnScheduleMenuToBeFalse = false;
        this.mouseOnExploreMenu = false;
        this.mouseOnSistersMenu = false;
    }
    onHideSchedule() {
        this.mouseOnScheduleMenuToBeFalse = true;
        this.delay(500).then(any => {
            if (this.mouseOnScheduleMenuToBeFalse) {
                this.mouseOnScheduleMenu = false;
            }
        });
    }
    onShowScheduleDropDown() {
        this.mouseOnScheduleDropDown = true;
    }
    onHideScheduleDropDown() {
        this.mouseOnScheduleDropDown = false;
    }
    // Explore
    onShowExplore() {
        this.mouseOnExploreMenu = true;
        this.mouseOnExploreMenuToBeFalse = false;
        this.mouseOnScheduleMenu = false;
        this.mouseOnSistersMenu = false;
    }
    onHideExplore() {
        this.mouseOnExploreMenuToBeFalse = true;
        this.delay(500).then(any => {
            if (this.mouseOnExploreMenuToBeFalse) {
                this.mouseOnExploreMenu = false;
            }
        });
    }
    onShowExploreDropDown() {
        this.mouseOnExploreDropDown = true;
    }
    onHideExploreDropDown() {
        this.mouseOnExploreDropDown = false;
    }
    // Sisters
    onShowSisters() {
        this.mouseOnSistersMenu = true;
        this.mouseOnSistersMenuToBeFalse = false;
        this.mouseOnScheduleMenu = false;
        this.mouseOnExploreMenu = false;
    }
    onHideSisters() {
        this.mouseOnSistersMenuToBeFalse = true;
        this.delay(500).then(any => {
            if (this.mouseOnSistersMenuToBeFalse) {
                this.mouseOnSistersMenu = false;
            }
        });
    }
    onShowSistersDropDown() {
        this.mouseOnSistersDropDown = true;
    }
    onHideSistersDropDown() {
        this.mouseOnSistersDropDown = false;
    }
    // Tooltip
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
    delay(ms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 26, consts: [[1, "content-container"], [3, "ngClass", "slides", "animationType", "autoTime", "random", "click", "mouseenter", "mouseleave"], ["id", "schedule", 1, "invisible", 3, "menuData", "ngClass", "mouseEnter", "mouseLeave"], ["id", "explore", 1, "invisible", 3, "menuData", "ngClass", "mouseEnter", "mouseLeave"], ["id", "sisters", 1, "invisible", 3, "links", "ngClass", "mouseEnter", "mouseLeave"], [3, "mouseenter", "showSchedule", "hideSchedule", "showExplore", "hideExplore", "showSisters", "hideSisters"], ["class", "tooltip", 4, "ngIf"], [1, "tooltip"], [1, "tooltip-wrapper"], [1, "material-icons", "play-arrow"], [1, "tooltip-text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_carousel_click_2_listener() { return ctx.onTuneIn(); })("mouseenter", function AppComponent_Template_carousel_mouseenter_2_listener() { return ctx.showTooltip(); })("mouseleave", function AppComponent_Template_carousel_mouseleave_2_listener() { return ctx.hideTooltip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "drop-down", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseEnter", function AppComponent_Template_drop_down_mouseEnter_3_listener() { return ctx.onShowScheduleDropDown(); })("mouseLeave", function AppComponent_Template_drop_down_mouseLeave_3_listener() { return ctx.onHideScheduleDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "drop-down", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseEnter", function AppComponent_Template_drop_down_mouseEnter_4_listener() { return ctx.onShowExploreDropDown(); })("mouseLeave", function AppComponent_Template_drop_down_mouseLeave_4_listener() { return ctx.onHideExploreDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseEnter", function AppComponent_Template_drop_down_mouseEnter_5_listener() { return ctx.onShowSistersDropDown(); })("mouseLeave", function AppComponent_Template_drop_down_mouseLeave_5_listener() { return ctx.onHideSistersDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function AppComponent_Template_menu_mouseenter_6_listener() { return ctx.hideTooltip(); })("showSchedule", function AppComponent_Template_menu_showSchedule_6_listener() { return ctx.onShowSchedule(); })("hideSchedule", function AppComponent_Template_menu_hideSchedule_6_listener() { return ctx.onHideSchedule(); })("showExplore", function AppComponent_Template_menu_showExplore_6_listener() { return ctx.onShowExplore(); })("hideExplore", function AppComponent_Template_menu_hideExplore_6_listener() { return ctx.onHideExplore(); })("showSisters", function AppComponent_Template_menu_showSisters_6_listener() { return ctx.onShowSisters(); })("hideSisters", function AppComponent_Template_menu_hideSisters_6_listener() { return ctx.onHideSisters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "streamer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_div_8_Template, 7, 0, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.canShowTooltip && !ctx.hasTunedIn))("slides", ctx.slides)("animationType", ctx.animationType)("autoTime", 30000)("random", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("right", 199, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuData", ctx.todaysSchedule)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, !ctx.mouseOnScheduleMenu && !ctx.mouseOnScheduleDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("right", 214, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuData", ctx.exploreData)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, !ctx.mouseOnExploreMenu && !ctx.mouseOnExploreDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("right", 105, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("links", ctx.sistersLinks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, !ctx.mouseOnSistersMenu && !ctx.mouseOnSistersDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canShowTooltip && !ctx.hasTunedIn);
    } }, directives: [_shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_8__["DropDownComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_10__["StreamerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".splash[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  position: relative;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  \r\n  color: white;\r\n  margin-left: 10px;\r\n  padding: 10px;\r\n  position: absolute;\r\n  z-index: 1000;\r\n}\r\n\r\n.tooltip-wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 20px 1fr;\r\n}\r\n\r\n.tooltip-text[_ngcontent-%COMP%] {\r\n      padding-top: 1px;\r\n    }\r\n\r\n.play-arrow[_ngcontent-%COMP%] {\r\n      font-size: 18px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVJO01BQ0UsZ0JBQWdCO0lBQ2xCOztBQUVBO01BQ0UsZUFBZTtJQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGFzaCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyOmhvdmVyIC50b29sdGlwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi50b29sdGlwLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcclxufVxyXG5cclxuICAgIC50b29sdGlwLXRleHQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5LWFycm93IHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }]; }, null); })();


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
/* harmony import */ var _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/drop-down/drop-down.component */ "./src/app/shared/drop-down/drop-down.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/dublab-date.pipe */ "./src/app/shared/pipes/dublab-date.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/pipes/decode.pipe */ "./src/app/shared/pipes/decode.pipe.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_6__["StreamerComponent"],
        _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
        _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_9__["DropDownComponent"],
        _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_11__["DublabDatePipe"],
        _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_13__["DecodePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                    _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_6__["StreamerComponent"],
                    _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                    _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_9__["DropDownComponent"],
                    _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_11__["DublabDatePipe"],
                    _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_13__["DecodePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_8__["PlayerService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
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
    constructor() {
        this.showSchedule = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideSchedule = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showExplore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideExplore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSisters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideSisters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    // Schedule
    onShowSchedule() {
        this.showSchedule.emit();
    }
    onHideSchedule() {
        this.hideSchedule.emit();
    }
    // Explore
    onShowExplore() {
        this.showExplore.emit();
    }
    onHideExplore() {
        this.hideExplore.emit();
    }
    // Sisters
    onShowSisters() {
        this.showSisters.emit();
    }
    onHideSisters() {
        this.hideSisters.emit();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu"]], outputs: { showSchedule: "showSchedule", hideSchedule: "hideSchedule", showExplore: "showExplore", hideExplore: "hideExplore", showSisters: "showSisters", hideSisters: "hideSisters" }, decls: 20, vars: 0, consts: [[1, "logo-wrapper", "menu-item"], ["src", "assets/dublab_menu_logo.png", "alt", "Dublab", 1, "logo"], [1, "programacio", "menu-item", 3, "mouseenter", "mouseleave"], [1, "pointer"], [1, "explora", "menu-item", 3, "mouseenter", "mouseleave"], [1, "sisters", "menu-item", 3, "mouseenter", "mouseleave"], [1, "info", "menu-item"], [1, "search", "menu-item"], [1, "material-icons", "search-icon", "pointer"], [1, "options", "menu-item"], [1, "material-icons", "menu-icon", "pointer"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_Template_div_mouseenter_2_listener() { return ctx.onShowSchedule(); })("mouseleave", function MenuComponent_Template_div_mouseleave_2_listener() { return ctx.onHideSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Programaci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_Template_div_mouseenter_5_listener() { return ctx.onShowExplore(); })("mouseleave", function MenuComponent_Template_div_mouseleave_5_listener() { return ctx.onHideExplore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Explora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_Template_div_mouseenter_8_listener() { return ctx.onShowSisters(); })("mouseleave", function MenuComponent_Template_div_mouseleave_8_listener() { return ctx.onHideSisters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sisters");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-bottom: var(--menu-height);\r\n    \r\n    padding: 0;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 120px repeat(2, 100px) 60px 60px;\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  .programacio[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    grid-area: 1 / 2 / 2 / 3;\r\n  }\r\n\r\n  .sisters[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 4 / 2 / 5;\r\n  }\r\n\r\n  .explora[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 3 / 2 / 4;\r\n  }\r\n\r\n  .info[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 5 / 2 / 6;\r\n  }\r\n\r\n\r\n  .search[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 6 / 2 / 7;\r\n    text-align: right;\r\n  }\r\n\r\n  .menu-icon[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .options[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    padding: var(---menu-padding);\r\n    width: var(--logo-size);\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-bottom: var(--menu-height);\r\n    padding: 0;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 50px 35px;\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    font-size: 19px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  .programacio[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .sisters[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .explora[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .info[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  .menu-icon[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    padding-right: 11px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    margin-left: 14px;\r\n    width: var(--logo-size);\r\n  }\r\n}\r\n.menu-item[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.logo-wrapper[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: inherit;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTs7SUFFWiwwQkFBMEI7SUFDMUIsaUNBQWlDOztJQUVqQyxVQUFVO0lBQ1YsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7O0lBRWpCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7OztFQUdBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix1QkFBdUI7RUFDekI7QUFDRjtBQUVBLFdBQVc7QUFDWDtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7O0lBRWpCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6QjtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUEsU0FBUztBQUVUO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogREVTS1RPUCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweCByZXBlYXQoMiwgMTAwcHgpIDYwcHggNjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG5cclxuICAucHJvZ3JhbWFjaW8ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcclxuICB9XHJcblxyXG4gIC5zaXN0ZXJzIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNTtcclxuICB9XHJcblxyXG4gIC5leHBsb3JhIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcclxuICB9XHJcblxyXG5cclxuICAuc2VhcmNoIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDYgLyAyIC8gNztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgfVxyXG5cclxuICAub3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS0tbWVudS1wYWRkaW5nKTtcclxuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXNpemUpO1xyXG4gIH1cclxufVxyXG5cclxuLyogTU9CSUxFICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1MHB4IDM1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZ3JhbWFjaW8ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNpc3RlcnMge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmV4cGxvcmEge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogdmFyKC0tbG9nby1zaXplKTtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKiBNZW51ICovXHJcblxyXG4ubG9nby13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogaW5oZXJpdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return []; }, { showSchedule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hideSchedule: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showExplore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hideExplore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showSisters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hideSisters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\r\n}\r\n\r\n.control[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: 0;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 0.5em;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 3em;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  height: 100%;\r\n  opacity: 80%;\r\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\r\n\r\n}\r\n\r\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\r\n    opacity: 1;\r\n  }\r\n\r\n.control.next[_ngcontent-%COMP%] {\r\n    right: 0;\r\n  }\r\n\r\n.control.prev[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n\r\n\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  display: block;\r\n  border-left: 0.1em solid white;\r\n  border-bottom: 0.1em solid white;\r\n  width: 0.5em;\r\n  height: 0.5em;\r\n}\r\n\r\n.arrow.left[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.arrow.right[_ngcontent-%COMP%] {\r\n  transform: rotate(225deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osOERBQThEO0FBQ2hFLHlCQUF5QjtBQUN6Qjs7QUFFRTtJQUNFLFVBQVU7RUFDWjs7QUFDQTtJQUNFLFFBQVE7RUFDVjs7QUFDQTtJQUNFLE9BQU87RUFDVDs7QUFFRixxQkFBcUI7O0FBQ3JCO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcclxufVxyXG5cclxuLmNvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDNlbTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3BhY2l0eTogODAlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xyXG4vKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xyXG59XHJcblxyXG4gIC5jb250cm9sOmhvdmVyLCAuY29udHJvbDpmb2N1cyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuY29udHJvbC5uZXh0IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAuY29udHJvbC5wcmV2IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuLyogc3R5bGUgdGhlIGFycm93cyAqL1xyXG4uYXJyb3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCB3aGl0ZTtcclxuICB3aWR0aDogMC41ZW07XHJcbiAgaGVpZ2h0OiAwLjVlbTtcclxufVxyXG4uYXJyb3cubGVmdCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5hcnJvdy5yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxufVxyXG4iXX0= */"], data: { animation: [
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

/***/ "./src/app/shared/drop-down/drop-down.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/drop-down/drop-down.component.ts ***!
  \*********************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/time.service */ "./src/app/shared/services/time.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/dublab-date.pipe */ "./src/app/shared/pipes/dublab-date.pipe.ts");
/* harmony import */ var _pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/decode.pipe */ "./src/app/shared/pipes/decode.pipe.ts");







function DropDownComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "dublabDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.todaysDate));
} }
function DropDownComponent_ng_container_2_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", menuItem_r6.hour, "h");
} }
function DropDownComponent_ng_container_2_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " :: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "transparent": a0, "current-show": a1 }; };
function DropDownComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_2_ng_container_1_div_1_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_ng_container_2_ng_container_1_div_1_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "decode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r7 = ctx_r14.index;
    const menuItem_r6 = ctx_r14.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r8.showHasAlreadyTakenPlace(ctx_r8.menuData[i_r7 + 1]), menuItem_r6.display == ctx_r8.currentShow.display));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, menuItem_r6.display));
} }
function DropDownComponent_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.display);
} }
function DropDownComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_2_ng_container_1_div_1_Template, 6, 9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_ng_container_2_ng_container_1_ng_template_2_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.hour)("ngIfElse", _r9);
} }
function DropDownComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.menuData);
} }
function DropDownComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Carregant... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropDownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DropDownComponent_ng_template_3_div_0_Template, 2, 0, "div", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.links);
} }
function DropDownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://", link_r17.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r17.display);
} }
class DropDownComponent {
    constructor(timeService, dataService) {
        this.timeService = timeService;
        this.dataService = dataService;
        this.mouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.currentHourSubscription = this.timeService.currentHour$.subscribe(hour => {
            this.currentHour = hour;
        });
        this.todaysDateSubscription = this.timeService.airtimeTime$.subscribe(date => {
            this.todaysDate = date;
        });
    }
    ngOnDestroy() {
        this.currentHourSubscription.unsubscribe();
        this.todaysDateSubscription.unsubscribe();
    }
    get isScheduleMenu() {
        return this.menuData &&
            this.menuData[0] != undefined &&
            this.menuData[0].hour != undefined;
    }
    get currentShow() {
        return this.dataService.currentShow;
    }
    get currentDate() {
        return this.timeService.airtimeTime$;
    }
    showHasAlreadyTakenPlace(next) {
        return this.dataService.showHasAlreadyTakenPlace(next);
    }
    onMouseEnter() {
        this.mouseEnter.emit();
    }
    onMouseLeave() {
        this.mouseLeave.emit();
    }
}
DropDownComponent.ɵfac = function DropDownComponent_Factory(t) { return new (t || DropDownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
DropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropDownComponent, selectors: [["drop-down"]], inputs: { menuData: "menuData", links: "links" }, outputs: { mouseEnter: "mouseEnter", mouseLeave: "mouseLeave" }, decls: 6, vars: 4, consts: [[3, "mouseenter", "mouseleave"], ["class", "date-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noData", ""], [4, "ngFor", "ngForOf"], [1, "date-wrapper"], [1, "date"], ["class", "show-item-wrapper", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["standardLink", ""], [1, "show-item-wrapper", 3, "ngClass"], [4, "ngIf"], ["class", "show-item-wrapper", 4, "ngIf"], [1, "show-item-wrapper"], ["target", "_blank", 3, "href"], [1, "profile-link", "pointer"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DropDownComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function DropDownComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropDownComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropDownComponent_div_5_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScheduleMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuData)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_4__["DublabDatePipe"], _pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_5__["DecodePipe"]], styles: ["[_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n    padding: 10px;\r\n    z-index: 10000;\r\n    position: absolute;\r\n    bottom: 49px;\r\n    left: 100;\r\n}\r\n\r\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n.date-wrapper[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: -webkit-fill-available;\r\n}\r\n\r\n.date[_ngcontent-%COMP%] {\r\n    float: right;\r\n    font-size: 10px;\r\n  }\r\n\r\n.show-item-wrapper[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 33px 13px 1fr;\r\n  width: 260px;\r\n}\r\n\r\n.profile-link[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n  color: var(--brand-purple);\r\n}\r\n\r\n.current-show[_ngcontent-%COMP%] {\r\n  color: var(--brand-purple);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFRjtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDlweDtcclxuICAgIGxlZnQ6IDEwMDtcclxufVxyXG5cclxuOmhvc3QgPiAqID4gKiB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uZGF0ZS13cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4gIC5kYXRlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4uc2hvdy1pdGVtLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzM3B4IDEzcHggMWZyO1xyXG4gIHdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbGluazpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7XHJcbn1cclxuXHJcbi5jdXJyZW50LXNob3cge1xyXG4gIGNvbG9yOiB2YXIoLS1icmFuZC1wdXJwbGUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'drop-down',
                templateUrl: './drop-down.component.html',
                styleUrls: ['./drop-down.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_services_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, { menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pipes/decode.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/decode.pipe.ts ***!
  \*********************************************/
/*! exports provided: DecodePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodePipe", function() { return DecodePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DecodePipe {
    transform(value) {
        return value.replace(/&#(?:x([\da-f]+)|(\d+));/ig, function (_, hex, dec) {
            return String.fromCharCode(dec || +('0x' + hex));
        });
    }
}
DecodePipe.ɵfac = function DecodePipe_Factory(t) { return new (t || DecodePipe)(); };
DecodePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decode", type: DecodePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecodePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'decode'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/dublab-date.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/dublab-date.pipe.ts ***!
  \**************************************************/
/*! exports provided: DublabDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DublabDatePipe", function() { return DublabDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DublabDatePipe {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(date) {
        let dublabDate = this.datePipe.transform(date, 'dd/MM/yy');
        // Replace / with .
        dublabDate = dublabDate.split('/').join('.');
        return dublabDate;
    }
}
DublabDatePipe.ɵfac = function DublabDatePipe_Factory(t) { return new (t || DublabDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
DublabDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dublabDate", type: DublabDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DublabDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dublabDate'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.service */ "./src/app/shared/services/time.service.ts");





class DataService {
    constructor(http, timeService) {
        this.http = http;
        this.timeService = timeService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
        this.currentHourSubscription = this.timeService.currentHour$.subscribe(hour => {
            this.currentHour = hour;
        });
    }
    ngOnDestroy() {
        this.weekInfoSubscription.unsubscribe();
        this.currentHourSubscription.unsubscribe();
    }
    // Getters
    get currentShow() {
        if (this.todaysSchedule) {
            const pastShows = this.todaysSchedule.filter(show => this.showHasAlreadyTakenPlace(show));
            const currentShow = pastShows[pastShows.length - 1];
            return currentShow;
        }
        return { name: '', hour: 0 };
    }
    get nextShow() {
        if (this.todaysSchedule) {
            const futureShows = this.todaysSchedule.filter(show => !this.showHasAlreadyTakenPlace(show));
            const nextShow = futureShows[0];
            if (this.currentShow && !nextShow) {
                return { display: 'Fil nocturn', hour: 0 };
            }
            return nextShow;
        }
        return { name: '', hour: 0 };
    }
    // Public Methods
    createTodaysSchedule() {
        this.weekInfoSubscription = this.getWeekInfo().subscribe(weekInfo => {
            const menuItems = [];
            const todaysSchedule = weekInfo[this.timeService.todaysWeekName];
            todaysSchedule.forEach(show => {
                const currentMenuItem = {
                    display: show.name,
                    link: 'shows/' + show.url,
                    hour: this.getHourFromDate(show.starts)
                };
                menuItems.push(currentMenuItem);
            });
            this.todaysSchedule = menuItems;
        });
    }
    showHasAlreadyTakenPlace(show) {
        if (show && show.hour) {
            const nextShowsHour = show.hour;
            return nextShowsHour <= this.timeService.currentHour$.value;
        }
        return false;
    }
    // Private Methods
    getHourFromDate(date) {
        const currentHour = new Date(date).getHours();
        if (currentHour < 10)
            return '0' + currentHour.toString();
        return currentHour.toString();
    }
    getWeekInfo() {
        return this.http.get(`${this.baseUrl}/week-info`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"] }]; }, null); })();


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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



class PlayerService {
    constructor() {
        this.hasTunedIn = false;
        this.playing = false;
        this.dublab = new Audio(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].streamUrl);
    }
    toggleTuneIn() {
        if (!this.hasTunedIn)
            this.hasTunedIn = true;
        if (this.playing) {
            this.stop();
            this.playing = false;
        }
        else {
            this.play();
            this.playing = true;
        }
    }
    tuneIn() {
        if (!this.hasTunedIn)
            this.toggleTuneIn();
    }
    play() {
        if (this.dublab.muted) {
            this.dublab.muted = false;
        }
        else {
            this.dublab.play();
        }
    }
    stop() {
        this.dublab.muted = true;
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

/***/ "./src/app/shared/services/time.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/time.service.ts ***!
  \*************************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TimeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.todaysWeekName = this.generateDayName(new Date());
        this.airtimeTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date());
        this.currentHour$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.refreshHour();
        setInterval(() => {
            if (this.airtimeTime$.value) {
                const currentDate = this.airtimeTime$.value;
                currentDate.setTime(currentDate.getTime() + 1000 * 60);
                this.airtimeTime$.next(currentDate);
                this.currentHour$.next(currentDate.getHours());
            }
        }, 60000);
    }
    ngOnDestroy() {
        this.liveInfoSubscription.unsubscribe();
    }
    refreshHour() {
        this.liveInfoSubscription = this.getLiveInfo().subscribe(liveInfo => {
            const airtimeTime = new Date(liveInfo.schedulerTime);
            this.todaysWeekName = this.generateDayName(airtimeTime);
            this.airtimeTime$.next(airtimeTime);
            this.currentHour$.next(airtimeTime.getHours());
            console.log('**** Benvingut a dublab Barcelona ****');
            console.log('Trespassers Will Be Shot');
        });
    }
    getLiveInfo() {
        return this.http.get(`${this.baseUrl}/live-info`);
    }
    generateDayName(date) {
        return new Date(date).toLocaleDateString("en-EN", { weekday: 'long' }).toLowerCase();
    }
}
TimeService.ɵfac = function TimeService_Factory(t) { return new (t || TimeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeService, factory: TimeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _shared_services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function StreamerComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamerComponent_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleTuneIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StreamerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamerComponent_ng_template_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleTuneIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StreamerComponent {
    constructor(playerService, timeService, dataService) {
        this.playerService = playerService;
        this.timeService = timeService;
        this.dataService = dataService;
    }
    ngOnInit() {
        src_app_streamer_marquee__WEBPACK_IMPORTED_MODULE_1__["initializeMarquee"]();
        this.clockSubscription = this.timeService.airtimeTime$.subscribe(currentTime => {
            this.generateClock(currentTime);
        });
    }
    ngOnDestroy() {
        this.clockSubscription.unsubscribe();
    }
    get playing() {
        return this.playerService.playing;
    }
    get currentShow() {
        return this.dataService.currentShow;
    }
    get nextShow() {
        return this.dataService.nextShow;
    }
    get currentShowName() {
        if (this.dataService &&
            this.dataService.currentShow &&
            this.dataService.currentShow.display) {
            return this.dataService.currentShow.display;
        }
        return 'carregant...';
    }
    get nextShowName() {
        if (this.dataService &&
            this.dataService.nextShow &&
            this.dataService.nextShow.display) {
            return this.dataService.nextShow.display;
        }
        return 'carregant...';
    }
    toggleTuneIn() {
        this.playerService.toggleTuneIn();
    }
    generateClock(date) {
        this.hour = date.toString().split(' ')[4].substr(0, 5);
    }
}
StreamerComponent.ɵfac = function StreamerComponent_Factory(t) { return new (t || StreamerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
StreamerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StreamerComponent, selectors: [["streamer"]], decls: 42, vars: 9, consts: [["id", "purple-text-section", 1, "purple-section", "streamer-item"], [1, "play", "streamer-item"], ["class", "material-icons play-icon pointer", 3, "click", 4, "ngIf", "ngIfElse"], ["paused", ""], [1, "on-air", "streamer-item"], [1, "shadow-left"], [1, "shadow-right"], ["id", "js-slideshow", 1, "slideshow", "js-slideshow"], [1, "slide"], [1, "signal"], [1, "signal", "next"], ["scrollamount", "1", "scrolldelay", "15", "truespeed", "truespeed", 1, "mob-marquee"], [1, "mob-signal"], [1, "clock", "streamer-item"], [1, "clock-text"], [1, "material-icons", "play-icon", "pointer", 3, "click"]], template: function StreamerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " en directe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " a continuaci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " en directe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " a continuaci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "marquee", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " en directe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " a continuaci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playing)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", ctx.currentShowName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", ctx.nextShowName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", ctx.currentShowName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", ctx.nextShowName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", ctx.currentShowName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", ctx.nextShowName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hour);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@media (min-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    \r\n\r\n    margin-top: -var(--menu-height);\r\n    padding: 0 !important;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 240px 45px auto 80px;\r\n    grid-template-rows: 1fr;\r\n    grid-gap: 0px;\r\n  }\r\n\r\n  .purple-section[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    padding: var(---menu-padding);\r\n    background-color: var(--brand-purple);\r\n    color: white;\r\n  }\r\n\r\n  .slideshow[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    cursor: grab;\r\n  }\r\n\r\n  .slide[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    height: var(--menu-height);\r\n    color: black;\r\n    place-items: center;\r\n    display: inline-flex;\r\n  }\r\n\r\n  .mob-marquee[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  [_nghost-%COMP%] {\r\n    background-color: white;\r\n    color: black;\r\n\r\n    height: var(--menu-height);\r\n    margin-top: -var(--menu-height);\r\n    padding: 0 !important;\r\n    width: 100%;\r\n\r\n    position: absolute;\r\n    bottom: 0;\r\n\r\n    align-items: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 35px 1fr 55px;\r\n    grid-template-rows: 1fr;\r\n    grid-gap: 0px;\r\n  }\r\n\r\n  .slideshow[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n\r\n  #purple-text-section[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.signal[_ngcontent-%COMP%] {\r\n  font-weight: 100;\r\n  margin-right: 5px;\r\n  \r\n}\r\n\r\n.mob-signal[_ngcontent-%COMP%] {\r\n  margin-right: 70px;\r\n}\r\n\r\n.streamer-item[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.on-air[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  position: relative;\r\n}\r\n\r\n.play-icon[_ngcontent-%COMP%] {\r\n  font-size: 19px;\r\n}\r\n\r\n.clock[_ngcontent-%COMP%] {\r\n  background-color: var(--brand-purple);\r\n  color: white;\r\n}\r\n\r\n.clock-text[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  }\r\n\r\n.current-language[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n}\r\n\r\n.next[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.marquee-spacer[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.shadow-left[_ngcontent-%COMP%] {\r\n  box-shadow: inset 10px 0px 10px 0px white;\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  display: revert;\r\n  place-items: center;\r\n  width: 50px;\r\n}\r\n\r\n.shadow-right[_ngcontent-%COMP%] {\r\n  box-shadow: inset 10px 0px 10px 0px white;\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  display: revert;\r\n  place-items: center;\r\n  width: 50px;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.next[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyZWFtZXIvc3RyZWFtZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosMEJBQTBCO0lBQzFCLHNCQUFzQjs7SUFFdEIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZOztJQUVaLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLFNBQVM7O0lBRVQsbUJBQW1COztJQUVuQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFRTtFQUNBLGVBQWU7RUFDZjs7QUFFRjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxZQUFZOztBQUVaO0VBQ0UseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3RyZWFtZXIvc3RyZWFtZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgLyogbWluLWhlaWdodDogMjRweDsgKi9cclxuXHJcbiAgICBtYXJnaW4tdG9wOiAtdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggNDVweCBhdXRvIDgwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAwcHg7XHJcbiAgfVxyXG5cclxuICAucHVycGxlLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogdmFyKC0tLW1lbnUtcGFkZGluZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wdXJwbGUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlc2hvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICB9XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIH1cclxuXHJcbiAgLm1vYi1tYXJxdWVlIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xyXG4gICAgbWFyZ2luLXRvcDogLXZhcigtLW1lbnUtaGVpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggMWZyIDU1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVzaG93IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNwdXJwbGUtdGV4dC1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWduYWwge1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgLyogY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7ICovXHJcbn1cclxuXHJcbi5tb2Itc2lnbmFsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5zdHJlYW1lci1pdGVtIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ub24tYWlyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGxheS1pY29uIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi5jbG9jayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiAgLmNsb2NrLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG4uY3VycmVudC1sYW5ndWFnZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYXJxdWVlLXNwYWNlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBTaGFkb3dzICovXHJcblxyXG4uc2hhZG93LWxlZnQge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMHB4IDEwcHggMHB4IHdoaXRlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiByZXZlcnQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnNoYWRvdy1yaWdodCB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAwcHggMTBweCAwcHggd2hpdGU7XHJcbiAgei1pbmRleDogNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiByZXZlcnQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uZG90IHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'streamer',
                templateUrl: './streamer.component.html',
                styleUrls: ['./streamer.component.css'],
            }]
    }], function () { return [{ type: _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }, { type: _shared_services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


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
    production: false,
    apiUrl: 'https://dublabbcn.airtime.pro/api',
    streamUrl: 'https://dublabbcn.out.airtime.pro/dublabbcn_b?_ga=2.122430920.212341158.1600332770-416543499.1597167299&_gac=1.149579138.1600332770.EAIaIQobChMInsq3m-Hj6wIVGIjVCh2bkwmCEAAYASAAEgIxuPD_BwE'
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



// if (environment.production) {
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
// }
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gbjoa\Documents\GitHub\dublab\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map