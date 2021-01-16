var logo = {
	logos: document.querySelectorAll('.logo'),
    start: function() {
    	var self = this;

    	function init_data() {
    		self.punch_class = 'punch';
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
    	var logo_text = event.target.firstChild;
    	logo_text.classList.add(this.punch_class);

		var self = this;
		
		setTimeout(function() {
			logo_text.classList.remove(self.punch_class);
			self.flag = true
		}, 1500);
	},

	onmouseenter: function(event) {
		if(this.flag === true){
			this.animation(event);
			this.flag = false;
		}
	}
}