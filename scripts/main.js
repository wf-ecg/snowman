/*jslint white:false */
/*globals document, jQuery, window,
    getParameterByName, loadjscssfile, makeOptions,
    $JssorEasing$,
    $JssorSlider$,
*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = W || window,
    C = C || W.console,
    Slides;

Slides = {
    $: '.slider',
    A: null,
    B: null,
    C: null,
    div: '.snowmen',
    preview: '#Preview',
};

Slides.init = function ($) {
    var self = this,
        div = $(self.div)[0],
        preview$ = $(self.preview);

    preview$.on('mouseup', function (evt) {
        C.warn(evt);
        if (evt.target === preview$[0]) {
            evt.stopImmediatePropagation();
            $('.nav .close').click();
        }
    });

    self.$ = $(self.$).idem();
    self.ia = parseInt(getParameterByName('a') || '0', 10);
    self.ib = parseInt(getParameterByName('b') || '0', 10);
    self.ic = parseInt(getParameterByName('c') || '0', 10);

    if (self.ia || self.ib || self.ic) {
        loadjscssfile('css/shared.css', 'css');
    } else {
        loadjscssfile('css/create.css', 'css');
    }

    self.A = new $JssorSlider$(self.$[0].id, makeOptions({$StartIndex: self.ia}));
    self.B = new $JssorSlider$(self.$[1].id, makeOptions({$StartIndex: self.ib}));
    self.C = new $JssorSlider$(self.$[2].id, makeOptions({$StartIndex: self.ic}));

    // Reference http://www.jssor.com/development/tip-make-responsive-slider.html
    //  responsive code begin
    //  you can remove responsive code if you don't want the slider scales while window resizes

    function ScaleSlider() {
        var paddingWidth, minReserveWidth, parentElement, parentWidth, availableWidth, sliderWidth, clearFix;

        paddingWidth = 20; //                                                   reserve blank width for margin+padding: margin+padding-left (10) + margin+padding-right (10)
        minReserveWidth = 325; //                                               minimum width should reserve for text
        parentElement = self.B.$Elmt.parentNode;
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
            self.A.$ScaleWidth(sliderWidth);
            self.B.$ScaleWidth(sliderWidth);
            self.C.$ScaleWidth(sliderWidth);
        } else {
            W.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    if (!W.navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(W).on('resize orientationchange', ScaleSlider);
    }
    /* responsive code end */

    self.scramble = function () {
        var i;

        function rando() {
            return (Math.random() * 9 + 1) | 0;
        }

        for (i = 0; i < rando(); i++) {
            W.setTimeout($.fn.click.bind(self.$.eq(0).find('.right')), i * 99);
        }
        for (i = 0; i < rando(); i++) {
            W.setTimeout($.fn.click.bind(self.$.eq(1).find('.left')), i * 99);
        }
        for (i = 0; i < rando(); i++) {
            W.setTimeout($.fn.click.bind(self.$.eq(2).find('.right')), i * 99);
        }
        $('.button.preview').hide().fadeIn(3333);
    };

    function readIndexes() {
        self.ia = self.A.$CurrentIndex();
        self.ib = self.B.$CurrentIndex();
        self.ic = self.C.$CurrentIndex();
    }

    self.makeLink = function () {
        var currentIndexes = []; // generate link based of current slides positions

        readIndexes();
        currentIndexes.push('?a=' + self.ia);
        currentIndexes.push('&b=' + self.ib);
        currentIndexes.push('&c=' + self.ic);
        return '' + W.location.href + currentIndexes.join('');
    };

    function makeClone() {
        var clone;

        clone = div.cloneNode(true); // duplicate snowman
        $(clone).append($('.corners').clone());
        clone.id = 'Clone';

        preview$.append(clone).show();

        W.alert(self.makeLink());
    }

    self.openPreview = function () {
        W.scrollTo(1,1);

        if (!$('#Clone').length) {
            makeClone();
        }
    };

    self.closePreview = function () {
        $('#Clone').remove();
        preview$.hide();
    };
};

jQuery(function () {
    Slides.init(jQuery);
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
