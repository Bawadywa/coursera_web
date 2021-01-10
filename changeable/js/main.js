var body = document.querySelector("body");
var INDEX = 0, FLAG = true, form_style = "form_style", contact_button = "contact_button";
var themes = ["purple", "red", "turquoise"];


function change(){
	body.className = themes[INDEX];
}


function run_change(event){
	if((event.target.className.indexOf(form_style) === -1) & (event.target.className.indexOf(contact_button) === -1) & (FLAG)){
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
