var logo_text = document.querySelector('.logo_text'), logo = document.querySelector('.logo');
var punch_class = 'punch', flag = true;

function animation() {
	logo_text.classList.add(punch_class);
	setTimeout(function() {
		logo_text.classList.remove(punch_class);
		flag = true
	}, 1500);
}


function onmouseenter() {
	if(flag === true){
		animation();
		flag = false;
	}
	

}


logo.addEventListener('mouseenter', function(){
	onmouseenter();
})



var toggle = document.querySelector('.real_toggle');
var cards_outer = document.querySelectorAll('.card_outer'), cards_main = document.querySelectorAll('.card_main');
var cards_price = document.querySelectorAll('.card_price'), cards_term = document.querySelectorAll('.card_term');
var cards_button = document.querySelectorAll('.card_button'), cards_titles = document.querySelectorAll('.card_title');
var cards_desc = document.querySelectorAll('.card_desc'), cards_features = document.querySelectorAll('.card_features');
var rotate_class = 'rotate', trail = 'trail';
var price = [['$0', '$99'], ['$180', '$399']],
	term = [' / month', ' / year'],
	subscribe = [['Start free trail', 'Subscribe Now'], ['Subscribe Now', 'Subscribe Now']],
	title = [['Business Class', 'Pro Master'], ['Business', 'Professional']],
	desc = [['For small teams or office', 'For Best opportunities'], ['For office and small projects', 'For big projects and big teams']]
var index = 1;

function toggle_switch() {

	function change() {
		for (var i = 0; i < cards_outer.length; i++) {
			cards_outer[i].classList.toggle(rotate_class);
			cards_main[i].classList.toggle(rotate_class);
		}
	}

	function change_content() {
		for (var i = 0; i < cards_outer.length; i++) {
			card_price = cards_price[i].innerHTML;
			cards_price[i].innerHTML = price[index][i] +
			card_price.slice(card_price.indexOf('<')).replace(term[term.length - (1 + index)], term[index]);
			cards_button[i].innerHTML = subscribe[index][i];
			cards_titles[i].innerHTML = title[index][i];
			cards_desc[i].innerHTML = desc[index][i];
			// cards_features[i].innerHTML += cards_features[i].innerHTML.slice(cards_features[i].innerHTML.indexOf('<span class="card_feature">e'));
	    }

	    index = Number(!index);
	}
	change();
	setTimeout(function(){
			change_content();
	}, 300);

	setTimeout(function() {
		change();
		cards_outer[1].classList.toggle(trail);
	}, 500);
}

toggle.addEventListener('click', function(){
	toggle_switch();
})