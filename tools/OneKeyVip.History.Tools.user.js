// ==UserScript==
// @name           【玩的嗨】VIP工具箱,拒绝虚假价格，让您购买到最优惠的商品,网购省钱小助手 长期更新，放心使用
// @namespace      https://www.wandhi.com/
// @version        1.1
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
// @require        https://unpkg.com/react@18.2.0/umd/react.production.min.js
// @require        https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js
// @require        https://unpkg.com/@douyinfe/semi-ui@2.49.2/dist/umd/semi-ui.min.js
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
    var ReactDOM__default, Swal__default, container, Container, Logger, LogLevel, extendStatics, BrowerType, VersionResult, Core, Common, PluginBase, SiteEnum, Config, AjaxOption, Alert, Http, HttpHeaders, Hour, Route, EventHelper, Runtime, BaseCoupon, VpCoupon, SuningCoupon, JdCoupon, TaoCoupon, DefCoupon, LinesOption, MsgInfo, PromoInfo, HistoryService, KaolaCoupon, sAlert, GwdService, TaoBaoService, JdService, ItemType, Tao, ListService, _GwdService, OneKeyVipHistoryToolsInjection;
    function _interopDefaultLegacy(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    function __extends(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __);
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
    function __generator(thisArg, body) {
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
    function styleInject(css, ref) {
        var insertAt, head, style;
        void 0 === ref && (ref = {}), insertAt = ref.insertAt, css && "undefined" != typeof document && (head = document.head || document.getElementsByTagName("head")[0], 
        (style = document.createElement("style")).type = "text/css", "top" === insertAt && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), 
        style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)));
    }
    ReactDOM__default = _interopDefaultLegacy(ReactDOM), Swal__default = _interopDefaultLegacy(Swal), 
    container = new Map, Container = function() {
        function Container() {}
        return Container.Registe = function(type, args) {
            var className = this.processName(type.name);
            return container.has(className) ? container.get(className) : className ? (container.set(className, window.Reflect.construct(type, args)), 
            container.get(className)) : void 0;
        }, Container.processName = function(name) {
            return name.toLowerCase();
        }, Container.Require = function(type) {
            return this.Registe(type, []);
        }, Container;
    }(), Logger = function() {
        function Logger() {}
        return Logger.log = function(msg, group, level) {}, Logger.debug = function(msg, group) {
            void 0 === group && (group = "debug"), this.log(msg, group, LogLevel.debug);
        }, Logger.info = function(msg, group) {
            void 0 === group && (group = "info"), this.log(msg, group, LogLevel.info);
        }, Logger.warn = function(msg, group) {
            void 0 === group && (group = "warning"), this.log(msg, group, LogLevel.warn);
        }, Logger.error = function(msg, group) {
            void 0 === group && (group = "error"), this.log(msg, group, LogLevel.error);
        }, Logger;
    }(), function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel || (LogLevel = {})), extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    }, function(BrowerType) {
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
    }(VersionResult || (VersionResult = {})), Core = function() {
        function Core() {
            this.url = Core.currentUrl();
        }
        return Core.Render = function(element, id) {
            var script, container = document.getElementById(id);
            container || ((script = unsafeWindow.window.document.createElement("div")).id = id, 
            unsafeWindow.window.document.head.append(script), container = document.getElementById(id)), 
            ReactDOM__default.default.render(element, container);
        }, Core.appendTo = function(selector, html) {
            $(selector).append(html);
        }, Core.prepend = function(selector, html) {
            $(selector).prepend(html);
        }, Core.lazyload = function(callback, time) {
            return void 0 === time && (time = 5), __awaiter(this, void 0, Promise, (function() {
                var _this = this;
                return __generator(this, (function(_a) {
                    return [ 2, new Promise((function(resolve) {
                        setTimeout((function() {
                            return __awaiter(_this, void 0, void 0, (function() {
                                return __generator(this, (function(_a) {
                                    switch (_a.label) {
                                      case 0:
                                        return [ 4, callback() ];

                                      case 1:
                                        return _a.sent(), resolve(), [ 2 ];
                                    }
                                }));
                            }));
                        }), 1e3 * time);
                    })) ];
                }));
            }));
        }, Core.autoLazyload = function(is_ok, callback, time) {
            return void 0 === time && (time = 5), __awaiter(this, void 0, Promise, (function() {
                var _this = this;
                return __generator(this, (function(_a) {
                    return [ 2, new Promise((function(resolve) {
                        return __awaiter(_this, void 0, void 0, (function() {
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    return is_ok() ? [ 3, 1 ] : (setTimeout((function() {
                                        Core.autoLazyload(is_ok, callback, time).then((function() {
                                            return resolve();
                                        }));
                                    }), 1e3 * time), [ 3, 3 ]);

                                  case 1:
                                    return [ 4, callback() ];

                                  case 2:
                                    _a.sent(), Logger.debug("\u81ea\u52a8\u5ef6\u8fdf\u56de\u8c03\u6267\u884c\u5b8c\u6bd5,\u5ef6\u65f6\u65f6\u95f4:" + time), 
                                    resolve(), _a.label = 3;

                                  case 3:
                                    return [ 2 ];
                                }
                            }));
                        }));
                    })) ];
                }));
            }));
        }, Core.sleep = function(time) {
            return new Promise((function(resolve) {
                setTimeout((function() {
                    resolve();
                }), 1e3 * time);
            }));
        }, Core.random = function(min, max) {
            var range = max - min, rand = Math.random();
            return min + Math.round(rand * range);
        }, Core.randStr = function(len) {
            var $chars, maxPos, pwd, i;
            for (void 0 === len && (len = 4), maxPos = ($chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length, 
            pwd = "", i = 0; i < len; i++) pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            return pwd;
        }, Core.background = function(callback, time) {
            void 0 === time && (time = 5), setInterval((function() {
                callback();
            }), 1e3 * time);
        }, Object.defineProperty(Core, "head", {
            get: function() {
                return unsafeWindow.window.document.head;
            },
            enumerable: !1,
            configurable: !0
        }), Core.isNumber = function(a) {
            return !Array.isArray(a) && a - parseFloat(a) >= 0;
        }, Core.addUrl = function(key, url) {
            GM_setValue(key, url);
        }, Core.openUrl = function(key) {
            this.open(GM_getValue(key));
        }, Core.getPar = function(option, url) {
            void 0 === url && (url = window.location.search);
            var v = url.match(new RegExp("[?&]" + option + "=([^&]+)", "i"));
            return null == v || v.length < 1 ? "" : v[1];
        }, Core.appendCss = function(url) {
            var linkCSS = document.createElement("link");
            linkCSS.type = "text/css", linkCSS.rel = "stylesheet", linkCSS.href = url, Core.head.appendChild(linkCSS);
        }, Core.appendCssContent = function(content) {
            var Style = document.createElement("style");
            Style.innerHTML = content, Core.head.appendChild(Style);
        }, Core.prototype.bodyAppendCss = function(url) {
            $("body").append($('<link rel="stylesheet" href="' + url + '">'));
        }, Core.bodyAppend = function(html) {
            $("body").append(html);
        }, Core.bodyPrepend = function(html) {
            $("body").prepend(html);
        }, Core.appendJs = function(url) {
            var linkScript = document.createElement("script");
            linkScript.type = "text/javascript", linkScript.src = url, this.head.appendChild(linkScript);
        }, Core.prototype.bodyAppendJs = function(url) {
            $("body").append($('<script type="text/javascript" src="' + url + '"><\/script>'));
        }, Core.currentUrl = function() {
            return window.location.href;
        }, Object.defineProperty(Core, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Core.inIframe = function() {
            return !(!self.frameElement || "IFRAME" != self.frameElement.tagName) || (window.frames.length != parent.frames.length || self != top);
        }, Core.format = function(time, fmt) {
            var o, k;
            for (k in void 0 === fmt && (fmt = "yyyy-MM-dd hh:mm:ss"), o = {
                "M+": time.getMonth() + 1,
                "d+": time.getDate(),
                "h+": time.getHours(),
                "m+": time.getMinutes(),
                "s+": time.getSeconds(),
                "q+": Math.floor((time.getMonth() + 3) / 3),
                S: time.getMilliseconds()
            }, /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length))), 
            o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }, Core.sizeFormat = function(value) {
            var unit, index;
            return value === +value ? (unit = [ "B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ], 
            index = Math.floor(Math.log(value) / Math.log(1024)), "" + (value / Math.pow(1024, index)).toFixed(1) + unit[index]) : "";
        }, Core.encode = function(str) {
            return window.btoa(str);
        }, Core.decode = function(str) {
            return window.atob(str);
        }, Core.prototype.Msg = function(msg) {
            return layer.msg(msg, {
                icon: 5
            });
        }, Core.prototype.showContent = function(title, content) {
            return layer.open({
                type: 1,
                title: title,
                shade: 0,
                content: content
            });
        }, Core.prototype.close = function(obj) {
            layer.close(obj);
        }, Core.prototype.closeAll = function() {
            layer.closeAll();
        }, Core.open = function(url, loadInBackGround) {
            if (void 0 === loadInBackGround && (loadInBackGround = !1), Core.getBrowser() == BrowerType.Safiri && "undefined" == typeof GM_openInTab) {
                if (void 0 === (null === GM || void 0 === GM ? void 0 : GM.openInTab)) return void window.open(url, "_blank");
                null === GM || void 0 === GM || GM.openInTab(url, loadInBackGround);
            }
            GM_openInTab(url, loadInBackGround);
        }, Core.click = function(selector, callback) {
            $(selector).on("click", callback);
        }, Core.uuid = function(len, split, radix) {
            var chars, uuid, i, r;
            if (void 0 === len && (len = 10), void 0 === split && (split = !1), void 0 === radix && (radix = 0), 
            chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), 
            uuid = [], radix = 0 == radix ? radix || chars.length : radix, split) for (r = void 0, 
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-", uuid[14] = "4", i = 0; i < 36; i++) uuid[i] || (r = 0 | 16 * Math.random(), 
            uuid[i] = chars[19 == i ? 3 & r | 8 : r]); else for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            return uuid.join("");
        }, Core.getBrowser = function() {
            var browser = !1, userAgent = window.navigator.userAgent.toLowerCase();
            return null != userAgent.match(/firefox/) ? browser = BrowerType.Firefox : null != userAgent.match(/edge/) ? browser = BrowerType.Edge : null != userAgent.match(/edg/) ? browser = BrowerType.Edg : null != userAgent.match(/bidubrowser/) ? browser = BrowerType.Baidu : null != userAgent.match(/lbbrowser/) ? browser = BrowerType.Liebao : null != userAgent.match(/ubrowser/) ? browser = BrowerType.UC : null != userAgent.match(/qqbrowse/) ? browser = BrowerType.QQ : null != userAgent.match(/metasr/) ? browser = BrowerType.Sogou : null != userAgent.match(/opr/) ? browser = BrowerType.Opera : null != userAgent.match(/maxthon/) ? browser = BrowerType.Maxthon : null != userAgent.match(/2345explorer/) ? browser = BrowerType.Ie2345 : null != userAgent.match(/chrome/) ? browser = navigator.mimeTypes.length > 10 ? BrowerType.Se360 : BrowerType.Chrome : null != userAgent.match(/safari/) && (browser = BrowerType.Safiri), 
            browser;
        }, Core.getPercent = function(num, total) {
            return num = parseFloat(String(num)), total = parseFloat(String(total)), isNaN(num) || isNaN(total) ? 0 : total <= 0 ? "0" : Math.round(num / total * 1e4) / 100;
        }, Core.getReact = function(dom, traverseUp) {
            var domFiber, compFiber_1, i, GetCompFiber, compFiber;
            if (void 0 === traverseUp && (traverseUp = 0), null == (domFiber = dom[Object.keys(dom).find((function(key) {
                return key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$");
            }))])) return null;
            if (domFiber._currentElement) {
                for (compFiber_1 = domFiber._currentElement._owner, i = 0; i < traverseUp; i++) compFiber_1 = compFiber_1._currentElement._owner;
                return compFiber_1._instance;
            }
            for (compFiber = (GetCompFiber = function(fiber) {
                for (var parentFiber = fiber.return; "string" == typeof parentFiber.type; ) parentFiber = parentFiber.return;
                return parentFiber;
            })(domFiber), i = 0; i < traverseUp; i++) compFiber = GetCompFiber(compFiber);
            return compFiber.stateNode || compFiber;
        }, Core.copyText = function(text) {
            var textArea = document.createElement("textarea");
            return textArea.style.position = "fixed", textArea.style.visibility = "-10000px", 
            textArea.value = text, document.body.appendChild(textArea), textArea.focus(), textArea.select(), 
            document.execCommand("copy") ? (document.body.removeChild(textArea), !0) : (document.body.removeChild(textArea), 
            !1);
        }, Core.getGmCookie = function(key, domain) {
            return void 0 === domain && (domain = ""), new Promise((function(resolve, reject) {
                if ("undefined" != typeof GM_cookie) {
                    var obj = {
                        name: key,
                        url: Core.url
                    };
                    domain && (obj.domain = domain), GM_cookie.list(obj, (function(cookies, error) {
                        (null == cookies ? void 0 : cookies.length) > 0 ? resolve(cookies[0].value) : (Logger.warn("get cookie [" + key + "] is error:" + error), 
                        resolve(""));
                    }));
                } else resolve("");
            }));
        }, Core.getCookie = function(key) {
            var i, l, tempArr, arr = document.cookie.replace(/\s/g, "").split(";");
            for (i = 0, l = arr.length; i < l; i++) if ((tempArr = arr[i].split("="))[0] == key) return decodeURIComponent(tempArr[1]);
            return "";
        }, Core;
    }(), styleInject('html .aside-nav {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    font-size: 62.5%\n}\n\nbody .aside-nav {\n    font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;\n    margin: 0;\n    font-size: 1.6rem;\n    color: #4e546b\n}\n\n.aside-nav {\n    position: fixed;\n    bottom: 0;\n    left: -47px;\n    width: 260px;\n    height: 260px;\n    -webkit-filter: url(#goo);\n    filter: url(#goo);\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    opacity: .75;\n    z-index: 99999\n}\n\n.aside-nav.no-filter {\n    -webkit-filter: none;\n    filter: none\n}\n\n.aside-nav .aside-menu {\n    position: absolute;\n    width: 70px;\n    height: 70px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background: #f34444;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    text-align: center;\n    line-height: 70px;\n    color: #fff;\n    font-size: 20px;\n    z-index: 1;\n    cursor: move\n}\n\n.aside-nav .menu-item {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #ff7676;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 60px;\n    text-align: center;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    text-decoration: none;\n    color: #fff;\n    -webkit-transition: background .5s, -webkit-transform .6s;\n    transition: background .5s, -webkit-transform .6s;\n    -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n    transition: transform .6s, background .5s;\n    transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n.aside-nav .menu-item:hover {\n    background: #a9c734\n}\n\n.aside-nav .menu-line {\n    line-height: 20px;\n    padding-top: 10px\n}\n\n.aside-nav:hover {\n    opacity: 1\n}\n\n.aside-nav:hover .aside-menu {\n    -webkit-animation: jello 1s;\n    -moz-animation: jello 1s;\n    animation: jello 1s\n}\n\n.aside-nav:hover .menu-first {\n    -webkit-transform: translate3d(0, -135%, 0);\n    -moz-transform: translate3d(0, -135%, 0);\n    transform: translate3d(0, -135%, 0)\n}\n\n.aside-nav:hover .menu-second {\n    -webkit-transform: translate3d(120%, -70%, 0);\n    -moz-transform: translate3d(120%, -70%, 0);\n    transform: translate3d(120%, -70%, 0)\n}\n\n.aside-nav:hover .menu-third {\n    -webkit-transform: translate3d(120%, 70%, 0);\n    -moz-transform: translate3d(120%, 70%, 0);\n    transform: translate3d(120%, 70%, 0)\n}\n\n.aside-nav:hover .menu-fourth {\n    -webkit-transform: translate3d(0, 135%, 0);\n    -moz-transform: translate3d(0, 135%, 0);\n    transform: translate3d(0, 135%, 0)\n}\n\n@-webkit-keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@-moz-keyframes jello {\n    from, 11.1%, to {\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n    -moz-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both\n}\n\n@-webkit-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@-moz-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.bounceInUp {\n    -webkit-animation-name: bounceInUp;\n    -moz-animation-name: bounceInUp;\n    animation-name: bounceInUp;\n    -webkit-animation-delay: 1s;\n    -moz-animation-delay: 1s;\n    animation-delay: 1s\n}\n'), 
    function(Common) {
        var Menu = function() {
            function Menu() {
                this.core = new Core, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelecter = "#Wandhi-nav";
            }
            return Menu.prototype.loader = function() {}, Menu.prototype.getBody = function(option) {
                return '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="Wandhi-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label>' + option + "</div>";
            }, Menu.prototype.Init = function(menus, callback, skipIframe) {
                var that, str, drags, asideNav, _this = this;
                void 0 === skipIframe && (skipIframe = !0), Core.inIframe() && skipIframe || (that = this, 
                this.loader(), str = "", menus.forEach((function(element, index) {
                    str += '<a href="javascript:void(0)" title="' + element.title + '" data-cat="' + element.type + '" class="menu-item menu-line menu-' + _this.menusClass[index] + '">' + element.show + "</a>";
                })), Logger.info("\u8ffd\u52a0\u83dc\u5355"), Core.bodyAppend(this.getBody(str)), 
                /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter"), 
                drags = {
                    down: !1,
                    x: 0,
                    y: 0,
                    winWid: 0,
                    winHei: 0,
                    clientX: 0,
                    clientY: 0
                }, asideNav = $(this.menuSelecter)[0], $("body").on("mousedown", "" + that.menuSelecter, (function(a) {
                    var getCss = function(a, e) {
                        var _a, _b, _c;
                        return null !== (_b = null === (_a = document.defaultView) || void 0 === _a ? void 0 : _a.getComputedStyle(a, null)[e]) && void 0 !== _b ? _b : null !== (_c = a.currentStyle) && void 0 !== _c ? _c : a.currentStyle[e];
                    };
                    drags.down = !0, drags.clientX = a.clientX, drags.clientY = a.clientY, drags.x = parseInt(getCss(this, "left")), 
                    drags.y = parseInt(getCss(this, "top")), drags.winHei = $(window).height(), drags.winWid = $(window).width(), 
                    $(document).on("mousemove", (function(a) {
                        var e = a.clientX - drags.clientX, t = a.clientY - drags.clientY;
                        (asideNav = asideNav || $("#Wandhi-nav")[0]).style.top = drags.y + t + "px", asideNav.style.left = drags.x + e + "px";
                    }));
                })).on("mouseup", "" + that.menuSelecter, (function() {
                    drags.down = !1, $(document).off("mousemove");
                })), callback.call(this));
            }, Menu.close = function() {
                $("#" + Menu.mainId).hide();
            }, Menu.mainId = "Wandhi-nav", Menu;
        }();
        Common.Menu = Menu;
    }(Common || (Common = {})), PluginBase = function() {
        function PluginBase() {
            var _this = this;
            this._unique = !0, this.semiui = !1, this.menu = new Common.Menu, this.Process = function() {
                _this.semiui && Core.appendCss("https://registry.npmmirror.com/@douyinfe/semi-ui/2.51.0/files/dist/css/semi.min.css"), 
                _this.loader(), _this.run();
            }, this._appName = "base";
        }
        return PluginBase.prototype.unique = function() {
            return this._unique;
        }, PluginBase.prototype.linkTest = function(url) {
            var flag, _this = this;
            return url || (url = Core.currentUrl()), flag = !1, this.rules.forEach((function(v, k) {
                return !v.test(url) || (flag = !0, _this.site = k, !1);
            })), flag;
        }, PluginBase.prototype.appName = function() {
            return this._appName;
        }, PluginBase;
    }(), function(SiteEnum) {
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
        SiteEnum.TencentMail = "TencentMail", SiteEnum.TencentCloudBlog = "TencentCloudBlog", 
        SiteEnum.SsPAi = "SsPai", SiteEnum.FeiShuDoc = "FeiShuDoc", SiteEnum.TencentQQ = "TencentQQ", 
        SiteEnum.Shuma = "Shuma", SiteEnum.BD_DETAIL_OLD = "BD_DETAIL_OLD", SiteEnum.BD_DETAIL_NEW = "BD_DETAIL_NEW", 
        SiteEnum.BD_DETAIL_Share = "BD_DETAIL_Share", SiteEnum.Gwd = "Gwd", SiteEnum.Xxqg = "Xxqg", 
        SiteEnum.Juhaowan = "Juhaowan", SiteEnum.MhXin = "MhXin", SiteEnum.V2EX = "V2EX", 
        SiteEnum.Github = "Github", SiteEnum.NodeSeek = "NodeSeek", SiteEnum.HiTv = "HiTv", 
        SiteEnum.Xhs = "Xhs", SiteEnum.KingSoftDoc = "KingSoftDoc", SiteEnum.BingCn = "BingCn", 
        SiteEnum.SiChuang = "SiChuang", SiteEnum.Uisdc = "Uisdc";
    }(SiteEnum || (SiteEnum = {})), Config = function() {
        function Config() {}
        return Object.defineProperty(Config, "env", {
            get: function() {
                return GM_info;
            },
            enumerable: !1,
            configurable: !0
        }), Config.get = function(key, defaultValue) {
            var objStr, obj;
            if (void 0 === defaultValue && (defaultValue = ""), objStr = GM_getValue(this.encode(key), null)) {
                if (-1 == (obj = JSON.parse(objStr)).exp || obj.exp > (new Date).getTime()) return Logger.info("cache true:" + key + "," + obj.exp), 
                obj.value;
                GM_deleteValue(key);
            }
            return Logger.info("cache false"), defaultValue;
        }, Config.set = function(key, v, exp) {
            void 0 === exp && (exp = -1);
            var obj = {
                key: key,
                value: v,
                exp: -1 == exp ? exp : (new Date).getTime() + 1e3 * exp
            };
            Logger.debug(obj), GM_setValue(this.encode(key), JSON.stringify(obj));
        }, Config.remember = function(key, exp, callback) {
            var _this = this;
            return new Promise((function(reso, reject) {
                var v = _this.get(key, null);
                null == v || "" === v ? callback().then((function(res) {
                    _this.set(key, res, exp), reso(res);
                })).catch((function(e) {
                    reject(e);
                })) : (Logger.debug(v), reso(v));
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
    }(), AjaxOption = function() {
        function AjaxOption(_url, _methodType, _data, _success, _header, timeOut) {
            void 0 === _methodType && (_methodType = "GET"), void 0 === _header && (_header = new Map), 
            void 0 === timeOut && (timeOut = 60), this.url = _url, this.methodType = _methodType, 
            this.onSuccess = _success, this.onError = _success, this.data = _data, this.headers = _header, 
            this.timeOut = timeOut;
        }
        return AjaxOption.prototype.getData = function() {
            var fd_1, fd, i;
            if (this.data instanceof FormData) return this.data;
            if (this.data instanceof Map) return fd_1 = new FormData, this.data.forEach((function(v, k) {
                fd_1.append(k, v);
            })), fd_1;
            for (i in fd = new FormData, this.data) fd.append(i, this.data[i]);
            return fd;
        }, AjaxOption;
    }(), Alert = function() {
        function Alert() {}
        return Alert.open = function(titls, content, area, shade, offset, maxmin) {
            return void 0 === area && (area = [ "400px", "300px" ]), void 0 === shade && (shade = 0), 
            void 0 === offset && (offset = "lb"), void 0 === maxmin && (maxmin = !0), layer.open({
                type: 1,
                title: titls,
                area: area,
                shade: shade,
                offset: offset,
                maxmin: maxmin,
                content: content
            });
        }, Alert.info = function(msg) {
            return layer.msg(msg, {
                time: 2e3
            });
        }, Alert.error = function(msg) {
            return layer.msg(msg, {
                icon: 5,
                time: 2e3
            });
        }, Alert.confim = function(title, msg, buttons, callback, auto_close) {
            void 0 === auto_close && (auto_close = !1);
            var tid = layer.open({
                type: 1,
                title: title || !1,
                closeBtn: 1,
                shade: .8,
                id: "LAY_layuipro",
                resize: !1,
                btn: buttons,
                btnAlign: "c",
                moveType: 1,
                content: '<div style="padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' + msg + "</div>",
                yes: function(index) {
                    callback(index), auto_close && Core.lazyload((function() {
                        layer.close(tid);
                    }));
                }
            });
            return tid;
        }, Alert.prompt = function(title, v, callback, size, type) {
            void 0 === type && (type = 0), layer.prompt({
                title: title,
                value: v,
                formType: type
            }, (function(v, i, ele) {
                callback(v), layer.close(i);
            }));
        }, Alert.close = function(index) {
            layer.close(index);
        }, Alert.closeAll = function() {
            layer.closeAll();
        }, Alert.loading = function(style, _time, _shade) {
            return void 0 === style && (style = 1), void 0 === _time && (_time = 10), void 0 === _shade && (_shade = .3), 
            layer.load(style, {
                shade: _shade,
                time: 1e3 * _time
            });
        }, Alert.loadingS = function(msg, time) {
            return void 0 === time && (time = -1), Swal__default.default.fire({
                title: msg,
                didOpen: function() {
                    Swal__default.default.showLoading();
                },
                allowOutsideClick: !1,
                allowEscapeKey: !1,
                timer: -1 == time ? void 0 : 1e3 * time
            });
        }, Alert;
    }(), Http = function() {
        function Http() {}
        return Http.ajax = function(option) {
            var _a, _b, _c, head;
            option.headers.set("User-Agent", null !== (_a = unsafeWindow.navigator.userAgent) && void 0 !== _a ? _a : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"), 
            option.headers.set("Accept", "application/atom+xml,application/xml,text/xml"), head = new HttpHeaders, 
            option.url.indexOf("wandhi") > 0 && (head.version = Config.env.script.version, head.auth = null !== (_b = Config.env.script.author) && void 0 !== _b ? _b : "", 
            head.namespace = null !== (_c = Config.env.script.namespace) && void 0 !== _c ? _c : ""), 
            option.headers.forEach((function(v, k) {
                head[k] = v;
            })), GM_xmlhttpRequest({
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
        }, Http.ajaxNew = function(url, method, data, header, dataType) {
            var _a, _b, head, _getData, _data;
            return void 0 === header && (header = new Map), void 0 === dataType && (dataType = void 0), 
            head = new HttpHeaders, header.size > 0 && header.forEach((function(v, k) {
                head[k] = v;
            })), url.indexOf("wandhi") > 0 && (head.version = Config.env.script.version, head.auth = null !== (_a = Config.env.script.author) && void 0 !== _a ? _a : "", 
            head.namespace = null !== (_b = Config.env.script.namespace) && void 0 !== _b ? _b : ""), 
            _getData = function(_data) {
                if (_data instanceof FormData) return data;
                if (data instanceof Map) {
                    var fd_1 = new FormData;
                    return _data.forEach((function(v, k) {
                        var _v;
                        _v = "string" == typeof v ? v.toString() : JSON.stringify(v), fd_1.append(k, _v);
                    })), fd_1;
                }
                return JSON.stringify(_data);
            }, _data = _getData(data), Logger.debug(_data), null != dataType ? "multipart/form-data" != dataType && (head["Content-Type"] = dataType) : data instanceof FormData || data instanceof Map ? head["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8" : head["Content-Type"] = "application/json; charset=utf-8", 
            new Promise((function(resolve, reject) {
                GM_xmlhttpRequest({
                    url: url,
                    method: method,
                    headers: head,
                    data: _data,
                    onload: function(res) {
                        try {
                            resolve(JSON.parse(res.responseText));
                        } catch (error) {
                            Logger.debug(error), resolve(res.responseText);
                        }
                    },
                    onerror: function(err) {
                        Logger.debug(err), reject(err);
                    },
                    ontimeout: function() {
                        Logger.debug("\u8bf7\u6c42\u8d85\u65f6:" + url), reject("\u8bf7\u6c42\u8d85\u65f6");
                    }
                });
            }));
        }, Http.getData = function(url, callback) {
            $.getJSON(url, (function(d) {
                callback(d);
            }));
        }, Http.JqGet = function(url, callback, head) {
            void 0 === head && (head = new Map), Http.get(url, new Map, head).then((function(d) {
                callback(d);
            }));
        }, Http.post = function(url, data, timeOut) {
            return void 0 === timeOut && (timeOut = 10), new Promise((function(resolve) {
                Http.ajax(new AjaxOption(url, "POST", data, (function(data) {
                    resolve(data);
                }), new Map, timeOut));
            }));
        }, Http.get = function(url, data, head, loading, time_out) {
            return void 0 === data && (data = new Map), void 0 === head && (head = new Map), 
            void 0 === loading && (loading = !0), void 0 === time_out && (time_out = 10), loading && Alert.loading(), 
            new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, (function(data) {
                    var _a, res;
                    try {
                        res = null !== (_a = JSON.parse(data)) && void 0 !== _a ? _a : data, resolve(res);
                    } catch (error) {
                        Logger.debug(error), reject();
                    }
                }), head, time_out));
            }));
        }, Http.getWithHead = function(url, data, head, time_out) {
            return void 0 === data && (data = new Map), void 0 === head && (head = new Map), 
            void 0 === time_out && (time_out = 10), Alert.loading(), new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, (function(data) {
                    var _a, res;
                    try {
                        res = null !== (_a = JSON.parse(data)) && void 0 !== _a ? _a : data, resolve(res);
                    } catch (error) {
                        Logger.debug(error), reject();
                    }
                }), head, time_out));
            }));
        }, Http.postWithHead = function(url, data, head, time_out) {
            return void 0 === data && (data = new Map), void 0 === head && (head = new Map), 
            void 0 === time_out && (time_out = 10), Alert.loading(), new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "POST", data, (function(data) {
                    try {
                        resolve(data);
                    } catch (error) {
                        Logger.debug([ url, error ]), reject();
                    }
                }), head, time_out));
            }));
        }, Http.get_text = function(url) {
            return new Promise((function(resolve) {
                Http.ajax(new AjaxOption(url, "GET", new Map, (function(data) {
                    resolve(data);
                })));
            }));
        }, Http.get302 = function(url) {
            return new Promise((function(resolve) {
                GM_xmlhttpRequest({
                    url: url,
                    onload: function(response) {
                        resolve(response.finalUrl);
                    },
                    onabort: function() {
                        resolve();
                    },
                    method: "GET",
                    onerror: function(response) {
                        resolve();
                    }
                });
            }));
        }, Http;
    }(), HttpHeaders = function HttpHeaders() {}, Hour = 60 * 60, Route = function() {
        function Route() {
            this.queryTao = "";
        }
        return Object.defineProperty(Route, "apiRoot", {
            get: function() {
                return "https://api.huizhek.com/api";
            },
            enumerable: !1,
            configurable: !0
        }), Route.baseApi = function(api, data, callback, timeOut) {
            void 0 === timeOut && (timeOut = 10), Http.post(Route.apiRoot + api, data, timeOut).then((function(res) {
                callback(res);
            }));
        }, Route.querySbx = function(id, callback) {
            var _this = this;
            "" !== Config.get(this.sxb_key, "") ? this.query365(id, Config.get(this.sxb_key), callback) : this.queryValue("sxb_anhao", (function(res) {
                _this.query365(id, res.data, callback);
            }));
        }, Route.sbxFeedback = function(id, answer) {
            this.baseApi("/tools/record", new Map([ [ "id", id ], [ "data", answer ], [ "anhao", Config.get(this.sxb_key) ] ]), (function() {}));
        }, Route.query365 = function(id, anhao, callback) {
            var api = Config.get("sxb_api");
            api ? Http.post(api, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + id + ".html" ], [ "anhao", anhao ] ])).then((function(res) {
                callback(res);
            })) : this.queryValue("sxb_api", (function(res) {
                Config.set("sxb_api", res.data, 864e5), Http.post(res.data, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + id + ".html" ], [ "anhao", anhao ] ]));
            }));
        }, Route.queryValue = function(key, callback) {
            this.baseApi(Route.config, new Map([ [ "key", key ] ]), callback);
        }, Route.queryHistory = function(url, siteType, callback) {
            this.baseApi(this.history, new Map([ [ "url", url ], [ "type", siteType ] ]), callback);
        }, Route.queryHistoryV5 = function(url) {
            var _this = this;
            return new Promise((function(reso, reje) {
                _this.baseApi(_this.historyv3, new Map([ [ "url", url ] ]), (function(res) {
                    res.code ? reso(res) : reje(res);
                }));
            }));
        }, Route.queryHistoryV4 = function(url, siteType, fp, dfp, callback) {
            var root = "https://browser.gwdang.com/extension/price_towards?url=" + encodeURIComponent(url) + "&ver=1&format=json&fp=" + fp + "&dfp=" + dfp + "&union=union_gwdang&from_device=chrome&version=" + (new Date).getTime();
            Http.JqGet(root, callback, new Map([ [ "cookie", Core.decode("Z3dkYW5nX3Blcm1hbmVudF9pZA==") + "=" + Core.randStr(34) + ";fp=" + fp + ";dfp=" + dfp + ";" ] ]));
        }, Route.queryBiliImg = function(aid, callback) {
            Http.getData(this.biliInfo + "?aid=" + aid, callback);
        }, Route.queryBiliDown = function(aid, cid, callback) {
            Http.getData(this.bilidown + "?cid=" + cid + "&avid=" + aid + "&qn=112&fnval=4048", callback);
        }, Route.queryCoupons = function(itemId, callback) {
            this.baseApi(this.coupons, new Map([ [ "id", itemId ] ]), callback);
        }, Route.queryJdCoupons = function(itemId, callback) {
            Route.baseApi(Route.jd_coupons, new Map([ [ "item_id", itemId ] ]), callback);
        }, Route.querySnCoupons = function(url, callback) {
            Route.baseApi(Route.sn_coupons, new Map([ [ "url", url ] ]), callback);
        }, Route.queryVpCoupons = function(url, callback) {
            Route.baseApi(Route.vp_coupons, new Map([ [ "url", url ] ]), callback);
        }, Route.queryKlCoupons = function(itemId) {
            return new Promise((function(reso) {
                Route.baseApi(Route.kl_coupons, new Map([ [ "itemId", itemId ] ]), (function(res) {
                    reso(res);
                }));
            }));
        }, Route.couponQuery = function(itemId, type, callback) {
            Route.baseApi("/coupons/info", new Map([ [ "id", itemId ], [ "type", type ] ]), callback);
        }, Route._getSurl = function() {
            var reg = /(?<=s\/|surl=)([a-zA-Z0-9_-]+)/g;
            return reg.test(Core.url) ? Core.url.match(reg)[0] : "";
        }, Route.baiduDriect = function(fids, accessToken) {
            return __awaiter(this, void 0, Promise, (function() {
                var url;
                return __generator(this, (function(_a) {
                    return url = "https://pan.baidu.com/rest/2.0/xpan/multimedia?method=filemetas&dlink=1&fsids=" + fids + "&access_token=" + accessToken, 
                    [ 2, Http.ajaxNew(url, "GET", null, new Map([ [ "User-Agent", "pan.baidu.com" ] ])) ];
                }));
            }));
        }, Route.baiduAccessToken = function() {
            return Http.get302("https://openapi.baidu.com/oauth/2.0/authorize?client_id=IlLqBbU3GjQ0t46TRwFateTprHWl39zF&response_type=token&redirect_uri=oob&scope=basic,netdisk");
        }, Route.baiduAccessTokenAuth = function() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, (function() {
                var url, html, data;
                return __generator(this, (function(_c) {
                    switch (_c.label) {
                      case 0:
                        return url = "https://openapi.baidu.com/oauth/2.0/authorize?client_id=IlLqBbU3GjQ0t46TRwFateTprHWl39zF&response_type=token&redirect_uri=oob&scope=basic,netdisk", 
                        [ 4, Http.get_text(url) ];

                      case 1:
                        return html = _c.sent(), (data = new Map).set("grant_permissions_arr", "netdisk"), 
                        data.set("bdstoken", null === (_a = html.match(/name="bdstoken"\s+value="([^"]+)"/)) || void 0 === _a ? void 0 : _a[1]), 
                        data.set("client_id", null === (_b = html.match(/name="client_id"\s+value="([^"]+)"/)) || void 0 === _b ? void 0 : _b[1]), 
                        data.set("response_type", "token"), data.set("display", "page"), data.set("grant_permissions", "basic,netdisk"), 
                        [ 2, Http.ajaxNew(url, "POST", data, new Map, "multipart/form-data") ];
                    }
                }));
            }));
        }, Route.quarkDriect = function(fids) {
            return Http.ajaxNew("https://drive.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc", "POST", {
                fids: fids
            }, new Map([ [ "User-Agent", "quark-cloud-drive" ] ]));
        }, Route.RouteConfig = function() {
            return new Promise((function(resolve) {
                var config = Config.get("script_config", !1);
                config ? resolve(config) : Route.baseApi("/config/script", new Map, (function(res) {
                    var config = JSON.parse(Core.decode(res.data));
                    Config.set("script_config", config, 2 * Hour), resolve(config);
                }));
            }));
        }, Route.home_url = "https://wiki.wandhi.com", Route.home_url_update = "https://wiki.wandhi.com/zh-cn/Changelog.html", 
        Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", 
        Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", 
        Route.bili = "/tools/bili", Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", 
        Route.bilidown = "https://api.bilibili.com/x/player/playurl", Route.coupons = "/tb/infos/", 
        Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", Route.sn_coupons = "/sn/info", 
        Route.vp_coupons = "/vp/info", Route.kl_coupons = "/kl/info", Route;
    }(), EventHelper = function() {
        function EventHelper() {}
        return EventHelper.bind_click = function(query, act) {
            var _a;
            null === (_a = document.querySelector(query)) || void 0 === _a || _a.addEventListener("click", (function(e) {
                act();
            }));
        }, EventHelper;
    }(), Runtime = function() {
        function Runtime() {}
        return Object.defineProperty(Runtime, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Runtime;
    }(), BaseCoupon = function() {
        function BaseCoupon() {}
        return BaseCoupon.prototype.init_qrcode = function(url) {
            return new Promise((function(resolve) {
                var qr = qrcode(0, "H");
                qr.addData(url), qr.make(), $("#vip-plugin-outside-coupons-qrcode-img").html(qr.createSvgTag(4, 1)), 
                resolve(!0);
            }));
        }, BaseCoupon.prototype.init_coupon_info = function(after, price, time, q_url) {
            var coup_info, act, url, now;
            void 0 === q_url && (q_url = ""), coup_info = "<p>\u79fb\u52a8\u7aef<span>\u5feb\u6377</span>\u8d2d\u4e70</p>", 
            act = '<a class="vip-plugin-outside-coupons-button quan-none" href="javascript:void(0)">\u6253\u5f00\u624b\u673a\u626b\u4e00\u626b</a>', 
            url = Runtime.url, q_url && (now = new Date, coup_info = "<p><span>" + price + '</span> \u5143\u5238</p><p class="vip-plugin-outside-coupons-date">\uff08' + Core.format(now, "yyyy-MM-dd") + " ~ " + time + "\uff09</p>", 
            act = '<a class="vip-plugin-outside-coupons-button quan-exits">\u626b\u7801\u9886' + price + "\u5143\u4f18\u60e0\u5238</a>", 
            url = q_url), new Promise((function(resolve) {
                $(".vip-plugin-outside-coupons-title").html(coup_info), $(".vip-plugin-outside-coupons-action").html(act), 
                resolve();
            })).then((function() {
                q_url && EventHelper.bind_click(".vip-plugin-outside-coupons-button", (function() {
                    Core.open(url);
                }));
            }));
        }, BaseCoupon.prototype.default = function(url) {
            var _this = this;
            void 0 === url && (url = ""), Logger.debug(url), this.init_qrcode("" == url ? Runtime.url : url).then((function(res) {
                _this.init_coupon_info(0, 0, "");
            }));
        }, BaseCoupon;
    }(), VpCoupon = function(_super) {
        function VpCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(VpCoupon, _super), VpCoupon.prototype.init_html = function(html) {
            var _this = this;
            return new Promise((function(resolve) {
                if ($(".FW-product.clearfix").length) Core.appendTo(".FW-product.clearfix", html), 
                resolve(!0); else {
                    var that_1 = _this;
                    Core.lazyload((function() {
                        return that_1.init_html(html);
                    }), 1);
                }
            }));
        }, VpCoupon.prototype.init_coupons = function() {
            var _this = this;
            Route.queryVpCoupons(Runtime.url, (function(res) {
                var q, exp;
                Logger.debug(res), res.code ? res.data.has_coupon ? (q = res.data, exp = new Date(q.quan_time), 
                _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                    var _a;
                    _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), null !== (_a = decodeURIComponent(q.quan_link)) && void 0 !== _a ? _a : Core.url);
                }))) : res.data.quan_link ? (_this.default(res.data.quan_link), EventHelper.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    Core.open(res.data.quan_link);
                }))) : _this.default() : _this.default();
            }));
        }, VpCoupon;
    }(BaseCoupon), SuningCoupon = function(_super) {
        function SuningCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(SuningCoupon, _super), SuningCoupon.prototype.init_html = function(html) {
            var _this = this;
            return new Promise((function(resolve) {
                if ($(".proinfo-container").length) Core.appendTo(".proinfo-container", html), resolve(!0); else {
                    var that_1 = _this;
                    Core.lazyload((function() {
                        return that_1.init_html(html);
                    }), 1);
                }
            }));
        }, SuningCoupon.prototype.init_coupons = function() {
            var _this = this;
            Route.querySnCoupons(Runtime.url, (function(res) {
                var q, exp;
                Logger.debug(res), res.code ? res.data.has_coupon ? (q = res.data, exp = new Date(q.quan_time), 
                _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                    _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                }))) : res.data.quan_link ? (_this.default(res.data.quan_link), EventHelper.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    Core.open(res.data.quan_link);
                }))) : _this.default() : _this.default();
            }));
        }, SuningCoupon;
    }(BaseCoupon), JdCoupon = function(_super) {
        function JdCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(JdCoupon, _super), JdCoupon.prototype.init_html = function(html) {
            var _this = this;
            return new Promise((function(resolve) {
                $(".product-intro").length ? (Core.appendTo(".product-intro", html), resolve(!0)) : setTimeout(_this.init_html, 2e3);
            }));
        }, JdCoupon.prototype.init_coupons = function() {
            var _a, _b, key_1, coupon, q_1, exp_1, _this = this, item_id = null === (_b = null === (_a = unsafeWindow.pageConfig) || void 0 === _a ? void 0 : _a.product) || void 0 === _b ? void 0 : _b.skuid;
            item_id ? (key_1 = "jd_" + item_id, (coupon = Config.get(key_1)) ? coupon.has_coupon ? (q_1 = coupon, 
            exp_1 = new Date(q_1.quan_time), this.init_qrcode(decodeURIComponent(q_1.quan_link)).then((function(res) {
                _this.init_coupon_info(q_1.after_price, q_1.quan_price, "" + Core.format(exp_1, "yyyy-MM-dd"), decodeURIComponent(q_1.quan_link));
            }))) : coupon.quan_link ? this.default(coupon.quan_link) : this.default() : Route.queryJdCoupons(item_id, (function(res) {
                var q_2, exp_2;
                Logger.debug(res), res.code ? (Config.set(key_1, res.data, 43200), res.data.has_coupon ? (q_2 = res.data, 
                exp_2 = new Date(q_2.quan_time), _this.init_qrcode(decodeURIComponent(q_2.quan_link)).then((function(res) {
                    _this.init_coupon_info(q_2.after_price, q_2.quan_price, "" + Core.format(exp_2, "yyyy-MM-dd"), decodeURIComponent(q_2.quan_link));
                }))) : res.data.quan_link ? _this.default(res.data.quan_link) : _this.default()) : _this.default();
            }))) : this.default();
        }, JdCoupon;
    }(BaseCoupon), TaoCoupon = function(_super) {
        function TaoCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(TaoCoupon, _super), TaoCoupon.prototype.init_html = function(html) {
            return new Promise((function(resolve) {
                $("#J_DetailMeta").length ? Core.appendTo("#J_DetailMeta", html) : $("[class|=BasicContent--root]").length ? $("[class|=BasicContent--root]").append(html) : Core.appendTo("#detail", html + "<br/>"), 
                resolve(!0);
            }));
        }, TaoCoupon.prototype.init_coupons = function() {
            var _this = this, itemId = Core.getPar("id"), key = "n_itemId_" + itemId, coupon = Config.get(key, !1);
            coupon ? (Logger.info(coupon), this.render_coupon((null == coupon ? void 0 : coupon.length) > 0 && "string" != typeof coupon ? coupon[0] : void 0)) : Route.queryCoupons(Core.getPar("id"), (function(data) {
                var _a, _b, q, exp;
                data.code ? ((null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0 ? (q = data.data[0], 
                exp = new Date(q.quan_time), _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                    _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                }))) : _this.init_qrcode(Runtime.url).then((function(res) {
                    _this.init_coupon_info(0, 0, "");
                })), Config.set(key, (null === (_b = data.data) || void 0 === _b ? void 0 : _b.length) > 0 ? data.data : [], 43200)) : _this.init_qrcode(Runtime.url).then((function(res) {
                    _this.init_coupon_info(0, 0, "");
                }));
            }));
        }, TaoCoupon.prototype.render_coupon = function(quan) {
            var q_1, exp, _this = this;
            void 0 === quan && (quan = void 0), null == quan ? this.init_qrcode(Runtime.url).then((function(res) {
                _this.init_coupon_info(0, 0, "");
            })) : (q_1 = quan, exp = new Date(q_1.quan_time), this.init_qrcode(decodeURIComponent(q_1.quan_link)).then((function(res) {
                _this.init_coupon_info(q_1.after_price, q_1.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q_1.quan_link));
            })));
        }, TaoCoupon;
    }(BaseCoupon), DefCoupon = function(_super) {
        function DefCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(DefCoupon, _super), DefCoupon.prototype.init_html = function(html) {
            return new Promise((function(resolve) {
                resolve(!1);
            }));
        }, DefCoupon.prototype.init_coupons = function() {}, DefCoupon;
    }(BaseCoupon), LinesOption = function LinesOption() {}, styleInject("#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none\n}\n#vip-plugin-outside .vip-plugin-outside-toolbar{\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    z-index: 10000;\n}\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode svg\n{\n    margin: 0 auto;\n    height:150px;\n    width: 150px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history, #vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2!important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n.vip-plugin-outside-similar-buy-list-li-store{\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}\n"), 
    MsgInfo = function MsgInfo() {}, PromoInfo = function PromoInfo() {
        this.price = 0, this.time = 0;
    }, HistoryService = function(_super) {
        function HistoryService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.TMall, /detail.tmall.com\/item.htm/i ], [ SiteEnum.TaoBao, /item.taobao.com/i ], [ SiteEnum.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i ], [ SiteEnum.SuNing, /product.suning.com/i ], [ SiteEnum.Vp, /detail.vip.com/i ] ]), 
            _this.factory = new DefCoupon, _this;
        }
        return __extends(HistoryService, _super), HistoryService.prototype.loader = function() {}, 
        HistoryService.prototype.run = function() {
            this.injectHistory();
        }, HistoryService.prototype.injectHistory = function() {
            var _this = this;
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
            this.factory.init_html(this.getHistoryHtml()).then((function(res) {
                res && _this.InitPriceHistory(), _this.factory.init_coupons && _this.factory.init_coupons();
            }));
        }, HistoryService.prototype.InitPriceHistory = function() {
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d");
        }, HistoryService.prototype.getHistoryHtml = function() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode"><canvas id="vip-plugin-outside-coupons-qrcode-img"></canvas></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                </div>';
        }, HistoryService.prototype.chartMsg = function(msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        }, HistoryService.prototype.getChartOption = function(data) {
            var _a, _b, step, line, text = "\u5386\u53f2\u4f4e\u4ef7\uff1a{red|\uffe5" + data.min + "} ( {red|" + data.date + "} ) \u5206\u6790\uff1a" + data.mark, chartOption = new LinesOption, datas = function(data) {
                var l = [];
                return data.price_detail.forEach((function(v) {
                    var p = {
                        name: v.time,
                        value: [ v.timestamp, v.price, v.mark ]
                    };
                    l.push(p);
                })), l;
            };
            return step = 10, (chartOption = {
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
                        var _a, _b, date, year, month, day, monthStr, dayStr, price;
                        return params = params[0], year = (date = new Date(params.name)).getFullYear(), 
                        month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), 
                        dayStr = day.toString(), month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        price = null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toString(), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + (price = null === (_b = parseFloat(price)) || void 0 === _b ? void 0 : _b.toFixed(2)) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
                    data: datas(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: Math.floor(.9 * data.min / step) * step,
                max: Math.ceil(1.1 * data.max / step) * step
            }, (line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop()).markPoint = {
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
        }, HistoryService.prototype.theme = function() {
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
        }, HistoryService;
    }(PluginBase), KaolaCoupon = function(_super) {
        function KaolaCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(KaolaCoupon, _super), KaolaCoupon.prototype.init_coupons = function() {
            var key_1, coupon, q_1, exp_1, _this = this, itemId = unsafeWindow.__kaolaGTMGoodsData.product_no;
            itemId ? (key_1 = "kol-" + itemId, (coupon = Config.get(key_1)) ? coupon.has_coupon ? (q_1 = coupon, 
            exp_1 = new Date(q_1.quan_time), this.init_qrcode(decodeURIComponent(q_1.quan_link)).then((function(res) {
                _this.init_coupon_info(q_1.after_price, q_1.quan_price, "" + Core.format(exp_1, "yyyy-MM-dd"), decodeURIComponent(q_1.quan_link));
            }))) : coupon.quan_link ? this.default(coupon.quan_link) : this.default() : Route.queryKlCoupons(itemId).then((function(res) {
                var q_2, exp_2;
                Logger.debug(res), (null == res ? void 0 : res.code) ? (Config.set(key_1, res.data, 43200), 
                res.data.has_coupon ? (q_2 = res.data, exp_2 = new Date(q_2.quan_time), _this.init_qrcode(decodeURIComponent(q_2.quan_link)).then((function(res) {
                    _this.init_coupon_info(q_2.after_price, q_2.quan_price, "" + Core.format(exp_2, "yyyy-MM-dd"), decodeURIComponent(q_2.quan_link));
                }))) : res.data.quan_link ? _this.default(res.data.quan_link) : _this.default()) : _this.default();
            }))) : this.default();
        }, KaolaCoupon.prototype.init_html = function(html) {
            var _this = this;
            return new Promise((function(resolve) {
                $("#comboRecbox").length ? (Core.appendTo("#comboRecbox", html), resolve(!0)) : setTimeout((function() {
                    _this.init_html(html);
                }), 2e3);
            }));
        }, KaolaCoupon;
    }(BaseCoupon), styleInject(".one-key-vip-container { z-index: 99999!important }\n.one-key-vip-popup { font-size: 14px !important }\n.one-key-vip-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 20px; }\n.one-key-vip-setting-checkbox { width: 16px;height: 16px; }\n"), 
    sAlert = function() {
        function sAlert() {}
        return sAlert.toast = function(msg, icon, position, time) {
            void 0 === icon && (icon = "success"), void 0 === position && (position = "top"), 
            void 0 === time && (time = 2), Swal__default.default.fire({
                toast: !0,
                position: position,
                showCancelButton: !1,
                showConfirmButton: !1,
                title: msg,
                icon: icon,
                timer: 1e3 * time,
                customClass: this.customeCss
            });
        }, sAlert.error = function(msg, time) {
            void 0 === time && (time = 2), this.toast(msg, "error", "center", time);
        }, sAlert.info = function(msg, icon, position, time) {
            void 0 === icon && (icon = "success"), void 0 === position && (position = "top"), 
            void 0 === time && (time = 2), Swal__default.default.fire({
                toast: !0,
                position: position,
                showCancelButton: !1,
                showConfirmButton: !1,
                title: msg,
                icon: icon,
                timer: 1e3 * time,
                customClass: this.customeCss
            });
        }, sAlert.msg = function(title, html, width) {
            return void 0 === width && (width = "32rem"), "auto" == width && (width = unsafeWindow.window.outerWidth < 900 ? "90%" : 800), 
            Swal__default.default.fire({
                title: "<strong>" + title + "</strong>",
                html: html,
                showCloseButton: !0,
                width: width
            });
        }, sAlert.html = function(title, html, cancel, cancelTxt, cancelColor, width, confirm, confirmTxt) {
            return void 0 === cancel && (cancel = !1), void 0 === cancelTxt && (cancelTxt = ""), 
            void 0 === cancelColor && (cancelColor = "#3085d6"), void 0 === width && (width = "32rem"), 
            void 0 === confirm && (confirm = !1), void 0 === confirmTxt && (confirmTxt = ""), 
            "auto" == width && (width = unsafeWindow.window.outerWidth < 900 ? "90%" : 800), 
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
        }, sAlert.confirm = function(title, text, confirmText, cancelText, icon, denyText) {
            void 0 === confirmText && (confirmText = "\u786e\u5b9a"), void 0 === cancelText && (cancelText = "\u53d6\u6d88"), 
            void 0 === icon && (icon = "question"), void 0 === denyText && (denyText = "");
            var option = {
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
        }, sAlert.showImg = function(image, title, text, alt, btnTxt) {
            void 0 === btnTxt && (btnTxt = "");
            var opt = {
                title: title,
                text: text,
                imageUrl: image,
                imageAlt: alt,
                showConfirmButton: !1
            };
            return null != btnTxt && (opt.showConfirmButton = !0, opt.confirmButtonText = btnTxt), 
            Swal__default.default.fire(opt);
        }, sAlert.loading = function(time, target) {
            void 0 === time && (time = -1), void 0 === target && (target = null), null == target ? Swal__default.default.showLoading() : Swal__default.default.showLoading(target), 
            -1 != time && Core.sleep(time).then((function() {
                Swal__default.default.hideLoading();
            }));
        }, sAlert.closeLoading = function() {
            Swal__default.default.hideLoading();
        }, sAlert.close = function(target) {
            Swal__default.default.close(target);
        }, sAlert.customeCss = {
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
        }, sAlert;
    }(), GwdService = function(_super) {
        function GwdService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.TMall, /detail\.tmall\.com\/item\.htm/i ], [ SiteEnum.TaoBao, /item\.taobao\.com\//i ], [ SiteEnum.JingDong, /item\.(yiyaojd|jd)\.(com|hk)\/[0-9]*\.html/i ], [ SiteEnum.SuNing, /product\.suning\.com\//i ], [ SiteEnum.Vp, /detail\.vip\.com\//i ], [ SiteEnum.KaoLa, /goods\.kaola\.(com\.hk|com)/i ] ]), 
            _this._appName = "GwdService", _this.historyService = new HistoryService, _this.factory = new DefCoupon, 
            _this.dfp = function() {
                var dfp = Config.get("gwd_dfp");
                return dfp || (dfp = Core.randStr(60), Config.set("gwd_dfp", dfp, 259200), dfp);
            }, _this.fp = function() {
                var fp = Config.get("gwd_fp");
                return fp || (fp = Core.randStr(30), Config.set("gwd_fp", fp, 259200), fp);
            }, _this.itemUrl = "", _this;
        }
        return __extends(GwdService, _super), GwdService.prototype.loader = function() {}, 
        GwdService.prototype.run = function() {
            this.injectHistory();
        }, GwdService.prototype.injectHistory = function() {
            var _a, _b, _this = this;
            switch (Logger.debug(this.site), this.site) {
              case SiteEnum.TaoBao:
              case SiteEnum.TMall:
                this.factory = new TaoCoupon, this.itemUrl = "https://item.taobao.com/item.htm?id=" + Core.getPar("id");
                break;

              case SiteEnum.JingDong:
                this.factory = new JdCoupon, this.itemUrl = "https://item.jd.com/" + (null === (_b = null === (_a = unsafeWindow.pageConfig) || void 0 === _a ? void 0 : _a.product) || void 0 === _b ? void 0 : _b.skuid) + ".html";
                break;

              case SiteEnum.SuNing:
                this.factory = new SuningCoupon;
                break;

              case SiteEnum.Vp:
                this.factory = new VpCoupon;
                break;

              case SiteEnum.KaoLa:
                this.factory = new KaolaCoupon, this.itemUrl = "https://goods.kaola.com/product/" + unsafeWindow.__kaolaGTMGoodsData.product_no + ".html";
                break;

              default:
                this.factory = new DefCoupon;
            }
            this.factory.init_html(this.getHistoryHtml()).then((function(res) {
                res && _this.InitPriceHistory(), _this.factory.init_coupons && _this.factory.init_coupons();
            }));
        }, GwdService.prototype.InitPriceHistory = function() {
            var _a, that, _this = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d"), 
            that = this, Route.queryHistoryV5(null !== (_a = that.itemUrl) && void 0 !== _a ? _a : Core.url).then((function(res) {
                Logger.debug(res.data), $(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(that.getChartOption(res.data)), 
                _this.chartMsg("");
            })).catch((function() {
                Route.queryHistoryV4(Core.url, _this.site.toString(), that.fp(), that.dfp(), (function(data) {
                    var slContainer, msg = "";
                    Logger.debug(data), "price_status" in data ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                    echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(that.getChartOptionGwd(data)), 
                    _this.chartMsg(msg)) : ("is_ban" in data && 1 == data.is_ban && 1 != Config.get("gwd_verify_close") && (sAlert.confirm("\u54ce\u54df\u4e0d\u9519\u54e6", "\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u5f02\u5e38,\u662f\u5426\u6253\u5f00\u9a8c\u8bc1\u9875\u9762\u8fdb\u884c\u9a8c\u8bc1?", "\u9a8c\u8bc1\u8d70\u8d77", "\u8001\u5b50\u4e0d\u770b", "info", "\u5c4f\u853d\u4e00\u5929").then((function(res) {
                        res.isConfirmed ? Core.open("https://browser.gwdang.com/slider/verify.html?fromUrl=" + encodeURIComponent(Core.url)) : res.isDenied && Config.set("gwd_verify_close", 1, 86400), 
                        sAlert.close(res);
                    })), slContainer = ".swal2-container", "99999999999" != $(slContainer).css("z-index") && $(slContainer).css("z-index", "99999999999")), 
                    that.historyService.Process());
                }));
            }));
        }, GwdService.prototype.getHistoryHtml = function() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-toolbar">\n                    [\u624b\u5de5\u67e5\u8be2\uff1a<a href="https://tool.manmanbuy.com/m/disSitePro.aspx?c_from=m&url=' + Core.url + '" target="_blank">\u63a5\u53e3\u4e00</a>,<a href="http://www.hisprice.cn/his.php?hisurl=' + Core.url + '" target="_blank">\u63a5\u53e3\u4e8c</a>]\n                    </div>\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode" id="vip-plugin-outside-coupons-qrcode-img"></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                    \n                </div>';
        }, GwdService.prototype.chartMsg = function(msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        }, GwdService.prototype.getChartOption = function(data) {
            var _a, _b, text, maxData, minData, chartOption, step, line, analysisTxt = "\u6700\u4f4e";
            return data.info.min, text = analysisTxt + "\uff1a{red|\uffe5" + data.info.min + "} ( {red|" + data.info.max + "} )", 
            maxData = new PromoInfo, (minData = new PromoInfo).price = Number.MAX_SAFE_INTEGER, 
            minData.humanPrice = Number.MAX_SAFE_INTEGER, maxData.humanPrice = Number.MIN_SAFE_INTEGER, 
            chartOption = new LinesOption, step = 10, (chartOption = {
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
                        var _a, _b, date, year, month, day, monthStr, dayStr, price;
                        return params = params[0], year = (date = new Date(params.axisValue)).getFullYear(), 
                        month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), 
                        dayStr = day.toString(), month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        price = null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toString(), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + (price = null === (_b = parseFloat(price)) || void 0 === _b ? void 0 : _b.toFixed(2)) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
                    data: function(data) {
                        var couponsMap, now_1, l = [];
                        return data.list.length > 0 && (couponsMap = {}, now_1 = new Date("9999-99-99 00:00:00").getMilliseconds(), 
                        data.list.forEach((function(v) {
                            var p;
                            v.time < now_1 && (now_1 = v.time), v.price > maxData.humanPrice && (maxData.humanPrice = v.price, 
                            maxData.time = v.time), v.price < minData.humanPrice && (minData.humanPrice = v.price, 
                            minData.time = v.time), (new PromoInfo).msg = new MsgInfo, p = {
                                name: v.time,
                                value: [ v.date, v.price, "" ]
                            }, l.push(p);
                        })), Logger.debug(couponsMap)), Logger.debug(maxData), Logger.debug(minData), l;
                    }(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: Math.floor(.9 * minData.humanPrice / step) * step,
                max: Math.ceil(1.1 * maxData.humanPrice / step) * step
            }, (line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop()).markPoint = {
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
        }, GwdService.prototype.getChartOptionGwd = function(data) {
            var _a, _b, chartOption, step, line, analysisTxt = data.analysis.tip, min = data.analysis.promo_days[data.analysis.promo_days.length - 1], text = analysisTxt + "\uff1a{red|\uffe5" + min.price + "} ( {red|" + min.date + "} )", maxData = new PromoInfo, minData = new PromoInfo;
            return minData.price = Number.MAX_SAFE_INTEGER, minData.humanPrice = Number.MAX_SAFE_INTEGER, 
            maxData.humanPrice = Number.MIN_SAFE_INTEGER, chartOption = new LinesOption, step = 10, 
            (chartOption = {
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
                        var _a, _b, date, year, month, day, monthStr, dayStr, price;
                        return params = params[0], year = (date = new Date(params.name)).getFullYear(), 
                        month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), 
                        dayStr = day.toString(), month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        price = null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toString(), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + (price = null === (_b = parseFloat(price)) || void 0 === _b ? void 0 : _b.toFixed(2)) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
                    data: function(data) {
                        var _a, storeData, couponsMap_1, now_2, dayTime_1, l = [];
                        return data.store.length > 0 && (storeData = data.store[0], data.store.length > 1 && (storeData = data.store[1]), 
                        couponsMap_1 = {}, (null === (_a = data.promo) || void 0 === _a ? void 0 : _a.length) > 0 && data.promo.forEach((function(v) {
                            couponsMap_1.hasOwnProperty(1e3 * v.time) || (couponsMap_1[1e3 * v.time] = v);
                        })), now_2 = storeData.all_line_begin_time, dayTime_1 = 864e5, storeData.all_line.forEach((function(v) {
                            var promo, p;
                            v > maxData.humanPrice && (maxData.humanPrice = v, maxData.time = now_2 / 1e3), 
                            v < minData.humanPrice && (minData.humanPrice = v, minData.time = now_2 / 1e3), 
                            (promo = new PromoInfo).msg = new MsgInfo, couponsMap_1.hasOwnProperty(now_2) && (Logger.debug("yes"), 
                            promo = couponsMap_1[now_2]), p = {
                                name: now_2,
                                value: [ now_2, v, couponsMap_1.hasOwnProperty(now_2) ? promo.msg.coupon ? promo.msg.promotion : promo.msg.coupon : "" ]
                            }, l.push(p), now_2 += dayTime_1;
                        })), Logger.debug(couponsMap_1)), Logger.debug(maxData), Logger.debug(minData), 
                        l;
                    }(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: Math.floor(.9 * minData.humanPrice / step) * step,
                max: Math.ceil(1.1 * maxData.humanPrice / step) * step
            }, (line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop()).markPoint = {
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
        }, GwdService.prototype.theme = function() {
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
        }, GwdService;
    }(PluginBase), styleInject(".tb-prop .tb-img li a {\n    width: auto !important;\n    background-position-x: 5px !important;\n}\n\n.tb-prop .tb-img li span {\n    text-indent: 1em !important;\n    display: block !important;\n    padding: 0 5px !important;\n    margin-left: 35px;\n}\n"), 
    TaoBaoService = function(_super) {
        function TaoBaoService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._appName = "TaoBaoService", _this.rules = new Map([ [ SiteEnum.TaoBao, /taobao\.com\//i ], [ SiteEnum.TMall, /tmall\.(com|hk)\//i ] ]), 
            _this.UrlTag = "Wandhi_qLink", _this.historyService = new GwdService, _this;
        }
        return __extends(TaoBaoService, _super), TaoBaoService.prototype.loader = function() {
            Core.appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
        }, TaoBaoService.prototype.run = function() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }, TaoBaoService.prototype.init = function() {
            var _a, itemId, key, d, _this = this, init = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";
            $("#J_LinkBasket").parent().parent().prepend(init), $(".J_LinkAdd").parent().parent().prepend(init), 
            $("[class*=BasicContent--actions]").prepend(init), (null === (_a = this.rules.get(SiteEnum.TaoBao)) || void 0 === _a ? void 0 : _a.test(Core.currentUrl())) ? $("#wandhi_table").addClass("wandhi_tab_taobao") : $("#wandhi_table").addClass("wandhi_tab_tmall"), 
            itemId = Core.getPar("id"), key = "td_s_" + itemId, (d = Config.get(key, !1)) ? this.initElement(d) : Route.queryCoupons(itemId, (function(data) {
                Config.set(key, data, 43200), _this.initElement(data);
            }));
        }, TaoBaoService.prototype.initElement = function(data) {
            var _a, row;
            $("#wandhi_table tbody tr").remove(), row = "", data.code && (null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0 && "string" != typeof data.data ? data.data.forEach((function(e) {
                row += "<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>";
            })) : row = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(row);
        }, TaoBaoService;
    }(PluginBase), JdService = function(_super) {
        function JdService() {
            var _this = _super.call(this) || this;
            return _this._appName = "JdService", _this.rules = new Map([ [ SiteEnum.JingDong, /item\.(yiyaojd|jd)\.c/i ] ]), 
            _this.historyService = new GwdService, _this;
        }
        return __extends(JdService, _super), JdService.prototype.loader = function() {
            this.historyService.linkTest() && this.historyService.Process();
        }, JdService.prototype.run = function() {
            var btn = '<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>', keywords = $(".sku-name").text().trim();
            $("#choose-btns").prepend(btn), $(".btn-yhj").on("click", (function() {
                Core.open("https://shop.huizhek.com/?r=/l/jdlist&kw=" + encodeURIComponent(keywords) + "&t=223");
            }));
        }, JdService;
    }(PluginBase), function(ItemType) {
        ItemType.TaoBao = "tb", ItemType.TMall = "tm", ItemType.JingDong = "jd", ItemType.JingDongChaoshi = "jdcs", 
        ItemType.Suning = "sn";
    }(ItemType || (ItemType = {})), Tao = function() {
        function Tao() {}
        return Tao.isVailidItemId = function(itemId) {
            if (!itemId) return !1;
            var itemIdInt = parseInt(itemId);
            return itemIdInt.toString() == itemId && itemIdInt > 1e4;
        }, Tao.isValidTaoId = function(itemId) {
            return !!itemId && (!!Core.isNumber(itemId) || (!(itemId.indexOf("http") >= 0) || !(!this.isTaoBaoDetailPage(itemId) && !itemId.includes("//detail.ju.taobao.com/home.htm"))));
        }, Tao.isTaoBaoDetailPage = function(url) {
            return url.includes("//item.taobao.com/item.htm") || url.includes("//detail.tmall.com/item.htm") || url.includes("//chaoshi.detail.tmall.com/item.htm") || url.includes("//detail.tmall.hk/hk/item.htm");
        }, Tao;
    }(), ListService = function(_super) {
        function ListService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.TaoBao, /s\.taobao\.com\/search/i ], [ SiteEnum.TMall, /list\.tmall\.com\/search_product\.htm/i ], [ SiteEnum.KaoLa, /search\.kaola\.com\/search\.html/i ], [ SiteEnum.JingDongList, /search\.jd\.com/i ], [ SiteEnum.SuNing, /search\.suning\.com/i ] ]), 
            _this.selectorList = [], _this.selectora = [], _this.atrack = [], _this.key = "list_service_", 
            _this._appName = "TaoList", _this;
        }
        return __extends(ListService, _super), ListService.prototype.loader = function() {}, 
        Object.defineProperty(ListService, "style", {
            get: function() {
                return "    \n    .onekeyvip-tb-box-area {position: absolute;top: 10px;right: 5px;z-index: 9999;}\n    .onekeyvip-jd-box-area {position: absolute;top: 275px;right: 10px;z-index: 9999;}  \n    .onekeyvip-jdcs-box-area {position: absolute;top: 5px;right: 0px;z-index: 9999;}\n    .onekeyvip-box-info-translucent{opacity: .33;}\n    .onekeyvip-box-info, .onekeyvip-box-info:hover, .onekeyvip-box-info:visited {text-decoration: none!important;}\n    .onekeyvip-box-wait{cursor:pointer}\n    .onekeyvip-box-info {width: auto!important;height: auto!important;padding: 6px 8px!important;font-size: 12px;color: #fff!important;border-radius: 15px;cursor: pointer;font-weight:bold}\n    .onekeyvip-jd-box-info-default, .onekeyvip-tb-box-info-default, .onekeyvip-jdcs-box-info-default{background: #3186fd!important;}\n    .onekeyvip-box-info-empty {color: #000!important;background: #ccc!important;}\n    .onekeyvip-box-info-find {background: #ff0036!important;}\n    .onekeyvip-box-done{position:relative}\n    ";
            },
            enumerable: !1,
            configurable: !0
        }), ListService.prototype.run = function() {
            switch (ListService.that = this, this.site) {
              case SiteEnum.TaoBao:
                this.selectorList.push(".items .item"), this.selectorList.push('a[class^="Card--doubleCardWrapper"]'), 
                this.atrack.push(".pic a", ".title a"), this.itemType = ItemType.TaoBao;
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
            var that = this;
            this.initStyle(), Core.autoLazyload((function() {
                try {
                    return null != $ && null != jQuery;
                } catch (e) {
                    return !1;
                }
            }), (function() {
                return that.initSearchEvent();
            }), 3), Core.background((function() {
                return that.initSearch(that);
            }), 3), Core.background((function() {
                return that.initQuery();
            }), 4);
        }, ListService.prototype.initStyle = function() {
            Core.appendCssContent(ListService.style), this.itemType == ItemType.Suning && Core.appendCssContent(".onekeyvip-sn-box-area{position: relative;}");
        }, ListService.prototype.initSearchEvent = function() {
            var that = this;
            try {
                $(document).on("click", ".onekeyvip-" + that.itemType + "-box-area", (function() {
                    var $this = $(this);
                    $this.hasClass("onekeyvip-box-wait") ? that.queryInfo(this) : $this.hasClass("onekeyvip-box-info-translucent") ? $this.removeClass("onekeyvip-box-info-translucent") : $this.addClass("onekeyvip-box-info-translucent");
                }));
            } catch (e) {
                Core.background((function() {
                    $(".onekeyvip-" + that.itemType + "-box-area").click((function() {
                        var $this = $(this);
                        $this.hasClass("onekeyvip-box-wait") ? that.queryInfo(this) : $this.hasClass("onekeyvip-box-info-translucent") ? $this.removeClass("onekeyvip-box-info-translucent") : $this.addClass("onekeyvip-box-info-translucent");
                    }));
                }));
            }
        }, ListService.prototype.initSearch = function(that) {
            that.selectorList.forEach((function(e, i) {
                $(e).each((function(index, ele) {
                    that.initSearchItem(ele);
                }));
            }));
        }, ListService.prototype.initSearchItem = function(selector) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __awaiter(this, void 0, Promise, (function() {
                var $dom, itemId, $a, res;
                return __generator(this, (function(_j) {
                    switch (_j.label) {
                      case 0:
                        return ($dom = $(selector)).hasClass("onekeyvip-box-done") ? [ 2 ] : (itemId = null !== (_c = null !== (_b = null !== (_a = $dom.attr("data-id")) && void 0 !== _a ? _a : $dom.data("sku")) && void 0 !== _b ? _b : $dom.attr("id")) && void 0 !== _c ? _c : "", 
                        Tao.isVailidItemId(itemId) || (itemId = null !== (_f = null !== (_e = null !== (_d = $dom.attr("data-itemid")) && void 0 !== _d ? _d : $dom.data("spu")) && void 0 !== _e ? _e : $dom.attr("id")) && void 0 !== _f ? _f : ""), 
                        Tao.isVailidItemId(itemId) ? [ 3, 5 ] : $dom.attr("href") ? (itemId = location.protocol + $dom.attr("href"), 
                        this.site != SiteEnum.TaoBao && this.site != SiteEnum.TMall ? [ 3, 3 ] : itemId.indexOf("click.simba.taobao.com") > -1 ? [ 4, Http.get302(itemId) ] : [ 3, 2 ]) : [ 3, 4 ]);

                      case 1:
                        itemId = _j.sent(), Logger.debug("302\u5904\u7406\u540eitemId:" + itemId), _j.label = 2;

                      case 2:
                        itemId = Core.getPar("id", itemId), _j.label = 3;

                      case 3:
                        return [ 3, 5 ];

                      case 4:
                        if (!($a = $dom.find("a")).length) return [ 2 ];
                        itemId = null !== (_g = $a.attr("data-nid")) && void 0 !== _g ? _g : "", Tao.isVailidItemId(itemId) || (itemId = $a.hasClass("j_ReceiveCoupon") && $a.length > 1 ? location.protocol + $($a[1]).attr("href") : location.protocol + $a.attr("href")), 
                        _j.label = 5;

                      case 5:
                        return !Tao.isVailidItemId(itemId) && itemId.indexOf("http") > -1 && (res = null !== (_h = /item.jd.com\/(.*?).html/i.exec(itemId)) && void 0 !== _h ? _h : [], 
                        itemId = res.length > 0 ? res[1] : ""), Tao.isValidTaoId(itemId) || ListService.that.itemType != ItemType.Suning || (itemId = $dom.attr("id")).split("-").length > 1 && (itemId = itemId.split("-")[1] + "-" + itemId.split("-")[0]), 
                        Tao.isValidTaoId(itemId) ? (this.initBoxHtml($dom, itemId), this.initTagClass($dom, itemId), 
                        $dom.addClass("onekeyvip-box-done")) : Logger.debug("\u5546\u54c1\u5217\u8868id\u65e0\u6548:" + itemId), 
                        [ 2 ];
                    }
                }));
            }));
        }, ListService.prototype.initTagClass = function(target, itemId) {
            this.atrack.forEach((function(e) {
                target.find(e).hasClass("onekeyvip-item-" + itemId) || target.find(e).addClass("onekeyvip-item-" + itemId);
            }));
        }, ListService.prototype.initBoxHtml = function(target, itemId) {
            target.append('<div class="onekeyvip-' + this.itemType + '-box-area onekeyvip-box-wait" data-itemid="' + itemId + '"><a class="onekeyvip-box-info onekeyvip-' + this.itemType + '-box-info-default" title="\u70b9\u51fb\u67e5\u8be2">\u5f85\u67e5\u8be2</a></div>');
        }, ListService.prototype.initQuery = function() {
            var that = this;
            $(".onekeyvip-box-wait").each((function(index, ele) {
                var s = Core.random(1, 5);
                Core.sleep(s).then((function() {
                    that.queryInfo(ele);
                }));
            }));
        }, ListService.prototype.queryInfo = function(target) {
            return __awaiter(this, void 0, Promise, (function() {
                var that, $this, itemId, k, render, couponInfo;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return that = this, ($this = $(target)).removeClass("onekeyvip-box-wait"), itemId = $this.data("itemid"), 
                        k = that.key + "_All2_" + ListService.that.itemType + "_" + itemId, render = function(res) {
                            if (0 != (null == res ? void 0 : res.code)) {
                                var couponInfo_1 = res.data;
                                that.initCouponInfo(itemId, couponInfo_1, target);
                            } else that.showQueryEmpty($this);
                        }, (couponInfo = Config.get(k)) ? (render(couponInfo), [ 3, 3 ]) : [ 3, 1 ];

                      case 1:
                        return [ 4, Route.couponQuery(itemId, that.itemType, (function(couponInfoResult) {
                            render(couponInfoResult), Config.set(k, couponInfo, 43200);
                        })) ];

                      case 2:
                        _a.sent(), _a.label = 3;

                      case 3:
                        return [ 2 ];
                    }
                }));
            }));
        }, ListService.prototype.initCouponInfo = function(itemId, couponInfo, target) {
            var _a, coupon, $this = $(target), that = this;
            (null === (_a = null == couponInfo ? void 0 : couponInfo.coupons) || void 0 === _a ? void 0 : _a.length) > 0 && 0 != couponInfo.coupons[0].coupon_price && null != couponInfo.coupons[0].coupon_price ? (coupon = couponInfo.coupons[0], 
            this.showQueryFind($this, coupon.coupon_price)) : that.showQueryEmpty($this), this.showItemUrl(itemId, null == couponInfo ? void 0 : couponInfo.item_url, that.site == SiteEnum.JingDong || that.site == SiteEnum.SuNing);
        }, ListService.prototype.showItemUrl = function(itemId, itemUrl, flag) {
            void 0 === flag && (flag = !1), flag ? $(".onekeyvip-item-" + itemId).each((function(i, ele) {
                ele.onclick = function() {
                    return !itemUrl || (Core.open(itemUrl), !1);
                };
            })) : $(".onekeyvip-item-" + itemId).each((function(i, ele) {
                $(ele).on("click", (function() {
                    return Logger.debug("\u70b9\u51fb:" + itemUrl), !itemUrl || (Core.open(itemUrl), 
                    !1);
                }));
            }));
        }, ListService.prototype._initQuery = function() {
            var _a, that = this;
            null === (_a = $(".goods")) || void 0 === _a || _a.each((function(i, ele) {
                var m = Core.random(1, 5);
                Core.sleep(m).then((function() {
                    that._queryCoupon(ele);
                }));
            }));
        }, ListService.prototype._queryCoupon = function(target) {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var href, itemIds, that, itemId, key_1, quan_1;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        return href = null === (_a = $(target).find("a")[0]) || void 0 === _a ? void 0 : _a.href, 
                        itemIds = /kaola\.com\/product\/(.*?)\.html/.exec(href), that = this, null != itemIds && (null == itemIds ? void 0 : itemIds.length) > 1 ? (itemId = itemIds[1], 
                        key_1 = "kol-" + itemId, (quan_1 = Config.get(key_1)) ? (this._showItemUrl(target, quan_1), 
                        [ 3, 3 ]) : [ 3, 1 ]) : [ 3, 3 ];

                      case 1:
                        return Config.clear(key_1), [ 4, Route.queryKlCoupons(itemId).then((function(res) {
                            (null == res ? void 0 : res.code) && (Config.set(key_1, res.data, 86400), that._showItemUrl(target, quan_1));
                        })) ];

                      case 2:
                        _b.sent(), _b.label = 3;

                      case 3:
                        return [ 2 ];
                    }
                }));
            }));
        }, ListService.prototype._showItemUrl = function(target, quan) {
            var _a;
            null === (_a = $(target).find("a")) || void 0 === _a || _a.on("click", (function() {
                return Logger.debug(quan), !quan.quan_link || (Core.open(quan.quan_link), !1);
            }));
        }, ListService.prototype.showQueryFind = function(selector, couponMoney) {
            selector.html('<a target="_blank" class="onekeyvip-box-info onekeyvip-box-info-find" title="\u5207\u6362\u900f\u660e\u5ea6">' + couponMoney + "\u5143\u5238</a>");
        }, ListService.prototype.showQueryEmpty = function(selector) {
            selector.addClass("onekeyvip-box-info-translucent"), selector.html('<a href="javascript:void(0);" class="onekeyvip-box-info onekeyvip-box-info-empty" title="\u5207\u6362\u900f\u660e\u5ea6">\u6682\u65e0\u4f18\u60e0</a>');
        }, ListService;
    }(PluginBase), styleInject(".slider + div, .slider + div + a,\n.texts,\n.header_new1,\n.slider_tips {\n    display: none !important;\n}\n"), 
    _GwdService = function(_super) {
        function _GwdService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.SuNing, /browser\.gwdang\.com/i ] ]), 
            _this._appName = "sn_clear", _this;
        }
        return __extends(_GwdService, _super), _GwdService.prototype.loader = function() {}, 
        _GwdService.prototype.run = function() {}, _GwdService;
    }(PluginBase), OneKeyVipHistoryToolsInjection = function() {
        function OneKeyVipHistoryToolsInjection() {
            this.plugins = new Array, this.plugins = [ Container.Require(ListService), Container.Require(TaoBaoService), Container.Require(JdService), Container.Require(GwdService), Container.Require(_GwdService) ], 
            Logger.info("container loaded");
        }
        return OneKeyVipHistoryToolsInjection.prototype.Init = function() {
            this.plugins.every((function(element) {
                return element.linkTest() ? (new Promise((function(resolve) {
                    resolve(1);
                })).then(element.Process), Logger.debug("element [" + element.appName() + "];unique:[" + element.unique() + "]"), 
                !element.unique()) : (Logger.debug("element [" + element.appName() + "];not pass"), 
                !0);
            }));
        }, OneKeyVipHistoryToolsInjection;
    }(), Logger.level = LogLevel.info, Container.Require(OneKeyVipHistoryToolsInjection).Init();
}));
