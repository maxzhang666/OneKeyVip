// ==UserScript==
// @name         【One】懒人神器,懒人福利,全新架构,性能更出众————只需一个脚本包揽所有功能 长期更新,放心使用
// @namespace    https://www.wandhi.com/
// @version      1.0.3
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍：1、CSDN页面清理
// @author       MaxZhang
// @icon         https://www.wandhi.com//favicon.ico
// @include      *://*
// @require      https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require      https://lib.baomitu.com/limonte-sweetalert2/11.4.7/sweetalert2.all.min.js
// @license      MIT
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      api.wandhi.com
// @connect      cdn.jsdelivr.net
// @connect      gwdang.com
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM.addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @compatible   firefox
// @compatible   chrome
// @compatible   opera safari edge
// @compatible   safari
// @compatible   edge
// @antifeature  referral-link 此提示为GreasyFork代码规范要求添加，实际使用无任何强制跳转，代码可查，请知悉。
// ==/UserScript==

!function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(exports, require("sweetalert2")) : "function" == typeof define && define.amd ? define([ "exports", "sweetalert2" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).One = {}, global.Swal);
}(this, (function(exports, Swal) {
    "use strict";
    function _interopDefaultLegacy(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var SiteEnum, Swal__default = _interopDefaultLegacy(Swal), extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    };
    function __extends(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __);
    }
    function __awaiter$1(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))((function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator.throw(value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        }));
    }
    function __generator$1(thisArg, body) {
        var f, y, t, g, _ = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        };
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    for (;_; ) try {
                        if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                          case 0:
                          case 1:
                            t = op;
                            break;

                          case 4:
                            return _.label++, {
                                value: op[1],
                                done: !1
                            };

                          case 5:
                            _.label++, y = op[1], op = [ 0 ];
                            continue;

                          case 7:
                            op = _.ops.pop(), _.trys.pop();
                            continue;

                          default:
                            if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                _ = 0;
                                continue;
                            }
                            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (6 === op[0] && _.label < t[1]) {
                                _.label = t[1], t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2], _.ops.push(op);
                                break;
                            }
                            t[2] && _.ops.pop(), _.trys.pop();
                            continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [ 6, e ], y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (5 & op[0]) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: !0
                    };
                }([ n, v ]);
            };
        }
    }
    !function(SiteEnum) {
        SiteEnum.All = "All", SiteEnum.TaoBao = "TaoBao", SiteEnum.TMall = "TMall", SiteEnum.JingDong = "JingDong", 
        SiteEnum.Shuma = "Shuma", SiteEnum.IQiYi = "IQiYi", SiteEnum.YouKu = "YouKu", SiteEnum.LeShi = "LeShi", 
        SiteEnum.TuDou = "TuDou", SiteEnum.Tencent_V = "Tencent_V", SiteEnum.MangGuo = "MangGuo", 
        SiteEnum.SoHu = "SoHu", SiteEnum.Acfun = "Acfun", SiteEnum.BiliBili = "BiliBili", 
        SiteEnum.M1905 = "M1905", SiteEnum.PPTV = "PPTV", SiteEnum.YinYueTai = "YinYueTai", 
        SiteEnum.WangYi = "WangYi", SiteEnum.Tencent_M = "Tencent_M", SiteEnum.KuGou = "KuGou", 
        SiteEnum.KuWo = "KuWo", SiteEnum.XiaMi = "XiaMi", SiteEnum.TaiHe = "TaiHe", SiteEnum.QingTing = "QingTing", 
        SiteEnum.LiZhi = "LiZhi", SiteEnum.MiGu = "MiGu", SiteEnum.XiMaLaYa = "XiMaLaYa", 
        SiteEnum.SXB = "SXB", SiteEnum.BDY = "BDY", SiteEnum.BDY1 = "BDY1", SiteEnum.BD_DETAIL_OLD = "BD_DETAIL_OLD", 
        SiteEnum.BD_DETAIL_NEW = "BD_DETAIL_NEW", SiteEnum.BD_DETAIL_Share = "BD_DETAIL_Share", 
        SiteEnum.LZY = "LZY", SiteEnum.SuNing = "SuNing", SiteEnum.Vp = "Vp", SiteEnum.Gwd = "Gwd", 
        SiteEnum.Xxqg = "Xxqg", SiteEnum.CSDN = "CSDN";
    }(SiteEnum || (SiteEnum = {}));
    var LogLevel$1, Core$1 = function() {
        function Core() {}
        return Object.defineProperty(Core, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(Core, "isTop", {
            get: function() {
                return window.self == window.top;
            },
            enumerable: !1,
            configurable: !0
        }), Core.addStyle = function(content) {
            if (GM_addStyle) GM_addStyle(content); else {
                var style = unsafeWindow.window.document.createElement("style");
                style.innerHTML = content, unsafeWindow.window.document.head.append(style);
            }
        }, Core.sleep = function(t) {
            return __awaiter$1(this, void 0, Promise, (function() {
                return __generator$1(this, (function(_a) {
                    return [ 2, new Promise((function(resolve) {
                        setTimeout(resolve, 1e3 * t);
                    })) ];
                }));
            }));
        }, Core.random = function(arr, n) {
            void 0 === n && (n = 1);
            for (var resArr = [ arr[Math.floor(Math.random() * arr.length)] ], i = 1; i < n; i++) resArr.push(arr[Math.floor(Math.random() * arr.length)]);
            return resArr;
        }, Core.randomNum = function(min, max) {
            var range = max - min;
            return min + Math.round(this.rnd() * range);
        }, Core.rnd = function(seed) {
            return void 0 === seed && (seed = Date.now()), (seed = (9301 * seed + 49297) % 233280) / 233280;
        }, Core.background = function(callback, time) {
            void 0 === time && (time = 5), setInterval((function() {
                callback();
            }), 1e3 * time);
        }, Core.autoLazyload = function(isOk, callback, time) {
            void 0 === time && (time = 5), isOk() ? callback() : setTimeout((function() {
                Core.autoLazyload(isOk, callback, time);
            }), 1e3 * time);
        }, Core.lazyload = function(callback, time) {
            void 0 === time && (time = 5), setTimeout((function() {
                callback();
            }), 1e3 * time);
        }, Core.bodyAppend = function(html) {
            unsafeWindow.document.body.append(html);
        }, Core;
    }(), Logger$1 = function() {
        function Logger() {}
        return Logger.log = function(msg, group, level) {}, Logger.debug = function(msg, group) {
            void 0 === group && (group = "debug"), this.log(msg, group, LogLevel$1.debug);
        }, Logger.info = function(msg, group) {
            void 0 === group && (group = "info"), this.log(msg, group, LogLevel$1.info);
        }, Logger.warn = function(msg, group) {
            void 0 === group && (group = "warning"), this.log(msg, group, LogLevel$1.warn);
        }, Logger.error = function(msg, group) {
            void 0 === group && (group = "error"), this.log(msg, group, LogLevel$1.error);
        }, Logger;
    }();
    !function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel$1 || (LogLevel$1 = {}));
    !function styleInject(css, ref) {
        void 0 === ref && (ref = {});
        var insertAt = ref.insertAt;
        if (css && "undefined" != typeof document) {
            var head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
            style.type = "text/css", "top" === insertAt && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), 
            style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
        }
    }("#content_views pre,#content_views pre code{-webkit-touch-callout:auto!important;-webkit-user-select:auto!important;-khtml-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.passport-login-container{display:none!important}");
    var LogLevel, __awaiter = function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))((function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator.throw(value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        }));
    }, __generator = function(thisArg, body) {
        var f, y, t, g, _ = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        };
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    for (;_; ) try {
                        if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                          case 0:
                          case 1:
                            t = op;
                            break;

                          case 4:
                            return _.label++, {
                                value: op[1],
                                done: !1
                            };

                          case 5:
                            _.label++, y = op[1], op = [ 0 ];
                            continue;

                          case 7:
                            op = _.ops.pop(), _.trys.pop();
                            continue;

                          default:
                            if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                _ = 0;
                                continue;
                            }
                            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (6 === op[0] && _.label < t[1]) {
                                _.label = t[1], t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2], _.ops.push(op);
                                break;
                            }
                            t[2] && _.ops.pop(), _.trys.pop();
                            continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [ 6, e ], y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (5 & op[0]) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: !0
                    };
                }([ n, v ]);
            };
        }
    }, Core = function() {
        function Core() {}
        return Object.defineProperty(Core, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(Core, "isTop", {
            get: function() {
                return window.self == window.top;
            },
            enumerable: !1,
            configurable: !0
        }), Core.addStyle = function(content) {
            if (GM_addStyle) GM_addStyle(content); else {
                var style = unsafeWindow.window.document.createElement("style");
                style.innerHTML = content, unsafeWindow.window.document.head.append(style);
            }
        }, Core.sleep = function(t) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    return [ 2, new Promise((function(resolve) {
                        setTimeout(resolve, 1e3 * t);
                    })) ];
                }));
            }));
        }, Core.random = function(arr, n) {
            void 0 === n && (n = 1);
            for (var resArr = [ arr[Math.floor(Math.random() * arr.length)] ], i = 1; i < n; i++) resArr.push(arr[Math.floor(Math.random() * arr.length)]);
            return resArr;
        }, Core.randomNum = function(min, max) {
            var range = max - min;
            return min + Math.round(this.rnd() * range);
        }, Core.rnd = function(seed) {
            return void 0 === seed && (seed = Date.now()), (seed = (9301 * seed + 49297) % 233280) / 233280;
        }, Core.background = function(callback, time) {
            void 0 === time && (time = 5), setInterval((function() {
                callback();
            }), 1e3 * time);
        }, Core.autoLazyload = function(isOk, callback, time) {
            void 0 === time && (time = 5), isOk() ? callback() : setTimeout((function() {
                Core.autoLazyload(isOk, callback, time);
            }), 1e3 * time);
        }, Core.lazyload = function(callback, time) {
            void 0 === time && (time = 5), setTimeout((function() {
                callback();
            }), 1e3 * time);
        }, Core.bodyAppend = function(html) {
            unsafeWindow.document.body.append(html);
        }, Core;
    }();
    !function() {
        function Env() {}
        Env.Sign = "None";
    }();
    !function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel || (LogLevel = {}));
    var Logger = function() {
        function Logger() {}
        return Logger.log = function(msg, level) {
            for (var data = [], _i = 2; _i < arguments.length; _i++) data[_i - 2] = arguments[_i];
            data.forEach((function(e) {
                e.forEach((function(ee) {}));
            }));
        }, Logger.debug = function(msg) {
            for (var data = [], _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
            this.log(msg, LogLevel.debug, data);
        }, Logger.info = function(msg) {
            this.log(msg, LogLevel.info);
        }, Logger.warn = function(msg) {
            this.log(msg, LogLevel.warn);
        }, Logger.error = function(msg) {
            this.log(msg, LogLevel.error);
        }, Logger;
    }(), AppBase = function() {
        function AppBase() {
            var _this = this;
            this.Process = function() {
                _this.loader(), _this.run();
            };
        }
        return AppBase.prototype.unique = function() {
            return this._unique;
        }, AppBase.prototype.linkTest = function(url) {
            var _this = this;
            url || (url = Core.url);
            var flag = !1;
            return this.rules.forEach((function(v, k) {
                v.some((function(r) {
                    if (r.test(url)) return Logger.debug("app:".concat(_this.appName, "_").concat(SiteEnum[k], " test pass")), 
                    flag = !0, _this.site = k, !0;
                })), Logger.warn("app:".concat(_this.appName, " test end"));
            })), flag;
        }, AppBase.prototype.getAppName = function() {
            return this.appName;
        }, AppBase;
    }(), CsdnApp = function(_super) {
        function CsdnApp() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.appName = "Csdn", _this.rules = new Map([ [ SiteEnum.CSDN, [ /blog\.csdn\.net/i ] ] ]), 
            _this._unique = !1, _this;
        }
        return __extends(CsdnApp, _super), CsdnApp.prototype.loader = function() {}, CsdnApp.prototype.run = function() {
            Core$1.background(this.adsClear, 3), this.commentClear();
        }, CsdnApp.prototype.adsClear = function() {
            CsdnApp.adSelectors.forEach((function(selector) {
                $(selector).remove();
            }));
        }, CsdnApp.prototype.commentClear = function() {
            Core$1.lazyload((function() {
                Logger$1.info("\u8bc4\u8bba\u533a\u6e05\u7406"), $(".comment-list-box").css("overflow", "").css("max-height", ""), 
                $("#commentPage").removeClass("d-none"), $("#btnMoreComment").remove();
            }), 3);
        }, CsdnApp.adSelectors = [ "#footerRightAds", ".side-question-box", "div[id^='dmp_ad']", "div[class^='ad_']", "div[id^='floor-ad_']", ".adsbygoogle" ], 
        CsdnApp;
    }(AppBase), container = new Map, Ioc = function() {
        function Ioc() {}
        return Ioc.register = function(app) {
            var className = app.name.toLowerCase();
            return container.has(className) ? container.get(className) : className ? (container.set(className, window.Reflect.construct(app, [])), 
            container.get(className)) : void 0;
        }, Ioc;
    }(), MagnetRegApp = function(_super) {
        function MagnetRegApp() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "Magnet", _this.rules = new Map([ [ SiteEnum.All, [ /.*/i ] ] ]), 
            _this;
        }
        return __extends(MagnetRegApp, _super), MagnetRegApp.prototype.loader = function() {}, 
        MagnetRegApp.prototype.run = function() {
            GM_registerMenuCommand("\u63d0\u53d6\u78c1\u529b", (function() {
                for (var m, reg = /magnet:\?xt=urn:btih:[0-9a-fA-F]{40}/gm, magnets = []; null != (m = reg.exec(unsafeWindow.document.body.innerText)); ) m.index === reg.lastIndex && reg.lastIndex++, 
                m.forEach((function(match, groupIndex) {
                    magnets.push(match);
                }));
                if (magnets.length > 0) {
                    var newMagnets = magnets.filter((function(e, i) {
                        return magnets.indexOf(e) === i;
                    }));
                    Swal__default.default.fire({
                        title: "\u78c1\u529b\u96c6",
                        input: "textarea",
                        inputValue: newMagnets.join("\r"),
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "\u6211\u597d\u4e86"
                    });
                } else Swal__default.default.fire({
                    toast: !0,
                    position: "top",
                    showConfirmButton: !1,
                    timerProgressBar: !0,
                    title: "\u4ec0\u4e48\u4e5f\u6ca1\u63d0\u53d6\u5230",
                    icon: "warning",
                    timer: 2e3
                });
            }));
        }, MagnetRegApp;
    }(AppBase), One = function() {
        function One() {
            this.services = [ Ioc.register(CsdnApp), Ioc.register(MagnetRegApp) ];
        }
        return One.prototype.run = function() {
            this.services.every((function(element) {
                return !element.linkTest() || (new Promise((function(resolve) {
                    resolve(1);
                })).then(element.Process), Logger.debug("element unique:" + element.unique()), !element.unique());
            }));
        }, One;
    }();
    (new One).run(), exports.One = One, Object.defineProperty(exports, "__esModule", {
        value: !0
    });
}));
