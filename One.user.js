// ==UserScript==
// @name         【One】懒人神器,懒人福利,全新架构,性能更出众————只需一个脚本包揽所有功能 长期更新,放心使用
// @namespace    https://www.wandhi.com/
// @version      1.0.0
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍：1、CSDN页面清理
// @author       MaxZhang
// @icon         https://www.wandhi.com//favicon.ico
// @include      *://*
// @require      https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
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
    "object" == typeof exports && "undefined" != typeof module ? factory(exports) : "function" == typeof define && define.amd ? define([ "exports" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).One = {});
}(this, (function(exports) {
    "use strict";
    const container = new Map;
    class Ioc {
        static register(app) {
            let className = app.name.toLowerCase();
            return container.has(className) ? container.get(className) : className ? (container.set(className, window.Reflect.construct(app, [])), 
            container.get(className)) : void 0;
        }
    }
    var LogLevel$1;
    !function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel$1 || (LogLevel$1 = {}));
    class Logger$1 {
        static log(msg, level, ...data) {
            data.forEach(e => {
                e.forEach(ee => {});
            });
        }
        static debug(msg, ...data) {
            this.log(msg, LogLevel$1.debug, data);
        }
        static info(msg) {
            this.log(msg, LogLevel$1.info);
        }
        static warn(msg) {
            this.log(msg, LogLevel$1.warn);
        }
        static error(msg) {
            this.log(msg, LogLevel$1.error);
        }
    }
    var SiteEnum, extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    };
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
    var __awaiter = function(thisArg, _arguments, P, generator) {
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
    };
    class Core {
        static get url() {
            return window.location.href;
        }
        static get isTop() {
            return window.self == window.top;
        }
        static addStyle(content) {
            if (GM_addStyle) GM_addStyle(content); else {
                let style = unsafeWindow.window.document.createElement("style");
                style.innerHTML = content, unsafeWindow.window.document.head.append(style);
            }
        }
        static sleep(t) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(resolve => {
                    setTimeout(resolve, 1e3 * t);
                });
            }));
        }
        static random(arr, n = 1) {
            let resArr = [ arr[Math.floor(Math.random() * arr.length)] ];
            for (let i = 1; i < n; i++) resArr.push(arr[Math.floor(Math.random() * arr.length)]);
            return resArr;
        }
        static randomNum(min, max) {
            let range = max - min;
            return min + Math.round(this.rnd() * range);
        }
        static rnd(seed = Date.now()) {
            return (seed = (9301 * seed + 49297) % 233280) / 233280;
        }
        static background(callback, time = 5) {
            setInterval(() => {
                callback();
            }, 1e3 * time);
        }
        static autoLazyload(isOk, callback, time = 5) {
            isOk() ? callback() : setTimeout(() => {
                Core.autoLazyload(isOk, callback, time);
            }, 1e3 * time);
        }
        static lazyload(callback, time = 5) {
            setTimeout(() => {
                callback();
            }, 1e3 * time);
        }
    }
    var LogLevel, Logger = function() {
        function Logger() {}
        return Logger.log = function(msg, level) {}, Logger.debug = function(msg) {
            this.log(msg, LogLevel.debug);
        }, Logger.info = function(msg) {
            null === event || void 0 === event || event.srcElement, this.log(msg, LogLevel.info);
        }, Logger.warn = function(msg) {
            this.log(msg, LogLevel.warn);
        }, Logger.error = function(msg) {
            this.log(msg, LogLevel.error);
        }, Logger;
    }();
    !function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel || (LogLevel = {}));
    !function styleInject(css, ref) {
        void 0 === ref && (ref = {});
        var insertAt = ref.insertAt;
        if (css && "undefined" != typeof document) {
            var head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
            style.type = "text/css", "top" === insertAt && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), 
            style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
        }
    }("#content_views pre {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n#content_views pre code {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n.passport-login-container {\n    display: none !important;\n}\n");
    var CsdnApp = function(_super) {
        function CsdnApp() {
            var _this = _super.call(this) || this;
            return _this.appName = "Csdn", _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net/i ] ]), 
            _this.adSelectors = [ "#footerRightAds", ".side-question-box", "div[id^='dmp_ad']", "div[class^='ad_']", "div[id^='floor-ad_']", ".adsbygoogle" ], 
            _this._unique = !1, _this;
        }
        return function __extends(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        }(CsdnApp, _super), CsdnApp.prototype.loader = function() {}, CsdnApp.prototype.run = function() {
            Core.background(this.adsClear, 3), this.commentClear();
        }, CsdnApp.prototype.adsClear = function() {
            this.adSelectors.forEach((function(selector) {
                $(selector).remove();
            }));
        }, CsdnApp.prototype.commentClear = function() {
            Core.lazyload((function() {
                Logger.info("\u8bc4\u8bba\u533a\u6e05\u7406"), $(".comment-list-box").css("overflow", "").css("max-height", ""), 
                $("#commentPage").removeClass("d-none"), $("#btnMoreComment").remove();
            }), 3);
        }, CsdnApp;
    }(class AppBase {
        constructor() {
            this._unique = !0, this.Process = () => {
                this.loader(), this.run();
            };
        }
        unique() {
            return this._unique;
        }
        linkTest(url) {
            url || (url = Core.url);
            let flag = !1;
            return this.rules.forEach((v, k) => v.test(url) ? (Logger$1.debug(`app:${this.appName}_${SiteEnum[k]} test pass`), 
            flag = !0, this.site = k, !1) : (Logger$1.warn(`app:${this.appName} test fail`), 
            !0)), flag;
        }
        getAppName() {
            return this.appName;
        }
    }), One = function() {
        function One() {
            this.services = [ Ioc.register(CsdnApp) ];
        }
        return One.prototype.run = function() {
            this.services.every((function(element) {
                return !element.linkTest() || (new Promise((function(resolve) {
                    resolve(1);
                })).then(element.Process), Logger$1.debug("element unique:" + element.unique()), 
                !element.unique());
            }));
        }, One;
    }();
    (new One).run(), exports.One = One, Object.defineProperty(exports, "__esModule", {
        value: !0
    });
}));
