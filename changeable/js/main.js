var INDEX = 0, FLAG = true, form_style = "form_style";

function change(){
	change_header();
	change_nav();
	change_header_btn();
	change_name_title();
	change_skills();
	change_gallery();
	change_contact();
	change_footer();
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
