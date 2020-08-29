var slider = {
	slider_imgs: document.getElementsByClassName('slider_img'),
	btn_prev: document.getElementById('btn_prev'), 
	btn_next: document.getElementById('btn_next'),
	block: document.getElementsByClassName('slider')[0],
	slider_turn: document.getElementsByClassName('slider_turn')[0],
	header: document.getElementsByTagName('header')[0],
	start: function() {
		var self = this;

		function initial_data(){
			self.btn_class = 'btn_active';
			self.class_on = 'slider_on';
			self.class_next = 'slider_next';
			self.class_prev = 'slider_prev';
			self.class_off = 'slider_off';
			self.header_off = 'header_off';
			self.slider_outline = 'slider_outline';
			self.slider_index = 0;
			self.prev_index = 0;
			self.next_index = 0;
			self.delay = window.getComputedStyle(slider.slider_imgs[0]).transitionDuration.slice(0, -1)*1000;
		};

		function event_listeners(){
			self.slider_turn.addEventListener('click', function(event){
				self.slider_turn_click(event);
			});

			self.block.addEventListener('mouseenter', function(event){
				self.mouse_in(event);
			});

			self.block.addEventListener('mouseleave', function(event){
				self.mouse_out(event);
			});

			self.btn_prev.addEventListener('click', function(event){
				self.prev(event);
			});

			self.btn_next.addEventListener('click', function(event){
				self.next(event);
			});
		};

		initial_data();
		event_listeners();
	},

	slider_turn_click: function(event) {
		this.slider_turn.classList.add('off');
	},

	mouse_in: function(event) {
			this.btn_prev.classList.add(this.btn_class);
			this.btn_next.classList.add(this.btn_class);
			this.header.classList.add(this.header_off);
			this.block.classList.add(this.slider_outline);
	},

	mouse_out: function(event) {
		this.btn_prev.classList.remove(this.btn_class);
		this.btn_next.classList.remove(this.btn_class);
		this.header.classList.remove(this.header_off);
		this.block.classList.remove(this.slider_outline);
	},

	prev: function(event) {
		if (this.slider_index > 0) {
			this.prev_index = this.slider_index;
			this.slider_index -=1;
		}else {
			this.prev_index = this.slider_index;
			this.slider_index = this.slider_imgs.length - 1;
			}

		if (this.slider_index - 1 > -1) {
			this.next_index = this.slider_index - 1;
		}else {
			this.next_index = this.slider_imgs.length - 1;
			}
		this.slide_to_prev();
	},

	next: function(event) {
		if (this.slider_index < this.slider_imgs.length - 1) {
			this.prev_index = this.slider_index;
			this.slider_index +=1;
		}else {
			this.prev_index = this.slider_index;
			this.slider_index = 0;
			}

		if (this.slider_index + 1 < this.slider_imgs.length) {
			this.next_index = this.slider_index + 1;
		}else {
			this.next_index = 0;
			}
		this.slide_to_next();
	},


	slide_to_prev: function() {
		this.btn_prev.disabled = true;
		for(var i = 0; i < this.slider_imgs.length; i++){
			if (i === this.prev_index) {
				this.slider_imgs[i].classList.remove(this.class_off);
				this.slider_imgs[i].classList.add(this.class_next);
				this.slider_imgs[i].classList.remove(this.class_on);
			}
			else if (i === this.slider_index) {
				this.slider_imgs[i].classList.remove(this.class_off);
				this.slider_imgs[i].classList.add(this.class_on);
				this.slider_imgs[i].classList.remove(this.class_next, this.class_prev);
			}
			else if (i === this.next_index) {
				this.slider_imgs[i].classList.remove(this.class_off, this.class_on, this.class_next);
				this.slider_imgs[i].classList.add(this.class_prev);
			}
			else {
				this.slider_imgs[i].classList.add(this.class_off);
				this.slider_imgs[i].classList.remove(this.class_on, this.class_prev, this.class_next);
				}
		}
		setTimeout(function() {this.btn_prev.disabled = false;}, this.delay);
		
	},

	slide_to_next: function() {
		this.btn_next.disabled = true;
		for(var i = 0; i < this.slider_imgs.length; i++){
			if(i === this.prev_index){
				this.slider_imgs[i].classList.remove(this.class_off);
				this.slider_imgs[i].classList.add(this.class_prev);
				this.slider_imgs[i].classList.remove(this.class_on);
			}
			else if(i === this.slider_index){
				this.slider_imgs[i].classList.remove(this.class_off);
				this.slider_imgs[i].classList.add(this.class_on);
				this.slider_imgs[i].classList.remove(this.class_next, this.class_prev);
			}
			else if(i === this.next_index){
				this.slider_imgs[i].classList.remove(this.class_off, this.class_on, this.class_prev);
				this.slider_imgs[i].classList.add(this.class_next);
			}
			else {
				this.slider_imgs[i].classList.add(this.class_off);
				this.slider_imgs[i].classList.remove(this.class_on, this.class_prev, this.class_next);
				}
		}
		setTimeout(function() {this.btn_next.disabled = false;}, this.delay);
	}
}
