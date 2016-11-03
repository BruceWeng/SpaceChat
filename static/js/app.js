var Background = require('./background.js');
var $ = require('jQuery');
(function($, win, background) {

    function render() {

        background.render();

        //-- http://css-tricks.com/using-requestanimationframe/
        //-- Runs at 60 frames per second
        requestAnimationFrame(render);
    }

    $(win).ready(function() {
        $(win).scroll(function() {
            background.update();
        });
        background.init($('#background'));
        render();
    });

  })($, window, Background);
