// ==UserScript==
// @name         【玩的嗨】VIP工具箱,百度文库解析导出,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,下载B站视频等众多功能聚合 长期更新,放心使用
// @namespace    https://www.wandhi.com/
// @version      4.6.4
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  🔥功能介绍🔥：🎉 1、Vip视频解析；🎉 2、一站式音乐搜索解决方案；🎉 3、bilibili视频封面获取；🎉 4、bilibili视频下载(已支持分P下载)；🎉 5、上学吧答案查询(已下线)；🎉 6、商品历史价格展示(一次性告别虚假降价)；🎉 7、优惠券查询；🎉 8、CSDN页面、剪切板清理；🎉 9、页面自动展开(更多网站匹配中,欢迎提交想要支持的网站) 🎉 10、YouTube视频下载🎉 11、中间页自动跳转 12、搜索引擎快速跳转
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
// @include      *://item.taobao.com/*
// @include      *://s.taobao.com/search*
// @include      *://list.tmall.com/search_product.htm*
// @include      *://detail.tmall.com/*
// @include      *://chaoshi.detail.tmall.com/*
// @include      *://detail.tmall.hk/*
// @include      *://item.yiyaojd.com/*
// @include      *://item.jd.com/*
// @include      *://search.jd.com/*
// @include      *://item.jd.hk/*
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
// @include      *://link.csdn.net/*
// @include      *://link.zhihu.com/*
// @include      *://browser.gwdang.com/*
// @include      *www.jianshu.com/go-wild*
// @include      *://*gitee.com/link*
// @include      *://*juejin.cn/?target*
// @include      *://www.aliyundrive.com/drive*
// @include      *://www.youtube.com/watch?v=*
// @include      *://support.qq.com/products*
// @include      *://weibo.cn/sinaurl*
// @include      *://afdian.net/link*
// @include      *://*oschina.net/action/GoToLink*
// @include      *://jump2.bdimg.com/safecheck*
// @include      *://www.douban.com/link2/?url*
// @include      *://link.17173.com*
// @include      *://search.suning.com/*
// @match        *://www.baidu.com/*
// @match        *://www.google.com/*
// @match        *://www.sogou.com/*
// @exclude      *://tv.wandhi.com/*
// @exclude      *://vip.wandhi.com/*
// @include      *://settings.wandhi.com/*
// @require      https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require      https://lib.baomitu.com/limonte-sweetalert2/11.4.7/sweetalert2.all.min.js
// @require      https://lib.baomitu.com/echarts/4.6.0/echarts.min.js
// @require      https://lib.baomitu.com/layer/2.3/layer.js
// @require      https://lib.baomitu.com/vuex/3.5.1/vuex.min.js
// @require      https://lib.baomitu.com/qrcode-generator/1.4.4/qrcode.min.js
// @require      https://lib.baomitu.com/FileSaver.js/2.0.5/FileSaver.min.js
// @license      MIT
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      shangxueba365.com
// @connect      api.wandhi.com
// @connect      cdn.jsdelivr.net
// @connect      tool.manmanbuy.com
// @connect      xbeibeix.com
// @connect      gwdang.com
// @connect      scriptcat.org
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
// @antifeature  referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。
// ==/UserScript==

(function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(require("sweetalert2"), require("vue")) : "function" == typeof define && define.amd ? define([ "sweetalert2", "vue" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).Swal, global.Vue);
})(this, (function(Swal, Vue) {
    "use strict";
    var Swal__default, Vue__default, extendStatics, update_key, Min, Hour, Day, Week, Logger, LogLevel, Config, History, PriceDetail, ListPriceItem, BrowerType, Core, AjaxOption, Alert, Http, HttpHeaders, Convert, Result, HistoryResult, Route, Toast, ToastType, css_248z$8, Common, PluginBase, SiteEnum, UpdateService, VersionCompar, VersionResult, EventHelper, Runtime, BaseCoupon, VpCoupon, SuningCoupon, JdCoupon, TaoCoupon, DefCoupon, LinesOption, css_248z$7, MsgInfo, PromoInfo, HistoryService, KaolaCoupon, css_248z$6, sAlert, GwdService, css_248z$5, TaoBaoService, container, Container, css_248z$4, BiliImgService, Menu$1, MovieService, JdService, UrlHelper, MusicService, ItemType, Tao, ListService, css_248z$3, ConfigEnum, CsdnAdService, Menu, WenKuService, LinkJumpService, css_248z$2, _GwdService, AutoExpandService, BIliTools, BiliMobileService, AliyunPanToken, css_248z$1, css_248z, MfbMenu, MfbModel, YoutubeService, SettingService, ControlMenuService, SearchService, OneKeyVipInjection;
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
    Swal__default = _interopDefaultLegacy(Swal), Vue__default = _interopDefaultLegacy(Vue), 
    extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        })(d, b);
    }, update_key = "isUpdate", Min = 60, Hour = 60 * Min, Day = 24 * Hour, Week = 7 * Day, 
    Logger = function() {
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
    }(LogLevel || (LogLevel = {})), Config = function() {
        function Config() {}
        return Object.defineProperty(Config, "env", {
            get: function() {
                return GM_info;
            },
            enumerable: !1,
            configurable: !0
        }), Config.get = function(key, defaultValue) {
            var objStr, obj;
            return void 0 === defaultValue && (defaultValue = ""), (objStr = GM_getValue(this.encode(key), null)) && (-1 == (obj = JSON.parse(objStr)).exp || obj.exp > (new Date).getTime()) ? (Logger.info("cache true"), 
            obj.value) : (Logger.info("cache false"), defaultValue);
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
        }, Config;
    }(), History = function History() {
        this.max = 0, this.price_detail = [];
    }, PriceDetail = function PriceDetail() {}, ListPriceItem = function ListPriceItem() {}, 
    function(BrowerType) {
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
        return Core.appendTo = function(selecter, html) {
            $(selecter).append(html);
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
        }, Core.appendJs = function(url) {
            var linkScript = document.createElement("script");
            linkScript.type = "text/javascript", linkScript.src = url, this.head.appendChild(linkScript);
        }, Core.prototype.bodyAppendJs = function(url) {
            $("body").append($('<script type="text/javascript" src="' + url + '"><\/script>'));
        }, Core.currentUrl = function() {
            return window.location.href;
        }, Core.inIframe = function() {
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
            void 0 === loadInBackGround && (loadInBackGround = !1), GM_openInTab(url, loadInBackGround);
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
        }, Core;
    }(), function() {
        function HttpRequest(option) {
            this.headers = new Map, this.url = option.url, this.method = option.methodType, 
            this.dataType = option.dataType, this._option = option;
        }
        HttpRequest.prototype.onload = function(res) {
            this._option.onSuccess(res);
        }, HttpRequest.prototype.onerror = function() {
            this.onerror();
        }, HttpRequest.prototype.setQueryData = function(datas) {
            var fd, i;
            if (datas instanceof FormData) this.data = datas; else {
                for (i in fd = new FormData, datas) fd.append(i, datas[i]);
                this.data = fd;
            }
        }, Object.defineProperty(HttpRequest.prototype, "onLoad", {
            get: function() {
                return this.onSuccess;
            },
            enumerable: !1,
            configurable: !0
        });
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
        }, Http;
    }(), HttpHeaders = function HttpHeaders() {}, Convert = function() {
        function Convert() {}
        return Convert.genterData = function(data) {
            var temp_1, _data = new History;
            return _data.date = Core.format(new Date(Number.parseInt(data.lowerDate.match(/[0-9]{13}/)[0]) + 800), "yyyy-MM-dd"), 
            _data.min = data.lowerPrice, _data.max = _data.min, _data.max_date = _data.date, 
            _data.current = data.currentPrice.toString(), _data.mark = "" == data.changPriceRemark ? "\u6682\u65e0" : data.changPriceRemark, 
            0 != data.listPrice.length && data.listPrice || (temp_1 = [], data.datePrice.split("],[").forEach((function(v, n) {
                var values, t = new ListPriceItem;
                values = (v = v.replace(/\[|"|\]/g, "")).split(","), t.pr = Number.parseInt(values[1]), 
                t.yh = 3 == values.length ? values[2] : v.substring(v.indexOf(values[2]), v.length), 
                t.dt = values[0], temp_1.push(t);
            })), data.listPrice = temp_1), data.listPrice.forEach((function(v, n) {
                var detail = new PriceDetail;
                detail.timestamp = Number.parseInt(v.dt.match(/[0-9]{13}/)[0]) + 800, detail.time = Core.format(new Date(detail.timestamp), "yyyy-MM-dd"), 
                detail.price = v.pr, detail.mark = v.yh, _data.max < v.pr && (_data.max = v.pr, 
                _data.max_date = detail.time), _data.price_detail.push(detail);
            })), _data;
        }, Convert.genterDataV2 = function(data) {
            var _data, listPrice, temp_2;
            return (_data = new History).date = Core.format(new Date(data.lowerDate), "yyyy-MM-dd"), 
            _data.min = data.lowerPrice, _data.max = _data.min, _data.max_date = _data.date, 
            _data.current = data.currentPrice.toString(), _data.mark = "" == data.changPriceRemark ? "\u6682\u65e0" : data.changPriceRemark, 
            listPrice = [], 0 != data.datePrice.length && (temp_2 = [], data.datePrice.split("],[").forEach((function(v, n) {
                var values, t = new ListPriceItem;
                values = (v = v.replace(/\[|"|\]/g, "")).split(","), t.pr = Number.parseInt(values[1]), 
                t.yh = 3 == values.length ? values[2] : v.substring(v.indexOf(values[2]), v.length), 
                t.dt = values[0], temp_2.push(t);
            })), listPrice = temp_2), listPrice.forEach((function(v, n) {
                var detail = new PriceDetail;
                detail.timestamp = Number.parseInt(v.dt.match(/[0-9]{13}/)[0]) + 800, detail.time = Core.format(new Date(detail.timestamp), "yyyy-MM-dd"), 
                detail.price = v.pr, detail.mark = v.yh, _data.max < v.pr && (_data.max = v.pr, 
                _data.max_date = detail.time), _data.price_detail.push(detail);
            })), _data;
        }, Convert.genterAuth = function() {
            return __awaiter(this, void 0, Promise, (function() {
                var _auth;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return (_auth = Config.get("baseauth", "")) ? [ 4, _auth ] : [ 3, 2 ];

                      case 1:
                        return [ 2, _a.sent() ];

                      case 2:
                        return [ 4, Http.get_text(this.authApi).then((function(html) {
                            var matchR = html.match(/id=\"ticket\" value=\"(.*)\"/i);
                            return (_auth = null != matchR ? "" + matchR[1] : "").length > 4 && (_auth = "BasicAuth " + (_auth = _auth.substr(_auth.length - 4, 4) + _auth.substring(0, _auth.length - 4))), 
                            Config.set("baseauth", _auth, 60), _auth;
                        })) ];

                      case 3:
                        return [ 2, _auth = _a.sent() ];
                    }
                }));
            }));
        }, Convert.authApi = "https://tool.manmanbuy.com/HistoryLowest.aspx", Convert;
    }(), Result = function() {
        function Result() {}
        return Result.prototype.constructorq = function() {}, Result;
    }(), function(_super) {
        function StuResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(StuResult, _super);
    }(Result), function(_super) {
        function StrResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(StrResult, _super);
    }(Result), HistoryResult = function(_super) {
        function HistoryResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(HistoryResult, _super), HistoryResult;
    }(Result), function(_super) {
        function HistoryQueryResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(HistoryQueryResult, _super);
    }(Result), function(_super) {
        function HistoryV1Result() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(HistoryV1Result, _super);
    }(Result), function(_super) {
        function HistoryV2Result() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(HistoryV2Result, _super);
    }(Result), Route = function() {
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
        }, Route.queryHistoryv1 = function(url, siteType, callback) {
            var _this = this, that = this;
            this.baseApi(this.historyv1, new Map([ [ "url", url ] ]), (function(res) {
                Logger.debug(res), res.code ? Http.get(res.data).then((function(prices) {
                    var _res = new HistoryResult;
                    _res.code = 1, _res.data = Convert.genterData(prices), Logger.debug(_res), callback(_res);
                })).catch((function() {
                    that.queryHistory(url, siteType, callback);
                })) : _this.queryHistory(url, siteType, callback);
            }), 60);
        }, Route.queryHistoryv2 = function(url, siteType, callback) {
            var _this = this, that = this;
            this.baseApi(this.historyv2, new Map([ [ "url", url ] ]), (function(res) {
                Logger.debug(res), res.code ? Http.getWithHead(res.data.url, new Map, new Map([ [ "Authorization", res.data.auth ] ])).then((function(prices) {
                    var _res = new HistoryResult;
                    0 == prices.code ? _res.code = 1 : _res.code = -1, _res.code = 1, _res.data = Convert.genterDataV2(prices.data), 
                    Logger.debug(_res), callback(_res);
                })).catch((function() {
                    that.queryHistory(url, siteType, callback);
                })) : _this.queryHistory(url, siteType, callback);
            }), 60);
        }, Route.queryHistoryv3 = function(url, siteType, callback) {
            var _this = this, that = this;
            this.baseApi(this.historyv3, new Map([ [ "url", url ] ]), (function(res) {
                Logger.debug(res), res.code ? Convert.genterAuth().then((function(auth) {
                    Http.postWithHead(res.data.url, new Map([ [ "token", res.data.token ], [ "t", res.data.t ], [ "key", res.data.key ], [ "method", res.data.method ] ]), new Map([ [ "Authorization", null != auth ? auth : res.data.auth ] ])).then((function(prices) {
                        var _res = new HistoryResult;
                        0 == prices.code ? _res.code = 1 : 2 == prices.code ? (Config.clear("baseauth"), 
                        _this.queryHistoryv3(url, siteType, callback)) : _res.code = -1, _res.code = 1, 
                        _res.data = Convert.genterDataV2(prices.data), Logger.debug(_res), callback(_res);
                    })).catch((function() {
                        that.queryHistory(url, siteType, callback);
                    }));
                })) : _this.queryHistory(url, siteType, callback);
            }), 60);
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
            Http.getData(this.bilidown + "?cid=" + cid + "&avid=" + aid + "&qn=112", callback);
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
        }, Route.update_api = "https://cdn.jsdelivr.net/gh/maxzhang666/OneKeyVip/OneKeyVip.user.js?t=" + Core.uuid(), 
        Route.update_api_script_cat = "https://scriptcat.org/api/v1/scripts/72", Route.home_url = "https://wiki.wandhi.com", 
        Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", Route.install_url_two = "https://scriptcat.org/script-show-page/72", 
        Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", Route.sxb_key = "sxb_anhao", 
        Route.config = "/config/query", Route.history = "/history/", Route.historyv1 = "/history/v1", 
        Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", Route.bili = "/tools/bili", 
        Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", Route.bilidown = "https://api.bilibili.com/x/player/playurl", 
        Route.coupons = "/tb/infos/", Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", 
        Route.sn_coupons = "/sn/info", Route.vp_coupons = "/vp/info", Route.kl_coupons = "/kl/info", 
        Route;
    }(), Toast = function() {
        function Toast(msg, title, type) {
            this.creationTime = new Date, this.message = msg, this.type = type, this.title = title, 
            this.duration = 3e3, this.randomKey = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1));
        }
        return Toast.prototype.show = function() {
            var _this = this;
            Toast.containerVM.cards.splice(0, 0, this), void 0 !== this.duration && -1 != this.duration && setTimeout((function() {
                return _this.dismiss();
            }), this.duration);
        }, Toast.prototype.dismiss = function() {
            Toast.containerVM.cards.includes(this) && Toast.containerVM.cards.splice(Toast.containerVM.cards.indexOf(this), 1);
        }, Object.defineProperty(Toast.prototype, "element", {
            get: function() {
                return $(".toast-card[data-key='" + this.key + "']");
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(Toast.prototype, "key", {
            get: function() {
                return this.creationTime.toISOString() + "[" + this.randomKey + "]";
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(Toast, "containerVM", {
            get: function() {
                return this.element || Toast.createToastContainer(), this.element;
            },
            enumerable: !1,
            configurable: !0
        }), Toast.createToastContainer = function() {
            document.querySelector(".toast-card-container") || (document.body.insertAdjacentHTML("beforeend", '<transition-group class="toast-card-container" name="toast-card-container" tag="div">\n                    <toast-card v-for="card of cards" :data-key="card.key" :key="card.key" :card="card"></toast-card>\n                </transition-group>'), 
            document.body.insertAdjacentHTML("afterend", '<style>.toast-card-container{--card-min-width:240px;--card-min-width-negative:-240px;position:fixed;left:0;bottom:0;display:flex;flex-direction:column-reverse;align-items:start;padding-left:16px;z-index:100001;pointer-events:none;overflow:hidden;width:100%;height:100%;transition:.2s ease-out}.toast-card-container *{pointer-events:initial;transition:.2s ease-out}.toast-card.toast-card-container-enter,.toast-card.toast-card-container-leave-to{opacity:0;transform:translateX(var(--card-min-width-negative))}.toast-card{background:#fff;min-width:var(--card-min-width);max-width:60vw;min-height:96px;margin:8px 0;box-shadow:rgba(0,0,0,.2) 0 4px 8px 0;transform-origin:left;overflow:hidden;display:flex;flex-direction:column;border-left-style:solid;transition:.3s cubic-bezier(.18,.89,.32,1.28);position:relative;border-left-width:0;padding-left:var(--corner-radius);border-radius:var(--corner-radius)}.toast-card.toast-card-container-leave-active{position:absolute;transition:.3s cubic-bezier(.6,-.28,.74,.05)}.toast-card-header{display:flex;align-items:center}.toast-card-title{font-size:18px;color:#000;opacity:.5;margin:16px;font-weight:700;flex:1 1 auto}.toast-card-dismiss{height:24px;width:24px;flex:0 0 auto;padding:16px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:.2s ease-out;transform-origin:center;opacity:.5;box-sizing:content-box}.toast-card-dismiss:hover{transform:scale(1.2)}.toast-card-dismiss:active{transform:scale(1.1)}.toast-card-message{color:#000;font-size:14px;margin:0 16px 16px;white-space:pre-wrap;display:flex;align-items:center;line-height:1.5;flex-wrap:wrap;word-break:break-all;max-height:200px;overflow:auto}.toast-card.toast-default{border-left-color:#444}.toast-card.toast-error{border-left-color:#f44336}.toast-card.toast-info{border-left-color:#2196f3}.toast-card.toast-success{border-left-color:#8bc34a}.toast-card .toast-card-border{position:absolute;height:100%;width:4px;border-radius:var(--corner-radius);height:calc(100% - 10px);width:var(--corner-radius);top:5px;left:0}.toast-card.toast-default .toast-card-border{background-color:#444}.toast-card.toast-error .toast-card-border{background-color:#f44336}.toast-card.toast-info .toast-card-border{background-color:#2196f3}.toast-card.toast-success .toast-card-border{background-color:#8bc34a}.toast-card .link,.toast-card span{display:inline-block;padding:4px 6px;margin:0 2px;background-color:#8882;text-decoration:none;color:#000;transition:.2s ease-out;border-radius:var(--corner-radius)}.toast-card .link:hover{background-color:#8883}.toast-card .link:active{background-color:#8884}.toast-card .download-link{color:inherit!important;text-decoration:underline;word-break:break-all}@keyframes loading{0%,100%{top:0;left:50%}25%{top:50%;left:100%}50%{top:100%;left:50%}75%{top:50%;left:0}}.toast-card .loading{width:14px;height:14px;display:inline-block;margin-right:14px;position:relative}.toast-card .loading::after{content:"";width:10px;height:10px;background-color:#8884;border-radius:50%;display:block;transform:translateX(-50%) translateY(-50%);position:absolute;top:0;left:50%;animation:1s cubic-bezier(.22,.61,.36,1) infinite loading}</style>'), 
            this.element = new Vue__default.default({
                el: ".toast-card-container",
                components: {
                    "toast-card": {
                        props: [ "card" ],
                        template: '<div class="toast-card icons-enabled visible" :class="\'toast-\' + card.type">\n                            <div class="toast-card-border"></div>\n                            <div class="toast-card-header">\n                                <h1 class="toast-card-title">{{card.title}}</h1>\n                                <div class="toast-card-dismiss" @click="card.dismiss()">\n                                    <svg style="width:22px;height:22px" viewBox="0 0 24 24">\n                                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />\n                                    </svg>\n                                </div>\n                            </div>\n                        <div class="toast-card-message" v-html="card.message"></div>\n                        </div>'
                    }
                },
                data: {
                    cards: []
                }
            }));
        }, Toast.internalShow = function(msg, title, time, e) {
            var n = new Toast(msg, title, e);
            return n.duration = time, n.show(), n;
        }, Toast.show = function(msg, title, time) {
            return void 0 === time && (time = -1), this.internalShow(msg, title, time, ToastType.Default);
        }, Toast.info = function(msg, title, time) {
            return void 0 === time && (time = -1), this.internalShow(msg, title, time, ToastType.Info);
        }, Toast.success = function(msg, title, time) {
            return void 0 === time && (time = -1), this.internalShow(msg, title, time, ToastType.Success);
        }, Toast.error = function(msg, title, time) {
            return void 0 === time && (time = -1), this.internalShow(msg, title, time, ToastType.Error);
        }, Toast;
    }(), function(ToastType) {
        ToastType.Default = "default", ToastType.Info = "info", ToastType.Success = "success", 
        ToastType.Error = "error";
    }(ToastType || (ToastType = {})), css_248z$8 = 'html .aside-nav {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    font-size: 62.5%\n}\n\nbody .aside-nav {\n    font-family: "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;\n    margin: 0;\n    font-size: 1.6rem;\n    color: #4e546b\n}\n\n.aside-nav {\n    position: fixed;\n    bottom: 0;\n    left: -47px;\n    width: 260px;\n    height: 260px;\n    -webkit-filter: url(#goo);\n    filter: url(#goo);\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    opacity: .75;\n    z-index: 99999\n}\n\n.aside-nav.no-filter {\n    -webkit-filter: none;\n    filter: none\n}\n\n.aside-nav .aside-menu {\n    position: absolute;\n    width: 70px;\n    height: 70px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background: #f34444;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    text-align: center;\n    line-height: 70px;\n    color: #fff;\n    font-size: 20px;\n    z-index: 1;\n    cursor: move\n}\n\n.aside-nav .menu-item {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #ff7676;\n    left: -95px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    line-height: 60px;\n    text-align: center;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    text-decoration: none;\n    color: #fff;\n    -webkit-transition: background .5s, -webkit-transform .6s;\n    transition: background .5s, -webkit-transform .6s;\n    -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n    transition: transform .6s, background .5s;\n    transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box\n}\n\n.aside-nav .menu-item:hover {\n    background: #a9c734\n}\n\n.aside-nav .menu-line {\n    line-height: 20px;\n    padding-top: 10px\n}\n\n.aside-nav:hover {\n    opacity: 1\n}\n\n.aside-nav:hover .aside-menu {\n    -webkit-animation: jello 1s;\n    -moz-animation: jello 1s;\n    animation: jello 1s\n}\n\n.aside-nav:hover .menu-first {\n    -webkit-transform: translate3d(0, -135%, 0);\n    -moz-transform: translate3d(0, -135%, 0);\n    transform: translate3d(0, -135%, 0)\n}\n\n.aside-nav:hover .menu-second {\n    -webkit-transform: translate3d(120%, -70%, 0);\n    -moz-transform: translate3d(120%, -70%, 0);\n    transform: translate3d(120%, -70%, 0)\n}\n\n.aside-nav:hover .menu-third {\n    -webkit-transform: translate3d(120%, 70%, 0);\n    -moz-transform: translate3d(120%, 70%, 0);\n    transform: translate3d(120%, 70%, 0)\n}\n\n.aside-nav:hover .menu-fourth {\n    -webkit-transform: translate3d(0, 135%, 0);\n    -moz-transform: translate3d(0, 135%, 0);\n    transform: translate3d(0, 135%, 0)\n}\n\n@-webkit-keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@-moz-keyframes jello {\n    from, 11.1%, to {\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n@keyframes jello {\n    from, 11.1%, to {\n        -webkit-transform: none;\n        -moz-transform: none;\n        transform: none\n    }\n    22.2% {\n        -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n        -moz-transform: skewX(-12.5deg) skewY(-12.5deg);\n        transform: skewX(-12.5deg) skewY(-12.5deg)\n    }\n    33.3% {\n        -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n        -moz-transform: skewX(6.25deg) skewY(6.25deg);\n        transform: skewX(6.25deg) skewY(6.25deg)\n    }\n    44.4% {\n        -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n        -moz-transform: skewX(-3.125deg) skewY(-3.125deg);\n        transform: skewX(-3.125deg) skewY(-3.125deg)\n    }\n    55.5% {\n        -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n        -moz-transform: skewX(1.5625deg) skewY(1.5625deg);\n        transform: skewX(1.5625deg) skewY(1.5625deg)\n    }\n    66.6% {\n        -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);\n        -moz-transform: skewX(-.78125deg) skewY(-.78125deg);\n        transform: skewX(-.78125deg) skewY(-.78125deg)\n    }\n    77.7% {\n        -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n        -moz-transform: skewX(0.390625deg) skewY(0.390625deg);\n        transform: skewX(0.390625deg) skewY(0.390625deg)\n    }\n    88.8% {\n        -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        -moz-transform: skewX(-.1953125deg) skewY(-.1953125deg);\n        transform: skewX(-.1953125deg) skewY(-.1953125deg)\n    }\n}\n\n.animated {\n    -webkit-animation-duration: 1s;\n    -moz-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both\n}\n\n@-webkit-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@-moz-keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n@keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n        -webkit-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        -moz-animation-timing-function: cubic-bezier(0.215, .61, .355, 1);\n        animation-timing-function: cubic-bezier(0.215, .61, .355, 1)\n    }\n    from {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 800px, 0);\n        -moz-transform: translate3d(0, 800px, 0);\n        transform: translate3d(0, 800px, 0)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: translate3d(0, -20px, 0);\n        -moz-transform: translate3d(0, -20px, 0);\n        transform: translate3d(0, -20px, 0)\n    }\n    75% {\n        -webkit-transform: translate3d(0, 10px, 0);\n        -moz-transform: translate3d(0, 10px, 0);\n        transform: translate3d(0, 10px, 0)\n    }\n    90% {\n        -webkit-transform: translate3d(0, -5px, 0);\n        -moz-transform: translate3d(0, -5px, 0);\n        transform: translate3d(0, -5px, 0)\n    }\n    to {\n        -webkit-transform: translate3d(0, 0, 0);\n        -moz-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0)\n    }\n}\n\n.bounceInUp {\n    -webkit-animation-name: bounceInUp;\n    -moz-animation-name: bounceInUp;\n    animation-name: bounceInUp;\n    -webkit-animation-delay: 1s;\n    -moz-animation-delay: 1s;\n    animation-delay: 1s\n}\n', 
    styleInject(css_248z$8), function(Common) {
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
        SiteEnum.All = "All", SiteEnum.Settings = "Settings", SiteEnum.Settings_AutoJump = "Settings_AutoJump", 
        SiteEnum.Settings_AutoJump_Opt = "Settings_AutoJump_Opt", SiteEnum.Settings_CSDN = "Settings_CSDN", 
        SiteEnum.Settings_CSDN_Opt = "Settings_CSDN_Opt", SiteEnum.Settings_Search_Opt = "Settings_Search_Opt", 
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
        SiteEnum.ALY = "ALY", SiteEnum.BDY1 = "BDY1", SiteEnum.LZY = "LZY", SiteEnum.SuNing = "SuNing", 
        SiteEnum.Steam = "Steam", SiteEnum.Vp = "Vp", SiteEnum.CSDN = "CSDN", SiteEnum.ZhiHu = "ZhiHu", 
        SiteEnum.JianShu = "JianShu", SiteEnum.JueJin = "JueJin", SiteEnum.Gitee = "Gitee", 
        SiteEnum.Weibo = "Weibo", SiteEnum.TuXiaoChao = "TuXiaoChao", SiteEnum.OsCh = "OsCh", 
        SiteEnum.AiFaDian = "AiFaDian", SiteEnum.Baidu = "Baidu", SiteEnum.DouBan = "DouBan", 
        SiteEnum.g17173 = "g17173", SiteEnum.Google = "Google", SiteEnum.SoGou = "SoGou";
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
            Http.get(Route.update_api_script_cat, new Map, new Map, !1).then((function(r) {
                var _a, _b, msg, version = new VersionCompar(null === (_b = null === (_a = null == r ? void 0 : r.data) || void 0 === _a ? void 0 : _a.script) || void 0 === _b ? void 0 : _b.version);
                Logger.debug("\u5f53\u524d\u7248\u672c:[" + current.versionString + "],\u6700\u65b0\u7248\u672c:[" + version.versionString + "]"), 
                version.compareTo(current) === VersionResult.greater && (msg = "\u65b0\u7248\u672c<span>" + version.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + Route.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + Route.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + Route.home_url + '">\u67e5\u770b</a>', 
                Toast.info(msg, "\u68c0\u67e5\u66f4\u65b0")), Config.set(update_key, !0, Hour);
            }));
        }, UpdateService.prototype.jsD = function(current) {
            Http.get_text(Route.update_api).then((function(res) {
                var msg, version = new VersionCompar(null == res ? void 0 : res.match(/@version[ ]*([\d\.]+)/)[1]);
                version.compareTo(current) === VersionResult.greater && (msg = "\u65b0\u7248\u672c<span>" + version.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + Route.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + Route.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + Route.home_url + '">\u67e5\u770b</a>', 
                Toast.info(msg, "\u68c0\u67e5\u66f4\u65b0")), Config.set(update_key, !0, Hour);
            }));
        }, UpdateService;
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
    }(VersionResult || (VersionResult = {})), EventHelper = function() {
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
                    _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
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
    }(BaseCoupon), LinesOption = function LinesOption() {}, css_248z$7 = "#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none\n}\n#vip-plugin-outside .vip-plugin-outside-toolbar{\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    z-index: 10000;\n}\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode svg\n{\n    margin: 0 auto;\n    height:150px;\n    width: 150px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history, #vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2!important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n.vip-plugin-outside-similar-buy-list-li-store{\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}\n", 
    styleInject(css_248z$7), MsgInfo = function MsgInfo() {}, PromoInfo = function PromoInfo() {
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
            var _this = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d"), 
            Route.queryHistoryv3(Runtime.url, this.site.toString(), (function(data) {
                var msg = "";
                data.code ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(_this.getChartOption(data.data))) : msg = "\u672a\u67e5\u5230\u5386\u53f2\u6570\u636e", 
                _this.chartMsg(msg);
            }));
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
                        var _a, date, year, month, day, monthStr, dayStr;
                        return params = params[0], year = (date = new Date(params.name)).getFullYear(), 
                        month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), 
                        dayStr = day.toString(), month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + (null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toFixed(2)) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
    }(BaseCoupon), css_248z$6 = ".one-key-vip-container { z-index: 99999!important }\n.one-key-vip-popup { font-size: 14px !important }\n.one-key-vip-setting-label { display: flex;align-items: center;justify-content: space-between;padding-top: 20px; }\n.one-key-vip-setting-checkbox { width: 16px;height: 16px; }\n", 
    styleInject(css_248z$6), sAlert = function() {
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
        }, sAlert.confirm = function(title, text, confirmText, cancelText, icon) {
            void 0 === confirmText && (confirmText = "\u786e\u5b9a"), void 0 === cancelText && (cancelText = "\u53d6\u6d88"), 
            void 0 === icon && (icon = "question");
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
            return Swal__default.default.fire(option);
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
            that = this, Route.queryHistoryV5(null !== (_a = that.itemUrl) && void 0 !== _a ? _a : Runtime.url).then((function(res) {
                Logger.debug(res.data), $(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(that.getChartOption(res.data)), 
                _this.chartMsg("");
            })).catch((function() {
                Route.queryHistoryV4(Runtime.url, _this.site.toString(), that.fp(), that.dfp(), (function(data) {
                    var slContainer, msg = "";
                    Logger.debug(data), "price_status" in data ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                    echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(that.getChartOptionGwd(data)), 
                    _this.chartMsg(msg)) : ("is_ban" in data && 1 == data.is_ban && (sAlert.confirm("\u54ce\u54df\u4e0d\u9519\u54e6", "\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u5f02\u5e38,\u662f\u5426\u6253\u5f00\u9a8c\u8bc1\u9875\u9762\u8fdb\u884c\u9a8c\u8bc1?", "\u9a8c\u8bc1\u8d70\u8d77", "\u8001\u5b50\u4e0d\u770b", "info").then((function(res) {
                        res.isConfirmed && Core.open("https://browser.gwdang.com/slider/verify.html?fromUrl=" + encodeURIComponent(Runtime.url)), 
                        sAlert.close(res);
                    })), slContainer = ".swal2-container", "99999999999" != $(slContainer).css("z-index") && $(slContainer).css("z-index", "99999999999")), 
                    that.historyService.Process());
                }));
            }));
        }, GwdService.prototype.getHistoryHtml = function() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-toolbar">\n                    [\u624b\u5de5\u67e5\u8be2\uff1a<a href="https://tool.manmanbuy.com/m/disSitePro.aspx?c_from=m&url=' + this.itemUrl + '" target="_blank">\u63a5\u53e3\u4e00</a>,<a href="http://www.hisprice.cn/his.php?hisurl=' + this.itemUrl + '" target="_blank">\u63a5\u53e3\u4e8c</a>]\n                    </div>\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode" id="vip-plugin-outside-coupons-qrcode-img"></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                    \n                </div>';
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
                        var _a, date, year, month, day, monthStr, dayStr;
                        return params = params[0], year = (date = new Date(params.axisValue)).getFullYear(), 
                        month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), 
                        dayStr = day.toString(), month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + (null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toFixed(2)) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
                        var _a, date, year, month, day, monthStr, dayStr;
                        return params = params[0], year = (date = new Date(params.name)).getFullYear(), 
                        month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), 
                        dayStr = day.toString(), month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + (null === (_a = params.value[1]) || void 0 === _a ? void 0 : _a.toFixed(2)) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
    }(PluginBase), css_248z$5 = ".tb-prop .tb-img li a {\n    width: auto !important;\n    background-position-x: 5px !important;\n}\n\n.tb-prop .tb-img li span {\n    text-indent: 1em !important;\n    display: block !important;\n    padding: 0 5px !important;\n    margin-left: 35px;\n}\n", 
    styleInject(css_248z$5), TaoBaoService = function(_super) {
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
    }(), css_248z$4 = ".okv-btn {\n  display: inline-block;\n  padding: 6px 16px;\n  font-size: 12px;\n  outline: 0;\n  line-height: 1.5;\n  text-align: center;\n  white-space: nowrap;\n  border: 1px solid #c5d9e8;\n  border-top-color: #c5d9e8;\n  border-right-color: #c5d9e8;\n  border-bottom-color: #c5d9e8;\n  border-left-color: #c5d9e8;\n  border-radius: 0.7rem;\n  background-color: #fff;\n  -webkit-transition: background 0.2s;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n.okv-btn-primary {\n  border-color: #6190e8;\n  background-color: #6190e8;\n  color: #fff;\n}\n.okv-btn-primary :hover {\n  background-color: #79a1eb;\n  border-color: #79a1eb;\n}\n.okv-btn-primary :active {\n  background-color: #5782d1;\n  border-color: #5782d1;\n}\n.okv-btn-success {\n  border-color: #13ce66;\n  background-color: #13ce66;\n  color: #fff;\n}\n.okv-btn-success :hover {\n  background-color: #36d57d;\n  border-color: #36d57d;\n}\n.okv-btn-success :active {\n  background-color: #11b95c;\n  border-color: #11b95c;\n}\n.okv-btn-error {\n  border-color: #ff4949;\n  background-color: #ff4949;\n  color: #fff;\n}\n.okv-btn-error :hover {\n  background-color: #ff6464;\n  border-color: #ff6464;\n}\n.okv-btn-error :active {\n  background-color: #e64242;\n  border-color: #e64242;\n}\n.okv-bg-pink {\n  color: #fff;\n  border-color: #fff;\n  background-color: #fb7299;\n}\n.bili-top-button {\n  margin-left: 0.7rem;\n}\n.bili-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  overflow: hidden;\n}\n.bili-table td,\n.bili-table th {\n  height: 40px;\n  text-align: left;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  border-bottom: 1px solid #ececec;\n}\n.bili-table-cell {\n  padding: 0 16px;\n  border-bottom: 1px solid #ececec;\n}\n.at-table-tbody > tr:hover {\n  background-color: #f6fafe;\n}\n.bili-table-small {\n  font-size: 11px;\n}\n.bili-table-head {\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n}\n.bili-table-head tr th {\n  font-weight: 700;\n  text-align: left;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n", 
    styleInject(css_248z$4), BiliImgService = function(_super) {
        function BiliImgService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.BiliBili, /www\.bilibili\.com\/video\/[av|bv]*/i ] ]), 
            _this._appName = "bilibili", _this;
        }
        return __extends(BiliImgService, _super), BiliImgService.listHtml = function(list) {
            var rows = "";
            return list.forEach((function(e) {
                rows += '<tr>\n                        <td class="bili-table-cell">' + e.part + '</td>\n                        <td class="bili-table-cell"><button class="okv-btn okv-btn-primary bili-down-item" data-cid="' + e.cid + '">\u4e0b\u8f7d</button></td>\n                    </tr>';
            })), '<div style="height: 30rem"><table class="bili-table bili-table-small">\n                    <thead class="bili-table-head">\n                        <tr>                        \n                            <th class="bili-table-cell">\u6807\u9898</th>\n                            <th class="bili-table-cell">\u64cd\u4f5c</th>\n                        </tr>\n                    </thead>\n                    <tbody class="at-table-tbody">                    \n                        ' + rows + "\n                    </tbody>    \n                </table></div>";
        }, BiliImgService.prototype.loader = function() {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            Core.autoLazyload((function() {
                if ($(".video-data").length && ($(".bilibili-player-video-info-people-number").length || $(".bpx-player-video-info-online").length)) {
                    var coin = $(".coin").text().replace("\u4e07", "").trim();
                    if ($.isNumeric(coin) || "\u6295\u5e01" == coin) return !0;
                }
                return !1;
            }), (function() {
                BiliImgService.add_img_btn(), BiliImgService.add_down_btn(), BiliImgService.add_triple_btn();
            }), 1);
        }, BiliImgService.add_img_btn = function() {
            var that = this;
            $(".video-data").last().append(BiliImgService.btn), $("body").on("click", "#findimg", (function() {
                var aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
                that.getVideoInfo(aid).then((function(res) {
                    res ? sAlert.showImg(res.pic, "\u662f\u5c01\u9762\u5566", "\u554a\u54c8\u54c8\u54c8\u3001\u5c01\u9762\u6765\u54af", "\u662f\u5c01\u9762\u9171\u5566>\u3002<") : sAlert.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                })).catch((function() {
                    sAlert.info("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f", "error", "center");
                }));
            }));
        }, BiliImgService.add_down_btn = function() {
            var that = this;
            $(".video-data").last().append(BiliImgService.down), $("body").on("click", "#downvideo", (function() {
                that.initDown();
            }));
        }, BiliImgService.initDown = function() {
            var _this = this, aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
            BiliImgService.getVideoInfo(aid).then((function(res) {
                sAlert.html(res.title, _this.listHtml(res.pages), !0, "\u6211\u597d\u4e86", "#3085d6", "40%"), 
                $(".bili-down-item").on("click", (function(e) {
                    var cid = $(e.currentTarget).attr("data-cid");
                    BiliImgService.downVideo(aid, cid);
                }));
            }));
        }, BiliImgService.downVideo = function(aid, cid) {
            var key = "" + aid + cid + "MDD";
            Config.remember(key, Min, (function() {
                return new Promise((function(resolve, reject) {
                    Route.queryBiliDown(aid, cid, (function(res) {
                        var _a;
                        "" != (null === (_a = res.data) || void 0 === _a ? void 0 : _a.durl[0].url) ? resolve(res) : reject(res);
                    }));
                }));
            })).then((function(res) {
                sAlert.confirm("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + res.data.accept_description[res.data.durl[0].order] + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86").then((function(sres) {
                    sres.isConfirmed && window.open(res.data.durl[0].url);
                })).finally((function() {
                    BiliImgService.initDown();
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
            $(".video-data").last().append(BiliImgService.tripleClick), $("body").on("click", "#tripleClick", (function() {
                [ ".like", ".coin", ".collect" ].forEach((function(item) {
                    $(item).trigger("click");
                }));
            }));
        }, BiliImgService.btn = '<button class="okv-btn okv-btn-primary okv-bg-pink bili-top-button" id="findimg">\u83b7\u53d6\u5c01\u9762</button>', 
        BiliImgService.down = '<button id="downvideo" class="okv-btn okv-btn-primary okv-bg-pink bili-top-button">\u4e0b\u8f7d\u89c6\u9891</button>', 
        BiliImgService.tripleClick = '<button class="okv-btn okv-btn-primary okv-bg-pink bili-top-button" id="tripleClick">\u4e00\u952e\u4e09\u8fde</button>', 
        BiliImgService;
    }(PluginBase), Menu$1 = Common.Menu, MovieService = function(_super) {
        function MovieService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.YouKu, /youku\.com/i ], [ SiteEnum.IQiYi, /iqiyi|iq\.com/i ], [ SiteEnum.LeShi, /\.le\.com/i ], [ SiteEnum.Tencent_V, /v\.qq/i ], [ SiteEnum.TuDou, /tudou\.com/i ], [ SiteEnum.MangGuo, /mgtv\.com/i ], [ SiteEnum.SoHu, /sohu\.com/i ], [ SiteEnum.Acfun, /acfun\.com/i ], [ SiteEnum.BiliBili, /bilibili\.com/i ], [ SiteEnum.M1905, /1905\.com/i ], [ SiteEnum.PPTV, /pptv\.com/i ], [ SiteEnum.YinYueTai, /yinyuetai\.com/ ] ]), 
            _this.menu = new Common.Menu, _this._unique = !1, _this;
        }
        return __extends(MovieService, _super), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
        }, MovieService.prototype.run = function() {
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
                this.selectorList.push(".items .item"), this.atrack.push(".pic a", ".title a"), 
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
            var _a, _b, _c, _d, _e, _f, _g, _h, itemId, $a, res, $dom = $(selector);
            if (!$dom.hasClass("onekeyvip-box-done")) {
                if ($dom.addClass("onekeyvip-box-done"), itemId = null !== (_c = null !== (_b = null !== (_a = $dom.attr("data-id")) && void 0 !== _a ? _a : $dom.data("sku")) && void 0 !== _b ? _b : $dom.attr("id")) && void 0 !== _c ? _c : "", 
                Tao.isVailidItemId(itemId) || (itemId = null !== (_f = null !== (_e = null !== (_d = $dom.attr("data-itemid")) && void 0 !== _d ? _d : $dom.data("spu")) && void 0 !== _e ? _e : $dom.attr("id")) && void 0 !== _f ? _f : ""), 
                !Tao.isVailidItemId(itemId)) if ($dom.attr("href")) itemId = location.protocol + $dom.attr("href"); else {
                    if (!($a = $dom.find("a")).length) return;
                    itemId = null !== (_g = $a.attr("data-nid")) && void 0 !== _g ? _g : "", Tao.isVailidItemId(itemId) || (itemId = $a.hasClass("j_ReceiveCoupon") && $a.length > 1 ? location.protocol + $($a[1]).attr("href") : location.protocol + $a.attr("href"));
                }
                !Tao.isVailidItemId(itemId) && itemId.indexOf("http") > -1 && (itemId = (res = null !== (_h = /item.jd.com\/(.*?).html/i.exec(itemId)) && void 0 !== _h ? _h : []).length > 0 ? res[1] : ""), 
                Tao.isValidTaoId(itemId) || ListService.that.itemType != ItemType.Suning || (itemId = $dom.attr("id")).split("-").length > 1 && (itemId = itemId.split("-")[1] + "-" + itemId.split("-")[0]), 
                Tao.isValidTaoId(itemId) ? (this.initBoxHtml($dom, itemId), this.initTagClass($dom, itemId)) : Logger.debug("\u5546\u54c1\u5217\u8868id\u65e0\u6548:" + itemId);
            }
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
                    return Logger.debug("\u52ab\u6301\u70b9\u51fb:" + itemUrl), !itemUrl || (Core.open(itemUrl), 
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
    }(PluginBase), css_248z$3 = "#content_views pre {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n#content_views pre code {\n    -webkit-touch-callout: auto !important;\n    -webkit-user-select: auto !important;\n    -khtml-user-select: auto !important;\n    -moz-user-select: auto !important;\n    -ms-user-select: auto !important;\n    user-select: auto !important;\n}\n\n.passport-login-container {\n    display: none !important;\n}\n", 
    styleInject(css_248z$3), function(ConfigEnum) {
        ConfigEnum.AutoJump_ZhiHu = "AutoJump_ZhiHu", ConfigEnum.AutoJump_CSDN = "AutoJump_CSDN", 
        ConfigEnum.AutoJump_JianShu = "AutoJump_JianShu", ConfigEnum.AutoJump_Gitee = "AutoJump_Gitee", 
        ConfigEnum.AutoJump_JueJin = "AutoJump_JueJin", ConfigEnum.AutoJump_Weibo = "AutoJump_Weibo", 
        ConfigEnum.AutoJump_TuXiaoChao = "AutoJump_TuXiaoChao", ConfigEnum.AutoJump_OsCh = "AutoJump_OsCh", 
        ConfigEnum.AutoJump_AiFaDian = "AutoJump_AiFaDian", ConfigEnum.CSDN_OpImgLink = "csdn_op_img_link", 
        ConfigEnum.CSDN_OpAdClean = "csdn_op_ad_clean", ConfigEnum.CSDN_OpCommentClean = "csdn_op_comment_clean", 
        ConfigEnum.CSDN_OpClipboardClean = "csdn_op_clipboard_clean", ConfigEnum.Search_Helper_Switch = "search_helper_switch", 
        ConfigEnum.Search_OptMenuMethod = "search_opt_menu_method", ConfigEnum.Search_OptMenuPos = "search_opt_menu_pos";
    }(ConfigEnum || (ConfigEnum = {})), CsdnAdService = function(_super) {
        function CsdnAdService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net/i ] ]), _this._appName = "csdn", 
            _this._unique = !1, _this;
        }
        return __extends(CsdnAdService, _super), CsdnAdService.prototype.loader = function() {}, 
        CsdnAdService.prototype.run = function() {
            Config.get(ConfigEnum.CSDN_OpAdClean, !0) && Core.background(this.removeAds, 3), 
            Config.get(ConfigEnum.CSDN_OpClipboardClean, !0) && Core.background((function() {
                unsafeWindow.csdn.copyright.textData = "";
            })), Config.get(ConfigEnum.CSDN_OpCommentClean, !0) && this.commentClean(), Config.get(ConfigEnum.CSDN_OpImgLink, !0) && this.commentFile();
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
        }, CsdnAdService.adSelectors = [ "#footerRightAds", ".side-question-box", "div[id^='dmp_ad']", "div[class^='ad_']", "div[id^='floor-ad_']", ".adsbygoogle", "#recommendAdBox", "#asideNewNps", ".signin" ], 
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
            return _this.rules = new Map([ [ SiteEnum.CSDN, /link\.csdn\.net/i ], [ SiteEnum.ZhiHu, /link\.zhihu\.com/i ], [ SiteEnum.JianShu, /www\.jianshu\.com\/go-wild/i ], [ SiteEnum.Gitee, /gitee\.com\/link/i ], [ SiteEnum.JueJin, /juejin\.cn\/\?target/i ], [ SiteEnum.Weibo, /weibo\.cn\/sinaurl/i ], [ SiteEnum.TuXiaoChao, /support\.qq\.com\/products\/.*\/link-jump/i ], [ SiteEnum.OsCh, /oschina\.net\/action\/GoToLink/i ], [ SiteEnum.AiFaDian, /afdian\.net\/link\?target/i ], [ SiteEnum.Baidu, /jump(2?)\.bdimg\.com\/safecheck/i ], [ SiteEnum.DouBan, /www\.douban\.com\/link2\// ], [ SiteEnum.g17173, /link\.17173\.com\/\?target/i ] ]), 
            _this.key = "", _this.selector = "", _this._unique = !1, _this._appName = "LinkJump", 
            _this;
        }
        return __extends(LinkJumpService, _super), LinkJumpService.prototype.loader = function() {}, 
        LinkJumpService.prototype.run = function() {
            var url, config = "AutoJump_" + this.site.toString();
            switch (this.site) {
              case SiteEnum.CSDN:
              case SiteEnum.ZhiHu:
              case SiteEnum.Gitee:
              case SiteEnum.JueJin:
              case SiteEnum.AiFaDian:
              case SiteEnum.g17173:
                this.key = "target";
                break;

              case SiteEnum.JianShu:
              case SiteEnum.DouBan:
              case SiteEnum.OsCh:
                this.key = "url";
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

              default:
                this.key = "";
            }
            Config.get(config, !0) ? (url = "", "" != this.key ? url = Core.getPar(this.key) : "" != this.selector && (url = $(this.selector).text()), 
            null != url && "" != url ? (sAlert.info("\u94fe\u63a5\u5df2\u89e3\u6790,\u6b63\u5728\u8df3\u8f6c~"), 
            this.jump(url)) : sAlert.warning("\u672a\u80fd\u89e3\u6790\u5230\u94fe\u63a5,\u8bf7\u624b\u52a8\u8df3\u8f6c")) : sAlert.warning("\u5df2\u5173\u95ed\u672c\u7f51\u7ad9\u7684\u8df3\u8f6c\u529f\u80fd");
        }, LinkJumpService.prototype.jump = function(url) {
            url && (url = decodeURIComponent(url), Logger.debug(url), unsafeWindow.window.location.href = url);
        }, LinkJumpService;
    }(PluginBase), css_248z$2 = ".slider + div, .slider + div + a,\n.texts,\n.header_new1,\n.slider_tips {\n    display: none !important;\n}\n", 
    styleInject(css_248z$2), _GwdService = function(_super) {
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
            return _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net\/*/i ] ]), _this.contentStyle = "{height: auto !important;max-height: none !important;}", 
            _this.expandRules = [ {
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
            } ], _this._appName = "autoExpand", _this._unique = !1, _this;
        }
        return __extends(AutoExpandService, _super), AutoExpandService.prototype.loader = function() {}, 
        AutoExpandService.prototype.run = function() {
            var _this = this, that = this;
            this.expandRules.forEach((function(e) {
                e.site.indexOf(_this.site) > -1 && (e.selector.length > 0 && e.selector.forEach((function(selector) {
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
                Core.open("https://www.dyoutube.ml?url=" + encodeURIComponent(Runtime.url));
            })) ];
            this.mfbMenu.Init(menus);
        }, YoutubeService;
    }(PluginBase), SettingService = function(_super) {
        function SettingService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.Settings, /settings\.wandhi\.com\/index\/index\/page/i ], [ SiteEnum.Settings_AutoJump, /settings\.wandhi\.com\/tools\/autojump\/page/i ], [ SiteEnum.Settings_AutoJump_Opt, /settings\.wandhi\.com\/tools\/autojump-op\/page/i ], [ SiteEnum.Settings_CSDN, /settings\.wandhi\.com\/tools\/csdn\/page/i ], [ SiteEnum.Settings_CSDN_Opt, /settings\.wandhi\.com\/tools\/csdn-op\/page/i ], [ SiteEnum.Settings_Search_Opt, /settings\.wandhi\.com\/tools\/search-helper-op\/page/i ] ]), 
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
            }
        }, SettingService.prototype.searchHelperOpt = function() {
            var keys = [ ConfigEnum.Search_Helper_Switch ];
            this.checkBoxInit(keys);
        }, SettingService.prototype.autoJumpOpt = function() {
            var checkboxes = $("input[type=checkbox]");
            checkboxes.removeProp("disabled"), [ ConfigEnum.AutoJump_ZhiHu, ConfigEnum.AutoJump_CSDN, ConfigEnum.AutoJump_JianShu, ConfigEnum.AutoJump_Gitee, ConfigEnum.AutoJump_JueJin, ConfigEnum.AutoJump_Weibo, ConfigEnum.AutoJump_TuXiaoChao, ConfigEnum.AutoJump_OsCh, ConfigEnum.AutoJump_AiFaDian ].forEach((function(e, i) {
                $("#" + e.toString()).prop("checked", Config.get(e.toString(), !0));
            })), checkboxes.on("change", (function(e) {
                var el = e.target;
                Logger.debug("\u914d\u7f6e[" + e.target.id + "]\u53d1\u751f\u53d8\u66f4,\u6700\u7ec8\u503c:[" + $(e.target).prop("checked") + "]"), 
                Config.set(el.id, $(el).prop("checked")), sAlert.info("\u4fdd\u5b58\u6210\u529f");
            }));
        }, SettingService.prototype.csdnOpt = function() {
            var keys = [ ConfigEnum.CSDN_OpAdClean, ConfigEnum.CSDN_OpImgLink, ConfigEnum.CSDN_OpCommentClean, ConfigEnum.CSDN_OpClipboardClean ];
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
            return _this.rules = new Map([ [ SiteEnum.Baidu, /www\.baidu\.com\/(baidu|s)\?/i ], [ SiteEnum.Google, /www\.google\.com\/search\?/i ], [ SiteEnum.SoGou, /www\.sogou\.com\/web/i ] ]), 
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
                })) ];
                new MfbMenu(Config.get(ConfigEnum.Search_OptMenuPos, "cl"), Config.get(ConfigEnum.Search_OptMenuMethod, "hover")).Init(menus);
            }
        }, SearchService.keySelector = "#none", SearchService;
    }(PluginBase), OneKeyVipInjection = function() {
        function OneKeyVipInjection() {
            this.plugins = new Array, this.plugins = [ Container.Require(ControlMenuService), Container.Require(SettingService), Container.Require(AutoExpandService), Container.Require(AliyunPanToken), Container.Require(UpdateService), Container.Require(BiliImgService), Container.Require(BiliMobileService), Container.Require(MovieService), Container.Require(ListService), Container.Require(TaoBaoService), Container.Require(JdService), Container.Require(MusicService), Container.Require(GwdService), Container.Require(CsdnAdService), Container.Require(WenKuService), Container.Require(LinkJumpService), Container.Require(YoutubeService), Container.Require(_GwdService), Container.Require(SearchService) ], 
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
