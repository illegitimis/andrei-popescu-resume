$(
    function() {  
        // difference between current date and birhday
        var ms = Date.now() - Date.parse('22 May 1983 00:00:00 GMT')
        var s = Math.floor(ms / 1000);
        var m = Math.floor(s / 60);
        s = s % 60;
        var h = Math.floor(m / 60);
        m = m % 60;
        var d = Math.floor(h / 24);
        h = h % 24;
        var y = Math.floor(d / 365);
        d = d % 365;
        $('#birth').text(`${y}y ${d}d`);
    }
);       
        