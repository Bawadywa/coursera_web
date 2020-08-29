var scrolling = {
	nav_lists: document.getElementsByClassName('nav_list'),
	start: function() {
		var self = this;

		function initial_data(){
			self.anchors = Array.from(self.nav_lists[0].querySelectorAll('a')).concat(Array.from(self.nav_lists[1].querySelectorAll('a')));
			self.width = document.documentElement.clientWidth;

			if (self.width <= 820) {
				self.initial_offset = 85;
			}else {
				self.initial_offset = 40;
				}
		};

		function event_listeners(){
			var offset = 0;
			for (var i = 0; i < self.anchors.length; i++){
				if(self.anchors[i].getAttribute('href') === '#'){
					continue;
				}

				if ((i === 0) || (i === self.anchors.length - 1)){
					offset = 0;
				}else{
					offset = self.initial_offset;
				}

				self.anchors[i].addEventListener('click', self.anchor_click(self.anchors[i], offset));
			}
		};

		initial_data();
		event_listeners();

	},

	anchor_click: function(anchor, offset){
		var self = this;
		return function(event){
			event.preventDefault();
			var element = document.querySelector(''+anchor.getAttribute('href'));
			self.scrollTo(element, offset);
		}
	},

	scrollTo: function(element, offset=0){
		var scrolled = window.pageYOffset,
		distance = element.offsetTop - offset, step = 0, timer, check_scrolled,
		check_step;
		if (scrolled < distance) {
			step = 10;
		}else if (scrolled > distance) {
			step = -10;
			}

		function scroll(){
			scrolled = window.pageYOffset;

			if (Math.abs(scrolled - distance) <= 15) {
				if (scrolled < distance) {
					step = 1;
				}else if (scrolled > distance) {
					step = -1;
					}
			}


			window.scrollBy(0, step);

			
			if ((scrolled === distance) || (scrolled === check_scrolled) ||(step + check_step === 0)) {
				clearTimeout(timer);
				return
			}
			
			check_scrolled = scrolled;
			check_step = step;

			timer = setTimeout(scroll, 1);	
		}

		scroll();
	}
}
