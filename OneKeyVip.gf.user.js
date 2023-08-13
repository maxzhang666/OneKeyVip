// ==UserScript==
// @name         【玩的嗨】VIP工具箱,京东、淘宝、聚划算、天猫隐藏优惠券与历史价格,夸克网盘直链批量获取,全网VIP视频免费破解去广告,获取B站封面,下载B站视频等众多功能聚合 长期更新,放心使用
// @namespace    https://www.wandhi.com/
// @version      4.8.8
// @homepage     https://wiki.wandhi.com/
// @supportURL   https://wiki.wandhi.com/
// @description  🔥功能介绍🔥：🎉 1、Vip视频解析；🎉 2、一站式音乐搜索解决方案；🎉 3、bilibili视频封面获取；🎉 4、bilibili视频下载(已支持分P下载)；🎉 5、夸克网盘直链批量获取；🎉 6、商品历史价格展示(一次性告别虚假降价)；🎉 7、优惠券查询；🎉 8、CSDN页面、剪切板清理；🎉 9、页面自动展开(更多网站匹配中,欢迎提交想要支持的网站) 🎉 10、YouTube视频下载🎉 11、中间页自动跳转 12、搜索引擎快速跳转
// @author       MaxZhang
// @icon         https://www.wandhi.com//favicon.ico
// @include      *://m.youku.com/v*
// @include      *://m.youku.com/a*
// @include      *://v.youku.com/v_*
// @include      *://v.youku.com/pad_show*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.iqiyi.com/adv*
// @include      *.iq.com/play/*
// @include      *://*.le.com/ptv/vplay/*
// @include      *v.qq.com/x/cover/*
// @include      *v.qq.com/x/page/*
// @include      *v.qq.com/*play*
// @include      *v.qq.com/cover*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.tudou.com/v*
// @include      *://*.mgtv.com/b/*
// @include      *://film.sohu.com/album/*
// @include      *://tv.sohu.com/v/*
// @include      *://*.acfun.cn/v/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/anime/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://*.pptv.com/show/*
// @include      *://*.baofeng.com/play/*
// @include      *://*.wasu.cn/Play/show*
// @include      *://v.yinyuetai.com/video/*
// @include      *://v.yinyuetai.com/playlist/*
// @include      *://*.wasu.cn/Play/show/*
// @include      *://music.taihe.com/song*
// @include      *://search.kaola.com/*
// @include      *://goods.kaola.com*
// @include      *://detail.vip.com/detail-*
// @include      *://product.suning.com/*
// @include      *://music.163.com/song*
// @include      *://music.163.com/m/song*
// @include      *://y.qq.com/*
// @include      *://*.kugou.com/*
// @include      *://*.kuwo.cn/*
// @include      *://*.xiami.com/*
// @include      *://music.taihe.com/*
// @include      *://*.1ting.com/player*
// @include      *://www.qingting.fm/*
// @include      *://www.lizhi.fm/*
// @include      *://music.migu.cn/*
// @include      *://www.shangxueba.com/ask/*.html
// @include      *://www.ximalaya.com/*
// @include      *://www.shangxueba.com/ask/*.html
// @include      *://pan.baidu.com/disk/home*
// @include      *://yun.baidu.com/disk/home*
// @include      *://pan.baidu.com/s/*
// @include      *://yun.baidu.com/s/*
// @include      *://pan.baidu.com/share/link*
// @include      *://yun.baidu.com/share/link*
// @include      *://wenku.baidu.com/view/*
// @include      *blog.csdn.net/*
// @include      *download.csdn.net/*
// @include      *c.pc.qq.com/middlem*
// @include      *pan.baidu.com/disk/main*
// @include      *://link.csdn.net/*
// @include      *://link.zhihu.com/*
// @include      *://browser.gwdang.com/*
// @include      *www.jianshu.com/go-wild*
// @include      *://*gitee.com/link*
// @include      *://*juejin.cn/?target*
// @include      *://www.aliyundrive.com/drive*
// @include      *://*.youtube.com/watch?v=*
// @include      *://support.qq.com/products*
// @include      *://weibo.cn/sinaurl*
// @include      *://afdian.net/link*
// @include      *://*oschina.net/action/GoToLink*
// @include      *://jump2.bdimg.com/safecheck*
// @include      *://www.douban.com/link2/?url*
// @include      *://link.17173.com*
// @include      *://search.suning.com/*
// @include      *://pan.quark.cn/*
// @include      *://docs.qq.com/scenario/link*
// @include      *://mail.qq.com/cgi-bin/readtemplate*
// @match        *://www.baidu.com/*
// @match        *://www.google.com/*
// @match        *://www.sogou.com/*
// @match        *://www.so.com/s*
// @match        *://sspai.com/link*
// @match        *://*.nodeseek.com/jump*
// @exclude      *://tv.wandhi.com/*
// @exclude      *://vip.wandhi.com/*
// @include      *://settings.wandhi.com/*
// @require      https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require      https://lib.baomitu.com/limonte-sweetalert2/11.4.7/sweetalert2.all.min.js
// @require      https://lib.baomitu.com/echarts/4.6.0/echarts.min.js
// @require      https://lib.baomitu.com/layer/2.3/layer.js
// @require      https://lib.baomitu.com/qrcode-generator/1.4.4/qrcode.min.js
// @require      https://lib.baomitu.com/FileSaver.js/2.0.5/FileSaver.min.js
// @license MIT
// @grant GM_setClipboard
// @run-at document-end
// @connect shangxueba365.com
// @connect api.wandhi.com
// @connect cdn.jsdelivr.net
// @connect xbeibeix.com
// @connect gwdang.com
// @connect scriptcat.org
// @connect quark.cn
// @grant unsafeWindow
// @grant GM_xmlhttpRequest
// @grant GM_info
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_notification
// @grant GM_openInTab
// @grant GM_deleteValue
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_download
// @compatible firefox
// @compatible chrome
// @compatible opera safari edge
// @compatible safari
// @compatible edge
// @antifeature referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。
// ==/UserScript==

(function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(require("sweetalert2")) : "function" == typeof define && define.amd ? define([ "sweetalert2" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).Swal);
})(this, (function(Swal) {
    "use strict";
    var Swal__default, container, Container, Logger, LogLevel, extendStatics, BrowerType, Core, update_key, Min, Hour, Day, Week, css_248z$5, Common, PluginBase, SiteEnum, Config, AjaxOption, Alert, Http, HttpHeaders, Route, css_248z$4, sAlert, css_248z$3, Runtime, ConfigEnum, BiliImgService, Menu$1, MovieService, UrlHelper, MusicService, css_248z$2, CsdnAdService, Menu, WenKuService, LinkJumpService, AutoExpandService, BIliTools, BiliMobileService, AliyunPanToken, css_248z$1, css_248z, MfbMenu, MfbModel, YoutubeService, SettingService, ControlMenuService, SearchService, QuarkFileResponse, NetDiskDirectService, AdClearService, GfUpdateService, VersionCompar, VersionResult, OneKeyVipGfInjection;
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
    function __read(o, n) {
        var i, r, ar, e, m = "function" == typeof Symbol && o[Symbol.iterator];
        if (!m) return o;
        i = m.call(o), ar = [];
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
    function styleInject(css, ref) {
        var insertAt, head, style;
        void 0 === ref && (ref = {}), insertAt = ref.insertAt, css && "undefined" != typeof document && (head = document.head || document.getElementsByTagName("head")[0], 
        (style = document.createElement("style")).type = "text/css", "top" === insertAt && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), 
        style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)));
    }
    Swal__default = _interopDefaultLegacy(Swal), container = new Map, Container = function() {
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
    }(BrowerType || (BrowerType = {})), Core = function() {
        function Core() {
            this.url = Core.currentUrl();
        }
        return Core.appendTo = function(selector, html) {
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
        }, Core;
    }(), update_key = "isUpdate", Min = 60, Hour = 60 * Min, Day = 24 * Hour, Week = 7 * Day, 
    css_248z$5 = 'html .aside-nav {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    font-size: 62.5%\n}\n\nbody .aside-nav {\n    font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;\n    margin: 0;\n    font-size: 1.6rem;\n    color: #4e546b\n}\n\n.aside-nav {\n    position: fixed;\n    bottom: 0;\n    left: -47px;\n    width: 260px;\n    height: 260px;\n    -webkit-filter: url(#goo);\n    filter: url(#goo);\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    opacity: .75;\n    z-index: 99999\n}\n\n.aside-nav.no-filter {\n    -webkit-filter: none;\n    filter: none\n}\n\n.aside-nav .aside-menu {\n    position: absolute;\n    width: 70px;\n    height: 70px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background: #f34444;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    text-align: center;\n    line-height: 70px;\n    color: #fff;\n    font-size: 20px;\n    z-index: 1;\n    cursor: move\n}\n\n.aside-nav .menu-item {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #ff7676;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 60px;\n    text-align: center;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    text-decoration: none;\n    color: #fff;\n    -webkit-transition: background .5s, -webkit-transform .6s;\n    transition: background .5s, -webkit-transform .6s;\n    -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n    transition: transform .6s, background .5s;\n    transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n.aside-nav .menu-item:hover {\n    background: #a9c734\n}\n\n.aside-nav .menu-line {\n    line-height: 20px;\n    padding-top: 10px\n}\n\n.aside-nav:hover {\n    opacity: 1\n}\n\n.aside-nav:hover .aside-menu {\n    -webkit-animation: jello 1s;\n    -moz-animation: jello 1s;\n    animation: jello 1s\n}\n\n.aside-nav:hover .menu-first {\n    -webkit-transform: translate3d(0, -135%, 0);\n    -moz-transform: translate3d(0, -135%, 0);\n    transform: translate3d(0, -135%, 0)\n}\n\n.aside-nav:hover .menu-second {\n    -webkit-transform: translate3d(120%, -70%, 0);\n    -moz-transform: translate3d(120%, -70%, 0);\n    transform: translate3d(120%, -70%, 0)\n}\n\n.aside-nav:hover .menu-third {\n    -webkit-transform: translate3d(120%, 70%, 0);\n    -moz-transform: translate3d(120%, 70%, 0);\n    transform: translate3d(120%, 70%, 0)\n}\n\n.aside-nav:hover .menu-fourth {\n    -webkit-transform: translate3d(0, 135%, 0);\n    -moz-transform: translate3d(0, 135%, 0);\n    transform: translate3d(0, 135%, 0)\n}\n\n@-webkit-keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@-moz-keyframes jello {\n    from, 11.1%, to {\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n    -moz-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both\n}\n\n@-webkit-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@-moz-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.bounceInUp {\n    -webkit-animation-name: bounceInUp;\n    -moz-animation-name: bounceInUp;\n    animation-name: bounceInUp;\n    -webkit-animation-delay: 1s;\n    -moz-animation-delay: 1s;\n    animation-delay: 1s\n}\n', 
    styleInject(css_248z$5), function(Common) {
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
            this._unique = !0, this.menu = new Common.Menu, this.Process = function() {
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
        SiteEnum.Settings_Bili_Pc_Opt = "Settings_Bili_Pc_Opt", SiteEnum.TaoBao = "TaoBao", 
        SiteEnum.TMall = "TMall", SiteEnum.JingDong = "JingDong", SiteEnum.JingDongList = "JingDongList", 
        SiteEnum.IQiYi = "IQiYi", SiteEnum.YouKu = "YouKu", SiteEnum.LeShi = "LeShi", SiteEnum.TuDou = "TuDou", 
        SiteEnum.Tencent_V = "Tencent_V", SiteEnum.MangGuo = "MangGuo", SiteEnum.SoHu = "SoHu", 
        SiteEnum.Acfun = "Acfun", SiteEnum.BiliBili = "BiliBili", SiteEnum.BiliMobile = "BiliMobile", 
        SiteEnum.M1905 = "M1905", SiteEnum.PPTV = "PPTV", SiteEnum.YinYueTai = "YinYueTai", 
        SiteEnum.WangYi = "WangYi", SiteEnum.Tencent_M = "Tencent_M", SiteEnum.KuGou = "KuGou", 
        SiteEnum.KaoLa = "KaoLa", SiteEnum.KuWo = "KuWo", SiteEnum.XiaMi = "XiaMi", SiteEnum.TaiHe = "TaiHe", 
        SiteEnum.QingTing = "QingTing", SiteEnum.LiZhi = "LiZhi", SiteEnum.MiGu = "MiGu", 
        SiteEnum.XiMaLaYa = "XiMaLaYa", SiteEnum.WenKu = "WenKu", SiteEnum.YouTuBe = "YouTuBe", 
        SiteEnum.SXB = "SXB", SiteEnum.BDY = "BDY", SiteEnum.ALY = "ALY", SiteEnum.BDY1 = "BDY1", 
        SiteEnum.LZY = "LZY", SiteEnum.SuNing = "SuNing", SiteEnum.Steam = "Steam", SiteEnum.Vp = "Vp", 
        SiteEnum.CSDN = "CSDN", SiteEnum.CSDN_Download = "CSDN_Download", SiteEnum.ZhiHu = "ZhiHu", 
        SiteEnum.JianShu = "JianShu", SiteEnum.JueJin = "JueJin", SiteEnum.Gitee = "Gitee", 
        SiteEnum.Weibo = "Weibo", SiteEnum.TuXiaoChao = "TuXiaoChao", SiteEnum.OsCh = "OsCh", 
        SiteEnum.AiFaDian = "AiFaDian", SiteEnum.Baidu = "Baidu", SiteEnum.BaiduPanMain = "BaiduPanMain", 
        SiteEnum.BaiduPanHome = "BaiduPanHome", SiteEnum.DouBan = "DouBan", SiteEnum.g17173 = "g17173", 
        SiteEnum.Google = "Google", SiteEnum.SoGou = "SoGou", SiteEnum.KuaKeHome = "KuaKeHome", 
        SiteEnum.TencentDoc = "TencentDoc", SiteEnum.TencentMail = "TencentMail", SiteEnum.SsPAi = "SsPai", 
        SiteEnum.FeiShuDoc = "FeiShuDoc", SiteEnum.TencentQQ = "TencentQQ", SiteEnum.Shuma = "Shuma", 
        SiteEnum.BD_DETAIL_OLD = "BD_DETAIL_OLD", SiteEnum.BD_DETAIL_NEW = "BD_DETAIL_NEW", 
        SiteEnum.BD_DETAIL_Share = "BD_DETAIL_Share", SiteEnum.Gwd = "Gwd", SiteEnum.Xxqg = "Xxqg", 
        SiteEnum.Juhaowan = "Juhaowan", SiteEnum.MhXin = "MhXin", SiteEnum.V2EX = "V2EX", 
        SiteEnum.Github = "Github", SiteEnum.NodeSeek = "NodeSeek", SiteEnum.HiTv = "HiTv";
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
    }(), HttpHeaders = function HttpHeaders() {}, Route = function() {
        function Route() {
            this.queryTao = "";
        }
        return Object.defineProperty(Route, "apiRoot", {
            get: function() {
                return "https://api.wandhi.com/api";
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
        }, Route.baiduDriect = function(fids) {
            var url, data = new Map;
            return data.set("method", "filemetas"), data.set("dlink", 1), data.set("fsids", fids), 
            url = "https://pan.baidu.com/rest/2.0/xpan/multimedia", Http.ajaxNew(url, "POST", data, new Map, "multipart/form-data");
        }, Route.quarkDriect = function(fids) {
            return Http.ajaxNew("https://drive.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc", "POST", {
                fids: fids
            }, new Map([ [ "User-Agent", "quark-cloud-drive" ] ]));
        }, Route.update_api_script_cat = "https://scriptcat.org/api/v2/scripts/72", Route.home_url = "https://wiki.wandhi.com", 
        Route.home_url_update = "https://wiki.wandhi.com/zh-cn/Changelog.html", Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", 
        Route.install_url_two = "https://scriptcat.org/script-show-page/72", Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", 
        Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", 
        Route.bili = "/tools/bili", Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", 
        Route.bilidown = "https://api.bilibili.com/x/player/playurl", Route.coupons = "/tb/infos/", 
        Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", Route.sn_coupons = "/sn/info", 
        Route.vp_coupons = "/vp/info", Route.kl_coupons = "/kl/info", Route;
    }(), css_248z$4 = ".one-key-vip-container { z-index: 99999!important }\n.one-key-vip-popup { font-size: 14px !important }\n.one-key-vip-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 20px; }\n.one-key-vip-setting-checkbox { width: 16px;height: 16px; }\n", 
    styleInject(css_248z$4), sAlert = function() {
        function sAlert() {}
        return sAlert.showMessage = function(title, html, toast, position, time) {
            return Swal__default.default.fire({
                title: title,
                html: html,
                position: position,
                toast: toast,
                timer: null == time ? void 0 : 1e3 * time
            });
        }, sAlert.toast = function(msg, icon, position, time) {
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
        }, sAlert.warning = function(msg, position, time) {
            void 0 === position && (position = "center"), void 0 === time && (time = 2), this.toast(msg, "warning", position, time);
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
        }, sAlert.msg = function(title, html) {
            return Swal__default.default.fire({
                title: "<strong>" + title + "</strong>",
                html: html,
                showCloseButton: !0
            });
        }, sAlert.html = function(title, html, cancel, cancelTxt, cancelColor, width, confirm, confirmTxt) {
            return void 0 === cancel && (cancel = !1), void 0 === cancelTxt && (cancelTxt = ""), 
            void 0 === cancelColor && (cancelColor = "#3085d6"), void 0 === width && (width = "32rem"), 
            void 0 === confirm && (confirm = !1), void 0 === confirmTxt && (confirmTxt = ""), 
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
        }, sAlert.showImg = function(image, title, text, alt) {
            return Swal__default.default.fire({
                title: title,
                text: text,
                imageUrl: image,
                imageAlt: alt
            });
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
    }(), css_248z$3 = ".okv-btn {\n  display: inline-block;\n  padding: 6px 16px;\n  font-size: 12px;\n  outline: 0;\n  line-height: 1.5;\n  text-align: center;\n  white-space: nowrap;\n  border: 1px solid #c5d9e8;\n  border-top-color: #c5d9e8;\n  border-right-color: #c5d9e8;\n  border-bottom-color: #c5d9e8;\n  border-left-color: #c5d9e8;\n  border-radius: 0.7rem;\n  background-color: #fff;\n  -webkit-transition: background 0.2s;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n.okv-btn-primary {\n  border-color: #6190e8;\n  background-color: #6190e8;\n  color: #fff;\n}\n.okv-btn-primary :hover {\n  background-color: #79a1eb;\n  border-color: #79a1eb;\n}\n.okv-btn-primary :active {\n  background-color: #5782d1;\n  border-color: #5782d1;\n}\n.okv-btn-success {\n  border-color: #13ce66;\n  background-color: #13ce66;\n  color: #fff;\n}\n.okv-btn-success :hover {\n  background-color: #36d57d;\n  border-color: #36d57d;\n}\n.okv-btn-success :active {\n  background-color: #11b95c;\n  border-color: #11b95c;\n}\n.okv-btn-error {\n  border-color: #ff4949;\n  background-color: #ff4949;\n  color: #fff;\n}\n.okv-btn-error :hover {\n  background-color: #ff6464;\n  border-color: #ff6464;\n}\n.okv-btn-error :active {\n  background-color: #e64242;\n  border-color: #e64242;\n}\n.okv-bg-pink {\n  color: #fff;\n  border-color: #fff;\n  background-color: #fb7299;\n}\n.okv-tools-bili {\n  padding-top: 5px;\n}\n.video-info-detail {\n  flex-wrap: wrap !important;\n  overflow: unset !important;\n}\n.video-info-container {\n  height: 124px !important;\n}\n.okv-btn {\n  padding: 2px 16px !important;\n}\n.bili-top-button {\n  margin-right: 0.7rem;\n}\n.bili-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  overflow: hidden;\n}\n.bili-table td,\n.bili-table th {\n  height: 40px;\n  text-align: left;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  border-bottom: 1px solid #ececec;\n}\n.bili-table-cell {\n  padding: 0 16px;\n  border-bottom: 1px solid #ececec;\n}\n.at-table-tbody > tr:hover {\n  background-color: #f6fafe;\n}\n.bili-table-small {\n  font-size: 11px;\n}\n.bili-table-head {\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n}\n.bili-table-head tr th {\n  font-weight: 700;\n  text-align: left;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n", 
    styleInject(css_248z$3), Runtime = function() {
        function Runtime() {}
        return Object.defineProperty(Runtime, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Runtime;
    }(), function(ConfigEnum) {
        ConfigEnum.Jiexi_Cus_Interface = "Jiexi_Cus_Interface", ConfigEnum.Jiexi_Interface_Last_Play = "Jiexi_Interface_Last_Play", 
        ConfigEnum.Jiexi_Interface_Last_Play_Url = "Jiexi_Interface_Last_Play_Url", ConfigEnum.BiliPc_Cover = "bili_pc_cover", 
        ConfigEnum.BiliPc_Video_Download = "bili_pc_video_download", ConfigEnum.BiliPc_Triple_Click = "bili_pc_triple_click", 
        ConfigEnum.AutoJump_ZhiHu = "AutoJump_ZhiHu", ConfigEnum.AutoJump_CSDN = "AutoJump_CSDN", 
        ConfigEnum.AutoJump_JianShu = "AutoJump_JianShu", ConfigEnum.AutoJump_Gitee = "AutoJump_Gitee", 
        ConfigEnum.AutoJump_JueJin = "AutoJump_JueJin", ConfigEnum.AutoJump_Weibo = "AutoJump_Weibo", 
        ConfigEnum.AutoJump_TuXiaoChao = "AutoJump_TuXiaoChao", ConfigEnum.AutoJump_OsCh = "AutoJump_OsCh", 
        ConfigEnum.AutoJump_AiFaDian = "AutoJump_AiFaDian", ConfigEnum.AutoJump_Baidu = "AutoJump_Baidu", 
        ConfigEnum.AutoJump_DouBan = "AutoJump_DouBan", ConfigEnum.AutoJump_g17173 = "AutoJump_g17173", 
        ConfigEnum.AutoJump_TencentDoc = "AutoJump_TencentDoc", ConfigEnum.CSDN_OpImgLink = "csdn_op_img_link", 
        ConfigEnum.CSDN_OpAdClean = "csdn_op_ad_clean", ConfigEnum.CSDN_OpArticleClean = "csdn_op_article_clean", 
        ConfigEnum.CSDN_OpCommentClean = "csdn_op_comment_clean", ConfigEnum.CSDN_OpClipboardClean = "csdn_op_clipboard_clean", 
        ConfigEnum.Search_Helper_Switch = "search_helper_switch", ConfigEnum.Search_OptMenuMethod = "search_opt_menu_method", 
        ConfigEnum.Search_OptMenuPos = "search_opt_menu_pos";
    }(ConfigEnum || (ConfigEnum = {})), BiliImgService = function(_super) {
        function BiliImgService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.BiliBili, /www\.bilibili\.com\/video\/[av|bv]*/i ] ]), 
            _this._appName = "bilibili", _this;
        }
        return __extends(BiliImgService, _super), BiliImgService.listHtml = function(list) {
            var rows = "";
            return list.forEach((function(e) {
                rows += '<tr>\n                        <td class="bili-table-cell">' + e.part + '</td>\n                        <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-item" data-cid="' + e.cid + '" data-part-title="' + e.part + '">\u4e0b\u8f7d</button></td>\n                    </tr>';
            })), '<div style="height: 30rem"><table class="bili-table bili-table-small">\n                    <thead class="bili-table-head">\n                        <tr>                        \n                            <th class="bili-table-cell">\u6807\u9898</th>\n                            <th class="bili-table-cell">\u64cd\u4f5c</th>\n                        </tr>\n                    </thead>\n                    <tbody class="at-table-tbody">                    \n                        ' + rows + "\n                    </tbody>    \n                </table></div>";
        }, BiliImgService.getQuality = function(id) {
            switch (id) {
              case 16:
                return "360P \u6d41\u7545";

              case 32:
                return "480P \u6e05\u6670";

              case 64:
                return "720P \u9ad8\u6e05";

              case 80:
                return "1080P \u9ad8\u6e05";

              case 112:
                return "1080P 60\u5e27";

              case 30280:
              case 30260:
                return "320Kbps";

              case 30259:
                return "128Kbps";

              case 30257:
                return "64Kbps";

              case 30255:
                return "AUDIO";

              case 30251:
                return "FLAC";

              case 30250:
                return "ATMOS";

              case 30232:
                return "128Kbps";

              case 30216:
                return "64Kbps";

              default:
                return "\u672a\u77e5";
            }
        }, BiliImgService.videoListHtml = function(videoList, audioList, duration) {
            var _this = this, sizeFormat = function(size) {
                void 0 === size && (size = 0);
                for (var unit = [ "B", "K", "M", "G" ], i = unit.length - 1, dex = Math.pow(1024, i), vor = Math.pow(1e3, i); dex > 1; ) {
                    if (size >= vor) {
                        size = Number((size / dex).toFixed(2));
                        break;
                    }
                    dex /= 1024, vor /= 1e3, i--;
                }
                return size ? size + unit[i] : "N/A";
            }, rows = "";
            return videoList.forEach((function(e) {
                rows += '<tr>\n                        <td class="bili-table-cell">\u89c6\u9891</td>\n                        <td class="bili-table-cell">' + _this.getQuality(e.id) + '</td>\n                        <td class="bili-table-cell">' + sizeFormat(e.bandwidth * duration / 8) + '</td>\n                        <td class="bili-table-cell">' + e.frameRate + '</td>\n                        <td class="bili-table-cell">' + e.codecs + '</td>\n                        <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-video-item" data-url="' + e.baseUrl + '" data-type="1">\u4e0b\u8f7d</button></td>\n                    </tr>';
            })), audioList.forEach((function(e) {
                rows += '<tr>\n                        <td class="bili-table-cell">\u97f3\u9891</td>\n                        <td class="bili-table-cell">' + _this.getQuality(e.id) + '</td>\n                        <td class="bili-table-cell">' + sizeFormat(e.bandwidth * duration / 8) + '</td>\n                        <td class="bili-table-cell">' + e.frameRate + '</td>\n                        <td class="bili-table-cell">' + e.codecs + '</td>\n                        <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-video-item" data-url="' + e.baseUrl + '" data-type="2">\u4e0b\u8f7d</button></td>\n                    </tr>';
            })), '\n<div style="height: 30rem">\n    <div style="margin-bottom: 20px">\u6ce8\u610f:\u97f3\u89c6\u9891\u662f\u5206\u5f00\u7684,\u8bf7\u4e0b\u8f7d\u540e\u81ea\u884c\u5408\u5e76<a href="https://wiki.wandhi.com/zh-cn/Download.html">\u70b9\u6211\u4e0b\u8f7d\u5408\u5e76\u5de5\u5177</a></div>\n    <table class="bili-table bili-table-small">\n        <thead class="bili-table-head">\n            <tr>                        \n                <th class="bili-table-cell">\u7c7b\u578b</th>\n                <th class="bili-table-cell">\u54c1\u8d28</th>\n                <th class="bili-table-cell">\u5927\u5c0f</th>\n                <th class="bili-table-cell">\u7801\u7387</th>\n                <th class="bili-table-cell">\u7f16\u7801</th>\n                <th class="bili-table-cell">\u64cd\u4f5c</th>\n            </tr>\n        </thead>\n        <tbody class="at-table-tbody">                    \n            ' + rows + "\n        </tbody>    \n    </table>\n</div>";
        }, BiliImgService.prototype.loader = function() {}, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            Core.autoLazyload((function() {
                var _a, _b;
                return ((null === (_a = $(".reply-box-textarea")) || void 0 === _a ? void 0 : _a.length) > 0 || (null === (_b = $(".comment-submit")) || void 0 === _b ? void 0 : _b.length) > 0) && ($(".video-info-detail").append('<div class="video-info-detail-list okv-tools-bili"></div>'), 
                !0);
            }), (function() {
                Config.get(ConfigEnum.BiliPc_Cover, !0) && BiliImgService.add_img_btn(), Config.get(ConfigEnum.BiliPc_Video_Download, !0) && BiliImgService.add_down_btn(), 
                Config.get(ConfigEnum.BiliPc_Triple_Click, !0) && BiliImgService.add_triple_btn();
            }), 1);
        }, BiliImgService.add_img_btn = function() {
            var that = this;
            $(this.hookSelector).last().append(BiliImgService.coverBtn), $("body").on("click", "#findimg", (function() {
                var aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
                that.getVideoInfo(aid).then((function(res) {
                    res ? sAlert.showImg(res.pic, "\u662f\u5c01\u9762\u5566", "\u554a\u54c8\u54c8\u54c8\u3001\u5c01\u9762\u6765\u54af", "\u662f\u5c01\u9762\u9171\u5566>\u3002<") : sAlert.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                })).catch((function() {
                    sAlert.info("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f", "error", "center");
                }));
            }));
        }, BiliImgService.add_down_btn = function() {
            var that = this;
            $(this.hookSelector).last().append(BiliImgService.downBtn), $("body").on("click", "#downvideo", (function() {
                that.initDown();
            }));
        }, BiliImgService.initDown = function() {
            var _this = this, aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
            BiliImgService.getVideoInfo(aid).then((function(res) {
                sAlert.html(res.title, _this.listHtml(res.pages), !0, "\u6211\u597d\u4e86", "#3085d6", "40%"), 
                $(".bili-down-item").on("click", (function(e) {
                    var cid = $(e.currentTarget).attr("data-cid"), title = $(e.currentTarget).attr("data-part-title");
                    BiliImgService.downVideo(aid, cid, title);
                }));
            }));
        }, BiliImgService.downVideo = function(aid, cid, title) {
            var _this = this, key = "" + aid + cid + "MDD-NEW";
            Config.remember(key, Min, (function() {
                return new Promise((function(resolve, reject) {
                    Route.queryBiliDown(aid, cid, (function(res) {
                        var _a, _b, _c;
                        (null === (_c = null === (_b = null === (_a = res.data) || void 0 === _a ? void 0 : _a.dash) || void 0 === _b ? void 0 : _b.video) || void 0 === _c ? void 0 : _c.length) > 0 ? resolve(res) : reject(res);
                    }));
                }));
            })).then((function(res) {
                sAlert.html(title, _this.videoListHtml(res.data.dash.video, res.data.dash.audio, res.data.dash.duration), !0, "\u6211\u597d\u4e86", "#3085d6", "40%").finally((function() {
                    BiliImgService.initDown();
                })), $(".bili-down-video-item").on("click", (function(e) {
                    var url = $(e.currentTarget).attr("data-url"), type = $(e.currentTarget).attr("data-type");
                    Swal__default.default.fire({
                        title: "\u51c6\u5907\u4e0b\u8f7d",
                        html: '<span id="bili-download-step">\u5f00\u59cb\u4e0b\u8f7d\u540e\u5f53\u524d\u9875\u9762\u5c06\u4e0d\u53ef\u64cd\u4f5c,\u662f\u5426\u5f00\u59cb\u4e0b\u8f7d\uff1f</span>',
                        showCancelButton: !0,
                        confirmButtonText: "\u597d\u7684\u5f00\u59cb",
                        cancelButtonText: "\u8fd8\u662f\u7b97\u4e86",
                        showLoaderOnConfirm: !0,
                        preConfirm: function() {
                            return new Promise((function(r, j) {
                                GM_download({
                                    url: url,
                                    name: "\u3010" + ("1" == type ? "\u89c6\u9891" : "\u97f3\u9891") + "\u3011" + title + ".mp4",
                                    headers: {
                                        referer: Runtime.url
                                    },
                                    onerror: function(data) {
                                        j(data);
                                    },
                                    onprogress: function(data) {
                                        $("#bili-download-step").text("\u5f53\u524d\u8fdb\u5ea6" + Core.getPercent(data.done, data.total) + "%"), 
                                        data.done == data.total && r();
                                    }
                                });
                            }));
                        },
                        allowOutsideClick: function() {
                            return !Swal__default.default.isLoading();
                        }
                    }).then((function(result) {
                        result.isConfirmed && sAlert.info("\u4e0b\u8f7d\u7ed3\u675f");
                    })).finally((function() {
                        BiliImgService.downVideo(aid, cid, title);
                    }));
                }));
            })).catch((function(e) {
                Logger.error(e), sAlert.error("\u5565\u4e5f\u6ca1\u67e5\u7740,\u518d\u8bd5\u4e00\u4e0b\u6216\u8005\u5e26\u7740\u89c6\u9891\u5730\u5740\u7ed9\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\u5427~");
            }));
        }, BiliImgService.getVideoInfo = function(aid) {
            return Config.remember("biliInfo-" + aid, Week, (function() {
                return new Promise((function(resolve, reje) {
                    Route.queryBiliImg(aid, (function(res) {
                        0 === res.code ? resolve(res.data) : reje();
                    }));
                }));
            }));
        }, BiliImgService.add_triple_btn = function() {
            $(this.hookSelector).last().append(BiliImgService.tripleClickBtn), $("body").on("click", "#tripleClick", (function() {
                [ ".video-like", ".coin", ".collect" ].forEach((function(item) {
                    $(item).trigger("click");
                }));
            }));
        }, BiliImgService.coverBtn = '<button class="okv-btn okv-btn-primary okv-bg-pink bili-top-button" id="findimg">\u83b7\u53d6\u5c01\u9762</button>', 
        BiliImgService.downBtn = '<button id="downvideo" class="okv-btn okv-btn-primary okv-bg-pink bili-top-button">\u4e0b\u8f7d\u89c6\u9891</button>', 
        BiliImgService.tripleClickBtn = '<button class="okv-btn okv-btn-primary okv-bg-pink bili-top-button" id="tripleClick">\u4e00\u4e0b\u70b9\u4ee8(\u70b9\u8d5e\u3001\u6295\u5e01\u3001\u6536\u85cf)</button>', 
        BiliImgService.hookSelector = ".okv-tools-bili", BiliImgService;
    }(PluginBase), Menu$1 = Common.Menu, MovieService = function(_super) {
        function MovieService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.HiTv, /tv\.wandhi\.com\/go\.html/i ], [ SiteEnum.YouKu, /youku\.com/i ], [ SiteEnum.IQiYi, /iqiyi|iq\.com/i ], [ SiteEnum.LeShi, /\.le\.com/i ], [ SiteEnum.Tencent_V, /v\.qq/i ], [ SiteEnum.TuDou, /tudou\.com/i ], [ SiteEnum.MangGuo, /mgtv\.com/i ], [ SiteEnum.SoHu, /sohu\.com/i ], [ SiteEnum.Acfun, /acfun\.com/i ], [ SiteEnum.BiliBili, /bilibili\.com/i ], [ SiteEnum.M1905, /1905\.com/i ], [ SiteEnum.PPTV, /pptv\.com/i ], [ SiteEnum.YinYueTai, /yinyuetai\.com/ ] ]), 
            _this.jkPre = "\u81ea\u5b9a\u4e49\u63a5\u53e3\uff1a", _this.menu = new Common.Menu, 
            _this._unique = !1, _this._appName = "MovieService", _this;
        }
        return __extends(MovieService, _super), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
        }, MovieService.prototype.run = function() {
            switch (this.site) {
              case SiteEnum.HiTv:
                this.cusInterFace(), this.lastPlay();
                break;

              default:
                this.menu.Init([ {
                    title: "\u672c\u6b21\u5173\u95ed",
                    show: "\u672c\u6b21<br>\u5173\u95ed",
                    type: "search"
                }, {
                    title: "\u89c6\u9891\u89e3\u6790",
                    show: "\u89c6\u9891<br>\u89e3\u6790",
                    type: "process"
                }, {
                    title: "\u7edd\u4e16\u597d\u5238",
                    show: "\u7edd\u4e16<br>\u597d\u5238",
                    type: "tb"
                }, {
                    title: "\u4eac\u4e1c\u597d\u5238",
                    show: "\u4eac\u4e1c<br>\u597d\u5238",
                    type: "jd"
                } ], this._onClick), this.autoHide();
            }
        }, MovieService.prototype.cusInterFace = function() {
            var h_1, _this = this, urls = Config.get(ConfigEnum.Jiexi_Cus_Interface);
            urls && (h_1 = $("#jk").html(), urls.split("\n").forEach((function(e) {
                var datas = e.split("||");
                "https:" == unsafeWindow.location.protocol ? h_1 += '<option value="' + datas[0].replace("http:", "https:") + '" selected="">' + _this.jkPre + datas[1] + "</option>" : h_1 += '<option value="' + datas[0] + '" selected="">' + _this.jkPre + datas[1] + "</option>";
            })), $("#jk").html(h_1)), Logger.debug(urls);
        }, MovieService.prototype.lastPlay = function() {
            var last, _this = this;
            $("#bf").on("click", (function() {
                var op = $("#jk option:selected"), url = op.val(), name = op.text().replace(_this.jkPre, "");
                Config.set(ConfigEnum.Jiexi_Interface_Last_Play, name), Config.set(ConfigEnum.Jiexi_Interface_Last_Play_Url, url);
            })), (last = Config.get(ConfigEnum.Jiexi_Interface_Last_Play_Url)) && $("#jk").val(last);
        }, MovieService.prototype._onClick = function() {
            $("body").on("click", "[data-cat=process]", (function() {
                Core.open("http://tv.wandhi.com/go.html?url=" + encodeURIComponent(window.location.href));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Menu$1.close();
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("http://shop.huizhek.com");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("http://shop.huizhek.com");
            }));
        }, MovieService.prototype.autoHide = function() {
            Logger.info("\u81ea\u52a8\u9690\u85cf"), this.site == SiteEnum.BiliBili && Core.background((function() {
                var _a, modal;
                $(".bpx-player-container").length > 0 && ("web" == (modal = null === (_a = $(".bpx-player-container")) || void 0 === _a ? void 0 : _a.attr("data-screen")) || "full" == modal ? $(".aside-nav").hide() : $(".aside-nav").show());
            }), 1);
        }, MovieService;
    }(PluginBase), UrlHelper = function() {
        function UrlHelper() {}
        return UrlHelper.Bind = function(CssSelector, method, doc) {
            $(CssSelector).click((function() {
                Core.openUrl($(this).data("key"));
            }));
        }, UrlHelper.urlEncode = function(url) {
            return encodeURIComponent(url);
        }, UrlHelper.urlDecode = function(url) {
            return decodeURIComponent(url);
        }, UrlHelper;
    }(), MusicService = function(_super) {
        function MusicService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.WangYi, /163(.*)song/i ], [ SiteEnum.Tencent_M, /y\.QQ(.*)song/i ], [ SiteEnum.KuGou, /kugou\.com\/song\/*/i ], [ SiteEnum.KuWo, /kuwo(.*)yinyue/i ], [ SiteEnum.XiaMi, /xiami/i ], [ SiteEnum.TaiHe, /taihe\.com/i ], [ SiteEnum.QingTing, /qingting\./i ], [ SiteEnum.LiZhi, /lizhi\./i ], [ SiteEnum.MiGu, /migu\./i ], [ SiteEnum.XiMaLaYa, /ximalaya\./i ] ]), 
            _this.menu = new Common.Menu, _this._appName = "MusicService", _this._unique = !1, 
            _this;
        }
        return __extends(MusicService, _super), MusicService.prototype.loader = function() {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, MusicService.prototype.run = function() {
            this.menu.Init([ {
                title: "\u7535\u5f71\u641c\u7d22",
                show: "\u7535\u5f71<br>\u641c\u7d22",
                type: "search"
            }, {
                title: "\u97f3\u4e50\u4e0b\u8f7d",
                show: "\u97f3\u4e50<br>\u4e0b\u8f7d",
                type: "process"
            }, {
                title: "\u7edd\u4e16\u597d\u5238",
                show: "\u7edd\u4e16<br>\u597d\u5238",
                type: "tb"
            }, {
                title: "\u4eac\u4e1c\u597d\u5238",
                show: "\u4eac\u4e1c<br>\u597d\u5238",
                type: "jd"
            } ], this._OnClick, !1);
        }, MusicService.prototype._OnClick = function() {
            this.rules, $("body").on("click", "[data-cat=process]", (function() {
                var _a, _b, i, html;
                if (/ximalaya/i.test(Runtime.url)) {
                    for (i = 0; i < unsafeWindow.document.scripts.length; i++) /window\.__INITIAL_STATE__ =/i.test(unsafeWindow.document.scripts[i].innerHTML) && (Logger.debug(unsafeWindow.document.scripts[i].innerHTML), 
                    eval(unsafeWindow.document.scripts[i].innerHTML.replace("window.__INITIAL_STATE__", "unsafeWindow.__INITIAL_STATE__")));
                    __INITIAL_STATE__ && (null === (_b = null === (_a = __INITIAL_STATE__.store) || void 0 === _a ? void 0 : _a.SoundDetailPage) || void 0 === _b ? void 0 : _b.trackId) ? Core.open("http://music.wandhi.com/?id=" + __INITIAL_STATE__.store.SoundDetailPage.trackId + "&type=ximalaya") : (layer.closeAll(), 
                    html = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">', $.each(__INITIAL_STATE__.store.AlbumDetailTrackList.tracksInfo.tracks, (function(index, item) {
                        html += '<li class="d0i2"><a href="http://music.wandhi.com/?id=' + item.trackId + '&type=ximalaya" target="_blank">' + item.title + "</a></li>";
                    })), html += "</ul></div>", layer.open({
                        type: 1,
                        area: [ "auto", "30%" ],
                        title: "\u4e3a\u4f60\u627e\u5230\u4e86\u8fd9\u4e9b\u66f2\u76ee\u89e3\u6790\u2026\u2026",
                        shade: .6,
                        maxmin: !1,
                        anim: 2,
                        content: html
                    }));
                } else /taihe.com/i.test(Runtime.url) ? Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url.replace("taihe", "baidu"))) : Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Core.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("https://shop.huizhek.com");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("https://shop.huizhek.com");
            }));
        }, MusicService;
    }(PluginBase), css_248z$2 = "#content_views pre {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n#content_views pre code {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n.passport-login-container {\n    display: none !important;\n}\n", 
    styleInject(css_248z$2), CsdnAdService = function(_super) {
        function CsdnAdService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net/i ] ]), _this._appName = "csdn", 
            _this._unique = !1, _this;
        }
        return __extends(CsdnAdService, _super), CsdnAdService.prototype.loader = function() {}, 
        CsdnAdService.prototype.run = function() {
            Config.get(ConfigEnum.CSDN_OpAdClean, !0) && Core.background(this.removeAds, 3), 
            Config.get(ConfigEnum.CSDN_OpClipboardClean, !0) && this.clipboardClean(), Config.get(ConfigEnum.CSDN_OpCommentClean, !0) && this.commentClean(), 
            Config.get(ConfigEnum.CSDN_OpImgLink, !0) && this.commentFile(), Config.get(ConfigEnum.CSDN_OpArticleClean, !0) && this.articleClean();
        }, CsdnAdService.prototype.clipboardClean = function() {
            Logger.info("\u590d\u5236\u7c98\u8d34\u51c0\u5316"), Core.background((function() {
                unsafeWindow.csdn.copyright.textData = "";
            })), Core.autoLazyload((function() {
                return $(".hljs-button").length > 0;
            }), (function() {
                var _a, copyBtn = $(".hljs-button");
                copyBtn.length > 0 && (copyBtn.removeClass("signin"), copyBtn.attr("data-title", "\u590d\u5236"), 
                copyBtn.attr("onclick", "hljs.copyCode(event);setTimeout(function(){$('.hljs-button').attr('data-title', '\u590d\u5236');},3500);")), 
                null === (_a = $("code")) || void 0 === _a || _a.attr("onclick", "mdcp.copyCode(event)"), 
                $("code").bind("copy", (function(e) {
                    var _a, text = null === (_a = unsafeWindow.getSelection()) || void 0 === _a ? void 0 : _a.toString();
                    text && (Core.copyText(text) ? sAlert.info("\u590d\u5236\u6210\u529f") : sAlert.error("\u590d\u5236\u5931\u8d25,\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u6309\u94ae\u590d\u5236"));
                }));
            }), 3), unsafeWindow.jQuery("#content_views").unbind("copy");
        }, CsdnAdService.prototype.removeAds = function() {
            CsdnAdService.adSelectors.forEach((function(selector) {
                $(selector).remove();
            }));
        }, CsdnAdService.prototype.commentClean = function() {
            Core.lazyload((function() {
                Logger.info("\u8bc4\u8bba\u533a\u6e05\u7406"), $(".comment-list-box").css("overflow", "").css("max-height", ""), 
                $("#commentPage").removeClass("d-none"), $("#btnMoreComment").remove();
            }), 3);
        }, CsdnAdService.prototype.commentFile = function() {
            Core.lazyload((function() {
                Logger.info("\u6587\u4ef6\u94fe\u63a5\u533a\u5206"), $(".type_download").each((function(i, e) {
                    $(e).prepend('<img src="https://csdnimg.cn/release/downloadcmsfe/public/img/source.ac4c7e83.png" data-v-d2529d5a="" style="padding-right: 10px;">');
                }));
            }), 3);
        }, CsdnAdService.prototype.articleClean = function() {
            Core.lazyload((function() {
                Logger.info("\u6587\u7ae0\u533a\u6e05\u7406"), $("#article_content").removeAttr("style"), 
                $(".hide-article-box").remove();
            }));
        }, CsdnAdService.adSelectors = [ "#footerRightAds", ".side-question-box", "div[id^='dmp_ad']", "div[class^='ad_']", "div[id^='floor-ad_']", ".adsbygoogle", "#recommendAdBox", "#asideNewNps", ".box-shadow" ], 
        CsdnAdService;
    }(PluginBase), Menu = Common.Menu, WenKuService = function(_super) {
        function WenKuService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.WenKu, /wenku\.baidu\.com\/view/i ] ]), 
            _this._unique = !1, _this.menu = new Common.Menu, _this._appName = "WenKu", _this;
        }
        return __extends(WenKuService, _super), WenKuService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js"), 
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, WenKuService.prototype.run = function() {
            this.menu.Init([ {
                title: "\u672c\u6b21\u5173\u95ed",
                show: "\u672c\u6b21<br>\u5173\u95ed",
                type: "search"
            }, {
                title: "\u5bfc\u51fa\u6587\u6863",
                show: "\u5bfc\u51fa<br>\u6587\u6863",
                type: "process"
            }, {
                title: "\u7edd\u4e16\u597d\u5238",
                show: "\u7edd\u4e16<br>\u597d\u5238",
                type: "tb"
            }, {
                title: "\u4eac\u4e1c\u597d\u5238",
                show: "\u4eac\u4e1c<br>\u597d\u5238",
                type: "jd"
            } ], this._onClick);
        }, WenKuService.prototype._onClick = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    return "body", $("body").on("click", "[data-cat=process]", (function() {
                        var _a, _b, _c, _d, _e, _f;
                        return __awaiter(this, void 0, void 0, (function() {
                            return __generator(this, (function(_g) {
                                switch (_g.label) {
                                  case 0:
                                    return "word" != (null === (_c = null === (_b = null === (_a = unsafeWindow.pageData) || void 0 === _a ? void 0 : _a.viewBiz) || void 0 === _b ? void 0 : _b.docInfo) || void 0 === _c ? void 0 : _c.fileType) ? [ 3, 4 ] : (null === (_f = null === (_e = null === (_d = unsafeWindow.pageData) || void 0 === _d ? void 0 : _d.mixVipAndUserInfo) || void 0 === _e ? void 0 : _e.userInfo) || void 0 === _f ? void 0 : _f.isLogin) ? (Alert.loadingS("\u89e3\u6790\u4e2d\u8bf7\u7a0d\u540e"), 
                                    [ 4, Core.lazyload((function() {
                                        WenKuService.loadFullDoc().then((function() {
                                            Logger.debug("\u8f7d\u5165\u6587\u5e93\u5185\u5bb9\u5b8c\u6210"), window.scrollTo(0, 0), 
                                            WenKuService.exportDoc(), Swal__default.default.close();
                                        }));
                                    }), .5) ]) : [ 3, 2 ];

                                  case 1:
                                    return _g.sent(), [ 3, 3 ];

                                  case 2:
                                    sAlert.error("\u8bf7\u5148\u767b\u5f55"), _g.label = 3;

                                  case 3:
                                    return [ 3, 5 ];

                                  case 4:
                                    sAlert.error("\u4ec5\u652f\u6301word\u6587\u6863\u7684\u5bfc\u51fa"), _g.label = 5;

                                  case 5:
                                    return [ 2 ];
                                }
                            }));
                        }));
                    })), $("body").on("click", "[data-cat=search]", (function() {
                        Menu.close();
                    })), $("body").on("click", "[data-cat=tb]", (function() {
                        Core.open("http://shop.huizhek.com");
                    })), $("body").on("click", "[data-cat=jd]", (function() {
                        Core.open("http://shop.huizhek.com");
                    })), [ 2 ];
                }));
            }));
        }, WenKuService.exportDoc = function() {
            var docContent, doc = $(".reader-word-layer"), _doc = $(doc).clone();
            _doc.each((function(i, e) {
                $(e).is(":hidden") && $(e).remove();
            })), docContent = "Mime-Version: 1.0\nContent-Base: " + Runtime.url + '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' + Runtime.url + '\n\n<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n\n</style>\n</head>\n<body>\n' + _doc.text().split("\n").map((function(t) {
                return "<p>" + t + "</p>";
            })).join("") + "\n</body>\n</html>\n--NEXT.ITEM-BOUNDARY--", saveAs(new Blob([ docContent ], {
                type: "application/msword;charset=utf-8"
            }), unsafeWindow.pageData.viewBiz.docInfo.title + ".doc");
        }, WenKuService.scrollToEnd = function() {
            return Core.autoLazyload((function() {
                var _a, docEle = unsafeWindow.document.documentElement, heightTotal = docEle.scrollHeight, scrollTop = null !== (_a = docEle.scrollTop) && void 0 !== _a ? _a : unsafeWindow.document.body.scrollTop, clientHeight = docEle.clientHeight;
                return heightTotal - scrollTop <= 1.1 * clientHeight || (window.scroll(0, scrollTop + clientHeight / 4), 
                !1);
            }), (function() {
                Logger.debug("\u6eda\u52a8\u7ed3\u675f");
            }), .1);
        }, WenKuService.loadFullDoc = function() {
            var _this = this, funded = !1, that = this;
            return Core.autoLazyload((function() {
                var _a, btn = null !== (_a = unsafeWindow.document.querySelector(".goBtn")) && void 0 !== _a ? _a : unsafeWindow.document.querySelector(".read-all");
                return funded = !0, null != btn || funded;
            }), (function() {
                return __awaiter(_this, void 0, void 0, (function() {
                    var btn, _a;
                    return __generator(this, (function(_b) {
                        switch (_b.label) {
                          case 0:
                            return (btn = null !== (_a = unsafeWindow.document.querySelector(".goBtn")) && void 0 !== _a ? _a : unsafeWindow.document.querySelector(".read-all")) && $(btn).click(), 
                            Logger.debug("\u8fdb\u5165\u6eda\u52a8"), [ 4, that.scrollToEnd() ];

                          case 1:
                            return _b.sent(), Logger.debug("\u7ed3\u675f\u6eda\u52a8"), [ 2 ];
                        }
                    }));
                }));
            }), 2);
        }, WenKuService.loaded = !1, WenKuService;
    }(PluginBase), LinkJumpService = function(_super) {
        function LinkJumpService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.CSDN, /link\.csdn\.net/i ], [ SiteEnum.ZhiHu, /link\.zhihu\.com/i ], [ SiteEnum.JianShu, /www\.jianshu\.com\/go-wild/i ], [ SiteEnum.Gitee, /gitee\.com\/link/i ], [ SiteEnum.JueJin, /juejin\.cn\/\?target/i ], [ SiteEnum.Weibo, /weibo\.cn\/sinaurl/i ], [ SiteEnum.TuXiaoChao, /support\.qq\.com\/products\/.*\/link-jump/i ], [ SiteEnum.OsCh, /oschina\.net\/action\/GoToLink/i ], [ SiteEnum.AiFaDian, /afdian\.net\/link\?target/i ], [ SiteEnum.Baidu, /jump(2?)\.bdimg\.com\/safecheck/i ], [ SiteEnum.DouBan, /www\.douban\.com\/link2\// ], [ SiteEnum.g17173, /link\.17173\.com\/\?target/i ], [ SiteEnum.TencentDoc, /docs\.qq\.com\/scenario\/link/i ], [ SiteEnum.TencentMail, /mail\.qq\.com\/cgi-bin\/readtemplate/i ], [ SiteEnum.TencentQQ, /c\.pc\.qq\.com\/(middlem|ios)\.html/i ], [ SiteEnum.SsPAi, /sspai\.com\/link/i ], [ SiteEnum.NodeSeek, /nodeseek\.com\/jump/i ] ]), 
            _this.key = "", _this.selector = "", _this._unique = !1, _this._appName = "LinkJump", 
            _this;
        }
        return __extends(LinkJumpService, _super), LinkJumpService.prototype.loader = function() {}, 
        LinkJumpService.prototype.run = function() {
            var url, keys, item, config = "AutoJump_" + this.site.toString();
            switch (this.site) {
              case SiteEnum.CSDN:
              case SiteEnum.ZhiHu:
              case SiteEnum.Gitee:
              case SiteEnum.JueJin:
              case SiteEnum.AiFaDian:
              case SiteEnum.g17173:
              case SiteEnum.SsPAi:
                this.key = "target";
                break;

              case SiteEnum.JianShu:
              case SiteEnum.DouBan:
              case SiteEnum.OsCh:
              case SiteEnum.TencentDoc:
                this.key = "url";
                break;

              case SiteEnum.TencentQQ:
                this.key = "pfurl,url";
                break;

              case SiteEnum.Weibo:
                this.key = "u";
                break;

              case SiteEnum.TuXiaoChao:
                this.key = "jump";
                break;

              case SiteEnum.Baidu:
                this.selector = ".link";
                break;

              case SiteEnum.TencentMail:
                this.key = "gourl";
                break;

              case SiteEnum.NodeSeek:
                this.key = "to";
                break;

              default:
                this.key = "";
            }
            if (Config.get(config, !0)) {
                if (url = "", "" != this.key) {
                    for (item in keys = this.key.split(",")) if (null != (url = Core.getPar(keys[item])) && "" != url) break;
                } else "" != this.selector && (url = $(this.selector).text());
                null != url && "" != url ? ((url = decodeURIComponent(url)).endsWith("/") && (url = url.substr(0, url.length - 1)), 
                sAlert.info("\u94fe\u63a5\u5df2\u89e3\u6790,\u6b63\u5728\u8df3\u8f6c~"), this.jump(url)) : (sAlert.warning("\u672a\u80fd\u89e3\u6790\u5230\u94fe\u63a5,\u8bf7\u624b\u52a8\u8df3\u8f6c"), 
                Logger.debug("\u89e3\u6790\u94fe\u63a5:" + url + ",key:" + this.key));
            } else sAlert.warning("\u5df2\u5173\u95ed\u672c\u7f51\u7ad9\u7684\u8df3\u8f6c\u529f\u80fd");
        }, LinkJumpService.prototype.jump = function(url) {
            url && ((url = decodeURIComponent(url)).indexOf(":\\") < 1 && !url.startsWith("http://") && !url.startsWith("https://") && (url = "http://" + url), 
            Logger.debug(url), unsafeWindow.window.location.href = url);
        }, LinkJumpService;
    }(PluginBase), AutoExpandService = function(_super) {
        function AutoExpandService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net\/*/i ], [ SiteEnum.CSDN_Download, /download\.csdn\.net\/download/i ] ]), 
            _this.contentStyle = "{height: auto !important;max-height: none !important;}", _this.expandRules = [ {
                site: [ SiteEnum.CSDN ],
                selector: [ ".guide-box", ".wap-shadowbox", ".readall_box", ".btn_open_app_prompt_div" ],
                content: [ ".article_content" ],
                clicker: [ ".hide-preCode-bt" ],
                style: [],
                script: function() {
                    $(".container-fluid").on("click", (function(event) {
                        var url = $(event).attr("data-url");
                        url && (unsafeWindow.window.location.href = url, event.preventDefault());
                    }));
                }
            }, {
                site: [ SiteEnum.CSDN_Download ],
                selector: [],
                style: [],
                content: [ ".detail.hidden.no-preview" ],
                script: function() {},
                clicker: [ "#download-detail .fl[role]" ]
            } ], _this._appName = "autoExpand", _this._unique = !1, _this;
        }
        return __extends(AutoExpandService, _super), AutoExpandService.prototype.loader = function() {}, 
        AutoExpandService.prototype.run = function() {
            var that = this;
            this.expandRules.forEach((function(e) {
                e.site.indexOf(that.site) > -1 && (e.selector.length > 0 && e.selector.forEach((function(selector) {
                    $(selector).remove();
                })), e.clicker.length > 0 && e.clicker.forEach((function(clicker) {
                    $(clicker).trigger("click");
                })), e.style.length > 0 && e.style.forEach((function(style) {
                    Core.appendCssContent(style);
                })), e.content.length > 0 && Core.appendCssContent("" + e.content.join(" ") + that.contentStyle), 
                null != e.script && e.script.apply([]));
            }));
        }, AutoExpandService;
    }(PluginBase), BIliTools = function() {
        function BIliTools() {}
        return BIliTools.av2Bv = function(avNo) {
            var result, i, av = avNo.toString(), num = NaN;
            if ("[object Number]" === Object.prototype.toString.call(av) ? num = avNo : "[object String]" === Object.prototype.toString.call(av) && (num = parseInt(av.replace(/[^0-9]/gu, ""))), 
            isNaN(num) || num <= 0) return "";
            for (num = (num ^ this.xor) + this.add, result = __spread("BV1  4 1 7  "), i = 0; i < 6; ) result[this.s[i]] = this.table[Math.floor(num / Math.pow(58, i)) % 58], 
            i += 1;
            return result.join("");
        }, BIliTools.bv2Av = function(bv) {
            var result, i, str = "";
            if (12 === bv.length) str = bv; else if (10 === bv.length) str = "BV" + bv; else {
                if (9 !== bv.length) return -1;
                str = "BV1" + bv;
            }
            if (!str.match(/[Bb][Vv][fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF]{10}/gu)) return -1;
            for (result = 0, i = 0; i < 6; ) result += this.table.indexOf(str[this.s[i]]) * Math.pow(58, i), 
            i += 1;
            return parseInt("av" + (result - this.add ^ this.xor));
        }, BIliTools.table = __spread("fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"), 
        BIliTools.s = [ 11, 10, 3, 8, 4, 6 ], BIliTools.xor = 177451812, BIliTools.add = 8728348608, 
        BIliTools;
    }(), BiliMobileService = function(_super) {
        function BiliMobileService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.BiliMobile, /m\.bilibili\.com\/video\//i ] ]), 
            _this._appName = "Bili\u624b\u673a", _this;
        }
        return __extends(BiliMobileService, _super), BiliMobileService.prototype.loader = function() {}, 
        BiliMobileService.prototype.run = function() {
            var cards = $(".launch-app-btn");
            cards && $(cards).each((function(i, ele) {
                var av = $(ele).attr("data-aid");
                av && $(ele).on("click", (function() {
                    unsafeWindow.window.location.href = "https://m.bilibili.com/video/" + BIliTools.av2Bv(parseInt(av));
                })), $(ele).removeClass("launch-app-btn");
            }));
        }, BiliMobileService;
    }(PluginBase), AliyunPanToken = function(_super) {
        function AliyunPanToken() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.ALY, /www\.aliyundrive\.com\/drive*/i ] ]), 
            _this.html = '\n    <li class=" ant-dropdown-menu-item-divider"></li>\n    <li class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child" role="menuitem">\n        <div class="outer-menu--ihDUR">\n            <div class="item--2ReU2" id="onekeyvip-token">\n                <span data-role="icon" data-render-as="svg" data-icon-type="PDSMoreCircle" class="item-icon--1ydoa icon--d-ejA "><svg viewBox="0 0 1024 1024"><use xlink:href="#PDSMoreCircle"></use></svg></span>\n                \u83b7\u53d6Token\n            </div>\n        </div>\n    </li>\n    ', 
            _this._unique = !1, _this._appName = "aliyunpan-token", _this;
        }
        return __extends(AliyunPanToken, _super), AliyunPanToken.prototype.loader = function() {
            GM_registerMenuCommand("\u83b7\u53d6Token", this.getToken);
        }, AliyunPanToken.prototype.run = function() {
            var _this = this;
            Core.autoLazyload((function() {
                var _a, _b, finded = null !== (_b = null === (_a = $(".ant-dropdown-menu")) || void 0 === _a ? void 0 : _a.length) && void 0 !== _b ? _b : -1;
                return Logger.debug("\u83dc\u5355\u67e5\u8be2\u60c5\u51b5:" + finded), finded > 0;
            }), (function() {
                $(".ant-dropdown-menu").append(_this.html), _this.initEvent();
            }), .5);
        }, AliyunPanToken.prototype.getToken = function() {
            var _a, tokenStr, tokenObj;
            if ($(".ant-dropdown").addClass("ant-dropdown-hidden"), tokenStr = null !== (_a = unsafeWindow.localStorage.token) && void 0 !== _a ? _a : "") try {
                tokenObj = JSON.parse(tokenStr), sAlert.msg("token\u4fe1\u606f", "<textarea>" + tokenObj.refresh_token + "</textarea>");
            } catch (e) {
                sAlert.info("Token\u5e8f\u5217\u5316\u9519\u8bef,\u8bf7\u5411\u4f5c\u8005\u53cd\u9988," + e.toString());
            } else sAlert.info("\u672a\u80fd\u83b7\u53d6\u5230Token\u4fe1\u606f,\u8bf7\u91cd\u65b0\u767b\u5f55\u540e\u518d\u8bd5");
        }, AliyunPanToken.prototype.initEvent = function() {
            $("#onekeyvip-token").on("click", this.getToken);
        }, AliyunPanToken;
    }(PluginBase), css_248z$1 = ".mfb-component--tl,\n.mfb-component--cl,\n.mfb-component--tr,\n.mfb-component--bl,\n.mfb-component--br {\n  box-sizing: border-box;\n  margin: 25px;\n  position: fixed;\n  white-space: nowrap;\n  z-index: 30;\n  padding-left: 0;\n  list-style: none;\n}\n.mfb-component--cl *,\n.mfb-component--tl *,\n.mfb-component--tr *,\n.mfb-component--bl *,\n.mfb-component--br *,\n.mfb-component--tl *:before,\n.mfb-component--cl *:before,\n.mfb-component--tr *:before,\n.mfb-component--bl *:before,\n.mfb-component--br *:before,\n.mfb-component--tl *:after,\n.mfb-component--cl *:after,\n.mfb-component--tr *:after,\n.mfb-component--bl *:after,\n.mfb-component--br *:after {\n  box-sizing: inherit;\n}\n.mfb-component--tl {\n  left: 0;\n  top: 0;\n}\n.mfb-component--cl {\n  left: 0;\n  top: 50%;\n}\n.mfb-component--tr {\n  right: 0;\n  top: 0;\n}\n.mfb-component--bl {\n  left: 0;\n  bottom: 0;\n}\n.mfb-component--br {\n  right: 0;\n  bottom: 0;\n}\n.mfb-component__button--main,\n.mfb-component__button--child {\n  background-color: #e40a5d;\n  display: inline-block;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  position: relative;\n  -webkit-user-drag: none;\n  color: #f1f1f1;\n  text-align: center;\n  line-height: 55px;\n  font-size: 25px;\n}\n.mfb-component__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mfb-component__list > li {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 1px;\n  padding: 10px 0;\n  margin: -10px 0;\n}\n.mfb-component__icon,\n.mfb-component__main-icon--active,\n.mfb-component__main-icon--resting,\n.mfb-component__child-icon {\n  position: absolute;\n  font-size: 18px;\n  text-align: center;\n  line-height: 56px;\n  width: 100%;\n}\n.mfb-component__wrap {\n  padding: 25px;\n  margin: -25px;\n}\n[data-mfb-toggle=hover]:hover .mfb-component__icon,\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--active,\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--resting,\n[data-mfb-toggle=hover]:hover .mfb-component__child-icon,\n[data-mfb-state=open] .mfb-component__icon,\n[data-mfb-state=open] .mfb-component__main-icon--active,\n[data-mfb-state=open] .mfb-component__main-icon--resting,\n[data-mfb-state=open] .mfb-component__child-icon {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n.mfb-component__button--main {\n  height: 56px;\n  width: 56px;\n  z-index: 20;\n  text-align: center;\n  line-height: 55px;\n  font-size: 25px;\n}\n.mfb-component__button--child {\n  height: 56px;\n  width: 56px;\n}\n.mfb-component__main-icon--active,\n.mfb-component__main-icon--resting {\n  -webkit-transform: scale(1) rotate(360deg);\n  transform: scale(1) rotate(360deg);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 150ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mfb-component__child-icon,\n.mfb-component__child-icon {\n  line-height: 56px;\n  font-size: 18px;\n}\n.mfb-component__main-icon--active {\n  opacity: 0;\n}\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon,\n[data-mfb-state=open] .mfb-component__main-icon {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--resting,\n[data-mfb-state=open] .mfb-component__main-icon--resting {\n  opacity: 0;\n  position: absolute !important;\n}\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--active,\n[data-mfb-state=open] .mfb-component__main-icon--active {\n  opacity: 1;\n}\n.mfb-component--tl.mfb-slidein .mfb-component__list li,\n.mfb-component--tr.mfb-slidein .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n}\n.mfb-component--tl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tl.mfb-slidein[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--tl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px);\n  transform: translateY(70px);\n}\n.mfb-component--tl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px);\n  transform: translateY(140px);\n}\n.mfb-component--tl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px);\n  transform: translateY(210px);\n}\n.mfb-component--tl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px);\n  transform: translateY(280px);\n}\n.mfb-component--cl.mfb-slidein .mfb-component__list li,\n.mfb-component--tr.mfb-slidein .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n}\n.mfb-component--cl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--cl.mfb-slidein[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--cl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--cl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px);\n  transform: translateY(70px);\n}\n.mfb-component--cl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--cl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px);\n  transform: translateY(140px);\n}\n.mfb-component--cl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--cl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px);\n  transform: translateY(210px);\n}\n.mfb-component--cl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--cl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px);\n  transform: translateY(280px);\n}\n.mfb-component--bl.mfb-slidein .mfb-component__list li,\n.mfb-component--br.mfb-slidein .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px);\n  transform: translateY(-70px);\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px);\n  transform: translateY(-140px);\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px);\n  transform: translateY(-210px);\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px);\n  transform: translateY(-280px);\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li,\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n  -webkit-transform: translateY(70px);\n  transform: translateY(70px);\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n  -webkit-transform: translateY(140px);\n  transform: translateY(140px);\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n  -webkit-transform: translateY(210px);\n  transform: translateY(210px);\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n  -webkit-transform: translateY(280px);\n  transform: translateY(280px);\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li,\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n  -webkit-transform: translateY(-70px);\n  transform: translateY(-70px);\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n  -webkit-transform: translateY(-140px);\n  transform: translateY(-140px);\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n  -webkit-transform: translateY(-210px);\n  transform: translateY(-210px);\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n  -webkit-transform: translateY(-280px);\n  transform: translateY(-280px);\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li,\n.mfb-component--tr.mfb-zoomin .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(0);\n  transform: translateY(70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(0);\n  transform: translateY(140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(0);\n  transform: translateY(210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(0);\n  transform: translateY(280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(1);\n  transform: translateY(70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(1);\n  transform: translateY(140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(1);\n  transform: translateY(210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(1);\n  transform: translateY(280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li,\n.mfb-component--br.mfb-zoomin .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(0);\n  transform: translateY(-70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(0);\n  transform: translateY(-140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(0);\n  transform: translateY(-210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(0);\n  transform: translateY(-280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(1);\n  transform: translateY(-70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(1);\n  transform: translateY(-140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(1);\n  transform: translateY(-210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(1);\n  transform: translateY(-280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li,\n.mfb-component--br.mfb-zoomin .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(0);\n  transform: translateY(-70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(0);\n  transform: translateY(-140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(0);\n  transform: translateY(-210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(0);\n  transform: translateY(-280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(1);\n  transform: translateY(-70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(1);\n  transform: translateY(-140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(1);\n  transform: translateY(-210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(1);\n  transform: translateY(-280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li,\n.mfb-component--tr.mfb-fountain .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(0);\n  transform: translateY(-70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(0);\n  transform: translateY(-140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(0);\n  transform: translateY(-210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(0);\n  transform: translateY(-280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(1);\n  transform: translateY(70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(1);\n  transform: translateY(140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(1);\n  transform: translateY(210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(1);\n  transform: translateY(280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li,\n.mfb-component--br.mfb-fountain .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(0);\n  transform: translateY(70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(0);\n  transform: translateY(140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(0);\n  transform: translateY(210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(0);\n  transform: translateY(280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(1);\n  transform: translateY(-70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(1);\n  transform: translateY(-140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(1);\n  transform: translateY(-210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(1);\n  transform: translateY(-280px) scale(1);\n  transition-delay: 0.2s;\n}\n[data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 4px 10px;\n  border-radius: 3px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  font-weight: 400;\n  pointer-events: none;\n  line-height: normal;\n  position: absolute;\n  top: 50%;\n  margin-top: -11px;\n  transition: all 0.5s;\n}\n[data-mfb-toggle=hover] [data-mfb-label]:hover:after,\n[data-mfb-state=open] [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  opacity: 1;\n  transition: all 0.3s;\n}\n.mfb-component--br [data-mfb-label]:after,\n.mfb-component--tr [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  right: 70px;\n}\n.mfb-component--br .mfb-component__list [data-mfb-label]:after,\n.mfb-component--tr .mfb-component__list [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  right: 70px;\n}\n.mfb-component--tl [data-mfb-label]:after,\n.mfb-component--cl [data-mfb-label]:after,\n.mfb-component--bl [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  left: 70px;\n}\n.mfb-component--tl .mfb-component__list [data-mfb-label]:after,\n.mfb-component--bl .mfb-component__list [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  left: 70px;\n}\n.mfb-component__button--child i,\n.mfb-component__button--main i {\n  line-height: inherit;\n}\n.animated {\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 800px, 0);\n    transform: translate3d(0, 800px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-moz-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -moz-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -moz-transform: translate3d(0, 800px, 0);\n    transform: translate3d(0, 800px, 0);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -moz-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -moz-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -moz-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -moz-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 800px, 0);\n    -moz-transform: translate3d(0, 800px, 0);\n    transform: translate3d(0, 800px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    -moz-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -moz-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -moz-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  -moz-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n  -webkit-animation-delay: 1s;\n  -moz-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.onekeyvip {\n  font-size: 25px !important;\n}\n", 
    styleInject(css_248z$1), css_248z = '@font-face {\n    font-family: "onekeyvip"; /* Project id 3421073 */\n    src:\n            url(\'data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAkYAAsAAAAAEGAAAAjJAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDZAqSdI8xATYCJAMgCxIABCAFhHMHdBvJDVGUUVIf2c8D29aRfmhQjDbCUMq/kRj773fxQH+Mej82IqzDIq3SlnaWFmgvNUpPjw74GuxAOrmHZ5v9A6x91uGyXBVGrRsFY8P4il5UtRcRDurUuB1K2xcCuoYoWQOCs/zabxHB0ICDwMyv36/VU6OEO2+E6DF+sX2CmTRNeLJ2IUMoau8aoo0hQkgSiuVILoSYUQHPpZdGdfShmwgoNaoQvCwprQXOJzitB/4YxNUBZ2g40apxwNnlyzFJQXFWYdoTMwg3AZN4CT4LgBvGx4cvgBc4QFSQgJjI5rGYAAdt8K/3yEA7ANJToInljaGdIwqQMNiywnAxvvwUYsGggUu56zGsA8oVi/J7xOZu47/q++u93Q68hz2mPqrYHpSrlGh170ZHSaEiBftfXiFY4XKYj1DRKEpKjMB7JEbmvTsSR/gAKPjcB7kKDdIXMYr49V6cW+wOw2agtRVI/auCv0Ck01SaFBOO83Ph3Bma4ePvHZru6erCZpdEQNKiEFTMCGKKGOb/oEGrcfHRKwEovbwTQBd3oSi4uA6FxmyAIHTMHggatLt5dO1ViQUMrNvEX1dwqe4aOqbhRoXPnuQjeg00qP46Nm7bKdt6VbI9c3vU9rjpArt33OrtW32vQ4PStgj3lOzI2iHelrEtclfsNOHxvWJXbdsRcA0MHBENfi9rU7CenkCNqB9Ol7dLW62dXg4PvS0bg207mh5Njbre323nns3ZqexV1qrq3vQYGswl6up5+7R1lDNW6ppSXZDNq1aXd8u7o6BV2uqtlZBVqepsXbE2R0f+l6qpoJ5UD7upcvk0TR1fWr41Hh3ddZYqwWK21Onc9fZqi1V1c1s2nlQ4OhTizTE+09GjGXkDGHn7tLq7WdPg6XFUQEhB/i1ot5dXUxSUKPP1ftOqrJRQ9eCykALl0t8QE3j6AoY5ANHgR5vo6Aj0GGo0GtyLniXyajpJoMZLue0ov6Y2epUDQKStxFKJBrWUrExR4ZgxEAwEaalSYJJCZa22kct2Ov9frJPgOMAIol68GGYxEgDDccU8T1jxYGVAA6g8GoxHV69wYLyxmd31DpqKXX1XeaIQIauqcnZy/KY0c40P2cZia9dFgk0ur5jr3dPXBHSl1DfZ2+s9PZkdIqLWqHvecIn9RCKgUmvWLdTVnp7bImkh3KIhOEfpdfGZCx7sestEMQ+Qis6vYKTIzGFKVSgd1lxEe1DxikccZhUE/FFIKZP+w/Z5CGEEEETgCU0UJ4E2iNb0wkIA+l7DJGuLLCUZAtngi2dUx+j37wrTtvtQeFPvwqG2m/L+gMqfcirwKvf3s5K5eE6OIpewSjz5HSRWtaw4qDSoplTiJ/SZzwvYctNX6CsuteYR2QpFDpF7fN3JwfPqXNOW7JZ3FU37PeqeKo14m/9/WHm9qKNs6O0l52/O4O3cpWFqHnEuAf9DkXhjBtC0v2vXoYDlZtYFUHIblm//9igs/kqSh8wNc+MGnglyWzzgd9GGcfmR1/o2rbosGHLydVpsrn50ma362vYSp1lTkZLK7XCmfG7c4I1ByyOTU1y1RTcGzLE9uopMW94X/hbv7+SFTaGqpn62/rgaVY57OPpKLX7mdDCbRgX5wO1WbFaF0n1Ls3oKBA19/2K4ZlxYTvTqUxS1SY6I0InptRvlnMsXhnN++76f8nVrosX/UDhrY1TfQuMs8OYZR4wLoR7sF4uOOO1c47xesAh95yTeJ5ySpVmm8PDe2mfsoczReW5TAXaQ4yklpOOFfCG256CgFnPH3FjjXmGMAyVVDt92z+85YWNUHBKofV7TUeGnmevi3mK8eKUdAY/HgrCVAY5PwzQfPWw5E45HkqH/JPjFJU/Qsn1CGDpSgIGHEyd2Vxdtbrcs/hAtDu91ErAfLVWFD9AcO2wY0LJEbO0hWQa2iZcZ/0BLJU1gfV+6Jy0VdxUPKJENmi0bOKBUDtJ2AhqHJWb+rQa818rE/kEYjov47DFCZ+LFRsb4LS5R8y4fELqrWI8olFffu/bXTTxq67YKwO8Mlqz5Yl54cLmMw/co9+VHFyc1bHi193bQPsxJCS+WwIGJkuEEr+6DssahAxVNxKr8S9kP1HTyU/PEjdMHZW945DtO6jcVubiosBvwIuiTB6WeXWw7wTlE6zUtuLagqxzqEz23mMe1tUoLlGq30uDWqJgcAdSCxvUPPb4GFG1P3J36DMlgXGQzeS+I1KeIGLnEshNYhqRBsRcQMWO+W8UCwCqMu5CgdFb617hRFyA2M/P3hwzHyTivLaq5Ceepdp9bxV6b/QIsfpCkdK0gAC9hYYtcSw8Dz8MjCReOa5sdz4LaoCy7LRtq3fRc5tGxPOH8KtSsTnvXLr+/Lf2dNXhx6Fxbwnl7W2MWs7zWnsbYTFe4ijMJMNLD/KrgFuUNIPb6f2QLkm6MDLmJDAYALRe2e2EcxpB0B37SDfmHlBjSr+BO5u4OIzpc8r+eg3+McS+qn3lT6X+MksTPOo47CCT85pHWlNPmSwPFmZuaIqauLPbkV0EfoVRaxA9dda37ZdK61IIGJR5p64+KtPuTEh36bB70Fygz5S9UYt5faoC8Z5k6NAT27FDZbQT8Qa11/qjSI0ic+RxkmB/4CzT6qBXCHdj+UvvBj61MdzAITSROkwRX0YurVRr0KllHn0N2k72sWmM1qbZQuMmrmvvVkyaz1qDnpialBLukpJ40FXOI2arm0bSKqzIZdFxJeT1IijJwjdi9i1TSSRqaNuYmJ6u4Q5KUBh0QMiHhaC2cwKXQK7mWkoGeykiXkrqVn9WLlZZRNZKaBQVnipskAPXbUhOzI/Dr40qVJCWNXioEpze1qLeZlRrvkkRTYVWtoLOopI2lJEpqN+Ay8tt1ISnRkmhytBrlSqbpVGlxUl+pbmFjS3BS8QmKAwwhEANiQiyIDXEgB1A0kZlCGdQGpgLXEhZmb41WY2GpDQY1RbLMBota/kRXvUWnIE2JZq1an6iyUBTqywMAAAAA\') format(\'woff2\'),\n            url(\'//at.alicdn.com/t/c/font_3421073_ehnujygr338.woff?t=1663906966902\') format(\'woff\'),\n            url(\'//at.alicdn.com/t/c/font_3421073_ehnujygr338.ttf?t=1663906966902\') format(\'truetype\'),\n            url(\'//at.alicdn.com/t/c/font_3421073_ehnujygr338.svg?t=1663906966902#onekeyvip\') format(\'svg\');\n}\n\n.onekeyvip {\n    font-family: "onekeyvip" !important;\n    font-size: 16px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.onekeyvip-360logo:before {\n    content: "\\e602";\n}\n\n.onekeyvip-baidu:before {\n    content: "\\e612";\n}\n\n.onekeyvip-zhihu:before {\n    content: "\\e641";\n}\n\n.onekeyvip-google:before {\n    content: "\\e603";\n}\n\n.onekeyvip-sougou:before {\n    content: "\\faef";\n}\n\n.onekeyvip-number-sign-full:before {\n    content: "\\ea7b";\n}\n\n.onekeyvip-number-sign:before {\n    content: "\\ea7c";\n}\n\n', 
    styleInject(css_248z), MfbMenu = function() {
        function MfbMenu(pos, method) {
            void 0 === pos && (pos = "bl"), void 0 === method && (method = "hover"), this.method = "hover", 
            this.method = method, this.pos = pos;
        }
        return MfbMenu.prototype.getHtml = function(models) {
            var t = "";
            return models.forEach((function(v) {
                t += '            \n            <li>\n                <div data-mfb-label="' + v.title + '" class="mfb-component__button--child" id="mfb-cus-' + v.title + '">\n                    <i class="' + (v.icon.indexOf("onekeyvip") > -1 ? "onekeyvip " : "fa ") + v.icon + '" aria-hidden="true"></i>\n                </div>\n            </li>';
            })), '\n    <ul id="mfb-menu" class="mfb-component--' + this.pos + ' mfb-zoomin bounceInUp animated" data-mfb-toggle="' + this.method + '">\n        <li class="mfb-component__wrap">\n            <div class="mfb-component__button--main">\n                <i class="fa fa-vimeo" aria-hidden="true"></i>\n            </div>\n            <ul class="mfb-component__list">\n                <li>\n                    <div data-mfb-label="\u672c\u6b21\u5173\u95ed" class="mfb-component__button--child" id="mfb-close">\n                        <i class="fa fa-eye" aria-hidden="true"></i>\n                    </div>\n                </li>\n                ' + t + "\n            </ul>\n        </li>\n    </ul>";
        }, MfbMenu.prototype.loader = function() {
            Core.appendCss("//lib.baomitu.com/font-awesome/4.6.0/css/font-awesome.min.css");
        }, MfbMenu.prototype.render = function() {}, MfbMenu.prototype.Init = function(models) {
            MfbMenu.selfId = "#mfb-menu", Core.inIframe() || (this.loader(), Core.bodyAppend(this.getHtml(models)), 
            this.mouseMove(), this.bindEvent(models));
        }, MfbMenu.prototype.bindEvent = function(models) {
            "hover" != $(MfbMenu.selfId).data("mfb-toggle") && $(MfbMenu.selfId).on("click", (function() {
                var targetState = "closed" == $(MfbMenu.selfId).attr("data-mfb-state") ? "open" : "closed";
                $(MfbMenu.selfId).attr("data-mfb-state", targetState);
            })), $("#mfb-close").on("click", (function() {
                Logger.info("\u5173\u95edmfb\u83dc\u5355"), $(MfbMenu.selfId).hide();
            })), models.forEach((function(e) {
                $("#mfb-cus-" + e.title).on("click", (function() {
                    Logger.info("\u83dc\u5355" + e.title + "\u88ab\u70b9\u51fb"), e.callback();
                }));
            }));
        }, MfbMenu.prototype.mouseMove = function() {
            var menu = unsafeWindow.document.querySelector(MfbMenu.selfId), iWidth = unsafeWindow.document.documentElement.clientWidth, iHeight = unsafeWindow.document.documentElement.clientHeight, moveX = 0, moveY = 0, moveTop = 0, moveLeft = 0, moveable = !1, docMouseMoveEvent = function() {}, docMouseUpEvent = function() {};
            function getEvent() {
                return window.event || arguments.callee.caller.arguments[0];
            }
            menu.onmousedown = function() {
                var buttonChile, evt = getEvent();
                moveable = !0, moveX = evt.clientX, moveY = evt.clientY, moveTop = parseInt($(MfbMenu.selfId).css("top")), 
                moveLeft = parseInt($(MfbMenu.selfId).css("left")), buttonChile = $(".mfb-component__button--child"), 
                unsafeWindow.document.onmousemove = function() {
                    var evt_1, x, y, width;
                    moveable && (evt_1 = getEvent(), x = moveLeft + evt_1.clientX - moveX, y = moveTop + evt_1.clientY - moveY, 
                    width = $(MfbMenu.selfId).css("width"), x - parseInt(width) / 2 < iWidth / 2 ? (buttonChile.removeClass("right"), 
                    buttonChile.addClass("left")) : (buttonChile.removeClass("left"), buttonChile.addClass("right")), 
                    x > 0 && x + parseInt(width) < iWidth && (menu.style.left = x + "px"), y > 0 && y + parseInt($(MfbMenu.selfId).css("height")) < iHeight && (menu.style.top = y + "px"));
                }, unsafeWindow.document.onmouseup = function() {
                    moveable && (unsafeWindow.document.onmousemove = docMouseMoveEvent, unsafeWindow.document.onmouseup = docMouseUpEvent, 
                    moveable = !1, moveX = 0, moveY = 0, moveTop = 0, moveLeft = 0);
                };
            };
        }, MfbMenu;
    }(), MfbModel = function MfbModel(title, icon, callback) {
        this.title = title, this.icon = icon, this.callback = callback;
    }, YoutubeService = function(_super) {
        function YoutubeService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.YouTuBe, /www\.youtube\.com\/watch\?v=(.*?)/i ] ]), 
            _this._unique = !1, _this._appName = "YouTuBe", _this;
        }
        return __extends(YoutubeService, _super), YoutubeService.prototype.loader = function() {
            this.mfbMenu = new MfbMenu;
        }, YoutubeService.prototype.run = function() {
            var menus = [ new MfbModel("\u4e0b\u8f7d", "fa-download", (function() {
                Core.open("http://ytv.wandhi.com/?url=" + encodeURIComponent(Runtime.url));
            })) ];
            this.mfbMenu.Init(menus);
        }, YoutubeService;
    }(PluginBase), SettingService = function(_super) {
        function SettingService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.Settings, /settings\.wandhi\.com\/index\/index\/page/i ], [ SiteEnum.Settings_AutoJump, /settings\.wandhi\.com\/tools\/autojump\/page/i ], [ SiteEnum.Settings_AutoJump_Opt, /settings\.wandhi\.com\/tools\/autojump-op\/page/i ], [ SiteEnum.Settings_CSDN, /settings\.wandhi\.com\/tools\/csdn\/page/i ], [ SiteEnum.Settings_CSDN_Opt, /settings\.wandhi\.com\/tools\/csdn-op\/page/i ], [ SiteEnum.Settings_Search, /settings\.wandhi\.com\/tools\/search-helper\/page/i ], [ SiteEnum.Settings_Search_Opt, /settings\.wandhi\.com\/tools\/search-helper-op\/page/i ], [ SiteEnum.Settings_Bili_Pc_Opt, /settings\.wandhi\.com\/tools\/bilibili-pc-op\/page/i ], [ SiteEnum.Settings_Jiexi_Opt, /settings\.wandhi\.com\/tools\/jiexi\/page/i ] ]), 
            _this._unique = !1, _this._appName = "\u63a7\u5236\u9762\u677f", _this;
        }
        return __extends(SettingService, _super), SettingService.prototype.loader = function() {
            this.removeAlert();
        }, SettingService.prototype.run = function() {
            switch (this.site) {
              case SiteEnum.Settings:
                this.initVer();
                break;

              case SiteEnum.Settings_AutoJump_Opt:
                this.autoJumpOpt();
                break;

              case SiteEnum.Settings_CSDN_Opt:
                this.csdnOpt();
                break;

              case SiteEnum.Settings_Search_Opt:
                this.searchHelperOpt();
                break;

              case SiteEnum.Settings_Bili_Pc_Opt:
                this.biliPcOpt();
                break;

              case SiteEnum.Settings_Jiexi_Opt:
                this.JiexiOpt();
            }
        }, SettingService.prototype.JiexiOpt = function() {
            var keys = new Map([ [ ConfigEnum.Jiexi_Cus_Interface, function(v) {
                try {
                    v.split("\n").forEach((function(e, i) {
                        if (2 != e.split("||").length) throw new Error;
                    }));
                } catch (e) {
                    return sAlert.error("\u81ea\u5b9a\u4e49\u63a5\u53e3\u683c\u5f0f\u9519\u8bef"), !1;
                }
                return !0;
            } ] ]);
            this.TextAreaInit(keys);
        }, SettingService.prototype.biliPcOpt = function() {
            var keys = [ ConfigEnum.BiliPc_Cover, ConfigEnum.BiliPc_Video_Download, ConfigEnum.BiliPc_Triple_Click ];
            this.checkBoxInit(keys);
        }, SettingService.prototype.searchHelperOpt = function() {
            var keys = [ ConfigEnum.Search_Helper_Switch ];
            this.checkBoxInit(keys);
        }, SettingService.prototype.autoJumpOpt = function() {
            var checkboxes = $("input[type=checkbox]");
            checkboxes.removeProp("disabled"), [ ConfigEnum.AutoJump_ZhiHu, ConfigEnum.AutoJump_CSDN, ConfigEnum.AutoJump_JianShu, ConfigEnum.AutoJump_Gitee, ConfigEnum.AutoJump_JueJin, ConfigEnum.AutoJump_Weibo, ConfigEnum.AutoJump_TuXiaoChao, ConfigEnum.AutoJump_OsCh, ConfigEnum.AutoJump_AiFaDian, ConfigEnum.AutoJump_Baidu, ConfigEnum.AutoJump_DouBan, ConfigEnum.AutoJump_g17173, ConfigEnum.AutoJump_TencentDoc ].forEach((function(e, i) {
                $("#" + e.toString()).prop("checked", Config.get(e.toString(), !0));
            })), checkboxes.on("change", (function(e) {
                var el = e.target;
                Logger.debug("\u914d\u7f6e[" + e.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(e.target).prop("checked") + "]"), 
                Config.set(el.id, $(el).prop("checked")), sAlert.info("\u4fdd\u5b58\u6210\u529f");
            }));
        }, SettingService.prototype.csdnOpt = function() {
            var keys = [ ConfigEnum.CSDN_OpAdClean, ConfigEnum.CSDN_OpImgLink, ConfigEnum.CSDN_OpCommentClean, ConfigEnum.CSDN_OpArticleClean, ConfigEnum.CSDN_OpClipboardClean ];
            this.checkBoxInit(keys);
        }, SettingService.prototype.checkBoxInit = function(keys) {
            var checkboxes = $("input[type=checkbox]");
            checkboxes.removeProp("disabled"), keys.forEach((function(e, i) {
                $("#" + e.toString()).prop("checked", Config.get(e.toString(), !0));
            })), checkboxes.on("change", (function(e) {
                var el = e.target;
                Logger.debug("\u914d\u7f6e[" + e.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(e.target).prop("checked") + "]"), 
                Config.set(el.id, $(el).prop("checked")), sAlert.info("\u4fdd\u5b58\u6210\u529f");
            }));
        }, SettingService.prototype.TextAreaInit = function(keys) {
            $("textarea").removeProp("disabled"), keys.forEach((function(f, e) {
                $("#" + e.toString()).val(Config.get(e.toString(), "")), $("#" + e.toString()).on("change", (function(el) {
                    Logger.debug("\u914d\u7f6e[" + el.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(el.target).val() + "]"), 
                    f.apply(el, [ $(el.target).val() ]) && (Config.set(el.target.id, $(el.target).val()), 
                    sAlert.info("\u4fdd\u5b58\u6210\u529f"));
                }));
            }));
        }, SettingService.prototype.initVer = function() {
            $("#currentVer").text(Config.env.script.version);
        }, SettingService.prototype.removeAlert = function() {
            $(".alert-danger").remove();
        }, SettingService.prototype.injection = function() {
            unsafeWindow.window.scriptInfo = Config.env, unsafeWindow.window.gm_Set = Config.set, 
            unsafeWindow.window.gm_Get = Config.get;
        }, SettingService;
    }(PluginBase), ControlMenuService = function(_super) {
        function ControlMenuService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.All, /.*/i ] ]), _this._appName = "\u63a7\u5236\u83dc\u5355", 
            _this._unique = !1, _this;
        }
        return __extends(ControlMenuService, _super), ControlMenuService.prototype.loader = function() {}, 
        ControlMenuService.prototype.run = function() {
            GM_registerMenuCommand("\u63a7\u5236\u4e2d\u5fc3", (function() {
                Core.open("https://settings.wandhi.com");
            }));
        }, ControlMenuService;
    }(PluginBase), SearchService = function(_super) {
        function SearchService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.Baidu, /www\.baidu\.com\/(baidu|s)\?/i ], [ SiteEnum.Google, /www\.google\.com\/search\?/i ], [ SiteEnum.SoGou, /www\.sogou\.com\/web/i ], [ SiteEnum.SoGou, /www\.so\.com\/s\?/i ] ]), 
            _this._appName = "\u4fbf\u6377\u641c\u7d22", _this._unique = !1, _this.siteConfig = new Map([ [ SiteEnum.Baidu, "#kw" ], [ SiteEnum.Google, "input[name=q]" ], [ SiteEnum.SoGou, "#upquery" ] ]), 
            _this;
        }
        return __extends(SearchService, _super), SearchService.prototype.loader = function() {
            SearchService.currentSite = this.site, this.siteConfig.has(this.site) && (SearchService.keySelector = this.siteConfig.get(this.site));
        }, SearchService.prototype.run = function() {
            if (Config.get(ConfigEnum.Search_Helper_Switch, !0)) {
                var menus = [ new MfbModel("\u767e\u5ea6", "onekeyvip-baidu", (function() {
                    Core.open("https://www.baidu.com/s?wd=" + $(SearchService.keySelector).val());
                })), new MfbModel("\u641c\u72d7", "onekeyvip-sougou", (function() {
                    Core.open("https://www.sogou.com/web?query=" + $(SearchService.keySelector).val() + "&ie=utf8");
                })), new MfbModel("\u8c37\u6b4c", "onekeyvip-google", (function() {
                    Core.open("https://www.google.com/search?q=" + $(SearchService.keySelector).val());
                })), new MfbModel("360", "onekeyvip-360logo", (function() {
                    Core.open("https://www.so.com/s?q=" + $(SearchService.keySelector).val());
                })) ];
                new MfbMenu(Config.get(ConfigEnum.Search_OptMenuPos, "cl"), Config.get(ConfigEnum.Search_OptMenuMethod, "hover")).Init(menus);
            }
        }, SearchService.keySelector = "#none", SearchService;
    }(PluginBase), QuarkFileResponse = function QuarkFileResponse() {}, NetDiskDirectService = function(_super) {
        function NetDiskDirectService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.KuaKeHome, /pan\.quark\.cn\/list/ ], [ SiteEnum.BaiduPanMain, /pan\.baidu\.com\/disk\/main/i ] ]), 
            _this._appName = "NetDiskDirect", _this;
        }
        return __extends(NetDiskDirectService, _super), NetDiskDirectService.prototype.loader = function() {}, 
        NetDiskDirectService.prototype.run = function() {
            NetDiskDirectService._site = this.site, this.site == SiteEnum.KuaKeHome ? (NetDiskDirectService.btnSelecotr = ".btn-operate", 
            NetDiskDirectService.btn = '<div class="ovk-main" style="margin-right: 10px;">\n    <button type="button" class="ant-btn btn-file okv-btn-direct">\n        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+" class="btn-icon" alt="" style="width: 20px;height: 20px">\n        <span>\u83b7\u53d6\u76f4\u94fe</span>\n    </button>\n</div>', 
            NetDiskDirectService.getSelecor = NetDiskDirectService.getQuarkSelectedFile, NetDiskDirectService.quarkListener(), 
            Core.appendCssContent(".btn-operate {justify-content: flex-start !important;}")) : this.site == SiteEnum.BaiduPanMain && (NetDiskDirectService.btnSelecotr = ".wp-s-agile-tool-bar__header", 
            NetDiskDirectService.btn = '<div class="ovk-main" style="margin-right: 10px;">\n    <button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon okv-btn-direct" style="background: #09AAFF;border-color: #09AAFF;font-size: 14px;padding: 7px 16px;border: none;\n}">\n        <i class="u-icon u-icon-download"></i>\n        <span>\u83b7\u53d6\u76f4\u94fe</span>\n    </button>\n</div>', 
            NetDiskDirectService.initButton(), NetDiskDirectService.baiduEvent(), NetDiskDirectService.commonEvent());
        }, NetDiskDirectService.quarkListener = function() {
            var _this = this;
            window.addEventListener("hashchange", (function(e) {
                return __awaiter(_this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return "https://pan.quark.cn/list#/", "https://pan.quark.cn/list#/list/all", "https://pan.quark.cn/list#/" === e.oldURL && "https://pan.quark.cn/list#/list/all" === e.newURL ? [ 2 ] : [ 4, Core.sleep(.15) ];

                          case 1:
                            return _a.sent(), $(".quark-button").length > 0 ? [ 2 ] : (NetDiskDirectService.initButton(), 
                            [ 2 ]);
                        }
                    }));
                }));
            })), NetDiskDirectService.initButton(), NetDiskDirectService.quarkEvent(), NetDiskDirectService.commonEvent();
        }, NetDiskDirectService.baiduSelectedList = function() {
            try {
                return require("system-core:context/context.js").instanceForSystem.list.getSelected();
            } catch (e) {
                return unsafeWindow.document.querySelector(".wp-s-core-pan").__vue__.selectedList;
            }
        }, NetDiskDirectService.baiduEvent = function() {
            $(document).on("click", ".okv-btn-direct", (function(e) {
                var fidsStr, selectList = NetDiskDirectService.baiduSelectedList();
                0 !== selectList.length ? 2 !== (fidsStr = "[" + selectList.map((function(item) {
                    return item.fs_id;
                })).join(",") + "]").length ? Route.baiduDriect(fidsStr).then((function(res) {
                    Logger.debug(res), 0 === res.errno ? sAlert.html("\u76f4\u94fe\u4fe1\u606f", NetDiskDirectService.generateDom(res.list.map((function(e) {
                        var obj = new QuarkFileResponse;
                        return obj.fid = e.fs_id.toString(), obj.file_name = e.filename, obj.download_url = e.dlink, 
                        obj.size = e.size, obj;
                    }))), !0, "\u6211\u597d\u4e86", "#3085d6", "40%") : 112 === res.errno ? sAlert.error("\u63d0\u793a\uff1a\u9875\u9762\u8fc7\u671f\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01") : sAlert.error("\u63d0\u793a\uff1a\u83b7\u53d6\u4e0b\u8f7d\u94fe\u63a5\u5931\u8d25\uff01\u8bf7\u5237\u65b0\u7f51\u9875\u540e\u91cd\u8bd5\uff01");
                })) : sAlert.error("\u63d0\u793a\uff1a\u8bf7\u6253\u5f00\u6587\u4ef6\u5939\u540e\u52fe\u9009\u6587\u4ef6\uff01") : sAlert.error("\u63d0\u793a\uff1a\u8bf7\u5148\u52fe\u9009\u8981\u4e0b\u8f7d\u7684\u6587\u4ef6\uff01");
            }));
        }, NetDiskDirectService.quarkEvent = function() {
            $(document).on("click", ".okv-btn-direct", (function(e) {
                var fids, selectList = NetDiskDirectService.getQuarkSelectedFile();
                Logger.debug("\u5938\u514b-\u9009\u62e9\u6587\u4ef6" + selectList), 0 !== selectList.length ? selectList.filter((function(e) {
                    return !e.file;
                })).length != selectList.length ? (fids = selectList.filter((function(e) {
                    return e.file;
                })).map((function(e) {
                    return e.fid;
                })), NetDiskDirectService._site == SiteEnum.KuaKeHome ? Route.quarkDriect(fids).then((function(res) {
                    Logger.debug(res), 31001 != res.code ? 0 == res.code ? sAlert.html("\u76f4\u94fe\u4fe1\u606f", NetDiskDirectService.generateDom(res.data), !0, "\u6211\u597d\u4e86", "#3085d6", "40%") : sAlert.error("\u94fe\u63a5\u83b7\u53d6\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5(" + res.code + ")") : sAlert.error("\u8bf7\u5148\u767b\u5f55\u7f51\u76d8");
                })) : sAlert.error("\u8bf7\u5148\u5c06\u6587\u4ef6\u4fdd\u5b58\u5230\u81ea\u5df1\u7684\u7f51\u76d8")) : sAlert.error("\u6682\u4e0d\u652f\u6301\u6587\u4ef6\u5939\u4e0b\u8f7d") : sAlert.error("\u8bf7\u5148\u52fe\u9009\u8981\u4e0b\u8f7d\u7684\u6587\u4ef6");
            }));
        }, NetDiskDirectService.commonEvent = function() {
            $(document).on("click", ".quark-down-item", (function(e) {
                Core.open(e.target.dataset.url, !0);
            })), $(document).on("click", ".quark-copy-item", (function(e) {
                GM_setClipboard(e.target.dataset.url), sAlert.info("\u590d\u5236\u6210\u529f");
            }));
        }, NetDiskDirectService.generateDom = function(list) {
            var rows = "";
            return list.forEach((function(e) {
                rows += '<tr>\n                        <td class="bili-table-cell">' + e.file_name + '</td>\n                        <td class="bili-table-cell">' + Core.sizeFormat(e.size) + '</td>\n                        <td class="bili-table-cell">\n                        <button class="okv-btn okv-btn-primary quark-copy-item" data-url="' + e.download_url + '">\u590d\u5236\u94fe\u63a5</button>\n                        <button class="okv-btn okv-btn-primary quark-down-item" data-url="' + e.download_url + '">\u4e0b\u8f7d</button>\n                        </td>\n                    </tr>';
            })), '<div style="height: 30rem"><table class="bili-table bili-table-small">\n                    <thead class="bili-table-head">\n                        <tr>                        \n                            <th class="bili-table-cell">\u6807\u9898</th>\n                            <th class="bili-table-cell">\u5927\u5c0f</th>\n                            <th class="bili-table-cell">\u64cd\u4f5c</th>\n                        </tr>\n                    </thead>\n                    <tbody class="at-table-tbody">                    \n                        ' + rows + "\n                    </tbody>    \n                </table></div>";
        }, NetDiskDirectService.initButton = function() {
            Core.autoLazyload((function() {
                return $(NetDiskDirectService.btnSelecotr).length > 0;
            }), (function() {
                Core.prepend(NetDiskDirectService.btnSelecotr, NetDiskDirectService.btn);
            }), .5);
        }, NetDiskDirectService.getQuarkSelectedFile = function() {
            var reactDom, props, fileList, selectedKeys_1, selectedList = [];
            try {
                return reactDom = document.getElementsByClassName("file-list")[0], (props = Core.getReact(reactDom).props) && (fileList = props.list || [], 
                selectedKeys_1 = props.selectedRowKeys || [], fileList.forEach((function(val) {
                    selectedKeys_1.includes(val.fid) && selectedList.push(val);
                }))), selectedList;
            } catch (e) {
                return selectedList;
            }
        }, NetDiskDirectService.btnSelecotr = "", NetDiskDirectService.btn = "", NetDiskDirectService;
    }(PluginBase), AdClearService = function(_super) {
        function AdClearService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.Baidu, /baidu.com\/s\?wd/i ], [ SiteEnum.YouTuBe, /youtube.com\/watch/i ] ]), 
            _this._unique = !1, _this._appName = "\u5e7f\u544a\u6e05\u7406", _this;
        }
        return __extends(AdClearService, _super), AdClearService.prototype.loader = function() {}, 
        AdClearService.prototype.run = function() {
            this.YoutubeMobile();
        }, AdClearService.prototype.YoutubeMobile = function() {
            var css = [ "ytm-item-section-renderer:has(a[href*='googleads'])", "#masthead-ad", "ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)", "ytd-rich-section-renderer #dismissible", ".video-ads.ytp-ad-module", "tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)", "#related #player-ads", "#related ytd-ad-slot-renderer", "ytd-ad-slot-renderer", "yt-mealbar-promo-renderer" ], cssText = css.join(",") + "{display:none!important;}";
            Core.appendCssContent(cssText), Logger.info("YoutubeMobile AdClearService loaded");
        }, AdClearService;
    }(PluginBase), GfUpdateService = function(_super) {
        function GfUpdateService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.All, /(.*)/i ] ]), _this._unique = !1, 
            _this._appName = "update", _this;
        }
        return __extends(GfUpdateService, _super), GfUpdateService.prototype.loader = function() {}, 
        GfUpdateService.prototype.run = function() {
            if (!Config.get(update_key, !1)) {
                var current = new VersionCompar(Config.env.script.version);
                this.scriptCat(current);
            }
        }, GfUpdateService.prototype.scriptCat = function(current) {
            Http.get(Route.update_api_script_cat, new Map, new Map, !1).then((function(r) {
                var _a, _b, msg, version = new VersionCompar(null === (_b = null === (_a = null == r ? void 0 : r.data) || void 0 === _a ? void 0 : _a.script) || void 0 === _b ? void 0 : _b.version);
                Logger.debug("\u5f53\u524d\u7248\u672c:[" + current.versionString + "],\u6700\u65b0\u7248\u672c:[" + version.versionString + "]"), 
                version.compareTo(current) === VersionResult.greater && (msg = "\u65b0\u7248\u672c<span>" + version.versionString + '</span>\u5df2\u53d1\u5e03.<a style="color: blue" class="link" target="_blank" href="' + Route.home_url_update + '">\u67e5\u770b</a><br><span style="color: red">\u7248\u672c\u8de8\u5ea6\u8f83\u5927\uff0c\u5347\u7ea7\u5b8c\u6210\u540e\u8bf7\u624b\u52a8\u5220\u9664\u65e7\u811a\u672c</span><br><a id="new-version-link" class="link" href="' + Route.install_url_two + '" target="_blank" style="color: blue">\u70b9\u6211\u53bb\u66f4\u65b0</a>', 
                GM.addStyle(".swal2-popup{font-size: 16px !important}"), Swal__default.default.fire({
                    toast: !0,
                    position: "bottom-left",
                    icon: "success",
                    showCloseButton: !0,
                    title: "\u68c0\u67e5\u66f4\u65b0",
                    html: msg
                })), Config.set(update_key, !0, Hour);
            }));
        }, GfUpdateService;
    }(PluginBase), VersionCompar = function() {
        function VersionCompar(e) {
            /^[\d\.]+$/.test(e) || Logger.error("Invalid version string"), this.parts = e.split(".").map((function(e) {
                return parseInt(e);
            })), this.versionString = e;
        }
        return VersionCompar.prototype.compareTo = function(e) {
            for (var t = 0; t < this.parts.length; ++t) {
                if (e.parts.length === t) return VersionResult.greater;
                if (this.parts[t] !== e.parts[t]) return this.parts[t] > e.parts[t] ? VersionResult.greater : VersionResult.less;
            }
            return this.parts.length !== e.parts.length ? VersionResult.less : VersionResult.equal;
        }, VersionCompar.prototype.greaterThan = function(e) {
            return this.compareTo(e) === VersionResult.greater;
        }, VersionCompar.prototype.lessThan = function(e) {
            return this.compareTo(e) === VersionResult.less;
        }, VersionCompar.prototype.equals = function(e) {
            return this.compareTo(e) === VersionResult.equal;
        }, VersionCompar;
    }(), function(VersionResult) {
        VersionResult[VersionResult.less = -1] = "less", VersionResult[VersionResult.equal = 0] = "equal", 
        VersionResult[VersionResult.greater = 1] = "greater", VersionResult[VersionResult.incomparable = NaN] = "incomparable";
    }(VersionResult || (VersionResult = {})), OneKeyVipGfInjection = function() {
        function OneKeyVipGfInjection() {
            this.plugins = new Array, this.plugins = [ Container.Require(AdClearService), Container.Require(ControlMenuService), Container.Require(SettingService), Container.Require(AutoExpandService), Container.Require(AliyunPanToken), Container.Require(GfUpdateService), Container.Require(BiliImgService), Container.Require(BiliMobileService), Container.Require(MovieService), Container.Require(MusicService), Container.Require(CsdnAdService), Container.Require(WenKuService), Container.Require(LinkJumpService), Container.Require(YoutubeService), Container.Require(SearchService), Container.Require(NetDiskDirectService) ], 
            Logger.info("container loaded");
        }
        return OneKeyVipGfInjection.prototype.Init = function() {
            this.plugins.every((function(element) {
                return element.linkTest() ? (new Promise((function(resolve) {
                    resolve(1);
                })).then(element.Process), Logger.debug("element [" + element.appName() + "];unique:[" + element.unique() + "]"), 
                !element.unique()) : (Logger.debug("element [" + element.appName() + "];not pass"), 
                !0);
            }));
        }, OneKeyVipGfInjection;
    }(), Logger.level = LogLevel.info, Container.Require(OneKeyVipGfInjection).Init();
}));
