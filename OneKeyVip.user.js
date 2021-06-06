// ==UserScript==
// @name         【玩的嗨】VIP工具箱,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,下载B站视频,上学吧答案获取等众多功能聚合 2021-06-06 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.2.24
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
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@9.14.0/dist/sweetalert2.min.js
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

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("vue"), require("crypto-js")) : "function" == typeof define && define.amd ? define([ "vue", "crypto-js" ], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Vue, e.CryptoJS);
}(this, (function(e, t) {
    "use strict";
    function _interopDefaultLegacy(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    var n = _interopDefaultLegacy(e), o = _interopDefaultLegacy(t), extendStatics = function(e, t) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function __extends(e, t) {
        function __() {
            this.constructor = e;
        }
        extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, 
        new __);
    }
    function __decorate(e, t, n, o) {
        var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
    }
    function __metadata(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function __awaiter(e, t, n, o) {
        return new (n || (n = Promise))((function(i, r) {
            function fulfilled(e) {
                try {
                    step(o.next(e));
                } catch (e) {
                    r(e);
                }
            }
            function rejected(e) {
                try {
                    step(o.throw(e));
                } catch (e) {
                    r(e);
                }
            }
            function step(e) {
                e.done ? i(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e);
                    }));
                }(e.value).then(fulfilled, rejected);
            }
            step((o = o.apply(e, t || [])).next());
        }));
    }
    function __generator(e, t) {
        var n, o, i, r, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        };
        return r = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this;
        }), r;
        function verb(r) {
            return function(s) {
                return function step(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (;a; ) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [ 2 & r[0], i.value ]), r[0]) {
                          case 0:
                          case 1:
                            i = r;
                            break;

                          case 4:
                            return a.label++, {
                                value: r[1],
                                done: !1
                            };

                          case 5:
                            a.label++, o = r[1], r = [ 0 ];
                            continue;

                          case 7:
                            r = a.ops.pop(), a.trys.pop();
                            continue;

                          default:
                            if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break;
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1], i = r;
                                break;
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(r);
                                break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        r = t.call(e, a);
                    } catch (e) {
                        r = [ 6, e ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    };
                }([ r, s ]);
            };
        }
    }
    var i, r = function() {
        function Logger() {}
        return Logger.log = function(e, t) {}, Logger.debug = function(e) {
            this.log(e, i.debug);
        }, Logger.info = function(e) {
            this.log(e, i.info);
        }, Logger.warn = function(e) {
            this.log(e, i.warn);
        }, Logger.error = function(e) {
            this.log(e, i.error);
        }, Logger;
    }();
    !function(e) {
        e[e.debug = 0] = "debug", e[e.info = 1] = "info", e[e.warn = 2] = "warn", e[e.error = 3] = "error";
    }(i || (i = {}));
    var a = function() {
        function Config() {}
        return Object.defineProperty(Config, "env", {
            get: function() {
                return GM_info;
            },
            enumerable: !1,
            configurable: !0
        }), Config.get = function(e, t) {
            void 0 === t && (t = "");
            var n = GM_getValue(this.encode(e), t);
            if (n) {
                var o = JSON.parse(n);
                if (-1 == o.exp || o.exp > (new Date).getTime()) return r.info("cache true"), o.value;
            }
            return r.info("cache false"), t;
        }, Config.set = function(e, t, n) {
            void 0 === n && (n = -1);
            var o = {
                key: e,
                value: t,
                exp: -1 == n ? n : (new Date).getTime() + 1e3 * n
            };
            GM_setValue(this.encode(e), JSON.stringify(o));
        }, Config.clear = function(e) {
            this.set(e, null, -10);
        }, Config.decode = function(e) {
            return atob(e);
        }, Config.encode = function(e) {
            return btoa(e);
        }, Config;
    }(), s = function s() {
        this.max = 0, this.price_detail = [];
    }, u = function u() {}, c = function c() {}, d = function() {
        function Core() {
            this.topUrl = top.window.location.href, this.url = this.currentUrl();
        }
        return Core.appendTo = function(e, t) {
            $(e).append(t);
        }, Core.lazyload = function(e, t) {
            void 0 === t && (t = 5), setTimeout((function() {
                e();
            }), 1e3 * t);
        }, Core.aotulazyload = function(e, t, n) {
            void 0 === n && (n = 5), e() ? t() : setTimeout((function() {
                Core.aotulazyload(e, t, n);
            }), 1e3 * n);
        }, Core.addUrl = function(e, t) {
            GM_setValue(e, t);
        }, Core.openUrl = function(e) {
            this.open(GM_getValue(e));
        }, Core.prototype.getPar = function(e, t) {
            void 0 === t && (t = window.location.search);
            var n = t.match(new RegExp("[?&]" + e + "=([^&]+)", "i"));
            return null == n || n.length < 1 ? "" : n[1];
        }, Core.appendCss = function(e) {
            var t = document.createElement("link");
            t.type = "text/css", t.rel = "stylesheet", t.href = e, Core.head.appendChild(t);
        }, Core.appendCssContent = function(e) {
            var t = document.createElement("style");
            t.innerHTML = e, Core.head.appendChild(t);
        }, Core.prototype.bodyAppendCss = function(e) {
            $("body").append($('<link rel="stylesheet" href="' + e + '">'));
        }, Core.bodyAppend = function(e) {
            $("body").append(e);
        }, Core.appendJs = function(e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e, this.head.appendChild(t);
        }, Core.prototype.bodyAppendJs = function(e) {
            $("body").append($('<script type="text/javascript" src="' + e + '"><\/script>'));
        }, Core.prototype.currentUrl = function() {
            return window.location.href;
        }, Core.format = function(e, t) {
            void 0 === t && (t = "yyyy-MM-dd hh:mm:ss");
            var n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            for (var o in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), 
            n) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o]).substr(("" + n[o]).length)));
            return t;
        }, Core.encode = function(e) {
            return window.btoa(e);
        }, Core.decode = function(e) {
            return window.atob(e);
        }, Core.prototype.Msg = function(e) {
            return layer.msg(e, {
                icon: 5
            });
        }, Core.prototype.showContent = function(e, t) {
            return layer.open({
                type: 1,
                title: e,
                shade: 0,
                content: t
            });
        }, Core.prototype.close = function(e) {
            layer.close(e);
        }, Core.prototype.closeAll = function() {
            layer.closeAll();
        }, Core.open = function(e, t) {
            void 0 === t && (t = !1), GM_openInTab(e, t);
        }, Core.uuid = function(e, t, n) {
            void 0 === e && (e = 10), void 0 === t && (t = !1), void 0 === n && (n = 0);
            var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = [];
            if (n = 0 == n ? n || i.length : n, t) {
                var a = void 0;
                for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", o = 0; o < 36; o++) r[o] || (a = 0 | 16 * Math.random(), 
                r[o] = i[19 == o ? 3 & a | 8 : a]);
            } else for (o = 0; o < e; o++) r[o] = i[0 | Math.random() * n];
            return r.join("");
        }, Core.head = document.getElementsByTagName("head")[0], Core.top_url = top.window.location.href, 
        Core;
    }(), l = function() {
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
        function HttpRequest(e) {
            this.headers = new Map, this.url = e.url, this.method = e.methodType, this.dataType = e.dataType, 
            this._option = e;
        }
        HttpRequest.prototype.onload = function(e) {
            this._option.onSuccess(e);
        }, HttpRequest.prototype.onerror = function() {
            this.onerror();
        }, HttpRequest.prototype.setQueryData = function(e) {
            if (e instanceof FormData) this.data = e; else {
                var t = new FormData;
                for (var n in e) t.append(n, e[n]);
                this.data = t;
            }
        }, Object.defineProperty(HttpRequest.prototype, "onLoad", {
            get: function() {
                return this.onSuccess;
            },
            enumerable: !1,
            configurable: !0
        });
    }();
    var p = function() {
        function AjaxOption(e, t, n, o, i, r) {
            void 0 === t && (t = "GET"), void 0 === i && (i = new Map), void 0 === r && (r = 10), 
            this.url = e, this.methodType = t, this.onSuccess = o, this.onError = o, this.data = n, 
            this.headers = i, this.timeOut = r;
        }
        return AjaxOption.prototype.getData = function() {
            if (this.data instanceof FormData) return this.data;
            if (this.data instanceof Map) {
                var e = new FormData;
                return this.data.forEach((function(t, n) {
                    e.append(n, t);
                })), e;
            }
            var t = new FormData;
            for (var n in this.data) t.append(n, this.data[n]);
            return t;
        }, AjaxOption;
    }(), f = function() {
        function Alert() {}
        return Alert.open = function(e, t, n, o, i, r) {
            return void 0 === n && (n = [ "400px", "300px" ]), void 0 === o && (o = 0), void 0 === i && (i = "lb"), 
            void 0 === r && (r = !0), layer.open({
                type: 1,
                title: e,
                area: n,
                shade: o,
                offset: i,
                maxmin: r,
                content: t
            });
        }, Alert.info = function(e) {
            return layer.msg(e, {
                time: 2e3
            });
        }, Alert.error = function(e) {
            return layer.msg(e, {
                icon: 5,
                time: 2e3
            });
        }, Alert.confim = function(e, t, n, o, i) {
            void 0 === i && (i = !1);
            var r = layer.open({
                type: 1,
                title: e || !1,
                closeBtn: 1,
                shade: .8,
                id: "LAY_layuipro",
                resize: !1,
                btn: n,
                btnAlign: "c",
                moveType: 1,
                content: '<div style="padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' + t + "</div>",
                yes: function(e) {
                    o(e), i && d.lazyload((function() {
                        layer.close(r);
                    }));
                }
            });
            return r;
        }, Alert.prompt = function(e, t, n, o, i) {
            void 0 === i && (i = 0), layer.prompt({
                title: e,
                value: t,
                formType: i
            }, (function(e, t, o) {
                n(e), layer.close(t);
            }));
        }, Alert.close = function(e) {
            layer.close(e);
        }, Alert.closeAll = function() {
            layer.closeAll();
        }, Alert.loading = function(e, t, n) {
            return void 0 === e && (e = 1), void 0 === t && (t = 10), void 0 === n && (n = .3), 
            layer.load(e, {
                shade: n,
                time: 1e3 * t
            });
        }, Alert;
    }(), m = function() {
        function Http() {}
        return Http.ajax = function(e) {
            var t, n;
            e.headers.set("User-Agent", "Mozilla/4.0 (compatible) Greasemonkey"), e.headers.set("Accept", "application/atom+xml,application/xml,text/xml");
            var o = new h;
            o.version = a.env.script.version, o.auth = null !== (t = a.env.script.author) && void 0 !== t ? t : "", 
            o.namespace = null !== (n = a.env.script.namespace) && void 0 !== n ? n : "", e.headers.forEach((function(e, t) {
                o[t] = e;
            })), GM_xmlhttpRequest({
                url: e.url,
                method: e.methodType,
                headers: o,
                data: e.getData(),
                timeout: 1e3 * e.timeOut,
                onload: function(t) {
                    var n, o;
                    try {
                        null === (n = e.onSuccess) || void 0 === n || n.call(e, "POST" == e.methodType ? JSON.parse(t.responseText) : t.responseText);
                    } catch (n) {
                        f.confim("", '                                        \n                        <h1>\u54cd\u5e94\u5f02\u5e38\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u65e5\u5fd7\uff1a</span><br>\n                        <p>' + n + "(" + t.status + ')</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(t.responseText) + '</p>                        \n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + a.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + a.env.script.version + "</p>\n                        <p>Url\uff1a" + l.url + "</p>\n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                            d.open("https://gitee.com/ixysy/OneKeyVip/issues");
                        })), null === (o = e.onSuccess) || void 0 === o || o.call(e, null);
                    }
                },
                onerror: function(t) {
                    var n;
                    f.confim("", '              \n                        <h1>\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(t.responseText) + "(" + t.status + ')</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + a.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + a.env.script.version + "</p>\n                        <p>Url\uff1a" + l.url + "</p>           \n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                        d.open("https://gitee.com/ixysy/OneKeyVip/issues");
                    })), null === (n = e.onError) || void 0 === n || n.call(e, t);
                }
            });
        }, Http.getData = function(e, t) {
            $.getJSON(e, (function(e) {
                t(e);
            }));
        }, Http.JqGet = function(e, t) {
            $.getJSON(e, (function(e) {
                t(e);
            }));
        }, Http.post = function(e, t, n) {
            void 0 === n && (n = 10);
            var o = f.loading();
            return new Promise((function(i) {
                Http.ajax(new p(e, "POST", t, (function(e) {
                    f.close(o), i(e);
                }), new Map, n));
            }));
        }, Http.get = function(e, t, n) {
            return void 0 === t && (t = new Map), void 0 === n && (n = 10), f.loading(), new Promise((function(o, i) {
                Http.ajax(new p(e, "GET", t, (function(e) {
                    var t;
                    try {
                        var n = null !== (t = JSON.parse(e)) && void 0 !== t ? t : e;
                        o(n);
                    } catch (e) {
                        r.debug(e), i();
                    }
                }), new Map, n));
            }));
        }, Http.getWithHead = function(e, t, n, o) {
            return void 0 === t && (t = new Map), void 0 === n && (n = new Map), void 0 === o && (o = 10), 
            f.loading(), new Promise((function(i, a) {
                Http.ajax(new p(e, "GET", t, (function(e) {
                    var t;
                    try {
                        var n = null !== (t = JSON.parse(e)) && void 0 !== t ? t : e;
                        i(n);
                    } catch (e) {
                        r.debug(e), a();
                    }
                }), n, o));
            }));
        }, Http.postWithHead = function(e, t, n, o) {
            return void 0 === t && (t = new Map), void 0 === n && (n = new Map), void 0 === o && (o = 10), 
            f.loading(), new Promise((function(i, a) {
                Http.ajax(new p(e, "POST", t, (function(t) {
                    try {
                        i(t);
                    } catch (t) {
                        r.debug([ e, t ]), a();
                    }
                }), n, o));
            }));
        }, Http.get_text = function(e) {
            return new Promise((function(t) {
                Http.ajax(new p(e, "GET", new Map, (function(e) {
                    t(e);
                })));
            }));
        }, Http;
    }(), h = function h() {}, g = function() {
        function Convert() {}
        return Convert.genterData = function(e) {
            var t = new s;
            if (t.date = d.format(new Date(Number.parseInt(e.lowerDate.match(/[0-9]{13}/)[0]) + 800), "yyyy-MM-dd"), 
            t.min = e.lowerPrice, t.max = t.min, t.max_date = t.date, t.current = e.currentPrice.toString(), 
            t.mark = "" == e.changPriceRemark ? "\u6682\u65e0" : e.changPriceRemark, 0 == e.listPrice.length || !e.listPrice) {
                var n = [];
                e.datePrice.split("],[").forEach((function(e, t) {
                    var o = new c, i = (e = e.replace(/\[|"|\]/g, "")).split(",");
                    o.pr = Number.parseInt(i[1]), o.yh = 3 == i.length ? i[2] : e.substring(e.indexOf(i[2]), e.length), 
                    o.dt = i[0], n.push(o);
                })), e.listPrice = n;
            }
            return e.listPrice.forEach((function(e, n) {
                var o = new u;
                o.timestamp = Number.parseInt(e.dt.match(/[0-9]{13}/)[0]) + 800, o.time = d.format(new Date(o.timestamp), "yyyy-MM-dd"), 
                o.price = e.pr, o.mark = e.yh, t.max < e.pr && (t.max = e.pr, t.max_date = o.time), 
                t.price_detail.push(o);
            })), t;
        }, Convert.genterDataV2 = function(e) {
            var t = new s;
            t.date = d.format(new Date(e.lowerDate), "yyyy-MM-dd"), t.min = e.lowerPrice, t.max = t.min, 
            t.max_date = t.date, t.current = e.currentPrice.toString(), t.mark = "" == e.changPriceRemark ? "\u6682\u65e0" : e.changPriceRemark;
            var n = [];
            if (0 != e.datePrice.length) {
                var o = [];
                e.datePrice.split("],[").forEach((function(e, t) {
                    var n = new c, i = (e = e.replace(/\[|"|\]/g, "")).split(",");
                    n.pr = Number.parseInt(i[1]), n.yh = 3 == i.length ? i[2] : e.substring(e.indexOf(i[2]), e.length), 
                    n.dt = i[0], o.push(n);
                })), n = o;
            }
            return n.forEach((function(e, n) {
                var o = new u;
                o.timestamp = Number.parseInt(e.dt.match(/[0-9]{13}/)[0]) + 800, o.time = d.format(new Date(o.timestamp), "yyyy-MM-dd"), 
                o.price = e.pr, o.mark = e.yh, t.max < e.pr && (t.max = e.pr, t.max_date = o.time), 
                t.price_detail.push(o);
            })), t;
        }, Convert.genterAuth = function() {
            return __awaiter(this, void 0, Promise, (function() {
                var e;
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return (e = a.get("baseauth", "")) ? [ 4, e ] : [ 3, 2 ];

                      case 1:
                        return [ 2, t.sent() ];

                      case 2:
                        return [ 4, m.get_text(this.authApi).then((function(t) {
                            var n = t.match(/id=\"ticket\" value=\"(.*)\"/i);
                            return (e = null != n ? "" + n[1] : "").length > 4 && (e = "BasicAuth " + (e = e.substr(e.length - 4, 4) + e.substring(0, e.length - 4))), 
                            a.set("baseauth", e, 60), e;
                        })) ];

                      case 3:
                        return [ 2, e = t.sent() ];
                    }
                }));
            }));
        }, Convert.authApi = "https://tool.manmanbuy.com/HistoryLowest.aspx", Convert;
    }(), y = function() {
        function Result() {}
        return Result.prototype.constructorq = function() {}, Result;
    }();
    !function(e) {
        function StuResult() {
            return null !== e && e.apply(this, arguments) || this;
        }
        __extends(StuResult, e);
    }(y), function(e) {
        function StrResult() {
            return null !== e && e.apply(this, arguments) || this;
        }
        __extends(StrResult, e);
    }(y);
    var w = function(e) {
        function HistoryResult() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return __extends(HistoryResult, e), HistoryResult;
    }(y);
    !function(e) {
        function HistoryQueryResult() {
            return null !== e && e.apply(this, arguments) || this;
        }
        __extends(HistoryQueryResult, e);
    }(y), function(e) {
        function HistoryV1Result() {
            return null !== e && e.apply(this, arguments) || this;
        }
        __extends(HistoryV1Result, e);
    }(y), function(e) {
        function HistoryV2Result() {
            return null !== e && e.apply(this, arguments) || this;
        }
        __extends(HistoryV2Result, e);
    }(y);
    var v, b = function() {
        function Route() {
            this.queryTao = "";
        }
        return Object.defineProperty(Route, "apiRoot", {
            get: function() {
                return "https://api.wandhi.com/api";
            },
            enumerable: !1,
            configurable: !0
        }), Route.baseApi = function(e, t, n, o) {
            void 0 === o && (o = 10), m.post(Route.apiRoot + e, t, o).then((function(e) {
                n(e);
            }));
        }, Route.querySbx = function(e, t) {
            var n = this;
            "" !== a.get(this.sxb_key, "") ? this.query365(e, a.get(this.sxb_key), t) : this.queryValue("sxb_anhao", (function(o) {
                n.query365(e, o.data, t);
            }));
        }, Route.sbxFeedback = function(e, t) {
            this.baseApi("/tools/record", new Map([ [ "id", e ], [ "data", t ], [ "anhao", a.get(this.sxb_key) ] ]), (function() {}));
        }, Route.query365 = function(e, t, n) {
            var o = a.get("sxb_api");
            o ? m.post(o, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + e + ".html" ], [ "anhao", t ] ])).then((function(e) {
                n(e);
            })) : this.queryValue("sxb_api", (function(n) {
                a.set("sxb_api", n.data, 864e5), m.post(n.data, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + e + ".html" ], [ "anhao", t ] ]));
            }));
        }, Route.queryValue = function(e, t) {
            this.baseApi(Route.config, new Map([ [ "key", e ] ]), t);
        }, Route.queryHistory = function(e, t, n) {
            this.baseApi(this.history, new Map([ [ "url", e ], [ "type", t ] ]), n);
        }, Route.queryHistoryv1 = function(e, t, n) {
            var o = this, i = this;
            this.baseApi(this.historyv1, new Map([ [ "url", e ] ]), (function(a) {
                r.debug(a), a.code ? m.get(a.data).then((function(e) {
                    var t = new w;
                    t.code = 1, t.data = g.genterData(e), r.debug(t), n(t);
                })).catch((function() {
                    i.queryHistory(e, t, n);
                })) : o.queryHistory(e, t, n);
            }), 60);
        }, Route.queryHistoryv2 = function(e, t, n) {
            var o = this, i = this;
            this.baseApi(this.historyv2, new Map([ [ "url", e ] ]), (function(a) {
                r.debug(a), a.code ? m.getWithHead(a.data.url, new Map, new Map([ [ "Authorization", a.data.auth ] ])).then((function(e) {
                    var t = new w;
                    0 == e.code ? t.code = 1 : t.code = -1, t.code = 1, t.data = g.genterDataV2(e.data), 
                    r.debug(t), n(t);
                })).catch((function() {
                    i.queryHistory(e, t, n);
                })) : o.queryHistory(e, t, n);
            }), 60);
        }, Route.queryHistoryv3 = function(e, t, n) {
            var o = this, i = this;
            this.baseApi(this.historyv3, new Map([ [ "url", e ] ]), (function(s) {
                r.debug(s), s.code ? g.genterAuth().then((function(u) {
                    m.postWithHead(s.data.url, new Map([ [ "token", s.data.token ], [ "t", s.data.t ], [ "key", s.data.key ], [ "method", s.data.method ] ]), new Map([ [ "Authorization", null != u ? u : s.data.auth ] ])).then((function(i) {
                        var s = new w;
                        0 == i.code ? s.code = 1 : 2 == i.code ? (a.clear("baseauth"), o.queryHistoryv3(e, t, n)) : s.code = -1, 
                        s.code = 1, s.data = g.genterDataV2(i.data), r.debug(s), n(s);
                    })).catch((function() {
                        i.queryHistory(e, t, n);
                    }));
                })) : o.queryHistory(e, t, n);
            }), 60);
        }, Route.queryHistoryV4 = function(e, t, n) {
            var o = "https://browser.gwdang.com/extension/price_towards?url=" + encodeURIComponent(e) + "&ver=1&format=json";
            m.JqGet(o, n);
        }, Route.queryBiliImg = function(e, t) {
            m.getData(this.biliInfo + "?aid=" + e, t);
        }, Route.queryBiliDown = function(e, t, n) {
            m.getData(this.bilidown + "?cid=" + t + "&avid=" + e + "&qn=112", n);
        }, Route.queryCoupons = function(e, t) {
            this.baseApi(this.coupons, new Map([ [ "id", e ] ]), t);
        }, Route.queryJdCoupons = function(e, t) {
            Route.baseApi(Route.jd_coupons, new Map([ [ "item_id", e ] ]), t);
        }, Route.querySnCoupons = function(e, t) {
            Route.baseApi(Route.sn_coupons, new Map([ [ "url", e ] ]), t);
        }, Route.queryVpCoupons = function(e, t) {
            Route.baseApi(Route.vp_coupons, new Map([ [ "url", e ] ]), t);
        }, Route.update_api = "https://cdn.jsdelivr.net/gh/maxzhang666/OneKeyVip/OneKeyVip.user.js?t=" + d.uuid(), 
        Route.home_url = "https://wiki.wandhi.com", Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", 
        Route.install_url_two = "https://tools.wandhi.com/scripts", Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", 
        Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.historyv3 = "/history/v3", 
        Route.bili = "/tools/bili", Route.biliInfo = "https://api.bilibili.com/x/web-interface/view", 
        Route.bilidown = "https://api.bilibili.com/x/player/playurl", Route.coupons = "/tb/infos/", 
        Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", Route.sn_coupons = "/sn/info", 
        Route.vp_coupons = "/vp/info", Route;
    }(), k = function() {
        function Toast(e, t, n) {
            this.creationTime = new Date, this.message = e, this.type = n, this.title = t, this.duration = 3e3, 
            this.randomKey = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1));
        }
        return Toast.prototype.show = function() {
            var e = this;
            Toast.containerVM.cards.splice(0, 0, this), void 0 !== this.duration && -1 != this.duration && setTimeout((function() {
                return e.dismiss();
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
            this.element = new n.default({
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
        }, Toast.internalShow = function(e, t, n, o) {
            var i = new Toast(e, t, o);
            return i.duration = n, i.show(), i;
        }, Toast.show = function(e, t, n) {
            return void 0 === n && (n = -1), this.internalShow(e, t, n, v.Default);
        }, Toast.info = function(e, t, n) {
            return void 0 === n && (n = -1), this.internalShow(e, t, n, v.Info);
        }, Toast.success = function(e, t, n) {
            return void 0 === n && (n = -1), this.internalShow(e, t, n, v.Success);
        }, Toast.error = function(e, t, n) {
            return void 0 === n && (n = -1), this.internalShow(e, t, n, v.Error);
        }, Toast;
    }();
    function styleInject(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
            i.type = "text/css", "top" === n && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), 
            i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
        }
    }
    !function(e) {
        e.Default = "default", e.Info = "info", e.Success = "success", e.Error = "error";
    }(v || (v = {}));
    var _;
    styleInject('html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:"Helvetica Neue",Helvetica,"Microsoft YaHei",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}'), 
    function(e) {
        var t = function() {
            function Menu() {
                this.core = new d, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelecter = "#Wandhi-nav";
            }
            return Menu.prototype.loader = function() {
                d.appendCssContent(this.getCss());
            }, Menu.prototype.getBody = function(e) {
                return '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="Wandhi-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label>' + e + "</div>";
            }, Menu.prototype.getCss = function() {
                return 'html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:"Helvetica Neue",Helvetica,"Microsoft YaHei",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}';
            }, Menu.prototype.Init = function(e, t) {
                var n = this;
                if (!this.site.test(this.core.topUrl)) {
                    this.loader();
                    var o = "";
                    e.forEach((function(e, t) {
                        o += '<a href="javascript:void(0)" title="' + e.title + '" data-cat="' + e.type + '" class="menu-item menu-line menu-' + n.menusClass[t] + '">' + e.show + "</a>";
                    })), d.bodyAppend(this.getBody(o)), /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                    var i = {
                        down: !1,
                        x: 0,
                        y: 0,
                        winWid: 0,
                        winHei: 0,
                        clientX: 0,
                        clientY: 0
                    }, r = $(this.menuSelecter)[0];
                    $("body").on("mousedown", "#Wandhi-nav", (function(e) {
                        var getCss = function(e, t) {
                            var n, o, i;
                            return null !== (o = null === (n = document.defaultView) || void 0 === n ? void 0 : n.getComputedStyle(e, null)[t]) && void 0 !== o ? o : null !== (i = e.currentStyle) && void 0 !== i ? i : e.currentStyle[t];
                        };
                        i.down = !0, i.clientX = e.clientX, i.clientY = e.clientY, i.x = parseInt(getCss(this, "left")), 
                        i.y = parseInt(getCss(this, "top")), i.winHei = $(window).height(), i.winWid = $(window).width(), 
                        $(document).on("mousemove", (function(e) {
                            var t = e.clientX - i.clientX, n = e.clientY - i.clientY;
                            (r = r || $("#Wandhi-nav")[0]).style.top = i.y + n + "px", r.style.left = i.x + t + "px";
                        }));
                    })).on("mouseup", "#Wandhi-nav", (function() {
                        i.down = !1, $(document).off("mousemove");
                    })), t.call(this);
                }
            }, Menu;
        }();
        e.Menu = t;
    }(_ || (_ = {}));
    var x, M = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    !function(e) {
        !function(t) {
            var n = "object" == typeof M ? M : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(), o = makeExporter(e);
            function makeExporter(e, t) {
                return function(n, o) {
                    "function" != typeof e[n] && Object.defineProperty(e, n, {
                        configurable: !0,
                        writable: !0,
                        value: o
                    }), t && t(n, o);
                };
            }
            void 0 === n.Reflect ? n.Reflect = e : o = makeExporter(n.Reflect, o), function(e) {
                var t = Object.prototype.hasOwnProperty, n = "function" == typeof Symbol, o = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive", i = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator", r = "function" == typeof Object.create, a = {
                    __proto__: []
                } instanceof Array, s = !r && !a, u = {
                    create: r ? function() {
                        return MakeDictionary(Object.create(null));
                    } : a ? function() {
                        return MakeDictionary({
                            __proto__: null
                        });
                    } : function() {
                        return MakeDictionary({});
                    },
                    has: s ? function(e, n) {
                        return t.call(e, n);
                    } : function(e, t) {
                        return t in e;
                    },
                    get: s ? function(e, n) {
                        return t.call(e, n) ? e[n] : void 0;
                    } : function(e, t) {
                        return e[t];
                    }
                }, c = Object.getPrototypeOf(Function), d = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, l = d || "function" != typeof Map || "function" != typeof Map.prototype.entries ? function CreateMapPolyfill() {
                    var e = {}, t = [], n = function() {
                        function MapIterator(e, t, n) {
                            this._index = 0, this._keys = e, this._values = t, this._selector = n;
                        }
                        return MapIterator.prototype["@@iterator"] = function() {
                            return this;
                        }, MapIterator.prototype[i] = function() {
                            return this;
                        }, MapIterator.prototype.next = function() {
                            var e = this._index;
                            if (e >= 0 && e < this._keys.length) {
                                var n = this._selector(this._keys[e], this._values[e]);
                                return e + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, 
                                {
                                    value: n,
                                    done: !1
                                };
                            }
                            return {
                                value: void 0,
                                done: !0
                            };
                        }, MapIterator.prototype.throw = function(e) {
                            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), 
                            e;
                        }, MapIterator.prototype.return = function(e) {
                            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), 
                            {
                                value: e,
                                done: !0
                            };
                        }, MapIterator;
                    }();
                    return function() {
                        function Map() {
                            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
                        }
                        return Object.defineProperty(Map.prototype, "size", {
                            get: function() {
                                return this._keys.length;
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Map.prototype.has = function(e) {
                            return this._find(e, !1) >= 0;
                        }, Map.prototype.get = function(e) {
                            var t = this._find(e, !1);
                            return t >= 0 ? this._values[t] : void 0;
                        }, Map.prototype.set = function(e, t) {
                            var n = this._find(e, !0);
                            return this._values[n] = t, this;
                        }, Map.prototype.delete = function(t) {
                            var n = this._find(t, !1);
                            if (n >= 0) {
                                for (var o = this._keys.length, i = n + 1; i < o; i++) this._keys[i - 1] = this._keys[i], 
                                this._values[i - 1] = this._values[i];
                                return this._keys.length--, this._values.length--, t === this._cacheKey && (this._cacheKey = e, 
                                this._cacheIndex = -2), !0;
                            }
                            return !1;
                        }, Map.prototype.clear = function() {
                            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
                        }, Map.prototype.keys = function() {
                            return new n(this._keys, this._values, getKey);
                        }, Map.prototype.values = function() {
                            return new n(this._keys, this._values, getValue);
                        }, Map.prototype.entries = function() {
                            return new n(this._keys, this._values, getEntry);
                        }, Map.prototype["@@iterator"] = function() {
                            return this.entries();
                        }, Map.prototype[i] = function() {
                            return this.entries();
                        }, Map.prototype._find = function(e, t) {
                            return this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf(this._cacheKey = e)), 
                            this._cacheIndex < 0 && t && (this._cacheIndex = this._keys.length, this._keys.push(e), 
                            this._values.push(void 0)), this._cacheIndex;
                        }, Map;
                    }();
                    function getKey(e, t) {
                        return e;
                    }
                    function getValue(e, t) {
                        return t;
                    }
                    function getEntry(e, t) {
                        return [ e, t ];
                    }
                }() : Map, p = d || "function" != typeof Set || "function" != typeof Set.prototype.entries ? function CreateSetPolyfill() {
                    return function() {
                        function Set() {
                            this._map = new l;
                        }
                        return Object.defineProperty(Set.prototype, "size", {
                            get: function() {
                                return this._map.size;
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Set.prototype.has = function(e) {
                            return this._map.has(e);
                        }, Set.prototype.add = function(e) {
                            return this._map.set(e, e), this;
                        }, Set.prototype.delete = function(e) {
                            return this._map.delete(e);
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
                        }, Set.prototype[i] = function() {
                            return this.keys();
                        }, Set;
                    }();
                }() : Set, f = new (d || "function" != typeof WeakMap ? function CreateWeakMapPolyfill() {
                    var e = u.create(), n = CreateUniqueKey();
                    return function() {
                        function WeakMap() {
                            this._key = CreateUniqueKey();
                        }
                        return WeakMap.prototype.has = function(e) {
                            var t = GetOrCreateWeakMapTable(e, !1);
                            return void 0 !== t && u.has(t, this._key);
                        }, WeakMap.prototype.get = function(e) {
                            var t = GetOrCreateWeakMapTable(e, !1);
                            return void 0 !== t ? u.get(t, this._key) : void 0;
                        }, WeakMap.prototype.set = function(e, t) {
                            return GetOrCreateWeakMapTable(e, !0)[this._key] = t, this;
                        }, WeakMap.prototype.delete = function(e) {
                            var t = GetOrCreateWeakMapTable(e, !1);
                            return void 0 !== t && delete t[this._key];
                        }, WeakMap.prototype.clear = function() {
                            this._key = CreateUniqueKey();
                        }, WeakMap;
                    }();
                    function CreateUniqueKey() {
                        var t;
                        do {
                            t = "@@WeakMap@@" + CreateUUID();
                        } while (u.has(e, t));
                        return e[t] = !0, t;
                    }
                    function GetOrCreateWeakMapTable(e, o) {
                        if (!t.call(e, n)) {
                            if (!o) return;
                            Object.defineProperty(e, n, {
                                value: u.create()
                            });
                        }
                        return e[n];
                    }
                    function FillRandomBytes(e, t) {
                        for (var n = 0; n < t; ++n) e[n] = 255 * Math.random() | 0;
                        return e;
                    }
                    function CreateUUID() {
                        var e = function GenRandomBytes(e) {
                            return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(e)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(e)) : FillRandomBytes(new Uint8Array(e), e) : FillRandomBytes(new Array(e), e);
                        }(16);
                        e[6] = 79 & e[6] | 64, e[8] = 191 & e[8] | 128;
                        for (var t = "", n = 0; n < 16; ++n) {
                            var o = e[n];
                            4 !== n && 6 !== n && 8 !== n || (t += "-"), o < 16 && (t += "0"), t += o.toString(16).toLowerCase();
                        }
                        return t;
                    }
                }() : WeakMap);
                function GetOrCreateMetadataMap(e, t, n) {
                    var o = f.get(e);
                    if (IsUndefined(o)) {
                        if (!n) return;
                        o = new l, f.set(e, o);
                    }
                    var i = o.get(t);
                    if (IsUndefined(i)) {
                        if (!n) return;
                        i = new l, o.set(t, i);
                    }
                    return i;
                }
                function OrdinaryHasOwnMetadata(e, t, n) {
                    var o = GetOrCreateMetadataMap(t, n, !1);
                    return !IsUndefined(o) && function ToBoolean(e) {
                        return !!e;
                    }(o.has(e));
                }
                function OrdinaryGetOwnMetadata(e, t, n) {
                    var o = GetOrCreateMetadataMap(t, n, !1);
                    if (!IsUndefined(o)) return o.get(e);
                }
                function OrdinaryDefineOwnMetadata(e, t, n, o) {
                    GetOrCreateMetadataMap(n, o, !0).set(e, t);
                }
                function OrdinaryOwnMetadataKeys(e, t) {
                    var n = [], o = GetOrCreateMetadataMap(e, t, !1);
                    if (IsUndefined(o)) return n;
                    for (var r = function GetIterator(e) {
                        var t = GetMethod(e, i);
                        if (!IsCallable(t)) throw new TypeError;
                        var n = t.call(e);
                        if (!IsObject(n)) throw new TypeError;
                        return n;
                    }(o.keys()), a = 0; ;) {
                        var s = IteratorStep(r);
                        if (!s) return n.length = a, n;
                        var u = s.value;
                        try {
                            n[a] = u;
                        } catch (e) {
                            try {
                                IteratorClose(r);
                            } finally {
                                throw e;
                            }
                        }
                        a++;
                    }
                }
                function Type(e) {
                    if (null === e) return 1;
                    switch (typeof e) {
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
                        return null === e ? 1 : 6;

                      default:
                        return 6;
                    }
                }
                function IsUndefined(e) {
                    return void 0 === e;
                }
                function IsNull(e) {
                    return null === e;
                }
                function IsObject(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e;
                }
                function ToPrimitive(e, t) {
                    switch (Type(e)) {
                      case 0:
                      case 1:
                      case 2:
                      case 3:
                      case 4:
                      case 5:
                        return e;
                    }
                    var n = 3 === t ? "string" : 5 === t ? "number" : "default", i = GetMethod(e, o);
                    if (void 0 !== i) {
                        var r = i.call(e, n);
                        if (IsObject(r)) throw new TypeError;
                        return r;
                    }
                    return function OrdinaryToPrimitive(e, t) {
                        if ("string" === t) {
                            var n = e.toString;
                            if (IsCallable(n)) if (!IsObject(i = n.call(e))) return i;
                            if (IsCallable(o = e.valueOf)) if (!IsObject(i = o.call(e))) return i;
                        } else {
                            var o;
                            if (IsCallable(o = e.valueOf)) if (!IsObject(i = o.call(e))) return i;
                            var i, r = e.toString;
                            if (IsCallable(r)) if (!IsObject(i = r.call(e))) return i;
                        }
                        throw new TypeError;
                    }(e, "default" === n ? "number" : n);
                }
                function ToPropertyKey(e) {
                    var t = ToPrimitive(e, 3);
                    return function IsSymbol(e) {
                        return "symbol" == typeof e;
                    }(t) ? t : function ToString(e) {
                        return "" + e;
                    }(t);
                }
                function IsArray(e) {
                    return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e);
                }
                function IsCallable(e) {
                    return "function" == typeof e;
                }
                function IsConstructor(e) {
                    return "function" == typeof e;
                }
                function GetMethod(e, t) {
                    var n = e[t];
                    if (null != n) {
                        if (!IsCallable(n)) throw new TypeError;
                        return n;
                    }
                }
                function IteratorStep(e) {
                    var t = e.next();
                    return !t.done && t;
                }
                function IteratorClose(e) {
                    var t = e.return;
                    t && t.call(e);
                }
                function OrdinaryGetPrototypeOf(e) {
                    var t = Object.getPrototypeOf(e);
                    if ("function" != typeof e || e === c) return t;
                    if (t !== c) return t;
                    var n = e.prototype, o = n && Object.getPrototypeOf(n);
                    if (null == o || o === Object.prototype) return t;
                    var i = o.constructor;
                    return "function" != typeof i || i === e ? t : i;
                }
                function MakeDictionary(e) {
                    return e.__ = void 0, delete e.__, e;
                }
                e("decorate", (function decorate(e, t, n, o) {
                    if (IsUndefined(n)) {
                        if (!IsArray(e)) throw new TypeError;
                        if (!IsConstructor(t)) throw new TypeError;
                        return function DecorateConstructor(e, t) {
                            for (var n = e.length - 1; n >= 0; --n) {
                                var o = (0, e[n])(t);
                                if (!IsUndefined(o) && !IsNull(o)) {
                                    if (!IsConstructor(o)) throw new TypeError;
                                    t = o;
                                }
                            }
                            return t;
                        }(e, t);
                    }
                    if (!IsArray(e)) throw new TypeError;
                    if (!IsObject(t)) throw new TypeError;
                    if (!IsObject(o) && !IsUndefined(o) && !IsNull(o)) throw new TypeError;
                    return IsNull(o) && (o = void 0), function DecorateProperty(e, t, n, o) {
                        for (var i = e.length - 1; i >= 0; --i) {
                            var r = (0, e[i])(t, n, o);
                            if (!IsUndefined(r) && !IsNull(r)) {
                                if (!IsObject(r)) throw new TypeError;
                                o = r;
                            }
                        }
                        return o;
                    }(e, t, n = ToPropertyKey(n), o);
                })), e("metadata", (function metadata(e, t) {
                    return function decorator(n, o) {
                        if (!IsObject(n)) throw new TypeError;
                        if (!IsUndefined(o) && !function IsPropertyKey(e) {
                            switch (Type(e)) {
                              case 3:
                              case 4:
                                return !0;

                              default:
                                return !1;
                            }
                        }(o)) throw new TypeError;
                        OrdinaryDefineOwnMetadata(e, t, n, o);
                    };
                })), e("defineMetadata", (function defineMetadata(e, t, n, o) {
                    if (!IsObject(n)) throw new TypeError;
                    return IsUndefined(o) || (o = ToPropertyKey(o)), OrdinaryDefineOwnMetadata(e, t, n, o);
                })), e("hasMetadata", (function hasMetadata(e, t, n) {
                    if (!IsObject(t)) throw new TypeError;
                    return IsUndefined(n) || (n = ToPropertyKey(n)), function OrdinaryHasMetadata(e, t, n) {
                        if (OrdinaryHasOwnMetadata(e, t, n)) return !0;
                        var o = OrdinaryGetPrototypeOf(t);
                        return !IsNull(o) && OrdinaryHasMetadata(e, o, n);
                    }(e, t, n);
                })), e("hasOwnMetadata", (function hasOwnMetadata(e, t, n) {
                    if (!IsObject(t)) throw new TypeError;
                    return IsUndefined(n) || (n = ToPropertyKey(n)), OrdinaryHasOwnMetadata(e, t, n);
                })), e("getMetadata", (function getMetadata(e, t, n) {
                    if (!IsObject(t)) throw new TypeError;
                    return IsUndefined(n) || (n = ToPropertyKey(n)), function OrdinaryGetMetadata(e, t, n) {
                        if (OrdinaryHasOwnMetadata(e, t, n)) return OrdinaryGetOwnMetadata(e, t, n);
                        var o = OrdinaryGetPrototypeOf(t);
                        return IsNull(o) ? void 0 : OrdinaryGetMetadata(e, o, n);
                    }(e, t, n);
                })), e("getOwnMetadata", (function getOwnMetadata(e, t, n) {
                    if (!IsObject(t)) throw new TypeError;
                    return IsUndefined(n) || (n = ToPropertyKey(n)), OrdinaryGetOwnMetadata(e, t, n);
                })), e("getMetadataKeys", (function getMetadataKeys(e, t) {
                    if (!IsObject(e)) throw new TypeError;
                    return IsUndefined(t) || (t = ToPropertyKey(t)), function OrdinaryMetadataKeys(e, t) {
                        var n = OrdinaryOwnMetadataKeys(e, t), o = OrdinaryGetPrototypeOf(e);
                        if (null === o) return n;
                        var i = OrdinaryMetadataKeys(o, t);
                        if (i.length <= 0) return n;
                        if (n.length <= 0) return i;
                        for (var r = new p, a = [], s = 0, u = n; s < u.length; s++) {
                            var c = u[s];
                            r.has(c) || (r.add(c), a.push(c));
                        }
                        for (var d = 0, l = i; d < l.length; d++) {
                            c = l[d];
                            r.has(c) || (r.add(c), a.push(c));
                        }
                        return a;
                    }(e, t);
                })), e("getOwnMetadataKeys", (function getOwnMetadataKeys(e, t) {
                    if (!IsObject(e)) throw new TypeError;
                    return IsUndefined(t) || (t = ToPropertyKey(t)), OrdinaryOwnMetadataKeys(e, t);
                })), e("deleteMetadata", (function deleteMetadata(e, t, n) {
                    if (!IsObject(t)) throw new TypeError;
                    IsUndefined(n) || (n = ToPropertyKey(n));
                    var o = GetOrCreateMetadataMap(t, n, !1);
                    if (IsUndefined(o)) return !1;
                    if (!o.delete(e)) return !1;
                    if (o.size > 0) return !0;
                    var i = f.get(t);
                    return i.delete(n), i.size > 0 || f.delete(t), !0;
                }));
            }(o);
        }();
    }(x || (x = {}));
    var S = new Map, C = function() {
        function Container() {}
        return Container.Registe = function(e, t) {
            var n = this.processName(e.name);
            return S.set(n, window.Reflect.construct(e, this.buildParams(t))), S.get(n);
        }, Container.buildParams = function(e) {
            var t = [];
            return null == e || e.map((function(e) {
                t.push(e);
            })), t;
        }, Container.processName = function(e) {
            return e.toLowerCase();
        }, Container.Require = function(e) {
            var t = this, n = this.processName(e.name);
            if (S.has(n)) return S.get(n);
            var o, i = Reflect.getMetadata(I, e);
            return (null == i ? void 0 : i.length) && (o = i.map((function(e) {
                return t.Require(e);
            }))), this.Registe(e, o);
        }, Container.define = function(e, t) {
            var n, o = Reflect.getMetadata(T, e, t), i = null !== (n = Object.getOwnPropertyDescriptor(e, t)) && void 0 !== n ? n : {
                writable: !0,
                configurable: !0
            };
            i.value = this.Require(o), Object.defineProperty(e, t, i);
        }, Container;
    }(), T = "design:type", I = "design:paramtypes";
    function WandhiAuto(e, t) {
        C.define(e, t);
    }
    var z, O = function() {
        function PluginBase() {
            var e = this;
            this._unique = !0, this.Process = function() {
                e.loader(), e.run();
            }, this._appName = "base";
        }
        var e, t;
        return PluginBase.prototype.unique = function() {
            return this._unique;
        }, PluginBase.prototype.linkTest = function(e) {
            var t = this;
            e || (e = this.core.currentUrl());
            var n = !1;
            return this.rules.forEach((function(o, i) {
                return !o.test(e) || (n = !0, t.site = i, !1);
            })), n;
        }, PluginBase.prototype.appName = function() {
            return this._appName;
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== d && d) ? e : Object) ], PluginBase.prototype, "core", void 0), 
        __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (t = void 0 !== _ && _.Menu) ? t : Object) ], PluginBase.prototype, "menu", void 0), 
        PluginBase;
    }();
    !function(e) {
        e.All = "All", e.TaoBao = "TaoBao", e.TMall = "TMall", e.JingDong = "JingDong", 
        e.IQiYi = "IQiYi", e.YouKu = "YouKu", e.LeShi = "LeShi", e.TuDou = "TuDou", e.Tencent_V = "Tencent_V", 
        e.MangGuo = "MangGuo", e.SoHu = "SoHu", e.Acfun = "Acfun", e.BiliBili = "BiliBili", 
        e.M1905 = "M1905", e.PPTV = "PPTV", e.YinYueTai = "YinYueTai", e.WangYi = "WangYi", 
        e.Tencent_M = "Tencent_M", e.KuGou = "KuGou", e.KuWo = "KuWo", e.XiaMi = "XiaMi", 
        e.TaiHe = "TaiHe", e.QingTing = "QingTing", e.LiZhi = "LiZhi", e.MiGu = "MiGu", 
        e.XiMaLaYa = "XiMaLaYa", e.SXB = "SXB", e.BDY = "BDY", e.BDY1 = "BDY1", e.LZY = "LZY", 
        e.SuNing = "SuNing", e.Vp = "Vp";
    }(z || (z = {}));
    var Y, R = function(e) {
        function UpdateService() {
            var t = e.call(this) || this;
            return t.rules = new Map([ [ z.All, /(.*)/i ] ]), t._unique = !1, t;
        }
        return __extends(UpdateService, e), UpdateService.prototype.loader = function() {}, 
        UpdateService.prototype.run = function() {
            if (!a.get("isUpdate", !1)) {
                var e = new q(a.env.script.version);
                m.get_text(b.update_api).then((function(t) {
                    var n = new q(t.match(/@version[ ]*([\d\.]+)/)[1]);
                    if (n.compareTo(e) === Y.greater) {
                        var o = "\u65b0\u7248\u672c<span>" + n.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + b.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + b.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + b.home_url + '">\u67e5\u770b</a>';
                        k.info(o, "\u68c0\u67e5\u66f4\u65b0"), a.set("isUpdate", !0, 3600);
                    }
                }));
            }
        }, UpdateService;
    }(O), q = function() {
        function VersionCompar(e) {
            if (!/^[\d\.]+$/.test(e)) throw new Error("Invalid version string");
            this.parts = e.split(".").map((function(e) {
                return parseInt(e);
            })), this.versionString = e;
        }
        return VersionCompar.prototype.compareTo = function(e) {
            for (var t = 0; t < this.parts.length; ++t) {
                if (e.parts.length === t) return Y.greater;
                if (this.parts[t] !== e.parts[t]) return this.parts[t] > e.parts[t] ? Y.greater : Y.less;
            }
            return this.parts.length !== e.parts.length ? Y.less : Y.equal;
        }, VersionCompar.prototype.greaterThan = function(e) {
            return this.compareTo(e) === Y.greater;
        }, VersionCompar.prototype.lessThan = function(e) {
            return this.compareTo(e) === Y.less;
        }, VersionCompar.prototype.equals = function(e) {
            return this.compareTo(e) === Y.equal;
        }, VersionCompar;
    }();
    !function(e) {
        e[e.less = -1] = "less", e[e.equal = 0] = "equal", e[e.greater = 1] = "greater", 
        e[e.incomparable = NaN] = "incomparable";
    }(Y || (Y = {}));
    var j = function() {
        function EventHelper() {}
        return EventHelper.bind_click = function(e, t) {
            var n;
            null === (n = document.querySelector(e)) || void 0 === n || n.addEventListener("click", (function(e) {
                t();
            }));
        }, EventHelper;
    }(), A = function() {
        function BaseCoupon() {}
        return BaseCoupon.prototype.init_qrcode = function(e) {
            return new Promise((function(t) {
                QRCode.toCanvas(document.getElementById("vip-plugin-outside-coupons-qrcode-img"), e, {
                    errorCorrectionLevel: "H",
                    type: "image/jpeg",
                    quality: .3,
                    margin: 1,
                    width: 150
                }, (function(e) {
                    e || t(!0);
                }));
            }));
        }, BaseCoupon.prototype.init_coupon_info = function(e, t, n, o) {
            void 0 === o && (o = "");
            var i = "<p>\u79fb\u52a8\u7aef<span>\u5feb\u6377</span>\u8d2d\u4e70</p>", r = '<a class="vip-plugin-outside-coupons-button quan-none" href="javascript:void(0)">\u6253\u5f00\u624b\u673a\u626b\u4e00\u626b</a>', a = l.url;
            if (o) {
                var s = new Date;
                i = "<p>\u5238\u540e\u4ef7 <span>" + e + '</span> \u5143</p><p class="vip-plugin-outside-coupons-date">\uff08' + d.format(s, "yyyy-MM-dd") + " ~ " + n + "\uff09</p>", 
                r = '<a class="vip-plugin-outside-coupons-button quan-exits">\u626b\u7801\u9886' + t + "\u5143\u4f18\u60e0\u5238</a>", 
                a = o;
            }
            new Promise((function(e) {
                $(".vip-plugin-outside-coupons-title").html(i), $(".vip-plugin-outside-coupons-action").html(r), 
                e();
            })).then((function() {
                o && j.bind_click(".vip-plugin-outside-coupons-button", (function() {
                    d.open(a);
                }));
            }));
        }, BaseCoupon.prototype.default = function(e) {
            var t = this;
            void 0 === e && (e = ""), r.debug(e), this.init_qrcode("" == e ? l.url : e).then((function(e) {
                t.init_coupon_info(0, 0, "");
            }));
        }, BaseCoupon;
    }(), P = function(e) {
        function VpCoupon() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return __extends(VpCoupon, e), VpCoupon.prototype.init_html = function(e) {
            var t = this;
            return new Promise((function(n) {
                if ($(".FW-product.clearfix").length) d.appendTo(".FW-product.clearfix", e), n(!0); else {
                    var o = t;
                    d.lazyload((function() {
                        return o.init_html(e);
                    }), 1);
                }
            }));
        }, VpCoupon.prototype.init_coupons = function() {
            var e = this;
            b.queryVpCoupons(l.url, (function(t) {
                if (r.debug(t), t.code) if (t.data.has_coupon) {
                    var n = t.data, o = new Date(n.quan_time);
                    e.init_qrcode(decodeURIComponent(n.quan_link)).then((function(t) {
                        e.init_coupon_info(n.after_price, n.quan_price, "" + d.format(o, "yyyy-MM-dd"), decodeURIComponent(n.quan_link));
                    }));
                } else t.data.quan_link ? (e.default(t.data.quan_link), j.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    d.open(t.data.quan_link);
                }))) : e.default(); else e.default();
            }));
        }, VpCoupon;
    }(A), X = function(e) {
        function SuningCoupon() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return __extends(SuningCoupon, e), SuningCoupon.prototype.init_html = function(e) {
            var t = this;
            return new Promise((function(n) {
                if ($(".proinfo-container").length) d.appendTo(".proinfo-container", e), n(!0); else {
                    var o = t;
                    d.lazyload((function() {
                        return o.init_html(e);
                    }), 1);
                }
            }));
        }, SuningCoupon.prototype.init_coupons = function() {
            var e = this;
            b.querySnCoupons(l.url, (function(t) {
                if (r.debug(t), t.code) if (t.data.has_coupon) {
                    var n = t.data, o = new Date(n.quan_time);
                    e.init_qrcode(decodeURIComponent(n.quan_link)).then((function(t) {
                        e.init_coupon_info(n.after_price, n.quan_price, "" + d.format(o, "yyyy-MM-dd"), decodeURIComponent(n.quan_link));
                    }));
                } else t.data.quan_link ? (e.default(t.data.quan_link), j.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    d.open(t.data.quan_link);
                }))) : e.default(); else e.default();
            }));
        }, SuningCoupon;
    }(A), H = function(e) {
        function JdCoupon() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return __extends(JdCoupon, e), JdCoupon.prototype.init_html = function(e) {
            var t = this;
            return new Promise((function(n) {
                $(".product-intro").length ? (d.appendTo(".product-intro", e), n(!0)) : setTimeout(t.init_html, 2e3);
            }));
        }, JdCoupon.prototype.init_coupons = function() {
            var e, t, n = this, o = null === (t = null === (e = unsafeWindow.pageConfig) || void 0 === e ? void 0 : e.product) || void 0 === t ? void 0 : t.skuid;
            o ? b.queryJdCoupons(o, (function(e) {
                if (r.debug(e), e.code) if (e.data.has_coupon) {
                    var t = e.data, o = new Date(t.quan_time);
                    n.init_qrcode(decodeURIComponent(t.quan_link)).then((function(e) {
                        n.init_coupon_info(t.after_price, t.quan_price, "" + d.format(o, "yyyy-MM-dd"), decodeURIComponent(t.quan_link));
                    }));
                } else e.data.quan_link ? n.default(e.data.quan_link) : n.default(); else n.default();
            })) : this.default();
        }, JdCoupon;
    }(A), E = function(e) {
        function TaoCoupon() {
            return null !== e && e.apply(this, arguments) || this;
        }
        var t;
        return __extends(TaoCoupon, e), TaoCoupon.prototype.init_html = function(e) {
            return new Promise((function(t) {
                $("#J_DetailMeta").length ? d.appendTo("#J_DetailMeta", e) : d.appendTo("#detail", e + "<br/>"), 
                t(!0);
            }));
        }, TaoCoupon.prototype.init_coupons = function() {
            var e = this;
            b.queryCoupons(this.core.getPar("id"), (function(t) {
                var n;
                if (t.code && (null === (n = t.data) || void 0 === n ? void 0 : n.length) > 0) {
                    var o = t.data[0], i = new Date(o.quan_time);
                    e.init_qrcode(decodeURIComponent(o.quan_link)).then((function(t) {
                        e.init_coupon_info(o.after_price, o.quan_price, "" + d.format(i, "yyyy-MM-dd"), decodeURIComponent(o.quan_link));
                    }));
                } else e.init_qrcode(l.url).then((function(t) {
                    e.init_coupon_info(0, 0, "");
                }));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (t = void 0 !== d && d) ? t : Object) ], TaoCoupon.prototype, "core", void 0), 
        TaoCoupon;
    }(A), U = function(e) {
        function DefCoupon() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return __extends(DefCoupon, e), DefCoupon.prototype.init_html = function(e) {
            return new Promise((function(e) {
                e(!1);
            }));
        }, DefCoupon.prototype.init_coupons = function() {}, DefCoupon;
    }(A), B = function B() {};
    styleInject("#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none\n}\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}        \n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img {\n    margin: 0 auto\n}        \n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}        \n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}        \n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}        \n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}        \n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n#vip-plugin-outside .vip-plugin-outside-history ,#vip-plugin-outside-chart-body{\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}    \n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    height: 100%\n}");
    var D = function D() {
        this.price = 0, this.time = 0;
    }, L = function(e) {
        function GwdService() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rules = new Map([ [ z.TMall, /detail.tmall.com\/item.htm/i ], [ z.TaoBao, /item.taobao.com/i ], [ z.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i ], [ z.SuNing, /product.suning.com/i ], [ z.Vp, /detail.vip.com/i ] ]), 
            t._appName = "GwdService", t.factory = new U, t;
        }
        return __extends(GwdService, e), GwdService.prototype.loader = function() {}, GwdService.prototype.run = function() {
            this.injectHistory();
        }, GwdService.prototype.injectHistory = function() {
            var e = this;
            switch (r.debug(this.site), this.site) {
              case z.TaoBao:
              case z.TMall:
                this.factory = new E;
                break;

              case z.JingDong:
                this.factory = new H;
                break;

              case z.SuNing:
                this.factory = new X;
                break;

              case z.Vp:
                this.factory = new P;
                break;

              default:
                this.factory = new U;
            }
            this.factory.init_html(this.getHistoryHtml()).then((function(t) {
                t && e.InitPriceHistory(), e.factory.init_coupons && e.factory.init_coupons();
            }));
        }, GwdService.prototype.InitPriceHistory = function() {
            var e = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d"), 
            b.queryHistoryV4(l.url, this.site.toString(), (function(t) {
                var n = "";
                r.debug(t), "price_status" in t ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), e.theme()).setOption(e.getChartOption(t))) : n = "\u672a\u67e5\u5230\u5386\u53f2\u6570\u636e", 
                e.chartMsg(n);
            }));
        }, GwdService.prototype.getHistoryHtml = function() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode"><canvas id="vip-plugin-outside-coupons-qrcode-img"></canvas></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                </div>';
        }, GwdService.prototype.chartMsg = function(e) {
            $(".vip-plugin-outside-history-tip").html(e);
        }, GwdService.prototype.getChartOption = function(e) {
            var t, n, o = e.analysis.tip, i = e.analysis.promo_days[e.analysis.promo_days.length - 1], r = o + "\uff1a{red|\uffe5" + i.price + "} ( {red|" + i.date + "} )", a = new D, s = new D;
            s.price = Number.MAX_SAFE_INTEGER;
            var u = new B;
            (u = {
                title: {
                    left: "center",
                    subtext: r,
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
                    formatter: function(e) {
                        e = e[0];
                        var t = new Date(e.name), n = t.getFullYear(), o = t.getMonth() + 1, i = t.getDate(), r = o.toString(), a = i.toString();
                        return o < 10 && (r = "0" + o), i < 10 && (a = "0" + i), "\u65e5\u671f\uff1a" + n + "-" + r + "-" + a + "<br/>\u4ef7\u683c\uff1a\uffe5" + e.value[1].toFixed(2) + ("" == e.value[2] ? "" : "<br/>" + e.value[2]);
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
                    data: function(e) {
                        var t = [];
                        return e.nopuzzle_promo.forEach((function(e) {
                            e.humanPrice = e.price / 100, e.price > a.price && (a = e), e.price < s.price && (s = e);
                            var n = {
                                name: 1e3 * e.time,
                                value: [ 1e3 * e.time, e.humanPrice, e.msg ? e.msg.coupon ? e.msg.coupon : e.msg.promotion : "" ]
                            };
                            t.push(n);
                        })), t;
                    }(e),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: 10 * Math.floor(.9 * s.humanPrice / 10),
                max: 10 * Math.ceil(1.1 * a.humanPrice / 10)
            };
            var c = null === (t = u.series) || void 0 === t ? void 0 : t.pop();
            return c.markPoint = {
                data: [ {
                    value: s.humanPrice,
                    coord: [ 1e3 * s.time, s.humanPrice ],
                    name: "\u6700\u5c0f\u503c",
                    itemStyle: {
                        color: "green"
                    }
                }, {
                    value: a.humanPrice,
                    coord: [ 1e3 * a.time, a.humanPrice ],
                    name: "\u6700\u5927\u503c",
                    itemStyle: {
                        color: "red"
                    }
                } ]
            }, null === (n = u.series) || void 0 === n || n.push(c), u.dataZoom = [ {
                type: "inside",
                start: 0,
                end: 100
            } ], u;
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
        }, GwdService;
    }(O), G = function(e) {
        function TaoBaoService() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rules = new Map([ [ z.TaoBao, /taobao.com/i ], [ z.TMall, /tmall/i ] ]), 
            t.UrlTag = "Wandhi_qLink", t;
        }
        var t;
        return __extends(TaoBaoService, e), TaoBaoService.prototype.getRules = function() {
            throw new Error("Method not implemented.");
        }, TaoBaoService.prototype.loader = function() {
            d.appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
        }, TaoBaoService.prototype.run = function() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }, TaoBaoService.prototype.init = function() {
            var e, t = this, n = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";
            $("#J_LinkBasket").parent().parent().prepend(n), $(".J_LinkAdd").parent().parent().prepend(n), 
            (null === (e = this.rules.get(z.TaoBao)) || void 0 === e ? void 0 : e.test(this.core.currentUrl())) ? $("#wandhi_table").addClass("wandhi_tab_taobao") : $("#wandhi_table").addClass("wandhi_tab_tmall"), 
            b.queryCoupons(this.core.getPar("id"), (function(e) {
                return t.initElement(e);
            }));
        }, TaoBaoService.prototype.initElement = function(e) {
            var t;
            $("#wandhi_table tbody tr").remove();
            var n = "";
            e.code && (null === (t = e.data) || void 0 === t ? void 0 : t.length) > 0 ? e.data.forEach((function(e) {
                n += "<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>";
            })) : n = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(n);
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (t = void 0 !== L && L) ? t : Object) ], TaoBaoService.prototype, "historyService", void 0), 
        TaoBaoService;
    }(O), V = function(e) {
        function BiliImgService() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rules = new Map([ [ z.BiliBili, /bilibili.com\/video\/[av|bv]*/i ] ]), 
            t;
        }
        return __extends(BiliImgService, e), BiliImgService.prototype.loader = function() {
            d.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            d.aotulazyload((function() {
                return !!($(".video-data").length && $(".bilibili-player-video-info-people-number").length && $.isNumeric($(".coin").text().replace("\u4e07", "").trim()));
            }), (function() {
                BiliImgService.add_img_btn(), BiliImgService.add_down_btn(), BiliImgService.add_triple_btn();
            }), 1);
        }, BiliImgService.add_img_btn = function() {
            $(".video-data").last().append(BiliImgService.btn), $("body").on("click", "#findimg", (function() {
                var e = unsafeWindow.__INITIAL_STATE__.videoData.aid;
                b.queryBiliImg(e, (function(e) {
                    0 === e.code ? f.open("\u5c01\u9762\u9171", '<img src="' + e.data.pic + '" style="width: 705px;height: 400px;" alt="\u5c01\u9762">', [ "725px", "400px" ]) : f.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                }));
            }));
        }, BiliImgService.add_down_btn = function() {
            $(".video-data").last().append(BiliImgService.down), $("body").on("click", "#downvideo", (function() {
                var e, t, n = unsafeWindow.__INITIAL_STATE__.videoData.aid, o = null !== (t = null === (e = unsafeWindow.__INITIAL_STATE__.cidMap[n]) || void 0 === e ? void 0 : e.cid) && void 0 !== t ? t : unsafeWindow.__INITIAL_STATE__.videoData.cid, i = n.toString() + o.toString() + "MDD";
                if (r.debug([ n, o ]), n && o) {
                    var s = a.get(i, !1);
                    s ? (s = s, f.confim("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + s.data.accept_description[s.data.durl[0].order] + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function(e) {
                        window.open(s.data.durl[0].url);
                    }), !0)) : b.queryBiliDown(n, o, (function(e) {
                        var t;
                        "" != (null === (t = e.data) || void 0 === t ? void 0 : t.durl[0].url) ? (a.set(i, e, 60), 
                        f.confim("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + e.data.accept_description[e.data.durl[0].order] + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function(t) {
                            window.open(e.data.durl[0].url);
                        }), !0)) : f.error("\u5565\u4e5f\u6ca1\u67e5\u7740,\u5e26\u7740\u89c6\u9891\u5730\u5740\u7ed9\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\u5427~");
                    }));
                } else f.error("\u6682\u4e0d\u652f\u6301\u5f53\u524d\u89c6\u9891\uff0c\u5982\u6709\u7591\u95ee\u8bf7\u5e26\u4e0a\u94fe\u63a5\u8be2\u95ee\u4f5c\u8005");
            }));
        }, BiliImgService.add_triple_btn = function() {
            $(".video-data").last().append(BiliImgService.tripleClick), $("body").on("click", "#tripleClick", (function() {
                [ ".like", ".coin", ".collect" ].forEach((function(e) {
                    $(e).trigger("click");
                }));
            }));
        }, BiliImgService.decrypt = function(e) {
            return o.default.AES.decrypt(e, o.default.enc.Latin1.parse(d.decode("YmVpYmVpZG91eXUxMjM0NQ==")), {
                iv: o.default.enc.Latin1.parse(d.decode("YmVpYmVpMTIzNDU2Nzg5MA==")),
                mode: o.default.mode.CBC,
                adding: o.default.pad.ZeroPadding
            }).toString(o.default.enc.Utf8);
        }, BiliImgService.btn = '\n    <span id="findimg" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u83b7\u53d6\u5c01\u9762\n    </span>', 
        BiliImgService.down = '\n    <span id="downvideo" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e0b\u8f7d\u89c6\u9891\n    </span>', 
        BiliImgService.tripleClick = '\n    <span id="tripleClick" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e00\u952e\u4e09\u8fde\n    </span>', 
        BiliImgService;
    }(O), N = function(e) {
        function MovieService() {
            var t = e.call(this) || this;
            return t.rules = new Map([ [ z.YouKu, /youku/i ], [ z.IQiYi, /iqiyi/i ], [ z.LeShi, /le.com/i ], [ z.Tencent_V, /v.qq/i ], [ z.TuDou, /tudou/i ], [ z.MangGuo, /mgtv/i ], [ z.SoHu, /sohu/i ], [ z.Acfun, /acfun/i ], [ z.BiliBili, /bilibili/i ], [ z.M1905, /1905.com/i ], [ z.PPTV, /pptv.com/i ], [ z.YinYueTai, /yinyuetai/ ] ]), 
            t.menu = new _.Menu, t;
        }
        return __extends(MovieService, e), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && d.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
        }, MovieService.prototype.run = function() {
            this.menu.Init([ {
                title: "\u7535\u5f71\u641c\u7d22",
                show: "\u7535\u5f71<br>\u641c\u7d22",
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
                d.open("http://tv.wandhi.com/go.html?url=" + encodeURIComponent(window.location.href));
            })), $("body").on("click", "[data-cat=search]", (function() {
                d.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                d.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                d.open("https://t.cn/A6LoYnHT");
            }));
        }, MovieService;
    }(O), W = function(e) {
        function JdService() {
            var t = e.call(this) || this;
            return t._appName = "JdService", t.rules = new Map([ [ z.JingDong, /item.jd/i ] ]), 
            t;
        }
        var t;
        return __extends(JdService, e), JdService.prototype.loader = function() {
            this.historyService.linkTest() && this.historyService.Process();
        }, JdService.prototype.run = function() {
            var e = $(".sku-name").text().trim();
            $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>'), 
            $(".btn-yhj").on("click", (function() {
                d.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(e));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (t = void 0 !== L && L) ? t : Object) ], JdService.prototype, "historyService", void 0), 
        JdService;
    }(O), K = function() {
        function UrlHelper() {}
        return UrlHelper.Bind = function(e, t, n) {
            $(e).click((function() {
                d.openUrl($(this).data("key"));
            }));
        }, UrlHelper.urlEncode = function(e) {
            return encodeURIComponent(e);
        }, UrlHelper.urlDecode = function(e) {
            return decodeURIComponent(e);
        }, UrlHelper;
    }(), J = function(e) {
        function MusicService() {
            var t = e.call(this) || this;
            return t.rules = new Map([ [ z.WangYi, /163(.*)song/i ], [ z.Tencent_M, /y.QQ(.*)song/i ], [ z.KuGou, /kugou.com\/song\/*/i ], [ z.KuWo, /kuwo(.*)yinyue/i ], [ z.XiaMi, /xiami/i ], [ z.TaiHe, /taihe.com/i ], [ z.QingTing, /qingting/i ], [ z.LiZhi, /lizhi/i ], [ z.MiGu, /migu/i ], [ z.XiMaLaYa, /ximalaya/i ] ]), 
            t.menu = new _.Menu, t;
        }
        return __extends(MusicService, e), MusicService.prototype.loader = function() {
            d.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
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
                if (/ximalaya/i.test(l.url)) if (__INITIAL_STATE__ && null != __INITIAL_STATE__.SoundDetailPage) d.open("http://music.wandhi.com/?id=" + __INITIAL_STATE__.SoundDetailPage.trackId + "&type=ximalaya"); else {
                    layer.closeAll();
                    var e = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                    $.each(__INITIAL_STATE__.AlbumDetailTrackList.tracksInfo.tracks, (function(t, n) {
                        e += '<li class="dOi2"><a href="http://music.wandhi.com/?id=' + n.trackId + '&type=ximalaya" target="_blank">' + n.title + "</a></li>";
                    })), e += "</ul></div>", layer.open({
                        type: 1,
                        area: [ "auto", "30%" ],
                        title: "\u4e3a\u4f60\u627e\u5230\u4e86\u8fd9\u4e9b\u66f2\u76ee\u89e3\u6790\u2026\u2026\u4ec0\u4e48\uff1f\u6211\u4e11\uff1f\u4ee5\u540e\u518d\u8bf4\u5427",
                        shade: .6,
                        maxmin: !1,
                        anim: 2,
                        content: e
                    });
                } else /taihe.com/i.test(l.url) ? d.open("http://music.wandhi.com/?url=" + K.urlEncode(l.url.replace("taihe", "baidu"))) : d.open("http://music.wandhi.com/?url=" + K.urlEncode(l.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                d.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                d.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                d.open("https://t.cn/A6LoYnHT");
            }));
        }, MusicService;
    }(O), F = function(e) {
        function StuService() {
            var t = e.call(this) || this;
            return t.rules = new Map([ [ z.SXB, /shangxueba.com\/ask\/.*html/i ] ]), t;
        }
        return __extends(StuService, e), StuService.prototype.loader = function() {
            "undefined" == typeof $ && d.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js"), 
            d.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
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
                b.querySbx($("#Hidd_id").val(), (function(e) {
                    e.status ? (f.open("\u7b54\u6848", e.msg), b.sbxFeedback(dataid, e.msg)) : "wronganhao" == e.msg ? (f.prompt("\u53e3\u4ee4\u9519\u8bef\uff0c\u8bf7\u5c06\u5f39\u51fa\u7684\u9875\u9762\u4e2d\u7684\u53e3\u4ee4\u586b\u5165\u540e\u91cd\u8bd5\uff01", a.get("sxb_anhao", ""), (function(e) {
                        a.set("sxb_anhao", e), f.info("\u8bf7\u518d\u6b21\u70b9\u51fb\u67e5\u770b\u7b54\u6848\u6309\u94ae");
                    }), 4), d.open("http://www.lelunwen.com/e/action/ListInfo/?classid=45")) : f.confim("\u6ca1\u67e5\u5230\u7b54\u6848", "\u8981\u4e0d\u8981\u8df3\u8f6c\u5230\u67e5\u8be2\u9875\u770b\u770b\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function() {
                        d.open(l.url.replace("shangxueba", "shangxueba365"));
                    }));
                }));
            })), $("body").on("click", "[data-cat=tb]", (function() {
                d.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                d.open("https://t.cn/A6LoYnHT");
            }));
        }, StuService;
    }(O), Q = function() {
        function OneKeyVipInjection() {
            this.plugins = new Array, this.plugins = [ C.Require(R), C.Require(V), C.Require(N), C.Require(G), C.Require(W), C.Require(J), C.Require(F), C.Require(L) ], 
            r.info("container loaded");
        }
        return OneKeyVipInjection.prototype.Init = function() {
            this.plugins.every((function(e) {
                return !e.linkTest() || (new Promise((function(e) {
                    e(1);
                })).then(e.Process), r.debug("element [" + e.appName() + "];unique:[" + e.unique() + "]"), 
                !e.unique());
            }));
        }, OneKeyVipInjection;
    }();
    r.level = i.info, C.Require(Q).Init();
}));
