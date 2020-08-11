var elements = document.getElementsByClassName('slider__inner');
block = elements[0]
var numbers = [1, 2, 3];
var urls = [], bgs = [];
for (var i = 0; i <= numbers.length; i++) {
	urls[i] = "./images/slider_" + numbers[i] + ".jpg";
	bgs[i] = "url(" + urls[i] + ")";
}

var index = 1;
function change_bg(event){

	block.style.background = bgs[index];
	block.style.repeat = "no-repeat";
	index += 1;
	if (index === 3){
		index = 0;
	}

}

block.onclick =  change_bg;