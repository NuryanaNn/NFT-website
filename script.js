let popUpSearch = document.querySelector('.popUpSearch');
let searchMenu = document.querySelector('#searchMenu');

searchMenu.addEventListener('click', function(){
	popUpSearch.classList.toggle('change');
})

searchMenu.onclick = () =>{
	searchMenu.classList.toggle('fa-times');
	if(searchMenu.classList.contains('fa-times')){
	 	document.querySelector('#searchMenu').classList.add('active');
	}else{
		document.querySelector('#searchMenu').classList.remove('active');
	}
}



// Header Sticky
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});



// Ul Hidden Navbar Function function
let droped = document.querySelector('.droped');
let droped2 = document.querySelector('.droped2');
let droped3 = document.querySelector('.droped3');
let droped4 = document.querySelector('.droped4');
let navs = document.querySelector('.navigator');
let navs2 = document.querySelector('.navigator2');
let navs3 = document.querySelector('.navigator3');
let navs4 = document.querySelector('.navigator4');

droped.addEventListener('click', function(){
	navs.classList.toggle('active');
});

droped2.addEventListener('click', function(){
	navs2.classList.toggle('active');
})

droped3.addEventListener('click', function(){
	navs3.classList.toggle('active');
})

droped4.addEventListener('click', function(){
	navs4.classList.toggle('active');
})

droped.onclick = () =>{
	droped.classList.toggle('fa-chevron-up');
	if(droped.classList.contains('fa-chevron-up')){
	 	document.querySelector('#droped').classList.add('active');
	}else{
		document.querySelector('#droped').classList.remove('active');
	}
}

droped2.onclick = () =>{
	droped2.classList.toggle('fa-chevron-up');
	if(droped2.classList.contains('fa-chevron-up')){
	 	document.querySelector('#droped2').classList.add('active');
	}else{
		document.querySelector('#droped2').classList.remove('active');
	}
}


droped3.onclick = () =>{
	droped3.classList.toggle('fa-chevron-up');
	if(droped3.classList.contains('fa-chevron-up')){
	 	document.querySelector('#droped3').classList.add('active');
	}else{
		document.querySelector('#droped3').classList.remove('active');
	}
}


droped4.onclick = () =>{
	droped4.classList.toggle('fa-chevron-up');
	if(droped4.classList.contains('fa-chevron-up')){
	 	document.querySelector('#droped4').classList.add('active');
	}else{
		document.querySelector('#droped4').classList.remove('active');
	}
}






// Hidden Navbar Function
let burger = document.querySelector('.burger');
let hiddenNav = document.querySelector('.hiddenNav');
let body = document.querySelector('body');
let header = document.querySelector('header');

burger.addEventListener('click', function(){
	hiddenNav.classList.toggle('active');
	body.classList.toggle('active');
	header.classList.toggle('active');
});



// Hidden Nav hiddenNav
let times = document.querySelector('.fa-times');

times.addEventListener('click', function(){
	hiddenNav.classList.toggle('active');
})