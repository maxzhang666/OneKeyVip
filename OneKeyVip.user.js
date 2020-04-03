// ==UserScript==
// @name         【玩的嗨】VIP工具箱,一站式音乐搜索下载,获取B站封面,上学吧答案获取等众多功能聚合 2020-04-03 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.1.2
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://wiki.wandhi.com/
// @description  功能介绍:1、Vip视频解析;2、一站式音乐搜索解决方案;3、bilibili视频封面获取;4、上学吧答案查询(接口偶尔抽风);5、商品历史价格展示(一次性告别虚假降价);6、优惠券查询
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
// @include      *://detail.tmall.hk/*
// @include      *://item.jd.com/*
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
// @require      https://cdn.bootcss.com/sweetalert/2.1.2/sweetalert.min.js
// @require      https://lib.baomitu.com/echarts/4.6.0/echarts.min.js
// @require      https://lib.baomitu.com/layer/2.3/layer.js
// @license      MIT
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      shangxueba365.com
// @connect      api.wandhi.com
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
(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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

    var Runtime = (function () {
        function Runtime() {
        }
        Object.defineProperty(Runtime, "url", {
            get: function () {
                return window.location.href;
            },
            enumerable: true,
            configurable: true
        });
        return Runtime;
    }());

    var HttpRequest = (function () {
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
            enumerable: true,
            configurable: true
        });
        return HttpRequest;
    }());
    var AjaxOption = (function () {
        function AjaxOption(_url, _methodType, _data, _success, _header) {
            if (_methodType === void 0) { _methodType = "GET"; }
            if (_header === void 0) { _header = new Map(); }
            this.url = _url;
            this.methodType = _methodType;
            this.onSuccess = _success;
            this.data = _data;
            this.headers = _header;
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
        Alert.confim = function (title, msg, buttons, callback) {
            return layer.open({
                type: 1,
                title: title || false,
                closeBtn: true,
                shade: 0.8,
                id: 'LAY_layuipro',
                resize: false,
                btn: buttons,
                btnAlign: 'c',
                moveType: 1,
                content: "<div style=\"padding: 20px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;\">" + msg + "</div>",
                yes: function (index) {
                    callback(index);
                }
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
            var rq = new HttpRequest(option);
            option.headers.set('User-Agent', 'Mozilla/4.0 (compatible) Greasemonkey');
            option.headers.set('Accept', 'application/atom+xml,application/xml,text/xml');
            GM_xmlhttpRequest({
                url: option.url,
                method: option.methodType,
                headers: option.headers,
                data: option.getData(),
                onload: function (res) {
                    try {
                        option.onSuccess && option.onSuccess(JSON.parse(res.responseText));
                    }
                    catch (error) {
                        Alert.confim("", "                                        \n                        <h1>\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u590D\u5236\u4E0B\u5217\u4FE1\u606F\u5411\u5F00\u53D1\u8005\u53CD\u9988\u95EE\u9898</h1><br>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u65E5\u5FD7\uFF1A</span><br>\n                        <p>" + error + "</p>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u8BE6\u60C5\uFF1A</span><br>\n                        <p>" + res.responseText + "</p>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u9875\u9762\uFF1A</span><br>\n                        <p>" + Runtime.url + "</p>\n                    ", ['去反馈', "\u5173\u95ED"], function (index) { Core.open("https://gitee.com/ixysy/OneKeyVip/issues"); });
                    }
                },
                onerror: function (res) {
                    Alert.confim("", "              \n                        <h1>\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u590D\u5236\u4E0B\u5217\u4FE1\u606F\u5411\u5F00\u53D1\u8005\u53CD\u9988\u95EE\u9898</h1><br>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u8BE6\u60C5\uFF1A</span><br>\n                        <p>" + res.responseText + "</p>\n                        <span style=\"color:red;font-weight: bold;font-size: large;\">\u9519\u8BEF\u9875\u9762\uFF1A</span><br>\n                        <p>" + Runtime.url + "</p>                    \n                    ", ['去反馈', "\u5173\u95ED"], function (index) { Core.open("https://gitee.com/ixysy/OneKeyVip/issues"); });
                    option.onError && option.onError(res);
                }
            });
        };
        Http.getData = function (url, callback) {
            $.getJSON(url, function (d) {
                callback(d);
            });
        };
        Http.post = function (url, data) {
            var index = Alert.loading();
            var p = new Promise(function (resolve) {
                Http.ajax(new AjaxOption(url, "POST", data, function (data) {
                    Alert.close(index);
                    resolve(data);
                }));
            });
            return p;
        };
        Http.get = function (url, data) {
            var p = new Promise(function (resolve) {
                Http.ajax(new AjaxOption(url, "GET", data, function (data) {
                    resolve(data);
                }));
            });
            return p;
        };
        return Http;
    }());

    var Core = (function () {
        function Core() {
            this.topUrl = top.window.location.href;
            this.url = this.currentUrl();
            this.http = new Http();
        }
        Core.appendTo = function (selecter, html) {
            $(selecter).append(html);
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
        Core.uuid = function (len, radix) {
            if (len === void 0) { len = 10; }
            if (radix === void 0) { radix = 16; }
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix || chars.length;
            if (len) {
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

    var PluginBase = (function () {
        function PluginBase() {
            this.core = new Core();
            this.apiRoot = "https://api.wandhi.com/api";
        }
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
        PluginBase.prototype.Process = function () {
            this.loader();
            this.run();
        };
        PluginBase.prototype.getData = function (url, callback) {
            $.getJSON(url, function (d) {
                callback(d);
            });
        };
        return PluginBase;
    }());

    var SiteEnum;
    (function (SiteEnum) {
        SiteEnum[SiteEnum["TaoBao"] = 0] = "TaoBao";
        SiteEnum[SiteEnum["TMall"] = 1] = "TMall";
        SiteEnum[SiteEnum["JingDong"] = 2] = "JingDong";
        SiteEnum[SiteEnum["IQiYi"] = 3] = "IQiYi";
        SiteEnum[SiteEnum["YouKu"] = 4] = "YouKu";
        SiteEnum[SiteEnum["LeShi"] = 5] = "LeShi";
        SiteEnum[SiteEnum["TuDou"] = 6] = "TuDou";
        SiteEnum[SiteEnum["Tencent_V"] = 7] = "Tencent_V";
        SiteEnum[SiteEnum["MangGuo"] = 8] = "MangGuo";
        SiteEnum[SiteEnum["SoHu"] = 9] = "SoHu";
        SiteEnum[SiteEnum["Acfun"] = 10] = "Acfun";
        SiteEnum[SiteEnum["BiliBili"] = 11] = "BiliBili";
        SiteEnum[SiteEnum["M1905"] = 12] = "M1905";
        SiteEnum[SiteEnum["PPTV"] = 13] = "PPTV";
        SiteEnum[SiteEnum["YinYueTai"] = 14] = "YinYueTai";
        SiteEnum[SiteEnum["WangYi"] = 15] = "WangYi";
        SiteEnum[SiteEnum["Tencent_M"] = 16] = "Tencent_M";
        SiteEnum[SiteEnum["KuGou"] = 17] = "KuGou";
        SiteEnum[SiteEnum["KuWo"] = 18] = "KuWo";
        SiteEnum[SiteEnum["XiaMi"] = 19] = "XiaMi";
        SiteEnum[SiteEnum["TaiHe"] = 20] = "TaiHe";
        SiteEnum[SiteEnum["QingTing"] = 21] = "QingTing";
        SiteEnum[SiteEnum["LiZhi"] = 22] = "LiZhi";
        SiteEnum[SiteEnum["MiGu"] = 23] = "MiGu";
        SiteEnum[SiteEnum["XiMaLaYa"] = 24] = "XiMaLaYa";
        SiteEnum[SiteEnum["SXB"] = 25] = "SXB";
        SiteEnum[SiteEnum["BDY"] = 26] = "BDY";
        SiteEnum[SiteEnum["BDY1"] = 27] = "BDY1";
        SiteEnum[SiteEnum["LZY"] = 28] = "LZY";
    })(SiteEnum || (SiteEnum = {}));

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
                        return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e];
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
            var _rules = this.rules;
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
                Core.open('https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                Core.open('https://link.zhihu.com/?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z');
            });
        };
        return MusicService;
    }(PluginBase));

    var WandhiInjection = (function () {
        function WandhiInjection(plugins) {
            this.plugins = new Array();
            if (plugins) {
                this.plugins = plugins;
            }
        }
        WandhiInjection.prototype.Init = function () {
            this.plugins.every(function (element) {
                if (element.linkTest()) {
                    element.Process();
                    return false;
                }
                return true;
            });
        };
        return WandhiInjection;
    }());

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
                [SiteEnum.M1905, /1905/i],
                [SiteEnum.PPTV, /pptv/i],
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
                Core.open('http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                Core.open('http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z');
            });
        };
        return MovieService;
    }(PluginBase));

    var Route = (function () {
        function Route() {
            this.queryTao = "";
        }
        Object.defineProperty(Route, "apiRoot", {
            get: function () {
                return "https://api.wandhi.com/api";
            },
            enumerable: true,
            configurable: true
        });
        Route.querySbx = function (id, callback) {
            var _this = this;
            this.queryValue('sxb_anhao', function (res) {
                _this.query365(id, res.data, callback);
            });
        };
        Route.query365 = function (id, anhao, callback) {
            Http.post(Route.sbx, new Map([
                ["docinfo", "https://www.shangxueba.com/ask/" + id + ".html"],
                ["anhao", anhao]
            ])).then(function (res) { callback(res); });
        };
        Route.queryValue = function (key, callback) {
            this.baseApi(Route.config, new Map([
                ["key", key]
            ]), callback);
        };
        Route.queryHistory = function (url, callback) {
            this.baseApi(this.history, new Map([['url', url]]), callback);
        };
        Route.queryBiliImg = function (callback) {
            this.baseApi(this.bili, new Map([['url', Runtime.url]]), callback);
        };
        Route.baseApi = function (api, data, callback) {
            Http.post(Route.apiRoot + api, data).then(function (res) {
                callback(res);
            });
        };
        Route.sbx = "http://www.shangxueba365.com/get1.php";
        Route.config = "/config/query";
        Route.history = "/history/";
        Route.bili = "/tools/bili";
        return Route;
    }());

    var LinesOption = (function () {
        function LinesOption() {
        }
        return LinesOption;
    }());

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
            var url = this.apiRoot + "/tb/infos/" + this.core.getPar("id");
            this.getData(url, function (data) { return _this.initElement(data); });
            this.InitTao();
            this.InitPriceHistory();
        };
        TaoBaoService.prototype.initElement = function (data) {
            $("#wandhi_table tbody tr").remove();
            var row = "";
            if (data.code) {
                data.data.forEach(function (e) {
                    row += "<tr><td>" + e.quan_context + "</td><td>" + e.after_price + "</td><td>" + e.quan_time + "</td><td><b onclick=window.open(decodeURIComponent('" + e.quan_link + "')) style='cursor:pointer'>\u9886\u53D6</b></td></tr>";
                });
            }
            else {
                row = "<tr><td colspan='4'>\u8FD9\u4E2A\u5546\u54C1\u6CA1\u6709\u8D85\u503C\u4F18\u60E0\u5238</td></tr>";
            }
            $("#wandhi_table tbody").append(row);
        };
        TaoBaoService.prototype.InitTao = function () {
            Core.appendCssContent(this.getHistoryCss());
            if ($("#J_DetailMeta").length) {
                Core.appendTo("#J_DetailMeta", this.getHistoryHtml());
            }
            else {
                Core.appendTo("#detail", this.getHistoryHtml() + "<br/>");
            }
        };
        TaoBaoService.prototype.InitPriceHistory = function () {
            var _this = this;
            $("#vip-plugin-outside").show();
            this.theme();
            this.chartMsg("\u5386\u53F2\u4EF7\u683C\u67E5\u8BE2\u4E2D");
            Route.queryHistory(Runtime.url, function (data) {
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
        TaoBaoService.prototype.getHistoryHtml = function () {
            return "<div id=\"vip-plugin-outside\">\n                    <div id=\"vip-plugin-outside-history\" class=\"vip-plugin-outside-history\">\n                        <div class=\"vip-plugin-outside-chart-container\"></div>\n                        <p class=\"vip-plugin-outside-history-tip\"></p>\n                    </div>    \n                </div>";
        };
        TaoBaoService.prototype.getHistoryCss = function () {
            return "\n        #vip-plugin-outside {\n            border: 1px solid #eee;\n            margin: 0 auto;\n            position: relative;\n            clear: both;\n            display: none\n        }\n        #vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-history-tip {\n            position: absolute;\n            margin: 0;\n            top: 50%;\n            left: 50%;\n            letter-spacing: 1px;\n            font-size: 15px;\n            transform: translateX(-50%) translateY(-50%)\n        }\n        #vip-plugin-outside .vip-plugin-outside-history ,#vip-plugin-outside-chart-body{\n            height: 300px;\n            overflow: hidden;\n            position: relative\n        }    \n        #vip-plugin-outside .vip-plugin-outside-history .vip-plugin-outside-chart-container,\n        #vip-plugin-outside-chart-container-line {\n            width: 100%;\n            height: 100%\n        }";
        };
        TaoBaoService.prototype.chartMsg = function (msg) {
            $(".vip-plugin-outside-history-tip").html(msg);
        };
        TaoBaoService.prototype.getChartOption = function (data) {
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
        TaoBaoService.prototype.theme = function () {
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
        return TaoBaoService;
    }(PluginBase));

    var JdService = (function (_super) {
        __extends(JdService, _super);
        function JdService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.JingDong, /item.jd/i]
            ]);
            return _this;
        }
        JdService.prototype.loader = function () {
        };
        JdService.prototype.run = function () {
            var btn = "<a href=\"javascript:;\" class=\"btn-special1 btn-lg btn-yhj\"><span class=\"\">\u67E5\u8BE2\u4F18\u60E0\u5238</span></a>";
            var keywords = $(".sku-name").text().trim();
            $("#choose-btns").prepend(btn);
            $(".btn-yhj").on('click', function () {
                Core.open("http://jd.huizhek.com/?ah=total&kw=" + encodeURIComponent(keywords));
            });
        };
        return JdService;
    }(PluginBase));

    var StuService = (function (_super) {
        __extends(StuService, _super);
        function StuService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.SXB, /shangxueba.com\/ask\/.*html/i]
            ]);
            _this.menu = new Common.Menu();
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
                    }
                    else if (data.msg == 'wronganhao') {
                        Alert.error("\u6CA1\u627E\u5230\u7B54\u6848,\u53EF\u80FD\u662F\u6697\u53F7\u9519\u8BEF\u5FEB\u7ED9\u4F5C\u8005\u53CD\u9988\u4E00\u4E0B");
                    }
                    else {
                        Alert.confim("", "\u8981\u4E0D\u8981\u8DF3\u8F6C\u5230\u67E5\u8BE2\u9875\u770B\u770B\uFF1F", ["\u597D\u7684\u8D70\u8D77", "\u8FD8\u662F\u7B97\u4E86"], function (index) {
                            Core.open(Runtime.url.replace('shangxueba', "shangxueba365"));
                        });
                    }
                });
            });
            $('body').on('click', '[data-cat=tb]', function () {
                Core.open('http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                Core.open('http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z');
            });
        };
        return StuService;
    }(PluginBase));

    var BiliImgService = (function (_super) {
        __extends(BiliImgService, _super);
        function BiliImgService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rules = new Map([
                [SiteEnum.JingDong, /bilibili.com\/video\/[av|bv]*/i]
            ]);
            return _this;
        }
        BiliImgService.prototype.loader = function () {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        };
        BiliImgService.prototype.run = function () {
            if ($(".video-data").length) {
                setTimeout(function () {
                    $(".video-data").last().append(BiliImgService.btn);
                    $('body').on('click', '#findimg', function () {
                        Route.queryBiliImg(function (res) {
                            if (res.code) {
                                Alert.open("\u5C01\u9762\u9171", "<img src=\"" + res.data + "\">");
                            }
                            else {
                                Alert.error("\u54CE\u54DF\u6CA1\u627E\u5230\u5C01\u9762\u54E6\uFF0C\u8981\u4E0D\u8DDF\u4F5C\u8005\u62A5\u544A\u4E00\u4E0B\uFF1F");
                            }
                        });
                    });
                }, 5000);
            }
        };
        BiliImgService.btn = "\n    <span id=\"findimg\" style=\"\n    background-color: #fb7199;\n    color: white;\n    font-size: 1rem;\n    text-align: center;\n    margin-left: 1rem;\n    padding: 0.5rem;\n    cursor: pointer;\n    border-radius: 1rem;\n    \">\n        \u83B7\u53D6\u5C01\u9762\n    </span>";
        return BiliImgService;
    }(PluginBase));

    var app = new WandhiInjection([
        new BiliImgService,
        new MovieService(),
        new TaoBaoService(),
        new JdService(),
        new MusicService(),
        new StuService()
    ]);
    app.Init();

}());
