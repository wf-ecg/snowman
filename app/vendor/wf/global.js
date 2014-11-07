var WF = {};

$.each("address|article|aside|audio|canvas|command|datalist|details|dialog|figure|figcaption|footer|header|hgroup|keygen|mark|meter|menu|nav|progress|ruby|section|time".split("|"), function (idx, val) {
    document.createElement(val);
});
$("html").removeClass("no-js");
if ($("html").attr("class") == "") {
    $("html").removeAttr("class");
}
WF.Browser = {};

WF.Component = {};

WF.Strings = {
    "Components": {
        "BalloonHelp": {
            "beginningOfPopup": {
                "en": "Beginning of popup",
                "es": "Comienzo de ventana emergente"
            },
            "endOfPopup": {
                "en": "End of popup",
                "es": "Fin de ventana emergente"
            }
        },
        "FAQ": {
            "imgOpen": {
                "en": "Collapse",
                "es": "Contraer"
            },
            "imgClosed": {
                "en": "Expand",
                "es": "Mostrar"
            }
        },
        "LightboxOverlay": {
            "closeDialog": {
                "en": "Close Dialog",
                "es": "Cierre di&aacute;logo"
            },
            "errorEncountered": {
                "en": "Error Encountered",
                "es": "Se ha encontrado un error"
            },
            "oneMomentPlease": {
                "en": "One moment, please...",
                "es": "Espere un momento, por favor..."
            },
            "plsWaitGettingInfo": {
                "en": "Please wait. We're getting your information.",
                "es": "Por favor espere. Estamos buscando su informaci&oacute;n."
            },
            "infoCurrUnavail": {
                "en": "This information is currently unavailable.",
                "es": "En este momento esta informaci&oacute;n no est&aacute; disponible."
            },
            "apologizeTryAgain": {
                "en": "We apologize for this inconvenience. Please try again later.",
                "es": "Lamentamos el inconveniente ocasionado. Vuelva a intentarlo m&aacute;s tarde."
            }
        },
        "MultimediaTranscript": {
            "more": {
                "en": "More",
                "es": "M&aacute;s "
            },
            "less": {
                "en": "Less",
                "es": "Menos"
            }
        },
        "ShowHide": {
            "imgOpen": {
                "en": "Hide",
                "es": "Cierre"
            },
            "imgClosed": {
                "en": "Show",
                "es": "Mostrar"
            }
        },
        "ShowMore": {
            "noMoreArticles": {
                "en": "All Articles Displayed",
                "es": "Todos los art&iacute;culos"
            }
        },
        "SocialShare": {
            "Share": {
                "en": "Share",
                "es": "Comparta"
            },
            "Disclosure": {
                "en": '<span class="hide" tabindex="0">Begin popup</span><h2>Share this page</h2>' //
                + '<ul><li><a href="#facebook" class="c52fb">Facebook</a></li>' //
                + '<li><a href="#twitter" class="c52twitter">Twitter</a></li>' //
                + '<li><a href="#linkedin" class="c52linkedin">LinkedIn</a></li>' //
                + '<li><a href="#googleplus" class="c52googleplus">Google+</a></li>' //
                + '<li><a href="#email" class="c52email">Email</a></li></ul>' //
                + "<p>Choose a link above.  We provide these links to external websites for your convenience. " //
                + 'Wells Fargo does not endorse and is not responsible for their content, links, privacy policies, or security policies.</p><span class="hide">End popup</span>',
                "es": '<span class="hide" tabindex="0" lang="en">Begin popup</span><h2>Comparta esta p&aacute;gina</h2>' //
            + '<ul><li><a href="#facebook" class="c52fb">Facebook</a></li>' //
            + '<li><a href="#twitter" class="c52twitter">Twitter</a></li>' //
            + '<li><a href="#linkedin" class="c52linkedin">LinkedIn</a></li>' //
            + '<li><a href="#googleplus" class="c52googleplus">Google+</a></li></ul>' //
            + "<p>Seleccione uno de los enlaces electr&oacute;nicos arriba. Para su conveniencia, le proporcionamos estos enlaces electr&oacute;nicos a sitios de Internet externos." //
            + "Wells Fargo no avala ni se hace responsable por el contenido, los enlaces electr&oacute;nicos, las pol&iacute;ticas de privacidad o las pol&iacute;ticas de seguridad de esos " //
            + 'sitios de Internet.</p><span class="hide" lang="en">End popup</span>'
            },
            "EmailInsert": {
                "en": "Hi,\n\nI thought you'd be interested in this page I found on wellsfargo.com: \n\n",
                "es": "Pens&eacute; que podr&iacute;a interesarle esta p&aacute;gina que encontr&eacute; en wellsfargo.com/spanish:"
            }
        }
    },
    "Shared": {
        "beginItemNo": {
            "en": "Begin item #",
            "es": "Comienzo del &iacute;tem #"
        },
        "beginningOfPopup": {
            "en": "Beginning of popup",
            "es": "Comienzo de ventana emergente"
        },
        "cancel": {
            "en": "Cancel",
            "es": "Cancele"
        },
        "close": {
            "en": "Close",
            "es": "Cierre"
        },
        "continue": {
            "en": "Continue",
            "es": "Contin&uacute;e"
        },
        "endItemNo": {
            "en": "End item #",
            "es": "Fin del &iacute;tem #"
        },
        "endOfPopup": {
            "en": "End of popup",
            "es": "Fin de ventana emergente"
        },
        "item": {
            "en": "item",
            "es": "&iacute;tem"
        },
        "next": {
            "en": "Next",
            "es": "Siguiente"
        },
        "popupBlocker": {
            "en": "You may have a popup blocker preventing this window from opening.",
            "es": "Un bloqueador de ventana emergente puede estar evitando que se abra esta ventana."
        },
        "prev": {
            "en": "Previous",
            "es": "Anterior"
        },
        "print": {
            "en": "Print",
            "es": "Imprima"
        },
        "WFHomePage": {
            "en": "Wells Fargo home page",
            "es": "P&aacute;gina principal de Wells Fargo"
        }
    }
};
(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function (e) {},
            wipeRight: function (e) {},
            wipeUp: function (e) {},
            wipeDown: function (e) {},
            preventDefaultEvents: false
        };

        if (settings) {
            $.extend(config, settings);
        }
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener("touchmove", onTouchMove);
                startX = null;
                isMoving = false;
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault();
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft(e);
                        } else {
                            config.wipeRight(e);
                        }
                    } else {
                        if (Math.abs(dy) >= config.min_move_y) {
                            cancelTouch();
                            if (dy > 0) {
                                config.wipeUp(e);
                            } else {
                                config.wipeDown(e);
                            }
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener("touchmove", onTouchMove, false);
                }
            }
            if ("ontouchstart" in document.documentElement) {
                this.addEventListener("touchstart", onTouchStart, false);
            }
        });
        return this;
    };

})(jQuery);
WF.Utils = {
    addUrlParam: function (baseUrl, name, val) {
        var add = name +"=" + val;
        if (baseUrl.indexOf("#") == - 1) {
            if (baseUrl.indexOf("?") == - 1) {
                return baseUrl + "?" + add;
            } else {
                return baseUrl + "&" + add;
            }
        } else {
            if (baseUrl.indexOf("?") == - 1) {
                return baseUrl.replace("#", "?" + add + "#");
            } else {
                return baseUrl.replace("#", "&" + add + "#");
            }
        }
    },
    ajaxLog: function (err) {
        var url = "/as/common/jslog";
        if (location.href.search("isg-neo") != - 1) {
            url = "jslog.php";
        }
        var query = {
            "errorString": err.message,
            "pageUrl": window.location.href
        };

        if (err.fileName) {
            query.jsFileUrl = err.fileName;
        } else {
            if (err.sourceURL) {
                query.jsFileUrl = err.sourceURL;
            }
        }
        if (err.stack) {
            var stack = WF.Utils.parseErrorStack(err.stack);
            if (stack[0]) {
                if (stack[0].name) {
                    query.errorFunctionName = stack[0].name;
                }
                if (stack[0].line) {
                    query.errorLineNumber = stack[0].line;
                }
                if (!query.jsFileUrl) {
                    query.jsFileUrl = stack[0].url;
                }
                if (stack[0].args) {
                    query.additionalInfo = "arguments: " + stack[0].args;
                }
            }
            if (stack[1] && stack[1].name) {
                query.callingFunctionName = stack[1].name;
            }
        } else {
            query.errorFunctionName = WF.Utils.getNameFromCallee(arguments.callee.caller);
            query.callingFunctionName = WF.Utils.getNameFromCallee(arguments.callee.caller.caller);
        }
        if (err.line) {
            query.errorLineNumber = err.line;
        }
        $.get(url, query);
    },
    childWindow: function (theLink) {
        var options = {};

        var defaults = {
            "directories": "no",
            "location": "no",
            "menubar": "no",
            "resizable": "yes",
            "scrollbars": "yes",
            "status": "no",
            "titlebar": "yes",
            "toolbar": "no"
        };

        var largeDefaults = {
            "directories": "yes",
            "location": "yes",
            "menubar": "yes",
            "resizable": "yes",
            "scrollbars": "yes",
            "status": "yes",
            "titlebar": "yes",
            "toolbar": "yes"
        };

        var smallSize = {
            "width": 200,
            "height": 300
        };

        var mediumSize = {
            "width": 350,
            "height": 500
        };

        var largeSize = {
            "width": 400,
            "height": 700
        };

        var pdfSize = {
            "width": 860,
            "height": 700
        };

        var linkOptions;
        if ((typeof theLink !== "undefined") && (theLink.tagName === "A")) {
            linkOptions = $(theLink).attr("data-win-options");
            switch (linkOptions) {
                case "small":
                    $.extend(options, defaults, smallSize);
                    break;
                case "large":
                    $.extend(options, largeDefaults, largeSize);
                    break;
                case "medium":
                case "":
                    $.extend(options, defaults, mediumSize);
                    break;
                case "pdf":
                    $.extend(options, largeDefaults, pdfSize);
                    break;
                default:
                    var customOptions = {};

                    try {
                        customOptions = $.parseJSON(linkOptions);
                    } catch (e) {
                        customOptions = mediumSize;
                        throw new Error("There was an error parsing the window options. Error reported: " + e.message);
                    }
                    $.extend(options, defaults, customOptions);
                    break;
            }
            var win = window.open(theLink.href, "child", WF.Utils.objectToString(options));
            if (!win) {
                var lang = WF.Page.lang || "en";
                window.alert(WF.Strings.Shared.popupBlocker[lang]);
            }
            return win;
        } else {
            throw new Error("WF.Utils.childWindow() requires a reference to a link.");
        }
        return null;
    },
    generateUniqueId: function (elem) {
        var id = "";
        while (elem.tagName != "BODY") {
            id = ($(elem).prevAll().length + 1) + "_" + id;
            if (!elem.parentNode) {
                var arr = "0123456789abcdef".split("");
                for (var i = 0; i < 16; i++) {
                    id += arr[Math.floor(Math.random() * arr.length)];
                }
                break;
            }
            elem = elem.parentNode;
        }
        return "NID" + id.substr(0, id.length - 1);
    },
    getBrowserSupport: function () {
        ret = {};

        var input = $('<input id="WFtemp" />').get(0);
        ret.placeholder = ("placeholder" in input);
        $("#WFtemp").remove();
        ret.tel = false;
        var userAgent = navigator.userAgent;
        var mobileStrings = ["iPhone", "Android", "BlackBerry", "Mobile"];
        $.each(mobileStrings, function (idx, val) {
            if (new RegExp(val, "i").test(userAgent)) {
                ret.tel = true;
                return true;
            }
        });
        ret.touch = !! ("ontouchstart" in window);
        ret.IE7mode = false;
        if ($("html").hasClass("ie7")) {
            ret.IE7mode = true;
        }
        if (document.documentMode != undefined && document.documentMode < 8) {
            ret.IE7mode = true;
        }
        ret.isIE = (userAgent.indexOf("MSIE") != - 1);
        return ret;
    },
    getClist: function (elem) {
        if (elem.tagName.toUpperCase() == "BODY") {
            return "";
        }
        var clist = $(elem).data("cid") + "~" + $(elem).data("ctid");
        if (clist.search("undef") != - 1) {
            return WF.Utils.getClist(elem.parentNode);
        }
        return clist;
    },
    getDimensions: function (elem) {
        return {
            "width": $(elem).width(),
            "height": $(elem).height()
        };

    },
    getNameFromCallee: function (callee) {
        var hope = callee.toString().match(/^function (\w*)\(/);
        if (hope && hope[1]) {
            return hope[1];
        }
        if (callee.toString().search(/^function ?\(/) != - 1) {
            return "[anonymous function]";
        }
        return false;
    },
    getViewportSize: function () {
        return {
            "width": $(window).width(),
            "height": $(window).height()
        };

    },
    objectToString: function (jsonObj, keyValSeparator, fieldSeparator) {
        var theString = "";
        var strArray = [];
        if (typeof keyValSeparator === "undefined") {
            keyValSeparator = "=";
        }
        if (typeof fieldSeparator === "undefined") {
            fieldSeparator = ",";
        }
        if ((typeof jsonObj !== "undefined") || jsonObj !== {}) {
            for (var key in jsonObj) {
                if (jsonObj.hasOwnProperty(key) && typeof jsonObj[key] !== "function") {
                    strArray.push(key + keyValSeparator + jsonObj[key]);
                }
            }
            theString = strArray.join(fieldSeparator);
        } else {
            theString = null;
        }
        return theString;
    },
    parseErrorStack: function (stack, errName) {
        var isChrome = (stack.search(/\n +at/) != - 1);
        stack = stack.replace(/(\d+):\d+\)\n/g, "$1\n");
        var lines = stack.split(/\n(?: +at )?/);
        if (isChrome) {
            lines.shift();
        }
        var ret = [];
        for (var i = 0; i < lines.length; i++) {
            var item = {};

            if (isChrome) {
                var funcname = lines[i].split(/ /).shift();
            } else {
                var funcname = lines[i].split(/\@/).shift();
            }
            var match = funcname.match(/\((.*)\)$/);
            if (match) {
                item.args = match[1];
                funcname = funcname.substr(0, funcname.indexOf("("));
            }
            item.name = funcname;
            item.line = lines[i].split(/:/).pop();
            lines[i] = lines[i].replace(/:\d+$/, "");
            item.url = lines[i].split(/[\(@]/).pop();
            ret.push(item);
        }
        return ret;
    },
    removeHtmlTags: function (content) {
        if (content.indexOf("<") != - 1) {
            content = content.slice(0, content.indexOf("<")) + content.slice(content.indexOf(">") + 1);
            content = arguments.callee(content);
        }
        return content;
    },
    serialize: function (obj) {
        switch (typeof obj) {
            case "string":
            case "number":
                return obj;
                break;
            case "boolean":
                return new Boolean(obj).toString();
                break;
            case "function":
                return "function";
                break;
            case "undefined":
                return "undefined";
                break;
            default:
                if (obj == null) {
                    return "null";
                }
                var ret = [];
                for (var key in obj) {
                    var val;
                    if (obj.hasOwnProperty(key)) {
                        val = encodeURIComponent(obj[key]);
                        ret.push(key + "=" + val);
                    }
                }
                return ret.join("&");
        }
    },
    setDelayedScrollTo: function (elem) {
        elem = $(elem).get(0);
        if (elem === undefined) {
            return;
        }
        setTimeout(function () {
            elem.scrollIntoView(true);
        }, 500);
    },
    stripTcm: function (str) {
        return str.replace(/(^|\~)tcm:/g, "$1");
    },
    trackVS: function (options, callback) {
        var stdOptions = {
            "log": 1,
            "pid": $("#shell").data("pid"),
            "pageUrl": window.location.href,
            "cb": new Date().valueOf()
        };

        var asyncMode = true;
        var trackInfo = stdOptions;
        $.extend(trackInfo, options);
        $.each(trackInfo, function (idx, val) {
            if (typeof val == "string") {
                trackInfo[idx] = WF.Utils.stripTcm(val);
            }
        });
        if (trackInfo.suppressAsync) {
            asyncMode = false;
        }
        delete trackInfo.suppressAsync;
        $.ajax({
            url: "./vendor/wf/s.gif",
            type: "GET",
            async: asyncMode,
            data: trackInfo,
            success: function () {
                if (callback != null) {
                    callback();
                }
            }
        });
    },
    ucfirst: function (str) {
        var first = str.substr(0, 1);
        var rest = str.substr(1);
        return first.toUpperCase() + rest.toLowerCase();
    },
    untaintAndParse: function (str) {
        if (str.substr(0, 100).search(/for *\(;;/) == - 1) {
            WF.Utils.ajaxLog({
                "message": "Expected JSON result but got: " + str.substr(0, 100) + "..."
            });
            return str;
        }
        try {
            str = str.replace(/^\s*for *\(;;\) *;?\s*/, "");
            str = str.replace(/^\s*\/\*\s*\w+%\s+\{/, "{").replace(/\}\s+%\w+\s*\*\/\s*$/, "}");
            return jQuery.parseJSON(str);
        } catch (err) {
            WF.Utils.ajaxLog(err);
        }
    }
};
WF.OnLoads = {
    doAll: function (root) {
        if (typeof root == "undefined") {
            root = $("body");
        }
        $.each(WF.OnLoads, function (name, code) {
            if (name != "doAll" && typeof WF.OnLoads[name] == "function") {
                try {
                    WF.OnLoads[name](root);
                } catch (e) {
                    WF.Utils.ajaxLog(e);
                }
            }
        });
    },
    customEvents: function () {
        $(document).on("resizePage", function () {});
    },
    apply3rdPartyLinkTracking: function (root) {
        if (typeof root == "undefined") {
            root = $("body");
        }
        $(root).find("a[href^='http']").each(function () {
            if (this.href.search(/^https?:\/\/(www\.)?wellsfargo\.com\//) == - 1) {
                var clist = WF.Utils.getClist(this);
                $(this).bind("click keypress", function (evt) {
                    if (evt.type == "keypress" && evt.keyCode != 13) {
                        return;
                    }
                    WF.Utils.trackVS({
                        "suppressAsync": true,
                        "event": "LinkActivated",
                        "eventType": evt.type,
                        "eventDescription": "outsideDomain",
                        "destinationUrl": this.href,
                        "linkText": $(this).text(),
                        "clist": clist
                    });
                    if (evt.type == "keypress") {
                        window.location.href = this.href;
                        evt.preventDefault();
                    }
                });
            }
        });
    },
    fixIECursorOnFatNav: function () {
        if (!$("html").hasClass("lt-ie9")) {
            return;
        }
        if ($("#userid,#password").length == 0) {
            return;
        }
        $("ul#fatnav").on("fatnavopen", function () {
            var focusedField;
            if ($("#userid").is(":focus")) {
                focusedField = $("#userid");
                focusedField.blur();
                $(this).data("focusedField", focusedField);
            }
            if ($("#password").is(":focus")) {
                focusedField = $("#password");
                focusedField.blur();
                $(this).data("focusedField", focusedField);
            }
        }).on("fatnavclose", function () {
            var focusedField = $(this).data("focusedField");
            if (focusedField) {
                focusedField.focus();
                $(this).data("focusedField", null);
            }
        });
    },
    fixSkipNavLinks: function (root) {
        if (typeof root == "undefined") {
            root = $("body");
        }
        $(root).find('a[href="#skip"]').each(function () {
            $(this).click(function () {
                $($("#skip")[0]).focus();
            });
        });
    },
    hideAccountsDropdownOnFatNav: function () {
        if ($("#destination").length == 0) {
            return;
        }
        $("ul#fatnav").on("fatnavopen", function () {
            var focusedField;
            if ($("#destination").is(":focus")) {
                focusedField = $("#destination");
                focusedField.blur();
                $(this).data("focusedField", focusedField);
            }
        }).on("fatnavclose", function () {
            var focusedField = $(this).data("focusedField");
            if (focusedField) {
                focusedField.focus();
                $(this).data("focusedField", null);
            }
        });
    },
    numberFootnotes: function (root) {
        if (typeof root == "undefined") {
            root = $("body");
        }
        $(root).find('.c20body[data-numbered="true"]').each(function () {
            var cid = $(this).data("cid");
            if (WF.Page.Components.Footnotes[cid]) {
                if ($(this).find(".c20no").size() === 0) {
                    $(this).prepend('<span class="c20no">' + WF.Page.Components.Footnotes[cid] + ".</span>");
                    $(this).attr("data-no", WF.Page.Components.Footnotes[cid]);
                }
            } else {
                if ($("body").find('sup.c20ref[data-footnote="' + cid + '"]').length == 0) {
                    $(this).remove();
                    return;
                }
                WF.Page.Components.Footnotes.last++;
                WF.Page.Components.Footnotes[cid] = WF.Page.Components.Footnotes.last;
                if ($(this).find(".c20no").size() === 0) {
                    $(this).prepend('<span class="c20no">' + WF.Page.Components.Footnotes.last + ".</span>");
                    $(this).attr("data-no", WF.Page.Components.Footnotes.last);
                }
            }
        });
        $(root).find("sup.c20ref").each(function (key) {
            var footnote = $('.c20body[data-cid="' + $(this).attr("data-footnote") + '"]');
            if (footnote[0]) {
                $(this).html(footnote.attr("data-no"));
            }
        });
    },
    placeholderPolyfill: function (root) {
        if (typeof root == "undefined") {
            root = $("body");
        }
        if (!WF.Browser.supports.placeholder) {
            $(root).find("input[placeholder]").each(function () {
                if (!this.value) {
                    this.value = $(this).attr("placeholder");
                }
                $(this).focus(function () {
                    if (this.value == $(this).attr("placeholder")) {
                        this.value = "";
                    }
                }).blur(function () {
                    if (this.value.length < 1) {
                        this.value = $(this).attr("placeholder");
                    }
                });
            });
        }
    },
    preventFraming: function () {
        if (self != top) {
            if (top.location.hostname.search(/wellsfargo.com$/) != - 1 && top.location.pathname.search(/\bDashboard\b/) != - 1 && top.location.pathname.search(/\bCME\b/) != - 1) {
                return true;
            }
            if (location.replace) {
                top.location.replace(window.location.href);
            } else {
                top.location = window.location.href;
            }
        }
    },
    setupBackLink: function (root) {
        $("a.backLink").click(function (e) {
            history.go(-1);
            e.preventDefault();
        });
    },
    setupFinEdShowMore: function (root) {
        if ($(root).get(0).tagName != "BODY") {
            return;
        }
        if ($(".c48").length) {
            var link = $(".c48showMore a");
            var clist = $.map($(".mainContentCol").find(".c48").parent(), function (jq) {
                jq = $(jq);
                var cid = jq.data("cid");
                var ctid = jq.data("ctid");
                return WF.Utils.stripTcm(cid + "~" + ctid);
            }).join("|");
            WF.Utils.trackVS({
                "event": "PageLoad",
                "eventDescription": "DisplaySecondaryArticleList",
                "clist": clist
            });
            WF.Page.FinEdShowMore = {};

            $.each(["primaryTopic", "secondaryTopic", "publicationId", "pageId", "primaryId1", "primaryId2", "primaryId3", "startArticle", "endArticle", "templateId"], function (idx, val) {
                WF.Page.FinEdShowMore[val] = link.data(val);
            });
            link.bind("click keypress", function (evt) {
                if (evt.type == "keypress" && evt.keyCode != 13) {
                    return;
                }
                var url = "/as/SecondaryArticles";
                var clist = $.map($(".mainContentCol").find(".c48").parent(), function (jq) {
                    jq = $(jq);
                    var cid = jq.data("cid");
                    var ctid = jq.data("ctid");
                    return WF.Utils.stripTcm(cid + "~" + ctid);
                }).join("|");
                $.post(url, WF.Page.FinEdShowMore, function (data, txtStatus) {
                    if (!data.response) {
                        link.fadeOut(500);
                        return;
                    }
                    if (data.response && data.response.startArticleIndex) {
                        WF.Page.FinEdShowMore.startArticle = data.response.startArticleIndex;
                    }
                    if (data.response && data.response.endArticleIndex) {
                        WF.Page.FinEdShowMore.endArticle = data.response.endArticleIndex;
                    }
                    var insertBefore = link.get(0).parentNode;
                    if (insertBefore.parentNode.tagName == "ASIDE") {
                        insertBefore = insertBefore.parentNode;
                    }
                    var clist = [];
                    for (var i = 0; i < data.response.sortedAndFilteredArticles.length; i++) {
                        var node = $(data.response.sortedAndFilteredArticles[i].articleContent);
                        node.css("display", "none").insertBefore(insertBefore).slideDown(500);
                        var cid = data.response.sortedAndFilteredArticles[i].articleComponentId;
                        var ctid = data.response.sortedAndFilteredArticles[i].articleComponentTemplateId;
                        clist.push(WF.Utils.stripTcm(cid + "~" + ctid));
                    }
                    if (data.response && !data.response.showMoreLink) {
                        link.parent().html(WF.Strings.Components.ShowMore.noMoreArticles[WF.Page.lang]);
                    }
                    WF.Utils.trackVS({
                        "event": "LinkActivated",
                        "eventType": evt.type,
                        "eventDescription": "DisplaySecondaryArticleList",
                        "clist": clist.join("|")
                    });
                }, "json");
                evt.preventDefault();
            });
        }
    },
    setupMultimediaTranscripts: function (root) {
        if (typeof root == "undefined") {
            root = $("body");
        }
        var getFirstPart = function (html, limit) {
            if (isNaN(limit)) {
                limit = 150;
            }
            if (limit > html.length) {
                return html;
            }
            var stack = [],
            count = 0,
            ret = "",
            chr, tmp;
            var getFirstFromHtml = function (what) {
                var localRet;
                if (typeof what == "string") {
                    localRet = html.substr(0, html.indexOf(what) + what.length);
                    html = html.substr(html.indexOf(what) + what.length);
                } else {
                    if (typeof what == "number") {
                        localRet = html.substr(0, what);
                        html = html.substr(what);
                    } else {
                        if (what instanceof RegExp) {
                            var match = what.exec(html);
                            if (match) {
                                localRet = html.substr(0, match[0].length);
                                html = html.substr(match[0].length);
                            } else {
                                localRet = "";
                            }
                        }
                    }
                }
                return localRet;
            };

            var transferFromHtml = function (what) {
                var localRet = getFirstFromHtml(what);
                ret += localRet;
                return localRet;
            };
            while (count <= limit) {
                chr = getFirstFromHtml(1);
                if (chr.search(/\s/) != - 1) {
                    ret += chr;
                } else {
                    if (chr == "<") {
                        ret += chr;
                        if (html.substr(0, 1) == "/") {
                            tmp = transferFromHtml(">");
                            tmp = tmp.substr(1, tmp.length - 2);
                            if (stack[stack.length - 1] == tmp) {
                                stack.pop();
                            }
                        } else {
                            tmp = transferFromHtml(/^[a-zA-Z]+/);
                            stack.push(tmp);
                            transferFromHtml(">");
                        }
                    } else {
                        count++;
                        ret += chr;
                    }
                }
            }
            transferFromHtml(/[a-zA-Z0-9_-]+/);
            ret += "&hellip;";
            for (var i = stack.length - 1; i >= 0; i--) {
                ret += "</" + stack[i] + ">";
            }
            return ret;
        };

        $(root).find(".c51transcript, .c63transcript").each(function () {
            var jq = $(this);
            var justH2 = jq.html().match(/^\s{0,50}<h2>[^\>]+<\/h2>/i);
            if (justH2) {
                justH2 = justH2[0];
            } else {
                justH2 = "";
            }
            var afterH2 = jq.html().substr(justH2.length);
            var teaser = getFirstPart(afterH2);
            var clist = WF.Utils.getClist(this);
            if (teaser == afterH2) {
                jq.parent().find("noscript").remove();
                return;
            }
            jq.html(justH2 + '<div class="teaser">' + teaser + '<a href="#" class="moreLess more">More</a></div><div class="fullText"><a href="#" class="moreLess less">Less</a>' + afterH2 + "</div>");
            jq.find("a.less").click(function (evt) {
                jq.addClass("closed");
                jq.removeClass("open");
                $(document).trigger("resizePage");
                evt.preventDefault();
            });
            jq.find("a.more").click(function (evt) {
                jq.addClass("open");
                jq.removeClass("closed");
                $(document).trigger("resizePage");
                WF.Utils.trackVS({
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": "TranscriptMoreLink",
                    "clist": clist
                });
                evt.preventDefault();
            });
            if ($.fn.touchwipe) {
                jq.touchwipe({
                    wipeDown: function () {
                        jq.addClass("open");
                        jq.removeClass("closed");
                        evt.preventDefault();
                    },
                    wipeUp: function () {
                        jq.addClass("closed");
                        jq.removeClass("open");
                        evt.preventDefault();
                    }
                });
            }
            jq.addClass("closed");
            jq.parent().find("noscript").remove();
        });
    },
    setupPdfLink: function (root) {
        $('a[data-pdf="true"]').bind("click", function (e) {
            $(this).attr("data-win-options", "pdf");
            WF.Utils.childWindow(this);
            e.preventDefault();
        });
    },
    setupPrintLink: function (root) {
        $("a.printLink").click(function (e) {
            window.print();
            e.preventDefault();
        });
    },
    setupSpanishToggle: function (root) {
        $(".spToggle").click(function (e) {
            e.preventDefault();
            var _this = this,
            lang = $("html").attr("lang"),
            altUrl = "";
            if (lang == "en") {
                altUrl = "/es" + location.pathname;
            } else {
                altUrl = location.pathname.slice(location.pathname.indexOf("es") + 2);
            }
            if ($("#c29link00").length == 0) {
                $.ajax({
                    url: altUrl,
                    type: "GET",
                    statusCode: {
                        404: function () {
                            e.preventDefault();
                            $(_this).attr("id", "c29link00");
                            var balloon = new WF.Component.BalloonHelp(_this);
                            balloon.elem.click();
                        },
                        200: function () {
                            document.location.href = altUrl;
                        }
                    }
                });
            }
        });
    }
};

$(document).ready(function () {
    WF.Browser.supports = WF.Utils.getBrowserSupport();
    WF.OnLoads.doAll();
});
WF.Page = {
    "lang": $("html").attr("lang") || "en",
    "Components": {
        getByType: function (type) {
            switch (type) {
                case "c29":
                case "BalloonHelp":
                    return this.BalloonHelps;
                    break;
                case "CTA":
                    return this.CTAs;
                    break;
                case "c58":
                case "FAQ":
                    return this.FAQs;
                    break;
                case "c28a":
                case "LightBox":
                    return this.LightBoxes;
                    break;
                case "c28b":
                case "Overlay":
                    return this.Overlays;
                    break;
                case "c16":
                case "ShowHide":
                    return this.ShowHides;
                    break;
                case "c26":
                case "Tip":
                    return this.Tips;
                    break;
                default:
                    return [];
            }
        },
        "BalloonHelps": [],
        "Carousels": [],
        "CTAs": [],
        "FAQs": [],
        "FatNav": false,
        "Footnotes": {
            "last": 0
        },
        "LightBoxes": [],
        "Overlays": [],
        "RibbonCarousels": [],
        "ShowHides": [],
        "Tips": []
    }
};
WF.Component.Carousel = function (el, options) {
    if (!el.id) {
        el.id = WF.Utils.generateUniqueId(el);
    }
    var self = this;
    var stdOptions = {
        "autostart": false,
        "autoloop": false,
        "frameRate": 8000,
        "loop": true,
        "paddles": "dynamic",
        "speed": 500,
        "componentType": "Carousel"
    };

    if (!options) {
        options = {};

    }
    for (var o in stdOptions) {
        if (typeof options[o] == "undefined") {
            options[o] = stdOptions[o];
        }
    }
    if (options.paddles == "dynamic") {
        if (WF.Browser.supports && WF.Browser.supports.touch) {
            options.paddles = "off";
        }
        if ($("html").hasClass("ie7")) {
            options.paddles = "on";
        }
    }
    options.width = $(el).width();
    options.padding = $(el).css("padding-left");
    var timer, curFrame, incomingFrame;
    this.elem = el;
    this.id = "Carousel_" + el.id;
    this.start = function () {
        timer = setInterval(function () {
            self.next(false, {
                "event": "LinkActivated",
                "eventType": "autoload",
                "eventDescription": evtDesc
            });
        }, options.frameRate);
    };

    this.stop = function () {
        clearInterval(timer);
    };

    this.pause = function () {
        this.stop();
    };

    this.next = function (human, track) {
        if (human) {
            clearInterval(timer);
        }
        var showing = curFrame;
        var opts = {
            dir: "right"
        };

        if (showing >= bodies.length) {
            if (!options.loop) {
                return;
            }
            showing = 1;
        } else {
            showing++;
        }
        if (track) {
            if (options.componentType == "Tip") {
                track.clist = WF.Utils.getClist(el);
                track.tipNumber = showing;
            } else {
                track.clist = WF.Utils.getClist(bodies[showing - 1]);
            }
            WF.Utils.trackVS(track);
        }
        this.showFrame(showing, opts);
        if (showing == 1 && !options.autoloop && !human) {
            clearInterval(timer);
        }
    };

    this.prev = function (human, track) {
        if (human) {
            clearInterval(timer);
        }
        var showing = curFrame;
        var opts = {
            dir: "left"
        };

        if (showing <= 1) {
            if (!options.loop) {
                return;
            }
            showing = bodies.length;
        } else {
            showing--;
        }
        if (track) {
            if (options.componentType == "Tip") {
                track.clist = WF.Utils.getClist(el);
                track.tipNumber = showing;
            } else {
                track.clist = WF.Utils.getClist(bodies[showing - 1]);
            }
            WF.Utils.trackVS(track);
        }
        this.showFrame(showing, opts);
    };

    this.copyFrame = function (from, to) {
        to.html(from.html());
        $.each(["cid", "ctid", "presentation"], function (i, val) {
            to.data(val, from.data(val));
        });
    };

    this.showFrame = function (num, opts) {
        if (num == curFrame) {
            return;
        }
        var incFrame = $(el).find(".carouselFrame.item" + num);
        self.copyFrame(incFrame, incomingFrame);
        var animOpts = {
            queue: false,
            left: 0
        };

        var plusWidth = options.width + "px";
        var minusWidth = "-" + options.width + "px";
        if (opts.dir == "left") {
            incomingFrame.css("left", minusWidth);
        } else {
            if (opts.dir == "right") {
                incomingFrame.css("left", plusWidth);
            } else {
                if (num > curFrame) {
                    incomingFrame.css("left", plusWidth);
                } else {
                    incomingFrame.css("left", minusWidth);
                }
            }
        }
        incomingFrame.show();
        $(el).find(".controls a").removeClass("current").removeAttr("tabindex");
        incomingFrame.animate(animOpts, options.speed, "swing", function () {
            incomingFrame.hide();
            $(el).find(".carouselFrame:visible").attr("aria-hidden", "true").hide();
            incFrame.attr("aria-hidden", "false").show();
            $(el).find(".controls a.show" + num).addClass("current").attr("tabindex", - 1);
        });
        if (opts.stopAutoplay) {
            self.stop();
        }
        curFrame = num;
    };

    this.count = function () {
        return bodies.length;
    };

    var evtDesc;
    switch (options.componentType) {
        case "Marquee":
        case "MarqueeCarousel":
            evtDesc = "DisplayMarqueeCarouselItem";
            break;
        case "Small":
        case "SmallCarousel":
            evtDesc = "DisplaySmallCarouselItem";
            break;
        case "Tip":
        default:
            evtDesc = "DisplayTip";
    }
    var clist = WF.Utils.getClist(el);
    var bodies = $(el).find(".carouselFrame, .c26body");
    $.each(bodies, function (idx, body) {
        body = $(body);
        body.addClass("item" + (idx + 1));
    });
    if (bodies.length > 1) {
        incomingFrame = $('<div class="carouselFrame incomingFrame"/>');
        incomingFrame.attr("aria-hidden", "true");
        $(el).append(incomingFrame);
        var controls = $('<div class="controls"/>');
        for (var i = 1; i <= bodies.length; i++) {
            $(bodies[i - 1]).prepend($('<span class="hidden">' + WF.Strings.Shared.beginItemNo[WF.Page.lang] + i + "</span>"));
            $(bodies[i - 1]).append($('<span class="hidden">' + WF.Strings.Shared.endItemNo[WF.Page.lang] + i + "</span>"));
            var dot = $('<a href="#' + el.id + "_frame" + i + '" class="show' + i + '">&bull;<span class="hidden">' + WF.Strings.Shared.item[WF.Page.lang] + " " + i + "</span></a>");
            dot.bind("click keypress", function (evt) {
                var num = this.className.match(/show(\d+)/)[1];
                if (evt.type == "keypress" && evt.keyCode != 13) {
                    return;
                }
                WF.Utils.trackVS({
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": evtDesc,
                    "clist": clist,
                    "tipNumber": num,
                    "elementActivated": "Bottom"
                });
                if (evt.type == "keypress") {
                    evt.preventDefault();
                    self.showFrame(this.className.replace(/\D/g, ""), {
                        stopAutoplay: true
                    });
                }
            });
            $(controls).append(dot);
            if (i == 1) {
                $(controls).find(".show" + i).addClass("current").attr("tabindex", - 1);
            }
            $(controls).find(".show" + i).click(function (evt) {
                evt.preventDefault();
                self.showFrame(this.className.replace(/\D/g, ""), {
                    stopAutoplay: true
                });
            });
            $(bodies[i - 1]).attr("aria-hidden", "true").hide();
            if ($.fn.touchwipe) {
                $(bodies[i - 1]).touchwipe({
                    wipeLeft: function (evt) {
                        evt.preventDefault();
                        self.next(true);
                    },
                    wipeRight: function (evt) {
                        evt.preventDefault();
                        self.prev(true);
                    }
                });
            }
        }
        $(el).append(controls);
        if (options.paddles != "off") {
            var paddles = $('<div id="constructingPaddles">'),
            paddle1 = $('<div class="paddles"/>'),
            paddle2 = $('<div class="paddles"/>');
            paddles.append(paddle1);
            paddles.append(paddle2);
            var tabIndex = "";
            if (options.paddles == "on") {
                paddles.find(".paddles").addClass("alwaysOn");
            } else {
                tabIndex = ' tabindex="-1"';
                setInterval(function () {
                    if (paddle1.find("a.left").css("left") == "-27px") {
                        paddle1.css("visibility", "hidden").attr("aria-hidden", "true");
                        paddle2.css("visibility", "hidden").attr("aria-hidden", "true");
                    } else {
                        paddle1.css("visibility", "visible").attr("aria-hidden", "false");
                        paddle2.css("visibility", "visible").attr("aria-hidden", "false");
                    }
                }, 10);
            }
            paddle1.append('<a href="#' + el.id + '_prevFrame" class="left"' + tabIndex + '><img src="/assets/images/global/chevron-large-left-grey.png" alt="' + WF.Strings.Shared.prev[WF.Page.lang] + '" /></a>');
            paddle2.append('<a href="#' + el.id + '_nextFrame" class="right"' + tabIndex + '><img src="/assets/images/global/chevron-large-right-grey.png" alt="' + WF.Strings.Shared.next[WF.Page.lang] + '" /></a>');
            paddles.find("a").mouseover(function () {
                var img = $(this).find("img").get(0);
                img.src = img.src.replace(/grey/, "blue");
            }).mouseout(function () {
                var img = $(this).find("img").get(0);
                img.src = img.src.replace(/blue/, "grey");
            });
            paddles.find(".left").data("vsObj", {
                "event": "LinkActivated",
                "eventDescription": evtDesc,
                "clist": clist,
                "elementActivated": "LeftPaddle"
            });
            paddles.find(".left").click(function (evt) {
                evt.preventDefault();
                self.prev(true, $.extend($(this).data("vsObj"), {
                    eventType: evt.type
                }));
            });
            paddles.find(".left").bind("click keypress", function (evt) {
                if (evt.type == "keypress" && evt.keyCode != 13) {
                    return;
                }
                if (evt.type == "keypress") {
                    evt.preventDefault();
                    self.prev(true, $.extend($(this).data("vsObj"), {
                        eventType: evt.type
                    }));
                }
            });
            paddles.find(".right").data("vsObj", {
                "event": "LinkActivated",
                "eventDescription": evtDesc,
                "clist": clist,
                "elementActivated": "RightPaddle"
            });
            paddles.find(".right").click(function (evt) {
                evt.preventDefault();
                self.next(true, $.extend($(this).data("vsObj"), {
                    eventType: evt.type
                }));
            });
            paddles.find(".right").bind("click keypress", function (evt) {
                if (evt.type == "keypress" && evt.keyCode != 13) {
                    return;
                }
                if (evt.type == "keypress") {
                    evt.preventDefault();
                    self.next(true, $.extend($(this).data("vsObj"), {
                        eventType: evt.type
                    }));
                }
            });
            $(el).prepend(paddle1);
            $(el).append(paddle2);
        }
        $(el).find(".carouselFrame.item1").show();
        incomingFrame.hide();
        curFrame = 1;
        if (options.autostart) {
            this.start();
        }
    } else {
        $(bodies[0]).show();
    }
    if (options.componentType.substr(0, 5) == "Small") {
        clist = WF.Utils.getClist(bodies[0]);
    }
    WF.Utils.trackVS({
        "event": "PageLoad",
        "eventDescription": evtDesc,
        "clist": clist
    });
    if (options && options.componentType == "Tip") {
        WF.Page.Components.Tips.push(this);
    }
    WF.Page.Components.Carousels.push(this);
    return this;
};

WF.OnLoads.setupCarousels = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c26").each(function () {
        new WF.Component.Carousel(this, {
            componentType: "Tip",
            autostart: true
        });
    });
    $(root).find(".c3wrapper").each(function () {
        new WF.Component.Carousel(this, {
            componentType: "Marquee",
            paddles: "off",
            autostart: true,
            speed: 800
        });
    });
    $(root).find(".c64main").each(function () {
        new WF.Component.Carousel(this, {
            componentType: "Small",
            paddles: "on",
            autostart: true
        });
    });
};
WF.Component.CTA = function (el) {
    if (!el.id) {
        el.id = WF.Utils.generateUniqueId(el);
    }
    this.elem = el;
    this.id = "CTA_" + el.id;
    var clist = WF.Utils.getClist(el);
    $(el).bind("click keypress", function (evt) {
        if (evt.type == "keypress" && evt.keyCode != 13) {
            return;
        }
        WF.Utils.trackVS({
            "event": "LinkActivated",
            "eventType": evt.type,
            "eventDescription": "CTAText",
            "destinationUrl": this.href,
            "linkText": $(this).text(),
            "clist": clist,
            "presentation": $(this).data("presentation"),
            "suppressAsync": true
        });
        if (evt.type === "keypress" && typeof(this.href) !== "undefined") {
            evt.preventDefault();
            window.location.href = this.href;
        }
    });
    WF.Page.Components.CTAs.push(this);
    return this;
};

WF.OnLoads.setupCTAs = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c7, .c13, .c22").each(function () {
        new WF.Component.CTA(this);
    });
};
WF.Component.LightBox = function (trigger, options) {
    if (!trigger.id) {
        trigger.id = WF.Utils.generateUniqueId(trigger);
    }
    this.elem = trigger;
    this.id = "LightBox_" + trigger.id;
    this.version = "1.0.1";
    var self = this;
    var cache = "",
    contentContainer = $("<div/>"),
    darkBackdrop = $("#c28backdrop"),
    defaultHeight = 500,
    defaultWidth = 722,
    destPid = "",
    dimensions = {},
    dir = "",
    exitHeightAdjust = 190,
    exitWidthAdjust = 0,
    fadeTime = 300,
    helperDialog = $("<div/>"),
    mainContainer = $("#c28lightbox"),
    margin = 50,
    maxHeight = 500,
    maxWidth = 722,
    showHideSpeed = 600,
    stdHeightAdjust = 39,
    stdWidthAdjust = 0,
    timer, videoWidth = 775;
    var stdOptions = {
        pleaseWaitDelay: 1500,
        timeout: 10000,
        onTimeout: false,
        postInit: false,
        disableCache: false,
        isExit: false,
        showPrintIcon: false,
        url: "",
        method: "GET",
        parameters: {}
    };

    this.addDialogCloseButton = function () {
        helperDialog.append('<div class="closeButton"><a href="#" class="c7 utilitybtn" role="button">' + WF.Strings.Components.LightboxOverlay.closeDialog[WF.Page.lang] + "</a></div>");
        helperDialog.find(".c7").click(function (evt) {
            evt.preventDefault();
            helperDialog.fadeOut(fadeTime, function () {
                helperDialog.remove();
            });
        });
    };

    this.addLightboxEvents = function () {
        mainContainer.find("a.c28close, a.c28cancel").click(function (evt) {
            evt.preventDefault();
            self.hide();
        });
        mainContainer.keydown(function (evt) {
            if (evt.keyCode == 27) {
                self.hide();
            }
        });
        $(window).resize(function () {
            self.positionLightbox();
        });
    };

    this.createLightboxHtml = function (content, titleAndSubhead, evt) {
        mainContainer.unbind().empty();
        var topContainer = $("<div/>").addClass("c28topContainer").html('<a class="c28close" id="c28close" href="#"><img src="/assets/images/global/btn-close-x.png" alt="' + WF.Strings.Shared.close[WF.Page.lang] + '" role="button" /></a>');
        topContainer.appendTo(mainContainer);
        var topFocus = $("<span/>").attr({
            "id": "c28topFocus",
            "class": "hidden",
            "tabindex": 0
        });
        topFocus.focus(function (evt) {
            if (dir == "back") {
                $("#c28lastFocusable").focus();
            } else {
                $("#c28close").focus();
            }
        }).prependTo(mainContainer);
        $("#c28close").focus(function () {
            dir = "back";
        });
        contentContainer.addClass("c28contentContainer");
        contentContainer.html(content).appendTo(mainContainer);
        if (options.isExit) {
            topContainer.addClass("exitPage");
            topContainer.append('<img alt="' + WF.Strings.Shared.WFHomePage[WF.Page.lang] + '" id="exitLogo" src="/assets/images/global/wf-logo.gif" />');
            mainContainer.append($('<div class="c28bottomButtons"><a href="#" class="c28cancel">' + WF.Strings.Shared.cancel[WF.Page.lang] + '</a><a href="' + options.exitUrl + '" class="c7 utilitybtn" role="button">' + WF.Strings.Shared["continue"][WF.Page.lang] + "</a></div>"));
            mainContainer.find(".c28bottomButtons").find("a.c7").bind("click keypress", function (evt) {
                WF.Utils.trackVS({
                    "suppressAsync": true,
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": "exitPageContinue",
                    "destinationUrl": this.href
                });
            });
            mainContainer.find(".c28bottomButtons").find("a.c28cancel").bind("click keypress", function (evt) {
                if (evt.type == "keypress" && evt.keyCode != 13) {
                    return;
                }
                WF.Utils.trackVS({
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": "exitPageCancel"
                });
                if (evt.type == "keypress") {
                    self.hide();
                    evt.preventDefault();
                }
            });
            $(".c28bottomButtons").find("a.c7").attr("id", "c28lastFocusable");
        } else {
            topContainer.removeClass("exitPage");
            var heightAdj = "";
            stdHeightAdjust = 39;
            if (titleAndSubhead.title) {
                topContainer.append("<h2>" + titleAndSubhead.title + "</h2>");
                heightAdj += "Title";
            }
            if (titleAndSubhead.subhead) {
                topContainer.append("<h3>" + titleAndSubhead.subhead + "</h3>");
                heightAdj += "Subhead";
            }
            if (options.showPrintIcon) {
                topContainer.append($('<a href="javascript:window.print();" class="c28print">' + WF.Strings.Shared.print[WF.Page.lang] + "</a>"));
                heightAdj += "Print";
            }
            switch (heightAdj) {
                case "Title":
                case "TitlePrint":
                    stdHeightAdjust += 18;
                    break;
                case "TitleSubhead":
                case "TitleSubheadPrint":
                    stdHeightAdjust += 38;
                    break;
                case "Print":
                    stdHeightAdjust += 14;
                    break;
            }
            var btmFocus = mainContainer.find("a, input, select");
            if (btmFocus.length) {
                btmFocus = $(btmFocus[btmFocus.length - 1]);
            } else {
                btmFocus = topContainer.find("a.c28print");
            }
            btmFocus.attr("id", "c28lastFocusable");
        }
        var bottomFocus = $("<span/>").attr({
            "id": "c28bottomFocus",
            "class": "hidden",
            "tabindex": 0
        });
        bottomFocus.focus(function (evt) {
            $("#c28topFocus").focus();
        }).appendTo(mainContainer);
        $("#c28lastFocusable").focus(function () {
            dir = "forward";
        });
        self.setLightboxSizes();
        self.addLightboxEvents();
        cache = mainContainer.contents().clone(true);
        self.show(evt);
    };

    this.createLoadingDialogHtml = function () {
        helperDialog.html("").attr("class", "c28loading");
        helperDialog.append("<h2>" + WF.Strings.Components.LightboxOverlay.oneMomentPlease[WF.Page.lang] + "</h2>");
        helperDialog.append('<img class="loadImg" src="/assets/images/global/loader.gif" alt="" />');
        helperDialog.append(WF.Strings.Components.LightboxOverlay.plsWaitGettingInfo[WF.Page.lang]);
        $("body").append(helperDialog);
    };

    this.doTimeout = function () {
        helperDialog.html("<h2>" + WF.Strings.Components.LightboxOverlay.infoCurrUnavail[WF.Page.lang] + "</h2>").addClass("timeout");
        helperDialog.append("<p>" + WF.Strings.Components.LightboxOverlay.apologizeTryAgain[WF.Page.lang] + "</p>");
        self.addDialogCloseButton();
        helperDialog.fadeIn(fadeTime);
    };

    this.getContentRegion = function (data) {
        data = "<div>" + data + "</div>";
        var content = $(data).find("#content");
        if (content.length) {
            if (content.hasClass(".exitPageContent")) {
                options.isExit = true;
            }
        } else {
            content = $(data).find(".exitPageContent");
            if (content.length) {
                options.isExit = true;
            }
        }
        if (!content.length) {
            content = $(data).find(".mainContentCol:first");
        }
        return content;
    };

    this.getContentTrackingData = function (data) {
        data = "<div>" + data + "</div>";
        var pid = $(data).find("#shell").data("pid");
        var ptid = $(data).find("#shell").data("ptid");
        return pid + "~" + ptid;
    };

    this.getDimensions = function (html) {
        var ret = {
            width: 0,
            height: 0
        };

        var match;
        html = "<div>" + html + "</div>";
        var node = $(html).find("#shell");
        if (node.length) {
            if (node.data("lightboxWidth") && node.data("lightboxHeight")) {
                ret.width = node.data("lightboxWidth");
                ret.height = node.data("lightboxHeight");
            } else {
                match = node.attr("class").match(/\b(\d\d\d?\d?)x(\d\d\d?\d?)\b/);
                if (match) {
                    ret.width = parseInt(match[1], 10);
                    ret.height = parseInt(match[2], 10);
                }
            }
        }
        if (!ret.width) {
            $.each(["#content", ".exitPageContent", ".mainContentCol:first"], function (i, css) {
                node = $(html).find(css);
                if (node.length && node.attr("class")) {
                    match = node.attr("class").match(/\b(\d\d\d?\d?)x(\d\d\d?\d?)\b/);
                    if (match) {
                        ret.width = parseInt(match[1], 10);
                        ret.height = parseInt(match[2], 10);
                        return false;
                    }
                }
            });
        }
        if (!ret.width) {
            ret = {
                width: defaultWidth,
                height: defaultHeight
            };

        }
        if (ret.width > maxWidth) {
            ret.width = maxWidth;
        }
        if (ret.height > maxHeight) {
            ret.height = maxHeight;
        }
        if ($(html).find(".c51").not(".audio").length) {
            ret.width = videoWidth;
        }
        return ret;
    };

    this.getExitPageUrl = function (html) {
        html = "<div>" + html + "</div>";
        var link = $(html).find(".t7buttons a.c7");
        if (link.length) {
            return link.attr("href");
        }
        link = $(html).find('a.c7:contains("' + WF.Strings.Shared["continue"][WF.Page.lang] + '")');
        if (link.length) {
            return link.attr("href");
        }
        return "";
    };

    this.getOptionsFromLink = function () {
        if ($(trigger).hasClass("c28cLink")) {
            options.isExit = true;
        }
        if (trigger.href.indexOf("?") != - 1) {
            options.url = trigger.href.substr(0, trigger.href.indexOf("?"));
            var params = trigger.href.substr(trigger.href.indexOf("?") + 1);
            params = params.split(/&(?:amp;)?/);
            $.each(params, function (idx, param) {
                var p = param.split("=");
                options.parameters[p[0]] = p[1];
            });
            options.method = "GET";
        } else {
            options.url = trigger.href;
        }
        if ($(trigger).data("lightboxOptions")) {
            var dataOpts = $(trigger).data("lightboxOptions");
            $.extend(true, options, $(trigger).data("lightboxOptions"));
        }
    };

    this.getTitleAndSubhead = function (data) {
        data = "<div>" + data + "</div>";
        var ret = {
            "title": "",
            "subhead": ""
        };

        ret.title = $(data).find("h1.c11").text();
        ret.subhead = $(data).find("p.subhead").text();
        return ret;
    };

    this.handleAjaxResponse = function (data, evt) {
        var content = self.getContentRegion(data);
        destPid = self.getContentTrackingData(data);
        var titleAndSubhead = self.getTitleAndSubhead(data);
        dimensions = self.getDimensions(data);
        options.showPrintIcon = false;
        if (options.isExit) {
            options.exitUrl = self.getExitPageUrl(data);
        } else {
            if (self.hasContentPrintOption(data)) {
                options.showPrintIcon = true;
            }
        }
        self.createLightboxHtml(content, titleAndSubhead, evt);
    };

    this.hasContentPrintOption = function (data) {
        data = "<div>" + data + "</div>";
        var shell = $(data).find("#shell");
        if (shell.data("lightboxPrint")) {
            return new Boolean(shell.data("lightboxPrint").toString());
        }
        return false;
    };

    this.hide = function () {
        $("body").removeClass("lightboxOpen");
        mainContainer.find(".c51 video, .c51 object").not(".c51.audio object").each(function () {
            try {
                var vid = VideoJS(this.id);
                vid.pause();
            } catch (err) {
                WF.Utils.ajaxLog(err);
            }
        });
        mainContainer.find(".c51 audio, .c51.audio object").each(function () {
            try {
                if (this.player) {
                    this.player.pause();
                } else {
                    if (this.parentNode.player) {
                        this.parentNode.player.pause();
                    }
                }
            } catch (err) {
                WF.Utils.ajaxLog(err);
            }
        });
        mainContainer.find(".c28topContainer").find("a.c28close").hide();
        mainContainer.attr("aria-hidden", "true").fadeOut(showHideSpeed, function () {
            darkBackdrop.addClass("hide");
            trigger.focus();
        });
        helperDialog.fadeOut(showHideSpeed);
    };

    this.init = function (evt) {
        if (cache) {
            self.show(evt);
        } else {
            self.requestContent(evt);
        }
    };

    this.positionLightbox = function () {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var dlgWidth = mainContainer.width();
        var dlgHeight = mainContainer.height();
        var scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var left = Math.floor((screenWidth / 2) - (dlgWidth / 2)) + scrollX;
        var top = Math.floor((screenHeight / 2) - (dlgHeight / 2)) + scrollY;
        mainContainer.css({
            "top": top + "px",
            "left": left + "px"
        });
        darkBackdrop.css({
            "width": screenWidth + "px",
            "height": $(document).height() + "px"
        });
    };

    this.positionLoadingDialog = function () {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var dlgWidth = helperDialog.width();
        var dlgHeight = helperDialog.height();
        var left = Math.floor((screenWidth / 2) - (dlgWidth / 2));
        var top = Math.floor((screenHeight / 2) - (dlgHeight / 2));
        helperDialog.css({
            "top": top + "px",
            "left": left + "px"
        });
    };

    this.requestContent = function (evt) {
        var inlineLightBox = $(trigger).data("lbcontentId") || "";
        self.createLoadingDialogHtml();
        timer = setTimeout(function () {
            self.positionLoadingDialog();
            helperDialog.fadeIn(fadeTime);
        }, options.pleaseWaitDelay);
        if (options.disableCache) {
            options.parameters.cb = new Date().valueOf();
        }
        if (inlineLightBox === "") {
            $.ajax({
                url: options.url,
                type: options.method,
                data: options.parameters,
                timeout: options.timeout,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    if (textStatus == "timeout") {
                        self.doTimeout();
                        if (options.onTimeout) {
                            options.onTimeout.call(this, XMLHttpRequest, textStatus, errorThrown);
                        }
                    } else {
                        self.showErrorDialog(XMLHttpRequest, textStatus, errorThrown);
                    }
                },
                success: function (data) {
                    clearTimeout(timer);
                    self.handleAjaxResponse(data, evt);
                }
            });
        } else {
            self.handleAjaxResponse($("#" + inlineLightBox).html(), evt);
        }
    };

    this.setLightboxSizes = function () {
        var heightAdjust = stdHeightAdjust,
        widthAdjust = stdWidthAdjust;
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        if (options.isExit) {
            heightAdjust = exitHeightAdjust;
            widthAdjust = exitWidthAdjust;
        }
        contentContainer.css({
            "width": dimensions.width + "px",
            "height": dimensions.height + "px"
        });
        mainContainer.css({
            "width": (dimensions.width + widthAdjust) + "px",
            "height": (dimensions.height + heightAdjust) + "px"
        });
    };

    this.show = function (evt) {
        helperDialog.fadeOut(showHideSpeed);
        mainContainer.empty();
        mainContainer.append(cache.clone(true));
        self.setLightboxSizes();
        self.positionLightbox();
        darkBackdrop.removeClass("hide");
        $("body").addClass("lightboxOpen");
        mainContainer.fadeIn(showHideSpeed, function () {
            $(this).attr({
                "aria-labelledby": trigger.id,
                "aria-hidden": "false"
            }).find("a.c28close").show().focus();
            var h1 = contentContainer.find("h1, h2, h3")[0];
        });
        WF.OnLoads.doAll(mainContainer);
        if (options.disableCache) {
            cache = "";
        }
        WF.Utils.trackVS({
            "event": "LinkActivated",
            "eventType": evt.type,
            "eventDescription": "lightboxOpen",
            "linkText": $(trigger).text(),
            "destinationUrl": trigger.href,
            "destinationPid": destPid,
            "clist": clist
        });
        if (mainContainer.find(".vjs-default-skin").size() > 0) {
            try {
                var vidID = mainContainer.find(".vjs-default-skin").attr("id");
                _V_.players[vidID] = null;
                var vid = window.VideoJS(vidID);
            } catch (e) {}
        }
    };

    this.showErrorDialog = function (XMLHttpRequest, textStatus, errorThrown) {
        helperDialog.html("<h2>" + WF.Strings.Components.LightboxOverlay.errorEncountered[WF.Page.lang] + "</h2>").attr("class", "c28error");
        helperDialog.append("<div>" + XMLHttpRequest.status + "</div>");
        helperDialog.append("<div>" + errorThrown + "</div>");
        self.addDialogCloseButton();
        $("body").append(helperDialog);
        self.positionLoadingDialog();
        helperDialog.fadeIn(fadeTime);
    };

    if (!options) {
        options = {
            parameters: {}
        };

    }
    if (trigger.href !== "") {
        self.getOptionsFromLink();
    }
    for (var o in stdOptions) {
        if (typeof options[o] == "undefined") {
            options[o] = stdOptions[o];
        }
    }
    var clist = WF.Utils.getClist(trigger);
    $(trigger).attr("aria-haspopup", "true").bind("click keypress", function (evt) {
        if (evt.type == "keypress" && evt.keyCode != 13) {
            return;
        }
        evt.preventDefault();
        self.init(evt);
    });
    WF.Page.Components.LightBoxes.push(this);
    return this;
};

WF.OnLoads.setupLightboxes = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    if (!$("#c28backdrop").length) {
        $('<div id="c28backdrop"/>').appendTo($("body"));
    }
    if (!$("#c28lightbox").length) {
        $('<div id="c28lightbox" class="c28mainContainer" role="region" aria-hidden="true" />').appendTo($("body"));
    }
    $(root).find(".c28aLink, .c28cLink").each(function () {
        new WF.Component.LightBox(this);
    });
};
WF.Component.ShowHide = function (el, slideSpeed) {
    if (!el.id) {
        el.id = WF.Utils.generateUniqueId(el);
    }
    this.elem = el;
    this.id = "ShowHide_" + el.id;
    var self = this;
    if (typeof slideSpeed == "undefined") {
        slideSpeed = 400;
    } else {
        if (typeof slideSpeed == "object") {
            slideSpeed = slideSpeed.speed;
        }
    }
    var openText = WF.Strings.Components.ShowHide.imgOpen[WF.Page.lang];
    var closeText = WF.Strings.Components.ShowHide.imgClosed[WF.Page.lang];
    var hdr = $(el).find("h2,h3")[0];
    var a = $("<a/>").html($(hdr).html()).attr("href", "#" + closeText);
    var img = $("<img/>").attr({
        src: "/assets/images/global/plus-button.png",
        alt: WF.Strings.Components.ShowHide.imgClosed[WF.Page.lang]
    });
    var contentDiv = $(hdr).next(".c16content");
    if (!contentDiv.attr("id")) {
        contentDiv.attr("id", WF.Utils.generateUniqueId(contentDiv.get(0)));
    }
    $(hdr).addClass("closed").html("").append(a.prepend(img));
    a.attr("aria-controls", contentDiv.attr("id"));
    var clist = WF.Utils.getClist(el);
    this.show = function () {
        var el = $(this.elem).children("h2,h3");
        var img = $(this.elem).find("img").get(0);
        el.removeClass("closed");
        contentDiv.animate({
            height: "toggle",
            opacity: "toggle"
        }, slideSpeed, function () {
            $(document).trigger("resizePage");
        }).attr("aria-hidden", "false");
        img.src = img.src.replace(/plus/, "minus");
        img.alt = openText;
    };

    this.hide = function () {
        var el = $(this.elem).children("h2,h3");
        var img = $(this.elem).find("img").get(0);
        el.addClass("closed");
        contentDiv.animate({
            height: "toggle",
            opacity: "toggle"
        }, slideSpeed, function () {
            $(document).trigger("resizePage");
        }).attr("aria-hidden", "true");
        img.src = img.src.replace(/minus/, "plus");
        img.alt = closeText;
        $.each(WF.Page.Components.getByType("BalloonHelp"), function (idx, bh) {
            $.each($(bh.elem).parents(".c16"), function (idx, elem) {
                if (elem.id === self.elem.id) {
                    bh.hide(undefined, 0);
                }
            });
        });
    };

    var trackVSData = {
        "event": "LinkActivated",
        "eventDescription": "ExpandShowHide",
        "clist": clist
    };

    if ($(this.elem).closest(".c68").length) {
        trackVSData.eventDescription = "ExpandContactBar";
        trackVSData.option = $(hdr).text();
    }
    a.bind("click keypress", function (evt) {
        if (evt.type == "keypress" && evt.keyCode != 13) {
            return;
        }
        evt.preventDefault();
        var el = $(this).parent("h2,h3");
        if (el.hasClass("closed")) {
            self.show();
            trackVSData.eventType = evt.type;
            WF.Utils.trackVS(trackVSData);
        } else {
            self.hide();
        }
        el.blur();
    });
    $(hdr).next(".c16content").hide().attr("aria-hidden", "true");
    if (window.location.hash) {
        if (window.location.hash.replace(/^#/, "") == this.id.replace(/^ShowHide_/, "")) {
            self.show();
            WF.Utils.setDelayedScrollTo(this.elem);
        }
    }
    if ($(this.elem).data("defaultOpen")) {
        self.show();
    }
    WF.Page.Components.ShowHides.push(this);
    return this;
};

WF.OnLoads.setupShowHides = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c16").each(function () {
        new WF.Component.ShowHide(this);
    });
};
WF.Component.BalloonHelp = function (trigger, options) {
    if (!$(trigger).data("contentId")) {
        WF.Utils.ajaxLog({
            "message": 'A Balloon Help link (CSS class c29link) must have a data-content-id attribute, but "' + $(trigger).text() + "\" doesn't!"
        });
        return false;
    }
    this.elem = trigger;
    if (!trigger.id) {
        trigger.id = WF.Utils.generateUniqueId(trigger);
    }
    this.id = "BalloonHelp_" + trigger.id;
    var self = this;
    var link_id = trigger.id,
    content_id, content_div, mouseoutDelay = 300,
    suppressNext = false;
    var stdOptions = {
        "offsetX": - 10,
        "offsetY": 8,
        "popupSpeed": 500,
        "paddingTop": 20,
        "paddingBottom": 20,
        "marginBottom": 10
    };

    if ($(trigger).data("contentId")) {
        content_id = $(trigger).data("contentId");
        content_div = $('.c29content[data-content-id="' + content_id + '"]:first');
    } else {
        if (trigger.id && trigger.id.search(/link/) != - 1) {
            content_id = link_id.replace(/link/, "content");
            content_div = $("#" + content_id);
        } else {
            WF.Utils.ajaxLog({
                "message": "Can't find Balloon Help content identifier for link with text \"" + $(trigger).text() + '"!'
            });
            return false;
        }
    }
    if (!options) {
        options = {};

    }
    for (var o in stdOptions) {
        if (typeof options[o] == "undefined") {
            options[o] = stdOptions[o];
        }
    }
    trigger = $(trigger);
    if (trigger.attr("href") == "#") {
        trigger.attr("href", "");
    }
    var clist = trigger.data("cid") + "~" + trigger.data("ctid");
    if (content_div.length != 1) {
        WF.Utils.ajaxLog({
            "message": "Can't find Balloon Help content div #" + content_id + " to match link #" + link_id + "!"
        });
        return false;
    }
    if ($.trim(trigger.text()).length < 1 && trigger.html().search(/<img /) != - 1) {
        trigger.addClass("imgOnly");
    }
    if (content_div.attr("role") != "complementary") {
        content_div.prepend($('<span class="c29close"><a href=""><img src="/assets/images/global/btn-close-x.png" alt="' + WF.Strings.Shared.close[WF.Page.lang] + '"/></a></span>')).find(".c29close a").bind("click keypress", function (evt) {
            self.hide(evt);
            evt.preventDefault();
        });
        content_div.append($('<span class="c29hook"></span>'));
        content_div.prepend($('<span class="hide c29begin">' + WF.Strings.Components.BalloonHelp.beginningOfPopup[WF.Page.lang] + "</span>"));
        content_div.append($('<span class="hide">' + WF.Strings.Components.BalloonHelp.endOfPopup[WF.Page.lang] + "</span>"));
        content_div.attr({
            "role": "complementary",
            "aria-labelledby": link_id
        });
    }
    this.getQuadrant = function (pos, size) {
        var scroll = {
            "top": $(window).scrollTop(),
            "left": $(window).scrollLeft()
        };

        var bounds = WF.Utils.getViewportSize();
        var vert = "b",
        horz = "l";
        if ((pos.top - scroll.top) < bounds.height / 2) {
            vert = "t";
        }
        if ((pos.left - scroll.left) > bounds.width / 2) {
            horz = "r";
        }
        return vert + horz;
    };

    this.hide = function (evt, speed) {
        if (typeof evt != "undefined") {
            if (evt.type == "keypress" && evt.keyCode != 13 && evt.keyCode != 27) {
                return;
            }
            evt.preventDefault();
        }
        if (typeof speed == "undefined") {
            speed = options.popupSpeed;
        }
        content_div.data("stayOpen", "false");
        trigger.removeClass("hover");
        content_div.fadeOut(speed, function () {
            $(this).attr("aria-hidden", "true").removeAttr("tabindex");
            if (typeof evt != "undefined" && (evt.type == "keypress" || evt.type == "click")) {
                suppressNext = true;
                if (typeof evt == "keypress") {
                    trigger.focus();
                }
            }
        });
    };

    this.maybeHide = function (evt) {
        if (content_div.data("stayOpen") == "true" || trigger.data("active") == "true") {
            return;
        }
        self.hide(evt);
    };

    this.setPosition = function () {
        var trigger_pos = trigger.offset();
        var trigger_size = WF.Utils.getDimensions(trigger);
        var dir = self.getQuadrant(trigger_pos);
        switch (dir) {
            case "tl":
                content_div.css({
                    "top": (trigger_pos.top + trigger_size.height + options.marginBottom + options.offsetY) + "px",
                    "left": (trigger_pos.left + options.offsetX) + "px"
                });
                break;
            case "tr":
                content_div.css({
                    "top": (trigger_pos.top + trigger_size.height + options.marginBottom + options.offsetY) + "px",
                    "right": ($("body").width() - (trigger_pos.left + trigger_size.width) + options.offsetX) + "px"
                });
                break;
            case "bl":
                content_div.css({
                    "top": (trigger_pos.top - content_div.height() - options.offsetY - options.paddingBottom - options.paddingTop - options.marginBottom) + "px",
                    "left": (trigger_pos.left + options.offsetX) + "px"
                });
                break;
            case "br":
                content_div.css({
                    "top": (trigger_pos.top - content_div.height() - options.offsetY - options.paddingBottom - options.paddingTop - options.marginBottom) + "px",
                    "right": ($("body").width() - (trigger_pos.left + trigger_size.width) + options.offsetX) + "px"
                });
                break;
        }
        content_div.removeClass("tl").removeClass("tr").removeClass("bl").removeClass("br").addClass(dir);
    };

    this.show = function (evt) {
        if ((evt.type == "keyup" && evt.keyCode != 13) || evt.type == "focus") {
            return;
        }
        if (content_div.is(":visible")) {
            content_div.find(".c29begin.hide").attr("tabindex", 0).focus();
            return;
        }
        evt.preventDefault();
        self.setPosition();
        trigger.addClass("hover");
        content_div.fadeIn(options.popupSpeed, function () {
            $(this).attr("aria-hidden", "false");
            $(this).attr("tabindex", - 1);
            if (evt.type != "mouseover") {
                $(this).focus();
            }
        });
    };

    trigger.bind("click", function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        $(".c29content").data("stayOpen", "false");
        content_div.data("stayOpen", "true");
        $.each(WF.Page.Components.BalloonHelps, function (i, bh) {
            if (bh.id != self.id) {
                bh.maybeHide();
            }
        });
        self.show(evt);
        WF.Utils.trackVS({
            "event": "LinkActivated",
            "eventType": "click",
            "eventDescription": "DisplayBalloonHelp",
            "clist": clist
        });
    });
    trigger.bind("keypress", function (evt) {
        if (evt.keyCode != 13) {
            return;
        }
        evt.preventDefault();
        $(this).keyup();
    });
    trigger.bind("keyup", function (evt) {
        if (evt.keyCode != 13) {
            return;
        }
        evt.preventDefault();
        $(".c29content").data("stayOpen", "false");
        content_div.data("stayOpen", "true");
        $.each(WF.Page.Components.BalloonHelps, function (i, bh) {
            if (bh.id != self.id) {
                bh.maybeHide();
            }
        });
        self.show(evt);
        WF.Utils.trackVS({
            "event": "LinkActivated",
            "eventType": "keypress",
            "eventDescription": "DisplayBalloonHelp",
            "clist": clist
        });
    });
    trigger.bind("mouseover", function (evt) {
        trigger.data("active", "true").addClass("hover");
        if (suppressNext) {
            suppressNext = false;
            return;
        }
        if ($(".c29content:visible").length) {
            return;
        }
        self.show(evt);
    });
    trigger.bind("mouseout blur", function (evt) {
        trigger.data("active", "false");
        if (content_div.is(":focus")) {
            trigger.removeClass("hover");
        }
        setTimeout(function (ev) {
            self.maybeHide(ev);
        }, mouseoutDelay);
    });
    content_div.bind("focus mouseover", function (evt) {
        trigger.data("active", "true").addClass("hover");
        self.show(evt);
    });
    content_div.bind("mouseout blur", function (evt) {
        trigger.data("active", "false").removeClass("hover");
        setTimeout(function (ev) {
            self.maybeHide(ev);
        }, mouseoutDelay);
    });
    content_div.bind("keypress", function (evt) {
        if (evt.keyCode == 27) {
            self.hide(evt);
        }
    });
    trigger.attr("aria-haspopup", "true");
    WF.Page.Components.BalloonHelps.push(this);
    return this;
};

WF.OnLoads.setupBalloonHelps = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c29link").each(function () {
        new WF.Component.BalloonHelp(this);
    });
};
WF.Component.SocialShare = function () {
    var _this = this,
    firstTime = true,
    pageHeader = $("h1"),
    pageTitle = $("title"),
    header = "";
    this.container = null;
    this.sharelinks = null;
    this.shareLinkClicked = null;
    this.title = null;
    this.opener = null;
    if (pageHeader.length != 0) {
        header = WF.Utils.removeHtmlTags(pageHeader[0].innerHTML);
    } else {
        if (pageTitle.length != 0) {
            header = pageTitle[0].innerHTML;
        }
    }
    this.show = function (opener) {
        var noOfLinks = 0,
        i = 0,
        linkPos = null,
        syllabus = 0;
        this.opener = opener;
        this.container = $(this.opener).closest("div.sideUtility").find("div.c52")[0];
        this.title = $(this.container).find("h2");
        $(opener).addClass("active");
        $(this.container).removeClass("hide");
        if ($(".t5 .c42 .c49").length != 0) {
            syllabus = $(".t5 .c42 .c49").outerHeight(true);
        }
        this.position();
        $(this.container).attr("aria-hidden", "false");
        initSocialShare();
        $(this.container).find("span.hide").focus();
    };

    this.hide = function () {
        $(this.opener).removeClass("active");
        $(this.container).addClass("hide");
        $(this.container).attr("aria-hidden", "true");
        this.opener.focus();
    };

    this.getShareLinks = function () {
        if (this.container != null) {
            this.sharelinks = $(this.container).find("a");
            noOfLinks = this.sharelinks.length;
        }
    };

    this.position = function () {
        var linkPos = $(this.opener).offset();
        if ($(this.opener).closest("div.sideUtility").hasClass("top")) {
            $(this.container).css("left", linkPos.left - $(this.container).outerWidth() + $(this.opener).outerWidth() + "px");
            $(this.container).css("top", (linkPos.top + $(this.opener).outerHeight() - 2) + "px");
        } else {
            $(this.container).css("left", linkPos.left + "px");
            $(this.container).css("top", (linkPos.top - $(this.container).outerHeight() + 1) + "px");
        }
    };

    this.share = function (e) {
        var shareSite = this.shareLinkClicked.href.slice(this.shareLinkClicked.href.indexOf("#") + 1),
        shareUrl = "",
        docUrl = location.href,
        evt = e || window.event;
        if (docUrl.indexOf("?") != - 1) {
            docUrl = docUrl.slice(0, docUrl.indexOf("?"));
        }
        if (docUrl.indexOf("#") != - 1) {
            docUrl = docUrl.slice(0, docUrl.indexOf("#"));
        }
        switch (shareSite) {
            case "facebook":
                shareUrl = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(docUrl + "?ss=fb") + "&t=" + encodeURIComponent(header);
                WF.Utils.trackVS({
                    "url": WF.Utils.addUrlParam(window.location.href, "ss", "fb"),
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": shareSite + "Continue"
                }, function () {
                    window.location.href = shareUrl;
                });
                break;
            case "linkedin":
                shareUrl = "http://www.linkedin.com/shareArticle?mini=true&ro=false&url=" + encodeURIComponent(docUrl + "?ss=ln]") + "&summary=" + encodeURIComponent(document.title) + "&title=" + encodeURIComponent(document.title) + "&source=";
                WF.Utils.trackVS({
                    "url": WF.Utils.addUrlParam(window.location.href, "ss", "ln"),
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": shareSite + "Continue"
                }, function () {
                    window.location.href = shareUrl;
                });
                break;
            case "googleplus":
                shareUrl = "https://plus.google.com/share?url=" + encodeURIComponent(docUrl + "?ss=gp");
                WF.Utils.trackVS({
                    "url": WF.Utils.addUrlParam(window.location.href, "ss", "gp"),
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": shareSite + "Continue"
                }, function () {
                    window.location.href = shareUrl;
                });
                break;
            case "twitter":
                shareUrl = "http://twitter.com/share?url=" + encodeURIComponent(docUrl + "?ss=tw");
                WF.Utils.trackVS({
                    "url": WF.Utils.addUrlParam(window.location.href, "ss", "tw"),
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": shareSite + "Continue"
                }, function () {
                    window.location.href = shareUrl;
                });
                break;
        }
        this.hide();
    };

    function initSocialShare() {
        var i = 0,
        j = 0,
        docUrl, pageHeader, descript, emailBody, emailSubject;
        if (firstTime) {
            firstTime = false;
        } else {
            return;
        }
        if (_this.container != null) {
            _this.getShareLinks();
            for (i = 0; i < _this.sharelinks.length; i++) {
                $(_this.sharelinks[i]).bind("click keypress", function (evt) {
                    if (evt.type == "keypress" && evt.keyCode != 13) {
                        return;
                    }
                    if (this.href.indexOf("#email") != - 1 || this.href.indexOf("mailto") != - 1) {
                        try {
                            _this.hide();
                            descript = $("meta[name=description]").attr("content");
                            docUrl = location.href;
                            if (docUrl.indexOf("?") != - 1) {
                                docUrl = docUrl.slice(0, docUrl.indexOf("?"));
                            }
                            if (docUrl.indexOf("#") != - 1) {
                                docUrl = docUrl.slice(0, docUrl.indexOf("#"));
                            }
                            pageHeader = $("h1:first").clone();
                            pageHeader.find("span").remove();
                            pageHeader = WF.Utils.removeHtmlTags(pageHeader.html()).replace(/[^\x20-\x7f-]/g, "").replace(/\s*-\s*$/, "");
                            if (WF.Browser.supports.isIE) {
                                emailBody = WF.Strings.Components.SocialShare.EmailInsert[WF.Page.lang] + pageHeader + "\n\n" + docUrl + "?ss=email";
                            } else {
                                emailBody = WF.Strings.Components.SocialShare.EmailInsert[WF.Page.lang] + pageHeader + "\n" + descript + "\n\n" + docUrl + "?ss=email";
                            }
                            emailSubject = "Wellsfargo.com: " + encodeURIComponent(pageHeader);
                            window.location.href = "mailto:?body=" + encodeURIComponent(emailBody) + "&subject=" + emailSubject;
                            WF.Utils.trackVS({
                                "url": WF.Utils.addUrlParam(window.location.href, "ss", "email"),
                                "event": "LinkActivated",
                                "eventType": evt.type,
                                "eventDescription": "emailContinue"
                            });
                            if (evt.type == "keypress") {
                                evt.preventDefault();
                            }
                        } catch (e) {
                            WF.Utils.ajaxLog(e);
                        }
                    } else {
                        _this.shareLinkClicked = this;
                        _this.share(evt);
                        return false;
                    }
                });
            }
        }
        $(_this.container).bind("keypress", function (evt) {
            if (evt.keyCode == 27) {
                _this.hide();
            }
        });
    }
    $(document).bind("resizePage", function () {
        if ($(_this.opener).hasClass("active") == true) {
            _this.position();
        }
    });
};

WF.OnLoads.setupSocialShare = function (root) {
    var disclosure = WF.Strings.Components.SocialShare.Disclosure[WF.Page.lang],
    shareText = WF.Strings.Components.SocialShare.Share[WF.Page.lang],
    share;
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".sideUtility ul li a.printLink").parent().after('<li><span>&nbsp;</span><a href="#" class="c52Link" aria-haspopup="true">' + shareText + "</a></li>");
    $(root).find(".sideUtility ul li.noPrintLink").append('<li><a href="#" class="c52Link" aria-haspopup="true">' + shareText + "</a></li>");
    $(root).find(".c52").append(disclosure);
    if ($(root).find(".c52").length > 0) {
        share = new WF.Component.SocialShare();
    }
    $(root).find(".c52Link").bind("click keypress", function (evt) {
        if (evt.type == "keypress" && evt.keyCode != 13) {
            return;
        }
        if (WF.Browser.supports.IE7mode) {
            var curScroll = $(document).scrollTop(),
            expireTime = new Date().getTime() + 1000;
            var interval = setInterval(function () {
                if ($(document).scrollTop() < curScroll) {
                    $(document).scrollTop(curScroll);
                    clearInterval(interval);
                } else {
                    if (new Date().getTime() >= expireTime) {
                        clearInterval(interval);
                    }
                }
            }, 1);
        }
        evt.preventDefault();
        if (!$(this).hasClass("active")) {
            $(".c52Link").each(function () {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(share.container).addClass("hide");
                }
            });
            share.show(this);
            WF.Utils.trackVS({
                "event": "LinkActivated",
                "eventType": evt.type,
                "eventDescription": "socialShareOpen"
            });
        } else {
            share.hide();
            WF.Utils.trackVS({
                "event": "LinkActivated",
                "eventType": evt.type,
                "eventDescription": "socialShareClosed"
            });
        }
        return false;
    });
};
WF.Component.FAQ = function (el, slideSpeed) {
    if (!el.id) {
        el.id = WF.Utils.generateUniqueId(el);
    }
    this.elem = el;
    this.id = "FAQ_" + el.id;
    var self = this;
    if (typeof slideSpeed == "undefined") {
        slideSpeed = 400;
    } else {
        if (typeof slideSpeed == "object") {
            slideSpeed = slideSpeed.speed;
        }
    }
    var openText = WF.Strings.Components.FAQ.imgOpen[WF.Page.lang];
    var closeText = WF.Strings.Components.FAQ.imgClosed[WF.Page.lang];
    var hdr = $(el).find("h3")[0];
    var a = $("<a/>").html($(hdr).html()).attr("href", "#" + closeText);
    var img = $("<img/>").attr({
        src: "/assets/images/global/plus-button.png",
        alt: closeText
    });
    var contentDiv = $(hdr).next(".c58answer");
    if (!contentDiv.attr("id")) {
        contentDiv.attr("id", WF.Utils.generateUniqueId(contentDiv.get(0)));
    }
    $(hdr).addClass("closed").html("").append(a.prepend(img));
    a.attr("aria-controls", contentDiv.attr("id"));
    var clist = $(el).data("cid") + "~" + $(el).data("ctid");
    a.bind("click keypress", function (evt) {
        if (evt.type == "keypress" && evt.keyCode != 13) {
            return;
        }
        evt.preventDefault();
        var el = $(this).parent("h3");
        var img = $(this).find("img").get(0);
        if (el.hasClass("closed")) {
            el.removeClass("closed");
            el.next(".c58answer").animate({
                height: "toggle",
                opacity: "toggle"
            }, slideSpeed, function () {
                $(document).trigger("resizePage");
            }).attr("aria-hidden", "false");
            img.src = img.src.replace(/plus/, "minus");
            img.alt = openText;
            WF.Utils.trackVS({
                "event": "LinkActivated",
                "eventType": evt.type,
                "eventDescription": "ExpandFAQ",
                "clist": clist
            });
        } else {
            el.addClass("closed");
            el.next(".c58answer").animate({
                height: "toggle",
                opacity: "toggle"
            }, slideSpeed, function () {
                $(document).trigger("resizePage");
            }).attr("aria-hidden", "true");
            img.src = img.src.replace(/minus/, "plus");
            img.alt = closeText;
            $.each(WF.Page.Components.getByType("BalloonHelp"), function (idx, bh) {
                $.each($(bh.elem).parents(".c58"), function (idx, elem) {
                    if (elem.id === self.elem.id) {
                        bh.hide(undefined, 0);
                    }
                });
            });
        }
        el.blur();
    });
    $(hdr).next(".c58answer").hide().attr("aria-hidden", "true");
    if (window.location.hash) {
        if (window.location.hash.replace(/^#/, "") == this.id.replace(/^FAQ_/, "")) {
            a.click();
            WF.Utils.setDelayedScrollTo(this.elem);
        }
    }
    WF.Page.Components.FAQs.push(this);
    return this;
};

WF.OnLoads.setupFAQs = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c58").each(function () {
        new WF.Component.FAQ(this);
    });
};
WF.Component.FatNav = function (el) {
    var _this = this,
    navSelected = null,
    timer, isDisplaying = false,
    hoverShowDelay = 300,
    clickShowDelay = 0,
    triggerHideDelay = 250,
    popupHideDelay = 150,
    showSpeed = 250,
    hideSpeed = 250,
    linkEl = null;
    this.el = el;
    this.position = function () {
        navSelected.css("left", _this.el.offset().left - 10 + "px");
        navSelected.css("top", (linkEl.offset().top + linkEl.outerHeight() - 1) + "px");
    };

    this.show = function (anchor, e) {
        var tallestDiv = 0;
        var firstDivClass = "navItemLeft";
        _this.canceltimer();
        _this.el.find("a.selected").removeClass("selected");
        linkEl = anchor;
        navSelected = $("#" + linkEl.attr("data-navitem"));
        linkEl.addClass("selected");
        linkEl.attr("aria-selected", "true");
        $("div.navItem").addClass("hide");
        _this.position();
        navSelected.removeClass("hide");
        navSelected.attr("aria-hidden", "false");
        $("div.navItem").each(function () {
            if ($(this).hasClass("hide")) {
                $(this).css("display", "none");
            }
        });
        var delay;
        if (e.type == "mouseover") {
            delay = (isDisplaying) ? 0 : hoverShowDelay;
        } else {
            delay = clickShowDelay;
        }
        _this.settimer(function () {
            if (!navSelected) {
                navSelected = $("#" + linkEl.attr("data-navitem"));
            }
            if (e.type == "mouseover") {
                navSelected.filter(":not(:animated)").animate({
                    height: "show",
                    opacity: "show"
                }, showSpeed);
            } else {
                navSelected.filter(":not(:animated)").animate({
                    height: "toggle",
                    opacity: "toggle"
                }, showSpeed, function () {
                    if (e.type == "keypress" && linkEl.next("div").css("display") == "block") {
                        navSelected.find("span.beginmarker").focus();
                    }
                    if (linkEl.next("div").css("display") == "none") {
                        linkEl.removeClass("selected");
                        linkEl.removeAttr("aria-selected");
                        $("div.navItem").attr("aria-hidden", "true");
                        $("div.navItem").css("display", "none");
                    }
                });
            }
            navSelected.children("div").each(function (idx) {
                if (idx == 0 && this.className) {
                    firstDivClass = this.className;
                }
                if ($(this).innerHeight() > tallestDiv) {
                    tallestDiv = $(this).innerHeight();
                }
            });
            navSelected.find("." + firstDivClass).first().css("height", tallestDiv + "px");
            isDisplaying = true;
            $(_this.el).trigger("fatnavopen");
        }, delay);
    };

    this.hide = function () {
        _this.el.find("a.selected").removeAttr("aria-selected");
        _this.el.find("a.navLevel1").removeClass("selected");
        if (navSelected != null) {
            navSelected.addClass("hide").attr("aria-hidden", "true");
            navSelected.animate({
                height: "hide",
                opacity: "hide"
            }, hideSpeed, function () {
                $(".navItem").css("display", "none");
                navSelected = null;
            });
        }
        isDisplaying = false;
        $(_this.el).trigger("fatnavclose");
    };

    this.settimer = function (todo, time) {
        timer = window.setTimeout(todo, time);
    };

    this.canceltimer = function () {
        if (timer) {
            window.clearTimeout(timer);
            timer = null;
        }
    };

    this.setup = function () {
        $("div.navItem").each(function () {
            var temp;
            temp = $(this).detach();
            _this.el.find("a.navLevel1").each(function () {
                if (temp.attr("id") == $(this).attr("data-navitem")) {
                    temp.insertAfter($(this));
                }
            });
        });
        if (WF.Browser.supports.touch) {
            _this.el.find("a.navLevel1").click(function (e) {
                e.preventDefault();
            });
            _this.el.find("a.navLevel1").bind("touchstart", function (e) {
                _this.show($(this), e);
            });
            $(document).bind("touchstart", function (e) {
                if ($(e.target).is("#" + _this.el.attr("id") + " *")) {
                    return true;
                } else {
                    _this.hide();
                }
            });
        } else {
            _this.el.find("a.navLevel1").click(function (e) {
                _this.show($(this), e);
                e.preventDefault();
            });
            _this.el.find("a.navLevel1").bind("mouseover", function (e) {
                _this.show($(this), e);
            });
            _this.el.find("a.navLevel1").bind("mouseout", function (e) {
                _this.canceltimer();
                _this.settimer(_this.hide, triggerHideDelay);
            });
            _this.el.keypress(function (e) {
                var target = $(e.target);
                if (target.is("a.navLevel1") == true && e.keyCode == 13) {
                    _this.show($(target), e);
                    e.preventDefault();
                }
                if (e.keyCode == 27) {
                    _this.el.find("a.selected").focus();
                    _this.hide();
                }
            });
            _this.el.find("div.navItem").bind("mouseover", function (e) {
                _this.canceltimer();
            });
            _this.el.find("div.navItem").bind("mouseout", function (e) {
                _this.settimer(_this.hide, popupHideDelay);
            });
            _this.el.find("li a").first().bind("keypress", function (e) {
                if (e.shiftKey === true && e.keyCode == 9) {
                    _this.hide();
                }
            });
            _this.el.find("li div.navItem").last().find("span.endmarker").bind("keypress", function (e) {
                if (e.keyCode == 9) {
                    _this.hide();
                }
            });
        }
    };

    $(window).resize(function () {
        if (navSelected != null) {
            _this.position();
        }
    });
    WF.Page.Components.FatNav = this;
    this.setup();
    return this;
};

WF.OnLoads.setupFatNav = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    if (WF.Page.Components.FatNav) {
        return;
    }
    if ($(root).find("#fatnav").length > 0) {
        new WF.Component.FatNav($("#fatnav"));
    }
};
WF.Component.RibbonCarousel = function (el, options) {
    if (!el.id) {
        el.id = WF.Utils.generateUniqueId(el);
    }
    var self = this;
    var stdOptions = {
        "autostart": false,
        "autoloop": false,
        "frameRate": 8000,
        "loop": true,
        "paddles": "on",
        "speed": 500,
        "Tip": false
    };

    if (!options) {
        options = {};

    }
    for (var o in stdOptions) {
        if (typeof options[o] == "undefined") {
            options[o] = stdOptions[o];
        }
    }
    options.width = $(el).width();
    options.padding = $(el).css("padding-left");
    var curFrame, incomingFrame, incomingChevron, visibleChevron, wrapLength;
    var onlySixFrames = false;
    this.elem = el;
    this.id = "RibbonCarousel_" + el.id;
    this.next = function () {
        var showing = curFrame;
        if (showing >= wrapLength) {
            showing = 1;
        } else {
            showing++;
        }
        if (onlySixFrames) {
            ribbon.find("li:first").replaceWith(ribbon.find("li:nth-child(2)").clone(true));
        }
        ribbon.css("left", (parseInt(ribbon.css("left"), 10) + 162) + "px").find("li:first").appendTo(ribbon);
        this.showFrame(showing, "right");
    };

    this.prev = function () {
        var showing = curFrame;
        if (showing <= 1) {
            showing = wrapLength;
        } else {
            showing--;
        }
        if (onlySixFrames) {
            ribbon.find("li:last").replaceWith(ribbon.find("li:nth-child(6)").clone(true));
        }
        ribbon.css("left", (parseInt(ribbon.css("left"), 10) - 162) + "px").find("li:last").prependTo(ribbon);
        this.showFrame(showing, "left");
    };

    this.copyFrame = function (from, to) {
        to.html(from.html());
        $.each(["cid", "ctid", "presentation"], function (i, val) {
            to.data(val, from.data(val));
        });
    };

    this.shiftTo = function (num, dir) {
        var diff = num - curFrame;
        if (Math.abs(diff) > 3) {
            if (diff < 0) {
                diff += ribbonItems.length;
            } else {
                diff -= ribbonItems.length;
            }
        }
        if (!dir) {
            if (diff < 0) {
                dir = "left";
            } else {
                dir = "right";
            }
        }
        diff = Math.abs(diff);
        for (var i = 0; i < diff; i++) {
            if (dir == "right") {
                if (onlySixFrames) {
                    ribbon.find("li:first").replaceWith(ribbon.find("li:nth-child(2)").clone(true));
                }
                ribbon.css("left", (parseInt(ribbon.css("left"), 10) + 162) + "px").find("li:first").appendTo(ribbon);
            } else {
                if (onlySixFrames) {
                    ribbon.find("li:last").replaceWith(ribbon.find("li:nth-child(6)").clone(true));
                }
                ribbon.css("left", (parseInt(ribbon.css("left"), 10) - 162) + "px").find("li:last").prependTo(ribbon);
            }
        }
        this.showFrame(num, dir);
    };

    this.showFrame = function (num, dir) {
        if (num == curFrame) {
            return;
        }
        var incFrame = $(el).find(".carouselFrame.item" + num);
        self.copyFrame(incFrame, incomingFrame);
        self.copyFrame($("ul.c63controls li.show" + num), incomingChevron);
        var animOpts = {
            queue: false,
            left: 0
        };

        var plusWidth = options.width + "px";
        var minusWidth = "-" + options.width + "px";
        if (dir == "left") {
            incomingFrame.css("left", minusWidth);
        } else {
            if (dir == "right") {
                incomingFrame.css("left", plusWidth);
            } else {
                if (num > curFrame) {
                    dir = "right";
                    incomingFrame.css("left", plusWidth);
                } else {
                    dir = "left";
                    incomingFrame.css("left", minusWidth);
                }
            }
        }
        var chevronWidth = visibleChevron.width() + "px";
        if (dir == "left") {
            chevronWidth = "-" + chevronWidth;
        }
        incomingChevron.css("left", chevronWidth);
        incomingFrame.show();
        incomingFrame.animate(animOpts, options.speed, "swing", function () {
            incomingFrame.hide();
            $(el).find(".carouselFrame:visible").attr("aria-hidden", "true").hide();
            incFrame.attr("aria-hidden", "false").show();
        });
        incomingChevron.animate(animOpts, options.speed, "swing", function () {
            self.copyFrame(incomingChevron, visibleChevron);
            incomingChevron.hide();
        });
        curFrame = num;
        ribbon.animate({
            "left": "-100px"
        }, options.speed);
    };

    this.count = function () {
        return bodies.length;
    };

    this.retrieveClist = function () {
        var visibleCarouselFrame = $(el).find(".item" + curFrame);
        return $(visibleCarouselFrame).data("cid") + "~" + $(visibleCarouselFrame).data("ctid");
    };

    var evtDesc = "DisplayRibbonCarouselItem";
    if (options && options.Tip) {
        evtDesc = "DisplayTip";
    }
    var bodies = $(el).find(".carouselFrame");
    $.each(bodies, function (idx, body) {
        if (!body.id) {
            body.id = WF.Utils.generateUniqueId(body);
        }
        body = $(body);
        body.addClass("item" + (idx + 1)).attr("aria-hidden", true);
    });
    if (bodies.length > 1) {
        incomingFrame = $('<div class="carouselFrame incomingFrame"/>');
        $(el).append(incomingFrame);
        chevron = $('<div class="chevron"/>');
        visibleChevron = $('<div class="visibleChevron"/>');
        chevron.append(visibleChevron);
        incomingChevron = $('<div class="incomingChevron"/>');
        chevron.append(incomingChevron);
        $(el).append(chevron);
        var ribbon = $(this.elem).find("ul.c63controls");
        var ribbonItems = ribbon.find("li");
        if (ribbonItems.length != bodies.length) {
            var only = (ribbonItems.length > bodies.length) ? "only " : "";
            alert("There are " + ribbonItems.length + " items in the top ribbon (ul.c63controls), but " + only + bodies.length + " carouselFrame divs!");
            return false;
        }
        if (bodies.length == 6) {
            onlySixFrames = true;
            wrapLength = 6;
            bodies.splice(3, 0, $(bodies[3]).clone(true).get(0));
        } else {
            wrapLength = bodies.length;
        }
        for (var i = 1; i <= ribbonItems.length; i++) {
            if (!ribbonItems[i - 1].id) {
                ribbonItems[i - 1].id = WF.Utils.generateUniqueId(ribbonItems[i - 1]);
            }
            $(bodies[i - 1]).attr("aria-labelledby", ribbonItems[i - 1].id);
            $(ribbonItems[i - 1]).attr({
                "aria-expanded": false,
                "aria-selected": false
            }).addClass("show" + i).bind("click", function (evt) {
                var target = evt.target;
                if (target.tagName != "LI") {
                    target = $(target).parent("li").get(0);
                }
                var x = target.className.match(/show(\d+)\b/)[1];
                var dir = null;
                var rItems = ribbon.find("li");
                if (rItems.index(target) == 0) {
                    dir = "left";
                } else {
                    if (rItems.index(target) == rItems.length - 1) {
                        dir = "right";
                    }
                }
                self.shiftTo(x, dir);
                ribbon.find("li").removeAttr("tabindex").attr({
                    "aria-expanded": false,
                    "aria-selected": false
                });
                if (!WF.Browser.supports.isIE) {
                    $(this).attr({
                        "tabindex": 0,
                        "aria-expanded": true,
                        "aria-selected": true
                    }).focus();
                }
                WF.Utils.trackVS({
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": evtDesc,
                    "clist": self.retrieveClist(),
                    "elementActivated": "RibbonItem"
                });
            }).bind("keydown", function (evt) {
                if (evt.keyCode == 39) {
                    self.next();
                    if (!WF.Browser.supports.IE7mode) {
                        $(this).next().attr({
                            "tabindex": 0,
                            "aria-expanded": true,
                            "aria-selected": true
                        }).focus();
                    }
                    $(this).removeAttr("tabindex").attr({
                        "aria-expanded": false,
                        "aria-selected": false
                    });
                } else {
                    if (evt.keyCode == 37) {
                        self.prev();
                        if (!WF.Browser.supports.IE7mode) {
                            $(this).prev().attr({
                                "tabindex": 0,
                                "aria-expanded": true,
                                "aria-selected": true
                            }).focus();
                        }
                        $(this).removeAttr("tabindex").attr({
                            "aria-expanded": false,
                            "aria-selected": false
                        });
                    }
                }
            }).bind("keypress", function (evt) {
                if ($.inArray(evt.keyCode, [13, 37, 39]) == - 1) {
                    return;
                }
                WF.Utils.trackVS({
                    "event": "LinkActivated",
                    "eventType": evt.type,
                    "eventDescription": evtDesc,
                    "clist": self.retrieveClist(),
                    "elementActivated": "RibbonItem"
                });
            });
        }
        if (onlySixFrames) {
            ribbon.find(":nth-child(4)").before(ribbon.find(":nth-child(4)").clone(true));
        }
        if (!WF.Browser.supports.IE7mode) {
            $(ribbonItems[0]).attr({
                "tabindex": 0,
                "aria-expanded": true,
                "aria-selected": true
            });
        }
        for (var i = 1; i <= bodies.length; i++) {
            $(bodies[i - 1]).prepend($('<span class="hidden">' + WF.Strings.Shared.beginItemNo[WF.Page.lang] + i + "</span>"));
            $(bodies[i - 1]).append($('<span class="hidden">' + WF.Strings.Shared.endItemNo[WF.Page.lang] + i + "</span>"));
            $(bodies[i - 1]).hide();
            if ($.fn.touchwipe) {
                $(bodies[i - 1]).touchwipe({
                    wipeLeft: function (evt) {
                        evt.preventDefault();
                        self.next(true);
                    },
                    wipeRight: function (evt) {
                        evt.preventDefault();
                        self.prev(true);
                    }
                });
            }
        }
        var leftPaddle = $('<div class="bothPaddles prevPaddle"/>');
        var rightPaddle = $('<div class="bothPaddles nextPaddle"/>');
        var leftLink = $('<a href="#' + el.id + '_prevFrame" class="paddle prevPaddle"><img src="assets/images/global/chevron-large-left-grey.png" alt="' + WF.Strings.Shared.prev[WF.Page.lang] + '" /></a>');
        var rightLink = $('<a href="#' + el.id + '_nextFrame" class="paddle nextPaddle"><img src="assets/images/global/chevron-large-right-grey.png" alt="' + WF.Strings.Shared.next[WF.Page.lang] + '" /></a>');
        leftLink.mouseover(function () {
            var img = $(this).find("img").get(0);
            img.src = img.src.replace(/grey/, "blue");
        }).mouseout(function () {
            var img = $(this).find("img").get(0);
            img.src = img.src.replace(/blue/, "grey");
        }).click(function (evt) {
            evt.preventDefault();
            self.prev();
        }).bind("click keypress", function (evt) {
            if (evt.type == "keypress" && evt.keyCode != 13) {
                return;
            }
            ribbon.find("li").removeAttr("tabindex").attr({
                "aria-expanded": false,
                "aria-selected": false
            });
            if (!WF.Browser.supports.IE7mode) {
                ribbon.find(".show" + curFrame).attr({
                    "tabindex": 0,
                    "aria-expanded": true,
                    "aria-selected": true
                });
            }
            WF.Utils.trackVS({
                "event": "LinkActivated",
                "eventType": evt.type,
                "eventDescription": evtDesc,
                "clist": self.retrieveClist(),
                "elementActivated": "LeftPaddle"
            });
            if (evt.type == "keypress") {
                evt.preventDefault();
                self.prev();
            }
        });
        rightLink.mouseover(function () {
            var img = $(this).find("img").get(0);
            img.src = img.src.replace(/grey/, "blue");
        }).mouseout(function () {
            var img = $(this).find("img").get(0);
            img.src = img.src.replace(/blue/, "grey");
        }).click(function (evt) {
            evt.preventDefault();
            self.next();
        }).bind("click keypress", function (evt) {
            if (evt.type == "keypress" && evt.keyCode != 13) {
                return;
            }
            ribbon.find("li").removeAttr("tabindex").attr({
                "aria-expanded": false,
                "aria-selected": false
            });
            if (!WF.Browser.supports.IE7mode) {
                ribbon.find(".show" + curFrame).attr({
                    "tabindex": 0,
                    "aria-expanded": true,
                    "aria-selected": true
                });
            }
            WF.Utils.trackVS({
                "event": "LinkActivated",
                "eventType": evt.type,
                "eventDescription": evtDesc,
                "clist": self.retrieveClist(),
                "elementActivated": "RightPaddle"
            });
            if (evt.type == "keypress") {
                evt.preventDefault();
                self.next();
            }
        });
        ribbon.before(leftLink);
        ribbon.after(rightLink);
        for (var i = 0; i < 3; i++) {
            ribbon.find("li:last").prependTo(ribbon);
        }
        self.copyFrame($(ribbonItems[0]), visibleChevron);
        $(el).find(".carouselFrame.item1").show();
        incomingFrame.hide();
        curFrame = 1;
        if ($.fn.touchwipe) {
            ribbon.touchwipe({
                wipeLeft: function (evt) {
                    evt.preventDefault();
                    self.next();
                },
                wipeRight: function (evt) {
                    evt.preventDefault();
                    self.prev();
                }
            });
        }
    } else {
        $(bodies[0]).show();
    }
    WF.Utils.trackVS({
        "event": "PageLoad",
        "eventDescription": evtDesc,
        "clist": self.retrieveClist()
    });
    if (options && options.Tip) {
        WF.Page.Components.Tips.push(this);
    }
    WF.Page.Components.RibbonCarousels.push(this);
    return this;
};

WF.OnLoads.setupRibbonCarousels = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c63").each(function () {
        new WF.Component.RibbonCarousel(this);
    });
};
WF.Component.Tabs = function (tabList, tabContent, options) {
    if (!(this instanceof WF.Component.Tabs)) {
        return new WF.Component.Tabs(tabList, tabContent, options);
    }
    this.tabs = tabList;
    this.content = tabContent;
    this.hash = window.location.hash;
    this.eventType = "PageLoad";
    this.container = $(this.tabs).closest(".c65, .c66filterTabs, .c73filterTabs")[0];
    this.clist = WF.Utils.getClist(this.container);
    var self = this;
    var PREV = 0,
    NEXT = 1;
    var defaults = {
        "history": false,
        "tabType": "",
        "tracking": true
    };

    var settings = $.extend(defaults, options);
    var firstRun = false;
    var deselectTab = function () {
        self.tabs.children(".selected").children("a").attr("tabIndex", "-1");
        self.tabs.children(".selected").removeClass("selected").children("a").attr("aria-selected", "false");
        self.content.children(".selected").removeClass("selected").attr("aria-hidden", "true");
    };

    var selectTab = function (newTabLI) {
        var newTab = $(newTabLI);
        var newTabLink = newTabLI.children("a");
        newTab.addClass("selected");
        newTabLink.attr("aria-selected", "true").attr("tabIndex", "0");
        self.content.children("#" + newTabLink.attr("href").split("#")[1]).addClass("selected").attr("aria-hidden", "false");
        self.tabs.trigger("tabSelected", newTabLink.attr("id"));
        $.each(WF.Page.Components.getByType("BalloonHelp"), function (idx, bh) {
            $.each($(bh.elem).parents(".c65, .c73filterTabs"), function (idx, elem) {
                if (elem == self.container) {
                    bh.hide(undefined, 0);
                }
            });
        });
    };

    var selectFirstTab = function () {
        deselectTab();
        newTab = self.tabs.children("li:first-child");
        selectTab(newTab);
    };

    var getSelectedTab = function (newHash) {
        var newHashIsValid = (typeof newHash !== "undefined");
        var theHash;
        var hashPanel;
        var tabID;
        var hashFromURL = false;
        if (newHashIsValid) {
            theHash = newHash.replace("tab_", "");
        } else {
            theHash = self.hash.replace("tab_", "");
            if (self.hash === window.location.hash && self.hash !== "") {
                hashFromURL = true;
            }
        }
        theHash = theHash.toLowerCase();
        if (theHash === "" || theHash === "#") {
            selectFirstTab();
        }
        hashPanel = self.content.children(theHash);
        if (hashPanel.length === 1 && theHash !== "") {
            deselectTab();
            tabID = "#tab-" + theHash.split("#")[1];
            selectTab(self.tabs.find(tabID).parent());
            self.hash = theHash;
        }
        if (self.content.children(".selected").length === 0) {
            selectFirstTab();
        }
        if ($("html").hasClass("lt-ie9")) {
            $("body").addClass("not_a_real_class").removeClass("not_a_real_class");
        }
        if ((newHash === window.location.hash) || (hashFromURL && firstRun)) {
            tabID = "#tab-" + theHash.split("#")[1];
            if ($(tabID).length) {
                var offset = $(tabID).offset();
                var tabsTop = offset.top <= 20 ? 0 : offset.top - 20;
                window.scrollTo(0, tabsTop);
            }
            firstRun = false;
        }
    };

    var updateLocation = function (newHash) {
        newHash = newHash.replace("tab_", "");
        var fullUrl = window.location.href,
        currHash = window.location.hash;
        var baseUrl = fullUrl.substr(0, fullUrl.length - currHash.length);
        var newUrl = baseUrl + newHash;
        if (settings.history) {
            window.location = newUrl;
        } else {
            window.location.replace(newUrl);
        }
        if (WF.Browser.supports.IE7mode) {
            $(window).trigger("hashchange");
        }
    };

    var fireTrackingEvent = function (evt, tabID) {
        var clist = self.clist,
        options = {
            "event": "LinkActivated",
            "eventDescription": "Display" + settings.tabType + "Tab",
            "tabID": tabID,
            "clist": clist
        };

        if (evt == "PageLoad") {
            options.event = evt;
        } else {
            options.eventType = evt;
        }
        WF.Utils.trackVS(options);
    };

    var adjustTabHeights = function () {
        var maxHeight = 0;
        $(self.tabs).find("li a").each(function () {
            var thisHeight = $(this).height();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });
        $(self.tabs).find("li a").each(function () {
            $(this).css("height", maxHeight + "px");
        });
    };

    var init = function () {
        firstRun = true;
        self.tabs.on("tabSelected", function (e, linkID) {
            var event = self.eventType,
            tabID = $("#" + linkID).attr("id").split("tab-")[1];
            fireTrackingEvent(event, tabID);
        });
        if (!(tabList instanceof jQuery)) {
            self.tabs = $(tabList);
        }
        if (!(tabContent instanceof jQuery)) {
            self.content = $(tabContent);
        }
        self.tabs.addClass("wf-tabs").attr("role", "tablist");
        self.tabs.children("li").addClass("wf-tab");
        self.content.addClass("wf-tab-content");
        self.content.children("div").addClass("wf-panel").attr("role", "tabpanel").attr("aria-hidden", "true");
        self.tabs.css("visibility", "visible");
        self.content.css("visibility", "visible");
        self.tabs.find("li").each(function (index) {
            var theTab = $(this);
            var theLink = theTab.children("a");
            var theHash = "#" + theLink.attr("href").split("#")[1];
            var theLinkID = "tab-" + theHash.split("#")[1];
            theLink.attr("id", theLinkID).attr("role", "tab").attr("aria-selected", "false").attr("tabIndex", "-1");
            $(theHash).attr("rel", theLinkID).attr("aria-labelledby", theLinkID);
            theLink.click(function (event) {
                event.stopPropagation();
                event.preventDefault();
                var tabLink = $(this);
                var newHash = "#tab_" + tabLink.attr("href").split("#")[1];
                self.eventType = "click";
                getSelectedTab(newHash);
            });
        });
        getSelectedTab();
        if ($(self.container).hasClass("c73filterTabs")) {
            adjustTabHeights();
        }
        $(window).on("hashchange", function () {
            getSelectedTab(window.location.hash);
        });
        self.tabs.keydown(function (event) {
            var theKey = event.which;
            var currentTabLink = self.tabs.find("li.selected a");
            self.eventType = "keypress";
            var gotoTabLink = function (direction) {
                var newTab = currentTabLink.parent();
                if (direction) {
                    newTab = newTab.next();
                } else {
                    newTab = newTab.prev();
                }
                return newTab.find("a");
            };

            var nextTabLink = gotoTabLink(NEXT);
            var previousTabLink = gotoTabLink(PREV);
            var triggerTabLink = function (tabLink) {
                var newHash = "#tab_" + tabLink.attr("href").split("#")[1];
                getSelectedTab(newHash);
                tabLink.focus();
                return false;
            };

            if (theKey === 39 || theKey === 40) {
                triggerTabLink(nextTabLink);
                event.preventDefault();
            }
            if (theKey === 37 || theKey === 38) {
                triggerTabLink(previousTabLink);
                event.preventDefault();
            }
        });
    };

    init();
};

WF.OnLoads.setupTabs = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    $(root).find(".c65").each(function () {
        new WF.Component.Tabs($(this).find(".tabs"), $(this).find(".tabContent"));
    });
    $(root).find(".c66filterTabs").each(function () {
        new WF.Component.Tabs($(this).find(".filterTabs"), $(this).find(".filterTabContent"), {
            tabType: "Filter"
        });
    });
    $(root).find(".c73filterTabs").each(function () {
        new WF.Component.Tabs($(this).find(".filterTabs"), $(this).find(".filterTabContent"), {
            tabType: "Subway"
        });
    });
    if (WF.Browser.supports.IE7mode) {
        $("a[href]").each(function () {
            if ($(this).parent().hasClass("wf-tab")) {
                return true;
            }
            var href = this.href;
            if (href.search(/#$/) != - 1) {
                return true;
            }
            if (href.search("#") == - 1) {
                return true;
            }
            href = href.substr(href.indexOf("#"));
            if (href.search(/tab_/) !== - 1) {
                var thisPage = window.location.href;
                thisPage = thisPage.match(/#/) ? thisPage.split("#")[0] : thisPage;
                var linkPage = this.href.split("#")[0];
                if (thisPage === linkPage) {
                    $(this).on("click", function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        window.location.hash = href;
                        $(window).trigger("hashchange");
                    });
                }
                return true;
            }
            if (!$(this).parents("ul.tabs").length) {
                return true;
            }
            $(this).click(function (evt) {
                evt.preventDefault();
                var newHash = evt.target.href.substr(evt.target.href.indexOf("#"));
                var fullUrl = window.location.href,
                currHash = window.location.hash;
                var baseUrl = fullUrl.substr(0, fullUrl.length - currHash.length);
                var newUrl = baseUrl + newHash;
                window.location.replace(newUrl);
                $(window).trigger("hashchange");
            });
        });
    } else {
        $("a[href]").each(function () {
            if ($(this).parent().hasClass("wf-tab")) {
                return true;
            }
            var href = this.href;
            href = href.substr(href.indexOf("#"));
            if (href.search(/tab_/) !== - 1) {
                var thisPage = window.location.href;
                thisPage = thisPage.match(/#/) ? thisPage.split("#")[0] : thisPage;
                var linkPage = this.href.split("#")[0];
                if (thisPage === linkPage) {
                    $(this).on("click", function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        window.location.hash = href;
                        $(window).trigger("hashchange");
                    });
                }
                return true;
            }
        });
    }
};
WF.Component.Overlay = function (trigger, options) {
    if (!trigger.id) {
        trigger.id = WF.Utils.generateUniqueId(trigger);
    }
    this.elem = trigger;
    this.id = "Overlay_" + trigger.id;
    var self = this;
    var cache = "",
    contentContainer = $("<div/>"),
    defaultHeight = 500,
    defaultWidth = 722,
    destPid = "",
    dimensions = {},
    dir = "",
    fadeTime = 300,
    helperDialog = $("<div/>"),
    keyMovePixels = 10,
    mainContainer = $("#c28overlay"),
    margin = 50,
    maxHeight = 500,
    maxWidth = 722,
    showHideSpeed = 600,
    stdHeightAjdust = 60,
    stdWidthAdjust = 0,
    timer, titleBar;
    var stdOptions = {
        title: "",
        inlineId: "",
        pleaseWaitDelay: 1500,
        timeout: 10000,
        onTimeout: false,
        postInit: false,
        disableCache: false,
        stateVariant: false,
        "offsetX": 0,
        "offsetY": 6,
        "paddingTop": 0,
        "paddingBottom": 0,
        "marginBottom": 10,
        showPrintIcon: false,
        url: "",
        method: "GET",
        parameters: {}
    };

    this.addDialogCloseButton = function () {
        helperDialog.append('<div class="closeButton"><a href="#" class="c7 utilitybtn" role="button">' + WF.Strings.Components.LightboxOverlay.closeDialog[WF.Page.lang] + "</a></div>");
        helperDialog.find(".c7").click(function (evt) {
            evt.preventDefault();
            helperDialog.fadeOut(fadeTime, function () {
                helperDialog.remove();
            });
        });
    };

    this.addOverlayEvents = function () {
        mainContainer.find("a.c28close, a.c28cancel").click(function (evt) {
            evt.preventDefault();
            self.hide();
        });
        mainContainer.keydown(function (evt) {
            if (evt.keyCode == 27) {
                self.hide();
            }
        });
        titleBar.keydown(function (evt) {
            var mainLeft = parseInt(mainContainer.css("left").replace(/px$/, ""), 10),
            mainTop = parseInt(mainContainer.css("top").replace(/px$/, ""), 10);
            switch (evt.keyCode) {
                case 13:
                    evt.stopPropagation();
                    evt.preventDefault();
                    break;
                case 37:
                    mainContainer.css("left", mainLeft - 10);
                    evt.stopPropagation();
                    evt.preventDefault();
                    break;
                case 38:
                    mainContainer.css("top", mainTop - 10);
                    evt.stopPropagation();
                    evt.preventDefault();
                    break;
                case 39:
                    mainContainer.css("left", mainLeft + 10);
                    evt.stopPropagation();
                    evt.preventDefault();
                    break;
                case 40:
                    mainContainer.css("top", mainTop + 10);
                    evt.stopPropagation();
                    evt.preventDefault();
                    break;
                default:
                    break;
            }
        }).click(function (evt) {
            evt.preventDefault();
        });
        $(window).resize(function () {
            self.setPosition();
        });
    };

    this.createLoadingDialogHtml = function () {
        helperDialog.html("").attr("class", "c28loading");
        helperDialog.append("<h2>" + WF.Strings.Components.LightboxOverlay.oneMomentPlease[WF.Page.lang] + "</h2>");
        helperDialog.append('<img class="loadImg" src="/assets/images/global/loader.gif" alt="" />');
        helperDialog.append(WF.Strings.Components.LightboxOverlay.plsWaitGettingInfo[WF.Page.lang]);
        $("body").append(helperDialog);
    };

    this.createOverlayHtml = function (content, title, evt) {
        mainContainer.unbind().empty();
        var topContainer = $("<div/>").addClass("c28topContainer").html('<a class="c28close" id="c28bClose" href="#"><img src="/assets/images/global/btn-close-x.png" alt="' + WF.Strings.Shared.close[WF.Page.lang] + '" role="button" /></a>');
        topContainer.appendTo(mainContainer);
        var topFocus = $("<span/>").attr({
            "id": "c28bTopFocus",
            "class": "hidden",
            "tabindex": 0
        });
        topFocus.focus(function (evt) {
            if (dir == "back") {
                $("#c28bLastFocusable").focus();
            } else {
                $("#c28bClose").focus();
            }
        }).prependTo(mainContainer);
        $("#c28bClose").focus(function () {
            dir = "back";
        });
        contentContainer.addClass("c28contentContainer");
        contentContainer.html(content).appendTo(mainContainer);
        contentContainer.find("h1").remove();
        titleBar = $('<a href="#" class="c28titleBar"><h2>' + title + "</h2></a>");
        topContainer.append(titleBar);
        if (options.showPrintIcon) {
            topContainer.append($('<a href="javascript:window.print();" class="c28print">' + WF.Strings.Shared.print[WF.Page.lang] + "</a>"));
        }
        var btmFocus = mainContainer.find("a, input, select");
        if (btmFocus.length) {
            btmFocus = $(btmFocus[btmFocus.length - 1]);
        } else {
            btmFocus = topContainer.find("a.c28print");
        }
        btmFocus.attr("id", "c28bLastFocusable");
        var bottomFocus = $("<span/>").attr({
            "id": "c28bBottomFocus",
            "class": "hidden",
            "tabindex": 0
        });
        bottomFocus.focus(function (evt) {
            $("#c28bTopFocus").focus();
        }).appendTo(mainContainer);
        $("#c28bLastFocusable").focus(function () {
            dir = "forward";
        });
        self.setOverlaySizes();
        self.addOverlayEvents();
        cache = mainContainer.contents().clone(true);
        self.show(evt);
    };

    this.doTimeout = function () {
        helperDialog.html("<h2>" + WF.Strings.Components.LightboxOverlay.infoCurrUnavail[WF.Page.lang] + "</h2>").addClass("timeout");
        helperDialog.append("<p>" + WF.Strings.Components.LightboxOverlay.apologizeTryAgain[WF.Page.lang] + "</p>");
        self.addDialogCloseButton();
        helperDialog.fadeIn(fadeTime);
    };

    this.getContentRegion = function (data) {
        data = "<div>" + data + "</div>";
        var content = options.inlineId === "" ? $(data).find("#content") : $("body").find(options.inlineId);
        if (content.length) {
            if (content.hasClass(".exitPageContent")) {
                options.isExit = true;
            }
        } else {
            content = $(data).find(".exitPageContent");
            if (content.length) {
                options.isExit = true;
            }
        }
        if (!content.length) {
            content = $(data).find(".mainContentCol:first");
        }
        return content;
    };

    this.getContentTrackingData = function (data) {
        data = "<div>" + data + "</div>";
        var pid = $(data).find("#shell").data("pid");
        var ptid = $(data).find("#shell").data("ptid");
        return pid + "~" + ptid;
    };

    this.getDimensions = function (html) {
        var ret = {
            width: 0,
            height: 0
        };

        var match;
        html = "<div>" + html + "</div>";
        var node = $(html).find("#shell");
        if (node.length) {
            if (node.data("lightboxWidth") && node.data("lightboxHeight")) {
                ret.width = node.data("lightboxWidth");
                ret.height = node.data("lightboxHeight");
            } else {
                match = node.attr("class").match(/\b(\d\d\d?\d?)x(\d\d\d?\d?)\b/);
                if (match) {
                    ret.width = parseInt(match[1], 10);
                    ret.height = parseInt(match[2], 10);
                }
            }
        }
        if (!ret.width) {
            $.each(["#content", ".exitPageContent", ".mainContentCol:first"], function (i, css) {
                node = $(html).find(css);
                if (node.length && node.attr("class")) {
                    match = node.attr("class").match(/\b(\d\d\d?\d?)x(\d\d\d?\d?)\b/);
                    if (match) {
                        ret.width = parseInt(match[1], 10);
                        ret.height = parseInt(match[2], 10);
                        return false;
                    }
                }
            });
        }
        if (!ret.width) {
            ret = {
                width: defaultWidth,
                height: defaultHeight
            };

        }
        if (ret.width > maxWidth) {
            ret.width = maxWidth;
        }
        if (ret.height > maxHeight) {
            ret.height = maxHeight;
        }
        return ret;
    };

    this.getExitPageUrl = function (html) {
        html = "<div>" + html + "</div>";
        var link = $(html).find(".t7buttons a.c7");
        if (link.length) {
            return link.attr("href");
        }
        link = $(html).find('a.c7:contains("' + WF.Strings.Shared["continue"][WF.Page.lang] + '")');
        if (link.length) {
            return link.attr("href");
        }
        return "";
    };

    this.getOptionsFromLink = function () {
        if (trigger.href.indexOf("?") != - 1 && options.inlineId === "") {
            options.url = trigger.href.substr(0, trigger.href.indexOf("?"));
            var params = trigger.href.substr(trigger.href.indexOf("?") + 1);
            params = params.split(/&(?:amp;)?/);
            $.each(params, function (idx, param) {
                var p = param.split("=");
                options.parameters[p[0]] = p[1];
            });
            options.method = "GET";
        } else {
            options.url = trigger.href;
        }
        if ($(trigger).data("overlayOptions")) {
            var dataOpts = $(trigger).data("overlayOptions");
            $.extend(true, options, $(trigger).data("overlayOptions"));
        }
    };

    this.setStateVariant = function () {
        var zipCode = $("h1:first span#c3location");
        if (zipCode.length === 1) {
            options.stateVariant = true;
        }
    };

    this.getQuadrant = function (pos, size) {
        var scroll = {
            "top": $(window).scrollTop(),
            "left": $(window).scrollLeft()
        };

        var bounds = WF.Utils.getViewportSize();
        var vert = "b",
        horz = "l";
        if ((pos.top - scroll.top) < bounds.height / 2) {
            vert = "t";
        }
        if ((pos.left - scroll.left) > bounds.width / 2) {
            horz = "r";
        }
        return vert + horz;
    };

    this.getTitleText = function (data) {
        if (options.title !== "") {
            return options.title;
        }
        data = "<div>" + data + "</div>";
        var title = $(data).find("h1");
        if (title.length === 1) {
            title.find("span").remove();
            title.html(title.html().replace(/\s*-\s*$/, ""));
            return title.text();
        }
        title = $(data).find("h2");
        if (title.length === 1) {
            return title.text();
        }
        return "";
    };

    this.handleAjaxResponse = function (data, evt) {
        var content = self.getContentRegion(data);
        destPid = self.getContentTrackingData(data);
        var title = self.getTitleText(data);
        dimensions = self.getDimensions(data);
        if (options.isExit) {
            options.exitUrl = self.getExitPageUrl(data);
        } else {
            if (self.hasContentPrintOption(data)) {
                options.showPrintIcon = true;
            }
        }
        self.createOverlayHtml(content, title, evt);
    };

    this.hasContentPrintOption = function (data) {
        data = "<div>" + data + "</div>";
        var shell = $(data).find("#shell");
        if (shell.data("lightboxPrint")) {
            return new Boolean(shell.data("lightboxPrint").toString());
        }
        return false;
    };

    this.hide = function () {
        $("body").removeClass("overlayOpen");
        mainContainer.draggable("destroy");
        mainContainer.find(".c28topContainer").find("a.c28close").hide();
        mainContainer.attr("aria-hidden", "true").fadeOut(showHideSpeed, function () {
            trigger.focus();
        });
    };

    this.init = function (evt) {
        if (cache) {
            self.show(evt);
        } else {
            self.requestContent(evt);
        }
    };

    this.positionLoadingDialog = function () {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var dlgWidth = helperDialog.width();
        var dlgHeight = helperDialog.height();
        var left = Math.floor((screenWidth / 2) - (dlgWidth / 2));
        var top = Math.floor((screenHeight / 2) - (dlgHeight / 2));
        helperDialog.css({
            "top": top + "px",
            "left": left + "px"
        });
    };

    this.requestContent = function (evt) {
        self.createLoadingDialogHtml();
        timer = setTimeout(function () {
            self.positionLoadingDialog();
            helperDialog.fadeIn(fadeTime);
        }, options.pleaseWaitDelay);
        if (options.disableCache || options.stateVariant) {
            options.parameters.cb = new Date().valueOf();
        }
        $.ajax({
            url: options.url,
            type: options.method,
            data: options.parameters,
            timeout: options.timeout,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (textStatus == "timeout") {
                    self.doTimeout();
                    if (options.onTimeout) {
                        options.onTimeout.call(this, XMLHttpRequest, textStatus, errorThrown);
                    }
                } else {
                    self.showErrorDialog(XMLHttpRequest, textStatus, errorThrown);
                }
            },
            success: function (data) {
                clearTimeout(timer);
                self.handleAjaxResponse(data, evt);
            }
        });
    };

    this.setOverlaySizes = function () {
        var heightAdjust = stdHeightAjdust,
        widthAdjust = stdWidthAdjust;
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        contentContainer.css({
            "width": dimensions.width + "px",
            "height": dimensions.height + "px"
        });
        mainContainer.css({
            "width": (dimensions.width + widthAdjust) + "px",
            "height": (dimensions.height + heightAdjust) + "px"
        });
    };

    this.setPosition = function () {
        var trigger_pos = trigger.offset();
        var trigger_size = WF.Utils.getDimensions(trigger);
        var dir = self.getQuadrant(trigger_pos);
        mainContainer.css({
            top: "",
            left: ""
        });
        switch (dir) {
            case "tl":
                mainContainer.css({
                    "top": (trigger_pos.top + trigger_size.height + options.marginBottom) + "px",
                    "left": (trigger_pos.left + options.offsetX) + "px"
                });
                break;
            case "tr":
                mainContainer.css({
                    "top": (trigger_pos.top + trigger_size.height + options.marginBottom) + "px",
                    "right": ($("body").width() - (trigger_pos.left + trigger_size.width) - options.offsetX) + "px"
                });
                break;
            case "bl":
                var blTop = trigger_pos.top - mainContainer.height() - options.offsetY - options.paddingBottom - options.paddingTop - options.marginBottom;
                if (blTop < 10) {
                    blTop = 10;
                }
                mainContainer.css({
                    "top": blTop + "px",
                    "left": (trigger_pos.left + options.offsetX) + "px"
                });
                break;
            case "br":
                var brTop = trigger_pos.top - mainContainer.height() - options.offsetY - options.paddingBottom - options.paddingTop - options.marginBottom;
                if (brTop < 10) {
                    brTop = 10;
                }
                mainContainer.css({
                    "top": brTop + "px",
                    "right": ($("body").width() - (trigger_pos.left + trigger_size.width) - options.offsetX) + "px"
                });
                break;
        }
        mainContainer.removeClass("tl").removeClass("tr").removeClass("bl").removeClass("br").addClass(dir);
    };

    this.show = function (evt) {
        helperDialog.fadeOut(showHideSpeed);
        mainContainer.empty();
        mainContainer.append(cache.clone(true));
        self.setOverlaySizes();
        self.setPosition();
        $("body").addClass("overlayOpen");
        mainContainer.draggable({
            handle: ".c28titleBar"
        });
        mainContainer.fadeIn(showHideSpeed, function () {
            $(this).attr({
                "aria-labelledby": trigger.attr("id"),
                "aria-hidden": "false"
            }).find("a.c28close").show().focus();
            var h1 = contentContainer.find("h1, h2, h3")[0];
        });
        WF.OnLoads.doAll(mainContainer);
        if (options.disableCache) {
            cache = "";
        }
        WF.Utils.trackVS({
            "event": "LinkActivated",
            "eventType": evt.type,
            "eventDescription": "overlayOpen",
            "linkText": trigger.text(),
            "destinationUrl": trigger.get(0).href,
            "destinationPid": destPid,
            "clist": clist
        });
    };

    this.showErrorDialog = function (XMLHttpRequest, textStatus, errorThrown) {
        helperDialog.html("<h2>" + WF.Strings.Components.LightboxOverlay.errorEncountered[WF.Page.lang] + "</h2>").attr("class", "c28error");
        helperDialog.append("<div>" + XMLHttpRequest.status + "</div>");
        helperDialog.append("<div>" + errorThrown + "</div>");
        self.addDialogCloseButton();
        $("body").append(helperDialog);
        self.positionLoadingDialog();
        helperDialog.fadeIn(fadeTime);
    };

    if (!options) {
        options = {
            parameters: {}
        };

    }
    if (trigger.href != "") {
        self.getOptionsFromLink();
        self.setStateVariant();
    }
    for (var o in stdOptions) {
        if (typeof options[o] == "undefined") {
            options[o] = stdOptions[o];
        }
    }
    var clist = WF.Utils.getClist(trigger);
    trigger = $(trigger);
    trigger.attr("aria-haspopup", "true").bind("click keypress", function (evt) {
        if (evt.type == "keypress" && evt.keyCode != 13) {
            return;
        }
        evt.preventDefault();
        self.init(evt);
    });
    WF.Page.Components.Overlays.push(this);
    return this;
};

WF.OnLoads.setupOverlays = function (root) {
    if (typeof root == "undefined") {
        root = $("body");
    }
    if (!$("#c28overlay").length) {
        $('<div id="c28overlay" class="c28mainContainer" role="region" aria-hidden="true" />').appendTo($("body"));
    }
    $(root).find(".c28bLink").each(function () {
        new WF.Component.Overlay(this);
    });
};
$(document).ready(function () {
    $("body").on("click", "#zipStateForm #zipCode", function () {
        $(this).val("");
    });
    $("body").on("submit", "#zipStateForm", function (evt) {
        evt.preventDefault();
        clearErrorMarkers();
        var formData = $("#zipCode, #zipStateCode").serialize();
        var lang = "en";
        var zipCodeVal = $("#zipCode").val();
        var zipCodePlaceHolder = $("#zipCode").attr("placeHolder");
        if (zipCodeVal === zipCodePlaceHolder) {
            zipCodeVal = "";
        }
        var url = "/as/zipandstate/" + zipCodeVal + "?lang=" + lang;
        $("#zipStateForm p.busy").removeClass("invisible");
        $.ajax({
            "type": "GET",
            "url": url,
            "dataType": "text",
            "success": function (data) {
                $("#zipStateForm p.busy").addClass("invisible");
                try {
                    data = untaintAndParse(data);
                    if (data.errorMessage) {
                        showMessageBox("error", data.errorMessage);
                        $("#zipStateForm").addClass("hasError");
                        return;
                    } else {
                        if (data.warningMessage) {
                            showMessageBox("warning", data.warningMessage);
                        } else {
                            window.location.reload(true);
                        }
                    }
                } catch (err) {
                    WF.Utils.ajaxLog(err);
                }
            },
            "timeout": 10000,
            onTimeout: function () {
                showMessageBox("error", "This information is currently unavailable. Please try again later.");
            },
            "error": function () {
                WF.Utils.ajaxLog({
                    "message": "AJAX request failed."
                });
            }
        });

        function populateStates(obj, target_id) {
            $("#stateSelect").addClass("showLine");
            $("#stateSelect").removeClass("hideLine");
            var dropdown = $("#" + target_id);
            for (var i = 0; i < obj.length; i++) {
                dropdown.append('<option value="' + obj[i].shortName + '">' + obj[i].longName + "</option>");
            }
        }

        function clearErrorMarkers() {
            $("#zipStateForm").removeClass("hasError");
            if ($("#messageBox").hasClass("error")) {
                $("#messageBox").empty();
                $("#messageBox").removeClass("error");
                $("#messageBox").addClass("hidden");
            }
        }

        function showMessageBox(mbType, mbMessage) {
            var mbox = $("#messageBox");
            var mbState = mbox.data("type");
            var theLightbox = $("#c28lightbox");
            if (typeof mbState !== "undefined" && mbState !== "") {
                clearMessageBox();
            }
            mbox.addClass(mbType);
            mbox.data("type", mbType);
            mbox.text(mbMessage);
            mbox.removeClass("hidden");
            theLightbox.css("height", "530px");
            theLightbox.find(".c28contentContainer").css("height", "480px");
        }

        function clearMessageBox() {
            var mbox = $("#messageBox");
            var theLightbox = $("#c28lightbox");
            mbox.addClass("hidden");
            mbox.removeClass("busy info warning error");
            mbox.html("");
            theLightbox.css("height", "480px");
            theLightbox.find(".c28contentContainer").css("height", "420px");
        }

        function untaintAndParse(str) {
            if (str.substr(0, 100).search(/for *\(;;/) == - 1) {
                WF.Utils.ajaxLog({
                    "message": "Expected JSON result but got: " + str.substr(0, 100) + "..."
                });
                return str;
            }
            try {
                str = str.replace(/^\s*for *\(;;\) *;?\s*/, "");
                str = str.replace(/^\s*\/\*\s*\w+%\s+\{/, "{").replace(/\}\s+%\w+\s*\*\/\s*$/, "}");
                return jQuery.parseJSON(str);
            } catch (err) {
                WF.Utils.ajaxLog(err);
            }
        }
        $("#lbcontent a.closeLink").click(function (evt) {
            clearErrorMarkers();
        });
    });
});

function GSA_getSearchRootPathPrefix() {
    return "/search";
}

function GSA_getResourceRootPathPrefix() {
    return "";
}

function GSA_isEmbeddedMode() {
    return false;
}
var ss_form_element = "frmSearch";
var ss_popup_element = "search_suggest";
var ss_seq = ["g"];
var ss_g_one_name_to_display = "Suggestion";
var ss_g_more_names_to_display = "";
var ss_g_max_to_display = 5;
var ss_max_to_display = 5;
var ss_wait_millisec = 300;
var ss_delay_millisec = 30;
var ss_gsa_host = null;
var SS_OUTPUT_FORMAT_LEGACY = "legacy";
var SS_OUTPUT_FORMAT_OPEN_SEARCH = "os";
var SS_OUTPUT_FORMAT_RICH = "rich";
var ss_protocol = SS_OUTPUT_FORMAT_RICH;
var ss_allow_non_query = true;
var ss_non_query_empty_title = "No Title";
var ss_allow_debug = false;
var ss_form_element = "frmSearch";
var ss_popup_element = "search_suggest";
var ss_seq = ["g"];
var ss_g_one_name_to_display = "Suggestion";
var ss_g_more_names_to_display = "";
var ss_g_max_to_display = 5;
var ss_r_max_to_display = 5;
var ss_max_to_display = 5;
var ss_wait_millisec = 300;
var ss_delay_millisec = 30;
var ss_gsa_host = null;
var SS_OUTPUT_FORMAT_LEGACY = "legacy";
var SS_OUTPUT_FORMAT_OPEN_SEARCH = "os";
var SS_OUTPUT_FORMAT_RICH = "rich";
var ss_protocol = SS_OUTPUT_FORMAT_RICH;
var ss_allow_non_query = true;
var ss_non_query_empty_title = "No Title";
var ss_allow_debug = false;

function BR_AgentContains_(str) {
    if (str in BR_AgentContains_cache_) {
        return BR_AgentContains_cache_[str];
    }
    return BR_AgentContains_cache_[str] = (navigator.userAgent.toLowerCase().indexOf(str) != - 1);
}
var BR_AgentContains_cache_ = {};

function BR_IsIE() {
    return BR_AgentContains_("msie") && !window.opera;
}

function BR_IsKonqueror() {
    return BR_AgentContains_("konqueror");
}

function BR_IsSafari() {
    return BR_AgentContains_("safari") || BR_IsKonqueror();
}

function BR_IsNav() {
    return !BR_IsIE() && !BR_IsSafari() && BR_AgentContains_("mozilla");
}

function BR_IsWin() {
    return BR_AgentContains_("win");
}

function BR_IsMac() {
    return BR_AgentContains_("macintosh") || BR_AgentContains_("mac_powerpc");
}

function BR_IsLinux() {
    return BR_AgentContains_("linux");
}
var BACKSPACE_KEYCODE = 8;
var COMMA_KEYCODE = 188;
var DEBUG_KEYCODE = 68;
var DELETE_KEYCODE = 46;
var DOWN_KEYCODE = 40;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var LEFT_KEYCODE = 37;
var RIGHT_KEYCODE = 39;
var SPACE_KEYCODE = 32;
var TAB_KEYCODE = 9;
var UP_KEYCODE = 38;
var SHIFT_KEYCODE = 16;
var PAGE_DOWN_KEYCODE = 34;
var PAGE_UP_KEYCODE = 33;

function GetSemicolonKeyCode() {
    return BR_IsIE() ? 186 : 59;
}
var MAX_EMAIL_ADDRESS_LENGTH = 320;
var MAX_SIGNATURE_LENGTH = 1000;

function raise(msg) {
    if (typeof Error != "undefined") {
        throw new Error(msg || "Assertion Failed");
    } else {
        throw (msg);
    }
}

function Fail(opt_msg) {
    opt_msg = opt_msg || "Assertion failed";
    if (IsDefined(DumpError)) {
        DumpError(opt_msg + "\n");
    }
    raise(opt_msg);
}

function AssertTrue(expression, opt_msg) {
    if (!expression) {
        opt_msg = opt_msg || "Assertion failed";
        Fail(opt_msg);
    }
}

function AssertEquals(val1, val2, opt_msg) {
    if (val1 != val2) {
        opt_msg = opt_msg || "AssertEquals failed: <" + val1 + "> != <" + val2 + ">";
        Fail(opt_msg);
    }
}

function AssertType(value, type, opt_msg) {
    if (typeof value == type) {
        return;
    }
    if (value || value == "") {
        try {
            if (type == AssertTypeMap[typeof value] || value instanceof type) {
                return;
            }
        } catch (e) {}
    }
    var makeMsg = opt_msg === undefined;
    if (makeMsg) {
        if (typeof type == "function") {
            var match = type.toString().match(/^\s*function\s+([^\s\{]+)/);
            if (match) {
                type = match[1];
            }
        }
        opt_msg = "AssertType failed: <" + value + "> not typeof " + type;
    }
    Fail(opt_msg);
}
var AssertTypeMap = {
    "string": String,
    "number": Number,
    "boolean": Boolean
};

function AssertNumArgs(num, opt_msg) {
    var caller = AssertNumArgs.caller;
    if (caller && caller.arguments.length != num) {
        opt_msg = opt_msg || caller.name + " expected " + num + " arguments " + " but received " + caller.arguments.length;
        Fail(opt_msg);
    }
}
var ILLEGAL_COOKIE_CHARS_RE = /[\s;]/;

function SetCookie(name, value, opt_max_age, opt_path, opt_domain) {
    value = "" + value;
    AssertTrue((typeof name == "string" && typeof value == "string" && !name.match(ILLEGAL_COOKIE_CHARS_RE) && !value.match(ILLEGAL_COOKIE_CHARS_RE)), "trying to set an invalid cookie");
    if (!IsDefined(opt_max_age)) {
        opt_max_age = -1;
    }
    if (!IsDefined(opt_path)) {
        opt_path = "/";
    }
    if (!IsDefined(opt_domain)) {
        opt_domain = null;
    }
    var domain_str = (opt_domain == null) ? "" : ";domain=" + opt_domain;
    var path_str = (opt_path == null) ? "" : ";path=" + opt_path;
    var expires_str;
    if (opt_max_age < 0) {
        expires_str = "";
    } else {
        if (opt_max_age == 0) {
            var pastDate = new Date(1970, 1, 1);
            expires_str = ";expires=" + pastDate.toUTCString();
        } else {
            var futureDate = new Date(Now() + opt_max_age * 1000);
            expires_str = ";expires=" + futureDate.toUTCString();
        }
    }
    document.cookie = name + "=" + value + domain_str + path_str + expires_str;
}
var EXPIRED_COOKIE_VALUE = "EXPIRED";

function ExpireCookie(name, opt_path, opt_domain) {
    SetCookie(name, EXPIRED_COOKIE_VALUE, 0, opt_path, opt_domain);
}

function GetCookie(name) {
    var nameeq = name + "=";
    var cookie = String(document.cookie);
    for (var pos = -1;
        (pos = cookie.indexOf(nameeq, pos + 1)) >= 0;) {
        var i = pos;
        while (--i >= 0) {
            var ch = cookie.charAt(i);
            if (ch == ";") {
                i = -1;
                break;
            } else {
                if (" \t".indexOf(ch) < 0) {
                    break;
                }
            }
        }
        if (-1 === i) {
            var end = cookie.indexOf(";", pos);
            if (end < 0) {
                end = cookie.length;
            }
            return cookie.substring(pos + nameeq.length, end);
        }
    }
    return "";
}

function Now() {
    return (new Date()).getTime();
}

function MaybeGetElement(win, id) {
    return win.document.getElementById(id);
}

function GetElement(win, id) {
    var el = win.document.getElementById(id);
    if (!el) {
        DumpError("Element " + id + " not found.");
    }
    return el;
}

function GetElements(win, id) {
    return win.document.getElementsByName(id);
}

function GetParentNode(n) {
    try {
        return n.parentNode;
    } catch (e) {
        return n;
    }
}

function IsDescendant(parent, child) {
    do {
        if (parent === child) {
            return true;
        }
        child = GetParentNode(child);
    } while (child && child !== document.body);
    return false;
}

function GetAttribute(node, attribute) {
    if (!node.getAttribute) {
        return null;
    }
    var attr = node.getAttribute(attribute);
    if (BR_IsIE() && attribute == "style") {
        return attr.value;
    } else {
        return attr;
    }
}

function SetInnerHTML(win, id, html) {
    try {
        GetElement(win, id).innerHTML = html;
    } catch (ex) {
        DumpException(ex);
    }
}

function GetInnerHTML(win, id) {
    try {
        return GetElement(win, id).innerHTML;
    } catch (ex) {
        DumpException(ex);
        return "";
    }
}

function ClearInnerHTML(win, id) {
    try {
        GetElement(win, id).innerHTML = "";
    } catch (ex) {
        DumpException(ex);
    }
}

function SetCssStyle(win, id, name, value) {
    try {
        var elem = GetElement(win, id);
        elem.style[name] = value;
    } catch (ex) {
        DumpException(ex);
    }
}

function GetStyleProperty(style, name) {
    var i = style.indexOf(name);
    if (i != - 1) {
        var j = style.indexOf(";", i);
        if (j == - 1) {
            j = style.length;
        }
        return CollapseWhitespace(style.substring(i + name.length + 1, j));
    }
    return null;
}

function GetCellIndex(cell) {
    if (cell.cellIndex) {
        return cell.cellIndex;
    } else {
        if (cell.parentNode) {
            return FindInArray(cell.parentNode.cells, cell);
        } else {
            return null;
        }
    }
}

function ShowElement(el, show) {
    el.style.display = show ? "" : "none";
}

function ShowBlockElement(el, show) {
    el.style.display = show ? "block" : "none";
}

function ShowInlineElement(el, show) {
    el.style.display = show ? "inline" : "none";
}

function SetButtonText(button, text) {
    button.childNodes[0].nodeValue = text;
}

function AppendNewElement(win, parent, tag) {
    var e = win.document.createElement(tag);
    parent.appendChild(e);
    return e;
}

function FindChildWithID(parent, id) {
    var el;
    for (el = parent.firstChild; el && el.id != id; el = el.nextSibling) {}
    return el;
}

function AddMenuDisabledOption(win, menu, html) {
    var op = AppendNewElement(win, menu, "OPTION");
    op.disabled = true;
    op.innerHTML = html;
    return op;
}

function AddMenuOption(win, menu, value, html) {
    var op = AppendNewElement(win, menu, "OPTION");
    op.value = value;
    op.innerHTML = html;
    return op;
}

function CreateDIV(win, id) {
    var div = MaybeGetElement(win, id);
    if (!div) {
        div = AppendNewElement(win, win.document.body, "div");
        div.id = id;
    }
    return div;
}

function CreateIFRAME(win, id, url) {
    var iframe = MaybeGetElement(win, id);
    if (!iframe) {
        var div = AppendNewElement(win, win.document.body, "div");
        div.innerHTML = "<iframe id=" + id + " name=" + id + " src=" + url + "></iframe>";
        iframe = GetElement(win, id);
    }
    return iframe;
}

function Tr(win, tds) {
    var tr = win.document.createElement("TR");
    for (var i = 0; i < tds.length; i++) {
        tr.appendChild(tds[i]);
    }
    return tr;
}

function Td(win, opt_colspan) {
    var td = win.document.createElement("TD");
    if (opt_colspan) {
        td.colSpan = opt_colspan;
    }
    return td;
}

function HasClass(el, cl) {
    if (el == null || el.className == null) {
        return false;
    }
    if (el.className == cl) {
        return true;
    }
    var classes = el.className.split(" ");
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cl) {
            return true;
        }
    }
    return false;
}

function AddClass(el, cl) {
    if (HasClass(el, cl)) {
        return;
    }
    el.className += " " + cl;
}

function RemoveClass(el, cl) {
    if (el.className == null) {
        return;
    }
    if (el.className == cl) {
        el.className = "";
        return;
    }
    var classes = el.className.split(" ");
    var result = [];
    var changed = false;
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] != cl) {
            if (classes[i]) {
                result.push(classes[i]);
            }
        } else {
            changed = true;
        }
    }
    if (changed) {
        el.className = result.join(" ");
    }
}

function GetElementsBySelector(root, selector) {
    var nodes = [];
    for (var child = root.firstChild; child; child = child.nextSibling) {
        AddElementBySelector_(child, selector, nodes);
    }
    return nodes;
}

function AddElementBySelector_(root, selector, nodes) {
    if (selector.select(root)) {
        nodes.push(root);
    }
    for (var child = root.firstChild; child; child = child.nextSibling) {
        AddElementBySelector_(child, selector, nodes);
    }
}

function GetPageOffsetLeft(el) {
    var x = el.offsetLeft;
    if (el.offsetParent != null) {
        x += GetPageOffsetLeft(el.offsetParent);
    }
    return x;
}

function GetPageOffsetTop(el) {
    var y = el.offsetTop;
    if (el.offsetParent != null) {
        y += GetPageOffsetTop(el.offsetParent);
    }
    return y;
}

function GetPageOffset(el) {
    var x = el.offsetLeft;
    var y = el.offsetTop;
    if (el.offsetParent != null) {
        var pos = GetPageOffset(el.offsetParent);
        x += pos.x;
        y += pos.y;
    }
    return {
        x: x,
        y: y
    };

}

function GetPageOffsetRight(el) {
    return GetPageOffsetLeft(el) + el.offsetWidth;
}

function GetPageOffsetBottom(el) {
    return GetPageOffsetTop(el) + el.offsetHeight;
}

function GetScrollTop(win) {
    return GetWindowPropertyByBrowser_(win, getScrollTopGetters_);
}
var getScrollTopGetters_ = {
    ieQuirks_: function (win) {
        return win.document.body.scrollTop;
    },
    ieStandards_: function (win) {
        return win.document.documentElement.scrollTop;
    },
    dom_: function (win) {
        return win.pageYOffset;
    }
};

function GetScrollLeft(win) {
    return GetWindowPropertyByBrowser_(win, getScrollLeftGetters_);
}
var getScrollLeftGetters_ = {
    ieQuirks_: function (win) {
        return win.document.body.scrollLeft;
    },
    ieStandards_: function (win) {
        return win.document.documentElement.scrollLeft;
    },
    dom_: function (win) {
        return win.pageXOffset;
    }
};

function IsScrollAtEnd(win, opt_isHoriz) {
    var total = (opt_isHoriz) ? document.body.offsetWidth : document.body.offsetHeight;
    var inner = (opt_isHoriz) ? GetWindowWidth(win) : GetWindowHeight(win);
    var offset = (opt_isHoriz) ? GetScrollLeft(win) : GetScrollTop(win);
    return (inner + offset >= total || total < inner);
}

function ScrollTo(win, el, position) {
    var y = GetPageOffsetTop(el);
    y -= GetWindowHeight(win) * position;
    win.scrollTo(0, y);
}
var ALIGN_BOTTOM = "b";
var ALIGN_MIDDLE = "m";
var ALIGN_TOP = "t";

function ScrollIntoView(win, el, alignment) {
    var el_top = GetPageOffsetTop(el);
    var el_bottom = el_top + el.offsetHeight;
    var win_top = GetScrollTop(win);
    var win_height = GetWindowHeight(win);
    var win_bottom = win_top + win_height;
    if (el_top < win_top || el_bottom > win_bottom) {
        var scrollto_y;
        if (alignment == ALIGN_BOTTOM) {
            scrollto_y = el_bottom - win_height + 5;
        } else {
            if (alignment == ALIGN_MIDDLE) {
                scrollto_y = (el_top + el_bottom) / 2 - win_height / 2;
            } else {
                scrollto_y = el_top - 5;
            }
        }
        win.scrollTo(0, scrollto_y);
    }
}

function IsElementVisible(win, id) {
    var el = MaybeGetElement(win, id);
    if (el == null) {
        return false;
    }
    var el_top = GetPageOffsetTop(el);
    var el_bottom = el_top + el.offsetHeight;
    var win_top = GetScrollTop(win);
    var win_bottom = win_top + GetWindowHeight(win);
    if (el_top >= win_top && el_bottom <= win_bottom) {
        return true;
    }
    return false;
}

function GetWindowWidth(win) {
    return GetWindowPropertyByBrowser_(win, getWindowWidthGetters_);
}
var getWindowWidthGetters_ = {
    ieQuirks_: function (win) {
        return win.document.body.clientWidth;
    },
    ieStandards_: function (win) {
        return win.document.documentElement.clientWidth;
    },
    dom_: function (win) {
        return win.innerWidth;
    }
};

function GetWindowHeight(win) {
    return GetWindowPropertyByBrowser_(win, getWindowHeightGetters_);
}
var getWindowHeightGetters_ = {
    ieQuirks_: function (win) {
        return win.document.body.clientHeight;
    },
    ieStandards_: function (win) {
        return win.document.documentElement.clientHeight;
    },
    dom_: function (win) {
        return win.innerHeight;
    }
};

function GetWindowPropertyByBrowser_(win, getters) {
    try {
        if (BR_IsSafari()) {
            return getters.dom_(win);
        } else {
            if (!window.opera && "compatMode" in win.document && win.document.compatMode == "CSS1Compat") {
                return getters.ieStandards_(win);
            } else {
                if (BR_IsIE()) {
                    return getters.ieQuirks_(win);
                }
            }
        }
    } catch (e) {}
    return getters.dom_(win);
}

function GetAvailScreenWidth(win) {
    return win.screen.availWidth;
}

function GetAvailScreenHeight(win) {
    return win.screen.availHeight;
}

function GetNiceWindowHeight(win) {
    return Math.floor(0.8 * GetAvailScreenHeight(win));
}

function GetCenteringLeft(win, width) {
    return (win.screen.availWidth - width) >> 1;
}

function GetCenteringTop(win, height) {
    return (win.screen.availHeight - height) >> 1;
}

function Popup(url, opt_name, opt_width, opt_height, opt_center, opt_hide_scrollbars, opt_noresize, opt_blocked_msg) {
    if (!opt_height) {
        opt_height = Math.floor(GetWindowHeight(window.top) * 0.8);
    }
    if (!opt_width) {
        opt_width = Math.min(GetAvailScreenWidth(window), opt_height);
    }
    var features = "resizable=" + (opt_noresize ? "no" : "yes") + "," + "scrollbars=" + (opt_hide_scrollbars ? "no" : "yes") + "," + "width=" + opt_width + ",height=" + opt_height;
    if (opt_center) {
        features += ",left=" + GetCenteringLeft(window, opt_width) + "," + "top=" + GetCenteringTop(window, opt_height);
    }
    return OpenWindow(window, url, opt_name, features, opt_blocked_msg);
}

function OpenWindow(win, url, opt_name, opt_features, opt_blocked_msg) {
    var newwin = OpenWindowHelper(top, url, opt_name, opt_features);
    if (!newwin || newwin.closed || !newwin.focus) {
        newwin = OpenWindowHelper(win, url, opt_name, opt_features);
    }
    if (!newwin || newwin.closed || !newwin.focus) {
        if (opt_blocked_msg) {
            alert(opt_blocked_msg);
        }
    } else {
        newwin.focus();
    }
    return newwin;
}

function OpenWindowHelper(win, url, name, features) {
    var newwin;
    if (features) {
        newwin = win.open(url, name, features);
    } else {
        if (name) {
            newwin = win.open(url, name);
        } else {
            newwin = win.open(url);
        }
    }
    return newwin;
}

function MaybeEscape(str, escape) {
    return escape ? HtmlEscape(str) : str;
}
var windata = [];

function GetWindowData(win) {
    var data = windata[win.name];
    if (!data) {
        windata[win.name] = data = [];
    }
    return data;
}

function ClearWindowData(win_name) {
    if (windata[win_name]) {
        windata[win_name] = null;
    }
}
var amp_re_ = /&/g;
var lt_re_ = /</g;
var gt_re_ = />/g;

function HtmlEscape(str) {
    if (!str) {
        return "";
    }
    return str.replace(amp_re_, "&amp;").replace(lt_re_, "&lt;").replace(gt_re_, "&gt;").replace(quote_re_, "&quot;");
}

function HtmlUnescape(str) {
    if (!str) {
        return "";
    }
    return str.replace(/&#(\d+);/g, function (_, n) {
        return String.fromCharCode(parseInt(n, 10));
    }).replace(/&#x([a-f0-9]+);/gi, function (_, n) {
        return String.fromCharCode(parseInt(n, 16));
    }).replace(/&(\w+);/g, function (_, entity) {
        entity = entity.toLowerCase();
        return entity in HtmlUnescape_unesc_ ? HtmlUnescape_unesc_[entity] : "?";
    });
}
var HtmlUnescape_unesc_ = {
    lt: "<",
    gt: ">",
    quot: '"',
    nbsp: " ",
    amp: "&",
    apos: "'"
};

var dbsp_re_ = /  /g;
var ret_re_ = /\r/g;
var nl_re_ = /\n/g;

function HtmlWhitespaceEscape(str) {
    str = HtmlEscape(str);
    str = str.replace(dbsp_re_, "&nbsp;&nbsp;");
    str = str.replace(ret_re_, "");
    str = str.replace(nl_re_, "<br>");
    return str;
}
var quote_re_ = /\"/g;

function QuoteEscape(str) {
    return HtmlEscape(str).replace(quote_re_, "&quot;");
}
var JS_SPECIAL_RE_ = /[\'\\\r\n\b\"<>&\u0085\u2028\u2029]/g;

function JSEscOne_(s) {
    return JSEscOne_.js_escs_[s];
}

function ToJSString(s) {
    if (!JSEscOne_.js_escs_) {
        var escapes = {};

        escapes["\\"] = "\\\\";
        escapes["'"] = "\\047";
        escapes["\b"] = "\\b";
        escapes['"'] = "\\042";
        escapes["<"] = "\\074";
        escapes[">"] = "\\076";
        escapes["&"] = "\\046";
        escapes["\n"] = "\\n";
        escapes["\r"] = "\\r";
        escapes["\u0085"] = "\\205";
        escapes["\u2028"] = "\\u2028";
        escapes["\u2029"] = "\\u2029";
        JSEscOne_.js_escs_ = escapes;
    }
    return "'" + s.toString().replace(JS_SPECIAL_RE_, JSEscOne_) + "'";
}
var spc_re_ = /\s+/g;
var beg_spc_re_ = /^ /;
var end_spc_re_ = / $/;

function CollapseWhitespace(str) {
    if (!str) {
        return "";
    }
    return str.replace(spc_re_, " ").replace(beg_spc_re_, "").replace(end_spc_re_, "");
}
var newline_re_ = /\r?\n/g;
var spctab_re_ = /[ \t]+/g;
var nbsp_re_ = /\xa0/g;

function StripNewlines(str) {
    if (!str) {
        return "";
    }
    return str.replace(newline_re_, " ");
}

function CanonicalizeNewlines(str) {
    if (!str) {
        return "";
    }
    return str.replace(newline_re_, "\n");
}

function HtmlifyNewlines(str) {
    if (!str) {
        return "";
    }
    return str.replace(newline_re_, "<br>");
}

function NormalizeSpaces(str) {
    if (!str) {
        return "";
    }
    return str.replace(spctab_re_, " ").replace(nbsp_re_, " ");
}

function UrlEncode(str) {
    return encodeURIComponent(str);
}
var plus_re_ = /\+/g;

function UrlDecode(str) {
    return decodeURIComponent(str.replace(plus_re_, " "));
}

function Trim(str) {
    if (!str) {
        return "";
    }
    return str.replace(/^\s+/, "").replace(/\s+$/, "");
}

function EndsWith(str, suffix) {
    if (!str) {
        return !suffix;
    }
    return (str.lastIndexOf(suffix) == (str.length - suffix.length));
}

function IsEmpty(str) {
    return CollapseWhitespace(str) == "";
}

function IsLetterOrDigit(ch) {
    return ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9"));
}

function IsSpace(ch) {
    return (" \t\r\n".indexOf(ch) >= 0);
}
var eol_re_ = /\r\n?/g;
var trailingspc_re_ = /[\n\t ]+$/;

function NormalizeText(str) {
    return str.replace(eol_re_, "\n").replace(trailingspc_re_, "");
}

function HtmlEscapeInsertWbrs(str, n, chars_to_break_after, chars_to_break_before) {
    AssertNumArgs(4);
    var out = "";
    var strpos = 0;
    var spc = 0;
    for (var i = 1; i < str.length; ++i) {
        var prev_char = str.charAt(i - 1);
        var next_char = str.charAt(i);
        if (IsSpace(next_char)) {
            spc = i;
        } else {
            if (i - spc == n || chars_to_break_after.indexOf(prev_char) != - 1 || chars_to_break_before.indexOf(next_char) != - 1) {
                out += HtmlEscape(str.substring(strpos, i)) + "<wbr>";
                strpos = i;
                spc = i;
            }
        }
    }
    out += HtmlEscape(str.substr(strpos));
    return out;
}
var illegal_chars_re_ = /[ \/(){}&|\\\"\000]/g;

function CanonicalizeLabel(str, lowercase) {
    var uppercase = str.replace(illegal_chars_re_, "-");
    return lowercase ? uppercase.toLowerCase() : uppercase;
}

function CompareStringsIgnoreCase(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    if (s1 < s2) {
        return -1;
    } else {
        if (s1 == s2) {
            return 0;
        } else {
            return 1;
        }
    }
}

function GetCursorPos(win, textfield) {
    try {
        if (IsDefined(textfield.selectionEnd)) {
            return textfield.selectionEnd;
        } else {
            if (win.document.selection && win.document.selection.createRange) {
                var tr = win.document.selection.createRange();
                if (tr.parentElement() != textfield) {
                    return -1;
                }
                var tr2 = tr.duplicate();
                tr2.moveToElementText(textfield);
                tr2.setEndPoint("EndToStart", tr);
                var cursor = tr2.text.length;
                if (cursor > textfield.value.length) {
                    return -1;
                }
                return cursor;
            } else {
                Debug("Unable to get cursor position for: " + navigator.userAgent);
                return textfield.value.length;
            }
        }
    } catch (e) {
        DumpException(e, "Cannot get cursor pos");
    }
    return -1;
}

function SetCursorPos(win, textfield, pos) {
    if (IsDefined(textfield.selectionEnd) && IsDefined(textfield.selectionStart)) {
        textfield.selectionStart = pos;
        textfield.selectionEnd = pos;
    } else {
        if (win.document.selection && textfield.createTextRange) {
            var sel = textfield.createTextRange();
            sel.collapse(true);
            sel.move("character", pos);
            sel.select();
        }
    }
}

function FindInArray(array, x) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return i;
        }
    }
    return -1;
}

function InsertArray(array, x) {
    if (FindInArray(array, x) == - 1) {
        array[array.length] = x;
    }
}

function DeleteArrayElement(array, x) {
    var i = 0;
    while (i < array.length && array[i] != x) {
        i++;
    }
    array.splice(i, 1);
}

function CopyArray(array) {
    var copy = [];
    for (var i = 0; i < array.length; i++) {
        copy[i] = array[i];
    }
    return copy;
}

function CloneObject(x) {
    if ((typeof x) == "object") {
        var y = [];
        for (var i in x) {
            y[i] = CloneObject(x[i]);
        }
        return y;
    }
    return x;
}

function CloneEvent(ev) {
    var clone = {};

    clone.clientX = ev.clientX;
    clone.clientY = ev.clientY;
    clone.pageX = ev.pageX;
    clone.pageY = ev.pageY;
    clone.type = ev.type;
    clone.srcElement = ev.srcElement;
    clone.target = ev.target;
    clone.cancelBubble = ev.cancelBubble;
    clone.explicitOriginalTarget = ev.explicitOriginalTarget;
    clone.button = ev.button;
    clone.shiftKey = ev.shiftKey;
    clone.ctrlKey = ev.ctrlKey;
    return clone;
}

function GetEventTarget(ev) {
    return ev.srcElement || ev.target;
}

function CancelEvent(ev) {
    if (BR_IsIE()) {
        ev.cancelBubble = true;
    } else {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
    }
}

function CancelDefaultAction(ev) {
    if (BR_IsIE()) {
        ev.returnValue = false;
    } else {
        ev.preventDefault();
    }
}

function PrintArray(array, data) {
    AssertEquals(array.length, data.length * 2 + 1);
    for (var i = 0, idx = 1; i < data.length; i++, idx += 2) {
        array[idx] = data[i];
    }
    return array.join("");
}

function ImageHtml(url, attributes) {
    return "<img " + attributes + " src=" + url + ">";
}

function MakeId3(idprefix, m, n) {
    return idprefix + m + "_" + n;
}

function ParseAddress(addr) {
    var name = "";
    var address = "";
    for (var i = 0; i < addr.length;) {
        var token = GetEmailToken(addr, i);
        if (token.charAt(0) == "<") {
            var end = token.indexOf(">");
            address = token.substring(1, (end != - 1) ? end : token.length);
        } else {
            if (address == "") {
                name += token;
            }
        }
        i += token.length;
    }
    if (address == "" && name.indexOf("@") != - 1) {
        address = name;
        name = "";
    }
    name = CollapseWhitespace(name);
    name = StripQuotes(name, "'");
    name = StripQuotes(name, '"');
    address = CollapseWhitespace(address);
    return [name, address];
}

function GetAddress(address) {
    return ParseAddress(address)[1];
}

function GetAddressUsername(address) {
    address = GetAddress(address);
    var at = address.indexOf("@");
    return (at == - 1) ? address : address.substr(0, at);
}

function GetPersonal(address) {
    return ParseAddress(address)[0];
}

function GetPersonalElseUsername(address) {
    var personal = GetPersonal(address);
    if (personal != "") {
        return personal;
    } else {
        return GetAddressUsername(address);
    }
}

function StripQuotes(str, quotechar) {
    var len = str.length;
    if (str.charAt(0) == quotechar && str.charAt(len - 1) == quotechar) {
        return str.substring(1, len - 1);
    }
    return str;
}

function EmailsToArray(str) {
    var result = [];
    var email = "";
    var token;
    for (var i = 0; i < str.length;) {
        token = GetEmailToken(str, i);
        if (token == ",") {
            AddEmailAddress(result, email);
            email = "";
            i++;
            continue;
        }
        email += token;
        i += token.length;
    }
    if (email != "" || token == ",") {
        AddEmailAddress(result, email);
    }
    return result;
}
var openers_ = '"<([';
var closers_ = '">)]';

function GetEmailToken(str, pos) {
    var ch = str.charAt(pos);
    var p = openers_.indexOf(ch);
    if (p == - 1) {
        return ch;
    }
    var end_pos = str.indexOf(closers_.charAt(p), pos + 1);
    var token = (end_pos >= 0) ? str.substring(pos, end_pos + 1) : str.substr(pos);
    return token;
}

function AddEmailAddress(result, email) {
    email = CleanEmailAddress(email);
    result[result.length] = email;
}
var specialchars_re_ = /[()<>@,;:\\\".\[\]]/;

function CleanEmailAddress(str) {
    var name_address = ParseAddress(str);
    var name = name_address[0];
    var address = name_address[1];
    if (name.indexOf('"') == - 1) {
        var quote_needed = specialchars_re_.test(name);
        if (quote_needed) {
            name = '"' + name + '"';
        }
    }
    if (name == "") {
        return address;
    } else {
        if (address == "") {
            return name;
        } else {
            return name + " <" + address + ">";
        }
    }
}

function SafeTimeout(win, fn, ms) {
    if (!win) {
        win = window;
    }
    if (!win._tm) {
        win._tm = [];
    }
    var timeoutfn = SafeTimeoutFunction_(win, fn);
    var id = win.setTimeout(timeoutfn, ms);
    timeoutfn.id = id;
    win._tm[id] = 1;
    return id;
}

function SafeTimeoutFunction_(win, fn) {
    var timeoutfn = function () {
        try {
            fn(win);
            var t = win._tm;
            if (t) {
                delete t[timeoutfn.id];
            }
        } catch (e) {
            DumpException(e);
        }
    };

    return timeoutfn;
}

function CancelTimeout(win, id) {
    if (!win) {
        win = window;
    }
    win.clearTimeout(id);
    if (win._tm) {
        delete win._tm[id];
    }
}

function CancelAllTimeouts(win) {
    if (win && win._tm) {
        try {
            for (var i in win._tm) {
                win.clearTimeout(i);
            }
            win._tm = [];
        } catch (e) {
            DumpException(e);
        }
    }
}

function CompareID(a, b) {
    if (a.length != b.length) {
        return (a.length - b.length);
    } else {
        return (a < b) ? - 1 : (a > b) ? 1 : 0;
    }
}

function IsDefined(value) {
    return (typeof value) != "undefined";
}

function GetKeyCode(event) {
    var code;
    if (event.keyCode) {
        code = event.keyCode;
    } else {
        if (event.which) {
            code = event.which;
        }
    }
    return code;
}

function forid_1(id) {
    return document.getElementById(id);
}

function forid_2(id) {
    return document.all[id];
}
var forid = document.getElementById ? forid_1 : forid_2;

function GetFnName(func) {
    AssertTrue(func, "func passed to GetFnName() is undefined");
    var name;
    if (!("name" in func)) {
        var match = /\W*function\s+([\w\$]+)\(/.exec(func);
        if (!match) {
            throw new Error("Cannot extract name from function: " + func);
        }
        name = match[1];
        func.name = name;
    } else {
        name = func.name;
    }
    if (!name || name == "anonymous") {
        throw new Error("Anonymous function has no name: " + func);
    }
    return func.name;
}

function log(msg) {
    try {
        if (window.parent != window && window.parent.log) {
            window.parent.log(window.name + "::" + msg);
            return;
        }
    } catch (e) {}
    var logPane = forid("log");
    if (logPane) {
        var logText = "<p class=logentry><span class=logdate>" + new Date() + "</span><span class=logmsg>" + msg + "</span></p>";
        logPane.innerHTML = logText + logPane.innerHTML;
    } else {
        window.status = msg;
    }
}
var XH_ieProgId_;
var XML_READY_STATE_UNINITIALIZED = 0;
var XML_READY_STATE_LOADING = 1;
var XML_READY_STATE_LOADED = 2;
var XML_READY_STATE_INTERACTIVE = 3;
var XML_READY_STATE_COMPLETED = 4;

function XH_XmlHttpInit_() {
    var XH_ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    if (typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
        for (var i = 0; i < XH_ACTIVE_X_IDENTS.length; i++) {
            var candidate = XH_ACTIVE_X_IDENTS[i];
            try {
                new ActiveXObject(candidate);
                XH_ieProgId_ = candidate;
                break;
            } catch (e) {}
        }
        if (!XH_ieProgId_) {
            throw Error("Could not create ActiveXObject. ActiveX might be disabled," + " or MSXML might not be installed.");
        }
    }
}
XH_XmlHttpInit_();

function XH_XmlHttpCreate() {
    if (XH_ieProgId_) {
        return new ActiveXObject(XH_ieProgId_);
    } else {
        return new XMLHttpRequest();
    }
}

function XH_XmlHttpGET(xmlHttp, url, handler) {
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = handler;
    XH_XmlHttpSend(xmlHttp, null);
}

function XH_XmlHttpPOST(xmlHttp, url, data, handler) {
    xmlHttp.open("POST", url, true);
    xmlHttp.onreadystatechange = handler;
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    XH_XmlHttpSend(xmlHttp, data);
}

function XH_XmlHttpOpen(xmlHttp, verb, url, handler) {
    xmlHttp.open(verb, url, true);
    xmlHttp.onreadystatechange = handler;
}

function XH_XmlHttpSetRequestHeader(xmlHttp, name, value) {
    xmlHttp.setRequestHeader(name, value);
}

function XH_XmlHttpSend(xmlHttp, data) {
    try {
        xmlHttp.send(data);
    } catch (e) {
        log("XMLHttpSend failed " + e.toString() + "<br>" + e.stack);
        throw e;
    }
}

function XH_XmlHttpAbort(xmlHttp) {
    SafeTimeout(window, function () {
        xmlHttp.onreadystatechange = function () {};

    }, 0);
    if (xmlHttp.readyState < XML_READY_STATE_COMPLETED) {
        xmlHttp.abort();
    }
}

function uri_parse(uriStr) {
    var m = uriStr.match(URI_RE_);
    if (!m) {
        return null;
    }
    return new URI(uri_nullIfAbsent_(m[1]), uri_nullIfAbsent_(m[2]), uri_nullIfAbsent_(m[3]), uri_nullIfAbsent_(m[4]), uri_nullIfAbsent_(m[5]), uri_nullIfAbsent_(m[6]), uri_nullIfAbsent_(m[7]));
}

function uri_create(scheme, credentials, domain, port, path, cgiParamList, fragment) {
    var uri = new URI(uri_encodeIfExists2_(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_), uri_encodeIfExists2_(credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_), uri_encodeIfExists_(domain), port > 0 ? port.toString() : null, uri_encodeIfExists2_(path, URI_DISALLOWED_IN_PATH_), null, uri_encodeIfExists_(fragment));
    if (cgiParamList) {
        uri.SetAllCgiParameters(cgiParamList);
    }
    return uri;
}

function uri_encodeIfExists_(unescapedPart) {
    if ("string" == typeof unescapedPart) {
        return encodeURIComponent(unescapedPart);
    }
    return null;
}

function uri_encodeIfExists2_(unescapedPart, extra) {
    if ("string" == typeof unescapedPart) {
        return encodeURI(unescapedPart).replace(extra, uri_encodeOne_);
    }
    return null;
}

function uri_encodeOne_(ch) {
    var n = ch.charCodeAt(0);
    return "%" + "0123456789ABCDEF".charAt((n >> 4) & 15) + "0123456789ABCDEF".charAt(n & 15);
}

function uri_resolve(baseUri, relativeUri) {
    var absoluteUri = baseUri.Clone();
    var overridden = relativeUri.HasScheme();
    if (overridden) {
        absoluteUri.SetRawScheme(relativeUri.GetRawScheme());
    } else {
        overridden = relativeUri.HasCredentials();
    }
    if (overridden) {
        absoluteUri.SetRawCredentials(relativeUri.GetRawCredentials());
    } else {
        overridden = relativeUri.HasDomain();
    }
    if (overridden) {
        absoluteUri.SetRawDomain(relativeUri.GetRawDomain());
    } else {
        overridden = relativeUri.HasPort();
    }
    var rawPath = relativeUri.GetRawPath();
    if (overridden) {
        absoluteUri.SetPort(relativeUri.GetPort());
    } else {
        overridden = relativeUri.HasPath();
        if (overridden) {
            if (!new RegExp("^/").test(rawPath)) {
                rawPath = absoluteUri.GetRawPath().replace(new RegExp("/?[^/]*$"), "/" + rawPath);
            }
        }
    }
    if (overridden) {
        absoluteUri.SetRawPath(rawPath);
    } else {
        overridden = relativeUri.HasQuery();
    }
    if (overridden) {
        absoluteUri.SetRawQuery(relativeUri.GetRawQuery());
    } else {
        overridden = relativeUri.HasFragment();
    }
    if (overridden) {
        absoluteUri.SetRawFragment(relativeUri.GetRawFragment());
    }
    return absoluteUri;
}

function URI(rawScheme, rawCredentials, rawDomain, port, rawPath, rawQuery, rawFragment) {
    this.scheme_ = rawScheme;
    this.credentials_ = rawCredentials;
    this.domain_ = rawDomain;
    this.port_ = port;
    this.path_ = rawPath;
    this.query_ = rawQuery;
    this.fragment_ = rawFragment;
    this.paramCache_ = null;
}
URI.prototype.toString = function () {
    var out = [];
    if (null !== this.scheme_) {
        out.push(this.scheme_, ":");
    }
    if (null !== this.domain_) {
        out.push("//");
        if (null !== this.credentials_) {
            out.push(this.credentials_, "@");
        }
        out.push(this.domain_);
        if (null !== this.port_) {
            out.push(":", this.port_.toString());
        }
    }
    if (null !== this.path_) {
        out.push(this.path_);
    }
    if (null !== this.query_) {
        out.push("?", this.query_);
    }
    if (null !== this.fragment_) {
        out.push("#", this.fragment_);
    }
    return out.join("");
};

URI.prototype.Clone = function () {
    return new URI(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_);
};

URI.prototype.GetScheme = function () {
    return this.scheme_ && uri_decodeThatWorks_(this.scheme_);
};

URI.prototype.GetRawScheme = function () {
    return this.scheme_;
};

URI.prototype.SetScheme = function (newScheme) {
    this.scheme_ = uri_encodeIfExists2_(newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
    return this;
};

URI.prototype.SetRawScheme = function (newScheme) {
    this.scheme_ = newScheme ? newScheme : null;
    return this;
};

URI.prototype.HasScheme = function () {
    return null !== this.scheme_;
};

URI.prototype.GetCredentials = function () {
    return this.credentials_ && uri_decodeThatWorks_(this.credentials_);
};

URI.prototype.GetRawCredentials = function () {
    return this.credentials_;
};

URI.prototype.SetCredentials = function (newCredentials) {
    this.credentials_ = uri_encodeIfExists2_(newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
    return this;
};

URI.prototype.SetRawCredentials = function (newCredentials) {
    this.credentials_ = newCredentials ? newCredentials : null;
    return this;
};

URI.prototype.HasCredentials = function () {
    return null !== this.credentials_;
};

URI.prototype.GetDomain = function () {
    return this.domain_ && uri_decodeThatWorks_(this.domain_);
};

URI.prototype.GetRawDomain = function () {
    return this.domain_;
};

URI.prototype.SetDomain = function (newDomain) {
    this.domain_ = newDomain ? encodeURIComponent(newDomain) : null;
    return this;
};

URI.prototype.SetRawDomain = function (newDomain) {
    this.domain_ = newDomain ? newDomain : null;
    return this;
};

URI.prototype.HasDomain = function () {
    return null !== this.domain_;
};

URI.prototype.GetPort = function () {
    return this.port_ && uri_decodeThatWorks_(this.port_);
};

URI.prototype.SetPort = function (newPort) {
    if (newPort) {
        if ("number" !== typeof newPort) {
            newPort = parseInt(newPort, 10);
            if (newPort < 0 || isNaN(newPort)) {
                throw new Error("Bad port number " + newPort);
            }
        }
        this.port_ = newPort.toString();
    } else {
        this.port_ = null;
    }
    return this;
};

URI.prototype.HasPort = function () {
    return null !== this.port_;
};

URI.prototype.GetPath = function () {
    return this.path_ && uri_decodeThatWorks_(this.path_);
};

URI.prototype.GetRawPath = function () {
    return this.path_;
};

URI.prototype.SetPath = function (newPath) {
    this.path_ = uri_encodeIfExists2_(newPath, URI_DISALLOWED_IN_PATH_);
    return this;
};

URI.prototype.SetRawPath = function (newPath) {
    this.path_ = newPath ? newPath : null;
    return this;
};

URI.prototype.HasPath = function () {
    return null !== this.path_;
};

URI.prototype.GetQuery = function () {
    return this.query_ && uri_decodeThatWorks_(this.query_);
};

URI.prototype.GetRawQuery = function () {
    return this.query_;
};

URI.prototype.SetQuery = function (newQuery) {
    this.paramCache_ = null;
    this.query_ = uri_encodeIfExists_(newQuery);
    return this;
};

URI.prototype.SetRawQuery = function (newQuery) {
    this.paramCache_ = null;
    this.query_ = newQuery ? newQuery : null;
    return this;
};

URI.prototype.HasQuery = function () {
    return null !== this.query_;
};

URI.prototype.SetAllCgiParameters = function (unescapedCgiParameters) {
    this.paramCache_ = null;
    var queryBuf = [];
    var separator = "";
    for (var i = 0; i < unescapedCgiParameters.length;) {
        var k = unescapedCgiParameters[i++];
        var v = unescapedCgiParameters[i++];
        queryBuf.push(separator, encodeURIComponent(k.toString()));
        separator = "&";
        if (v) {
            queryBuf.push("=", encodeURIComponent(v.toString()));
        }
    }
    this.query_ = queryBuf.join("");
    return this;
};

URI.prototype.CheckParameterCache_ = function () {
    if (!this.paramCache_) {
        if (!this.query_) {
            this.paramCache_ = [];
        } else {
            var cgiParams = this.query_.split(/[&\?]/);
            var out = [];
            for (var i = 0; i < cgiParams.length; ++i) {
                var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
                out.push(uri_decodeThatWorks_(m[1]), uri_decodeThatWorks_(m[2] || ""));
            }
            this.paramCache_ = out;
        }
    }
};

URI.prototype.SetCgiParameterValues = function (key, values) {
    if (typeof values === "string") {
        values = [values];
    }
    this.CheckParameterCache_();
    var newValueIndex = 0;
    var pc = this.paramCache_;
    var params = [];
    for (var i = 0, k = 0; i < pc.length; i += 2) {
        if (key === pc[i]) {
            if (newValueIndex < values.length) {
                params.push(key, values[newValueIndex++]);
            }
        } else {
            params.push(pc[i], pc[i + 1]);
        }
    }
    while (newValueIndex < values.length) {
        params.push(key, values[newValueIndex++]);
    }
    this.SetAllCgiParameters(params);
    return this;
};

URI.prototype.GetAllCgiParameters = function () {
    this.CheckParameterCache_();
    return this.paramCache_.slice(0, this.paramCache_.length);
};

URI.prototype.GetCgiParameterValues = function (paramNameUnescaped) {
    this.CheckParameterCache_();
    var values = [];
    for (var i = 0; i < this.paramCache_.length; i += 2) {
        if (paramNameUnescaped === this.paramCache_[i]) {
            values.push(this.paramCache_[i + 1]);
        }
    }
    return values;
};

URI.prototype.GetCgiParameterMap = function (paramNameUnescaped) {
    this.CheckParameterCache_();
    var paramMap = {};

    for (var i = 0; i < this.paramCache_.length; i += 2) {
        var key = this.paramCache_[i++],
        value = this.paramCache_[i++];
        if (!(key in paramMap)) {
            paramMap[key] = [value];
        } else {
            paramMap[key].push(value);
        }
    }
    return paramMap;
};

URI.prototype.GetCgiParameterValue = function (paramNameUnescaped) {
    this.CheckParameterCache_();
    for (var i = 0; i < this.paramCache_.length; i += 2) {
        if (paramNameUnescaped === this.paramCache_[i]) {
            return this.paramCache_[i + 1];
        }
    }
    return null;
};

URI.prototype.GetFragment = function () {
    return this.fragment_ && uri_decodeThatWorks_(this.fragment_);
};

URI.prototype.GetRawFragment = function () {
    return this.fragment_;
};

URI.prototype.SetFragment = function (newFragment) {
    this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
    return this;
};

URI.prototype.SetRawFragment = function (newFragment) {
    this.fragment_ = newFragment ? newFragment : null;
    return this;
};

URI.prototype.HasFragment = function () {
    return null !== this.fragment_;
};

function uri_decodeThatWorks_(s) {
    return decodeURIComponent(s).replace(/\+/g, " ");
}

function uri_nullIfAbsent_(matchPart) {
    return ("string" == typeof matchPart) && (matchPart.length > 0) ? matchPart : null;
}
var URI_RE_ = new RegExp("^" + "(?:" + "([^:/?#]+)" + ":)?" + "(?://" + "(?:([^/?#]*)@)?" + "([^/?#:@]*)" + "(?::([0-9]+))?" + ")?" + "([^?#]+)?" + "(?:\\?([^#]*))?" + "(?:#(.*))?" + "$");
var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;
var ss_cached = [];
var ss_qbackup = null;
var ss_qshown = null;
var ss_loc = -1;
var ss_waiting = 0;
var ss_painting = false;
var ss_key_handling_queue = null;
var ss_painting_queue = null;
var ss_dismissed = false;
var ss_panic = false;
var SS_ROW_CLASS = "ss-gac-a";
var SS_ROW_SELECTED_CLASS = "ss-gac-b";
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement) {
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            } else {
                if (n != 0 && n != Infinity && n != - Infinity) {
                    n = (n > 0 || - 1) * Math.floor(Math.abs(n));
                }
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };

}
var ss_debug = new ss_Debugger();

function ss_composeSuggestUri(qVal, suggestForm) {
    if (!qVal) {
        return null;
    }
    var accessVal = (suggestForm.access && suggestForm.access.value) ? suggestForm.access.value : "p";
    var uri = "/search/as/suggest";
    if (SS_OUTPUT_FORMAT_LEGACY == ss_protocol) {
        uri = uri + "?token=" + encodeURIComponent(qVal) + "&max_matches=" + ss_g_max_to_display;
    } else {
        uri = uri + "?q=" + encodeURIComponent(qVal) + "&max=" + ss_g_max_to_display;
    }
    uri = uri + "&access=" + encodeURIComponent(accessVal) + "&format=" + encodeURIComponent(ss_protocol);
    if (ss_isEmbeddedMode_()) {
        uri = window["GSA_getResourceRootPathPrefix"]() + encodeURIComponent(uri);
    }
    return uri;
}

function ss_suggest(qVal) {
    var startTimeMs = new Date().getTime();
    if (!ss_cached[qVal]) {
        ss_cached[qVal] = {};

    }
    var suggestForm = document.getElementById(ss_form_element);
    var uri = ss_composeSuggestUri(qVal, suggestForm);
    var url = uri;
    if (ss_panic) {
        alert("ss_suggest() AJAX: " + url);
    }
    var xmlhttp = XH_XmlHttpCreate();
    var handler = function () {
        if (xmlhttp.readyState == XML_READY_STATE_COMPLETED) {
            if (ss_panic) {
                alert("ss_suggest() AJAX: " + xmlhttp.responseText);
            }
            var suggested;
            try {
                suggested = eval("(" + xmlhttp.responseText + ")");
            } catch (e) {
                ss_cached[qVal].g = null;
                ss_show(qVal);
                return;
            }
            if (ss_use.g) {
                try {
                    switch (ss_protocol) {
                        case SS_OUTPUT_FORMAT_LEGACY:
                        default:
                            var suggestions = suggested;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    ss_cached[qVal].g[si] = {
                                        "q": suggestions[si]
                                    };

                                    found = true;
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_OPEN_SEARCH:
                            if (suggested.length > 1) {
                                var suggestions = suggested[1];
                                if (suggestions && suggestions.length > 0) {
                                    var found = false;
                                    ss_cached[qVal].g = [];
                                    var max = (ss_g_max_to_display <= 0) ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                                    for (var si = 0; si < max; si++) {
                                        if (suggestions[si] && suggestions[si] != suggested[0]) {
                                            ss_cached[qVal].g[si] = {
                                                "q": suggestions[si]
                                            };

                                            found = true;
                                        } else {
                                            if ((suggested.length > 3) && ss_allow_non_query) {
                                                var title = (suggested[2].length > si) ? null : suggested[2][si];
                                                var url = (suggested[3].length > si) ? null : suggested[3][si];
                                                if (url) {
                                                    title = !title ? ss_non_query_empty_title : title;
                                                    ss_cached[qVal].g[si] = {
                                                        "t": title,
                                                        "u": url
                                                    };

                                                    found = true;
                                                }
                                            }
                                        }
                                    }
                                    if (!found) {
                                        ss_cached[qVal].g = null;
                                    }
                                } else {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_RICH:
                            var suggestions = suggested.results;
                            var relatedSuggestion = suggested.relatedSuggestion;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    if (suggestions[si].name && suggestions[si].name != suggested.query) {
                                        ss_cached[qVal].g[si] = {
                                            "q": suggestions[si].name
                                        };

                                        found = true;
                                    } else {
                                        if (ss_allow_non_query) {
                                            var title = suggestions[si].content;
                                            var url = suggestions[si].moreDetailsUrl;
                                            if (url) {
                                                title = !title ? ss_non_query_empty_title : title;
                                                ss_cached[qVal].g[si] = {
                                                    "t": title,
                                                    "u": url
                                                };

                                                found = true;
                                            }
                                        }
                                    }
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            if (relatedSuggestion && relatedSuggestion.length > 0) {
                                var found = false;
                                ss_cached[qVal].r = [];
                                var max = (ss_r_max_to_display <= 0) ? relatedSuggestion.length : Math.min(ss_r_max_to_display, relatedSuggestion.length);
                                for (var si = 0; si < max; si++) {
                                    if (relatedSuggestion[si].message && relatedSuggestion[si].message != suggested.query) {
                                        ss_cached[qVal].r[si] = {
                                            "q": relatedSuggestion[si].message,
                                            "u": relatedSuggestion[si].url
                                        };

                                        found = true;
                                    } else {
                                        if (ss_allow_non_query) {
                                            var title = suggestions[si].content;
                                            var url = suggestions[si].moreDetailsUrl;
                                            if (url) {
                                                title = !title ? ss_non_query_empty_title : title;
                                                ss_cached[qVal].g[si] = {
                                                    "t": title,
                                                    "u": url
                                                };

                                                found = true;
                                            }
                                        }
                                    }
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            }
                            break;
                    }
                } catch (e) {
                    ss_cached[qVal].g = null;
                }
            }
            if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                var stopTimeMs = new Date().getTime();
                ss_debug.addRequestDebugLine(qVal, "suggest", stopTimeMs - startTimeMs, ss_cached[qVal]);
            }
            ss_show(qVal);
        }
    };

    XH_XmlHttpPOST(xmlhttp, url, "", handler);
}

function ss_processed(qVal) {
    if (!ss_cached[qVal] && ss_use.g) {
        return false;
    }
    return true;
}

function ss_handleAllKey(e) {
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    switch (kid) {
        case 40:
        case 38:
            break;
        case 9:
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear(true);
        case 16:
            ss_qbackup = null;
            ss_dismissed = true;
            var qry = document.getElementById(ss_form_element).q.value;
            if (!ss_processed(qry)) {
                if (ss_panic) {
                    alert("run ajax when key off");
                }
                ss_suggest(qry);
            }
            break;
        case 113:
            if (!ss_allow_debug) {
                break;
            }
            if (ss_debug && ss_debug.getDebugMode()) {
                ss_debug.deactivateConsole();
            } else {
                ss_debug.activateConsole();
            }
            break;
        default:
            break;
    }
}

function ss_handleKey(e, opt_inputEle) {
    ss_initEmbedMode_(opt_inputEle);
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    var fo = document.getElementById(ss_form_element);
    if (ss_isEmbeddedMode_()) {
        document.getElementById(ss_form_element).q.value = opt_inputEle.value;
    }
    var qnow = (!ss_qbackup) ? fo.q.value : ss_qbackup;
    var sum = 0;
    var tbl = document.getElementById(ss_popup_element);
    switch (kid) {
        case 40:
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == "hidden") {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc++;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = 0;
                    }
                    while (ss_loc >= sum) {
                        ss_loc -= sum;
                    }
                    var rows = tbl.getElementsByTagName("tr");
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);
                    if (suggestion.q) {
                        fo.q.value = suggestion.q;
                        if (ss_isEmbeddedMode_() && opt_inputEle) {
                            opt_inputEle.value = suggestion.q;
                        }
                    } else {
                        fo.q.value = ss_qbackup;
                        if (ss_isEmbeddedMode_() && opt_inputEle) {
                            opt_inputEle.value = ss_qbackup;
                        }
                    }
                }
            } else {
                if (ss_panic) {
                    alert("run ajax when key down");
                }
                ss_suggest(qnow);
            }
            break;
        case 38:
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == "hidden") {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc--;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = -1;
                    }
                    while (ss_loc < 0) {
                        ss_loc += sum;
                    }
                    var rows = tbl.getElementsByTagName("tr");
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);
                    if (suggestion.q) {
                        fo.q.value = suggestion.q;
                    } else {
                        fo.q.value = ss_qbackup;
                    }
                }
            } else {
                if (ss_panic) {
                    alert("run ajax when key up");
                }
                ss_suggest(qnow);
            }
            break;
        case 13:
        case 9:
            if (ss_isEmbeddedMode_()) {
                return;
            }
            var url = null;
            if (ss_processed(qnow) && ss_qbackup && ss_loc > - 1) {
                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                if (suggestion.u) {
                    url = suggestion.u;
                }
            }
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear();
            if (url) {
                window.location.href = url;
            }
            break;
        case 27:
            if (ss_qbackup) {
                fo.q.value = ss_qbackup;
                ss_qbackup = null;
            }
            ss_dismissed = true;
            ss_clear();
            break;
        case 37:
        case 39:
        case 16:
            break;
        default:
            ss_dismissed = false;
            if (fo.q.value == ss_qshown) {} else {
                if (ss_key_handling_queue) {
                    clearTimeout(ss_key_handling_queue);
                }
                ss_qbackup = null;
                ss_loc = -1;
                ss_waiting++;
                if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                    ss_debug.addWaitDebugLine(fo.q.value, "queue", ss_wait_millisec);
                }
                ss_key_handling_queue = setTimeout('ss_handleQuery("' + ss_escape(fo.q.value) + '", ' + ss_waiting + ")", ss_wait_millisec);
            }
            break;
    }
}

function ss_isEmbeddedMode_() {
    return window["GSA_isEmbeddedMode"] && window.GSA_isEmbeddedMode();
}

function ss_handleQuery(query, waiting1) {
    if (waiting1 != ss_waiting) {
        return;
    }
    ss_waiting = 0;
    if (query == "") {
        ss_clear();
    } else {
        if (!ss_processed(query)) {
            if (ss_panic) {
                alert("run ajax when key change");
            }
            ss_suggest(query);
        } else {
            ss_show(query);
        }
    }
}

function ss_removeNode_(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}

function ss_replaceNode_(newNode, oldNode) {
    var parentNode = oldNode.parentNode;
    if (parentNode) {
        parentNode.replaceChild(newNode, oldNode);
    }
}

function ss_initEmbedMode_(inputEle) {
    var suggestFormEle = document.getElementById(ss_form_element);
    if (!suggestFormEle && ss_isEmbeddedMode_()) {
        var embedModeFormEle = document.createElement("form");
        embedModeFormEle.id = "suggestform" + new Date().getTime();
        var formParamsEle = document.getElementById("gsaembedmodeformparams");
        var inputEles = formParamsEle.getElementsByTagName("INPUT");
        for (var i = 0; i < inputEles.length; i++) {
            embedModeFormEle.appendChild(inputEles[i].cloneNode(true));
        }
        ss_replaceNode_(embedModeFormEle, formParamsEle);
        var bodyEle = document.getElementsByTagName("BODY")[0];
        bodyEle.appendChild(embedModeFormEle);
        ss_form_element = embedModeFormEle.id;
        var suggestPopupTableEle = document.createElement("table");
        suggestPopupTableEle.border = "0";
        suggestPopupTableEle.cellPadding = "0";
        suggestPopupTableEle.cellSpacing = "0";
        suggestPopupTableEle.className = "ss-gac-m ss-embed-mode";
        suggestPopupTableEle.id = "sspop" + new Date().getTime();
        suggestPopupTableEle.style.visibility = "hidden";
        ss_popup_element = suggestPopupTableEle.id;
        inputEle.parentNode.insertBefore(suggestPopupTableEle, inputEle);
    }
}

function ss_sf() {
    if (!ss_isEmbeddedMode_()) {
        document.getElementById(ss_form_element).q.focus();
    }
    ss_dismissed = false;
}

function ss_clear(nofocus) {
    ss_qshown = null;
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.q.value : ss_qbackup;
    ss_hide(qnow);
    if (!nofocus) {
        ss_sf();
    }
}

function ss_hide(qry) {
    var tbl = document.getElementById(ss_popup_element);
    if (tbl.style.visibility == "visible") {
        if (ss_panic) {
            alert("close suggestion box");
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, "hide");
        }
        tbl.style.visibility = "hidden";
        tbl.setAttribute("aria-hidden", "true");
    }
}

function ss_show(qry) {
    var currentQry = document.getElementById(ss_form_element).q.value;
    if (currentQry != qry) {
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, "skip");
        }
        return;
    }
    var startTimeMs = new Date().getTime();
    if (ss_dismissed) {
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    if (!ss_processed(qry)) {
        return;
    }
    if (qry == "") {
        ss_hide(qry);
        return;
    }
    var g = ss_cached[qry] ? ss_cached[qry].g : null;
    var r = ss_cached[qry] ? ss_cached[qry].r : null;
    var disp = false;
    if (ss_use.g && g) {
        disp = true;
    }
    if (!disp) {
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    if (ss_painting) {
        if (ss_painting_queue) {
            clearTimeout(ss_painting_queue);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addWaitDebugLine(qry, "delay", ss_delay_millisec);
        }
        ss_painting_queue = setTimeout('ss_show("' + ss_escape(qry) + '")', ss_delay_millisec);
        return;
    } else {
        ss_painting = true;
    }
    var tbl = document.getElementById(ss_popup_element);
    for (var ri = tbl.rows.length - 1; ri > - 1; ri--) {
        tbl.deleteRow(ri);
    }
    var cnt = 0;
    var rCount = 0;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case "g":
                cnt += ss_showSuggestion(g, cnt, tbl, qry);
                rCount += ss_showRelatedSuggestion(r, rCount, tbl, qry);
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            break;
        }
    }
    if (cnt > 0) {
        var row = tbl.insertRow(-1);
        row.className = "ss-gac-e";
        var cls = document.createElement("td");
        cls.colSpan = 2;
        var clsTxt = document.createElement("span");
        clsTxt.onclick = function () {
            ss_qbackup = null;
            ss_clear();
            var query = document.getElementById(ss_form_element).q.value;
            if (!ss_processed(query)) {
                ss_dismissed = true;
                if (ss_panic) {
                    alert("run ajax when mouse close");
                }
                ss_suggest(query);
            }
        };

        cls.appendChild(clsTxt);
        row.appendChild(cls);
        tbl.style.visibility = "visible";
        tbl.setAttribute("aria-hidden", "false");
        ss_qshown = qry;
        if (ss_panic) {
            alert("open suggestion box for " + qry);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            var stopTimeMs = new Date().getTime();
            ss_debug.addShowDebugLine(qry, stopTimeMs - startTimeMs, ss_cached[qry], cnt);
        }
    } else {
        ss_hide(qry);
    }
    ss_painting = false;
}

function ss_showSuggestion(g, cnt, tbl, qry) {
    if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
        return 0;
    }
    if (g && g.length > 0) {
        lqry = qry.toLowerCase().replace(/\"/g, "");
        for (var i = 0; i < g.length; i++) {
            var row = tbl.insertRow(-1);
            row.onclick = ss_handleMouseC;
            row.onmousemove = ss_handleMouseM;
            row.className = SS_ROW_CLASS;
            var alt = document.createElement("td");
            if (g[i].q) {
                var txtNode = "<b>" + g[i].q.substr(0, lqry.length) + "</b>";
                if (g[i].q.length > lqry.length) {
                    txtNode += g[i].q.substring(lqry.length);
                }
                alt.innerHTML = txtNode;
            } else {
                alt.innerHTML = "<i>" + g[i].t + "</i>";
            }
            alt.className = "ss-gac-c";
            row.appendChild(alt);
            var clue = "";
            if (i == 0 && g.length == 1) {
                clue = ss_g_one_name_to_display;
            } else {
                if (i == 0) {
                    clue = ss_g_more_names_to_display;
                }
            }
            if (ss_max_to_display > 0 && cnt + i + 1 >= ss_max_to_display) {
                return i + 1;
            }
        }
        return g.length;
    }
    return 0;
}

function ss_showRelatedSuggestion(g, cnt, tbl, qry) {
    if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
        return 0;
    }
    if (g && g.length > 0) {
        var headRow = tbl.insertRow(-1);
        headRow.onclick = ss_handleMouseC;
        headRow.onmousemove = ss_handleMouseM;
        headRow.className = SS_ROW_CLASS;
        var headAlt = document.createElement("td");
        headAlt.innerHTML = '<div id="ss-gac-line"></div><div id="ss-gac-related">Related Suggestions</div>';
        headRow.appendChild(headAlt);
        lqry = qry.toLowerCase().replace(/\"/g, "");
        for (var i = 0; i < g.length; i++) {
            var row = tbl.insertRow(-1);
            row.onclick = ss_handleMouseC;
            row.onmousemove = ss_handleMouseM;
            row.className = SS_ROW_CLASS;
            var alt = document.createElement("td");
            if (g[i].q) {
                var txtNode = "<a href=" + g[i].u + ">" + g[i].q + "</a>";
                alt.innerHTML = txtNode;
            } else {
                alt.innerHTML = "<i>" + g[i].t + "</i>";
            }
            alt.className = "ss-gac-c";
            row.appendChild(alt);
            var clue = "";
            if (i == 0 && g.length == 1) {
                clue = ss_g_one_name_to_display;
            } else {
                if (i == 0) {
                    clue = ss_g_more_names_to_display;
                }
            }
            if (ss_max_to_display > 0 && cnt + i + 1 >= ss_max_to_display) {
                return i + 1;
            }
        }
        return g.length;
    }
    return 0;
}

function ss_handleMouseM() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName("tr");
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this && rows[ri].className != SS_ROW_SELECTED_CLASS) {
            rows[ri].className = SS_ROW_SELECTED_CLASS;
            if (!ss_qbackup) {
                ss_qbackup = fo.q.value;
            }
            ss_loc = ri;
            var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
            if (suggestion.q) {
                fo.q.value = suggestion.q;
            } else {
                fo.q.value = ss_qbackup;
            }
        } else {
            if (rows[ri] != this) {
                rows[ri].className = SS_ROW_CLASS;
            }
        }
    }
    ss_sf();
    return true;
}

function ss_handleMouseC() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName("tr");
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this) {
            if (!ss_qbackup) {
                ss_qbackup = fo.q.value;
            }
            ss_loc = ri;
            var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
            if (suggestion.q) {
                fo.q.value = suggestion.q;
                fo.submit();
            } else {
                fo.q.value = ss_qbackup;
                if (suggestion.u) {
                    window.location.href = suggestion.u;
                }
            }
            break;
        }
    }
}

function ss_countSuggestions(query) {
    var cnt = 0;
    for (var i = 0; i < ss_seq.length; i++) {
        switch (ss_seq[i]) {
            case "g":
                cnt += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            return ss_max_to_display;
        }
    }
    return cnt;
}

function ss_locateSuggestion(query, loc) {
    var cnt1 = 0;
    var cnt2 = 0;
    var type = null;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case "g":
                cnt2 += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (loc >= cnt1 && loc < cnt2) {
            switch (ss_seq[z]) {
                case "g":
                    var qV = ss_cached[query].g[loc - cnt1].q;
                    if (qV) {
                        return {
                            "q": qV
                        };

                    } else {
                        return {
                            "u": ss_cached[query].g[loc - cnt1].u
                        };

                    }
            }
            break;
        }
        cnt1 = cnt2;
    }
    return null;
}

function ss_escape(query) {
    return query.replace(/\\/g, "\\\\").replace(/\"/g, '\\"');
}

function ss_escapeDbg(query) {
    var escapedQuery = "";
    var ch = query.split("");
    for (var i = 0; i < ch.length; i++) {
        switch (ch[i]) {
            case "&":
                escapedQuery += "&amp;";
                break;
            case "<":
                escapedQuery += "&lt;";
                break;
            case ">":
                escapedQuery += "&gt;";
                break;
            default:
                escapedQuery += ch[i];
                break;
        }
    }
    return escapedQuery;
}

function ss_Debugger() {
    this.debugMode = false;
}
ss_Debugger.DEBUG_CONSOLE_ID = "ss_debug_console";
ss_Debugger.DEBUG_CONTENT_ID = "ss_debug_content";
ss_Debugger.DEBUG_TOGGLE_ID = "ss_debug_toggle";
ss_Debugger.prototype.getDebugMode = function () {
    return this.debugMode;
};

ss_Debugger.prototype.activateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = "block";
    } else {
        var dc = document.createElement("div");
        dc.id = ss_Debugger.DEBUG_CONSOLE_ID;
        dc.zIndex = 100;
        dc.className = "expanded";
        var title = document.createElement("h1");
        title.appendChild(document.createTextNode("GSA Suggest Debug Console"));
        title.style.display = "inline";
        dc.appendChild(title);
        var actn = document.createElement("div");
        actn.style.styleFloat = "right";
        actn.style.cssFloat = "right";
        var btn = document.createElement("button");
        btn.onclick = function (event) {
            var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
            if (debugContent) {
                for (var ri = debugContent.rows.length - 1; ri > 0; ri--) {
                    debugContent.deleteRow(ri);
                }
            }
        };

        btn.appendChild(document.createTextNode("Clear console"));
        actn.appendChild(btn);
        btn = document.createElement("button");
        btn.onclick = function (event) {
            ss_cached = [];
        };

        btn.appendChild(document.createTextNode("Clear cache"));
        actn.appendChild(btn);
        btn = document.createElement("button");
        btn.id = ss_Debugger.DEBUG_TOGGLE_ID;
        btn.onclick = function (event) {
            var debugConsole = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
            if (debugConsole) {
                var b = document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
                if (debugConsole.className.indexOf("expanded") != - 1) {
                    debugConsole.className = debugConsole.className.replace(/expanded/, "contracted");
                    b.innerHTML = "Maximize";
                } else {
                    debugConsole.className = debugConsole.className.replace(/contracted/, "expanded");
                    b.innerHTML = "Minimize";
                }
            }
        };

        btn.appendChild(document.createTextNode("Minimize"));
        actn.appendChild(btn);
        actn.style.display = "inline";
        dc.appendChild(actn);
        dc.appendChild(document.createElement("br"));
        var pane = document.createElement("table");
        pane.id = ss_Debugger.DEBUG_CONTENT_ID;
        var dhr = pane.insertRow(-1);
        var dhc = document.createElement("th");
        dhc.innerHTML = "Query";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "Type";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "Time";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "g";
        dhr.appendChild(dhc);
        dhc = document.createElement("th");
        dhc.innerHTML = "Total";
        dhr.appendChild(dhc);
        dc.appendChild(pane);
        document.body.appendChild(dc);
    }
    this.debugMode = true;
};

ss_Debugger.prototype.deactivateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = "none";
    }
    this.debugMode = false;
};

ss_Debugger.prototype.addRequestDebugLine = function (query, type, time, obj) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = type;
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = time + " ms";
        currentRow.appendChild(currentCell);
        switch (type) {
            case "suggest":
                currentCell = document.createElement("td");
                currentCell.className = "no";
                currentCell.innerHTML = (obj.g ? obj.g.length : 0);
                currentRow.appendChild(currentCell);
                currentCell = document.createElement("td");
                currentRow.appendChild(currentCell);
                break;
            default:
                currentCell = document.createElement("td");
                currentRow.appendChild(currentCell);
                currentCell = document.createElement("td");
                currentRow.appendChild(currentCell);
                break;
        }
    }
};

ss_Debugger.prototype.addShowDebugLine = function (query, time, o, total) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = "<i>show</i>";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = time + " ms";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = (o ? (o.g ? o.g.length : 0) : 0);
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = total;
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addHideDebugLine = function (query, type) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = "<i>" + type + "</i>";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = "0 ms";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addWaitDebugLine = function (query, type, time) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement("td");
        currentCell.innerHTML = "&lt;" + ss_escapeDbg(query) + "&gt;";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.innerHTML = "<i>" + type + "</i>";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentCell.className = "no";
        currentCell.innerHTML = time + " ms";
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
        currentCell = document.createElement("td");
        currentRow.appendChild(currentCell);
    }
};

var ss_use = {};

ss_use.g = ss_seq.indexOf("g") >= 0 ? true : false;
$(window).load(function () {
    var $inputField = $("#inputTopSearchField"),
    $searchButton = $(".register");
    $searchButton.attr("disabled", true);
    $inputField.keyup(function () {
        var trigger = false;
        $inputField.each(function () {
            if (!$(this).val()) {
                trigger = true;
            }
        });
        trigger ? $searchButton.attr("disabled", true) : $searchButton.removeAttr("disabled");
    });
});

function bool(b) {
    return new Boolean(b).toString();
}

function bothEnds(str, start, end) {
    if (typeof start == "undefined") {
        start = 60;
    }
    if (typeof end == "undefined") {
        end = 40;
    }
    var ret = "";
    if (str.length <= (start + end)) {
        return str;
    }
    return str.substr(0, start) + "...\n\n" + str.substr(str.length - end);
}

function debug(str) {
    console.log(str);
    $("#debug").append(str + "<br />\n").get(0).scrollTop += 100;
}
$("#debug").click(function () {
    console.log(this.scrollTop);
});

function describe(elem) {
    elem = $(elem).get(0);
    if (elem.tagName == "INPUT") {
        return elem.tagName + "[" + elem.type + "]." + elem.className;
    }
    ret = elem.tagName;
    if (elem.id != "") {
        ret += "#" + elem.id;
    }
    if (elem.className != "") {
        ret += "." + elem.className;
    }
    return ret;
}

function describe2(elem) {
    if (elem instanceof jQuery && !elem instanceof HTMLElement) {
        return "jQuery object with " + elem.length + " items";
    }
    if (elem.tagName == "INPUT") {
        return elem.tagName + "[" + elem.type + "]." + elem.className;
    }
    ret = elem.tagName;
    if (elem.tagName == "A") {
        ret += '"' + elem.href.split("/").pop() + '"';
    }
    if (elem.id != "") {
        ret += "#" + elem.id;
    }
    if (elem.className != "") {
        ret += "." + elem.className;
    }
    if (typeof elem.tabIndex != "undefined" && elem.tabIndex != - 100) {
        ret += " [" + elem.tabIndex + "]";
    }
    return ret;
}

function firstFew(str, num) {
    if (typeof num == "undefined") {
        num = 80;
    }
    var ret = "";
    if (str.length > num) {
        ret = "...";
    }
    ret = str.substr(0, num) + ret;
    return ret;
}

function frameClass(frame) {
    return $(frame).attr("class").replace(/\s*carouselframe\s*/i, "");
}

function getCid(elem) {
    elem = $(elem).get(0);
    if (elem.tagName.toUpperCase() == "BODY") {
        return "";
    }
    var clist = $(elem).data("cid");
    if (typeof clist == "undefined" || clist.search("undef") != - 1) {
        return getCid(elem.parentNode);
    }
    return clist;
}

function getData(el) {
    el = $(el);
    var ret = "";
    $.each(["cid", "ctid", "presentation"], function (i, val) {
        if (el.data(val)) {
            ret += val + ": " + el.data(val) + "; ";
        }
    });
    return ret.replace(/; $/, "");
}

function setVal(id, val) {
    var el = $("#" + id);
    if (!el.length) {
        el = $("input[type=radio][name=" + id + "][value=" + val + "]");
        $(el).attr("checked", "checked");
        return;
    }
    switch (el.get(0).type) {
        case "text":
            $(el).val(val);
            break;
        case "checkbox":
            if (val) {
                $(el).attr("checked", "checked");
            } else {
                $(el).removeAttr("checked");
            }
            break;
        default:
            console.log("I don't know what type this thing is.");
    }
}

function timestamp(fmt) {
    if (!fmt) {
        fmt = "hh:mm:ss";
    }
    return fmt.replace(/[A-Za-z]+/g, function (code) {
        var tmp;
        switch (code) {
            case "h":
                return new Date().getHours().toString();
                break;
            case "hh":
                tmp = new Date().getHours().toString();
                if (tmp.length < 2) {
                    tmp = "0" + tmp;
                }
                return tmp;
                break;
            case "mm":
                tmp = new Date().getMinutes().toString();
                if (tmp.length < 2) {
                    tmp = "0" + tmp;
                }
                return tmp;
                break;
            case "ss":
                tmp = new Date().getSeconds().toString();
                if (tmp.length < 2) {
                    tmp = "0" + tmp;
                }
                return tmp;
                break;
            case "YY":
                return new Date().getFullYear().toString().substr(-2);
                break;
            case "YYYY":
                return new Date().getFullYear().toString();
                break;
            case "foo":
                return new Date().getfoo().toString();
                break;
            case "foo":
                return new Date().getfoo().toString();
                break;
            case "foo":
                return new Date().getfoo().toString();
                break;
        }
    });
}
$(document).ready(function () {
    if (typeof window.WFonDocReady == "function") {
        window.WFonDocReady();
    }
    if ($("html").hasClass("lt-ie9")) {
        $("body").addClass("not_a_real_class").removeClass("not_a_real_class");
    }
    if (WF.Browser.supports.IE7mode) {
        $("a[href$=#]:not(.c16header a, .c58question a, .c65 li.wf-tab a, .c66filterTabs li.wf-tab a)").click(function () {
            window.location.href = this.href;
        });
    }
    if (window.location.hash && window.location.hash.length > 1) {
        WF.Utils.setDelayedScrollTo(window.location.hash);
    }
});
