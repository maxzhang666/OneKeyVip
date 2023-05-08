// ==UserScript==
// @name         【One】懒人神器,懒人福利,全新架构,性能更出众————只需一个脚本包揽所有功能 长期更新,放心使用
// @namespace    https://www.wandhi.com/
// @version      1.0.9
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍：1、ScriptsCat脚本猫脚本查询 2、CSDN页面清理 3、页面磁力链接提取
// @author       MaxZhang
// @icon         https://cdn.wandhi.com/image/One.ico
// @include      *://*
// @require      https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require      https://lib.baomitu.com/limonte-sweetalert2/11.4.7/sweetalert2.all.min.js
// @license      MIT
// @grant        GM_setClipboard
// @connect      api.wandhi.com
// @connect      cdn.jsdelivr.net
// @connect      gwdang.com
// @connect      scriptcat.org
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM_addStyle
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
    function __read(o, n) {
        var m = "function" == typeof Symbol && o[Symbol.iterator];
        if (!m) return o;
        var r, e, i = m.call(o), ar = [];
        try {
            for (;(void 0 === n || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally {
            try {
                r && !r.done && (m = i.return) && m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
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
        SiteEnum.Xxqg = "Xxqg", SiteEnum.CSDN = "CSDN", SiteEnum.FeiShuDoc = "FeiShuDoc", 
        SiteEnum.Juhaowan = "Juhaowan", SiteEnum.MhXin = "MhXin";
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
                    for (;g && (g = 0, op[0] && (_ = 0)), _; ) try {
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
            Core$1.background(this.adsClear, 3), this.commentClear(), this.articleClean();
        }, CsdnApp.prototype.adsClear = function() {
            CsdnApp.adSelectors.forEach((function(selector) {
                $(selector).remove();
            }));
        }, CsdnApp.prototype.commentClear = function() {
            Core$1.lazyload((function() {
                Logger$1.info("\u8bc4\u8bba\u533a\u6e05\u7406"), $(".comment-list-box").css("overflow", "").css("max-height", ""), 
                $("#commentPage").removeClass("d-none"), $("#btnMoreComment").remove();
            }), 3);
        }, CsdnApp.prototype.articleClean = function() {
            Logger$1.info("\u6587\u7ae0\u533a\u6e05\u7406"), $("#article_content").removeAttr("style"), 
            $(".hide-article-box").remove();
        }, CsdnApp.adSelectors = [ "#footerRightAds", ".side-question-box", "div[id^='dmp_ad']", "div[class^='ad_']", "div[id^='floor-ad_']", ".adsbygoogle" ], 
        CsdnApp;
    }(AppBase), container = new Map, Ioc = function() {
        function Ioc() {}
        return Ioc.register = function(app) {
            var className = app.name.toLowerCase();
            return container.has(className) ? container.get(className) : className ? (container.set(className, window.Reflect.construct(app, [])), 
            container.get(className)) : void 0;
        }, Ioc;
    }(), Config = function() {
        function Config() {}
        return Object.defineProperty(Config, "env", {
            get: function() {
                return GM_info;
            },
            enumerable: !1,
            configurable: !0
        }), Config.get = function(key, defaultValue) {
            void 0 === defaultValue && (defaultValue = "");
            var objStr = GM_getValue(this.encode(key), null);
            if (objStr) {
                var obj = JSON.parse(objStr);
                if (-1 == obj.exp || obj.exp > (new Date).getTime()) return Logger$1.info("cache true:" + key + "," + obj.exp), 
                obj.value;
                GM_deleteValue(key);
            }
            return Logger$1.info("cache false"), defaultValue;
        }, Config.set = function(key, v, exp) {
            void 0 === exp && (exp = -1);
            var obj = {
                key: key,
                value: v,
                exp: -1 == exp ? exp : (new Date).getTime() + 1e3 * exp
            };
            Logger$1.debug(obj), GM_setValue(this.encode(key), JSON.stringify(obj));
        }, Config.remember = function(key, exp, callback) {
            var _this = this;
            return new Promise((function(reso, reject) {
                var v = _this.get(key, null);
                null == v || "" === v ? callback().then((function(res) {
                    _this.set(key, res, exp), reso(res);
                })).catch((function(e) {
                    reject(e);
                })) : (Logger$1.debug(v), reso(v));
            }));
        }, Config.clear = function(key) {
            GM_deleteValue(key);
        }, Config.decode = function(str) {
            return atob(str);
        }, Config.encode = function(str) {
            return btoa(str);
        }, Config.inc = function(s) {
            var v = Config.get(s, 0);
            v++, Config.set(s, v);
        }, Config;
    }(), GmMenu = function() {
        function GmMenu() {}
        return GmMenu.Register = function(name, callback, showUse) {
            void 0 === showUse && (showUse = !0);
            var k = encodeURIComponent("app_use_" + name);
            showUse && (name = "\ud83d\ude80" + name + "(\u4f7f\u7528\u7edf\u8ba1:" + Config.get(k, 0) + ")"), 
            GM_registerMenuCommand(name, (function() {
                showUse && Config.inc(k), callback();
            }));
        }, GmMenu;
    }(), MagnetRegApp = function(_super) {
        function MagnetRegApp() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "Magnet", _this.rules = new Map([ [ SiteEnum.All, [ /.*/i ] ] ]), 
            _this;
        }
        return __extends(MagnetRegApp, _super), MagnetRegApp.prototype.loader = function() {}, 
        MagnetRegApp.prototype.run = function() {
            GmMenu.Register("\u63d0\u53d6\u78c1\u529b", (function() {
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
    }(AppBase), Str = function() {
        function Str() {}
        return Str.trim = function(source, char) {
            return source.replace(new RegExp("^\\" + char + "+|\\" + char + "+$", "g"), "");
        }, Str;
    }(), Http = function() {
        function Http() {}
        return Http.ajax = function(option, header) {
            var _a;
            void 0 === header && (header = new Map);
            var head = new HttpHeaders;
            head["User-Agent"] = null !== (_a = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) && void 0 !== _a ? _a : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114", 
            head.Accept = "application/atom+xml,application/xml,text/xml,application/json,text/plain,*/*", 
            (null == header ? void 0 : header.size) > 0 && header.forEach((function(v, k) {
                head[k] = v;
            })), Logger.debug("http head info:", head), option.headers || (option.headers = head);
            try {
                GM_xmlhttpRequest(option);
            } catch (e) {
                Logger.error(e);
            }
        }, Http.getFormData = function(data) {
            if (data instanceof Map) {
                var fd_1 = new FormData;
                data.forEach((function(v, k) {
                    var _v;
                    _v = "string" == typeof v ? v.toString() : JSON.stringify(v), fd_1.append(k, _v);
                })), data = fd_1;
            }
            return data;
        }, Http._getData = function(data, contentType) {
            if (void 0 === contentType && (contentType = "json"), data instanceof Map) {
                var fd_2 = new FormData;
                data.forEach((function(v, k) {
                    fd_2.append(k, v);
                })), data = fd_2;
            }
            var res = "";
            if ("json" == contentType) {
                var obj_1 = Object.create(null);
                data.forEach((function(k, v) {
                    obj_1[v] = k;
                })), res = JSON.stringify(obj_1);
            } else data.forEach((function(k, v) {
                res += "".concat(v, "=").concat(encodeURIComponent(k.toString()), "&");
            })), res = Str.trim(res, "&");
            return res;
        }, Http.post = function(url, data, contentType, timeOut) {
            return void 0 === timeOut && (timeOut = 10), new Promise((function(resolve, reject) {
                Http.ajax({
                    url: url,
                    method: "POST",
                    data: Http.getFormData(data),
                    timeout: 1e3 * timeOut,
                    onload: function(response) {
                        var _a;
                        try {
                            var res = null !== (_a = JSON.parse(response.responseText)) && void 0 !== _a ? _a : response.responseText;
                            resolve(res);
                        } catch (error) {
                            Logger.debug(error), reject();
                        }
                    },
                    onerror: function(response) {
                        reject(response);
                    },
                    ontimeout: function() {
                        reject("\u8bf7\u6c42\u8d85\u65f6");
                    }
                });
            }));
        }, Http.get = function(url, data, head, time_out) {
            return void 0 === head && (head = new Map), void 0 === time_out && (time_out = 10), 
            new Promise((function(resolve, reject) {
                Http.ajax({
                    url: url,
                    method: "GET",
                    timeout: 1e3 * time_out,
                    onload: function(response) {
                        var _a;
                        try {
                            var res = null !== (_a = JSON.parse(response.responseText)) && void 0 !== _a ? _a : response.responseText;
                            resolve(res);
                        } catch (error) {
                            Logger.debug(error), reject();
                        }
                    },
                    onerror: function(response) {
                        reject(response);
                    },
                    ontimeout: function() {
                        reject("\u8bf7\u6c42\u8d85\u65f6");
                    }
                }, head);
            }));
        }, Http;
    }(), HttpHeaders = function HttpHeaders() {}, ScriptsFind = function(_super) {
        function ScriptsFind() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "ScriptsFind", _this.rules = new Map([ [ SiteEnum.All, [ /.*/i ] ] ]), 
            _this;
        }
        return __extends(ScriptsFind, _super), ScriptsFind.prototype.loader = function() {}, 
        ScriptsFind.prototype.run = function() {
            return __awaiter$1(this, void 0, Promise, (function() {
                var domain, data;
                return __generator$1(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return domain = unsafeWindow.window.location.host, null != (data = Config.get("scriptscat_query_" + domain, null)) ? [ 3, 2 ] : [ 4, Http.get("https://scriptcat.org/api/v2/scripts?domain=" + domain) ];

                      case 1:
                        data = _a.sent(), Config.set("scriptscat_query_" + domain, data, 7200), _a.label = 2;

                      case 2:
                        return GmMenu.Register("\u5f53\u524d\u7f51\u7ad9\u53ef\u7528\u811a\u672c:" + data.data.total, (function() {
                            GM_openInTab("https://scriptcat.org/search?keyword=" + domain, {
                                active: !0
                            });
                        })), [ 2 ];
                    }
                }));
            }));
        }, ScriptsFind;
    }(AppBase), Hook = function() {
        function Hook() {}
        return Hook.HookHidden = function(v) {
            Object.defineProperty(window.document, "hidden", {
                value: v
            }), null == window.webkitHidden && (window.webkitHidden = !1), Object.defineProperty(window.document, "webkitHidden", {
                value: v
            });
        }, Hook.hookVisibility = function(v) {
            Object.defineProperty(window.document, "visibilityState", {
                value: v
            });
        }, Hook.hookXmlHttpRequest = function(condition, callback) {
            XMLHttpRequest.prototype._open = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function() {
                for (var args = [], _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var _a = __read(args, 2), method = _a[0], url = _a[1];
                condition(method, url, this) && callback(this), this._open.apply(this, __spread(args));
            };
        }, Hook;
    }(), FeiShuDocApp = function(_super) {
        function FeiShuDocApp() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "\u98de\u4e66\u6587\u6863\u590d\u5236", 
            _this.rules = new Map([ [ SiteEnum.FeiShuDoc, [ /bytedance\.feishu\.cn/i ] ] ]), 
            _this;
        }
        return __extends(FeiShuDocApp, _super), FeiShuDocApp.prototype.loader = function() {
            Hook.hookXmlHttpRequest((function(method, url, xml) {
                return url.includes("space/api/suite/permission/document/actions/state/") && "POST" == method;
            }), (function(xml) {
                xml.addEventListener("readystatechange", (function() {
                    var _a;
                    if (4 === xml.readyState) {
                        var response = xml.response;
                        try {
                            response = JSON.parse(response);
                        } catch (e) {}
                        Logger$1.debug("\u98de\u4e66\u62e6\u622a:response"), Logger$1.debug(response), 1 !== (null === (_a = response.data.actions) || void 0 === _a ? void 0 : _a.copy) && (response.data.actions.copy = 1, 
                        Object.defineProperty(xml, "response", {
                            get: function() {
                                return response;
                            }
                        }), Object.defineProperty(xml, "responseText", {
                            get: function() {
                                return JSON.stringify(response);
                            }
                        }));
                    }
                }), !1);
            }));
        }, FeiShuDocApp.prototype.run = function() {}, FeiShuDocApp;
    }(AppBase), RightClickFreeApp = function(_super) {
        function RightClickFreeApp() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "\u53f3\u952e\u9650\u5236\u89e3\u9664", 
            _this.rules = new Map([ [ SiteEnum.All, [ /.*/i ] ] ]), _this;
        }
        return __extends(RightClickFreeApp, _super), RightClickFreeApp.prototype.loader = function() {}, 
        RightClickFreeApp.prototype.run = function() {
            GmMenu.Register("\u89e3\u9664\u53f3\u952e\u9650\u5236", (function() {
                RightClickFreeApp.rcFree();
            }));
        }, RightClickFreeApp.rcFree = function() {
            function t(e) {
                e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation();
            }
            document.querySelectorAll("*").forEach((function(e) {
                "none" === window.getComputedStyle(e, null).getPropertyValue("user-select") && e.style.setProperty("user-select", "text", "important");
            })), [ "copy", "cut", "contextmenu", "selectstart", "mousedown", "mouseup", "mousemove", "keydown", "keypress", "keyup" ].forEach((function(e) {
                document.documentElement.addEventListener(e, t, {
                    capture: !0
                });
            })), Swal__default.default.fire({
                toast: !0,
                position: "top",
                showConfirmButton: !1,
                timerProgressBar: !0,
                title: "\u9650\u5236\u89e3\u9664\u6210\u529f",
                icon: "warning",
                timer: 2e3
            });
        }, RightClickFreeApp;
    }(AppBase), AdBlockApp = function(_super) {
        function AdBlockApp() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "AdBlock", _this.rules = new Map([ [ SiteEnum.Juhaowan, [ /www\.juhaowan\.club/i ] ], [ SiteEnum.MhXin, [ /mhxin\.com\/manhua/i ] ] ]), 
            _this.rule = [ {
                site: SiteEnum.CSDN,
                selector: [ ".__zy_flash" ]
            }, {
                site: SiteEnum.MhXin,
                hook: [ "tg.wmqfey.com/sc/6276", "diy.dcqs4.com/sh/to/1380", "diy.wcdc5.com/sh/to/1381", "tc.6tofsu.com:8001/d/6276", "tpic.kszvmqo.cn/2021/12/31155849600.txt" ]
            } ], _this;
        }
        return __extends(AdBlockApp, _super), AdBlockApp.prototype.loader = function() {}, 
        AdBlockApp.prototype.run = function() {
            var that = this;
            that.rule.forEach((function(item) {
                var _a, _b;
                item.site === that.site && (null === (_a = item.selector) || void 0 === _a || _a.forEach((function(selector) {
                    setInterval((function() {
                        $(selector).remove();
                    }), 1e3);
                })), (null === (_b = item.hook) || void 0 === _b ? void 0 : _b.length) && Hook.hookXmlHttpRequest((function(method, url, xml) {
                    for (var _a, _b, i = 0; null !== (_b = i < (null === (_a = item.hook) || void 0 === _a ? void 0 : _a.length)) && void 0 !== _b && _b; i++) if (url.includes(item.hook[i])) return !0;
                    return !1;
                }), (function(xml) {
                    xml.addEventListener("readystatechange", (function() {
                        4 === xml.readyState && (Object.defineProperty(xml, "response", {
                            get: function() {
                                return "";
                            }
                        }), Object.defineProperty(xml, "responseText", {
                            get: function() {
                                return "";
                            }
                        }));
                    }), !1);
                })));
            }));
        }, AdBlockApp;
    }(AppBase), CommonFeature = function(_super) {
        function CommonFeature() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._unique = !1, _this.appName = "CommonFeature", _this.rules = new Map([ [ SiteEnum.All, [ /.*/i ] ] ]), 
            _this;
        }
        return __extends(CommonFeature, _super), CommonFeature.prototype.loader = function() {}, 
        CommonFeature.prototype.run = function() {
            GmMenu.Register("\u5f00\u542f\u7f51\u9875\u7f16\u8f91", (function() {
                unsafeWindow.document.body.contentEditable = "true", unsafeWindow.document.designMode = "on";
            }));
        }, CommonFeature;
    }(AppBase), One = function() {
        function One() {
            this.services = [ Ioc.register(CommonFeature), Ioc.register(CsdnApp), Ioc.register(MagnetRegApp), Ioc.register(FeiShuDocApp), Ioc.register(RightClickFreeApp), Ioc.register(AdBlockApp), Ioc.register(ScriptsFind) ];
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
