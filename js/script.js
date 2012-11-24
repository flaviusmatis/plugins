var $plugins = $('#plugins'),
	defaultContent = "default.html",
	delayAction = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();

function searchPlugins(keyword){
	delayAction(function(){
		if (keyword) {
			var items = [];
			$.each(plugins, function(index, value){
				var found = false;
				var str = value.name + value.tag;
				$.each(keyword.split(' '), function(keyIndex, keyValue){
					if (keyIndex > 0) {
						found = found && (str.toLowerCase().indexOf(keyValue.toLowerCase()) > -1);
					} else {
						found = found || (str.toLowerCase().indexOf(keyValue.toLowerCase()) > -1);
					}
				});
				if (found) {
					items.push(value);
				}
			});
			$plugins.html($('#category-tmpl').tmpl({items: items, category: "Search results"}));
		} else {
			resetView();
		}
	}, 300);
}

function resetView(){
	$plugins.html($('#cateogories-tmpl').tmpl(categories));
	$('[name=search]').val("");
}

function changeIframeContent(url){
	$('iframe').prop('src', url);
	$plugins.find('[data-url="' + url + '"]').addClass('selected').siblings().removeClass('selected');
	$.each(plugins, function(index, value){
		if (value.url === url) {
			value.selected = "selected";
		} else {
			value.selected = "";
		}
	});
}

function openCategory(tag){
	$plugins.find('[data-tag=' + tag + ']').trigger('click');
}

$plugins.on('click', 'li', function(){
	if (!$(this).hasClass('selected')) {
		var url = $(this).data('url');
		changeIframeContent(url);
	}
});

$plugins.on('click', 'h2', function(){
	if ($(this).hasClass('selected')) {
		resetView();
	} else {
		var tag = $(this).data('tag');
		var name = $(this).data('name');
		var items = [];
		$.each(plugins, function(index, value){
			if (value.tag === tag) {
				items.push(value);
			}
		});
		$plugins.html($('#category-tmpl').tmpl({items: items, category: name}));
	}
});

$('[name=search]').keyup(function(){
	searchPlugins($.trim($(this).val()));
});

(function(){
	plugins.sort(function(a, b){
		var nameA = a.name.toLowerCase();
		var nameB = b.name.toLowerCase();
		return ((nameA < nameB) ? -1 : ((nameA > nameB) ? 1 : 0));
	});

	if ($('iframe').prop('src') !== defaultContent) {
		changeIframeContent(defaultContent);
	}

	resetView();
})();