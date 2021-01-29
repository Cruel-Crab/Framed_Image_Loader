const urlInput = document.querySelector("input[name='url']");
const colorInput = document.querySelector("input[name='color']");
const widthInput = document.querySelector("input[name='width']");
const image = document.querySelector(".image");

let url =""; //variable
let width = 10; //variable
let color = "#000000"; //variable

function hideImageOnLoad(){
	image.style.display = 'none';
}
function setImage(url,width,color){ //these 3 are parameters not our variables
	image.style.display = 'block';
	image.style.borderStyle = "solid";
	image.style.background = "url(" + url + ")";
	image.style.borderWidth = width + "px";
	image.style.borderColor = color;
}
urlInput.addEventListener("change", () => {
	url = urlInput.value;
	setImage(url,width,color);
});
widthInput.addEventListener("change", () => {
	width = widthInput.value;
	setImage(url,width,color);
});
colorInput.addEventListener("change", () => {
	color= colorInput.value;
	setImage(url,width,color);
});
hideImageOnLoad();