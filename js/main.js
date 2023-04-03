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
		var x = Math.floor(event.pageX);
		var y = Math.floor(event.pageY);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {} else {
			document.documentElement.style.setProperty('--mouse-x', x);
			    if(y < window.innerHeight){
			      document.documentElement.style.setProperty('--mouse-y', y);
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
        let loc = {};
            //   loc.y = Math.floor(event.beta * -1);
            //   loc.x = Math.floor(event.gamma* -1);
              loc.y = (event.beta * -1);
              loc.x = (event.gamma* -1);
      	document.documentElement.style.setProperty('--mouse-x', loc.x*16);
      	document.documentElement.style.setProperty('--mouse-y', (loc.y - 50) *24);
            // document.querySelector('.text').innerHTML = `${loc.y} y ${loc.x} x`;
      });
};

SmoothScroll({
      // Время скролла 400 = 0.4 секунды
      animationTime    : 500,
      // Размер шага в пикселях 
      stepSize         : 75,
  
      // Дополнительные настройки:
      
      // Ускорение 
      accelerationDelta : 30,  
      // Максимальное ускорение
      accelerationMax   : 2,   
  
      // Поддержка клавиатуры
      keyboardSupport   : true,  
      // Шаг скролла стрелками на клавиатуре в пикселях
      arrowScroll       : 50,
  
      // Pulse (less tweakable)
      // ratio of "tail" to "acceleration"
      pulseAlgorithm   : true,
      pulseScale       : 4,
      pulseNormalize   : 1,
  
      // Поддержка тачпада
      touchpadSupport   : true,
})

$('a[href*="#preview"]').on('click', function() {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
});