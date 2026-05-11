!(function ($) {
    "use strict";

    // Initiate  <script type="text/javascript">
    $(document).ready(function () {
        // var json = localStorage.getItem('pac-resume');
        // var resume = JSON.parse(json);
        // console.log(resume);
        var typed = new Typed('.typing', {
            strings: window.resume.highlights,
            loop: true,
            typeSpeed: 26,
            backSpeed: 13, //back spacing faster
            smartBackspace: true
        });
    });

})(jQuery);