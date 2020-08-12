var btn_prev = document.getElementById("btn_prev"), 
	btn_next = document.getElementById("btn_next");

var btn_class = "btn_active";

var numbers = [1, 2, 3];
var urls = [], bgs = [];
for (var i = 0; i < numbers.length; i++) {
	urls[i] = "./images/slider_" + numbers[i] + ".jpg";
	bgs[i] = "url(" + urls[i] + ")";
}

function mouse_construct(flag){
	if (flag){
		return function mouse_over(event){
			btn_prev.classList.add(btn_class);
			btn_next.classList.add(btn_class);
		}

	}else {
		return function mouse_out(event){
			btn_prev.classList.remove(btn_class);
			btn_next.classList.remove(btn_class);
		}

	}
	
}

function change_bg_construct(flag){
	var block = document.getElementsByClassName("slider__inner")[0];
	block.style.repeat = "no-repeat";
	block.onmouseover = mouse_construct(true);
	block.onmouseout = mouse_construct(false);
	var index = 0;


	if (flag){
		return function change_bg(event){
			if (index <= 1) {
			index+=1
			block.style.background = bgs[index];
			}else if(index==2){
			index=0;
			block.style.background = bgs[index];
			}
	}}else{
		return function change_bg(event){
			if (index >= 1) {
			index-=1;
			block.style.background = bgs[index];
			}else if(index==0){
			index=2;
			block.style.background = bgs[index];
		}
		}
	}
		
}

btn_prev.onclick = change_bg_construct(false);
btn_next.onclick = change_bg_construct(true);