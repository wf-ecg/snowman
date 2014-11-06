/*jslint white:false */
/*globals document, jQuery, window,
    $JssorArrowNavigator$,
    $JssorBulletNavigator$,
    $JssorCaptionSlider$,
 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = W || window,
    C = C || W.console;

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// EXTEND jquery
jQuery.fn.idem = function () {
    this.each(function (i, e) {
        e.id = 'Random_' + (Math.random() * 1e9 | 0); // force an ID on it
    });
    return this;
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// Project Independant

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
// Project Specific

function makeOptions(x) {
    return jQuery.extend({
        $StartIndex: 0,
        $FillMode: 0,                                                   //  [Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
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
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */