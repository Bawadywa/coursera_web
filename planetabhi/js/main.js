var block = document.getElementsByClassName("slider")[0];
var btn_prev = document.getElementById("btn_prev"), 
	btn_next = document.getElementById("btn_next");

var menu = document.getElementById("menu"),
	nav_list = document.getElementsByClassName("nav_list")[0],
	lines = document.getElementsByClassName("menu_line");

var slider_turn = document.getElementsByClassName("slider__turn")[0];

var header = document.getElementsByTagName("header")[0];

function menu_click(event) {
	for (var i = 0; i < lines.length; i++) {
		lines[i].classList.toggle("line_rotate");
	}

	nav_list.classList.toggle("menu_active");

}

function menu_out(event){
	for (var i = 0; i < lines.length; i++) {
		lines[i].classList.remove("line_rotate");
	}
	nav_list.classList.remove("menu_active");

}

menu.onclick = menu_click;
menu.onmouseout = menu_out;


function slider__turn_click(event){
	slider_turn.classList.add("off");
}

slider_turn.onclick = slider__turn_click;




























var btn_class = "btn_active";

var numbers = [1, 2, 3];
var srcs = [];
for (var i = 0; i < numbers.length; i++) {
	srcs[i] = "./images/slider_" + numbers[i] + ".jpg";
}

function mouse_construct(flag){
	if (flag){
		return function mouse_over(event){
			btn_prev.classList.add(btn_class);
			btn_next.classList.add(btn_class);
			header.classList.add("header__off");
			block.classList.add("slider__outline");

		}

	}else {
		return function mouse_out(event){
			btn_prev.classList.remove(btn_class);
			btn_next.classList.remove(btn_class);
			header.classList.remove("header__off");
			block.classList.remove("slider__outline");
		}

	}
	
}

function change_bg_construct(flag){
	var slider = document.getElementsByClassName("slider__inner")[0];
	var slider_img = document.getElementById("slider");
	block.onmouseover = mouse_construct(true);
	block.onmouseout = mouse_construct(false);
	var index = 0;

	function smooth_change(){
		function change(){
				slider_img.src = srcs[index];
				slider.style.opacity = 1;
			}

			var id = setInterval(frame, 15);
			var opacity = 1.0;
			function frame(){
				if (opacity == 0){
					clearInterval(id);
					change();
				}
				else {
					opacity -= 0.05;
					opacity = opacity.toFixed(2);
					slider.style.opacity = opacity;
				}
			}
	}


	if (flag){
		return function change_bg(event){
			if (index <= 1) {
				index+=1;
			}else if(index==2){
				index=0;
			}
			smooth_change();
			
	}}else{
		return function change_bg(event){
			if (index >= 1) {
				index-=1;
			}else if(index==0){
				index=2;
			}
			smooth_change();

		}
	}
		
}


btn_prev.onclick = change_bg_construct(false);
btn_next.onclick = change_bg_construct(true);



