var buttonClick = {
	buttons: document.querySelectorAll('.button_style'),
	start: function () {
		var self = this;

		function init_data() {
			self.button_active_class = 'button_active';
			self.size = 400;
			self.initial_size = 10;
		}

		function event_listeners() {
			for (var i = 0; i < self.buttons.length; i++) {
				self.buttons[i].addEventListener('click', function(event) {
					self.onclick(event);
				})
			}
		}

		init_data();
		event_listeners();
	},

	animation: function(event) {
		var self = this;
		var target = event.currentTarget,
			rect = target.getBoundingClientRect();

	    var x = event.clientX - rect.left,
		    y = event.clientY - rect.top;

		var circle = document.createElement('span');
		circle.style.left = x + 'px';
		circle.style.top = y + 'px';

		target.appendChild(circle);
		setTimeout(function() {
			circle.remove();
		}, 800);
	},



	onclick: function(event) {
		var self = this;
		this.animation(event);
	}
}