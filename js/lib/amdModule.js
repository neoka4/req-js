define({
	version: 'new version',
	el: null,
	grab: function(id) {
		id = id.substring(1);
		this.el = document.getElementById(id);
		return this;
	},
	html: function(html){
		this.el.innerHTML = html;
		return this;
	},
});
