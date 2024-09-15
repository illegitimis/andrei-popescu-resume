 $(document).ready(function () {

            //syntax highlighter
            hljs.tabReplace = '    ';
            hljs.initHighlightingOnLoad();

            $.fn.slideFadeToggle = function (speed, easing, callback) {
                return this.animate({ opacity: 'toggle', height: 'toggle' }, speed, easing, callback);
            };

            //collapsible management
            $('.collapsible').collapsible({
                defaultOpen: 'section1',
                cookieName: 'nav',
                speed: 'slow',
                animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
                    elem.next().slideFadeToggle(opts.speed);
                },
                animateClose: function (elem, opts) { //replace the standard slideDown with custom function
                    elem.next().slideFadeToggle(opts.speed);
                },
                loadOpen: function (elem) { //replace the standard open state with custom function
                    elem.next().show();
                },
                loadClose: function (elem, opts) { //replace the close state with custom function
                    elem.next().hide();
                }
            });
            $('.page_collapsible').collapsible({
                defaultOpen: 'body_section1',
                cookieName: 'body2',
                speed: 'slow',
                animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
                    elem.next().slideFadeToggle(opts.speed);
                },
                animateClose: function (elem, opts) { //replace the standard slideDown with custom function
                    elem.next().slideFadeToggle(opts.speed);
                },
                loadOpen: function (elem) { //replace the standard open state with custom function
                    elem.next().show();
                },
                loadClose: function (elem, opts) { //replace the close state with custom function
                    elem.next().hide();
                }

            });

            //assign open/close all to functions
            function openAll() {
                $('.page_collapsible').collapsible('openAll');
            }
            function closeAll() {
                $('.page_collapsible').collapsible('closeAll');
            }

            //listen for close/open all
            $('#closeAll').click(function (event) {
                event.preventDefault();
                closeAll();

            });
            $('#openAll').click(function (event) {
                event.preventDefault();
                openAll();
            });

        });