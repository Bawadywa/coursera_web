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
var rotate_class = 'rotate';

function toggle_switch() {

	function change() {
		for (var i = 0; i < cards_outer.length; i++) {
			cards_outer[i].classList.toggle(rotate_class);
			cards_main[i].classList.toggle(rotate_class);
		}
		setTimeout(function(){
			var cards_price = document.querySelectorAll('.card_price');
			for (var i = 0; i < cards_price.length; i++) {
				cards_price[i].innerHTML = "$180";
		    }
		}, 300);
	}
	change();

	setTimeout(function() {
		change();
	}, 500);


}

toggle.addEventListener('click', function(){
	toggle_switch();
})