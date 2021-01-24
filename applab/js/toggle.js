var toggle = {
	real_toggle: document.querySelector('.real_toggle'), fake_toggle: document.querySelector('.fake_toggle'),
	card_outers: document.querySelectorAll('.card_outer'), card_mains: document.querySelectorAll('.card_main'),
	card_prices: document.querySelectorAll('.card_price'), card_terms: document.querySelectorAll('.card_term'),
	card_buttons: document.querySelectorAll('.card_button'), card_titles: document.querySelectorAll('.card_title'),
	card_descs: document.querySelectorAll('.card_desc'), card_features: document.querySelectorAll('.card_feature'),
	start: function() {
		var self = this;

		function init_data() {
			self.rotate_class = 'rotate';
			self.trial_class = 'trial';
			self.toggle_style_class = 'toggle_style';
			self.price = [['$0', '$99'], ['$180', '$399']];
			self.term = [' / month', ' / year'];
			self.subscribe = [['Start free trial', 'Subscribe Now'], ['Subscribe Now', 'Subscribe Now']];
			self.title = [['Business Class', 'Pro Master'], ['Business', 'Professional']];
			self.desc = [['For small teams or office', 'For Best opportunities'],
						 ['For office and small projects', 'For big projects and big teams']];
			self.features = [['Drag & Drop Builder', "1,000's of Templates", 'Blog Support Tools', 'eCommerce Store',
							  'Drag & Drop Builder', "5,000's of Templates", 'Blog Support Tools', 'eCommerce Store'],
							 ['Drag & Drop Builder', "10,000's of Templates", 'Blog Support Tools', 'Better eCommerce Store',
							  'Drag & Drop Pro Builder', "50,000's of Templates", 'Premium Support Tools', 'Pro eCommerce Store']]
			self.index = 1;
		}

		function event_listener() {
			self.real_toggle.addEventListener('click', function(event) {
				self.onclick(event);
			})
		}

		init_data();
		event_listener();
	},

	rotate: function() {
		for (var i = 0; i < this.card_outers.length; i++) {
			this.card_outers[i].classList.toggle(this.rotate_class);
			this.card_mains[i].classList.toggle(this.rotate_class);
		}
	},

	change_content: function() {
		for (var i = 0; i < this.card_outers.length; i++) {
			this.card_prices[i].childNodes[0].nodeValue = this.price[this.index][i];
			this.card_terms[i].innerText = this.term[this.index];
			this.card_buttons[i].innerText = this.subscribe[this.index][i];
			this.card_titles[i].innerText = this.title[this.index][i];
			this.card_descs[i].innerText = this.desc[this.index][i];
	    }

	    for (var i = 0; i < this.card_features.length; i++) {
	    	this.card_features[i].innerText = this.features[this.index][i];
	    }

	    this.index = Number(!this.index);
	},

	disable: function() {
		var self = this;
		this.real_toggle.disabled = true;
		
		setTimeout(function() {
			self.real_toggle.disabled = false;
		}, 500)
	}, 

	continue_animation: function() {
		var self = this;
		this.fake_toggle.classList.add(this.toggle_style_class);

		setTimeout(function() {
			self.fake_toggle.classList.remove(self.toggle_style_class);
		}, 500);
	},

	onclick: function(event) {
		var self = this;
		this.disable();
		this.continue_animation();
		this.rotate();

		setTimeout(function(){
			self.change_content();
		}, 300);

		setTimeout(function() {
			self.rotate();
			self.card_outers[1].classList.toggle(self.trial_class);
		}, 500);
	}
}