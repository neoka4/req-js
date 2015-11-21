$.fn.alpha = function(phrase) {
    return this.append('<p>jQuery plugin "jquery.alpha" (not ADM module) is loaded' + (phrase ? phrase : '') + '</p>');
};