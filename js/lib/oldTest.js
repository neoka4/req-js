define(['amdModule', 'jquery'], function(amdModule, $) {
		var showVersion = function() {
				$("#res").append("<p>" + amdModule.version + "<p>");
			},
			showJQueryVersion = function() {
					$("#res").append("<p>jQuery version: " + $.fn.jquery + "<p>");
			};
		return {
			showVersion: showVersion,
			showJQueryVersion: showJQueryVersion,
		};
});