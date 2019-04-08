webpackJsonp([5],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/courses/courses.module": [
		292,
		4
	],
	"../pages/enroll-now/enroll-now.module": [
		288,
		3
	],
	"../pages/home/home.module": [
		289,
		2
	],
	"../pages/personal-details/personal-details.module": [
		290,
		1
	],
	"../pages/program-calender/program-calender.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Component
 */
var RegisterPage = /** @class */ (function () {
    /**
     * Creates an instance of register page.
     * @param navCtrl
     * @param alertCtrl
     * @param http
     * @param loading
     */
    function RegisterPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    /**
     * Registers register page
     */
    RegisterPage.prototype.Register = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert.present();
        }
        else if (this.email.value == "") {
            var alert = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Email field is empty",
                buttons: ['OK']
            });
            alert.present();
        }
        else if (this.mobile.value == "") {
            var alert = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Mobile number field is empty",
                buttons: ['OK']
            });
            alert.present();
        }
        else if (this.password.value == "") {
            var alert = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://127.0.0.1/ionicphp/register.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        var alert = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" name="fullname" #username></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="Email" name="email" #email></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="Mobile Number" name="mobile" #mobile></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="Register()">Register</button>\n  </div>\n  \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_program_calender_program_calender__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer_ngx__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















/**
 * Ng module
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__["a" /* EnrollNowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_program_calender_program_calender__["a" /* ProgramCalenderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/enroll-now/enroll-now.module#EnrollNowPageModule', name: 'EnrollNowPage', segment: 'enroll-now', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details/personal-details.module#PersonalDetailsPageModule', name: 'PersonalDetailsPage', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-calender/program-calender.module#ProgramCalenderPageModule', name: 'ProgramCalenderPage', segment: 'program-calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__["a" /* EnrollNowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_program_calender_program_calender__["a" /* ProgramCalenderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Component
 */
var LoginPage = /** @class */ (function () {
    /**
     * Creates an instance of login page.
     * @param navCtrl
     * @param alertCtrl
     * @param http
     * @param loading
     */
    function LoginPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    /**
     * Signs up
     */
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    /**
     * Signs in
     */
    LoginPage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert.present();
        }
        else if (this.password.value == "") {
            var alert = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                password: this.password.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                //calls API that posts the entered data to the database in JSON format
                _this.http.post('http://localhost:8080/ionicphp/login.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Your Login success") {
                        var alert = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], data_1);
                    }
                    else {
                        var alert = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Login Username or Password is invalid",
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-title>\n     Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item  >\n      <ion-input  round type="text" placeholder="Username" name="username" #username></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n\n    <button ion-button round block (click)="signIn()">Sign In</button>\n    <button ion-button round outline block (click)="signUp()">Register</button>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component
 */
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, menu) {
        this.app = app;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    /**
     * Backs to welcome
     */
    MyApp.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    /**
     * Logouts my app
     */
    MyApp.prototype.logout = function () {
        //Api Token Logout 
        var _this = this;
        localStorage.clear();
        this.menu.enable(false);
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_calender_program_calender__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__courses_courses__["a" /* CoursesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__["a" /* PersonalDetailsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__program_calender_program_calender__["a" /* ProgramCalenderPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Courses" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Enroll Now" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Personal Details" tabIcon="details"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Program Calender" tabIcon="Calender"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    /**
     * Creates an instance of auth service provider.
     * @param http
     */
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollNowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EnrollNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var EnrollNowPage = /** @class */ (function () {
    /**
     * Creates an instance of enroll now page.
     * @param navCtrl
     * @param alertCtrl
     * @param loading
     * @param navParams
     * @param http
     * @param menuCtrl
     */
    function EnrollNowPage(navCtrl, alertCtrl, loading, navParams, http, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.enrollement();
    }
    EnrollNowPage_1 = EnrollNowPage;
    /**
     * Enrollements enroll now page
     */
    EnrollNowPage.prototype.enrollement = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {};
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/course.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    /**
     * Registers course
     */
    EnrollNowPage.prototype.Register_course = function () {
        var _this = this;
        //// check to confirm the username, email, telephone and password fields are filled
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            username: this.username,
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/course_register.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(res);
                loader.dismiss();
                if (res == "Updated successfull") {
                    var alert = _this.alertCtrl.create({
                        title: "CONGRATS",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert.present();
                }
            });
        });
    };
    /**
     * Courses page
     */
    EnrollNowPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    EnrollNowPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    /**
     * Enrolls now page
     */
    EnrollNowPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(EnrollNowPage_1);
    };
    /**
     * Homes page
     */
    EnrollNowPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Logins page
     */
    EnrollNowPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Personals details page
     */
    EnrollNowPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Ions view did enter
     */
    EnrollNowPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-3');
    };
    /**
     * Shows filters
     */
    EnrollNowPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-3');
    };
    /**
     * Hides filters
     */
    EnrollNowPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-3');
    };
    /**
     * Ions view did load
     */
    EnrollNowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnrollNowPage');
    };
    EnrollNowPage = EnrollNowPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enroll-now',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\enroll-now\enroll-now.html"*/'<!--\n  Generated template for the EnrollNowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content4" side="left" id="filters-4">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="CoursesPage()">\n        Courses\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="hideFilters()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="ProgramCalenderPage()">\n            Program Calender\n          </button>\n        </ion-item>\n      <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content4>\n    <h2> Enrollment  </h2>\n    <div class="row header" *ngFor = "let item of items">\n      <div class="col">Course code:</div>\n      <div class="col">{{item.course_code}}</div>\n    </div>\n    <div class="row header" *ngFor = "let item of items">\n      <div class="col">Course Name:</div>\n      <div class="col">{{item.course_name}}</div>\n  </div>\n  <div class="row header" *ngFor = "let item of items">\n      <div class="col">Semester Offered:</div>\n      <div class="col">{{item.sem_offered}}</div>\n    </div>\n    <div class="row header" *ngFor = "let item of items">\n        <div class="col">Lecturer:</div>\n        <div class="col">{{item.lecturer}}</div>\n    </div>\n  \n    <div padding>\n    <button ion-button  round outline block (click)="Register_course()">Enroll</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\enroll-now\enroll-now.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _f || Object])
    ], EnrollNowPage);
    return EnrollNowPage;
    var EnrollNowPage_1, _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=enroll-now.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var CoursesPage = /** @class */ (function () {
    /**
     * Creates an instance of courses page.
     * @param navCtrl
     * @param navParams
     * @param menuCtrl
     */
    function CoursesPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    CoursesPage_1 = CoursesPage;
    /**
     * Courses page
     */
    CoursesPage.prototype.CoursesPage = function () {
        this.navCtrl.push(CoursesPage_1);
    };
    /**
     * Enrolls now page
     */
    CoursesPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Homes page
     */
    CoursesPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    CoursesPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Logins page
     */
    CoursesPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    /**
     * Ions view did enter
     */
    CoursesPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-2');
    };
    /**
     * Shows filters
     */
    CoursesPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-2');
    };
    /**
     * Hides filters
     */
    CoursesPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-2');
    };
    /**
     * Ions view did load
     */
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    CoursesPage = CoursesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\courses\courses.html"*/'<!--\n  Generated template for the CoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content2" side="left" id="filters-2">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="hideFilters()">\n        Courses\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="EnrollNowPage()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content2>\n  <h2>Welcome to Courses</h2>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _c || Object])
    ], CoursesPage);
    return CoursesPage;
    var CoursesPage_1, _a, _b, _c;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__program_calender_program_calender__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var PersonalDetailsPage = /** @class */ (function () {
    /**
     * Creates an instance of personal details page.
     * @param navCtrl
     * @param http
     * @param loading
     * @param navParams
     * @param menuCtrl
     */
    function PersonalDetailsPage(navCtrl, http, loading, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.csvData = [];
        this.headerRow = [];
    }
    PersonalDetailsPage_1 = PersonalDetailsPage;
    /**
     * Ions view did load
     */
    PersonalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetailsPage');
    };
    /**
     * Ions view did enter
     */
    PersonalDetailsPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-4');
    };
    /**
     * Courses page
     */
    PersonalDetailsPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    PersonalDetailsPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    /**
     * Enrolls now page
     */
    PersonalDetailsPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Homes page
     */
    PersonalDetailsPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    PersonalDetailsPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(PersonalDetailsPage_1);
    };
    /**
     * Logins page
     */
    PersonalDetailsPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    PersonalDetailsPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-4');
    };
    /**
     * Hides filters
     */
    PersonalDetailsPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-4');
    };
    /**
     * on init
     */
    PersonalDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username,
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/users_details.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    PersonalDetailsPage = PersonalDetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-details',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\personal-details\personal-details.html"*/'<!--\n  Generated template for the PersonalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="showFilters()">\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-menu [content]="content4" side="left" id="filters-4">\n    Menu\n    <ion-item>\n      <button  ion-button (click)="HomePage()">\n        Home\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="CoursesPage()">\n          Courses\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="EnrollNowPage()">\n            Enroll Now\n          </button>\n        </ion-item>\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            My Details\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="ProgramCalenderPage()">\n              Program Calender\n            </button>\n          </ion-item>\n        <ion-item>\n            <button  ion-button (click)="LoginPage()">\n              Logout\n            </button>\n          </ion-item>\n  </ion-menu>\n  \n  <ion-content padding #content4>\n      <div class="row header" *ngFor = "let item of items">\n        <div class="col">Student ID</div>\n        <div class="col">{{item.username}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n        <div class="col">Name :</div>\n        <div class="col">{{item.name}}</div>\n    </div>\n    <div class="row header" *ngFor = "let item of items">\n        <div class="col">Email Address :</div>\n        <div class="col">{{item.email}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Role :</div>\n          <div class="col">{{item.role}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">DOB :</div>\n          <div class="col">{{item.DOB}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Gender :</div>\n          <div class="col">{{item.gender}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Citizenship :</div>\n          <div class="col">{{item.citizenship}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Campus :</div>\n          <div class="col">{{item.campus}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Program Enrolled In </div>\n          <div class="col">{{item.program_name}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Year You Started Your Program :</div>\n          <div class="col">{{item.year_joined}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major Type :</div>\n          <div class="col">{{item.major_type}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major One :</div>\n          <div class="col">{{item.major_one}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major Two :</div>\n          <div class="col">{{item.major_two}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Minor One :</div>\n          <div class="col">{{item.minor_one}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Minor Two :</div>\n          <div class="col">{{item.minor_two}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Your Account Status :</div>\n          <div class="col">{{item.status}}</div>\n      </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\personal-details\personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _e || Object])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
    var PersonalDetailsPage_1, _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=personal-details.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ProgramCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var ProgramCalenderPage = /** @class */ (function () {
    /**
     * Creates an instance of program calender page.
     * @param navCtrl
     * @param loadingCtrl
     * @param toastCtrl
     * @param http
     * @param navParams
     * @param menuCtrl
     * @param transfer
     */
    function ProgramCalenderPage(navCtrl, loadingCtrl, toastCtrl, http, navParams, menuCtrl, transfer) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.transfer = transfer;
        this.csvData = [];
        this.headerRow = [];
        // this.writeCsvData();  
    }
    ProgramCalenderPage_1 = ProgramCalenderPage;
    /**
     * Csvuploads program calender page
     */
    ProgramCalenderPage.prototype.CSVUpload = function () {
        window.location.href = 'http://127.0.0.1:8080/csv/';
    };
    /*   writeCsvData() {
        
        
          let data = this.extractData;
    
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json' );
          let options = new RequestOptions({ headers: headers });
      
       
          this.http.post('http://127.0.0.1:8080/ionicphp/program_calender.php',data, options)
          .map(res => res.json())
          .subscribe();
    }
      extractData(res){
          let csvData = res['_body'] || '';
          let parsedData = papa.parse(csvData).data;
    
          this.headerRow = parsedData[0];
          
          parsedData.splice(0, 1);
          this.csvData = parsedData;
        
    } */
    /**
     * Courses page
     */
    ProgramCalenderPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    ProgramCalenderPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(ProgramCalenderPage_1);
    };
    /**
     * Enroll now page
     */
    ProgramCalenderPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Home page
     */
    ProgramCalenderPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personal details page
     */
    ProgramCalenderPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Login page
     */
    ProgramCalenderPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    /**
     * Ions view did enter
     */
    ProgramCalenderPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-5');
    };
    /**
     * Shows filters
     */
    ProgramCalenderPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-5');
    };
    /**
     * Hides filters
     */
    ProgramCalenderPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-5');
    };
    /**
     * Ions view did load
     */
    ProgramCalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    ProgramCalenderPage = ProgramCalenderPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-program-calender',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\program-calender\program-calender.html"*/'<ion-header>\n\n    <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n    <ion-menu [content]="content1" side="left" id="filters-5">\n        Menu\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            Home\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="CoursesPage()">\n              Courses\n            </button>\n          </ion-item>\n          <ion-item>\n              <button  ion-button (click)="EnrollNowPage()">\n                Enroll Now\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="hideFilters()">\n                My Details\n              </button>\n            </ion-item>\n                <ion-item>\n                    <button  ion-button (click)="ProgramCalenderPage()">\n                      Program Calender\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                <button  ion-button (click)="LoginPage()">\n                  Logout\n                </button>\n              </ion-item>\n      </ion-menu>\n  \n    <ion-content padding #content1>\n      <ion-item *ngFor = "let item of items">\n  \n      <h2> {{item.username}}  </h2>\n    </ion-item>\n\n<!--     <label class="myFakeUploadButton" for="writeCsvData">Upload</label>\n    <input type="file" id="myFileInput"> -->\n    \n    <button  ion-button (click)="CSVUpload()">\n        Upload\n      </button>\n\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\program-calender\program-calender.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]) === "function" && _g || Object])
    ], ProgramCalenderPage);
    return ProgramCalenderPage;
    var ProgramCalenderPage_1, _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=program-calender.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var HomePage = /** @class */ (function () {
    /**
     * Creates an instance of home page.
     * @param navCtrl
     * @param navParams
     * @param http
     * @param loading
     * @param menuCtrl
     */
    function HomePage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    /**
     * Ions view did enter
     */
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-1');
    };
    /**
     * Courses page
     */
    HomePage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    HomePage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    /**
     * Enrolls now page
     */
    HomePage.prototype.EnrollNowPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */], data);
    };
    /**
     * Homes page
     */
    HomePage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    HomePage.prototype.PersonalDetailsPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */], data);
    };
    /**
     * Logins page
     */
    HomePage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    HomePage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-1');
    };
    /**
     * Hides filters
     */
    HomePage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-1');
    };
    /**
     * Ions view did load
     */
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    /**
     * Backs to welcome
     */
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    /**
     * Logouts home page
     */
    HomePage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    /**
     * on init
     */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/fetch_data.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\home\home.html"*/'<!--\n  Generated template for HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-menu [content]="content1" side="left" id="filters-1">\n      Menu\n      <ion-item>\n        <button  ion-button (click)="hideFilters()">\n          Home\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="CoursesPage()">\n            Courses\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="EnrollNowPage()">\n              Enroll Now\n            </button>\n          </ion-item>\n          <ion-item>\n            <button  ion-button (click)="PersonalDetailsPage()">\n              My Details\n            </button>\n          </ion-item>\n          <ion-item>\n              <button  ion-button (click)="ProgramCalenderPage()">\n                Program Calender\n              </button>\n            </ion-item>\n          <ion-item>\n              <button  ion-button (click)="LoginPage()">\n                Logout\n              </button>\n            </ion-item>\n    </ion-menu>\n\n  <ion-content padding #content1>\n    <ion-item *ngFor = "let item of items">\n\n    <h2>Welcome to USP Enrollment System {{item.username}}  </h2>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Ionic\USP_ES-v5\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map