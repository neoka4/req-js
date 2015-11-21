/*
// work with "NeoModule = new NeoModule;"
var NeoModule = function(){
	this.el = null;
	this.grab = function(id) {
		id = id.substring(1);
		this.el = document.getElementById(id);
		return this;
	};
	this.append = function(html){
		this.el.innerHTML += html;
		return this;
	};
};
*/

/*
// work
var NeoModule = {
	el: null,
	grab: function(id) {
		id = id.substring(1);
		this.el = document.getElementById(id);
		return this;
	},
	append: function(html){
		this.el.innerHTML += html;
		return this;
	},
};
*/

// work
var NeoModule = (function(){
	var el = null,
		grab = function(id) {
			id = id.substring(1);
			this.el = document.getElementById(id);
			return this;
		},
		append = function(html){
			this.el.innerHTML += html;
			return this;
		};
	return {
		el: el,
		grab: grab,
		append: append,
	}
})();