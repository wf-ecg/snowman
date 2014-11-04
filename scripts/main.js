/*jslint white:false */
/*globals console, document, jQuery, location, navigator, window, $,
    $JssorArrowNavigator$, $JssorBulletNavigator$, $JssorCaptionSlider$, $JssorEasing$, $JssorSlider$,
*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function loadjscssfile(filename, filetype) {
    var fileref;

    if (filetype == "js") { //if filename is a external JavaScript file
        // alert('called');
        fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
        console.warn('called');
    }
    else if (filetype == "css") { //if filename is an external CSS file
        fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

jQuery(document).ready(function ($) {
    //Reference http://www.jssor.com/development/tip-make-responsive-slider.html

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var qscheck = parseInt(getParameterByName("a"), 10);
    var slideIndex1 = parseInt(getParameterByName("a") || "0", 10);
    var slideIndex2 = parseInt(getParameterByName("b") || "0", 10);
    var slideIndex3 = parseInt(getParameterByName("c") || "0", 10);

    if (qscheck>=0) {
        loadjscssfile("css/shared.css", "css");
    } else {
        loadjscssfile("css/create.css", "css");
    }


    var _CaptionTransitions = [];
    _CaptionTransitions["CLIP|L"] = {
        $Duration: 600,
        $Clip: 1,
        $Easing: $JssorEasing$.$EaseInOutCubic
    };
    _CaptionTransitions["RTT|10"] = {
        $Duration: 600,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };
_CaptionTransitions["ZMF|10"] = {
    $Duration: 600,
    $Zoom: 11,
    $Easing: {
        $Zoom: $JssorEasing$.$EaseInExpo,
        $Opacity: $JssorEasing$.$EaseLinear
    },
    $Opacity: 2
};
_CaptionTransitions["FLTTR|R"] = {
    $Duration: 600,
    x: -0.2,
    y: -0.1,
    $Easing: {
        $Left: $JssorEasing$.$EaseLinear,
        $Top: $JssorEasing$.$EaseInWave
    },
    $Opacity: 2,
    $Round: {
        $Top: 1.3
    }
};

function makeOptions() {
    return {
        $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0),

        $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
            $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
            $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
            $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
            $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
        },

        $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
            $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
            $ChanceToShow: 0,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
            $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
            $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
            $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
            $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
        },

        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
    };
}
var options1 = makeOptions();
var options2 = makeOptions();
var options3 = makeOptions();


window.jssor_slider1 = new $JssorSlider$("slider1_container", options1);
    window.jssor_slider2 = new $JssorSlider$("slider2_container", options2);
    window.jssor_slider3 = new $JssorSlider$("slider3_container", options3);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {

        //reserve blank width for margin+padding: margin+padding-left (10) + margin+padding-right (10)
        var paddingWidth = 20;

        //minimum width should reserve for text
        var minReserveWidth = 325;

        var parentElement = jssor_slider2.$Elmt.parentNode;

        //evaluate parent container width
        var parentWidth = parentElement.clientWidth;

        if (parentWidth) {

            //exclude blank width
            var availableWidth = parentWidth - paddingWidth;

            //calculate slider width as 70% of available width
            var sliderWidth = availableWidth * 0.5;

            //slider width is maximum 600
            sliderWidth = Math.min(sliderWidth, 851);

            //slider width is minimum 200
            sliderWidth = Math.max(sliderWidth, 200);
            var clearFix = "none";

            //evaluate free width for text, if the width is less than minReserveWidth then fill parent container
            if (availableWidth - sliderWidth < minReserveWidth) {

                //set slider width to available width
                sliderWidth = availableWidth;

                //slider width is minimum 200
                sliderWidth = Math.max(sliderWidth, 200);

                clearFix = "both";
            }

            //clear fix for safari 3.1, chrome 3
            $('#clearFixDiv').css('clear', clearFix);

            jssor_slider1.$ScaleWidth(sliderWidth);
            jssor_slider2.$ScaleWidth(sliderWidth);
            jssor_slider3.$ScaleWidth(sliderWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }

//if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
//    $(window).bind("orientationchange", ScaleSlider);
//}
//responsive code end

});

function scramble() {
    var rand, i;

    rand = Math.random() * 9 + 1;

    for (i = 0; i < rand; i++) {
        window.setTimeout($.fn.click.bind($("#btnRight1")), i * 99);
    }
    for (i = 0; i < rand; i++) {
        window.setTimeout($.fn.click.bind($("#btnLeft2")), i * 99);
    }
    for (i = 0; i < rand; i++) {
        window.setTimeout($.fn.click.bind($("#btnRight3")), i * 99);
    }
}

function createShareLink() {
    var currentSlideIndex1, currentSlideIndex2, currentSlideIndex3, shareLink,
    original, destination, clone;

    //generate link based of current slides positions
    currentSlideIndex1 = jssor_slider1.$CurrentIndex();
    currentSlideIndex2 = jssor_slider2.$CurrentIndex();
    currentSlideIndex3 = jssor_slider3.$CurrentIndex();
    shareLink = window.location.href + "?a=" + currentSlideIndex1 + "&b=" + currentSlideIndex2 + "&c=" + currentSlideIndex3;

    console.debug(shareLink);
    $("#previewDiv").show();
    $("#printCorners").show();

    //duplicate snowman div
    original = document.getElementById('snowman');
    clone = original.cloneNode(true); // "deep" clone

    clone.id = "snowman1";
    $("#previewDiv").append(clone);
}

function closePreview() {
    $("#snowman1").remove();
    $("#previewDiv").hide();
    $("#printCorners").hide();
}
