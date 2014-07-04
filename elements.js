$(document).ready(function(){
	
	$('html, body, .main, .content,#content, #container,.singular #primary, #branding, #hgroup').css({
		'background': '#F4F3EB',
		'background-color': '#F4F3EB' 
	});
	$('*').css({
		'color': '#3D3936',
		'text-shadow': 'none',
		'background': '#F4F3EB',
		'background-color': '#F4F3EB'
	});

	$('.article').css({
		'font-size': '13px',
		'line-height': '22px'
	});
	$('#Banner img').css("background-color", "#555E66");
	$('a:hover').css("color","#F4F3EB");
	$('pre').css({ 
		'background': '#EBE9DC', 
		'border': 'none',
		'box-shadow': 'none'
	});

	$('blockquote').css({ 
		'background': 'none', 
		'color' : '#444',
		'border-left': '1px solid',
		'box-shadow': 'none'
	});

});

