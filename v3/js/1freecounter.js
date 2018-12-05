// <!-- 1FreeCounter.com code -->

	// var data = '&r=' + escape(document.referrer)
	// + '&n=' + escape(navigator.userAgent)
	// + '&p=' + escape(navigator.userAgent)
	// + '&g=' + escape(document.location.href);

	// if (navigator.userAgent.substring(0,1)>'3')
	// data = data + '&sd=' + screen.colorDepth + '&sw=' + escape(screen.width+'x'+screen.height);

	// document.write('<a href="http://www.1freecounter.com/stats.php?i=120892" target=\"_blank\" >');
	// document.write('<img alt="Free Counter" border=0 hspace=0 '+'vspace=0 src="http://www.1freecounter.com/counter.php?i=120892' + data + '">');
	// document.write('</a>');

$(
 function () {   

	var uriBase = 'http://www.1freecounter.com/stats.php?i=120892';
	$('#stats').attr('href', uriBase);
	
	var data = uriBase + '&r=' + escape(document.referrer)
		+ '&n=' + escape(navigator.userAgent)
		+ '&p=' + escape(navigator.userAgent)
		+ '&g=' + escape(document.location.href);

	if (navigator.userAgent.substring(0,1)>'3')
		data = data + '&sd=' + screen.colorDepth + '&sw=' + escape(screen.width+'x'+screen.height);
	
	$('#stats').append($('<img>', {
		id:'statsImg', 
		src: data,
		alt: 'Free Counter', 
		border: 0,
		hspace: 0, vspace: 0,
		class: 'max16'
	} ));

	
 }
);


