const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secDeg = ((seconds / 60) * 360) + 90;
	const minutes = now.getMinutes()
	const minDeg = ((minutes / 60) * 360) + 90;
	const hours = now.getHours()
	const hoursDeg = ((hours / 12) * 360) + 90;

	if(seconds == 0){
		secondHand.classList.remove('anim');
	} else {
		secondHand.classList.add('anim');
	}

	secondHand.style.transform = `translateY(-50%) translateX(-100%) rotate(${secDeg}deg)`;
	minHand.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;
	hourHand.style.transform = `translateY(-50%) rotate(${hoursDeg}deg)`;
	// console.log(`${hours} : ${minutes} : ${seconds}`);

}

setInterval(setDate, 1000);