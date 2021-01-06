var body = document.querySelector("body");
var INDEX = 0, FLAG = true, form_style = "form_style";
var themes = ["purple", "red", "turquoise"];


function change(){
	body.className = themes[INDEX];
}

function run_change(event){
	if((event.target.classList[1] !== form_style) & (FLAG)){
		FLAG = false
		if(INDEX < 2){
			INDEX += 1;
		}else{
			INDEX = 0;
		}

		setTimeout(function() {
			FLAG = true;
		}, 500);

		change();
	}
}

body.addEventListener("click", run_change);
