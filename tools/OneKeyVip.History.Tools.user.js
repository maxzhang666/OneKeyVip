// ==UserScript==
// @name           【玩的嗨】淘宝、天猫、京东、唯品会隐藏优惠券查询，自动显示历史价格和比价,拒绝虚假价格，让您购买到最优惠的商品,网购省钱小助手 长期更新，放心使用
// @namespace      https://www.wandhi.com/
// @version        2.1
// @homepage       https://wiki.wandhi.com
// @support        https:://wiki.wandhi.com
// @description    拒绝虚假价格，让您购买到最优惠的商品,网购省钱小助手
// @author         MaxZhang
// @icon           https://www.wandhi.com//favicon.ico
// @require        https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require        https://lib.baomitu.com/limonte-sweetalert2/11.4.7/sweetalert2.all.min.js
// @require        https://lib.baomitu.com/echarts/4.6.0/echarts.min.js
// @require        https://lib.baomitu.com/layer/2.3/layer.js
// @require        https://lib.baomitu.com/qrcode-generator/1.4.4/qrcode.min.js
// @require        https://lib.baomitu.com/FileSaver.js/2.0.5/FileSaver.min.js
// @require        https://lib.baomitu.com/viewerjs/1.11.3/viewer.min.js
// @require        https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.production.min.js
// @require        https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.production.min.js
// @require        https://registry.npmmirror.com/@douyinfe/semi-ui/2.51.0/files/dist/umd/semi-ui.min.js
// @include        *://item.taobao.com/*
// @include        *://s.taobao.com/search*
// @include        *://list.tmall.com/search_product.htm*
// @include        *://detail.tmall.com/*
// @include        *://chaoshi.detail.tmall.com/*
// @include        *://detail.tmall.hk/*
// @include        *://item.yiyaojd.com/*
// @include        *://item.jd.com/*
// @include        *://search.jd.com/*
// @include        *://item.jd.hk/*
// @include        *://search.kaola.com/*
// @include        *://goods.kaola.com*
// @include        *://detail.vip.com/detail-*
// @include        *://product.suning.com/*
// @grant          GM_setClipboard
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// @grant          GM_info
// @grant          GM_cookie
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM.getValue
// @grant          GM.setValue
// @grant          GM_notification
// @grant          GM_openInTab
// @grant          GM_deleteValue
// @grant          GM_registerMenuCommand
// @grant          GM_unregisterMenuCommand
// @grant          GM_download
// @connect        api.wandhi.com
// @connect        api.huizhek.com
// @connect        cdn.jsdelivr.net
// @connect        tool.manmanbuy.com
// @connect        gwdang.com
// @connect        scriptcat.org
// @connect        quark.cn
// @connect        openapi.baidu.com
// @connect        localhost
// @compatible     firefox
// @compatible     chrome
// @compatible     opera safari edge
// @compatible     safari
// @compatible     edge
// @run-at         document-end
// @antifeature    referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。
// ==/UserScript==

(function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(require("react-dom"), require("sweetalert2")) : "function" == typeof define && define.amd ? define([ "react-dom", "sweetalert2" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).ReactDOM, global.Swal);
})(this, (function(ReactDOM, Swal) {
    "use strict";
    var ReactDOM__default, Swal__default, LogLevel, BrowerType, VersionResult, Common, SiteEnum, commonjsGlobal, fingerprint2, headStyle, isChrome, isIE, hasWeakMap, ua, isNativeObject, checkFunctions, ItemType;
    function _interopDefaultLegacy(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    ReactDOM__default = _interopDefaultLegacy(ReactDOM), Swal__default = _interopDefaultLegacy(Swal);
    const container = new Map;
    class Container {
        static Registe(type, args) {
            let className = this.processName(type.name);
            return container.has(className) ? container.get(className) : className ? (container.set(className, window.Reflect.construct(type, args)), 
            container.get(className)) : void 0;
        }
        static processName(name) {
            return name.toLowerCase();
        }
        static Require(type) {
            return this.Registe(type, []);
        }
    }
    class Logger {
        static log(msg, group, level) {}
        static debug(msg, group = "debug") {
            this.log(msg, group, LogLevel.debug);
        }
        static info(msg, group = "info") {
            this.log(msg, group, LogLevel.info);
        }
        static warn(msg, group = "warning") {
            this.log(msg, group, LogLevel.warn);
        }
        static error(msg, group = "error") {
            this.log(msg, group, LogLevel.error);
        }
    }
    function __awaiter(thisArg, _arguments, P, generator) {
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
    !function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel || (LogLevel = {})), function(BrowerType) {
        BrowerType[BrowerType.Edge = 0] = "Edge", BrowerType[BrowerType.Edg = 1] = "Edg", 
        BrowerType[BrowerType.Chrome = 2] = "Chrome", BrowerType[BrowerType.Firefox = 3] = "Firefox", 
        BrowerType[BrowerType.Safiri = 4] = "Safiri", BrowerType[BrowerType.Se360 = 5] = "Se360", 
        BrowerType[BrowerType.Ie2345 = 6] = "Ie2345", BrowerType[BrowerType.Baidu = 7] = "Baidu", 
        BrowerType[BrowerType.Liebao = 8] = "Liebao", BrowerType[BrowerType.UC = 9] = "UC", 
        BrowerType[BrowerType.QQ = 10] = "QQ", BrowerType[BrowerType.Sogou = 11] = "Sogou", 
        BrowerType[BrowerType.Opera = 12] = "Opera", BrowerType[BrowerType.Maxthon = 13] = "Maxthon";
    }(BrowerType || (BrowerType = {})), function(VersionResult) {
        VersionResult[VersionResult.less = -1] = "less", VersionResult[VersionResult.equal = 0] = "equal", 
        VersionResult[VersionResult.greater = 1] = "greater", VersionResult[VersionResult.incomparable = NaN] = "incomparable";
    }(VersionResult || (VersionResult = {}));
    class Core {
        constructor() {
            this.url = Core.currentUrl();
        }
        static Render(element, id) {
            let container = document.getElementById(id);
            if (!container) {
                let script = unsafeWindow.window.document.createElement("div");
                script.id = id, unsafeWindow.window.document.head.append(script), container = document.getElementById(id);
            }
            ReactDOM__default.default.render(element, container);
        }
        static appendTo(selector, html) {
            $(selector).append(html);
        }
        static prepend(selector, html) {
            $(selector).prepend(html);
        }
        static lazyload(callback, time = 5) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(resolve => {
                    setTimeout(() => __awaiter(this, void 0, void 0, (function*() {
                        yield callback(), resolve();
                    })), 1e3 * time);
                });
            }));
        }
        static autoLazyload(is_ok, callback, time = 5) {
            return __awaiter(this, void 0, void 0, (function*() {
                return new Promise(resolve => __awaiter(this, void 0, void 0, (function*() {
                    is_ok() ? (yield callback(), Logger.debug("\u81ea\u52a8\u5ef6\u8fdf\u56de\u8c03\u6267\u884c\u5b8c\u6bd5,\u5ef6\u65f6\u65f6\u95f4:" + time), 
                    resolve()) : setTimeout(() => {
                        Core.autoLazyload(is_ok, callback, time).then(() => resolve());
                    }, 1e3 * time);
                })));
            }));
        }
        static sleep(time) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 1e3 * time);
            });
        }
        static random(min, max) {
            let range = max - min, rand = Math.random();
            return min + Math.round(rand * range);
        }
        static randStr(len = 4) {
            let $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", maxPos = $chars.length, pwd = "";
            for (let i = 0; i < len; i++) pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            return pwd;
        }
        static background(callback, time = 5) {
            setInterval(() => {
                callback();
            }, 1e3 * time);
        }
        static get head() {
            return unsafeWindow.window.document.head;
        }
        static isNumber(a) {
            return !Array.isArray(a) && a - parseFloat(a) >= 0;
        }
        static addUrl(key, url) {
            GM_setValue(key, url);
        }
        static openUrl(key) {
            this.open(GM_getValue(key));
        }
        static getPar(option, url = window.location.search) {
            let v = url.match(new RegExp("[?&]" + option + "=([^&]+)", "i"));
            return null == v || v.length < 1 ? "" : v[1];
        }
        static appendCss(url) {
            let linkCSS = document.createElement("link");
            linkCSS.type = "text/css", linkCSS.rel = "stylesheet", linkCSS.href = url, Core.head.appendChild(linkCSS);
        }
        static appendCssContent(content) {
            let Style = document.createElement("style");
            Style.innerHTML = content, Core.head.appendChild(Style);
        }
        bodyAppendCss(url) {
            $("body").append($('<link rel="stylesheet" href="' + url + '">'));
        }
        static bodyAppend(html) {
            $("body").append(html);
        }
        static bodyPrepend(html) {
            $("body").prepend(html);
        }
        static appendJs(url) {
            let linkScript = document.createElement("script");
            linkScript.type = "text/javascript", linkScript.src = url, this.head.appendChild(linkScript);
        }
        bodyAppendJs(url) {
            $("body").append($('<script type="text/javascript" src="' + url + '"><\/script>'));
        }
        static currentUrl() {
            return window.location.href;
        }
        static get url() {
            return window.location.href;
        }
        static inIframe() {
            return !(!self.frameElement || "IFRAME" != self.frameElement.tagName) || (window.frames.length != parent.frames.length || self != top);
        }
        static format(time, fmt = "yyyy-MM-dd hh:mm:ss") {
            let o = {
                "M+": time.getMonth() + 1,
                "d+": time.getDate(),
                "h+": time.getHours(),
                "m+": time.getMinutes(),
                "s+": time.getSeconds(),
                "q+": Math.floor((time.getMonth() + 3) / 3),
                S: time.getMilliseconds()
            };
            /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        static sizeFormat(value) {
            if (value === +value) {
                let unit = [ "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ], index = Math.floor(Math.log(value) / Math.log(1024));
                return `${(value / Math.pow(1024, index)).toFixed(1)}${unit[index]}`;
            }
            return "";
        }
        static encode(str) {
            return window.btoa(str);
        }
        static decode(str) {
            return window.atob(str);
        }
        static open(url, loadInBackGround = !1) {
            if (Core.getBrowser() == BrowerType.Safiri && "undefined" == typeof GM_openInTab) {
                if (void 0 === (null === GM || void 0 === GM ? void 0 : GM.openInTab)) return void window.open(url, "_blank");
                null === GM || void 0 === GM || GM.openInTab(url, loadInBackGround);
            }
            GM_openInTab(url, loadInBackGround);
        }
        static click(selector, callback) {
            $(selector).on("click", callback);
        }
        static uuid(len = 10, split = !1, radix = 0) {
            let i, chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), uuid = [];
            if (radix = 0 == radix ? radix || chars.length : radix, split) {
                let r;
                for (uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-", uuid[14] = "4", i = 0; i < 36; i++) uuid[i] || (r = 0 | 16 * Math.random(), 
                uuid[i] = chars[19 == i ? 3 & r | 8 : r]);
            } else for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            return uuid.join("");
        }
        static getBrowser() {
            let browser = !1, userAgent = window.navigator.userAgent.toLowerCase();
            return null != userAgent.match(/firefox/) ? browser = BrowerType.Firefox : null != userAgent.match(/edge/) ? browser = BrowerType.Edge : null != userAgent.match(/edg/) ? browser = BrowerType.Edg : null != userAgent.match(/bidubrowser/) ? browser = BrowerType.Baidu : null != userAgent.match(/lbbrowser/) ? browser = BrowerType.Liebao : null != userAgent.match(/ubrowser/) ? browser = BrowerType.UC : null != userAgent.match(/qqbrowse/) ? browser = BrowerType.QQ : null != userAgent.match(/metasr/) ? browser = BrowerType.Sogou : null != userAgent.match(/opr/) ? browser = BrowerType.Opera : null != userAgent.match(/maxthon/) ? browser = BrowerType.Maxthon : null != userAgent.match(/2345explorer/) ? browser = BrowerType.Ie2345 : null != userAgent.match(/chrome/) ? browser = navigator.mimeTypes.length > 10 ? BrowerType.Se360 : BrowerType.Chrome : null != userAgent.match(/safari/) && (browser = BrowerType.Safiri), 
            browser;
        }
        static getPercent(num, total) {
            return num = parseFloat(String(num)), total = parseFloat(String(total)), isNaN(num) || isNaN(total) ? 0 : total <= 0 ? "0" : Math.round(num / total * 1e4) / 100;
        }
        static getReact(dom, traverseUp = 0) {
            const domFiber = dom[Object.keys(dom).find(key => key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$"))];
            if (null == domFiber) return null;
            if (domFiber._currentElement) {
                let compFiber = domFiber._currentElement._owner;
                for (let i = 0; i < traverseUp; i++) compFiber = compFiber._currentElement._owner;
                return compFiber._instance;
            }
            const GetCompFiber = fiber => {
                let parentFiber = fiber.return;
                for (;"string" == typeof parentFiber.type; ) parentFiber = parentFiber.return;
                return parentFiber;
            };
            let compFiber = GetCompFiber(domFiber);
            for (let i = 0; i < traverseUp; i++) compFiber = GetCompFiber(compFiber);
            return compFiber.stateNode || compFiber;
        }
        static copyText(text) {
            const textArea = document.createElement("textarea");
            return textArea.style.position = "fixed", textArea.style.visibility = "-10000px", 
            textArea.value = text, document.body.appendChild(textArea), textArea.focus(), textArea.select(), 
            document.execCommand("copy") ? (document.body.removeChild(textArea), !0) : (document.body.removeChild(textArea), 
            !1);
        }
        static getGmCookie(key, domain = "") {
            return new Promise((resolve, reject) => {
                if ("undefined" == typeof GM_cookie) return void resolve("");
                let obj = {
                    name: key,
                    url: Core.url
                };
                domain && (obj.domain = domain), GM_cookie.list(obj, (cookies, error) => {
                    (null == cookies ? void 0 : cookies.length) > 0 ? resolve(cookies[0].value) : (Logger.warn(`get cookie [${key}] is error:${error}`), 
                    resolve(""));
                });
            });
        }
        static getCookie(key) {
            let arr = document.cookie.replace(/\s/g, "").split(";");
            for (let i = 0, l = arr.length; i < l; i++) {
                let tempArr = arr[i].split("=");
                if (tempArr[0] == key) return decodeURIComponent(tempArr[1]);
            }
            return "";
        }
    }
    function styleInject(css, ref) {
        var insertAt, head, style;
        void 0 === ref && (ref = {}), insertAt = ref.insertAt, css && "undefined" != typeof document && (head = document.head || document.getElementsByTagName("head")[0], 
        (style = document.createElement("style")).type = "text/css", "top" === insertAt && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), 
        style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)));
    }
    styleInject('html .aside-nav {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    font-size: 62.5%\n}\n\nbody .aside-nav {\n    font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;\n    margin: 0;\n    font-size: 1.6rem;\n    color: #4e546b\n}\n\n.aside-nav {\n    position: fixed;\n    bottom: 0;\n    left: -47px;\n    width: 260px;\n    height: 260px;\n    -webkit-filter: url(#goo);\n    filter: url(#goo);\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    opacity: .75;\n    z-index: 99999\n}\n\n.aside-nav.no-filter {\n    -webkit-filter: none;\n    filter: none\n}\n\n.aside-nav .aside-menu {\n    position: absolute;\n    width: 70px;\n    height: 70px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background: #f34444;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    text-align: center;\n    line-height: 70px;\n    color: #fff;\n    font-size: 20px;\n    z-index: 1;\n    cursor: move\n}\n\n.aside-nav .menu-item {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #ff7676;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 60px;\n    text-align: center;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    text-decoration: none;\n    color: #fff;\n    -webkit-transition: background .5s, -webkit-transform .6s;\n    transition: background .5s, -webkit-transform .6s;\n    -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n    transition: transform .6s, background .5s;\n    transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n.aside-nav .menu-item:hover {\n    background: #a9c734\n}\n\n.aside-nav .menu-line {\n    line-height: 20px;\n    padding-top: 10px\n}\n\n.aside-nav:hover {\n    opacity: 1\n}\n\n.aside-nav:hover .aside-menu {\n    -webkit-animation: jello 1s;\n    -moz-animation: jello 1s;\n    animation: jello 1s\n}\n\n.aside-nav:hover .menu-first {\n    -webkit-transform: translate3d(0, -135%, 0);\n    -moz-transform: translate3d(0, -135%, 0);\n    transform: translate3d(0, -135%, 0)\n}\n\n.aside-nav:hover .menu-second {\n    -webkit-transform: translate3d(120%, -70%, 0);\n    -moz-transform: translate3d(120%, -70%, 0);\n    transform: translate3d(120%, -70%, 0)\n}\n\n.aside-nav:hover .menu-third {\n    -webkit-transform: translate3d(120%, 70%, 0);\n    -moz-transform: translate3d(120%, 70%, 0);\n    transform: translate3d(120%, 70%, 0)\n}\n\n.aside-nav:hover .menu-fourth {\n    -webkit-transform: translate3d(0, 135%, 0);\n    -moz-transform: translate3d(0, 135%, 0);\n    transform: translate3d(0, 135%, 0)\n}\n\n@-webkit-keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@-moz-keyframes jello {\n    from, 11.1%, to {\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n    -moz-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both\n}\n\n@-webkit-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@-moz-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.bounceInUp {\n    -webkit-animation-name: bounceInUp;\n    -moz-animation-name: bounceInUp;\n    animation-name: bounceInUp;\n    -webkit-animation-delay: 1s;\n    -moz-animation-delay: 1s;\n    animation-delay: 1s\n}\n'), 
    function(Common) {
        class Menu {
            constructor() {
                this.core = new Core, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelector = "#Wandhi-nav";
            }
            loader() {}
            getBody(option) {
                return `<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="Wandhi-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label>${option}</div>`;
            }
            Init(menus, callback, skipIframe = !0) {
                if (Core.inIframe() && skipIframe) return;
                this.loader();
                let str = "";
                menus.forEach((element, index) => {
                    str += `<a href="javascript:void(0)" title="${element.title}" data-cat="${element.type}" class="menu-item menu-line menu-${this.menusClass[index]}">${element.show}</a>`;
                }), Logger.info("\u8ffd\u52a0\u83dc\u5355"), Core.bodyAppend(this.getBody(str)), 
                /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                const drags = {
                    down: !1,
                    x: 0,
                    y: 0,
                    winWid: 0,
                    winHei: 0,
                    clientX: 0,
                    clientY: 0
                };
                let asideNav = $(this.menuSelector)[0];
                $("body").on("mousedown", "" + this.menuSelector, (function(a) {
                    const getCss = (a, e) => {
                        var _a, _b, _c;
                        return null !== (_b = null === (_a = document.defaultView) || void 0 === _a ? void 0 : _a.getComputedStyle(a, null)[e]) && void 0 !== _b ? _b : null !== (_c = a.currentStyle) && void 0 !== _c ? _c : a.currentStyle[e];
                    };
                    drags.down = !0, drags.clientX = a.clientX, drags.clientY = a.clientY, drags.x = parseInt(getCss(this, "left")), 
                    drags.y = parseInt(getCss(this, "top")), drags.winHei = $(window).height(), drags.winWid = $(window).width(), 
                    $(document).on("mousemove", (function(a) {
                        var e = a.clientX - drags.clientX, t = a.clientY - drags.clientY;
                        asideNav = asideNav || $("#Wandhi-nav")[0], asideNav.style.top = drags.y + t + "px", 
                        asideNav.style.left = drags.x + e + "px";
                    }));
                })).on("mouseup", "" + this.menuSelector, (function() {
                    drags.down = !1, $(document).off("mousemove");
                })), Menu.fullScreenMirror(), callback.call(this);
            }
            static fullScreenMirror() {
                unsafeWindow.document.onfullscreenchange = e => {
                    Logger.debug("fullElement:" + unsafeWindow.document.fullscreenElement), Menu.autoHide && (unsafeWindow.document.fullscreenElement ? $("#" + Menu.mainId).hide() : $("#" + Menu.mainId).show());
                };
            }
            static close() {
                Menu.autoHide = !1, $("#" + Menu.mainId).hide();
            }
        }
        Menu.mainId = "Wandhi-nav", Menu.autoHide = !0, Common.Menu = Menu;
    }(Common || (Common = {}));
    class PluginBase {
        constructor() {
            this._unique = !0, this.semiui = !1, this.menu = new Common.Menu, this.Process = () => {
                this.semiui && Core.appendCss("https://registry.npmmirror.com/@douyinfe/semi-ui/2.51.0/files/dist/css/semi.min.css"), 
                this.loader(), this.run();
            }, this._appName = "base";
        }
        unique() {
            return this._unique;
        }
        linkTest(url) {
            url || (url = Core.currentUrl());
            let flag = !1;
            return this.rules.forEach((v, k) => !v.test(url) || (flag = !0, this.site = k, !1)), 
            flag;
        }
        appName() {
            return this._appName;
        }
    }
    !function(SiteEnum) {
        SiteEnum.All = "All", SiteEnum.Settings = "Settings", SiteEnum.Settings_Jiexi_Opt = "Settings_Jiexi_Opt", 
        SiteEnum.Settings_AutoJump = "Settings_AutoJump", SiteEnum.Settings_AutoJump_Opt = "Settings_AutoJump_Opt", 
        SiteEnum.Settings_CSDN = "Settings_CSDN", SiteEnum.Settings_CSDN_Opt = "Settings_CSDN_Opt", 
        SiteEnum.Settings_Search = "Settings_Search", SiteEnum.Settings_Search_Opt = "Settings_Search_Opt", 
        SiteEnum.Settings_WangPan_Opt = "Settings_WangPan_Opt", SiteEnum.Settings_Bili_Pc_Opt = "Settings_Bili_Pc_Opt", 
        SiteEnum.TaoBao = "TaoBao", SiteEnum.TMall = "TMall", SiteEnum.JingDong = "JingDong", 
        SiteEnum.JingDongList = "JingDongList", SiteEnum.IQiYi = "IQiYi", SiteEnum.YouKu = "YouKu", 
        SiteEnum.LeShi = "LeShi", SiteEnum.TuDou = "TuDou", SiteEnum.Tencent_V = "Tencent_V", 
        SiteEnum.MangGuo = "MangGuo", SiteEnum.SoHu = "SoHu", SiteEnum.Acfun = "Acfun", 
        SiteEnum.BiliBili = "BiliBili", SiteEnum.BiliMobile = "BiliMobile", SiteEnum.M1905 = "M1905", 
        SiteEnum.PPTV = "PPTV", SiteEnum.YinYueTai = "YinYueTai", SiteEnum.WangYi = "WangYi", 
        SiteEnum.Tencent_M = "Tencent_M", SiteEnum.KuGou = "KuGou", SiteEnum.KaoLa = "KaoLa", 
        SiteEnum.KuWo = "KuWo", SiteEnum.XiaMi = "XiaMi", SiteEnum.TaiHe = "TaiHe", SiteEnum.QingTing = "QingTing", 
        SiteEnum.LiZhi = "LiZhi", SiteEnum.MiGu = "MiGu", SiteEnum.XiMaLaYa = "XiMaLaYa", 
        SiteEnum.WenKu = "WenKu", SiteEnum.YouTuBe = "YouTuBe", SiteEnum.SXB = "SXB", SiteEnum.BDY = "BDY", 
        SiteEnum.ALY = "ALY", SiteEnum.ALY_P = "ALY_P", SiteEnum.BDY1 = "BDY1", SiteEnum.LZY = "LZY", 
        SiteEnum.SuNing = "SuNing", SiteEnum.Steam = "Steam", SiteEnum.Vp = "Vp", SiteEnum.CSDN = "CSDN", 
        SiteEnum.CSDN_Download = "CSDN_Download", SiteEnum.ZhiHu = "ZhiHu", SiteEnum.JianShu = "JianShu", 
        SiteEnum.JueJin = "JueJin", SiteEnum.Gitee = "Gitee", SiteEnum.Weibo = "Weibo", 
        SiteEnum.TuXiaoChao = "TuXiaoChao", SiteEnum.OsCh = "OsCh", SiteEnum.AiFaDian = "AiFaDian", 
        SiteEnum.Baidu = "Baidu", SiteEnum.BaiduPanMain = "BaiduPanMain", SiteEnum.BaiduPanHome = "BaiduPanHome", 
        SiteEnum.DouBan = "DouBan", SiteEnum.g17173 = "g17173", SiteEnum.Google = "Google", 
        SiteEnum.SoGou = "SoGou", SiteEnum.KuaKeHome = "KuaKeHome", SiteEnum.TencentDoc = "TencentDoc", 
        SiteEnum.TencentDiskDoc = "TencentDiskDoc", SiteEnum.TencentMail = "TencentMail", 
        SiteEnum.TencentCloudBlog = "TencentCloudBlog", SiteEnum.SsPAi = "SsPai", SiteEnum.FeiShuDoc = "FeiShuDoc", 
        SiteEnum.TencentQQ = "TencentQQ", SiteEnum.Shuma = "Shuma", SiteEnum.BD_DETAIL_OLD = "BD_DETAIL_OLD", 
        SiteEnum.BD_DETAIL_NEW = "BD_DETAIL_NEW", SiteEnum.BD_DETAIL_Share = "BD_DETAIL_Share", 
        SiteEnum.Gwd = "Gwd", SiteEnum.Xxqg = "Xxqg", SiteEnum.Juhaowan = "Juhaowan", SiteEnum.MhXin = "MhXin", 
        SiteEnum.V2EX = "V2EX", SiteEnum.Github = "Github", SiteEnum.NodeSeek = "NodeSeek", 
        SiteEnum.HiTv = "HiTv", SiteEnum.HiTvCheck = "HiTvCheck", SiteEnum.Xhs = "Xhs", 
        SiteEnum.KingSoftDoc = "KingSoftDoc", SiteEnum.BingCn = "BingCn", SiteEnum.Bing = "Bing", 
        SiteEnum.SiChuang = "SiChuang", SiteEnum.Uisdc = "Uisdc", SiteEnum.YuQue = "YuQue", 
        SiteEnum.KDocs = "KDocs", SiteEnum.CTO51 = "CTO51", SiteEnum.WenJuanXing = "WenJuanXing", 
        SiteEnum.InfoQ = "InfoQ", SiteEnum.WeChatWork = "WeChatWork", SiteEnum.KuaKeShare = "KuaKeShare";
    }(SiteEnum || (SiteEnum = {}));
    class Config {
        static get env() {
            return GM_info;
        }
        static get(key, defaultValue = "") {
            let objStr = GM_getValue(this.encode(key), null);
            if (objStr) {
                let obj = JSON.parse(objStr);
                if (-1 == obj.exp || obj.exp > (new Date).getTime()) return Logger.info(`cache true:${key},${obj.exp}`), 
                obj.value;
                GM_deleteValue(key);
            }
            return Logger.info("cache false"), defaultValue;
        }
        static set(key, v, exp = -1) {
            let obj = {
                key: key,
                value: v,
                exp: -1 == exp ? exp : (new Date).getTime() + 1e3 * exp
            };
            Logger.debug(obj), GM_setValue(this.encode(key), JSON.stringify(obj));
        }
        static remember(key, exp, callback) {
            return new Promise((reso, reject) => {
                let v = this.get(key, null);
                null == v || "" === v ? callback().then(res => {
                    this.set(key, res, exp), reso(res);
                }).catch(e => {
                    reject(e);
                }) : (Logger.debug(v), reso(v));
            });
        }
        static clear(key) {
            GM_deleteValue(key);
        }
        static decode(str) {
            return atob(str);
        }
        static encode(str) {
            return btoa(str);
        }
        static inc(s) {
            let v = Config.get(s, 0);
            v++, Config.set(s, v);
        }
    }
    class AjaxOption {
        constructor(_url, _methodType = "GET", _data, _success, _header = new Map, timeOut = 60) {
            this.url = _url, this.methodType = _methodType, this.onSuccess = _success, this.onError = _success, 
            this.data = _data, this.headers = _header, this.timeOut = timeOut;
        }
        getData() {
            if (this.data instanceof FormData) return this.data;
            if (this.data instanceof Map) {
                let fd = new FormData;
                return this.data.forEach((v, k) => {
                    fd.append(k, v);
                }), fd;
            }
            {
                let fd = new FormData;
                for (var i in this.data) fd.append(i, this.data[i]);
                return fd;
            }
        }
    }
    class Http {
        constructor() {}
        static ajax(option) {
            var _a, _b, _c;
            option.headers.set("User-Agent", null !== (_a = unsafeWindow.navigator.userAgent) && void 0 !== _a ? _a : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"), 
            0 == option.headers.has("Accept") && option.headers.set("Accept", "application/atom+xml,application/xml,text/xml");
            let head = new HttpHeaders;
            option.url.indexOf("wandhi") > 0 && (head.version = Config.env.script.version, head.auth = null !== (_b = Config.env.script.author) && void 0 !== _b ? _b : "", 
            head.namespace = null !== (_c = Config.env.script.namespace) && void 0 !== _c ? _c : ""), 
            option.headers.forEach((v, k) => {
                head[k] = v;
            }), GM_xmlhttpRequest({
                url: option.url,
                method: option.methodType,
                headers: head,
                data: option.getData(),
                timeout: 1e3 * option.timeOut,
                onload: function(res) {
                    var _a, _b;
                    try {
                        null === (_a = option.onSuccess) || void 0 === _a || _a.call(option, "POST" == option.methodType ? JSON.parse(res.responseText) : res.responseText);
                    } catch (error) {
                        null === (_b = option.onSuccess) || void 0 === _b || _b.call(option, null);
                    }
                },
                onerror: function(res) {
                    var _a, _b, _c;
                    (null === (_a = res.finalUrl) || void 0 === _a ? void 0 : _a.indexOf("adguard.org")) > 0 || (null === (_b = option.url) || void 0 === _b ? void 0 : _b.indexOf("jsdelivr")) > 0 ? option.onError(null) : null === (_c = option.onError) || void 0 === _c || _c.call(option, res);
                }
            });
        }
        static ajaxNew(url, method, data, header = new Map, dataType) {
            var _a, _b;
            let head = new HttpHeaders;
            header.size > 0 && header.forEach((v, k) => {
                head[k] = v;
            }), url.indexOf("wandhi") > 0 && (head.version = Config.env.script.version, head.auth = null !== (_a = Config.env.script.author) && void 0 !== _a ? _a : "", 
            head.namespace = null !== (_b = Config.env.script.namespace) && void 0 !== _b ? _b : "");
            let _data = (_data => {
                if (_data instanceof FormData) return data;
                if (data instanceof Map) {
                    let fd = new FormData;
                    return _data.forEach((v, k) => {
                        let _v;
                        _v = "string" == typeof v ? v.toString() : JSON.stringify(v), fd.append(k, _v);
                    }), fd;
                }
                return JSON.stringify(_data);
            })(data);
            return Logger.debug(_data), null != dataType ? "multipart/form-data" != dataType && (head["Content-Type"] = dataType) : data instanceof FormData || data instanceof Map ? head["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8" : head["Content-Type"] = "application/json; charset=utf-8", 
            new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                    url: url,
                    method: method,
                    headers: head,
                    data: _data,
                    onload: res => {
                        try {
                            resolve(JSON.parse(res.responseText));
                        } catch (error) {
                            Logger.debug(error), resolve(res.responseText);
                        }
                    },
                    onerror: err => {
                        Logger.debug(err), reject(err);
                    },
                    ontimeout: () => {
                        Logger.debug("\u8bf7\u6c42\u8d85\u65f6:" + url), reject("\u8bf7\u6c42\u8d85\u65f6");
                    }
                });
            });
        }
        static getData(url, callback) {
            $.getJSON(url, (function(d) {
                callback(d);
            }));
        }
        static JqGet(url, callback, head = new Map) {
            Http.get(url, new Map, head).then(d => {
                callback(d);
            });
        }
        static post(url, data, timeOut = 10) {
            return new Promise((function(resolve) {
                Http.ajax(new AjaxOption(url, "POST", data, (function(data) {
                    resolve(data);
                }), new Map, timeOut));
            }));
        }
        static get(url, data = new Map, head = new Map, loading = !0, time_out = 10) {
            return new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, (function(data) {
                    var _a;
                    try {
                        let res = null !== (_a = JSON.parse(data)) && void 0 !== _a ? _a : data;
                        resolve(res);
                    } catch (error) {
                        Logger.debug(error), reject();
                    }
                }), head, time_out));
            }));
        }
        static getWithHead(url, data = new Map, head = new Map, time_out = 10) {
            return new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, (function(data) {
                    var _a;
                    try {
                        let res = null !== (_a = JSON.parse(data)) && void 0 !== _a ? _a : data;
                        resolve(res);
                    } catch (error) {
                        Logger.debug(error), reject();
                    }
                }), head, time_out));
            }));
        }
        static postWithHead(url, data = new Map, head = new Map, time_out = 10) {
            return new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "POST", data, (function(data) {
                    try {
                        resolve(data);
                    } catch (error) {
                        Logger.debug([ url, error ]), reject();
                    }
                }), head, time_out));
            }));
        }
        static get_text(url) {
            return new Promise((function(resolve) {
                Http.ajax(new AjaxOption(url, "GET", new Map, (function(data) {
                    resolve(data);
                })));
            }));
        }
        static get302(url) {
            return new Promise((function(resolve) {
                GM_xmlhttpRequest({
                    url: url,
                    onload: function(response) {
                        resolve(response.finalUrl);
                    },
                    onabort: () => {
                        resolve("");
                    },
                    method: "GET",
                    onerror: response => {
                        resolve("");
                    }
                });
            }));
        }
    }
    class HttpHeaders {}
    class Route {
        static get apiRoot() {
            return "https://api.huizhek.com/api";
        }
        static baseApi(api, data, callback, timeOut = 10) {
            Http.post(Route.apiRoot + api, data, timeOut).then(res => {
                callback(res);
            });
        }
        static querySbx(id, callback) {
            "" !== Config.get(this.sxb_key, "") ? this.query365(id, Config.get(this.sxb_key), callback) : this.queryValue("sxb_anhao", res => {
                this.query365(id, res.data, callback);
            });
        }
        static sbxFeedback(id, answer) {
            this.baseApi("/tools/record", new Map([ [ "id", id ], [ "data", answer ], [ "anhao", Config.get(this.sxb_key) ] ]), () => {});
        }
        static query365(id, anhao, callback) {
            let api = Config.get("sxb_api");
            api ? Http.post(api, new Map([ [ "docinfo", `https://www.shangxueba.com/ask/${id}.html` ], [ "anhao", anhao ] ])).then(res => {
                callback(res);
            }) : this.queryValue("sxb_api", res => {
                Config.set("sxb_api", res.data, 864e5), Http.post(res.data, new Map([ [ "docinfo", `https://www.shangxueba.com/ask/${id}.html` ], [ "anhao", anhao ] ]));
            });
        }
        static queryValue(key, callback) {
            this.baseApi(Route.config, new Map([ [ "key", key ] ]), callback);
        }
        static queryHistory(url, siteType, callback) {
            this.baseApi(this.history, new Map([ [ "url", url ], [ "type", siteType ] ]), callback);
        }
        static queryHistoryV5(url) {
            return new Promise((reso, reje) => {
                this.baseApi(this.historyv3, new Map([ [ "url", url ] ]), res => {
                    res.code ? reso(res) : reje(res);
                });
            });
        }
        static queryHistoryV4Pre(url) {
            return new Promise((reso, reje) => {
                this.baseApi(url, new Map([]), res => {
                    res.code ? reso(res) : reje(res);
                });
            });
        }
        static queryHistoryV4(url, pre, callback) {
            Http.JqGet(pre, res => {
                Http.JqGet(url, callback, new Map([ [ ":authority", "browser.gwdang.com" ], [ "referer", unsafeWindow.window.location.origin ] ]));
            });
        }
        static queryBiliImg(aid, callback) {
            Http.getData(`${this.biliInfo}?aid=${aid}`, callback);
        }
        static queryBiliDown(aid, cid, callback) {
            Http.get(`${this.bilidown}?cid=${cid}&avid=${aid}&qn=112&fnval=4048&s=wandhi`).then(res => {
                callback(res);
            });
        }
        static queryBiliDownWeb(aid, cid) {
            return Http.get(`https://api.bilibili.com/x/player/wbi/playurl?avid=${aid}&cid=${cid}`);
        }
        static queryCoupons(itemId, callback) {
            this.baseApi(this.coupons, new Map([ [ "id", itemId ] ]), callback);
        }
        static queryJdCoupons(itemId, callback) {
            Route.baseApi(Route.jd_coupons, new Map([ [ "item_id", itemId ] ]), callback);
        }
        static querySnCoupons(url, callback) {
            Route.baseApi(Route.sn_coupons, new Map([ [ "url", url ] ]), callback);
        }
        static queryVpCoupons(url, callback) {
            Route.baseApi(Route.vp_coupons, new Map([ [ "url", url ] ]), callback);
        }
        static queryKlCoupons(itemId) {
            return new Promise(reso => {
                Route.baseApi(Route.kl_coupons, new Map([ [ "itemId", itemId ] ]), res => {
                    reso(res);
                });
            });
        }
        static couponQuery(itemId, type, callback) {
            Route.baseApi("/coupons/info", new Map([ [ "id", itemId ], [ "type", type ] ]), callback);
        }
        static _getSurl() {
            let reg = /(?<=s\/|surl=)([a-zA-Z0-9_-]+)/g;
            return reg.test(Core.url) ? Core.url.match(reg)[0] : "";
        }
        static baiduDriect(fids, accessToken) {
            return __awaiter(this, void 0, void 0, (function*() {
                let url = `https://pan.baidu.com/rest/2.0/xpan/multimedia?method=filemetas&dlink=1&fsids=${fids}&access_token=${accessToken}`;
                return Http.ajaxNew(url, "GET", null, new Map([ [ "User-Agent", "pan.baidu.com" ] ]));
            }));
        }
        static baiduAccessToken() {
            return Http.get302("https://openapi.baidu.com/oauth/2.0/authorize?client_id=IlLqBbU3GjQ0t46TRwFateTprHWl39zF&response_type=token&redirect_uri=oob&scope=basic,netdisk");
        }
        static baiduAccessTokenAuth() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, (function*() {
                let url = "https://openapi.baidu.com/oauth/2.0/authorize?client_id=IlLqBbU3GjQ0t46TRwFateTprHWl39zF&response_type=token&redirect_uri=oob&scope=basic,netdisk", html = yield Http.get_text(url), data = new Map;
                return data.set("grant_permissions_arr", "netdisk"), data.set("bdstoken", null === (_a = null == html ? void 0 : html.match(/name="bdstoken"\s+value="([^"]+)"/)) || void 0 === _a ? void 0 : _a[1]), 
                data.set("client_id", null === (_b = null == html ? void 0 : html.match(/name="client_id"\s+value="([^"]+)"/)) || void 0 === _b ? void 0 : _b[1]), 
                data.set("response_type", "token"), data.set("display", "page"), data.set("grant_permissions", "basic,netdisk"), 
                Http.ajaxNew(url, "POST", data, new Map, "multipart/form-data");
            }));
        }
        static quarkDriect(fids) {
            return Http.ajaxNew("https://drive.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc", "POST", {
                fids: fids
            }, new Map([ [ "User-Agent", "quark-cloud-drive" ] ]));
        }
        static RouteConfig() {
            return new Promise(resolve => {
                let config = Config.get("script_config", !1);
                config ? resolve(config) : Route.baseApi("/config/script", new Map, res => {
                    let config = JSON.parse(Core.decode(res.data));
                    Config.set("script_config", config, 7200), resolve(config);
                });
            });
        }
    }
    Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
    Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", 
    Route.bili = "/tools/bili", Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", 
    Route.bilidown = "https://api.bilibili.com/x/player/wbi/playurl", Route.coupons = "/tb/infos/", 
    Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", Route.sn_coupons = "/sn/info", 
    Route.vp_coupons = "/vp/info", Route.kl_coupons = "/kl/info";
    class EventHelper {
        static bind_click(query, act) {
            var _a;
            null === (_a = document.querySelector(query)) || void 0 === _a || _a.addEventListener("click", e => {
                act();
            });
        }
    }
    class Runtime {
        static get url() {
            return window.location.href;
        }
    }
    class BaseCoupon {
        constructor() {}
        init_qrcode(url) {
            return new Promise(resolve => {
                let qr = qrcode(0, "H");
                qr.addData(url), qr.make(), $("#vip-plugin-outside-coupons-qrcode-img").html(qr.createSvgTag(4, 1)), 
                resolve(!0);
            });
        }
        init_coupon_info(after, price, time, q_url = "") {
            let coup_info = "<p>\u79fb\u52a8\u7aef<span>\u5feb\u6377</span>\u8d2d\u4e70</p>", act = '<a class="vip-plugin-outside-coupons-button quan-none" href="javascript:void(0)">\u6253\u5f00\u624b\u673a\u626b\u4e00\u626b</a>', url = Runtime.url;
            if (q_url) {
                let now = new Date;
                coup_info = `<p><span>${price}</span> \u5143\u5238</p><p class="vip-plugin-outside-coupons-date">\uff08${Core.format(now, "yyyy-MM-dd")} ~ ${time}\uff09</p>`, 
                act = `<a class="vip-plugin-outside-coupons-button quan-exits">\u626b\u7801\u9886${price}\u5143\u4f18\u60e0\u5238</a>`, 
                url = q_url;
            }
            new Promise(resolve => {
                $(".vip-plugin-outside-coupons-title").html(coup_info), $(".vip-plugin-outside-coupons-action").html(act), 
                resolve();
            }).then(() => {
                q_url && EventHelper.bind_click(".vip-plugin-outside-coupons-button", () => {
                    Core.open(url);
                });
            });
        }
        default(url = "") {
            Logger.debug(url), this.init_qrcode("" == url ? Runtime.url : url).then(res => {
                this.init_coupon_info(0, 0, "");
            });
        }
    }
    class VpCoupon extends BaseCoupon {
        init_html(html) {
            return new Promise(resolve => {
                if ($(".FW-product.clearfix").length) Core.appendTo(".FW-product.clearfix", html), 
                resolve(!0); else {
                    let that = this;
                    Core.lazyload(() => that.init_html(html), 1);
                }
            });
        }
        init_coupons() {
            Route.queryVpCoupons(Runtime.url, res => {
                var q, exp;
                Logger.debug(res), res.code ? res.data.has_coupon ? (q = res.data, exp = new Date(q.quan_time), 
                this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                    var _a;
                    this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), null !== (_a = decodeURIComponent(q.quan_link)) && void 0 !== _a ? _a : Core.url);
                })) : res.data.quan_link ? (this.default(res.data.quan_link), EventHelper.bind_click("#vip-plugin-outside-coupons-qrcode-img", () => {
                    Core.open(res.data.quan_link);
                })) : this.default() : this.default();
            });
        }
    }
    class SuningCoupon extends BaseCoupon {
        init_html(html) {
            return new Promise(resolve => {
                if ($(".proinfo-container").length) Core.appendTo(".proinfo-container", html), resolve(!0); else {
                    let that = this;
                    Core.lazyload(() => that.init_html(html), 1);
                }
            });
        }
        init_coupons() {
            Route.querySnCoupons(Runtime.url, res => {
                var q, exp;
                Logger.debug(res), res.code ? res.data.has_coupon ? (q = res.data, exp = new Date(q.quan_time), 
                this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                    this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                })) : res.data.quan_link ? (this.default(res.data.quan_link), EventHelper.bind_click("#vip-plugin-outside-coupons-qrcode-img", () => {
                    Core.open(res.data.quan_link);
                })) : this.default() : this.default();
            });
        }
    }
    class JdCoupon extends BaseCoupon {
        init_html(html) {
            return new Promise(resolve => {
                $(".product-intro").length ? (Core.appendTo(".product-intro", html), resolve(!0)) : setTimeout(this.init_html, 2e3);
            });
        }
        init_coupons() {
            var _a, _b;
            let item_id = null === (_b = null === (_a = unsafeWindow.pageConfig) || void 0 === _a ? void 0 : _a.product) || void 0 === _b ? void 0 : _b.skuid;
            if (item_id) {
                let key = "jd_" + item_id, coupon = Config.get(key);
                if (coupon) if (coupon.has_coupon) {
                    let q = coupon, exp = new Date(q.quan_time);
                    this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                        this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                    });
                } else coupon.quan_link ? this.default(coupon.quan_link) : this.default(); else Route.queryJdCoupons(item_id, res => {
                    if (Logger.debug(res), res.code) if (Config.set(key, res.data, 43200), res.data.has_coupon) {
                        let q = res.data, exp = new Date(q.quan_time);
                        this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                            this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                        });
                    } else res.data.quan_link ? this.default(res.data.quan_link) : this.default(); else this.default();
                });
            } else this.default();
        }
    }
    class TaoCoupon extends BaseCoupon {
        init_html(html) {
            return new Promise(resolve => {
                Core.autoLazyload(() => {
                    var _a;
                    return (null === (_a = $('[class^="BasicContent--"] [class^="detailInfoWrap--"]')) || void 0 === _a ? void 0 : _a.length) > 0;
                }, () => {
                    $('[class^="BasicContent--"] [class^="detailInfoWrap--"]').before(html), resolve(!0);
                }, .2);
            });
        }
        init_coupons() {
            let key = "n_itemId_" + Core.getPar("id"), coupon = Config.get(key, !1);
            coupon ? (Logger.info(coupon), this.render_coupon((null == coupon ? void 0 : coupon.length) > 0 && "string" != typeof coupon ? coupon[0] : void 0)) : Route.queryCoupons(Core.getPar("id"), data => {
                var _a, _b, q, exp;
                data.code ? ((null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0 ? (q = data.data[0], 
                exp = new Date(q.quan_time), this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                    this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                })) : this.init_qrcode(Runtime.url).then(res => {
                    this.init_coupon_info(0, 0, "");
                }), Config.set(key, (null === (_b = data.data) || void 0 === _b ? void 0 : _b.length) > 0 ? data.data : [], 43200)) : this.init_qrcode(Runtime.url).then(res => {
                    this.init_coupon_info(0, 0, "");
                });
            });
        }
        render_coupon(quan) {
            if (null == quan) this.init_qrcode(Runtime.url).then(res => {
                this.init_coupon_info(0, 0, "");
            }); else {
                let q = quan;
                var exp = new Date(q.quan_time);
                this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                    this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                });
            }
        }
    }
    class DefCoupon extends BaseCoupon {
        init_html(html) {
            return new Promise(resolve => {
                resolve(!1);
            });
        }
        init_coupons() {}
    }
    class LinesOption {}
    styleInject("#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none;\n    flex: 1;\n}\n\n#vip-plugin-outside .vip-plugin-outside-toolbar {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    z-index: 10000;\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode svg {\n    margin: 0 auto;\n    height: 150px;\n    width: 150px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history,\n#vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    /* width: 500px; */\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2 !important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n\n.vip-plugin-outside-similar-buy-list-li-store {\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}");
    class MsgInfo {}
    class PromoInfo {
        constructor() {
            this.price = 0, this.time = 0;
        }
    }
    class HistoryService extends PluginBase {
        constructor() {
            super(...arguments), this.rules = new Map([ [ SiteEnum.TMall, /detail.tmall.com\/item.htm/i ], [ SiteEnum.TaoBao, /item.taobao.com/i ], [ SiteEnum.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i ], [ SiteEnum.SuNing, /product.suning.com/i ], [ SiteEnum.Vp, /detail.vip.com/i ] ]), 
            this.factory = new DefCoupon;
        }
        loader() {}
        run() {
            this.injectHistory();
        }
        injectHistory() {
            switch (Logger.debug(this.site), this.site) {
              case SiteEnum.TaoBao:
              case SiteEnum.TMall:
                this.factory = new TaoCoupon;
                break;

              case SiteEnum.JingDong:
                this.factory = new JdCoupon;
                break;

              case SiteEnum.SuNing:
                this.factory = new SuningCoupon;
                break;

              case SiteEnum.Vp:
                this.factory = new VpCoupon;
                break;

              default:
                this.factory = new DefCoupon;
            }
            this.factory.init_html(this.getHistoryHtml()).then(res => {
                res && this.InitPriceHistory(), this.factory.init_coupons && this.factory.init_coupons();
            });
        }
        InitPriceHistory() {
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d");
        }
        getHistoryHtml() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode"><canvas id="vip-plugin-outside-coupons-qrcode-img"></canvas></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                </div>';
        }
        chartMsg(msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        }
        getChartOption(data) {
            var _a, _b, text = `\u5386\u53f2\u4f4e\u4ef7\uff1a{red|\uffe5${data.min}} ( {red|${data.date}} ) \u5206\u6790\uff1a${data.mark}`;
            let chartOption = new LinesOption;
            chartOption = {
                title: {
                    left: "center",
                    subtext: text,
                    subtextStyle: {
                        color: "#000",
                        rich: {
                            red: {
                                color: "red"
                            }
                        }
                    }
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    },
                    formatter: function(params) {
                        var _a, _b, year, month, day;
                        params = params[0];
                        let date = new Date(params.name);
                        year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
                        let monthStr = month.toString(), dayStr = day.toString();
                        month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day);
                        let price = null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toString();
                        return price = null === (_b = parseFloat(price)) || void 0 === _b ? void 0 : _b.toFixed(2), 
                        `\u65e5\u671f\uff1a${year}-${monthStr}-${dayStr}<br/>\u4ef7\u683c\uff1a\uffe5${price}${"" == params.value[2] ? "" : "<br/>" + params.value[2]}`;
                    }
                },
                grid: {
                    left: 0,
                    right: 20,
                    top: 50,
                    bottom: 10,
                    containLabel: !0
                },
                xAxis: {
                    type: "time"
                },
                yAxis: {
                    type: "value"
                },
                series: [ {
                    type: "line",
                    step: "end",
                    data: (data => {
                        let l = [];
                        return data.price_detail.forEach(v => {
                            let p = {
                                name: v.time,
                                value: [ v.timestamp, v.price, v.mark ]
                            };
                            l.push(p);
                        }), l;
                    })(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            };
            chartOption.yAxis = {
                min: 10 * Math.floor(.9 * data.min / 10),
                max: 10 * Math.ceil(1.1 * data.max / 10)
            };
            let line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop();
            return line.markPoint = {
                data: [ {
                    value: data.min,
                    coord: [ data.date, data.min ],
                    name: "\u6700\u5c0f\u503c",
                    itemStyle: {
                        color: "green"
                    }
                }, {
                    value: data.max,
                    coord: [ data.max_date, data.max ],
                    name: "\u6700\u5927\u503c",
                    itemStyle: {
                        color: "red"
                    }
                } ]
            }, null === (_b = chartOption.series) || void 0 === _b || _b.push(line), chartOption.dataZoom = [ {
                type: "slider",
                show: !0,
                realtime: !0,
                start: 0,
                end: 100
            } ], chartOption;
        }
        theme() {
            return {
                color: [ "#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089" ],
                title: {
                    itemGap: 8,
                    textStyle: {
                        fontWeight: "normal",
                        color: "#008acd"
                    }
                },
                legend: {
                    itemGap: 8
                },
                dataRange: {
                    itemWidth: 15,
                    color: [ "#2ec7c9", "#b6a2de" ]
                },
                toolbox: {
                    color: [ "#1e90ff", "#1e90ff", "#1e90ff", "#1e90ff" ],
                    effectiveColor: "#ff4500",
                    itemGap: 8
                },
                tooltip: {
                    backgroundColor: "rgba(50,50,50,0.5)",
                    axisPointer: {
                        type: "line",
                        lineStyle: {
                            color: "#008acd"
                        },
                        crossStyle: {
                            color: "#008acd"
                        },
                        shadowStyle: {
                            color: "rgba(200,200,200,0.2)"
                        }
                    }
                },
                dataZoom: {
                    dataBackgroundColor: "#efefff",
                    fillerColor: "rgba(182,162,222,0.2)",
                    handleColor: "#008acd"
                },
                grid: {
                    borderColor: "#eee"
                },
                categoryAxis: {
                    axisLine: {
                        lineStyle: {
                            color: "#008acd"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [ "#eee" ]
                        }
                    }
                },
                valueAxis: {
                    axisLine: {
                        lineStyle: {
                            color: "#008acd"
                        }
                    },
                    splitArea: {
                        show: !0,
                        areaStyle: {
                            color: [ "rgba(250,250,250,0.1)", "rgba(200,200,200,0.1)" ]
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [ "#eee" ]
                        }
                    }
                },
                polar: {
                    axisLine: {
                        lineStyle: {
                            color: "#ddd"
                        }
                    },
                    splitArea: {
                        show: !0,
                        areaStyle: {
                            color: [ "rgba(250,250,250,0.2)", "rgba(200,200,200,0.2)" ]
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#ddd"
                        }
                    }
                },
                timeline: {
                    lineStyle: {
                        color: "#008acd"
                    },
                    controlStyle: {
                        normal: {
                            color: "#008acd"
                        },
                        emphasis: {
                            color: "#008acd"
                        }
                    },
                    symbol: "emptyCircle",
                    symbolSize: 3
                },
                bar: {
                    itemStyle: {
                        normal: {
                            borderRadius: 5
                        },
                        emphasis: {
                            borderRadius: 5
                        }
                    }
                },
                line: {
                    symbol: "emptyCircle",
                    symbolSize: 3
                },
                k: {
                    itemStyle: {
                        normal: {
                            color: "#d87a80",
                            color0: "#2ec7c9",
                            lineStyle: {
                                width: 1,
                                color: "#d87a80",
                                color0: "#2ec7c9"
                            }
                        }
                    }
                },
                scatter: {
                    symbol: "circle",
                    symbolSize: 4
                },
                radar: {
                    symbol: "emptyCircle",
                    symbolSize: 3
                },
                map: {
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: "#ddd"
                            },
                            label: {
                                textStyle: {
                                    color: "#d87a80"
                                }
                            }
                        },
                        emphasis: {
                            areaStyle: {
                                color: "#fe994e"
                            },
                            label: {
                                textStyle: {
                                    color: "rgb(100,0,0)"
                                }
                            }
                        }
                    }
                },
                force: {
                    itemStyle: {
                        normal: {
                            linkStyle: {
                                strokeColor: "#1e90ff"
                            }
                        }
                    }
                },
                chord: {
                    padding: 4,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 1,
                                color: "rgba(128, 128, 128, 0.5)"
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: "rgba(128, 128, 128, 0.5)"
                                }
                            }
                        },
                        emphasis: {
                            lineStyle: {
                                width: 1,
                                color: "rgba(128, 128, 128, 0.5)"
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: "rgba(128, 128, 128, 0.5)"
                                }
                            }
                        }
                    }
                },
                gauge: {
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: [ [ .2, "#2ec7c9" ], [ .8, "#5ab1ef" ], [ 1, "#d87a80" ] ],
                            width: 10
                        }
                    },
                    axisTick: {
                        splitNumber: 10,
                        length: 15,
                        lineStyle: {
                            color: "auto"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "auto"
                        }
                    },
                    splitLine: {
                        length: 22,
                        lineStyle: {
                            color: "auto"
                        }
                    },
                    pointer: {
                        width: 5,
                        color: "auto"
                    },
                    title: {
                        textStyle: {
                            color: "#333"
                        }
                    },
                    detail: {
                        textStyle: {
                            color: "auto"
                        }
                    }
                },
                textStyle: {
                    fontFamily: "\u5fae\u8f6f\u96c5\u9ed1, Arial, Verdana, sans-serif"
                }
            };
        }
    }
    class KaolaCoupon extends BaseCoupon {
        init_coupons() {
            let itemId = unsafeWindow.__kaolaGTMGoodsData.product_no;
            if (itemId) {
                let key = "kol-" + itemId, coupon = Config.get(key);
                if (coupon) if (coupon.has_coupon) {
                    let q = coupon, exp = new Date(q.quan_time);
                    this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                        this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                    });
                } else coupon.quan_link ? this.default(coupon.quan_link) : this.default(); else Route.queryKlCoupons(itemId).then(res => {
                    if (Logger.debug(res), null == res ? void 0 : res.code) if (Config.set(key, res.data, 43200), 
                    res.data.has_coupon) {
                        let q = res.data, exp = new Date(q.quan_time);
                        this.init_qrcode(decodeURIComponent(q.quan_link)).then(res => {
                            this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                        });
                    } else res.data.quan_link ? this.default(res.data.quan_link) : this.default(); else this.default();
                });
            } else this.default();
        }
        init_html(html) {
            return new Promise(resolve => {
                $("#comboRecbox").length ? (Core.appendTo("#comboRecbox", html), resolve(!0)) : setTimeout(() => {
                    this.init_html(html);
                }, 2e3);
            });
        }
    }
    styleInject(".one-key-vip-container { z-index: 99999!important }\n.one-key-vip-popup { font-size: 14px !important }\n.one-key-vip-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 20px; }\n.one-key-vip-setting-checkbox { width: 16px;height: 16px; }\n");
    class sAlert {
        static toast(msg, icon = "success", position = "top", time = 2) {
            Swal__default.default.fire({
                toast: !0,
                position: position,
                showCancelButton: !1,
                showConfirmButton: !1,
                title: msg,
                icon: icon,
                timer: 1e3 * time,
                customClass: this.customeCss
            });
        }
        static error(msg, time = 2) {
            this.toast(msg, "error", "center", time);
        }
        static info(msg, icon = "success", position = "top", time = 2) {
            Swal__default.default.fire({
                toast: !0,
                position: position,
                showCancelButton: !1,
                showConfirmButton: !1,
                title: msg,
                icon: icon,
                timer: 1e3 * time,
                customClass: this.customeCss
            });
        }
        static msg(title, html, width = "32rem") {
            return "auto" == width && (width = unsafeWindow.window.outerWidth < 900 ? "90%" : 800), 
            Swal__default.default.fire({
                title: `<strong>${title}</strong>`,
                html: html,
                showCloseButton: !0,
                width: width
            });
        }
        static html(title, html, cancel = !1, cancelTxt = "", cancelColor = "#3085d6", width = "32rem", confirm = !1, confirmTxt = "") {
            return "auto" == width && (width = unsafeWindow.window.outerWidth < 900 ? "90%" : 800), 
            Swal__default.default.fire({
                position: "center",
                width: width,
                html: html,
                showCancelButton: cancel,
                showConfirmButton: confirm,
                cancelButtonColor: cancelColor,
                title: title,
                cancelButtonText: cancelTxt,
                confirmButtonText: confirmTxt,
                customClass: this.customeCss,
                allowOutsideClick: !1,
                allowEscapeKey: !1
            });
        }
        static confirm(title, text, confirmText = "\u786e\u5b9a", cancelText = "\u53d6\u6d88", icon = "question", denyText = "") {
            let option = {
                title: title,
                text: text,
                icon: icon,
                showCancelButton: !0,
                allowOutsideClick: !1,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: confirmText,
                cancelButtonText: cancelText
            };
            return "" != denyText && (option.denyButtonText = denyText), Swal__default.default.fire(option);
        }
        static showImg(image, title, text, alt, btnTxt = "") {
            let opt = {
                title: title,
                text: text,
                imageUrl: image,
                imageAlt: alt,
                showConfirmButton: !1
            };
            return null != btnTxt && (opt.showConfirmButton = !0, opt.confirmButtonText = btnTxt), 
            Swal__default.default.fire(opt);
        }
        static loading(time = -1, target = null) {
            null == target ? Swal__default.default.showLoading() : Swal__default.default.showLoading(target), 
            -1 != time && Core.sleep(time).then(() => {
                Swal__default.default.hideLoading();
            });
        }
        static closeLoading() {
            Swal__default.default.hideLoading();
        }
        static close(target) {
            Swal__default.default.close(target);
        }
    }
    sAlert.customeCss = {
        container: "one-key-vip-container",
        popup: "one-key-vip-popup",
        header: "one-key-vip-header",
        title: "one-key-vip-title",
        closeButton: "one-key-vip-close",
        icon: "one-key-vip-icon",
        image: "one-key-vip-image",
        content: "one-key-vip-content",
        htmlContainer: "one-key-vip-html",
        input: "one-key-vip-input",
        validationMessage: "one-key-vip-validation",
        actions: "one-key-vip-actions",
        confirmButton: "one-key-vip-confirm",
        denyButton: "one-key-vip-deny",
        cancelButton: "one-key-vip-cancel",
        loader: "one-key-vip-loader",
        footer: "one-key-vip-footer"
    }, commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, 
    fingerprint2 = function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports;
    }((function(module) {
        var context, definition;
        context = commonjsGlobal, definition = function() {
            var x64Add, x64Multiply, x64Rotl, x64LeftShift, x64Xor, x64Fmix, x64hash128, defaultOptions, each, map, extendSoft, enumerateDevicesKey, isEnumerateDevicesSupported, screenResolutionKey, getScreenResolution, availableScreenResolutionKey, getAvailableScreenResolution, sessionStorageKey, localStorageKey, indexedDbKey, cpuClassKey, platformKey, doNotTrackKey, canvasKey, webglKey, webglVendorAndRendererKey, adBlockKey, hasLiedLanguagesKey, hasLiedResolutionKey, hasLiedOsKey, hasLiedBrowserKey, flashFontsKey, pluginsComponent, getRegularPlugins, getIEPlugins, pluginsShouldBeSorted, touchSupportKey, hardwareConcurrencyKey, hasSessionStorage, hasLocalStorage, hasIndexedDB, getHardwareConcurrency, getNavigatorCpuClass, getNavigatorPlatform, getDoNotTrack, getTouchSupport, getCanvasFp, getWebglFp, getWebglVendorAndRenderer, getAdBlock, getHasLiedLanguages, getHasLiedResolution, getHasLiedOs, getHasLiedBrowser, isCanvasSupported, isWebGlSupported, isIE, isIEOrOldEdge, hasSwfObjectLoaded, hasMinFlashInstalled, addFlashDivNode, loadSwfAndDetectFonts, getWebglCanvas, loseWebglContext, components, Fingerprint2;
            return void 0 === Array.isArray && (Array.isArray = function(obj) {
                return "[object Array]" === Object.prototype.toString.call(obj);
            }), x64Add = function(m, n) {
                m = [ m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1] ], n = [ n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1] ];
                var o = [ 0, 0, 0, 0 ];
                return o[3] += m[3] + n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] + n[2], 
                o[1] += o[2] >>> 16, o[2] &= 65535, o[1] += m[1] + n[1], o[0] += o[1] >>> 16, o[1] &= 65535, 
                o[0] += m[0] + n[0], o[0] &= 65535, [ o[0] << 16 | o[1], o[2] << 16 | o[3] ];
            }, x64Multiply = function(m, n) {
                m = [ m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1] ], n = [ n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1] ];
                var o = [ 0, 0, 0, 0 ];
                return o[3] += m[3] * n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] * n[3], 
                o[1] += o[2] >>> 16, o[2] &= 65535, o[2] += m[3] * n[2], o[1] += o[2] >>> 16, o[2] &= 65535, 
                o[1] += m[1] * n[3], o[0] += o[1] >>> 16, o[1] &= 65535, o[1] += m[2] * n[2], o[0] += o[1] >>> 16, 
                o[1] &= 65535, o[1] += m[3] * n[1], o[0] += o[1] >>> 16, o[1] &= 65535, o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0], 
                o[0] &= 65535, [ o[0] << 16 | o[1], o[2] << 16 | o[3] ];
            }, x64Rotl = function(m, n) {
                return 32 == (n %= 64) ? [ m[1], m[0] ] : n < 32 ? [ m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n ] : (n -= 32, 
                [ m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n ]);
            }, x64LeftShift = function(m, n) {
                return 0 == (n %= 64) ? m : n < 32 ? [ m[0] << n | m[1] >>> 32 - n, m[1] << n ] : [ m[1] << n - 32, 0 ];
            }, x64Xor = function(m, n) {
                return [ m[0] ^ n[0], m[1] ^ n[1] ];
            }, x64Fmix = function(h) {
                return h = x64Xor(h, [ 0, h[0] >>> 1 ]), h = x64Multiply(h, [ 4283543511, 3981806797 ]), 
                h = x64Xor(h, [ 0, h[0] >>> 1 ]), h = x64Multiply(h, [ 3301882366, 444984403 ]), 
                h = x64Xor(h, [ 0, h[0] >>> 1 ]);
            }, x64hash128 = function(key, seed) {
                var remainder, bytes, h1, h2, k1, k2, c1, c2, i;
                for (seed = seed || 0, remainder = (key = key || "").length % 16, bytes = key.length - remainder, 
                h1 = [ 0, seed ], h2 = [ 0, seed ], k1 = [ 0, 0 ], k2 = [ 0, 0 ], c1 = [ 2277735313, 289559509 ], 
                c2 = [ 1291169091, 658871167 ], i = 0; i < bytes; i += 16) k1 = [ 255 & key.charCodeAt(i + 4) | (255 & key.charCodeAt(i + 5)) << 8 | (255 & key.charCodeAt(i + 6)) << 16 | (255 & key.charCodeAt(i + 7)) << 24, 255 & key.charCodeAt(i) | (255 & key.charCodeAt(i + 1)) << 8 | (255 & key.charCodeAt(i + 2)) << 16 | (255 & key.charCodeAt(i + 3)) << 24 ], 
                k2 = [ 255 & key.charCodeAt(i + 12) | (255 & key.charCodeAt(i + 13)) << 8 | (255 & key.charCodeAt(i + 14)) << 16 | (255 & key.charCodeAt(i + 15)) << 24, 255 & key.charCodeAt(i + 8) | (255 & key.charCodeAt(i + 9)) << 8 | (255 & key.charCodeAt(i + 10)) << 16 | (255 & key.charCodeAt(i + 11)) << 24 ], 
                k1 = x64Multiply(k1, c1), k1 = x64Rotl(k1, 31), k1 = x64Multiply(k1, c2), h1 = x64Xor(h1, k1), 
                h1 = x64Rotl(h1, 27), h1 = x64Add(h1, h2), h1 = x64Add(x64Multiply(h1, [ 0, 5 ]), [ 0, 1390208809 ]), 
                k2 = x64Multiply(k2, c2), k2 = x64Rotl(k2, 33), k2 = x64Multiply(k2, c1), h2 = x64Xor(h2, k2), 
                h2 = x64Rotl(h2, 31), h2 = x64Add(h2, h1), h2 = x64Add(x64Multiply(h2, [ 0, 5 ]), [ 0, 944331445 ]);
                switch (k1 = [ 0, 0 ], k2 = [ 0, 0 ], remainder) {
                  case 15:
                    k2 = x64Xor(k2, x64LeftShift([ 0, key.charCodeAt(i + 14) ], 48));

                  case 14:
                    k2 = x64Xor(k2, x64LeftShift([ 0, key.charCodeAt(i + 13) ], 40));

                  case 13:
                    k2 = x64Xor(k2, x64LeftShift([ 0, key.charCodeAt(i + 12) ], 32));

                  case 12:
                    k2 = x64Xor(k2, x64LeftShift([ 0, key.charCodeAt(i + 11) ], 24));

                  case 11:
                    k2 = x64Xor(k2, x64LeftShift([ 0, key.charCodeAt(i + 10) ], 16));

                  case 10:
                    k2 = x64Xor(k2, x64LeftShift([ 0, key.charCodeAt(i + 9) ], 8));

                  case 9:
                    k2 = x64Xor(k2, [ 0, key.charCodeAt(i + 8) ]), k2 = x64Multiply(k2, c2), k2 = x64Rotl(k2, 33), 
                    k2 = x64Multiply(k2, c1), h2 = x64Xor(h2, k2);

                  case 8:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 7) ], 56));

                  case 7:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 6) ], 48));

                  case 6:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 5) ], 40));

                  case 5:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 4) ], 32));

                  case 4:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 3) ], 24));

                  case 3:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 2) ], 16));

                  case 2:
                    k1 = x64Xor(k1, x64LeftShift([ 0, key.charCodeAt(i + 1) ], 8));

                  case 1:
                    k1 = x64Xor(k1, [ 0, key.charCodeAt(i) ]), k1 = x64Multiply(k1, c1), k1 = x64Rotl(k1, 31), 
                    k1 = x64Multiply(k1, c2), h1 = x64Xor(h1, k1);
                }
                return h1 = x64Xor(h1, [ 0, key.length ]), h2 = x64Xor(h2, [ 0, key.length ]), h1 = x64Add(h1, h2), 
                h2 = x64Add(h2, h1), h1 = x64Fmix(h1), h2 = x64Fmix(h2), h1 = x64Add(h1, h2), h2 = x64Add(h2, h1), 
                ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
            }, defaultOptions = {
                preprocessor: null,
                audio: {
                    timeout: 1e3,
                    excludeIOS11: !0
                },
                fonts: {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    userDefinedFonts: [],
                    extendedJsFonts: !1
                },
                screen: {
                    detectScreenOrientation: !0
                },
                plugins: {
                    sortPluginsFor: [ /palemoon/i ],
                    excludeIE: !1
                },
                extraComponents: [],
                excludes: {
                    enumerateDevices: !0,
                    pixelRatio: !0,
                    doNotTrack: !0,
                    fontsFlash: !0,
                    adBlock: !0
                },
                NOT_AVAILABLE: "not available",
                ERROR: "error",
                EXCLUDED: "excluded"
            }, each = function(obj, iterator) {
                var i, l, key;
                if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) obj.forEach(iterator); else if (obj.length === +obj.length) for (i = 0, 
                l = obj.length; i < l; i++) iterator(obj[i], i, obj); else for (key in obj) obj.hasOwnProperty(key) && iterator(obj[key], key, obj);
            }, map = function(obj, iterator) {
                var results = [];
                return null == obj ? results : Array.prototype.map && obj.map === Array.prototype.map ? obj.map(iterator) : (each(obj, (function(value, index, list) {
                    results.push(iterator(value, index, list));
                })), results);
            }, extendSoft = function(target, source) {
                var value, key;
                if (null == source) return target;
                for (key in source) null == (value = source[key]) || Object.prototype.hasOwnProperty.call(target, key) || (target[key] = value);
                return target;
            }, enumerateDevicesKey = function(done, options) {
                if (!isEnumerateDevicesSupported()) return done(options.NOT_AVAILABLE);
                navigator.mediaDevices.enumerateDevices().then((function(devices) {
                    done(devices.map((function(device) {
                        return "id=" + device.deviceId + ";gid=" + device.groupId + ";" + device.kind + ";" + device.label;
                    })));
                })).catch((function(error) {
                    done(error);
                }));
            }, isEnumerateDevicesSupported = function() {
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
            }, screenResolutionKey = function(done, options) {
                done(getScreenResolution(options));
            }, getScreenResolution = function(options) {
                var resolution = [ window.screen.width, window.screen.height ];
                return options.screen.detectScreenOrientation && resolution.sort().reverse(), resolution;
            }, availableScreenResolutionKey = function(done, options) {
                done(getAvailableScreenResolution(options));
            }, getAvailableScreenResolution = function(options) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var available = [ window.screen.availHeight, window.screen.availWidth ];
                    return options.screen.detectScreenOrientation && available.sort().reverse(), available;
                }
                return options.NOT_AVAILABLE;
            }, sessionStorageKey = function(done, options) {
                done(hasSessionStorage(options));
            }, localStorageKey = function(done, options) {
                done(hasLocalStorage(options));
            }, indexedDbKey = function(done, options) {
                done(hasIndexedDB(options));
            }, cpuClassKey = function(done, options) {
                done(getNavigatorCpuClass(options));
            }, platformKey = function(done, options) {
                done(getNavigatorPlatform(options));
            }, doNotTrackKey = function(done, options) {
                done(getDoNotTrack(options));
            }, canvasKey = function(done, options) {
                isCanvasSupported() ? done(getCanvasFp(options)) : done(options.NOT_AVAILABLE);
            }, webglKey = function(done, options) {
                isWebGlSupported() ? done(getWebglFp()) : done(options.NOT_AVAILABLE);
            }, webglVendorAndRendererKey = function(done) {
                isWebGlSupported() ? done(getWebglVendorAndRenderer()) : done();
            }, adBlockKey = function(done) {
                done(getAdBlock());
            }, hasLiedLanguagesKey = function(done) {
                done(getHasLiedLanguages());
            }, hasLiedResolutionKey = function(done) {
                done(getHasLiedResolution());
            }, hasLiedOsKey = function(done) {
                done(getHasLiedOs());
            }, hasLiedBrowserKey = function(done) {
                done(getHasLiedBrowser());
            }, flashFontsKey = function(done, options) {
                return hasSwfObjectLoaded() ? hasMinFlashInstalled() ? options.fonts.swfPath ? void loadSwfAndDetectFonts((function(fonts) {
                    done(fonts);
                }), options) : done("missing options.fonts.swfPath") : done("flash not installed") : done("swf object not loaded");
            }, pluginsComponent = function(done, options) {
                isIE() ? options.plugins.excludeIE ? done(options.EXCLUDED) : done(getIEPlugins(options)) : done(getRegularPlugins(options));
            }, getRegularPlugins = function(options) {
                var plugins, i, l;
                if (null == navigator.plugins) return options.NOT_AVAILABLE;
                for (plugins = [], i = 0, l = navigator.plugins.length; i < l; i++) navigator.plugins[i] && plugins.push(navigator.plugins[i]);
                return pluginsShouldBeSorted(options) && (plugins = plugins.sort((function(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                }))), map(plugins, (function(p) {
                    var mimeTypes = map(p, (function(mt) {
                        return [ mt.type, mt.suffixes ];
                    }));
                    return [ p.name, p.description, mimeTypes ];
                }));
            }, getIEPlugins = function(options) {
                var result = [];
                return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? result = map([ "AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1" ], (function(name) {
                    try {
                        return new window.ActiveXObject(name), name;
                    } catch (e) {
                        return options.ERROR;
                    }
                })) : result.push(options.NOT_AVAILABLE), navigator.plugins && (result = result.concat(getRegularPlugins(options))), 
                result;
            }, pluginsShouldBeSorted = function(options) {
                var i, l, re, should = !1;
                for (i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) if (re = options.plugins.sortPluginsFor[i], 
                navigator.userAgent.match(re)) {
                    should = !0;
                    break;
                }
                return should;
            }, touchSupportKey = function(done) {
                done(getTouchSupport());
            }, hardwareConcurrencyKey = function(done, options) {
                done(getHardwareConcurrency(options));
            }, hasSessionStorage = function(options) {
                try {
                    return !!window.sessionStorage;
                } catch (e) {
                    return options.ERROR;
                }
            }, hasLocalStorage = function(options) {
                try {
                    return !!window.localStorage;
                } catch (e) {
                    return options.ERROR;
                }
            }, hasIndexedDB = function(options) {
                if (isIEOrOldEdge()) return options.EXCLUDED;
                try {
                    return !!window.indexedDB;
                } catch (e) {
                    return options.ERROR;
                }
            }, getHardwareConcurrency = function(options) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : options.NOT_AVAILABLE;
            }, getNavigatorCpuClass = function(options) {
                return navigator.cpuClass || options.NOT_AVAILABLE;
            }, getNavigatorPlatform = function(options) {
                return navigator.platform ? navigator.platform : options.NOT_AVAILABLE;
            }, getDoNotTrack = function(options) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : options.NOT_AVAILABLE;
            }, getTouchSupport = function() {
                var touchEvent, maxTouchPoints = 0;
                void 0 !== navigator.maxTouchPoints ? maxTouchPoints = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (maxTouchPoints = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), touchEvent = !0;
                } catch (_) {
                    touchEvent = !1;
                }
                return [ maxTouchPoints, touchEvent, "ontouchstart" in window ];
            }, getCanvasFp = function(options) {
                var ctx, result = [], canvas = document.createElement("canvas");
                return canvas.width = 2e3, canvas.height = 200, canvas.style.display = "inline", 
                (ctx = canvas.getContext("2d")).rect(0, 0, 10, 10), ctx.rect(2, 2, 6, 6), result.push("canvas winding:" + (!1 === ctx.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), 
                ctx.textBaseline = "alphabetic", ctx.fillStyle = "#f60", ctx.fillRect(125, 1, 62, 20), 
                ctx.fillStyle = "#069", options.dontUseFakeFontInCanvas ? ctx.font = "11pt Arial" : ctx.font = "11pt no-real-font-123", 
                ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), ctx.fillStyle = "rgba(102, 204, 0, 0.2)", 
                ctx.font = "18pt Arial", ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), 
                ctx.globalCompositeOperation = "multiply", ctx.fillStyle = "rgb(255,0,255)", ctx.beginPath(), 
                ctx.arc(50, 50, 50, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(0,255,255)", 
                ctx.beginPath(), ctx.arc(100, 50, 50, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill(), 
                ctx.fillStyle = "rgb(255,255,0)", ctx.beginPath(), ctx.arc(75, 100, 50, 0, 2 * Math.PI, !0), 
                ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(255,0,255)", ctx.arc(75, 75, 75, 0, 2 * Math.PI, !0), 
                ctx.arc(75, 75, 25, 0, 2 * Math.PI, !0), ctx.fill("evenodd"), canvas.toDataURL && result.push("canvas fp:" + canvas.toDataURL()), 
                result;
            }, getWebglFp = function() {
                var result, vShaderTemplate, fShaderTemplate, vertexPosBuffer, vertices, program, vshader, fshader, extensionDebugRendererInfo, fa2s = function(fa) {
                    return gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), 
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + fa[0] + ", " + fa[1] + "]";
                }, maxAnisotropy = function(gl) {
                    var anisotropy, ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return ext ? (0 === (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) && (anisotropy = 2), 
                    anisotropy) : null;
                }, gl = getWebglCanvas();
                if (!gl) return null;
                try {
                    result = [], vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}", 
                    fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}", 
                    vertexPosBuffer = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer), 
                    vertices = new Float32Array([ -.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0 ]), gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW), 
                    vertexPosBuffer.itemSize = 3, vertexPosBuffer.numItems = 3, program = gl.createProgram(), 
                    vshader = gl.createShader(gl.VERTEX_SHADER), gl.shaderSource(vshader, vShaderTemplate), 
                    gl.compileShader(vshader), fshader = gl.createShader(gl.FRAGMENT_SHADER), gl.shaderSource(fshader, fShaderTemplate), 
                    gl.compileShader(fshader), gl.attachShader(program, vshader), gl.attachShader(program, fshader), 
                    gl.linkProgram(program), gl.useProgram(program), program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex"), 
                    program.offsetUniform = gl.getUniformLocation(program, "uniformOffset"), gl.enableVertexAttribArray(program.vertexPosArray), 
                    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0), 
                    gl.uniform2f(program.offsetUniform, 1, 1), gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
                    try {
                        result.push(gl.canvas.toDataURL());
                    } catch (e) {}
                    result.push("extensions:" + (gl.getSupportedExtensions() || []).join(";")), result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE))), 
                    result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE))), 
                    result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS)), result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no")), 
                    result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS)), result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS)), 
                    result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS)), result.push("webgl max anisotropy:" + maxAnisotropy(gl)), 
                    result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), 
                    result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE)), 
                    result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS)), 
                    result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)), 
                    result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS)), 
                    result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE)), result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS)), 
                    result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS)), 
                    result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), 
                    result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS)), 
                    result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS))), 
                    result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS)), result.push("webgl renderer:" + gl.getParameter(gl.RENDERER)), 
                    result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION)), 
                    result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS)), result.push("webgl vendor:" + gl.getParameter(gl.VENDOR)), 
                    result.push("webgl version:" + gl.getParameter(gl.VERSION));
                    try {
                        (extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info")) && (result.push("webgl unmasked vendor:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL)), 
                        result.push("webgl unmasked renderer:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)));
                    } catch (e) {}
                    return gl.getShaderPrecisionFormat ? (each([ "FLOAT", "INT" ], (function(numType) {
                        each([ "VERTEX", "FRAGMENT" ], (function(shader) {
                            each([ "HIGH", "MEDIUM", "LOW" ], (function(numSize) {
                                each([ "precision", "rangeMin", "rangeMax" ], (function(key) {
                                    var line, format = gl.getShaderPrecisionFormat(gl[shader + "_SHADER"], gl[numSize + "_" + numType])[key];
                                    "precision" !== key && (key = "precision " + key), line = [ "webgl ", shader.toLowerCase(), " shader ", numSize.toLowerCase(), " ", numType.toLowerCase(), " ", key, ":", format ].join(""), 
                                    result.push(line);
                                }));
                            }));
                        }));
                    })), result) : result;
                } finally {
                    try {
                        loseWebglContext(gl);
                    } catch (e) {}
                }
            }, getWebglVendorAndRenderer = function() {
                var glContext, extensionDebugRendererInfo;
                try {
                    return extensionDebugRendererInfo = (glContext = getWebglCanvas()).getExtension("WEBGL_debug_renderer_info"), 
                    glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + "~" + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
                } catch (e) {
                    return null;
                } finally {
                    try {
                        loseWebglContext(glContext);
                    } catch (e) {}
                }
            }, getAdBlock = function() {
                var result, ads = document.createElement("div");
                ads.innerHTML = "&nbsp;", ads.className = "adsbox", result = !1;
                try {
                    document.body.appendChild(ads), result = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, 
                    document.body.removeChild(ads);
                } catch (e) {
                    result = !1;
                }
                return result;
            }, getHasLiedLanguages = function() {
                if (void 0 !== navigator.languages) try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;
                } catch (err) {
                    return !0;
                }
                return !1;
            }, getHasLiedResolution = function() {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
            }, getHasLiedOs = function() {
                var os, userAgent = navigator.userAgent.toLowerCase(), oscpu = navigator.oscpu, platform = navigator.platform.toLowerCase();
                if (os = userAgent.indexOf("windows phone") >= 0 ? "Windows Phone" : userAgent.indexOf("windows") >= 0 || userAgent.indexOf("win16") >= 0 || userAgent.indexOf("win32") >= 0 || userAgent.indexOf("win64") >= 0 || userAgent.indexOf("win95") >= 0 || userAgent.indexOf("win98") >= 0 || userAgent.indexOf("winnt") >= 0 || userAgent.indexOf("wow64") >= 0 ? "Windows" : userAgent.indexOf("android") >= 0 ? "Android" : userAgent.indexOf("linux") >= 0 || userAgent.indexOf("cros") >= 0 || userAgent.indexOf("x11") >= 0 ? "Linux" : userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 || userAgent.indexOf("ipod") >= 0 || userAgent.indexOf("crios") >= 0 || userAgent.indexOf("fxios") >= 0 ? "iOS" : userAgent.indexOf("macintosh") >= 0 || userAgent.indexOf("mac_powerpc)") >= 0 ? "Mac" : "Other", 
                ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows" !== os && "Windows Phone" !== os && "Android" !== os && "iOS" !== os && "Other" !== os && -1 === userAgent.indexOf("cros")) return !0;
                if (void 0 !== oscpu) {
                    if ((oscpu = oscpu.toLowerCase()).indexOf("win") >= 0 && "Windows" !== os && "Windows Phone" !== os) return !0;
                    if (oscpu.indexOf("linux") >= 0 && "Linux" !== os && "Android" !== os) return !0;
                    if (oscpu.indexOf("mac") >= 0 && "Mac" !== os && "iOS" !== os) return !0;
                    if ((-1 === oscpu.indexOf("win") && -1 === oscpu.indexOf("linux") && -1 === oscpu.indexOf("mac")) != ("Other" === os)) return !0;
                }
                return platform.indexOf("win") >= 0 && "Windows" !== os && "Windows Phone" !== os || (platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && "Linux" !== os && "Android" !== os || (platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && "Mac" !== os && "iOS" !== os || !(platform.indexOf("arm") >= 0 && "Windows Phone" === os) && !(platform.indexOf("pike") >= 0 && userAgent.indexOf("opera mini") >= 0) && ((platform.indexOf("win") < 0 && platform.indexOf("linux") < 0 && platform.indexOf("mac") < 0 && platform.indexOf("iphone") < 0 && platform.indexOf("ipad") < 0 && platform.indexOf("ipod") < 0) != ("Other" === os) || void 0 === navigator.plugins && "Windows" !== os && "Windows Phone" !== os);
            }, getHasLiedBrowser = function() {
                var browser, tempRes, errFirefox, userAgent = navigator.userAgent.toLowerCase(), productSub = navigator.productSub;
                if (userAgent.indexOf("edge/") >= 0 || userAgent.indexOf("iemobile/") >= 0) return !1;
                if (userAgent.indexOf("opera mini") >= 0) return !1;
                if (("Chrome" == (browser = userAgent.indexOf("firefox/") >= 0 ? "Firefox" : userAgent.indexOf("opera/") >= 0 || userAgent.indexOf(" opr/") >= 0 ? "Opera" : userAgent.indexOf("chrome/") >= 0 ? "Chrome" : userAgent.indexOf("safari/") >= 0 ? userAgent.indexOf("android 1.") >= 0 || userAgent.indexOf("android 2.") >= 0 || userAgent.indexOf("android 3.") >= 0 || userAgent.indexOf("android 4.") >= 0 ? "AOSP" : "Safari" : userAgent.indexOf("trident/") >= 0 ? "Internet Explorer" : "Other") || "Safari" === browser || "Opera" === browser) && "20030107" !== productSub) return !0;
                if (37 === (tempRes = eval.toString().length) && "Safari" !== browser && "Firefox" !== browser && "Other" !== browser) return !0;
                if (39 === tempRes && "Internet Explorer" !== browser && "Other" !== browser) return !0;
                if (33 === tempRes && "Chrome" !== browser && "AOSP" !== browser && "Opera" !== browser && "Other" !== browser) return !0;
                try {
                    throw "a";
                } catch (err) {
                    try {
                        err.toSource(), errFirefox = !0;
                    } catch (errOfErr) {
                        errFirefox = !1;
                    }
                }
                return errFirefox && "Firefox" !== browser && "Other" !== browser;
            }, isCanvasSupported = function() {
                var elem = document.createElement("canvas");
                return !(!elem.getContext || !elem.getContext("2d"));
            }, isWebGlSupported = function() {
                if (!isCanvasSupported() || !window.WebGLRenderingContext) return !1;
                var glContext = getWebglCanvas();
                if (glContext) {
                    try {
                        loseWebglContext(glContext);
                    } catch (e) {}
                    return !0;
                }
                return !1;
            }, isIE = function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
            }, isIEOrOldEdge = function() {
                return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2;
            }, hasSwfObjectLoaded = function() {
                return void 0 !== window.swfobject;
            }, hasMinFlashInstalled = function() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0");
            }, addFlashDivNode = function(options) {
                var node = document.createElement("div");
                node.setAttribute("id", options.fonts.swfContainerId), document.body.appendChild(node);
            }, loadSwfAndDetectFonts = function(done, options) {
                var id, flashvars, flashparams, hiddenCallback = "___fp_swf_loaded";
                window[hiddenCallback] = function(fonts) {
                    done(fonts);
                }, id = options.fonts.swfContainerId, addFlashDivNode(), flashvars = {
                    onReady: hiddenCallback
                }, flashparams = {
                    allowScriptAccess: "always",
                    menu: "false"
                }, window.swfobject.embedSWF(options.fonts.swfPath, id, "1", "1", "9.0.0", !1, flashvars, flashparams, {});
            }, getWebglCanvas = function() {
                var canvas = document.createElement("canvas"), gl = null;
                try {
                    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                } catch (e) {}
                return gl || (gl = null), gl;
            }, loseWebglContext = function(context) {
                var loseContextExtension = context.getExtension("WEBGL_lose_context");
                null != loseContextExtension && loseContextExtension.loseContext();
            }, components = [ {
                key: "userAgent",
                getData: function(done) {
                    done(navigator.userAgent);
                }
            }, {
                key: "webdriver",
                getData: function(done, options) {
                    done(null == navigator.webdriver ? options.NOT_AVAILABLE : navigator.webdriver);
                }
            }, {
                key: "language",
                getData: function(done, options) {
                    done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE);
                }
            }, {
                key: "colorDepth",
                getData: function(done, options) {
                    done(window.screen.colorDepth || options.NOT_AVAILABLE);
                }
            }, {
                key: "deviceMemory",
                getData: function(done, options) {
                    done(navigator.deviceMemory || options.NOT_AVAILABLE);
                }
            }, {
                key: "pixelRatio",
                getData: function(done, options) {
                    done(window.devicePixelRatio || options.NOT_AVAILABLE);
                }
            }, {
                key: "hardwareConcurrency",
                getData: hardwareConcurrencyKey
            }, {
                key: "screenResolution",
                getData: screenResolutionKey
            }, {
                key: "availableScreenResolution",
                getData: availableScreenResolutionKey
            }, {
                key: "timezoneOffset",
                getData: function(done) {
                    done((new Date).getTimezoneOffset());
                }
            }, {
                key: "timezone",
                getData: function(done, options) {
                    window.Intl && window.Intl.DateTimeFormat ? done((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || options.NOT_AVAILABLE) : done(options.NOT_AVAILABLE);
                }
            }, {
                key: "sessionStorage",
                getData: sessionStorageKey
            }, {
                key: "localStorage",
                getData: localStorageKey
            }, {
                key: "indexedDb",
                getData: indexedDbKey
            }, {
                key: "addBehavior",
                getData: function(done) {
                    done(!!window.HTMLElement.prototype.addBehavior);
                }
            }, {
                key: "openDatabase",
                getData: function(done) {
                    done(!!window.openDatabase);
                }
            }, {
                key: "cpuClass",
                getData: cpuClassKey
            }, {
                key: "platform",
                getData: platformKey
            }, {
                key: "doNotTrack",
                getData: doNotTrackKey
            }, {
                key: "plugins",
                getData: pluginsComponent
            }, {
                key: "canvas",
                getData: canvasKey
            }, {
                key: "webgl",
                getData: webglKey
            }, {
                key: "webglVendorAndRenderer",
                getData: webglVendorAndRendererKey
            }, {
                key: "adBlock",
                getData: adBlockKey
            }, {
                key: "hasLiedLanguages",
                getData: hasLiedLanguagesKey
            }, {
                key: "hasLiedResolution",
                getData: hasLiedResolutionKey
            }, {
                key: "hasLiedOs",
                getData: hasLiedOsKey
            }, {
                key: "hasLiedBrowser",
                getData: hasLiedBrowserKey
            }, {
                key: "touchSupport",
                getData: touchSupportKey
            }, {
                key: "fonts",
                getData: function(done, options) {
                    var extendedFontList, testString, testSize, h, baseFontsDiv, fontsDiv, defaultWidth, defaultHeight, createSpan, createSpanWithFonts, initializeFontsSpans, isFontAvailable, baseFontsSpans, index, length, fontsSpans, available, i, l, baseFonts = [ "monospace", "sans-serif", "serif" ], fontList = [ "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3" ];
                    for (options.fonts.extendedJsFonts && (extendedFontList = [ "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF" ], 
                    fontList = fontList.concat(extendedFontList)), fontList = (fontList = fontList.concat(options.fonts.userDefinedFonts)).filter((function(font, position) {
                        return fontList.indexOf(font) === position;
                    })), testString = "mmmmmmmmmmlli", testSize = "72px", h = document.getElementsByTagName("body")[0], 
                    baseFontsDiv = document.createElement("div"), fontsDiv = document.createElement("div"), 
                    defaultWidth = {}, defaultHeight = {}, createSpan = function() {
                        var s = document.createElement("span");
                        return s.style.position = "absolute", s.style.left = "-9999px", s.style.fontSize = testSize, 
                        s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "normal", 
                        s.style.lineBreak = "auto", s.style.lineHeight = "normal", s.style.textTransform = "none", 
                        s.style.textAlign = "left", s.style.textDecoration = "none", s.style.textShadow = "none", 
                        s.style.whiteSpace = "normal", s.style.wordBreak = "normal", s.style.wordSpacing = "normal", 
                        s.innerHTML = testString, s;
                    }, createSpanWithFonts = function(fontToDetect, baseFont) {
                        var s = createSpan();
                        return s.style.fontFamily = "'" + fontToDetect + "'," + baseFont, s;
                    }, initializeFontsSpans = function() {
                        var i, l, fontSpans, j, numDefaultFonts, s, spans = {};
                        for (i = 0, l = fontList.length; i < l; i++) {
                            for (fontSpans = [], j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) s = createSpanWithFonts(fontList[i], baseFonts[j]), 
                            fontsDiv.appendChild(s), fontSpans.push(s);
                            spans[fontList[i]] = fontSpans;
                        }
                        return spans;
                    }, isFontAvailable = function(fontSpans) {
                        var i, detected = !1;
                        for (i = 0; i < baseFonts.length; i++) if (detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]) return detected;
                        return detected;
                    }, baseFontsSpans = function() {
                        var index, length, s, spans = [];
                        for (index = 0, length = baseFonts.length; index < length; index++) (s = createSpan()).style.fontFamily = baseFonts[index], 
                        baseFontsDiv.appendChild(s), spans.push(s);
                        return spans;
                    }(), h.appendChild(baseFontsDiv), index = 0, length = baseFonts.length; index < length; index++) defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth, 
                    defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;
                    for (fontsSpans = initializeFontsSpans(), h.appendChild(fontsDiv), available = [], 
                    i = 0, l = fontList.length; i < l; i++) isFontAvailable(fontsSpans[fontList[i]]) && available.push(fontList[i]);
                    h.removeChild(fontsDiv), h.removeChild(baseFontsDiv), done(available);
                },
                pauseBefore: !0
            }, {
                key: "fontsFlash",
                getData: flashFontsKey,
                pauseBefore: !0
            }, {
                key: "audio",
                getData: function(done, options) {
                    var AudioContext, context, oscillator, compressor, audioTimeoutId, audioOptions = options.audio;
                    return audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/) ? done(options.EXCLUDED) : null == (AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext) ? done(options.NOT_AVAILABLE) : (context = new AudioContext(1, 44100, 44100), 
                    (oscillator = context.createOscillator()).type = "triangle", oscillator.frequency.setValueAtTime(1e4, context.currentTime), 
                    compressor = context.createDynamicsCompressor(), each([ [ "threshold", -50 ], [ "knee", 40 ], [ "ratio", 12 ], [ "reduction", -20 ], [ "attack", 0 ], [ "release", .25 ] ], (function(item) {
                        void 0 !== compressor[item[0]] && "function" == typeof compressor[item[0]].setValueAtTime && compressor[item[0]].setValueAtTime(item[1], context.currentTime);
                    })), oscillator.connect(compressor), compressor.connect(context.destination), oscillator.start(0), 
                    context.startRendering(), audioTimeoutId = setTimeout((function() {
                        return context.oncomplete = function() {}, context = null, done("audioTimeout");
                    }), audioOptions.timeout), void (context.oncomplete = function(event) {
                        var fingerprint;
                        try {
                            clearTimeout(audioTimeoutId), fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(acc, val) {
                                return acc + Math.abs(val);
                            }), 0).toString(), oscillator.disconnect(), compressor.disconnect();
                        } catch (error) {
                            return void done(error);
                        }
                        done(fingerprint);
                    }));
                }
            }, {
                key: "enumerateDevices",
                getData: enumerateDevicesKey
            } ], (Fingerprint2 = function(options) {
                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200");
            }).get = function(options, callback) {
                var keys, i, chainComponents;
                callback ? options || (options = {}) : (callback = options, options = {}), extendSoft(options, defaultOptions), 
                options.components = options.extraComponents.concat(components), keys = {
                    data: [],
                    addPreprocessedComponent: function(key, value) {
                        "function" == typeof options.preprocessor && (value = options.preprocessor(key, value)), 
                        keys.data.push({
                            key: key,
                            value: value
                        });
                    }
                }, i = -1, (chainComponents = function(alreadyWaited) {
                    if ((i += 1) >= options.components.length) callback(keys.data); else {
                        var component = options.components[i];
                        if (options.excludes[component.key]) chainComponents(!1); else {
                            if (!alreadyWaited && component.pauseBefore) return i -= 1, void setTimeout((function() {
                                chainComponents(!0);
                            }), 1);
                            try {
                                component.getData((function(value) {
                                    keys.addPreprocessedComponent(component.key, value), chainComponents(!1);
                                }), options);
                            } catch (error) {
                                keys.addPreprocessedComponent(component.key, String(error)), chainComponents(!1);
                            }
                        }
                    }
                })(!1);
            }, Fingerprint2.getPromise = function(options) {
                return new Promise((function(resolve, reject) {
                    Fingerprint2.get(options, resolve);
                }));
            }, Fingerprint2.getV18 = function(options, callback) {
                return null == callback && (callback = options, options = {}), Fingerprint2.get(options, (function(components) {
                    var i, component, murmur, newComponents = [];
                    for (i = 0; i < components.length; i++) if ((component = components[i]).value === (options.NOT_AVAILABLE || "not available")) newComponents.push({
                        key: component.key,
                        value: "unknown"
                    }); else if ("plugins" === component.key) newComponents.push({
                        key: "plugins",
                        value: map(component.value, (function(p) {
                            var mimeTypes = map(p[2], (function(mt) {
                                return mt.join ? mt.join("~") : mt;
                            })).join(",");
                            return [ p[0], p[1], mimeTypes ].join("::");
                        }))
                    }); else if (-1 !== [ "canvas", "webgl" ].indexOf(component.key) && Array.isArray(component.value)) newComponents.push({
                        key: component.key,
                        value: component.value.join("~")
                    }); else if (-1 !== [ "sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase" ].indexOf(component.key)) {
                        if (!component.value) continue;
                        newComponents.push({
                            key: component.key,
                            value: 1
                        });
                    } else component.value ? newComponents.push(component.value.join ? {
                        key: component.key,
                        value: component.value.join(";")
                    } : component) : newComponents.push({
                        key: component.key,
                        value: component.value
                    });
                    murmur = x64hash128(map(newComponents, (function(component) {
                        return component.value;
                    })).join("~~~"), 31), callback(murmur, newComponents);
                }));
            }, Fingerprint2.x64hash128 = x64hash128, Fingerprint2.VERSION = "2.1.5", Fingerprint2;
        }, module.exports ? module.exports = definition() : context.exports ? context.exports = definition() : context.Fingerprint2 = definition();
    })), headStyle = document.head.style, isChrome = void 0 !== window.chrome, isIE = "ActiveXObject" in window, 
    hasWeakMap = "WeakMap" in window.WeakMap && new window.WeakMap, ua = navigator.userAgent, 
    isNativeObject = o => !!/native code/.test(o.toString.toString()) && !!/native code/.test(o.toString()), 
    checkFunctions = {
        _1: function _1() {
            return isChrome;
        },
        _2: function _2() {
            return "mozRTCIceCandidate" in window || "mozInnerScreenY" in window;
        },
        _3: function _3() {
            return "safari" in window;
        },
        _4: function _4() {
            return isIE;
        },
        _5: function _5() {
            return isIE && !("maxHeight" in headStyle);
        },
        _6: function _6() {
            return isIE && !document.addEventListener;
        },
        _7: function _7() {
            return isIE && !window.atob;
        },
        _8: function _8() {
            return isIE && isNativeObject(window.Uint8Array);
        },
        _9: function _9() {
            return isIE && hasWeakMap && isNativeObject(window.WeakMap);
        },
        _10: function _10() {
            return "Google Inc." === navigator.vendor;
        },
        _11: function _11() {
            return "Apple Computer, Inc." === navigator.vendor;
        },
        _12: function _12() {
            return 800 === window.innerWidth && 600 === window.innerHeight && 0 === window.outerWidth && 0 === window.outerHeight || "" == navigator.languages || /Headless/i.test(ua);
        },
        _13: function _13() {
            return "callPhantom" in window || /PhantomJS/i.test(ua) || function isPhantomjs() {
                var err = "";
                try {
                    null[0]();
                } catch (e) {
                    err = e;
                }
                return err.stack.indexOf("phantomjs") > -1;
            }();
        },
        _14: function _14() {
            return /python/i.test(navigator.appVersion);
        },
        _15: function _15() {
            return function IsSupportLocalStorage() {
                try {
                    return localStorage.a = "b", "b" === localStorage.a;
                } catch (e) {
                    return !1;
                }
            }();
        },
        _16: function _16() {
            return /Maxthon/i.test(navigator.vendor);
        },
        _17: function _17() {
            return "opr" in window || "opera" in window;
        },
        _18: function _18() {
            return isChrome && /BIDUBrowser/i.test(ua);
        },
        _19: function _19() {
            return isChrome && /LBBROWSER/i.test(ua);
        },
        _20: function _20() {
            return isChrome && /QQBrowser/.test(ua);
        },
        _21: function _21() {
            return isChrome && /UBrowser/i.test(ua);
        },
        _22: function _22() {
            return isChrome && /2345Explorer/.test(ua);
        },
        _23: function _23() {
            return isChrome && /TheWorld/.test(ua);
        },
        _24: function _24() {
            return isChrome && "MSGesture" in window;
        },
        _25: function _25() {
            return isNativeObject(Object.getOwnPropertyDescriptor) && null != Object.getOwnPropertyDescriptor(navigator);
        },
        _26: function _26() {
            return "$cdc_asdjflasutopfhvcZLmcfl_" in window || navigator.webdriver;
        },
        _27: function _27() {
            return document.hidden;
        },
        _28: function _28() {
            return /zh-cn/i.test(navigator.language || navigator.systemLanguage);
        },
        _29: function _29() {
            return -480 === (new Date).getTimezoneOffset();
        },
        _30: function _30() {
            return function IsSupportWebGL() {
                var webglContext, i;
                try {
                    return (webglContext = document.createElement("canvas").getContext("webgl")) && (i = webglContext.getExtension("WEBGL_lose_context")) && i.loseContext(), 
                    !!webglContext;
                } catch (e) {
                    return !1;
                }
            }();
        },
        _31: function _31() {
            return null !== window.outerWidth && (window.outerWidth === document.documentElement.clientWidth || document.body.clientWidth);
        }
    };
    class DynamicDetails {
        constructor() {
            this.touchPosition = {
                x: 0,
                y: 0
            }, this.touchEventTrusted = !1, this.mouseEventCount = 0, this.mousePosition = {
                x: 0,
                y: 0
            }, this.mouseDownCount = 0, this.mouseClickPosition = {
                x: 0,
                y: 0
            }, this.mouseEventTrusted = !1, this.keyDownCount = 0, this.scrollCount = 0, this.windowBlur = !1, 
            this.windowFocus = !1, this.consoleWindowOpened = !1, this.ip = 0, this.batteryLevel = 127, 
            this.deviceOrientationExists = !1, this.features = this.packStaticFeatureValue();
        }
        packStaticFeatureValue() {
            var i, shift, set, value = 0;
            for (i in checkFunctions) {
                shift = parseInt(i.split("_")[1]) - 1, set = 0;
                try {
                    set = checkFunctions[i]() ? 1 : 0;
                } catch (e) {}
                value |= set << shift;
            }
            return value;
        }
        touchStartFn(e) {
            this.touchEventTrusted = e.isTrusted, this.mouseEventCount++;
            const t = e.touches[0];
            this.touchPosition.x = 0 | t.clientX, this.touchPosition.y = 0 | t.clientY;
        }
        touchMoveFn(e) {
            this.touchEventTrusted = e.isTrusted, this.mouseEventCount++;
        }
        mouseMoveFn(e) {
            this.mouseEventTrusted = e.isTrusted, this.mouseEventCount++;
        }
        mouseDownFn(e) {
            this.mouseEventTrusted = e.isTrusted, this.mouseEventCount++, this.mousePosition.x = e.clientX, 
            this.mousePosition.y = e.clientY, this.mouseDownCount++;
        }
        mouseClickFn(e) {
            this.mouseEventTrusted = e.isTrusted, this.mouseEventCount++, this.mouseClickPosition.x = e.clientX, 
            this.mouseClickPosition.y = e.clientY;
        }
        keyDownFn(e) {
            this.keyDownCount++;
        }
        scrollFn(e) {
            this.scrollCount++;
        }
        focusFn(e) {
            this.windowFocus = !0, this.windowBlur = !1;
        }
        blurFn(e) {
            this.windowBlur = !0;
        }
        getWebRTCIP(details) {
            var t, i, r, a;
            let that = this;
            (t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection) || (details.ip = 0), 
            i = {
                optional: [ {
                    RtpDataChannels: !0
                } ]
            }, r = {
                iceServers: [ {
                    urls: "stun:stun.services.mozilla.com"
                } ],
                sdpSemantics: "plan-b"
            };
            try {
                a = new t(r, i), setTimeout((function(n) {
                    try {
                        a.close();
                    } catch (t) {}
                }), 5e3), a.onicecandidate = function(t) {
                    var i = t.candidate;
                    i || (details.ip = 0), null != (r = that.extractIPFromWebRTCCandidate(i.candidate)) && (details.ip = r), 
                    a.onicecandidate = null;
                }, a.createDataChannel(""), a.createOffer().then((function(n) {
                    a.setLocalDescription(n, (function() {}), (function() {}));
                })).catch((function(t) {
                    details.ip = 0;
                }));
            } catch (e) {
                details.ip = 0;
            }
        }
        extractIPFromWebRTCCandidate(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null;
        }
        getDeviceOrientation(details) {
            window.addEventListener("deviceorientation", (function cb(event) {
                event.gamma && (details.deviceOrientationExists = !0), document.removeEventListener("deviceorientation", cb, !1);
            }), !1);
        }
        getBatteryStatus(details) {
            navigator.getBattery && navigator.getBattery().then((function(battery) {
                battery && (details.batteryLevel = 100 * battery.level | 0);
            }));
        }
        consoleCheckLoop() {
            var func = this.devtoolsCb.bind(this);
            func(), this.checkConsoleLoopHandle = setInterval((function(e) {
                func();
            }), 5e3);
        }
        devtoolsCb() {
            var details = this, element = new Image;
            Object.defineProperty(element, "id", {
                get: function get() {
                    details.consoleWindowOpened = !0, clearInterval(details.checkConsoleLoopHandle);
                }
            });
        }
        pack() {
            let numberToHex = n => n.toString(16);
            return `${`${this.touchPosition.x},${this.touchPosition.y},${this.touchEventTrusted ? 1 : 0}`};${`${this.mouseEventCount},${this.mousePosition.x},${this.mousePosition.y},${this.mouseClickPosition.x},${this.mouseClickPosition.y},${this.mouseDownCount},${this.mouseEventTrusted ? 1 : 0}`};${`${this.keyDownCount},${this.scrollCount},${this.windowBlur ? 1 : 0},${this.windowFocus ? 1 : 0}`};${`${this.consoleWindowOpened ? 1 : 0},${numberToHex(this.ip)},${this.batteryLevel},${this.deviceOrientationExists ? 1 : 0}`};${"" + numberToHex(this.features)}`;
        }
        encode() {
            return Base64.encode(this.pack());
        }
    }
    class SignInfo {
        constructor() {
            this.details = new DynamicDetails, this.fp = "", this.initialize();
        }
        initialize() {
            let that = this;
            try {
                const k = Config.get("gwdang-dfp-obj", "{}");
                if (k) {
                    const r = JSON.parse(k);
                    Object.keys(r).forEach(item => {
                        that.details[item] = r[item];
                    });
                }
            } catch (e) {}
            window.requestIdleCallback ? window.requestIdleCallback(() => {
                that.collectMovement(that.details);
            }) : setTimeout(() => {
                that.collectMovement(that.details);
            }, 500), fingerprint2.get({
                fonts: {
                    extendedJsFonts: !1
                },
                excludes: {
                    userAgent: !0,
                    enumerateDevices: !0,
                    pixelRatio: !0,
                    doNotTrack: !0,
                    fontsFlash: !0
                }
            }, function(components) {
                var values = components.map((function(component) {
                    return component.value;
                })), murmur = fingerprint2.x64hash128(values.join(""), 31);
                that.fp = murmur, Config.set(GwdHelper.gwd_fp_key, that.fp, 43200);
            }.bind(this)), that.intervalHandle = setInterval(function() {
                var collected = that.details.encode();
                Config.set("gwdang-dfp-obj", JSON.stringify(that.details)), Config.set(GwdHelper.gwd_dfp_key, collected, 7200);
            }.bind(that), 2e3);
        }
        collectMovement(details) {
            var _a, _b, b = document.body;
            "ontouchmove" in document && document.addEventListener("touchmove", details.touchMoveFn.bind(details), !0);
            try {
                b.addEventListener("touchstart", details.touchStartFn.bind(details), !0), b.addEventListener("mousemove", details.mouseMoveFn.bind(details), !0), 
                b.addEventListener("mousedown", details.mouseDownFn.bind(details), !0), b.addEventListener("click", details.mouseClickFn.bind(details), !0), 
                b.addEventListener("keydown", details.keyDownFn.bind(details), !0), b.addEventListener("wheel", details.scrollFn.bind(details), !0), 
                window.addEventListener("focus", null === (_a = details.focusFn) || void 0 === _a ? void 0 : _a.bind(details), !0), 
                window.addEventListener("blur", null === (_b = details.blurFn) || void 0 === _b ? void 0 : _b.bind(details), !0), 
                details.getWebRTCIP(details), details.getDeviceOrientation(details), details.getBatteryStatus(details), 
                details.consoleCheckLoop();
            } catch (e) {}
        }
    }
    class Base64 {
        static encode(input) {
            let chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "", i = 0;
            for (input = Base64._utf8_encode(input); i < input.length; ) chr1 = input.charCodeAt(i++), 
            chr2 = input.charCodeAt(i++), chr3 = input.charCodeAt(i++), enc1 = chr1 >> 2, enc2 = (3 & chr1) << 4 | chr2 >> 4, 
            enc3 = (15 & chr2) << 2 | chr3 >> 6, enc4 = 63 & chr3, isNaN(chr2) ? enc3 = enc4 = 64 : isNaN(chr3) && (enc4 = 64), 
            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            return output;
        }
        static decode(input) {
            let chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "", i = 0;
            for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < input.length; ) enc1 = this._keyStr.indexOf(input.charAt(i++)), 
            enc2 = this._keyStr.indexOf(input.charAt(i++)), enc3 = this._keyStr.indexOf(input.charAt(i++)), 
            enc4 = this._keyStr.indexOf(input.charAt(i++)), chr1 = enc1 << 2 | enc2 >> 4, chr2 = (15 & enc2) << 4 | enc3 >> 2, 
            chr3 = (3 & enc3) << 6 | enc4, output += String.fromCharCode(chr1), 64 != enc3 && (output += String.fromCharCode(chr2)), 
            64 != enc4 && (output += String.fromCharCode(chr3));
            return output = Base64._utf8_decode(output), output;
        }
        static _utf8_encode(string) {
            string = string.replace(/\r\n/g, "\n");
            let utftext = "";
            for (let n = 0; n < string.length; n++) {
                let c = string.charCodeAt(n);
                c < 128 ? utftext += String.fromCharCode(c) : c > 127 && c < 2048 ? (utftext += String.fromCharCode(c >> 6 | 192), 
                utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224), 
                utftext += String.fromCharCode(c >> 6 & 63 | 128), utftext += String.fromCharCode(63 & c | 128));
            }
            return utftext;
        }
        static _utf8_decode(utftext) {
            let string = "", i = 0, c = 0, c2 = 0, c3 = 0;
            for (;i < utftext.length; ) c = utftext.charCodeAt(i), c < 128 ? (string += String.fromCharCode(c), 
            i++) : c > 191 && c < 224 ? (c2 = utftext.charCodeAt(i + 1), string += String.fromCharCode((31 & c) << 6 | 63 & c2), 
            i += 2) : (c2 = utftext.charCodeAt(i + 1), c3 = utftext.charCodeAt(i + 2), string += String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3), 
            i += 3);
            return string;
        }
    }
    Base64._keyStr = "ZLHUPIO4tAok06E/caWCmSFfKusy3nrjJRzDTvBgY7wdMlXp82NViGq=+Qheb91x5";
    class GwdService extends PluginBase {
        constructor() {
            super(...arguments), this.rules = new Map([ [ SiteEnum.TMall, /detail\.tmall\.com\/item\.htm/i ], [ SiteEnum.TaoBao, /item\.taobao\.com\//i ], [ SiteEnum.JingDong, /item\.(yiyaojd|jd)\.(com|hk)\/[0-9]*\.html/i ], [ SiteEnum.SuNing, /product\.suning\.com\//i ], [ SiteEnum.Vp, /detail\.vip\.com\//i ], [ SiteEnum.KaoLa, /goods\.kaola\.(com\.hk|com)/i ] ]), 
            this._appName = "GwdService", this.historyService = new HistoryService, this.factory = new DefCoupon, 
            this.itemUrl = "";
        }
        loader() {
            new SignInfo;
        }
        run() {
            this.injectHistory();
        }
        injectHistory() {
            var _a, _b;
            switch (Logger.debug(this.site), this.site) {
              case SiteEnum.TaoBao:
              case SiteEnum.TMall:
                this.factory = new TaoCoupon, this.itemUrl = "https://item.taobao.com/item.htm?id=" + Core.getPar("id"), 
                this.parentEleSelector = '[class^="BasicContent--"] [class^="detailInfoWrap--"]';
                break;

              case SiteEnum.JingDong:
                this.factory = new JdCoupon, this.itemUrl = `https://item.jd.com/${null === (_b = null === (_a = unsafeWindow.pageConfig) || void 0 === _a ? void 0 : _a.product) || void 0 === _b ? void 0 : _b.skuid}.html`;
                break;

              case SiteEnum.SuNing:
                this.factory = new SuningCoupon;
                break;

              case SiteEnum.Vp:
                this.factory = new VpCoupon;
                break;

              case SiteEnum.KaoLa:
                this.factory = new KaolaCoupon, this.itemUrl = `https://goods.kaola.com/product/${unsafeWindow.__kaolaGTMGoodsData.product_no}.html`;
                break;

              default:
                this.factory = new DefCoupon;
            }
            this.factory.init_html(this.getHistoryHtml()).then(res => {
                res && this.InitPriceHistory(), this.factory.init_coupons && this.factory.init_coupons(), 
                this.autoResize();
            });
        }
        autoResize() {
            let that = this;
            if (that.parentEleSelector) {
                let setChartWidth = () => {
                    var _a, _b;
                    if ($(".vip-plugin-outside-chart-container")) {
                        let width = Number(null === (_a = $(that.parentEleSelector)) || void 0 === _a ? void 0 : _a.width());
                        $(".vip-plugin-outside-chart-container").width(width - 240), Logger.info("\u56fe\u8868\u7ed8\u5236\u5bbd\u5ea6\u66f4\u65b0:" + width), 
                        null === (_b = that.echartsObj) || void 0 === _b || _b.resize();
                    }
                };
                Core.autoLazyload(() => {
                    var _a, _b;
                    return (null === (_a = $(that.parentEleSelector)) || void 0 === _a ? void 0 : _a.length) > 0 && Number(null === (_b = $(that.parentEleSelector)) || void 0 === _b ? void 0 : _b.width()) > 0;
                }, () => {
                    setChartWidth();
                }, .5), unsafeWindow.window.onresize = () => {
                    Logger.info("\u9875\u9762\u5927\u5c0f\u53d8\u66f4"), setChartWidth();
                };
            }
        }
        InitPriceHistory() {
            var _a;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d");
            let that = this;
            Route.queryHistoryV5(null !== (_a = that.itemUrl) && void 0 !== _a ? _a : Core.url).then(res => {
                Logger.debug(res.data), $(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                that.echartsObj = echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), that.theme()), 
                that.echartsObj.setOption(that.getChartOption(res.data)), that.chartMsg("");
            }).catch(() => {
                Route.queryHistoryV4(GwdHelper.get(`https://browser.gwdang.com/extension/price_towards?url=${encodeURIComponent(Core.url)}&ver=1`), GwdHelper.get("https://browser.gwdang.com/brwext/permanent_id?version=2&default_style=bottom&referrer=" + unsafeWindow.document.referrer), data => {
                    if (Logger.debug(data), "price_status" in data) $(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                    that.echartsObj = echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), this.theme()), 
                    that.echartsObj.setOption(that.getChartOptionGwd(data)), that.chartMsg(""); else {
                        if ("is_ban" in data && 1 == data.is_ban) if (1 != Config.get("gwd_verify_close")) {
                            sAlert.confirm("\u54ce\u54df\u4e0d\u9519\u54e6", "\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u5f02\u5e38,\u662f\u5426\u6253\u5f00\u9a8c\u8bc1\u9875\u9762\u8fdb\u884c\u9a8c\u8bc1?", "\u9a8c\u8bc1\u8d70\u8d77", "\u8001\u5b50\u4e0d\u770b", "info", "\u5c4f\u853d\u4e00\u5929").then(res => {
                                res.isConfirmed ? Core.open("https://browser.gwdang.com/slider/verify.html?fromUrl=" + encodeURIComponent(Core.url)) : res.isDenied && (Config.set("gwd_verify_close", 1, 86400), 
                                that.chartMsg("\u7528\u6237\u8868\u793a\u4e0d\u60f3\u770b\u5e76\u62d2\u7edd\u9a8c\u8bc1")), 
                                sAlert.close(res);
                            });
                            let slContainer = ".swal2-container";
                            "99999999999" != $(slContainer).css("z-index") && $(slContainer).css("z-index", "99999999999");
                        } else that.chartMsg("\u7528\u6237\u5c4f\u853d\u4e86\u9a8c\u8bc1\u8868\u793a\u4e0d\u60f3\u770b");
                        that.historyService.Process();
                    }
                });
            });
        }
        getHistoryHtml() {
            return `<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-toolbar">\n                    [\u624b\u5de5\u67e5\u8be2\uff1a<a href="https://tool.manmanbuy.com/m/disSitePro.aspx?c_from=m&url=${Core.url}" target="_blank">\u63a5\u53e3\u4e00</a>,<a href="http://www.hisprice.cn/his.php?hisurl=${Core.url}" target="_blank">\u63a5\u53e3\u4e8c</a>]\n                    </div>\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode" id="vip-plugin-outside-coupons-qrcode-img"></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                    \n                </div>`;
        }
        chartMsg(msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        }
        getChartOption(data) {
            var _a, _b;
            data.info.min;
            let text = `\u6700\u4f4e\uff1a{red|\uffe5${data.info.min}} ( {red|${data.info.max}} )`, maxData = new PromoInfo, minData = new PromoInfo;
            minData.price = Number.MAX_SAFE_INTEGER, minData.humanPrice = Number.MAX_SAFE_INTEGER, 
            maxData.humanPrice = Number.MIN_SAFE_INTEGER;
            let chartOption = new LinesOption;
            chartOption = {
                title: {
                    left: "center",
                    subtext: text,
                    subtextStyle: {
                        color: "#000",
                        rich: {
                            red: {
                                color: "red"
                            }
                        }
                    }
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    },
                    formatter: function(params) {
                        var _a, _b, year, month, day;
                        params = params[0];
                        let date = new Date(params.axisValue);
                        year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
                        let monthStr = month.toString(), dayStr = day.toString();
                        month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day);
                        let price = null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toString();
                        return price = null === (_b = parseFloat(price)) || void 0 === _b ? void 0 : _b.toFixed(2), 
                        `\u65e5\u671f\uff1a${year}-${monthStr}-${dayStr}<br/>\u4ef7\u683c\uff1a\uffe5${price}${"" == params.value[2] ? "" : "<br/>" + params.value[2]}`;
                    }
                },
                grid: {
                    left: 0,
                    right: 20,
                    top: 50,
                    bottom: 10,
                    containLabel: !0
                },
                xAxis: {
                    type: "time"
                },
                yAxis: {
                    type: "value"
                },
                series: [ {
                    type: "line",
                    step: "end",
                    data: (data => {
                        let l = [];
                        if (data.list.length > 0) {
                            let couponsMap = {}, now = new Date("9999-99-99 00:00:00").getMilliseconds();
                            data.list.forEach(v => {
                                v.time < now && (now = v.time), v.price > maxData.humanPrice && (maxData.humanPrice = v.price, 
                                maxData.time = v.time), v.price < minData.humanPrice && (minData.humanPrice = v.price, 
                                minData.time = v.time), (new PromoInfo).msg = new MsgInfo;
                                let p = {
                                    name: v.time,
                                    value: [ v.date, v.price, "" ]
                                };
                                l.push(p);
                            }), Logger.debug(couponsMap);
                        }
                        return Logger.debug(maxData), Logger.debug(minData), l;
                    })(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            };
            chartOption.yAxis = {
                min: 10 * Math.floor(.9 * minData.humanPrice / 10),
                max: 10 * Math.ceil(1.1 * maxData.humanPrice / 10)
            };
            let line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop();
            return line.markPoint = {
                data: [ {
                    value: minData.humanPrice,
                    coord: [ 1e3 * minData.time, minData.humanPrice ],
                    name: "\u6700\u5c0f\u503c",
                    itemStyle: {
                        color: "green"
                    }
                }, {
                    value: maxData.humanPrice,
                    coord: [ 1e3 * maxData.time, maxData.humanPrice ],
                    name: "\u6700\u5927\u503c",
                    itemStyle: {
                        color: "red"
                    }
                } ]
            }, null === (_b = chartOption.series) || void 0 === _b || _b.push(line), chartOption.dataZoom = [ {
                type: "slider",
                show: !0,
                realtime: !0,
                start: 0,
                end: 100
            } ], chartOption;
        }
        getMinPrice(data) {
            var _a;
            let analysisTxt = data.analysis.tip;
            if (data.analysis.promo_days.length > 0) {
                let min = data.analysis.promo_days[data.analysis.promo_days.length - 1];
                analysisTxt = `${analysisTxt}\uff1a{red|\uffe5${min.price}} ( {red|${min.date}} )`;
            } else {
                let min = Number.MIN_VALUE, minDate = 0;
                null === (_a = data.nopuzzle_promo) || void 0 === _a || _a.forEach(el => {
                    el.price < min && (min = el.price, minDate = el.time);
                }), Core.format(new Date(1e3 * minDate), "yyyy-MM-dd"), analysisTxt = `${analysisTxt}\uff1a{red|${min}} ( {red|${minDate}} )`;
            }
            return analysisTxt;
        }
        getChartOptionGwd(data) {
            var _a, _b;
            let text = this.getMinPrice(data), maxData = new PromoInfo, minData = new PromoInfo;
            minData.price = Number.MAX_SAFE_INTEGER, minData.humanPrice = Number.MAX_SAFE_INTEGER, 
            maxData.humanPrice = Number.MIN_SAFE_INTEGER;
            let chartOption = new LinesOption;
            chartOption = {
                title: {
                    left: "center",
                    subtext: text,
                    subtextStyle: {
                        color: "#000",
                        rich: {
                            red: {
                                color: "red"
                            }
                        }
                    }
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    },
                    formatter: function(params) {
                        var _a, _b, year, month, day;
                        params = params[0];
                        let date = new Date(params.name);
                        year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
                        let monthStr = month.toString(), dayStr = day.toString();
                        month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day);
                        let price = null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toString();
                        return price = null === (_b = parseFloat(price)) || void 0 === _b ? void 0 : _b.toFixed(2), 
                        `\u65e5\u671f\uff1a${year}-${monthStr}-${dayStr}<br/>\u4ef7\u683c\uff1a\uffe5${price}${"" == params.value[2] ? "" : "<br/>" + params.value[2]}`;
                    }
                },
                grid: {
                    left: 0,
                    right: 20,
                    top: 50,
                    bottom: 10,
                    containLabel: !0
                },
                xAxis: {
                    type: "time"
                },
                yAxis: {
                    type: "value"
                },
                series: [ {
                    type: "line",
                    step: "end",
                    data: (data => {
                        var _a;
                        let l = [];
                        if (data.store.length > 0) {
                            let storeData = data.store[0];
                            data.store.length > 1 && (storeData = data.store[1]);
                            let couponsMap = {};
                            (null === (_a = data.promo) || void 0 === _a ? void 0 : _a.length) > 0 && data.promo.forEach(v => {
                                couponsMap.hasOwnProperty(1e3 * v.time) || (couponsMap[1e3 * v.time] = v);
                            });
                            let now = storeData.all_line_begin_time, dayTime = 864e5;
                            storeData.all_line.forEach(v => {
                                v > maxData.humanPrice && (maxData.humanPrice = v, maxData.time = now / 1e3), v < minData.humanPrice && (minData.humanPrice = v, 
                                minData.time = now / 1e3);
                                let promo = new PromoInfo;
                                promo.msg = new MsgInfo, couponsMap.hasOwnProperty(now) && (Logger.debug("yes"), 
                                promo = couponsMap[now]);
                                let p = {
                                    name: now,
                                    value: [ now, v, couponsMap.hasOwnProperty(now) ? promo.msg.coupon ? promo.msg.promotion : promo.msg.coupon : "" ]
                                };
                                l.push(p), now += dayTime;
                            }), Logger.debug(couponsMap);
                        }
                        return Logger.debug(maxData), Logger.debug(minData), l;
                    })(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            };
            chartOption.yAxis = {
                min: 10 * Math.floor(.9 * minData.humanPrice / 10),
                max: 10 * Math.ceil(1.1 * maxData.humanPrice / 10)
            };
            let line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop();
            return line.markPoint = {
                data: [ {
                    value: minData.humanPrice,
                    coord: [ 1e3 * minData.time, minData.humanPrice ],
                    name: "\u6700\u5c0f\u503c",
                    itemStyle: {
                        color: "green"
                    }
                }, {
                    value: maxData.humanPrice,
                    coord: [ 1e3 * maxData.time, maxData.humanPrice ],
                    name: "\u6700\u5927\u503c",
                    itemStyle: {
                        color: "red"
                    }
                } ]
            }, null === (_b = chartOption.series) || void 0 === _b || _b.push(line), chartOption.dataZoom = [ {
                type: "slider",
                show: !0,
                realtime: !0,
                start: 0,
                end: 100
            } ], chartOption;
        }
        theme() {
            return {
                color: [ "#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089" ],
                title: {
                    itemGap: 8,
                    textStyle: {
                        fontWeight: "normal",
                        color: "#008acd"
                    }
                },
                legend: {
                    itemGap: 8
                },
                dataRange: {
                    itemWidth: 15,
                    color: [ "#2ec7c9", "#b6a2de" ]
                },
                toolbox: {
                    color: [ "#1e90ff", "#1e90ff", "#1e90ff", "#1e90ff" ],
                    effectiveColor: "#ff4500",
                    itemGap: 8
                },
                tooltip: {
                    backgroundColor: "rgba(50,50,50,0.5)",
                    axisPointer: {
                        type: "line",
                        lineStyle: {
                            color: "#008acd"
                        },
                        crossStyle: {
                            color: "#008acd"
                        },
                        shadowStyle: {
                            color: "rgba(200,200,200,0.2)"
                        }
                    }
                },
                dataZoom: {
                    dataBackgroundColor: "#efefff",
                    fillerColor: "rgba(182,162,222,0.2)",
                    handleColor: "#008acd"
                },
                grid: {
                    borderColor: "#eee"
                },
                categoryAxis: {
                    axisLine: {
                        lineStyle: {
                            color: "#008acd"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [ "#eee" ]
                        }
                    }
                },
                valueAxis: {
                    axisLine: {
                        lineStyle: {
                            color: "#008acd"
                        }
                    },
                    splitArea: {
                        show: !0,
                        areaStyle: {
                            color: [ "rgba(250,250,250,0.1)", "rgba(200,200,200,0.1)" ]
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [ "#eee" ]
                        }
                    }
                },
                polar: {
                    axisLine: {
                        lineStyle: {
                            color: "#ddd"
                        }
                    },
                    splitArea: {
                        show: !0,
                        areaStyle: {
                            color: [ "rgba(250,250,250,0.2)", "rgba(200,200,200,0.2)" ]
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#ddd"
                        }
                    }
                },
                timeline: {
                    lineStyle: {
                        color: "#008acd"
                    },
                    controlStyle: {
                        normal: {
                            color: "#008acd"
                        },
                        emphasis: {
                            color: "#008acd"
                        }
                    },
                    symbol: "emptyCircle",
                    symbolSize: 3
                },
                bar: {
                    itemStyle: {
                        normal: {
                            borderRadius: 5
                        },
                        emphasis: {
                            borderRadius: 5
                        }
                    }
                },
                line: {
                    symbol: "emptyCircle",
                    symbolSize: 3
                },
                k: {
                    itemStyle: {
                        normal: {
                            color: "#d87a80",
                            color0: "#2ec7c9",
                            lineStyle: {
                                width: 1,
                                color: "#d87a80",
                                color0: "#2ec7c9"
                            }
                        }
                    }
                },
                scatter: {
                    symbol: "circle",
                    symbolSize: 4
                },
                radar: {
                    symbol: "emptyCircle",
                    symbolSize: 3
                },
                map: {
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: "#ddd"
                            },
                            label: {
                                textStyle: {
                                    color: "#d87a80"
                                }
                            }
                        },
                        emphasis: {
                            areaStyle: {
                                color: "#fe994e"
                            },
                            label: {
                                textStyle: {
                                    color: "rgb(100,0,0)"
                                }
                            }
                        }
                    }
                },
                force: {
                    itemStyle: {
                        normal: {
                            linkStyle: {
                                strokeColor: "#1e90ff"
                            }
                        }
                    }
                },
                chord: {
                    padding: 4,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 1,
                                color: "rgba(128, 128, 128, 0.5)"
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: "rgba(128, 128, 128, 0.5)"
                                }
                            }
                        },
                        emphasis: {
                            lineStyle: {
                                width: 1,
                                color: "rgba(128, 128, 128, 0.5)"
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: "rgba(128, 128, 128, 0.5)"
                                }
                            }
                        }
                    }
                },
                gauge: {
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: !0,
                        lineStyle: {
                            color: [ [ .2, "#2ec7c9" ], [ .8, "#5ab1ef" ], [ 1, "#d87a80" ] ],
                            width: 10
                        }
                    },
                    axisTick: {
                        splitNumber: 10,
                        length: 15,
                        lineStyle: {
                            color: "auto"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "auto"
                        }
                    },
                    splitLine: {
                        length: 22,
                        lineStyle: {
                            color: "auto"
                        }
                    },
                    pointer: {
                        width: 5,
                        color: "auto"
                    },
                    title: {
                        textStyle: {
                            color: "#333"
                        }
                    },
                    detail: {
                        textStyle: {
                            color: "auto"
                        }
                    }
                },
                textStyle: {
                    fontFamily: "\u5fae\u8f6f\u96c5\u9ed1, Arial, Verdana, sans-serif"
                }
            };
        }
    }
    GwdService.chartsWidth = !1;
    class GwdHelper {
        static get(url) {
            let from_type = "", G = GwdHelper;
            return GwdHelper.from_type && (from_type = "&from_type=" + GwdHelper.from_type), 
            (url = GwdHelper.wrap(url) + "version=" + (new Date).getTime() + "&from_device=" + G.from_device + from_type).includes("union=") || (url += "&union=" + G.union), 
            G.crc64 && (url += "&crc64=1"), url;
        }
        static wrap(url) {
            let G = GwdHelper;
            if (!url) return url;
            let start = "?", callback = "callback=?&";
            url.indexOf("?") > -1 && (start = "&");
            let format = "format=jsonp&";
            callback = "", format = "format=json&";
            let fp = "";
            return localStorage.getItem("gwdang-fp") && (fp = `fp=${Config.get(G.gwd_fp_key)}&dfp=${Config.get(G.gwd_dfp_key)}&`), 
            "" + url + start + "format=json&" + fp;
        }
    }
    GwdHelper.version = "", GwdHelper.from_device = "default", GwdHelper.from_type = "", 
    GwdHelper.union = "union_gwdang", GwdHelper.crc64 = !0, GwdHelper.gwd_fp_key = "gwd_fp_key", 
    GwdHelper.gwd_dfp_key = "gwd_dfp_key", styleInject(".wandhi_tab {\n  font-family: PingFangSC-Regular;\n  font-weight: 400;\n  font-size: 14px;\n  border: 1px solid #f40;\n  border-collapse: collapse;\n}\n.wandhi_tab thead {\n  font-size: 14px;\n  text-align: center;\n}\n.wandhi_tab tr th {\n  padding: 10px 10px;\n  text-align: center;\n}\n.wandhi_tab tr td {\n  padding: 10px 10px;\n  text-align: center;\n  font-size: 14px;\n}\n.wandhi_tab tr td a {\n  text-decoration: none;\n}\n.wandhi_tab_taobao,\n.wandhi_tab_tmall {\n  margin-bottom: 15px;\n}\n.wandhi_tab_taobao thead,\n.wandhi_tab_tmall thead {\n  background-color: #f40;\n  color: #FFF;\n}\n.wandhi_tab_taobao tr td,\n.wandhi_tab_tmall tr td {\n  border: 1px solid #e6602d;\n  color: #e6602d;\n}\n.wandhi_tab_taobao tr td a,\n.wandhi_tab_tmall tr td a {\n  color: #e6602d;\n}\n.wandhi_tab_tmall thead {\n  background-color: #ff0036;\n}\n.wandhi_tab_tmall tr td {\n  border: 1px solid #ff0036;\n  color: #ff0036;\n}\n.wandhi_tab_tmall tr td a {\n  color: #ff0036;\n}\n.tb-prop .tb-img li a {\n  width: auto !important;\n  background-position-x: 5px !important;\n}\n.tb-prop .tb-img li span {\n  text-indent: 1em !important;\n  display: block !important;\n  padding: 0 5px !important;\n  margin-left: 35px;\n}\n");
    class TaoBaoService extends PluginBase {
        constructor() {
            super(...arguments), this._appName = "TaoBaoService", this.rules = new Map([ [ SiteEnum.TaoBao, /taobao\.com\//i ], [ SiteEnum.TMall, /tmall\.(com|hk)\//i ] ]), 
            this.UrlTag = "Wandhi_qLink", this.historyService = new GwdService;
        }
        loader() {}
        run() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }
        init() {
            var init = `<div id='wandhi_div'><table class='wandhi_tab ${this.site == SiteEnum.TaoBao ? "wandhi_tab_taobao" : "wandhi_tab_tmall"}' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>`;
            Core.autoLazyload(() => {
                var _a, _b;
                return (null === (_a = $("#skuWrap")) || void 0 === _a ? void 0 : _a.length) > 0 || (null === (_b = $('[class^="Price--"][class*=" hasBgImg--"]')) || void 0 === _b ? void 0 : _b.length) > 0;
            }, () => {
                $("#skuWrap").prepend(init), $("#J_LinkBasket").parent().parent().prepend(init), 
                $(".J_LinkAdd").parent().parent().prepend(init), $("[class*=BasicContent--actions]").prepend(init), 
                $(".beautify-scroll-bar").prepend(init);
                let itemId = Core.getPar("id"), key = "td_s_" + itemId, d = Config.get(key, !1);
                d ? this.initElement(d) : Route.queryCoupons(itemId, data => {
                    Config.set(key, data, 43200), this.initElement(data);
                });
            }, .2);
        }
        initElement(data) {
            var _a, row;
            $("#wandhi_table tbody tr").remove(), row = "", data.code && (null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0 && "string" != typeof data.data ? data.data.forEach(e => {
                row += `<tr><td>${e.quan_context}</td><td>${e.after_price}</td><td>${e.quan_time}</td><td><b onclick=window.open(decodeURIComponent('${e.quan_link}')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>`;
            }) : row = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(row);
        }
    }
    class JdService extends PluginBase {
        constructor() {
            super(), this._appName = "JdService", this.rules = new Map([ [ SiteEnum.JingDong, /item\.(yiyaojd|jd)\.c/i ] ]), 
            this.historyService = new GwdService;
        }
        loader() {
            this.historyService.linkTest() && this.historyService.Process();
        }
        run() {
            var keywords = $(".sku-name").text().trim();
            Core.lazyload(() => {
                $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>'), 
                $(".btn-yhj").on("click", (function() {
                    Core.open(`https://shop.huizhek.com/?r=/l/jdlist&kw=${encodeURIComponent(keywords)}&t=223`);
                }));
            }, 1);
        }
    }
    !function(ItemType) {
        ItemType.TaoBao = "tb", ItemType.TMall = "tm", ItemType.JingDong = "jd", ItemType.JingDongChaoshi = "jdcs", 
        ItemType.Suning = "sn";
    }(ItemType || (ItemType = {}));
    class Tao {
        static isVailidItemId(itemId) {
            if (!itemId) return !1;
            var itemIdInt = parseInt(itemId);
            return itemIdInt.toString() == itemId && itemIdInt > 1e4;
        }
        static isValidTaoId(itemId) {
            return !!itemId && (!!Core.isNumber(itemId) || (!(itemId.indexOf("http") >= 0) || !(!this.isTaoBaoDetailPage(itemId) && !itemId.includes("//detail.ju.taobao.com/home.htm"))));
        }
        static isTaoBaoDetailPage(url) {
            return url.includes("//item.taobao.com/item.htm") || url.includes("//detail.tmall.com/item.htm") || url.includes("//chaoshi.detail.tmall.com/item.htm") || url.includes("//detail.tmall.hk/hk/item.htm");
        }
    }
    class ListService extends PluginBase {
        constructor() {
            super(), this.rules = new Map([ [ SiteEnum.TaoBao, /s\.taobao\.com\/search/i ], [ SiteEnum.TMall, /list\.tmall\.com\/search_product\.htm/i ], [ SiteEnum.KaoLa, /search\.kaola\.com\/search\.html/i ], [ SiteEnum.JingDongList, /search\.jd\.com/i ], [ SiteEnum.SuNing, /search\.suning\.com/i ] ]), 
            this.selectorList = [], this.selectora = [], this.atrack = [], this.key = "list_service_", 
            this._appName = "TaoList";
        }
        loader() {}
        static get style() {
            return "    \n    .onekeyvip-tb-box-area {position: absolute;top: 10px;right: 5px;z-index: 9999;}\n    .onekeyvip-jd-box-area {position: absolute;top: 275px;right: 10px;z-index: 9999;}  \n    .onekeyvip-jdcs-box-area {position: absolute;top: 5px;right: 0px;z-index: 9999;}\n    .onekeyvip-box-info-translucent{opacity: .33;}\n    .onekeyvip-box-info, .onekeyvip-box-info:hover, .onekeyvip-box-info:visited {text-decoration: none!important;}\n    .onekeyvip-box-wait{cursor:pointer}\n    .onekeyvip-box-info {width: auto!important;height: auto!important;padding: 6px 8px!important;font-size: 12px;color: #fff!important;border-radius: 15px;cursor: pointer;font-weight:bold}\n    .onekeyvip-jd-box-info-default, .onekeyvip-tb-box-info-default, .onekeyvip-jdcs-box-info-default{background: #3186fd!important;}\n    .onekeyvip-box-info-empty {color: #000!important;background: #ccc!important;}\n    .onekeyvip-box-info-find {background: #ff0036!important;}\n    .onekeyvip-box-done{position:relative}\n    ";
        }
        run() {
            switch (ListService.that = this, this.site) {
              case SiteEnum.TaoBao:
                this.selectorList.push(".items .item"), this.selectorList.push('a[class^="Card--doubleCardWrapper"]'), 
                this.selectorList.push('a[class^="doubleCardWrapper--"]'), this.atrack.push(".pic a", ".title a"), 
                this.itemType = ItemType.TaoBao;
                break;

              case SiteEnum.TMall:
                this.selectorList.push(".product"), this.atrack.push(".productImg-wrap a", ".productTitle a"), 
                this.itemType = ItemType.TaoBao;
                break;

              case SiteEnum.KaoLa:
                return void this._initQuery();

              case SiteEnum.JingDongList:
                this.selectorList.push(".gl-warp .gl-item"), this.atrack.push(".p-img a", ".p-name a"), 
                this.itemType = ItemType.JingDong;
                break;

              case SiteEnum.SuNing:
                this.selectorList.push(".item-wrap"), this.atrack.push(".img-block a", ".title-selling-point a"), 
                this.itemType = ItemType.Suning;
            }
            let that = this;
            this.initStyle(), Core.autoLazyload(() => {
                try {
                    return null != $ && null != jQuery;
                } catch (e) {
                    return !1;
                }
            }, () => that.initSearchEvent(), 3), Core.background(() => that.initSearch(that), 3), 
            Core.background(() => that.initQuery(), 4);
        }
        initStyle() {
            Core.appendCssContent(ListService.style), this.itemType == ItemType.Suning && Core.appendCssContent(".onekeyvip-sn-box-area{position: relative;}");
        }
        initSearchEvent() {
            let that = this;
            try {
                $(document).on("click", `.onekeyvip-${that.itemType}-box-area`, (function() {
                    var $this = $(this);
                    $this.hasClass("onekeyvip-box-wait") ? that.queryInfo(this) : $this.hasClass("onekeyvip-box-info-translucent") ? $this.removeClass("onekeyvip-box-info-translucent") : $this.addClass("onekeyvip-box-info-translucent");
                }));
            } catch (e) {
                Core.background(() => {
                    $(`.onekeyvip-${that.itemType}-box-area`).click((function() {
                        var $this = $(this);
                        $this.hasClass("onekeyvip-box-wait") ? that.queryInfo(this) : $this.hasClass("onekeyvip-box-info-translucent") ? $this.removeClass("onekeyvip-box-info-translucent") : $this.addClass("onekeyvip-box-info-translucent");
                    }));
                });
            }
        }
        initSearch(that) {
            that.selectorList.forEach((e, i) => {
                $(e).each((index, ele) => {
                    that.initSearchItem(ele);
                });
            });
        }
        initSearchItem(selector) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __awaiter(this, void 0, void 0, (function*() {
                let $dom = $(selector);
                if ($dom.hasClass("onekeyvip-box-done")) return;
                let itemId = null !== (_c = null !== (_b = null !== (_a = $dom.attr("data-id")) && void 0 !== _a ? _a : $dom.data("sku")) && void 0 !== _b ? _b : $dom.attr("id")) && void 0 !== _c ? _c : "";
                if (Tao.isVailidItemId(itemId) || (itemId = null !== (_f = null !== (_e = null !== (_d = $dom.attr("data-itemid")) && void 0 !== _d ? _d : $dom.data("spu")) && void 0 !== _e ? _e : $dom.attr("id")) && void 0 !== _f ? _f : ""), 
                !Tao.isVailidItemId(itemId)) if ($dom.attr("href")) itemId = location.protocol + $dom.attr("href"), 
                this.site != SiteEnum.TaoBao && this.site != SiteEnum.TMall || (itemId.indexOf("click.simba.taobao.com") > -1 && (itemId = yield Http.get302(itemId)), 
                itemId = Core.getPar("id", itemId)); else {
                    const $a = $dom.find("a");
                    if (!$a.length) return;
                    itemId = null !== (_g = $a.attr("data-nid")) && void 0 !== _g ? _g : "", Tao.isVailidItemId(itemId) || (itemId = $a.hasClass("j_ReceiveCoupon") && $a.length > 1 ? location.protocol + $($a[1]).attr("href") : location.protocol + $a.attr("href"));
                }
                if (!Tao.isVailidItemId(itemId) && itemId.indexOf("http") > -1) {
                    let res = null !== (_h = /item.jd.com\/(.*?).html/i.exec(itemId)) && void 0 !== _h ? _h : [];
                    itemId = res.length > 0 ? res[1] : "";
                }
                Tao.isValidTaoId(itemId) || ListService.that.itemType != ItemType.Suning || (itemId = $dom.attr("id"), 
                itemId.split("-").length > 1 && (itemId = `${itemId.split("-")[1]}-${itemId.split("-")[0]}`)), 
                Tao.isValidTaoId(itemId) && (this.initBoxHtml($dom, itemId), this.initTagClass($dom, itemId), 
                $dom.addClass("onekeyvip-box-done"));
            }));
        }
        initTagClass(target, itemId) {
            this.atrack.forEach(e => {
                target.find(e).hasClass("onekeyvip-item-" + itemId) || target.find(e).addClass("onekeyvip-item-" + itemId);
            });
        }
        initBoxHtml(target, itemId) {
            target.append(`<div class="onekeyvip-${this.itemType}-box-area onekeyvip-box-wait" data-itemid="${itemId}"><a class="onekeyvip-box-info onekeyvip-${this.itemType}-box-info-default" title="\u70b9\u51fb\u67e5\u8be2">\u5f85\u67e5\u8be2</a></div>`);
        }
        initQuery() {
            let that = this;
            $(".onekeyvip-box-wait").each((index, ele) => {
                let s = Core.random(1, 5);
                Core.sleep(s).then(() => {
                    that.queryInfo(ele);
                });
            });
        }
        queryInfo(target) {
            return __awaiter(this, void 0, void 0, (function*() {
                let that = this;
                const $this = $(target);
                $this.removeClass("onekeyvip-box-wait");
                let itemId = $this.data("itemid"), k = `${that.key}_All2_${ListService.that.itemType}_${itemId}`, render = res => {
                    if (0 != (null == res ? void 0 : res.code)) {
                        let couponInfo = res.data;
                        that.initCouponInfo(itemId, couponInfo, target);
                    } else that.showQueryEmpty($this);
                }, couponInfo = Config.get(k);
                couponInfo ? render(couponInfo) : yield Route.couponQuery(itemId, that.itemType, couponInfoResult => {
                    render(couponInfoResult), Config.set(k, couponInfo, 43200);
                });
            }));
        }
        initCouponInfo(itemId, couponInfo, target) {
            var _a;
            const $this = $(target);
            let that = this;
            if ((null === (_a = null == couponInfo ? void 0 : couponInfo.coupons) || void 0 === _a ? void 0 : _a.length) > 0 && 0 != couponInfo.coupons[0].coupon_price && null != couponInfo.coupons[0].coupon_price) {
                let coupon = couponInfo.coupons[0];
                this.showQueryFind($this, coupon.coupon_price);
            } else that.showQueryEmpty($this);
            this.showItemUrl(itemId, null == couponInfo ? void 0 : couponInfo.item_url, that.site == SiteEnum.JingDong || that.site == SiteEnum.SuNing);
        }
        showItemUrl(itemId, itemUrl, flag = !1) {
            flag ? $(".onekeyvip-item-" + itemId).each((i, ele) => {
                ele.onclick = () => !itemUrl || (Core.open(itemUrl), !1);
            }) : $(".onekeyvip-item-" + itemId).each((i, ele) => {
                $(ele).on("click", () => !itemUrl || (Core.open(itemUrl), !1));
            });
        }
        _initQuery() {
            var _a;
            let that = this;
            null === (_a = $(".goods")) || void 0 === _a || _a.each((i, ele) => {
                let m = Core.random(1, 5);
                Core.sleep(m).then(() => {
                    that._queryCoupon(ele);
                });
            });
        }
        _queryCoupon(target) {
            var _a;
            return __awaiter(this, void 0, void 0, (function*() {
                let href = null === (_a = $(target).find("a")[0]) || void 0 === _a ? void 0 : _a.href, itemIds = /kaola\.com\/product\/(.*?)\.html/.exec(href), that = this;
                if (null != itemIds && (null == itemIds ? void 0 : itemIds.length) > 1) {
                    let itemId = itemIds[1], key = "kol-" + itemId, quan = Config.get(key);
                    quan ? this._showItemUrl(target, quan) : (Config.clear(key), yield Route.queryKlCoupons(itemId).then(res => {
                        (null == res ? void 0 : res.code) && (Config.set(key, res.data, 86400), that._showItemUrl(target, quan));
                    }));
                }
            }));
        }
        _showItemUrl(target, quan) {
            var _a;
            null === (_a = $(target).find("a")) || void 0 === _a || _a.on("click", () => !quan.quan_link || (Core.open(quan.quan_link), 
            !1));
        }
        showQueryFind(selector, couponMoney) {
            selector.html(`<a target="_blank" class="onekeyvip-box-info onekeyvip-box-info-find" title="\u5207\u6362\u900f\u660e\u5ea6">${couponMoney}\u5143\u5238</a>`);
        }
        showQueryEmpty(selector) {
            selector.addClass("onekeyvip-box-info-translucent"), selector.html('<a href="javascript:void(0);" class="onekeyvip-box-info onekeyvip-box-info-empty" title="\u5207\u6362\u900f\u660e\u5ea6">\u6682\u65e0\u4f18\u60e0</a>');
        }
    }
    styleInject(".slider + div, .slider + div + a,\n.texts,\n.header_new1,\n.slider_tips {\n    display: none !important;\n}\n");
    class _GwdService extends PluginBase {
        constructor() {
            super(...arguments), this.rules = new Map([ [ SiteEnum.SuNing, /browser\.gwdang\.com/i ] ]), 
            this._appName = "sn_clear";
        }
        loader() {}
        run() {}
    }
    Logger.level = LogLevel.info, Container.Require(class OneKeyVipHistoryToolsInjection {
        constructor() {
            this.plugins = new Array, this.plugins = [ Container.Require(ListService), Container.Require(TaoBaoService), Container.Require(JdService), Container.Require(GwdService), Container.Require(_GwdService) ], 
            Logger.info("container loaded");
        }
        Init() {
            this.plugins.every(element => element.linkTest() ? (new Promise(resolve => {
                resolve(1);
            }).then(element.Process), Logger.debug(`element [${element.appName()}];unique:[${element.unique()}]`), 
            !element.unique()) : (Logger.debug(`element [${element.appName()}];not pass`), !0));
        }
    }).Init();
}));
