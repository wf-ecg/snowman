/*jslint white:false */
/*global require, window, _ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = (W && W.window || window),
    C = (W.C || W.console || {});

W.SHIET = {};
W.debug = Number(new Date('2015/12/01') > new Date());

require.config({
    baseUrl: 'scripts',
    paths: {
        lr: 'http://localhost:7325/livereload.js?snipver=1',
        jquery: '/lib/jquery/1.8.2/jquery',
        lodash: '/lib/underscore/js-1.4.4/lodash.underscore',
        modern: '/lib/modernizr/2.6.2/modernizr',
        //
        console: '../vendor/ecg/console',
        utils: '../vendor/ecg/utils',
        //
        jqxtn: 'libs/jq-xtn',
        xtn: 'libs/drt-xtn',
        //
        jssor: '../vendor/jssor/jssor',
        jssors: '../vendor/jssor/jssor.slider',
        fastclick: '../vendor/misc/fastclick',
    },
});

require(['modern', 'console', 'lodash', 'utils'], function () {
    try {
        W.SHIET.init();

        if (W.SHIET.trident) { // debug IE less
            W.debug--;
        }
        if (W.location.hostname === 'localhost') { // debug local more
            if (W.debug > 0) {
                $('html').addClass('debug');
            }
            W.debug++;
        }
        if (W.debug > 1) { // any debug should attempt livereload
            require(['lr']);
            C.warn('LiveReloading');
        }
    } catch (err) {
        C.error('config', err);
    }

    /// CUSTOM
    require(['jssor', 'jssors', '_main'], function () {

        _.delay(function () {
            if (W.debug < 0) {
                require(['stats'], function (stats) {
                    stats.init('HOLI-SNOW');
                });
            }
        }, 1e3);
    });
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
