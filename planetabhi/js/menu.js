var menu = {
	menu_burger: document.getElementById('menu'),
	nav_list: document.getElementsByClassName('nav_list')[0],
	lines: document.getElementsByClassName('menu_line'),
	start: function () {
		var self = this;

		function initial_data() {
			self.class_rotate_off = 'line_rotate_off';
			self.class_rotate_on = 'line_rotate_on';
			self.class_menu_off = 'menu_off';
			self.class_menu_on = 'menu_on';
		};

		function event_listeners(){
			self.menu_burger.addEventListener('click', function(event){
				self.menu_click(event);
			});

			self.menu_burger.addEventListener('mouseleave', function(event){
				self.menu_leave(event);
			})
		};

		initial_data();
		event_listeners();
	}, 

	menu_click: function(event) {
		if (this.nav_list.classList.contains(this.class_menu_off)) {
			for (var i = 0; i < this.lines.length; i++) {
				this.lines[i].classList.remove(this.class_rotate_off);
				this.lines[i].classList.add(this.class_rotate_on);
				}

			this.nav_list.classList.remove(this.class_menu_off);
			this.nav_list.classList.add(this.class_menu_on);
		}
		else { 
			for (var i = 0; i < this.lines.length; i++) {
				this.lines[i].classList.remove(this.class_rotate_on);
				this.lines[i].classList.add(this.class_rotate_off);
				}

			this.nav_list.classList.remove(this.class_menu_on);
			this.nav_list.classList.add(this.class_menu_off);
			}
	}, 

	menu_leave: function(event){
		if (this.nav_list.classList.contains(this.class_menu_on)) {
			for (var i = 0; i < this.lines.length; i++) {
				this.lines[i].classList.remove(this.class_rotate_on);
				this.lines[i].classList.add(this.class_rotate_off);
				}
			this.nav_list.classList.remove(this.class_menu_on);
			this.nav_list.classList.add(this.class_menu_off);
		}
	}
}
