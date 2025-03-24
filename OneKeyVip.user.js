// ==UserScript==
// @name          【玩的嗨】VIP工具箱,夸克网盘直链批量获取,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,下载B站视频等众多功能聚合 长期更新,放心食用
// @namespace     https://www.wandhi.com/
// @description   🔥功能介绍🔥：🎉 1、Vip视频解析；🎉 2、一站式音乐搜索解决方案；🎉 3、bilibili视频封面获取；🎉 4、bilibili视频下载(已支持分P下载)；🎉 5、夸克网盘直链批量获取；🎉 6、商品历史价格展示(一次性告别虚假降价)；🎉 7、优惠券查询；🎉 8、CSDN页面、剪切板清理；🎉 9、页面自动展开(更多网站匹配中,欢迎提交想要支持的网站) 🎉 10、YouTube视频下载🎉 11、中间页自动跳转；🎉 12、搜索引擎快速跳转
// @license       MIT
// @version       4.9.45
// @author        MaxZhang
// @include       *://item.taobao.com/*
// @include       *://s.taobao.com/search*
// @include       *://list.tmall.com/search_product.htm*
// @include       *://detail.tmall.com/*
// @include       *://chaoshi.detail.tmall.com/*
// @include       *://detail.tmall.hk/*
// @include       *://item.yiyaojd.com/*
// @include       *://item.jd.com/*
// @include       *://search.jd.com/*
// @include       *://item.jd.hk/*
// @include       *://search.kaola.com/*
// @include       *://goods.kaola.com*
// @include       *://detail.vip.com/detail-*
// @include       *://product.suning.com/*
// @exclude       *://vip.wandhi.com/*
// @match         *://*blog.csdn.net/*
// @match         *://*download.csdn.net/*
// @match         *://*c.pc.qq.com/middlem*
// @match         *://*pan.baidu.com/disk/main*
// @match         *://link.csdn.net/*
// @match         *://link.zhihu.com/*
// @match         *://browser.gwdang.com/*
// @match         *://*www.jianshu.com/go-wild*
// @match         *://*gitee.com/link*
// @match         *://*juejin.cn/?target*
// @match         *://www.aliyundrive.com/drive*
// @match         *://www.alipan.com/drive/*
// @match         *://*.youtube.com/watch?v=*
// @match         *://support.qq.com/products*
// @match         *://weibo.cn/sinaurl*
// @match         *://afdian.net/link*
// @match         *://*oschina.net/action/GoToLink*
// @match         *://jump2.bdimg.com/safecheck*
// @match         *://www.douban.com/link2/?url*
// @match         *://link.17173.com*
// @match         *://search.suning.com/*
// @match         *://pan.quark.cn/*
// @match         *://docs.qq.com/scenario/link*
// @match         *://mail.qq.com/cgi-bin/readtemplate*
// @match         *://cloud.tencent.com/developer/tools/blog-entry*
// @match         *://link.uisdc.com/*
// @match         *://*.tudou.com/listplay/*
// @match         *://*.tudou.com/albumplay/*
// @match         *://*.tudou.com/programs/view/*
// @match         *://*.tudou.com/v*
// @match         *://*.mgtv.com/b/*
// @match         *://film.sohu.com/album/*
// @match         *://tv.sohu.com/v/*
// @match         *://*.acfun.cn/v/*
// @match         *://*.bilibili.com/video/*
// @match         *://*.bilibili.com/anime/*
// @match         *://*.bilibili.com/bangumi/play/*
// @match         *://*.pptv.com/show/*
// @match         *://*.baofeng.com/play/*
// @match         *://*.wasu.cn/Play/show*
// @match         *://v.yinyuetai.com/video/*
// @match         *://v.yinyuetai.com/playlist/*
// @match         *://*.wasu.cn/Play/show/*
// @match         *://music.taihe.com/song*
// @match         *://music.163.com/song*
// @match         *://music.163.com/m/song*
// @match         *://y.qq.com/*
// @match         *://*.kugou.com/*
// @match         *://*.kuwo.cn/*
// @match         *://*.xiami.com/*
// @match         *://music.taihe.com/*
// @match         *://*.1ting.com/player*
// @match         *://www.qingting.fm/*
// @match         *://www.lizhi.fm/*
// @match         *://music.migu.cn/*
// @match         *://www.shangxueba.com/ask/*.html
// @match         *://www.ximalaya.com/*
// @match         *://www.shangxueba.com/ask/*.html
// @match         *://pan.baidu.com/disk/home*
// @match         *://yun.baidu.com/disk/home*
// @match         *://pan.baidu.com/s/*
// @match         *://yun.baidu.com/s/*
// @match         *://pan.baidu.com/share/link*
// @match         *://yun.baidu.com/share/link*
// @match         *://wenku.baidu.com/view/*
// @match         *://settings.wandhi.com/*
// @match         *://m.youku.com/v*
// @match         *://m.youku.com/a*
// @match         *://v.youku.com/v_*
// @match         *://v.youku.com/pad_show*
// @match         *://*.iqiyi.com/v_*
// @match         *://*.iqiyi.com/w_*
// @match         *://*.iqiyi.com/a_*
// @match         *://*.iqiyi.com/adv*
// @match         *://*.iq.com/play/*
// @match         *://*.le.com/ptv/vplay/*
// @match         *://v.qq.com/x/cover/*
// @match         *://v.qq.com/x/page/*
// @match         *://v.qq.com/*play*
// @match         *://v.qq.com/cover*
// @match         *://c.pc.qq.com/ios*
// @match         *://www.v2ex.com/t/*
// @match         *://*.nodeseek.com/jump*
// @match         *://*.zhihu.com/question*
// @match         *://www.baidu.com/*
// @match         *://www.google.com/*
// @match         *://www.sogou.com/*
// @match         *://www.so.com/s*
// @match         *://cn.bing.com/search*
// @match         *://sspai.com/link*
// @match         *://*.kdocs.cn/office/link*
// @match         *://ispacesoft.com/*.html
// @match         *://tv.wandhi.com/go.html*
// @match         *://tv.wandhi.com/check.html
// @match         *://*.xiaohongshu.com/explore*
// @match         *://www.yuque.com/r/goto*
// @match         *://blog.51cto.com/transfer*
// @match         *://r.wjx.com/redirect.aspx*
// @match         *://www.infoq.cn/link*
// @match         *://open.work.weixin.qq.com/wwopen/uriconfirm?uri=
// @match         *://link.gitcode.com/?target=*
// @require       https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require       https://lib.baomitu.com/limonte-sweetalert2/11.4.7/sweetalert2.all.min.js
// @require       https://lib.baomitu.com/echarts/4.6.0/echarts.min.js
// @require       https://lib.baomitu.com/layer/2.3/layer.js
// @require       https://lib.baomitu.com/qrcode-generator/1.4.4/qrcode.min.js
// @require       https://lib.baomitu.com/FileSaver.js/2.0.5/FileSaver.min.js
// @require       https://lib.baomitu.com/viewerjs/1.11.3/viewer.min.js
// @require       https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.production.min.js
// @require       https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.production.min.js
// @require       https://registry.npmmirror.com/@douyinfe/semi-ui/2.51.0/files/dist/umd/semi-ui.min.js
// @grant         GM_setClipboard
// @grant         unsafeWindow
// @grant         GM_xmlhttpRequest
// @grant         GM_info
// @grant         GM_cookie
// @grant         GM_addStyle
// @grant         GM.addStyle
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM.getValue
// @grant         GM.setValue
// @grant         GM_notification
// @grant         GM_openInTab
// @grant         GM_deleteValue
// @grant         GM_registerMenuCommand
// @grant         GM_unregisterMenuCommand
// @grant         GM_download
// @connect       api.wandhi.com
// @connect       api.huizhek.com
// @connect       cdn.jsdelivr.net
// @connect       tool.manmanbuy.com
// @connect       gwdang.com
// @connect       scriptcat.org
// @connect       quark.cn
// @connect       openapi.baidu.com
// @connect       localhost
// @connect       pan.baidu.com
// @connect       api.bilibili.com
// @compatible    firefox
// @compatible    chrome
// @compatible    opera safari edge
// @compatible    safari
// @compatible    edge
// @run-at        document-end
// @antifeature   referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。
// ==/UserScript==

(function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(require("react-dom"), require("sweetalert2"), require("@douyinfe/semi-ui"), require("viewerjs"), require("react")) : "function" == typeof define && define.amd ? define([ "react-dom", "sweetalert2", "@douyinfe/semi-ui", "viewerjs", "react" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).ReactDOM, global.Swal, global.SemiUI, global.Viewer, global.React);
})(this, (function(ReactDOM, Swal, semiUi, Viewer, React) {
    "use strict";
    var ReactDOM__default, Swal__default, Viewer__default, React__default, extendStatics, update_key, Min, Hour, Day, Week, BrowerType, Logger, LogLevel, VersionResult, Core, VersionCompar, Config, AjaxOption, Http, HttpHeaders, Route, css_248z$a, ConfigEnum, Common, PluginBase, SiteEnum, UpdateService, EventHelper, Runtime, BaseCoupon, VpCoupon, SuningCoupon, JdCoupon, TaoCoupon, DefCoupon, LinesOption, css_248z$9, MsgInfo, PromoInfo, HistoryService, KaolaCoupon, css_248z$8, sAlert, commonjsGlobal, fingerprint2, headStyle, isChrome, isIE, hasWeakMap, ua, isNativeObject, checkFunctions, DynamicDetails, SignInfo, Base64, GwdService, GwdHelper, css_248z$7, TaoBaoService, container, Container, css_248z$6, Toast, BiliImgService, Menu$2, jks, MovieService, JdService, UrlHelper, MusicService, ItemType, Tao, ListService, css_248z$5, CsdnAdService, Alert, Menu$1, WenKuService, LinkJumpService, css_248z$4, _GwdService, AutoExpandService, BIliTools, BiliMobileService, AliyunPanToken, css_248z$3, css_248z$2, MfbMenu, MfbModel, YoutubeService, SettingService, ControlMenuService, SearchService, QuarkFileResponse, Quark, NetDiskDirectService, AdClearService, css_248z$1, ImgViewService, css_248z, ZhihuService, Menu, XhsService, SettingUI, SettingUIService, OneKeyVipInjection;
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
    function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports;
    }
    function isPhantomjs() {
        var err = "";
        try {
            null[0]();
        } catch (e) {
            err = e;
        }
        return err.stack.indexOf("phantomjs") > -1;
    }
    function IsSupportLocalStorage() {
        try {
            return localStorage.a = "b", "b" === localStorage.a;
        } catch (e) {
            return !1;
        }
    }
    function IsSupportWebGL() {
        var webglContext, i;
        try {
            return (webglContext = document.createElement("canvas").getContext("webgl")) && (i = webglContext.getExtension("WEBGL_lose_context")) && i.loseContext(), 
            !!webglContext;
        } catch (e) {
            return !1;
        }
    }
    ReactDOM__default = _interopDefaultLegacy(ReactDOM), Swal__default = _interopDefaultLegacy(Swal), 
    Viewer__default = _interopDefaultLegacy(Viewer), React__default = _interopDefaultLegacy(React), 
    extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    }, update_key = "isUpdate", Min = 60, Hour = 60 * Min, Day = 24 * Hour, Week = 7 * Day, 
    function(BrowerType) {
        BrowerType[BrowerType.Edge = 0] = "Edge", BrowerType[BrowerType.Edg = 1] = "Edg", 
        BrowerType[BrowerType.Chrome = 2] = "Chrome", BrowerType[BrowerType.Firefox = 3] = "Firefox", 
        BrowerType[BrowerType.Safiri = 4] = "Safiri", BrowerType[BrowerType.Se360 = 5] = "Se360", 
        BrowerType[BrowerType.Ie2345 = 6] = "Ie2345", BrowerType[BrowerType.Baidu = 7] = "Baidu", 
        BrowerType[BrowerType.Liebao = 8] = "Liebao", BrowerType[BrowerType.UC = 9] = "UC", 
        BrowerType[BrowerType.QQ = 10] = "QQ", BrowerType[BrowerType.Sogou = 11] = "Sogou", 
        BrowerType[BrowerType.Opera = 12] = "Opera", BrowerType[BrowerType.Maxthon = 13] = "Maxthon";
    }(BrowerType || (BrowerType = {})), Logger = function() {
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
    }(LogLevel || (LogLevel = {})), function(VersionResult) {
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
    }(), VersionCompar = function() {
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
    }(), Config = function() {
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
    }(), Http = function() {
        function Http() {}
        return Http.ajax = function(option) {
            var _a, _b, _c, head;
            option.headers.set("User-Agent", null !== (_a = unsafeWindow.navigator.userAgent) && void 0 !== _a ? _a : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"), 
            0 == option.headers.has("Accept") && option.headers.set("Accept", "application/atom+xml,application/xml,text/xml"), 
            head = new HttpHeaders, option.url.indexOf("wandhi") > 0 && (head.version = Config.env.script.version, 
            head.auth = null !== (_b = Config.env.script.author) && void 0 !== _b ? _b : "", 
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
            void 0 === time_out && (time_out = 10), new Promise((function(resolve, reject) {
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
            void 0 === time_out && (time_out = 10), new Promise((function(resolve, reject) {
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
            void 0 === time_out && (time_out = 10), new Promise((function(resolve, reject) {
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
                        resolve("");
                    },
                    method: "GET",
                    onerror: function(response) {
                        resolve("");
                    }
                });
            }));
        }, Http;
    }(), HttpHeaders = function HttpHeaders() {}, Route = function() {
        function Route() {}
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
        }, Route.queryHistoryV4Pre = function(url) {
            var _this = this;
            return new Promise((function(reso, reje) {
                _this.baseApi(url, new Map([]), (function(res) {
                    res.code ? reso(res) : reje(res);
                }));
            }));
        }, Route.queryHistoryV4 = function(url, pre, callback) {
            Http.JqGet(pre, (function(res) {
                Http.JqGet(url, callback, new Map([ [ ":authority", "browser.gwdang.com" ], [ "referer", unsafeWindow.window.location.origin ] ]));
            }));
        }, Route.queryBiliImg = function(aid, callback) {
            Http.getData(this.biliInfo + "?aid=" + aid, callback);
        }, Route.queryBiliDown = function(aid, cid, callback) {
            Http.get(this.bilidown + "?cid=" + cid + "&avid=" + aid + "&qn=112&fnval=4048&s=wandhi").then((function(res) {
                callback(res);
            }));
        }, Route.queryBiliDownWeb = function(aid, cid) {
            return Http.get("https://api.bilibili.com/x/player/wbi/playurl?avid=" + aid + "&cid=" + cid);
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
                        data.set("bdstoken", null === (_a = null == html ? void 0 : html.match(/name="bdstoken"\s+value="([^"]+)"/)) || void 0 === _a ? void 0 : _a[1]), 
                        data.set("client_id", null === (_b = null == html ? void 0 : html.match(/name="client_id"\s+value="([^"]+)"/)) || void 0 === _b ? void 0 : _b[1]), 
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
        }, Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", 
        Route.bili = "/tools/bili", Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", 
        Route.bilidown = "https://api.bilibili.com/x/player/wbi/playurl", Route.coupons = "/tb/infos/", 
        Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", Route.sn_coupons = "/sn/info", 
        Route.vp_coupons = "/vp/info", Route.kl_coupons = "/kl/info", Route;
    }(), css_248z$a = 'html .aside-nav {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    font-size: 62.5%\n}\n\nbody .aside-nav {\n    font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;\n    margin: 0;\n    font-size: 1.6rem;\n    color: #4e546b\n}\n\n.aside-nav-LT {\n    top: 0 !important;\n}\n\n.aside-nav-LC {\n    top: 40% !important;\n}\n\n.aside-nav-LB {\n    bottom: 0 !important;\n}\n\n\n.aside-nav {\n    position: fixed;\n    bottom: 0;\n    left: -47px;\n    width: 260px;\n    height: 260px;\n    -webkit-filter: url(#goo);\n    filter: url(#goo);\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    opacity: .75;\n    z-index: 99999\n}\n\n.aside-nav.no-filter {\n    -webkit-filter: none;\n    filter: none\n}\n\n.aside-nav .aside-menu {\n    position: absolute;\n    width: 70px;\n    height: 70px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background: #f34444;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    text-align: center;\n    line-height: 70px;\n    color: #fff;\n    font-size: 20px;\n    z-index: 1;\n    cursor: move\n}\n\n.aside-nav .menu-item {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #ff7676;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 60px;\n    text-align: center;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    text-decoration: none;\n    color: #fff;\n    -webkit-transition: background .5s, -webkit-transform .6s;\n    transition: background .5s, -webkit-transform .6s;\n    -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n    transition: transform .6s, background .5s;\n    transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n.aside-nav .menu-item:hover {\n    background: #a9c734\n}\n\n.aside-nav .menu-line {\n    line-height: 20px;\n    padding-top: 10px\n}\n\n.aside-nav:hover {\n    opacity: 1\n}\n\n.aside-nav:hover .aside-menu {\n    -webkit-animation: jello 1s;\n    -moz-animation: jello 1s;\n    animation: jello 1s\n}\n\n.aside-nav:hover .menu-first {\n    -webkit-transform: translate3d(0, -135%, 0);\n    -moz-transform: translate3d(0, -135%, 0);\n    transform: translate3d(0, -135%, 0)\n}\n\n.aside-nav:hover .menu-second {\n    -webkit-transform: translate3d(120%, -70%, 0);\n    -moz-transform: translate3d(120%, -70%, 0);\n    transform: translate3d(120%, -70%, 0)\n}\n\n.aside-nav:hover .menu-third {\n    -webkit-transform: translate3d(120%, 70%, 0);\n    -moz-transform: translate3d(120%, 70%, 0);\n    transform: translate3d(120%, 70%, 0)\n}\n\n.aside-nav:hover .menu-fourth {\n    -webkit-transform: translate3d(0, 135%, 0);\n    -moz-transform: translate3d(0, 135%, 0);\n    transform: translate3d(0, 135%, 0)\n}\n\n@-webkit-keyframes jello {\n\n    from,\n    11.1%,\n    to {\n        -webkit-transform: none;\n        transform: none\n    }\n\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@-moz-keyframes jello {\n\n    from,\n    11.1%,\n    to {\n        -moz-transform: none;\n        transform: none\n    }\n\n    22.2% {\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n\n    33.3% {\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n\n    44.4% {\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n\n    55.5% {\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n\n    66.6% {\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n\n    77.7% {\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n\n    88.8% {\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@keyframes jello {\n\n    from,\n    11.1%,\n    to {\n        -webkit-transform: none;\n        -moz-transform: none;\n        transform: none\n    }\n\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n    -moz-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both\n}\n\n@-webkit-keyframes bounceInUp {\n\n    from,\n    60%,\n    75%,\n    90%,\n    to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@-moz-keyframes bounceInUp {\n\n    from,\n    60%,\n    75%,\n    90%,\n    to {\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n\n    from {\n        opacity: 0;\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n\n    60% {\n        opacity: 1;\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n\n    75% {\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n\n    90% {\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n\n    to {\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@keyframes bounceInUp {\n\n    from,\n    60%,\n    75%,\n    90%,\n    to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.bounceInUp {\n    -webkit-animation-name: bounceInUp;\n    -moz-animation-name: bounceInUp;\n    animation-name: bounceInUp;\n    -webkit-animation-delay: 1s;\n    -moz-animation-delay: 1s;\n    animation-delay: 1s\n}', 
    styleInject(css_248z$a), function(ConfigEnum) {
        ConfigEnum.WangPan_Aria_Host = "WangPan_Aria_Host", ConfigEnum.WangPan_Aria_Port = "WangPan_Aria_Port", 
        ConfigEnum.WangPan_Aria_Token = "WangPan_Aria_Token", ConfigEnum.WangPan_Aria_Path = "WangPan_Aria_Path", 
        ConfigEnum.WangPan_Aria_Dir = "WangPan_Aria_Dir", ConfigEnum.Jiexi_Cus_Interface = "Jiexi_Cus_Interface", 
        ConfigEnum.Jiexi_Cus_Postion = "Jiexi_Cus_Postion", ConfigEnum.Jiexi_Interface_Last_Play = "Jiexi_Interface_Last_Play", 
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
        ConfigEnum.Search_OptMenuPos = "search_opt_menu_pos", ConfigEnum.Search_Helper_Postion = "search_helper_postion";
    }(ConfigEnum || (ConfigEnum = {})), function(Common) {
        var Menu = function() {
            function Menu() {
                this.core = new Core, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelector = "#Wandhi-nav";
            }
            return Menu.prototype.loader = function() {}, Menu.prototype.getBody = function(option) {
                return '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated aside-nav-' + Config.get(ConfigEnum.Jiexi_Cus_Postion, "LC") + '" id="Wandhi-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label>' + option + "</div>";
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
                }, asideNav = $(this.menuSelector)[0], $("body").on("mousedown", "" + that.menuSelector, (function(a) {
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
                })).on("mouseup", "" + that.menuSelector, (function() {
                    drags.down = !1, $(document).off("mousemove");
                })), Menu.fullScreenMirror(), callback.call(this));
            }, Menu.fullScreenMirror = function() {
                unsafeWindow.document.onfullscreenchange = function(e) {
                    Logger.debug("fullElement:" + unsafeWindow.document.fullscreenElement), Menu.autoHide && (unsafeWindow.document.fullscreenElement ? $("#" + Menu.mainId).hide() : $("#" + Menu.mainId).show());
                };
            }, Menu.close = function() {
                Menu.autoHide = !1, $("#" + Menu.mainId).hide();
            }, Menu.mainId = "Wandhi-nav", Menu.autoHide = !0, Menu;
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
        SiteEnum.InfoQ = "InfoQ", SiteEnum.WeChatWork = "WeChatWork", SiteEnum.KuaKeShare = "KuaKeShare", 
        SiteEnum.GitCode = "GitCode";
    }(SiteEnum || (SiteEnum = {})), UpdateService = function(_super) {
        function UpdateService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.All, /(.*)/i ] ]), _this._unique = !1, 
            _this._appName = "update", _this;
        }
        return __extends(UpdateService, _super), UpdateService.prototype.loader = function() {}, 
        UpdateService.prototype.run = function() {
            if (!Config.get(update_key, !1)) {
                var current = new VersionCompar(Config.env.script.version);
                this.scriptCat(current);
            }
        }, UpdateService.prototype.scriptCat = function(current) {
            var _this = this;
            Http.get("https://scriptcat.org/api/v2/scripts/72", new Map, new Map, !1).then((function(r) {
                return __awaiter(_this, void 0, void 0, (function() {
                    var version, msg, _a, _b, _c;
                    return __generator(this, (function(_d) {
                        switch (_d.label) {
                          case 0:
                            return version = new VersionCompar(null === (_c = null === (_b = null == r ? void 0 : r.data) || void 0 === _b ? void 0 : _b.script) || void 0 === _c ? void 0 : _c.version), 
                            Logger.debug("\u5f53\u524d\u7248\u672c:[" + current.versionString + "],\u6700\u65b0\u7248\u672c:[" + version.versionString + "]"), 
                            version.compareTo(current) !== VersionResult.greater ? [ 3, 2 ] : (_a = "\u65b0\u7248\u672c<span>" + version.versionString + '</span>\u5df2\u53d1\u5e03.<a class="link" target="_blank" href="', 
                            [ 4, Route.RouteConfig() ]);

                          case 1:
                            msg = _a + _d.sent().home_url_update + '">\u67e5\u770b</a><br><a id="new-version-link" class="link" href="' + UpdateService.install_url_two + '" target="_blank">\u5b89\u88c5</a>', 
                            GM_addStyle(".swal2-popup{font-size: 16px !important}"), Swal__default.default.fire({
                                toast: !0,
                                position: "bottom-left",
                                icon: "success",
                                showConfirmButton: !0,
                                confirmButtonText: "\u4eca\u5929\u5173\u95ed",
                                showCancelButton: !0,
                                cancelButtonText: "\u6c38\u4e45\u5173\u95ed",
                                showCloseButton: !0,
                                title: "\u68c0\u67e5\u66f4\u65b0",
                                html: msg
                            }).then((function(result) {
                                Logger.info(result), result.isConfirmed ? Config.set(update_key, !0, Day) : result.isDismissed && Config.set(update_key, !0, 365 * Day);
                            })), _d.label = 2;

                          case 2:
                            return Config.set(update_key, !0, Hour), [ 2 ];
                        }
                    }));
                }));
            }));
        }, UpdateService.install_url_two = "https://scriptcat.org/script-show-page/72", 
        UpdateService;
    }(PluginBase), EventHelper = function() {
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
                Core.autoLazyload((function() {
                    var _a;
                    return (null === (_a = $('[class^="BasicContent--"] [class^="detailInfoWrap--"]')) || void 0 === _a ? void 0 : _a.length) > 0;
                }), (function() {
                    $('[class^="BasicContent--"] [class^="detailInfoWrap--"]').before(html), resolve(!0);
                }), .2);
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
    }(BaseCoupon), LinesOption = function LinesOption() {}, css_248z$9 = "#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none;\n    flex: 1;\n}\n\n#vip-plugin-outside .vip-plugin-outside-toolbar {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    z-index: 10000;\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode svg {\n    margin: 0 auto;\n    height: 150px;\n    width: 150px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history,\n#vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    /* width: 500px; */\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2 !important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n\n.vip-plugin-outside-similar-buy-list-li-store {\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}", 
    styleInject(css_248z$9), MsgInfo = function MsgInfo() {}, PromoInfo = function PromoInfo() {
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
    }(BaseCoupon), css_248z$8 = ".one-key-vip-container { z-index: 99999!important }\n.one-key-vip-popup { font-size: 14px !important }\n.one-key-vip-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 20px; }\n.one-key-vip-setting-checkbox { width: 16px;height: 16px; }\n", 
    styleInject(css_248z$8), sAlert = function() {
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
    }(), commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, 
    fingerprint2 = createCommonjsModule((function(module) {
        var context, definition;
        context = commonjsGlobal, definition = function() {
            var x64Add, x64Multiply, x64Rotl, x64LeftShift, x64Xor, x64Fmix, x64hash128, defaultOptions, each, map, extendSoft, enumerateDevicesKey, isEnumerateDevicesSupported, screenResolutionKey, getScreenResolution, availableScreenResolutionKey, getAvailableScreenResolution, sessionStorageKey, localStorageKey, indexedDbKey, cpuClassKey, platformKey, doNotTrackKey, canvasKey, webglKey, webglVendorAndRendererKey, adBlockKey, hasLiedLanguagesKey, hasLiedResolutionKey, hasLiedOsKey, hasLiedBrowserKey, flashFontsKey, pluginsComponent, getRegularPlugins, getIEPlugins, pluginsShouldBeSorted, touchSupportKey, hardwareConcurrencyKey, hasSessionStorage, hasLocalStorage, hasIndexedDB, getHardwareConcurrency, getNavigatorCpuClass, getNavigatorPlatform, getDoNotTrack, getTouchSupport, getCanvasFp, getWebglFp, getWebglVendorAndRenderer, getAdBlock, getHasLiedLanguages, getHasLiedResolution, getHasLiedOs, getHasLiedBrowser, isCanvasSupported, isWebGlSupported, isIE, isIEOrOldEdge, hasSwfObjectLoaded, hasMinFlashInstalled, addFlashDivNode, loadSwfAndDetectFonts, getWebglCanvas, loseWebglContext, components, Fingerprint2;
            return void 0 === Array.isArray && (Array.isArray = function(obj) {
                return "[object Array]" === Object.prototype.toString.call(obj);
            }), x64Add = function x64Add(m, n) {
                m = [ m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1] ], n = [ n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1] ];
                var o = [ 0, 0, 0, 0 ];
                return o[3] += m[3] + n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] + n[2], 
                o[1] += o[2] >>> 16, o[2] &= 65535, o[1] += m[1] + n[1], o[0] += o[1] >>> 16, o[1] &= 65535, 
                o[0] += m[0] + n[0], o[0] &= 65535, [ o[0] << 16 | o[1], o[2] << 16 | o[3] ];
            }, x64Multiply = function x64Multiply(m, n) {
                m = [ m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1] ], n = [ n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1] ];
                var o = [ 0, 0, 0, 0 ];
                return o[3] += m[3] * n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] * n[3], 
                o[1] += o[2] >>> 16, o[2] &= 65535, o[2] += m[3] * n[2], o[1] += o[2] >>> 16, o[2] &= 65535, 
                o[1] += m[1] * n[3], o[0] += o[1] >>> 16, o[1] &= 65535, o[1] += m[2] * n[2], o[0] += o[1] >>> 16, 
                o[1] &= 65535, o[1] += m[3] * n[1], o[0] += o[1] >>> 16, o[1] &= 65535, o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0], 
                o[0] &= 65535, [ o[0] << 16 | o[1], o[2] << 16 | o[3] ];
            }, x64Rotl = function x64Rotl(m, n) {
                return 32 == (n %= 64) ? [ m[1], m[0] ] : n < 32 ? [ m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n ] : (n -= 32, 
                [ m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n ]);
            }, x64LeftShift = function x64LeftShift(m, n) {
                return 0 == (n %= 64) ? m : n < 32 ? [ m[0] << n | m[1] >>> 32 - n, m[1] << n ] : [ m[1] << n - 32, 0 ];
            }, x64Xor = function x64Xor(m, n) {
                return [ m[0] ^ n[0], m[1] ^ n[1] ];
            }, x64Fmix = function x64Fmix(h) {
                return h = x64Xor(h, [ 0, h[0] >>> 1 ]), h = x64Multiply(h, [ 4283543511, 3981806797 ]), 
                h = x64Xor(h, [ 0, h[0] >>> 1 ]), h = x64Multiply(h, [ 3301882366, 444984403 ]), 
                h = x64Xor(h, [ 0, h[0] >>> 1 ]);
            }, x64hash128 = function x64hash128(key, seed) {
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
            }, each = function each(obj, iterator) {
                var i, l, key;
                if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) obj.forEach(iterator); else if (obj.length === +obj.length) for (i = 0, 
                l = obj.length; i < l; i++) iterator(obj[i], i, obj); else for (key in obj) obj.hasOwnProperty(key) && iterator(obj[key], key, obj);
            }, map = function map(obj, iterator) {
                var results = [];
                return null == obj ? results : Array.prototype.map && obj.map === Array.prototype.map ? obj.map(iterator) : (each(obj, (function(value, index, list) {
                    results.push(iterator(value, index, list));
                })), results);
            }, extendSoft = function extendSoft(target, source) {
                var value, key;
                if (null == source) return target;
                for (key in source) null == (value = source[key]) || Object.prototype.hasOwnProperty.call(target, key) || (target[key] = value);
                return target;
            }, enumerateDevicesKey = function enumerateDevicesKey(done, options) {
                if (!isEnumerateDevicesSupported()) return done(options.NOT_AVAILABLE);
                navigator.mediaDevices.enumerateDevices().then((function(devices) {
                    done(devices.map((function(device) {
                        return "id=" + device.deviceId + ";gid=" + device.groupId + ";" + device.kind + ";" + device.label;
                    })));
                })).catch((function(error) {
                    done(error);
                }));
            }, isEnumerateDevicesSupported = function isEnumerateDevicesSupported() {
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
            }, screenResolutionKey = function screenResolutionKey(done, options) {
                done(getScreenResolution(options));
            }, getScreenResolution = function getScreenResolution(options) {
                var resolution = [ window.screen.width, window.screen.height ];
                return options.screen.detectScreenOrientation && resolution.sort().reverse(), resolution;
            }, availableScreenResolutionKey = function availableScreenResolutionKey(done, options) {
                done(getAvailableScreenResolution(options));
            }, getAvailableScreenResolution = function getAvailableScreenResolution(options) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var available = [ window.screen.availHeight, window.screen.availWidth ];
                    return options.screen.detectScreenOrientation && available.sort().reverse(), available;
                }
                return options.NOT_AVAILABLE;
            }, sessionStorageKey = function sessionStorageKey(done, options) {
                done(hasSessionStorage(options));
            }, localStorageKey = function localStorageKey(done, options) {
                done(hasLocalStorage(options));
            }, indexedDbKey = function indexedDbKey(done, options) {
                done(hasIndexedDB(options));
            }, cpuClassKey = function cpuClassKey(done, options) {
                done(getNavigatorCpuClass(options));
            }, platformKey = function platformKey(done, options) {
                done(getNavigatorPlatform(options));
            }, doNotTrackKey = function doNotTrackKey(done, options) {
                done(getDoNotTrack(options));
            }, canvasKey = function canvasKey(done, options) {
                isCanvasSupported() ? done(getCanvasFp(options)) : done(options.NOT_AVAILABLE);
            }, webglKey = function webglKey(done, options) {
                isWebGlSupported() ? done(getWebglFp()) : done(options.NOT_AVAILABLE);
            }, webglVendorAndRendererKey = function webglVendorAndRendererKey(done) {
                isWebGlSupported() ? done(getWebglVendorAndRenderer()) : done();
            }, adBlockKey = function adBlockKey(done) {
                done(getAdBlock());
            }, hasLiedLanguagesKey = function hasLiedLanguagesKey(done) {
                done(getHasLiedLanguages());
            }, hasLiedResolutionKey = function hasLiedResolutionKey(done) {
                done(getHasLiedResolution());
            }, hasLiedOsKey = function hasLiedOsKey(done) {
                done(getHasLiedOs());
            }, hasLiedBrowserKey = function hasLiedBrowserKey(done) {
                done(getHasLiedBrowser());
            }, flashFontsKey = function flashFontsKey(done, options) {
                return hasSwfObjectLoaded() ? hasMinFlashInstalled() ? options.fonts.swfPath ? void loadSwfAndDetectFonts((function(fonts) {
                    done(fonts);
                }), options) : done("missing options.fonts.swfPath") : done("flash not installed") : done("swf object not loaded");
            }, pluginsComponent = function pluginsComponent(done, options) {
                isIE() ? options.plugins.excludeIE ? done(options.EXCLUDED) : done(getIEPlugins(options)) : done(getRegularPlugins(options));
            }, getRegularPlugins = function getRegularPlugins(options) {
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
            }, getIEPlugins = function getIEPlugins(options) {
                var result = [];
                return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? result = map([ "AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1" ], (function(name) {
                    try {
                        return new window.ActiveXObject(name), name;
                    } catch (e) {
                        return options.ERROR;
                    }
                })) : result.push(options.NOT_AVAILABLE), navigator.plugins && (result = result.concat(getRegularPlugins(options))), 
                result;
            }, pluginsShouldBeSorted = function pluginsShouldBeSorted(options) {
                var i, l, re, should = !1;
                for (i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) if (re = options.plugins.sortPluginsFor[i], 
                navigator.userAgent.match(re)) {
                    should = !0;
                    break;
                }
                return should;
            }, touchSupportKey = function touchSupportKey(done) {
                done(getTouchSupport());
            }, hardwareConcurrencyKey = function hardwareConcurrencyKey(done, options) {
                done(getHardwareConcurrency(options));
            }, hasSessionStorage = function hasSessionStorage(options) {
                try {
                    return !!window.sessionStorage;
                } catch (e) {
                    return options.ERROR;
                }
            }, hasLocalStorage = function hasLocalStorage(options) {
                try {
                    return !!window.localStorage;
                } catch (e) {
                    return options.ERROR;
                }
            }, hasIndexedDB = function hasIndexedDB(options) {
                if (isIEOrOldEdge()) return options.EXCLUDED;
                try {
                    return !!window.indexedDB;
                } catch (e) {
                    return options.ERROR;
                }
            }, getHardwareConcurrency = function getHardwareConcurrency(options) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : options.NOT_AVAILABLE;
            }, getNavigatorCpuClass = function getNavigatorCpuClass(options) {
                return navigator.cpuClass || options.NOT_AVAILABLE;
            }, getNavigatorPlatform = function getNavigatorPlatform(options) {
                return navigator.platform ? navigator.platform : options.NOT_AVAILABLE;
            }, getDoNotTrack = function getDoNotTrack(options) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : options.NOT_AVAILABLE;
            }, getTouchSupport = function getTouchSupport() {
                var touchEvent, maxTouchPoints = 0;
                void 0 !== navigator.maxTouchPoints ? maxTouchPoints = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (maxTouchPoints = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), touchEvent = !0;
                } catch (_) {
                    touchEvent = !1;
                }
                return [ maxTouchPoints, touchEvent, "ontouchstart" in window ];
            }, getCanvasFp = function getCanvasFp(options) {
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
            }, getWebglFp = function getWebglFp() {
                var result, vShaderTemplate, fShaderTemplate, vertexPosBuffer, vertices, program, vshader, fshader, extensionDebugRendererInfo, fa2s = function fa2s(fa) {
                    return gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), 
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + fa[0] + ", " + fa[1] + "]";
                }, maxAnisotropy = function maxAnisotropy(gl) {
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
            }, getWebglVendorAndRenderer = function getWebglVendorAndRenderer() {
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
            }, getAdBlock = function getAdBlock() {
                var result, ads = document.createElement("div");
                ads.innerHTML = "&nbsp;", ads.className = "adsbox", result = !1;
                try {
                    document.body.appendChild(ads), result = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, 
                    document.body.removeChild(ads);
                } catch (e) {
                    result = !1;
                }
                return result;
            }, getHasLiedLanguages = function getHasLiedLanguages() {
                if (void 0 !== navigator.languages) try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;
                } catch (err) {
                    return !0;
                }
                return !1;
            }, getHasLiedResolution = function getHasLiedResolution() {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
            }, getHasLiedOs = function getHasLiedOs() {
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
            }, getHasLiedBrowser = function getHasLiedBrowser() {
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
            }, isCanvasSupported = function isCanvasSupported() {
                var elem = document.createElement("canvas");
                return !(!elem.getContext || !elem.getContext("2d"));
            }, isWebGlSupported = function isWebGlSupported() {
                if (!isCanvasSupported() || !window.WebGLRenderingContext) return !1;
                var glContext = getWebglCanvas();
                if (glContext) {
                    try {
                        loseWebglContext(glContext);
                    } catch (e) {}
                    return !0;
                }
                return !1;
            }, isIE = function isIE() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
            }, isIEOrOldEdge = function isIEOrOldEdge() {
                return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2;
            }, hasSwfObjectLoaded = function hasSwfObjectLoaded() {
                return void 0 !== window.swfobject;
            }, hasMinFlashInstalled = function hasMinFlashInstalled() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0");
            }, addFlashDivNode = function addFlashDivNode(options) {
                var node = document.createElement("div");
                node.setAttribute("id", options.fonts.swfContainerId), document.body.appendChild(node);
            }, loadSwfAndDetectFonts = function loadSwfAndDetectFonts(done, options) {
                var id, flashvars, flashparams, hiddenCallback = "___fp_swf_loaded";
                window[hiddenCallback] = function(fonts) {
                    done(fonts);
                }, id = options.fonts.swfContainerId, addFlashDivNode(), flashvars = {
                    onReady: hiddenCallback
                }, flashparams = {
                    allowScriptAccess: "always",
                    menu: "false"
                }, window.swfobject.embedSWF(options.fonts.swfPath, id, "1", "1", "9.0.0", !1, flashvars, flashparams, {});
            }, getWebglCanvas = function getWebglCanvas() {
                var canvas = document.createElement("canvas"), gl = null;
                try {
                    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                } catch (e) {}
                return gl || (gl = null), gl;
            }, loseWebglContext = function loseWebglContext(context) {
                var loseContextExtension = context.getExtension("WEBGL_lose_context");
                null != loseContextExtension && loseContextExtension.loseContext();
            }, components = [ {
                key: "userAgent",
                getData: function UserAgent(done) {
                    done(navigator.userAgent);
                }
            }, {
                key: "webdriver",
                getData: function webdriver(done, options) {
                    done(null == navigator.webdriver ? options.NOT_AVAILABLE : navigator.webdriver);
                }
            }, {
                key: "language",
                getData: function languageKey(done, options) {
                    done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE);
                }
            }, {
                key: "colorDepth",
                getData: function colorDepthKey(done, options) {
                    done(window.screen.colorDepth || options.NOT_AVAILABLE);
                }
            }, {
                key: "deviceMemory",
                getData: function deviceMemoryKey(done, options) {
                    done(navigator.deviceMemory || options.NOT_AVAILABLE);
                }
            }, {
                key: "pixelRatio",
                getData: function pixelRatioKey(done, options) {
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
                getData: function timezoneOffset(done) {
                    done((new Date).getTimezoneOffset());
                }
            }, {
                key: "timezone",
                getData: function timezone(done, options) {
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
                getData: function addBehaviorKey(done) {
                    done(!!window.HTMLElement.prototype.addBehavior);
                }
            }, {
                key: "openDatabase",
                getData: function openDatabaseKey(done) {
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
                getData: function jsFontsKey(done, options) {
                    var extendedFontList, testString, testSize, h, baseFontsDiv, fontsDiv, defaultWidth, defaultHeight, createSpan, createSpanWithFonts, initializeFontsSpans, isFontAvailable, baseFontsSpans, index, length, fontsSpans, available, i, l, baseFonts = [ "monospace", "sans-serif", "serif" ], fontList = [ "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3" ];
                    for (options.fonts.extendedJsFonts && (extendedFontList = [ "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF" ], 
                    fontList = fontList.concat(extendedFontList)), fontList = (fontList = fontList.concat(options.fonts.userDefinedFonts)).filter((function(font, position) {
                        return fontList.indexOf(font) === position;
                    })), testString = "mmmmmmmmmmlli", testSize = "72px", h = document.getElementsByTagName("body")[0], 
                    baseFontsDiv = document.createElement("div"), fontsDiv = document.createElement("div"), 
                    defaultWidth = {}, defaultHeight = {}, createSpan = function createSpan() {
                        var s = document.createElement("span");
                        return s.style.position = "absolute", s.style.left = "-9999px", s.style.fontSize = testSize, 
                        s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "normal", 
                        s.style.lineBreak = "auto", s.style.lineHeight = "normal", s.style.textTransform = "none", 
                        s.style.textAlign = "left", s.style.textDecoration = "none", s.style.textShadow = "none", 
                        s.style.whiteSpace = "normal", s.style.wordBreak = "normal", s.style.wordSpacing = "normal", 
                        s.innerHTML = testString, s;
                    }, createSpanWithFonts = function createSpanWithFonts(fontToDetect, baseFont) {
                        var s = createSpan();
                        return s.style.fontFamily = "'" + fontToDetect + "'," + baseFont, s;
                    }, initializeFontsSpans = function initializeFontsSpans() {
                        var i, l, fontSpans, j, numDefaultFonts, s, spans = {};
                        for (i = 0, l = fontList.length; i < l; i++) {
                            for (fontSpans = [], j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) s = createSpanWithFonts(fontList[i], baseFonts[j]), 
                            fontsDiv.appendChild(s), fontSpans.push(s);
                            spans[fontList[i]] = fontSpans;
                        }
                        return spans;
                    }, isFontAvailable = function isFontAvailable(fontSpans) {
                        var i, detected = !1;
                        for (i = 0; i < baseFonts.length; i++) if (detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]) return detected;
                        return detected;
                    }, baseFontsSpans = function initializeBaseFontsSpans() {
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
                getData: function audioKey(done, options) {
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
            } ], (Fingerprint2 = function Fingerprint2(options) {
                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200");
            }).get = function(options, callback) {
                var keys, i, _chainComponents;
                callback ? options || (options = {}) : (callback = options, options = {}), extendSoft(options, defaultOptions), 
                options.components = options.extraComponents.concat(components), keys = {
                    data: [],
                    addPreprocessedComponent: function addPreprocessedComponent(key, value) {
                        "function" == typeof options.preprocessor && (value = options.preprocessor(key, value)), 
                        keys.data.push({
                            key: key,
                            value: value
                        });
                    }
                }, i = -1, (_chainComponents = function chainComponents(alreadyWaited) {
                    if ((i += 1) >= options.components.length) callback(keys.data); else {
                        var component = options.components[i];
                        if (options.excludes[component.key]) _chainComponents(!1); else {
                            if (!alreadyWaited && component.pauseBefore) return i -= 1, void setTimeout((function() {
                                _chainComponents(!0);
                            }), 1);
                            try {
                                component.getData((function(value) {
                                    keys.addPreprocessedComponent(component.key, value), _chainComponents(!1);
                                }), options);
                            } catch (error) {
                                keys.addPreprocessedComponent(component.key, String(error)), _chainComponents(!1);
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
    isNativeObject = function(o) {
        return !!/native code/.test(o.toString.toString()) && !!/native code/.test(o.toString());
    }, checkFunctions = {
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
            return "callPhantom" in window || /PhantomJS/i.test(ua) || isPhantomjs();
        },
        _14: function _14() {
            return /python/i.test(navigator.appVersion);
        },
        _15: function _15() {
            return IsSupportLocalStorage();
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
            return IsSupportWebGL();
        },
        _31: function _31() {
            return null !== window.outerWidth && (window.outerWidth === document.documentElement.clientWidth || document.body.clientWidth);
        }
    }, DynamicDetails = function() {
        function DynamicDetails() {
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
        return DynamicDetails.prototype.packStaticFeatureValue = function() {
            var i, shift, set, value = 0;
            for (i in checkFunctions) {
                shift = parseInt(i.split("_")[1]) - 1, set = 0;
                try {
                    set = checkFunctions[i]() ? 1 : 0;
                } catch (e) {}
                value |= set << shift;
            }
            return value;
        }, DynamicDetails.prototype.touchStartFn = function(e) {
            this.touchEventTrusted = e.isTrusted, this.mouseEventCount++;
            var t = e.touches[0];
            this.touchPosition.x = 0 | t.clientX, this.touchPosition.y = 0 | t.clientY;
        }, DynamicDetails.prototype.touchMoveFn = function(e) {
            this.touchEventTrusted = e.isTrusted, this.mouseEventCount++;
        }, DynamicDetails.prototype.mouseMoveFn = function(e) {
            this.mouseEventTrusted = e.isTrusted, this.mouseEventCount++;
        }, DynamicDetails.prototype.mouseDownFn = function(e) {
            this.mouseEventTrusted = e.isTrusted, this.mouseEventCount++, this.mousePosition.x = e.clientX, 
            this.mousePosition.y = e.clientY, this.mouseDownCount++;
        }, DynamicDetails.prototype.mouseClickFn = function(e) {
            this.mouseEventTrusted = e.isTrusted, this.mouseEventCount++, this.mouseClickPosition.x = e.clientX, 
            this.mouseClickPosition.y = e.clientY;
        }, DynamicDetails.prototype.keyDownFn = function(e) {
            this.keyDownCount++;
        }, DynamicDetails.prototype.scrollFn = function(e) {
            this.scrollCount++;
        }, DynamicDetails.prototype.focusFn = function(e) {
            this.windowFocus = !0, this.windowBlur = !1;
        }, DynamicDetails.prototype.blurFn = function(e) {
            this.windowBlur = !0;
        }, DynamicDetails.prototype.getWebRTCIP = function(details) {
            var i, r, a, that = this, t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            t || (details.ip = 0), i = {
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
        }, DynamicDetails.prototype.extractIPFromWebRTCCandidate = function(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null;
        }, DynamicDetails.prototype.getDeviceOrientation = function(details) {
            window.addEventListener("deviceorientation", (function cb(event) {
                event.gamma && (details.deviceOrientationExists = !0), document.removeEventListener("deviceorientation", cb, !1);
            }), !1);
        }, DynamicDetails.prototype.getBatteryStatus = function(details) {
            navigator.getBattery && navigator.getBattery().then((function(battery) {
                battery && (details.batteryLevel = 100 * battery.level | 0);
            }));
        }, DynamicDetails.prototype.consoleCheckLoop = function() {
            var func = this.devtoolsCb.bind(this);
            func(), this.checkConsoleLoopHandle = setInterval((function(e) {
                func();
            }), 5e3);
        }, DynamicDetails.prototype.devtoolsCb = function() {
            var details = this, element = new Image;
            Object.defineProperty(element, "id", {
                get: function get() {
                    details.consoleWindowOpened = !0, clearInterval(details.checkConsoleLoopHandle);
                }
            });
        }, DynamicDetails.prototype.pack = function() {
            var numberToHex = function(n) {
                return n.toString(16);
            }, group1 = this.touchPosition.x + "," + this.touchPosition.y + "," + (this.touchEventTrusted ? 1 : 0), group2 = this.mouseEventCount + "," + this.mousePosition.x + "," + this.mousePosition.y + "," + this.mouseClickPosition.x + "," + this.mouseClickPosition.y + "," + this.mouseDownCount + "," + (this.mouseEventTrusted ? 1 : 0), group3 = this.keyDownCount + "," + this.scrollCount + "," + (this.windowBlur ? 1 : 0) + "," + (this.windowFocus ? 1 : 0), group4 = (this.consoleWindowOpened ? 1 : 0) + "," + numberToHex(this.ip) + "," + this.batteryLevel + "," + (this.deviceOrientationExists ? 1 : 0), group5 = "" + numberToHex(this.features), all = group1 + ";" + group2 + ";" + group3 + ";" + group4 + ";" + group5;
            return all;
        }, DynamicDetails.prototype.encode = function() {
            return Base64.encode(this.pack());
        }, DynamicDetails;
    }(), SignInfo = function() {
        function SignInfo() {
            this.details = new DynamicDetails, this.fp = "", this.initialize();
        }
        return SignInfo.prototype.initialize = function() {
            var k, r_1, that = this;
            try {
                (k = Config.get("gwdang-dfp-obj", "{}")) && (r_1 = JSON.parse(k), Object.keys(r_1).forEach((function(item) {
                    that.details[item] = r_1[item];
                })));
            } catch (e) {}
            window.requestIdleCallback ? window.requestIdleCallback((function() {
                that.collectMovement(that.details);
            })) : setTimeout((function() {
                that.collectMovement(that.details);
            }), 500), fingerprint2.get({
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
        }, SignInfo.prototype.collectMovement = function(details) {
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
        }, SignInfo;
    }(), Base64 = function() {
        function Base64() {}
        return Base64.encode = function(input) {
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "", i = 0;
            for (input = Base64._utf8_encode(input); i < input.length; ) enc1 = (chr1 = input.charCodeAt(i++)) >> 2, 
            enc2 = (3 & chr1) << 4 | (chr2 = input.charCodeAt(i++)) >> 4, enc3 = (15 & chr2) << 2 | (chr3 = input.charCodeAt(i++)) >> 6, 
            enc4 = 63 & chr3, isNaN(chr2) ? enc3 = enc4 = 64 : isNaN(chr3) && (enc4 = 64), output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            return output;
        }, Base64.decode = function(input) {
            var chr1, chr2, chr3, enc2, enc3, enc4, output = "", i = 0;
            for (input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < input.length; ) chr1 = this._keyStr.indexOf(input.charAt(i++)) << 2 | (enc2 = this._keyStr.indexOf(input.charAt(i++))) >> 4, 
            chr2 = (15 & enc2) << 4 | (enc3 = this._keyStr.indexOf(input.charAt(i++))) >> 2, 
            chr3 = (3 & enc3) << 6 | (enc4 = this._keyStr.indexOf(input.charAt(i++))), output += String.fromCharCode(chr1), 
            64 != enc3 && (output += String.fromCharCode(chr2)), 64 != enc4 && (output += String.fromCharCode(chr3));
            return output = Base64._utf8_decode(output);
        }, Base64._utf8_encode = function(string) {
            var utftext, n, c;
            for (string = string.replace(/\r\n/g, "\n"), utftext = "", n = 0; n < string.length; n++) (c = string.charCodeAt(n)) < 128 ? utftext += String.fromCharCode(c) : c > 127 && c < 2048 ? (utftext += String.fromCharCode(c >> 6 | 192), 
            utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224), 
            utftext += String.fromCharCode(c >> 6 & 63 | 128), utftext += String.fromCharCode(63 & c | 128));
            return utftext;
        }, Base64._utf8_decode = function(utftext) {
            for (var string = "", i = 0, c = 0, c2 = 0, c3 = 0; i < utftext.length; ) (c = utftext.charCodeAt(i)) < 128 ? (string += String.fromCharCode(c), 
            i++) : c > 191 && c < 224 ? (c2 = utftext.charCodeAt(i + 1), string += String.fromCharCode((31 & c) << 6 | 63 & c2), 
            i += 2) : (c2 = utftext.charCodeAt(i + 1), c3 = utftext.charCodeAt(i + 2), string += String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3), 
            i += 3);
            return string;
        }, Base64._keyStr = "ZLHUPIO4tAok06E/caWCmSFfKusy3nrjJRzDTvBgY7wdMlXp82NViGq=+Qheb91x5", 
        Base64;
    }(), GwdService = function(_super) {
        function GwdService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.TMall, /detail\.tmall\.com\/item\.htm/i ], [ SiteEnum.TaoBao, /item\.taobao\.com\//i ], [ SiteEnum.JingDong, /item\.(yiyaojd|jd)\.(com|hk)\/[0-9]*\.html/i ], [ SiteEnum.SuNing, /product\.suning\.com\//i ], [ SiteEnum.Vp, /detail\.vip\.com\//i ], [ SiteEnum.KaoLa, /goods\.kaola\.(com\.hk|com)/i ] ]), 
            _this._appName = "GwdService", _this.historyService = new HistoryService, _this.factory = new DefCoupon, 
            _this.itemUrl = "", _this;
        }
        return __extends(GwdService, _super), GwdService.prototype.loader = function() {
            new SignInfo;
        }, GwdService.prototype.run = function() {
            this.injectHistory();
        }, GwdService.prototype.injectHistory = function() {
            var _a, _b, _this = this;
            switch (Logger.debug(this.site), this.site) {
              case SiteEnum.TaoBao:
              case SiteEnum.TMall:
                this.factory = new TaoCoupon, this.itemUrl = "https://item.taobao.com/item.htm?id=" + Core.getPar("id"), 
                this.parentEleSelector = '[class^="BasicContent--"] [class^="detailInfoWrap--"]';
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
                res && _this.InitPriceHistory(), _this.factory.init_coupons && _this.factory.init_coupons(), 
                _this.autoResize();
            }));
        }, GwdService.prototype.autoResize = function() {
            var setChartWidth_1, that = this;
            that.parentEleSelector && (setChartWidth_1 = function() {
                var _a, _b, width;
                $(".vip-plugin-outside-chart-container") && (width = Number(null === (_a = $(that.parentEleSelector)) || void 0 === _a ? void 0 : _a.width()), 
                $(".vip-plugin-outside-chart-container").width(width - 240), Logger.info("\u56fe\u8868\u7ed8\u5236\u5bbd\u5ea6\u66f4\u65b0:" + width), 
                null === (_b = that.echartsObj) || void 0 === _b || _b.resize());
            }, Core.autoLazyload((function() {
                var _a, _b;
                return (null === (_a = $(that.parentEleSelector)) || void 0 === _a ? void 0 : _a.length) > 0 && Number(null === (_b = $(that.parentEleSelector)) || void 0 === _b ? void 0 : _b.width()) > 0;
            }), (function() {
                setChartWidth_1();
            }), .5), unsafeWindow.window.onresize = function() {
                Logger.info("\u9875\u9762\u5927\u5c0f\u53d8\u66f4"), setChartWidth_1();
            });
        }, GwdService.prototype.InitPriceHistory = function() {
            var _a, that, _this = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d"), 
            that = this, Route.queryHistoryV5(null !== (_a = that.itemUrl) && void 0 !== _a ? _a : Core.url).then((function(res) {
                Logger.debug(res.data), $(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                that.echartsObj = echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), that.theme()), 
                that.echartsObj.setOption(that.getChartOption(res.data)), that.chartMsg("");
            })).catch((function() {
                Route.queryHistoryV4(GwdHelper.get("https://browser.gwdang.com/extension/price_towards?url=" + encodeURIComponent(Core.url) + "&ver=1"), GwdHelper.get("https://browser.gwdang.com/brwext/permanent_id?version=2&default_style=bottom&referrer=" + unsafeWindow.document.referrer), (function(data) {
                    var slContainer, msg = "";
                    Logger.debug(data), "price_status" in data ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                    that.echartsObj = echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()), 
                    that.echartsObj.setOption(that.getChartOptionGwd(data)), that.chartMsg(msg)) : ("is_ban" in data && 1 == data.is_ban && (1 != Config.get("gwd_verify_close") ? (sAlert.confirm("\u54ce\u54df\u4e0d\u9519\u54e6", "\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u5f02\u5e38,\u662f\u5426\u6253\u5f00\u9a8c\u8bc1\u9875\u9762\u8fdb\u884c\u9a8c\u8bc1?", "\u9a8c\u8bc1\u8d70\u8d77", "\u8001\u5b50\u4e0d\u770b", "info", "\u5c4f\u853d\u4e00\u5929").then((function(res) {
                        res.isConfirmed ? Core.open("https://browser.gwdang.com/slider/verify.html?fromUrl=" + encodeURIComponent(Core.url)) : res.isDenied && (Config.set("gwd_verify_close", 1, 86400), 
                        that.chartMsg("\u7528\u6237\u8868\u793a\u4e0d\u60f3\u770b\u5e76\u62d2\u7edd\u9a8c\u8bc1")), 
                        sAlert.close(res);
                    })), slContainer = ".swal2-container", "99999999999" != $(slContainer).css("z-index") && $(slContainer).css("z-index", "99999999999")) : that.chartMsg("\u7528\u6237\u5c4f\u853d\u4e86\u9a8c\u8bc1\u8868\u793a\u4e0d\u60f3\u770b")), 
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
        }, GwdService.prototype.getMinPrice = function(data) {
            var _a, min, min_1, minDate_1, analysisTxt = data.analysis.tip;
            return data.analysis.promo_days.length > 0 ? analysisTxt = analysisTxt + "\uff1a{red|\uffe5" + (min = data.analysis.promo_days[data.analysis.promo_days.length - 1]).price + "} ( {red|" + min.date + "} )" : (min_1 = Number.MIN_VALUE, 
            minDate_1 = 0, null === (_a = data.nopuzzle_promo) || void 0 === _a || _a.forEach((function(el) {
                el.price < min_1 && (min_1 = el.price, minDate_1 = el.time);
            })), Core.format(new Date(1e3 * minDate_1), "yyyy-MM-dd"), analysisTxt = analysisTxt + "\uff1a{red|" + min_1 + "} ( {red|" + minDate_1 + "} )"), 
            analysisTxt;
        }, GwdService.prototype.getChartOptionGwd = function(data) {
            var _a, _b, chartOption, step, line, text = this.getMinPrice(data), maxData = new PromoInfo, minData = new PromoInfo;
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
        }, GwdService.chartsWidth = !1, GwdService;
    }(PluginBase), GwdHelper = function() {
        function GwdHelper() {}
        return GwdHelper.get = function(url) {
            var from_type = "", G = GwdHelper;
            return GwdHelper.from_type && (from_type = "&from_type=" + GwdHelper.from_type), 
            (url = GwdHelper.wrap(url) + "version=" + (new Date).getTime() + "&from_device=" + G.from_device + from_type).includes("union=") || (url += "&union=" + G.union), 
            G.crc64 && (url += "&crc64=1"), url;
        }, GwdHelper.wrap = function(url) {
            var start, callback, format, fp, G = GwdHelper;
            return url ? (start = "?", callback = "callback=?&", url.indexOf("?") > -1 && (start = "&"), 
            format = "format=jsonp&", callback = "", format = "format=json&", fp = "", localStorage.getItem("gwdang-fp") && (fp = "fp=" + Config.get(G.gwd_fp_key) + "&dfp=" + Config.get(G.gwd_dfp_key) + "&"), 
            "" + url + start + callback + format + fp) : url;
        }, GwdHelper.version = "", GwdHelper.from_device = "default", GwdHelper.from_type = "", 
        GwdHelper.union = "union_gwdang", GwdHelper.crc64 = !0, GwdHelper.gwd_fp_key = "gwd_fp_key", 
        GwdHelper.gwd_dfp_key = "gwd_dfp_key", GwdHelper;
    }(), css_248z$7 = "#wandhi_div {\n  margin-top: 25px;\n}\n.wandhi_tab {\n  width: 100%;\n  font-family: PingFangSC-Regular;\n  font-weight: 400;\n  font-size: 14px;\n  border: 1px solid #f40;\n  border-collapse: collapse;\n}\n.wandhi_tab thead {\n  font-size: 14px;\n  text-align: center;\n}\n.wandhi_tab tr th {\n  padding: 10px 10px;\n  text-align: center;\n}\n.wandhi_tab tr td {\n  padding: 10px 10px;\n  text-align: center;\n  font-size: 14px;\n}\n.wandhi_tab tr td a {\n  text-decoration: none;\n}\n.wandhi_tab_taobao,\n.wandhi_tab_tmall {\n  margin-bottom: 15px;\n}\n.wandhi_tab_taobao thead,\n.wandhi_tab_tmall thead {\n  background-color: #f40;\n  color: #FFF;\n}\n.wandhi_tab_taobao tr td,\n.wandhi_tab_tmall tr td {\n  border: 1px solid #e6602d;\n  color: #e6602d;\n}\n.wandhi_tab_taobao tr td a,\n.wandhi_tab_tmall tr td a {\n  color: #e6602d;\n}\n.wandhi_tab_tmall thead {\n  background-color: #ff0036;\n}\n.wandhi_tab_tmall tr td {\n  border: 1px solid #ff0036;\n  color: #ff0036;\n}\n.wandhi_tab_tmall tr td a {\n  color: #ff0036;\n}\n.tb-prop .tb-img li a {\n  width: auto !important;\n  background-position-x: 5px !important;\n}\n.tb-prop .tb-img li span {\n  text-indent: 1em !important;\n  display: block !important;\n  padding: 0 5px !important;\n  margin-left: 35px;\n}\n", 
    styleInject(css_248z$7), TaoBaoService = function(_super) {
        function TaoBaoService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this._appName = "TaoBaoService", _this.rules = new Map([ [ SiteEnum.TaoBao, /taobao\.com\//i ], [ SiteEnum.TMall, /tmall\.(com|hk)\//i ] ]), 
            _this.UrlTag = "Wandhi_qLink", _this.historyService = new GwdService, _this;
        }
        return __extends(TaoBaoService, _super), TaoBaoService.prototype.loader = function() {}, 
        TaoBaoService.prototype.run = function() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }, TaoBaoService.prototype.init = function() {
            var _this = this, init = "<div id='wandhi_div'><table class='wandhi_tab " + (this.site == SiteEnum.TaoBao ? "wandhi_tab_taobao" : "wandhi_tab_tmall") + "' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";
            Core.autoLazyload((function() {
                var _a, _b;
                return (null === (_a = $('[class^="skuWrapper"]')) || void 0 === _a ? void 0 : _a.length) > 0 || (null === (_b = $('[class^="Price--"][class*=" hasBgImg--"]')) || void 0 === _b ? void 0 : _b.length) > 0;
            }), (function() {
                var itemId, key, d;
                $("#J_LinkBasket").parent().parent().prepend(init), $(".J_LinkAdd").parent().parent().prepend(init), 
                $("[class*=BasicContent--actions]").prepend(init), $(".beautify-scroll-bar").prepend(init), 
                itemId = Core.getPar("id"), key = "td_s_" + itemId, (d = Config.get(key, !1)) ? _this.initElement(d) : Route.queryCoupons(itemId, (function(data) {
                    Config.set(key, data, 43200), _this.initElement(data);
                }));
            }), .2);
        }, TaoBaoService.prototype.initElement = function(data) {
            var _a, row;
            $("#wandhi_table tbody tr").remove(), row = "", data.code && (null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0 && "string" != typeof data.data ? data.data.forEach((function(e) {
                row += "<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>";
            })) : row = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(row);
        }, TaoBaoService;
    }(PluginBase), container = new Map, Container = function() {
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
    }(), css_248z$6 = ".okv-btn {\n  display: inline-block;\n  padding: 6px 16px;\n  font-size: 12px;\n  outline: 0;\n  line-height: 1.5;\n  text-align: center;\n  white-space: nowrap;\n  border: 1px solid #c5d9e8;\n  border-top-color: #c5d9e8;\n  border-right-color: #c5d9e8;\n  border-bottom-color: #c5d9e8;\n  border-left-color: #c5d9e8;\n  border-radius: 0.7rem;\n  background-color: #fff;\n  -webkit-transition: background 0.2s;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n.okv-btn-primary {\n  border-color: #6190e8;\n  background-color: #6190e8;\n  color: #fff;\n}\n.okv-btn-primary:hover {\n  background-color: #79a1eb;\n  border-color: #79a1eb;\n}\n.okv-btn-primary:active {\n  background-color: #5782d1;\n  border-color: #5782d1;\n}\n.okv-btn-success {\n  border-color: #13ce66;\n  background-color: #13ce66;\n  color: #fff;\n}\n.okv-btn-success:hover {\n  background-color: #36d57d;\n  border-color: #36d57d;\n}\n.okv-btn-success:active {\n  background-color: #11b95c;\n  border-color: #11b95c;\n}\n.okv-btn-error {\n  border-color: #ff4949;\n  background-color: #ff4949;\n  color: #fff;\n}\n.okv-btn-error:hover {\n  background-color: #ff6464;\n  border-color: #ff6464;\n}\n.okv-btn-error:active {\n  background-color: #e64242;\n  border-color: #e64242;\n}\n.okv-bg-pink {\n  color: #fff;\n  border-color: #fff;\n  background-color: #fb7299;\n}\n.okv-bg-pink:hover {\n  background-color: #fc8bab;\n}\n.okv-tools-bili {\n  padding-top: 5px;\n}\n.video-info-detail {\n  flex-wrap: wrap !important;\n  overflow: unset !important;\n}\n.video-info-container {\n  height: 124px !important;\n}\n.okv-btn {\n  padding: 2px 16px !important;\n}\n.bili-top-button {\n  margin-right: 0.7rem;\n}\n.bili-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  overflow: hidden;\n}\n.bili-table td,\n.bili-table th {\n  height: 40px;\n  text-align: left;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  border-bottom: 1px solid #ececec;\n}\n.bili-table-cell {\n  padding: 0 16px;\n  border-bottom: 1px solid #ececec;\n}\n.at-table-tbody > tr:hover {\n  background-color: #f6fafe;\n}\n.bili-table-small {\n  font-size: 11px;\n}\n.bili-table-head {\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n}\n.bili-table-head tr th {\n  font-weight: 700;\n  text-align: left;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n", 
    styleInject(css_248z$6), Toast = function() {
        function Toast() {}
        return Toast.success = function(str, time, position) {
            void 0 === time && (time = 3), void 0 === position && (position = "top"), semiUi.Notification.success({
                content: str,
                duration: time,
                position: position
            });
        }, Toast.warning = function(str, time, position) {
            void 0 === time && (time = 3), void 0 === position && (position = "top"), semiUi.Notification.warning({
                content: str,
                duration: time,
                position: position,
                zIndex: 999999
            });
        }, Toast.error = function(str, time, position) {
            void 0 === time && (time = 3), void 0 === position && (position = "top"), semiUi.Notification.error({
                content: str,
                duration: time,
                position: position
            });
        }, Toast;
    }(), BiliImgService = function(_super) {
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
        }, BiliImgService.videoListHtml = function(videoList, audioList, duration, mp4s) {
            var sizeFormat, rows, _this = this;
            return void 0 === mp4s && (mp4s = []), sizeFormat = function(size) {
                void 0 === size && (size = 0);
                for (var unit = [ "B", "K", "M", "G" ], i = unit.length - 1, dex = Math.pow(1024, i), vor = Math.pow(1e3, i); dex > 1; ) {
                    if (size >= vor) {
                        size = Number((size / dex).toFixed(2));
                        break;
                    }
                    dex /= 1024, vor /= 1e3, i--;
                }
                return size ? size + unit[i] : "N/A";
            }, rows = "", videoList.forEach((function(e) {
                rows += '<tr>\n            <td class="bili-table-cell">\u89c6\u9891</td>\n            <td class="bili-table-cell">' + _this.getQuality(e.id) + '</td>\n            <td class="bili-table-cell">' + sizeFormat(e.bandwidth * duration / 8) + '</td>\n            <td class="bili-table-cell">' + e.frameRate + '</td>\n            <td class="bili-table-cell">' + e.codecs + '</td>\n            <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-video-item" data-url="' + e.baseUrl + '" data-type="1">\u4e0b\u8f7d</button></td>\n            </tr>';
            })), audioList.forEach((function(e) {
                rows += '<tr>\n            <td class="bili-table-cell">\u97f3\u9891</td>\n            <td class="bili-table-cell">' + _this.getQuality(e.id) + '</td>\n            <td class="bili-table-cell">' + sizeFormat(e.bandwidth * duration / 8) + '</td>\n            <td class="bili-table-cell">' + e.frameRate + '</td>\n            <td class="bili-table-cell">' + e.codecs + '</td>\n            <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-video-item" data-url="' + e.baseUrl + '" data-type="2">\u4e0b\u8f7d</button></td>\n            </tr>';
            })), mp4s.forEach((function(e) {
                rows = '<tr>\n            <td class="bili-table-cell">\u97f3\u89c6\u5df2\u5408\u5e76</td>\n            <td class="bili-table-cell">' + _this.getQuality(e.quality) + '</td>\n            <td class="bili-table-cell">' + sizeFormat(e.size) + '</td>\n            <td class="bili-table-cell">MP4</td>\n            <td class="bili-table-cell">MP4</td>\n            <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-video-item" data-url="' + e.url + '" data-type="1">\u4e0b\u8f7d</button></td>\n            </tr>' + rows;
            })), '\n<div style="height: 30rem">\n    <div style="margin-bottom: 20px">\u6ce8\u610f:\u97f3\u89c6\u9891\u662f<b style="color:red">\u5206\u5f00</b>\u7684,\u8bf7\u4e0b\u8f7d\u540e\u81ea\u884c\u5408\u5e76\uff0c\u5408\u5e76\u5de5\u5177\u5728<b>wiki\u7ad9</b>\u7684\u4e0b\u8f7d\u4e2d\u5fc3\u81ea\u884c\u5bfb\u627e</div>\n    <table class="bili-table bili-table-small">\n        <thead class="bili-table-head">\n            <tr>\n                <th class="bili-table-cell">\u7c7b\u578b</th>\n                <th class="bili-table-cell">\u54c1\u8d28</th>\n                <th class="bili-table-cell">\u5927\u5c0f</th>\n                <th class="bili-table-cell">\u7801\u7387</th>\n                <th class="bili-table-cell">\u7f16\u7801</th>\n                <th class="bili-table-cell">\u64cd\u4f5c</th>\n            </tr>\n        </thead>\n        <tbody class="at-table-tbody">                    \n            ' + rows + "\n        </tbody>    \n    </table>\n</div>";
        }, BiliImgService.prototype.loader = function() {}, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            Core.autoLazyload((function() {
                var _a, _b, _c, _d;
                return ((null === (_a = $(".reply-box-textarea")) || void 0 === _a ? void 0 : _a.length) > 0 || (null === (_b = $(".comment-submit")) || void 0 === _b ? void 0 : _b.length) > 0 || (null === (_c = $(".comment-container")) || void 0 === _c ? void 0 : _c.length) > 0 || (null === (_d = $("bili-comments")) || void 0 === _d ? void 0 : _d.length) > 0) && ($("#viewbox_report").append('<div class="video-info-detail-list okv-tools-bili"></div>'), 
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
                    res ? sAlert.showImg(res.pic, "\u662f\u5c01\u9762\u5566", "\u554a\u54c8\u54c8\u54c8\u3001\u5c01\u9762\u6765\u54af", "\u662f\u5c01\u9762\u9171\u5566>\u3002<", "\u4e0b\u8f7d").then((function() {
                        Core.open(res.pic);
                    })) : Toast.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                })).catch((function() {
                    Toast.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f", 5);
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
                    return __awaiter(_this, void 0, void 0, (function() {
                        var mp4s;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, Route.queryBiliDownWeb(aid, cid) ];

                              case 1:
                                return mp4s = _a.sent(), Route.queryBiliDown(aid, cid, (function(res) {
                                    var _a, _b, _c, _d, _e, r;
                                    (null === (_c = null === (_b = null === (_a = res.data) || void 0 === _a ? void 0 : _a.dash) || void 0 === _b ? void 0 : _b.video) || void 0 === _c ? void 0 : _c.length) > 0 ? (r = res, 
                                    (null === (_e = null === (_d = mp4s.data) || void 0 === _d ? void 0 : _d.durl) || void 0 === _e ? void 0 : _e.length) > 0 && (r.data.durl = mp4s.data.durl, 
                                    r.data.durl[0].quality = mp4s.data.quality), resolve(r)) : reject(res);
                                })), [ 2 ];
                            }
                        }));
                    }));
                }));
            })).then((function(res) {
                sAlert.html(title, _this.videoListHtml(res.data.dash.video, res.data.dash.audio, res.data.dash.duration, res.data.durl), !0, "\u6211\u597d\u4e86", "#3085d6", "40%").finally((function() {
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
                [ ".video-like", ".video-coin", ".video-fav" ].forEach((function(item) {
                    $(item).trigger("click");
                }));
            }));
        }, BiliImgService.coverBtn = '<button class="okv-btn okv-btn-primary okv-bg-pink bili-top-button" id="findimg">\u83b7\u53d6\u5c01\u9762</button>', 
        BiliImgService.downBtn = '<button id="downvideo" class="okv-btn okv-btn-primary okv-bg-pink bili-top-button">\u4e0b\u8f7d\u89c6\u9891</button>', 
        BiliImgService.tripleClickBtn = '<button class="okv-btn okv-btn-primary okv-bg-pink bili-top-button" id="tripleClick">\u4e00\u4e0b\u70b9\u4ee8(\u70b9\u8d5e\u3001\u6295\u5e01\u3001\u6536\u85cf)</button>', 
        BiliImgService.hookSelector = ".okv-tools-bili", BiliImgService;
    }(PluginBase), Menu$2 = Common.Menu, jks = [ {
        url: "https://www.ckplayer.vip/jiexi/?url=",
        title: "\u63a5\u53e3:Ckplayer"
    }, {
        url: "https://yparse.ik9.cc/index.php?url=",
        title: "\u63a5\u53e3:\u4e91\u6790"
    }, {
        url: "https://www.8090g.cn/?url=",
        title: "\u63a5\u53e3:8090"
    }, {
        title: "\u5256\u5143",
        url: "https://www.pouyun.com/?url="
    }, {
        url: "https://z1.m1907.top/?jx=",
        title: "\u73a9\u7684\u55e8\u2014\u201428-\u82e5\u63a5\u53e3\u5931\u6548\u53ef\u53cd\u9988\uff01QQ\u7fa4:340569308"
    }, {
        title: "\u76d8\u53e4",
        url: "https://www.pangujiexi.com/jiexi/?url="
    }, {
        title: "BL",
        url: "https://vip.bljiex.com/?v="
    }, {
        title: "play",
        url: "https://www.playm3u8.cn/jiexi.php?url="
    }, {
        title: "TV\u89e3\u6790[\u817e\u8baf (\u8292\u679c)]",
        url: "https://jx.m3u8.tv/jiexi/?url="
    }, {
        title: "JY",
        url: "https://jx.playerjy.com/?url="
    }, {
        title: "\u2478\u53f7\u89e3\u6790\u63a5\u53e3",
        url: "https://www.8090g.cn/jiexi/?url="
    }, {
        title: "\u867e\u7c731",
        url: "https://jx.xmflv.com/?url="
    }, {
        title: "\u867e\u7c732",
        url: "https://jx.xmflv.cc/?url="
    }, {
        title: "m1907",
        url: "https://im1907.top/?jx="
    }, {
        title: "8090",
        url: "https://www.8090g.cn/?url="
    }, {
        title: "\u51b0\u8c46",
        url: "https://bd.jx.cn/?url="
    }, {
        title: "\u7231\u8c46",
        url: "https://jx.xymp4.cc/?url="
    } ], MovieService = function(_super) {
        function MovieService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.YouKu, /youku\.com/i ], [ SiteEnum.IQiYi, /iqiyi|iq\.com/i ], [ SiteEnum.LeShi, /\.le\.com/i ], [ SiteEnum.Tencent_V, /v\.qq/i ], [ SiteEnum.TuDou, /tudou\.com/i ], [ SiteEnum.MangGuo, /mgtv\.com/i ], [ SiteEnum.SoHu, /sohu\.com/i ], [ SiteEnum.Acfun, /acfun\.com/i ], [ SiteEnum.BiliBili, /bilibili\.com/i ], [ SiteEnum.M1905, /1905\.com/i ], [ SiteEnum.PPTV, /pptv\.com/i ], [ SiteEnum.YinYueTai, /yinyuetai\.com/ ], [ SiteEnum.HiTv, /tv\.wandhi\.com\/go\.html/i ], [ SiteEnum.HiTvCheck, /tv\.wandhi\.com\/check\.html/i ] ]), 
            _this.jkPre = "\u81ea\u5b9a\u4e49\u63a5\u53e3\uff1a", _this.menu = new Common.Menu, 
            _this._unique = !1, _this._appName = "MovieService", _this;
        }
        return __extends(MovieService, _super), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
        }, MovieService.prototype.run = function() {
            switch (this.site) {
              case SiteEnum.HiTv:
                Logger.debug("HiTv\u89e3\u6790\u9875\u9762\uff0c\u52a0\u8f7d\u81ea\u5b9a\u4e49\u63a5\u53e3"), 
                this.cusInterFace(), this.lastPlay();
                break;

              case SiteEnum.HiTvCheck:
                this.jkCheck();
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
        }, MovieService.prototype.hashCode = function(str) {
            var i, hash = 0;
            if (0 === str.length) return hash;
            for (i = 0; i < str.length; i++) hash = (hash << 5) - hash + str.charCodeAt(i), 
            hash |= 0;
            return 2147483647 & hash;
        }, MovieService.prototype.jkCheck = function() {
            var _this = this, html = "";
            jks.forEach((function(item, index) {
                var id = _this.hashCode(item.title);
                html += '<div class="lbl">\n                <label for="name" id="' + id + '" class="valid-none" data-title="' + item.title + '" data-url="' + item.url + '">' + item.title + '<b style="color:red">(\u5f85\u68c0\u6d4b)</b></label>\n            </div>\n            <div class="ctrl">\n                <input type="text" name="name" data-required="true" data-validation="text"\n                    data-msg="Invalid Name" placeholder="Ex: John Donga" value="' + item.url + '" disabled>\n            </div>';
            })), $("#formbody").html(html), unsafeWindow.jks = jks, unsafeWindow.letcheckUrl = function(url) {
                return new Promise((function(resolve, reject) {
                    try {
                        unsafeWindow.fetch(new Request(url), {
                            mode: "no-cors"
                        }).then((function(res) {
                            Logger.debug(res, url), resolve(!0);
                        })).catch((function(e) {
                            Logger.debug(e, url), reject(!1);
                        }));
                    } catch (e) {
                        reject(!1);
                    }
                }));
            };
        }, MovieService.prototype.cusInterFace = function() {
            var _this = this, urls = Config.get(ConfigEnum.Jiexi_Cus_Interface), h = "";
            urls && (h = $("#jk").html(), urls.split("\n").forEach((function(e) {
                var datas = e.split("||");
                "https:" == unsafeWindow.location.protocol ? h += '<option value="' + datas[0].replace("http:", "https:") + '" selected="">' + _this.jkPre + datas[1] + "</option>" : h += '<option value="' + datas[0] + '" selected="">' + _this.jkPre + datas[1] + "</option>";
            }))), jks.forEach((function(e) {
                h += '<option value="' + e.url + '" selected="">' + e.title + "</option>";
            })), Logger.debug(h), $("#jk").html(h), Logger.debug(urls);
        }, MovieService.prototype.lastPlay = function() {
            var last, _this = this;
            $("#bf").on("click", (function() {
                var op = $("#jk option:selected"), url = op.val(), name = op.text().replace(_this.jkPre, "");
                Config.set(ConfigEnum.Jiexi_Interface_Last_Play, name), Config.set(ConfigEnum.Jiexi_Interface_Last_Play_Url, url);
            })), (last = Config.get(ConfigEnum.Jiexi_Interface_Last_Play_Url)) && $("#jk").val(last), 
            unsafeWindow.dihejk && $("#url").val() && unsafeWindow.dihejk();
        }, MovieService.prototype._onClick = function() {
            $("body").on("click", "[data-cat=process]", (function() {
                Core.open("http://tv.wandhi.com/go.html?url=" + encodeURIComponent(window.location.href));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Menu$2.close();
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
            Core.lazyload((function() {
                $("#choose-btns").prepend(btn), $(".btn-yhj").on("click", (function() {
                    Core.open("https://hdkcmsc73.kuaizhan.com/?cid=mzSOcMW#/search?keyword=" + encodeURIComponent(keywords));
                }));
            }), 1);
        }, JdService;
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
        return __extends(MusicService, _super), MusicService.prototype.loader = function() {}, 
        MusicService.prototype.run = function() {
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
                    html = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">', $.each(__INITIAL_STATE__.store.AlbumDetailTrackListV2.tracksInfo.tracks, (function(index, item) {
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
                } else /kugou\.com\/song/i.test(Runtime.url) && $("#myAudio") ? Core.open("http://music.wandhi.com/?type=kugou&id=" + $("#myAudio").attr("data-hash")) : /taihe.com/i.test(Runtime.url) ? Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url.replace("taihe", "baidu"))) : Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Core.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("https://shop.huizhek.com");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("https://shop.huizhek.com");
            }));
        }, MusicService;
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
                this.selectorList.push('a[class^="doubleCardWrapper"]'), this.selectorList.push('a[class*="doubleCardWrapper"]'), 
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
                        itemId = _j.sent(), _j.label = 2;

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
                        Tao.isValidTaoId(itemId) && (this.initBoxHtml($dom, itemId), this.initTagClass($dom, itemId), 
                        $dom.addClass("onekeyvip-box-done")), [ 2 ];
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
                    return !itemUrl || (Core.open(itemUrl), !1);
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
                return !quan.quan_link || (Core.open(quan.quan_link), !1);
            }));
        }, ListService.prototype.showQueryFind = function(selector, couponMoney) {
            selector.html('<a target="_blank" class="onekeyvip-box-info onekeyvip-box-info-find" title="\u5207\u6362\u900f\u660e\u5ea6">' + couponMoney + "\u5143\u5238</a>");
        }, ListService.prototype.showQueryEmpty = function(selector) {
            selector.addClass("onekeyvip-box-info-translucent"), selector.html('<a href="javascript:void(0);" class="onekeyvip-box-info onekeyvip-box-info-empty" title="\u5207\u6362\u900f\u660e\u5ea6">\u6682\u65e0\u4f18\u60e0</a>');
        }, ListService;
    }(PluginBase), css_248z$5 = "#content_views pre {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n#content_views pre code {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n.passport-login-container {\n    display: none !important;\n}\n", 
    styleInject(css_248z$5), CsdnAdService = function(_super) {
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
                var _a, _b;
                null === (_b = null === (_a = unsafeWindow.csdn) || void 0 === _a ? void 0 : _a.copyright) || void 0 === _b || (_b.textData = "");
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
    }(PluginBase), Alert = function() {
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
            return 1;
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
    }(), Menu$1 = Common.Menu, WenKuService = function(_super) {
        function WenKuService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.WenKu, /wenku\.baidu\.com\/view/i ] ]), 
            _this._unique = !1, _this.menu = new Common.Menu, _this._appName = "WenKu", _this;
        }
        return __extends(WenKuService, _super), WenKuService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js"), 
            Core.appendCss("https://registry.npmmirror.com/@douyinfe/semi-ui/2.51.0/files/dist/css/semi.min.css");
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
                title: "\u89e3\u9501\u590d\u5236",
                show: "\u89e3\u9501<br>\u590d\u5236",
                type: "jd"
            }, {
                title: "\u7edd\u4e16\u597d\u5238",
                show: "\u7edd\u4e16<br>\u597d\u5238",
                type: "tb"
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
                        Menu$1.close();
                    })), $("body").on("click", "[data-cat=tb]", (function() {
                        Core.open("http://shop.huizhek.com");
                    })), $("body").on("click", "[data-cat=jd]", (function() {
                        var _a, _b, _c;
                        null === (_a = unsafeWindow.document.querySelector(".header-wrapper")) || void 0 === _a || (_a.__vue__.$store.state.vipInfo.isVip = !0), 
                        Logger.debug(null === (_b = unsafeWindow.document.querySelector(".header-wrapper")) || void 0 === _b ? void 0 : _b.__vue__.$store.state.vipInfo.isVip), 
                        (null === (_c = unsafeWindow.document.querySelector(".header-wrapper")) || void 0 === _c ? void 0 : _c.__vue__.$store.state.vipInfo.isVip) && Toast.success("\u89e3\u9501\u6210\u529f,\u5feb\u53bb\u590d\u5236\u5427~");
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
            return _this.rules = new Map([ [ SiteEnum.CSDN, /link\.csdn\.net/i ], [ SiteEnum.ZhiHu, /link\.zhihu\.com/i ], [ SiteEnum.JianShu, /www\.jianshu\.com\/go-wild/i ], [ SiteEnum.Gitee, /gitee\.com\/link/i ], [ SiteEnum.JueJin, /juejin\.cn\/\?target/i ], [ SiteEnum.Weibo, /weibo\.cn\/sinaurl/i ], [ SiteEnum.TuXiaoChao, /support\.qq\.com\/products\/.*\/link-jump/i ], [ SiteEnum.OsCh, /oschina\.net\/action\/GoToLink/i ], [ SiteEnum.AiFaDian, /afdian\.net\/link\?target/i ], [ SiteEnum.Baidu, /jump(2?)\.bdimg\.com\/safecheck/i ], [ SiteEnum.DouBan, /www\.douban\.com\/link2\// ], [ SiteEnum.g17173, /link\.17173\.com\/\?target/i ], [ SiteEnum.TencentDoc, /docs\.qq\.com\/scenario\/link/i ], [ SiteEnum.TencentMail, /mail\.qq\.com\/cgi-bin\/readtemplate/i ], [ SiteEnum.TencentQQ, /c\.pc\.qq\.com\/(middlem|ios)\.html/i ], [ SiteEnum.SsPAi, /sspai\.com\/link/i ], [ SiteEnum.NodeSeek, /nodeseek\.com\/jump/i ], [ SiteEnum.KingSoftDoc, /[p|www]\.kdocs\.cn\/office\/link/i ], [ SiteEnum.TencentCloudBlog, /cloud\.tencent\.com\/developer\/tools\/blog-entry/i ], [ SiteEnum.Uisdc, /link\.uisdc\.com\/\?redirect/i ], [ SiteEnum.YuQue, /www\.yuque\.com\/r\/goto/i ], [ SiteEnum.CTO51, /blog\.51cto\.com\/transfer/i ], [ SiteEnum.WenJuanXing, /r\.wjx\.com\/redirect\.aspx/i ], [ SiteEnum.InfoQ, /www\.infoq\.cn\/link/i ], [ SiteEnum.WeChatWork, /open\.work\.weixin\.qq\.com\/wwopen\/uriconfirm/i ], [ SiteEnum.TencentDiskDoc, /weboffice\.qq\.com\/scenario\/link\.html/i ], [ SiteEnum.GitCode, /link\.gitcode\.com\/\?target/i ] ]), 
            _this.key = "", _this.selector = "", _this._unique = !1, _this._appName = "LinkJump", 
            _this.semiui = !0, _this;
        }
        return __extends(LinkJumpService, _super), LinkJumpService.prototype.loader = function() {
            Core.appendCss("https://registry.npmmirror.com/@douyinfe/semi-ui/2.51.0/files/dist/css/semi.min.css");
        }, LinkJumpService.prototype.run = function() {
            var url, keys, item, config = "AutoJump_" + this.site.toString();
            switch (this.site) {
              case SiteEnum.CSDN:
              case SiteEnum.ZhiHu:
              case SiteEnum.Gitee:
              case SiteEnum.JueJin:
              case SiteEnum.AiFaDian:
              case SiteEnum.g17173:
              case SiteEnum.SsPAi:
              case SiteEnum.KingSoftDoc:
              case SiteEnum.TencentCloudBlog:
              case SiteEnum.InfoQ:
              case SiteEnum.GitCode:
                this.key = "target";
                break;

              case SiteEnum.JianShu:
              case SiteEnum.DouBan:
              case SiteEnum.OsCh:
              case SiteEnum.TencentDoc:
              case SiteEnum.YuQue:
              case SiteEnum.WenJuanXing:
              case SiteEnum.TencentDiskDoc:
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

              case SiteEnum.Uisdc:
                this.key = "redirect";
                break;

              case SiteEnum.CTO51:
                this.selector = ".url span";
                break;

              case SiteEnum.WeChatWork:
                this.key = "uri";
                break;

              default:
                this.key = "";
            }
            if (Config.get(config, !0)) {
                if (url = "", "" != this.key) {
                    for (item in keys = this.key.split(",")) if (null != (url = Core.getPar(keys[item])) && "" != url) break;
                } else "" != this.selector && (url = $(this.selector).text());
                null != url && "" != url ? ((url = decodeURIComponent(url)).endsWith("/") && (url = url.substr(0, url.length - 1)), 
                Toast.success("\u94fe\u63a5\u5df2\u89e3\u6790,\u6b63\u5728\u8df3\u8f6c~"), this.jump(url)) : (Toast.warning("\u672a\u80fd\u89e3\u6790\u5230\u94fe\u63a5,\u8bf7\u624b\u52a8\u8df3\u8f6c"), 
                Logger.debug("\u89e3\u6790\u94fe\u63a5:" + url + ",key:" + this.key));
            } else Toast.warning("\u5df2\u5173\u95ed\u672c\u7f51\u7ad9\u7684\u8df3\u8f6c\u529f\u80fd");
        }, LinkJumpService.prototype.jump = function(url) {
            url && ((url = decodeURIComponent(url)).indexOf(":\\") < 1 && !url.startsWith("http://") && !url.startsWith("https://") && (url = "http://" + url), 
            Logger.debug(url), unsafeWindow.window.location.href = url);
        }, LinkJumpService;
    }(PluginBase), css_248z$4 = ".slider + div, .slider + div + a,\n.texts,\n.header_new1,\n.slider_tips {\n    display: none !important;\n}\n", 
    styleInject(css_248z$4), _GwdService = function(_super) {
        function _GwdService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.SuNing, /browser\.gwdang\.com/i ] ]), 
            _this._appName = "sn_clear", _this;
        }
        return __extends(_GwdService, _super), _GwdService.prototype.loader = function() {}, 
        _GwdService.prototype.run = function() {}, _GwdService;
    }(PluginBase), AutoExpandService = function(_super) {
        function AutoExpandService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net\/*/i ], [ SiteEnum.CSDN_Download, /download\.csdn\.net\/download/i ], [ SiteEnum.SiChuang, /ispacesoft\.com\/.*?\.html/i ] ]), 
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
            }, {
                site: [ SiteEnum.SiChuang ],
                selector: [],
                style: [],
                clicker: [ ".entry-readmore-btn" ],
                content: [],
                script: function() {}
            } ], _this._appName = "autoExpand", _this._unique = !1, _this;
        }
        return __extends(AutoExpandService, _super), AutoExpandService.prototype.loader = function() {}, 
        AutoExpandService.prototype.run = function() {
            var that = this;
            this.expandRules.forEach((function(e) {
                e.site.indexOf(that.site) > -1 && (e.selector.length > 0 && e.selector.forEach((function(selector) {
                    $(selector).remove();
                })), e.clicker.length > 0 && e.clicker.forEach((function(clicker) {
                    Core.lazyload((function() {
                        $(clicker).trigger("click");
                    }), 2), Logger.info("\u81ea\u52a8\u5c55\u5f00-\u70b9\u51fb:" + clicker);
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
            return _this.rules = new Map([ [ SiteEnum.ALY, /www\.aliyundrive\.com\/drive*/i ], [ SiteEnum.ALY_P, /www\.alipan\.com\/drive*/i ] ]), 
            _this.html = '\n    <li class=" ant-dropdown-menu-item-divider"></li>\n    <li class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child" role="menuitem">\n        <div class="outer-menu--U5weH">\n            <div class="item--2ReU2" id="onekeyvip-token">\n                <span data-role="icon" data-render-as="svg" data-icon-type="PDSMoreCircle" class="item-icon--1ydoa icon--d-ejA "><svg viewBox="0 0 1024 1024"><use xlink:href="#PDSMoreCircle"></use></svg></span>\n                \u83b7\u53d6Token\n            </div>\n        </div>\n    </li>\n    ', 
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
                tokenObj = JSON.parse(tokenStr), sAlert.msg("token\u4fe1\u606f", '<textarea style="width: 100%">' + tokenObj.refresh_token + "</textarea>", "auto");
            } catch (e) {
                sAlert.info("Token\u5e8f\u5217\u5316\u9519\u8bef,\u8bf7\u5411\u4f5c\u8005\u53cd\u9988," + e.toString());
            } else sAlert.info("\u672a\u80fd\u83b7\u53d6\u5230Token\u4fe1\u606f,\u8bf7\u91cd\u65b0\u767b\u5f55\u540e\u518d\u8bd5");
        }, AliyunPanToken.prototype.initEvent = function() {
            $("#onekeyvip-token").on("click", this.getToken);
        }, AliyunPanToken;
    }(PluginBase), css_248z$3 = '.mfb-component--tl,\n.mfb-component--cl,\n.mfb-component--tr,\n.mfb-component--bl,\n.mfb-component--br {\n  box-sizing: border-box;\n  margin: 25px;\n  position: fixed;\n  white-space: nowrap;\n  z-index: 30;\n  padding-left: 0;\n  list-style: none;\n}\n.mfb-component--cl *,\n.mfb-component--tl *,\n.mfb-component--tr *,\n.mfb-component--bl *,\n.mfb-component--br *,\n.mfb-component--tl *:before,\n.mfb-component--cl *:before,\n.mfb-component--tr *:before,\n.mfb-component--bl *:before,\n.mfb-component--br *:before,\n.mfb-component--tl *:after,\n.mfb-component--cl *:after,\n.mfb-component--tr *:after,\n.mfb-component--bl *:after,\n.mfb-component--br *:after {\n  box-sizing: inherit;\n}\n.mfb-component--tl {\n  left: 0;\n  top: 0;\n}\n.mfb-component--cl {\n  left: 0;\n  top: 50%;\n}\n.mfb-component--tr {\n  right: 0;\n  top: 0;\n}\n.mfb-component--bl {\n  left: 0;\n  bottom: 0;\n}\n.mfb-component--br {\n  right: 0;\n  bottom: 0;\n}\n.mfb-component__button--main,\n.mfb-component__button--child {\n  background-color: #e40a5d;\n  display: inline-block;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  position: relative;\n  -webkit-user-drag: none;\n  color: #f1f1f1;\n  text-align: center;\n  line-height: 55px;\n  font-size: 25px;\n}\n.mfb-component__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mfb-component__list > li {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 1px;\n  padding: 10px 0;\n  margin: -10px 0;\n}\n.mfb-component__icon,\n.mfb-component__main-icon--active,\n.mfb-component__main-icon--resting,\n.mfb-component__child-icon {\n  position: absolute;\n  font-size: 18px;\n  text-align: center;\n  line-height: 56px;\n  width: 100%;\n}\n.mfb-component__wrap {\n  padding: 25px;\n  margin: -25px;\n}\n[data-mfb-toggle=hover]:hover .mfb-component__icon,\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--active,\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--resting,\n[data-mfb-toggle=hover]:hover .mfb-component__child-icon,\n[data-mfb-state=open] .mfb-component__icon,\n[data-mfb-state=open] .mfb-component__main-icon--active,\n[data-mfb-state=open] .mfb-component__main-icon--resting,\n[data-mfb-state=open] .mfb-component__child-icon {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n.mfb-component__button--main {\n  height: 56px;\n  width: 56px;\n  z-index: 20;\n  text-align: center;\n  line-height: 55px;\n  font-size: 25px;\n}\n.mfb-component__button--child {\n  height: 56px;\n  width: 56px;\n}\n.mfb-component__main-icon--active,\n.mfb-component__main-icon--resting {\n  -webkit-transform: scale(1) rotate(360deg);\n  transform: scale(1) rotate(360deg);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 150ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mfb-component__child-icon,\n.mfb-component__child-icon {\n  line-height: 56px;\n  font-size: 18px;\n}\n.mfb-component__main-icon--active {\n  opacity: 0;\n}\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon,\n[data-mfb-state=open] .mfb-component__main-icon {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n}\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--resting,\n[data-mfb-state=open] .mfb-component__main-icon--resting {\n  opacity: 0;\n  position: absolute !important;\n}\n[data-mfb-toggle=hover]:hover .mfb-component__main-icon--active,\n[data-mfb-state=open] .mfb-component__main-icon--active {\n  opacity: 1;\n}\n.mfb-component--tl.mfb-slidein .mfb-component__list li,\n.mfb-component--tr.mfb-slidein .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n}\n.mfb-component--tl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tl.mfb-slidein[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px);\n  transform: translateY(140px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px);\n  transform: translateY(210px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px);\n  transform: translateY(280px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(5),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(5),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(5),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(5) {\n  -webkit-transform: translateY(350px);\n  transform: translateY(350px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(6),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(6),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(6),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(6) {\n  -webkit-transform: translateY(420px);\n  transform: translateY(420px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(7),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(7),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(7),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(7) {\n  -webkit-transform: translateY(490px);\n  transform: translateY(490px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(8),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(8),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(8),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(8) {\n  -webkit-transform: translateY(560px);\n  transform: translateY(560px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(9),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(9),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(9),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(9) {\n  -webkit-transform: translateY(630px);\n  transform: translateY(630px);\n}\n".mfb-component--tl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(10),\n".mfb-component--tl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(10),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(10),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(10) {\n  -webkit-transform: translateY(700px);\n  transform: translateY(700px);\n}\n.mfb-component--cl.mfb-slidein .mfb-component__list li,\n.mfb-component--tr.mfb-slidein .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px);\n  transform: translateY(140px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px);\n  transform: translateY(210px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px);\n  transform: translateY(280px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(5),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(5),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(5),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(5) {\n  -webkit-transform: translateY(350px);\n  transform: translateY(350px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(6),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(6),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(6),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(6) {\n  -webkit-transform: translateY(420px);\n  transform: translateY(420px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(7),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(7),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(7),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(7) {\n  -webkit-transform: translateY(490px);\n  transform: translateY(490px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(8),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(8),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(8),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(8) {\n  -webkit-transform: translateY(560px);\n  transform: translateY(560px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(9),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(9),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(9),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(9) {\n  -webkit-transform: translateY(630px);\n  transform: translateY(630px);\n}\n".mfb-component--cl.mfb-slidein"[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(10),\n".mfb-component--cl.mfb-slidein"[data-mfb-state=open] .mfb-component__list li:nth-child(10),\n.mfb-component--tr.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(10),\n.mfb-component--tr.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(10) {\n  -webkit-transform: translateY(700px);\n  transform: translateY(700px);\n}\n.mfb-component--bl.mfb-slidein .mfb-component__list li,\n.mfb-component--br.mfb-slidein .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px);\n  transform: translateY(-70px);\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px);\n  transform: translateY(-140px);\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px);\n  transform: translateY(-210px);\n}\n.mfb-component--bl.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px);\n  transform: translateY(-280px);\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li,\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-slidein-spring .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein-spring .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n  -webkit-transform: translateY(70px);\n  transform: translateY(70px);\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n  -webkit-transform: translateY(140px);\n  transform: translateY(140px);\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n  -webkit-transform: translateY(210px);\n  transform: translateY(210px);\n}\n.mfb-component--tl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n  -webkit-transform: translateY(280px);\n  transform: translateY(280px);\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li,\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li {\n  opacity: 0;\n  transition: all 0.5s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-slidein-spring .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein-spring .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li,\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li,\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li {\n  opacity: 1;\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  transition-delay: 0.05s;\n  -webkit-transform: translateY(-70px);\n  transform: translateY(-70px);\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  transition-delay: 0.1s;\n  -webkit-transform: translateY(-140px);\n  transform: translateY(-140px);\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  transition-delay: 0.15s;\n  -webkit-transform: translateY(-210px);\n  transform: translateY(-210px);\n}\n.mfb-component--bl.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein-spring[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-slidein-spring[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  transition-delay: 0.2s;\n  -webkit-transform: translateY(-280px);\n  transform: translateY(-280px);\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li,\n.mfb-component--tr.mfb-zoomin .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(0);\n  transform: translateY(70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(0);\n  transform: translateY(140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(0);\n  transform: translateY(210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-zoomin .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-zoomin .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(0);\n  transform: translateY(280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(1);\n  transform: translateY(70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(1);\n  transform: translateY(140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(1);\n  transform: translateY(210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(1);\n  transform: translateY(280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li,\n.mfb-component--br.mfb-zoomin .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(0);\n  transform: translateY(-70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(0);\n  transform: translateY(-140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(0);\n  transform: translateY(-210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(0);\n  transform: translateY(-280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.05s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(5),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(5) {\n  -webkit-transform: translateY(-350px) scale(0);\n  transform: translateY(-350px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.1s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(6),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(6) {\n  -webkit-transform: translateY(-420px) scale(0);\n  transform: translateY(-420px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.15s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(7),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(7) {\n  -webkit-transform: translateY(-490px) scale(0);\n  transform: translateY(-490px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.2s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(8),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(8) {\n  -webkit-transform: translateY(-560px) scale(0);\n  transform: translateY(-560px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.25s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(9),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(9) {\n  -webkit-transform: translateY(-630px) scale(0);\n  transform: translateY(-630px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.3s;\n}\n.mfb-component--cl.mfb-zoomin .mfb-component__list li:nth-child(10),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(10) {\n  -webkit-transform: translateY(-700px) scale(0);\n  transform: translateY(-700px) scale(0);\n  transition: all 0.5s;\n  transition-delay: -0.35s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(1);\n  transform: translateY(-70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(1);\n  transform: translateY(-140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(1);\n  transform: translateY(-210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(1);\n  transform: translateY(-280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(5),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(5),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(5),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(5) {\n  -webkit-transform: translateY(-350px) scale(1);\n  transform: translateY(-350px) scale(1);\n  transition-delay: 0.25s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(6),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(6),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(6),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(6) {\n  -webkit-transform: translateY(-420px) scale(1);\n  transform: translateY(-420px) scale(1);\n  transition-delay: 0.3s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(7),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(7),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(7),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(7) {\n  -webkit-transform: translateY(-490px) scale(1);\n  transform: translateY(-490px) scale(1);\n  transition-delay: 0.35s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(8),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(8),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(8),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(8) {\n  -webkit-transform: translateY(-560px) scale(1);\n  transform: translateY(-560px) scale(1);\n  transition-delay: 0.4s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(9),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(9),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(9),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(9) {\n  -webkit-transform: translateY(-630px) scale(1);\n  transform: translateY(-630px) scale(1);\n  transition-delay: 0.45s;\n}\n.mfb-component--cl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(10),\n.mfb-component--cl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(10),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(10),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(10) {\n  -webkit-transform: translateY(-700px) scale(1);\n  transform: translateY(-700px) scale(1);\n  transition-delay: 0.5s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li,\n.mfb-component--br.mfb-zoomin .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(0);\n  transform: translateY(-70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(0);\n  transform: translateY(-140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(0);\n  transform: translateY(-210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-zoomin .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(0);\n  transform: translateY(-280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(1);\n  transform: translateY(-70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(1);\n  transform: translateY(-140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(1);\n  transform: translateY(-210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-zoomin[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(1);\n  transform: translateY(-280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li,\n.mfb-component--tr.mfb-fountain .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(0);\n  transform: translateY(-70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(0);\n  transform: translateY(-140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(0);\n  transform: translateY(-210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-fountain .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-fountain .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(0);\n  transform: translateY(-280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(1);\n  transform: translateY(70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(1);\n  transform: translateY(140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(1);\n  transform: translateY(210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--tl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--tr.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(1);\n  transform: translateY(280px) scale(1);\n  transition-delay: 0.2s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li,\n.mfb-component--br.mfb-fountain .mfb-component__list li {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(70px) scale(0);\n  transform: translateY(70px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(140px) scale(0);\n  transform: translateY(140px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(210px) scale(0);\n  transform: translateY(210px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-fountain .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-fountain .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(280px) scale(0);\n  transform: translateY(280px) scale(0);\n  transition: all 0.5s;\n  transition-delay: 0s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(1),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(1) {\n  -webkit-transform: translateY(-70px) scale(1);\n  transform: translateY(-70px) scale(1);\n  transition-delay: 0.05s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(2),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(2) {\n  -webkit-transform: translateY(-140px) scale(1);\n  transform: translateY(-140px) scale(1);\n  transition-delay: 0.1s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(3),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(3) {\n  -webkit-transform: translateY(-210px) scale(1);\n  transform: translateY(-210px) scale(1);\n  transition-delay: 0.15s;\n}\n.mfb-component--bl.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--bl.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-fountain[data-mfb-toggle=hover]:hover .mfb-component__list li:nth-child(4),\n.mfb-component--br.mfb-fountain[data-mfb-state=open] .mfb-component__list li:nth-child(4) {\n  -webkit-transform: translateY(-280px) scale(1);\n  transform: translateY(-280px) scale(1);\n  transition-delay: 0.2s;\n}\n[data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 4px 10px;\n  border-radius: 3px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  font-weight: 400;\n  pointer-events: none;\n  line-height: normal;\n  position: absolute;\n  top: 50%;\n  margin-top: -11px;\n  transition: all 0.5s;\n}\n[data-mfb-toggle=hover] [data-mfb-label]:hover:after,\n[data-mfb-state=open] [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  opacity: 1;\n  transition: all 0.3s;\n}\n.mfb-component--br [data-mfb-label]:after,\n.mfb-component--tr [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  right: 70px;\n}\n.mfb-component--br .mfb-component__list [data-mfb-label]:after,\n.mfb-component--tr .mfb-component__list [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  right: 70px;\n}\n.mfb-component--tl [data-mfb-label]:after,\n.mfb-component--cl [data-mfb-label]:after,\n.mfb-component--bl [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  left: 70px;\n}\n.mfb-component--tl .mfb-component__list [data-mfb-label]:after,\n.mfb-component--bl .mfb-component__list [data-mfb-label]:after {\n  content: attr(data-mfb-label);\n  left: 70px;\n}\n.mfb-component__button--child i,\n.mfb-component__button--main i {\n  line-height: inherit;\n}\n.animated {\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 800px, 0);\n    transform: translate3d(0, 800px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-moz-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -moz-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -moz-transform: translate3d(0, 800px, 0);\n    transform: translate3d(0, 800px, 0);\n  }\n  60% {\n    opacity: 1;\n    -moz-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -moz-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -moz-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -moz-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -moz-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 800px, 0);\n    -moz-transform: translate3d(0, 800px, 0);\n    transform: translate3d(0, 800px, 0);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    -moz-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -moz-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -moz-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  -moz-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n  -webkit-animation-delay: 1s;\n  -moz-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.onekeyvip {\n  font-size: 25px !important;\n}\n', 
    styleInject(css_248z$3), css_248z$2 = '@font-face {\n    font-family: "onekeyvip"; /* Project id 3421073 */\n    src:\n            url(\'data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAokAAsAAAAAEegAAAnXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACEEAqVMJEnATYCJAMoCxYABCAFhHMHgQgbBw+jooZyUhhkf4Ftw54EEtaIjWEBoJwygw+dDU3DFpDw4dDqAAAwS8FA1LcASNANAEA++F710qRKlvCJs3sQ/tw9wOgBmD/X3lIgTolAISy85GcpO9lsAV0rVKfCo1AoDNDdORD25DVAwJfZqTqrJ9nTzK4Dr+OFPckctMJBSu68dg4LI7i6HwhkwhEcTJaW8/9vrdW7w7xRbfBGiB7jis3+M5tbNKo21WTtHiFCKGpzDdFKkyoWiuVILoSYsSjPTKAq1Mb4Xc8DAoAjQZ/gkrGZeRTfTZEOyhYKYz4B4vakG6MKilQcYBUJBJpZabovA5kEGZBGS+cATPQ/nrxBUpGABJnCCKTuR3X0bPr9nhpWAL0Hlx+uG7++BEAGQAHELMxFplVrE9AQx/jAqaYMbSA4mIkhgLk2NXXTySx8PeD3e6s1FyIF9+8JIJ1MyYDUiTUKZctNZWjQoeKXp8AAG4QMqNUBEzaCBJj88YvIAQUw9QoQAAJygAFmYQ7IwOv+Nmi+cQAIdDwPAT6oMIDz+7hACIToKID1QzDV9AkFs/UalkIWjPHY5CCn+ISQwNaM7PTCltTEhAi1RknQeH9BzGhonjwSqr8jYgVDLX1pnMjStk3/yyhOLm+oqVSW41UxyxgSXX+qX8oTCUwm7T3JjRQKNJ+fXU3SrOyh4E72IvZj++m7V1NB7r2kjwYV9HOqYlNOfrV0bXtgqLIeJmNqAXg7ANGJCLhFyNh7EBFjuyFS2bVegspNGmCh0euO2+KCAhmmiiB3Wwx7FVDESiy/qSOwRT7WZt/GbuNnc/Qk/pq2FooyKDbNPt0h7Q7tfq12raadvCzu5om81a3tdAUy35CeVUWWCmQWBar8JufsakKlSa1QvtAYm9WKLJ/OkdELaMXm9Wzq1ri1lNuUQmrRVpl+idEpWn4fu8ukRY5zmWVOdcjYI/m07HpSvS1cSagUFgIjLY9aZFpnV8Wp6X5f6TlQo/wmPpRN6hJDS95DwW22LTMVmRR4wDWTyz1Xc5txklrUO1mqWMrh1JBVk62K7hoZvXkrLCFVd9Hqy+klAhknBxFEXI+Fq9nZ+RARcJFp2qqSkguMrA2cFIH4DMIOIcLEChsLguMNxTyjSlVeYyHTL6DTLZtofIqUL3bEhMuatmq0u+LlN8mGeQWhkqfJRRsYEDGLnMPp1scsXEnIpHBUBEEpZJTKe2q5e2yLgPH9zas09DePZ5GK0Btw5d/G/6iQqt6ObjwY6i/mbbYjI3JQBk64ztQ0GJ7k3fFTYGRVzKh53Fo5veKixF9hZbrdbnRchWEFn2GjYn6XvxL1HfRN7OpigcxlekmFVtomJ000YAtVhRLNNGm7Ei1fIAtRYRWYHDWNog4k4Ob6BI5UmhJVv/rDWM7q54whoIFVkungaftqayhOqYbAws8iJWNgda6hyOsT1j6CNrQ05CiCwmvFFXYUhoQj6KI2BmMcTZ+gDzGUmBdRhdthb0pJdSE2cH7rG/N2wbzLV8Wo5v/CXe8kGTjJz0K4OTUQcWHTQERyYjh0PQJK7ASh46CaYV5hkEswsHO0074haciUGNga2QLj7DCIup9pmXJpoPJQis9Zxn76KbqYrm1uBPtwv0w/t1a0qOGGblIz0teQuoKalvR08n8ymw30Wgwqu2aQPqD0Iykj9yD7ju1PdI51copzTtjvT/DakugZVRXMDGXGhPpTfcjF1vTm+x7FFL/Q/S4JjnFxTgnOY3dODZkv0rap6ApK88j6fel+B5uEt669jcLFvlvCzj5YeuHWJR1hUJmpo3XCrLD1H4o/yXMHWBF3dg56r9izch6ElOOq7fj20Ch62dw5UMdTx4AxzXQsP/Hb494VV1PF0XV1S0VnJt40Rzpvl4Q9i1a01dDIy8TXqNuGS6tWyD/dwKw2tbDUTvVQnSh49vg7ZHr1Udw3AU2DWHArIyrz8/4fcnbtWD11SpV91D22IH8v4p0DdGbzHCLidZvXJ9+CyNn3L886XTFy4tRPdstoDML7iuu2aEPQ6qX5M+0P5f2tby2x+2iDxkoD+6j7zjzw5mlkaWsf6ID6ouyo7S6Z5gbvMuS9Rul+n1sOKVVxeqSWI5cH08a46GQCT8yJEJAQcNXHy8eze6AI9dT11Fl55VWBWn9I1JpvXQsOXmtg8/GMzs9jtkRQUwq1nJruXFjexIOByzCqcUL9iVGnj3rPnCaOhbY3/AeUkxWPRa39Pjho2K0A/L0+KT3ao2nzvvIPHD/jQxNgVX9lkvGJlNEhfmJDhd/+A/5VoNWvyv8HqvRfB+6O7j24N8AvLfhESOCp/MCTJ0KDQHMD+tpzZvZ/82H9JN7sONMzNtbXa5XURzPhZQOb0KwVNn/pYLFu0sqHGYh1+WH01/1YdktrBBg0YfnLvuwpHVhRdbWXczjFixNsjt17te+O735PjXip3B/HiPU/n2At+hAfs2aL8J3kGZWdyWOYaP8nfa83ZJ9yvPfQY3wANRN/qay3c1ib7J0YGCekrfoPvI/hU12zWKhbWjh0JLywn5t9tjHALT5ZJ5S1kc118oY2CP4gwzEZPOpf77J6ik9lC6tk65cJVk/wpXRxZRRAFU0mvIv4UlasE1ECVq7kX6xB8my/VnWZh9QV9n8S7OIoNqcMODbhBb6yVyeiJ6K/iCt9aN5WOyIBNFHPoDLt0CFAaDEsvDjmrjTmQDYRB+szR7JRalylt6VaOFeHinqbd5ut93/W8n4/q9yw8FnMhf+bZjNdcRVjSZHFSgKkuA8A3aCjHmtB5HSgLhhNrAadQw0/6SFjtDLpHN1KU5oMpbfoEIBxbZI1jQ9RUABtlfS0C/xvKvgCs7weLvy3ZfY93zTxT+33OF79z9usxvDccKAxuXxjnhFWmzVcyPqXsY8P4OSAbZHRh4usO2BozM1pAMtb7uQ3b3JuzLlYTwkykqDCB1HoCNazkBgkQyAVKdBRgDiiTTYWcCaFIILppWHOgQic3CIJdjiIKRXyghlC/iAZbv4pCmKKQBzlZdEJhMWHBSgSdKzuY6Zxh1g6eQSYsL/D3FmgvqWItBxstQjCY9zBjXUN+fpxcED0s4O3Q5ukJJgIbuOx4RqBZXHsYmMDNFkXkNLtqq8n1A51GrfRMAEopJtZh6n2czMazkGCJAGm/bP27WBcswDlsyhEVR85vCjXCB5GLw1rVKehiX6cy48uFtTUs4Nq+iRIBMikdTZsbIkEWGYNh7n0WgagkeoEOlS5utTzo5GmULdVk33DpX/3PoxjciIRShiRiUJUohGdcCKgtGH7zKGRnt1i9rEjmtMaLE55mKow3Q87CLCAH045pxaEe9yn1icmOr6tgqj1GHVqiW9ZMRk7Qg==\') format(\'woff2\'),\n            url(\'//at.alicdn.com/t/c/font_3421073_6n4yizwtdbu.woff?t=1695111033179\') format(\'woff\'),\n            url(\'//at.alicdn.com/t/c/font_3421073_6n4yizwtdbu.ttf?t=1695111033179\') format(\'truetype\'),\n            url(\'//at.alicdn.com/t/c/font_3421073_6n4yizwtdbu.svg?t=1695111033179#onekeyvip\') format(\'svg\');\n}\n\n.onekeyvip {\n    font-family: "onekeyvip" !important;\n    font-size: 16px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.onekeyvip-biying:before {\n    content: "\\e609";\n}\n\n.onekeyvip-bilibili:before {\n    content: "\\e600";\n}\n\n.onekeyvip-360logo:before {\n    content: "\\e602";\n}\n\n.onekeyvip-baidu:before {\n    content: "\\e612";\n}\n\n.onekeyvip-zhihu:before {\n    content: "\\e641";\n}\n\n.onekeyvip-google:before {\n    content: "\\e603";\n}\n\n.onekeyvip-sougou:before {\n    content: "\\faef";\n}\n\n.onekeyvip-number-sign-full:before {\n    content: "\\ea7b";\n}\n\n.onekeyvip-number-sign:before {\n    content: "\\ea7c";\n}\n', 
    styleInject(css_248z$2), MfbMenu = function() {
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
            return _this.rules = new Map([ [ SiteEnum.YouTuBe, /(www|m)\.youtube\.com\/watch\?v=(.*?)/i ] ]), 
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
            return _this.rules = new Map([ [ SiteEnum.Settings, /settings\.wandhi\.com\/index\/index\/page/i ], [ SiteEnum.Settings_AutoJump, /settings\.wandhi\.com\/tools\/autojump\/page/i ], [ SiteEnum.Settings_AutoJump_Opt, /settings\.wandhi\.com\/tools\/autojump-op\/page/i ], [ SiteEnum.Settings_CSDN, /settings\.wandhi\.com\/tools\/csdn\/page/i ], [ SiteEnum.Settings_CSDN_Opt, /settings\.wandhi\.com\/tools\/csdn-op\/page/i ], [ SiteEnum.Settings_Search, /settings\.wandhi\.com\/tools\/search-helper\/page/i ], [ SiteEnum.Settings_Search_Opt, /settings\.wandhi\.com\/tools\/search-helper-op\/page/i ], [ SiteEnum.Settings_Bili_Pc_Opt, /settings\.wandhi\.com\/tools\/bilibili-pc-op\/page/i ], [ SiteEnum.Settings_Jiexi_Opt, /settings\.wandhi\.com\/tools\/jiexi\/page/i ], [ SiteEnum.Settings_WangPan_Opt, /settings\.wandhi\.com\/tools\/wangpan\/page/i ] ]), 
            _this._unique = !1, _this._appName = "\u63a7\u5236\u9762\u677f", _this.semiui = !0, 
            _this;
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
                break;

              case SiteEnum.Settings_WangPan_Opt:
                this.WangPanOpt();
            }
        }, SettingService.prototype.WangPanOpt = function() {
            var keys = new Map([ [ ConfigEnum.WangPan_Aria_Host, function(v) {
                return !!/^(http|https):\/\/\w+/.test(v) || (Toast.warning("Aria2\u5730\u5740\u683c\u5f0f\u9519\u8bef"), 
                !1);
            } ], [ ConfigEnum.WangPan_Aria_Port, function(v) {
                return !!/^\d+$/.test(v) || (Toast.warning("Aria2\u7aef\u53e3\u683c\u5f0f\u9519\u8bef"), 
                !1);
            } ], [ ConfigEnum.WangPan_Aria_Token, function(v) {
                return !0;
            } ], [ ConfigEnum.WangPan_Aria_Path, function(v) {
                return !0;
            } ], [ ConfigEnum.WangPan_Aria_Dir, function(v) {
                return !0;
            } ] ]);
            this.InputInit(keys, "text");
        }, SettingService.prototype.JiexiOpt = function() {
            var radioKeys, textKeys = new Map([ [ ConfigEnum.Jiexi_Cus_Interface, function(v) {
                try {
                    v.split("\n").forEach((function(e, i) {
                        if (2 != e.split("||").length) throw new Error;
                    }));
                } catch (e) {
                    return Toast.error("\u81ea\u5b9a\u4e49\u63a5\u53e3\u683c\u5f0f\u9519\u8bef"), !1;
                }
                return !0;
            } ] ]);
            this.TextAreaInit(textKeys), radioKeys = new Map([ [ ConfigEnum.Jiexi_Cus_Postion, function(v) {
                return !0;
            } ] ]), this.RadioInit(radioKeys);
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
                Config.set(el.id, $(el).prop("checked")), Toast.success("\u4fdd\u5b58\u6210\u529f");
            }));
        }, SettingService.prototype.csdnOpt = function() {
            var keys = [ ConfigEnum.CSDN_OpAdClean, ConfigEnum.CSDN_OpImgLink, ConfigEnum.CSDN_OpCommentClean, ConfigEnum.CSDN_OpArticleClean, ConfigEnum.CSDN_OpClipboardClean ];
            this.checkBoxInit(keys);
        }, SettingService.prototype.checkBoxInit = function(keys) {
            var _keys = new Map(keys.map((function(e) {
                return [ e, function(v) {
                    return !0;
                } ];
            })));
            this.InputInit(_keys, "checkbox");
        }, SettingService.prototype.InputInit = function(keys, type) {
            void 0 === type && (type = "checkbox");
            var ele = $("input[type=" + type + "]");
            ele.removeProp("disabled"), keys.forEach((function(f, e) {
                if ("text" == type) {
                    var v = Config.get(e.toString(), "");
                    Logger.debug("\u914d\u7f6e[" + e.toString() + "]\u521d\u59cb\u5316,\u503c:[" + v + "]"), 
                    $("#" + e.toString()).val(v);
                } else "checkbox" == type && $("#" + e.toString()).prop("checked", Config.get(e.toString(), !0));
            })), ele.on("change", (function(e) {
                var el = e.target;
                "text" == type ? (Logger.debug("\u914d\u7f6e[" + e.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(e.target).val() + "]"), 
                keys.get(el.id).apply(el, [ $(el).val() ]) && (Config.set(el.id, $(el).val()), Toast.success("\u4fdd\u5b58\u6210\u529f"))) : "checkbox" == type && (Logger.debug("\u914d\u7f6e[" + e.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(e.target).prop("checked") + "]"), 
                Config.set(el.id, $(el).prop("checked")), Toast.success("\u4fdd\u5b58\u6210\u529f"));
            }));
        }, SettingService.prototype.TextAreaInit = function(keys) {
            $("textarea").removeProp("disabled"), keys.forEach((function(f, e) {
                $("#" + e.toString()).val(Config.get(e.toString(), "")), $("#" + e.toString()).on("change", (function(el) {
                    Logger.debug("\u914d\u7f6e[" + el.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(el.target).val() + "]"), 
                    f.apply(el, [ $(el.target).val() ]) && (Config.set(el.target.id, $(el.target).val()), 
                    Toast.success("\u4fdd\u5b58\u6210\u529f"));
                }));
            }));
        }, SettingService.prototype.RadioInit = function(keys) {
            $("input[type=radio]").removeProp("disabled"), keys.forEach((function(f, e) {
                Config.get(e.toString()) && $('input[name="' + e.toString() + '"][value="' + Config.get(e.toString()) + '"]').prop("checked", !0), 
                $('input[name="' + e.toString() + '"]').on("change", (function(event) {
                    var target = $(event.target), value = target.val();
                    Logger.debug("\u914d\u7f6e[" + target.attr("id") + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + value + "]"), 
                    f.apply(target, [ target.prop("checked") ]) && (Config.set(e.toString(), value), 
                    Toast.success("\u4fdd\u5b58\u6210\u529f"));
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
            return _this.rules = new Map([ [ SiteEnum.Baidu, /www\.baidu\.com\/(baidu|s)\?/i ], [ SiteEnum.Google, /www\.google\.com\/search\?/i ], [ SiteEnum.SoGou, /www\.sogou\.com\/web/i ], [ SiteEnum.SoGou, /www\.so\.com\/s\?/i ], [ SiteEnum.BingCn, /cn\.bing\.com\/search/i ], [ SiteEnum.Bing, /www\.bing\.com\/search/i ] ]), 
            _this._appName = "\u4fbf\u6377\u641c\u7d22", _this._unique = !1, _this.siteConfig = new Map([ [ SiteEnum.Baidu, "#kw" ], [ SiteEnum.Google, "input[name=q]" ], [ SiteEnum.SoGou, "#upquery" ], [ SiteEnum.BingCn, "#sb_form_q" ], [ SiteEnum.Bing, "#sb_form_q" ] ]), 
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
                })), new MfbModel("Bing", "onekeyvip-biying", (function() {
                    Core.open("https://cn.bing.com/search?q=" + $(SearchService.keySelector).val());
                })) ];
                new MfbMenu(Config.get(ConfigEnum.Search_OptMenuPos, Config.get(ConfigEnum.Search_Helper_Postion, "cl")), Config.get(ConfigEnum.Search_OptMenuMethod, "hover")).Init(menus);
            }
        }, SearchService.keySelector = "#none", SearchService;
    }(PluginBase), QuarkFileResponse = function QuarkFileResponse() {}, Quark = function() {
        function Quark() {}
        return Quark.init = function() {
            this.sign();
        }, Quark.notification = function(msg) {
            semiUi.Notification.success({
                title: "\u7b7e\u5230\u901a\u77e5",
                content: msg,
                duration: 3,
                theme: "light",
                position: "bottomRight"
            });
        }, Quark.sign = function() {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var growth_info, sign_return, message;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        return [ 4, Quark.getCurrentInfo() ];

                      case 1:
                        return (growth_info = _b.sent()) ? (null === (_a = growth_info.data.cap_sign) || void 0 === _a ? void 0 : _a.sign_daily) ? (message = "\ud83d\udcc5 \u6267\u884c\u7b7e\u5230: \u4eca\u65e5\u5df2\u7b7e\u5230+" + growth_info.data.cap_sign.sign_daily_reward / 1024 / 1024 + "MB\uff0c\u8fde\u7b7e\u8fdb\u5ea6(" + growth_info.data.cap_sign.sign_progress + "/" + growth_info.data.cap_sign.sign_target + ")\u2705", 
                        this.notification(message), [ 3, 4 ]) : [ 3, 2 ] : [ 3, 4 ];

                      case 2:
                        return [ 4, this.getSignInfo() ];

                      case 3:
                        (null == (sign_return = _b.sent()) ? void 0 : sign_return.data) && (message = "\ud83d\udcc5 \u6267\u884c\u7b7e\u5230: \u4eca\u65e5\u7b7e\u5230+" + sign_return.data.sign_daily_reward / 1024 / 1024 + "MB\uff0c\u8fde\u7b7e\u8fdb\u5ea6(" + (growth_info.cap_sign.sign_progress + 1) + "/" + growth_info.cap_sign.sign_target + ")\u2705", 
                        this.notification(message)), _b.label = 4;

                      case 4:
                        return Config.set(Quark.signKey, "true", 86400), [ 2 ];
                    }
                }));
            }));
        }, Quark.getSignInfo = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var p;
                return __generator(this, (function(_a) {
                    return (p = new Map).set("sign_cyclic", "true"), [ 2, Http.post(Quark.signUrl + "?pr=ucpro&fr=pc&uc_param_str", p) ];
                }));
            }));
        }, Quark.getCurrentInfo = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    return [ 2, Http.get(Quark.infoUrl + "?pr=ucpro&fr=pc&uc_param_str", new Map, new Map([ [ "Accept", "application/json" ] ])) ];
                }));
            }));
        }, Quark.infoUrl = "https://drive-m.quark.cn/1/clouddrive/capacity/growth/info", 
        Quark.signUrl = "https://drive-m.quark.cn/1/clouddrive/capacity/growth/sign", Quark.accUrl = "", 
        Quark.saveUrl = "", Quark.signKey = "QuarkSignKey" + (new Date).toLocaleDateString().replace(/-/g, ""), 
        Quark;
    }(), NetDiskDirectService = function(_super) {
        function NetDiskDirectService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.KuaKeHome, /pan\.quark\.cn\/list/ ], [ SiteEnum.KuaKeShare, /pan\.quark\.cn\/s/ ], [ SiteEnum.BaiduPanMain, /pan\.baidu\.com\/disk\/main/i ] ]), 
            _this._appName = "NetDiskDirect", _this.semiui = !0, _this;
        }
        return __extends(NetDiskDirectService, _super), NetDiskDirectService.prototype.loader = function() {}, 
        NetDiskDirectService.prototype.run = function() {
            NetDiskDirectService._site = this.site, this.site == SiteEnum.KuaKeHome ? -1 === Core.url.indexOf("myshare") ? (NetDiskDirectService.btnSelecotr = ".btn-operate", 
            NetDiskDirectService.btn = NetDiskDirectService.quarkBtn, NetDiskDirectService.getSelecor = NetDiskDirectService.getQuarkSelectedFile, 
            NetDiskDirectService.quarkListener(), Core.appendCssContent(".btn-operate {justify-content: flex-start !important;}")) : (NetDiskDirectService.btnSelecotr = ".tabs-container", 
            NetDiskDirectService.btn = '<div class="ovk-main" style="margin-right: 10px;">\n    <button type="button" class="ant-btn btn-file okv-btn-direct">\n        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+" class="btn-icon" alt="" style="width: 20px;height: 20px">\n        <span>\u5bfc\u51fa\u5206\u4eab\u94fe\u63a5</span>\n    </button>\n</div>', 
            NetDiskDirectService.getSelecor = NetDiskDirectService.getQuarkShareSelectedFile, 
            NetDiskDirectService.quarkListener()) : this.site == SiteEnum.BaiduPanMain ? (NetDiskDirectService.btnSelecotr = ".wp-s-agile-tool-bar__header", 
            NetDiskDirectService.btn = '<div class="ovk-main" style="margin-right: 10px;">\n    <button type="button" class="u-button nd-file-list-toolbar-action-item u-button--primary u-button--small is-round is-has-icon okv-btn-direct" style="background: #09AAFF;border-color: #09AAFF;font-size: 14px;padding: 7px 16px;border: none;\n}">\n        <i class="u-icon u-icon-download"></i>\n        <span>\u83b7\u53d6\u76f4\u94fe</span>\n    </button>\n</div>', 
            NetDiskDirectService.initButton(), NetDiskDirectService.baiduEvent(), NetDiskDirectService.commonEvent()) : this.site == SiteEnum.KuaKeShare && (NetDiskDirectService.btnSelecotr = ".file-info-share-buttom", 
            NetDiskDirectService.btn = NetDiskDirectService.quarkBtn, NetDiskDirectService.initButton(), 
            $(document).on("click", ".okv-btn-direct", (function(e) {
                Toast.warning("\u8bf7\u5148\u4fdd\u5b58\u5230\u81ea\u5df1\u7f51\u76d8\uff0c\u7136\u540e\u4ece\u201c\u6211\u7684\u7f51\u76d8\u201d\u754c\u9762\u83b7\u53d6\u76f4\u94fe");
            })));
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
            })), NetDiskDirectService.initButton(), NetDiskDirectService.quarkEvent(), NetDiskDirectService.commonEvent(), 
            Quark.init(), Logger.info("\u5938\u514b\u521d\u59cb\u5316\u5b8c\u6bd5");
        }, NetDiskDirectService.baiduSelectedList = function() {
            try {
                return require("system-core:context/context.js").instanceForSystem.list.getSelected();
            } catch (e) {
                return unsafeWindow.document.querySelector(".wp-s-core-pan").__vue__.selectedList;
            }
        }, NetDiskDirectService.getLogid = function() {
            return window.btoa(Core.getCookie("BAIDUID"));
        }, NetDiskDirectService.getToken = function() {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var k, token, res;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        return k = "baidu_access_Token", (token = Config.get(k) && Config.get(k).length > 0 && Config.get(k)) ? [ 2, token ] : [ 4, Route.baiduAccessToken() ];

                      case 1:
                        return -1 !== (res = _b.sent()).indexOf("access_token") ? [ 3, 4 ] : [ 4, Route.baiduAccessTokenAuth() ];

                      case 2:
                        return _b.sent(), [ 4, Route.baiduAccessToken() ];

                      case 3:
                        if (-1 === (res = _b.sent()).indexOf("access_token")) return Toast.error("\u63d0\u793a\uff1a\u83b7\u53d6token\u5931\u8d25\uff01"), 
                        [ 2, !1 ];
                        _b.label = 4;

                      case 4:
                        return (token = null === (_a = res.match(/access_token=([^&]+)/)) || void 0 === _a ? void 0 : _a[1]) && Config.set(k, token, 21600), 
                        [ 2, token ];
                    }
                }));
            }));
        }, NetDiskDirectService.sendLinkToRPC = function(filename, link, ua, cookie) {
            return __awaiter(this, void 0, void 0, (function() {
                var url, rpcData, e_1;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        url = Config.get(ConfigEnum.WangPan_Aria_Host, "http://localhost") + ":" + Config.get(ConfigEnum.WangPan_Aria_Port, 6800) + Config.get(ConfigEnum.WangPan_Aria_Path, "/jsonrpc"), 
                        rpcData = {
                            id: (new Date).getTime(),
                            jsonrpc: "2.0",
                            method: "aria2.addUri",
                            params: [ "token:" + Config.get(ConfigEnum.WangPan_Aria_Token, ""), [ link ], {
                                dir: Config.get(ConfigEnum.WangPan_Aria_Dir, "D:\\"),
                                out: filename,
                                header: [ "User-Agent: " + ua, "Cookie: " + cookie ]
                            } ]
                        }, _a.label = 1;

                      case 1:
                        return _a.trys.push([ 1, 3, , 4 ]), [ 4, Http.ajaxNew(url, "POST", rpcData, new Map([ [ "User-Agent", ua ] ])) ];

                      case 2:
                        return [ 2, !!_a.sent() ];

                      case 3:
                        return e_1 = _a.sent(), Logger.error(e_1), [ 2, !1 ];

                      case 4:
                        return [ 2 ];
                    }
                }));
            }));
        }, NetDiskDirectService.baiduEvent = function() {
            var _this = this;
            $(document).on("click", ".okv-btn-direct", (function(e) {
                var fidsStr, selectList = NetDiskDirectService.baiduSelectedList();
                0 !== selectList.length ? 2 !== (fidsStr = "[" + selectList.map((function(item) {
                    return item.fs_id;
                })).join(",") + "]").length ? _this.getToken().then((function(token) {
                    Route.baiduDriect(fidsStr, token).then((function(res) {
                        return __awaiter(_this, void 0, void 0, (function() {
                            var ck_1, _a;
                            return __generator(this, (function(_b) {
                                switch (_b.label) {
                                  case 0:
                                    return Logger.debug(res), 0 !== res.errno ? [ 3, 2 ] : (_a = "BDUSS=", [ 4, Core.getGmCookie("BDUSS") ]);

                                  case 1:
                                    return ck_1 = _a + _b.sent() + ";", sAlert.html("\u76f4\u94fe\u4fe1\u606f", NetDiskDirectService.generateDom(res.list.map((function(e) {
                                        var obj = new QuarkFileResponse;
                                        return obj.fid = e.fs_id.toString(), obj.file_name = e.filename, obj.download_url = token ? e.dlink + "&access_token=" + token : e.dlink, 
                                        obj.size = e.size, obj.ua = "pan.baidu.com", obj.cookie = ck_1, obj;
                                    }))), !0, "\u6211\u597d\u4e86", "#3085d6", "auto"), [ 3, 3 ];

                                  case 2:
                                    112 === res.errno ? Toast.error("\u63d0\u793a\uff1a\u9875\u9762\u8fc7\u671f\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01") : Toast.error("\u63d0\u793a\uff1a\u83b7\u53d6\u4e0b\u8f7d\u94fe\u63a5\u5931\u8d25\uff01\u8bf7\u5237\u65b0\u7f51\u9875\u540e\u91cd\u8bd5\uff01"), 
                                    _b.label = 3;

                                  case 3:
                                    return [ 2 ];
                                }
                            }));
                        }));
                    }));
                })) : Toast.error("\u63d0\u793a\uff1a\u8bf7\u6253\u5f00\u6587\u4ef6\u5939\u540e\u52fe\u9009\u6587\u4ef6\uff01") : Toast.error("\u63d0\u793a\uff1a\u8bf7\u5148\u52fe\u9009\u8981\u4e0b\u8f7d\u7684\u6587\u4ef6\uff01");
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
                    if (Logger.debug(res), 31001 != res.code) if (0 == res.code) {
                        var data = res.data.map((function(e) {
                            return e.cookie = unsafeWindow.document.cookie, e;
                        }));
                        sAlert.html("\u76f4\u94fe\u4fe1\u606f", NetDiskDirectService.generateDom(data), !0, "\u6211\u597d\u4e86", "#3085d6", "auto");
                    } else Toast.error("\u94fe\u63a5\u83b7\u53d6\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5(" + res.code + ")"); else Toast.error("\u8bf7\u5148\u767b\u5f55\u7f51\u76d8");
                })) : sAlert.error("\u8bf7\u5148\u5c06\u6587\u4ef6\u4fdd\u5b58\u5230\u81ea\u5df1\u7684\u7f51\u76d8")) : Toast.error("\u6682\u4e0d\u652f\u6301\u6587\u4ef6\u5939\u4e0b\u8f7d") : Toast.error("\u8bf7\u5148\u52fe\u9009\u8981\u4e0b\u8f7d\u7684\u6587\u4ef6");
            }));
        }, NetDiskDirectService.commonEvent = function() {
            var _this = this;
            $(document).on("click", ".quark-down-item", (function(e) {
                Core.open(e.target.dataset.url, !0);
            })), $(document).on("click", ".quark-copy-item", (function(e) {
                GM_setClipboard(e.target.dataset.url), e.target.innerText = "\u590d\u5236\u6210\u529f";
            })), $(document).on("click", ".quark-send-item", (function(e) {
                return __awaiter(_this, void 0, void 0, (function() {
                    var url, filename, ua, ck, res;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return url = e.target.dataset.url, filename = e.target.dataset.filename, ua = e.target.dataset.ua, 
                            "BDUSS=;" == (ck = e.target.dataset.ck) && Toast.warning("cookie\u83b7\u53d6\u5f02\u5e38,\u4e0b\u8f7d\u53ef\u80fd\u4f1a\u5931\u8d25,\u53ef\u5c1d\u8bd5\u4f7f\u7528\u811a\u672c\u732b\u907f\u514d\u8be5\u95ee\u9898"), 
                            [ 4, NetDiskDirectService.sendLinkToRPC(filename, url, ua, ck) ];

                          case 1:
                            return res = _a.sent(), e.target.innerText = res ? "\u53d1\u9001\u6210\u529f" : "\u53d1\u9001\u5931\u8d25(\u8bf7\u68c0\u67e5\u914d\u7f6e)", 
                            [ 2 ];
                        }
                    }));
                }));
            }));
        }, NetDiskDirectService.generateDom = function(list) {
            var rows = "";
            return list.forEach((function(e) {
                rows += '<tr>\n                        <td class="bili-table-cell">' + e.file_name + '</td>\n                        <td class="bili-table-cell">' + Core.sizeFormat(e.size) + '</td>\n                        <td class="bili-table-cell">\n                        <button class="okv-btn okv-btn-primary okv-btn-success quark-send-item" data-url="' + e.download_url + '" data-filename="' + e.file_name + '" data-ua="' + e.ua + '" data-ck="' + e.cookie + '">\u53d1\u9001Aria</button>\n                        <button class="okv-btn okv-btn-primary quark-copy-item" data-url="' + e.download_url + '">\u590d\u5236\u94fe\u63a5</button>\n                        <button class="okv-btn okv-btn-primary quark-down-item" data-url="' + e.download_url + '">\u4e0b\u8f7d</button>\n                        </td>\n                    </tr>';
            })), '<div style="height: 30rem">\n                    <div style="padding-bottom: 25px;">\u5982\u679c\u51fa\u73b0403\u8bf7\u5c1d\u8bd5<a style="color: red" target="_blank" href="https://settings.wandhi.com/tools/wangpan/page.html">\u68c0\u67e5\u914d\u7f6e</a>\u6216\u5347\u7ea7<b>\u6700\u65b0\u7248\u672c</b>\n                    <p>\u76f4\u94fe<b style="color: red">\u5e76\u4e0d\u80fd</b> \u4ee3\u66ff\u7f51\u76d8VIP\u529f\u80fd\uff0c\u4e0d\u4f1a\u4f7f\u7528\u8bf7\u5148\u67e5\u770b<a href="https://wiki.wandhi.com" style="color: blue" target="_blank">Wiki</a></p>\n                    <p>\u76f4\u94fe\u529f\u80fd\u642d\u914dVIP\u4f1a\u5458\u624d\u80fd\u83b7\u53d6\u5230\u52a0\u901f\u94fe\u63a5<b>(<a href="' + NetDiskDirectService.bdVip1 + '" target="_blank" style="color: red">\u83b7\u53d6\u4e34\u65f6VIP\u2460</a>\uff0c<a href="' + NetDiskDirectService.bdVip2 + '" target="_blank" style="color: red">\u83b7\u53d6\u4e34\u65f6VIP\u2461</a>)</b></p>\n                    <p><b style="color: red">\u5927\u6587\u4ef6</b>\u8bf7\u4f18\u5148\u4f7f\u7528Aria\u4e4b\u7c7b\u7684\u4e0b\u8f7d\u5de5\u5177,\u76f4\u63a5\u70b9\u51fb\u4e0b\u8f7d\u5927\u6982\u7387\u4f1a\u6ca1\u6743\u9650</p>\n                    <p><b style="color: red">\u767e\u5ea6UA\uff1a</b>pan.baidu.com</p>\n                    </div>\n                    <table class="bili-table bili-table-small">\n                        <thead class="bili-table-head">\n                            <tr>                        \n                                <th class="bili-table-cell">\u6807\u9898</th>\n                                <th class="bili-table-cell">\u5927\u5c0f</th>\n                                <th class="bili-table-cell">\u64cd\u4f5c</th>\n                            </tr>\n                        </thead>\n                        <tbody class="at-table-tbody">                    \n                            ' + rows + "\n                        </tbody>    \n                    </table>\n                </div>";
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
        }, NetDiskDirectService.getQuarkShareSelectedFile = function() {
            var reactDom, props, fileList, selectedKeys_2, selectedList = [];
            try {
                return reactDom = document.getElementsByClassName("file-list")[0], (props = Core.getReact(reactDom).props) && (fileList = props.list || [], 
                selectedKeys_2 = props.selectedRowKeys || [], fileList.forEach((function(val) {
                    selectedKeys_2.includes(val.share_id) && selectedList.push(val);
                }))), selectedList;
            } catch (e) {
                return selectedList;
            }
        }, NetDiskDirectService.quarkBtn = '<div class="ovk-main" style="margin-right: 10px;">\n    <button type="button" class="ant-btn btn-file okv-btn-direct">\n        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNOSAxMmwyIDIgMi0yeiIvPjxwYXRoIGQ9Ik0xNCA4aDEuNTUzYy44NSAwIDEuMTYuMDkzIDEuNDcuMjY3LjMxMS4xNzQuNTU2LjQzLjcyMi43NTYuMTY2LjMyNi4yNTUuNjUuMjU1IDEuNTR2NC44NzNjMCAuODkyLS4wODkgMS4yMTUtLjI1NSAxLjU0LS4xNjYuMzI3LS40MS41ODMtLjcyMi43NTctLjMxLjE3NC0uNjIuMjY3LTEuNDcuMjY3SDYuNDQ3Yy0uODUgMC0xLjE2LS4wOTMtMS40Ny0uMjY3YTEuNzc4IDEuNzc4IDAgMDEtLjcyMi0uNzU2Yy0uMTY2LS4zMjYtLjI1NS0uNjUtLjI1NS0xLjU0di00Ljg3M2MwLS44OTIuMDg5LTEuMjE1LjI1NS0xLjU0LjE2Ni0uMzI3LjQxLS41ODMuNzIyLS43NTcuMzEtLjE3NC42Mi0uMjY3IDEuNDctLjI2N0gxMSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDN2MTAiLz48L2c+PC9zdmc+" class="btn-icon" alt="" style="width: 20px;height: 20px">\n        <span>\u83b7\u53d6\u76f4\u94fe</span>\n    </button>\n</div>', 
        NetDiskDirectService.btnSelecotr = "", NetDiskDirectService.btn = "", NetDiskDirectService.bdVip2 = "https://wiki.wandhi.com/pan/#%F0%9F%9B%92%E5%90%88%E7%A7%9F%E5%90%A7", 
        NetDiskDirectService.bdVip1 = "http://cc.hrfx.gq", NetDiskDirectService;
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
    }(PluginBase), css_248z$1 = '.viewer-close:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen-exit:before,.viewer-fullscreen:before,.viewer-next:before,.viewer-one-to-one:before,.viewer-play:before,.viewer-prev:before,.viewer-reset:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-zoom-in:before,.viewer-zoom-out:before{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC");background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:"Zoom In"}.viewer-zoom-out:before{background-position:-20px 0;content:"Zoom Out"}.viewer-one-to-one:before{background-position:-40px 0;content:"One to One"}.viewer-reset:before{background-position:-60px 0;content:"Reset"}.viewer-prev:before{background-position:-80px 0;content:"Previous"}.viewer-play:before{background-position:-100px 0;content:"Play"}.viewer-next:before{background-position:-120px 0;content:"Next"}.viewer-rotate-left:before{background-position:-140px 0;content:"Rotate Left"}.viewer-rotate-right:before{background-position:-160px 0;content:"Rotate Right"}.viewer-flip-horizontal:before{background-position:-180px 0;content:"Flip Horizontal"}.viewer-flip-vertical:before{background-position:-200px 0;content:"Flip Vertical"}.viewer-fullscreen:before{background-position:-220px 0;content:"Enter Full Screen"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:"Exit Full Screen"}.viewer-close:before{background-position:-260px 0;content:"Close"}.viewer-container{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;bottom:0;direction:ltr;font-size:0;left:0;line-height:0;overflow:hidden;position:absolute;right:0;top:0;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer-container ::-moz-selection,.viewer-container::-moz-selection{background-color:transparent}.viewer-container ::selection,.viewer-container::selection{background-color:transparent}.viewer-container:focus{outline:0}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:rgba(0,0,0,.5);overflow:hidden}.viewer-list{box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;transition:opacity .15s;width:30px}.viewer-list>li:focus,.viewer-list>li:hover{opacity:.75}.viewer-list>li:focus{outline:0}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;bottom:0;cursor:none;display:none;right:0;z-index:1}.viewer-player,.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:6px 3px}.viewer-toolbar>ul>li{background-color:rgba(0,0,0,.5);border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover{background-color:rgba(0,0,0,.8)}.viewer-toolbar>ul>li:focus{box-shadow:0 0 3px #fff;outline:0;position:relative;z-index:1}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:rgba(0,0,0,.8);border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1.2;margin:5px 5%;max-width:90%;min-height:14px;opacity:.8;overflow:hidden;text-overflow:ellipsis;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{-webkit-app-region:no-drag;background-color:rgba(0,0,0,.5);border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:rgba(0,0,0,.8)}.viewer-button:focus{box-shadow:0 0 3px #fff;outline:0}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:rgba(0,0,0,.5)}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{transition:all .3s}@keyframes viewer-spinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.viewer-loading:after{animation:viewer-spinner 1s linear infinite;border:4px solid hsla(0,0%,100%,.1);border-left-color:hsla(0,0%,100%,.5);border-radius:50%;content:"";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media (max-width:767px){.viewer-hide-xs-down{display:none}}@media (max-width:991px){.viewer-hide-sm-down{display:none}}@media (max-width:1199px){.viewer-hide-md-down{display:none}}\n', 
    styleInject(css_248z$1), ImgViewService = function(_super) {
        function ImgViewService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.V2EX, /v2ex\.com\/t/i ], [ SiteEnum.Github, /github\.com/i ] ]), 
            _this._unique = !1, _this._appName = "ImgView", _this.imgSelector = [], _this;
        }
        return __extends(ImgViewService, _super), ImgViewService.prototype.loader = function() {
            switch (this.site) {
              case SiteEnum.V2EX:
                this.imgSelector.push(".reply_content", ".topic_content"), this.beforeAct = ImgViewService.clearParentA;
                break;

              case SiteEnum.Github:
                this.imgSelector.push(".markdown-body"), ImgViewService.EleAFilertHasAttr.set("rel", "noopener"), 
                this.beforeAct = ImgViewService.clearParentA;
            }
        }, ImgViewService.clearParentA = function(ele) {
            var r = !1;
            return $(ele).find("img").each((function(index, element) {
                var _a, _b, isFilter_1, isFilter_2, a = $(element).parent("a");
                (null === (_a = ImgViewService.EleAFilertHasClass) || void 0 === _a ? void 0 : _a.length) > 0 && (isFilter_1 = !1, 
                ImgViewService.EleAFilertHasClass.forEach((function(item) {
                    a.hasClass(item) && (isFilter_1 = !0);
                })), !isFilter_1) || (null === (_b = ImgViewService.EleAFilertHasAttr) || void 0 === _b ? void 0 : _b.size) > 0 && (isFilter_2 = !1, 
                ImgViewService.EleAFilertHasAttr.forEach((function(value, key) {
                    a.attr(key) && a.attr(key).indexOf(value) > -1 && (isFilter_2 = !0);
                })), !isFilter_2) || (a.attr("href", "javascript:void(0)").removeAttr("target"), 
                r = !0);
            })), r;
        }, ImgViewService.prototype.run = function() {
            var _this = this;
            Logger.debug("ImgViewService run,the selector is " + this.imgSelector), this.imgSelector.forEach((function(selector) {
                $(selector).each((function(index, element) {
                    if (_this.beforeAct(element)) var viewer_1 = new Viewer__default.default(element, {
                        viewed: function() {
                            viewer_1.zoomTo(.5);
                        }
                    });
                }));
            }));
        }, ImgViewService.EleAFilertHasClass = [], ImgViewService.EleAFilertHasAttr = new Map, 
        ImgViewService;
    }(PluginBase), css_248z = ".okv-zhihu-title-time {\n  color: #8590a6;\n  font-size: 14px;\n  display: block;\n  padding: 5px 0px;\n}\n", 
    styleInject(css_248z), ZhihuService = function(_super) {
        function ZhihuService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.ZhiHu, /https:\/\/www\.zhihu\.com\/question\//i ] ]), 
            _this._unique = !1, _this._appName = "\u77e5\u4e4e", _this;
        }
        return __extends(ZhihuService, _super), ZhihuService.prototype.loader = function() {}, 
        ZhihuService.prototype.run = function() {
            var that = this;
            Core.background((function() {
                that.questionDate();
            }), 2);
        }, ZhihuService.prototype.questionDate = function() {
            $(".AnswerItem:not(.okv-time-init)").each((function(index, ele) {
                var createTime = $(ele).find("[itemprop~=dateCreated][content]").attr("content"), editTime = $(ele).find("[itemprop~=dateModified][content]").attr("content"), authorItem = $(ele).find(".ContentItem-meta"), h = '<div class="okv-zhihu-title-time">\u521b\u5efa:' + Core.format(new Date(createTime)) + "       \u7f16\u8f91:" + Core.format(new Date(editTime)) + "</div>";
                $(authorItem).append(h), $(ele).addClass("okv-time-init");
            }));
        }, ZhihuService;
    }(PluginBase), Menu = Common.Menu, XhsService = function(_super) {
        function XhsService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.Xhs, /www\.xiaohongshu\.com\/explore/ ] ]), 
            _this._appName = "xhs", _this._unique = !1, _this.semiui = !0, _this;
        }
        return __extends(XhsService, _super), XhsService.prototype.loader = function() {}, 
        XhsService.prototype.run = function() {
            Logger.debug("xhs service");
            this.menu.Init([ {
                title: "\u672c\u6b21\u5173\u95ed",
                show: "\u672c\u6b21<br>\u5173\u95ed",
                type: "search"
            }, {
                title: "\u6c34\u5370\u89e3\u6790",
                show: "\u6c34\u5370<br>\u89e3\u6790",
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
        }, XhsService.prototype._onClick = function() {
            $("body").on("click", "[data-cat=process]", (function() {
                XhsService.xhsPorcess();
            })), $("body").on("click", "[data-cat=search]", (function() {
                Menu.close();
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("http://shop.huizhek.com");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("http://shop.huizhek.com");
            }));
        }, XhsService.xhsPorcess = function() {
            var _a, _b, _c, _d, info, noteId, note, selectNum, n, num, code, url = Core.url, res = /https:\/\/www\.xiaohongshu\.com\/explore\/[a-zA-Z0-9_\-]{5,22}/i.test(url);
            if (res) if (Core.getCookie("gid")) {
                if (noteId = null === (_a = null == (info = unsafeWindow.window.__INITIAL_STATE__) ? void 0 : info.note) || void 0 === _a ? void 0 : _a.firstNoteId.value) {
                    if (!(note = null === (_c = null === (_b = null == info ? void 0 : info.note) || void 0 === _b ? void 0 : _b.noteDetailMap[noteId]) || void 0 === _c ? void 0 : _c.note)) return void Toast.error("\u5185\u5bb9\u4fe1\u606f\u83b7\u53d6\u5931\u8d25");
                    Logger.debug(note), "video" == (null == note ? void 0 : note.type) ? Toast.warning("\u6682\u4e0d\u652f\u6301\u89c6\u9891\u89e3\u6790") : "normal" == (null == note ? void 0 : note.type) ? (selectNum = $(".fraction").text(), 
                    Logger.debug(selectNum), num = 0, null == (n = selectNum.match(/\d+/)) || n.length < 1 || (num = Number.parseInt(n[0])), 
                    code = null === (_d = null == note ? void 0 : note.imageList[num > 0 ? num - 1 : num]) || void 0 === _d ? void 0 : _d.infoList[1].url, 
                    Core.open("https://jx.wandhi.com?u=" + window.btoa(code) + "&t=xhsimg")) : Toast.error("\u9519\u8bef\u7684\u6570\u636e\u7c7b\u578b,\u8bf7\u5411\u4f5c\u8005\u53cd\u9988(" + (null == note ? void 0 : note.type) + ")");
                }
            } else Toast.warning("\u8bf7\u5148\u767b\u5f55\u5c0f\u7ea2\u4e66"); else Toast.warning("\u8bf7\u5148\u9009\u62e9\u4e00\u7bc7\u5185\u5bb9");
        }, XhsService;
    }(PluginBase), SettingUI = function(_super) {
        function SettingUI(p) {
            var _this = _super.call(this, p) || this;
            return _this.configKeys = [ "search_helper_switch", "search_helper_postion" ], _this.handOk = function(e) {
                var key, obj = _this.fromApi.getValues();
                for (key in obj) Config.set(key, obj[key]);
                _this.setState({
                    visible: !1
                }), Toast.success("\u4fdd\u5b58\u6210\u529f");
            }, _this.handCancel = function(e) {
                _this.setState({
                    visible: !1
                });
            }, _this.state = {
                visible: !0,
                search_helper_switch: Config.get(ConfigEnum.Search_Helper_Switch, !0),
                search_helper_postion: Config.get(ConfigEnum.Search_Helper_Postion, "cl")
            }, _this.handCancel = _this.handCancel.bind(_this), _this;
        }
        return __extends(SettingUI, _super), SettingUI.prototype.render = function() {
            var _this = this;
            return React__default.default.createElement(React__default.default.Fragment, null, React__default.default.createElement(semiUi.Modal, {
                title: "\u63d2\u4ef6\u8bbe\u7f6e",
                visible: this.state.visible,
                onOk: this.handOk,
                onCancel: this.handCancel
            }, React__default.default.createElement(semiUi.Tabs, {
                tabPosition: "left",
                type: "line"
            }, React__default.default.createElement(semiUi.TabPane, {
                tab: React__default.default.createElement("span", null, "\u641c\u7d22\u52a9\u624b"),
                itemKey: "1"
            }, React__default.default.createElement("div", {
                className: "grid"
            }, React__default.default.createElement(semiUi.Form, {
                style: {
                    padding: "0 24px"
                },
                initValues: this.state,
                getFormApi: function(api) {
                    return _this.fromApi = api;
                },
                render: function(_a) {
                    return _a.formState, _a.formApi, _a.values, React__default.default.createElement(React__default.default.Fragment, null, React__default.default.createElement(semiUi.Form.Switch, {
                        field: "search_helper_switch",
                        label: "\u641c\u7d22\u52a9\u624b"
                    }), React__default.default.createElement(semiUi.Form.Select, {
                        field: "search_helper_postion",
                        label: "\u83dc\u5355\u4f4d\u7f6e",
                        style: {
                            width: "100%"
                        }
                    }, React__default.default.createElement(semiUi.Form.Select.Option, {
                        value: "tl"
                    }, "\u5de6\u4e0a"), React__default.default.createElement(semiUi.Form.Select.Option, {
                        value: "cl"
                    }, "\u5de6\u4e2d"), React__default.default.createElement(semiUi.Form.Select.Option, {
                        value: "bl"
                    }, "\u5de6\u4e0b")));
                },
                layout: "vertical",
                onValueChange: function(values) {}
            }))))));
        }, SettingUI;
    }(React__default.default.Component), SettingUIService = function(_super) {
        function SettingUIService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.All, /.*?/i ] ]), _this._unique = !1, 
            _this.semiui = !0, _this._appName = "SettingUI", _this;
        }
        return __extends(SettingUIService, _super), SettingUIService.prototype.loader = function() {}, 
        SettingUIService.prototype.run = function() {
            var _this = this;
            GM_registerMenuCommand("\u63d2\u4ef6\u8bbe\u7f6e", (function() {
                return Core.Render(React__default.default.createElement(SettingUI, {
                    key: (new Date).getTime()
                }), _this._appName);
            }));
        }, SettingUIService;
    }(PluginBase), OneKeyVipInjection = function() {
        function OneKeyVipInjection() {
            this.plugins = new Array, this.plugins = [ Container.Require(AdClearService), Container.Require(ControlMenuService), Container.Require(ImgViewService), Container.Require(SettingService), Container.Require(SettingUIService), Container.Require(AutoExpandService), Container.Require(AliyunPanToken), Container.Require(UpdateService), Container.Require(BiliImgService), Container.Require(BiliMobileService), Container.Require(MovieService), Container.Require(ListService), Container.Require(TaoBaoService), Container.Require(JdService), Container.Require(MusicService), Container.Require(XhsService), Container.Require(GwdService), Container.Require(CsdnAdService), Container.Require(WenKuService), Container.Require(LinkJumpService), Container.Require(YoutubeService), Container.Require(_GwdService), Container.Require(SearchService), Container.Require(NetDiskDirectService), Container.Require(ZhihuService) ], 
            Logger.info("container loaded");
        }
        return OneKeyVipInjection.prototype.Init = function() {
            this.plugins.every((function(element) {
                return element.linkTest() ? (new Promise((function(resolve) {
                    resolve(1);
                })).then(element.Process), Logger.debug("element [" + element.appName() + "];unique:[" + element.unique() + "]"), 
                !element.unique()) : (Logger.debug("element [" + element.appName() + "];not pass"), 
                !0);
            }));
        }, OneKeyVipInjection;
    }(), Logger.level = LogLevel.info, Container.Require(OneKeyVipInjection).Init();
}));
