// ==UserScript==
// @name         【玩的嗨】VIP工具箱,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,上学吧答案获取等众多功能聚合 2020-06-20 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.2.6
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍：1、Vip视频解析；2、一站式音乐搜索解决方案；3、bilibili视频封面获取；4、上学吧答案查询(接口偶尔抽风)；5、商品历史价格展示(一次性告别虚假降价)；6、优惠券查询
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
// @license      MIT
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      shangxueba365.com
// @connect      api.wandhi.com
// @connect      cdn.jsdelivr.net
// @connect      tool.manmanbuy.com
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
// ==/UserScript==
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("vue"), require("reflect-metadata")) : "function" == typeof define && define.amd ? define([ "vue", "reflect-metadata" ], e) : e((t = t || self).Vue);
}(this, (function(t) {
    "use strict";
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    var extendStatics = function(t, e) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function __extends(t, e) {
        function __() {
            this.constructor = t;
        }
        extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, 
        new __);
    }
    function __decorate(t, e, n, o) {
        var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
        return r > 3 && a && Object.defineProperty(e, n, a), a;
    }
    function __metadata(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    var e, n = function n() {
        this.max = 0, this.price_detail = new Array;
    }, o = function o() {}, i = function() {
        function Core() {
            this.topUrl = top.window.location.href, this.url = this.currentUrl();
        }
        return Core.appendTo = function(t, e) {
            $(t).append(e);
        }, Core.addUrl = function(t, e) {
            GM_setValue(t, e);
        }, Core.openUrl = function(t) {
            this.open(GM_getValue(t));
        }, Core.prototype.getPar = function(t, e) {
            void 0 === e && (e = window.location.search);
            var n = e.match(new RegExp("[?&]" + t + "=([^&]+)", "i"));
            return null == n || n.length < 1 ? "" : n[1];
        }, Core.appendCss = function(t) {
            var e = document.createElement("link");
            e.type = "text/css", e.rel = "stylesheet", e.href = t, Core.head.appendChild(e);
        }, Core.appendCssContent = function(t) {
            var e = document.createElement("style");
            e.innerHTML = t, Core.head.appendChild(e);
        }, Core.prototype.bodyAppendCss = function(t) {
            $("body").append($('<link rel="stylesheet" href="' + t + '">'));
        }, Core.bodyAppend = function(t) {
            $("body").append(t);
        }, Core.appendJs = function(t) {
            var e = document.createElement("script");
            e.type = "text/javascript", e.src = t, this.head.appendChild(e);
        }, Core.prototype.bodyAppendJs = function(t) {
            $("body").append($('<script type="text/javascript" src="' + t + '"><\/script>'));
        }, Core.prototype.currentUrl = function() {
            return window.location.href;
        }, Core.format = function(t, e) {
            void 0 === e && (e = "yyyy-MM-dd hh:mm:ss");
            var n = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            for (var o in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), 
            n) new RegExp("(" + o + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o]).substr(("" + n[o]).length)));
            return e;
        }, Core.prototype.Msg = function(t) {
            return layer.msg(t, {
                icon: 5
            });
        }, Core.prototype.showContent = function(t, e) {
            return layer.open({
                type: 1,
                title: t,
                shade: 0,
                content: e
            });
        }, Core.prototype.close = function(t) {
            layer.close(t);
        }, Core.prototype.closeAll = function() {
            layer.closeAll();
        }, Core.open = function(t, e) {
            void 0 === e && (e = !1), GM_openInTab(t, e);
        }, Core.uuid = function(t, e) {
            void 0 === t && (t = 10), void 0 === e && (e = 16);
            var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [];
            if (e = e || o.length, t) for (n = 0; n < t; n++) i[n] = o[0 | Math.random() * e]; else {
                var r = void 0;
                for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", n = 0; n < 36; n++) i[n] || (r = 0 | 16 * Math.random(), 
                i[n] = o[19 == n ? 3 & r | 8 : r]);
            }
            return i.join("");
        }, Core.head = document.getElementsByTagName("head")[0], Core.top_url = top.window.location.href, 
        Core;
    }(), r = function() {
        function Convert() {}
        return Convert.genterData = function(t) {
            var e = new n;
            return e.date = i.format(new Date(Number.parseInt(t.lowerDate.match(/[0-9]{13}/)[0]) + 800), "yyyy-MM-dd"), 
            e.min = t.lowerPrice, e.max = e.min, e.max_date = e.date, e.current = t.currentPrice.toString(), 
            e.mark = t.changPriceRemark, t.listPrice.forEach((function(t, n) {
                var r = new o;
                r.timestamp = Number.parseInt(t.dt.match(/[0-9]{13}/)[0]) + 800, r.time = i.format(new Date(r.timestamp), "yyyy-MM-dd"), 
                r.price = t.pr, r.mark = t.yh, e.max < t.pr && (e.max = t.pr, e.max_date = r.time), 
                e.price_detail.push(r);
            })), e;
        }, Convert;
    }(), a = function() {
        function Logger() {}
        return Logger.log = function(t, e) {}, Logger.debug = function(t) {
            this.log(t, e.debug);
        }, Logger.info = function(t) {
            this.log(t, e.info);
        }, Logger.warn = function(t) {
            this.log(t, e.warn);
        }, Logger.error = function(t) {
            this.log(t, e.error);
        }, Logger;
    }();
    !function(t) {
        t[t.debug = 0] = "debug", t[t.info = 1] = "info", t[t.warn = 2] = "warn", t[t.error = 3] = "error";
    }(e || (e = {}));
    var s, c, u = function() {
        function Config() {}
        return Object.defineProperty(Config, "env", {
            get: function() {
                return GM_info;
            },
            enumerable: !1,
            configurable: !0
        }), Config.get = function(t, e) {
            void 0 === e && (e = "");
            var n = GM_getValue(this.encode(t), e);
            if (n) {
                var o = JSON.parse(n);
                if (-1 == o.exp || o.exp > (new Date).getTime()) return o.value;
            }
            return e;
        }, Config.set = function(t, e, n) {
            void 0 === n && (n = -1);
            var o = {
                key: t,
                value: e,
                exp: -1 == n ? n : (new Date).getTime() + 1e3 * n
            };
            GM_setValue(this.encode(t), JSON.stringify(o));
        }, Config.decode = function(t) {
            return atob(t);
        }, Config.encode = function(t) {
            return btoa(t);
        }, Config;
    }(), l = function() {
        function Runtime() {}
        return Object.defineProperty(Runtime, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Runtime;
    }(), d = (function() {
        function HttpRequest(t) {
            this.headers = new Map, this.url = t.url, this.method = t.methodType, this.dataType = t.dataType, 
            this._option = t;
        }
        HttpRequest.prototype.onload = function(t) {
            this._option.onSuccess(t);
        }, HttpRequest.prototype.onerror = function() {
            this.onerror();
        }, HttpRequest.prototype.setQueryData = function(t) {
            if (t instanceof FormData) this.data = t; else {
                var e = new FormData;
                for (var n in t) e.append(n, t[n]);
                this.data = e;
            }
        }, Object.defineProperty(HttpRequest.prototype, "onLoad", {
            get: function() {
                return this.onSuccess;
            },
            enumerable: !1,
            configurable: !0
        });
    }(), function() {
        function AjaxOption(t, e, n, o, i) {
            void 0 === e && (e = "GET"), void 0 === i && (i = new Map), this.url = t, this.methodType = e, 
            this.onSuccess = o, this.onError = o, this.data = n, this.headers = i;
        }
        return AjaxOption.prototype.getData = function() {
            if (this.data instanceof FormData) return this.data;
            if (this.data instanceof Map) {
                var t = new FormData;
                return this.data.forEach((function(e, n) {
                    t.append(n, e);
                })), t;
            }
            var e = new FormData;
            for (var n in this.data) e.append(n, this.data[n]);
            return e;
        }, AjaxOption;
    }()), p = function() {
        function Alert() {}
        return Alert.open = function(t, e, n, o, i, r) {
            return void 0 === n && (n = [ "400px", "300px" ]), void 0 === o && (o = 0), void 0 === i && (i = "lb"), 
            void 0 === r && (r = !0), layer.open({
                type: 1,
                title: t,
                area: n,
                shade: o,
                offset: i,
                maxmin: r,
                content: e
            });
        }, Alert.info = function(t) {
            return layer.msg(t, {
                time: 2e3
            });
        }, Alert.error = function(t) {
            return layer.msg(t, {
                icon: 5,
                time: 2e3
            });
        }, Alert.confim = function(t, e, n, o) {
            return layer.open({
                type: 1,
                title: t || !1,
                closeBtn: !0,
                shade: .8,
                id: "LAY_layuipro",
                resize: !1,
                btn: n,
                btnAlign: "c",
                moveType: 1,
                content: '<div style="padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' + e + "</div>",
                yes: function(t) {
                    o(t);
                }
            });
        }, Alert.prompt = function(t, e, n, o, i) {
            void 0 === i && (i = 0), layer.prompt({
                title: t,
                value: e,
                formType: i
            }, (function(t, e, o) {
                n(t), layer.close(e);
            }));
        }, Alert.close = function(t) {
            layer.close(t);
        }, Alert.closeAll = function() {
            layer.closeAll();
        }, Alert.loading = function(t, e, n) {
            return void 0 === t && (t = 1), void 0 === e && (e = 10), void 0 === n && (n = .3), 
            layer.load(t, {
                shade: n,
                time: 1e3 * e
            });
        }, Alert;
    }(), f = function() {
        function Http() {}
        return Http.ajax = function(t) {
            var e, n, o, r;
            t.headers.set("User-Agent", "Mozilla/4.0 (compatible) Greasemonkey"), t.headers.set("Accept", "application/atom+xml,application/xml,text/xml"), 
            t.headers.set("version", u.env.script.version), t.headers.set("auth", null !== (e = u.env.script.author) && void 0 !== e ? e : ""), 
            t.headers.set("namespace", null !== (n = u.env.script.namespace) && void 0 !== n ? n : ""), 
            GM_xmlhttpRequest({
                url: t.url,
                method: t.methodType,
                headers: {
                    version: u.env.script.version,
                    auth: null !== (o = u.env.script.author) && void 0 !== o ? o : "",
                    namespace: null !== (r = u.env.script.namespace) && void 0 !== r ? r : ""
                },
                data: t.getData(),
                timeout: 1e4,
                onload: function(e) {
                    var n, o;
                    try {
                        null === (n = t.onSuccess) || void 0 === n || n.call(t, "POST" == t.methodType ? JSON.parse(e.responseText) : e.responseText);
                    } catch (n) {
                        p.confim("", '                                        \n                        <h1>\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u65e5\u5fd7\uff1a</span><br>\n                        <p>' + n + '</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(e.responseText) + '</p>                        \n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + u.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + u.env.script.version + "</p>\n                        <p>Url\uff1a" + l.url + "</p>\n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                            i.open("https://gitee.com/ixysy/OneKeyVip/issues");
                        })), null === (o = t.onSuccess) || void 0 === o || o.call(t, null);
                    }
                },
                onerror: function(e) {
                    var n;
                    p.confim("", '              \n                        <h1>\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(e.responseText) + '</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + u.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + u.env.script.version + "</p>\n                        <p>Url\uff1a" + l.url + "</p>           \n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                        i.open("https://gitee.com/ixysy/OneKeyVip/issues");
                    })), null === (n = t.onError) || void 0 === n || n.call(t, e);
                }
            });
        }, Http.getData = function(t, e) {
            $.getJSON(t, (function(t) {
                e(t);
            }));
        }, Http.post = function(t, e) {
            var n = p.loading();
            return new Promise((function(o) {
                Http.ajax(new d(t, "POST", e, (function(t) {
                    p.close(n), o(t);
                })));
            })).finally((function() {
                return p.close(n);
            }));
        }, Http.get = function(t, e) {
            return void 0 === e && (e = new Map), new Promise((function(n) {
                Http.ajax(new d(t, "GET", e, (function(t) {
                    var e, o = null !== (e = JSON.parse(t)) && void 0 !== e ? e : t;
                    n(o);
                })));
            }));
        }, Http.get_text = function(t) {
            return new Promise((function(e) {
                Http.ajax(new d(t, "GET", new Map, (function(t) {
                    e(t);
                })));
            }));
        }, Http;
    }(), m = function() {
        function Result() {}
        return Result.prototype.constructorq = function() {}, Result;
    }(), h = (function(t) {
        function StuResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(StuResult, t);
    }(m), function(t) {
        function StrResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(StrResult, t);
    }(m), function(t) {
        function HistoryResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(HistoryResult, t), HistoryResult;
    }(m)), g = function() {
        function Route() {
            this.queryTao = "";
        }
        return Object.defineProperty(Route, "apiRoot", {
            get: function() {
                return "https://api.wandhi.com/api";
            },
            enumerable: !1,
            configurable: !0
        }), Route.baseApi = function(t, e, n) {
            f.post(Route.apiRoot + t, e).then((function(t) {
                n(t);
            }));
        }, Route.querySbx = function(t, e) {
            var n = this;
            "" !== u.get(this.sxb_key, "") ? this.query365(t, u.get(this.sxb_key), e) : this.queryValue("sxb_anhao", (function(o) {
                n.query365(t, o.data, e);
            }));
        }, Route.sbxFeedback = function(t, e) {
            this.baseApi("/tools/record", new Map([ [ "id", t ], [ "data", e ], [ "anhao", u.get(this.sxb_key) ] ]), (function() {}));
        }, Route.query365 = function(t, e, n) {
            var o = u.get("sxb_api");
            o ? f.post(o, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + t + ".html" ], [ "anhao", e ] ])).then((function(t) {
                n(t);
            })) : this.queryValue("sxb_api", (function(n) {
                u.set("sxb_api", n.data, 864e5), f.post(n.data, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + t + ".html" ], [ "anhao", e ] ]));
            }));
        }, Route.queryValue = function(t, e) {
            this.baseApi(Route.config, new Map([ [ "key", t ] ]), e);
        }, Route.queryHistory = function(t, e, n) {
            this.baseApi(this.history, new Map([ [ "url", t ], [ "type", e ] ]), n);
        }, Route.queryHistoryv1 = function(t, e, n) {
            var o = this;
            this.baseApi(this.historyv1, new Map([ [ "url", t ] ]), (function(i) {
                a.debug(i), i.code ? f.get(i.data).then((function(t) {
                    var e = new h;
                    e.code = 1, e.data = r.genterData(t), a.debug(e), n(e);
                })) : o.queryHistory(t, e, n);
            }));
        }, Route.queryBiliImg = function(t) {
            this.baseApi(this.bili, new Map([ [ "url", l.url ] ]), t);
        }, Route.queryCoupons = function(t, e) {
            this.baseApi(this.coupons, new Map([ [ "id", t ] ]), e);
        }, Route.queryJdCoupons = function(t, e) {
            Route.baseApi(Route.jd_coupons, new Map([ [ "item_id", t ] ]), e);
        }, Route.update_api = "https://cdn.jsdelivr.net/gh/maxzhang666/OneKeyVip/OneKeyVip.user.js?t=" + i.uuid(), 
        Route.home_url = "https://wiki.wandhi.com", Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", 
        Route.install_url_two = "https://tools.wandhi.com/scripts", Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", 
        Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1/", Route.bili = "/tools/bili", Route.coupons = "/tb/infos/", 
        Route.jd_coupons = "/jd/info", Route;
    }(), y = function() {
        function Toast(t, e, n) {
            this.creationTime = new Date, this.message = t, this.type = n, this.title = e, this.duration = 3e3, 
            this.randomKey = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1));
        }
        return Toast.prototype.show = function() {
            var t = this;
            Toast.containerVM.cards.splice(0, 0, this), void 0 !== this.duration && -1 != this.duration && setTimeout((function() {
                return t.dismiss();
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
            this.element = new t({
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
        }, Toast.internalShow = function(t, e, n, o) {
            var i = new Toast(t, e, o);
            return i.duration = n, i.show(), i;
        }, Toast.show = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, s.Default);
        }, Toast.info = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, s.Info);
        }, Toast.success = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, s.Success);
        }, Toast.error = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, s.Error);
        }, Toast;
    }();
    !function(t) {
        t.Default = "default", t.Info = "info", t.Success = "success", t.Error = "error";
    }(s || (s = {})), function(t) {
        var e = function() {
            function Menu() {
                this.core = new i, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelecter = "#Wandhi-nav";
            }
            return Menu.prototype.loader = function() {
                i.appendCssContent(this.getCss());
            }, Menu.prototype.getBody = function(t) {
                return '<svg width="0" height="0"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite></filter></defs></svg><div class="aside-nav bounceInUp animated" id="Wandhi-nav"><label for="" class="aside-menu" title="\u6309\u4f4f\u62d6\u52a8">VIP</label>' + t + "</div>";
            }, Menu.prototype.getCss = function() {
                return 'html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:"Helvetica Neue",Helvetica,"Microsoft YaHei",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}';
            }, Menu.prototype.Init = function(t, e) {
                var n = this;
                if (!this.site.test(this.core.topUrl)) {
                    this.loader();
                    var o = "";
                    t.forEach((function(t, e) {
                        o += '<a href="javascript:void(0)" title="' + t.title + '" data-cat="' + t.type + '" class="menu-item menu-line menu-' + n.menusClass[e] + '">' + t.show + "</a>";
                    })), i.bodyAppend(this.getBody(o)), /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                    var r = {
                        down: !1,
                        x: 0,
                        y: 0,
                        winWid: 0,
                        winHei: 0,
                        clientX: 0,
                        clientY: 0
                    }, a = $(this.menuSelecter)[0];
                    $("body").on("mousedown", "#Wandhi-nav", (function(t) {
                        var getCss = function(t, e) {
                            var n, o, i;
                            return null !== (o = null === (n = document.defaultView) || void 0 === n ? void 0 : n.getComputedStyle(t, null)[e]) && void 0 !== o ? o : null !== (i = t.currentStyle) && void 0 !== i ? i : t.currentStyle[e];
                        };
                        r.down = !0, r.clientX = t.clientX, r.clientY = t.clientY, r.x = parseInt(getCss(this, "left")), 
                        r.y = parseInt(getCss(this, "top")), r.winHei = $(window).height(), r.winWid = $(window).width(), 
                        $(document).on("mousemove", (function(t) {
                            var e = t.clientX - r.clientX, n = t.clientY - r.clientY;
                            (a = a || $("#Wandhi-nav")[0]).style.top = r.y + n + "px", a.style.left = r.x + e + "px";
                        }));
                    })).on("mouseup", "#Wandhi-nav", (function() {
                        r.down = !1, $(document).off("mousemove");
                    })), e.call(this);
                }
            }, Menu;
        }();
        t.Menu = e;
    }(c || (c = {}));
    var v = new Map, b = function() {
        function Container() {}
        return Container.Registe = function(t, e) {
            var n = this.processName(t.name);
            return v.set(n, window.Reflect.construct(t, this.buildParams(e))), v.get(n);
        }, Container.buildParams = function(t) {
            var e = [];
            return null == t || t.map((function(t) {
                e.push(t);
            })), e;
        }, Container.processName = function(t) {
            return t.toLowerCase();
        }, Container.Require = function(t) {
            var e = this, n = this.processName(t.name);
            if (v.has(n)) return v.get(n);
            var o, i = Reflect.getMetadata(k, t);
            return (null == i ? void 0 : i.length) && (o = i.map((function(t) {
                return e.Require(t);
            }))), this.Registe(t, o);
        }, Container.define = function(t, e) {
            var n, o = Reflect.getMetadata(w, t, e), i = null !== (n = Object.getOwnPropertyDescriptor(t, e)) && void 0 !== n ? n : {
                writable: !0,
                configurable: !0
            };
            i.value = this.Require(o), Object.defineProperty(t, e, i);
        }, Container;
    }(), w = "design:type", k = "design:paramtypes";
    function WandhiAuto(t, e) {
        b.define(t, e);
    }
    var x, _ = function() {
        function PluginBase() {
            var t = this;
            this._unique = !0, this.Process = function() {
                t.loader(), t.run();
            };
        }
        var t, e;
        return PluginBase.prototype.unique = function() {
            return this._unique;
        }, PluginBase.prototype.linkTest = function(t) {
            var e = this;
            t || (t = this.core.currentUrl());
            var n = !1;
            return this.rules.forEach((function(o, i) {
                return !o.test(t) || (n = !0, e.site = i, !1);
            })), n;
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (t = void 0 !== i && i) ? t : Object) ], PluginBase.prototype, "core", void 0), 
        __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== c && c.Menu) ? e : Object) ], PluginBase.prototype, "menu", void 0), 
        PluginBase;
    }();
    !function(t) {
        t.All = "All", t.TaoBao = "TaoBao", t.TMall = "TMall", t.JingDong = "JingDong", 
        t.IQiYi = "IQiYi", t.YouKu = "YouKu", t.LeShi = "LeShi", t.TuDou = "TuDou", t.Tencent_V = "Tencent_V", 
        t.MangGuo = "MangGuo", t.SoHu = "SoHu", t.Acfun = "Acfun", t.BiliBili = "BiliBili", 
        t.M1905 = "M1905", t.PPTV = "PPTV", t.YinYueTai = "YinYueTai", t.WangYi = "WangYi", 
        t.Tencent_M = "Tencent_M", t.KuGou = "KuGou", t.KuWo = "KuWo", t.XiaMi = "XiaMi", 
        t.TaiHe = "TaiHe", t.QingTing = "QingTing", t.LiZhi = "LiZhi", t.MiGu = "MiGu", 
        t.XiMaLaYa = "XiMaLaYa", t.SXB = "SXB", t.BDY = "BDY", t.BDY1 = "BDY1", t.LZY = "LZY";
    }(x || (x = {}));
    var S, C = function(t) {
        function UpdateService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ x.All, /(.*)/i ] ]), e._unique = !1, e;
        }
        return __extends(UpdateService, t), UpdateService.prototype.loader = function() {}, 
        UpdateService.prototype.run = function() {
            if (!u.get("isUpdate", !1)) {
                var t = new T(u.env.script.version);
                f.get_text(g.update_api).then((function(e) {
                    var n = new T(e.match(/@version[ ]*([\d\.]+)/)[1]);
                    if (n.compareTo(t) === S.greater) {
                        var o = "\u65b0\u7248\u672c<span>" + n.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + g.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + g.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + g.home_url + '">\u67e5\u770b</a>';
                        y.info(o, "\u68c0\u67e5\u66f4\u65b0"), u.set("isUpdate", !0, 36e5);
                    }
                }));
            }
        }, UpdateService;
    }(_), T = function() {
        function VersionCompar(t) {
            if (!/^[\d\.]+$/.test(t)) throw new Error("Invalid version string");
            this.parts = t.split(".").map((function(t) {
                return parseInt(t);
            })), this.versionString = t;
        }
        return VersionCompar.prototype.compareTo = function(t) {
            for (var e = 0; e < this.parts.length; ++e) {
                if (t.parts.length === e) return S.greater;
                if (this.parts[e] !== t.parts[e]) return this.parts[e] > t.parts[e] ? S.greater : S.less;
            }
            return this.parts.length !== t.parts.length ? S.less : S.equal;
        }, VersionCompar.prototype.greaterThan = function(t) {
            return this.compareTo(t) === S.greater;
        }, VersionCompar.prototype.lessThan = function(t) {
            return this.compareTo(t) === S.less;
        }, VersionCompar.prototype.equals = function(t) {
            return this.compareTo(t) === S.equal;
        }, VersionCompar;
    }();
    !function(t) {
        t[t.less = -1] = "less", t[t.equal = 0] = "equal", t[t.greater = 1] = "greater", 
        t[t.incomparable = NaN] = "incomparable";
    }(S || (S = {}));
    var M = function() {
        function EventHelper() {}
        return EventHelper.bind_click = function(t, e) {
            var n;
            null === (n = document.querySelector(t)) || void 0 === n || n.addEventListener("click", (function(t) {
                e();
            }));
        }, EventHelper;
    }(), R = function() {
        function BaseCoupon() {}
        return BaseCoupon.prototype.init_qrcode = function(t) {
            return new Promise((function(e) {
                QRCode.toCanvas(document.getElementById("vip-plugin-outside-coupons-qrcode-img"), t, {
                    errorCorrectionLevel: "H",
                    type: "image/jpeg",
                    quality: .3,
                    margin: 1,
                    width: 150
                }, (function(t) {
                    t || e(!0);
                }));
            }));
        }, BaseCoupon.prototype.init_coupon_info = function(t, e, n, o) {
            void 0 === o && (o = "");
            var r = "<p>\u79fb\u52a8\u7aef<span>\u5feb\u6377</span>\u8d2d\u4e70</p>", a = '<a class="vip-plugin-outside-coupons-button quan-none">\u6253\u5f00\u624b\u673a\u626b\u4e00\u626b</a>', s = l.url;
            if (o) {
                var c = new Date;
                r = "<p>\u5238\u540e\u4ef7 <span>" + t + '</span> \u5143</p><p class="vip-plugin-outside-coupons-date">\uff08' + i.format(c, "yyyy-MM-dd") + " ~ " + n + "\uff09</p>", 
                a = '<a class="vip-plugin-outside-coupons-button quan-exits">\u626b\u7801\u9886' + e + "\u5143\u4f18\u60e0\u5238</a>", 
                s = o;
            }
            new Promise((function(t) {
                $(".vip-plugin-outside-coupons-title").html(r), $(".vip-plugin-outside-coupons-action").html(a), 
                t();
            })).then((function() {
                o && M.bind_click(".vip-plugin-outside-coupons-button", (function() {
                    i.open(s);
                }));
            }));
        }, BaseCoupon;
    }(), z = function(t) {
        function JdCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(JdCoupon, t), JdCoupon.prototype.init_html = function(t) {
            var e = this;
            return new Promise((function(n) {
                $(".product-intro").length ? (i.appendTo(".product-intro", t), n(!0)) : setTimeout(e.init_html, 2e3);
            }));
        }, JdCoupon.prototype.init_coupons = function() {
            var t, e, n = this, o = null === (e = null === (t = unsafeWindow.pageConfig) || void 0 === t ? void 0 : t.product) || void 0 === e ? void 0 : e.skuid;
            o ? g.queryJdCoupons(o, (function(t) {
                if (t.code) if (t.data.has_coupon) {
                    var e = t.data, o = new Date(e.quan_time);
                    n.init_qrcode(decodeURIComponent(e.quan_link)).then((function(t) {
                        n.init_coupon_info(e.after_price, e.quan_price, "" + i.format(o, "yyyy-MM-dd"), decodeURIComponent(e.quan_link));
                    }));
                } else n.default(t.data.quan_link); else n.default();
            })) : this.default();
        }, JdCoupon.prototype.default = function(t) {
            var e = this;
            void 0 === t && (t = ""), this.init_qrcode(null != t ? t : l.url).then((function(t) {
                e.init_coupon_info(0, 0, "");
            }));
        }, JdCoupon;
    }(R), q = function(t) {
        function TaoCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        var e;
        return __extends(TaoCoupon, t), TaoCoupon.prototype.init_html = function(t) {
            return new Promise((function(e) {
                $("#J_DetailMeta").length ? i.appendTo("#J_DetailMeta", t) : i.appendTo("#detail", t + "<br/>"), 
                e(!0);
            }));
        }, TaoCoupon.prototype.init_coupons = function() {
            var t = this;
            g.queryCoupons(this.core.getPar("id"), (function(e) {
                if (e.code) {
                    var n = e.data[0], o = new Date(n.quan_time);
                    t.init_qrcode(decodeURIComponent(n.quan_link)).then((function(e) {
                        t.init_coupon_info(n.after_price, n.quan_price, "" + i.format(o, "yyyy-MM-dd"), decodeURIComponent(n.quan_link));
                    }));
                } else t.init_qrcode(l.url).then((function(e) {
                    t.init_coupon_info(0, 0, "");
                }));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== i && i) ? e : Object) ], TaoCoupon.prototype, "core", void 0), 
        TaoCoupon;
    }(R), A = function(t) {
        function DefCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(DefCoupon, t), DefCoupon.prototype.init_html = function(t) {
            return new Promise((function(t) {
                t(!1);
            }));
        }, DefCoupon.prototype.init_coupons = function() {}, DefCoupon;
    }(R), Y = function Y() {}, j = function(t) {
        function HistoryService() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = new Map([ [ x.TMall, /detail.tmall.com\/item.htm/i ], [ x.TaoBao, /item.taobao.com/i ], [ x.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i ] ]), 
            e.factory = new A, e;
        }
        return __extends(HistoryService, t), HistoryService.prototype.loader = function() {
            i.appendCssContent(this.getHistoryCss());
        }, HistoryService.prototype.run = function() {
            this.injectHistory();
        }, HistoryService.prototype.injectHistory = function() {
            var t = this;
            switch (this.site) {
              case x.TaoBao:
              case x.TMall:
                this.factory = new q;
                break;

              case x.JingDong:
                this.factory = new z;
            }
            this.factory.init_html(this.getHistoryHtml()).then((function(e) {
                e && t.InitPriceHistory(), t.factory.init_coupons && t.factory.init_coupons();
            }));
        }, HistoryService.prototype.InitPriceHistory = function() {
            var t = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d"), 
            g.queryHistoryv1(l.url, this.site.toString(), (function(e) {
                var n = "";
                e.code ? ($(".vip-plugin-outside-chart-container").html('<div id="vip-plugin-outside-chart-container-line"></div>'), 
                echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), t.theme()).setOption(t.getChartOption(e.data))) : n = "\u672a\u67e5\u5230\u5386\u53f2\u6570\u636e", 
                t.chartMsg(n);
            }));
        }, HistoryService.prototype.getHistoryHtml = function() {
            return '<div id="vip-plugin-outside">\n                    <div class="vip-plugin-outside-coupons">\n                        <div class="vip-plugin-outside-coupons-qrcode"><canvas id="vip-plugin-outside-coupons-qrcode-img"></canvas></div>\n                        <div class="vip-plugin-outside-coupons-title"></div>\n                        <div class="vip-plugin-outside-coupons-action"></div>\n                    </div>\n                    <div id="vip-plugin-outside-history" class="vip-plugin-outside-history">\n                        <div class="vip-plugin-outside-chart-container"></div>\n                        <p class="vip-plugin-outside-history-tip"></p>\n                    </div>    \n                </div>';
        }, HistoryService.prototype.getHistoryCss = function() {
            return "\n        #vip-plugin-outside {\n            border: 1px solid #eee;\n            margin: 0 auto;\n            position: relative;\n            clear: both;\n            display: none\n        }\n        #vip-plugin-outside .vip-plugin-outside-coupons {\n            width: 240px;\n            float: left\n        }\n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n            text-align: center;\n            min-height: 150px;\n            margin-top: 30px\n        }        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img {\n            margin: 0 auto\n        }        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n            margin-top: 20px;\n            color: #000;\n            font-size: 14px;\n            font-weight: 700;\n            text-align: center\n        }        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n            color: #ff0036;\n            font-weight: 700\n        }        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n            margin-top: 10px;\n            text-align: center\n        }\n        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n            text-decoration: none\n        }        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n            min-width: 135px;\n            padding: 0 8px;\n            line-height: 35px;\n            color: #fff;\n            background: #ff0036;\n            font-size: 13px;\n            font-weight: 700;\n            letter-spacing: 1.5px;\n            margin: 0 auto;\n            text-align: center;\n            border-radius: 15px;\n            display: inline-block;\n            cursor: pointer\n        }        \n        #vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n            color: #000;\n            background: #bec5c5\n        }\n        .vip-plugin-outside-coupons-date {\n            color: #233b3d;\n            font-weight: normal;\n            font-size: 12px;\n        }\n\n        #vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n            position: absolute;\n            margin: 0;\n            top: 50%;\n            left: 50%;\n            letter-spacing: 1px;\n            font-size: 15px;\n            transform: translateX(-50%) translateY(-50%)\n        }\n        #vip-plugin-outside .vip-plugin-outside-history ,#vip-plugin-outside-chart-body{\n            height: 300px;\n            overflow: hidden;\n            position: relative\n        }    \n        #vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n        #vip-plugin-outside-chart-container-line {\n            width: 100%;\n            height: 100%\n        }";
        }, HistoryService.prototype.chartMsg = function(t) {
            $(".vip-plugin-outside-history-tip").html(t);
        }, HistoryService.prototype.getChartOption = function(t) {
            var e, n, o = "\u5386\u53f2\u4f4e\u4ef7\uff1a{red|\uffe5" + t.min + "} ( {red|" + t.date + "} ) \u5206\u6790\uff1a" + t.mark, i = new Y;
            (i = {
                title: {
                    left: "center",
                    subtext: o,
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
                    formatter: function(t) {
                        t = t[0];
                        var e = new Date(t.name), n = e.getFullYear(), o = e.getMonth() + 1, i = e.getDate(), r = o.toString(), a = i.toString();
                        return o < 10 && (r = "0" + o), i < 10 && (a = "0" + i), "\u65e5\u671f\uff1a" + n + "-" + r + "-" + a + "<br/>\u4ef7\u683c\uff1a\uffe5" + t.value[1].toFixed(2) + ("" == t.value[2] ? "" : "<br/>" + t.value[2]);
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
                    data: function(t) {
                        var e = [];
                        return t.price_detail.forEach((function(t) {
                            var n = {
                                name: t.time,
                                value: [ t.timestamp, t.price, t.mark ]
                            };
                            e.push(n);
                        })), e;
                    }(t),
                    showSymbol: !1,
                    symbolSize: 3,
                    lineStyle: {
                        width: 1.5,
                        color: "#ff0036"
                    }
                } ]
            }).yAxis = {
                min: 10 * Math.floor(.9 * t.min / 10),
                max: 10 * Math.ceil(1.1 * t.max / 10)
            };
            var r = null === (e = i.series) || void 0 === e ? void 0 : e.pop();
            return r.markPoint = {
                data: [ {
                    value: t.min,
                    coord: [ t.date, t.min ],
                    name: "\u6700\u5c0f\u503c",
                    itemStyle: {
                        color: "green"
                    }
                }, {
                    value: t.max,
                    coord: [ t.max_date, t.max ],
                    name: "\u6700\u5927\u503c",
                    itemStyle: {
                        color: "red"
                    }
                } ]
            }, null === (n = i.series) || void 0 === n || n.push(r), i.dataZoom = [ {
                type: "inside",
                start: 0,
                end: 100
            } ], i;
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
    }(_), I = function(t) {
        function TaoBaoService() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = new Map([ [ x.TaoBao, /taobao.com/i ], [ x.TMall, /tmall/i ] ]), 
            e.UrlTag = "Wandhi_qLink", e;
        }
        var e;
        return __extends(TaoBaoService, t), TaoBaoService.prototype.getRules = function() {
            throw new Error("Method not implemented.");
        }, TaoBaoService.prototype.loader = function() {
            i.appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
        }, TaoBaoService.prototype.run = function() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }, TaoBaoService.prototype.init = function() {
            var t, e = this, n = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";
            $("#J_LinkBasket").parent().parent().prepend(n), $(".J_LinkAdd").parent().parent().prepend(n), 
            (null === (t = this.rules.get(x.TaoBao)) || void 0 === t ? void 0 : t.test(this.core.currentUrl())) ? $("#wandhi_table").addClass("wandhi_tab_taobao") : $("#wandhi_table").addClass("wandhi_tab_tmall"), 
            g.queryCoupons(this.core.getPar("id"), (function(t) {
                return e.initElement(t);
            }));
        }, TaoBaoService.prototype.initElement = function(t) {
            $("#wandhi_table tbody tr").remove();
            var e = "";
            t.code ? t.data.forEach((function(t) {
                e += "<tr><td>" + t.quan_context + "</td><td>" + t.after_price + "</td><td>" + t.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + t.quan_link + "')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>";
            })) : e = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(e);
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== j && j) ? e : Object) ], TaoBaoService.prototype, "historyService", void 0), 
        TaoBaoService;
    }(_), H = function(t) {
        function BiliImgService() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = new Map([ [ x.JingDong, /bilibili.com\/video\/[av|bv]*/i ] ]), 
            e;
        }
        return __extends(BiliImgService, t), BiliImgService.prototype.loader = function() {
            i.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, BiliImgService.prototype.run = function() {
            this.addBtn();
        }, BiliImgService.prototype.addBtn = function() {
            var t = this;
            setTimeout((function() {
                $(".video-data").length && ($(".bilibili-player-video-info-people-number") && "--" !== $(".coin").text().trim() ? ($(".video-data").last().append(BiliImgService.btn), 
                $("body").on("click", "#findimg", (function() {
                    g.queryBiliImg((function(t) {
                        t.code ? p.open("\u5c01\u9762\u9171", '<img src="' + t.data + '" style="width: 705px;height: 400px;">', [ "725px", "400px" ]) : p.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                    }));
                }))) : t.addBtn());
            }), 1e3);
        }, BiliImgService.btn = '\n    <span id="findimg" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u83b7\u53d6\u5c01\u9762\n    </span>', 
        BiliImgService;
    }(_), D = function(t) {
        function MovieService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ x.YouKu, /youku/i ], [ x.IQiYi, /iqiyi/i ], [ x.LeShi, /le.com/i ], [ x.Tencent_V, /v.qq/i ], [ x.TuDou, /tudou/i ], [ x.MangGuo, /mgtv/i ], [ x.SoHu, /sohu/i ], [ x.Acfun, /acfun/i ], [ x.BiliBili, /bilibili/i ], [ x.M1905, /1905/i ], [ x.PPTV, /pptv/i ], [ x.YinYueTai, /yinyuetai/ ] ]), 
            e.menu = new c.Menu, e;
        }
        return __extends(MovieService, t), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && i.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
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
                i.open("http://tv.wandhi.com/go.html?url=" + encodeURIComponent(window.location.href));
            })), $("body").on("click", "[data-cat=search]", (function() {
                i.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                i.open("http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                i.open("http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z");
            }));
        }, MovieService;
    }(_), X = function(t) {
        function JdService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ x.JingDong, /item.jd/i ] ]), e;
        }
        var e;
        return __extends(JdService, t), JdService.prototype.loader = function() {
            this.historyService.linkTest() && this.historyService.Process();
        }, JdService.prototype.run = function() {
            var t = $(".sku-name").text().trim();
            $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>'), 
            $(".btn-yhj").on("click", (function() {
                i.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(t));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== j && j) ? e : Object) ], JdService.prototype, "historyService", void 0), 
        JdService;
    }(_), B = function() {
        function UrlHelper() {}
        return UrlHelper.Bind = function(t, e, n) {
            $(t).click((function() {
                i.openUrl($(this).data("key"));
            }));
        }, UrlHelper.urlEncode = function(t) {
            return encodeURIComponent(t);
        }, UrlHelper.urlDecode = function(t) {
            return decodeURIComponent(t);
        }, UrlHelper;
    }(), L = function(t) {
        function MusicService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ x.WangYi, /163(.*)song/i ], [ x.Tencent_M, /y.QQ(.*)song/i ], [ x.KuGou, /kugou.com\/song\/*/i ], [ x.KuWo, /kuwo(.*)yinyue/i ], [ x.XiaMi, /xiami/i ], [ x.TaiHe, /taihe.com/i ], [ x.QingTing, /qingting/i ], [ x.LiZhi, /lizhi/i ], [ x.MiGu, /migu/i ], [ x.XiMaLaYa, /ximalaya/i ] ]), 
            e.menu = new c.Menu, e;
        }
        return __extends(MusicService, t), MusicService.prototype.loader = function() {
            i.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
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
            this.rules;
            $("body").on("click", "[data-cat=process]", (function() {
                if (/ximalaya/i.test(l.url)) if (__INITIAL_STATE__ && null != __INITIAL_STATE__.SoundDetailPage) i.open("http://music.wandhi.com/?id=" + __INITIAL_STATE__.SoundDetailPage.trackId + "&type=ximalaya"); else {
                    layer.closeAll();
                    var t = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                    $.each(__INITIAL_STATE__.AlbumDetailTrackList.tracksInfo.tracks, (function(e, n) {
                        t += '<li class="dOi2"><a href="http://music.wandhi.com/?id=' + n.trackId + '&type=ximalaya" target="_blank">' + n.title + "</a></li>";
                    })), t += "</ul></div>", layer.open({
                        type: 1,
                        area: [ "auto", "30%" ],
                        title: "\u4e3a\u4f60\u627e\u5230\u4e86\u8fd9\u4e9b\u66f2\u76ee\u89e3\u6790\u2026\u2026\u4ec0\u4e48\uff1f\u6211\u4e11\uff1f\u4ee5\u540e\u518d\u8bf4\u5427",
                        shade: .6,
                        maxmin: !1,
                        anim: 2,
                        content: t
                    });
                } else /taihe.com/i.test(l.url) ? i.open("http://music.wandhi.com/?url=" + B.urlEncode(l.url.replace("taihe", "baidu"))) : i.open("http://music.wandhi.com/?url=" + B.urlEncode(l.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                i.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                i.open("https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                i.open("https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z");
            }));
        }, MusicService;
    }(_), P = function(t) {
        function StuService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ x.SXB, /shangxueba.com\/ask\/.*html/i ] ]), e;
        }
        return __extends(StuService, t), StuService.prototype.loader = function() {
            "undefined" == typeof $ && i.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js"), 
            i.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
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
                g.querySbx($("#Hidd_id").val(), (function(t) {
                    t.status ? (p.open("\u7b54\u6848", t.msg), g.sbxFeedback(dataid, t.msg)) : "wronganhao" == t.msg ? (p.prompt("\u53e3\u4ee4\u9519\u8bef\uff0c\u8bf7\u5c06\u5f39\u51fa\u7684\u9875\u9762\u4e2d\u7684\u53e3\u4ee4\u586b\u5165\u540e\u91cd\u8bd5\uff01", u.get("sxb_anhao", ""), (function(t) {
                        u.set("sxb_anhao", t), p.info("\u8bf7\u518d\u6b21\u70b9\u51fb\u67e5\u770b\u7b54\u6848\u6309\u94ae");
                    }), 4), i.open("http://www.lelunwen.com/e/action/ListInfo/?classid=45")) : p.confim("\u6ca1\u67e5\u5230\u7b54\u6848", "\u8981\u4e0d\u8981\u8df3\u8f6c\u5230\u67e5\u8be2\u9875\u770b\u770b\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function() {
                        i.open(l.url.replace("shangxueba", "shangxueba365"));
                    }));
                }));
            })), $("body").on("click", "[data-cat=tb]", (function() {
                i.open("http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                i.open("http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z");
            }));
        }, StuService;
    }(_), E = function() {
        function WandhiInjection() {
            this.plugins = new Array, this.plugins = [ b.Require(C), b.Require(H), b.Require(D), b.Require(I), b.Require(X), b.Require(L), b.Require(P) ], 
            a.info("container loaded");
        }
        return WandhiInjection.prototype.Init = function() {
            this.plugins.every((function(t) {
                return !t.linkTest() || (new Promise((function(t) {
                    t();
                })).then(t.Process), !t.unique());
            }));
        }, WandhiInjection;
    }();
    a.level = e.info, b.Require(E).Init();
}));
