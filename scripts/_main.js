/*jslint white:false */
/*globals document, jQuery, window,
    getParameterByName, makeOptions,
    $JssorEasing$, $JssorSlider$,
*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = W || window,
    C = C || W.console,
    Slides;

function getMode() {
    return parseInt(getParameterByName('m') || '-1', 10);
}

function reSource(eles) {
    C.warn(eles);
    $(eles).each(function (i, e) {
        var me = $(e);
        me.attr('src', me.data('src'));
    });
}

jQuery(function () {
    var mode = getMode();

    FastClick.attach(W.document.body);
    reSource($('[data-src]'));
    Slides.init(W.jQuery);

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
