/*jslint white:false */
/*globals document, jQuery, window, $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = W || window,
    C = C || W.console;

function getParameterByName(name) {
    var regex, results;

    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    results = regex.exec(W.location.search);

    return (results === null) ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function loadjscssfile(filename, filetype) {
    var fileref;

    if (filetype === 'js') {
        fileref = document.createElement('script');
        fileref.setAttribute('type', 'text/javascript');
        fileref.setAttribute('src', filename);
        C.warn('called');
    }
    else if (filetype === 'css') {
        fileref = document.createElement('link');
        fileref.setAttribute('rel', 'stylesheet');
        fileref.setAttribute('type', 'text/css');
        fileref.setAttribute('href', filename);
    }
    if (typeof fileref !== 'undefined') {
        document.getElementsByTagName('head')[0].appendChild(fileref);
    }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
