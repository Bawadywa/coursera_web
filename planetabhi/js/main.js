(function(){
document.addEventListener("touchstart", function(){}, true);

var block = document.getElementsByClassName("slider")[0];
var btn_prev = document.getElementById("btn_prev"), 
	btn_next = document.getElementById("btn_next");

var menu = document.getElementById("menu"),
	nav_list = document.getElementsByClassName("nav_list")[0],
	lines = document.getElementsByClassName("menu_line");

var slider_turn = document.getElementsByClassName("slider__turn")[0];

var header = document.getElementsByTagName("header")[0];

nav_list.classList.add("menu_off");
for (var i = 0; i < lines.length; i++) {
		lines[i].classList.add("line_rotate_off");
}


function menu_click(event) {
	if (nav_list.classList.contains("menu_off") === true){
		for (var i = 0; i < lines.length; i++) {
				lines[i].classList.remove("line_rotate_off");
				lines[i].classList.add("line_rotate_on");
			}
			nav_list.classList.remove("menu_off");
			nav_list.classList.add("menu_on");
	}else if(nav_list.classList.contains("menu_on") === true){
		for (var i = 0; i < lines.length; i++) {
				lines[i].classList.remove("line_rotate_on");
				lines[i].classList.add("line_rotate_off");
			}
			nav_list.classList.remove("menu_on");
			nav_list.classList.add("menu_off");
	}
}

function menu_leave(event){
	if(nav_list.classList.contains("menu_on") === true){
		for (var i = 0; i < lines.length; i++) {
				lines[i].classList.remove("line_rotate_on");
				lines[i].classList.add("line_rotate_off");
				}
			nav_list.classList.remove("menu_on");
			nav_list.classList.add("menu_off");
		}
	}



menu.onclick = menu_click;
menu.onmouseleave = menu_leave;


function slider__turn_click(event){
	slider_turn.classList.add("off");
}

slider_turn.onclick = slider__turn_click;


var nav_lists = document.getElementsByClassName('nav_list');
var anchors = Array.from(nav_lists[0].querySelectorAll('a'))
.concat(Array.from(nav_lists[1].querySelectorAll('a')));



function scrollTo(element, offset=0){
	var scrolled = window.pageYOffset,
	distance = element.offsetTop - offset, step = 0, timer, check_scrolled,
	check_step;

	if (scrolled < distance){
			step = 10;
	}else if(scrolled > distance){
			step = -10;
	}

	function scroll(){
		scrolled = window.pageYOffset;

		if (Math.abs(scrolled - distance) <= 15){
			if (scrolled < distance){
				step = 1;
			}else if(scrolled > distance){
				step = -1;
			}
		}


		window.scrollBy(0, step);

		
		if ((scrolled === distance) || (scrolled === check_scrolled)
			||(step + check_step === 0)) {
			clearTimeout(timer);
			return
		}
		check_scrolled = scrolled;
		check_step = step;

		timer = setTimeout(scroll, 1);
		

	}

	scroll();
	
}

function anchor_click_construct(anchor, offset){
	return function(event){
		event.preventDefault();
		var element = document.querySelector(""+anchor.getAttribute("href"));
		scrollTo(element, offset);
	}
}

var initial_offset, offset;
var width = document.documentElement.clientWidth;
if(width <= 820){
	initial_offset = 85;
}else {
	initial_offset = 40
}

for (var i = 0; i < anchors.length; i++){

	if(anchors[i].getAttribute('href') === "#"){
		continue;
	}

	if ((i === 0) || (i === anchors.length - 1)){
		offset = 0;
	}else{
		offset = initial_offset
	}

	anchors[i].onclick = anchor_click_construct(anchors[i], offset);
}



var btn_class = "btn_active";

var numbers = [1, 2, 3];
var srcs = [];
for (var i = 0; i < numbers.length; i++) {
	srcs[i] = "./images/slider_" + numbers[i] + ".jpg";
}

function mouse_construct(flag){
	if (flag){
		return function mouse_in(event){
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
	block.onmouseenter = mouse_construct(true);
	block.onmouseleave = mouse_construct(false);
	this.slider_index = 0;

	function smooth_change(){
		function change(){
				slider_img.src = srcs[slider_index];
				slider.style.opacity = 1;
			}

			var id = setInterval(frame, 15);
			var opacity = 1.0;
			function frame(){
				if (opacity < 0){
					clearInterval(id);
					change();
				}
				else {
					slider.style.opacity = opacity;
					opacity -= 0.05;
					opacity = opacity.toFixed(2);
				}
			}
	}


	if (flag){
		return function next(event){
			if(slider_index <= 1){
				slider_index +=1;
			}else{
				slider_index = 0;
			}
			smooth_change();
			}
	}else{
		return function prev(event){
			if(slider_index >= 1){
				slider_index -=1;
			}else{
				slider_index = 2;
			}
			smooth_change();

		}
	}
		
}

btn_prev.onclick = change_bg_construct(false);
btn_next.onclick = change_bg_construct(true);
})();


