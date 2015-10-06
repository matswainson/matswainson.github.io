;(function(){

	$('.flex').jFlex({
		autoplay: true,
		highlightColor: '#3b808d',
		showArrows: true,
		theme: 'dark',
		titles: 'bottom'
	});

	var colorCodes = {
		'#36BB72': ['=', '/div', 'div', '/li', 'li ', '/ul', 'ul'],
		'#4099D3': ['&lt;', '&gt;', '"Slide 1"', '"Slide 2"', '"Slide 3"', '"flex"', '"slides"', "'.flex'"],
		'#E5A02E': ['$', 'class', 'data-title', 'true', "'#3b808d'", "'bottom'", "'dark'", '5000']
	};

	String.prototype.replaceAll = function(target, replacement) {
		return this.split(target).join(replacement);
	};

	$('code').each(function(){
		var html = $(this).html().toString();
		for (var color in colorCodes) {
			for (var i = 0; i < colorCodes[color].length; i++) {
				var code = colorCodes[color][i];
				html = html.replaceAll(code, '<span style="color: ' + color + '">' + code + '<\/span>');
			}
		}
		$(this).html(html);
	});

})();