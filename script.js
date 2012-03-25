var plugins = [
	{
		category: "Carousel & Slider",
		items: [
			{
				name: "Roundabout for jQuery by Fred LeBlanc",
				url: "http://fredhq.com/projects/roundabout/"
			},
			{
				name: "Presentation Cycle",
				url: "http://www.gayadesign.com/scripts/presentationCycle/index.php"
			},
			{
				name: "Slides - a slideshow plugin for jQuery",
				url: "http://slidesjs.com/"
			},
			{
				name: "Orbit: jQuery Image Slider Plugin from ZURB",
				url: "http://www.zurb.com/playground/jquery_image_slider_plugin"
			},
			{
				name: "Beautiful Background Image Navigation with jQuery",
				url: "http://tympanus.net/codrops/2010/05/05/beautiful-background-image-navigation-with-jquery/"
			},
			{
				name: "jQuery Timelinr",
				url: "http://www.csslab.cl/2011/08/18/jquery-timelinr/"
			},
			{
				name: "deck.js &raquo; Modern HTML Presentations",
				url: "http://imakewebthings.com/deck.js/"
			},
			{
				name: "jQuery HTML5 Fullscreen Slideshow / Gallery",
				url: "http://eikes.github.com/jquery.fullscreen.js/"
			},
			{
				name: "Camera | a free jQuery slideshow by Pixedelic",
				url: "http://www.pixedelic.com/plugins/camera/"
			},
			{
				name: "Flux Slider &#0187; Hardware accelerated image transitions using CSS3",
				url: "http://www.joelambert.co.uk/flux/"
			}
		]
	},
	{
		category: "Maps",
		items: [
			{
				name: "bMap - jQuery Plugin",
				url: "http://www.blocsoft.com/bmap/"
			},
			{
				name: "Leaflet",
				url: "http://leaflet.cloudmade.com/"
			},
			{
				name: "jQuery Automatic Geocoder",
				url: "http://tristandunn.com/projects/jquery-auto-geocoder/"
			}
		]
	},
	{
		category: "Templates",
		items: [
			{
				name: "Hogan.js - JavaScript templating from Twitter.",
				url: "http://twitter.github.com/hogan.js/"
			},
			{
				name: "Tempo - Tiny JSON rendering engine",
				url: "http://twigkit.github.com/tempo/"
			},
			{
				name: "Handlebars.js - Minimal Templating on Steroids",
				url: "http://handlebarsjs.com/"
			}
		]
	},
	{
		category: "Scrolling",
		items: [
			{
				name: "JScrollie, and Why Javascript Scrollbars Suck",
				url: "http://joevennix.com/2011/04/12/jScrollie-And-Why-Javascript-Scrollbars-Suck.html"
			},
			{
				name: "jScrollPane - cross browser styleable scrollbars",
				url: "http://jscrollpane.kelvinluck.com/"
			},
			{
				name: "jQuery custom scrollbar",
				url: "http://manos.malihu.gr/tuts/jquery_custom_scrollbar.html"
			},
			{
				name: "Contained Sticky Scroll",
				url: "http://blog.echoenduring.com/wp-content/uploads/demos/echo_ContainedStickyScroll/"
			},
			{
				name: "Overscroll",
				url: "http://www.azoffdesign.com/overscroll"
			},
			{
				name: "nanoScroller.js",
				url: "http://jamesflorentino.com/jquery.nanoscroller/"
			},
			{
				name: "jQuery Smooth Scrolling Plugin",
				url: "http://pagescroller.com/"
			}
		]
	},
	{
		category: "Date",
		items: [
			{
				name: "Moment.js - A lightweight javascript date library",
				url: "http://momentjs.com/"
			},
			{
				name: "XDate - A Modern JavaScript Date Library",
				url: "http://arshaw.com/xdate/"
			},
			{
				name: "jQuery timepicker plugin inspired by Google Calendar",
				url: "http://jonthornton.github.com/jquery-timepicker/"
			}
		]
	},
	{
		category: "URL",
		items: [
			{
				name: "URI.js",
				url: "http://medialize.github.com/URI.js/"
			},
			{
				name: "Get URL parameters & values with jQuery",
				url: "http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html"
			},
			{
				name: "jQuery URL parser",
				url: "https://github.com/tombonner/jurlp"
			},
			{
				name: "jQuery Address - Deep linking for the masses",
				url: "http://www.asual.com/jquery/address/"
			}
		]
	},
	{
		category: "Markdown",
		items: [
			{
				name: "Showdown - a javascript port of Markdown",
				url: "http://softwaremaniacs.org/playground/showdown-highlight/"
			},
			{
				name: "EpicEditor - An Embeddable JavaScript Markdown Editor",
				url: "http://oscargodson.github.com/EpicEditor/"
			},
			{
				name: "reMarked.js",
				url: "http://leeoniya.github.com/reMarked.js/"
			}
		]
	},
	{
		category: "Currency",
		items: [
			{
				name: "accounting.js",
				url: "http://josscrowcroft.github.com/accounting.js/"
			},
			{
				name: "money.js - JavaScript currency conversion library",
				url: "http://josscrowcroft.github.com/money.js/"
			}
		]
	},
	{
		category: "AJAX",
		items: [
			{
				name: "Mock Your Ajax Requests with Mockjax",
				url: "http://enterprisejquery.com/2010/07/mock-your-ajax-requests-with-mockjax-for-rapid-development/"
			},
			{
				name: "NETEYE Activity Indicator",
				url: "http://neteye.github.com/activity-indicator.html"
			},
			{
				name: "spin.js",
				url: "http://fgnass.github.com/spin.js/"
			}
		]
	},
	{
		category: "Effects & UI",
		items: [
			{
				name: "jQuery MagicLine Navigation",
				url: "http://css-tricks.com/jquery-magicline-navigation/"
			},
			{
				name: "jRumble is a jQuery plugin that rumbles",
				url: "http://jackrugile.com/jrumble/"
			},
			{
				name: "Isotope: An exquisite jQuery plugin for magical layouts",
				url: "http://isotope.metafizzy.co/"
			}
		]
	}
];

$("#pluginsTemplate").tmpl({
	plugins: plugins
}).appendTo('#plugins-sidebar');


$('#plugins-sidebar').on('click', 'li', function(){
	$('iframe').prop('src', $(this).data('url'));
}).on('click', 'h2', function(){
	var isVisible = $(this).next().is(':visible');
	$('#plugins-sidebar').find('ul').hide();
	if (isVisible) {
		$(this).next().hide();
	} else {
		$(this).next().show();
	}
});