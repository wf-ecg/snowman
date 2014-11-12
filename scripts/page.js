/*jslint white:false */
/*globals document, jQuery, window,
    Help, $JssorEasing$, $JssorSlider$,
*/
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W, C, Page;

W = W || window;
C = C || W.console;
Page = {
    getMode: Function,
    reSource: Function,
};

Page.getMode = function () {
    return parseInt(Help.getParameterByName('m') || '-1', 10);
};

Page.reSource = function (eles) {
    C.warn(eles);
    $(eles).each(function (i, e) {
        var me = $(e);
        me.attr('src', me.data('src'));
    });
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
