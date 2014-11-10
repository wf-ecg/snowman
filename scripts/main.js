/*jslint white:false */
/*globals document, jQuery, window,
    getParameterByName, makeOptions,
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

    preview$.on('mousedown', function (evt) {
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

    self.A = new $JssorSlider$(self.$[0].id, makeOptions({$StartIndex: self.ia}));
    self.B = new $JssorSlider$(self.$[1].id, makeOptions({$StartIndex: self.ib}));
    self.C = new $JssorSlider$(self.$[2].id, makeOptions({$StartIndex: self.ic}));

    // Reference http://www.jssor.com/development/tip-make-responsive-slider.html
    //  responsive code begin
    //  you can remove responsive code if you don't want the slider scales while window resizes

    function scaleSlider() {
        var paddingWidth, minReserveWidth, parentElement, parentWidth, availableWidth, sliderWidth;

        paddingWidth = 0; //                                                    reserve blank width for margin+padding: margin+padding-left (10) + margin+padding-right (10)
        minReserveWidth = 0; //                                                 minimum width should reserve for text
        parentElement = self.B.$Elmt.parentNode;
        parentWidth = parentElement.clientWidth; //                             evaluate parent container width

        if (parentWidth) {
            availableWidth = parentWidth - paddingWidth; //                     exclude blank width
            sliderWidth = availableWidth * 1; //                                calculate slider width as 100% of available width
            sliderWidth = Math.min(sliderWidth, 600); //                        slider width is maximum 600
            sliderWidth = Math.max(sliderWidth, 600); //                        slider width is minimum 200

            if (availableWidth - sliderWidth < minReserveWidth) { //            evaluate free width for text, if the width is less than minReserveWidth then fill parent container
                sliderWidth = availableWidth; //                                set slider width to available width
                sliderWidth = Math.max(sliderWidth, 200); //                    slider width is minimum 200
            }

            self.A.$ScaleWidth(sliderWidth);
            self.B.$ScaleWidth(sliderWidth);
            self.C.$ScaleWidth(sliderWidth);
        } else {
            W.setTimeout(scaleSlider, 30);
        }
    }

    scaleSlider();

    if (!W.navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(W).on('resize orientationchange', scaleSlider);
    }
    /* responsive code end */

    function disableBtnForSecs(sel, sec) {
        var btn, url;

        btn = $(sel);
        url = btn.attr('href');

        btn.fadeTo(sec * 99, 0.5);
        btn.attr('href', 'javascript:void(0)');

        _.delay(function () {
            btn.attr('href', url);
            btn.fadeTo(sec * 9, 1);
        }, sec * 999);
    }

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
        disableBtnForSecs('.button.preview', 1);
        disableBtnForSecs('.button.scramble', 1);
    };

    function readIndexes() {
        self.ia = self.A.$CurrentIndex();
        self.ib = self.B.$CurrentIndex();
        self.ic = self.C.$CurrentIndex();
    }

    self.makeLink = function (mode) {
        var currentIndexes = []; // generate link based of current slides positions
        var href = W.location.href.replace(/\#.*/, ''); // clear query
        var stub = '';
        readIndexes();
        currentIndexes.push('#a' + self.ia);
        currentIndexes.push('+b' + self.ib);
        currentIndexes.push('+c' + self.ic);

        stub = currentIndexes.join('');
        href += stub;
        $('#OG_url').attr('content', href);
        W.location.hash = stub + (mode ? '+m' + mode : '');

        return href;
    };

    function makeClone() {
        var clone = $('#Clone');

        if (!clone.length) {
            clone = $(div).clone(); // duplicate snowman

            clone.attr('id', 'Clone') //
            .css('width', Slides.$.eq(0).width()) // hack to match width of container
            .append($('.corners, .splash').clone()) //
            ;
            clone.find('.splash') //
            .css('position', 'absolute') //
            .attr('title', 'Drag to position / Click to fade') //
            .draggable() // { containment: clone.find('.corners') }
            .click(function () {
                $(this).animate({opacity: '-=0.1'});//remove();
            });
        }
        preview$.append(clone);
    }

    self.autoPreview = function () {
        if (self.checkPreview()) {
            self.openPreview();
        }
    };

    self.checkPreview = function () {
        return (W.location.hash === '#preview');
    };

    self.openPreview = function () {
        W.scrollTo(1, 1);
        C.warn(self.makeLink(getMode()));

        preview$.fadeIn();
        _.delay(function () {
            makeClone();
        }, 333);
    };

    self.closePreview = function () {
        $('#Clone').remove();
        preview$.fadeOut();
    };
};

function getMode() {
    return parseInt(getParameterByName('m') || '-1', 10);
}

jQuery(function () {
    var mode = getMode();

    Slides.init(jQuery);

    $('.logo').click(function () {
        //$('html').toggleClass('debug');
    });

    $('#Copy').children().hide();
    // show sections
    $('.greeting, .closing').show();

    if (mode > 0) {
        $('.create').show();
        $('.shared').hide();

        if (mode === 2) {
            $('.charity').show();
        }
    } else {
        $('.shared').show();
        $('.create, .arrow').remove();
    }
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
