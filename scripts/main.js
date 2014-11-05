/*jslint white:false */
/*globals console, document, jQuery, window, $,
    $JssorArrowNavigator$, $JssorBulletNavigator$, $JssorCaptionSlider$, $JssorEasing$, $JssorSlider$,
*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var jssor_slider1, jssor_slider2, jssor_slider3, sliders, W = window;

function loadjscssfile(filename, filetype) {
    var fileref;

    if (filetype === 'js') { //if filename is a external JavaScript file
        // alert('called');
        fileref = document.createElement('script');
        fileref.setAttribute('type', 'text/javascript');
        fileref.setAttribute('src', filename);
        console.warn('called');
    }
    else if (filetype === 'css') { //if filename is an external CSS file
        fileref = document.createElement('link');
        fileref.setAttribute('rel', 'stylesheet');
        fileref.setAttribute('type', 'text/css');
        fileref.setAttribute('href', filename);
    }
    if (typeof fileref !== 'undefined') {
        document.getElementsByTagName('head')[0].appendChild(fileref);
    }
}

jQuery(function ($) {

    var qscheck, slideIndex1, slideIndex2, slideIndex3;

    //Reference http://www.jssor.com/development/tip-make-responsive-slider.html

    function getParameterByName(name) {
        var regex, results;

        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        results = regex.exec(W.location.search);

        return (results == null) ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    qscheck = parseInt(getParameterByName('a'), 10);
    slideIndex1 = parseInt(getParameterByName('a') || '0', 10);
    slideIndex2 = parseInt(getParameterByName('b') || '0', 10);
    slideIndex3 = parseInt(getParameterByName('c') || '0', 10);

    if (qscheck >= 0) {
        loadjscssfile('css/shared.css', 'css');
    } else {
        loadjscssfile('css/create.css', 'css');
    }

    function makeOptions(x) {
        return $.extend({
            $StartIndex: 1,
            $FillMode: 2,                                                   //  [Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
            $AutoPlay: false,                                               //  [Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $DragOrientation: 1,                                            //  [Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0),

            $CaptionSliderOptions: {                                        //  [Optional] Options which specifies how to animate caption
                $Class: $JssorCaptionSlider$,                               //  [Required] Class to create instance to animate caption
                $CaptionTransitions: [],                                    //  [Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                $PlayInMode: 1,                                             //  [Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                $PlayOutMode: 3                                             //  [Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
            },

            $BulletNavigatorOptions: {                                      //  [Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$,                             //  [Required] Class to create navigator instance
                $ChanceToShow: 0,                                           //  [Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 1,                                             //  [Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1,                                                  //  [Optional] Steps to go for each navigation request, default value is 1
                $Lanes: 1,                                                  //  [Optional] Specify lanes to arrange items, default value is 1
                $SpacingX: 8,                                               //  [Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 8,                                               //  [Optional] Vertical space between each item in pixel, default value is 0
                $Orientation: 1                                             //  [Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
            },

            $ArrowNavigatorOptions: {                                       //  [Optional] Options to specify and enable arrow navigator or not
                $Class: $JssorArrowNavigator$,                              //  [Requried] Class to create arrow navigator instance
                $ChanceToShow: 2,                                           //  [Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 2,                                             //  [Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1                                                   //  [Optional] Steps to go for each navigation request, default value is 1
            }
        }, x || {});
    }

    // EXTEND jquery
    $.fn.idem = function () {
        this.each(function (i, e) {
            e.id = 'Random_' + (Math.random() * 1e9 | 0); // force an ID on it
        });
        return this;
    };

    sliders = $('.container').idem();
    console.warn(sliders);

    jssor_slider1 = new $JssorSlider$(sliders[0].id, makeOptions({$StartIndex: slideIndex1}));
    jssor_slider2 = new $JssorSlider$(sliders[1].id, makeOptions({$StartIndex: slideIndex2}));
    jssor_slider3 = new $JssorSlider$(sliders[2].id, makeOptions({$StartIndex: slideIndex3}));

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes

    function ScaleSlider() {
        var paddingWidth, minReserveWidth, parentElement, parentWidth, availableWidth, sliderWidth, clearFix;

        paddingWidth = 20; //                                                   reserve blank width for margin+padding: margin+padding-left (10) + margin+padding-right (10)
        minReserveWidth = 325; //                                               minimum width should reserve for text
        parentElement = jssor_slider2.$Elmt.parentNode;
        parentWidth = parentElement.clientWidth; //                             evaluate parent container width

        if (parentWidth) {
            availableWidth = parentWidth - paddingWidth; //                     exclude blank width
            sliderWidth = availableWidth * 0.5; //                              calculate slider width as 70% of available width
            sliderWidth = Math.min(sliderWidth, 851); //                        slider width is maximum 600
            sliderWidth = Math.max(sliderWidth, 200); //                        slider width is minimum 200
            clearFix = 'none';

            if (availableWidth - sliderWidth < minReserveWidth) { //            evaluate free width for text, if the width is less than minReserveWidth then fill parent container
                sliderWidth = availableWidth; //                                set slider width to available width
                sliderWidth = Math.max(sliderWidth, 200); //                    slider width is minimum 200
                clearFix = 'both';
            }

            $('#clearFixDiv').css('clear', clearFix); //                        clear fix for safari 3.1, chrome 3
            jssor_slider1.$ScaleWidth(sliderWidth);
            jssor_slider2.$ScaleWidth(sliderWidth);
            jssor_slider3.$ScaleWidth(sliderWidth);
        } else {
            W.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    if (!W.navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(W).on('resize orientationchange', ScaleSlider);
    }
    /* responsive code end */
});

function scramble() {
    var i;

    function rando() {
        return (Math.random() * 9 + 1) | 0;
    }

    for (i = 0; i < rando(); i++) {
        W.setTimeout($.fn.click.bind(sliders.eq(0).find('.right')), i * 99);
    }
    for (i = 0; i < rando(); i++) {
        W.setTimeout($.fn.click.bind(sliders.eq(1).find('.left')), i * 99);
    }
    for (i = 0; i < rando(); i++) {
        W.setTimeout($.fn.click.bind(sliders.eq(2).find('.right')), i * 99);
    }
}

function createShareLink() {
    var currentIndexes = [], shareLink, original, clone;

    //generate link based of current slides positions
    currentIndexes.push('?a=' + jssor_slider1.$CurrentIndex());
    currentIndexes.push('&b=' + jssor_slider2.$CurrentIndex());
    currentIndexes.push('&c=' + jssor_slider3.$CurrentIndex());
    shareLink = W.location.href + currentIndexes.join('');

    console.debug(shareLink);
    $('#Preview').show();

    //duplicate snowman div
    original = $('.snowmen')[0];
    clone = original.cloneNode(true); // 'deep' clone

    clone.id = 'Clone';
    $('#Preview').append(clone);
}

function sharePreview() {
    createShareLink();
}

function closePreview() {
    $('#Clone').remove();
    $('#Preview').hide();
}
