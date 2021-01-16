var accordion = {
	question_buttons: document.querySelectorAll('.question_button'),
	start: function() {
		var self = this;
		function init_data() {
			self.minus_class = 'minus';
			self.plus_class = 'plus';
			self.opened_class = 'opened';
			self.closed_class = 'closed';
		}

		function event_listeners() {
			for (var i = 0; i < self.question_buttons.length; i++) {
				self.question_buttons[i].addEventListener('click', function(event) {
					self.onclick(event);
				})
			}
		}

		init_data();
		event_listeners();
	},

	open: function(target) {
		target.firstChild.classList.replace(this.plus_class, this.minus_class);
		target.parentNode.parentNode.classList.replace(this.closed_class, this.opened_class);
	},

	close: function(target) {
		target.firstChild.classList.replace(this.minus_class, this.plus_class);
		target.parentNode.parentNode.classList.replace(this.opened_class, this.closed_class);
	},

	onclick: function(event) {
		var target = event.currentTarget;
		if(target.parentNode.parentNode.className.indexOf(this.closed_class) !== -1) {
			this.open(target);
		}else {
			this.close(target);
		}
	}
}