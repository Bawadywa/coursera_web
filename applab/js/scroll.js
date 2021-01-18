var scroll =  {
	nav_links: document.querySelectorAll('.nav_link'),
	start: function () {
		var self = this;
		function init_data() {
			self.duration = 1000;
			self.frames = 60;
			self.current_frame = 0;
			self.home_offset = 100;
			self.offset = 40;
			self.middle = document.documentElement.scrollHeight / 2;
		};

		function event_listeners() {
			for (var i = 0; i < self.nav_links.length; i++) {
				self.nav_links[i].addEventListener('click', function(event) {
					self.onclick(event);
				})
			}
		}

		init_data();
		event_listeners();
	},

	scrollTo: function(element) {

		var scrolled = window.pageYOffset, distance;

		if(element.getAttribute('id') === "home"){
			distance = element.offsetTop - scrolled - this.home_offset;
		}else {
			distance = element.offsetTop - scrolled - this.offset;
		}

		var self = this;
		var duration = Math.floor((Math.abs(distance * self.duration) / self.middle) * 0.7);

		var timer = setInterval(function() {
			if(self.current_frame < self.frames){
				window.scrollBy(0, Math.floor(distance / self.frames));
			}else {
				clearInterval(timer);
			}

			self.current_frame += 1;

		}, Math.floor(duration / self.frames));

		self.current_frame = 0;
	},

	onclick: function(event) {
		event.preventDefault();
		var element = document.querySelector(event.currentTarget.getAttribute('href'));
		this.scrollTo(element);
	}
}