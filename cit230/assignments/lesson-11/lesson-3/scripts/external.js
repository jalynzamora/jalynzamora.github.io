$(function () {
	// All jQuery code goes here

	window.onload = function(){
		var element = document.getElementById('alcoveLogo');
		element.style.opacity = 0.2;
		
		var elements = document.getElementByClassName('servicesBtn');
		
		for(var i = 0; i < elements.length; i ++){
			if(i % 2 == 0){
				elements[i].style.color = 'rgb(0, 106, 255)';
			}
		}
		var elements1 = document.getElementsByTagName('h2');
		
		for(var i = 0; i < elements1.length; i++){
			elements1[i].style.borderColor = 'rgb(225,0,0)';
			elements1[i].style.borderWidth = '2px';
			elements1[i].style.borderStyle = 'solid';
			elements1[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
		}
	}
	
})
