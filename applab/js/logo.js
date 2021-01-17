var logo = {
	logos: document.querySelectorAll('.logo'),
    start: function() {
    	var self = this;

    	function init_data() {
    		self.left_class = 'left';
    		self.right_class = 'right';
    		self.flag = true;
    	}

		function event_listeners() {
			for (var i = 0; i < self.logos.length; i++) {
				self.logos[i].addEventListener('mouseenter', function(event){
					self.onmouseenter(event);
				});
			}	
		}

		init_data();
		event_listeners();
    },

    animation: function(event) {
    	var target = event.currentTarget;
    	var logo_left = target.firstChild,
    		logo_right = target.lastChild;

    	logo_left.classList.add(this.left_class);
    	logo_right.classList.add(this.right_class);

		var self = this;
		
		setTimeout(function() {
			logo_left.classList.remove(self.left_class);
    		logo_right.classList.remove(self.right_class);
			self.flag = true;
		}, 1500);
	},

	onmouseenter: function(event) {
		if(this.flag === true){
			this.animation(event);
			this.flag = false;
		}
	}
}