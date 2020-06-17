var a_list = document.querySelectorAll("a[href='#']");
var span_list = document.querySelectorAll("span[class='icon-bar']");
var button = document.getElementsByTagName('button');
var class_bonds = "bonds", class_button = "button", class_span = "span";

function mouse_over_construct(index, flag){
	if (flag){
		return function mouse_over(event){
		a_list[index].classList.add(class_bonds);
		}
	}else{
		return function mouse_over(event){
		button[0].classList.add(class_button);
		span_list[index].classList.add(class_span);
		}
	}
	
	
}
function mouse_out_construct(index, flag){
	if (flag){
		return function mouse_out(event){
		a_list[index].classList.remove(class_bonds);
		}
	}else{
		return function mouse_out(event){
		button[0].classList.remove(class_button);
		span_list[index].classList.remove(class_span);
		}
	}
	
}


for(var i=0; i<span_list.length; i++){
	span_list[i].onmouseover = mouse_over_construct(i, true);
	span_list[i].onmouseout = mouse_out_construct(i, true);
}
for(i=0; i<a_list.length; i++){
	a_list[i].onmouseover = mouse_over_construct(i, false);
	a_list[i].onmouseout = mouse_out_construct(i, false);
}

