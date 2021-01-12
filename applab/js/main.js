var logo_text = document.querySelector('.logo_text'), logo = document.querySelector('.logo');
var punch_class = "punch", flag = true;

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


logo.addEventListener("mouseenter", function(){
	onmouseenter();
})

