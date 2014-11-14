/*jslint white:false */
/*globals document, jQuery, window,
    Help, Page, Slides
    $JssorEasing$, $JssorSlider$,
*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W, C;

W = W || window;
C = C || W.console;

jQuery(function () {
    var mode = Page.getMode();
    mode = mode > 0 ? mode : 0;
    $('body').addClass('mode' + mode);

    FastClick.attach(W.document.body);
    Page.reSource($('[data-src]'));
    Slides.init(W.jQuery);

    $('.logo').click(function () {
        $('body').toggleClass('wells wystar');
    });

    $('#Copy').find('.create, .shared, .charity').hide();
    // show sections
    $('.greeting').show();

    $('a.closeLink').first().click(function (e) {
        Slides.closePreview();
        e.preventDefault();
    });

    if (mode > 0) {
        $('.create, .closing').show();
        $('.shared').hide();

        if (mode === 2) {
            $('.charity').show();
        }
    } else {
        $('.shared').show();
        $('.create, .arrow').remove();
    }
    Page.reset(function () {
        Slides.makeLink(false);
    });
});
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
