// ==UserScript==
// @name         【玩的嗨】VIP工具箱,全网VIP视频免费破解去广告,一站式音乐搜索下载,获取B站封面,下载B站视频,上学吧答案获取等众多功能聚合 2021-06-10 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.2.25
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

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue'), require('crypto-js')) :
    typeof define === 'function' && define.amd ? define(['vue', 'crypto-js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue, global.CryptoJS));
}(this, (function (Vue, CryptoJS) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
    var CryptoJS__default = /*#__PURE__*/_interopDefaultLegacy(CryptoJS);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var update_key = "isUpdate";
    var Min = 60;
    var Hour = 60 * Min;
    var B1 = "YmVpYmVpZG91eXUxMjM0NQ==";
    var B2 = "YmVpYmVpMTIzNDU2Nzg5MA==";

    var Logger = (function () {
        function Logger() {
        }
        Logger.log = function (msg, level) {
            console.group("vip[" + level.toString() + "]");
            console.log(msg);
            console.groupEnd();
        };
        Logger.debug = function (msg) {
            this.log(msg, LogLevel.debug);
        };
        Logger.info = function (msg) {
            this.log(msg, LogLevel.info);
        };
        Logger.warn = function (msg) {
            this.log(msg, LogLevel.warn);
        };
        Logger.error = function (msg) {
            this.log(msg, LogLevel.error);
        };
        return Logger;
    }());
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["debug"] = 0] = "debug";
        LogLevel[LogLevel["info"] = 1] = "info";
        LogLevel[LogLevel["warn"] = 2] = "warn";
        LogLevel[LogLevel["error"] = 3] = "error";
    })(LogLevel || (LogLevel = {}));

    var Config = (function () {
        function Config() {
        }
        Object.defineProperty(Config, "env", {
            get: function () {
                return GM_info;
            },
            enumerable: false,
            configurable: true
        });
        Config.get = function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = ""; }
            var objStr = GM_getValue(this.encode(key), defaultValue);
            if (objStr) {
                var obj = JSON.parse(objStr);
                if (obj.exp == -1 || obj.exp > new Date().getTime()) {
                    Logger.info("cache true");
                    return obj.value;
                }
            }
            Logger.info("cache false");
            return defaultValue;
        };
        Config.set = function (key, v, exp) {
            if (exp === void 0) { exp = -1; }
            var obj = {
                key: key,
                value: v,
                exp: exp == -1 ? exp : new Date().getTime() + exp * 1000
            };
            GM_setValue(this.encode(key), JSON.stringify(obj));
        };
        Config.clear = function (key) {
            this.set(key, null, -10);
        };
        Config.decode = function (str) {
            return atob(str);
        };
        Config.encode = function (str) {
            return btoa(str);
        };
        return Config;
    }());

    var History = (function () {
        function History() {
            this.max = 0;
            this.price_detail = [];
        }
        return History;
    }());
    var PriceDetail = (function () {
        function PriceDetail() {
        }
        return PriceDetail;
    }());
    var ListPriceItem = (function () {
        function ListPriceItem() {
        }
        return ListPriceItem;
    }());

    var Core = (function () {
        function Core() {
            this.topUrl = top.window.location.href;
            this.url = this.currentUrl();
        }
        Core.appendTo = function (selecter, html) {
            $(selecter).append(html);
        };
        Core.lazyload = function (callback, time) {
            if (time === void 0) { time = 5; }
            setTimeout(function () {
                callback();
            }, time * 1e3);
        };
        Core.aotulazyload = function (is_ok, callback, time) {
            if (time === void 0) { time = 5; }
            if (!is_ok()) {
                setTimeout(function () {
                    Core.aotulazyload(is_ok, callback, time);
                }, time * 1e3);
            }
            else {
                callback();
            }
        };
        Core.addUrl = function (key, url) {
            GM_setValue(key, url);
        };
        Core.openUrl = function (key) {
            this.open(GM_getValue(key));
        };
        Core.prototype.getPar = function (option, url) {
            if (url === void 0) { url = window.location.search; }
            var v = url.match(new RegExp("[\?\&]" + option + "=([^\&]+)", "i"));
            return v == null || v.length < 1 ? "" : v[1];
        };
        Core.appendCss = function (url) {
            var linkCSS = document.createElement("link");
            linkCSS.type = "text/css";
            linkCSS.rel = "stylesheet";
            linkCSS.href = url;
            Core.head.appendChild(linkCSS);
        };
        Core.appendCssContent = function (content) {
            var Style = document.createElement("style");
            Style.innerHTML = content;
            Core.head.appendChild(Style);
        };
        Core.prototype.bodyAppendCss = function (url) {
            $('body').append($('<link rel="stylesheet" href="' + url + '">'));
        };
        Core.bodyAppend = function (html) {
            $("body").append(html);
        };
        Core.appendJs = function (url) {
            var linkScript = document.createElement("script");
            linkScript.type = "text/" + ("javascript");
            linkScript.src = url;
            this.head.appendChild(linkScript);
        };
        Core.prototype.bodyAppendJs = function (url) {
            $('body').append($('<script type="text/javascript" src="' + url + '"></script>'));
        };
        Core.prototype.currentUrl = function () {
            return window.location.href;
        };
        Core.format = function (time, fmt) {
            if (fmt === void 0) { fmt = 'yyyy-MM-dd hh:mm:ss'; }
            var o = {
                "M+": time.getMonth() + 1,
                "d+": time.getDate(),
                "h+": time.getHours(),
                "m+": time.getMinutes(),
                "s+": time.getSeconds(),
                "q+": Math.floor((time.getMonth() + 3) / 3),
                "S": time.getMilliseconds()
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        };
        Core.encode = function (str) {
            return window.btoa(str);
        };
        Core.decode = function (str) {
            return window.atob(str);
        };
        Core.prototype.Msg = function (msg) {
            return layer.msg(msg, { icon: 5 });
        };
        Core.prototype.showContent = function (title, content) {
            return layer.open({ type: 1, title: title, shade: 0, content: content });
        };
        Core.prototype.close = function (obj) {
            layer.close(obj);
        };
        Core.prototype.closeAll = function () {
            layer.closeAll();
        };
        Core.open = function (url, loadInBackGround) {
            if (loadInBackGround === void 0) { loadInBackGround = false; }
            GM_openInTab(url, loadInBackGround);
        };
        Core.uuid = function (len, split, radix) {
            if (len === void 0) { len = 10; }
            if (split === void 0) { split = false; }
            if (radix === void 0) { radix = 0; }
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix == 0 ? (radix || chars.length) : radix;
            if (!split) {
                for (i = 0; i < len; i++)
                    uuid[i] = chars[0 | Math.random() * radix];
            }
            else {
                var r = void 0;
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }
            return uuid.join('');
        };
        Core.head = document.getElementsByTagName('head')[0];
        Core.top_url = top.window.location.href;
        return Core;
    }());

    var Runtime = (function () {
        function Runtime() {
        }
        Object.defineProperty(Runtime, "url", {
            get: function () {
                return window.location.href;
            },
            enumerable: false,
            configurable: true
        });
        return Runtime;
    }());

    ((function () {
        function HttpRequest(option) {
            this.headers = new Map();
            this.url = option.url;
            this.method = option.methodType;
            this.dataType = option.dataType;
            this._option = option;
        }
        HttpRequest.prototype.onload = function (res) {
            this._option.onSuccess(res);
        };
        HttpRequest.prototype.onerror = function () {
            this.onerror();
        };
        HttpRequest.prototype.setQueryData = function (datas) {
            if (datas instanceof FormData) {
                this.data = datas;
            }
            else {
                var fd = new FormData();
                for (var i in datas) {
                    fd.append(i, datas[i]);
                }
                this.data = fd;
            }
        };
        Object.defineProperty(HttpRequest.prototype, "onLoad", {
            get: function () {
                return this.onSuccess;
            },
            enumerable: false,
            configurable: true
        });
        return HttpRequest;
    })());
    var AjaxOption = (function () {
        function AjaxOption(_url, _methodType, _data, _success, _header, timeOut) {
            if (_methodType === void 0) { _methodType = "GET"; }
            if (_header === void 0) { _header = new Map(); }
            if (timeOut === void 0) { timeOut = 10; }
            this.url = _url;
            this.methodType = _methodType;
            this.onSuccess = _success;
            this.onError = _success;
            this.data = _data;
            this.headers = _header;
            this.timeOut = timeOut;
        }
        AjaxOption.prototype.getData = function () {
            if (this.data instanceof FormData) {
                return this.data;
            }
            else if (this.data instanceof Map) {
                var fd_1 = new FormData();
                this.data.forEach(function (v, k) {
                    fd_1.append(k, v);
                });
                return fd_1;
            }
            else {
                var fd = new FormData();
                for (var i in this.data) {
                    fd.append(i, this.data[i]);
                }
                return fd;
            }
        };
        return AjaxOption;
    }());

    var Alert = (function () {
        function Alert() {
        }
        Alert.open = function (titls, content, area, shade, offset, maxmin) {
            if (area === void 0) { area = ['400px', '300px']; }
            if (shade === void 0) { shade = 0; }
            if (offset === void 0) { offset = "lb"; }
            if (maxmin === void 0) { maxmin = true; }
            return layer.open({
                type: 1,
                title: titls,
                area: area,
                shade: shade,
                offset: offset,
                maxmin: maxmin,
                content: content
            });
        };
        Alert.info = function (msg) {
            return layer.msg(msg, { time: 2000 });
        };
        Alert.error = function (msg) {
            return layer.msg(msg, { icon: 5, time: 2000 });
        };
        Alert.confim = function (title, msg, buttons, callback, auto_close) {
            if (auto_close === void 0) { auto_close = false; }
            var tid = layer.open({
                type: 1,
                title: title || false,
                closeBtn: 1,
                shade: 0.8,
                id: 'LAY_layuipro',
                resize: false,
                btn: buttons,
                btnAlign: 'c',
                moveType: 1,
                content: "<div style=\"padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;\">" + msg + "</div>",
                yes: function (index) {
                    callback(index);
                    if (auto_close) {
                        Core.lazyload(function () {
                            layer.close(tid);
                        });
                    }
                }
            });
            return tid;
        };
        Alert.prompt = function (title, v, callback, size, type) {
            if (type === void 0) { type = 0; }
            layer.prompt({
                title: title,
                value: v,
                formType: type,
            }, function (v, i, ele) {
                callback(v);
                layer.close(i);
            });
        };
        Alert.close = function (index) {
            layer.close(index);
        };
        Alert.closeAll = function () {
            layer.closeAll();
        };
        Alert.loading = function (style, _time, _shade) {
            if (style === void 0) { style = 1; }
            if (_time === void 0) { _time = 10; }
            if (_shade === void 0) { _shade = 0.3; }
            return layer.load(style, { shade: _shade, time: _time * 1000 });
        };
        return Alert;
    }());

    var Http = (function () {
        function Http() {
        }
        Http.ajax = function (option) {
            var _a, _b;
            option.headers.set('User-Agent', 'Mozilla/4.0 (compatible) Greasemonkey');
            option.headers.set('Accept', 'application/atom+xml,application/xml,text/xml');
            var head = new HttpHeaders();
            head['version'] = Config.env.script.version;
            head['auth'] = (_a = Config.env.script.author) !== null && _a !== void 0 ? _a : '';
            head['namespace'] = (_b = Config.env.script.namespace) !== null && _b !== void 0 ? _b : '';
            option.headers.forEach(function (v, k) {
                head[k] = v;
            });
            GM_xmlhttpRequest({
                url: option.url,
                method: option.methodType,
                headers: head,
                data: option.getData(),
                timeout: 1000 * option.timeOut,
                onload: function (res) {
                    var _a, _b;
                    try {
                        (_a = option.onSuccess) === null || _a === void 0 ? void 0 : _a.call(option, option.methodType == "POST" ? JSON.parse(res.responseText) : res.responseText);
                    }
                    catch (error) {
                        Alert.confim("", "                                        \n                        <h1>\u54CD\u5E94\u5F02\u5E38\uFF0C\u8BF7\u590D\u5236\u4E0B\u5217\u4FE1\u606F\u5411\u5F00\u53D1\u8005\u53CD\u9988\u95EE\u9898</h1><br>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u65E5\u5FD7\uFF1A</span><br>\n                        <p>" + error + "(" + res.status + ")</p>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u8BE6\u60C5\uFF1A</span><br>\n                        <p>" + escape(res.responseText) + "</p>                        \n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u73AF\u5883\u4FE1\u606F\uFF1A</span><br>\n                        <p>\u6CB9\u7334\u7248\u672C\uFF1A" + Config.env.version + "</p>\n                        <p>\u811A\u672C\u7248\u672C\uFF1A" + Config.env.script.version + "</p>\n                        <p>Url\uFF1A" + Runtime.url + "</p>\n                    ", ['去反馈', "\u5173\u95ED"], function () {
                            Core.open("https://gitee.com/ixysy/OneKeyVip/issues");
                        });
                        (_b = option.onSuccess) === null || _b === void 0 ? void 0 : _b.call(option, null);
                    }
                },
                onerror: function (res) {
                    var _a;
                    Alert.confim("", "              \n                        <h1>\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u590D\u5236\u4E0B\u5217\u4FE1\u606F\u5411\u5F00\u53D1\u8005\u53CD\u9988\u95EE\u9898</h1><br>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u8BE6\u60C5\uFF1A</span><br>\n                        <p>" + escape(res.responseText) + "(" + res.status + ")</p>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u73AF\u5883\u4FE1\u606F\uFF1A</span><br>\n                        <p>\u6CB9\u7334\u7248\u672C\uFF1A" + Config.env.version + "</p>\n                        <p>\u811A\u672C\u7248\u672C\uFF1A" + Config.env.script.version + "</p>\n                        <p>Url\uFF1A" + Runtime.url + "</p>           \n                    ", ['去反馈', "\u5173\u95ED"], function () {
                        Core.open("https://gitee.com/ixysy/OneKeyVip/issues");
                    });
                    (_a = option.onError) === null || _a === void 0 ? void 0 : _a.call(option, res);
                }
            });
        };
        Http.getData = function (url, callback) {
            $.getJSON(url, function (d) {
                callback(d);
            });
        };
        Http.JqGet = function (url, callback) {
            $.getJSON(url, function (d) {
                callback(d);
            });
        };
        Http.post = function (url, data, timeOut) {
            if (timeOut === void 0) { timeOut = 10; }
            var index = Alert.loading();
            var p = new Promise(function (resolve) {
                Http.ajax(new AjaxOption(url, "POST", data, function (data) {
                    Alert.close(index);
                    resolve(data);
                }, new Map(), timeOut));
            });
            return p;
        };
        Http.get = function (url, data, time_out) {
            if (data === void 0) { data = new Map(); }
            if (time_out === void 0) { time_out = 10; }
            Alert.loading();
            var p = new Promise(function (resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, function (data) {
                    var _a;
                    try {
                        var res = (_a = JSON.parse(data)) !== null && _a !== void 0 ? _a : data;
                        resolve(res);
                    }
                    catch (error) {
                        Logger.debug(error);
                        reject();
                    }
                }, new Map(), time_out));
            });
            return p;
        };
        Http.getWithHead = function (url, data, head, time_out) {
            if (data === void 0) { data = new Map(); }
            if (head === void 0) { head = new Map(); }
            if (time_out === void 0) { time_out = 10; }
            Alert.loading();
            var p = new Promise(function (resolve, reject) {
                Http.ajax(new AjaxOption(url, "GET", data, function (data) {
                    var _a;
                    try {
                        var res = (_a = JSON.parse(data)) !== null && _a !== void 0 ? _a : data;
                        resolve(res);
                    }
                    catch (error) {
                        Logger.debug(error);
                        reject();
                    }
                }, head, time_out));
            });
            return p;
        };
        Http.postWithHead = function (url, data, head, time_out) {
            if (data === void 0) { data = new Map(); }
            if (head === void 0) { head = new Map(); }
            if (time_out === void 0) { time_out = 10; }
            Alert.loading();
            var p = new Promise(function (resolve, reject) {
                Http.ajax(new AjaxOption(url, "POST", data, function (data) {
                    try {
                        resolve(data);
                    }
                    catch (error) {
                        Logger.debug([url, error]);
                        reject();
                    }
                }, head, time_out));
            });
            return p;
        };
        Http.get_text = function (url) {
            var p = new Promise(function (resolve) {
                Http.ajax(new AjaxOption(url, "GET", new Map(), function (data) {
                    resolve(data);
                }));
            });
            return p;
        };
        return Http;
    }());
    var HttpHeaders = (function () {
        function HttpHeaders() {
        }
        return HttpHeaders;
    }());

    var Convert = (function () {
        function Convert() {
        }
        Convert.genterData = function (data) {
            var _data = new History();
            _data.date = Core.format(new Date(Number.parseInt(data.lowerDate.match(/[0-9]{13}/)[0]) + 800), 'yyyy-MM-dd');
            _data.min = data.lowerPrice;
            _data.max = _data.min;
            _data.max_date = _data.date;
            _data.current = data.currentPrice.toString();
            _data.mark = data.changPriceRemark == '' ? "\u6682\u65E0" : data.changPriceRemark;
            if (data.listPrice.length == 0 || !data.listPrice) {
                var temp_1 = [];
                data.datePrice.split('],[').forEach(function (v, n) {
                    var t = new ListPriceItem();
                    v = v.replace(/\[|"|\]/g, '');
                    var values = v.split(',');
                    t.pr = Number.parseInt(values[1]);
                    t.yh = values.length == 3 ? values[2] : (v.substring(v.indexOf(values[2]), v.length));
                    t.dt = values[0];
                    temp_1.push(t);
                });
                data.listPrice = temp_1;
            }
            data.listPrice.forEach(function (v, n) {
                var detail = new PriceDetail();
                detail.timestamp = Number.parseInt(v.dt.match(/[0-9]{13}/)[0]) + 800;
                detail.time = Core.format(new Date(detail.timestamp), 'yyyy-MM-dd');
                detail.price = v.pr;
                detail.mark = v.yh;
                if (_data.max < v.pr) {
                    _data.max = v.pr;
                    _data.max_date = detail.time;
                }
                _data.price_detail.push(detail);
            });
            return _data;
        };
        Convert.genterDataV2 = function (data) {
            debugger;
            var _data = new History();
            _data.date = Core.format(new Date(data.lowerDate), 'yyyy-MM-dd');
            _data.min = data.lowerPrice;
            _data.max = _data.min;
            _data.max_date = _data.date;
            _data.current = data.currentPrice.toString();
            _data.mark = data.changPriceRemark == '' ? "\u6682\u65E0" : data.changPriceRemark;
            var listPrice = [];
            if (data.datePrice.length != 0) {
                var temp_2 = [];
                data.datePrice.split('],[').forEach(function (v, n) {
                    var t = new ListPriceItem();
                    v = v.replace(/\[|"|\]/g, '');
                    var values = v.split(',');
                    t.pr = Number.parseInt(values[1]);
                    t.yh = values.length == 3 ? values[2] : (v.substring(v.indexOf(values[2]), v.length));
                    t.dt = values[0];
                    temp_2.push(t);
                });
                listPrice = temp_2;
            }
            listPrice.forEach(function (v, n) {
                var detail = new PriceDetail();
                detail.timestamp = Number.parseInt(v.dt.match(/[0-9]{13}/)[0]) + 800;
                detail.time = Core.format(new Date(detail.timestamp), 'yyyy-MM-dd');
                detail.price = v.pr;
                detail.mark = v.yh;
                if (_data.max < v.pr) {
                    _data.max = v.pr;
                    _data.max_date = detail.time;
                }
                _data.price_detail.push(detail);
            });
            return _data;
        };
        Convert.genterAuth = function () {
            return __awaiter(this, void 0, Promise, function () {
                var _auth;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _auth = Config.get('baseauth', '');
                            if (!_auth) return [3, 2];
                            return [4, _auth];
                        case 1: return [2, _a.sent()];
                        case 2: return [4, Http.get_text(this.authApi).then(function (html) {
                                var matchR = html.match(/id=\"ticket\" value=\"(.*)\"/i);
                                _auth = matchR != null ? "" + matchR[1] : "";
                                if (_auth.length > 4) {
                                    _auth = (_auth.substr(_auth.length - 0x4, 0x4) +
                                        _auth.substring(0x0, _auth.length - 0x4));
                                    _auth = "BasicAuth " + _auth;
                                }
                                Config.set('baseauth', _auth, 60);
                                return _auth;
                            })];
                        case 3:
                            _auth = _a.sent();
                            return [2, _auth];
                    }
                });
            });
        };
        Convert.authApi = "https://tool.manmanbuy.com/HistoryLowest.aspx";
        return Convert;
    }());

    var Result = (function () {
        function Result() {
        }
        Result.prototype.constructorq = function () { };
        return Result;
    }());
    ((function (_super) {
        __extends(StuResult, _super);
        function StuResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StuResult;
    })(Result));
    ((function (_super) {
        __extends(StrResult, _super);
        function StrResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StrResult;
    })(Result));
    var HistoryResult = (function (_super) {
        __extends(HistoryResult, _super);
        function HistoryResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return HistoryResult;
    }(Result));
    ((function (_super) {
        __extends(HistoryQueryResult, _super);
        function HistoryQueryResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return HistoryQueryResult;
    })(Result));
    ((function (_super) {
        __extends(HistoryV1Result, _super);
        function HistoryV1Result() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return HistoryV1Result;
    })(Result));
    ((function (_super) {
        __extends(HistoryV2Result, _super);
        function HistoryV2Result() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return HistoryV2Result;
    })(Result));

    var Route = (function () {
        function Route() {
            this.queryTao = "";
        }
        Object.defineProperty(Route, "apiRoot", {
            get: function () {
                return "https://api.wandhi.com/api";
            },
            enumerable: false,
            configurable: true
        });
        Route.baseApi = function (api, data, callback, timeOut) {
            if (timeOut === void 0) { timeOut = 10; }
            Http.post(Route.apiRoot + api, data, timeOut).then(function (res) {
                callback(res);
            });
        };
        Route.querySbx = function (id, callback) {
            var _this = this;
            if (Config.get(this.sxb_key, "") !== "") {
                this.query365(id, Config.get(this.sxb_key), callback);
            }
            else {
                this.queryValue('sxb_anhao', function (res) {
                    _this.query365(id, res.data, callback);
                });
            }
        };
        Route.sbxFeedback = function (id, answer) {
            this.baseApi('/tools/record', new Map([
                ['id', id],
                ['data', answer],
                ['anhao', Config.get(this.sxb_key)]
            ]), function () {
            });
        };
        Route.query365 = function (id, anhao, callback) {
            var api = Config.get('sxb_api');
            if (!api) {
                this.queryValue('sxb_api', function (res) {
                    Config.set('sxb_api', res.data, 1000 * 60 * 60 * 24);
                    Http.post(res.data, new Map([
                        ["docinfo", "https://www.shangxueba.com/ask/" + id + ".html"],
                        ["anhao", anhao]
                    ]));
                });
            }
            else {
                Http.post(api, new Map([
                    ["docinfo", "https://www.shangxueba.com/ask/" + id + ".html"],
                    ["anhao", anhao]
                ])).then(function (res) {
                    callback(res);
                });
            }
        };
        Route.queryValue = function (key, callback) {
            this.baseApi(Route.config, new Map([
                ["key", key]
            ]), callback);
        };
        Route.queryHistory = function (url, siteType, callback) {
            this.baseApi(this.history, new Map([['url', url], ['type', siteType]]), callback);
        };
        Route.queryHistoryv1 = function (url, siteType, callback) {
            var _this = this;
            var that = this;
            this.baseApi(this.historyv1, new Map([['url', url]]), function (res) {
                Logger.debug(res);
                if (res.code) {
                    Http.get(res.data).then(function (prices) {
                        var _res = new HistoryResult();
                        _res.code = 1;
                        _res.data = Convert.genterData(prices);
                        Logger.debug(_res);
                        callback(_res);
                    }).catch(function () {
                        that.queryHistory(url, siteType, callback);
                    });
                }
                else {
                    _this.queryHistory(url, siteType, callback);
                }
            }, 60);
        };
        Route.queryHistoryv2 = function (url, siteType, callback) {
            var _this = this;
            var that = this;
            this.baseApi(this.historyv2, new Map([['url', url]]), function (res) {
                Logger.debug(res);
                if (res.code) {
                    Http.getWithHead(res.data.url, new Map(), new Map([['Authorization', res.data.auth]])).then(function (prices) {
                        var _res = new HistoryResult();
                        if (prices.code == 0) {
                            _res.code = 1;
                        }
                        else {
                            _res.code = -1;
                        }
                        _res.code = 1;
                        _res.data = Convert.genterDataV2(prices.data);
                        Logger.debug(_res);
                        callback(_res);
                    }).catch(function () {
                        that.queryHistory(url, siteType, callback);
                    });
                }
                else {
                    _this.queryHistory(url, siteType, callback);
                }
            }, 60);
        };
        Route.queryHistoryv3 = function (url, siteType, callback) {
            var _this = this;
            var that = this;
            this.baseApi(this.historyv3, new Map([['url', url]]), function (res) {
                Logger.debug(res);
                if (res.code) {
                    Convert.genterAuth().then(function (auth) {
                        Http.postWithHead(res.data.url, new Map([
                            ['token', res.data.token],
                            ['t', res.data.t],
                            ['key', res.data.key],
                            ['method', res.data.method]
                        ]), new Map([['Authorization', auth !== null && auth !== void 0 ? auth : res.data.auth]])).then(function (prices) {
                            var _res = new HistoryResult();
                            if (prices.code == 0) {
                                _res.code = 1;
                            }
                            else if (prices.code == 2) {
                                Config.clear('baseauth');
                                _this.queryHistoryv3(url, siteType, callback);
                            }
                            else {
                                _res.code = -1;
                            }
                            _res.code = 1;
                            _res.data = Convert.genterDataV2(prices.data);
                            Logger.debug(_res);
                            callback(_res);
                        }).catch(function () {
                            that.queryHistory(url, siteType, callback);
                        });
                    });
                }
                else {
                    _this.queryHistory(url, siteType, callback);
                }
            }, 60);
        };
        Route.queryHistoryV4 = function (url, siteType, callback) {
            var root = "https://browser.gwdang.com/extension/price_towards?url=" + encodeURIComponent(url) + "&ver=1&format=json&fp=378437f5078442c878e99f78720278c4";
            Http.JqGet(root, callback);
        };
        Route.queryBiliImg = function (aid, callback) {
            Http.getData(this.biliInfo + "?aid=" + aid, callback);
        };
        Route.queryBiliDown = function (aid, cid, callback) {
            Http.getData(this.bilidown + "?cid=" + cid + "&avid=" + aid + "&qn=112", callback);
        };
        Route.queryCoupons = function (itemId, callback) {
            this.baseApi(this.coupons, new Map([['id', itemId]]), callback);
        };
        Route.queryJdCoupons = function (itemId, callback) {
            Route.baseApi(Route.jd_coupons, new Map([['item_id', itemId]]), callback);
        };
        Route.querySnCoupons = function (url, callback) {
            Route.baseApi(Route.sn_coupons, new Map([['url', url]]), callback);
        };
        Route.queryVpCoupons = function (url, callback) {
            Route.baseApi(Route.vp_coupons, new Map([['url', url]]), callback);
        };
        Route.update_api = "https://cdn.jsdelivr.net/gh/maxzhang666/OneKeyVip/OneKeyVip.user.js?t=" + Core.uuid();
        Route.home_url = "https://wiki.wandhi.com";
        Route.install_url_one = "https://greasyfork.org/zh-CN/scripts/427735";
        Route.install_url_two = "https://tools.wandhi.com/scripts";
        Route.sxb_anhao = "http://www.lelunwen.com/e/action/ListInfo/?classid=45";
        Route.sxb_key = "sxb_anhao";
        Route.config = "/config/query";
        Route.history = "/history/";
        Route.historyv1 = "/history/v1";
        Route.historyv2 = "/history/v2";
        Route.historyv3 = "/history/v3";
        Route.bili = "/tools/bili";
        Route.biliInfo = "https://api.bilibili.com/x/web-interface/view";
        Route.bilidown = 'https://api.bilibili.com/x/player/playurl';
        Route.coupons = "/tb/infos/";
        Route.like = "/tb/guesslike";
        Route.jd_coupons = "/jd/info";
        Route.sn_coupons = "/sn/info";
        Route.vp_coupons = "/vp/info";
        return Route;
    }());

    var Toast = (function () {
        function Toast(msg, title, type) {
            this.creationTime = new Date;
            this.message = msg;
            this.type = type;
            this.title = title;
            this.duration = 3e3;
            this.randomKey = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER + 1));
        }
        Toast.prototype.show = function () {
            var _this = this;
            Toast.containerVM.cards.splice(0, 0, this);
            if (this.duration !== undefined && this.duration != -1) {
                setTimeout(function () { return _this.dismiss(); }, this.duration);
            }
        };
        Toast.prototype.dismiss = function () {
            if (Toast.containerVM.cards.includes(this)) {
                Toast.containerVM.cards.splice(Toast.containerVM.cards.indexOf(this), 1);
            }
        };
        Object.defineProperty(Toast.prototype, "element", {
            get: function () {
                return $(".toast-card[data-key='" + this.key + "']");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Toast.prototype, "key", {
            get: function () {
                return this.creationTime.toISOString() + ("[" + this.randomKey + "]");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Toast, "containerVM", {
            get: function () {
                if (!this.element) {
                    Toast.createToastContainer();
                }
                return this.element;
            },
            enumerable: false,
            configurable: true
        });
        Toast.createToastContainer = function () {
            if (!document.querySelector(".toast-card-container")) {
                document.body.insertAdjacentHTML("beforeend", "<transition-group class=\"toast-card-container\" name=\"toast-card-container\" tag=\"div\">\n                    <toast-card v-for=\"card of cards\" :data-key=\"card.key\" :key=\"card.key\" :card=\"card\"></toast-card>\n                </transition-group>");
                document.body.insertAdjacentHTML("afterend", "<style>.toast-card-container{--card-min-width:240px;--card-min-width-negative:-240px;position:fixed;left:0;bottom:0;display:flex;flex-direction:column-reverse;align-items:start;padding-left:16px;z-index:100001;pointer-events:none;overflow:hidden;width:100%;height:100%;transition:.2s ease-out}.toast-card-container *{pointer-events:initial;transition:.2s ease-out}.toast-card.toast-card-container-enter,.toast-card.toast-card-container-leave-to{opacity:0;transform:translateX(var(--card-min-width-negative))}.toast-card{background:#fff;min-width:var(--card-min-width);max-width:60vw;min-height:96px;margin:8px 0;box-shadow:rgba(0,0,0,.2) 0 4px 8px 0;transform-origin:left;overflow:hidden;display:flex;flex-direction:column;border-left-style:solid;transition:.3s cubic-bezier(.18,.89,.32,1.28);position:relative;border-left-width:0;padding-left:var(--corner-radius);border-radius:var(--corner-radius)}.toast-card.toast-card-container-leave-active{position:absolute;transition:.3s cubic-bezier(.6,-.28,.74,.05)}.toast-card-header{display:flex;align-items:center}.toast-card-title{font-size:18px;color:#000;opacity:.5;margin:16px;font-weight:700;flex:1 1 auto}.toast-card-dismiss{height:24px;width:24px;flex:0 0 auto;padding:16px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:.2s ease-out;transform-origin:center;opacity:.5;box-sizing:content-box}.toast-card-dismiss:hover{transform:scale(1.2)}.toast-card-dismiss:active{transform:scale(1.1)}.toast-card-message{color:#000;font-size:14px;margin:0 16px 16px;white-space:pre-wrap;display:flex;align-items:center;line-height:1.5;flex-wrap:wrap;word-break:break-all;max-height:200px;overflow:auto}.toast-card.toast-default{border-left-color:#444}.toast-card.toast-error{border-left-color:#f44336}.toast-card.toast-info{border-left-color:#2196f3}.toast-card.toast-success{border-left-color:#8bc34a}.toast-card .toast-card-border{position:absolute;height:100%;width:4px;border-radius:var(--corner-radius);height:calc(100% - 10px);width:var(--corner-radius);top:5px;left:0}.toast-card.toast-default .toast-card-border{background-color:#444}.toast-card.toast-error .toast-card-border{background-color:#f44336}.toast-card.toast-info .toast-card-border{background-color:#2196f3}.toast-card.toast-success .toast-card-border{background-color:#8bc34a}.toast-card .link,.toast-card span{display:inline-block;padding:4px 6px;margin:0 2px;background-color:#8882;text-decoration:none;color:#000;transition:.2s ease-out;border-radius:var(--corner-radius)}.toast-card .link:hover{background-color:#8883}.toast-card .link:active{background-color:#8884}.toast-card .download-link{color:inherit!important;text-decoration:underline;word-break:break-all}@keyframes loading{0%,100%{top:0;left:50%}25%{top:50%;left:100%}50%{top:100%;left:50%}75%{top:50%;left:0}}.toast-card .loading{width:14px;height:14px;display:inline-block;margin-right:14px;position:relative}.toast-card .loading::after{content:\"\";width:10px;height:10px;background-color:#8884;border-radius:50%;display:block;transform:translateX(-50%) translateY(-50%);position:absolute;top:0;left:50%;animation:1s cubic-bezier(.22,.61,.36,1) infinite loading}</style>");
                this.element = new Vue__default['default']({
                    el: ".toast-card-container",
                    components: {
                        "toast-card": {
                            props: ["card"],
                            template: "<div class=\"toast-card icons-enabled visible\" :class=\"'toast-' + card.type\">\n                            <div class=\"toast-card-border\"></div>\n                            <div class=\"toast-card-header\">\n                                <h1 class=\"toast-card-title\">{{card.title}}</h1>\n                                <div class=\"toast-card-dismiss\" @click=\"card.dismiss()\">\n                                    <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n                                        <path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" />\n                                    </svg>\n                                </div>\n                            </div>\n                        <div class=\"toast-card-message\" v-html=\"card.message\"></div>\n                        </div>"
                        }
                    },
                    data: {
                        cards: []
                    }
                });
            }
        };
        Toast.internalShow = function (msg, title, time, e) {
            var n = new Toast(msg, title, e);
            n.duration = time;
            n.show();
            return n;
        };
        Toast.show = function (msg, title, time) {
            if (time === void 0) { time = -1; }
            return this.internalShow(msg, title, time, ToastType.Default);
        };
        Toast.info = function (msg, title, time) {
            if (time === void 0) { time = -1; }
            return this.internalShow(msg, title, time, ToastType.Info);
        };
        Toast.success = function (msg, title, time) {
            if (time === void 0) { time = -1; }
            return this.internalShow(msg, title, time, ToastType.Success);
        };
        Toast.error = function (msg, title, time) {
            if (time === void 0) { time = -1; }
            return this.internalShow(msg, title, time, ToastType.Error);
        };
        return Toast;
    }());
    var ToastType;
    (function (ToastType) {
        ToastType["Default"] = "default";
        ToastType["Info"] = "info";
        ToastType["Success"] = "success";
        ToastType["Error"] = "error";
    })(ToastType || (ToastType = {}));

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;
      if (!css || typeof document === 'undefined') { return; }
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';
      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z$1 = "html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:\"Helvetica Neue\",Helvetica,\"Microsoft YaHei\",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}";
    styleInject(css_248z$1);

    var Common;
    (function (Common) {
        var Menu = (function () {
            function Menu() {
                this.core = new Core();
                this.site = /tv.wandhi.com/i;
                this.userAgent = navigator.userAgent;
                this.menusClass = ['first', 'second', 'third', 'fourth', 'fifth'];
                this.menuSelecter = "#Wandhi-nav";
            }
            Menu.prototype.loader = function () {
                Core.appendCssContent(this.getCss());
            };
            Menu.prototype.getBody = function (option) {
                return "<svg width=\"0\" height=\"0\"><defs><filter id=\"goo\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"></feGaussianBlur><feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"goo\"></feColorMatrix><feComposite in=\"SourceGraphic\" in2=\"goo\" operator=\"atop\"></feComposite></filter></defs></svg><div class=\"aside-nav bounceInUp animated\" id=\"Wandhi-nav\"><label for=\"\" class=\"aside-menu\" title=\"\u6309\u4F4F\u62D6\u52A8\">VIP</label>" + option + "</div>";
            };
            Menu.prototype.getCss = function () {
                return "html .aside-nav{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;font-size:62.5%}body .aside-nav{font-family:\"Helvetica Neue\",Helvetica,\"Microsoft YaHei\",Arial,sans-serif;margin:0;font-size:1.6rem;color:#4e546b}.aside-nav{position:fixed;top:350px;width:260px;height:260px;-webkit-filter:url(#goo);filter:url(#goo);-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;opacity:.75;z-index:20180817}.aside-nav.no-filter{-webkit-filter:none;filter:none}.aside-nav .aside-menu{position:absolute;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;background:#f34444;left:0;top:0;right:0;bottom:0;margin:auto;text-align:center;line-height:70px;color:#fff;font-size:20px;z-index:1;cursor:move}.aside-nav .menu-item{position:absolute;width:60px;height:60px;background-color:#ff7676;left:0;top:0;right:0;bottom:0;margin:auto;line-height:60px;text-align:center;-webkit-border-radius:50%;border-radius:50%;text-decoration:none;color:#fff;-webkit-transition:background .5s,-webkit-transform .6s;transition:background .5s,-webkit-transform .6s;-moz-transition:transform .6s,background .5s,-moz-transform .6s;transition:transform .6s,background .5s;transition:transform .6s,background .5s,-webkit-transform .6s,-moz-transform .6s;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.aside-nav .menu-item:hover{background:#a9c734}.aside-nav .menu-line{line-height:20px;padding-top:10px}.aside-nav:hover{opacity:1}.aside-nav:hover .aside-menu{-webkit-animation:jello 1s;-moz-animation:jello 1s;animation:jello 1s}.aside-nav:hover .menu-first{-webkit-transform:translate3d(0,-135%,0);-moz-transform:translate3d(0,-135%,0);transform:translate3d(0,-135%,0)}.aside-nav:hover .menu-second{-webkit-transform:translate3d(120%,-70%,0);-moz-transform:translate3d(120%,-70%,0);transform:translate3d(120%,-70%,0)}.aside-nav:hover .menu-third{-webkit-transform:translate3d(120%,70%,0);-moz-transform:translate3d(120%,70%,0);transform:translate3d(120%,70%,0)}.aside-nav:hover .menu-fourth{-webkit-transform:translate3d(0,135%,0);-moz-transform:translate3d(0,135%,0);transform:translate3d(0,135%,0)}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-moz-keyframes jello{from,11.1%,to{-moz-transform:none;transform:none}22.2%{-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;-moz-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);-moz-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);-moz-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);-moz-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);-moz-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);-moz-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);-moz-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);-moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.animated{-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;animation-fill-mode:both}\n@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes bounceInUp{from,60%,75%,90%,to{-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(0.215,.61,.355,1);animation-timing-function:cubic-bezier(0.215,.61,.355,1)}from{opacity:0;-webkit-transform:translate3d(0,800px,0);-moz-transform:translate3d(0,800px,0);transform:translate3d(0,800px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);-moz-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);-moz-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);-moz-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;-moz-animation-name:bounceInUp;animation-name:bounceInUp;-webkit-animation-delay:1s;-moz-animation-delay:1s;animation-delay:1s}@media screen and (max-width:640px){}@media screen and (min-width:641px) and (max-width:1367px){.aside-nav{top:50px}}";
            };
            Menu.prototype.Init = function (menus, callback) {
                var _this = this;
                if (this.site.test(this.core.topUrl)) {
                    return;
                }
                this.loader();
                var str = "";
                menus.forEach(function (element, index) {
                    str += "<a href=\"javascript:void(0)\" title=\"" + element.title + "\" data-cat=\"" + element.type + "\" class=\"menu-item menu-line menu-" + _this.menusClass[index] + "\">" + element.show + "</a>";
                });
                Core.bodyAppend(this.getBody(str));
                /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                var drags = { down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0 };
                var asideNav = $(this.menuSelecter)[0];
                $("body").on("mousedown", "#Wandhi-nav", function (a) {
                    var getCss = function (a, e) {
                        var _a, _b, _c;
                        return (_b = (_a = document.defaultView) === null || _a === void 0 ? void 0 : _a.getComputedStyle(a, null)[e]) !== null && _b !== void 0 ? _b : ((_c = a.currentStyle) !== null && _c !== void 0 ? _c : a.currentStyle[e]);
                    };
                    drags.down = !0,
                        drags.clientX = a.clientX,
                        drags.clientY = a.clientY,
                        drags.x = parseInt(getCss(this, "left")),
                        drags.y = parseInt(getCss(this, "top")),
                        drags.winHei = $(window).height(),
                        drags.winWid = $(window).width(),
                        $(document).on("mousemove", function (a) {
                            var e = a.clientX - drags.clientX, t = a.clientY - drags.clientY;
                            asideNav = asideNav || $("#Wandhi-nav")[0];
                            asideNav.style.top = drags.y + t + "px";
                            asideNav.style.left = drags.x + e + "px";
                        });
                }).on("mouseup", "#Wandhi-nav", function () {
                    drags.down = !1, $(document).off("mousemove");
                });
                callback.call(this);
            };
            return Menu;
        }());
        Common.Menu = Menu;
    })(Common || (Common = {}));

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var Reflect$1;
    (function (Reflect) {
        (function (factory) {
            var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
                typeof self === "object" ? self :
                    typeof this === "object" ? this :
                        Function("return this;")();
            var exporter = makeExporter(Reflect);
            if (typeof root.Reflect === "undefined") {
                root.Reflect = Reflect;
            }
            else {
                exporter = makeExporter(root.Reflect, exporter);
            }
            factory(exporter);
            function makeExporter(target, previous) {
                return function (key, value) {
                    if (typeof target[key] !== "function") {
                        Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                    }
                    if (previous)
                        previous(key, value);
                };
            }
        })(function (exporter) {
            var hasOwn = Object.prototype.hasOwnProperty;
            var supportsSymbol = typeof Symbol === "function";
            var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
            var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
            var supportsCreate = typeof Object.create === "function";
            var supportsProto = { __proto__: [] } instanceof Array;
            var downLevel = !supportsCreate && !supportsProto;
            var HashMap = {
                create: supportsCreate
                    ? function () { return MakeDictionary(Object.create(null)); }
                    : supportsProto
                        ? function () { return MakeDictionary({ __proto__: null }); }
                        : function () { return MakeDictionary({}); },
                has: downLevel
                    ? function (map, key) { return hasOwn.call(map, key); }
                    : function (map, key) { return key in map; },
                get: downLevel
                    ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                    : function (map, key) { return map[key]; },
            };
            var functionPrototype = Object.getPrototypeOf(Function);
            var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
            var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
            var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
            var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
            var Metadata = new _WeakMap();
            function decorate(decorators, target, propertyKey, attributes) {
                if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators))
                        throw new TypeError();
                    if (!IsObject(target))
                        throw new TypeError();
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                        throw new TypeError();
                    if (IsNull(attributes))
                        attributes = undefined;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(decorators, target, propertyKey, attributes);
                }
                else {
                    if (!IsArray(decorators))
                        throw new TypeError();
                    if (!IsConstructor(target))
                        throw new TypeError();
                    return DecorateConstructor(decorators, target);
                }
            }
            exporter("decorate", decorate);
            function metadata(metadataKey, metadataValue) {
                function decorator(target, propertyKey) {
                    if (!IsObject(target))
                        throw new TypeError();
                    if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                        throw new TypeError();
                    OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                }
                return decorator;
            }
            exporter("metadata", metadata);
            function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            exporter("defineMetadata", defineMetadata);
            function hasMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasMetadata", hasMetadata);
            function hasOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("hasOwnMetadata", hasOwnMetadata);
            function getMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetMetadata(metadataKey, target, propertyKey);
            }
            exporter("getMetadata", getMetadata);
            function getOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
            }
            exporter("getOwnMetadata", getOwnMetadata);
            function getMetadataKeys(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryMetadataKeys(target, propertyKey);
            }
            exporter("getMetadataKeys", getMetadataKeys);
            function getOwnMetadataKeys(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryOwnMetadataKeys(target, propertyKey);
            }
            exporter("getOwnMetadataKeys", getOwnMetadataKeys);
            function deleteMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                var metadataMap = GetOrCreateMetadataMap(target, propertyKey,  false);
                if (IsUndefined(metadataMap))
                    return false;
                if (!metadataMap.delete(metadataKey))
                    return false;
                if (metadataMap.size > 0)
                    return true;
                var targetMetadata = Metadata.get(target);
                targetMetadata.delete(propertyKey);
                if (targetMetadata.size > 0)
                    return true;
                Metadata.delete(target);
                return true;
            }
            exporter("deleteMetadata", deleteMetadata);
            function DecorateConstructor(decorators, target) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsConstructor(decorated))
                            throw new TypeError();
                        target = decorated;
                    }
                }
                return target;
            }
            function DecorateProperty(decorators, target, propertyKey, descriptor) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target, propertyKey, descriptor);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsObject(decorated))
                            throw new TypeError();
                        descriptor = decorated;
                    }
                }
                return descriptor;
            }
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = Metadata.get(O);
                if (IsUndefined(targetMetadata)) {
                    if (!Create)
                        return undefined;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create)
                        return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                }
                return metadataMap;
            }
            function OrdinaryHasMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return true;
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent))
                    return OrdinaryHasMetadata(MetadataKey, parent, P);
                return false;
            }
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P,  false);
                if (IsUndefined(metadataMap))
                    return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            function OrdinaryGetMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn)
                    return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent))
                    return OrdinaryGetMetadata(MetadataKey, parent, P);
                return undefined;
            }
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P,  false);
                if (IsUndefined(metadataMap))
                    return undefined;
                return metadataMap.get(MetadataKey);
            }
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P,  true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            function OrdinaryMetadataKeys(O, P) {
                var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (parent === null)
                    return ownKeys;
                var parentKeys = OrdinaryMetadataKeys(parent, P);
                if (parentKeys.length <= 0)
                    return ownKeys;
                if (ownKeys.length <= 0)
                    return parentKeys;
                var set = new _Set();
                var keys = [];
                for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                    var key = ownKeys_1[_i];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                    var key = parentKeys_1[_a];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                return keys;
            }
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P,  false);
                if (IsUndefined(metadataMap))
                    return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    }
                    catch (e) {
                        try {
                            IteratorClose(iterator);
                        }
                        finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            function Type(x) {
                if (x === null)
                    return 1 ;
                switch (typeof x) {
                    case "undefined": return 0 ;
                    case "boolean": return 2 ;
                    case "string": return 3 ;
                    case "symbol": return 4 ;
                    case "number": return 5 ;
                    case "object": return x === null ? 1  : 6 ;
                    default: return 6 ;
                }
            }
            function IsUndefined(x) {
                return x === undefined;
            }
            function IsNull(x) {
                return x === null;
            }
            function IsSymbol(x) {
                return typeof x === "symbol";
            }
            function IsObject(x) {
                return typeof x === "object" ? x !== null : typeof x === "function";
            }
            function ToPrimitive(input, PreferredType) {
                switch (Type(input)) {
                    case 0 : return input;
                    case 1 : return input;
                    case 2 : return input;
                    case 3 : return input;
                    case 4 : return input;
                    case 5 : return input;
                }
                var hint = PreferredType === 3  ? "string" : PreferredType === 5  ? "number" : "default";
                var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                if (exoticToPrim !== undefined) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result))
                        throw new TypeError();
                    return result;
                }
                return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
            }
            function OrdinaryToPrimitive(O, hint) {
                if (hint === "string") {
                    var toString_1 = O.toString;
                    if (IsCallable(toString_1)) {
                        var result = toString_1.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                }
                else {
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                    var toString_2 = O.toString;
                    if (IsCallable(toString_2)) {
                        var result = toString_2.call(O);
                        if (!IsObject(result))
                            return result;
                    }
                }
                throw new TypeError();
            }
            function ToBoolean(argument) {
                return !!argument;
            }
            function ToString(argument) {
                return "" + argument;
            }
            function ToPropertyKey(argument) {
                var key = ToPrimitive(argument, 3 );
                if (IsSymbol(key))
                    return key;
                return ToString(key);
            }
            function IsArray(argument) {
                return Array.isArray
                    ? Array.isArray(argument)
                    : argument instanceof Object
                        ? argument instanceof Array
                        : Object.prototype.toString.call(argument) === "[object Array]";
            }
            function IsCallable(argument) {
                return typeof argument === "function";
            }
            function IsConstructor(argument) {
                return typeof argument === "function";
            }
            function IsPropertyKey(argument) {
                switch (Type(argument)) {
                    case 3 : return true;
                    case 4 : return true;
                    default: return false;
                }
            }
            function GetMethod(V, P) {
                var func = V[P];
                if (func === undefined || func === null)
                    return undefined;
                if (!IsCallable(func))
                    throw new TypeError();
                return func;
            }
            function GetIterator(obj) {
                var method = GetMethod(obj, iteratorSymbol);
                if (!IsCallable(method))
                    throw new TypeError();
                var iterator = method.call(obj);
                if (!IsObject(iterator))
                    throw new TypeError();
                return iterator;
            }
            function IteratorValue(iterResult) {
                return iterResult.value;
            }
            function IteratorStep(iterator) {
                var result = iterator.next();
                return result.done ? false : result;
            }
            function IteratorClose(iterator) {
                var f = iterator["return"];
                if (f)
                    f.call(iterator);
            }
            function OrdinaryGetPrototypeOf(O) {
                var proto = Object.getPrototypeOf(O);
                if (typeof O !== "function" || O === functionPrototype)
                    return proto;
                if (proto !== functionPrototype)
                    return proto;
                var prototype = O.prototype;
                var prototypeProto = prototype && Object.getPrototypeOf(prototype);
                if (prototypeProto == null || prototypeProto === Object.prototype)
                    return proto;
                var constructor = prototypeProto.constructor;
                if (typeof constructor !== "function")
                    return proto;
                if (constructor === O)
                    return proto;
                return constructor;
            }
            function CreateMapPolyfill() {
                var cacheSentinel = {};
                var arraySentinel = [];
                var MapIterator =  (function () {
                    function MapIterator(keys, values, selector) {
                        this._index = 0;
                        this._keys = keys;
                        this._values = values;
                        this._selector = selector;
                    }
                    MapIterator.prototype["@@iterator"] = function () { return this; };
                    MapIterator.prototype[iteratorSymbol] = function () { return this; };
                    MapIterator.prototype.next = function () {
                        var index = this._index;
                        if (index >= 0 && index < this._keys.length) {
                            var result = this._selector(this._keys[index], this._values[index]);
                            if (index + 1 >= this._keys.length) {
                                this._index = -1;
                                this._keys = arraySentinel;
                                this._values = arraySentinel;
                            }
                            else {
                                this._index++;
                            }
                            return { value: result, done: false };
                        }
                        return { value: undefined, done: true };
                    };
                    MapIterator.prototype.throw = function (error) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        throw error;
                    };
                    MapIterator.prototype.return = function (value) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        return { value: value, done: true };
                    };
                    return MapIterator;
                }());
                return  (function () {
                    function Map() {
                        this._keys = [];
                        this._values = [];
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    Object.defineProperty(Map.prototype, "size", {
                        get: function () { return this._keys.length; },
                        enumerable: true,
                        configurable: true
                    });
                    Map.prototype.has = function (key) { return this._find(key,  false) >= 0; };
                    Map.prototype.get = function (key) {
                        var index = this._find(key,  false);
                        return index >= 0 ? this._values[index] : undefined;
                    };
                    Map.prototype.set = function (key, value) {
                        var index = this._find(key,  true);
                        this._values[index] = value;
                        return this;
                    };
                    Map.prototype.delete = function (key) {
                        var index = this._find(key,  false);
                        if (index >= 0) {
                            var size = this._keys.length;
                            for (var i = index + 1; i < size; i++) {
                                this._keys[i - 1] = this._keys[i];
                                this._values[i - 1] = this._values[i];
                            }
                            this._keys.length--;
                            this._values.length--;
                            if (key === this._cacheKey) {
                                this._cacheKey = cacheSentinel;
                                this._cacheIndex = -2;
                            }
                            return true;
                        }
                        return false;
                    };
                    Map.prototype.clear = function () {
                        this._keys.length = 0;
                        this._values.length = 0;
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    };
                    Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                    Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                    Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                    Map.prototype["@@iterator"] = function () { return this.entries(); };
                    Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                    Map.prototype._find = function (key, insert) {
                        if (this._cacheKey !== key) {
                            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                        }
                        if (this._cacheIndex < 0 && insert) {
                            this._cacheIndex = this._keys.length;
                            this._keys.push(key);
                            this._values.push(undefined);
                        }
                        return this._cacheIndex;
                    };
                    return Map;
                }());
                function getKey(key, _) {
                    return key;
                }
                function getValue(_, value) {
                    return value;
                }
                function getEntry(key, value) {
                    return [key, value];
                }
            }
            function CreateSetPolyfill() {
                return  (function () {
                    function Set() {
                        this._map = new _Map();
                    }
                    Object.defineProperty(Set.prototype, "size", {
                        get: function () { return this._map.size; },
                        enumerable: true,
                        configurable: true
                    });
                    Set.prototype.has = function (value) { return this._map.has(value); };
                    Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                    Set.prototype.delete = function (value) { return this._map.delete(value); };
                    Set.prototype.clear = function () { this._map.clear(); };
                    Set.prototype.keys = function () { return this._map.keys(); };
                    Set.prototype.values = function () { return this._map.values(); };
                    Set.prototype.entries = function () { return this._map.entries(); };
                    Set.prototype["@@iterator"] = function () { return this.keys(); };
                    Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                    return Set;
                }());
            }
            function CreateWeakMapPolyfill() {
                var UUID_SIZE = 16;
                var keys = HashMap.create();
                var rootKey = CreateUniqueKey();
                return  (function () {
                    function WeakMap() {
                        this._key = CreateUniqueKey();
                    }
                    WeakMap.prototype.has = function (target) {
                        var table = GetOrCreateWeakMapTable(target,  false);
                        return table !== undefined ? HashMap.has(table, this._key) : false;
                    };
                    WeakMap.prototype.get = function (target) {
                        var table = GetOrCreateWeakMapTable(target,  false);
                        return table !== undefined ? HashMap.get(table, this._key) : undefined;
                    };
                    WeakMap.prototype.set = function (target, value) {
                        var table = GetOrCreateWeakMapTable(target,  true);
                        table[this._key] = value;
                        return this;
                    };
                    WeakMap.prototype.delete = function (target) {
                        var table = GetOrCreateWeakMapTable(target,  false);
                        return table !== undefined ? delete table[this._key] : false;
                    };
                    WeakMap.prototype.clear = function () {
                        this._key = CreateUniqueKey();
                    };
                    return WeakMap;
                }());
                function CreateUniqueKey() {
                    var key;
                    do
                        key = "@@WeakMap@@" + CreateUUID();
                    while (HashMap.has(keys, key));
                    keys[key] = true;
                    return key;
                }
                function GetOrCreateWeakMapTable(target, create) {
                    if (!hasOwn.call(target, rootKey)) {
                        if (!create)
                            return undefined;
                        Object.defineProperty(target, rootKey, { value: HashMap.create() });
                    }
                    return target[rootKey];
                }
                function FillRandomBytes(buffer, size) {
                    for (var i = 0; i < size; ++i)
                        buffer[i] = Math.random() * 0xff | 0;
                    return buffer;
                }
                function GenRandomBytes(size) {
                    if (typeof Uint8Array === "function") {
                        if (typeof crypto !== "undefined")
                            return crypto.getRandomValues(new Uint8Array(size));
                        if (typeof msCrypto !== "undefined")
                            return msCrypto.getRandomValues(new Uint8Array(size));
                        return FillRandomBytes(new Uint8Array(size), size);
                    }
                    return FillRandomBytes(new Array(size), size);
                }
                function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE);
                    data[6] = data[6] & 0x4f | 0x40;
                    data[8] = data[8] & 0xbf | 0x80;
                    var result = "";
                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                        var byte = data[offset];
                        if (offset === 4 || offset === 6 || offset === 8)
                            result += "-";
                        if (byte < 16)
                            result += "0";
                        result += byte.toString(16).toLowerCase();
                    }
                    return result;
                }
            }
            function MakeDictionary(obj) {
                obj.__ = undefined;
                delete obj.__;
                return obj;
            }
        });
    })(Reflect$1 || (Reflect$1 = {}));

    var container = new Map();
    var Container = (function () {
        function Container() {
        }
        Container.Registe = function (type, args) {
            var className = this.processName(type.name);
            container.set(className, window.Reflect.construct(type, this.buildParams(args)));
            return container.get(className);
        };
        Container.buildParams = function (args) {
            var para = [];
            args === null || args === void 0 ? void 0 : args.map(function (item) {
                para.push(item);
            });
            return para;
        };
        Container.processName = function (name) {
            return name.toLowerCase();
        };
        Container.Require = function (type) {
            var _this = this;
            var name = this.processName(type.name);
            if (container.has(name)) {
                return container.get(name);
            }
            var classParams = Reflect.getMetadata(METADATA_PARAMS, type);
            var args;
            if (classParams === null || classParams === void 0 ? void 0 : classParams.length) {
                args = classParams.map(function (item) {
                    return _this.Require(item);
                });
            }
            return this.Registe(type, args);
        };
        Container.define = function (target, key) {
            var _a;
            var classType = Reflect.getMetadata(METADATA_TYPE, target, key);
            var desc = (_a = Object.getOwnPropertyDescriptor(target, key)) !== null && _a !== void 0 ? _a : { writable: true, configurable: true };
            desc.value = this.Require(classType);
            Object.defineProperty(target, key, desc);
        };
        return Container;
    }());
    var METADATA_TYPE = "design:type";
    var METADATA_PARAMS = "design:paramtypes";
    function WandhiAuto(target, key) {
        Container.define(target, key);
    }

    var PluginBase = (function () {
        function PluginBase() {
            var _this = this;
            this._unique = true;
            this.Process = function () {
                _this.loader();
                _this.run();
            };
            this._appName = "base";
        }
        PluginBase.prototype.unique = function () {
            return this._unique;
        };
        PluginBase.prototype.linkTest = function (url) {
            var _this = this;
            if (!url) {
                url = this.core.currentUrl();
            }
            var flag = false;
            this.rules.forEach(function (v, k) {
                if (v.test(url)) {
                    flag = true;
                    _this.site = k;
                    return false;
                }
                return true;
            });
            return flag;
        };
        PluginBase.prototype.appName = function () {
            return this._appName;
        };
        var _a, _b;
        __decorate([
            WandhiAuto,
            __metadata("design:type", typeof (_a = typeof Core !== "undefined" && Core) === "function" ? _a : Object)
        ], PluginBase.prototype, "core", void 0);
        __decorate([
            WandhiAuto,
            __metadata("design:type", typeof (_b = typeof Common !== "undefined" && Common.Menu) === "function" ? _b : Object)
        ], PluginBase.prototype, "menu", void 0);
        return PluginBase;
    }());

    var SiteEnum;
    (function (SiteEnum) {
        SiteEnum["All"] = "All";
        SiteEnum["TaoBao"] = "TaoBao";
        SiteEnum["TMall"] = "TMall";
        SiteEnum["JingDong"] = "JingDong";
        SiteEnum["IQiYi"] = "IQiYi";
        SiteEnum["YouKu"] = "YouKu";
        SiteEnum["LeShi"] = "LeShi";
        SiteEnum["TuDou"] = "TuDou";
        SiteEnum["Tencent_V"] = "Tencent_V";
        SiteEnum["MangGuo"] = "MangGuo";
        SiteEnum["SoHu"] = "SoHu";
        SiteEnum["Acfun"] = "Acfun";
        SiteEnum["BiliBili"] = "BiliBili";
        SiteEnum["M1905"] = "M1905";
        SiteEnum["PPTV"] = "PPTV";
        SiteEnum["YinYueTai"] = "YinYueTai";
        SiteEnum["WangYi"] = "WangYi";
        SiteEnum["Tencent_M"] = "Tencent_M";
        SiteEnum["KuGou"] = "KuGou";
        SiteEnum["KuWo"] = "KuWo";
        SiteEnum["XiaMi"] = "XiaMi";
        SiteEnum["TaiHe"] = "TaiHe";
        SiteEnum["QingTing"] = "QingTing";
        SiteEnum["LiZhi"] = "LiZhi";
        SiteEnum["MiGu"] = "MiGu";
        SiteEnum["XiMaLaYa"] = "XiMaLaYa";
        SiteEnum["SXB"] = "SXB";
        SiteEnum["BDY"] = "BDY";
        SiteEnum["BDY1"] = "BDY1";
        SiteEnum["LZY"] = "LZY";
        SiteEnum["SuNing"] = "SuNing";
        SiteEnum["Vp"] = "Vp";
    })(SiteEnum || (SiteEnum = {}));

    var UpdateService = (function (_super) {
        __extends(UpdateService, _super);
        function UpdateService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.All, /(.*)/i]
            ]);
            _this._unique = false;
            return _this;
        }
        UpdateService.prototype.loader = function () {
        };
        UpdateService.prototype.run = function () {
            if (!Config.get(update_key, false)) {
                var current_1 = new VersionCompar(Config.env.script.version);
                Http.get_text(Route.update_api).then(function (res) {
                    var version = new VersionCompar(res.match(/@version[ ]*([\d\.]+)/)[1]);
                    if (version.compareTo(current_1) === VersionResult.greater) {
                        var msg = "\u65B0\u7248\u672C<span>" + version.versionString + "</span>\u5DF2\u53D1\u5E03.<a id=\"new-version-link\" class=\"link\" href=\"" + Route.install_url_one + "\">\u5B89\u88C5(\u7EBF\u8DEF\u4E00)</a><a id=\"new-version-link\" class=\"link\" href=\"" + Route.install_url_two + "\">\u5B89\u88C5(\u7EBF\u8DEF\u4E8C)</a><a class=\"link\" target=\"_blank\" href=\"" + Route.home_url + "\">\u67E5\u770B</a>";
                        Toast.info(msg, "\u68C0\u67E5\u66F4\u65B0");
                        Config.set(update_key, true, Hour);
                    }
                });
            }
        };
        return UpdateService;
    }(PluginBase));
    var VersionCompar = (function () {
        function VersionCompar(e) {
            if (!/^[\d\.]+$/.test(e)) {
                throw new Error("Invalid version string");
            }
            this.parts = e.split(".").map(function (e) { return parseInt(e); });
            this.versionString = e;
        }
        VersionCompar.prototype.compareTo = function (e) {
            for (var t = 0; t < this.parts.length; ++t) {
                if (e.parts.length === t) {
                    return VersionResult.greater;
                }
                if (this.parts[t] === e.parts[t]) {
                    continue;
                }
                if (this.parts[t] > e.parts[t]) {
                    return VersionResult.greater;
                }
                return VersionResult.less;
            }
            if (this.parts.length !== e.parts.length) {
                return VersionResult.less;
            }
            return VersionResult.equal;
        };
        VersionCompar.prototype.greaterThan = function (e) {
            return this.compareTo(e) === VersionResult.greater;
        };
        VersionCompar.prototype.lessThan = function (e) {
            return this.compareTo(e) === VersionResult.less;
        };
        VersionCompar.prototype.equals = function (e) {
            return this.compareTo(e) === VersionResult.equal;
        };
        return VersionCompar;
    }());
    var VersionResult;
    (function (VersionResult) {
        VersionResult[VersionResult["less"] = -1] = "less";
        VersionResult[VersionResult["equal"] = 0] = "equal";
        VersionResult[VersionResult["greater"] = 1] = "greater";
        VersionResult[VersionResult["incomparable"] = NaN] = "incomparable";
    })(VersionResult || (VersionResult = {}));

    var EventHelper = (function () {
        function EventHelper() {
        }
        EventHelper.bind_click = function (query, act) {
            var _a;
            (_a = document.querySelector(query)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
                act();
            });
        };
        return EventHelper;
    }());

    var BaseCoupon = (function () {
        function BaseCoupon() {
        }
        BaseCoupon.prototype.init_qrcode = function (url) {
            return new Promise(function (resolve) {
                var opts = {
                    errorCorrectionLevel: 'H',
                    type: 'image/jpeg',
                    quality: 0.3,
                    margin: 1,
                    width: 150,
                };
                QRCode.toCanvas(document.getElementById("vip-plugin-outside-coupons-qrcode-img"), url, opts, function (err) {
                    if (!err) {
                        resolve(true);
                    }
                });
            });
        };
        BaseCoupon.prototype.init_coupon_info = function (after, price, time, q_url) {
            if (q_url === void 0) { q_url = ''; }
            var coup_info = "<p>\u79FB\u52A8\u7AEF<span>\u5FEB\u6377</span>\u8D2D\u4E70</p>";
            var act = "<a class=\"vip-plugin-outside-coupons-button quan-none\" href=\"javascript:void(0)\">\u6253\u5F00\u624B\u673A\u626B\u4E00\u626B</a>";
            var url = Runtime.url;
            if (q_url) {
                var now = new Date();
                coup_info = "<p>\u5238\u540E\u4EF7 <span>" + after + "</span> \u5143</p><p class=\"vip-plugin-outside-coupons-date\">\uFF08" + Core.format(now, 'yyyy-MM-dd') + " ~ " + time + "\uFF09</p>";
                act = "<a class=\"vip-plugin-outside-coupons-button quan-exits\">\u626B\u7801\u9886" + price + "\u5143\u4F18\u60E0\u5238</a>";
                url = q_url;
            }
            new Promise(function (resolve) {
                $(".vip-plugin-outside-coupons-title").html(coup_info);
                $(".vip-plugin-outside-coupons-action").html(act);
                resolve();
            }).then(function () {
                if (q_url) {
                    EventHelper.bind_click(".vip-plugin-outside-coupons-button", function () {
                        Core.open(url);
                    });
                }
            });
        };
        BaseCoupon.prototype.default = function (url) {
            var _this = this;
            if (url === void 0) { url = ''; }
            Logger.debug(url);
            this.init_qrcode(url == '' ? Runtime.url : url).then(function (res) { _this.init_coupon_info(0, 0, ''); });
        };
        return BaseCoupon;
    }());

    var VpCoupon = (function (_super) {
        __extends(VpCoupon, _super);
        function VpCoupon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VpCoupon.prototype.init_html = function (html) {
            var _this = this;
            return new Promise(function (resolve) {
                if ($(".FW-product.clearfix").length) {
                    Core.appendTo(".FW-product.clearfix", html);
                    resolve(true);
                }
                else {
                    var that_1 = _this;
                    Core.lazyload(function () { return that_1.init_html(html); }, 1);
                }
            });
        };
        VpCoupon.prototype.init_coupons = function () {
            var _this = this;
            Route.queryVpCoupons(Runtime.url, function (res) {
                Logger.debug(res);
                if (res.code) {
                    if (res.data.has_coupon) {
                        var q = res.data;
                        var exp = new Date(q.quan_time);
                        _this.init_qrcode(decodeURIComponent(q.quan_link)).then(function (res) {
                            _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, 'yyyy-MM-dd'), decodeURIComponent(q.quan_link));
                        });
                    }
                    else if (res.data.quan_link) {
                        _this.default(res.data.quan_link);
                        EventHelper.bind_click('#vip-plugin-outside-coupons-qrcode-img', function () {
                            Core.open(res.data.quan_link);
                        });
                    }
                    else {
                        _this.default();
                    }
                }
                else {
                    _this.default();
                }
            });
        };
        return VpCoupon;
    }(BaseCoupon));

    var SuningCoupon = (function (_super) {
        __extends(SuningCoupon, _super);
        function SuningCoupon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SuningCoupon.prototype.init_html = function (html) {
            var _this = this;
            return new Promise(function (resolve) {
                if ($(".proinfo-container").length) {
                    Core.appendTo(".proinfo-container", html);
                    resolve(true);
                }
                else {
                    var that_1 = _this;
                    Core.lazyload(function () { return that_1.init_html(html); }, 1);
                }
            });
        };
        SuningCoupon.prototype.init_coupons = function () {
            var _this = this;
            Route.querySnCoupons(Runtime.url, function (res) {
                Logger.debug(res);
                if (res.code) {
                    if (res.data.has_coupon) {
                        var q = res.data;
                        var exp = new Date(q.quan_time);
                        _this.init_qrcode(decodeURIComponent(q.quan_link)).then(function (res) {
                            _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, 'yyyy-MM-dd'), decodeURIComponent(q.quan_link));
                        });
                    }
                    else if (res.data.quan_link) {
                        _this.default(res.data.quan_link);
                        EventHelper.bind_click('#vip-plugin-outside-coupons-qrcode-img', function () {
                            Core.open(res.data.quan_link);
                        });
                    }
                    else {
                        _this.default();
                    }
                }
                else {
                    _this.default();
                }
            });
        };
        return SuningCoupon;
    }(BaseCoupon));

    var JdCoupon = (function (_super) {
        __extends(JdCoupon, _super);
        function JdCoupon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JdCoupon.prototype.init_html = function (html) {
            var _this = this;
            return new Promise(function (resolve) {
                if ($(".product-intro").length) {
                    Core.appendTo(".product-intro", html);
                    resolve(true);
                }
                else {
                    setTimeout(_this.init_html, 2000);
                }
            });
        };
        JdCoupon.prototype.init_coupons = function () {
            var _this = this;
            var _a, _b;
            var item_id = (_b = (_a = unsafeWindow.pageConfig) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.skuid;
            if (item_id) {
                Route.queryJdCoupons(item_id, function (res) {
                    Logger.debug(res);
                    if (res.code) {
                        if (res.data.has_coupon) {
                            var q = res.data;
                            var exp = new Date(q.quan_time);
                            _this.init_qrcode(decodeURIComponent(q.quan_link)).then(function (res) {
                                _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, 'yyyy-MM-dd'), decodeURIComponent(q.quan_link));
                            });
                        }
                        else if (res.data.quan_link) {
                            _this.default(res.data.quan_link);
                        }
                        else {
                            _this.default();
                        }
                    }
                    else {
                        _this.default();
                    }
                });
            }
            else {
                this.default();
            }
        };
        return JdCoupon;
    }(BaseCoupon));

    var TaoCoupon = (function (_super) {
        __extends(TaoCoupon, _super);
        function TaoCoupon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaoCoupon.prototype.init_html = function (html) {
            return new Promise(function (resolve) {
                if ($("#J_DetailMeta").length) {
                    Core.appendTo("#J_DetailMeta", html);
                }
                else {
                    Core.appendTo("#detail", html + "<br/>");
                }
                resolve(true);
            });
        };
        TaoCoupon.prototype.init_coupons = function () {
            var _this = this;
            Route.queryCoupons(this.core.getPar('id'), function (data) {
                var _a;
                if (data.code && ((_a = data.data) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    var q = data.data[0];
                    var exp = new Date(q.quan_time);
                    _this.init_qrcode(decodeURIComponent(q.quan_link)).then(function (res) {
                        _this.init_coupon_info(q.after_price, q.quan_price, "" + Core.format(exp, 'yyyy-MM-dd'), decodeURIComponent(q.quan_link));
                    });
                }
                else {
                    _this.init_qrcode(Runtime.url).then(function (res) { _this.init_coupon_info(0, 0, ''); });
                }
            });
        };
        var _a;
        __decorate([
            WandhiAuto,
            __metadata("design:type", typeof (_a = typeof Core !== "undefined" && Core) === "function" ? _a : Object)
        ], TaoCoupon.prototype, "core", void 0);
        return TaoCoupon;
    }(BaseCoupon));

    var DefCoupon = (function (_super) {
        __extends(DefCoupon, _super);
        function DefCoupon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DefCoupon.prototype.init_html = function (html) {
            return new Promise(function (resolve) { resolve(false); });
        };
        DefCoupon.prototype.init_coupons = function () { };
        return DefCoupon;
    }(BaseCoupon));

    var LinesOption = (function () {
        function LinesOption() {
        }
        return LinesOption;
    }());

    var css_248z = "#vip-plugin-outside {\n    border: 1px solid #eee;\n    margin: 0 auto;\n    position: relative;\n    clear: both;\n    display: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons {\n    width: 240px;\n    float: left\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode {\n    text-align: center;\n    min-height: 150px;\n    margin-top: 30px\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode canvas,\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-qrcode img {\n    margin: 0 auto\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title {\n    margin-top: 20px;\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-title span {\n    color: #ff0036;\n    font-weight: 700\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action {\n    margin-top: 10px;\n    text-align: center\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action a {\n    text-decoration: none\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button {\n    min-width: 135px;\n    padding: 0 8px;\n    line-height: 35px;\n    color: #fff;\n    background: #ff0036;\n    font-size: 13px;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 15px;\n    display: inline-block;\n    cursor: pointer\n}\n\n#vip-plugin-outside .vip-plugin-outside-coupons .vip-plugin-outside-coupons-action .vip-plugin-outside-coupons-button.quan-none {\n    color: #000;\n    background: #bec5c5\n}\n\n.vip-plugin-outside-coupons-date {\n    color: #233b3d;\n    font-weight: normal;\n    font-size: 12px;\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n    position: absolute;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    letter-spacing: 1px;\n    font-size: 15px;\n    transform: translateX(-50%) translateY(-50%)\n}\n\n#vip-plugin-outside .vip-plugin-outside-history, #vip-plugin-outside-chart-body {\n    height: 300px;\n    overflow: hidden;\n    position: relative\n}\n\n#vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n#vip-plugin-outside-chart-container-line {\n    width: 100%;\n    height: 100%\n}\n\n#vip-plugin-outside-similar {\n    width: 100%;\n    background: #fff;\n    z-index: 99999999;\n    height: 268px;\n    overflow: hidden;\n    left: -1px;\n    top: 36px;\n    border: 1px solid #edf1f2!important\n}\n\n.vip-plugin-outside-similar-buy-list {\n    width: 303px;\n    border-right: 1px solid rgb(237, 241, 242);\n    height: 270px;\n    padding: 0px;\n    overflow: hidden;\n    float: left;\n    margin: 0px;\n}\n.vip-plugin-outside-similar-buy-list-li-store{\n    float: left;\n    overflow: hidden;\n    margin: 8px 7px 4px 14px;\n    width: 16px;\n    height: 16px\n}\n.vip-plugin-outside-similar-buy-list li {\n    border-bottom: 1px solid #edf1f2;\n    overflow: hidden;\n    width: 100%;\n    height: 33px;\n    line-height: 33px\n}\n.vip-plugin-outside-similar-buy-list li:first-child b {\n    font-style: normal;\n    font-size: 14px;\n    margin-left: 14px;\n    font-weight: 700\n}\n.vip-plugin-outside-similar-buy-list-li-first {\n    top: 15px;\n    width: auto;\n    right: 51px;\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    height: auto\n}\n.vip-plugin-outside-similar-buy-list-li-title {\n    height: 33px;\n    margin: 0;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0;\n    background: 0 0;\n    line-height: 33px;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: auto\n}\n.vip-plugin-outside-similar-buy-list-li-price {\n    color: #E4393C;\n    font-weight: 700;\n    line-height: 33px;\n    height: 33px;\n    width: auto;\n    float: right;\n    font-size: 14px;\n    margin-right: 14px;\n}\n";
    styleInject(css_248z);

    var MsgInfo = (function () {
        function MsgInfo() {
        }
        return MsgInfo;
    }());
    var PromoInfo = (function () {
        function PromoInfo() {
            this.price = 0;
            this.time = 0;
        }
        return PromoInfo;
    }());

    var HistoryService = (function (_super) {
        __extends(HistoryService, _super);
        function HistoryService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rules = new Map([
                [SiteEnum.TMall, /detail.tmall.com\/item.htm/i],
                [SiteEnum.TaoBao, /item.taobao.com/i],
                [SiteEnum.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i],
                [SiteEnum.SuNing, /product.suning.com/i],
                [SiteEnum.Vp, /detail.vip.com/i]
            ]);
            _this.factory = new DefCoupon();
            return _this;
        }
        HistoryService.prototype.loader = function () {
        };
        HistoryService.prototype.run = function () {
            this.injectHistory();
        };
        HistoryService.prototype.injectHistory = function () {
            var _this = this;
            Logger.debug(this.site);
            switch (this.site) {
                case SiteEnum.TaoBao:
                case SiteEnum.TMall:
                    this.factory = new TaoCoupon();
                    break;
                case SiteEnum.JingDong:
                    this.factory = new JdCoupon();
                    break;
                case SiteEnum.SuNing:
                    this.factory = new SuningCoupon();
                    break;
                case SiteEnum.Vp:
                    this.factory = new VpCoupon();
                    break;
                default:
                    this.factory = new DefCoupon();
                    break;
            }
            this.factory.init_html(this.getHistoryHtml()).then(function (res) {
                res && _this.InitPriceHistory();
                _this.factory.init_coupons && _this.factory.init_coupons();
            });
        };
        HistoryService.prototype.InitPriceHistory = function () {
            var _this = this;
            $("#vip-plugin-outside").show();
            this.theme();
            this.chartMsg("\u5386\u53F2\u4EF7\u683C\u67E5\u8BE2\u4E2D");
            Route.queryHistoryv3(Runtime.url, this.site.toString(), function (data) {
                var msg = "";
                if (data.code) {
                    $(".vip-plugin-outside-chart-container").html("<div id=\"vip-plugin-outside-chart-container-line\"></div>");
                    echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme()).setOption(_this.getChartOption(data.data));
                }
                else {
                    msg = "\u672A\u67E5\u5230\u5386\u53F2\u6570\u636E";
                }
                _this.chartMsg(msg);
            });
        };
        HistoryService.prototype.getHistoryHtml = function () {
            return "<div id=\"vip-plugin-outside\">\n                    <div class=\"vip-plugin-outside-coupons\">\n                        <div class=\"vip-plugin-outside-coupons-qrcode\"><canvas id=\"vip-plugin-outside-coupons-qrcode-img\"></canvas></div>\n                        <div class=\"vip-plugin-outside-coupons-title\"></div>\n                        <div class=\"vip-plugin-outside-coupons-action\"></div>\n                    </div>\n                    <div id=\"vip-plugin-outside-history\" class=\"vip-plugin-outside-history\">\n                        <div class=\"vip-plugin-outside-chart-container\"></div>\n                        <p class=\"vip-plugin-outside-history-tip\"></p>\n                    </div>    \n                </div>";
        };
        HistoryService.prototype.chartMsg = function (msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        };
        HistoryService.prototype.getChartOption = function (data) {
            var _a, _b;
            var text = "\u5386\u53F2\u4F4E\u4EF7\uFF1A{red|\uFFE5" + data.min + "} ( {red|" + data.date + "} ) \u5206\u6790\uFF1A" + data.mark;
            var chartOption = new LinesOption();
            var datas = function (data) {
                var l = [];
                data.price_detail.forEach(function (v) {
                    var p = {
                        name: v.time,
                        value: [
                            v.timestamp, v.price, v.mark
                        ]
                    };
                    l.push(p);
                });
                return l;
            };
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
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        var year = date.getFullYear();
                        var month = date.getMonth() + 1;
                        var day = date.getDate();
                        var monthStr = month.toString();
                        var dayStr = day.toString();
                        if (month < 10) {
                            monthStr = "0" + month;
                        }
                        if (day < 10) {
                            dayStr = "0" + day;
                        }
                        return "\u65E5\u671F\uFF1A" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4EF7\u683C\uFF1A\uFFE5" + params.value[1].toFixed(2) + (params.value[2] == "" ? "" : "<br/>" + params.value[2]);
                    }
                },
                grid: {
                    left: 0,
                    right: 20,
                    top: 50,
                    bottom: 10,
                    containLabel: true
                },
                xAxis: {
                    type: 'time'
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        type: "line",
                        step: "end",
                        data: datas(data),
                        showSymbol: false,
                        symbolSize: 3,
                        lineStyle: {
                            width: 1.5,
                            color: "#ff0036"
                        }
                    }
                ]
            };
            var step = 10;
            chartOption.yAxis = {
                min: Math.floor(data.min * 0.9 / step) * step,
                max: Math.ceil(data.max * 1.1 / step) * step
            };
            var line = (_a = chartOption.series) === null || _a === void 0 ? void 0 : _a.pop();
            line.markPoint = {
                data: [
                    {
                        value: data.min,
                        coord: [data.date, data.min],
                        name: "最小值",
                        itemStyle: {
                            color: "green"
                        }
                    },
                    {
                        value: data.max,
                        coord: [data.max_date, data.max],
                        name: "最大值",
                        itemStyle: {
                            color: "red"
                        }
                    }
                ]
            };
            (_b = chartOption.series) === null || _b === void 0 ? void 0 : _b.push(line);
            chartOption.dataZoom = [
                {
                    type: "inside",
                    start: 0,
                    end: 100
                }
            ];
            return chartOption;
        };
        HistoryService.prototype.theme = function () {
            var theme = {
                color: [
                    '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
                    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
                    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
                    '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
                ],
                title: {
                    itemGap: 8,
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#008acd'
                    }
                },
                legend: {
                    itemGap: 8
                },
                dataRange: {
                    itemWidth: 15,
                    color: ['#2ec7c9', '#b6a2de']
                },
                toolbox: {
                    color: ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
                    effectiveColor: '#ff4500',
                    itemGap: 8
                },
                tooltip: {
                    backgroundColor: 'rgba(50,50,50,0.5)',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: '#008acd'
                        },
                        crossStyle: {
                            color: '#008acd'
                        },
                        shadowStyle: {
                            color: 'rgba(200,200,200,0.2)'
                        }
                    }
                },
                dataZoom: {
                    dataBackgroundColor: '#efefff',
                    fillerColor: 'rgba(182,162,222,0.2)',
                    handleColor: '#008acd'
                },
                grid: {
                    borderColor: '#eee'
                },
                categoryAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#008acd'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                },
                valueAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#008acd'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                },
                polar: {
                    axisLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.2)', 'rgba(200,200,200,0.2)']
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    }
                },
                timeline: {
                    lineStyle: {
                        color: '#008acd'
                    },
                    controlStyle: {
                        normal: { color: '#008acd' },
                        emphasis: { color: '#008acd' }
                    },
                    symbol: 'emptyCircle',
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
                    smooth: true,
                    symbol: 'emptyCircle',
                    symbolSize: 3
                },
                k: {
                    itemStyle: {
                        normal: {
                            color: '#d87a80',
                            color0: '#2ec7c9',
                            lineStyle: {
                                width: 1,
                                color: '#d87a80',
                                color0: '#2ec7c9'
                            }
                        }
                    }
                },
                scatter: {
                    symbol: 'circle',
                    symbolSize: 4
                },
                radar: {
                    symbol: 'emptyCircle',
                    symbolSize: 3
                },
                map: {
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: '#ddd'
                            },
                            label: {
                                textStyle: {
                                    color: '#d87a80'
                                }
                            }
                        },
                        emphasis: {
                            areaStyle: {
                                color: '#fe994e'
                            },
                            label: {
                                textStyle: {
                                    color: 'rgb(100,0,0)'
                                }
                            }
                        }
                    }
                },
                force: {
                    itemStyle: {
                        normal: {
                            linkStyle: {
                                strokeColor: '#1e90ff'
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
                                color: 'rgba(128, 128, 128, 0.5)'
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: 'rgba(128, 128, 128, 0.5)'
                                }
                            }
                        },
                        emphasis: {
                            lineStyle: {
                                width: 1,
                                color: 'rgba(128, 128, 128, 0.5)'
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: 'rgba(128, 128, 128, 0.5)'
                                }
                            }
                        }
                    }
                },
                gauge: {
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [[0.2, '#2ec7c9'], [0.8, '#5ab1ef'], [1, '#d87a80']],
                            width: 10
                        }
                    },
                    axisTick: {
                        splitNumber: 10,
                        length: 15,
                        lineStyle: {
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'auto'
                        }
                    },
                    splitLine: {
                        length: 22,
                        lineStyle: {
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5,
                        color: 'auto'
                    },
                    title: {
                        textStyle: {
                            color: '#333'
                        }
                    },
                    detail: {
                        textStyle: {
                            color: 'auto'
                        }
                    }
                },
                textStyle: {
                    fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
                }
            };
            return theme;
        };
        return HistoryService;
    }(PluginBase));

    var GwdService = (function (_super) {
        __extends(GwdService, _super);
        function GwdService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rules = new Map([
                [SiteEnum.TMall, /detail.tmall.com\/item.htm/i],
                [SiteEnum.TaoBao, /item.taobao.com/i],
                [SiteEnum.JingDong, /item.jd.(com|hk)\/[0-9]*.html/i],
                [SiteEnum.SuNing, /product.suning.com/i],
                [SiteEnum.Vp, /detail.vip.com/i]
            ]);
            _this._appName = "GwdService";
            _this.factory = new DefCoupon();
            return _this;
        }
        GwdService.prototype.loader = function () {
        };
        GwdService.prototype.run = function () {
            this.injectHistory();
        };
        GwdService.prototype.injectHistory = function () {
            var _this = this;
            Logger.debug(this.site);
            switch (this.site) {
                case SiteEnum.TaoBao:
                case SiteEnum.TMall:
                    this.factory = new TaoCoupon();
                    break;
                case SiteEnum.JingDong:
                    this.factory = new JdCoupon();
                    break;
                case SiteEnum.SuNing:
                    this.factory = new SuningCoupon();
                    break;
                case SiteEnum.Vp:
                    this.factory = new VpCoupon();
                    break;
                default:
                    this.factory = new DefCoupon();
                    break;
            }
            this.factory.init_html(this.getHistoryHtml()).then(function (res) {
                res && _this.InitPriceHistory();
                _this.factory.init_coupons && _this.factory.init_coupons();
            });
        };
        GwdService.prototype.InitPriceHistory = function () {
            var _this = this;
            $("#vip-plugin-outside").show();
            this.theme();
            this.chartMsg("\u5386\u53F2\u4EF7\u683C\u67E5\u8BE2\u4E2D");
            var that = this;
            Route.queryHistoryV4(Runtime.url, this.site.toString(), function (data) {
                Logger.debug(data);
                if ('price_status' in data) {
                    $(".vip-plugin-outside-chart-container").html("<div id=\"vip-plugin-outside-chart-container-line\"></div>");
                    echarts.init(document.getElementById("vip-plugin-outside-chart-container-line"), _this.theme())
                        .setOption(_this.getChartOption(data));
                }
                else {
                    that.historyService.Process();
                }
            });
        };
        GwdService.prototype.getHistoryHtml = function () {
            var similar = "";
            return "<div id=\"vip-plugin-outside\">\n                    <div class=\"vip-plugin-outside-coupons\">\n                        <div class=\"vip-plugin-outside-coupons-qrcode\"><canvas id=\"vip-plugin-outside-coupons-qrcode-img\"></canvas></div>\n                        <div class=\"vip-plugin-outside-coupons-title\"></div>\n                        <div class=\"vip-plugin-outside-coupons-action\"></div>\n                    </div>\n                    <div id=\"vip-plugin-outside-history\" class=\"vip-plugin-outside-history\">\n                        <div class=\"vip-plugin-outside-chart-container\"></div>\n                        <p class=\"vip-plugin-outside-history-tip\"></p>\n                    </div>    \n                    " + similar + "\n                </div>";
        };
        GwdService.prototype.chartMsg = function (msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        };
        GwdService.prototype.getChartOption = function (data) {
            var _a, _b;
            var analysisTxt = data.analysis.tip;
            var min = data.analysis.promo_days[data.analysis.promo_days.length - 1];
            var text = analysisTxt + "\uFF1A{red|\uFFE5" + min.price + "} ( {red|" + min.date + "} )";
            var maxData = new PromoInfo();
            var minData = new PromoInfo();
            minData.price = Number.MAX_SAFE_INTEGER;
            minData.humanPrice = Number.MAX_SAFE_INTEGER;
            maxData.humanPrice = Number.MIN_SAFE_INTEGER;
            var chartOption = new LinesOption();
            var datas = function (data) {
                var l = [];
                if (data.nopuzzle_promo.length > 0) {
                    data.nopuzzle_promo.forEach(function (v) {
                        v.humanPrice = v.price / 100;
                        if (v.price > maxData.price) {
                            maxData = v;
                        }
                        if (v.price < minData.price) {
                            minData = v;
                        }
                        var p = {
                            name: v.time * 1000,
                            value: [
                                v.time * 1000, v.humanPrice, v.msg ? (v.msg.coupon ? v.msg.coupon : v.msg.promotion) : ''
                            ]
                        };
                        l.push(p);
                    });
                }
                else if (data.store.length > 0) {
                    var storeData = data.store[0];
                    if (data.store.length > 1) {
                        storeData = data.store[1];
                    }
                    var couponsMap_1 = {};
                    if (data.promo.length > 0) {
                        data.promo.forEach(function (v) {
                            if (!couponsMap_1.hasOwnProperty(v.time * 1000)) {
                                couponsMap_1[v.time * 1000] = v;
                            }
                        });
                    }
                    var now_1 = storeData.all_line_begin_time;
                    var dayTime_1 = 1000 * 60 * 60 * 24;
                    storeData.all_line.forEach(function (v) {
                        if (v > maxData.humanPrice) {
                            maxData.humanPrice = v;
                            maxData.time = now_1 / 1000;
                        }
                        if (v < minData.humanPrice) {
                            minData.humanPrice = v;
                            minData.time = now_1 / 1000;
                        }
                        var promo = new PromoInfo();
                        promo.msg = new MsgInfo();
                        if (couponsMap_1.hasOwnProperty(now_1)) {
                            Logger.debug('yes');
                            promo = couponsMap_1[now_1];
                        }
                        var p = {
                            name: now_1,
                            value: [
                                now_1, v,
                                couponsMap_1.hasOwnProperty(now_1) ? (promo.msg.coupon ? promo.msg.promotion : promo.msg.coupon) : ''
                            ]
                        };
                        l.push(p);
                        now_1 += dayTime_1;
                    });
                    debugger;
                    Logger.debug(couponsMap_1);
                }
                Logger.debug(maxData);
                Logger.debug(minData);
                return l;
            };
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
                    formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        var year = date.getFullYear();
                        var month = date.getMonth() + 1;
                        var day = date.getDate();
                        var monthStr = month.toString();
                        var dayStr = day.toString();
                        if (month < 10) {
                            monthStr = "0" + month;
                        }
                        if (day < 10) {
                            dayStr = "0" + day;
                        }
                        return "\u65E5\u671F\uFF1A" + year + "-" + monthStr + "-" + dayStr + "<br/>\u4EF7\u683C\uFF1A\uFFE5" + params.value[1].toFixed(2) + (params.value[2] == "" ? "" : "<br/>" + params.value[2]);
                    }
                },
                grid: {
                    left: 0,
                    right: 20,
                    top: 50,
                    bottom: 10,
                    containLabel: true
                },
                xAxis: {
                    type: 'time'
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        type: "line",
                        step: "end",
                        data: datas(data),
                        showSymbol: false,
                        symbolSize: 3,
                        lineStyle: {
                            width: 1.5,
                            color: "#ff0036"
                        }
                    }
                ]
            };
            var step = 10;
            chartOption.yAxis = {
                min: Math.floor(minData.humanPrice * 0.9 / step) * step,
                max: Math.ceil(maxData.humanPrice * 1.1 / step) * step
            };
            var line = (_a = chartOption.series) === null || _a === void 0 ? void 0 : _a.pop();
            line.markPoint = {
                data: [
                    {
                        value: minData.humanPrice,
                        coord: [minData.time * 1000, minData.humanPrice],
                        name: "最小值",
                        itemStyle: {
                            color: "green"
                        }
                    },
                    {
                        value: maxData.humanPrice,
                        coord: [maxData.time * 1000, maxData.humanPrice],
                        name: "最大值",
                        itemStyle: {
                            color: "red"
                        }
                    }
                ]
            };
            (_b = chartOption.series) === null || _b === void 0 ? void 0 : _b.push(line);
            chartOption.dataZoom = [
                {
                    type: "inside",
                    start: 0,
                    end: 100
                }
            ];
            return chartOption;
        };
        GwdService.prototype.theme = function () {
            return {
                color: [
                    '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
                    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
                    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
                    '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
                ],
                title: {
                    itemGap: 8,
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#008acd'
                    }
                },
                legend: {
                    itemGap: 8
                },
                dataRange: {
                    itemWidth: 15,
                    color: ['#2ec7c9', '#b6a2de']
                },
                toolbox: {
                    color: ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
                    effectiveColor: '#ff4500',
                    itemGap: 8
                },
                tooltip: {
                    backgroundColor: 'rgba(50,50,50,0.5)',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: '#008acd'
                        },
                        crossStyle: {
                            color: '#008acd'
                        },
                        shadowStyle: {
                            color: 'rgba(200,200,200,0.2)'
                        }
                    }
                },
                dataZoom: {
                    dataBackgroundColor: '#efefff',
                    fillerColor: 'rgba(182,162,222,0.2)',
                    handleColor: '#008acd'
                },
                grid: {
                    borderColor: '#eee'
                },
                categoryAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#008acd'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                },
                valueAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#008acd'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    }
                },
                polar: {
                    axisLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.2)', 'rgba(200,200,200,0.2)']
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    }
                },
                timeline: {
                    lineStyle: {
                        color: '#008acd'
                    },
                    controlStyle: {
                        normal: { color: '#008acd' },
                        emphasis: { color: '#008acd' }
                    },
                    symbol: 'emptyCircle',
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
                    smooth: true,
                    symbol: 'emptyCircle',
                    symbolSize: 3
                },
                k: {
                    itemStyle: {
                        normal: {
                            color: '#d87a80',
                            color0: '#2ec7c9',
                            lineStyle: {
                                width: 1,
                                color: '#d87a80',
                                color0: '#2ec7c9'
                            }
                        }
                    }
                },
                scatter: {
                    symbol: 'circle',
                    symbolSize: 4
                },
                radar: {
                    symbol: 'emptyCircle',
                    symbolSize: 3
                },
                map: {
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color: '#ddd'
                            },
                            label: {
                                textStyle: {
                                    color: '#d87a80'
                                }
                            }
                        },
                        emphasis: {
                            areaStyle: {
                                color: '#fe994e'
                            },
                            label: {
                                textStyle: {
                                    color: 'rgb(100,0,0)'
                                }
                            }
                        }
                    }
                },
                force: {
                    itemStyle: {
                        normal: {
                            linkStyle: {
                                strokeColor: '#1e90ff'
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
                                color: 'rgba(128, 128, 128, 0.5)'
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: 'rgba(128, 128, 128, 0.5)'
                                }
                            }
                        },
                        emphasis: {
                            lineStyle: {
                                width: 1,
                                color: 'rgba(128, 128, 128, 0.5)'
                            },
                            chordStyle: {
                                lineStyle: {
                                    width: 1,
                                    color: 'rgba(128, 128, 128, 0.5)'
                                }
                            }
                        }
                    }
                },
                gauge: {
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [[0.2, '#2ec7c9'], [0.8, '#5ab1ef'], [1, '#d87a80']],
                            width: 10
                        }
                    },
                    axisTick: {
                        splitNumber: 10,
                        length: 15,
                        lineStyle: {
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'auto'
                        }
                    },
                    splitLine: {
                        length: 22,
                        lineStyle: {
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 5,
                        color: 'auto'
                    },
                    title: {
                        textStyle: {
                            color: '#333'
                        }
                    },
                    detail: {
                        textStyle: {
                            color: 'auto'
                        }
                    }
                },
                textStyle: {
                    fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
                }
            };
        };
        var _a;
        __decorate([
            WandhiAuto,
            __metadata("design:type", typeof (_a = typeof HistoryService !== "undefined" && HistoryService) === "function" ? _a : Object)
        ], GwdService.prototype, "historyService", void 0);
        return GwdService;
    }(PluginBase));

    var TaoBaoService = (function (_super) {
        __extends(TaoBaoService, _super);
        function TaoBaoService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rules = new Map([
                [SiteEnum.TaoBao, /taobao.com/i],
                [SiteEnum.TMall, /tmall/i]
            ]);
            _this.UrlTag = "Wandhi_qLink";
            return _this;
        }
        TaoBaoService.prototype.getRules = function () {
            throw new Error("Method not implemented.");
        };
        TaoBaoService.prototype.loader = function () {
            Core.appendCss("//cdn.wandhi.com/style/extenstion/hui.style.css");
        };
        TaoBaoService.prototype.run = function () {
            this.init();
            this.historyService.linkTest() && this.historyService.Process();
        };
        TaoBaoService.prototype.init = function () {
            var _this = this;
            var _a;
            var init = "<div id='wandhi_div'><table class='wandhi_tab' id='wandhi_table'><thead><tr><th><b style='cursor:pointer'>\u4F18\u60E0\u5238</b></th><th>\u5238\u540E</th><th>\u6709 \u6548 \u671F</th><th>\u64CD\u4F5C</th></tr></thead><tr><td colspan='4'>\u6B63\u5728\u67E5\u8BE2\u4F18\u60E0\u4FE1\u606F\uFF0C\u8BF7\u7A0D\u5019...</td></tr></table></div>";
            $('#J_LinkBasket').parent().parent().prepend(init);
            $('.J_LinkAdd').parent().parent().prepend(init);
            if ((_a = this.rules.get(SiteEnum.TaoBao)) === null || _a === void 0 ? void 0 : _a.test(this.core.currentUrl())) {
                $('#wandhi_table').addClass('wandhi_tab_taobao');
            }
            else {
                $('#wandhi_table').addClass('wandhi_tab_tmall');
            }
            Route.queryCoupons(this.core.getPar('id'), function (data) { return _this.initElement(data); });
        };
        TaoBaoService.prototype.initElement = function (data) {
            var _a;
            $("#wandhi_table tbody tr").remove();
            var row = "";
            if (data.code && ((_a = data.data) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                data.data.forEach(function (e) {
                    row += "<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>\u9886\u53D6</b></td></tr>";
                });
            }
            else {
                row = "<tr><td colspan='4'>\u8FD9\u4E2A\u5546\u54C1\u6CA1\u6709\u8D85\u503C\u4F18\u60E0\u5238</td></tr>";
            }
            $("#wandhi_table tbody").append(row);
        };
        var _a;
        __decorate([
            WandhiAuto,
            __metadata("design:type", typeof (_a = typeof GwdService !== "undefined" && GwdService) === "function" ? _a : Object)
        ], TaoBaoService.prototype, "historyService", void 0);
        return TaoBaoService;
    }(PluginBase));

    var BiliImgService = (function (_super) {
        __extends(BiliImgService, _super);
        function BiliImgService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rules = new Map([
                [SiteEnum.BiliBili, /bilibili.com\/video\/[av|bv]*/i]
            ]);
            return _this;
        }
        BiliImgService.prototype.loader = function () {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        };
        BiliImgService.prototype.run = function () {
            this.init();
        };
        BiliImgService.prototype.init = function () {
            Core.aotulazyload(function () {
                if ($(".video-data").length && $(".bilibili-player-video-info-people-number").length && ($.isNumeric($('.coin').text().replace('万', '').trim()))) {
                    return true;
                }
                return false;
            }, function () {
                BiliImgService.add_img_btn();
                BiliImgService.add_down_btn();
                BiliImgService.add_triple_btn();
            }, 1);
        };
        BiliImgService.add_img_btn = function () {
            $(".video-data").last().append(BiliImgService.btn);
            $('body').on('click', '#findimg', function () {
                var aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
                Route.queryBiliImg(aid, function (res) {
                    if (res.code === 0) {
                        Alert.open("\u5C01\u9762\u9171", "<img src=\"" + res.data.pic + "\" style=\"width: 705px;height: 400px;\" alt=\"\u5C01\u9762\">", ['725px', '400px']);
                    }
                    else {
                        Alert.error("\u54CE\u54DF\u6CA1\u627E\u5230\u5C01\u9762\u54E6\uFF0C\u8981\u4E0D\u8DDF\u4F5C\u8005\u62A5\u544A\u4E00\u4E0B\uFF1F");
                    }
                });
            });
        };
        BiliImgService.add_down_btn = function () {
            $(".video-data").last().append(BiliImgService.down);
            $('body').on('click', '#downvideo', function () {
                var _a, _b;
                var aid = unsafeWindow.__INITIAL_STATE__.videoData.aid;
                var cid = (_b = (_a = unsafeWindow.__INITIAL_STATE__.cidMap[aid]) === null || _a === void 0 ? void 0 : _a.cid) !== null && _b !== void 0 ? _b : unsafeWindow.__INITIAL_STATE__.videoData.cid;
                var key = aid.toString() + cid.toString() + "MDD";
                Logger.debug([aid, cid]);
                if (!aid || !cid) {
                    Alert.error("\u6682\u4E0D\u652F\u6301\u5F53\u524D\u89C6\u9891\uFF0C\u5982\u6709\u7591\u95EE\u8BF7\u5E26\u4E0A\u94FE\u63A5\u8BE2\u95EE\u4F5C\u8005");
                }
                else {
                    var v_1 = Config.get(key, false);
                    if (v_1) {
                        v_1 = v_1;
                        Alert.confim("\u4E0B\u8F7D\u5730\u5740", "\u67E5\u8BE2\u5230[" + v_1.data.accept_description[v_1.data.durl[0].order] + "]\uFF0C\u662F\u5426\u4E0B\u8F7D\uFF1F", ["\u597D\u7684\u8D70\u8D77", "\u8FD8\u662F\u7B97\u4E86"], function (data) {
                            window.open(v_1.data.durl[0].url);
                        }, true);
                    }
                    else {
                        Route.queryBiliDown(aid, cid, function (res) {
                            var _a;
                            if (((_a = res.data) === null || _a === void 0 ? void 0 : _a.durl[0].url) != "") {
                                Config.set(key, res, Min);
                                Alert.confim("\u4E0B\u8F7D\u5730\u5740", "\u67E5\u8BE2\u5230[" + res.data.accept_description[res.data.durl[0].order] + "]\uFF0C\u662F\u5426\u4E0B\u8F7D\uFF1F", ["\u597D\u7684\u8D70\u8D77", "\u8FD8\u662F\u7B97\u4E86"], function (data) {
                                    window.open(res.data.durl[0].url);
                                }, true);
                            }
                            else {
                                Alert.error("\u5565\u4E5F\u6CA1\u67E5\u7740,\u5E26\u7740\u89C6\u9891\u5730\u5740\u7ED9\u4F5C\u8005\u62A5\u544A\u4E00\u4E0B\u5427~");
                            }
                        });
                    }
                }
            });
        };
        BiliImgService.add_triple_btn = function () {
            $(".video-data").last().append(BiliImgService.tripleClick);
            $('body').on('click', '#tripleClick', function () {
                var btns = ['.like', '.coin', '.collect'];
                btns.forEach(function (item) {
                    $(item).trigger('click');
                });
            });
        };
        BiliImgService.decrypt = function (str) {
            return CryptoJS__default['default'].AES.decrypt(str, CryptoJS__default['default'].enc.Latin1.parse(Core.decode(B1)), {
                'iv': CryptoJS__default['default'].enc.Latin1.parse(Core.decode(B2)),
                'mode': CryptoJS__default['default'].mode.CBC,
                'adding': CryptoJS__default['default'].pad.ZeroPadding
            }).toString(CryptoJS__default['default'].enc.Utf8);
        };
        BiliImgService.btn = "\n    <span id=\"findimg\" style=\"\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    \">\n        \u83B7\u53D6\u5C01\u9762\n    </span>";
        BiliImgService.down = "\n    <span id=\"downvideo\" style=\"\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    \">\n        \u4E0B\u8F7D\u89C6\u9891\n    </span>";
        BiliImgService.tripleClick = "\n    <span id=\"tripleClick\" style=\"\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding:0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    \">\n        \u4E00\u952E\u4E09\u8FDE\n    </span>";
        return BiliImgService;
    }(PluginBase));

    var MovieService = (function (_super) {
        __extends(MovieService, _super);
        function MovieService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.YouKu, /youku/i],
                [SiteEnum.IQiYi, /iqiyi/i],
                [SiteEnum.LeShi, /le.com/i],
                [SiteEnum.Tencent_V, /v.qq/i],
                [SiteEnum.TuDou, /tudou/i],
                [SiteEnum.MangGuo, /mgtv/i],
                [SiteEnum.SoHu, /sohu/i],
                [SiteEnum.Acfun, /acfun/i],
                [SiteEnum.BiliBili, /bilibili/i],
                [SiteEnum.M1905, /1905.com/i],
                [SiteEnum.PPTV, /pptv.com/i],
                [SiteEnum.YinYueTai, /yinyuetai/],
            ]);
            _this.menu = new Common.Menu();
            return _this;
        }
        MovieService.prototype.loader = function () {
            if (typeof ($) === 'undefined') {
                Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
            }
        };
        MovieService.prototype.run = function () {
            this.menu.Init([
                { title: "\u7535\u5F71\u641C\u7D22", show: "\u7535\u5F71<br>\u641C\u7D22", type: "search" },
                { title: "\u89C6\u9891\u89E3\u6790", show: "\u89C6\u9891<br>\u89E3\u6790", type: "process" },
                { title: "\u7EDD\u4E16\u597D\u5238", show: "\u7EDD\u4E16<br>\u597D\u5238", type: "tb" },
                { title: "\u4EAC\u4E1C\u597D\u5238", show: "\u4EAC\u4E1C<br>\u597D\u5238", type: "jd" }
            ], this._onClick);
        };
        MovieService.prototype._onClick = function () {
            $('body').on('click', '[data-cat=process]', function () {
                Core.open('http://tv.wandhi.com/go.html?url=' + encodeURIComponent(window.location.href));
            });
            $('body').on('click', '[data-cat=search]', function () {
                Core.open('http://tv.wandhi.com/');
            });
            $('body').on('click', '[data-cat=tb]', function () {
                Core.open('https://t.cn/A6LoYknW');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                Core.open('https://t.cn/A6LoYnHT');
            });
        };
        return MovieService;
    }(PluginBase));

    var JdService = (function (_super) {
        __extends(JdService, _super);
        function JdService() {
            var _this = _super.call(this) || this;
            _this._appName = "JdService";
            _this.rules = new Map([
                [SiteEnum.JingDong, /item.jd/i]
            ]);
            return _this;
        }
        JdService.prototype.loader = function () {
            this.historyService.linkTest() && this.historyService.Process();
        };
        JdService.prototype.run = function () {
            var btn = "<a href=\"javascript:;\" class=\"btn-special1 btn-lg btn-yhj\"><span class=\"\">\u67E5\u8BE2\u4F18\u60E0\u5238</span></a>";
            var keywords = $(".sku-name").text().trim();
            $("#choose-btns").prepend(btn);
            $(".btn-yhj").on('click', function () {
                Core.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(keywords));
            });
        };
        var _a;
        __decorate([
            WandhiAuto,
            __metadata("design:type", typeof (_a = typeof GwdService !== "undefined" && GwdService) === "function" ? _a : Object)
        ], JdService.prototype, "historyService", void 0);
        return JdService;
    }(PluginBase));

    var UrlHelper = (function () {
        function UrlHelper() {
        }
        UrlHelper.Bind = function (CssSelector, method, doc) {
            $(CssSelector).click(function () {
                debugger;
                Core.openUrl($(this).data('key'));
            });
        };
        UrlHelper.urlEncode = function (url) {
            return encodeURIComponent(url);
        };
        UrlHelper.urlDecode = function (url) {
            return decodeURIComponent(url);
        };
        return UrlHelper;
    }());

    var MusicService = (function (_super) {
        __extends(MusicService, _super);
        function MusicService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.WangYi, /163(.*)song/i],
                [SiteEnum.Tencent_M, /y.QQ(.*)song/i],
                [SiteEnum.KuGou, /kugou.com\/song\/*/i],
                [SiteEnum.KuWo, /kuwo(.*)yinyue/i],
                [SiteEnum.XiaMi, /xiami/i],
                [SiteEnum.TaiHe, /taihe.com/i],
                [SiteEnum.QingTing, /qingting/i],
                [SiteEnum.LiZhi, /lizhi/i],
                [SiteEnum.MiGu, /migu/i],
                [SiteEnum.XiMaLaYa, /ximalaya/i],
            ]);
            _this.menu = new Common.Menu();
            return _this;
        }
        MusicService.prototype.loader = function () {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        };
        MusicService.prototype.run = function () {
            this.menu.Init([
                { title: "\u7535\u5F71\u641C\u7D22", show: "\u7535\u5F71<br>\u641C\u7D22", type: "search" },
                { title: "\u97F3\u4E50\u4E0B\u8F7D", show: "\u97F3\u4E50<br>\u4E0B\u8F7D", type: "process" },
                { title: "\u7EDD\u4E16\u597D\u5238", show: "\u7EDD\u4E16<br>\u597D\u5238", type: "tb" },
                { title: "\u4EAC\u4E1C\u597D\u5238", show: "\u4EAC\u4E1C<br>\u597D\u5238", type: "jd" }
            ], this._OnClick);
        };
        MusicService.prototype._OnClick = function () {
            this.rules;
            $('body').on('click', '[data-cat=process]', function () {
                if (/ximalaya/i.test(Runtime.url)) {
                    if (__INITIAL_STATE__ && __INITIAL_STATE__.SoundDetailPage != undefined) {
                        Core.open('http://music.wandhi.com/?id=' + __INITIAL_STATE__.SoundDetailPage.trackId + '&type=ximalaya');
                    }
                    else {
                        layer.closeAll();
                        var html = '<div style="padding:0px 50px 0px 50px;"><ul class="sound-list dOi2">';
                        $.each(__INITIAL_STATE__.AlbumDetailTrackList.tracksInfo.tracks, function (index, item) { html += '<li class="dOi2"><a href="http://music.wandhi.com/?id=' + item.trackId + '&type=ximalaya" target="_blank">' + item.title + '</a></li>'; });
                        html += '</ul></div>';
                        layer.open({ type: 1, area: ['auto', '30%'], title: "\u4E3A\u4F60\u627E\u5230\u4E86\u8FD9\u4E9B\u66F2\u76EE\u89E3\u6790\u2026\u2026\u4EC0\u4E48\uFF1F\u6211\u4E11\uFF1F\u4EE5\u540E\u518D\u8BF4\u5427", shade: 0.6, maxmin: false, anim: 2, content: html });
                    }
                }
                else if (/taihe.com/i.test(Runtime.url)) {
                    Core.open('http://music.wandhi.com/?url=' + UrlHelper.urlEncode(Runtime.url.replace("taihe", "baidu")));
                }
                else {
                    Core.open('http://music.wandhi.com/?url=' + UrlHelper.urlEncode(Runtime.url));
                }
            });
            $('body').on('click', '[data-cat=search]', function () {
                Core.open('http://tv.wandhi.com/');
            });
            $('body').on('click', '[data-cat=tb]', function () {
                Core.open('https://t.cn/A6LoYknW');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                Core.open('https://t.cn/A6LoYnHT');
            });
        };
        return MusicService;
    }(PluginBase));

    var StuService = (function (_super) {
        __extends(StuService, _super);
        function StuService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.SXB, /shangxueba.com\/ask\/.*html/i]
            ]);
            return _this;
        }
        StuService.prototype.loader = function () {
            if (typeof ($) === 'undefined') {
                Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
            }
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        };
        StuService.prototype.run = function () {
            this.menu.Init([
                { title: "\u67E5\u770B\u7B54\u6848", show: "\u67E5\u770B<br>\u7B54\u6848", type: "search" },
                { title: "\u6253\u8D4F\u4F5C\u8005", show: "\u6253\u8D4F<br>\u4F5C\u8005", type: "process" },
                { title: "\u7EDD\u4E16\u597D\u5238", show: "\u7EDD\u4E16<br>\u597D\u5238", type: "tb" },
                { title: "\u4EAC\u4E1C\u597D\u5238", show: "\u4EAC\u4E1C<br>\u597D\u5238", type: "jd" }
            ], this._onClick);
        };
        StuService.prototype._onClick = function () {
            $('body').on('click', '[data-cat=process]', function () {
                layer.open({ type: 1, title: "\u8BF7\u6211\u559D\u4E00\u676F", shadeClose: true, area: '800px', content: '<img src="https://i.loli.net/2019/05/14/5cda672add6f594934.jpg">' });
            });
            $('body').on('click', '[data-cat=search]', function () {
                Route.querySbx($("#Hidd_id").val(), function (data) {
                    if (data.status) {
                        Alert.open("\u7B54\u6848", data.msg);
                        Route.sbxFeedback(dataid, data.msg);
                    }
                    else if (data.msg == 'wronganhao') {
                        Alert.prompt("\u53E3\u4EE4\u9519\u8BEF\uFF0C\u8BF7\u5C06\u5F39\u51FA\u7684\u9875\u9762\u4E2D\u7684\u53E3\u4EE4\u586B\u5165\u540E\u91CD\u8BD5\uFF01", Config.get("sxb_anhao", ""), function (v) {
                            Config.set("sxb_anhao", v);
                            Alert.info("\u8BF7\u518D\u6B21\u70B9\u51FB\u67E5\u770B\u7B54\u6848\u6309\u94AE");
                        }, 4);
                        Core.open("http://www.lelunwen.com/e/action/ListInfo/?classid=45");
                    }
                    else {
                        Alert.confim("\u6CA1\u67E5\u5230\u7B54\u6848", "\u8981\u4E0D\u8981\u8DF3\u8F6C\u5230\u67E5\u8BE2\u9875\u770B\u770B\uFF1F", ["\u597D\u7684\u8D70\u8D77", "\u8FD8\u662F\u7B97\u4E86"], function () {
                            Core.open(Runtime.url.replace('shangxueba', "shangxueba365"));
                        });
                    }
                });
            });
            $('body').on('click', '[data-cat=tb]', function () {
                Core.open('https://t.cn/A6LoYknW');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                Core.open('https://t.cn/A6LoYnHT');
            });
        };
        return StuService;
    }(PluginBase));

    var OneKeyVipInjection = (function () {
        function OneKeyVipInjection() {
            this.plugins = new Array();
            this.plugins = [
                Container.Require(UpdateService),
                Container.Require(BiliImgService),
                Container.Require(MovieService),
                Container.Require(TaoBaoService),
                Container.Require(JdService),
                Container.Require(MusicService),
                Container.Require(StuService),
                Container.Require(GwdService),
            ];
            Logger.info('container loaded');
        }
        OneKeyVipInjection.prototype.Init = function () {
            this.plugins.every(function (element) {
                if (element.linkTest()) {
                    new Promise(function (resolve) {
                        resolve(1);
                    }).then(element.Process);
                    Logger.debug("element [" + element.appName() + "];unique:[" + element.unique() + "]");
                    return !element.unique();
                }
                return true;
            });
        };
        return OneKeyVipInjection;
    }());

    Logger.level = LogLevel.info;
    Container.Require(OneKeyVipInjection).Init();

})));
