var accordion = {
	question_buttons: document.querySelectorAll('.question_button'),
	faq_items: document.querySelectorAll('.faq_item'),
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
		target.classList.replace(this.closed_class, this.opened_class);
		this.close_other(target);
	},

	close: function(target) {
		target.classList.replace(this.opened_class, this.closed_class);
	},

	close_other: function(target) {
		for (var i = 0; i < this.faq_items.length; i++) {
			if(this.faq_items[i] !== target) {
				this.faq_items[i].classList.replace(this.opened_class, this.closed_class);
			}
			
		}
	},

	disable: function(target) {
		target.disabled = true;
		setTimeout(function() {
			target.disabled = false;
		}, 400);
	},

	onclick: function(event) {
		var target = event.currentTarget;
		var parent = target.parentNode.parentNode;
		if(parent.className.indexOf(this.closed_class) !== -1) {
			this.open(parent);
			this.disable(target);
		}else {
			this.close(parent);
			this.disable(target);
		}
	}
}