var slider = {
	slider_inner: document.querySelector('.slider_inner'),
	slider_mains: document.querySelectorAll('.slider_main'),
	btn_prev: document.querySelector('#btn_prev'),
	btn_next: document.querySelector('#btn_next'),
	start: function() {
		var self = this;

		function init_data(){
			self.btn_off_class = 'btn_off';
			self.btn_on_class = 'btn_on';
			self.slide_off_class = 'slide_off';
			self.index = 0;
			self.width = 100;
			self.shift = 0;
			self.count = self.slider_mains.length;
		}

		function event_listeners() {
			self.btn_prev.addEventListener('click', function() {
				self.prev();
			});

			self.btn_next.addEventListener('click', function() {
				self.next();
			});
		}

		init_data();
		event_listeners();

	},

	prev: function() {
		this.index -= 1;
		if (this.index === 0){
			this.btn_prev.classList.replace(this.btn_on_class, this.btn_off_class);
			this.btn_prev.disabled = true;
		}else {
			this.disable_prev();
		}
		this.btn_next.classList.replace(this.btn_off_class, this.btn_on_class);
		this.btn_next.disabled = false;

		this.slide_to_prev();
		
	},

	next: function() {
		this.index += 1;
		if (this.index === this.count - 1){
			this.btn_next.classList.replace(this.btn_on_class, this.btn_off_class);
			this.btn_next.disabled = true;
		}else {
			this.disable_next();
		}

		this.btn_prev.classList.replace(this.btn_off_class, this.btn_on_class);
		this.btn_prev.disabled = false;

		this.slide_to_next();
	},

	slide_to_prev: function() {
		this.shift -= this.width;
		this.slide();
	},

	slide_to_next: function() {
		this.shift += this.width;
		this.slide();
	},

	slide: function() {
		this.slider_inner.style.transform = 'translateX(' + (-this.shift) + '%)';
		for (var i = 0; i < this.slider_mains.length; i++) {
			if(i === this.index){
				this.slider_mains[i].classList.remove(this.slide_off_class);
			}else {
				this.slider_mains[i].classList.add(this.slide_off_class);
			}
			
		}
	},

	disable_prev: function() {
		var self = this;
		this.btn_prev.disabled = true;
		setTimeout(function() {
			self.btn_prev.disabled = false;
		}, 900);
	},

	disable_next: function() {
		var self = this;
		this.btn_next.disabled = true;
		setTimeout(function() {
			self.btn_next.disabled = false;
		}, 900);
	}
}