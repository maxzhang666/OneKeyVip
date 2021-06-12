// ==UserScript==
// @name         【玩的嗨】VIP工具箱,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,下载B站视频,上学吧答案获取等众多功能聚合 2021-06-12 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.2.28
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍：1、Vip视频解析；2、一站式音乐搜索解决方案；3、bilibili视频封面获取；4、bilibili视频下载；5、上学吧答案查询(接口偶尔抽风)；6、商品历史价格展示(一次性告别虚假降价)；7、优惠券查询
// @author       MaxZhang
// @icon         http://www.wandhi.com//favicon.ico
// @include      *://m.youku.com/v*
// @include      *://m.youku.com/a*
// @include      *://v.youku.com/v_*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.iqiyi.com/adv*
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
// @license      MIT
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      shangxueba365.com
// @connect      api.wandhi.com
// @connect      cdn.jsdelivr.net
// @connect      tool.manmanbuy.com
// @connect      xbeibeix.com
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
// @antifeature  referral-link 此提示为GreasyFork代码规范要求含有查券功能的脚本必须添加，实际使用无任何强制跳转，代码可查，请知悉。
// ==/UserScript==

!function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? factory(require("vue"), require("crypto-js")) : "function" == typeof define && define.amd ? define([ "vue", "crypto-js" ], factory) : factory((global = "undefined" != typeof globalThis ? globalThis : global || self).Vue, global.CryptoJS);
}(this, (function(Vue, CryptoJS) {
    "use strict";
    function _interopDefaultLegacy(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var Vue__default = _interopDefaultLegacy(Vue), CryptoJS__default = _interopDefaultLegacy(CryptoJS), extendStatics = function(d, b) {
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
    var LogLevel, Logger = function() {
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
    }();
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
    }, PriceDetail = function PriceDetail() {}, ListPriceItem = function ListPriceItem() {}, Core = function() {
        function Core() {
            this.url = this.currentUrl();
        }
        return Core.appendTo = function(selecter, html) {
            $(selecter).append(html);
        }, Core.lazyload = function(callback, time) {
            void 0 === time && (time = 5), setTimeout((function() {
                callback();
            }), 1e3 * time);
        }, Core.autoLazyload = function(is_ok, callback, time) {
            void 0 === time && (time = 5), is_ok() ? callback() : setTimeout((function() {
                Core.autoLazyload(is_ok, callback, time);
            }), 1e3 * time);
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
        }, Object.defineProperty(Core.prototype, "topUrl", {
            get: function() {
                return top.window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(Core, "top_url", {
            get: function() {
                return top.window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Core.format = function(time, fmt) {
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
            void 0 === timeOut && (timeOut = 10), this.url = _url, this.methodType = _methodType, 
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
        }, Alert;
    }(), Http = function() {
        function Http() {}
        return Http.ajax = function(option) {
            var _a, _b;
            option.headers.set("User-Agent", "Mozilla/4.0 (compatible) Greasemonkey"), option.headers.set("Accept", "application/atom+xml,application/xml,text/xml");
            var head = new HttpHeaders;
            head.version = Config.env.script.version, head.auth = null !== (_a = Config.env.script.author) && void 0 !== _a ? _a : "", 
            head.namespace = null !== (_b = Config.env.script.namespace) && void 0 !== _b ? _b : "", 
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
    var ToastType, Route = function() {
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
    }();
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
    var Common;
    styleInject('html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:"Helvetica Neue",Helvetica,"Microsoft YaHei",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}'), 
    function(Common) {
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
                if (!this.site.test(this.core.topUrl)) {
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
                    $("body").on("mousedown", "#" + this.menuSelecter, (function(a) {
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
                    })).on("mouseup", "#" + this.menuSelecter, (function() {
                        drags.down = !1, $(document).off("mousemove");
                    })), callback.call(this);
                }
            }, Menu.close = function() {
                $("#" + Menu.mainId).hide();
            }, Menu.mainId = "Wandhi-nav", Menu;
        }();
        Common.Menu = Menu;
    }(Common || (Common = {}));
    var Reflect$1, commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    !function(Reflect) {
        !function(factory) {
            var root = "object" == typeof commonjsGlobal ? commonjsGlobal : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(), exporter = makeExporter(Reflect);
            function makeExporter(target, previous) {
                return function(key, value) {
                    "function" != typeof target[key] && Object.defineProperty(target, key, {
                        configurable: !0,
                        writable: !0,
                        value: value
                    }), previous && previous(key, value);
                };
            }
            void 0 === root.Reflect ? root.Reflect = Reflect : exporter = makeExporter(root.Reflect, exporter), 
            function(exporter) {
                var hasOwn = Object.prototype.hasOwnProperty, supportsSymbol = "function" == typeof Symbol, toPrimitiveSymbol = supportsSymbol && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive", iteratorSymbol = supportsSymbol && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator", supportsCreate = "function" == typeof Object.create, supportsProto = {
                    __proto__: []
                } instanceof Array, downLevel = !supportsCreate && !supportsProto, HashMap = {
                    create: supportsCreate ? function() {
                        return MakeDictionary(Object.create(null));
                    } : supportsProto ? function() {
                        return MakeDictionary({
                            __proto__: null
                        });
                    } : function() {
                        return MakeDictionary({});
                    },
                    has: downLevel ? function(map, key) {
                        return hasOwn.call(map, key);
                    } : function(map, key) {
                        return key in map;
                    },
                    get: downLevel ? function(map, key) {
                        return hasOwn.call(map, key) ? map[key] : void 0;
                    } : function(map, key) {
                        return map[key];
                    }
                }, functionPrototype = Object.getPrototypeOf(Function), usePolyfill = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, _Map = usePolyfill || "function" != typeof Map || "function" != typeof Map.prototype.entries ? function CreateMapPolyfill() {
                    var cacheSentinel = {}, arraySentinel = [], MapIterator = function() {
                        function MapIterator(keys, values, selector) {
                            this._index = 0, this._keys = keys, this._values = values, this._selector = selector;
                        }
                        return MapIterator.prototype["@@iterator"] = function() {
                            return this;
                        }, MapIterator.prototype[iteratorSymbol] = function() {
                            return this;
                        }, MapIterator.prototype.next = function() {
                            var index = this._index;
                            if (index >= 0 && index < this._keys.length) {
                                var result = this._selector(this._keys[index], this._values[index]);
                                return index + 1 >= this._keys.length ? (this._index = -1, this._keys = arraySentinel, 
                                this._values = arraySentinel) : this._index++, {
                                    value: result,
                                    done: !1
                                };
                            }
                            return {
                                value: void 0,
                                done: !0
                            };
                        }, MapIterator.prototype.throw = function(error) {
                            throw this._index >= 0 && (this._index = -1, this._keys = arraySentinel, this._values = arraySentinel), 
                            error;
                        }, MapIterator.prototype.return = function(value) {
                            return this._index >= 0 && (this._index = -1, this._keys = arraySentinel, this._values = arraySentinel), 
                            {
                                value: value,
                                done: !0
                            };
                        }, MapIterator;
                    }();
                    return function() {
                        function Map() {
                            this._keys = [], this._values = [], this._cacheKey = cacheSentinel, this._cacheIndex = -2;
                        }
                        return Object.defineProperty(Map.prototype, "size", {
                            get: function() {
                                return this._keys.length;
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Map.prototype.has = function(key) {
                            return this._find(key, !1) >= 0;
                        }, Map.prototype.get = function(key) {
                            var index = this._find(key, !1);
                            return index >= 0 ? this._values[index] : void 0;
                        }, Map.prototype.set = function(key, value) {
                            var index = this._find(key, !0);
                            return this._values[index] = value, this;
                        }, Map.prototype.delete = function(key) {
                            var index = this._find(key, !1);
                            if (index >= 0) {
                                for (var size = this._keys.length, i = index + 1; i < size; i++) this._keys[i - 1] = this._keys[i], 
                                this._values[i - 1] = this._values[i];
                                return this._keys.length--, this._values.length--, key === this._cacheKey && (this._cacheKey = cacheSentinel, 
                                this._cacheIndex = -2), !0;
                            }
                            return !1;
                        }, Map.prototype.clear = function() {
                            this._keys.length = 0, this._values.length = 0, this._cacheKey = cacheSentinel, 
                            this._cacheIndex = -2;
                        }, Map.prototype.keys = function() {
                            return new MapIterator(this._keys, this._values, getKey);
                        }, Map.prototype.values = function() {
                            return new MapIterator(this._keys, this._values, getValue);
                        }, Map.prototype.entries = function() {
                            return new MapIterator(this._keys, this._values, getEntry);
                        }, Map.prototype["@@iterator"] = function() {
                            return this.entries();
                        }, Map.prototype[iteratorSymbol] = function() {
                            return this.entries();
                        }, Map.prototype._find = function(key, insert) {
                            return this._cacheKey !== key && (this._cacheIndex = this._keys.indexOf(this._cacheKey = key)), 
                            this._cacheIndex < 0 && insert && (this._cacheIndex = this._keys.length, this._keys.push(key), 
                            this._values.push(void 0)), this._cacheIndex;
                        }, Map;
                    }();
                    function getKey(key, _) {
                        return key;
                    }
                    function getValue(_, value) {
                        return value;
                    }
                    function getEntry(key, value) {
                        return [ key, value ];
                    }
                }() : Map, _Set = usePolyfill || "function" != typeof Set || "function" != typeof Set.prototype.entries ? function CreateSetPolyfill() {
                    return function() {
                        function Set() {
                            this._map = new _Map;
                        }
                        return Object.defineProperty(Set.prototype, "size", {
                            get: function() {
                                return this._map.size;
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Set.prototype.has = function(value) {
                            return this._map.has(value);
                        }, Set.prototype.add = function(value) {
                            return this._map.set(value, value), this;
                        }, Set.prototype.delete = function(value) {
                            return this._map.delete(value);
                        }, Set.prototype.clear = function() {
                            this._map.clear();
                        }, Set.prototype.keys = function() {
                            return this._map.keys();
                        }, Set.prototype.values = function() {
                            return this._map.values();
                        }, Set.prototype.entries = function() {
                            return this._map.entries();
                        }, Set.prototype["@@iterator"] = function() {
                            return this.keys();
                        }, Set.prototype[iteratorSymbol] = function() {
                            return this.keys();
                        }, Set;
                    }();
                }() : Set, Metadata = new (usePolyfill || "function" != typeof WeakMap ? function CreateWeakMapPolyfill() {
                    var keys = HashMap.create(), rootKey = CreateUniqueKey();
                    return function() {
                        function WeakMap() {
                            this._key = CreateUniqueKey();
                        }
                        return WeakMap.prototype.has = function(target) {
                            var table = GetOrCreateWeakMapTable(target, !1);
                            return void 0 !== table && HashMap.has(table, this._key);
                        }, WeakMap.prototype.get = function(target) {
                            var table = GetOrCreateWeakMapTable(target, !1);
                            return void 0 !== table ? HashMap.get(table, this._key) : void 0;
                        }, WeakMap.prototype.set = function(target, value) {
                            return GetOrCreateWeakMapTable(target, !0)[this._key] = value, this;
                        }, WeakMap.prototype.delete = function(target) {
                            var table = GetOrCreateWeakMapTable(target, !1);
                            return void 0 !== table && delete table[this._key];
                        }, WeakMap.prototype.clear = function() {
                            this._key = CreateUniqueKey();
                        }, WeakMap;
                    }();
                    function CreateUniqueKey() {
                        var key;
                        do {
                            key = "@@WeakMap@@" + CreateUUID();
                        } while (HashMap.has(keys, key));
                        return keys[key] = !0, key;
                    }
                    function GetOrCreateWeakMapTable(target, create) {
                        if (!hasOwn.call(target, rootKey)) {
                            if (!create) return;
                            Object.defineProperty(target, rootKey, {
                                value: HashMap.create()
                            });
                        }
                        return target[rootKey];
                    }
                    function FillRandomBytes(buffer, size) {
                        for (var i = 0; i < size; ++i) buffer[i] = 255 * Math.random() | 0;
                        return buffer;
                    }
                    function CreateUUID() {
                        var data = function GenRandomBytes(size) {
                            return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(size)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(size)) : FillRandomBytes(new Uint8Array(size), size) : FillRandomBytes(new Array(size), size);
                        }(16);
                        data[6] = 79 & data[6] | 64, data[8] = 191 & data[8] | 128;
                        for (var result = "", offset = 0; offset < 16; ++offset) {
                            var byte = data[offset];
                            4 !== offset && 6 !== offset && 8 !== offset || (result += "-"), byte < 16 && (result += "0"), 
                            result += byte.toString(16).toLowerCase();
                        }
                        return result;
                    }
                }() : WeakMap);
                function GetOrCreateMetadataMap(O, P, Create) {
                    var targetMetadata = Metadata.get(O);
                    if (IsUndefined(targetMetadata)) {
                        if (!Create) return;
                        targetMetadata = new _Map, Metadata.set(O, targetMetadata);
                    }
                    var metadataMap = targetMetadata.get(P);
                    if (IsUndefined(metadataMap)) {
                        if (!Create) return;
                        metadataMap = new _Map, targetMetadata.set(P, metadataMap);
                    }
                    return metadataMap;
                }
                function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                    var metadataMap = GetOrCreateMetadataMap(O, P, !1);
                    return !IsUndefined(metadataMap) && function ToBoolean(argument) {
                        return !!argument;
                    }(metadataMap.has(MetadataKey));
                }
                function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                    var metadataMap = GetOrCreateMetadataMap(O, P, !1);
                    if (!IsUndefined(metadataMap)) return metadataMap.get(MetadataKey);
                }
                function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                    GetOrCreateMetadataMap(O, P, !0).set(MetadataKey, MetadataValue);
                }
                function OrdinaryOwnMetadataKeys(O, P) {
                    var keys = [], metadataMap = GetOrCreateMetadataMap(O, P, !1);
                    if (IsUndefined(metadataMap)) return keys;
                    for (var iterator = function GetIterator(obj) {
                        var method = GetMethod(obj, iteratorSymbol);
                        if (!IsCallable(method)) throw new TypeError;
                        var iterator = method.call(obj);
                        if (!IsObject(iterator)) throw new TypeError;
                        return iterator;
                    }(metadataMap.keys()), k = 0; ;) {
                        var next = IteratorStep(iterator);
                        if (!next) return keys.length = k, keys;
                        var nextValue = next.value;
                        try {
                            keys[k] = nextValue;
                        } catch (e) {
                            try {
                                IteratorClose(iterator);
                            } finally {
                                throw e;
                            }
                        }
                        k++;
                    }
                }
                function Type(x) {
                    if (null === x) return 1;
                    switch (typeof x) {
                      case "undefined":
                        return 0;

                      case "boolean":
                        return 2;

                      case "string":
                        return 3;

                      case "symbol":
                        return 4;

                      case "number":
                        return 5;

                      case "object":
                        return null === x ? 1 : 6;

                      default:
                        return 6;
                    }
                }
                function IsUndefined(x) {
                    return void 0 === x;
                }
                function IsNull(x) {
                    return null === x;
                }
                function IsObject(x) {
                    return "object" == typeof x ? null !== x : "function" == typeof x;
                }
                function ToPrimitive(input, PreferredType) {
                    switch (Type(input)) {
                      case 0:
                      case 1:
                      case 2:
                      case 3:
                      case 4:
                      case 5:
                        return input;
                    }
                    var hint = 3 === PreferredType ? "string" : 5 === PreferredType ? "number" : "default", exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                    if (void 0 !== exoticToPrim) {
                        var result = exoticToPrim.call(input, hint);
                        if (IsObject(result)) throw new TypeError;
                        return result;
                    }
                    return function OrdinaryToPrimitive(O, hint) {
                        if ("string" === hint) {
                            var toString_1 = O.toString;
                            if (IsCallable(toString_1)) if (!IsObject(result = toString_1.call(O))) return result;
                            if (IsCallable(valueOf = O.valueOf)) if (!IsObject(result = valueOf.call(O))) return result;
                        } else {
                            var valueOf;
                            if (IsCallable(valueOf = O.valueOf)) if (!IsObject(result = valueOf.call(O))) return result;
                            var result, toString_2 = O.toString;
                            if (IsCallable(toString_2)) if (!IsObject(result = toString_2.call(O))) return result;
                        }
                        throw new TypeError;
                    }(input, "default" === hint ? "number" : hint);
                }
                function ToPropertyKey(argument) {
                    var key = ToPrimitive(argument, 3);
                    return function IsSymbol(x) {
                        return "symbol" == typeof x;
                    }(key) ? key : function ToString(argument) {
                        return "" + argument;
                    }(key);
                }
                function IsArray(argument) {
                    return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : "[object Array]" === Object.prototype.toString.call(argument);
                }
                function IsCallable(argument) {
                    return "function" == typeof argument;
                }
                function IsConstructor(argument) {
                    return "function" == typeof argument;
                }
                function GetMethod(V, P) {
                    var func = V[P];
                    if (null != func) {
                        if (!IsCallable(func)) throw new TypeError;
                        return func;
                    }
                }
                function IteratorStep(iterator) {
                    var result = iterator.next();
                    return !result.done && result;
                }
                function IteratorClose(iterator) {
                    var f = iterator.return;
                    f && f.call(iterator);
                }
                function OrdinaryGetPrototypeOf(O) {
                    var proto = Object.getPrototypeOf(O);
                    if ("function" != typeof O || O === functionPrototype) return proto;
                    if (proto !== functionPrototype) return proto;
                    var prototype = O.prototype, prototypeProto = prototype && Object.getPrototypeOf(prototype);
                    if (null == prototypeProto || prototypeProto === Object.prototype) return proto;
                    var constructor = prototypeProto.constructor;
                    return "function" != typeof constructor || constructor === O ? proto : constructor;
                }
                function MakeDictionary(obj) {
                    return obj.__ = void 0, delete obj.__, obj;
                }
                exporter("decorate", (function decorate(decorators, target, propertyKey, attributes) {
                    if (IsUndefined(propertyKey)) {
                        if (!IsArray(decorators)) throw new TypeError;
                        if (!IsConstructor(target)) throw new TypeError;
                        return function DecorateConstructor(decorators, target) {
                            for (var i = decorators.length - 1; i >= 0; --i) {
                                var decorated = (0, decorators[i])(target);
                                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                                    if (!IsConstructor(decorated)) throw new TypeError;
                                    target = decorated;
                                }
                            }
                            return target;
                        }(decorators, target);
                    }
                    if (!IsArray(decorators)) throw new TypeError;
                    if (!IsObject(target)) throw new TypeError;
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError;
                    return IsNull(attributes) && (attributes = void 0), function DecorateProperty(decorators, target, propertyKey, descriptor) {
                        for (var i = decorators.length - 1; i >= 0; --i) {
                            var decorated = (0, decorators[i])(target, propertyKey, descriptor);
                            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                                if (!IsObject(decorated)) throw new TypeError;
                                descriptor = decorated;
                            }
                        }
                        return descriptor;
                    }(decorators, target, propertyKey = ToPropertyKey(propertyKey), attributes);
                })), exporter("metadata", (function metadata(metadataKey, metadataValue) {
                    return function decorator(target, propertyKey) {
                        if (!IsObject(target)) throw new TypeError;
                        if (!IsUndefined(propertyKey) && !function IsPropertyKey(argument) {
                            switch (Type(argument)) {
                              case 3:
                              case 4:
                                return !0;

                              default:
                                return !1;
                            }
                        }(propertyKey)) throw new TypeError;
                        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                    };
                })), exporter("defineMetadata", (function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                })), exporter("hasMetadata", (function hasMetadata(metadataKey, target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), function OrdinaryHasMetadata(MetadataKey, O, P) {
                        if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return !0;
                        var parent = OrdinaryGetPrototypeOf(O);
                        return !IsNull(parent) && OrdinaryHasMetadata(MetadataKey, parent, P);
                    }(metadataKey, target, propertyKey);
                })), exporter("hasOwnMetadata", (function hasOwnMetadata(metadataKey, target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
                })), exporter("getMetadata", (function getMetadata(metadataKey, target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), function OrdinaryGetMetadata(MetadataKey, O, P) {
                        if (OrdinaryHasOwnMetadata(MetadataKey, O, P)) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                        var parent = OrdinaryGetPrototypeOf(O);
                        return IsNull(parent) ? void 0 : OrdinaryGetMetadata(MetadataKey, parent, P);
                    }(metadataKey, target, propertyKey);
                })), exporter("getOwnMetadata", (function getOwnMetadata(metadataKey, target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
                })), exporter("getMetadataKeys", (function getMetadataKeys(target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), function OrdinaryMetadataKeys(O, P) {
                        var ownKeys = OrdinaryOwnMetadataKeys(O, P), parent = OrdinaryGetPrototypeOf(O);
                        if (null === parent) return ownKeys;
                        var parentKeys = OrdinaryMetadataKeys(parent, P);
                        if (parentKeys.length <= 0) return ownKeys;
                        if (ownKeys.length <= 0) return parentKeys;
                        for (var set = new _Set, keys = [], _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                            var key = ownKeys_1[_i];
                            set.has(key) || (set.add(key), keys.push(key));
                        }
                        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                            key = parentKeys_1[_a];
                            set.has(key) || (set.add(key), keys.push(key));
                        }
                        return keys;
                    }(target, propertyKey);
                })), exporter("getOwnMetadataKeys", (function getOwnMetadataKeys(target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    return IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey)), OrdinaryOwnMetadataKeys(target, propertyKey);
                })), exporter("deleteMetadata", (function deleteMetadata(metadataKey, target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError;
                    IsUndefined(propertyKey) || (propertyKey = ToPropertyKey(propertyKey));
                    var metadataMap = GetOrCreateMetadataMap(target, propertyKey, !1);
                    if (IsUndefined(metadataMap)) return !1;
                    if (!metadataMap.delete(metadataKey)) return !1;
                    if (metadataMap.size > 0) return !0;
                    var targetMetadata = Metadata.get(target);
                    return targetMetadata.delete(propertyKey), targetMetadata.size > 0 || Metadata.delete(target), 
                    !0;
                }));
            }(exporter);
        }();
    }(Reflect$1 || (Reflect$1 = {}));
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
    var SiteEnum, PluginBase = function() {
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
    }();
    !function(SiteEnum) {
        SiteEnum.All = "All", SiteEnum.TaoBao = "TaoBao", SiteEnum.TMall = "TMall", SiteEnum.JingDong = "JingDong", 
        SiteEnum.IQiYi = "IQiYi", SiteEnum.YouKu = "YouKu", SiteEnum.LeShi = "LeShi", SiteEnum.TuDou = "TuDou", 
        SiteEnum.Tencent_V = "Tencent_V", SiteEnum.MangGuo = "MangGuo", SiteEnum.SoHu = "SoHu", 
        SiteEnum.Acfun = "Acfun", SiteEnum.BiliBili = "BiliBili", SiteEnum.M1905 = "M1905", 
        SiteEnum.PPTV = "PPTV", SiteEnum.YinYueTai = "YinYueTai", SiteEnum.WangYi = "WangYi", 
        SiteEnum.Tencent_M = "Tencent_M", SiteEnum.KuGou = "KuGou", SiteEnum.KuWo = "KuWo", 
        SiteEnum.XiaMi = "XiaMi", SiteEnum.TaiHe = "TaiHe", SiteEnum.QingTing = "QingTing", 
        SiteEnum.LiZhi = "LiZhi", SiteEnum.MiGu = "MiGu", SiteEnum.XiMaLaYa = "XiMaLaYa", 
        SiteEnum.SXB = "SXB", SiteEnum.BDY = "BDY", SiteEnum.BDY1 = "BDY1", SiteEnum.LZY = "LZY", 
        SiteEnum.SuNing = "SuNing", SiteEnum.Vp = "Vp";
    }(SiteEnum || (SiteEnum = {}));
    var VersionResult, UpdateService = function(_super) {
        function UpdateService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.All, /(.*)/i ] ]), _this._unique = !1, 
            _this._appName = "update", _this;
        }
        return __extends(UpdateService, _super), UpdateService.prototype.loader = function() {}, 
        UpdateService.prototype.run = function() {
            if (!Config.get("isUpdate", !1)) {
                var current_1 = new VersionCompar(Config.env.script.version);
                Http.get_text(Route.update_api).then((function(res) {
                    var version = new VersionCompar(res.match(/@version[ ]*([\d\.]+)/)[1]);
                    if (version.compareTo(current_1) === VersionResult.greater) {
                        var msg = "\u65b0\u7248\u672c<span>" + version.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + Route.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + Route.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + Route.home_url + '">\u67e5\u770b</a>';
                        Toast.info(msg, "\u68c0\u67e5\u66f4\u65b0"), Config.set("isUpdate", !0, 3600);
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
    }();
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
    }(BaseCoupon), LinesOption = function LinesOption() {};
    styleInject("#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img {\n    margin: 0 auto\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history, #vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2!important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n.vip-plugin-outside-similar-buy-list-li-store{\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}\n");
    var ItemType, MsgInfo = function MsgInfo() {}, PromoInfo = function PromoInfo() {
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
    }(PluginBase), sweetalert2_all = function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports;
    }((function(module, exports) {
        module.exports = function() {
            const DismissReason = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }), capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1), toArray = nodeList => Array.prototype.slice.call(nodeList), previousWarnOnceMessages = [], warnAboutDeprecation = (deprecatedParam, useInstead) => {
                var message;
                message = '"'.concat(deprecatedParam, '" is deprecated and will be removed in the next major release. Please use "').concat(useInstead, '" instead.'), 
                previousWarnOnceMessages.includes(message) || previousWarnOnceMessages.push(message);
            }, callIfFunction = arg => "function" == typeof arg ? arg() : arg, hasToPromiseFn = arg => arg && "function" == typeof arg.toPromise, asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg), isPromise = arg => arg && Promise.resolve(arg) === arg, isElement = elem => elem instanceof Element || (elem => "object" == typeof elem && elem.jquery)(elem), prefix = items => {
                const result = {};
                for (const i in items) result[items[i]] = "swal2-" + items[i];
                return result;
            }, swalClasses = prefix([ "container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error" ]), iconTypes = prefix([ "success", "warning", "info", "question", "error" ]), getContainer = () => document.body.querySelector(".".concat(swalClasses.container)), elementBySelector = selectorString => {
                const container = getContainer();
                return container ? container.querySelector(selectorString) : null;
            }, elementByClass = className => elementBySelector(".".concat(className)), getPopup = () => elementByClass(swalClasses.popup), getIcon = () => elementByClass(swalClasses.icon), getTitle = () => elementByClass(swalClasses.title), getHtmlContainer = () => elementByClass(swalClasses["html-container"]), getImage = () => elementByClass(swalClasses.image), getProgressSteps = () => elementByClass(swalClasses["progress-steps"]), getValidationMessage = () => elementByClass(swalClasses["validation-message"]), getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm)), getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny)), getLoader = () => elementBySelector(".".concat(swalClasses.loader)), getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel)), getActions = () => elementByClass(swalClasses.actions), getFooter = () => elementByClass(swalClasses.footer), getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]), getCloseButton = () => elementByClass(swalClasses.close), getFocusableElements = () => {
                const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((a, b) => (a = parseInt(a.getAttribute("tabindex"))) > (b = parseInt(b.getAttribute("tabindex"))) ? 1 : a < b ? -1 : 0), otherFocusableElements = toArray(getPopup().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(el => "-1" !== el.getAttribute("tabindex"));
                return (arr => {
                    const result = [];
                    for (let i = 0; i < arr.length; i++) -1 === result.indexOf(arr[i]) && result.push(arr[i]);
                    return result;
                })(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
            }, isModal = () => !isToast() && !document.body.classList.contains(swalClasses["no-backdrop"]), isToast = () => document.body.classList.contains(swalClasses["toast-shown"]), states = {
                previousBodyPadding: null
            }, setInnerHtml = (elem, html) => {
                if (elem.textContent = "", html) {
                    const parsed = (new DOMParser).parseFromString(html, "text/html");
                    toArray(parsed.querySelector("head").childNodes).forEach(child => {
                        elem.appendChild(child);
                    }), toArray(parsed.querySelector("body").childNodes).forEach(child => {
                        elem.appendChild(child);
                    });
                }
            }, hasClass = (elem, className) => {
                if (!className) return !1;
                const classList = className.split(/\s+/);
                for (let i = 0; i < classList.length; i++) if (!elem.classList.contains(classList[i])) return !1;
                return !0;
            }, applyCustomClass = (elem, params, className) => {
                if (((elem, params) => {
                    toArray(elem.classList).forEach(className => {
                        Object.values(swalClasses).includes(className) || Object.values(iconTypes).includes(className) || Object.values(params.showClass).includes(className) || elem.classList.remove(className);
                    });
                })(elem, params), params.customClass && params.customClass[className]) {
                    if ("string" != typeof params.customClass[className] && !params.customClass[className].forEach) return void "Invalid type of customClass.".concat(className, '! Expected string or iterable object, got "').concat(typeof params.customClass[className], '"');
                    addClass(elem, params.customClass[className]);
                }
            }, getInput = (popup, inputType) => {
                if (!inputType) return null;
                switch (inputType) {
                  case "select":
                  case "textarea":
                  case "file":
                    return getChildByClass(popup, swalClasses[inputType]);

                  case "checkbox":
                    return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

                  case "radio":
                    return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

                  case "range":
                    return popup.querySelector(".".concat(swalClasses.range, " input"));

                  default:
                    return getChildByClass(popup, swalClasses.input);
                }
            }, focusInput = input => {
                if (input.focus(), "file" !== input.type) {
                    const val = input.value;
                    input.value = "", input.value = val;
                }
            }, toggleClass = (target, classList, condition) => {
                target && classList && ("string" == typeof classList && (classList = classList.split(/\s+/).filter(Boolean)), 
                classList.forEach(className => {
                    target.forEach ? target.forEach(elem => {
                        condition ? elem.classList.add(className) : elem.classList.remove(className);
                    }) : condition ? target.classList.add(className) : target.classList.remove(className);
                }));
            }, addClass = (target, classList) => {
                toggleClass(target, classList, !0);
            }, removeClass = (target, classList) => {
                toggleClass(target, classList, !1);
            }, getChildByClass = (elem, className) => {
                for (let i = 0; i < elem.childNodes.length; i++) if (hasClass(elem.childNodes[i], className)) return elem.childNodes[i];
            }, applyNumericalStyle = (elem, property, value) => {
                value === "".concat(parseInt(value)) && (value = parseInt(value)), value || 0 === parseInt(value) ? elem.style[property] = "number" == typeof value ? "".concat(value, "px") : value : elem.style.removeProperty(property);
            }, show = (elem, display = "flex") => {
                elem.style.display = display;
            }, hide = elem => {
                elem.style.display = "none";
            }, setStyle = (parent, selector, property, value) => {
                const el = parent.querySelector(selector);
                el && (el.style[property] = value);
            }, toggle = (elem, condition, display) => {
                condition ? show(elem, display) : hide(elem);
            }, isVisible = elem => !(!elem || !(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)), isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight), hasCssAnimation = elem => {
                const style = window.getComputedStyle(elem), animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0"), transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
                return animDuration > 0 || transDuration > 0;
            }, animateTimerProgressBar = (timer, reset = !1) => {
                const timerProgressBar = getTimerProgressBar();
                isVisible(timerProgressBar) && (reset && (timerProgressBar.style.transition = "none", 
                timerProgressBar.style.width = "100%"), setTimeout(() => {
                    timerProgressBar.style.transition = "width ".concat(timer / 1e3, "s linear"), timerProgressBar.style.width = "0%";
                }, 10));
            }, isNodeEnv = () => "undefined" == typeof window || "undefined" == typeof document, sweetHTML = '\n <div aria-labelledby="'.concat(swalClasses.title, '" aria-describedby="').concat(swalClasses["html-container"], '" class="').concat(swalClasses.popup, '" tabindex="-1">\n   <button type="button" class="').concat(swalClasses.close, '"></button>\n   <ul class="').concat(swalClasses["progress-steps"], '"></ul>\n   <div class="').concat(swalClasses.icon, '"></div>\n   <img class="').concat(swalClasses.image, '" />\n   <h2 class="').concat(swalClasses.title, '" id="').concat(swalClasses.title, '"></h2>\n   <div class="').concat(swalClasses["html-container"], '" id="').concat(swalClasses["html-container"], '"></div>\n   <input class="').concat(swalClasses.input, '" />\n   <input type="file" class="').concat(swalClasses.file, '" />\n   <div class="').concat(swalClasses.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(swalClasses.select, '"></select>\n   <div class="').concat(swalClasses.radio, '"></div>\n   <label for="').concat(swalClasses.checkbox, '" class="').concat(swalClasses.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(swalClasses.label, '"></span>\n   </label>\n   <textarea class="').concat(swalClasses.textarea, '"></textarea>\n   <div class="').concat(swalClasses["validation-message"], '" id="').concat(swalClasses["validation-message"], '"></div>\n   <div class="').concat(swalClasses.actions, '">\n     <div class="').concat(swalClasses.loader, '"></div>\n     <button type="button" class="').concat(swalClasses.confirm, '"></button>\n     <button type="button" class="').concat(swalClasses.deny, '"></button>\n     <button type="button" class="').concat(swalClasses.cancel, '"></button>\n   </div>\n   <div class="').concat(swalClasses.footer, '"></div>\n   <div class="').concat(swalClasses["timer-progress-bar-container"], '">\n     <div class="').concat(swalClasses["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""), resetValidationMessage = () => {
                Swal.isVisible() && Swal.resetValidationMessage();
            }, init = params => {
                const oldContainerExisted = (() => {
                    const oldContainer = getContainer();
                    return !!oldContainer && (oldContainer.remove(), removeClass([ document.documentElement, document.body ], [ swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"] ]), 
                    !0);
                })();
                if (isNodeEnv()) return;
                const container = document.createElement("div");
                container.className = swalClasses.container, oldContainerExisted && addClass(container, swalClasses["no-transition"]), 
                setInnerHtml(container, sweetHTML);
                const targetElement = "string" == typeof (target = params.target) ? document.querySelector(target) : target;
                var target;
                targetElement.appendChild(container), (params => {
                    const popup = getPopup();
                    popup.setAttribute("role", params.toast ? "alert" : "dialog"), popup.setAttribute("aria-live", params.toast ? "polite" : "assertive"), 
                    params.toast || popup.setAttribute("aria-modal", "true");
                })(params), (targetElement => {
                    "rtl" === window.getComputedStyle(targetElement).direction && addClass(getContainer(), swalClasses.rtl);
                })(targetElement), (() => {
                    const popup = getPopup(), input = getChildByClass(popup, swalClasses.input), file = getChildByClass(popup, swalClasses.file), range = popup.querySelector(".".concat(swalClasses.range, " input")), rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output")), select = getChildByClass(popup, swalClasses.select), checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input")), textarea = getChildByClass(popup, swalClasses.textarea);
                    input.oninput = resetValidationMessage, file.onchange = resetValidationMessage, 
                    select.onchange = resetValidationMessage, checkbox.onchange = resetValidationMessage, 
                    textarea.oninput = resetValidationMessage, range.oninput = () => {
                        resetValidationMessage(), rangeOutput.value = range.value;
                    }, range.onchange = () => {
                        resetValidationMessage(), range.nextSibling.value = range.value;
                    };
                })();
            }, parseHtmlToContainer = (param, target) => {
                param instanceof HTMLElement ? target.appendChild(param) : "object" == typeof param ? handleObject(param, target) : param && setInnerHtml(target, param);
            }, handleObject = (param, target) => {
                param.jquery ? handleJqueryElem(target, param) : setInnerHtml(target, param.toString());
            }, handleJqueryElem = (target, elem) => {
                if (target.textContent = "", 0 in elem) for (let i = 0; i in elem; i++) target.appendChild(elem[i].cloneNode(!0)); else target.appendChild(elem.cloneNode(!0));
            }, animationEndEvent = (() => {
                if (isNodeEnv()) return !1;
                const testEl = document.createElement("div"), transEndEventNames = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
                for (const i in transEndEventNames) if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && void 0 !== testEl.style[i]) return transEndEventNames[i];
                return !1;
            })(), renderActions = (instance, params) => {
                const actions = getActions(), loader = getLoader(), confirmButton = getConfirmButton(), denyButton = getDenyButton(), cancelButton = getCancelButton();
                params.showConfirmButton || params.showDenyButton || params.showCancelButton || hide(actions), 
                applyCustomClass(actions, params, "actions"), renderButton(confirmButton, "confirm", params), 
                renderButton(denyButton, "deny", params), renderButton(cancelButton, "cancel", params), 
                function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
                    if (!params.buttonsStyling) return removeClass([ confirmButton, denyButton, cancelButton ], swalClasses.styled);
                    addClass([ confirmButton, denyButton, cancelButton ], swalClasses.styled), params.confirmButtonColor && (confirmButton.style.backgroundColor = params.confirmButtonColor, 
                    addClass(confirmButton, swalClasses["default-outline"])), params.denyButtonColor && (denyButton.style.backgroundColor = params.denyButtonColor, 
                    addClass(denyButton, swalClasses["default-outline"])), params.cancelButtonColor && (cancelButton.style.backgroundColor = params.cancelButtonColor, 
                    addClass(cancelButton, swalClasses["default-outline"]));
                }(confirmButton, denyButton, cancelButton, params), params.reverseButtons && (actions.insertBefore(cancelButton, loader), 
                actions.insertBefore(denyButton, loader), actions.insertBefore(confirmButton, loader)), 
                setInnerHtml(loader, params.loaderHtml), applyCustomClass(loader, params, "loader");
            };
            function renderButton(button, buttonType, params) {
                toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], "inline-block"), 
                setInnerHtml(button, params["".concat(buttonType, "ButtonText")]), button.setAttribute("aria-label", params["".concat(buttonType, "ButtonAriaLabel")]), 
                button.className = swalClasses[buttonType], applyCustomClass(button, params, "".concat(buttonType, "Button")), 
                addClass(button, params["".concat(buttonType, "ButtonClass")]);
            }
            const renderContainer = (instance, params) => {
                const container = getContainer();
                container && (function handleBackdropParam(container, backdrop) {
                    "string" == typeof backdrop ? container.style.background = backdrop : backdrop || addClass([ document.documentElement, document.body ], swalClasses["no-backdrop"]);
                }(container, params.backdrop), function handlePositionParam(container, position) {
                    addClass(container, position in swalClasses ? swalClasses[position] : swalClasses.center);
                }(container, params.position), function handleGrowParam(container, grow) {
                    if (grow && "string" == typeof grow) {
                        const growClass = "grow-".concat(grow);
                        growClass in swalClasses && addClass(container, swalClasses[growClass]);
                    }
                }(container, params.grow), applyCustomClass(container, params, "container"));
            };
            var privateProps = {
                promise: new WeakMap,
                innerParams: new WeakMap,
                domCache: new WeakMap
            };
            const inputTypes = [ "input", "file", "range", "select", "radio", "checkbox", "textarea" ], showInput = params => {
                if (!renderInputType[params.input]) return void 'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(params.input, '"');
                const inputContainer = getInputContainer(params.input), input = renderInputType[params.input](inputContainer, params);
                show(input), setTimeout(() => {
                    focusInput(input);
                });
            }, setAttributes = (inputType, inputAttributes) => {
                const input = getInput(getPopup(), inputType);
                if (input) {
                    (input => {
                        for (let i = 0; i < input.attributes.length; i++) {
                            const attrName = input.attributes[i].name;
                            [ "type", "value", "style" ].includes(attrName) || input.removeAttribute(attrName);
                        }
                    })(input);
                    for (const attr in inputAttributes) input.setAttribute(attr, inputAttributes[attr]);
                }
            }, setCustomClass = params => {
                const inputContainer = getInputContainer(params.input);
                params.customClass && addClass(inputContainer, params.customClass.input);
            }, setInputPlaceholder = (input, params) => {
                input.placeholder && !params.inputPlaceholder || (input.placeholder = params.inputPlaceholder);
            }, setInputLabel = (input, prependTo, params) => {
                if (params.inputLabel) {
                    input.id = swalClasses.input;
                    const label = document.createElement("label"), labelClass = swalClasses["input-label"];
                    label.setAttribute("for", input.id), label.className = labelClass, addClass(label, params.customClass.inputLabel), 
                    label.innerText = params.inputLabel, prependTo.insertAdjacentElement("beforebegin", label);
                }
            }, getInputContainer = inputType => {
                const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
                return getChildByClass(getPopup(), inputClass);
            }, renderInputType = {};
            renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => ("string" == typeof params.inputValue || "number" == typeof params.inputValue ? input.value = params.inputValue : isPromise(params.inputValue) || 'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof params.inputValue, '"'), 
            setInputLabel(input, input, params), setInputPlaceholder(input, params), input.type = params.input, 
            input), renderInputType.file = (input, params) => (setInputLabel(input, input, params), 
            setInputPlaceholder(input, params), input), renderInputType.range = (range, params) => {
                const rangeInput = range.querySelector("input"), rangeOutput = range.querySelector("output");
                return rangeInput.value = params.inputValue, rangeInput.type = params.input, rangeOutput.value = params.inputValue, 
                setInputLabel(rangeInput, range, params), range;
            }, renderInputType.select = (select, params) => {
                if (select.textContent = "", params.inputPlaceholder) {
                    const placeholder = document.createElement("option");
                    setInnerHtml(placeholder, params.inputPlaceholder), placeholder.value = "", placeholder.disabled = !0, 
                    placeholder.selected = !0, select.appendChild(placeholder);
                }
                return setInputLabel(select, select, params), select;
            }, renderInputType.radio = radio => (radio.textContent = "", radio), renderInputType.checkbox = (checkboxContainer, params) => {
                const checkbox = getInput(getPopup(), "checkbox");
                checkbox.value = 1, checkbox.id = swalClasses.checkbox, checkbox.checked = Boolean(params.inputValue);
                const label = checkboxContainer.querySelector("span");
                return setInnerHtml(label, params.inputPlaceholder), checkboxContainer;
            }, renderInputType.textarea = (textarea, params) => {
                if (textarea.value = params.inputValue, setInputPlaceholder(textarea, params), setInputLabel(textarea, textarea, params), 
                "MutationObserver" in window) {
                    const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
                    new MutationObserver(() => {
                        const textareaWidth = textarea.offsetWidth + (el = textarea, parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight));
                        var el;
                        getPopup().style.width = textareaWidth > initialPopupWidth ? "".concat(textareaWidth, "px") : null;
                    }).observe(textarea, {
                        attributes: !0,
                        attributeFilter: [ "style" ]
                    });
                }
                return textarea;
            };
            const renderContent = (instance, params) => {
                const htmlContainer = getHtmlContainer();
                applyCustomClass(htmlContainer, params, "htmlContainer"), params.html ? (parseHtmlToContainer(params.html, htmlContainer), 
                show(htmlContainer, "block")) : params.text ? (htmlContainer.textContent = params.text, 
                show(htmlContainer, "block")) : hide(htmlContainer), ((instance, params) => {
                    const popup = getPopup(), innerParams = privateProps.innerParams.get(instance), rerender = !innerParams || params.input !== innerParams.input;
                    inputTypes.forEach(inputType => {
                        const inputClass = swalClasses[inputType], inputContainer = getChildByClass(popup, inputClass);
                        setAttributes(inputType, params.inputAttributes), inputContainer.className = inputClass, 
                        rerender && hide(inputContainer);
                    }), params.input && (rerender && showInput(params), setCustomClass(params));
                })(instance, params);
            }, applyStyles = (icon, params) => {
                for (const iconType in iconTypes) params.icon !== iconType && removeClass(icon, iconTypes[iconType]);
                addClass(icon, iconTypes[params.icon]), setColor(icon, params), adjustSuccessIconBackgoundColor(), 
                applyCustomClass(icon, params, "icon");
            }, adjustSuccessIconBackgoundColor = () => {
                const popup = getPopup(), popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color"), successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let i = 0; i < successIconParts.length; i++) successIconParts[i].style.backgroundColor = popupBackgroundColor;
            }, setContent = (icon, params) => {
                icon.textContent = "", params.iconHtml ? setInnerHtml(icon, iconContent(params.iconHtml)) : "success" === params.icon ? setInnerHtml(icon, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === params.icon ? setInnerHtml(icon, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : setInnerHtml(icon, iconContent({
                    question: "?",
                    warning: "!",
                    info: "i"
                }[params.icon]));
            }, setColor = (icon, params) => {
                if (params.iconColor) {
                    icon.style.color = params.iconColor, icon.style.borderColor = params.iconColor;
                    for (const sel of [ ".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right" ]) setStyle(icon, sel, "backgroundColor", params.iconColor);
                    setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
                }
            }, iconContent = content => '<div class="'.concat(swalClasses["icon-content"], '">').concat(content, "</div>"), renderProgressSteps = (instance, params) => {
                const progressStepsContainer = getProgressSteps();
                if (!params.progressSteps || 0 === params.progressSteps.length) return hide(progressStepsContainer);
                show(progressStepsContainer), progressStepsContainer.textContent = "", params.currentProgressStep, 
                params.progressSteps.length, params.progressSteps.forEach((step, index) => {
                    const stepEl = (step => {
                        const stepEl = document.createElement("li");
                        return addClass(stepEl, swalClasses["progress-step"]), setInnerHtml(stepEl, step), 
                        stepEl;
                    })(step);
                    if (progressStepsContainer.appendChild(stepEl), index === params.currentProgressStep && addClass(stepEl, swalClasses["active-progress-step"]), 
                    index !== params.progressSteps.length - 1) {
                        const lineEl = (params => {
                            const lineEl = document.createElement("li");
                            return addClass(lineEl, swalClasses["progress-step-line"]), params.progressStepsDistance && (lineEl.style.width = params.progressStepsDistance), 
                            lineEl;
                        })(params);
                        progressStepsContainer.appendChild(lineEl);
                    }
                });
            }, addClasses = (popup, params) => {
                popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : ""), 
                params.toast ? (addClass([ document.documentElement, document.body ], swalClasses["toast-shown"]), 
                addClass(popup, swalClasses.toast)) : addClass(popup, swalClasses.modal), applyCustomClass(popup, params, "popup"), 
                "string" == typeof params.customClass && addClass(popup, params.customClass), params.icon && addClass(popup, swalClasses["icon-".concat(params.icon)]);
            }, render = (instance, params) => {
                ((instance, params) => {
                    const container = getContainer(), popup = getPopup();
                    params.toast ? (applyNumericalStyle(container, "width", params.width), popup.style.width = "100%", 
                    popup.insertBefore(getLoader(), getIcon())) : applyNumericalStyle(popup, "width", params.width), 
                    applyNumericalStyle(popup, "padding", params.padding), params.background && (popup.style.background = params.background), 
                    hide(getValidationMessage()), addClasses(popup, params);
                })(0, params), renderContainer(0, params), renderProgressSteps(0, params), ((instance, params) => {
                    const innerParams = privateProps.innerParams.get(instance), icon = getIcon();
                    innerParams && params.icon === innerParams.icon ? (setContent(icon, params), applyStyles(icon, params)) : params.icon || params.iconHtml ? params.icon && -1 === Object.keys(iconTypes).indexOf(params.icon) ? ('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(params.icon, '"'), 
                    hide(icon)) : (show(icon), setContent(icon, params), applyStyles(icon, params), 
                    addClass(icon, params.showClass.icon)) : hide(icon);
                })(instance, params), ((instance, params) => {
                    const image = getImage();
                    if (!params.imageUrl) return hide(image);
                    show(image, ""), image.setAttribute("src", params.imageUrl), image.setAttribute("alt", params.imageAlt), 
                    applyNumericalStyle(image, "width", params.imageWidth), applyNumericalStyle(image, "height", params.imageHeight), 
                    image.className = swalClasses.image, applyCustomClass(image, params, "image");
                })(0, params), ((instance, params) => {
                    const title = getTitle();
                    toggle(title, params.title || params.titleText, "block"), params.title && parseHtmlToContainer(params.title, title), 
                    params.titleText && (title.innerText = params.titleText), applyCustomClass(title, params, "title");
                })(0, params), ((instance, params) => {
                    const closeButton = getCloseButton();
                    setInnerHtml(closeButton, params.closeButtonHtml), applyCustomClass(closeButton, params, "closeButton"), 
                    toggle(closeButton, params.showCloseButton), closeButton.setAttribute("aria-label", params.closeButtonAriaLabel);
                })(0, params), renderContent(instance, params), renderActions(0, params), ((instance, params) => {
                    const footer = getFooter();
                    toggle(footer, params.footer), params.footer && parseHtmlToContainer(params.footer, footer), 
                    applyCustomClass(footer, params, "footer");
                })(0, params), "function" == typeof params.didRender && params.didRender(getPopup());
            }, clickConfirm = () => getConfirmButton() && getConfirmButton().click(), showLoading = buttonToReplace => {
                let popup = getPopup();
                popup || Swal.fire(), popup = getPopup();
                const loader = getLoader();
                isToast() ? hide(getIcon()) : replaceButton(popup, buttonToReplace), show(loader), 
                popup.setAttribute("data-loading", !0), popup.setAttribute("aria-busy", !0), popup.focus();
            }, replaceButton = (popup, buttonToReplace) => {
                const actions = getActions(), loader = getLoader();
                !buttonToReplace && isVisible(getConfirmButton()) && (buttonToReplace = getConfirmButton()), 
                show(actions), buttonToReplace && (hide(buttonToReplace), loader.setAttribute("data-button-to-replace", buttonToReplace.className)), 
                loader.parentNode.insertBefore(loader, buttonToReplace), addClass([ popup, actions ], swalClasses.loading);
            }, globalState = {}, restoreActiveElement = returnFocus => new Promise(resolve => {
                if (!returnFocus) return resolve();
                const x = window.scrollX, y = window.scrollY;
                globalState.restoreFocusTimeout = setTimeout(() => {
                    globalState.previousActiveElement && globalState.previousActiveElement.focus ? (globalState.previousActiveElement.focus(), 
                    globalState.previousActiveElement = null) : document.body && document.body.focus(), 
                    resolve();
                }, 100), window.scrollTo(x, y);
            }), stopTimer = () => {
                if (globalState.timeout) return (() => {
                    const timerProgressBar = getTimerProgressBar(), timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
                    timerProgressBar.style.removeProperty("transition"), timerProgressBar.style.width = "100%";
                    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width), timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
                    timerProgressBar.style.removeProperty("transition"), timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
                })(), globalState.timeout.stop();
            }, resumeTimer = () => {
                if (globalState.timeout) {
                    const remaining = globalState.timeout.start();
                    return animateTimerProgressBar(remaining), remaining;
                }
            };
            let bodyClickListenerAdded = !1;
            const clickHandlers = {}, bodyClickListener = event => {
                for (let el = event.target; el && el !== document; el = el.parentNode) for (const attr in clickHandlers) {
                    const template = el.getAttribute(attr);
                    if (template) return void clickHandlers[attr].fire({
                        template: template
                    });
                }
            }, defaultParams = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: void 0,
                iconColor: void 0,
                iconHtml: void 0,
                template: void 0,
                toast: !1,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: {},
                target: "body",
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showDenyButton: !1,
                showCancelButton: !1,
                preConfirm: void 0,
                preDeny: void 0,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: void 0,
                denyButtonText: "No",
                denyButtonAriaLabel: "",
                denyButtonColor: void 0,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: void 0,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusDeny: !1,
                focusCancel: !1,
                returnFocus: !0,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                loaderHtml: "",
                showLoaderOnConfirm: !1,
                showLoaderOnDeny: !1,
                imageUrl: void 0,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAlt: "",
                timer: void 0,
                timerProgressBar: !1,
                width: void 0,
                padding: void 0,
                background: void 0,
                input: void 0,
                inputPlaceholder: "",
                inputLabel: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: void 0,
                returnInputValueOnDeny: !1,
                validationMessage: void 0,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: void 0,
                progressStepsDistance: void 0,
                willOpen: void 0,
                didOpen: void 0,
                didRender: void 0,
                willClose: void 0,
                didClose: void 0,
                didDestroy: void 0,
                scrollbarPadding: !0
            }, updatableParams = [ "allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose" ], deprecatedParams = {}, toastIncompatibleParams = [ "allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture" ], isValidParameter = paramName => Object.prototype.hasOwnProperty.call(defaultParams, paramName), isDeprecatedParameter = paramName => deprecatedParams[paramName], checkIfParamIsValid = param => {
                isValidParameter(param) || 'Unknown parameter "'.concat(param, '"');
            }, checkIfToastParamIsValid = param => {
                toastIncompatibleParams.includes(param) && 'The parameter "'.concat(param, '" is incompatible with toasts');
            }, checkIfParamIsDeprecated = param => {
                isDeprecatedParameter(param) && warnAboutDeprecation(param, isDeprecatedParameter(param));
            };
            var staticMethods = Object.freeze({
                isValidParameter: isValidParameter,
                isUpdatableParameter: paramName => -1 !== updatableParams.indexOf(paramName),
                isDeprecatedParameter: isDeprecatedParameter,
                argsToParams: args => {
                    const params = {};
                    return "object" != typeof args[0] || isElement(args[0]) ? [ "title", "html", "icon" ].forEach((name, index) => {
                        const arg = args[index];
                        "string" == typeof arg || isElement(arg) ? params[name] = arg : void 0 !== arg && "Unexpected type of ".concat(name, '! Expected "string" or "Element", got ').concat(typeof arg);
                    }) : Object.assign(params, args[0]), params;
                },
                isVisible: () => isVisible(getPopup()),
                clickConfirm: clickConfirm,
                clickDeny: () => getDenyButton() && getDenyButton().click(),
                clickCancel: () => getCancelButton() && getCancelButton().click(),
                getContainer: getContainer,
                getPopup: getPopup,
                getTitle: getTitle,
                getHtmlContainer: getHtmlContainer,
                getImage: getImage,
                getIcon: getIcon,
                getInputLabel: () => elementByClass(swalClasses["input-label"]),
                getCloseButton: getCloseButton,
                getActions: getActions,
                getConfirmButton: getConfirmButton,
                getDenyButton: getDenyButton,
                getCancelButton: getCancelButton,
                getLoader: getLoader,
                getFooter: getFooter,
                getTimerProgressBar: getTimerProgressBar,
                getFocusableElements: getFocusableElements,
                getValidationMessage: getValidationMessage,
                isLoading: () => getPopup().hasAttribute("data-loading"),
                fire: function fire(...args) {
                    return new this(...args);
                },
                mixin: function mixin(mixinParams) {
                    return class MixinSwal extends(this){
                        _main(params, priorityMixinParams) {
                            return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
                        }
                    };
                },
                showLoading: showLoading,
                enableLoading: showLoading,
                getTimerLeft: () => globalState.timeout && globalState.timeout.getTimerLeft(),
                stopTimer: stopTimer,
                resumeTimer: resumeTimer,
                toggleTimer: () => {
                    const timer = globalState.timeout;
                    return timer && (timer.running ? stopTimer() : resumeTimer());
                },
                increaseTimer: n => {
                    if (globalState.timeout) {
                        const remaining = globalState.timeout.increase(n);
                        return animateTimerProgressBar(remaining, !0), remaining;
                    }
                },
                isTimerRunning: () => globalState.timeout && globalState.timeout.isRunning(),
                bindClickHandler: function bindClickHandler(attr = "data-swal-template") {
                    clickHandlers[attr] = this, bodyClickListenerAdded || (document.body.addEventListener("click", bodyClickListener), 
                    bodyClickListenerAdded = !0);
                }
            });
            function hideLoading() {
                const innerParams = privateProps.innerParams.get(this);
                if (!innerParams) return;
                const domCache = privateProps.domCache.get(this);
                hide(domCache.loader), isToast() ? innerParams.icon && show(getIcon()) : showRelatedButton(domCache), 
                removeClass([ domCache.popup, domCache.actions ], swalClasses.loading), domCache.popup.removeAttribute("aria-busy"), 
                domCache.popup.removeAttribute("data-loading"), domCache.confirmButton.disabled = !1, 
                domCache.denyButton.disabled = !1, domCache.cancelButton.disabled = !1;
            }
            const showRelatedButton = domCache => {
                const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
                buttonToReplace.length ? show(buttonToReplace[0], "inline-block") : isVisible(getConfirmButton()) || isVisible(getDenyButton()) || isVisible(getCancelButton()) || hide(domCache.actions);
            }, fixScrollbar = () => {
                null === states.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), 
                document.body.style.paddingRight = "".concat(states.previousBodyPadding + (() => {
                    const scrollDiv = document.createElement("div");
                    scrollDiv.className = swalClasses["scrollbar-measure"], document.body.appendChild(scrollDiv);
                    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                    return document.body.removeChild(scrollDiv), scrollbarWidth;
                })(), "px"));
            }, addBottomPaddingForTallPopups = () => {
                if (!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)) {
                    const bottomPanelHeight = 44;
                    getPopup().scrollHeight > window.innerHeight - bottomPanelHeight && (getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px"));
                }
            }, lockBodyScroll = () => {
                const container = getContainer();
                let preventTouchMove;
                container.ontouchstart = e => {
                    preventTouchMove = shouldPreventTouchMove(e);
                }, container.ontouchmove = e => {
                    preventTouchMove && (e.preventDefault(), e.stopPropagation());
                };
            }, shouldPreventTouchMove = event => {
                const target = event.target, container = getContainer();
                return !(isStylys(event) || isZoom(event) || target !== container && (isScrollable(container) || "INPUT" === target.tagName || "TEXTAREA" === target.tagName || isScrollable(getHtmlContainer()) && getHtmlContainer().contains(target)));
            }, isStylys = event => event.touches && event.touches.length && "stylus" === event.touches[0].touchType, isZoom = event => event.touches && event.touches.length > 1;
            var privateMethods = {
                swalPromiseResolve: new WeakMap
            };
            function removePopupAndResetState(instance, container, returnFocus, didClose) {
                isToast() ? triggerDidCloseAndDispose(instance, didClose) : (restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose)), 
                globalState.keydownTarget.removeEventListener("keydown", globalState.keydownHandler, {
                    capture: globalState.keydownListenerCapture
                }), globalState.keydownHandlerAdded = !1), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (container.setAttribute("style", "display:none !important"), 
                container.removeAttribute("class"), container.innerHTML = "") : container.remove(), 
                isModal() && (null !== states.previousBodyPadding && (document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px"), 
                states.previousBodyPadding = null), (() => {
                    if (hasClass(document.body, swalClasses.iosfix)) {
                        const offset = parseInt(document.body.style.top, 10);
                        removeClass(document.body, swalClasses.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * offset;
                    }
                })(), toArray(document.body.children).forEach(el => {
                    el.hasAttribute("data-previous-aria-hidden") ? (el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden")), 
                    el.removeAttribute("data-previous-aria-hidden")) : el.removeAttribute("aria-hidden");
                })), function removeBodyClasses() {
                    removeClass([ document.documentElement, document.body ], [ swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"] ]);
                }();
            }
            function close(resolveValue) {
                const popup = getPopup();
                if (!popup) return;
                resolveValue = prepareResolveValue(resolveValue);
                const innerParams = privateProps.innerParams.get(this);
                if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) return;
                const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
                removeClass(popup, innerParams.showClass.popup), addClass(popup, innerParams.hideClass.popup);
                const backdrop = getContainer();
                removeClass(backdrop, innerParams.showClass.backdrop), addClass(backdrop, innerParams.hideClass.backdrop), 
                handlePopupAnimation(this, popup, innerParams), swalPromiseResolve(resolveValue);
            }
            const prepareResolveValue = resolveValue => void 0 === resolveValue ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, resolveValue), handlePopupAnimation = (instance, popup, innerParams) => {
                const container = getContainer(), animationIsSupported = animationEndEvent && hasCssAnimation(popup);
                "function" == typeof innerParams.willClose && innerParams.willClose(popup), animationIsSupported ? animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose) : removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
            }, animatePopup = (instance, popup, container, returnFocus, didClose) => {
                globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose), 
                popup.addEventListener(animationEndEvent, (function(e) {
                    e.target === popup && (globalState.swalCloseEventFinishedCallback(), delete globalState.swalCloseEventFinishedCallback);
                }));
            }, triggerDidCloseAndDispose = (instance, didClose) => {
                setTimeout(() => {
                    "function" == typeof didClose && didClose.bind(instance.params)(), instance._destroy();
                });
            };
            function setButtonsDisabled(instance, buttons, disabled) {
                const domCache = privateProps.domCache.get(instance);
                buttons.forEach(button => {
                    domCache[button].disabled = disabled;
                });
            }
            function setInputDisabled(input, disabled) {
                if (!input) return !1;
                if ("radio" === input.type) {
                    const radios = input.parentNode.parentNode.querySelectorAll("input");
                    for (let i = 0; i < radios.length; i++) radios[i].disabled = disabled;
                } else input.disabled = disabled;
            }
            class Timer {
                constructor(callback, delay) {
                    this.callback = callback, this.remaining = delay, this.running = !1, this.start();
                }
                start() {
                    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), 
                    this.remaining;
                }
                stop() {
                    return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), 
                    this.remaining;
                }
                increase(n) {
                    const running = this.running;
                    return running && this.stop(), this.remaining += n, running && this.start(), this.remaining;
                }
                getTimerLeft() {
                    return this.running && (this.stop(), this.start()), this.remaining;
                }
                isRunning() {
                    return this.running;
                }
            }
            var defaultInputValidators = {
                email: (string, validationMessage) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address"),
                url: (string, validationMessage) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL")
            };
            function setParameters(params) {
                !function setDefaultInputValidators(params) {
                    params.inputValidator || Object.keys(defaultInputValidators).forEach(key => {
                        params.input === key && (params.inputValidator = defaultInputValidators[key]);
                    });
                }(params), params.showLoaderOnConfirm && params.preConfirm, function validateCustomTargetElement(params) {
                    (!params.target || "string" == typeof params.target && !document.querySelector(params.target) || "string" != typeof params.target && !params.target.appendChild) && (params.target = "body");
                }(params), "string" == typeof params.title && (params.title = params.title.split("\n").join("<br />")), 
                init(params);
            }
            const swalStringParams = [ "swal-title", "swal-html", "swal-footer" ], getSwalParams = templateContent => {
                const result = {};
                return toArray(templateContent.querySelectorAll("swal-param")).forEach(param => {
                    showWarningsForAttributes(param, [ "name", "value" ]);
                    const paramName = param.getAttribute("name");
                    let value = param.getAttribute("value");
                    "boolean" == typeof defaultParams[paramName] && "false" === value && (value = !1), 
                    "object" == typeof defaultParams[paramName] && (value = JSON.parse(value)), result[paramName] = value;
                }), result;
            }, getSwalButtons = templateContent => {
                const result = {};
                return toArray(templateContent.querySelectorAll("swal-button")).forEach(button => {
                    showWarningsForAttributes(button, [ "type", "color", "aria-label" ]);
                    const type = button.getAttribute("type");
                    result["".concat(type, "ButtonText")] = button.innerHTML, result["show".concat(capitalizeFirstLetter(type), "Button")] = !0, 
                    button.hasAttribute("color") && (result["".concat(type, "ButtonColor")] = button.getAttribute("color")), 
                    button.hasAttribute("aria-label") && (result["".concat(type, "ButtonAriaLabel")] = button.getAttribute("aria-label"));
                }), result;
            }, getSwalImage = templateContent => {
                const result = {}, image = templateContent.querySelector("swal-image");
                return image && (showWarningsForAttributes(image, [ "src", "width", "height", "alt" ]), 
                image.hasAttribute("src") && (result.imageUrl = image.getAttribute("src")), image.hasAttribute("width") && (result.imageWidth = image.getAttribute("width")), 
                image.hasAttribute("height") && (result.imageHeight = image.getAttribute("height")), 
                image.hasAttribute("alt") && (result.imageAlt = image.getAttribute("alt"))), result;
            }, getSwalIcon = templateContent => {
                const result = {}, icon = templateContent.querySelector("swal-icon");
                return icon && (showWarningsForAttributes(icon, [ "type", "color" ]), icon.hasAttribute("type") && (result.icon = icon.getAttribute("type")), 
                icon.hasAttribute("color") && (result.iconColor = icon.getAttribute("color")), result.iconHtml = icon.innerHTML), 
                result;
            }, getSwalInput = templateContent => {
                const result = {}, input = templateContent.querySelector("swal-input");
                input && (showWarningsForAttributes(input, [ "type", "label", "placeholder", "value" ]), 
                result.input = input.getAttribute("type") || "text", input.hasAttribute("label") && (result.inputLabel = input.getAttribute("label")), 
                input.hasAttribute("placeholder") && (result.inputPlaceholder = input.getAttribute("placeholder")), 
                input.hasAttribute("value") && (result.inputValue = input.getAttribute("value")));
                const inputOptions = templateContent.querySelectorAll("swal-input-option");
                return inputOptions.length && (result.inputOptions = {}, toArray(inputOptions).forEach(option => {
                    showWarningsForAttributes(option, [ "value" ]);
                    const optionValue = option.getAttribute("value"), optionName = option.innerHTML;
                    result.inputOptions[optionValue] = optionName;
                })), result;
            }, getSwalStringParams = (templateContent, paramNames) => {
                const result = {};
                for (const i in paramNames) {
                    const paramName = paramNames[i], tag = templateContent.querySelector(paramName);
                    tag && (showWarningsForAttributes(tag, []), result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim());
                }
                return result;
            }, showWarningsForElements = template => {
                const allowedElements = swalStringParams.concat([ "swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option" ]);
                toArray(template.children).forEach(el => {
                    const tagName = el.tagName.toLowerCase();
                    -1 === allowedElements.indexOf(tagName) && "Unrecognized element <".concat(tagName, ">");
                });
            }, showWarningsForAttributes = (el, allowedAttributes) => {
                toArray(el.attributes).forEach(attribute => {
                    -1 === allowedAttributes.indexOf(attribute.name) && ('Unrecognized attribute "'.concat(attribute.name, '" on <').concat(el.tagName.toLowerCase(), ">."), 
                    "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(", ")) : "To set the value, use HTML within the element."));
                });
            }, openPopup = params => {
                const container = getContainer(), popup = getPopup();
                "function" == typeof params.willOpen && params.willOpen(popup);
                const initialBodyOverflow = window.getComputedStyle(document.body).overflowY;
                addClasses$1(container, popup, params), setTimeout(() => {
                    setScrollingVisibility(container, popup);
                }, 10), isModal() && (fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow), 
                toArray(document.body.children).forEach(el => {
                    el === getContainer() || el.contains(getContainer()) || (el.hasAttribute("aria-hidden") && el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden")), 
                    el.setAttribute("aria-hidden", "true"));
                })), isToast() || globalState.previousActiveElement || (globalState.previousActiveElement = document.activeElement), 
                "function" == typeof params.didOpen && setTimeout(() => params.didOpen(popup)), 
                removeClass(container, swalClasses["no-transition"]);
            }, swalOpenAnimationFinished = event => {
                const popup = getPopup();
                if (event.target !== popup) return;
                const container = getContainer();
                popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished), container.style.overflowY = "auto";
            }, setScrollingVisibility = (container, popup) => {
                animationEndEvent && hasCssAnimation(popup) ? (container.style.overflowY = "hidden", 
                popup.addEventListener(animationEndEvent, swalOpenAnimationFinished)) : container.style.overflowY = "auto";
            }, fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
                (() => {
                    if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !hasClass(document.body, swalClasses.iosfix)) {
                        const offset = document.body.scrollTop;
                        document.body.style.top = "".concat(-1 * offset, "px"), addClass(document.body, swalClasses.iosfix), 
                        lockBodyScroll(), addBottomPaddingForTallPopups();
                    }
                })(), scrollbarPadding && "hidden" !== initialBodyOverflow && fixScrollbar(), setTimeout(() => {
                    container.scrollTop = 0;
                });
            }, addClasses$1 = (container, popup, params) => {
                addClass(container, params.showClass.backdrop), popup.style.setProperty("opacity", "0", "important"), 
                show(popup, "grid"), setTimeout(() => {
                    addClass(popup, params.showClass.popup), popup.style.removeProperty("opacity");
                }, 10), addClass([ document.documentElement, document.body ], swalClasses.shown), 
                params.heightAuto && params.backdrop && !params.toast && addClass([ document.documentElement, document.body ], swalClasses["height-auto"]);
            }, getCheckboxValue = input => input.checked ? 1 : 0, getRadioValue = input => input.checked ? input.value : null, getFileValue = input => input.files.length ? null !== input.getAttribute("multiple") ? input.files : input.files[0] : null, handleInputOptions = (instance, params) => {
                const popup = getPopup(), processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
                hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions) ? (showLoading(getConfirmButton()), 
                asPromise(params.inputOptions).then(inputOptions => {
                    instance.hideLoading(), processInputOptions(inputOptions);
                })) : "object" == typeof params.inputOptions ? processInputOptions(params.inputOptions) : "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions);
            }, handleInputValue = (instance, params) => {
                const input = instance.getInput();
                hide(input), asPromise(params.inputValue).then(inputValue => {
                    input.value = "number" === params.input ? parseFloat(inputValue) || 0 : "".concat(inputValue), 
                    show(input), input.focus(), instance.hideLoading();
                }).catch(err => {
                    "Error in inputValue promise: ".concat(err), input.value = "", show(input), input.focus(), 
                    instance.hideLoading();
                });
            }, populateInputOptions = {
                select: (popup, inputOptions, params) => {
                    const select = getChildByClass(popup, swalClasses.select), renderOption = (parent, optionLabel, optionValue) => {
                        const option = document.createElement("option");
                        option.value = optionValue, setInnerHtml(option, optionLabel), option.selected = isSelected(optionValue, params.inputValue), 
                        parent.appendChild(option);
                    };
                    inputOptions.forEach(inputOption => {
                        const optionValue = inputOption[0], optionLabel = inputOption[1];
                        if (Array.isArray(optionLabel)) {
                            const optgroup = document.createElement("optgroup");
                            optgroup.label = optionValue, optgroup.disabled = !1, select.appendChild(optgroup), 
                            optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
                        } else renderOption(select, optionLabel, optionValue);
                    }), select.focus();
                },
                radio: (popup, inputOptions, params) => {
                    const radio = getChildByClass(popup, swalClasses.radio);
                    inputOptions.forEach(inputOption => {
                        const radioValue = inputOption[0], radioLabel = inputOption[1], radioInput = document.createElement("input"), radioLabelElement = document.createElement("label");
                        radioInput.type = "radio", radioInput.name = swalClasses.radio, radioInput.value = radioValue, 
                        isSelected(radioValue, params.inputValue) && (radioInput.checked = !0);
                        const label = document.createElement("span");
                        setInnerHtml(label, radioLabel), label.className = swalClasses.label, radioLabelElement.appendChild(radioInput), 
                        radioLabelElement.appendChild(label), radio.appendChild(radioLabelElement);
                    });
                    const radios = radio.querySelectorAll("input");
                    radios.length && radios[0].focus();
                }
            }, formatInputOptions = inputOptions => {
                const result = [];
                return "undefined" != typeof Map && inputOptions instanceof Map ? inputOptions.forEach((value, key) => {
                    let valueFormatted = value;
                    "object" == typeof valueFormatted && (valueFormatted = formatInputOptions(valueFormatted)), 
                    result.push([ key, valueFormatted ]);
                }) : Object.keys(inputOptions).forEach(key => {
                    let valueFormatted = inputOptions[key];
                    "object" == typeof valueFormatted && (valueFormatted = formatInputOptions(valueFormatted)), 
                    result.push([ key, valueFormatted ]);
                }), result;
            }, isSelected = (optionValue, inputValue) => inputValue && inputValue.toString() === optionValue.toString(), handleConfirmOrDenyWithInput = (instance, innerParams, type) => {
                const inputValue = ((instance, innerParams) => {
                    const input = instance.getInput();
                    if (!input) return null;
                    switch (innerParams.input) {
                      case "checkbox":
                        return getCheckboxValue(input);

                      case "radio":
                        return getRadioValue(input);

                      case "file":
                        return getFileValue(input);

                      default:
                        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
                    }
                })(instance, innerParams);
                innerParams.inputValidator ? handleInputValidator(instance, innerParams, inputValue, type) : instance.getInput().checkValidity() ? "deny" === type ? deny(instance, innerParams, inputValue) : confirm(instance, innerParams, inputValue) : (instance.enableButtons(), 
                instance.showValidationMessage(innerParams.validationMessage));
            }, handleInputValidator = (instance, innerParams, inputValue, type) => {
                instance.disableInput(), Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage))).then(validationMessage => {
                    instance.enableButtons(), instance.enableInput(), validationMessage ? instance.showValidationMessage(validationMessage) : "deny" === type ? deny(instance, innerParams, inputValue) : confirm(instance, innerParams, inputValue);
                });
            }, deny = (instance, innerParams, value) => {
                innerParams.showLoaderOnDeny && showLoading(getDenyButton()), innerParams.preDeny ? Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage))).then(preDenyValue => {
                    !1 === preDenyValue ? instance.hideLoading() : instance.closePopup({
                        isDenied: !0,
                        value: void 0 === preDenyValue ? value : preDenyValue
                    });
                }) : instance.closePopup({
                    isDenied: !0,
                    value: value
                });
            }, succeedWith = (instance, value) => {
                instance.closePopup({
                    isConfirmed: !0,
                    value: value
                });
            }, confirm = (instance, innerParams, value) => {
                innerParams.showLoaderOnConfirm && showLoading(), innerParams.preConfirm ? (instance.resetValidationMessage(), 
                Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage))).then(preConfirmValue => {
                    isVisible(getValidationMessage()) || !1 === preConfirmValue ? instance.hideLoading() : succeedWith(instance, void 0 === preConfirmValue ? value : preConfirmValue);
                })) : succeedWith(instance, value);
            }, setFocus = (innerParams, index, increment) => {
                const focusableElements = getFocusableElements();
                if (focusableElements.length) return (index += increment) === focusableElements.length ? index = 0 : -1 === index && (index = focusableElements.length - 1), 
                focusableElements[index].focus();
                getPopup().focus();
            }, arrowKeysNextButton = [ "ArrowRight", "ArrowDown" ], arrowKeysPreviousButton = [ "ArrowLeft", "ArrowUp" ], keydownHandler = (instance, e, dismissWith) => {
                const innerParams = privateProps.innerParams.get(instance);
                innerParams && (innerParams.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? handleEnter(instance, e, innerParams) : "Tab" === e.key ? handleTab(e, innerParams) : [ ...arrowKeysNextButton, ...arrowKeysPreviousButton ].includes(e.key) ? handleArrows(e.key) : "Escape" === e.key && handleEsc(e, innerParams, dismissWith));
            }, handleEnter = (instance, e, innerParams) => {
                if (!e.isComposing && e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
                    if ([ "textarea", "file" ].includes(innerParams.input)) return;
                    clickConfirm(), e.preventDefault();
                }
            }, handleTab = (e, innerParams) => {
                const targetElement = e.target, focusableElements = getFocusableElements();
                let btnIndex = -1;
                for (let i = 0; i < focusableElements.length; i++) if (targetElement === focusableElements[i]) {
                    btnIndex = i;
                    break;
                }
                e.shiftKey ? setFocus(0, btnIndex, -1) : setFocus(0, btnIndex, 1), e.stopPropagation(), 
                e.preventDefault();
            }, handleArrows = key => {
                if (![ getConfirmButton(), getDenyButton(), getCancelButton() ].includes(document.activeElement)) return;
                const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling", buttonToFocus = document.activeElement[sibling];
                buttonToFocus && buttonToFocus.focus();
            }, handleEsc = (e, innerParams, dismissWith) => {
                callIfFunction(innerParams.allowEscapeKey) && (e.preventDefault(), dismissWith(DismissReason.esc));
            }, handleToastClick = (instance, domCache, dismissWith) => {
                domCache.popup.onclick = () => {
                    const innerParams = privateProps.innerParams.get(instance);
                    innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input || dismissWith(DismissReason.close);
                };
            };
            let ignoreOutsideClick = !1;
            const handleModalMousedown = domCache => {
                domCache.popup.onmousedown = () => {
                    domCache.container.onmouseup = function(e) {
                        domCache.container.onmouseup = void 0, e.target === domCache.container && (ignoreOutsideClick = !0);
                    };
                };
            }, handleContainerMousedown = domCache => {
                domCache.container.onmousedown = () => {
                    domCache.popup.onmouseup = function(e) {
                        domCache.popup.onmouseup = void 0, (e.target === domCache.popup || domCache.popup.contains(e.target)) && (ignoreOutsideClick = !0);
                    };
                };
            }, handleModalClick = (instance, domCache, dismissWith) => {
                domCache.container.onclick = e => {
                    const innerParams = privateProps.innerParams.get(instance);
                    ignoreOutsideClick ? ignoreOutsideClick = !1 : e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick) && dismissWith(DismissReason.backdrop);
                };
            }, prepareParams = (userParams, mixinParams) => {
                const templateParams = (params => {
                    const template = "string" == typeof params.template ? document.querySelector(params.template) : params.template;
                    if (!template) return {};
                    const templateContent = template.content;
                    return showWarningsForElements(templateContent), Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
                })(userParams), params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
                return params.showClass = Object.assign({}, defaultParams.showClass, params.showClass), 
                params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass), 
                params;
            }, swalPromise = (instance, domCache, innerParams) => new Promise(resolve => {
                const dismissWith = dismiss => {
                    instance.closePopup({
                        isDismissed: !0,
                        dismiss: dismiss
                    });
                };
                privateMethods.swalPromiseResolve.set(instance, resolve), domCache.confirmButton.onclick = () => ((instance, innerParams) => {
                    instance.disableButtons(), innerParams.input ? handleConfirmOrDenyWithInput(instance, innerParams, "confirm") : confirm(instance, innerParams, !0);
                })(instance, innerParams), domCache.denyButton.onclick = () => ((instance, innerParams) => {
                    instance.disableButtons(), innerParams.returnInputValueOnDeny ? handleConfirmOrDenyWithInput(instance, innerParams, "deny") : deny(instance, innerParams, !1);
                })(instance, innerParams), domCache.cancelButton.onclick = () => ((instance, dismissWith) => {
                    instance.disableButtons(), dismissWith(DismissReason.cancel);
                })(instance, dismissWith), domCache.closeButton.onclick = () => dismissWith(DismissReason.close), 
                ((instance, domCache, dismissWith) => {
                    privateProps.innerParams.get(instance).toast ? handleToastClick(instance, domCache, dismissWith) : (handleModalMousedown(domCache), 
                    handleContainerMousedown(domCache), handleModalClick(instance, domCache, dismissWith));
                })(instance, domCache, dismissWith), ((instance, globalState, innerParams, dismissWith) => {
                    globalState.keydownTarget && globalState.keydownHandlerAdded && (globalState.keydownTarget.removeEventListener("keydown", globalState.keydownHandler, {
                        capture: globalState.keydownListenerCapture
                    }), globalState.keydownHandlerAdded = !1), innerParams.toast || (globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith), 
                    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup(), 
                    globalState.keydownListenerCapture = innerParams.keydownListenerCapture, globalState.keydownTarget.addEventListener("keydown", globalState.keydownHandler, {
                        capture: globalState.keydownListenerCapture
                    }), globalState.keydownHandlerAdded = !0);
                })(instance, globalState, innerParams, dismissWith), ((instance, params) => {
                    "select" === params.input || "radio" === params.input ? handleInputOptions(instance, params) : [ "text", "email", "number", "tel", "textarea" ].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue)) && (showLoading(getConfirmButton()), 
                    handleInputValue(instance, params));
                })(instance, innerParams), openPopup(innerParams), setupTimer(globalState, innerParams, dismissWith), 
                initFocus(domCache, innerParams), setTimeout(() => {
                    domCache.container.scrollTop = 0;
                });
            }), populateDomCache = instance => {
                const domCache = {
                    popup: getPopup(),
                    container: getContainer(),
                    actions: getActions(),
                    confirmButton: getConfirmButton(),
                    denyButton: getDenyButton(),
                    cancelButton: getCancelButton(),
                    loader: getLoader(),
                    closeButton: getCloseButton(),
                    validationMessage: getValidationMessage(),
                    progressSteps: getProgressSteps()
                };
                return privateProps.domCache.set(instance, domCache), domCache;
            }, setupTimer = (globalState$$1, innerParams, dismissWith) => {
                const timerProgressBar = getTimerProgressBar();
                hide(timerProgressBar), innerParams.timer && (globalState$$1.timeout = new Timer(() => {
                    dismissWith("timer"), delete globalState$$1.timeout;
                }, innerParams.timer), innerParams.timerProgressBar && (show(timerProgressBar), 
                setTimeout(() => {
                    globalState$$1.timeout && globalState$$1.timeout.running && animateTimerProgressBar(innerParams.timer);
                })));
            }, initFocus = (domCache, innerParams) => {
                if (!innerParams.toast) return callIfFunction(innerParams.allowEnterKey) ? void (focusButton(domCache, innerParams) || setFocus(0, -1, 1)) : blurActiveElement();
            }, focusButton = (domCache, innerParams) => innerParams.focusDeny && isVisible(domCache.denyButton) ? (domCache.denyButton.focus(), 
            !0) : innerParams.focusCancel && isVisible(domCache.cancelButton) ? (domCache.cancelButton.focus(), 
            !0) : !(!innerParams.focusConfirm || !isVisible(domCache.confirmButton) || (domCache.confirmButton.focus(), 
            0)), blurActiveElement = () => {
                document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
            }, disposeSwal = instance => {
                delete instance.params, delete globalState.keydownHandler, delete globalState.keydownTarget, 
                unsetWeakMaps(privateProps), unsetWeakMaps(privateMethods);
            }, unsetWeakMaps = obj => {
                for (const i in obj) obj[i] = new WeakMap;
            };
            var instanceMethods = Object.freeze({
                hideLoading: hideLoading,
                disableLoading: hideLoading,
                getInput: function getInput$1(instance) {
                    const innerParams = privateProps.innerParams.get(instance || this), domCache = privateProps.domCache.get(instance || this);
                    return domCache ? getInput(domCache.popup, innerParams.input) : null;
                },
                close: close,
                closePopup: close,
                closeModal: close,
                closeToast: close,
                enableButtons: function enableButtons() {
                    setButtonsDisabled(this, [ "confirmButton", "denyButton", "cancelButton" ], !1);
                },
                disableButtons: function disableButtons() {
                    setButtonsDisabled(this, [ "confirmButton", "denyButton", "cancelButton" ], !0);
                },
                enableInput: function enableInput() {
                    return setInputDisabled(this.getInput(), !1);
                },
                disableInput: function disableInput() {
                    return setInputDisabled(this.getInput(), !0);
                },
                showValidationMessage: function showValidationMessage(error) {
                    const domCache = privateProps.domCache.get(this), params = privateProps.innerParams.get(this);
                    setInnerHtml(domCache.validationMessage, error), domCache.validationMessage.className = swalClasses["validation-message"], 
                    params.customClass && params.customClass.validationMessage && addClass(domCache.validationMessage, params.customClass.validationMessage), 
                    show(domCache.validationMessage);
                    const input = this.getInput();
                    input && (input.setAttribute("aria-invalid", !0), input.setAttribute("aria-describedby", swalClasses["validation-message"]), 
                    focusInput(input), addClass(input, swalClasses.inputerror));
                },
                resetValidationMessage: function resetValidationMessage$1() {
                    const domCache = privateProps.domCache.get(this);
                    domCache.validationMessage && hide(domCache.validationMessage);
                    const input = this.getInput();
                    input && (input.removeAttribute("aria-invalid"), input.removeAttribute("aria-describedby"), 
                    removeClass(input, swalClasses.inputerror));
                },
                getProgressSteps: function getProgressSteps$1() {
                    return privateProps.domCache.get(this).progressSteps;
                },
                _main: function _main(userParams, mixinParams = {}) {
                    (params => {
                        !params.backdrop && params.allowOutsideClick;
                        for (const param in params) checkIfParamIsValid(param), params.toast && checkIfToastParamIsValid(param), 
                        checkIfParamIsDeprecated(param);
                    })(Object.assign({}, mixinParams, userParams)), globalState.currentInstance && globalState.currentInstance._destroy(), 
                    globalState.currentInstance = this;
                    const innerParams = prepareParams(userParams, mixinParams);
                    setParameters(innerParams), Object.freeze(innerParams), globalState.timeout && (globalState.timeout.stop(), 
                    delete globalState.timeout), clearTimeout(globalState.restoreFocusTimeout);
                    const domCache = populateDomCache(this);
                    return render(this, innerParams), privateProps.innerParams.set(this, innerParams), 
                    swalPromise(this, domCache, innerParams);
                },
                update: function update(params) {
                    const popup = getPopup(), innerParams = privateProps.innerParams.get(this);
                    if (!popup || hasClass(popup, innerParams.hideClass.popup)) return;
                    const validUpdatableParams = {};
                    Object.keys(params).forEach(param => {
                        Swal.isUpdatableParameter(param) ? validUpdatableParams[param] = params[param] : 'Invalid parameter to update: "'.concat(param, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md');
                    });
                    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
                    render(this, updatedParams), privateProps.innerParams.set(this, updatedParams), 
                    Object.defineProperties(this, {
                        params: {
                            value: Object.assign({}, this.params, params),
                            writable: !1,
                            enumerable: !0
                        }
                    });
                },
                _destroy: function _destroy() {
                    const domCache = privateProps.domCache.get(this), innerParams = privateProps.innerParams.get(this);
                    innerParams && (domCache.popup && globalState.swalCloseEventFinishedCallback && (globalState.swalCloseEventFinishedCallback(), 
                    delete globalState.swalCloseEventFinishedCallback), globalState.deferDisposalTimer && (clearTimeout(globalState.deferDisposalTimer), 
                    delete globalState.deferDisposalTimer), "function" == typeof innerParams.didDestroy && innerParams.didDestroy(), 
                    disposeSwal(this));
                }
            });
            let currentInstance;
            class SweetAlert {
                constructor(...args) {
                    if ("undefined" == typeof window) return;
                    currentInstance = this;
                    const outerParams = Object.freeze(this.constructor.argsToParams(args));
                    Object.defineProperties(this, {
                        params: {
                            value: outerParams,
                            writable: !1,
                            enumerable: !0,
                            configurable: !0
                        }
                    });
                    const promise = this._main(this.params);
                    privateProps.promise.set(this, promise);
                }
                then(onFulfilled) {
                    return privateProps.promise.get(this).then(onFulfilled);
                }
                finally(onFinally) {
                    return privateProps.promise.get(this).finally(onFinally);
                }
            }
            Object.assign(SweetAlert.prototype, instanceMethods), Object.assign(SweetAlert, staticMethods), 
            Object.keys(instanceMethods).forEach(key => {
                SweetAlert[key] = function(...args) {
                    if (currentInstance) return currentInstance[key](...args);
                };
            }), SweetAlert.DismissReason = DismissReason, SweetAlert.version = "11.0.17";
            const Swal = SweetAlert;
            return Swal.default = Swal, Swal;
        }(), void 0 !== commonjsGlobal && commonjsGlobal.Sweetalert2 && (commonjsGlobal.swal = commonjsGlobal.sweetAlert = commonjsGlobal.Swal = commonjsGlobal.SweetAlert = commonjsGlobal.Sweetalert2), 
        "undefined" != typeof document && function(e, t) {
            var n = e.createElement("style");
            if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t); else try {
                n.innerHTML = t;
            } catch (e) {
                n.innerText = t;
            }
        }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end" "gap gap gap";grid-template-rows:auto auto auto .625em;height:100%;padding:.625em .625em 0;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container::after{content:"";grid-column:1/4;grid-row:4;height:.625em}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');
    })), GwdService = function(_super) {
        function GwdService() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            return _this.rules = new Map([ [ SiteEnum.TMall, /detail.tmall.com\/item.htm/i ], [ SiteEnum.TaoBao, /item.taobao.com/i ], [ SiteEnum.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i ], [ SiteEnum.SuNing, /product.suning.com/i ], [ SiteEnum.Vp, /detail.vip.com/i ] ]), 
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
                Logger.debug(data), "price_status" in data ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(_this.getChartOption(data)), 
                _this.chartMsg("")) : ("is_ban" in data && 1 == data.is_ban && sweetalert2_all.fire({
                    icon: "info",
                    html: "\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u5f02\u5e38,\u662f\u5426\u6253\u5f00\u9a8c\u8bc1\u9875\u9762\u8fdb\u884c\u9a8c\u8bc1?",
                    showCloseButton: !0,
                    showCancelButton: !0,
                    focusConfirm: !1,
                    confirmButtonText: "\u9a8c\u8bc1\u8d70\u8d77",
                    cancelButtonText: "\u8001\u5b50\u4e0d\u770b"
                }).then((function(res) {
                    res.isConfirmed && Core.open("https://browser.gwdang.com/slider/verify.html?fromUrl=" + encodeURIComponent(Runtime.url)), 
                    sweetalert2_all.close(res);
                })), that.historyService.Process());
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
                        var l = [];
                        if (data.store.length > 0) {
                            var storeData = data.store[0];
                            data.store.length > 1 && (storeData = data.store[1]);
                            var couponsMap_1 = {};
                            data.promo.length > 0 && data.promo.forEach((function(v) {
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
            return _this.rules = new Map([ [ SiteEnum.TaoBao, /taobao.com/i ], [ SiteEnum.TMall, /tmall/i ] ]), 
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
            return _this.rules = new Map([ [ SiteEnum.BiliBili, /bilibili.com\/video\/[av|bv]*/i ] ]), 
            _this._appName = "bilibili", _this;
        }
        return __extends(BiliImgService, _super), BiliImgService.prototype.loader = function() {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            Core.autoLazyload((function() {
                return !!($(".video-data").length && $(".bilibili-player-video-info-people-number").length && $.isNumeric($(".coin").text().replace("\u4e07", "").trim()));
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
                        "" != (null === (_a = res.data) || void 0 === _a ? void 0 : _a.durl[0].url) ? (Config.set(key, res, 60), 
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
            return CryptoJS__default.default.AES.decrypt(str, CryptoJS__default.default.enc.Latin1.parse(Core.decode("YmVpYmVpZG91eXUxMjM0NQ==")), {
                iv: CryptoJS__default.default.enc.Latin1.parse(Core.decode("YmVpYmVpMTIzNDU2Nzg5MA==")),
                mode: CryptoJS__default.default.mode.CBC,
                adding: CryptoJS__default.default.pad.ZeroPadding
            }).toString(CryptoJS__default.default.enc.Utf8);
        }, BiliImgService.btn = '\n    <span id="findimg" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u83b7\u53d6\u5c01\u9762\n    </span>', 
        BiliImgService.down = '\n    <span id="downvideo" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e0b\u8f7d\u89c6\u9891\n    </span>', 
        BiliImgService.tripleClick = '\n    <span id="tripleClick" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e00\u952e\u4e09\u8fde\n    </span>', 
        BiliImgService;
    }(PluginBase), Menu = Common.Menu, MovieService = function(_super) {
        function MovieService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.YouKu, /youku/i ], [ SiteEnum.IQiYi, /iqiyi/i ], [ SiteEnum.LeShi, /le.com/i ], [ SiteEnum.Tencent_V, /v.qq/i ], [ SiteEnum.TuDou, /tudou/i ], [ SiteEnum.MangGuo, /mgtv/i ], [ SiteEnum.SoHu, /sohu/i ], [ SiteEnum.Acfun, /acfun/i ], [ SiteEnum.BiliBili, /bilibili/i ], [ SiteEnum.M1905, /1905.com/i ], [ SiteEnum.PPTV, /pptv.com/i ], [ SiteEnum.YinYueTai, /yinyuetai/ ] ]), 
            _this.menu = new Common.Menu, _this._unique = !1, _this;
        }
        return __extends(MovieService, _super), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
        }, MovieService.prototype.run = function() {
            this.menu.Init([ {
                title: "\u7535\u5f71\u641c\u7d22",
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
                Menu.close();
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("http://shop.huizhek.com");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("http://jd.huizhek.com");
            }));
        }, MovieService;
    }(PluginBase), JdService = function(_super) {
        function JdService() {
            var _this = _super.call(this) || this;
            return _this._appName = "JdService", _this.rules = new Map([ [ SiteEnum.JingDong, /item.jd/i ] ]), 
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
            return _this.rules = new Map([ [ SiteEnum.WangYi, /163(.*)song/i ], [ SiteEnum.Tencent_M, /y.QQ(.*)song/i ], [ SiteEnum.KuGou, /kugou.com\/song\/*/i ], [ SiteEnum.KuWo, /kuwo(.*)yinyue/i ], [ SiteEnum.XiaMi, /xiami/i ], [ SiteEnum.TaiHe, /taihe.com/i ], [ SiteEnum.QingTing, /qingting/i ], [ SiteEnum.LiZhi, /lizhi/i ], [ SiteEnum.MiGu, /migu/i ], [ SiteEnum.XiMaLaYa, /ximalaya/i ] ]), 
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
                if (/ximalaya/i.test(Runtime.url)) if (__INITIAL_STATE__ && null != __INITIAL_STATE__.SoundDetailPage) Core.open("http://music.wandhi.com/?id=" + __INITIAL_STATE__.SoundDetailPage.trackId + "&type=ximalaya"); else {
                    layer.closeAll();
                    var html = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                    $.each(__INITIAL_STATE__.AlbumDetailTrackList.tracksInfo.tracks, (function(index, item) {
                        html += '<li class="dOi2"><a href="http://music.wandhi.com/?id=' + item.trackId + '&type=ximalaya" target="_blank">' + item.title + "</a></li>";
                    })), html += "</ul></div>", layer.open({
                        type: 1,
                        area: [ "auto", "30%" ],
                        title: "\u4e3a\u4f60\u627e\u5230\u4e86\u8fd9\u4e9b\u66f2\u76ee\u89e3\u6790\u2026\u2026\u4ec0\u4e48\uff1f\u6211\u4e11\uff1f\u4ee5\u540e\u518d\u8bf4\u5427",
                        shade: .6,
                        maxmin: !1,
                        anim: 2,
                        content: html
                    });
                } else /taihe.com/i.test(Runtime.url) ? Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url.replace("taihe", "baidu"))) : Core.open("http://music.wandhi.com/?url=" + UrlHelper.urlEncode(Runtime.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                Core.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("https://t.cn/A6LoYnHT");
            }));
        }, MusicService;
    }(PluginBase), StuService = function(_super) {
        function StuService() {
            var _this = _super.call(this) || this;
            return _this.rules = new Map([ [ SiteEnum.SXB, /shangxueba.com\/ask\/.*html/i ] ]), 
            _this;
        }
        return __extends(StuService, _super), StuService.prototype.loader = function() {
            "undefined" == typeof $ && Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js"), 
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, StuService.prototype.run = function() {
            this.menu.Init([ {
                title: "\u67e5\u770b\u7b54\u6848",
                show: "\u67e5\u770b<br>\u7b54\u6848",
                type: "search"
            }, {
                title: "\u6253\u8d4f\u4f5c\u8005",
                show: "\u6253\u8d4f<br>\u4f5c\u8005",
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
        }, StuService.prototype._onClick = function() {
            $("body").on("click", "[data-cat=process]", (function() {
                layer.open({
                    type: 1,
                    title: "\u8bf7\u6211\u559d\u4e00\u676f",
                    shadeClose: !0,
                    area: "800px",
                    content: '<img src="https://i.loli.net/2019/05/14/5cda672add6f594934.jpg">'
                });
            })), $("body").on("click", "[data-cat=search]", (function() {
                Route.querySbx($("#Hidd_id").val(), (function(data) {
                    data.status ? (Alert.open("\u7b54\u6848", data.msg), Route.sbxFeedback(dataid, data.msg)) : "wronganhao" == data.msg ? (Alert.prompt("\u53e3\u4ee4\u9519\u8bef\uff0c\u8bf7\u5c06\u5f39\u51fa\u7684\u9875\u9762\u4e2d\u7684\u53e3\u4ee4\u586b\u5165\u540e\u91cd\u8bd5\uff01", Config.get("sxb_anhao", ""), (function(v) {
                        Config.set("sxb_anhao", v), Alert.info("\u8bf7\u518d\u6b21\u70b9\u51fb\u67e5\u770b\u7b54\u6848\u6309\u94ae");
                    }), 4), Core.open("http://www.lelunwen.com/e/action/ListInfo/?classid=45")) : Alert.confim("\u6ca1\u67e5\u5230\u7b54\u6848", "\u8981\u4e0d\u8981\u8df3\u8f6c\u5230\u67e5\u8be2\u9875\u770b\u770b\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function() {
                        Core.open(Runtime.url.replace("shangxueba", "shangxueba365"));
                    }));
                }));
            })), $("body").on("click", "[data-cat=tb]", (function() {
                Core.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                Core.open("https://t.cn/A6LoYnHT");
            }));
        }, StuService;
    }(PluginBase);
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
            return _this.rules = new Map([ [ SiteEnum.TaoBao, /s.taobao.com\/search/i ], [ SiteEnum.TMall, /list.tmall.com\/search_product.htm/i ] ]), 
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
            var _this = this;
            $(".onekeyvip-box-wait").each((function(index, ele) {
                _this.queryInfo(ele);
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
            this.showItemUrl(itemId, couponInfo.item_url);
        }, ListService.prototype.showItemUrl = function(itemId, itemUrl) {
            Core.click(".onekeyvip-item-" + itemId, (function() {
                return Core.open(itemUrl), !1;
            }));
        }, ListService.prototype.showQueryFind = function(selector, couponMoney) {
            selector.html('<a target="_blank" class="onekeyvip-box-info onekeyvip-box-info-find" title="\u5207\u6362\u900f\u660e\u5ea6">' + couponMoney + "\u5143\u5238</a>");
        }, ListService.prototype.showQueryEmpty = function(selector) {
            selector.addClass("onekeyvip-box-info-translucent"), selector.html('<a href="javascript:void(0);" class="onekeyvip-box-info onekeyvip-box-info-empty" title="\u5207\u6362\u900f\u660e\u5ea6">\u6682\u65e0\u4f18\u60e0</a>');
        }, ListService;
    }(PluginBase), OneKeyVipInjection = function() {
        function OneKeyVipInjection() {
            this.plugins = new Array, this.plugins = [ Container.Require(UpdateService), Container.Require(BiliImgService), Container.Require(MovieService), Container.Require(ListService), Container.Require(TaoBaoService), Container.Require(JdService), Container.Require(MusicService), Container.Require(StuService), Container.Require(GwdService) ], 
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
