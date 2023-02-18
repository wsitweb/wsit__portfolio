$(document).ready(function () {
	$('a[href^="#preview"]').click(function () {
		var offset = $('.nav').innerHeight();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 1500);
		return false;
	});
});
const listBlock = document.querySelectorAll('.list__block .list__block-num');
var num = 0;
while(num < listBlock.length){
      num++;
      if(num >= 10){
            numTwo = `${num}`;
      }else{
            numTwo = `0${num}`;
      }
      listBlock[num - 1].textContent = numTwo;
}
let lastScrol = 0;
const header = document.querySelector('header');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTo;
const containHide = () => header.classList.contains('сling')
let opacity = document.querySelector('header');
window.addEventListener('scroll', () => {
      if(scrollPosition() > lastScrol && !containHide() && scrollPosition() > window.innerHeight){
            header.classList.add('сling');
            $('header.сling').css('opacity','1');
      }else if(scrollPosition() < lastScrol && containHide() && scrollPosition() < window.innerHeight){
            $('header.сling').css('opacity','0');
            console.log(1);
            function AddOpacity(){
                  $('header').css('opacity','1');
            }
            function removeStyle(){
                  header.classList.remove('сling');
                  setTimeout(AddOpacity, 500);
            }
            setTimeout(removeStyle, 500);            
      }
      lastScrol = scrollPosition();
})
$(document).ready(function(){
	$(document).mousemove(function(event){
		var x = event.pageX;
		var y = event.pageY;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {} else {
			document.documentElement.style.setProperty('--mouse-x', x);
			    if(y < window.innerHeight){
			    document.documentElement.style.setProperty('--mouse-y', y);
			    }else{
                  	positionDefolt();
            }
		};
	});
});
positionDefolt();
function positionDefolt(){
      document.documentElement.style.setProperty('--mouse-y', 400);
};

function burgerClick(){
      let headerMenu = document.querySelector('.header__nav');
      let headerButton = document.querySelector('.header__burger');
      if(headerMenu.className == 'header__nav'){
            headerMenu.className += ' active';
            headerButton.className += ' active';
            document.body.style.overflow = 'hidden';
      }else{
            headerMenu.className = 'header__nav';
            headerButton.className = 'header__burger';
            document.body.removeAttribute("style");
      }
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    		.test(navigator.userAgent)) {
		    
      window.addEventListener('deviceorientation', ()=>{
        let location = {};
              location.y = event.beta;
              location.x = event.gamma;
      	document.documentElement.style.setProperty('--mouse-x', location.x*3000);
      	document.documentElement.style.setProperty('--mouse-y', location.y*3000);
            document.querySelector('.point').innerHTML = location.x*600;
            document.querySelector('.point:last-child').innerHTML = location.y*600;
      });
};
