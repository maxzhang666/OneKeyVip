// ==UserScript== 
// @name         【玩的嗨】VIP工具箱,百度文库解析导出,全网VIP视频解析,获取B站封面,下载B站视频等众多功能聚合 长期更新,放心使用 
// @namespace    https://www.wandhi.com/
// @version      4.2.41
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍：1、Vip视频解析；2、一站式音乐搜索解决方案；3、bilibili视频封面获取；4、bilibili视频下载；5、上学吧答案查询(接口偶尔抽风)；6、商品历史价格展示(一次性告别虚假降价)；7、优惠券查询
// @author       MaxZhang
// @icon         https://www.wandhi.com//favicon.ico // @include      *://m.youku.com/v*
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
// @include      *://item.jd.com/*
// @include      *://item.jd.hk/*
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
// @include      *://blog.csdn.net/*
// @exclude      *://*.wandhi.com/*
// @require      https://lib.baomitu.com/jquery/1.12.4/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @require      https://lib.baomitu.com/echarts/4.6.0/echarts.min.js
// @require      https://lib.baomitu.com/layer/2.3/layer.js
// @require      https://lib.baomitu.com/reflect-metadata/0.1.13/Reflect.min.js
// @require      https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js
// @require      https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js
// @require      https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js
// @require      https://cdn.jsdelivr.net/npm/crypto-js@4.0.0/crypto-js.js
// @require      https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js
// @license MIT // @grant GM_setClipboard // @run-at document-end // @connect shangxueba365.com // @connect api.wandhi.com // @connect cdn.jsdelivr.net // @connect tool.manmanbuy.com // @connect xbeibeix.com // @connect gwdang.com // @grant unsafeWindow // @grant GM_xmlhttpRequest // @grant GM_info // @grant GM.addStyle // @grant GM_getValue // @grant GM_setValue // @grant GM_notification // @grant GM_openInTab // @grant GM_deleteValue // @grant GM_registerMenuCommand // @grant
GM_unregisterMenuCommand // @compatible firefox // @compatible chrome // @compatible opera safari edge // @compatible safari // @compatible edge // @antifeature referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。 // ==/UserScript==

!function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(require("sweetalert2"), require("vue"), require("reflect-metadata"), require("crypto-js")) : "function" == typeof define && define.amd ? define([ "sweetalert2", "vue", "reflect-metadata", "crypto-js" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).Swal, global.Vue, null, global.CryptoJS);
}(this, (function(Swal, Vue, reflectMetadata, CryptoJS) {
    "use strict";
    function _interopDefaultLegacy(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var Swal__default = _interopDefaultLegacy(Swal), Vue__default = _interopDefaultLegacy(Vue), CryptoJS__default = _interopDefaultLegacy(CryptoJS), extendStatics = function(d, b) {
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
    function __decorate(decorators, target, key, desc) {
        var d, c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(metadataKey, metadataValue);
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
    var update_key = "isUpdate", Min = 60, Hour = 60 * Min, B1 = "YmVpYmVpZG91eXUxMjM0NQ==", B2 = "YmVpYmVpMTIzNDU2Nzg5MA==", Logger = function() {
        function Logger() {}
        return Logger.log = function(msg, level) {}, Logger.debug = function(msg) {
            this.log(msg, LogLevel.debug);
        }, Logger.info = function(msg) {
            this.log(msg, LogLevel.info);
        }, Logger.warn = function(msg) {
            this.log(msg, LogLevel.warn);
        }, Logger.error = function(msg) {
            this.log(msg, LogLevel.error);
        }, Logger;
    }(), LogLevel;
    !function(LogLevel) {
        LogLevel[LogLevel.debug = 0] = "debug", LogLevel[LogLevel.info = 1] = "info", LogLevel[LogLevel.warn = 2] = "warn", 
        LogLevel[LogLevel.error = 3] = "error";
    }(LogLevel || (LogLevel = {}));
    var Config = function() {
        function Config() {}
        return Object.defineProperty(Config, "env", {
            get: function() {
                return GM_info;
            },
            enumerable: !1,
            configurable: !0
        }), Config.get = function(key, defaultValue) {
            void 0 === defaultValue && (defaultValue = "");
            var objStr = GM_getValue(this.encode(key), defaultValue);
            if (objStr) {
                var obj = JSON.parse(objStr);
                if (-1 == obj.exp || obj.exp > (new Date).getTime()) return Logger.info("cache true"), 
                obj.value;
            }
            return Logger.info("cache false"), defaultValue;
        }, Config.set = function(key, v, exp) {
            void 0 === exp && (exp = -1);
            var obj = {
                key: key,
                value: v,
                exp: -1 == exp ? exp : (new Date).getTime() + 1e3 * exp
            };
            GM_setValue(this.encode(key), JSON.stringify(obj));
        }, Config.clear = function(key) {
            this.set(key, null, -10);
        }, Config.decode = function(str) {
            return atob(str);
        }, Config.encode = function(str) {
            return btoa(str);
        }, Config;
    }(), History = function History() {
        this.max = 0, this.price_detail = [];
    }, PriceDetail = function PriceDetail() {}, ListPriceItem = function ListPriceItem() {}, BrowerType;
    !function(BrowerType) {
        BrowerType[BrowerType.Edge = 0] = "Edge", BrowerType[BrowerType.Edg = 1] = "Edg", 
        BrowerType[BrowerType.Chrome = 2] = "Chrome", BrowerType[BrowerType.Firefox = 3] = "Firefox", 
        BrowerType[BrowerType.Safiri = 4] = "Safiri", BrowerType[BrowerType.Se360 = 5] = "Se360", 
        BrowerType[BrowerType.Ie2345 = 6] = "Ie2345", BrowerType[BrowerType.Baidu = 7] = "Baidu", 
        BrowerType[BrowerType.Liebao = 8] = "Liebao", BrowerType[BrowerType.UC = 9] = "UC", 
        BrowerType[BrowerType.QQ = 10] = "QQ", BrowerType[BrowerType.Sogou = 11] = "Sogou", 
        BrowerType[BrowerType.Opera = 12] = "Opera", BrowerType[BrowerType.Maxthon = 13] = "Maxthon";
    }(BrowerType || (BrowerType = {}));
    var Core = function() {
        function Core() {
            this.url = this.currentUrl();
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
        }, Core.prototype.background = function(callback, time) {
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
        }, Core.prototype.getPar = function(option, url) {
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
        }, Core.prototype.currentUrl = function() {
            return window.location.href;
        }, Core.inIframe = function() {
            return !(!self.frameElement || "IFRAME" != self.frameElement.tagName) || (window.frames.length != parent.frames.length || self != top);
        }, Core.format = function(time, fmt) {
            void 0 === fmt && (fmt = "yyyy-MM-dd hh:mm:ss");
            var o = {
                "M+": time.getMonth() + 1,
                "d+": time.getDate(),
                "h+": time.getHours(),
                "m+": time.getMinutes(),
                "s+": time.getSeconds(),
                "q+": Math.floor((time.getMonth() + 3) / 3),
                S: time.getMilliseconds()
            };
            for (var k in /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length))), 
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
            void 0 === len && (len = 10), void 0 === split && (split = !1), void 0 === radix && (radix = 0);
            var i, chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), uuid = [];
            if (radix = 0 == radix ? radix || chars.length : radix, split) {
                var r = void 0;
                for (uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-", uuid[14] = "4", i = 0; i < 36; i++) uuid[i] || (r = 0 | 16 * Math.random(), 
                uuid[i] = chars[19 == i ? 3 & r | 8 : r]);
            } else for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            return uuid.join("");
        }, Core.getBrowser = function() {
            var browser = !1, userAgent = window.navigator.userAgent.toLowerCase();
            return null != userAgent.match(/firefox/) ? browser = BrowerType.Firefox : null != userAgent.match(/edge/) ? browser = BrowerType.Edge : null != userAgent.match(/edg/) ? browser = BrowerType.Edg : null != userAgent.match(/bidubrowser/) ? browser = BrowerType.Baidu : null != userAgent.match(/lbbrowser/) ? browser = BrowerType.Liebao : null != userAgent.match(/ubrowser/) ? browser = BrowerType.UC : null != userAgent.match(/qqbrowse/) ? browser = BrowerType.QQ : null != userAgent.match(/metasr/) ? browser = BrowerType.Sogou : null != userAgent.match(/opr/) ? browser = BrowerType.Opera : null != userAgent.match(/maxthon/) ? browser = BrowerType.Maxthon : null != userAgent.match(/2345explorer/) ? browser = BrowerType.Ie2345 : null != userAgent.match(/chrome/) ? browser = navigator.mimeTypes.length > 10 ? BrowerType.Se360 : BrowerType.Chrome : null != userAgent.match(/safari/) && (browser = BrowerType.Safiri), 
            browser;
        }, Core;
    }(), Runtime = function() {
        function Runtime() {}
        return Object.defineProperty(Runtime, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Runtime;
    }();
    !function() {
        function HttpRequest(option) {
            this.headers = new Map, this.url = option.url, this.method = option.methodType, 
            this.dataType = option.dataType, this._option = option;
        }
        HttpRequest.prototype.onload = function(res) {
            this._option.onSuccess(res);
        }, HttpRequest.prototype.onerror = function() {
            this.onerror();
        }, HttpRequest.prototype.setQueryData = function(datas) {
            if (datas instanceof FormData) this.data = datas; else {
                var fd = new FormData;
                for (var i in datas) fd.append(i, datas[i]);
                this.data = fd;
            }
        }, Object.defineProperty(HttpRequest.prototype, "onLoad", {
            get: function() {
                return this.onSuccess;
            },
            enumerable: !1,
            configurable: !0
        });
    }();
    var AjaxOption = function() {
        function AjaxOption(_url, _methodType, _data, _success, _header, timeOut) {
            void 0 === _methodType && (_methodType = "GET"), void 0 === _header && (_header = new Map), 
            void 0 === timeOut && (timeOut = 60), this.url = _url, this.methodType = _methodType, 
            this.onSuccess = _success, this.onError = _success, this.data = _data, this.headers = _header, 
            this.timeOut = timeOut;
        }
        return AjaxOption.prototype.getData = function() {
            if (this.data instanceof FormData) return this.data;
            if (this.data instanceof Map) {
                var fd_1 = new FormData;
                return this.data.forEach((function(v, k) {
                    fd_1.append(k, v);
                })), fd_1;
            }
            var fd = new FormData;
            for (var i in this.data) fd.append(i, this.data[i]);
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
            void 0 === time && (time = -1), Swal__default.default.fire({
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
            var _a, _b, _c;
            option.headers.set("User-Agent", null !== (_a = unsafeWindow.navigator.userAgent) && void 0 !== _a ? _a : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"), 
            option.headers.set("Accept", "application/atom+xml,application/xml,text/xml");
            var head = new HttpHeaders;
            head.version = Config.env.script.version, head.auth = null !== (_b = Config.env.script.author) && void 0 !== _b ? _b : "", 
            head.namespace = null !== (_c = Config.env.script.namespace) && void 0 !== _c ? _c : "", 
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
                        Alert.confim("", '                                        \n                        <h1>\u54cd\u5e94\u5f02\u5e38\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u65e5\u5fd7\uff1a</span><br>\n                        <p>' + error + "(" + res.status + ')</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(res.responseText) + '</p>                        \n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + Config.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + Config.env.script.version + "</p>\n                        <p>Url\uff1a" + Runtime.url + "</p>\n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                            Core.open("https://gitee.com/ixysy/OneKeyVip/issues");
                        })), null === (_b = option.onSuccess) || void 0 === _b || _b.call(option, null);
                    }
                },
                onerror: function(res) {
                    var _a;
                    Alert.confim("", '              \n                        <h1>\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(res.responseText) + "(" + res.status + ')</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + Config.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + Config.env.script.version + "</p>\n                        <p>Url\uff1a" + Runtime.url + "</p>           \n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                        Core.open("https://gitee.com/ixysy/OneKeyVip/issues");
                    })), null === (_a = option.onError) || void 0 === _a || _a.call(option, res);
                }
            });
        }, Http.getData = function(url, callback) {
            $.getJSON(url, (function(d) {
                callback(d);
            }));
        }, Http.JqGet = function(url, callback) {
            Http.get(url, new Map).then((function(d) {
                callback(d);
            }));
        }, Http.post = function(url, data, timeOut) {
            void 0 === timeOut && (timeOut = 10);
            var index = Alert.loading();
            return new Promise((function(resolve) {
                Http.ajax(new AjaxOption(url, "POST", data, (function(data) {
                    Alert.close(index), resolve(data);
                }), new Map, timeOut));
            }));
        }, Http.get = function(url, data, time_out) {
            return void 0 === data && (data = new Map), void 0 === time_out && (time_out = 10), 
            Alert.loading(), new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, (function(data) {
                    var _a;
                    try {
                        var res = null !== (_a = JSON.parse(data)) && void 0 !== _a ? _a : data;
                        resolve(res);
                    } catch (error) {
                        Logger.debug(error), reject();
                    }
                }), new Map, time_out));
            }));
        }, Http.getWithHead = function(url, data, head, time_out) {
            return void 0 === data && (data = new Map), void 0 === head && (head = new Map), 
            void 0 === time_out && (time_out = 10), Alert.loading(), new Promise((function(resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, (function(data) {
                    var _a;
                    try {
                        var res = null !== (_a = JSON.parse(data)) && void 0 !== _a ? _a : data;
                        resolve(res);
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
            var _data = new History;
            if (_data.date = Core.format(new Date(Number.parseInt(data.lowerDate.match(/[0-9]{13}/)[0]) + 800), "yyyy-MM-dd"), 
            _data.min = data.lowerPrice, _data.max = _data.min, _data.max_date = _data.date, 
            _data.current = data.currentPrice.toString(), _data.mark = "" == data.changPriceRemark ? "\u6682\u65e0" : data.changPriceRemark, 
            0 == data.listPrice.length || !data.listPrice) {
                var temp_1 = [];
                data.datePrice.split("],[").forEach((function(v, n) {
                    var t = new ListPriceItem, values = (v = v.replace(/\[|"|\]/g, "")).split(",");
                    t.pr = Number.parseInt(values[1]), t.yh = 3 == values.length ? values[2] : v.substring(v.indexOf(values[2]), v.length), 
                    t.dt = values[0], temp_1.push(t);
                })), data.listPrice = temp_1;
            }
            return data.listPrice.forEach((function(v, n) {
                var detail = new PriceDetail;
                detail.timestamp = Number.parseInt(v.dt.match(/[0-9]{13}/)[0]) + 800, detail.time = Core.format(new Date(detail.timestamp), "yyyy-MM-dd"), 
                detail.price = v.pr, detail.mark = v.yh, _data.max < v.pr && (_data.max = v.pr, 
                _data.max_date = detail.time), _data.price_detail.push(detail);
            })), _data;
        }, Convert.genterDataV2 = function(data) {
            var _data = new History;
            _data.date = Core.format(new Date(data.lowerDate), "yyyy-MM-dd"), _data.min = data.lowerPrice, 
            _data.max = _data.min, _data.max_date = _data.date, _data.current = data.currentPrice.toString(), 
            _data.mark = "" == data.changPriceRemark ? "\u6682\u65e0" : data.changPriceRemark;
            var listPrice = [];
            if (0 != data.datePrice.length) {
                var temp_2 = [];
                data.datePrice.split("],[").forEach((function(v, n) {
                    var t = new ListPriceItem, values = (v = v.replace(/\[|"|\]/g, "")).split(",");
                    t.pr = Number.parseInt(values[1]), t.yh = 3 == values.length ? values[2] : v.substring(v.indexOf(values[2]), v.length), 
                    t.dt = values[0], temp_2.push(t);
                })), listPrice = temp_2;
            }
            return listPrice.forEach((function(v, n) {
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
    }();
    !function(_super) {
        function StuResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(StuResult, _super);
    }(Result), function(_super) {
        function StrResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        __extends(StrResult, _super);
    }(Result);
    var HistoryResult = function(_super) {
        function HistoryResult() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(HistoryResult, _super), HistoryResult;
    }(Result);
    !function(_super) {
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
    }(Result);
    var Route = function() {
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
        }, Route.queryHistoryV4 = function(url, siteType, fp, dfp, callback) {
            var root = "https://browser.gwdang.com/extension/price_towards?url=" + encodeURIComponent(url) + "&ver=1&format=json&fp=" + fp + "&dfp=" + dfp;
            Http.JqGet(root, callback);
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
        }, Route.couponQuery = function(itemId, type, callback) {
            Route.baseApi("/coupons/info", new Map([ [ "id", itemId ], [ "type", type ] ]), callback);
        }, Route.update_api = "https://cdn.jsdelivr.net/gh/maxzhang666/OneKeyVip/OneKeyVip.user.js?t=" + Core.uuid(), 
        Route.home_url = "https://wiki.wandhi.com", Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", 
        Route.install_url_two = "https://tools.wandhi.com/scripts", Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", 
        Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", 
        Route.bili = "/tools/bili", Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", 
        Route.bilidown = "https://api.bilibili.com/x/player/playurl", Route.coupons = "/tb/infos/", 
        Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", Route.sn_coupons = "/sn/info", 
        Route.vp_coupons = "/vp/info", Route;
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
    }(), ToastType;
    function styleInject(css, ref) {
        void 0 === ref && (ref = {});
        var insertAt = ref.insertAt;
        if (css && "undefined" != typeof document) {
            var head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
            style.type = "text/css", "top" === insertAt && head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style), 
            style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
        }
    }
    !function(ToastType) {
        ToastType.Default = "default", ToastType.Info = "info", ToastType.Success = "success", 
        ToastType.Error = "error";
    }(ToastType || (ToastType = {}));
    var css_248z$1 = 'html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:"Helvetica Neue",Helvetica,"Microsoft YaHei",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}', Common;
    styleInject(css_248z$1), function(Common) {
        var Menu = function() {
            function Menu() {
                this.core = new Core, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelecter = "#Wandhi-nav";
            }
            return Menu.prototype.loader = function() {
                Core.appendCssContent(this.getCss());
            }, Menu.prototype.getBody = function(option) {
                return '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="Wandhi-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label>' + option + "</div>";
            }, Menu.prototype.getCss = function() {
                return 'html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:"Helvetica Neue",Helvetica,"Microsoft YaHei",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}';
            }, Menu.prototype.Init = function(menus, callback) {
                var _this = this;
                if (!Core.inIframe()) {
                    this.loader();
                    var str = "";
                    menus.forEach((function(element, index) {
                        str += '<a href="javascript:void(0)" title="' + element.title + '" data-cat="' + element.type + '" class="menu-item menu-line menu-' + _this.menusClass[index] + '">' + element.show + "</a>";
                    })), Core.bodyAppend(this.getBody(str)), /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                    var drags = {
                        down: !1,
                        x: 0,
                        y: 0,
                        winWid: 0,
                        winHei: 0,
                        clientX: 0,
                        clientY: 0
                    }, asideNav = $(this.menuSelecter)[0];
                    $("body").on("mousedown", "" + this.menuSelecter, (function(a) {
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
                    })).on("mouseup", "" + this.menuSelecter, (function() {
                        drags.down = !1, $(document).off("mousemove");
                    })), callback.call(this);
                }
            }, Menu.close = function() {
                $("#" + Menu.mainId).hide();
            }, Menu.mainId = "Wandhi-nav", Menu;
        }();
        Common.Menu = Menu;
    }(Common || (Common = {}));
    var container = new Map, Container = function() {
        function Container() {}
        return Container.Registe = function(type, args) {
            var className = this.processName(type.name);
            return container.set(className, window.Reflect.construct(type, this.buildParams(args))), 
            container.get(className);
        }, Container.buildParams = function(args) {
            var para = [];
            return null == args || args.map((function(item) {
                para.push(item);
            })), para;
        }, Container.processName = function(name) {
            return name.toLowerCase();
        }, Container.Require = function(type) {
            var _this = this, name = this.processName(type.name);
            if (container.has(name)) return container.get(name);
            var args, classParams = Reflect.getMetadata(METADATA_PARAMS, type);
            return (null == classParams ? void 0 : classParams.length) && (args = classParams.map((function(item) {
                return _this.Require(item);
            }))), this.Registe(type, args);
        }, Container.define = function(target, key) {
            var _a, classType = Reflect.getMetadata(METADATA_TYPE, target, key), desc = null !== (_a = Object.getOwnPropertyDescriptor(target, key)) && void 0 !== _a ? _a : {
                writable: !0,
                configurable: !0
            };
            desc.value = this.Require(classType), Object.defineProperty(target, key, desc);
        }, Container;
    }(), METADATA_TYPE = "design:type", METADATA_PARAMS = "design:paramtypes";
    function WandhiAuto(target, key) {
        Container.define(target, key);
    }
    var PluginBase = function() {
        function PluginBase() {
            var _this = this;
            this._unique = !0, this.Process = function() {
                _this.loader(), _this.run();
            }, this._appName = "base";
        }
        var _a, _b;
        return PluginBase.prototype.unique = function() {
            return this._unique;
        }, PluginBase.prototype.linkTest = function(url) {
            var _this = this;
            url || (url = this.core.currentUrl());
            var flag = !1;
            return this.rules.forEach((function(v, k) {
                return !v.test(url) || (flag = !0, _this.site = k, !1);
            })), flag;
        }, PluginBase.prototype.appName = function() {
            return this._appName;
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (_a = void 0 !== Core && Core) ? _a : Object) ], PluginBase.prototype, "core", void 0), 
        __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (_b = void 0 !== Common && Common.Menu) ? _b : Object) ], PluginBase.prototype, "menu", void 0), 
        PluginBase;
    }(), SiteEnum;
    !function(SiteEnum) {
        SiteEnum.All = "All", SiteEnum.TaoBao = "TaoBao", SiteEnum.TMall = "TMall", SiteEnum.JingDong = "JingDong", 
        SiteEnum.IQiYi = "IQiYi", SiteEnum.YouKu = "YouKu", SiteEnum.LeShi = "LeShi", SiteEnum.TuDou = "TuDou", 
        SiteEnum.Tencent_V = "Tencent_V", SiteEnum.MangGuo = "MangGuo", SiteEnum.SoHu = "SoHu", 
        SiteEnum.Acfun = "Acfun", SiteEnum.BiliBili = "BiliBili", SiteEnum.M1905 = "M1905", 
        SiteEnum.PPTV = "PPTV", SiteEnum.YinYueTai = "YinYueTai", SiteEnum.WangYi = "WangYi", 
        SiteEnum.Tencent_M = "Tencent_M", SiteEnum.KuGou = "KuGou", SiteEnum.KuWo = "KuWo", 
        SiteEnum.XiaMi = "XiaMi", SiteEnum.TaiHe = "TaiHe", SiteEnum.QingTing = "QingTing", 
        SiteEnum.LiZhi = "LiZhi", SiteEnum.MiGu = "MiGu", SiteEnum.XiMaLaYa = "XiMaLaYa", 
        SiteEnum.WenKu = "WenKu", SiteEnum.SXB = "SXB", SiteEnum.BDY = "BDY", SiteEnum.BDY1 = "BDY1", 
        SiteEnum.LZY = "LZY", SiteEnum.SuNing = "SuNing", SiteEnum.Vp = "Vp", SiteEnum.CSDN = "CSDN";
    }(SiteEnum || (SiteEnum = {}));
    var UpdateService = function(_super) {
        function UpdateService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.All, /(.*)/i ] ]), _this._unique = !1, 
            _this._appName = "update", _this;
        }
        return __extends(UpdateService, _super), UpdateService.prototype.loader = function() {}, 
        UpdateService.prototype.run = function() {
            if (!Config.get(update_key, !1)) {
                var current_1 = new VersionCompar(Config.env.script.version);
                Http.get_text(Route.update_api).then((function(res) {
                    var version = new VersionCompar(res.match(/@version[ ]*([\d\.]+)/)[1]);
                    if (version.compareTo(current_1) === VersionResult.greater) {
                        var msg = "\u65b0\u7248\u672c<span>" + version.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + Route.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + Route.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + Route.home_url + '">\u67e5\u770b</a>';
                        Toast.info(msg, "\u68c0\u67e5\u66f4\u65b0"), Config.set(update_key, !0, Hour);
                    }
                }));
            }
        }, UpdateService;
    }(PluginBase), VersionCompar = function() {
        function VersionCompar(e) {
            if (!/^[\d\.]+$/.test(e)) throw new Error("Invalid version string");
            this.parts = e.split(".").map((function(e) {
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
    }(), VersionResult;
    !function(VersionResult) {
        VersionResult[VersionResult.less = -1] = "less", VersionResult[VersionResult.equal = 0] = "equal", 
        VersionResult[VersionResult.greater = 1] = "greater", VersionResult[VersionResult.incomparable = NaN] = "incomparable";
    }(VersionResult || (VersionResult = {}));
    var EventHelper = function() {
        function EventHelper() {}
        return EventHelper.bind_click = function(query, act) {
            var _a;
            null === (_a = document.querySelector(query)) || void 0 === _a || _a.addEventListener("click", (function(e) {
                act();
            }));
        }, EventHelper;
    }(), BaseCoupon = function() {
        function BaseCoupon() {}
        return BaseCoupon.prototype.init_qrcode = function(url) {
            return new Promise((function(resolve) {
                QRCode.toCanvas(document.getElementById("vip-plugin-outside-coupons-qrcode-img"), url, {
                    errorCorrectionLevel: "H",
                    type: "image/jpeg",
                    quality: .3,
                    margin: 1,
                    width: 150
                }, (function(err) {
                    err || resolve(!0);
                }));
            }));
        }, BaseCoupon.prototype.init_coupon_info = function(after, price, time, q_url) {
            void 0 === q_url && (q_url = "");
            var coup_info = "<p>\u79fb\u52a8\u7aef<span>\u5feb\u6377</span>\u8d2d\u4e70</p>", act = '<a class="vip-plugin-outside-coupons-button quan-none" href="javascript:void(0)">\u6253\u5f00\u624b\u673a\u626b\u4e00\u626b</a>', url = Runtime.url;
            if (q_url) {
                var now = new Date;
                coup_info = "<p>\u5238\u540e\u4ef7 <span>" + after + '</span> \u5143</p><p class="vip-plugin-outside-coupons-date">\uff08' + Core.format(now, "yyyy-MM-dd") + " ~ " + time + "\uff09</p>", 
                act = '<a class="vip-plugin-outside-coupons-button quan-exits">\u626b\u7801\u9886' + price + "\u5143\u4f18\u60e0\u5238</a>", 
                url = q_url;
            }
            new Promise((function(resolve) {
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
                if (Logger.debug(res), res.code) if (res.data.has_coupon) {
                    var q = res.data, exp = new Date(q.quan_time);
                    _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                        _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                    }));
                } else res.data.quan_link ? (_this.default(res.data.quan_link), EventHelper.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    Core.open(res.data.quan_link);
                }))) : _this.default(); else _this.default();
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
                if (Logger.debug(res), res.code) if (res.data.has_coupon) {
                    var q = res.data, exp = new Date(q.quan_time);
                    _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                        _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                    }));
                } else res.data.quan_link ? (_this.default(res.data.quan_link), EventHelper.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    Core.open(res.data.quan_link);
                }))) : _this.default(); else _this.default();
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
            var _a, _b, _this = this, item_id = null === (_b = null === (_a = unsafeWindow.pageConfig) || void 0 === _a ? void 0 : _a.product) || void 0 === _b ? void 0 : _b.skuid;
            item_id ? Route.queryJdCoupons(item_id, (function(res) {
                if (Logger.debug(res), res.code) if (res.data.has_coupon) {
                    var q = res.data, exp = new Date(q.quan_time);
                    _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                        _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                    }));
                } else res.data.quan_link ? _this.default(res.data.quan_link) : _this.default(); else _this.default();
            })) : this.default();
        }, JdCoupon;
    }(BaseCoupon), TaoCoupon = function(_super) {
        function TaoCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        var _a;
        return __extends(TaoCoupon, _super), TaoCoupon.prototype.init_html = function(html) {
            return new Promise((function(resolve) {
                $("#J_DetailMeta").length ? Core.appendTo("#J_DetailMeta", html) : Core.appendTo("#detail", html + "<br/>"), 
                resolve(!0);
            }));
        }, TaoCoupon.prototype.init_coupons = function() {
            var _this = this;
            Route.queryCoupons(this.core.getPar("id"), (function(data) {
                var _a;
                if (data.code && (null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0) {
                    var q = data.data[0], exp = new Date(q.quan_time);
                    _this.init_qrcode(decodeURIComponent(q.quan_link)).then((function(res) {
                        _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, "yyyy-MM-dd"), decodeURIComponent(q.quan_link));
                    }));
                } else _this.init_qrcode(Runtime.url).then((function(res) {
                    _this.init_coupon_info(0, 0, "");
                }));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (_a = void 0 !== Core && Core) ? _a : Object) ], TaoCoupon.prototype, "core", void 0), 
        TaoCoupon;
    }(BaseCoupon), DefCoupon = function(_super) {
        function DefCoupon() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(DefCoupon, _super), DefCoupon.prototype.init_html = function(html) {
            return new Promise((function(resolve) {
                resolve(!1);
            }));
        }, DefCoupon.prototype.init_coupons = function() {}, DefCoupon;
    }(BaseCoupon), LinesOption = function LinesOption() {}, css_248z = "#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img {\n    margin: 0 auto\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history, #vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2!important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n.vip-plugin-outside-similar-buy-list-li-store{\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}\n";
    styleInject(css_248z);
    var MsgInfo = function MsgInfo() {}, PromoInfo = function PromoInfo() {
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
            var _a, _b, text = "\u5386\u53f2\u4f4e\u4ef7\uff1a{red|\uffe5" + data.min + "} ( {red|" + data.date + "} ) \u5206\u6790\uff1a" + data.mark, chartOption = new LinesOption;
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
                        params = params[0];
                        var date = new Date(params.name), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), dayStr = day.toString();
                        return month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + params.value[1].toFixed(2) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
                        var l = [];
                        return data.price_detail.forEach((function(v) {
                            var p = {
                                name: v.time,
                                value: [ v.timestamp, v.price, v.mark ]
                            };
                            l.push(p);
                        })), l;
                    }(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: 10 * Math.floor(.9 * data.min / 10),
                max: 10 * Math.ceil(1.1 * data.max / 10)
            };
            var line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop();
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
                type: "inside",
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
                    smooth: !0,
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
    }(PluginBase), GwdService = function(_super) {
        function GwdService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.TMall, /detail\.tmall\.com\/item\.htm/i ], [ SiteEnum.TaoBao, /item\.taobao\.com/i ], [ SiteEnum.JingDong, /item\.jd\.(com|hk)\/[0-9]*\.html/i ], [ SiteEnum.SuNing, /product\.suning\.com/i ], [ SiteEnum.Vp, /detail\.vip\.com/i ] ]), 
            _this._appName = "GwdService", _this.factory = new DefCoupon, _this.dfp = "0H88kUZe0CP80DtM0C0VkUc20z88kUZM6UTM0UMikUc26z82kUPe0H88kUP80H88EV3+0UZi0DZ2", 
            _this.fp = "378437f5078442c878e99f78720278c4", _this;
        }
        var _a;
        return __extends(GwdService, _super), GwdService.prototype.loader = function() {}, 
        GwdService.prototype.run = function() {
            this.injectHistory();
        }, GwdService.prototype.injectHistory = function() {
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
        }, GwdService.prototype.InitPriceHistory = function() {
            var _this = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d");
            var that = this;
            Route.queryHistoryV4(Runtime.url, this.site.toString(), that.fp, that.dfp, (function(data) {
                if (Logger.debug(data), "price_status" in data) $(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(_this.getChartOption(data)), 
                _this.chartMsg(""); else {
                    if ("is_ban" in data && 1 == data.is_ban) {
                        Swal__default.default.fire({
                            icon: "info",
                            html: "\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u5f02\u5e38,\u662f\u5426\u6253\u5f00\u9a8c\u8bc1\u9875\u9762\u8fdb\u884c\u9a8c\u8bc1?",
                            showCloseButton: !0,
                            showCancelButton: !0,
                            focusConfirm: !1,
                            confirmButtonText: "\u9a8c\u8bc1\u8d70\u8d77",
                            cancelButtonText: "\u8001\u5b50\u4e0d\u770b"
                        }).then((function(res) {
                            res.isConfirmed && Core.open("https://browser.gwdang.com/slider/verify.html?fromUrl=" + encodeURIComponent(Runtime.url)), 
                            Swal__default.default.close(res);
                        }));
                        "99999999999" != $(".swal2-container").css("z-index") && $(".swal2-container").css("z-index", "99999999999");
                    }
                    that.historyService.Process();
                }
            }));
        }, GwdService.prototype.getHistoryHtml = function() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode"><canvas id="vip-plugin-outside-coupons-qrcode-img"></canvas></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                    \n                </div>';
        }, GwdService.prototype.chartMsg = function(msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        }, GwdService.prototype.getChartOption = function(data) {
            var _a, _b, analysisTxt = data.analysis.tip, min = data.analysis.promo_days[data.analysis.promo_days.length - 1], text = analysisTxt + "\uff1a{red|\uffe5" + min.price + "} ( {red|" + min.date + "} )", maxData = new PromoInfo, minData = new PromoInfo;
            minData.price = Number.MAX_SAFE_INTEGER, minData.humanPrice = Number.MAX_SAFE_INTEGER, 
            maxData.humanPrice = Number.MIN_SAFE_INTEGER;
            var chartOption = new LinesOption;
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
                        params = params[0];
                        var date = new Date(params.name), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), monthStr = month.toString(), dayStr = day.toString();
                        return month < 10 && (monthStr = "0" + month), day < 10 && (dayStr = "0" + day), 
                        "\u65e5\u671f\uff1a" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4ef7\u683c\uff1a\uffe5" + params.value[1].toFixed(2) + ("" == params.value[2] ? "" : "<br/>" + params.value[2]);
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
                        var _a, l = [];
                        if (data.store.length > 0) {
                            var storeData = data.store[0];
                            data.store.length > 1 && (storeData = data.store[1]);
                            var couponsMap_1 = {};
                            (null === (_a = data.promo) || void 0 === _a ? void 0 : _a.length) > 0 && data.promo.forEach((function(v) {
                                couponsMap_1.hasOwnProperty(1e3 * v.time) || (couponsMap_1[1e3 * v.time] = v);
                            }));
                            var now_1 = storeData.all_line_begin_time;
                            storeData.all_line.forEach((function(v) {
                                v > maxData.humanPrice && (maxData.humanPrice = v, maxData.time = now_1 / 1e3), 
                                v < minData.humanPrice && (minData.humanPrice = v, minData.time = now_1 / 1e3);
                                var promo = new PromoInfo;
                                promo.msg = new MsgInfo, couponsMap_1.hasOwnProperty(now_1) && (Logger.debug("yes"), 
                                promo = couponsMap_1[now_1]);
                                var p = {
                                    name: now_1,
                                    value: [ now_1, v, couponsMap_1.hasOwnProperty(now_1) ? promo.msg.coupon ? promo.msg.promotion : promo.msg.coupon : "" ]
                                };
                                l.push(p), now_1 += 864e5;
                            })), Logger.debug(couponsMap_1);
                        }
                        return Logger.debug(maxData), Logger.debug(minData), l;
                    }(data),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: 10 * Math.floor(.9 * minData.humanPrice / 10),
                max: 10 * Math.ceil(1.1 * maxData.humanPrice / 10)
            };
            var line = null === (_a = chartOption.series) || void 0 === _a ? void 0 : _a.pop();
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
                type: "inside",
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
                    smooth: !0,
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
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (_a = void 0 !== HistoryService && HistoryService) ? _a : Object) ], GwdService.prototype, "historyService", void 0), 
        GwdService;
    }(PluginBase), TaoBaoService = function(_super) {
        function TaoBaoService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.TaoBao, /taobao\.com/i ], [ SiteEnum.TMall, /tmall\.com|hk/i ] ]), 
            _this.UrlTag = "Wandhi_qLink", _this;
        }
        var _a;
        return __extends(TaoBaoService, _super), TaoBaoService.prototype.getRules = function() {
            throw new Error("Method not implemented.");
        }, TaoBaoService.prototype.loader = function() {
            Core.appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
        }, TaoBaoService.prototype.run = function() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }, TaoBaoService.prototype.init = function() {
            var _a, _this = this, init = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";
            $("#J_LinkBasket").parent().parent().prepend(init), $(".J_LinkAdd").parent().parent().prepend(init), 
            (null === (_a = this.rules.get(SiteEnum.TaoBao)) || void 0 === _a ? void 0 : _a.test(this.core.currentUrl())) ? $("#wandhi_table").addClass("wandhi_tab_taobao") : $("#wandhi_table").addClass("wandhi_tab_tmall"), 
            Route.queryCoupons(this.core.getPar("id"), (function(data) {
                return _this.initElement(data);
            }));
        }, TaoBaoService.prototype.initElement = function(data) {
            var _a;
            $("#wandhi_table tbody tr").remove();
            var row = "";
            data.code && (null === (_a = data.data) || void 0 === _a ? void 0 : _a.length) > 0 ? data.data.forEach((function(e) {
                row += "<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>";
            })) : row = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(row);
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (_a = void 0 !== GwdService && GwdService) ? _a : Object) ], TaoBaoService.prototype, "historyService", void 0), 
        TaoBaoService;
    }(PluginBase), BiliImgService = function(_super) {
        function BiliImgService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.BiliBili, /bilibili\.com\/video\/[av|bv]*/i ] ]), 
            _this._appName = "bilibili", _this;
        }
        return __extends(BiliImgService, _super), BiliImgService.prototype.loader = function() {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            Core.autoLazyload((function() {
                if ($(".video-data").length && $(".bilibili-player-video-info-people-number").length) {
                    var coin = $(".coin").text().replace("\u4e07", "").trim();
                    if ($.isNumeric(coin) || "\u6295\u5e01" == coin) return !0;
                }
                return !1;
            }), (function() {
                BiliImgService.add_img_btn(), BiliImgService.add_down_btn(), BiliImgService.add_triple_btn();
            }), 1);
        }, BiliImgService.add_img_btn = function() {
            $(".video-data").last().append(BiliImgService.btn), $("body").on("click", "#findimg", (function() {
                var aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
                Route.queryBiliImg(aid, (function(res) {
                    0 === res.code ? Alert.open("\u5c01\u9762\u9171", '<img src="' + res.data.pic + '" style="width: 705px;height: 400px;" alt="\u5c01\u9762">', [ "725px", "400px" ]) : Alert.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                }));
            }));
        }, BiliImgService.add_down_btn = function() {
            $(".video-data").last().append(BiliImgService.down), $("body").on("click", "#downvideo", (function() {
                var _a, _b, aid = unsafeWindow.__INITIAL_STATE__.videoData.aid, cid = null !== (_b = null === (_a = unsafeWindow.__INITIAL_STATE__.cidMap[aid]) || void 0 === _a ? void 0 : _a.cid) && void 0 !== _b ? _b : unsafeWindow.__INITIAL_STATE__.videoData.cid, key = aid.toString() + cid.toString() + "MDD";
                if (Logger.debug([ aid, cid ]), aid && cid) {
                    var v_1 = Config.get(key, !1);
                    v_1 ? (v_1 = v_1, Alert.confim("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + v_1.data.accept_description[v_1.data.durl[0].order] + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function(data) {
                        window.open(v_1.data.durl[0].url);
                    }), !0)) : Route.queryBiliDown(aid, cid, (function(res) {
                        var _a;
                        "" != (null === (_a = res.data) || void 0 === _a ? void 0 : _a.durl[0].url) ? (Config.set(key, res, Min), 
                        Alert.confim("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + res.data.accept_description[res.data.durl[0].order] + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function(data) {
                            window.open(res.data.durl[0].url);
                        }), !0)) : Alert.error("\u5565\u4e5f\u6ca1\u67e5\u7740,\u5e26\u7740\u89c6\u9891\u5730\u5740\u7ed9\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\u5427~");
                    }));
                } else Alert.error("\u6682\u4e0d\u652f\u6301\u5f53\u524d\u89c6\u9891\uff0c\u5982\u6709\u7591\u95ee\u8bf7\u5e26\u4e0a\u94fe\u63a5\u8be2\u95ee\u4f5c\u8005");
            }));
        }, BiliImgService.add_triple_btn = function() {
            $(".video-data").last().append(BiliImgService.tripleClick), $("body").on("click", "#tripleClick", (function() {
                [ ".like", ".coin", ".collect" ].forEach((function(item) {
                    $(item).trigger("click");
                }));
            }));
        }, BiliImgService.decrypt = function(str) {
            return CryptoJS__default.default.AES.decrypt(str, CryptoJS__default.default.enc.Latin1.parse(Core.decode(B1)), {
                iv: CryptoJS__default.default.enc.Latin1.parse(Core.decode(B2)),
                mode: CryptoJS__default.default.mode.CBC,
                adding: CryptoJS__default.default.pad.ZeroPadding
            }).toString(CryptoJS__default.default.enc.Utf8);
        }, BiliImgService.btn = '\n    <span id="findimg" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u83b7\u53d6\u5c01\u9762\n    </span>', 
        BiliImgService.down = '\n    <span id="downvideo" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e0b\u8f7d\u89c6\u9891\n    </span>', 
        BiliImgService.tripleClick = '\n    <span id="tripleClick" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e00\u952e\u4e09\u8fde\n    </span>', 
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
            } ], this._onClick);
        }, MovieService.prototype._onClick = function() {
            $("body").on("click", "[data-cat=process]", (function() {
                Core.open("http://tv.wandhi.com/go.html?url=" + encodeURIComponent(window.location.href));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Menu$1.close();
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("http://shop.huizhek.com");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("http://jd.huizhek.com");
            }));
        }, MovieService;
    }(PluginBase), JdService = function(_super) {
        function JdService() {
            var _this = _super.call(this) || this;
            return _this._appName = "JdService", _this.rules = new Map([ [ SiteEnum.JingDong, /item\.jd\.c/i ] ]), 
            _this;
        }
        var _a;
        return __extends(JdService, _super), JdService.prototype.loader = function() {
            this.historyService.linkTest() && this.historyService.Process();
        }, JdService.prototype.run = function() {
            var keywords = $(".sku-name").text().trim();
            $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>'), 
            $(".btn-yhj").on("click", (function() {
                Core.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(keywords));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (_a = void 0 !== GwdService && GwdService) ? _a : Object) ], JdService.prototype, "historyService", void 0), 
        JdService;
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
            _this.menu = new Common.Menu, _this;
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
            } ], this._OnClick);
        }, MusicService.prototype._OnClick = function() {
            this.rules, $("body").on("click", "[data-cat=process]", (function() {
                var _a, _b;
                if (/ximalaya/i.test(Runtime.url)) {
                    for (var i = 0; i < unsafeWindow.document.scripts.length; i++) /window\.__INITIAL_STATE__ =/i.test(unsafeWindow.document.scripts[i].innerHTML) && (Logger.debug(unsafeWindow.document.scripts[i].innerHTML), 
                    eval(unsafeWindow.document.scripts[i].innerHTML.replace("window.__INITIAL_STATE__", "unsafeWindow.__INITIAL_STATE__")));
                    if (__INITIAL_STATE__ && (null === (_b = null === (_a = __INITIAL_STATE__.store) || void 0 === _a ? void 0 : _a.SoundDetailPage) || void 0 === _b ? void 0 : _b.trackId)) Core.open("http://music.wandhi.com/?id=" + __INITIAL_STATE__.store.SoundDetailPage.trackId + "&type=ximalaya"); else {
                        layer.closeAll();
                        var html = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                        $.each(__INITIAL_STATE__.store.AlbumDetailTrackList.tracksInfo.tracks, (function(index, item) {
                            html += '<li class="d0i2"><a href="http://music.wandhi.com/?id=' + item.trackId + '&type=ximalaya" target="_blank">' + item.title + "</a></li>";
                        })), html += "</ul></div>", layer.open({
                            type: 1,
                            area: [ "auto", "30%" ],
                            title: "\u4e3a\u4f60\u627e\u5230\u4e86\u8fd9\u4e9b\u66f2\u76ee\u89e3\u6790\u2026\u2026",
                            shade: .6,
                            maxmin: !1,
                            anim: 2,
                            content: html
                        });
                    }
                } else /taihe.com/i.test(Runtime.url) ? Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url.replace("taihe", "baidu"))) : Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Core.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("https://t.cn/A6LoYnHT");
            }));
        }, MusicService;
    }(PluginBase), ItemType;
    !function(ItemType) {
        ItemType.TaoBao = "tb", ItemType.TMall = "tm", ItemType.JingDong = "jd", ItemType.JingDongChaoshi = "jdcs";
    }(ItemType || (ItemType = {}));
    var Tao = function() {
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
            return _this.rules = new Map([ [ SiteEnum.TaoBao, /s\.taobao\.com\/search/i ], [ SiteEnum.TMall, /list\.tmall\.com\/search_product\.htm/i ] ]), 
            _this.selectorList = [], _this.selectora = [], _this.atrack = [], _this.key = "list_service_", 
            _this._appName = "TaoList", _this;
        }
        return __extends(ListService, _super), ListService.prototype.loader = function() {}, 
        Object.defineProperty(ListService, "style", {
            get: function() {
                return "    \n    .onekeyvip-tb-box-area {position: absolute;top: 10px;right: 5px;z-index: 9999;}\n    .onekeyvip-jd-box-area {position: absolute;top: 235px;left: 10px;z-index: 9999;}  \n    .onekeyvip-jdcs-box-area {position: absolute;top: 5px;right: 0px;z-index: 9999;}\n    .onekeyvip-box-info-translucent{opacity: .33;}\n    .onekeyvip-box-info, .onekeyvip-box-info:hover, .onekeyvip-box-info:visited {text-decoration: none!important;}\n    .onekeyvip-box-wait{cursor:pointer}\n    .onekeyvip-box-info {width: auto!important;height: auto!important;padding: 6px 8px!important;font-size: 12px;color: #fff!important;border-radius: 15px;cursor: pointer;}\n    .onekeyvip-jd-box-info-default, .onekeyvip-tb-box-info-default, .onekeyvip-jdcs-box-info-default{background: #3186fd!important;}\n    .onekeyvip-box-info-empty {color: #000!important;background: #ccc!important;}\n    .onekeyvip-box-info-find {background: #ff0036!important;}\n    .onekeyvip-box-done{position:relative}\n    ";
            },
            enumerable: !1,
            configurable: !0
        }), ListService.prototype.run = function() {
            switch (this.site) {
              case SiteEnum.TaoBao:
                this.selectorList.push(".items .item"), this.atrack.push(".pic a", ".title a"), 
                this.itemType = ItemType.TaoBao;
                break;

              case SiteEnum.TMall:
                this.selectorList.push(".product"), this.atrack.push(".productImg-wrap a", ".productTitle a"), 
                this.itemType = ItemType.TaoBao;
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
            }), 3), this.core.background((function() {
                return that.initSearch(that);
            }), 3), this.core.background((function() {
                return that.initQuery();
            }), 4);
        }, ListService.prototype.initStyle = function() {
            Core.appendCssContent(ListService.style);
        }, ListService.prototype.initSearchEvent = function() {
            var that = this;
            try {
                $(document).on("click", ".onekeyvip-" + that.itemType + "-box-area", (function() {
                    var $this = $(this);
                    $this.hasClass("onekeyvip-box-wait") ? that.queryInfo(this) : $this.hasClass("onekeyvip-box-info-translucent") ? $this.removeClass("onekeyvip-box-info-translucent") : $this.addClass("onekeyvip-box-info-translucent");
                }));
            } catch (e) {
                this.core.background((function() {
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
            var _a, _b, _c, _d, _e, _f, $dom = $(selector);
            if (!$dom.hasClass("onekeyvip-box-done")) {
                $dom.addClass("onekeyvip-box-done");
                var itemId = null !== (_b = null !== (_a = $dom.attr("data-id")) && void 0 !== _a ? _a : $dom.data("sku")) && void 0 !== _b ? _b : "";
                if (Tao.isVailidItemId(itemId) || (itemId = null !== (_d = null !== (_c = $dom.attr("data-itemid")) && void 0 !== _c ? _c : $dom.data("spu")) && void 0 !== _d ? _d : ""), 
                !Tao.isVailidItemId(itemId)) if ($dom.attr("href")) itemId = location.protocol + $dom.attr("href"); else {
                    var $a = $dom.find("a");
                    if (!$a.length) return;
                    itemId = null !== (_e = $a.attr("data-nid")) && void 0 !== _e ? _e : "", Tao.isVailidItemId(itemId) || (itemId = $a.hasClass("j_ReceiveCoupon") && $a.length > 1 ? location.protocol + $($a[1]).attr("href") : location.protocol + $a.attr("href"));
                }
                if (!Tao.isVailidItemId(itemId) && itemId.indexOf("http") > -1) {
                    var res = null !== (_f = /item.jd.com\/(.*?).html/i.exec(itemId)) && void 0 !== _f ? _f : [];
                    itemId = res.length > 0 ? res[1] : "";
                }
                Tao.isValidTaoId(itemId) && (this.initBoxHtml($dom, itemId), this.initTagClass($dom, itemId));
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
                Core.sleep(Core.random(10, 100) / 100).then((function() {
                    that.queryInfo(ele);
                }));
            }));
        }, ListService.prototype.queryInfo = function(target) {
            return __awaiter(this, void 0, Promise, (function() {
                var that, $this, itemId, couponInfo;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return that = this, ($this = $(target)).removeClass("onekeyvip-box-wait"), itemId = $this.data("itemid"), 
                        (couponInfo = Config.get("" + that.key + itemId)) ? (that.initCouponInfo(itemId, couponInfo, target), 
                        [ 3, 3 ]) : [ 3, 1 ];

                      case 1:
                        return [ 4, Route.couponQuery(itemId, that.itemType, (function(couponInfoResult) {
                            if (0 != couponInfoResult.code) {
                                var couponInfo_1 = couponInfoResult.data;
                                Config.set("" + that.key + itemId, couponInfo_1, 14400), that.initCouponInfo(itemId, couponInfo_1, target);
                            } else that.showQueryEmpty($this);
                        })) ];

                      case 2:
                        _a.sent(), _a.label = 3;

                      case 3:
                        return [ 2 ];
                    }
                }));
            }));
        }, ListService.prototype.initCouponInfo = function(itemId, couponInfo, target) {
            var _a, $this = $(target);
            if ((null === (_a = null == couponInfo ? void 0 : couponInfo.coupons) || void 0 === _a ? void 0 : _a.length) > 0) {
                var coupon = couponInfo.coupons[0];
                this.showQueryFind($this, coupon.coupon_price);
            } else this.showQueryEmpty($this);
            this.showItemUrl(itemId, null == couponInfo ? void 0 : couponInfo.item_url);
        }, ListService.prototype.showItemUrl = function(itemId, itemUrl) {
            Core.click(".onekeyvip-item-" + itemId, (function() {
                return !itemUrl || (Core.open(itemUrl), !1);
            }));
        }, ListService.prototype.showQueryFind = function(selector, couponMoney) {
            selector.html('<a target="_blank" class="onekeyvip-box-info onekeyvip-box-info-find" title="\u5207\u6362\u900f\u660e\u5ea6">' + couponMoney + "\u5143\u5238</a>");
        }, ListService.prototype.showQueryEmpty = function(selector) {
            selector.addClass("onekeyvip-box-info-translucent"), selector.html('<a href="javascript:void(0);" class="onekeyvip-box-info onekeyvip-box-info-empty" title="\u5207\u6362\u900f\u660e\u5ea6">\u6682\u65e0\u4f18\u60e0</a>');
        }, ListService;
    }(PluginBase), CsdnAdService = function(_super) {
        function CsdnAdService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.CSDN, /blog\.csdn\.net/i ] ]), _this._appName = "csdn", 
            _this._unique = !1, _this;
        }
        return __extends(CsdnAdService, _super), CsdnAdService.prototype.loader = function() {
            Core.appendCssContent("\n        #content_views pre{\n            -webkit-touch-callout: auto !important;\n            -webkit-user-select: auto !important;\n            -khtml-user-select: auto !important;\n            -moz-user-select: auto !important;\n            -ms-user-select: auto !important; \n            user-select: auto !important; \n        }\n        #content_views pre code{\n            -webkit-touch-callout: auto !important;\n            -webkit-user-select: auto !important;\n            -khtml-user-select: auto !important;\n            -moz-user-select: auto !important;\n            -ms-user-select: auto !important; \n            user-select: auto !important; \n        }");
        }, CsdnAdService.prototype.run = function() {
            this.core.background(this.removeAds, 3), this.commentClean();
        }, CsdnAdService.prototype.removeAds = function() {
            CsdnAdService.adSelectors.forEach((function(selector) {
                $(selector).remove();
            }));
        }, CsdnAdService.prototype.commentClean = function() {
            Core.lazyload((function() {
                Logger.info("\u8bc4\u8bba\u533a\u6e05\u7406"), $(".comment-list-box").css("overflow", "").css("max-height", ""), 
                $("#commentPage").removeClass("d-none"), $("#btnMoreComment").remove();
            }), 3);
        }, CsdnAdService.adSelectors = [ "#footerRightAds", ".side-question-box", "div[id^='dmp_ad']", "div[class^='ad_']", "div[id^='floor-ad_']", ".adsbygoogle" ], 
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
                        return __awaiter(this, void 0, void 0, (function() {
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    return Alert.loadingS("\u89e3\u6790\u4e2d\u8bf7\u7a0d\u540e"), [ 4, Core.lazyload((function() {
                                        WenKuService.loadFullDoc().then((function() {
                                            Logger.debug("\u8f7d\u5165\u6587\u5e93\u5185\u5bb9\u5b8c\u6210"), window.scrollTo(0, 0), 
                                            WenKuService.exportDoc(), Swal__default.default.close();
                                        }));
                                    }), .5) ];

                                  case 1:
                                    return _a.sent(), [ 2 ];
                                }
                            }));
                        }));
                    })), $("body").on("click", "[data-cat=search]", (function() {
                        Menu.close();
                    })), $("body").on("click", "[data-cat=tb]", (function() {
                        Core.open("http://shop.huizhek.com");
                    })), $("body").on("click", "[data-cat=jd]", (function() {
                        Core.open("http://jd.huizhek.com");
                    })), [ 2 ];
                }));
            }));
        }, WenKuService.exportDoc = function() {
            var doc = $(".reader-word-layer"), _doc = $(doc).clone();
            _doc.each((function(i, e) {
                $(e).is(":hidden") && $(e).remove();
            }));
            var docContent = "Mime-Version: 1.0\nContent-Base: " + Runtime.url + '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' + Runtime.url + '\n\n<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n\n</style>\n</head>\n<body>\n' + _doc.text().split("\n").map((function(t) {
                return "<p>" + t + "</p>";
            })).join("") + "\n</body>\n</html>\n--NEXT.ITEM-BOUNDARY--";
            saveAs(new Blob([ docContent ], {
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
    }(PluginBase), OneKeyVipInjection = function() {
        function OneKeyVipInjection() {
            this.plugins = new Array, this.plugins = [ Container.Require(UpdateService), Container.Require(BiliImgService), Container.Require(MovieService), Container.Require(ListService), Container.Require(TaoBaoService), Container.Require(JdService), Container.Require(MusicService), Container.Require(GwdService), Container.Require(CsdnAdService), Container.Require(WenKuService) ], 
            Logger.info("container loaded");
        }
        return OneKeyVipInjection.prototype.Init = function() {
            this.plugins.every((function(element) {
                return !element.linkTest() || (new Promise((function(resolve) {
                    resolve(1);
                })).then(element.Process), Logger.debug("element [" + element.appName() + "];unique:[" + element.unique() + "]"), 
                !element.unique());
            }));
        }, OneKeyVipInjection;
    }();
    Logger.level = LogLevel.info, Container.Require(OneKeyVipInjection).Init();
}));
