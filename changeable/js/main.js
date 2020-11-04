var INDEX = 0, FLAG = true;

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
	if(FLAG)
	{
		if(INDEX < 2){
			INDEX += 1;
		}else{
			INDEX = 0;
		}
		change();
	}
}

body.addEventListener("click", run_change);

function check_enter(event){
	FLAG = false;
}

function check_leave(event){
	FLAG = true;
}

contact_form.addEventListener("mouseenter", check_enter);
contact_form.addEventListener("mouseleave", check_leave);


