var menu = {
	menu_burger: document.querySelector('.menu'),
	start: function() {
		var self = this;

		function init_data() {
			self.menu_active_class = 'menu_active';
		}

		function event_listener () {
			self.menu_burger.addEventListener('click', function(event) {
				self.onclick(event);
			})
		}

		init_data();
		event_listener();
	},

	onclick: function(event) {
		this.menu_burger.classList.toggle(this.menu_active_class);
	}
}