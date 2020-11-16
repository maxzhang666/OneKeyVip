// ==UserScript==
// @name         【玩的嗨】VIP工具箱,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,下载B站视频,上学吧答案获取等众多功能聚合 2020-11-16 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.2.18
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
    "object" == typeof exports && "undefined" != typeof module ? e(require("reflect-metadata"), require("vue"), require("crypto-js")) : "function" == typeof define && define.amd ? define([ "reflect-metadata", "vue", "crypto-js" ], e) : e(null, (t = "undefined" != typeof globalThis ? globalThis : t || self).Vue, t.CryptoJS);
}(this, (function(t, e, n) {
    "use strict";
    function _interopDefaultLegacy(t) {
        return t && "object" == typeof t && "default" in t ? t : {
            default: t
        };
    }
    var o = _interopDefaultLegacy(e), i = _interopDefaultLegacy(n), extendStatics = function(t, e) {
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
    var r, a = function() {
        function EventHelper() {}
        return EventHelper.bind_click = function(t, e) {
            var n;
            null === (n = document.querySelector(t)) || void 0 === n || n.addEventListener("click", (function(t) {
                e();
            }));
        }, EventHelper;
    }(), s = function() {
        function Core() {
            this.topUrl = top.window.location.href, this.url = this.currentUrl();
        }
        return Core.appendTo = function(t, e) {
            $(t).append(e);
        }, Core.lazyload = function(t, e) {
            void 0 === e && (e = 5), setTimeout((function() {
                t();
            }), 1e3 * e);
        }, Core.aotulazyload = function(t, e, n) {
            void 0 === n && (n = 5), t() ? e() : setTimeout((function() {
                Core.aotulazyload(t, e, n);
            }), 1e3 * n);
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
        }, Core.encode = function(t) {
            return window.btoa(t);
        }, Core.decode = function(t) {
            return window.atob(t);
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
        }, Core.uuid = function(t, e, n) {
            void 0 === t && (t = 10), void 0 === e && (e = !1), void 0 === n && (n = 0);
            var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = [];
            if (n = 0 == n ? n || i.length : n, e) {
                var a = void 0;
                for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", o = 0; o < 36; o++) r[o] || (a = 0 | 16 * Math.random(), 
                r[o] = i[19 == o ? 3 & a | 8 : a]);
            } else for (o = 0; o < t; o++) r[o] = i[0 | Math.random() * n];
            return r.join("");
        }, Core.head = document.getElementsByTagName("head")[0], Core.top_url = top.window.location.href, 
        Core;
    }(), u = function() {
        function Runtime() {}
        return Object.defineProperty(Runtime, "url", {
            get: function() {
                return window.location.href;
            },
            enumerable: !1,
            configurable: !0
        }), Runtime;
    }(), c = function() {
        function Logger() {}
        return Logger.log = function(t, e) {}, Logger.debug = function(t) {
            this.log(t, r.debug);
        }, Logger.info = function(t) {
            this.log(t, r.info);
        }, Logger.warn = function(t) {
            this.log(t, r.warn);
        }, Logger.error = function(t) {
            this.log(t, r.error);
        }, Logger;
    }();
    !function(t) {
        t[t.debug = 0] = "debug", t[t.info = 1] = "info", t[t.warn = 2] = "warn", t[t.error = 3] = "error";
    }(r || (r = {}));
    var l = function() {
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
            var i = "<p>\u79fb\u52a8\u7aef<span>\u5feb\u6377</span>\u8d2d\u4e70</p>", r = '<a class="vip-plugin-outside-coupons-button quan-none" href="javascript:void(0)">\u6253\u5f00\u624b\u673a\u626b\u4e00\u626b</a>', c = u.url;
            if (o) {
                var l = new Date;
                i = "<p>\u5238\u540e\u4ef7 <span>" + t + '</span> \u5143</p><p class="vip-plugin-outside-coupons-date">\uff08' + s.format(l, "yyyy-MM-dd") + " ~ " + n + "\uff09</p>", 
                r = '<a class="vip-plugin-outside-coupons-button quan-exits">\u626b\u7801\u9886' + e + "\u5143\u4f18\u60e0\u5238</a>", 
                c = o;
            }
            new Promise((function(t) {
                $(".vip-plugin-outside-coupons-title").html(i), $(".vip-plugin-outside-coupons-action").html(r), 
                t();
            })).then((function() {
                o && a.bind_click(".vip-plugin-outside-coupons-button", (function() {
                    s.open(c);
                }));
            }));
        }, BaseCoupon.prototype.default = function(t) {
            var e = this;
            void 0 === t && (t = ""), c.debug(t), this.init_qrcode("" == t ? u.url : t).then((function(t) {
                e.init_coupon_info(0, 0, "");
            }));
        }, BaseCoupon;
    }(), d = function d() {
        this.max = 0, this.price_detail = [];
    }, p = function p() {}, f = function f() {}, m = function() {
        function Convert() {}
        return Convert.genterData = function(t) {
            var e = new d;
            if (e.date = s.format(new Date(Number.parseInt(t.lowerDate.match(/[0-9]{13}/)[0]) + 800), "yyyy-MM-dd"), 
            e.min = t.lowerPrice, e.max = e.min, e.max_date = e.date, e.current = t.currentPrice.toString(), 
            e.mark = "" == t.changPriceRemark ? "\u6682\u65e0" : t.changPriceRemark, 0 == t.listPrice.length || !t.listPrice) {
                var n = [];
                t.datePrice.split("],[").forEach((function(t, e) {
                    var o = new f, i = (t = t.replace(/\[|"|\]/g, "")).split(",");
                    o.pr = Number.parseInt(i[1]), o.yh = 3 == i.length ? i[2] : t.substring(t.indexOf(i[2]), t.length), 
                    o.dt = i[0], n.push(o);
                })), t.listPrice = n;
            }
            return t.listPrice.forEach((function(t, n) {
                var o = new p;
                o.timestamp = Number.parseInt(t.dt.match(/[0-9]{13}/)[0]) + 800, o.time = s.format(new Date(o.timestamp), "yyyy-MM-dd"), 
                o.price = t.pr, o.mark = t.yh, e.max < t.pr && (e.max = t.pr, e.max_date = o.time), 
                e.price_detail.push(o);
            })), e;
        }, Convert.genterDataV2 = function(t) {
            var e = new d;
            e.date = s.format(new Date(t.lowerDate), "yyyy-MM-dd"), e.min = t.lowerPrice, e.max = e.min, 
            e.max_date = e.date, e.current = t.currentPrice.toString(), e.mark = "" == t.changPriceRemark ? "\u6682\u65e0" : t.changPriceRemark;
            var n = [];
            if (0 != t.datePrice.length) {
                var o = [];
                t.datePrice.split("],[").forEach((function(t, e) {
                    var n = new f, i = (t = t.replace(/\[|"|\]/g, "")).split(",");
                    n.pr = Number.parseInt(i[1]), n.yh = 3 == i.length ? i[2] : t.substring(t.indexOf(i[2]), t.length), 
                    n.dt = i[0], o.push(n);
                })), n = o;
            }
            return n.forEach((function(t, n) {
                var o = new p;
                o.timestamp = Number.parseInt(t.dt.match(/[0-9]{13}/)[0]) + 800, o.time = s.format(new Date(o.timestamp), "yyyy-MM-dd"), 
                o.price = t.pr, o.mark = t.yh, e.max < t.pr && (e.max = t.pr, e.max_date = o.time), 
                e.price_detail.push(o);
            })), e;
        }, Convert;
    }(), h = function() {
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
                if (-1 == o.exp || o.exp > (new Date).getTime()) return c.info("cache true"), o.value;
            }
            return c.info("cache false"), e;
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
    }(), g = (function() {
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
        function AjaxOption(t, e, n, o, i, r) {
            void 0 === e && (e = "GET"), void 0 === i && (i = new Map), void 0 === r && (r = 10), 
            this.url = t, this.methodType = e, this.onSuccess = o, this.onError = o, this.data = n, 
            this.headers = i, this.timeOut = r;
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
    }()), y = function() {
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
        }, Alert.confim = function(t, e, n, o, i) {
            void 0 === i && (i = !1);
            var r = layer.open({
                type: 1,
                title: t || !1,
                closeBtn: 1,
                shade: .8,
                id: "LAY_layuipro",
                resize: !1,
                btn: n,
                btnAlign: "c",
                moveType: 1,
                content: '<div style="padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' + e + "</div>",
                yes: function(t) {
                    o(t), i && s.lazyload((function() {
                        layer.close(r);
                    }));
                }
            });
            return r;
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
    }(), v = function() {
        function Http() {}
        return Http.ajax = function(t) {
            var e, n;
            t.headers.set("User-Agent", "Mozilla/4.0 (compatible) Greasemonkey"), t.headers.set("Accept", "application/atom+xml,application/xml,text/xml");
            var o = new b;
            o.version = h.env.script.version, o.auth = null !== (e = h.env.script.author) && void 0 !== e ? e : "", 
            o.namespace = null !== (n = h.env.script.namespace) && void 0 !== n ? n : "", t.headers.forEach((function(t, e) {
                o[e] = t;
            })), GM_xmlhttpRequest({
                url: t.url,
                method: t.methodType,
                headers: o,
                data: t.getData(),
                timeout: 1e3 * t.timeOut,
                onload: function(e) {
                    var n, o;
                    try {
                        null === (n = t.onSuccess) || void 0 === n || n.call(t, "POST" == t.methodType ? JSON.parse(e.responseText) : e.responseText);
                    } catch (n) {
                        y.confim("", '                                        \n                        <h1>\u54cd\u5e94\u5f02\u5e38\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u65e5\u5fd7\uff1a</span><br>\n                        <p>' + n + "(" + e.status + ')</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(e.responseText) + '</p>                        \n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + h.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + h.env.script.version + "</p>\n                        <p>Url\uff1a" + u.url + "</p>\n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                            s.open("https://gitee.com/ixysy/OneKeyVip/issues");
                        })), null === (o = t.onSuccess) || void 0 === o || o.call(t, null);
                    }
                },
                onerror: function(e) {
                    var n;
                    y.confim("", '              \n                        <h1>\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u590d\u5236\u4e0b\u5217\u4fe1\u606f\u5411\u5f00\u53d1\u8005\u53cd\u9988\u95ee\u9898</h1><br>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u9519\u8bef\u8be6\u60c5\uff1a</span><br>\n                        <p>' + escape(e.responseText) + "(" + e.status + ')</p>\n                        <span style="color:red;font-weight: bold;font-size: large;">\u73af\u5883\u4fe1\u606f\uff1a</span><br>\n                        <p>\u6cb9\u7334\u7248\u672c\uff1a' + h.env.version + "</p>\n                        <p>\u811a\u672c\u7248\u672c\uff1a" + h.env.script.version + "</p>\n                        <p>Url\uff1a" + u.url + "</p>           \n                    ", [ "\u53bb\u53cd\u9988", "\u5173\u95ed" ], (function() {
                        s.open("https://gitee.com/ixysy/OneKeyVip/issues");
                    })), null === (n = t.onError) || void 0 === n || n.call(t, e);
                }
            });
        }, Http.getData = function(t, e) {
            $.getJSON(t, (function(t) {
                e(t);
            }));
        }, Http.post = function(t, e, n) {
            void 0 === n && (n = 10);
            var o = y.loading();
            return new Promise((function(i) {
                Http.ajax(new g(t, "POST", e, (function(t) {
                    y.close(o), i(t);
                }), new Map, n));
            }));
        }, Http.get = function(t, e, n) {
            void 0 === e && (e = new Map), void 0 === n && (n = 10);
            y.loading();
            return new Promise((function(o, i) {
                Http.ajax(new g(t, "GET", e, (function(t) {
                    var e;
                    try {
                        var n = null !== (e = JSON.parse(t)) && void 0 !== e ? e : t;
                        o(n);
                    } catch (t) {
                        c.debug(t), i();
                    }
                }), new Map, n));
            }));
        }, Http.getWithHead = function(t, e, n, o) {
            void 0 === e && (e = new Map), void 0 === n && (n = new Map), void 0 === o && (o = 10);
            y.loading();
            return new Promise((function(i, r) {
                Http.ajax(new g(t, "GET", e, (function(t) {
                    var e;
                    try {
                        var n = null !== (e = JSON.parse(t)) && void 0 !== e ? e : t;
                        i(n);
                    } catch (t) {
                        c.debug(t), r();
                    }
                }), n, o));
            }));
        }, Http.get_text = function(t) {
            return new Promise((function(e) {
                Http.ajax(new g(t, "GET", new Map, (function(t) {
                    e(t);
                })));
            }));
        }, Http;
    }(), b = function b() {}, w = function() {
        function Result() {}
        return Result.prototype.constructorq = function() {}, Result;
    }(), k = (function(t) {
        function StuResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(StuResult, t);
    }(w), function(t) {
        function StrResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(StrResult, t);
    }(w), function(t) {
        function HistoryResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(HistoryResult, t), HistoryResult;
    }(w)), x = (function(t) {
        function HistoryQueryResult() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(HistoryQueryResult, t);
    }(w), function(t) {
        function HistoryV1Result() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(HistoryV1Result, t);
    }(w), function(t) {
        function HistoryV2Result() {
            return null !== t && t.apply(this, arguments) || this;
        }
        __extends(HistoryV2Result, t);
    }(w), function x() {}), _ = function() {
        function Route() {
            this.queryTao = "";
        }
        return Object.defineProperty(Route, "apiRoot", {
            get: function() {
                return "https://api.wandhi.com/api";
            },
            enumerable: !1,
            configurable: !0
        }), Route.baseApi = function(t, e, n, o) {
            void 0 === o && (o = 10), v.post(Route.apiRoot + t, e, o).then((function(t) {
                n(t);
            }));
        }, Route.querySbx = function(t, e) {
            var n = this;
            "" !== h.get(this.sxb_key, "") ? this.query365(t, h.get(this.sxb_key), e) : this.queryValue("sxb_anhao", (function(o) {
                n.query365(t, o.data, e);
            }));
        }, Route.sbxFeedback = function(t, e) {
            this.baseApi("/tools/record", new Map([ [ "id", t ], [ "data", e ], [ "anhao", h.get(this.sxb_key) ] ]), (function() {}));
        }, Route.query365 = function(t, e, n) {
            var o = h.get("sxb_api");
            o ? v.post(o, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + t + ".html" ], [ "anhao", e ] ])).then((function(t) {
                n(t);
            })) : this.queryValue("sxb_api", (function(n) {
                h.set("sxb_api", n.data, 864e5), v.post(n.data, new Map([ [ "docinfo", "https://www.shangxueba.com/ask/" + t + ".html" ], [ "anhao", e ] ]));
            }));
        }, Route.queryValue = function(t, e) {
            this.baseApi(Route.config, new Map([ [ "key", t ] ]), e);
        }, Route.queryHistory = function(t, e, n) {
            this.baseApi(this.history, new Map([ [ "url", t ], [ "type", e ] ]), n);
        }, Route.queryHistoryv1 = function(t, e, n) {
            var o = this, i = this;
            this.baseApi(this.historyv1, new Map([ [ "url", t ] ]), (function(r) {
                c.debug(r), r.code ? v.get(r.data).then((function(t) {
                    var e = new k;
                    e.code = 1, e.data = m.genterData(t), c.debug(e), n(e);
                })).catch((function() {
                    i.queryHistory(t, e, n);
                })) : o.queryHistory(t, e, n);
            }), 60);
        }, Route.queryHistoryv2 = function(t, e, n) {
            var o = this, i = this;
            this.baseApi(this.historyv2, new Map([ [ "url", t ] ]), (function(r) {
                c.debug(r), r.code ? v.getWithHead(r.data.url, new Map, new Map([ [ "Authorization", r.data.auth ] ])).then((function(t) {
                    var e = new k;
                    0 == t.code ? e.code = 1 : e.code = -1, e.code = 1, e.data = m.genterDataV2(t.data), 
                    c.debug(e), n(e);
                })).catch((function() {
                    i.queryHistory(t, e, n);
                })) : o.queryHistory(t, e, n);
            }), 60);
        }, Route.queryBiliImg = function(t) {
            this.baseApi(this.bili, new Map([ [ "url", u.url ] ]), t);
        }, Route.queryBiliDown = function(t, e, n) {
            v.get(this.bilidown + "?cid=" + e + "&aid=" + t).then((function(t) {
                c.debug(t), n(t);
            })).catch((function() {
                n(new x);
            }));
        }, Route.queryCoupons = function(t, e) {
            this.baseApi(this.coupons, new Map([ [ "id", t ] ]), e);
        }, Route.queryLike = function(t, e) {
            this.baseApi(this.like, new Map([ [ "id", t ] ]), e);
        }, Route.queryJdCoupons = function(t, e) {
            Route.baseApi(Route.jd_coupons, new Map([ [ "item_id", t ] ]), e);
        }, Route.querySnCoupons = function(t, e) {
            Route.baseApi(Route.sn_coupons, new Map([ [ "url", t ] ]), e);
        }, Route.queryVpCoupons = function(t, e) {
            Route.baseApi(Route.vp_coupons, new Map([ [ "url", t ] ]), e);
        }, Route.update_api = "https://cdn.jsdelivr.net/gh/maxzhang666/OneKeyVip/OneKeyVip.user.js?t=" + s.uuid(), 
        Route.home_url = "https://wiki.wandhi.com", Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/384538", 
        Route.install_url_two = "https://tools.wandhi.com/scripts", Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45", 
        Route.sxb_key = "sxb_anhao", Route.config = "/config/query", Route.history = "/history/", 
        Route.historyv1 = "/history/v1", Route.historyv2 = "/history/v2", Route.bili = "/tools/bili", 
        Route.bilidown = "https://www.xbeibeix.com/api/bilibiliapi.php", Route.bilijx = "https://xbeibeix.com/api/bilibili/biliplayer/?url=", 
        Route.coupons = "/tb/infos/", Route.like = "/tb/guesslike", Route.jd_coupons = "/jd/info", 
        Route.sn_coupons = "/sn/info", Route.vp_coupons = "/vp/info", Route;
    }(), S = function(t) {
        function VpCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(VpCoupon, t), VpCoupon.prototype.init_html = function(t) {
            var e = this;
            return new Promise((function(n) {
                if ($(".FW-product.clearfix").length) s.appendTo(".FW-product.clearfix", t), n(!0); else {
                    var o = e;
                    s.lazyload((function() {
                        return o.init_html(t);
                    }), 1);
                }
            }));
        }, VpCoupon.prototype.init_coupons = function() {
            var t = this;
            _.queryVpCoupons(u.url, (function(e) {
                if (c.debug(e), e.code) if (e.data.has_coupon) {
                    var n = e.data, o = new Date(n.quan_time);
                    t.init_qrcode(decodeURIComponent(n.quan_link)).then((function(e) {
                        t.init_coupon_info(n.after_price, n.quan_price, "" + s.format(o, "yyyy-MM-dd"), decodeURIComponent(n.quan_link));
                    }));
                } else e.data.quan_link ? (t.default(e.data.quan_link), a.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    s.open(e.data.quan_link);
                }))) : t.default(); else t.default();
            }));
        }, VpCoupon;
    }(l), C = function(t) {
        function SuningCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(SuningCoupon, t), SuningCoupon.prototype.init_html = function(t) {
            var e = this;
            return new Promise((function(n) {
                if ($(".proinfo-container").length) s.appendTo(".proinfo-container", t), n(!0); else {
                    var o = e;
                    s.lazyload((function() {
                        return o.init_html(t);
                    }), 1);
                }
            }));
        }, SuningCoupon.prototype.init_coupons = function() {
            var t = this;
            _.querySnCoupons(u.url, (function(e) {
                if (c.debug(e), e.code) if (e.data.has_coupon) {
                    var n = e.data, o = new Date(n.quan_time);
                    t.init_qrcode(decodeURIComponent(n.quan_link)).then((function(e) {
                        t.init_coupon_info(n.after_price, n.quan_price, "" + s.format(o, "yyyy-MM-dd"), decodeURIComponent(n.quan_link));
                    }));
                } else e.data.quan_link ? (t.default(e.data.quan_link), a.bind_click("#vip-plugin-outside-coupons-qrcode-img", (function() {
                    s.open(e.data.quan_link);
                }))) : t.default(); else t.default();
            }));
        }, SuningCoupon;
    }(l), T = function(t) {
        function JdCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(JdCoupon, t), JdCoupon.prototype.init_html = function(t) {
            var e = this;
            return new Promise((function(n) {
                $(".product-intro").length ? (s.appendTo(".product-intro", t), n(!0)) : setTimeout(e.init_html, 2e3);
            }));
        }, JdCoupon.prototype.init_coupons = function() {
            var t, e, n = this, o = null === (e = null === (t = unsafeWindow.pageConfig) || void 0 === t ? void 0 : t.product) || void 0 === e ? void 0 : e.skuid;
            o ? _.queryJdCoupons(o, (function(t) {
                if (c.debug(t), t.code) if (t.data.has_coupon) {
                    var e = t.data, o = new Date(e.quan_time);
                    n.init_qrcode(decodeURIComponent(e.quan_link)).then((function(t) {
                        n.init_coupon_info(e.after_price, e.quan_price, "" + s.format(o, "yyyy-MM-dd"), decodeURIComponent(e.quan_link));
                    }));
                } else t.data.quan_link ? n.default(t.data.quan_link) : n.default(); else n.default();
            })) : this.default();
        }, JdCoupon;
    }(l), M = new Map, q = function() {
        function Container() {}
        return Container.Registe = function(t, e) {
            var n = this.processName(t.name);
            return M.set(n, window.Reflect.construct(t, this.buildParams(e))), M.get(n);
        }, Container.buildParams = function(t) {
            var e = [];
            return null == t || t.map((function(t) {
                e.push(t);
            })), e;
        }, Container.processName = function(t) {
            return t.toLowerCase();
        }, Container.Require = function(t) {
            var e = this, n = this.processName(t.name);
            if (M.has(n)) return M.get(n);
            var o, i = Reflect.getMetadata(z, t);
            return (null == i ? void 0 : i.length) && (o = i.map((function(t) {
                return e.Require(t);
            }))), this.Registe(t, o);
        }, Container.define = function(t, e) {
            var n, o = Reflect.getMetadata(R, t, e), i = null !== (n = Object.getOwnPropertyDescriptor(t, e)) && void 0 !== n ? n : {
                writable: !0,
                configurable: !0
            };
            i.value = this.Require(o), Object.defineProperty(t, e, i);
        }, Container;
    }(), R = "design:type", z = "design:paramtypes";
    function WandhiAuto(t, e) {
        q.define(t, e);
    }
    var A, I = function(t) {
        function TaoCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        var e;
        return __extends(TaoCoupon, t), TaoCoupon.prototype.init_html = function(t) {
            return new Promise((function(e) {
                $("#J_DetailMeta").length ? s.appendTo("#J_DetailMeta", t) : s.appendTo("#detail", t + "<br/>"), 
                e(!0);
            }));
        }, TaoCoupon.prototype.init_coupons = function() {
            var t = this;
            _.queryCoupons(this.core.getPar("id"), (function(e) {
                if (e.code) {
                    var n = e.data[0], o = new Date(n.quan_time);
                    t.init_qrcode(decodeURIComponent(n.quan_link)).then((function(e) {
                        t.init_coupon_info(n.after_price, n.quan_price, "" + s.format(o, "yyyy-MM-dd"), decodeURIComponent(n.quan_link));
                    }));
                } else t.init_qrcode(u.url).then((function(e) {
                    t.init_coupon_info(0, 0, "");
                }));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== s && s) ? e : Object) ], TaoCoupon.prototype, "core", void 0), 
        TaoCoupon;
    }(l), Y = function(t) {
        function DefCoupon() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return __extends(DefCoupon, t), DefCoupon.prototype.init_html = function(t) {
            return new Promise((function(t) {
                t(!1);
            }));
        }, DefCoupon.prototype.init_coupons = function() {}, DefCoupon;
    }(l);
    !function(t) {
        var e = function() {
            function Menu() {
                this.core = new s, this.site = /tv.wandhi.com/i, this.userAgent = navigator.userAgent, 
                this.menusClass = [ "first", "second", "third", "fourth", "fifth" ], this.menuSelecter = "#Wandhi-nav";
            }
            return Menu.prototype.loader = function() {
                s.appendCssContent(this.getCss());
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
                    })), s.bodyAppend(this.getBody(o)), /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                    var i = {
                        down: !1,
                        x: 0,
                        y: 0,
                        winWid: 0,
                        winHei: 0,
                        clientX: 0,
                        clientY: 0
                    }, r = $(this.menuSelecter)[0];
                    $("body").on("mousedown", "#Wandhi-nav", (function(t) {
                        var getCss = function(t, e) {
                            var n, o, i;
                            return null !== (o = null === (n = document.defaultView) || void 0 === n ? void 0 : n.getComputedStyle(t, null)[e]) && void 0 !== o ? o : null !== (i = t.currentStyle) && void 0 !== i ? i : t.currentStyle[e];
                        };
                        i.down = !0, i.clientX = t.clientX, i.clientY = t.clientY, i.x = parseInt(getCss(this, "left")), 
                        i.y = parseInt(getCss(this, "top")), i.winHei = $(window).height(), i.winWid = $(window).width(), 
                        $(document).on("mousemove", (function(t) {
                            var e = t.clientX - i.clientX, n = t.clientY - i.clientY;
                            (r = r || $("#Wandhi-nav")[0]).style.top = i.y + n + "px", r.style.left = i.x + e + "px";
                        }));
                    })).on("mouseup", "#Wandhi-nav", (function() {
                        i.down = !1, $(document).off("mousemove");
                    })), e.call(this);
                }
            }, Menu;
        }();
        t.Menu = e;
    }(A || (A = {}));
    var H, j = function() {
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
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (t = void 0 !== s && s) ? t : Object) ], PluginBase.prototype, "core", void 0), 
        __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== A && A.Menu) ? e : Object) ], PluginBase.prototype, "menu", void 0), 
        PluginBase;
    }(), B = function B() {};
    !function(t) {
        t.All = "All", t.TaoBao = "TaoBao", t.TMall = "TMall", t.JingDong = "JingDong", 
        t.IQiYi = "IQiYi", t.YouKu = "YouKu", t.LeShi = "LeShi", t.TuDou = "TuDou", t.Tencent_V = "Tencent_V", 
        t.MangGuo = "MangGuo", t.SoHu = "SoHu", t.Acfun = "Acfun", t.BiliBili = "BiliBili", 
        t.M1905 = "M1905", t.PPTV = "PPTV", t.YinYueTai = "YinYueTai", t.WangYi = "WangYi", 
        t.Tencent_M = "Tencent_M", t.KuGou = "KuGou", t.KuWo = "KuWo", t.XiaMi = "XiaMi", 
        t.TaiHe = "TaiHe", t.QingTing = "QingTing", t.LiZhi = "LiZhi", t.MiGu = "MiGu", 
        t.XiMaLaYa = "XiMaLaYa", t.SXB = "SXB", t.BDY = "BDY", t.BDY1 = "BDY1", t.LZY = "LZY", 
        t.SuNing = "SuNing", t.Vp = "Vp";
    }(H || (H = {}));
    var L, P = function(t) {
        function HistoryService() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = new Map([ [ H.TMall, /detail.tmall.com\/item.htm/i ], [ H.TaoBao, /item.taobao.com/i ], [ H.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i ], [ H.SuNing, /product.suning.com/i ], [ H.Vp, /detail.vip.com/i ] ]), 
            e.factory = new Y, e;
        }
        return __extends(HistoryService, t), HistoryService.prototype.loader = function() {
            s.appendCssContent(this.getHistoryCss());
        }, HistoryService.prototype.run = function() {
            this.injectHistory();
        }, HistoryService.prototype.injectHistory = function() {
            var t = this;
            switch (c.debug(this.site), this.site) {
              case H.TaoBao:
              case H.TMall:
                this.factory = new I;
                break;

              case H.JingDong:
                this.factory = new T;
                break;

              case H.SuNing:
                this.factory = new C;
                break;

              case H.Vp:
                this.factory = new S;
                break;

              default:
                this.factory = new Y;
            }
            this.factory.init_html(this.getHistoryHtml()).then((function(e) {
                e && t.InitPriceHistory(), t.factory.init_coupons && t.factory.init_coupons();
            }));
        }, HistoryService.prototype.InitPriceHistory = function() {
            var t = this;
            $("#vip-plugin-outside").show(), this.theme(), this.chartMsg("\u5386\u53f2\u4ef7\u683c\u67e5\u8be2\u4e2d"), 
            _.queryHistoryv2(u.url, this.site.toString(), (function(e) {
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
            var e, n, o = "\u5386\u53f2\u4f4e\u4ef7\uff1a{red|\uffe5" + t.min + "} ( {red|" + t.date + "} ) \u5206\u6790\uff1a" + t.mark, i = new B;
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
    }(j), D = function() {
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
            this.element = new o.default({
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
            return void 0 === n && (n = -1), this.internalShow(t, e, n, L.Default);
        }, Toast.info = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, L.Info);
        }, Toast.success = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, L.Success);
        }, Toast.error = function(t, e, n) {
            return void 0 === n && (n = -1), this.internalShow(t, e, n, L.Error);
        }, Toast;
    }();
    !function(t) {
        t.Default = "default", t.Info = "info", t.Success = "success", t.Error = "error";
    }(L || (L = {}));
    var X, V = function(t) {
        function UpdateService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ H.All, /(.*)/i ] ]), e._unique = !1, e;
        }
        return __extends(UpdateService, t), UpdateService.prototype.loader = function() {}, 
        UpdateService.prototype.run = function() {
            if (!h.get("isUpdate", !1)) {
                var t = new O(h.env.script.version);
                v.get_text(_.update_api).then((function(e) {
                    var n = new O(e.match(/@version[ ]*([\d\.]+)/)[1]);
                    if (n.compareTo(t) === X.greater) {
                        var o = "\u65b0\u7248\u672c<span>" + n.versionString + '</span>\u5df2\u53d1\u5e03.<a id="new-version-link" class="link" href="' + _.install_url_one + '">\u5b89\u88c5(\u7ebf\u8def\u4e00)</a><a id="new-version-link" class="link" href="' + _.install_url_two + '">\u5b89\u88c5(\u7ebf\u8def\u4e8c)</a><a class="link" target="_blank" href="' + _.home_url + '">\u67e5\u770b</a>';
                        D.info(o, "\u68c0\u67e5\u66f4\u65b0"), h.set("isUpdate", !0, 3600);
                    }
                }));
            }
        }, UpdateService;
    }(j), O = function() {
        function VersionCompar(t) {
            if (!/^[\d\.]+$/.test(t)) throw new Error("Invalid version string");
            this.parts = t.split(".").map((function(t) {
                return parseInt(t);
            })), this.versionString = t;
        }
        return VersionCompar.prototype.compareTo = function(t) {
            for (var e = 0; e < this.parts.length; ++e) {
                if (t.parts.length === e) return X.greater;
                if (this.parts[e] !== t.parts[e]) return this.parts[e] > t.parts[e] ? X.greater : X.less;
            }
            return this.parts.length !== t.parts.length ? X.less : X.equal;
        }, VersionCompar.prototype.greaterThan = function(t) {
            return this.compareTo(t) === X.greater;
        }, VersionCompar.prototype.lessThan = function(t) {
            return this.compareTo(t) === X.less;
        }, VersionCompar.prototype.equals = function(t) {
            return this.compareTo(t) === X.equal;
        }, VersionCompar;
    }();
    !function(t) {
        t[t.less = -1] = "less", t[t.equal = 0] = "equal", t[t.greater = 1] = "greater", 
        t[t.incomparable = NaN] = "incomparable";
    }(X || (X = {}));
    var E = function(t) {
        function TaoBaoService() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = new Map([ [ H.TaoBao, /taobao.com/i ], [ H.TMall, /tmall/i ] ]), 
            e.UrlTag = "Wandhi_qLink", e;
        }
        var e;
        return __extends(TaoBaoService, t), TaoBaoService.prototype.getRules = function() {
            throw new Error("Method not implemented.");
        }, TaoBaoService.prototype.loader = function() {
            s.appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
        }, TaoBaoService.prototype.run = function() {
            this.init(), this.historyService.linkTest() && this.historyService.Process();
        }, TaoBaoService.prototype.init = function() {
            var t, e = this, n = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4f18\u60e0\u5238</b></th><th>\u5238\u540e</th><th>\u6709 \u6548 \u671f</th><th>\u64cd\u4f5c</th></tr></thead><tr><td colspan='4'>\u6b63\u5728\u67e5\u8be2\u4f18\u60e0\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...</td></tr></table></div>";
            $("#J_LinkBasket").parent().parent().prepend(n), $(".J_LinkAdd").parent().parent().prepend(n), 
            (null === (t = this.rules.get(H.TaoBao)) || void 0 === t ? void 0 : t.test(this.core.currentUrl())) ? $("#wandhi_table").addClass("wandhi_tab_taobao") : $("#wandhi_table").addClass("wandhi_tab_tmall"), 
            _.queryCoupons(this.core.getPar("id"), (function(t) {
                return e.initElement(t);
            }));
        }, TaoBaoService.prototype.initElement = function(t) {
            $("#wandhi_table tbody tr").remove();
            var e = "";
            t.code ? t.data.forEach((function(t) {
                e += "<tr><td>" + t.quan_context + "</td><td>" + t.after_price + "</td><td>" + t.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + t.quan_link + "')) style='cursor:pointer'>\u9886\u53d6</b></td></tr>";
            })) : e = "<tr><td colspan='4'>\u8fd9\u4e2a\u5546\u54c1\u6ca1\u6709\u8d85\u503c\u4f18\u60e0\u5238</td></tr>", 
            $("#wandhi_table tbody").append(e);
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== P && P) ? e : Object) ], TaoBaoService.prototype, "historyService", void 0), 
        TaoBaoService;
    }(j), U = function(t) {
        function BiliImgService() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = new Map([ [ H.BiliBili, /bilibili.com\/video\/[av|bv]*/i ] ]), 
            e;
        }
        return __extends(BiliImgService, t), BiliImgService.prototype.loader = function() {
            s.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        }, BiliImgService.prototype.run = function() {
            this.init();
        }, BiliImgService.prototype.init = function() {
            s.aotulazyload((function() {
                return !!($(".video-data").length && $(".bilibili-player-video-info-people-number").length && $.isNumeric($(".coin").text().replace("\u4e07", "").trim()));
            }), (function() {
                BiliImgService.add_img_btn(), BiliImgService.add_down_btn();
            }), 1);
        }, BiliImgService.add_img_btn = function() {
            $(".video-data").last().append(BiliImgService.btn), $("body").on("click", "#findimg", (function() {
                _.queryBiliImg((function(t) {
                    t.code ? y.open("\u5c01\u9762\u9171", '<img src="' + t.data + '" style="width: 705px;height: 400px;">', [ "725px", "400px" ]) : y.error("\u54ce\u54df\u6ca1\u627e\u5230\u5c01\u9762\u54e6\uff0c\u8981\u4e0d\u8ddf\u4f5c\u8005\u62a5\u544a\u4e00\u4e0b\uff1f");
                }));
            }));
        }, BiliImgService.add_down_btn = function() {
            var t = this;
            $(".video-data").last().append(BiliImgService.down), $("body").on("click", "#downvideo", (function() {
                var e, n, o = unsafeWindow.__INITIAL_STATE__.videoData.aid, i = null !== (n = null === (e = unsafeWindow.__INITIAL_STATE__.cidMap[o]) || void 0 === e ? void 0 : e.cid) && void 0 !== n ? n : unsafeWindow.__INITIAL_STATE__.videoData.cid, r = o.toString() + i.toString() + "MDD";
                if (c.debug([ o, i ]), o && i) {
                    var a = h.get(r, !1);
                    a ? y.confim("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + a.hd + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function(t) {
                        s.open(a.url);
                    }), !0) : _.queryBiliDown(o, i, (function(e) {
                        if ("" != e.url && null != e.url) h.set(r, e, 60), y.confim("\u4e0b\u8f7d\u5730\u5740", "\u67e5\u8be2\u5230[" + e.hd + "]\uff0c\u662f\u5426\u4e0b\u8f7d\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function(t) {
                            s.open(e.url);
                        }), !0); else {
                            var n = h.get(r + "TU", !1);
                            n ? s.open(n) : v.get_text("" + _.bilijx + u.url).then((function(e) {
                                e = e.match(/hahaha =[ ]*'(.*)'/)[1], e = t.decrypt(e), h.set(r + "TU", e, 60), 
                                s.open(e);
                            }));
                        }
                    }));
                } else y.error("\u6682\u4e0d\u652f\u6301\u5f53\u524d\u89c6\u9891\uff0c\u5982\u6709\u7591\u95ee\u8bf7\u5e26\u4e0a\u94fe\u63a5\u8be2\u95ee\u4f5c\u8005");
            }));
        }, BiliImgService.decrypt = function(t) {
            return i.default.AES.decrypt(t, i.default.enc.Latin1.parse(s.decode("YmVpYmVpZG91eXUxMjM0NQ==")), {
                iv: i.default.enc.Latin1.parse(s.decode("YmVpYmVpMTIzNDU2Nzg5MA==")),
                mode: i.default.mode.CBC,
                adding: i.default.pad.ZeroPadding
            }).toString(i.default.enc.Utf8);
        }, BiliImgService.btn = '\n    <span id="findimg" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u83b7\u53d6\u5c01\u9762\n    </span>', 
        BiliImgService.down = '\n    <span id="downvideo" style="\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    ">\n        \u4e0b\u8f7d\u89c6\u9891\n    </span>', 
        BiliImgService;
    }(j), N = function(t) {
        function MovieService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ H.YouKu, /youku/i ], [ H.IQiYi, /iqiyi/i ], [ H.LeShi, /le.com/i ], [ H.Tencent_V, /v.qq/i ], [ H.TuDou, /tudou/i ], [ H.MangGuo, /mgtv/i ], [ H.SoHu, /sohu/i ], [ H.Acfun, /acfun/i ], [ H.BiliBili, /bilibili/i ], [ H.M1905, /1905.com/i ], [ H.PPTV, /pptv.com/i ], [ H.YinYueTai, /yinyuetai/ ] ]), 
            e.menu = new A.Menu, e;
        }
        return __extends(MovieService, t), MovieService.prototype.loader = function() {
            "undefined" == typeof $ && s.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
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
                s.open("http://tv.wandhi.com/go.html?url=" + encodeURIComponent(window.location.href));
            })), $("body").on("click", "[data-cat=search]", (function() {
                s.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                s.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                s.open("https://t.cn/A6LoYnHT");
            }));
        }, MovieService;
    }(j), W = function(t) {
        function JdService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ H.JingDong, /item.jd/i ] ]), e;
        }
        var e;
        return __extends(JdService, t), JdService.prototype.loader = function() {
            this.historyService.linkTest() && this.historyService.Process();
        }, JdService.prototype.run = function() {
            var t = $(".sku-name").text().trim();
            $("#choose-btns").prepend('<a href="javascript:;" class="btn-special1 btn-lg btn-yhj"><span class="">\u67e5\u8be2\u4f18\u60e0\u5238</span></a>'), 
            $(".btn-yhj").on("click", (function() {
                s.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(t));
            }));
        }, __decorate([ WandhiAuto, __metadata("design:type", "function" == typeof (e = void 0 !== P && P) ? e : Object) ], JdService.prototype, "historyService", void 0), 
        JdService;
    }(j), J = function() {
        function UrlHelper() {}
        return UrlHelper.Bind = function(t, e, n) {
            $(t).click((function() {
                s.openUrl($(this).data("key"));
            }));
        }, UrlHelper.urlEncode = function(t) {
            return encodeURIComponent(t);
        }, UrlHelper.urlDecode = function(t) {
            return decodeURIComponent(t);
        }, UrlHelper;
    }(), G = function(t) {
        function MusicService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ H.WangYi, /163(.*)song/i ], [ H.Tencent_M, /y.QQ(.*)song/i ], [ H.KuGou, /kugou.com\/song\/*/i ], [ H.KuWo, /kuwo(.*)yinyue/i ], [ H.XiaMi, /xiami/i ], [ H.TaiHe, /taihe.com/i ], [ H.QingTing, /qingting/i ], [ H.LiZhi, /lizhi/i ], [ H.MiGu, /migu/i ], [ H.XiMaLaYa, /ximalaya/i ] ]), 
            e.menu = new A.Menu, e;
        }
        return __extends(MusicService, t), MusicService.prototype.loader = function() {
            s.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
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
                if (/ximalaya/i.test(u.url)) if (__INITIAL_STATE__ && null != __INITIAL_STATE__.SoundDetailPage) s.open("http://music.wandhi.com/?id=" + __INITIAL_STATE__.SoundDetailPage.trackId + "&type=ximalaya"); else {
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
                } else /taihe.com/i.test(u.url) ? s.open("http://music.wandhi.com/?url=" + J.urlEncode(u.url.replace("taihe", "baidu"))) : s.open("http://music.wandhi.com/?url=" + J.urlEncode(u.url));
            })), $("body").on("click", "[data-cat=search]", (function() {
                s.open("http://tv.wandhi.com/");
            })), $("body").on("click", "[data-cat=tb]", (function() {
                s.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                s.open("https://t.cn/A6LoYnHT");
            }));
        }, MusicService;
    }(j), K = function(t) {
        function StuService() {
            var e = t.call(this) || this;
            return e.rules = new Map([ [ H.SXB, /shangxueba.com\/ask\/.*html/i ] ]), e;
        }
        return __extends(StuService, t), StuService.prototype.loader = function() {
            "undefined" == typeof $ && s.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js"), 
            s.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
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
                _.querySbx($("#Hidd_id").val(), (function(t) {
                    t.status ? (y.open("\u7b54\u6848", t.msg), _.sbxFeedback(dataid, t.msg)) : "wronganhao" == t.msg ? (y.prompt("\u53e3\u4ee4\u9519\u8bef\uff0c\u8bf7\u5c06\u5f39\u51fa\u7684\u9875\u9762\u4e2d\u7684\u53e3\u4ee4\u586b\u5165\u540e\u91cd\u8bd5\uff01", h.get("sxb_anhao", ""), (function(t) {
                        h.set("sxb_anhao", t), y.info("\u8bf7\u518d\u6b21\u70b9\u51fb\u67e5\u770b\u7b54\u6848\u6309\u94ae");
                    }), 4), s.open("http://www.lelunwen.com/e/action/ListInfo/?classid=45")) : y.confim("\u6ca1\u67e5\u5230\u7b54\u6848", "\u8981\u4e0d\u8981\u8df3\u8f6c\u5230\u67e5\u8be2\u9875\u770b\u770b\uff1f", [ "\u597d\u7684\u8d70\u8d77", "\u8fd8\u662f\u7b97\u4e86" ], (function() {
                        s.open(u.url.replace("shangxueba", "shangxueba365"));
                    }));
                }));
            })), $("body").on("click", "[data-cat=tb]", (function() {
                s.open("https://t.cn/A6LoYknW");
            })), $("body").on("click", "[data-cat=jd]", (function() {
                s.open("https://t.cn/A6LoYnHT");
            }));
        }, StuService;
    }(j), F = function() {
        function OneKeyVipInjection() {
            this.plugins = new Array, this.plugins = [ q.Require(V), q.Require(U), q.Require(N), q.Require(E), q.Require(W), q.Require(G), q.Require(K), q.Require(P) ], 
            c.info("container loaded");
        }
        return OneKeyVipInjection.prototype.Init = function() {
            this.plugins.every((function(t) {
                return !t.linkTest() || (new Promise((function(t) {
                    t();
                })).then(t.Process), c.debug("element unique:" + t.unique()), !t.unique());
            }));
        }, OneKeyVipInjection;
    }();
    c.level = r.info, q.Require(F).Init();
}));
