$('#featured').append(
	$('#featured-tmpl').tmpl({items: parent.window.plugins})
).on('click', 'a', function(){
	parent.window.openCategory($(this).data('tag'));
	parent.window.changeIframeContent($(this).data('url'));
});