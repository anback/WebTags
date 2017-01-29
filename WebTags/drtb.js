var DRTB = DRTB || {};
(function() {
    DRTB.load = function(url) { new Image().src = url; }
    var script = document.createElement("script");
    script.id = "drtb_cb_sc";
    script.type = "text/javascript";
    script.src = "http://x.mopedo-drtb.com/sync?";
    document.body.appendChild(script);
}());