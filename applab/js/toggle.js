var toggle = {
	real_toggle: document.querySelector('.real_toggle'),
	card_outers: document.querySelectorAll('.card_outer'), card_mains: document.querySelectorAll('.card_main'),
	card_prices: document.querySelectorAll('.card_price'), card_terms: document.querySelectorAll('.card_term'),
	card_buttons: document.querySelectorAll('.card_button'), card_titles: document.querySelectorAll('.card_title'),
	card_descs: document.querySelectorAll('.card_desc'), card_features: document.querySelectorAll('.card_feature'),
	start: function() {
		var self = this;

		function init_data() {
			self.rotate_class = 'rotate';
			self.trial_class = 'trial';
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
			card_price = this.card_prices[i].innerHTML;
			this.card_prices[i].innerHTML = this.price[this.index][i] +
			card_price.slice(card_price.indexOf('<')).replace(this.term[this.term.length - (1 + this.index)],
																		this.term[this.index]);
			this.card_buttons[i].innerHTML = this.subscribe[this.index][i];
			this.card_titles[i].innerHTML = this.title[this.index][i];
			this.card_descs[i].innerHTML = this.desc[this.index][i];
	    }

	    for (var i = 0; i < this.card_features.length; i++) {
	    	this.card_features[i].innerHTML = this.features[this.index][i];
	    }

	    this.index = Number(!this.index);
	},

	onclick: function(event) {
		var self = this;
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