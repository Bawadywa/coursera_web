var body = document.getElementsByTagName("body");

function random_num(){
	return Math.floor(Math.random() * 255);
}

function change_color(){
	color = random_num().toString(16) + random_num().toString(16) + random_num().toString(16);
	body[0].style.background = "#"+color;
}

body[0]["onclick"] = change_color;
