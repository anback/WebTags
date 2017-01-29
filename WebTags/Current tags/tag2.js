(function() {
    window['DRTB'] = window['DRTB'] || {};
    function drtb() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = (('https:' === document.location.protocol) ? 'https' : 'http') + '://storage.googleapis.com/mopedo-web/drtb.min.js';
        var e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(s, e);
    }
    window.attachEvent ? window.attachEvent('onload', drtb) : window.addEventListener('load', drtb, false);
}());

DRTB.callback = function(userId){
    // When cookie matching is completed, this callback function
    // will be invoked with the Mopedo userId as argument. Add 
    // additional logic here (external calls etc.).
}
