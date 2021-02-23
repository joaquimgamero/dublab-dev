(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jgam/OTHER/dublab/dublab/src/main.ts */"zUnb");


/***/ }),

/***/ "1yOA":
/*!*************************************************************!*\
  !*** ./src/app/mobile/mobile-menu/mobile-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "sIil");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/data.service */ "iiaH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/decode.pipe */ "EVp5");







function MobileMenuComponent_ng_container_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r4.hour, "h ");
} }
function MobileMenuComponent_ng_container_4_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " :: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MobileMenuComponent_ng_container_4_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "decode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shows/", menuItem_r4.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, menuItem_r4.display), " ");
} }
function MobileMenuComponent_ng_container_4_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "decode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, menuItem_r4.display), " ");
} }
const _c0 = function (a0, a1) { return { "transparent": a0, "current-show": a1 }; };
function MobileMenuComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileMenuComponent_ng_container_4_div_1_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobileMenuComponent_ng_container_4_div_1_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobileMenuComponent_ng_container_4_div_1_ng_container_3_Template, 4, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobileMenuComponent_ng_container_4_div_1_ng_template_4_Template, 3, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r5 = ctx_r15.index;
    const menuItem_r4 = ctx_r15.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r6.showHasAlreadyTakenPlace(ctx_r6.todaysSchedule[i_r5 + 1]), menuItem_r4.display == ctx_r6.currentShow.display));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r4.hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r4.hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r4.slug)("ngIfElse", _r10);
} }
function MobileMenuComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobileMenuComponent_ng_container_4_div_1_Template, 6, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r4.hour);
} }
function MobileMenuComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_span_15_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onCloseSubmenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MobileMenuComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_ng_container_16_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openNewTab("https://dublab.com"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dublab.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_ng_container_16_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.openNewTab("https://dublab.de"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dublab.de");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_ng_container_16_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.openNewTab("https://dublab.jp"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "dublab.jp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_ng_container_16_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.openNewTab("https://dublab.com.br"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dublab.br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MobileMenuComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "B-Sides");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c1 = function (a0) { return { "keep-height": a0 }; };
const _c2 = function (a0) { return { "transparent": a0 }; };
const _c3 = function (a0) { return { "bordered-left": a0 }; };
class MobileMenuComponent {
    constructor(helperService, dataService) {
        this.helperService = helperService;
        this.dataService = dataService;
        this.sistersSelected = false;
        this.exploreSelected = false;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
    }
    get todaysSchedule() {
        return this.dataService.todaysSchedule;
    }
    get currentShow() {
        return this.dataService.currentShow;
    }
    onCloseSubmenu() {
        this.sistersSelected = false;
        this.exploreSelected = false;
    }
    onSistersSelected() {
        this.sistersSelected = true;
        this.exploreSelected = false;
    }
    onExploreSelected() {
        this.exploreSelected = true;
        this.sistersSelected = false;
    }
    openNewTab(url) {
        window.open(url, '_blank');
    }
    showHasAlreadyTakenPlace(next) {
        return this.dataService.showHasAlreadyTakenPlace(next);
    }
}
MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["mobile-menu"]], decls: 18, vars: 19, consts: [[1, "menu"], ["id", "schedule-title"], [3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "navigator"], [1, "pointer", 3, "ngClass", "click"], ["routerLink", "/info", 1, "pointer", 3, "ngClass"], [1, "options", 3, "ngClass"], ["class", "material-icons pointer close-submenu-icon", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "show-item-wrapper", 3, "ngClass", 4, "ngIf"], [1, "show-item-wrapper", 3, "ngClass"], ["class", "hour", 4, "ngIf"], ["class", "two-dots", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["itemWithoutLink", ""], [1, "hour"], [1, "two-dots"], [1, "profile-link", "pointer", 3, "routerLink"], [1, "material-icons", "pointer", "close-submenu-icon", 3, "click"], [1, "pointer", 3, "click"], ["routerLink", "/shows", 1, "pointer"], ["routerLink", "/b-sides", 1, "pointer"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Programaci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobileMenuComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_Template_div_click_8_listener() { return ctx.onExploreSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Explora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_Template_div_click_10_listener() { return ctx.onSistersSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sisters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MobileMenuComponent_span_15_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MobileMenuComponent_ng_container_16_Template, 9, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MobileMenuComponent_ng_container_17_Template, 5, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, !ctx.todaysSchedule));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todaysSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.sistersSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx.exploreSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.sistersSelected || ctx.exploreSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, ctx.sistersSelected || ctx.exploreSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sistersSelected || ctx.exploreSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sistersSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exploreSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_5__["DecodePipe"]], styles: ["[_nghost-%COMP%] {\n    height: 100%;\n    display: inline-block;\n    margin-bottom: 65px;\n    border-bottom: 1px solid black;\n        border-bottom-style: solid;\n    border-style: dashed;\n        border-top-style: dashed;\n        border-right-style: dashed;\n        border-left-style: dashed;\n    border-right: 0;\n    border-left: 0;\n    border-top: 0;\n    padding: 14px;\n    overflow: scroll;\n}\n\n.keep-height[_ngcontent-%COMP%] {\n    height: 360px;\n}\n\n#schedule-title[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\nhr[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    margin-bottom: 1.5rem;\n    border-style: dashed;\n    border: 1px dashed black;\n    border-bottom: 0;\n}\n\n.show-item-wrapper[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 3rem 1.2rem auto;\n    width: 19rem;\n    margin-bottom: 8px;\n}\n\n.menu[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    display: grid;\n    grid-template-columns: 30% auto;\n}\n\n.menu[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]    > .navigator[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .options[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        margin-bottom: 8px;\n        font-size: 1.3rem;\n    }\n\n.options[_ngcontent-%COMP%] {\n        padding-left: 2.5rem;\n    }\n\n.bordered-left[_ngcontent-%COMP%] {\n    border-left: 1px dashed black;\n}\n\n.close-submenu-icon[_ngcontent-%COMP%] {\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw4QkFBOEI7UUFDMUIsMEJBQTBCO0lBQzlCLG9CQUFvQjtRQUNoQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLHlCQUF5QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0FBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0FBRUo7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA2NXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gICAgICAgIGJvcmRlci10b3Atc3R5bGU6IGRhc2hlZDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkYXNoZWQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ua2VlcC1oZWlnaHQge1xuICAgIGhlaWdodDogMzYwcHg7XG59XG5cbiNzY2hlZHVsZS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaHIge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uc2hvdy1pdGVtLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzcmVtIDEuMnJlbSBhdXRvO1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5tZW51IHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIGF1dG87XG59XG5cbiAgICAubWVudSA+IGRpdiwgLm1lbnUgPiAubmF2aWdhdG9yID4gZGl2LCAub3B0aW9ucyA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICB9XG5cbi5ib3JkZXJlZC1sZWZ0IHtcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCBibGFjaztcbn1cblxuLmNsb3NlLXN1Ym1lbnUtaWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mobile-menu',
                templateUrl: './mobile-menu.component.html',
                styleUrls: ['./mobile-menu.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"] }, { type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "2ymE":
/*!************************************************************************************!*\
  !*** ./src/app/bsides/bsides-wrapper/bside-thumbnail/bside-thumbnail.component.ts ***!
  \************************************************************************************/
/*! exports provided: BsideThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsideThumbnailComponent", function() { return BsideThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/tag/tag.component */ "S2ZO");





function BsideThumbnailComponent_tag_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag", 4);
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", tag_r1);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class BsideThumbnailComponent {
    constructor() { }
    ngOnInit() {
        // TODO: Move this "pincho" to a pipe
        if (this.show.slug.includes('sonarplusd--2020')) {
            const newSlug = this.show.slug.split('--').join('/');
            this.show.slug = newSlug;
        }
    }
}
BsideThumbnailComponent.ɵfac = function BsideThumbnailComponent_Factory(t) { return new (t || BsideThumbnailComponent)(); };
BsideThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsideThumbnailComponent, selectors: [["bside-thumbnail"]], inputs: { show: "show" }, decls: 5, vars: 6, consts: [[1, "photo", 3, "ngStyle", "routerLink"], [1, "name"], [1, "tags"], ["class", "tag", 3, "tag", 4, "ngFor", "ngForOf"], [1, "tag", 3, "tag"]], template: function BsideThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BsideThumbnailComponent_tag_4_Template, 1, 1, "tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.show.slug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + ctx.show.picture + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.show.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.show.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TagComponent"]], styles: ["[_nghost-%COMP%] {\n    display: grid;\n    grid-template-columns: 70% auto;\n    grid-template-rows: 1.8fr 0.2fr;\n    gap: 0px 0px;\n    grid-template-areas:\n      \"photo photo\"\n      \"name tags\";\n}\n\n.photo[_ngcontent-%COMP%] {\n    cursor: pointer;\n    grid-area: photo;\n    width: 100%;\n    height: 29vh;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    margin-bottom: 10px;\n}\n\n.name[_ngcontent-%COMP%] {\n    padding-top: 1px;\n    grid-area: name;\n    font-size: 1.3rem;\n    margin-right: 7px;\n}\n\n.tags[_ngcontent-%COMP%] { grid-area: tags; float: right; }\n\n.tag[_ngcontent-%COMP%] {\n    margin: 0px 0px 6px 6px;\n    white-space: nowrap;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnNpZGVzL2JzaWRlcy13cmFwcGVyL2JzaWRlLXRodW1ibmFpbC9ic2lkZS10aHVtYm5haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLFlBQVk7SUFDWjs7aUJBRWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUNBLFFBQVEsZUFBZSxFQUFFLFlBQVksRUFBRTs7QUFFdkM7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ic2lkZXMvYnNpZGVzLXdyYXBwZXIvYnNpZGUtdGh1bWJuYWlsL2JzaWRlLXRodW1ibmFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuOGZyIDAuMmZyO1xuICAgIGdhcDogMHB4IDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJwaG90byBwaG90b1wiXG4gICAgICBcIm5hbWUgdGFnc1wiO1xufVxuXG4ucGhvdG8ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBncmlkLWFyZWE6IHBob3RvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjl2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm5hbWUge1xuICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLnRhZ3MgeyBncmlkLWFyZWE6IHRhZ3M7IGZsb2F0OiByaWdodDsgfVxuXG4udGFnIHtcbiAgICBtYXJnaW46IDBweCAwcHggNnB4IDZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZsb2F0OiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsideThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bside-thumbnail',
                templateUrl: './bside-thumbnail.component.html',
                styleUrls: ['./bside-thumbnail.component.css']
            }]
    }], function () { return []; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6nFz":
/*!***********************************************************!*\
  !*** ./src/app/bsides/bside-item/bside-item.component.ts ***!
  \***********************************************************/
/*! exports provided: BsideItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsideItemComponent", function() { return BsideItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_data_sonarplusd_2020_youtube_links_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/sonarplusd-2020/youtube-links.json */ "iUwr");
var src_app_shared_data_sonarplusd_2020_youtube_links_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/app/shared/data/sonarplusd-2020/youtube-links.json */ "iUwr", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "sIil");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/player.service */ "dY/6");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/data.service */ "iiaH");
/* harmony import */ var src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/seo.service */ "ngAm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/tag/tag.component */ "S2ZO");










function BsideItemComponent_div_5_div_10_tag_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag", 18);
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", tag_r4);
} }
function BsideItemComponent_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BsideItemComponent_div_5_div_10_tag_1_Template, 1, 1, "tag", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.show.tags);
} }
function BsideItemComponent_div_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsideItemComponent_div_5_ng_container_13_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.goToSonar2020Link(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Veure el set a YouTube ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function BsideItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsideItemComponent_div_5_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BsideItemComponent_div_5_div_10_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BsideItemComponent_div_5_ng_container_13_Template, 13, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + ctx_r0.show.picture + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.show.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.show.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSonar2020);
} }
class BsideItemComponent {
    constructor(route, helperService, playerService, dataService, seoService) {
        this.route = route;
        this.helperService = helperService;
        this.playerService = playerService;
        this.dataService = dataService;
        this.seoService = seoService;
    }
    get paddingBottom() {
        return this.helperService.paddingBottom;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
        this.routeSubscription = this.route.params.subscribe(params => {
            const bSide = params['bSide'];
            // TODO: Move this "pincho" to a pipe
            if (bSide.includes('sonar')) {
                const year = params['year'];
                const artist = params['artist'];
                this.slug = bSide + '--' + year + '--' + artist;
            }
            else {
                this.slug = bSide;
            }
            // get b-side data via slug
            this.showSubscription = this.dataService.getBside(this.slug).subscribe(show => {
                this.show = show;
                this.generateLinks(show);
                this.seoService.generateTags({
                    title: 'dublab bcn',
                    description: `${show.name} a dublab bcn: ràdio online comunitària sense ànim de lucre`,
                    slug: `b-sides/${show.slug}`,
                    image: show.picture
                });
            });
        });
    }
    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.showSubscription.unsubscribe();
        this.helperService.atHomePage = true;
    }
    get previousUrl() {
        return this.helperService.previousUrl;
    }
    get previousUrlIsHome() {
        return this.helperService.previousUrl == '/';
    }
    get isSonar2020() {
        return this.slug.includes('sonarplusd--2020');
    }
    play() {
        this.playerService.playMix(this.show.mixcloud_url);
    }
    goToSonar2020Link() {
        const url = src_app_shared_data_sonarplusd_2020_youtube_links_json__WEBPACK_IMPORTED_MODULE_1__[this.show.slug];
        window.open(url, "_blank");
    }
    goBack() {
        this.helperService.goBack();
    }
    generateLinks(show) {
        if (!show.links) {
            return;
        }
        const links = [];
        show.links.forEach(link => {
            link = link.toString().toLowerCase();
            let iconUrl = '';
            if (link.includes('twitter')) {
                iconUrl = 'assets/icons/twitter.png';
            }
            else if (link.includes('facebook')) {
                iconUrl = 'assets/icons/facebook.png';
            }
            else if (link.includes('instagram')) {
                iconUrl = 'assets/icons/instagram.png';
            }
            else if (link.includes('soundcloud')) {
                iconUrl = 'assets/icons/soundcloud.png';
            }
            else {
                iconUrl = 'assets/icons/link.png';
            }
            links.push({ link: link, icon: iconUrl });
        });
        this.links = links;
    }
}
BsideItemComponent.ɵfac = function BsideItemComponent_Factory(t) { return new (t || BsideItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"])); };
BsideItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsideItemComponent, selectors: [["app-bside-item"]], hostVars: 2, hostBindings: function BsideItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx.paddingBottom, "px");
    } }, decls: 6, vars: 1, consts: [[1, "header"], [1, "close"], ["routerLink", "/", 1, "material-icons", "pointer", "close-icon"], [1, "back"], ["class", "content", 4, "ngIf"], [1, "content"], [1, "photos", 3, "ngStyle"], [1, "textual-content"], [1, "player"], [1, "play", 3, "click"], [1, "material-icons", "play-icon", "pointer"], [1, "name"], [1, "host"], ["class", "play-tags", 4, "ngIf"], [1, "description"], [4, "ngIf"], [1, "play-tags"], [3, "tag", 4, "ngFor", "ngForOf"], [3, "tag"], ["src", "assets/sonarplusd-2020/sonarplusd.png", 1, "sonarplusd-2020-logo"], [1, "sonarplusd-2020-button", 3, "click"], [1, "sonarplusd-2020-button-wrapper"], [1, "material-icons"], [1, "sonarplusd-2020-button-text"]], template: function BsideItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BsideItemComponent_div_5_Template, 14, 7, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_8__["TagComponent"]], styles: ["[_nghost-%COMP%] {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(255,255,255, 0.8);\n    display: inline-block;\n    padding: 50px;\n    top: 0;\n    position: absolute;\n    z-index: 1;\n    \n    \n}\n\n.header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    float: right;\n    margin-left: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 100%;\n    height: -webkit-fill-available;\n    height: inherit;\n    gap: 0px 0px;\n    grid-template-areas:\n        \"photos\"\n        \"textual-content\";\n}\n\n.textual-content[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n\n    height: moz-available;\n    display: grid;\n    gap: 0px 0px;\n    grid-template-areas:\n      \"player\"\n      \"description\"\n      \"tracklist\"\n      \"tags\";\n    padding-right: 15px;\n}\n\n.host[_ngcontent-%COMP%] {\n        font-size: 28px;\n    }\n\n.tags[_ngcontent-%COMP%] {\n    float: left;\n    width: -webkit-fill-available;\n    width: -moz-available;\n    margin-bottom: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n        border-radius: 3px;\n        background-color: black;\n        color: white;\n        padding: 5px;\n        margin-right: 10px;\n        width: -webkit-min-content;\n        width: min-content;\n        font-size: 10px;\n    }\n\n.link[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.photos[_ngcontent-%COMP%] {\n    grid-area: photos;\n    margin-right: 20px;\n    height: auto;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    margin-bottom: 50px;\n    \n}\n\n.player[_ngcontent-%COMP%] {\n    grid-area: player;\n    display: grid;\n    grid-template-columns: 90px 1fr;\n    grid-template-rows: auto auto;\n    gap: 0px 0px;\n    grid-template-areas:\n      \"play name\"\n      \"play play-tags\";\n}\n\n.play[_ngcontent-%COMP%] {\n        grid-area: play;\n        border: 1px solid black;\n        display: grid;\n        place-items: center;\n        border-radius: 50%;\n    }\n\n.play[_ngcontent-%COMP%]:hover {\n            color: var(--brand-purple);\n            border-color: var(--brand-purple);\n        }\n\n.name[_ngcontent-%COMP%] { grid-area: name; margin-left: 20px; }\n\n.play-tags[_ngcontent-%COMP%] { grid-area: play-tags; margin-top: 15px; }\n\n.description[_ngcontent-%COMP%] { grid-area: description; margin-bottom: 50px; }\n\n.tracklist[_ngcontent-%COMP%] { grid-area: tracklist; }\n\n\n\n.play-icon[_ngcontent-%COMP%] {\n    font-size: 60px;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 20px;\n}\n\n.profile-name[_ngcontent-%COMP%]:hover {\n        color: var(--brand-purple);\n    }\n\n.tracklist-header[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 20px;\n}\n\n.tracklist-list[_ngcontent-%COMP%] {\n    padding-left: 20px !important;\n}\n\n.tracklist-item[_ngcontent-%COMP%] {\n        padding: 3px;\n    }\n\n.photo[_ngcontent-%COMP%] {\n    object-fit: cover;\n    display: block;\n    width: 100%;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n    height: 15px;\n    margin-right: 15px;\n}\n\n\n\n.sonarplusd-2020-logo[_ngcontent-%COMP%] {\n    height: 80px;\n    margin-top: 20px;\n}\n\n.sonarplusd-2020-button[_ngcontent-%COMP%] {\n    background-color: black;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n}\n\n.sonarplusd-2020-button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background-color: var(--brand-purple);\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n}\n\n.sonarplusd-2020-button-wrapper[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 3rem 17rem;\n    }\n\n.sonarplusd-2020-button-text[_ngcontent-%COMP%] {\n        margin-top: 4px;\n    }\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .photos[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        \n        margin-bottom: 1rem;\n    }\n\n    .tags[_ngcontent-%COMP%] {\n        margin-top: 13px;\n    }\n\n    .textual-content[_ngcontent-%COMP%] {\n        margin-top: 1rem;\n        margin-bottom: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas: \"photos\" \"textual-content\";\n        grid-template-columns: 1fr;\n        grid-template-rows: 20rem 1fr;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n\n        .play[_ngcontent-%COMP%] {\n            height: 53px;\n        }\n\n        .play[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n            font-size: 2rem;\n        }\n\n        .player[_ngcontent-%COMP%] {\n            grid-area: player;\n            display: grid;\n            grid-template-columns: 57px 1fr;\n            margin-bottom: 2rem;\n        }\n\n        .host[_ngcontent-%COMP%] {\n            font-size: 1.3rem;\n        }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .photos[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        \n        margin-bottom: 1rem;\n    }\n\n    .tags[_ngcontent-%COMP%] {\n        margin-top: 13px;\n    }\n\n    .textual-content[_ngcontent-%COMP%] {\n        margin-top: 1rem;\n        margin-bottom: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas: \"photos\" \"textual-content\";\n        grid-template-columns: 1fr;\n        grid-template-rows: 20rem 1fr;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n\n        .play[_ngcontent-%COMP%] {\n            height: 53px;\n        }\n\n        .play[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n            font-size: 2rem;\n        }\n\n        .player[_ngcontent-%COMP%] {\n            grid-area: player;\n            display: grid;\n            grid-template-columns: 57px 1fr;\n            margin-bottom: 2rem;\n        }\n\n        .host[_ngcontent-%COMP%] {\n            font-size: 1.3rem;\n        }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n\n    .play[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n\n    .play-icon[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n\n    .play[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n\n    .play-icon[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n\n    .play[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n\n    .play-icon[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnNpZGVzL2JzaWRlLWl0ZW0vYnNpZGUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0ZBQXdGO0lBQ3hGLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaOzt5QkFFcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaOzs7O1lBSVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVKO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQiwwQkFBa0I7UUFBbEIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0FBRUo7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLHVGQUF1RjtBQUMzRjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7O3NCQUVrQjtBQUN0Qjs7QUFFSTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0FBQ0k7WUFDSSwwQkFBMEI7WUFDMUIsaUNBQWlDO1FBQ3JDOztBQUVKLFFBQVEsZUFBZSxFQUFFLGlCQUFpQixFQUFFOztBQUM1QyxhQUFhLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFOztBQUV6RCxlQUFlLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFOztBQUM1RCxhQUFhLG9CQUFvQixFQUFFOztBQUNuQyxpREFBaUQ7O0FBRWpEO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVJO1FBQ0ksMEJBQTBCO0lBQzlCOztBQUVKO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUk7UUFDSSxZQUFZO0lBQ2hCOztBQUVKO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVJO1FBQ0ksYUFBYTtRQUNiLGlDQUFpQztJQUNyQzs7QUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUosZ0JBQWdCOztBQUNoQixXQUFXOztBQUNYO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksK0NBQStDO1FBQy9DLDBCQUEwQjtRQUMxQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsUUFBUTtRQUNSLFdBQVc7UUFDWCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O1FBRUk7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxpQkFBaUI7WUFDakIsYUFBYTtZQUNiLCtCQUErQjtZQUMvQixtQkFBbUI7UUFDdkI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7QUFDUjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksK0NBQStDO1FBQy9DLDBCQUEwQjtRQUMxQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsUUFBUTtRQUNSLFdBQVc7UUFDWCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O1FBRUk7WUFDSSxlQUFlO1FBQ25COztRQUVBO1lBQ0ksWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxpQkFBaUI7WUFDakIsYUFBYTtZQUNiLCtCQUErQjtZQUMvQixtQkFBbUI7UUFDdkI7O1FBRUE7WUFDSSxpQkFBaUI7UUFDckI7QUFDUjs7QUFFQSxZQUFZOztBQUNaO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSTs7NkJBRXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUEsYUFBYTs7QUFDYjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0k7OzZCQUVxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLFFBQVE7O0FBQ1I7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJOzs2QkFFcUI7SUFDekI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JzaWRlcy9ic2lkZS1pdGVtL2JzaWRlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1tZW51LWhlaWdodCkgKyB2YXIoLS1tZW51LWhlaWdodCkgKyB2YXIoLS1tZW51LWhlaWdodCkpOyAqL1xuICAgIC8qIG9wYWNpdHk6IDAuODsgKi9cbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwicGhvdG9zXCJcbiAgICAgICAgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbn1cblxuLnRleHR1YWwtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICAgaGVpZ2h0OiBtb3otYXZhaWxhYmxlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcInBsYXllclwiXG4gICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgIFwidHJhY2tsaXN0XCJcbiAgICAgIFwidGFnc1wiO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbiAgICAuaG9zdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG5cbi50YWdzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuICAgIC50YWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbi5saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnBob3RvcyB7XG4gICAgZ3JpZC1hcmVhOiBwaG90b3M7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIC8qIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbWVudS1oZWlnaHQpICsgdmFyKC0tbWVudS1oZWlnaHQpICsgdmFyKC0tbWVudS1oZWlnaHQpKTsgKi9cbn1cblxuLnBsYXllciB7XG4gICAgZ3JpZC1hcmVhOiBwbGF5ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgIGdhcDogMHB4IDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJwbGF5IG5hbWVcIlxuICAgICAgXCJwbGF5IHBsYXktdGFnc1wiO1xufVxuXG4gICAgLnBsYXkge1xuICAgICAgICBncmlkLWFyZWE6IHBsYXk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgICAgICAucGxheTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcbiAgICAgICAgfVxuXG4gICAgLm5hbWUgeyBncmlkLWFyZWE6IG5hbWU7IG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4gICAgLnBsYXktdGFncyB7IGdyaWQtYXJlYTogcGxheS10YWdzOyBtYXJnaW4tdG9wOiAxNXB4OyB9XG5cbi5kZXNjcmlwdGlvbiB7IGdyaWQtYXJlYTogZGVzY3JpcHRpb247IG1hcmdpbi1ib3R0b206IDUwcHg7IH1cbi50cmFja2xpc3QgeyBncmlkLWFyZWE6IHRyYWNrbGlzdDsgfVxuLyogLnRhZ3MgeyBncmlkLWFyZWE6IHRhZ3M7IG1hcmdpbi10b3A6IDE1cHg7IH0gKi9cblxuLnBsYXktaWNvbiB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4ucHJvZmlsZS1uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuICAgIC5wcm9maWxlLW5hbWU6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcbiAgICB9XG5cbi50cmFja2xpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRyYWNrbGlzdC1saXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuICAgIC50cmFja2xpc3QtaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbi5waG90byB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLyogU29uYXIrZCAyMDIwICovXG5cbi5zb25hcnBsdXNkLTIwMjAtbG9nbyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zb25hcnBsdXNkLTIwMjAtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uc29uYXJwbHVzZC0yMDIwLWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMDtcbn1cblxuICAgIC5zb25hcnBsdXNkLTIwMjAtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMTdyZW07XG4gICAgfVxuXG4gICAgLnNvbmFycGx1c2QtMjAyMC1idXR0b24tdGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbi8qIEJSRUFLUE9JTlRTICovXG4vKiBNb2JpbGUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxOXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAucGhvdG9zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiAyLjVyZW07ICovXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLnRhZ3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIH1cblxuICAgIC50ZXh0dWFsLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwaG90b3NcIiBcInRleHR1YWwtY29udGVudFwiO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbSAxZnI7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDdweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5IHtcbiAgICAgICAgICAgIGhlaWdodDogNTNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBwbGF5ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1N3B4IDFmcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaG9zdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgfVxufVxuXG4vKiBUYWJsZXRzLCBpUGFkcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogMTlweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLnBob3RvcyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgLyogbWFyZ2luLXRvcDogMi41cmVtOyAqL1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC50YWdzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICB9XG5cbiAgICAudGV4dHVhbC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicGhvdG9zXCIgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW0gMWZyO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA3cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGxheSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGxheSA+IC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogcGxheWVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTdweCAxZnI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvc3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIH1cbn1cblxuLyogTGFwdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwicGhvdG9zXCJcbiAgICAgICAgICAgIFwidGV4dHVhbC1jb250ZW50XCI7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtNXB4O1xuICAgIH1cblxuICAgIC5wbGF5IHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICB9XG5cbiAgICAucGxheS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuLyogRGVza3RvcHMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJwaG90b3NcIlxuICAgICAgICAgICAgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgfVxuXG4gICAgLnBsYXkge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5wbGF5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4vKiBUVnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJwaG90b3NcIlxuICAgICAgICAgICAgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgfVxuXG4gICAgLnBsYXkge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5wbGF5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsideItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bside-item',
                templateUrl: './bside-item.component.html',
                styleUrls: ['./bside-item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }, { type: src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] }, { type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"] }]; }, { paddingBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding-bottom.px']
        }] }); })();


/***/ }),

/***/ "7w7q":
/*!*********************************************************!*\
  !*** ./src/app/shared/drop-down/drop-down.component.ts ***!
  \*********************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/time.service */ "jPFz");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "iiaH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/dublab-date.pipe */ "uoaT");
/* harmony import */ var _pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/decode.pipe */ "EVp5");








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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r6.hour, "h ");
} }
function DropDownComponent_ng_container_2_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " :: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropDownComponent_ng_container_2_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "decode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shows/", menuItem_r6.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, menuItem_r6.display), " ");
} }
function DropDownComponent_ng_container_2_ng_container_1_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "decode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, menuItem_r6.display), " ");
} }
const _c0 = function (a0, a1) { return { "transparent": a0, "current-show": a1 }; };
function DropDownComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_2_ng_container_1_div_1_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_ng_container_2_ng_container_1_div_1_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropDownComponent_ng_container_2_ng_container_1_div_1_ng_container_3_Template, 4, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropDownComponent_ng_container_2_ng_container_1_div_1_ng_template_4_Template, 3, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r7 = ctx_r19.index;
    const menuItem_r6 = ctx_r19.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r8.showHasAlreadyTakenPlace(ctx_r8.menuData[i_r7 + 1]), menuItem_r6.display == ctx_r8.currentShow.display));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.slug)("ngIfElse", _r14);
} }
function DropDownComponent_ng_container_2_ng_container_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.display);
} }
function DropDownComponent_ng_container_2_ng_container_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.display);
} }
function DropDownComponent_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DropDownComponent_ng_container_2_ng_container_1_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_2_ng_container_1_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.link)("ngIfElse", _r21);
} }
function DropDownComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_2_ng_container_1_div_1_Template, 6, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_ng_container_2_ng_container_1_ng_template_2_Template, 3, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Carregant... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropDownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DropDownComponent_ng_template_3_div_0_Template, 2, 0, "div", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.links);
} }
function DropDownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://", link_r27.link, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r27.display);
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
DropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropDownComponent, selectors: [["drop-down"]], inputs: { menuData: "menuData", links: "links" }, outputs: { mouseEnter: "mouseEnter", mouseLeave: "mouseLeave" }, decls: 6, vars: 4, consts: [[3, "mouseenter", "mouseleave"], ["class", "date-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noData", ""], [4, "ngFor", "ngForOf"], [1, "date-wrapper"], [1, "date"], ["class", "show-item-wrapper", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["standardLink", ""], [1, "show-item-wrapper", 3, "ngClass"], ["class", "hour", 4, "ngIf"], ["class", "two-dots", 4, "ngIf"], ["itemWithoutLink", ""], [1, "hour"], [1, "two-dots"], [1, "profile-link", "pointer", 3, "routerLink"], ["noLink", ""], [1, "transparent"], ["class", "show-item-wrapper", 4, "ngIf"], [1, "show-item-wrapper"], ["target", "_blank", 3, "href"], [1, "profile-link", "pointer"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_5__["DublabDatePipe"], _pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_6__["DecodePipe"]], styles: ["[_nghost-%COMP%] {\n  background-color: white;\n  color: black;\n  padding: 1rem;\n  z-index: 10000;\n  position: absolute;\n  bottom: 4.05rem;\n  left: 100;\n}\n\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.date-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: -webkit-fill-available;\n}\n\n.date[_ngcontent-%COMP%] {\n    float: right;\n    font-size: 0.8rem;\n  }\n\n.show-item-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3rem 1.2rem auto;\n  width: 19rem;\n}\n\n.profile-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: var(--brand-purple);\n  opacity: 100% !important;\n}\n\n.current-show[_ngcontent-%COMP%] {\n  color: var(--brand-purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUU7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztBQUVGO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHotaW5kZXg6IDEwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNC4wNXJlbTtcbiAgbGVmdDogMTAwO1xufVxuXG46aG9zdCA+ICogPiAqIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZGF0ZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbiAgLmRhdGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4uc2hvdy1pdGVtLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNyZW0gMS4ycmVtIGF1dG87XG4gIHdpZHRoOiAxOXJlbTtcbn1cblxuLnByb2ZpbGUtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcbiAgb3BhY2l0eTogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVudC1zaG93IHtcbiAgY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7XG59XG4iXX0= */"] });
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

/***/ "8EDu":
/*!************************************************!*\
  !*** ./src/app/profiles/profiles.component.ts ***!
  \************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "sIil");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/seo.service */ "ngAm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profiles_wrapper_profiles_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles-wrapper/profiles-wrapper.component */ "Um/Z");







function ProfilesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "profiles-wrapper", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", n_r1 + 1);
} }
class ProfilesComponent {
    constructor(helperService, router, seoService) {
        this.helperService = helperService;
        this.router = router;
        this.seoService = seoService;
    }
    get paddingBottom() {
        return this.helperService.paddingBottom;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
        this.numberOfWrappers = Array(this.helperService.numberOfProfileWrappers).fill(0).map((x, i) => i);
        this.seoService.generateTags({
            title: 'dublab bcn',
            description: 'Shows actualment a dublab bcn: ràdio online comunitària sense ànim de lucre',
            slug: 'shows'
        });
    }
    ngOnDestroy() {
        this.helperService.atHomePage = true;
    }
    get previousUrl() {
        return this.helperService.previousUrl;
    }
    get previousUrlIsHome() {
        return this.helperService.previousUrl == '/';
    }
    navigate() {
        if (!this.previousUrl) {
            this.close();
        }
        else {
            this.router.navigate([this.previousUrl]);
        }
    }
    close() {
        this.router.navigate(['/']);
        this.helperService.atHomePage = true;
    }
    goBack() {
        this.helperService.goBack();
    }
}
ProfilesComponent.ɵfac = function ProfilesComponent_Factory(t) { return new (t || ProfilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"])); };
ProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilesComponent, selectors: [["profiles"]], hostVars: 2, hostBindings: function ProfilesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx.paddingBottom, "px");
    } }, decls: 7, vars: 1, consts: [[1, "header"], [1, "close"], [1, "material-icons", "pointer", 3, "click"], [1, "back"], [1, "content"], [4, "ngFor", "ngForOf"], [3, "page"]], template: function ProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilesComponent_Template_span_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfilesComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numberOfWrappers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _profiles_wrapper_profiles_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["ProfilesWrapperComponent"]], styles: ["[_nghost-%COMP%] {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255,255,255, 0.8);\n    display: inline-block;\n    padding: 50px;\n    top: 0;\n    position: absolute;\n    z-index: 1;\n    \n    \n}\n\n.header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    float: right;\n    margin-left: 15px;\n}\n\n.title[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-bottom: 20px;\n    }\n\n.content[_ngcontent-%COMP%] {\n    \n    overflow-y: scroll;\n    height: inherit;\n    margin-bottom: 50px;\n    \n}\n\n.collaborators[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    gap: 0px 0px;\n    grid-template-areas:\n        \". . . . . . .\";\n}\n\n.collaborator-image[_ngcontent-%COMP%] {\n        height: 70px;\n        margin-right: 20px;\n    }\n\n.credits[_ngcontent-%COMP%] {\n    margin-bottom: 150px;\n}\n\n.link[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.virtual-scroller[_ngcontent-%COMP%] {\n    height: 560px;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdGQUF3RjtJQUN4RixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUk7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztBQUVKO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWjt1QkFDbUI7QUFDdkI7O0FBRUk7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztBQUVKO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsZ0JBQWdCOztBQUNmLFdBQVc7O0FBQ1g7SUFDRztRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLE1BQU07UUFDTixXQUFXO1FBQ1gsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCOztRQUVJO1lBQ0ksZUFBZTtRQUNuQjtBQUNSOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7O1FBRUk7WUFDSSxlQUFlO1FBQ25CO0FBQ1I7O0FBRUEsWUFBWTs7QUFDWjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjtBQUNKOztBQUVBLGFBQWE7O0FBQ2I7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7QUFDSjs7QUFFQSxRQUFROztBQUNSO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlcy9wcm9maWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1lbnUtaGVpZ2h0KSArIHZhcigtLW1lbnUtaGVpZ2h0KSArIHZhcigtLW1lbnUtaGVpZ2h0KSk7ICovXG4gICAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbi5jb250ZW50IHtcbiAgICAvKiB3aWR0aDogOTUlOyAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAxNXB4OyAqL1xufVxuXG4uY29sbGFib3JhdG9ycyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBnYXA6IDBweCAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCIuIC4gLiAuIC4gLiAuXCI7XG59XG5cbiAgICAuY29sbGFib3JhdG9yLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4uY3JlZGl0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnZpcnR1YWwtc2Nyb2xsZXIge1xuICAgIGhlaWdodDogNTYwcHg7XG59XG5cbi8qIEJSRUFLUE9JTlRTICovXG4gLyogTW9iaWxlICovXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDE5cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA3cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG59XG5cbi8qIFRhYmxldHMsIGlQYWRzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxOXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogN3B4O1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbn1cblxuLyogTGFwdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgfVxufVxuXG4vKiBEZXNrdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtNXB4O1xuICAgIH1cbn1cblxuLyogVFZzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profiles',
                templateUrl: './profiles.component.html',
                styleUrls: ['./profiles.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] }]; }, { paddingBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding-bottom.px']
        }] }); })();


/***/ }),

/***/ "AwMC":
/*!*************************************!*\
  !*** ./src/app/streamer/marquee.ts ***!
  \*************************************/
/*! exports provided: initializeMarquee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeMarquee", function() { return initializeMarquee; });
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "IXsZ");
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

/***/ "AytR":
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
    apiUrl: 'https://api.dublab.es/api',
    airtimeApiUrl: 'https://dublabbcn.airtime.pro/api',
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

/***/ "E0II":
/*!*****************************************************************!*\
  !*** ./src/app/profiles/profile-item/profile-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileItemComponent", function() { return ProfileItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "sIil");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data.service */ "iiaH");
/* harmony import */ var src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/seo.service */ "ngAm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/tag/tag.component */ "S2ZO");
/* harmony import */ var _shared_show_thumbnail_show_thumbnail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/show-thumbnail/show-thumbnail.component */ "YiOJ");









function ProfileItemComponent_div_5_tag_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag", 19);
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", tag_r4);
} }
function ProfileItemComponent_div_5_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", link_r5.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "no-margin-bottom": a0 }; };
function ProfileItemComponent_div_5_ng_container_18_show_thumbnail_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "show-thumbnail", 24);
} if (rf & 2) {
    const singleShow_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", singleShow_r7)("profile", ctx_r6.show)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r6.isLastShow(i_r8)));
} }
function ProfileItemComponent_div_5_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Shows relacionats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileItemComponent_div_5_ng_container_18_show_thumbnail_3_Template, 1, 5, "show-thumbnail", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.showsSortedBy("date"));
} }
const _c1 = function (a0) { return { "background-image": a0 }; };
function ProfileItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileItemComponent_div_5_tag_10_Template, 1, 1, "tag", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileItemComponent_div_5_a_16_Template, 2, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileItemComponent_div_5_ng_container_18_Template, 4, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, "url(" + ctx_r0.show.picture + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.show.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.show.host, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.show.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.show.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.links);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.shows.length > 0);
} }
class ProfileItemComponent {
    constructor(route, helperService, dataService, router, seoService) {
        this.route = route;
        this.helperService = helperService;
        this.dataService = dataService;
        this.router = router;
        this.seoService = seoService;
    }
    get paddingBottom() {
        return this.helperService.paddingBottom;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
        this.routeSubscription = this.route.params.subscribe(params => {
            this.slug = params['showSlug'];
            // get show data via slug
            this.showSubscription = this.dataService.getProfile(this.slug).subscribe(show => {
                if (show.shows)
                    show.shows = show.shows.sort((a, b) => a.date - b.date);
                this.show = show;
                this.generateLinks(show);
                this.seoService.generateTags({
                    title: 'dublab bcn',
                    description: `${show.name} a dublab bcn: ${show.description}`,
                    slug: `shows/${show.slug}`,
                    image: show.picture
                });
            });
        });
    }
    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.showSubscription.unsubscribe();
        this.helperService.atHomePage = true;
    }
    get previousUrl() {
        return this.helperService.previousUrl;
    }
    get previousUrlIsHome() {
        return this.helperService.previousUrl == '/';
    }
    isLastShow(i) {
        var _a, _b;
        const length = (_b = (_a = this.show) === null || _a === void 0 ? void 0 : _a.shows) === null || _b === void 0 ? void 0 : _b.length;
        return i + 1 == length;
    }
    showsSortedBy(prop) {
        if (this.show && this.show.shows)
            return this.show.shows.sort((b, a) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
        return [];
    }
    goBack() {
        this.helperService.goBack();
    }
    generateLinks(show) {
        if (!show.links) {
            return;
        }
        const links = [];
        show.links.forEach(link => {
            link = link.toString().toLowerCase();
            let iconUrl = '';
            if (link.includes('twitter')) {
                iconUrl = 'assets/icons/twitter.png';
            }
            else if (link.includes('facebook')) {
                iconUrl = 'assets/icons/facebook.png';
            }
            else if (link.includes('instagram')) {
                iconUrl = 'assets/icons/instagram.png';
            }
            else if (link.includes('soundcloud')) {
                iconUrl = 'assets/icons/soundcloud.png';
            }
            else {
                iconUrl = 'assets/icons/link.png';
            }
            links.push({ link: link, icon: iconUrl });
        });
        this.links = links;
    }
}
ProfileItemComponent.ɵfac = function ProfileItemComponent_Factory(t) { return new (t || ProfileItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"])); };
ProfileItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileItemComponent, selectors: [["profile-item"]], hostVars: 2, hostBindings: function ProfileItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx.paddingBottom, "px");
    } }, decls: 6, vars: 1, consts: [[1, "header"], [1, "close"], ["routerLink", "/", 1, "material-icons", "pointer", "close-icon"], [1, "back"], ["class", "content", 4, "ngIf"], [1, "content"], [1, "photos", 3, "ngStyle"], [1, "textual-content"], [1, "show-name"], [1, "title"], [1, "hosts"], [1, "host"], [1, "tags"], [3, "tag", 4, "ngFor", "ngForOf"], [1, "description"], [1, "social-media"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "shows"], [4, "ngIf"], [3, "tag"], ["target", "_blank", 3, "href"], [1, "social-icon", "pointer", 3, "src"], [1, "shows-title"], [3, "show", "profile", "ngClass", 4, "ngFor", "ngForOf"], [3, "show", "profile", "ngClass"]], template: function ProfileItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileItemComponent_div_5_Template, 19, 9, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TagComponent"], _shared_show_thumbnail_show_thumbnail_component__WEBPACK_IMPORTED_MODULE_7__["ShowThumbnailComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["[_nghost-%COMP%] {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(255,255,255, 0.8);\n    display: inline-block;\n    padding: 50px;\n    top: 0;\n    position: absolute;\n    z-index: 1;\n}\n\n.header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    float: right;\n    margin-left: 15px;\n}\n\n.title[_ngcontent-%COMP%] {\n        grid-area: title;\n        font-size: 33px;\n        margin-bottom: 20px;\n        color: var(--brand-purple);\n    }\n\n.content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 100%;\n    height: -webkit-fill-available;\n    height: inherit;\n    gap: 0px 0px;\n\n}\n\n.textual-content[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: moz-available;\n    display: grid;\n    \n    gap: 0px 0px;\n    grid-template-areas:\n      \"show-name\"\n      \"hosts\"\n      \"description\"\n      \"shows\";\n      padding-right: 15px;\n}\n\n.host[_ngcontent-%COMP%] {\n        font-size: 28px;\n    }\n\n.tags[_ngcontent-%COMP%] {\n  float: left;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  margin-top: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n      border-radius: 3px;\n      background-color: black;\n      color: white;\n      padding: 5px;\n      margin-right: 10px;\n      width: -webkit-min-content;\n      width: min-content;\n    }\n\n.link[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.photos[_ngcontent-%COMP%] {\n    grid-area: photos;\n    margin-right: 20px;\n    margin-bottom: 50px;\n    height: auto;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    \n}\n\n.show-name[_ngcontent-%COMP%] { grid-area: show-name; }\n\n.hosts[_ngcontent-%COMP%] { grid-area: hosts; }\n\n.description[_ngcontent-%COMP%] { grid-area: description; }\n\n.shows[_ngcontent-%COMP%] { grid-area: shows; margin-top: 2rem; padding-bottom: 50px; }\n\n.photo[_ngcontent-%COMP%] {\n    object-fit: cover;\n    display: block;\n    width: 100%;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n    height: 15px;\n    margin-right: 15px;\n}\n\n.shows-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 20px;\n  padding: 3px;\n  text-align: center;\n  \n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        margin-top: 66px;\n    }\n\n    .tags[_ngcontent-%COMP%] {\n        margin-top: 13px;\n    }\n\n    .textual-content[_ngcontent-%COMP%] {\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas: \"photos\" \"textual-content\";\n        grid-template-columns: 1fr;\n        grid-template-rows: 20rem 1fr;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        padding-right: 6px;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        margin-top: 66px;\n    }\n\n    .tags[_ngcontent-%COMP%] {\n        margin-top: 13px;\n    }\n\n    .textual-content[_ngcontent-%COMP%] {\n        margin-top: 1rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas: \"photos\" \"textual-content\";\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: -4px;\n    }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZS1pdGVtL3Byb2ZpbGUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQiwwQkFBMEI7SUFDOUI7O0FBRUo7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IscURBQXFEO0lBQ3JELFlBQVk7SUFDWjs7OzthQUlTO01BQ1AsbUJBQW1CO0FBQ3pCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFSTtNQUNFLGtCQUFrQjtNQUNsQix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsMEJBQWtCO01BQWxCLGtCQUFrQjtJQUNwQjs7QUFFSjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsdUZBQXVGO0FBQzNGOztBQUNBLGFBQWEsb0JBQW9CLEVBQUU7O0FBQ25DLFNBQVMsZ0JBQWdCLEVBQUU7O0FBQzNCLGVBQWUsc0JBQXNCLEVBQUU7O0FBQ3ZDLFNBQVMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUU7O0FBRW5FO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCO3dCQUNzQjtBQUN4Qjs7QUFFQyxnQkFBZ0I7O0FBQ2hCLFdBQVc7O0FBQ1g7SUFDRztRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLCtDQUErQztRQUMvQywwQkFBMEI7UUFDMUIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFFBQVE7UUFDUixXQUFXO1FBQ1gsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCOztRQUVJO1lBQ0ksZUFBZTtRQUNuQjtBQUNSOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLCtDQUErQztRQUMvQywwQkFBMEI7UUFDMUIsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7SUFDYjtBQUNKOztBQUVBLFlBQVk7O0FBQ1o7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJOzs2QkFFcUI7SUFDekI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiO0FBQ0o7O0FBRUEsYUFBYTs7QUFDYjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0k7OzZCQUVxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7QUFDSjs7QUFFQSxRQUFROztBQUNSO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSTs7NkJBRXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZS1pdGVtL3Byb2ZpbGUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7XG4gICAgfVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGdhcDogMHB4IDBweDtcblxufVxuXG4udGV4dHVhbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiBtb3otYXZhaWxhYmxlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDUwcHggMC40ZnIgMTAwcHggMC44ZnI7ICovXG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcInNob3ctbmFtZVwiXG4gICAgICBcImhvc3RzXCJcbiAgICAgIFwiZGVzY3JpcHRpb25cIlxuICAgICAgXCJzaG93c1wiO1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuICAgIC5ob3N0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cblxuLnRhZ3Mge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuICAgIC50YWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgfVxuXG4ubGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5waG90b3Mge1xuICAgIGdyaWQtYXJlYTogcGhvdG9zO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLW1lbnUtaGVpZ2h0KSArIHZhcigtLW1lbnUtaGVpZ2h0KSArIHZhcigtLW1lbnUtaGVpZ2h0KSk7ICovXG59XG4uc2hvdy1uYW1lIHsgZ3JpZC1hcmVhOiBzaG93LW5hbWU7IH1cbi5ob3N0cyB7IGdyaWQtYXJlYTogaG9zdHM7IH1cbi5kZXNjcmlwdGlvbiB7IGdyaWQtYXJlYTogZGVzY3JpcHRpb247IH1cbi5zaG93cyB7IGdyaWQtYXJlYTogc2hvd3M7IG1hcmdpbi10b3A6IDJyZW07IHBhZGRpbmctYm90dG9tOiA1MHB4OyB9XG5cbi5waG90byB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnNob3dzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXG59XG5cbiAvKiBCUkVBS1BPSU5UUyAqL1xuIC8qIE1vYmlsZSAqL1xuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxOXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICAgIH1cblxuICAgIC50YWdzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICB9XG5cbiAgICAudGV4dHVhbC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicGhvdG9zXCIgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjByZW0gMWZyO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA3cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbn1cblxuLyogVGFibGV0cywgaVBhZHMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiA2NnB4O1xuICAgIH1cblxuICAgIC50YWdzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICB9XG5cbiAgICAudGV4dHVhbC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicGhvdG9zXCIgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogN3B4O1xuICAgICAgICB0b3A6IC00cHg7XG4gICAgfVxufVxuXG4vKiBMYXB0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJwaG90b3NcIlxuICAgICAgICAgICAgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgfVxufVxuXG4vKiBEZXNrdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInBob3Rvc1wiXG4gICAgICAgICAgICBcInRleHR1YWwtY29udGVudFwiO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICB9XG59XG5cbi8qIFRWcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInBob3Rvc1wiXG4gICAgICAgICAgICBcInRleHR1YWwtY29udGVudFwiO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile-item',
                templateUrl: './profile-item.component.html',
                styleUrls: ['./profile-item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] }, { type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"] }]; }, { paddingBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding-bottom.px']
        }] }); })();


/***/ }),

/***/ "EVp5":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/decode.pipe.ts ***!
  \*********************************************/
/*! exports provided: DecodePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodePipe", function() { return DecodePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


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

/***/ "H0iG":
/*!*************************************************!*\
  !*** ./src/app/profiles/show/show.component.ts ***!
  \*************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "sIil");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data.service */ "iiaH");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/player.service */ "dY/6");
/* harmony import */ var src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/seo.service */ "ngAm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tag/tag.component */ "S2ZO");
/* harmony import */ var _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/dublab-date.pipe */ "uoaT");










function ShowComponent_div_5_div_11_tag_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag", 21);
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", tag_r4);
} }
function ShowComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowComponent_div_5_div_11_tag_1_Template, 1, 1, "tag", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.show.tags);
} }
function ShowComponent_div_5_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r5);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function ShowComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowComponent_div_5_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "dublabDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShowComponent_div_5_div_11_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShowComponent_div_5_li_18_Template, 2, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, "url(" + ctx_r0.profile.picture + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.name, " w/ ", ctx_r0.host, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx_r0.show.date), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shows/", ctx_r0.profile.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.profile.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tracklist);
} }
class ShowComponent {
    constructor(route, helperService, dataService, playerService, router, seoService) {
        this.route = route;
        this.helperService = helperService;
        this.dataService = dataService;
        this.playerService = playerService;
        this.router = router;
        this.seoService = seoService;
    }
    get paddingBottom() {
        return this.helperService.paddingBottom;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
        this.routeSubscription = this.route.params.subscribe(params => {
            const showSlug = params['showSlug'];
            const date = params['date'];
            this.slug = showSlug + '-' + date;
            // get show data via slug
            this.profilesSubscription = this.dataService.getProfile(showSlug).subscribe(profile => {
                this.profile = profile;
                this.show = profile.shows.filter(show => show.slug == this.slug)[0];
                if (!this.show) {
                    // The slug is incorrect and no show was found
                    this.close();
                }
                else {
                    this.generateLinks(profile);
                    this.tracklist = this.show.tracklist.split('\r\n');
                    this.seoService.generateTags({
                        title: 'dublab bcn',
                        description: `${profile.name} a dublab bcn - ${profile.description}`,
                        image: profile.picture,
                        slug: `shows/${profile.slug}/${date}`
                    });
                }
            });
        });
    }
    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.profilesSubscription.unsubscribe();
        this.helperService.atHomePage = true;
    }
    get previousUrl() {
        return this.helperService.previousUrl;
    }
    get previousUrlIsHome() {
        return this.helperService.previousUrl == '/';
    }
    get name() {
        return this.show.name ? this.show.name : this.profile.name;
    }
    get host() {
        return this.show.host ? this.show.host : this.profile.host;
    }
    get mixPlaying() {
        return this.playerService.mixPlaying;
    }
    play() {
        this.playerService.playMix(this.show.mixcloud_url);
    }
    generateLinks(show) {
        if (!show.links) {
            return;
        }
        const links = [];
        show.links.forEach(link => {
            link = link.toString().toLowerCase();
            let iconUrl = '';
            if (link.includes('twitter')) {
                iconUrl = 'assets/icons/twitter.png';
            }
            else if (link.includes('facebook')) {
                iconUrl = 'assets/icons/facebook.png';
            }
            else if (link.includes('instagram')) {
                iconUrl = 'assets/icons/instagram.png';
            }
            else if (link.includes('soundcloud')) {
                iconUrl = 'assets/icons/soundcloud.png';
            }
            else {
                iconUrl = 'assets/icons/link.png';
            }
            links.push({ link: link, icon: iconUrl });
        });
        this.links = links;
    }
    close() {
        this.router.navigate(['/']);
        this.helperService.atHomePage = true;
    }
    goBack() {
        this.helperService.goBack();
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"])); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["app-show"]], hostVars: 2, hostBindings: function ShowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx.paddingBottom, "px");
    } }, decls: 6, vars: 1, consts: [[1, "header"], [1, "close"], ["routerLink", "/", 1, "material-icons", "pointer", "close-icon"], [1, "back"], ["class", "content", 4, "ngIf"], [1, "content"], [1, "photos", 3, "ngStyle"], [1, "textual-content"], [1, "player"], [1, "play", 3, "click"], [1, "material-icons", "play-icon", "pointer"], [1, "name"], [1, "host"], ["class", "play-tags", 4, "ngIf"], [1, "description"], [1, "profile-name", "pointer", 3, "routerLink"], [1, "tracklist"], [1, "tracklist-list"], ["class", "tracklist-item", 4, "ngFor", "ngForOf"], [1, "play-tags"], [3, "tag", 4, "ngFor", "ngForOf"], [3, "tag"], [1, "tracklist-item"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowComponent_div_5_Template, 19, 13, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_7__["TagComponent"]], pipes: [_shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_8__["DublabDatePipe"]], styles: ["[_nghost-%COMP%] {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(255,255,255, 0.8);\n    display: inline-block;\n    padding: 50px;\n    top: 0;\n    position: absolute;\n    z-index: 1;\n    \n    \n}\n\n.header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    float: right;\n    margin-left: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 100%;\n    height: -webkit-fill-available;\n    height: inherit;\n    gap: 0px 0px;\n    grid-template-areas:\n        \"photos\"\n        \"textual-content\";\n}\n\n.textual-content[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: moz-available;\n    display: grid;\n    gap: 0px 0px;\n    grid-template-areas:\n      \"player\"\n      \"description\"\n      \"tracklist\"\n      \"tags\";\n    padding-right: 15px;\n}\n\n.host[_ngcontent-%COMP%] {\n        font-size: 28px;\n    }\n\n.tags[_ngcontent-%COMP%] {\n    float: left;\n    width: -webkit-fill-available;\n    width: -moz-available;\n    margin-bottom: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n        border-radius: 3px;\n        background-color: black;\n        color: white;\n        padding: 5px;\n        margin-right: 10px;\n        width: -webkit-min-content;\n        width: min-content;\n        font-size: 10px;\n    }\n\n.link[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.photos[_ngcontent-%COMP%] {\n    grid-area: photos;\n    margin-right: 20px;\n    height: auto;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    \n    margin-bottom: 50px;\n}\n\n.player[_ngcontent-%COMP%] {\n    grid-area: player;\n    display: grid;\n    grid-template-areas:\n      \"play name\"\n      \"play play-tags\";\n}\n\n.play[_ngcontent-%COMP%] {\n        grid-area: play;\n        border: 1px solid black;\n        display: grid;\n        place-items: center;\n        border-radius: 50%;\n    }\n\n.play[_ngcontent-%COMP%]:hover {\n            color: var(--brand-purple);\n            border-color: var(--brand-purple);\n        }\n\n.name[_ngcontent-%COMP%] { grid-area: name; margin-left: 20px; }\n\n.play-tags[_ngcontent-%COMP%] { grid-area: play-tags; margin-top: 15px; }\n\n.description[_ngcontent-%COMP%] { grid-area: description; margin-top: 20px; }\n\n.tracklist[_ngcontent-%COMP%] { grid-area: tracklist; }\n\n\n\n.play-icon[_ngcontent-%COMP%] {\n    font-size: 60px;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 20px;\n}\n\n.profile-name[_ngcontent-%COMP%]:hover {\n        color: var(--brand-purple);\n    }\n\n.tracklist-header[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 20px;\n}\n\n.tracklist-list[_ngcontent-%COMP%] {\n  padding-left: 20px !important;\n}\n\n.tracklist-item[_ngcontent-%COMP%] {\n        padding: 3px;\n    }\n\n.photo[_ngcontent-%COMP%] {\n    object-fit: cover;\n    display: block;\n    width: 100%;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n    height: 15px;\n    margin-right: 15px;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .photos[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2.5rem;\n        margin-bottom: 1rem;\n    }\n\n    .tags[_ngcontent-%COMP%] {\n        margin-top: 13px;\n    }\n\n    .textual-content[_ngcontent-%COMP%] {\n        margin-top: 1rem;\n        margin-bottom: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas: \"photos\" \"textual-content\";\n        grid-template-columns: 1fr;\n        grid-template-rows: 20rem 1fr;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n\n        .play[_ngcontent-%COMP%] {\n            height: 53px;\n        }\n\n        .play[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n            font-size: 2rem;\n        }\n\n        .player[_ngcontent-%COMP%] {\n            grid-area: player;\n            display: grid;\n            grid-template-columns: 57px 1fr;\n            margin-bottom: 2rem;\n        }\n\n        .host[_ngcontent-%COMP%] {\n            font-size: 1.3rem;\n        }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .photos[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n    }\n\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2.5rem;\n        margin-bottom: 1rem;\n    }\n\n    .tags[_ngcontent-%COMP%] {\n        margin-top: 13px;\n    }\n\n    .textual-content[_ngcontent-%COMP%] {\n        margin-top: 1rem;\n        margin-bottom: 4rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas: \"photos\" \"textual-content\";\n        grid-template-columns: 1fr;\n        grid-template-rows: 20rem 1fr;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n\n        .play[_ngcontent-%COMP%] {\n            height: 53px;\n        }\n\n        .play[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n            font-size: 2rem;\n        }\n\n        .player[_ngcontent-%COMP%] {\n            grid-area: player;\n            display: grid;\n            grid-template-columns: 57px 1fr;\n            margin-bottom: 2rem;\n        }\n\n        .host[_ngcontent-%COMP%] {\n            font-size: 1.3rem;\n        }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n\n    .play[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n\n    .play-icon[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n\n    .play[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n\n    .play-icon[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    .description[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        grid-template-areas:\n            \"photos\"\n            \"textual-content\";\n    }\n\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n\n    .play[_ngcontent-%COMP%] {\n        height: 60px;\n        width: 60px;\n    }\n\n    .play-icon[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvc2hvdy9zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix3RkFBd0Y7SUFDeEYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixZQUFZO0lBQ1o7O3lCQUVxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWjs7OztZQUlRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFSTtRQUNJLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsMEJBQWtCO1FBQWxCLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztBQUVKO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHVGQUF1RjtJQUN2RixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiOztzQkFFa0I7QUFDdEI7O0FBRUk7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztBQUNJO1lBQ0ksMEJBQTBCO1lBQzFCLGlDQUFpQztRQUNyQzs7QUFFSixRQUFRLGVBQWUsRUFBRSxpQkFBaUIsRUFBRTs7QUFDNUMsYUFBYSxvQkFBb0IsRUFBRSxnQkFBZ0IsRUFBRTs7QUFFekQsZUFBZSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRTs7QUFDekQsYUFBYSxvQkFBb0IsRUFBRTs7QUFDbkMsaURBQWlEOztBQUVqRDtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFSTtRQUNJLDBCQUEwQjtJQUM5Qjs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0I7O0FBQ2hCLFdBQVc7O0FBQ1g7SUFDSTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSwrQ0FBK0M7UUFDL0MsMEJBQTBCO1FBQzFCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixRQUFRO1FBQ1IsV0FBVztRQUNYLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0Qjs7UUFFSTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLG1CQUFtQjtRQUN2Qjs7UUFFQTtZQUNJLGlCQUFpQjtRQUNyQjtBQUNSOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSwrQ0FBK0M7UUFDL0MsMEJBQTBCO1FBQzFCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixRQUFRO1FBQ1IsV0FBVztRQUNYLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0Qjs7UUFFSTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsK0JBQStCO1lBQy9CLG1CQUFtQjtRQUN2Qjs7UUFFQTtZQUNJLGlCQUFpQjtRQUNyQjtBQUNSOztBQUVBLFlBQVk7O0FBQ1o7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJOzs2QkFFcUI7SUFDekI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQSxhQUFhOztBQUNiO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSTs7NkJBRXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUEsUUFBUTs7QUFDUjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0k7OzZCQUVxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXMvc2hvdy9zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC44KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgLyogcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbWVudS1oZWlnaHQpICsgdmFyKC0tbWVudS1oZWlnaHQpICsgdmFyKC0tbWVudS1oZWlnaHQpKTsgKi9cbiAgICAvKiBvcGFjaXR5OiAwLjg7ICovXG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGdhcDogMHB4IDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInBob3Rvc1wiXG4gICAgICAgIFwidGV4dHVhbC1jb250ZW50XCI7XG59XG5cbi50ZXh0dWFsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IG1vei1hdmFpbGFibGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDBweCAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwicGxheWVyXCJcbiAgICAgIFwiZGVzY3JpcHRpb25cIlxuICAgICAgXCJ0cmFja2xpc3RcIlxuICAgICAgXCJ0YWdzXCI7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuICAgIC5ob3N0IHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cblxuLnRhZ3Mge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4gICAgLnRhZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuLmxpbmsge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucGhvdG9zIHtcbiAgICBncmlkLWFyZWE6IHBob3RvcztcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIC8qIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbWVudS1oZWlnaHQpICsgdmFyKC0tbWVudS1oZWlnaHQpICsgdmFyKC0tbWVudS1oZWlnaHQpKTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucGxheWVyIHtcbiAgICBncmlkLWFyZWE6IHBsYXllcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICBcInBsYXkgbmFtZVwiXG4gICAgICBcInBsYXkgcGxheS10YWdzXCI7XG59XG5cbiAgICAucGxheSB7XG4gICAgICAgIGdyaWQtYXJlYTogcGxheTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgICAgIC5wbGF5OmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wdXJwbGUpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmFuZC1wdXJwbGUpO1xuICAgICAgICB9XG5cbiAgICAubmFtZSB7IGdyaWQtYXJlYTogbmFtZTsgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbiAgICAucGxheS10YWdzIHsgZ3JpZC1hcmVhOiBwbGF5LXRhZ3M7IG1hcmdpbi10b3A6IDE1cHg7IH1cblxuLmRlc2NyaXB0aW9uIHsgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjsgbWFyZ2luLXRvcDogMjBweDsgfVxuLnRyYWNrbGlzdCB7IGdyaWQtYXJlYTogdHJhY2tsaXN0OyB9XG4vKiAudGFncyB7IGdyaWQtYXJlYTogdGFnczsgbWFyZ2luLXRvcDogMTVweDsgfSAqL1xuXG4ucGxheS1pY29uIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5wcm9maWxlLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4gICAgLnByb2ZpbGUtbmFtZTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1icmFuZC1wdXJwbGUpO1xuICAgIH1cblxuLnRyYWNrbGlzdC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udHJhY2tsaXN0LWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuICAgIC50cmFja2xpc3QtaXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG5cbi5waG90byB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLyogQlJFQUtQT0lOVFMgKi9cbi8qIE1vYmlsZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDE5cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5waG90b3Mge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAudGFncyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgfVxuXG4gICAgLnRleHR1YWwtY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBob3Rvc1wiIFwidGV4dHVhbC1jb250ZW50XCI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtIDFmcjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogN3B4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXkge1xuICAgICAgICAgICAgaGVpZ2h0OiA1M3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXkgPiAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IHBsYXllcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU3cHggMWZyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3N0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICB9XG59XG5cbi8qIFRhYmxldHMsIGlQYWRzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxOXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAucGhvdG9zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLnRhZ3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIH1cblxuICAgIC50ZXh0dWFsLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwaG90b3NcIiBcInRleHR1YWwtY29udGVudFwiO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbSAxZnI7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDdweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5IHtcbiAgICAgICAgICAgIGhlaWdodDogNTNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ID4gLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBwbGF5ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1N3B4IDFmcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaG9zdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgfVxufVxuXG4vKiBMYXB0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJwaG90b3NcIlxuICAgICAgICAgICAgXCJ0ZXh0dWFsLWNvbnRlbnRcIjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgfVxuXG4gICAgLnBsYXkge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5wbGF5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4vKiBEZXNrdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInBob3Rvc1wiXG4gICAgICAgICAgICBcInRleHR1YWwtY29udGVudFwiO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICB9XG5cbiAgICAucGxheSB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuXG4gICAgLnBsYXktaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5cbi8qIFRWcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcInBob3Rvc1wiXG4gICAgICAgICAgICBcInRleHR1YWwtY29udGVudFwiO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICB9XG5cbiAgICAucGxheSB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuXG4gICAgLnBsYXktaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show',
                templateUrl: './show.component.html',
                styleUrls: ['./show.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] }, { type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"] }]; }, { paddingBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding-bottom.px']
        }] }); })();


/***/ }),

/***/ "ITC6":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "J0wE":
/*!************************************************!*\
  !*** ./src/app/custom-route-reuse-strategy.ts ***!
  \************************************************/
/*! exports provided: CustomRouteReuseStategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouteReuseStategy", function() { return CustomRouteReuseStategy; });
class CustomRouteReuseStategy {
    constructor() {
        this.handlers = {};
    }
    shouldDetach(route) {
        return route.data.shouldReuse || false;
    }
    store(route, handle) {
        if (route.data.shouldReuse) {
            this.handlers[route.routeConfig.path] = handle;
        }
    }
    shouldAttach(route) {
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    }
    retrieve(route) {
        if (!route.routeConfig)
            return null;
        return this.handlers[route.routeConfig.path];
    }
    shouldReuseRoute(future, curr) {
        return future.data.shouldReuse || false;
    }
}


/***/ }),

/***/ "MQ+J":
/*!********************************************!*\
  !*** ./src/app/bsides/bsides.component.ts ***!
  \********************************************/
/*! exports provided: BsidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsidesComponent", function() { return BsidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/helper.service */ "sIil");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/seo.service */ "ngAm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bsides_wrapper_bsides_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bsides-wrapper/bsides-wrapper.component */ "w0N/");







function BsidesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "bsides-wrapper", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", n_r1 + 1);
} }
class BsidesComponent {
    constructor(helperService, router, seoService) {
        this.helperService = helperService;
        this.router = router;
        this.seoService = seoService;
    }
    get paddingBottom() {
        return this.helperService.paddingBottom;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
        this.seoService.generateTags({
            title: 'dublab bcn',
            description: 'B-Sides actualment a dublab bcn: ràdio online comunitària sense ànim de lucre',
            slug: 'b-sides'
        });
    }
    ngOnDestroy() {
        this.helperService.atHomePage = true;
    }
    get numberOfWrappers() {
        if (!this.helperService.numberOfBsideWrappers)
            return [];
        return Array(this.helperService.numberOfBsideWrappers).fill(0).map((x, i) => i);
    }
    get previousUrl() {
        return this.helperService.previousUrl;
    }
    get previousUrlIsHome() {
        return this.helperService.previousUrl == '/';
    }
    navigate() {
        if (!this.previousUrl) {
            this.close();
        }
        else {
            this.router.navigate([this.previousUrl]);
        }
    }
    close() {
        this.router.navigate(['/']);
        this.helperService.atHomePage = true;
    }
    goBack() {
        this.helperService.goBack();
    }
}
BsidesComponent.ɵfac = function BsidesComponent_Factory(t) { return new (t || BsidesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"])); };
BsidesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsidesComponent, selectors: [["bsides"]], hostVars: 2, hostBindings: function BsidesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx.paddingBottom, "px");
    } }, decls: 7, vars: 1, consts: [[1, "header"], [1, "close"], [1, "material-icons", "pointer", 3, "click"], [1, "back"], [1, "content"], [4, "ngFor", "ngForOf"], [3, "page"]], template: function BsidesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BsidesComponent_Template_span_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BsidesComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numberOfWrappers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _bsides_wrapper_bsides_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["BsidesWrapperComponent"]], styles: ["[_nghost-%COMP%] {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255,255,255, 0.8);\n    display: inline-block;\n    padding: 50px;\n    top: 0;\n    position: absolute;\n    z-index: 1;\n    \n    \n}\n\n.header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    float: right;\n    margin-left: 15px;\n}\n\n.title[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-bottom: 20px;\n    }\n\n.content[_ngcontent-%COMP%] {\n    \n    overflow-y: scroll;\n    height: inherit;\n    margin-bottom: 50px;\n}\n\n.collaborators[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    gap: 0px 0px;\n    grid-template-areas:\n        \". . . . . . .\";\n}\n\n.collaborator-image[_ngcontent-%COMP%] {\n        height: 70px;\n        margin-right: 20px;\n    }\n\n.credits[_ngcontent-%COMP%] {\n    margin-bottom: 150px;\n}\n\n.link[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.virtual-scroller[_ngcontent-%COMP%] {\n    height: 560px;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        top: 0;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        padding: 19px;\n        padding-right: 0;\n        padding-top: 10px;\n    }\n\n    .header[_ngcontent-%COMP%] {\n        margin-left: 0;\n        margin-right: 0;\n        position: relative;\n        right: 7px;\n        float: none;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 10px;\n        margin-bottom: 5px;\n    }\n\n        .material-icons[_ngcontent-%COMP%] {\n            font-size: 30px;\n        }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    .header[_ngcontent-%COMP%] {\n        position: relative;\n        top: -5px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnNpZGVzL2JzaWRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0ZBQXdGO0lBQ3hGLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFSTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELHVCQUF1QjtJQUN2QixZQUFZO0lBQ1o7dUJBQ21CO0FBQ3ZCOztBQUVJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7QUFFSjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGdCQUFnQjs7QUFDZixXQUFXOztBQUNYO0lBQ0c7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixNQUFNO1FBQ04sV0FBVztRQUNYLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0Qjs7UUFFSTtZQUNJLGVBQWU7UUFDbkI7QUFDUjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCOztRQUVJO1lBQ0ksZUFBZTtRQUNuQjtBQUNSOztBQUVBLFlBQVk7O0FBQ1o7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7QUFDSjs7QUFFQSxhQUFhOztBQUNiO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiO0FBQ0o7O0FBRUEsUUFBUTs7QUFDUjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYnNpZGVzL2JzaWRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1lbnUtaGVpZ2h0KSArIHZhcigtLW1lbnUtaGVpZ2h0KSArIHZhcigtLW1lbnUtaGVpZ2h0KSk7ICovXG4gICAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbi5jb250ZW50IHtcbiAgICAvKiB3aWR0aDogOTUlOyAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbGxhYm9yYXRvcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ2FwOiAwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiLiAuIC4gLiAuIC4gLlwiO1xufVxuXG4gICAgLmNvbGxhYm9yYXRvci1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuLmNyZWRpdHMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4ubGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGluazpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi52aXJ0dWFsLXNjcm9sbGVyIHtcbiAgICBoZWlnaHQ6IDU2MHB4O1xufVxuXG4vKiBCUkVBS1BPSU5UUyAqL1xuIC8qIE1vYmlsZSAqL1xuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiAxOXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICByaWdodDogN3B4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxufVxuXG4vKiBUYWJsZXRzLCBpUGFkcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogMTlweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDdweDtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG59XG5cbi8qIExhcHRvcHMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtNXB4O1xuICAgIH1cbn1cblxuLyogRGVza3RvcHMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICB9XG59XG5cbi8qIFRWcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtNXB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsidesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bsides',
                templateUrl: './bsides.component.html',
                styleUrls: ['./bsides.component.css']
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] }]; }, { paddingBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding-bottom.px']
        }] }); })();


/***/ }),

/***/ "P1kN":
/*!*******************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _carousel_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.animations */ "o8rK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CarouselComponent_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const slide_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("@slideAnimation", ctx_r4.getAnimationType);
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
        this.skipFirstAnimation = false;
        this.autoTime = 0;
        this.animationType = _carousel_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationType"].Fade;
        this.slidesShown = 0;
        this.currentSlide = 0;
    }
    ngOnInit() {
        if (this.random)
            this.randomClick();
        if (this.autoTime > 0) {
            this.intervalSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.autoTime).subscribe(x => {
                if (this.random) {
                    this.randomClick();
                }
                else {
                    this.onNextClick();
                }
            });
        }
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }
    get getAnimationType() {
        if (this.skipFirstAnimation) {
            return undefined;
        }
        return this.animationType;
    }
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    }
    onNextClick(skip = 1) {
        if (!this.cachedNextImageId) {
            this.cachedNextImageId = this.currentSlide + skip;
        }
        this.currentSlide = this.cachedNextImageId === this.slides.length ? 0 : this.cachedNextImageId;
        this.cachedNextImageId = this.currentSlide + skip;
        this.preloadImage(this.cachedNextImageId);
    }
    onRightClick(event) {
        event.preventDefault();
    }
    preloadImage(id) {
        if (this.slidesShown > 0) {
            this.skipFirstAnimation = false;
        }
        let slide = this.slides[id];
        if (!slide) {
            slide = this.slides[0];
            this.cachedNextImageId = 0;
        }
        if (slide.src) {
            new Image().src = slide.src;
        }
        this.slidesShown++;
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomClick() {
        if (!this.cachedNextImageId) {
            this.cachedNextImageId = this.getRandomInt(1, this.slides.length);
        }
        this.currentSlide = this.cachedNextImageId === this.slides.length ? 0 : this.cachedNextImageId;
        this.cachedNextImageId = this.getRandomInt(0, this.slides.length - 1);
        this.preloadImage(this.cachedNextImageId);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { slides: "slides", controls: "controls", random: "random", skipFirstAnimation: "skipFirstAnimation", autoTime: "autoTime", animationType: "animationType" }, decls: 3, vars: 2, consts: [[1, "carousel", 3, "contextmenu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "slide", 3, "src", 4, "ngIf"], [1, "slide", 3, "src"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  will-change: transform;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n}\n\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n\n}\n\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n    opacity: 1;\n  }\n\n.control.next[_ngcontent-%COMP%] {\n    right: 0;\n  }\n\n.control.prev[_ngcontent-%COMP%] {\n    left: 0;\n  }\n\n\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid white;\n  border-bottom: 0.1em solid white;\n  width: 0.5em;\n  height: 0.5em;\n}\n\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0VBQ1Asc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDhEQUE4RDtBQUNoRSx5QkFBeUI7QUFDekI7O0FBRUU7SUFDRSxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSxRQUFRO0VBQ1Y7O0FBQ0E7SUFDRSxPQUFPO0VBQ1Q7O0FBRUYscUJBQXFCOztBQUNyQjtFQUNFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG59XG5cbi5jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDgwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG4vKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xufVxuXG4gIC5jb250cm9sOmhvdmVyLCAuY29udHJvbDpmb2N1cyB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAuY29udHJvbC5uZXh0IHtcbiAgICByaWdodDogMDtcbiAgfVxuICAuY29udHJvbC5wcmV2IHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbi8qIHN0eWxlIHRoZSBhcnJvd3MgKi9cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogMC4xZW0gc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHdoaXRlO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG59XG4uYXJyb3cubGVmdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5hcnJvdy5yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG4iXX0= */"], data: { animation: [
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
        }], skipFirstAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animationType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "S2ZO":
/*!*********************************************!*\
  !*** ./src/app/shared/tag/tag.component.ts ***!
  \*********************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TagComponent {
    constructor() {
        this.padding = 5;
    }
    get paddingOrDefault() {
        return this.padding;
    }
    ngOnInit() {
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["tag"]], hostVars: 2, hostBindings: function TagComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.paddingOrDefault, "px");
    } }, inputs: { tag: "tag", padding: "padding" }, decls: 1, vars: 1, template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tag);
    } }, styles: ["[_nghost-%COMP%] {\n    border-radius: 3px;\n    border: 1px solid black;\n    color: black;\n    padding: 5px;\n    margin-right: 10px;\n    width: -webkit-min-content;\n    width: min-content;\n    font-size: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhZy90YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGFnL3RhZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tag',
                templateUrl: './tag.component.html',
                styleUrls: ['./tag.component.css']
            }]
    }], function () { return []; }, { tag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paddingOrDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding.px']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_carousel_carousel_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/carousel/carousel.animations */ "o8rK");
/* harmony import */ var src_app_shared_slides_barcelona92_slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/slides/barcelona92.slides */ "wLwr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/player.service */ "dY/6");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/data.service */ "iiaH");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/helper.service */ "sIil");
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/seo.service */ "ngAm");
/* harmony import */ var _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/carousel/carousel.component */ "P1kN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/drop-down/drop-down.component */ "7w7q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./streamer/streamer.component */ "pLHI");
/* harmony import */ var _shared_directives_recreate_view_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/directives/recreate-view.directive */ "hh0M");
/* harmony import */ var _shared_mixcloud_player_mixcloud_player_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/mixcloud-player/mixcloud-player.component */ "rjeW");




















const _c0 = ["mixcloudPlayer"];
function AppComponent_ng_container_9_mixcloud_player_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mixcloud-player", 11, 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mix", ctx_r2.mixUrl);
} }
function AppComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_ng_container_9_mixcloud_player_1_Template, 2, 1, "mixcloud-player", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("wRecreateViewKey", ctx_r0.mixUrl);
} }
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " play_arrow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sintonitza ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { pointer: a0, blurred: a1 }; };
const _c2 = function (a0) { return { invisible: a0 }; };
class AppComponent {
    constructor(playerService, dataService, helperService, seoService, router) {
        this.playerService = playerService;
        this.dataService = dataService;
        this.helperService = helperService;
        this.seoService = seoService;
        this.router = router;
        this.title = 'dublab bcn';
        this.canShowTooltip = false;
        this.animationType = _shared_carousel_carousel_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationType"].Fade;
        this.slides = new src_app_shared_slides_barcelona92_slides__WEBPACK_IMPORTED_MODULE_3__["Barcelona92"]().slides;
        this.volume = 90;
        this.mouseOnScheduleDropDown = false;
        this.mouseOnScheduleMenu = false;
        this.mouseOnScheduleMenuToBeFalse = false;
        // Explore
        this.exploreData = [
            { display: 'Shows', link: '/shows' },
            { display: 'B-Sides', link: '/b-sides' },
            { display: 'Destacats', link: '' },
            { display: 'Ex-Shows', link: '' },
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
        this.mouseOnVolumeDropDown = false;
        this.mouseOnVolumeMenu = false;
        this.mouseOnVolumeMenuToBeFalse = false;
    }
    ngOnInit() {
        this.initializeTooltip();
        this.dataService.createTodaysSchedule();
        this.mixSubscription = this.playerService.mix$.subscribe(mixUrl => {
            this.mixUrl = mixUrl;
        });
        this.seoService.generateTags({});
        // Route managing
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((evt) => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pairwise"])())
            .subscribe((events) => {
            const url = events[0].urlAfterRedirects;
            this.helperService.navigationHistory.unshift(url);
            this.helperService.previousUrl = events[0].urlAfterRedirects;
        });
    }
    get todaysSchedule() {
        return this.dataService.todaysSchedule;
    }
    get hasTunedIn() {
        return this.playerService.hasTunedIn;
    }
    get isHomePage() {
        return this.helperService.atHomePage;
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
        this.mouseOnVolumeMenu = false;
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
        this.mouseOnVolumeMenu = false;
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
        this.mouseOnVolumeMenu = false;
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
    // Volume
    onVolumeChange(newVolume) {
        if (newVolume !== undefined) {
            this.volume = newVolume;
        }
        const volume = (this.volume / 100);
        this.playerService.changeVolume(volume);
    }
    onShowVolume() {
        this.mouseOnVolumeMenu = true;
        this.mouseOnVolumeMenuToBeFalse = false;
        this.mouseOnSistersMenu = false;
        this.mouseOnScheduleMenu = false;
        this.mouseOnExploreMenu = false;
    }
    onHideVolume() {
        this.mouseOnVolumeMenuToBeFalse = true;
        this.delay(500).then(any => {
            if (this.mouseOnVolumeMenuToBeFalse) {
                this.mouseOnVolumeMenu = false;
            }
        });
    }
    onShowVolumeDropDown() {
        this.mouseOnVolumeDropDown = true;
    }
    onHideVolumeDropDown() {
        this.mouseOnVolumeDropDown = false;
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_9__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mixcloudPlayer = _t.first);
    } }, decls: 13, vars: 33, consts: [[1, "content-container"], [1, "carousel", 3, "ngClass", "slides", "animationType", "autoTime", "random", "skipFirstAnimation", "click", "mouseenter", "mouseleave"], ["id", "schedule", 1, "invisible", 3, "menuData", "ngClass", "mouseEnter", "mouseLeave"], ["id", "explore", 1, "invisible", 3, "menuData", "ngClass", "mouseEnter", "mouseLeave"], ["id", "sisters", 1, "invisible", 3, "links", "ngClass", "mouseEnter", "mouseLeave"], ["id", "volume-control", 1, "volume-control", 3, "ngClass", "mouseenter", "mouseleave"], ["type", "range", "id", "volume", "name", "volume", "min", "0", "max", "100", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "mouseenter", "showSchedule", "hideSchedule", "showExplore", "hideExplore", "showVolume", "hideVolume", "showSisters", "hideSisters", "volumeChanged"], ["class", "tooltip", 4, "ngIf"], [3, "mix", 4, "wRecreateViewKey"], [3, "mix"], ["mixcloudPlayer", ""], [1, "tooltip"], [1, "tooltip-wrapper"], [1, "material-icons", "play-arrow"], [1, "tooltip-text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_carousel_click_3_listener() { return ctx.onTuneIn(); })("mouseenter", function AppComponent_Template_carousel_mouseenter_3_listener() { return ctx.showTooltip(); })("mouseleave", function AppComponent_Template_carousel_mouseleave_3_listener() { return ctx.hideTooltip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "drop-down", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseEnter", function AppComponent_Template_drop_down_mouseEnter_4_listener() { return ctx.onShowScheduleDropDown(); })("mouseLeave", function AppComponent_Template_drop_down_mouseLeave_4_listener() { return ctx.onHideScheduleDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "drop-down", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseEnter", function AppComponent_Template_drop_down_mouseEnter_5_listener() { return ctx.onShowExploreDropDown(); })("mouseLeave", function AppComponent_Template_drop_down_mouseLeave_5_listener() { return ctx.onHideExploreDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "drop-down", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseEnter", function AppComponent_Template_drop_down_mouseEnter_6_listener() { return ctx.onShowSistersDropDown(); })("mouseLeave", function AppComponent_Template_drop_down_mouseLeave_6_listener() { return ctx.onHideSistersDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_7_listener() { return ctx.onShowVolumeDropDown(); })("mouseleave", function AppComponent_Template_div_mouseleave_7_listener() { return ctx.onHideVolumeDropDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.volume = $event; })("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener() { return ctx.onVolumeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AppComponent_ng_container_9_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "menu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function AppComponent_Template_menu_mouseenter_10_listener() { return ctx.hideTooltip(); })("showSchedule", function AppComponent_Template_menu_showSchedule_10_listener() { return ctx.onShowSchedule(); })("hideSchedule", function AppComponent_Template_menu_hideSchedule_10_listener() { return ctx.onHideSchedule(); })("showExplore", function AppComponent_Template_menu_showExplore_10_listener() { return ctx.onShowExplore(); })("hideExplore", function AppComponent_Template_menu_hideExplore_10_listener() { return ctx.onHideExplore(); })("showVolume", function AppComponent_Template_menu_showVolume_10_listener() { return ctx.onShowVolume(); })("hideVolume", function AppComponent_Template_menu_hideVolume_10_listener() { return ctx.onHideVolume(); })("showSisters", function AppComponent_Template_menu_showSisters_10_listener() { return ctx.onShowSisters(); })("hideSisters", function AppComponent_Template_menu_hideSisters_10_listener() { return ctx.onHideSisters(); })("volumeChanged", function AppComponent_Template_menu_volumeChanged_10_listener($event) { return ctx.onVolumeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "streamer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_div_12_Template, 7, 0, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](22, _c1, ctx.canShowTooltip && !ctx.hasTunedIn, !ctx.isHomePage))("slides", ctx.slides)("animationType", ctx.animationType)("autoTime", 30000)("random", true)("skipFirstAnimation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("right", 19.65, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuData", ctx.todaysSchedule)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, !ctx.mouseOnScheduleMenu && !ctx.mouseOnScheduleDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("right", 17.5, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menuData", ctx.exploreData)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c2, !ctx.mouseOnExploreMenu && !ctx.mouseOnExploreDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("right", 8.5, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("links", ctx.sistersLinks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c2, !ctx.mouseOnSistersMenu && !ctx.mouseOnSistersDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c2, !ctx.mouseOnVolumeMenu && !ctx.mouseOnVolumeDropDown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.volume);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mixUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canShowTooltip && !ctx.hasTunedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_12__["DropDownComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"], _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_15__["StreamerComponent"], _shared_directives_recreate_view_directive__WEBPACK_IMPORTED_MODULE_16__["RecreateViewDirective"], _shared_mixcloud_player_mixcloud_player_component__WEBPACK_IMPORTED_MODULE_17__["MixcloudPlayerComponent"]], styles: [".splash[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.content-container[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 10px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1000;\n}\n\n.tooltip-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20px 1fr;\n}\n\n.tooltip-text[_ngcontent-%COMP%] {\n      padding-top: 1px;\n    }\n\n.play-arrow[_ngcontent-%COMP%] {\n      font-size: 18px;\n    }\n\n.carousel[_ngcontent-%COMP%] {\n  will-change: transform;\n}\n\n.volume-control[_ngcontent-%COMP%] {\n  background-color: white;\n  position: fixed;\n  transform: rotate(270deg);\n  padding: 8px;\n  bottom: 81px;\n  right: -18px;\n}\n\n#volume[_ngcontent-%COMP%] {\n    width: 70px;\n    position: relative;\n    top: 1px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVJO01BQ0UsZ0JBQWdCO0lBQ2xCOztBQUVBO01BQ0UsZUFBZTtJQUNqQjs7QUFFSjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0VBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxhc2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLyogei1pbmRleDogLTE7ICovXG59XG5cbi5jb250ZW50LWNvbnRhaW5lcjpob3ZlciAudG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udG9vbHRpcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnRvb2x0aXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XG59XG5cbiAgICAudG9vbHRpcC10ZXh0IHtcbiAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgfVxuXG4gICAgLnBsYXktYXJyb3cge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuLmNhcm91c2VsIHtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLnZvbHVtZS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgcGFkZGluZzogOHB4O1xuICBib3R0b206IDgxcHg7XG4gIHJpZ2h0OiAtMThweDtcbn1cblxuICAjdm9sdW1lIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }, { type: _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_9__["SeoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { mixcloudPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mixcloudPlayer']
        }] }); })();


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/helper.service */ "sIil");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/player.service */ "dY/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MenuComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goBackToHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(helperService, playerService, router) {
        this.helperService = helperService;
        this.playerService = playerService;
        this.router = router;
        this.showSchedule = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideSchedule = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showExplore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideExplore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSisters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideSisters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showVolume = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideVolume = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.volumeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    get atMenu() {
        return this.router.url.includes('menu');
    }
    get atHomePage() {
        return this.helperService.atHomePage;
    }
    get volumeIcon() {
        const currentVolume = this.playerService.currentVolume;
        if (currentVolume == 0)
            return 'volume_mute';
        else if (currentVolume > 0 && currentVolume < 0.7)
            return 'volume_down';
        else
            return 'volume_up';
    }
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
    // Volume
    onShowVolume() {
        this.showVolume.emit();
    }
    onHideVolume() {
        this.hideVolume.emit();
    }
    toggleVolume() {
        if (this.playerService.currentVolume == 0) {
            this.volumeChanged.emit(90);
        }
        else {
            this.volumeChanged.emit(0);
        }
    }
    goBackToHomePage() {
        this.helperService.atHomePage = true;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu"]], outputs: { showSchedule: "showSchedule", hideSchedule: "hideSchedule", showExplore: "showExplore", hideExplore: "hideExplore", showSisters: "showSisters", hideSisters: "hideSisters", showVolume: "showVolume", hideVolume: "hideVolume", volumeChanged: "volumeChanged" }, decls: 19, vars: 3, consts: [[1, "logo-wrapper", "menu-item"], ["src", "assets/dublab_menu_logo.webp", "alt", "Dublab", 1, "logo"], [1, "programacio", "menu-item", "cursor-default", 3, "mouseenter", "mouseleave"], [1, "explora", "menu-item", "cursor-default", 3, "mouseenter", "mouseleave"], [1, "sisters", "menu-item", "cursor-default", 3, "mouseenter", "mouseleave"], ["routerLink", "/info", 1, "info", "menu-item"], [1, "pointer"], [1, "search", "menu-item", 3, "click", "mouseenter", "mouseleave"], [1, "material-icons", "search-icon", "pointer"], ["routerLink", "/menu", "class", "options menu-item", 4, "ngIf"], ["routerLink", "/", "class", "options menu-item", 3, "click", 4, "ngIf"], ["routerLink", "/menu", 1, "options", "menu-item"], [1, "material-icons", "menu-icon"], ["routerLink", "/", 1, "options", "menu-item", 3, "click"], [1, "material-icons", "close-icon"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_Template_div_mouseenter_2_listener() { return ctx.onShowSchedule(); })("mouseleave", function MenuComponent_Template_div_mouseleave_2_listener() { return ctx.onHideSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Programaci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_Template_div_mouseenter_5_listener() { return ctx.onShowExplore(); })("mouseleave", function MenuComponent_Template_div_mouseleave_5_listener() { return ctx.onHideExplore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Explora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_Template_div_mouseenter_8_listener() { return ctx.onShowSisters(); })("mouseleave", function MenuComponent_Template_div_mouseleave_8_listener() { return ctx.onHideSisters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sisters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_14_listener() { return ctx.toggleVolume(); })("mouseenter", function MenuComponent_Template_div_mouseenter_14_listener() { return ctx.onShowVolume(); })("mouseleave", function MenuComponent_Template_div_mouseleave_14_listener() { return ctx.onHideVolume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MenuComponent_div_17_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_div_18_Template, 3, 0, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.volumeIcon, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.atMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.atMenu);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@media (min-width: 700px) {\n  [_nghost-%COMP%] {\n    background-color: white;\n    color: black;\n\n    height: var(--menu-height);\n    margin-bottom: var(--menu-height);\n    \n    padding: 0;\n    width: 100%;\n\n    position: absolute;\n    bottom: 0;\n\n    align-items: center;\n\n    display: grid;\n    grid-template-columns: 1fr 11rem repeat(2, 8rem) 60px 3.8rem;\n    grid-template-rows: 1fr;\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n\n    border-bottom: 1px solid black;\n  }\n\n  .programacio[_ngcontent-%COMP%] {\n    text-align: left;\n    grid-area: 1 / 2 / 2 / 3;\n  }\n\n  .sisters[_ngcontent-%COMP%] {\n    grid-area: 1 / 4 / 2 / 5;\n  }\n\n  .explora[_ngcontent-%COMP%] {\n    grid-area: 1 / 3 / 2 / 4;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    grid-area: 1 / 5 / 2 / 6;\n  }\n\n\n  .search[_ngcontent-%COMP%] {\n    grid-area: 1 / 6 / 2 / 7;\n    text-align: right;\n  }\n\n  .menu-icon[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n  .options[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .search-icon[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 17px;\n    padding: var(---menu-padding);\n    width: var(--logo-size);\n  }\n}\n\n@media (max-width: 700px) {\n  [_nghost-%COMP%] {\n    background-color: white;\n    color: black;\n\n    height: var(--menu-height);\n    margin-bottom: var(--menu-height);\n    padding: 0;\n    width: 100%;\n\n    position: absolute;\n    bottom: 0;\n\n    align-items: center;\n\n    display: grid;\n    grid-template-columns: 1fr 4rem 3rem;\n    grid-template-rows: 1fr;\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n\n    border-bottom: 1px solid black;\n  }\n\n  .search-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .programacio[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .sisters[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .explora[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-icon[_ngcontent-%COMP%] {\n    font-size: 33px;\n    position: relative;\n    right: 7px;\n    cursor: pointer;\n  }\n\n  .close-icon[_ngcontent-%COMP%] {\n    font-size: 31px;\n    position: relative;\n    right: 5px;\n    cursor: pointer;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    width: var(--logo-size);\n  }\n}\n.menu-item[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  place-items: inherit;\n  overflow: hidden;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTs7SUFFWiwwQkFBMEI7SUFDMUIsaUNBQWlDOztJQUVqQyxVQUFVO0lBQ1YsV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixpQkFBaUI7O0lBRWpCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7OztFQUdBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHVCQUF1QjtFQUN6QjtBQUNGO0FBRUEsV0FBVztBQUNYO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTs7SUFFWiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjs7SUFFakIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQSxTQUFTO0FBRVQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBERVNLVE9QICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lbnUtaGVpZ2h0KTtcbiAgICBcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDExcmVtIHJlcGVhdCgyLCA4cmVtKSA2MHB4IDMuOHJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcblxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIC5wcm9ncmFtYWNpbyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIH1cblxuICAuc2lzdGVycyB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xuICB9XG5cbiAgLmV4cGxvcmEge1xuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcbiAgfVxuXG4gIC5pbmZvIHtcbiAgICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XG4gIH1cblxuXG4gIC5zZWFyY2gge1xuICAgIGdyaWQtYXJlYTogMSAvIDYgLyAyIC8gNztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5tZW51LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuXG4gIC5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2VhcmNoLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIHBhZGRpbmc6IHZhcigtLS1tZW51LXBhZGRpbmcpO1xuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXNpemUpO1xuICB9XG59XG5cbi8qIE1PQklMRSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG5cbiAgICBoZWlnaHQ6IHZhcigtLW1lbnUtaGVpZ2h0KTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tZW51LWhlaWdodCk7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0cmVtIDNyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG5cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAuc2VhcmNoLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJvZ3JhbWFjaW8ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaXN0ZXJzIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZXhwbG9yYSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tZW51LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2xvc2UtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB3aWR0aDogdmFyKC0tbG9nby1zaXplKTtcbiAgfVxufVxuXG4ubWVudS1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vKiBNZW51ICovXG5cbi5sb2dvLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"] }, { type: _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { showSchedule: [{
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
        }], showVolume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hideVolume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], volumeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Um/Z":
/*!*************************************************************************!*\
  !*** ./src/app/profiles/profiles-wrapper/profiles-wrapper.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfilesWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesWrapperComponent", function() { return ProfilesWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/data.service */ "iiaH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_thumbnail_profile_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-thumbnail/profile-thumbnail.component */ "kxae");





function ProfilesWrapperComponent_ng_container_0_div_1_profile_thumbnail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "profile-thumbnail", 4);
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx_r4.profiles[i_r3])("index", i_r3)("page", ctx_r4.page);
} }
const _c0 = function (a0) { return { "no-padding-top": a0 }; };
function ProfilesWrapperComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfilesWrapperComponent_ng_container_0_div_1_profile_thumbnail_1_Template, 1, 3, "profile-thumbnail", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("show-", i_r3, " show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.isTopRow(i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.profiles[i_r3]);
} }
function ProfilesWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfilesWrapperComponent_ng_container_0_div_1_Template, 2, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.profiles);
} }
class ProfilesWrapperComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.profilesSubscription =
            this.dataService.getProfiles(this.page)
                .subscribe(profiles => {
                this.profiles = profiles;
            });
    }
    get isFirstPage() {
        return this.page == 1;
    }
    isTopRow(i) {
        return this.isFirstPage && i < 4;
    }
    ngOnDestroy() {
        this.profilesSubscription.unsubscribe();
    }
}
ProfilesWrapperComponent.ɵfac = function ProfilesWrapperComponent_Factory(t) { return new (t || ProfilesWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
ProfilesWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilesWrapperComponent, selectors: [["profiles-wrapper"]], inputs: { page: "page", index: "index" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "show", "index", "page", 4, "ngIf"], [3, "show", "index", "page"]], template: function ProfilesWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfilesWrapperComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _profile_thumbnail_profile_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__["ProfileThumbnailComponent"]], styles: ["[_nghost-%COMP%] {\n    margin-right: 20px;\n    display: grid;\n    gap: 0px 0px;\n}\n\n.show[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.show-1[_ngcontent-%COMP%] { grid-area: show-1; }\n\n.show-2[_ngcontent-%COMP%] { grid-area: show-2; }\n\n.show-3[_ngcontent-%COMP%] { grid-area: show-3; }\n\n.show-4[_ngcontent-%COMP%] { grid-area: show-4; }\n\n.show-5[_ngcontent-%COMP%] { grid-area: show-5; }\n\n.show-6[_ngcontent-%COMP%] { grid-area: show-6; }\n\n.show-7[_ngcontent-%COMP%] { grid-area: show-7; }\n\n.show-8[_ngcontent-%COMP%] { grid-area: show-8; }\n\n.no-padding-top[_ngcontent-%COMP%] {\n    padding-top: 0;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr;\n        grid-template-areas:\n        \"show-8\" \"show-1\"\n        \"show-2\" \"show-3\"\n        \"show-4\" \"show-5\"\n        \"show-6\" \"show-7\";\n        margin-bottom: 0.5rem;\n    }\n\n    .show[_ngcontent-%COMP%] {\n        padding: 0 0 2.2rem 0;\n    }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1\"\n        \"show-2 show-3\"\n        \"show-4 show-5\"\n        \"show-6 show-7\";\n        grid-gap: 1rem;\n    }\n\n    .show[_ngcontent-%COMP%] {\n        padding: 0 0 2.2rem 0;\n    }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1\"\n        \"show-2 show-3\"\n        \"show-4 show-5\"\n        \"show-6 show-7\";\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1 show-2 show-3\"\n        \"show-4 show-5 show-6 show-7\";\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1 show-2 show-3\"\n        \"show-4 show-5 show-6 show-7\";\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZXMtd3JhcHBlci9wcm9maWxlcy13cmFwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBRTdCO0lBQ0ksY0FBYztBQUNsQjs7QUFFQyxnQkFBZ0I7O0FBQ2hCLFdBQVc7O0FBQ1g7SUFDRztRQUNJLDBCQUEwQjtRQUMxQjs7Ozt5QkFJaUI7UUFDakIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUEsbUJBQW1COztBQUNuQjtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCOzs7O3VCQUllO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBLFlBQVk7O0FBQ1o7SUFDSTtRQUNJLDhCQUE4QjtRQUM5Qjs7Ozt1QkFJZTtJQUNuQjtBQUNKOztBQUVBLGFBQWE7O0FBQ2I7SUFDSTtRQUNJLHNDQUFzQztRQUN0Qzs7cUNBRTZCO0lBQ2pDO0FBQ0o7O0FBRUEsUUFBUTs7QUFDUjtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDOztxQ0FFNkI7SUFDakM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGVzLXdyYXBwZXIvcHJvZmlsZXMtd3JhcHBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMHB4IDBweDtcbn1cblxuLnNob3cge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zaG93LTEgeyBncmlkLWFyZWE6IHNob3ctMTsgfVxuLnNob3ctMiB7IGdyaWQtYXJlYTogc2hvdy0yOyB9XG4uc2hvdy0zIHsgZ3JpZC1hcmVhOiBzaG93LTM7IH1cbi5zaG93LTQgeyBncmlkLWFyZWE6IHNob3ctNDsgfVxuLnNob3ctNSB7IGdyaWQtYXJlYTogc2hvdy01OyB9XG4uc2hvdy02IHsgZ3JpZC1hcmVhOiBzaG93LTY7IH1cbi5zaG93LTcgeyBncmlkLWFyZWE6IHNob3ctNzsgfVxuLnNob3ctOCB7IGdyaWQtYXJlYTogc2hvdy04OyB9XG5cbi5uby1wYWRkaW5nLXRvcCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbiAvKiBCUkVBS1BPSU5UUyAqL1xuIC8qIE1vYmlsZSAqL1xuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaG93LThcIiBcInNob3ctMVwiXG4gICAgICAgIFwic2hvdy0yXCIgXCJzaG93LTNcIlxuICAgICAgICBcInNob3ctNFwiIFwic2hvdy01XCJcbiAgICAgICAgXCJzaG93LTZcIiBcInNob3ctN1wiO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMi4ycmVtIDA7XG4gICAgfVxufVxuXG4vKiBUYWJsZXRzLCBpUGFkcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNob3ctOCBzaG93LTFcIlxuICAgICAgICBcInNob3ctMiBzaG93LTNcIlxuICAgICAgICBcInNob3ctNCBzaG93LTVcIlxuICAgICAgICBcInNob3ctNiBzaG93LTdcIjtcbiAgICAgICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMi4ycmVtIDA7XG4gICAgfVxufVxuXG4vKiBMYXB0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNob3ctOCBzaG93LTFcIlxuICAgICAgICBcInNob3ctMiBzaG93LTNcIlxuICAgICAgICBcInNob3ctNCBzaG93LTVcIlxuICAgICAgICBcInNob3ctNiBzaG93LTdcIjtcbiAgICB9XG59XG5cbi8qIERlc2t0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICA6aG9zdCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNob3ctOCBzaG93LTEgc2hvdy0yIHNob3ctM1wiXG4gICAgICAgIFwic2hvdy00IHNob3ctNSBzaG93LTYgc2hvdy03XCI7XG4gICAgfVxufVxuXG4vKiBUVnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwic2hvdy04IHNob3ctMSBzaG93LTIgc2hvdy0zXCJcbiAgICAgICAgXCJzaG93LTQgc2hvdy01IHNob3ctNiBzaG93LTdcIjtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profiles-wrapper',
                templateUrl: './profiles-wrapper.component.html',
                styleUrls: ['./profiles-wrapper.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XSv0":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/helper.service */ "sIil");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/seo.service */ "ngAm");





class InfoComponent {
    constructor(helperService, router, seoService) {
        this.helperService = helperService;
        this.router = router;
        this.seoService = seoService;
    }
    get paddingBottom() {
        return this.helperService.paddingBottom;
    }
    ngOnInit() {
        this.helperService.atHomePage = false;
        this.seoService.generateTags({});
    }
    ngOnDestroy() {
        this.helperService.atHomePage = true;
    }
    get previousUrl() {
        return this.helperService.previousUrl;
    }
    get previousUrlIsHome() {
        return this.helperService.previousUrl == '/';
    }
    navigate() {
        if (!this.previousUrl) {
            this.close();
        }
        else {
            this.router.navigate([this.previousUrl]);
        }
    }
    close() {
        this.router.navigate(['/']);
        this.helperService.atHomePage = true;
    }
    goBack() {
        this.helperService.goBack();
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["info"]], hostVars: 2, hostBindings: function InfoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx.paddingBottom, "px");
    } }, decls: 55, vars: 0, consts: [[1, "header"], [1, "close"], [1, "material-icons", "pointer", 3, "click"], [1, "back"], [1, "content"], ["href", "mailto:es@dublab.com", 1, "link"], [1, "collaborators"], ["src", "assets/collaborators/ICUB.png", 1, "collaborator-image"], ["src", "assets/collaborators/Mahou.png", 1, "collaborator-image", "mahou"], ["src", "assets/collaborators/Sonar.gif", 1, "collaborator-image", "sonar"], ["src", "assets/collaborators/hangar.png", 1, "collaborator-image", "hangar"], ["src", "assets/collaborators/discogs.png", 1, "collaborator-image", "discogs"], ["src", "assets/collaborators/gts.png", 1, "collaborator-image"], ["src", "assets/collaborators/experimentem.png", 1, "collaborator-image"], ["src", "assets/collaborators/larubia.png", 1, "collaborator-image"], [1, "credits"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_span_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " dublab bcn \u00E9s una r\u00E0dio online comunit\u00E0ria sense \u00E0nim de lucre que neix a Barcelona al mar\u00E7 de 2015 amb l'objectiu de potenciar la cultura local i donar-li projecci\u00F3. Un altaveu de propostes innovadores i experimentals a trav\u00E9s de nous formats musicals que fomenten el di\u00E0leg intercultural. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A m\u00E9s de gesti\u00F3 de continguts, organitzem concerts, esdeveniments, projeccions i xerrades. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Des del comen\u00E7ament de la nostra activitat hem col\u00B7laborat amb espais, organitzacions i festivals com S\u00F2nar, CCCB, HUB, MUTEK, Convent de Sant Agust\u00ED, Arts Libris, Zumzeig, Miscelanea, Flea Market Bcn, L'Alternativa, FAD, Festival S\u00E2lmon, Independent Label Market, Ameba Barcelona, tupper o Palo Market. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "es@dublab.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " La Rubia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " c/ Ferlandina 29 - 08001 Barcelona (16h-20h) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Col\u00B7laboren: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Agra\u00EFments: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Cr\u00E8dits fotografies inici: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Luis Ochandorena, AISA, Carlos Mart\u00EDnez, AGE Fotostock, Perez Reus, Manel Armengol, COOB 92, Jordi Mestre, Studio Pomes,\nP. Virgili, J. Tod\u00F3, Man Costas, Pau Quesada i Vila, Francisco Onta\u00F1\u00F3n Nu\u00F1ez, Francesc Gom\u00E0, Jordi Trullas, Antonio Lajusticia. Pepe Encinas, Josep Moragues, Paco Elvira, Genin Andrada, Roser Puigdefabregat, Francisco Jos\u00E9 Garc\u00EDa Comaposada, Inma Ravent\u00F3s Moret, Maria Dolors Vinuesa, Helana Mallafr\u00E9, Ferr\u00E1n Freixa i Carlos Carri\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255,255,255, 0.8);\n    display: inline-block;\n    padding: 50px;\n    top: 0;\n    position: absolute;\n    z-index: 1;\n    \n}\n\n.header[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    float: right;\n    margin-left: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: inherit;\n    margin-bottom: 50px;\n    padding-right: 15px;\n}\n\n.collaborators[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    gap: 0px 0px;\n    grid-template-areas:\n        \". . . . . . .\";\n}\n\n.collaborator-image[_ngcontent-%COMP%] {\n        height: 70px;\n        margin-right: 20px;\n    }\n\n.link[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.mahou[_ngcontent-%COMP%] {\n    padding: 0px 10px 0px 10px;\n    margin-right: 40px;\n    margin-left: 8px;\n}\n\n.sonar[_ngcontent-%COMP%] {\n    margin-right: 30px;\n}\n\n.hangar[_ngcontent-%COMP%] {\n    margin-right: 50px;\n    margin-left: 20px;\n}\n\n.discogs[_ngcontent-%COMP%] {\n    margin-right: 40px;\n    margin-left: 5px;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        padding: 1rem;\n    }\n\n    .collaborators[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    img[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        padding: 1rem;\n    }\n\n    .collaborators[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    img[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    [_nghost-%COMP%] {\n        padding: 50px;\n    }\n\n    .collaborators[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    img[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    [_nghost-%COMP%] {\n        padding: 50px;\n    }\n\n    .collaborators[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    img[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    [_nghost-%COMP%] {\n        padding: 50px;\n    }\n\n    .collaborators[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    img[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELHVCQUF1QjtJQUN2QixZQUFZO0lBQ1o7dUJBQ21CO0FBQ3ZCOztBQUVJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7QUFFSjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBLGdCQUFnQjs7QUFDaEIsV0FBVzs7QUFDWDtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsbUJBQW1COztBQUNuQjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsWUFBWTs7QUFDWjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsYUFBYTs7QUFDYjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUEsUUFBUTs7QUFDUjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9pbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBvcGFjaXR5OiAwLjg7ICovXG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2xsYWJvcmF0b3JzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdhcDogMHB4IDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcIi4gLiAuIC4gLiAuIC5cIjtcbn1cblxuICAgIC5jb2xsYWJvcmF0b3ItaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbi5saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1haG91IHtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnNvbmFyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5oYW5nYXIge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmRpc2NvZ3Mge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBCUkVBS1BPSU5UUyAqL1xuLyogTW9iaWxlICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAuY29sbGFib3JhdG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG4vKiBUYWJsZXRzLCBpUGFkcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAuY29sbGFib3JhdG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG4vKiBMYXB0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICB9XG5cbiAgICAuY29sbGFib3JhdG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG4vKiBEZXNrdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgIH1cblxuICAgIC5jb2xsYWJvcmF0b3JzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG59XG5cbi8qIFRWcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgIH1cblxuICAgIC5jb2xsYWJvcmF0b3JzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.css']
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] }]; }, { paddingBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding-bottom.px']
        }] }); })();


/***/ }),

/***/ "YiOJ":
/*!*******************************************************************!*\
  !*** ./src/app/shared/show-thumbnail/show-thumbnail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowThumbnailComponent", function() { return ShowThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/tag.component */ "S2ZO");
/* harmony import */ var _pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/dublab-date.pipe */ "uoaT");






function ShowThumbnailComponent_tag_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag", 4);
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", tag_r1)("padding", 3);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
const _c1 = function (a0) { return { "hover-color": a0 }; };
class ShowThumbnailComponent {
    constructor(router) {
        this.router = router;
        this.mouseOver = false;
    }
    onClick(e) {
        if (!this.showSlug || !this.profileSlug) {
            this.generateSlugs();
        }
        this.router.navigate(['/shows/' + this.profileSlug + '/' + this.showSlug]);
    }
    onHover(e) {
        this.onMouseOver();
    }
    onLeave(e) {
        this.onMouseLeave();
    }
    ngOnInit() {
    }
    generateSlugs() {
        this.profileSlug = this.profile.slug;
        this.showSlug = this.show.slug.replace(this.profileSlug + '-', '');
    }
    onMouseOver() {
        this.mouseOver = true;
    }
    onMouseLeave() {
        this.mouseOver = false;
    }
}
ShowThumbnailComponent.ɵfac = function ShowThumbnailComponent_Factory(t) { return new (t || ShowThumbnailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ShowThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowThumbnailComponent, selectors: [["show-thumbnail"]], hostBindings: function ShowThumbnailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowThumbnailComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("mouseover", function ShowThumbnailComponent_mouseover_HostBindingHandler($event) { return ctx.onHover($event); })("mouseleave", function ShowThumbnailComponent_mouseleave_HostBindingHandler($event) { return ctx.onLeave($event); });
    } }, inputs: { show: "show", profile: "profile" }, decls: 6, vars: 11, consts: [[1, "photo", 3, "ngStyle"], [1, "name", 3, "ngClass"], [1, "tags"], [3, "tag", "padding", 4, "ngFor", "ngForOf"], [3, "tag", "padding"]], template: function ShowThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "dublabDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowThumbnailComponent_tag_5_Template, 1, 2, "tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + ctx.profile.picture + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.mouseOver));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.profile.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.show.date), ")\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.show.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TagComponent"]], pipes: [_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_4__["DublabDatePipe"]], styles: ["[_nghost-%COMP%] {\n  height: 50px;\n  cursor: pointer;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-bottom: 20px;\n\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 0px;\n  grid-template-areas:\n    \"photo name\"\n    \"photo tags\";\n}\n\n.photo[_ngcontent-%COMP%] {\n  grid-area: photo;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  grid-area: name;\n  padding-left: 10px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  grid-area: tags;\n}\n\n.hover-color[_ngcontent-%COMP%] {\n  color: var(--brand-purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nob3ctdGh1bWJuYWlsL3Nob3ctdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaOztnQkFFYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaG93LXRodW1ibmFpbC9zaG93LXRodW1ibmFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiAwcHggMHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwicGhvdG8gbmFtZVwiXG4gICAgXCJwaG90byB0YWdzXCI7XG59XG5cbi5waG90byB7XG4gIGdyaWQtYXJlYTogcGhvdG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZ3JpZC1hcmVhOiBuYW1lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4udGFncyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZ3JpZC1hcmVhOiB0YWdzO1xufVxuXG4uaG92ZXItY29sb3Ige1xuICBjb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'show-thumbnail',
                templateUrl: './show-thumbnail.component.html',
                styleUrls: ['./show-thumbnail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], onHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseover', ['$event']]
        }], onLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/ca */ "hDpI");
/* harmony import */ var _angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./streamer/streamer.component */ "pLHI");
/* harmony import */ var _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/carousel/carousel.component */ "P1kN");
/* harmony import */ var src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/player.service */ "dY/6");
/* harmony import */ var _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/drop-down/drop-down.component */ "7w7q");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/pipes/dublab-date.pipe */ "uoaT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/decode.pipe */ "EVp5");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _profiles_profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profiles/profile-item/profile-item.component */ "E0II");
/* harmony import */ var _bsides_bside_item_bside_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bsides/bside-item/bside-item.component */ "6nFz");
/* harmony import */ var _bsides_bsides_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bsides/bsides.component */ "MQ+J");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profiles/profiles.component */ "8EDu");
/* harmony import */ var _profiles_profiles_wrapper_profiles_wrapper_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profiles/profiles-wrapper/profiles-wrapper.component */ "Um/Z");
/* harmony import */ var _profiles_profiles_wrapper_profile_thumbnail_profile_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profiles/profiles-wrapper/profile-thumbnail/profile-thumbnail.component */ "kxae");
/* harmony import */ var _bsides_bsides_wrapper_bsides_wrapper_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bsides/bsides-wrapper/bsides-wrapper.component */ "w0N/");
/* harmony import */ var _bsides_bsides_wrapper_bside_thumbnail_bside_thumbnail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bsides/bsides-wrapper/bside-thumbnail/bside-thumbnail.component */ "2ymE");
/* harmony import */ var _shared_mixcloud_player_mixcloud_player_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/mixcloud-player/mixcloud-player.component */ "rjeW");
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/pipes/safe.pipe */ "ITC6");
/* harmony import */ var _profiles_show_show_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profiles/show/show.component */ "H0iG");
/* harmony import */ var _shared_directives_recreate_view_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/directives/recreate-view.directive */ "hh0M");
/* harmony import */ var _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/tag/tag.component */ "S2ZO");
/* harmony import */ var _shared_show_thumbnail_show_thumbnail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/show-thumbnail/show-thumbnail.component */ "YiOJ");
/* harmony import */ var _mobile_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mobile/mobile-menu/mobile-menu.component */ "1yOA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



































Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_4___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "ca-ES" },
        _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
        _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_8__["StreamerComponent"],
        _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"],
        _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"],
        _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_13__["DublabDatePipe"],
        _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_15__["DecodePipe"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
        _profiles_profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_17__["ProfileItemComponent"],
        _bsides_bside_item_bside_item_component__WEBPACK_IMPORTED_MODULE_18__["BsideItemComponent"],
        _bsides_bsides_component__WEBPACK_IMPORTED_MODULE_19__["BsidesComponent"],
        _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_20__["ProfilesComponent"],
        _profiles_profiles_wrapper_profiles_wrapper_component__WEBPACK_IMPORTED_MODULE_21__["ProfilesWrapperComponent"],
        _profiles_profiles_wrapper_profile_thumbnail_profile_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__["ProfileThumbnailComponent"],
        _bsides_bsides_wrapper_bsides_wrapper_component__WEBPACK_IMPORTED_MODULE_23__["BsidesWrapperComponent"],
        _bsides_bsides_wrapper_bside_thumbnail_bside_thumbnail_component__WEBPACK_IMPORTED_MODULE_24__["BsideThumbnailComponent"],
        _shared_mixcloud_player_mixcloud_player_component__WEBPACK_IMPORTED_MODULE_25__["MixcloudPlayerComponent"],
        _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"],
        _profiles_show_show_component__WEBPACK_IMPORTED_MODULE_27__["ShowComponent"],
        _shared_directives_recreate_view_directive__WEBPACK_IMPORTED_MODULE_28__["RecreateViewDirective"],
        _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_29__["TagComponent"],
        _shared_show_thumbnail_show_thumbnail_component__WEBPACK_IMPORTED_MODULE_30__["ShowThumbnailComponent"],
        _mobile_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_31__["MobileMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                    _streamer_streamer_component__WEBPACK_IMPORTED_MODULE_8__["StreamerComponent"],
                    _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"],
                    _shared_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"],
                    _shared_pipes_dublab_date_pipe__WEBPACK_IMPORTED_MODULE_13__["DublabDatePipe"],
                    _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_15__["DecodePipe"],
                    _info_info_component__WEBPACK_IMPORTED_MODULE_16__["InfoComponent"],
                    _profiles_profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_17__["ProfileItemComponent"],
                    _bsides_bside_item_bside_item_component__WEBPACK_IMPORTED_MODULE_18__["BsideItemComponent"],
                    _bsides_bsides_component__WEBPACK_IMPORTED_MODULE_19__["BsidesComponent"],
                    _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_20__["ProfilesComponent"],
                    _profiles_profiles_wrapper_profiles_wrapper_component__WEBPACK_IMPORTED_MODULE_21__["ProfilesWrapperComponent"],
                    _profiles_profiles_wrapper_profile_thumbnail_profile_thumbnail_component__WEBPACK_IMPORTED_MODULE_22__["ProfileThumbnailComponent"],
                    _bsides_bsides_wrapper_bsides_wrapper_component__WEBPACK_IMPORTED_MODULE_23__["BsidesWrapperComponent"],
                    _bsides_bsides_wrapper_bside_thumbnail_bside_thumbnail_component__WEBPACK_IMPORTED_MODULE_24__["BsideThumbnailComponent"],
                    _shared_mixcloud_player_mixcloud_player_component__WEBPACK_IMPORTED_MODULE_25__["MixcloudPlayerComponent"],
                    _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"],
                    _profiles_show_show_component__WEBPACK_IMPORTED_MODULE_27__["ShowComponent"],
                    _shared_directives_recreate_view_directive__WEBPACK_IMPORTED_MODULE_28__["RecreateViewDirective"],
                    _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_29__["TagComponent"],
                    _shared_show_thumbnail_show_thumbnail_component__WEBPACK_IMPORTED_MODULE_30__["ShowThumbnailComponent"],
                    _mobile_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_31__["MobileMenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"]
                ],
                providers: [
                    src_app_shared_services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "ca-ES" },
                    _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dY/6":
/*!***************************************************!*\
  !*** ./src/app/shared/services/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");




class PlayerService {
    constructor() {
        this.hasTunedIn = false;
        this.playing = false;
        this.mixPlaying = false;
        this.mix$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dublab = new Audio(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].streamUrl);
    }
    toggleTuneIn() {
        if (!this.hasTunedIn)
            this.hasTunedIn = true;
        if (this.playing) {
            this.stop();
        }
        else {
            this.play();
        }
    }
    tuneIn() {
        if (!this.hasTunedIn)
            this.toggleTuneIn();
    }
    play() {
        if (this.dublab.muted) {
            this.dublab.muted = false;
            this.playing = true;
        }
        else {
            this.dublab.play();
            this.playing = true;
        }
    }
    stop() {
        this.dublab.muted = true;
        this.playing = false;
    }
    changeVolume(volume) {
        this.currentVolume = volume;
        this.dublab.volume = volume;
    }
    playMix(mixUrl) {
        this.stop();
        this.mix$.next(mixUrl);
        this.mixPlaying = true;
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

/***/ "hh0M":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/recreate-view.directive.ts ***!
  \**************************************************************/
/*! exports provided: RecreateViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecreateViewDirective", function() { return RecreateViewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RecreateViewDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    ngOnChanges(changes) {
        if (changes.key) {
            if (this.viewRef) {
                this.destroyView();
            }
            this.createView();
        }
    }
    createView() {
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
    }
    destroyView() {
        this.viewRef.destroy();
        this.viewRef = null;
    }
}
RecreateViewDirective.ɵfac = function RecreateViewDirective_Factory(t) { return new (t || RecreateViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
RecreateViewDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RecreateViewDirective, selectors: [["", "wRecreateViewKey", ""]], inputs: { key: ["wRecreateViewKey", "key"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecreateViewDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[wRecreateViewKey]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['wRecreateViewKey']
        }] }); })();


/***/ }),

/***/ "iUwr":
/*!****************************************************************!*\
  !*** ./src/app/shared/data/sonarplusd-2020/youtube-links.json ***!
  \****************************************************************/
/*! exports provided: sonarplusd--2020--daniel-2000, sonarplusd--2020--t-modet, sonarplusd--2020--nueen, sonarplusd--2020--cee-shepherds, sonarplusd--2020--ivy-barkakati, sonarplusd--2020--anti-drone-squad, sonarplusd--2020--nara-is-neus, sonarplusd--2020--ylia, sonarplusd--2020--dani-blue, sonarplusd--2020--people-you-may-know, sonarplusd--2020--huma, sonarplusd--2020--mbodj, sonarplusd--2020--marcal-xirau, sonarplusd--2020--shelly, sonarplusd--2020--cat-gabal, sonarplusd--2020--bill-baggins, sonarplusd--2020--rumbler, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sonarplusd--2020--daniel-2000\":\"https://youtu.be/yp1H4V1vLmI\",\"sonarplusd--2020--t-modet\":\"https://youtu.be/tqFFD1WA5rQ\",\"sonarplusd--2020--nueen\":\"https://youtu.be/58CQ3GI11Yk\",\"sonarplusd--2020--cee-shepherds\":\"https://youtu.be/xpxR1L3C560\",\"sonarplusd--2020--ivy-barkakati\":\"https://youtu.be/MtQW5ofaZIA\",\"sonarplusd--2020--anti-drone-squad\":\"https://youtu.be/9PVyi3b9PWY\",\"sonarplusd--2020--nara-is-neus\":\"https://youtu.be/lo0kYbWcQag\",\"sonarplusd--2020--ylia\":\"https://youtu.be/-BqEsqrd9fs\",\"sonarplusd--2020--dani-blue\":\"https://youtu.be/SyePWAWVT3I\",\"sonarplusd--2020--people-you-may-know\":\"https://youtu.be/IF8NjSTBI0Y\",\"sonarplusd--2020--huma\":\"https://youtu.be/248rSbYSVtM\",\"sonarplusd--2020--mbodj\":\"https://youtu.be/qXuS1MMf2CA\",\"sonarplusd--2020--marcal-xirau\":\"https://youtu.be/IsBkhtCuW5s\",\"sonarplusd--2020--shelly\":\"https://youtu.be/IpUOu4MMkSg\",\"sonarplusd--2020--cat-gabal\":\"https://youtu.be/Wh0x2LIYxMI\",\"sonarplusd--2020--bill-baggins\":\"https://youtu.be/MJhaiIMlm8U\",\"sonarplusd--2020--rumbler\":\"https://youtu.be/SM0ZF_JN-o0\"}");

/***/ }),

/***/ "iiaH":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time.service */ "jPFz");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper.service */ "sIil");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class DataService {
    constructor(http, timeService, helperService, router) {
        this.http = http;
        this.timeService = timeService;
        this.helperService = helperService;
        this.router = router;
        this.airtimeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].airtimeApiUrl;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
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
        return { display: '', hour: 0 };
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
        return { display: '', hour: 0 };
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
                    slug: show.url,
                    hour: this.getHourFromDate(show.starts)
                };
                menuItems.push(currentMenuItem);
            });
            this.todaysSchedule = menuItems;
        });
    }
    getProfile(slug) {
        return this.http.get(`${this.apiUrl}/profiles/${slug}/`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => this.router.navigate(['/'])));
    }
    getShow(slug) {
        return this.http.get(`${this.apiUrl}/shows/${slug}/`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => this.router.navigate(['/'])));
    }
    getProfiles(page) {
        return this.http.get(`${this.apiUrl}/profiles/?page=${page}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.helperService.numberOfProfiles = res.count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.results));
    }
    getBside(slug) {
        return this.http.get(`${this.apiUrl}/b-sides/${slug}/`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => this.router.navigate(['/'])));
    }
    getBsides(page) {
        return this.http.get(`${this.apiUrl}/b-sides/?page=${page}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => this.helperService.numberOfBsides = res.count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res.results));
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
        const currentHour = new Date(date.toString().replace(/\s/, 'T')).getHours();
        if (currentHour < 10)
            return '0' + currentHour.toString();
        return currentHour.toString();
    }
    getWeekInfo() {
        return this.http.get(`${this.airtimeUrl}/week-info`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"] }, { type: _helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "jPFz":
/*!*************************************************!*\
  !*** ./src/app/shared/services/time.service.ts ***!
  \*************************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class TimeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].airtimeApiUrl;
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
            const airtimeTime = new Date(liveInfo.schedulerTime.split('-').join('/'));
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
        const dayName = new Date(date).toLocaleDateString("en-EN", { weekday: 'long' }).toLowerCase();
        return dayName;
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

/***/ "kxae":
/*!********************************************************************************************!*\
  !*** ./src/app/profiles/profiles-wrapper/profile-thumbnail/profile-thumbnail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProfileThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileThumbnailComponent", function() { return ProfileThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/tag/tag.component */ "S2ZO");





function ProfileThumbnailComponent_tag_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tag", 4);
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", tag_r1);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class ProfileThumbnailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileThumbnailComponent.ɵfac = function ProfileThumbnailComponent_Factory(t) { return new (t || ProfileThumbnailComponent)(); };
ProfileThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileThumbnailComponent, selectors: [["profile-thumbnail"]], inputs: { show: "show" }, decls: 5, vars: 6, consts: [[1, "photo", 3, "ngStyle", "routerLink"], [1, "name"], [1, "tags"], ["class", "tag", 3, "tag", 4, "ngFor", "ngForOf"], [1, "tag", 3, "tag"]], template: function ProfileThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileThumbnailComponent_tag_4_Template, 1, 1, "tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.show.slug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + ctx.show.picture + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.show.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.show.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TagComponent"]], styles: ["[_nghost-%COMP%] {\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: 1.8fr 0.2fr;\n    gap: 0px 0px;\n    grid-template-areas:\n      \"photo photo\"\n      \"name tags\";\n}\n\n.no-padding-top[_ngcontent-%COMP%] {\n    padding-top: 0;\n}\n\n.photo[_ngcontent-%COMP%] {\n    cursor: pointer;\n    grid-area: photo;\n    width: 100%;\n    height: 29vh;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    margin-bottom: 10px;\n    border-radius: 3px;\n}\n\n.name[_ngcontent-%COMP%] {\n    padding-top: 1px;\n    grid-area: name;\n    font-size: 1.3rem;\n    margin-right: 7px;\n}\n\n.tags[_ngcontent-%COMP%] { grid-area: tags; float: right; }\n\n.tag[_ngcontent-%COMP%] {\n    margin: 0px 0px 6px 6px;\n    white-space: nowrap;\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZXMtd3JhcHBlci9wcm9maWxlLXRodW1ibmFpbC9wcm9maWxlLXRodW1ibmFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsWUFBWTtJQUNaOztpQkFFYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQSxRQUFRLGVBQWUsRUFBRSxZQUFZLEVBQUU7O0FBRXZDO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZXMtd3JhcHBlci9wcm9maWxlLXRodW1ibmFpbC9wcm9maWxlLXRodW1ibmFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjhmciAwLjJmcjtcbiAgICBnYXA6IDBweCAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwicGhvdG8gcGhvdG9cIlxuICAgICAgXCJuYW1lIHRhZ3NcIjtcbn1cblxuLm5vLXBhZGRpbmctdG9wIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnBob3RvIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZ3JpZC1hcmVhOiBwaG90bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI5dmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbiAgICBncmlkLWFyZWE6IG5hbWU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4udGFncyB7IGdyaWQtYXJlYTogdGFnczsgZmxvYXQ6IHJpZ2h0OyB9XG5cbi50YWcge1xuICAgIG1hcmdpbjogMHB4IDBweCA2cHggNnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile-thumbnail',
                templateUrl: './profile-thumbnail.component.html',
                styleUrls: ['./profile-thumbnail.component.css'],
            }]
    }], function () { return []; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ngAm":
/*!************************************************!*\
  !*** ./src/app/shared/services/seo.service.ts ***!
  \************************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SeoService {
    constructor(meta) {
        this.meta = meta;
    }
    generateTags(config) {
        config = Object.assign({ title: 'dublab bcn', description: 'dublab bcn: ràdio online comunitària sense ànim de lucre. Un altaveu de propostes innovadores i experimentals a través de nous formats musicals que fomenten el diàleg intercultural.   ', image: 'https://dublab.es/assets/dublab-social.png', slug: '' }, config);
        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ itemprop: 'name', content: config.title });
        this.meta.updateTag({ itemprop: 'description', content: config.description });
        this.meta.updateTag({ itemprop: 'image', content: config.image });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:site', content: '@dublabes' });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'dublab bcn' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: `https://dublab.es/${config.slug}` });
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "o8rK":
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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

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

/***/ "pLHI":
/*!************************************************!*\
  !*** ./src/app/streamer/streamer.component.ts ***!
  \************************************************/
/*! exports provided: StreamerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamerComponent", function() { return StreamerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_streamer_marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/streamer/marquee */ "AwMC");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/player.service */ "dY/6");
/* harmony import */ var _shared_services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/time.service */ "jPFz");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/data.service */ "iiaH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/decode.pipe */ "EVp5");








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
        const dateString = date.toString();
        const dateChars = dateString.split(' ');
        if (!dateChars.includes('Invalid')) {
            this.hour = dateChars[4].substr(0, 5);
        }
    }
}
StreamerComponent.ɵfac = function StreamerComponent_Factory(t) { return new (t || StreamerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
StreamerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StreamerComponent, selectors: [["streamer"]], decls: 48, vars: 21, consts: [["id", "purple-text-section", 1, "purple-section", "streamer-item"], [1, "play", "streamer-item"], ["class", "material-icons play-icon pointer", 3, "click", 4, "ngIf", "ngIfElse"], ["paused", ""], [1, "on-air", "streamer-item"], [1, "shadow-left"], [1, "shadow-right"], ["id", "js-slideshow", 1, "slideshow", "js-slideshow"], [1, "slide"], [1, "signal"], [1, "signal", "next"], ["scrollamount", "1", "scrolldelay", "15", "truespeed", "truespeed", 1, "mob-marquee"], [1, "mob-signal"], [1, "clock", "streamer-item"], [1, "clock-text"], [1, "material-icons", "play-icon", "pointer", 3, "click"]], template: function StreamerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " a continuaci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " en directe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " a continuaci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "marquee", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " en directe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " a continuaci\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playing)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx.currentShowName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx.nextShowName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 13, ctx.currentShowName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 15, ctx.nextShowName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 17, ctx.currentShowName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" :: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 19, ctx.nextShowName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hour);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_shared_pipes_decode_pipe__WEBPACK_IMPORTED_MODULE_6__["DecodePipe"]], styles: ["@media (min-width: 700px) {\n  [_nghost-%COMP%] {\n    background-color: white;\n    color: black;\n\n    height: var(--menu-height);\n    \n\n    margin-top: -var(--menu-height);\n    padding: 0 !important;\n    width: 100%;\n\n    position: absolute;\n    bottom: 0;\n\n    align-items: center;\n\n    display: grid;\n    grid-template-columns: 19rem 45px auto 6rem;\n    grid-template-rows: 1fr;\n    grid-gap: 0px;\n  }\n\n  .purple-section[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding: var(---menu-padding);\n    background-color: var(--brand-purple);\n    color: white;\n  }\n\n  .slideshow[_ngcontent-%COMP%] {\n    width: 100%;\n    cursor: grab;\n  }\n\n  .slide[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    height: var(--menu-height);\n    color: black;\n    place-items: center;\n    display: inline-flex;\n  }\n\n  .mob-marquee[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media (max-width: 700px) {\n  [_nghost-%COMP%] {\n    background-color: white;\n    color: black;\n\n    height: var(--menu-height);\n    margin-top: -var(--menu-height);\n    padding: 0 !important;\n    width: 100%;\n\n    position: absolute;\n    bottom: 0;\n\n    align-items: center;\n\n    display: grid;\n    grid-template-columns: 40px 1fr 5.5rem;\n    grid-template-rows: 1fr;\n    grid-gap: 0px;\n  }\n\n  .slideshow[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  #purple-text-section[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n.signal[_ngcontent-%COMP%] {\n  font-weight: 100;\n  margin-right: 5px;\n  \n}\n\n.mob-signal[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n\n.streamer-item[_ngcontent-%COMP%] {\n  font-size: 25px;\n  height: 100%;\n  display: grid;\n  place-items: center;\n\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.on-air[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  position: relative;\n}\n\n.play-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.clock[_ngcontent-%COMP%] {\n  background-color: var(--brand-purple);\n  color: white;\n}\n\n.clock-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n.current-language[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.next[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.marquee-spacer[_ngcontent-%COMP%] {\n  color: white;\n}\n\n\n\n.shadow-left[_ngcontent-%COMP%] {\n  box-shadow: inset 10px 0px 10px 0px white;\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: revert;\n  place-items: center;\n  width: 50px;\n}\n\n.shadow-right[_ngcontent-%COMP%] {\n  box-shadow: inset 10px 0px 10px 0px white;\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: revert;\n  place-items: center;\n  width: 50px;\n  transform: rotate(180deg);\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.next[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyZWFtZXIvc3RyZWFtZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosMEJBQTBCO0lBQzFCLHNCQUFzQjs7SUFFdEIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixXQUFXOztJQUVYLGtCQUFrQjtJQUNsQixTQUFTOztJQUVULG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZOztJQUVaLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLFNBQVM7O0lBRVQsbUJBQW1COztJQUVuQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVFO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxZQUFZOztBQUVaO0VBQ0UseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc3RyZWFtZXIvc3RyZWFtZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICA6aG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuXG4gICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XG4gICAgLyogbWluLWhlaWdodDogMjRweDsgKi9cblxuICAgIG1hcmdpbi10b3A6IC12YXIoLS1tZW51LWhlaWdodCk7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTlyZW0gNDVweCBhdXRvIDZyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1nYXA6IDBweDtcbiAgfVxuXG4gIC5wdXJwbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLS1tZW51LXBhZGRpbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnNsaWRlc2hvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBncmFiO1xuICB9XG5cbiAgLnNsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiB2YXIoLS1tZW51LWhlaWdodCk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cblxuICAubW9iLW1hcnF1ZWUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcblxuICAgIGhlaWdodDogdmFyKC0tbWVudS1oZWlnaHQpO1xuICAgIG1hcmdpbi10b3A6IC12YXIoLS1tZW51LWhlaWdodCk7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgNS41cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtZ2FwOiAwcHg7XG4gIH1cblxuICAuc2xpZGVzaG93IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjcHVycGxlLXRleHQtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zaWduYWwge1xuICBmb250LXdlaWdodDogMTAwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgLyogY29sb3I6IHZhcigtLWJyYW5kLXB1cnBsZSk7ICovXG59XG5cbi5tb2Itc2lnbmFsIHtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uc3RyZWFtZXItaXRlbSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5vbi1haXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbGF5LWljb24ge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmNsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHVycGxlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4gIC5jbG9jay10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuLmN1cnJlbnQtbGFuZ3VhZ2Uge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm5leHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXJxdWVlLXNwYWNlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU2hhZG93cyAqL1xuXG4uc2hhZG93LWxlZnQge1xuICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDBweCAxMHB4IDBweCB3aGl0ZTtcbiAgei1pbmRleDogNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogcmV2ZXJ0O1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbn1cblxuLnNoYWRvdy1yaWdodCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMHB4IDEwcHggMHB4IHdoaXRlO1xuICB6LWluZGV4OiA1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogcmV2ZXJ0O1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmRvdCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StreamerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'streamer',
                templateUrl: './streamer.component.html',
                styleUrls: ['./streamer.component.css'],
            }]
    }], function () { return [{ type: _shared_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }, { type: _shared_services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "rjeW":
/*!*********************************************************************!*\
  !*** ./src/app/shared/mixcloud-player/mixcloud-player.component.ts ***!
  \*********************************************************************/
/*! exports provided: MixcloudPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixcloudPlayerComponent", function() { return MixcloudPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/safe.pipe */ "ITC6");




function MixcloudPlayerComponent_iframe_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
// import { Mixcloud } from 'src/assets/widgetApi';
class MixcloudPlayerComponent {
    // @ViewChild(Mixcloud) iframe: MixcloudPlayerComponent;
    constructor() {
    }
    ngOnInit() {
        if (this.mix && this.mix.includes('https://www.mixcloud.com/')) {
            this.mix = this.mix.replace('https://www.mixcloud.com/', '');
            this.url = 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&autoplay=1&feed=/' + this.mix;
        }
    }
}
MixcloudPlayerComponent.ɵfac = function MixcloudPlayerComponent_Factory(t) { return new (t || MixcloudPlayerComponent)(); };
MixcloudPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MixcloudPlayerComponent, selectors: [["mixcloud-player"]], inputs: { mix: "mix" }, decls: 1, vars: 1, consts: [["width", "100%", "height", "60", "frameborder", "0", "allow", "autoplay", 3, "src", 4, "ngIf"], ["width", "100%", "height", "60", "frameborder", "0", "allow", "autoplay", 3, "src"]], template: function MixcloudPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MixcloudPlayerComponent_iframe_0_Template, 2, 3, "iframe", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"]], styles: ["[_nghost-%COMP%] {\n    z-index: 1000;\n    position: absolute;\n    width: 100%;\n    bottom: 54px;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        bottom: 61px;\n        width: 101%;\n    }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        bottom: 61px;\n        width: 101%;\n    }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n\n}\n\n\n\n@media screen and (min-width: 1201px) {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21peGNsb3VkLXBsYXllci9taXhjbG91ZC1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsZ0JBQWdCOztBQUNmLFdBQVc7O0FBQ1g7SUFDRztRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7QUFDSjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0FBQ0o7O0FBRUEsWUFBWTs7QUFDWjs7QUFFQTs7QUFFQSxhQUFhOztBQUNiOztBQUVBOztBQUVBLFFBQVE7O0FBQ1I7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWl4Y2xvdWQtcGxheWVyL21peGNsb3VkLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogNTRweDtcbn1cblxuLyogQlJFQUtQT0lOVFMgKi9cbiAvKiBNb2JpbGUgKi9cbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgYm90dG9tOiA2MXB4O1xuICAgICAgICB3aWR0aDogMTAxJTtcbiAgICB9XG59XG5cbi8qIFRhYmxldHMsIGlQYWRzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBib3R0b206IDYxcHg7XG4gICAgICAgIHdpZHRoOiAxMDElO1xuICAgIH1cbn1cblxuLyogTGFwdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxufVxuXG4vKiBEZXNrdG9wcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG5cbn1cblxuLyogVFZzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MixcloudPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mixcloud-player',
                templateUrl: './mixcloud-player.component.html',
                styleUrls: ['./mixcloud-player.component.css']
            }]
    }], function () { return []; }, { mix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sIil":
/*!***************************************************!*\
  !*** ./src/app/shared/services/helper.service.ts ***!
  \***************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ "dY/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class HelperService {
    constructor(playerService, router, location) {
        this.playerService = playerService;
        this.router = router;
        this.location = location;
        this.atHomePage = true;
        this.numberOfProfiles = 64;
        this.numberOfBsides = 20;
        this.menuHeight = 28;
        this.previousUrl = this.location.path() || '/';
        this.navigationHistory = [];
        this.navigationPointer = 0;
    }
    get isHomePage() {
        return this.atHomePage;
    }
    get numberOfProfileWrappers() {
        return Math.ceil(this.numberOfProfiles / 8);
    }
    get numberOfBsideWrappers() {
        return Math.ceil(this.numberOfBsides / 8);
    }
    get paddingBottom() {
        if (this.playerService.mixPlaying) {
            return (this.menuHeight * 2) + 80;
        }
        else {
            return this.menuHeight * 2;
        }
    }
    goBack() {
        const lastPage = this.navigationHistory[this.navigationPointer];
        this.navigationPointer++;
        this.router.navigateByUrl(this.previousUrl);
        // if (this.previousUrl) {
        //   this.router.navigateByUrl(this.previousUrl);
        // } else {
        //   this.router.navigate(['/']);
        //   this.atHomePage = true;
        // }
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "uoaT":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/dublab-date.pipe.ts ***!
  \**************************************************/
/*! exports provided: DublabDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DublabDatePipe", function() { return DublabDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



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

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bsides_bside_item_bside_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bsides/bside-item/bside-item.component */ "6nFz");
/* harmony import */ var _bsides_bsides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bsides/bsides.component */ "MQ+J");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _profiles_profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles/profile-item/profile-item.component */ "E0II");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profiles/profiles.component */ "8EDu");
/* harmony import */ var _custom_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-route-reuse-strategy */ "J0wE");
/* harmony import */ var _profiles_show_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profiles/show/show.component */ "H0iG");
/* harmony import */ var _mobile_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile/mobile-menu/mobile-menu.component */ "1yOA");












const routes = [
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"] },
    // Profiles
    { path: 'shows', component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_6__["ProfilesComponent"], data: { shouldReuse: true } },
    { path: 'shows/:showSlug', component: _profiles_profile_item_profile_item_component__WEBPACK_IMPORTED_MODULE_5__["ProfileItemComponent"] },
    // Shows
    { path: 'shows/:showSlug/:date', component: _profiles_show_show_component__WEBPACK_IMPORTED_MODULE_8__["ShowComponent"] },
    // B-Sides
    { path: 'b-sides', component: _bsides_bsides_component__WEBPACK_IMPORTED_MODULE_3__["BsidesComponent"], data: { shouldReuse: true } },
    // Sonar 2020
    { path: 'b-sides/:bSide/:year/:artist', component: _bsides_bside_item_bside_item_component__WEBPACK_IMPORTED_MODULE_2__["BsideItemComponent"] },
    { path: 'menu', component: _mobile_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_9__["MobileMenuComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"], useClass: _custom_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_7__["CustomRouteReuseStategy"] },
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                providers: [
                    { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"], useClass: _custom_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_7__["CustomRouteReuseStategy"] },
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w0N/":
/*!*******************************************************************!*\
  !*** ./src/app/bsides/bsides-wrapper/bsides-wrapper.component.ts ***!
  \*******************************************************************/
/*! exports provided: BsidesWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsidesWrapperComponent", function() { return BsidesWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/data.service */ "iiaH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bside_thumbnail_bside_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bside-thumbnail/bside-thumbnail.component */ "2ymE");





function BsidesWrapperComponent_ng_container_0_div_1_bside_thumbnail_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bside-thumbnail", 3);
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx_r4.profiles[i_r3]);
} }
function BsidesWrapperComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BsidesWrapperComponent_ng_container_0_div_1_bside_thumbnail_1_Template, 1, 1, "bside-thumbnail", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("show-", i_r3, " show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.profiles[i_r3]);
} }
function BsidesWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BsidesWrapperComponent_ng_container_0_div_1_Template, 2, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.profiles);
} }
class BsidesWrapperComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.profilesSubscription =
            this.dataService.getBsides(this.page)
                .subscribe(profiles => {
                this.profiles = profiles;
            });
    }
    ngOnDestroy() {
        this.profilesSubscription.unsubscribe();
    }
}
BsidesWrapperComponent.ɵfac = function BsidesWrapperComponent_Factory(t) { return new (t || BsidesWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
BsidesWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BsidesWrapperComponent, selectors: [["bsides-wrapper"]], inputs: { page: "page" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [3, "show", 4, "ngIf"], [3, "show"]], template: function BsidesWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BsidesWrapperComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _bside_thumbnail_bside_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__["BsideThumbnailComponent"]], styles: ["[_nghost-%COMP%] {\n    \n    \n    margin-right: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    \n    gap: 0px 0px;\n    grid-template-areas:\n      \"show-8 show-1 show-2 show-3\"\n      \"show-4 show-5 show-6 show-7\";\n}\n\n.show[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.show-1[_ngcontent-%COMP%] { grid-area: show-1; }\n\n.show-2[_ngcontent-%COMP%] { grid-area: show-2; }\n\n.show-3[_ngcontent-%COMP%] { grid-area: show-3; }\n\n.show-4[_ngcontent-%COMP%] { grid-area: show-4; }\n\n.show-5[_ngcontent-%COMP%] { grid-area: show-5; }\n\n.show-6[_ngcontent-%COMP%] { grid-area: show-6; }\n\n.show-7[_ngcontent-%COMP%] { grid-area: show-7; }\n\n.show-8[_ngcontent-%COMP%] { grid-area: show-8; }\n\n.loading-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n\n\n\n\n@media screen and (max-width: 480px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr;\n        grid-template-areas:\n        \"show-8\" \"show-1\"\n        \"show-2\" \"show-3\"\n        \"show-4\" \"show-5\"\n        \"show-6\" \"show-7\";\n        margin-bottom: 0.5rem;\n    }\n\n    .show[_ngcontent-%COMP%] {\n        padding: 0 0 2.2rem 0;\n    }\n}\n\n\n\n@media screen and (min-width: 481px) and (max-width: 768px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1\"\n        \"show-2 show-3\"\n        \"show-4 show-5\"\n        \"show-6 show-7\";\n        grid-gap: 1rem;\n    }\n\n    .show[_ngcontent-%COMP%] {\n        padding: 0 0 2.2rem 0;\n    }\n}\n\n\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1\"\n        \"show-2 show-3\"\n        \"show-4 show-5\"\n        \"show-6 show-7\";\n    }\n}\n\n\n\n@media screen and (min-width: 1025px) and (max-width: 1200px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1 show-2 show-3\"\n        \"show-4 show-5 show-6 show-7\";\n    }\n}\n\n\n\n@media screen and (min-width: 1201px) {\n    [_nghost-%COMP%] {\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n        grid-template-areas:\n        \"show-8 show-1 show-2 show-3\"\n        \"show-4 show-5 show-6 show-7\";\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnNpZGVzL2JzaWRlcy13cmFwcGVyL2JzaWRlcy13cmFwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0lBRWxCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1o7O21DQUUrQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFFN0I7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVDLGdCQUFnQjs7QUFDaEIsV0FBVzs7QUFDWDtJQUNHO1FBQ0ksMEJBQTBCO1FBQzFCOzs7O3lCQUlpQjtRQUNqQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0k7UUFDSSw4QkFBOEI7UUFDOUI7Ozs7dUJBSWU7UUFDZixjQUFjO0lBQ2xCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUEsWUFBWTs7QUFDWjtJQUNJO1FBQ0ksOEJBQThCO1FBQzlCOzs7O3VCQUllO0lBQ25CO0FBQ0o7O0FBRUEsYUFBYTs7QUFDYjtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDOztxQ0FFNkI7SUFDakM7QUFDSjs7QUFFQSxRQUFROztBQUNSO0lBQ0k7UUFDSSxzQ0FBc0M7UUFDdEM7O3FDQUU2QjtJQUNqQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvYnNpZGVzL2JzaWRlcy13cmFwcGVyL2JzaWRlcy13cmFwcGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgKi9cbiAgICBnYXA6IDBweCAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwic2hvdy04IHNob3ctMSBzaG93LTIgc2hvdy0zXCJcbiAgICAgIFwic2hvdy00IHNob3ctNSBzaG93LTYgc2hvdy03XCI7XG59XG5cbi5zaG93IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2hvdy0xIHsgZ3JpZC1hcmVhOiBzaG93LTE7IH1cbi5zaG93LTIgeyBncmlkLWFyZWE6IHNob3ctMjsgfVxuLnNob3ctMyB7IGdyaWQtYXJlYTogc2hvdy0zOyB9XG4uc2hvdy00IHsgZ3JpZC1hcmVhOiBzaG93LTQ7IH1cbi5zaG93LTUgeyBncmlkLWFyZWE6IHNob3ctNTsgfVxuLnNob3ctNiB7IGdyaWQtYXJlYTogc2hvdy02OyB9XG4uc2hvdy03IHsgZ3JpZC1hcmVhOiBzaG93LTc7IH1cbi5zaG93LTggeyBncmlkLWFyZWE6IHNob3ctODsgfVxuXG4ubG9hZGluZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiAvKiBCUkVBS1BPSU5UUyAqL1xuIC8qIE1vYmlsZSAqL1xuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgOmhvc3Qge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaG93LThcIiBcInNob3ctMVwiXG4gICAgICAgIFwic2hvdy0yXCIgXCJzaG93LTNcIlxuICAgICAgICBcInNob3ctNFwiIFwic2hvdy01XCJcbiAgICAgICAgXCJzaG93LTZcIiBcInNob3ctN1wiO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMi4ycmVtIDA7XG4gICAgfVxufVxuXG4vKiBUYWJsZXRzLCBpUGFkcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNob3ctOCBzaG93LTFcIlxuICAgICAgICBcInNob3ctMiBzaG93LTNcIlxuICAgICAgICBcInNob3ctNCBzaG93LTVcIlxuICAgICAgICBcInNob3ctNiBzaG93LTdcIjtcbiAgICAgICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICBwYWRkaW5nOiAwIDAgMi4ycmVtIDA7XG4gICAgfVxufVxuXG4vKiBMYXB0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNob3ctOCBzaG93LTFcIlxuICAgICAgICBcInNob3ctMiBzaG93LTNcIlxuICAgICAgICBcInNob3ctNCBzaG93LTVcIlxuICAgICAgICBcInNob3ctNiBzaG93LTdcIjtcbiAgICB9XG59XG5cbi8qIERlc2t0b3BzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICA6aG9zdCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNob3ctOCBzaG93LTEgc2hvdy0yIHNob3ctM1wiXG4gICAgICAgIFwic2hvdy00IHNob3ctNSBzaG93LTYgc2hvdy03XCI7XG4gICAgfVxufVxuXG4vKiBUVnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDFweCkge1xuICAgIDpob3N0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwic2hvdy04IHNob3ctMSBzaG93LTIgc2hvdy0zXCJcbiAgICAgICAgXCJzaG93LTQgc2hvdy01IHNob3ctNiBzaG93LTdcIjtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsidesWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bsides-wrapper',
                templateUrl: './bsides-wrapper.component.html',
                styleUrls: ['./bsides-wrapper.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "wLwr":
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
                headline: "Manifestació LGTB - Man Costas",
                src: "assets/collections/barcelona92/54_manifa_gay_man_costas.jpg"
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
            },
            {
                headline: "Pescadors",
                src: "assets/collections/barcelona92/80_pescadors.jpg"
            },
            {
                headline: "Baixells",
                src: "assets/collections/barcelona92/81_baixells.jpg"
            },
            {
                headline: "Port",
                src: "assets/collections/barcelona92/82_port.jpg"
            },
            {
                headline: "La Ciutadella",
                src: "assets/collections/barcelona92/83_la_ciutadella.jpg"
            },
            {
                headline: "Bar",
                src: "assets/collections/barcelona92/84_bar.jpg"
            },
            {
                headline: "Turó Parc",
                src: "assets/collections/barcelona92/85_turo_parc.jpg"
            },
            {
                headline: "Edificis Zona Universitaria",
                src: "assets/collections/barcelona92/86_edificis_zona_universitaria.jpg"
            },
            {
                headline: "Parc Diagonal",
                src: "assets/collections/barcelona92/87_parc_diagonal.jpg"
            },
            {
                headline: "Parc Güell",
                src: "assets/collections/barcelona92/88_parc_guell.jpg"
            },
            {
                headline: "Tibidabo",
                src: "assets/collections/barcelona92/89_tibidabo.jpg"
            },
            {
                headline: "Pescadors",
                src: "assets/collections/barcelona92/90_pescadors.jpg"
            },
            {
                headline: "Pescador Mar",
                src: "assets/collections/barcelona92/91_pescador_mar.jpg"
            },
            {
                headline: "Plaça Reial",
                src: "assets/collections/barcelona92/92_placa_reial.jpg"
            },
            {
                headline: "Lonja",
                src: "assets/collections/barcelona92/93_lonja.jpg"
            },
            {
                headline: "Casa de les Punxes",
                src: "assets/collections/barcelona92/94_casa_de_les_punxes.jpg"
            },
            {
                headline: "Teleferic",
                src: "assets/collections/barcelona92/95_teleferic.jpg"
            },
            {
                headline: "Pedralbes",
                src: "assets/collections/barcelona92/96_pedralbes.jpg"
            },
            {
                headline: "Casa Güell",
                src: "assets/collections/barcelona92/97_casa_guell.jpg"
            },
            {
                headline: "Parc Güell",
                src: "assets/collections/barcelona92/98_parc_guell.jpg"
            },
            {
                headline: "Arcoiris",
                src: "assets/collections/barcelona92/99_arco_iris.jpg"
            },
            {
                headline: "Fundació Miro",
                src: "assets/collections/barcelona92/100_fundacio_miro.jpg"
            },
            {
                headline: "Fiesta Espuma",
                src: "assets/collections/barcelona92/101_fiesta_espuma.jpg"
            },
            {
                headline: "Carrer Llança",
                src: "assets/collections/barcelona92/103_carrer_llanca.jpg"
            }
        ];
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



// if (environment.production) {
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
// }
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map