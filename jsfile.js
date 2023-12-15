const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

function plusSlides(n) {
	counter += n;
	slidefun(counter);
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
}

function slidefun(n) {
	let i;
	for(i = 0; i < myslide.length; i++){
		myslide[i].style.display = "none";
	}
	for(i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	}
	if(n < 1){
	   counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

let touchStartX = 0;
let touchEndX = 0;
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50; // Ajuste conforme necessário

    // Defina uma distância mínima para considerar como um deslize
    const minSwipeDistance = window.innerWidth / 2;

    if (touchStartX - touchEndX > minSwipeDistance) {
        // Deslize para a esquerda (próxima slide)
        plusSlides(1);
        touchStartX = touchEndX; // Reinicia a posição inicial
    } else if (touchEndX - touchStartX > minSwipeDistance) {
        // Deslize para a direita (anterior slide)
        plusSlides(-1);
        touchStartX = touchEndX; // Reinicia a posição inicial
    }
}