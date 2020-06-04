var body = document.getElementsByTagName("body");

function random_num(){
	return Math.floor(Math.random() * 255);
}

var i = 0, counter = 10;
function change_color(){
	setTimeout(function (){
		color = random_num().toString(16) + random_num().toString(16) + random_num().toString(16);
		body[0].style.background = "#"+color;
		i++;
		if (i < counter){
			change_color();
		}else{
			i = 0;
		}
	}, 30);
}
body[0]["onclick"] = change_color;
