// ==UserScript==
// @name         【玩的嗨】VIP工具箱,一站式音乐搜索下载,百度云离线跳转,获取B站封面,淘宝京东优惠券 2020-03-08 更新，报错请及时反馈
// @namespace    http://www.wandhi.com/
// @version      4.0.6 
// @homepage     https://tools.wandhi.com/scripts
// @supportURL   https://www.wandhi.com/post-647.html
// @description  在视频播放页悬浮VIP按钮，可在线播放vip视频；支持优酷vip，腾讯vip，爱奇艺vip，芒果vip，乐视vip等常用视频...一站式音乐搜索解决方案，网易云音乐，QQ音乐，酷狗音乐，酷我音乐，虾米音乐，百度音乐，蜻蜓FM，荔枝FM，喜马拉雅，集成优惠券查询按钮
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
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @require      https://greasyfork.org/scripts/373336-layer-wandhi/code/layer_wandhi.js?version=637587
// @require      https://cdn.bootcss.com/sweetalert/2.1.2/sweetalert.min.js
// @license      GPL License
// @grant        GM_setClipboard
// @run-at       document-end
// @connect      shangxueba365.com
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM.addStyle
// @grant        GM.getValue
// @grant        GM.setValue
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
        function AjaxOption(_url, _methodType, _dataType, _data, _success, _header) {
            if (_methodType === void 0) { _methodType = "GET"; }
            if (_header === void 0) { _header = new Map(); }
            this.url = _url;
            this.methodType = _methodType;
            this.dataType = _dataType;
            this.onSuccess = _success;
            this.data = _data;
            this.headers = _header;
        }
        AjaxOption.prototype.getData = function () {
            if (this.data instanceof FormData) {
                return this.data;
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
                    option.onSuccess && option.onSuccess(JSON.parse(res.responseText));
                },
                onerror: function (res) {
                    option.onError && option.onError(res);
                }
            });
        };
        Http.getData = function (url, callback) {
            $.getJSON(url, function (d) {
                callback(d);
            });
        };
        return Http;
    }());

    var Core = (function () {
        function Core() {
            this.topUrl = top.window.location.href;
            this.url = this.currentUrl();
            this.http = new Http();
        }
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
        Core.prototype.accpendCssContent = function (content) {
            var Style = document.createElement("style");
            Style.innerHTML = content;
            Core.head.appendChild(Style);
        };
        Core.prototype.bodyAppendCss = function (url) {
            $('body').append($('<link rel="stylesheet" href="' + url + '">'));
        };
        Core.prototype.bodyAppend = function (html) {
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
                this.core.accpendCssContent("\n            html .aside-nav {\n                -ms-text-size-adjust: 100%;\n                -webkit-text-size-adjust: 100%;\n                -webkit-font-smoothing: antialiased;\n                font-size: 62.5%\n            }\n            body .aside-nav {\n                font-family: \"Helvetica Neue\", Helvetica, \"Microsoft YaHei\", Arial, sans-serif;\n                margin: 0;\n                font-size: 1.6rem;\n                /*background-color: #f9f9f9;*/\n                color: #4E546B\n            }\n            .aside-nav {\n                position: fixed;\n                /*right: -50px;*/\n                top: 350px;\n                width: 260px;\n                height: 260px;\n                -webkit-filter: url(#goo);\n                filter: url(#goo);\n                -ms-user-select: none;\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                user-select: none;\n                opacity: .75;\n                z-index: 20180817;\n            }\n            .aside-nav.no-filter {\n                -webkit-filter: none;\n                filter: none\n            }\n            .aside-nav .aside-menu {\n                position: absolute;\n                width: 70px;\n                height: 70px;\n                -webkit-border-radius: 50%;\n                border-radius: 50%;\n                background: #f34444;\n                left: 0;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                text-align: center;\n                line-height: 70px;\n                color: #fff;\n                font-size: 20px;\n                z-index: 1;\n                cursor: move\n            }\n            .aside-nav .menu-item {\n                position: absolute;\n                width: 60px;\n                height: 60px;\n                background-color: #FF7676;\n                left: 0;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                line-height: 60px;\n                text-align: center;\n                -webkit-border-radius: 50%;\n                border-radius: 50%;\n                text-decoration: none;\n                color: #fff;\n                -webkit-transition: background .5s, -webkit-transform .6s;\n                transition: background .5s, -webkit-transform .6s;\n                -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n                transition: transform .6s, background .5s;\n                transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n                font-size: 14px;\n                -webkit-box-sizing: border-box;\n                -moz-box-sizing: border-box;\n                box-sizing: border-box\n            }\n            .aside-nav .menu-item:hover {\n                background: #A9C734;\n            }\n            .aside-nav .menu-line {\n                line-height: 20px;\n                padding-top: 10px;\n            }\n            .aside-nav:hover {\n                opacity: 1;\n            }\n            .aside-nav:hover .aside-menu {\n                -webkit-animation: jello 1s;\n                -moz-animation: jello 1s;\n                animation: jello 1s\n            }\n            .aside-nav:hover .menu-first {\n                -webkit-transform: translate3d(0, -135%, 0);\n                -moz-transform: translate3d(0, -135%, 0);\n                transform: translate3d(0, -135%, 0)\n            }\n            .aside-nav:hover .menu-second {\n                -webkit-transform: translate3d(120%, -70%, 0);\n                -moz-transform: translate3d(120%, -70%, 0);\n                transform: translate3d(120%, -70%, 0)\n            }\n            .aside-nav:hover .menu-third {\n                -webkit-transform: translate3d(120%, 70%, 0);\n                -moz-transform: translate3d(120%, 70%, 0);\n                transform: translate3d(120%, 70%, 0)\n            }\n            .aside-nav:hover .menu-fourth {\n                -webkit-transform: translate3d(0, 135%, 0);\n                -moz-transform: translate3d(0, 135%, 0);\n                transform: translate3d(0, 135%, 0)\n            }\n            @-webkit-keyframes jello {\n            from, 11.1%, to {\n            -webkit-transform:none;\n            transform:none\n            }\n            22.2% {\n            -webkit-transform:skewX(-12.5deg) skewY(-12.5deg);\n            transform:skewX(-12.5deg) skewY(-12.5deg)\n            }\n            33.3% {\n            -webkit-transform:skewX(6.25deg) skewY(6.25deg);\n            transform:skewX(6.25deg) skewY(6.25deg)\n            }\n            44.4% {\n            -webkit-transform:skewX(-3.125deg) skewY(-3.125deg);\n            transform:skewX(-3.125deg) skewY(-3.125deg)\n            }\n            55.5% {\n            -webkit-transform:skewX(1.5625deg) skewY(1.5625deg);\n            transform:skewX(1.5625deg) skewY(1.5625deg)\n            }\n            66.6% {\n            -webkit-transform:skewX(-.78125deg) skewY(-.78125deg);\n            transform:skewX(-.78125deg) skewY(-.78125deg)\n            }\n            77.7% {\n            -webkit-transform:skewX(0.390625deg) skewY(0.390625deg);\n            transform:skewX(0.390625deg) skewY(0.390625deg)\n            }\n            88.8% {\n            -webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            transform:skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n            }\n            @-moz-keyframes jello {\n            from, 11.1%, to {\n            -moz-transform:none;\n            transform:none\n            }\n            22.2% {\n            -moz-transform:skewX(-12.5deg) skewY(-12.5deg);\n            transform:skewX(-12.5deg) skewY(-12.5deg)\n            }\n            33.3% {\n            -moz-transform:skewX(6.25deg) skewY(6.25deg);\n            transform:skewX(6.25deg) skewY(6.25deg)\n            }\n            44.4% {\n            -moz-transform:skewX(-3.125deg) skewY(-3.125deg);\n            transform:skewX(-3.125deg) skewY(-3.125deg)\n            }\n            55.5% {\n            -moz-transform:skewX(1.5625deg) skewY(1.5625deg);\n            transform:skewX(1.5625deg) skewY(1.5625deg)\n            }\n            66.6% {\n            -moz-transform:skewX(-.78125deg) skewY(-.78125deg);\n            transform:skewX(-.78125deg) skewY(-.78125deg)\n            }\n            77.7% {\n            -moz-transform:skewX(0.390625deg) skewY(0.390625deg);\n            transform:skewX(0.390625deg) skewY(0.390625deg)\n            }\n            88.8% {\n            -moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            transform:skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n            }\n            @keyframes jello {\n            from, 11.1%, to {\n            -webkit-transform:none;\n            -moz-transform:none;\n            transform:none\n            }\n            22.2% {\n            -webkit-transform:skewX(-12.5deg) skewY(-12.5deg);\n            -moz-transform:skewX(-12.5deg) skewY(-12.5deg);\n            transform:skewX(-12.5deg) skewY(-12.5deg)\n            }\n            33.3% {\n            -webkit-transform:skewX(6.25deg) skewY(6.25deg);\n            -moz-transform:skewX(6.25deg) skewY(6.25deg);\n            transform:skewX(6.25deg) skewY(6.25deg)\n            }\n            44.4% {\n            -webkit-transform:skewX(-3.125deg) skewY(-3.125deg);\n            -moz-transform:skewX(-3.125deg) skewY(-3.125deg);\n            transform:skewX(-3.125deg) skewY(-3.125deg)\n            }\n            55.5% {\n            -webkit-transform:skewX(1.5625deg) skewY(1.5625deg);\n            -moz-transform:skewX(1.5625deg) skewY(1.5625deg);\n            transform:skewX(1.5625deg) skewY(1.5625deg)\n            }\n            66.6% {\n            -webkit-transform:skewX(-.78125deg) skewY(-.78125deg);\n            -moz-transform:skewX(-.78125deg) skewY(-.78125deg);\n            transform:skewX(-.78125deg) skewY(-.78125deg)\n            }\n            77.7% {\n            -webkit-transform:skewX(0.390625deg) skewY(0.390625deg);\n            -moz-transform:skewX(0.390625deg) skewY(0.390625deg);\n            transform:skewX(0.390625deg) skewY(0.390625deg)\n            }\n            88.8% {\n            -webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            -moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            transform:skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n            }\n            \n            .animated {\n                -webkit-animation-duration: 1s;\n                -moz-animation-duration: 1s;\n                animation-duration: 1s;\n                -webkit-animation-fill-mode: both;\n                -moz-animation-fill-mode: both;\n                animation-fill-mode: both\n            }\n            \n            @-webkit-keyframes bounceInUp {\n            from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            animation-timing-function:cubic-bezier(0.215, .61, .355, 1)\n            }\n            from {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 800px, 0);\n                transform: translate3d(0, 800px, 0)\n            }\n            60% {\n            opacity:1;\n            -webkit-transform:translate3d(0, -20px, 0);\n            transform:translate3d(0, -20px, 0)\n            }\n            75% {\n            -webkit-transform:translate3d(0, 10px, 0);\n            transform:translate3d(0, 10px, 0)\n            }\n            90% {\n            -webkit-transform:translate3d(0, -5px, 0);\n            transform:translate3d(0, -5px, 0)\n            }\n            to {\n                -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n            }\n            }\n            @-moz-keyframes bounceInUp {\n            from, 60%, 75%, 90%, to {\n            -moz-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            animation-timing-function:cubic-bezier(0.215, .61, .355, 1)\n            }\n            from {\n                opacity: 0;\n                -moz-transform: translate3d(0, 800px, 0);\n                transform: translate3d(0, 800px, 0)\n            }\n            60% {\n            opacity:1;\n            -moz-transform:translate3d(0, -20px, 0);\n            transform:translate3d(0, -20px, 0)\n            }\n            75% {\n            -moz-transform:translate3d(0, 10px, 0);\n            transform:translate3d(0, 10px, 0)\n            }\n            90% {\n            -moz-transform:translate3d(0, -5px, 0);\n            transform:translate3d(0, -5px, 0)\n            }\n            to {\n                -moz-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n            }\n            }\n            @keyframes bounceInUp {\n            from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            -moz-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            animation-timing-function:cubic-bezier(0.215, .61, .355, 1)\n            }\n            from {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 800px, 0);\n                -moz-transform: translate3d(0, 800px, 0);\n                transform: translate3d(0, 800px, 0)\n            }\n            60% {\n            opacity:1;\n            -webkit-transform:translate3d(0, -20px, 0);\n            -moz-transform:translate3d(0, -20px, 0);\n            transform:translate3d(0, -20px, 0)\n            }\n            75% {\n            -webkit-transform:translate3d(0, 10px, 0);\n            -moz-transform:translate3d(0, 10px, 0);\n            transform:translate3d(0, 10px, 0)\n            }\n            90% {\n            -webkit-transform:translate3d(0, -5px, 0);\n            -moz-transform:translate3d(0, -5px, 0);\n            transform:translate3d(0, -5px, 0)\n            }\n            to {\n                -webkit-transform: translate3d(0, 0, 0);\n                -moz-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n            }\n            }\n            .bounceInUp {\n                -webkit-animation-name: bounceInUp;\n                -moz-animation-name: bounceInUp;\n                animation-name: bounceInUp;\n                -webkit-animation-delay: 1s;\n                -moz-animation-delay: 1s;\n                animation-delay: 1s\n            }\n            \n            @media screen and (max-width:640px) {\n            .aside-nav {/* display: none!important */}\n            }\n            @media screen and (min-width:641px) and (max-width:1367px) {\n            .aside-nav {top: 50px}\n            }\n            ");
            };
            Menu.prototype.getBody = function (option) {
                return "<svg width=\"0\" height=\"0\"><defs><filter id=\"goo\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"></feGaussianBlur><feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"goo\"></feColorMatrix><feComposite in=\"SourceGraphic\" in2=\"goo\" operator=\"atop\"></feComposite></filter></defs></svg><div class=\"aside-nav bounceInUp animated\" id=\"Wandhi-nav\"><label for=\"\" class=\"aside-menu\" title=\"\u6309\u4F4F\u62D6\u52A8\">VIP</label>" + option + "</div>";
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
                this.core.bodyAppend(this.getBody(str));
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

    var Runtime = (function () {
        function Runtime() {
        }
        Runtime._url = function () {
            return window.location.href;
        };
        Runtime.url = Runtime._url();
        return Runtime;
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
            if (typeof ($) === 'undefined') {
                Core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
            }
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

    var Alert = (function () {
        function Alert() {
        }
        Alert.open = function (titls, content, area, shade, offset, maxmin) {
            if (area === void 0) { area = ['400px', '300px']; }
            if (shade === void 0) { shade = 0; }
            if (offset === void 0) { offset = "lb"; }
            if (maxmin === void 0) { maxmin = true; }
            layer.open({
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
            layer.msg(msg, { time: 2000 });
        };
        Alert.error = function (msg) {
            layer.msg(msg, { icon: 5, time: 2000 });
        };
        return Alert;
    }());

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
                Http.ajax(new AjaxOption("http://www.shangxueba365.com/get.php", "POST", "JSON", {
                    "docinfo": "https://www.shangxueba.com/ask/" + $("#Hidd_id").val() + ".html",
                    "anhao": "2232"
                }, function (data) {
                    if (data.status) {
                        Alert.open("答案", data.msg);
                    }
                    else {
                        Alert.error("没找到答案");
                    }
                }));
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
        return Route;
    }());

    var BiliImgService = (function (_super) {
        __extends(BiliImgService, _super);
        function BiliImgService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.rules = new Map([
                [SiteEnum.JingDong, /bilibili.com\/video\/av*/i]
            ]);
            return _this;
        }
        BiliImgService.prototype.loader = function () {
            Core.appendCss("//lib.baomitu.com/layer/3.1.1/theme/default/layer.css");
        };
        BiliImgService.prototype.run = function () {
            if ($(".tit").length) {
                setTimeout(function () {
                    $(".tit").after(BiliImgService.btn);
                    $('body').on('click', '#findimg', function () {
                        Http.getData(Route.apiRoot + "/tools/bili?url=" + Runtime.url, function (res) {
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
        BiliImgService.btn = "\n    <span id=\"findimg\" style=\"\n        background-color: #fb7199;\n        color: white;\n        font-size: 1.5rem;\n        text-align: center;\n        margin-left: 1rem;\n        padding: 1.5rem;\n        cursor: pointer;\n    \">\n        \u83B7\u53D6\u5C01\u9762\n    </span>";
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
