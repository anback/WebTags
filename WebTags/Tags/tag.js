(function() {
    window['DRTB'] = window['DRTB'] || {};
    function drtb() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = (('https:' === document.location.protocol) ? 'https' : 'http') + '://s3.eu-central-1.amazonaws.com/cc-drtb/drtb.min.js';
        var e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(s, e);
    }
    window.attachEvent ? window.attachEvent('onload', drtb) : window.addEventListener('load', drtb, false);
}());

DRTB.seat = '';
DRTB.info = {}

/*
Add your Mopedo seat id to the DRTB.seat field.

Add fields to the DRTB.info-object to forward information from the
site visit to your DSP, where the visit information is stored. A 
unique id for the visitor and the URL of the page is always included, 
but if you want to keep additional information, put it in this object. 

Example:

DRTB.info = {
	name: "John Doe",
	time: new Date().toString(),
	internalId: "xyz"
}

All fields in the DRTB.info object are converted to strings.
*/