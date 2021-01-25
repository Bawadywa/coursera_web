var menu = {
	menu_burger: document.querySelector('.menu'),
	nav_list: document.querySelector('.nav_list'),
	start: function() {
		var self = this;

		function init_data() {
			self.menu_active_class = 'menu_active';
			self.nav_active_class = 'nav_active';
		}

		function event_listener () {
			self.menu_burger.addEventListener('click', function(event) {
				self.onclick(event);
			});

			self.nav_list.addEventListener('click', function(event) {
				self.onclick(event);
			});
		}

		init_data();
		event_listener();
	},

	onclick: function(event) {
		this.menu_burger.classList.toggle(this.menu_active_class);
		this.nav_list.classList.toggle(this.nav_active_class);
	}
}