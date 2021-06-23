function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const obj1 = document.getElementById('value1');
animateValue(obj1, 0, 5100, 10000);
const obj2 = document.getElementById('value2');
animateValue(obj2, 0, 9716, 10000);
const obj3 = document.getElementById('value3');
animateValue(obj3, 0, 7600, 10000);
const obj4 = document.getElementById('value4');
animateValue(obj4, 0, 967, 10000);

$(document).ready(function () {
	$('.responsive').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

// Scroll and header follow.
function changeCSSHeader() {
	var navElementCSS = document.getElementById('header');
	// var navToggle = document.getElementsByClassName('headerToggle')
	var changeColorNav = document.getElementsByClassName('nav1');
	var u;

	if (this.scrollY > 100) {
		for (u = 0; u < changeColorNav.length; u++) {
			changeColorNav[u].classList.toggle('changeColorNavbar');
		}

		navElementCSS.style.cssText =
			'background-color:#3f3a64 ; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; ';
		// for(u=0;  u<navElementA.length;u++){
		//   navElementA.style.backgroundColor= "#797693";
		// }
		// navToggle.classList.toggle("navBarColor");
	} else {
		navElementCSS.style.cssText = 'transparent ; box-shadow:none ';
	}
}
window.addEventListener('scroll', changeCSSHeader, false);

//toggle fa fa sun
function myChange(x) {
	x.classList.toggle('fa-sun');
}

// Dark mode and trigger
function myFunction() {
	document.body.classList.toggle('dark-mode');

	var changeToWhite = document.getElementsByClassName('whiteText'); //thay đổi các chữ thành màu trắng
	var i;
	for (i = 0; i < changeToWhite.length; i++) {
		changeToWhite[i].classList.toggle('dark-mode-sun');
	}

	var changeToBlack = document.getElementsByClassName('blackText'); //thay đổi các chữ thành màu đen
	var n;
	for (n = 0; n < changeToBlack.length; n++) {
		changeToBlack[n].classList.toggle('dark-mode-blackText');
	}
	var changeToBg = document.getElementsByClassName('bgDark'); //thay đổi 1 số BG thành màu tối
	var j;
	for (j = 0; j < changeToBg.length; j++) {
		changeToBg[j].classList.toggle('dark-mode-bg');
	}
}

//Display video when clicking
document.getElementById('playButton').onclick = function() {
	document.getElementById('myModal').style.display='block';
	document.getElementById('videoPlay').src="https://www.youtube.com/embed/XyP_7IZzpeI" ;
}
document.getElementById('close').onclick = function() {
	document.getElementById('myModal').style.display='none';
}
