function resetPage() {
	var deviceWidth = document.documentElement.clientWidth,
	scale = deviceWidth/480;
	document.body.style.zoom = scale;
}

window.onresize = function(){
	resetPage();
}

window.onload = function(){
	resetPage();
}
