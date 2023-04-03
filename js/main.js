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
        document.querySelector('.preview.index').classList.add('gyroscope');
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
      animationTime    : 800,
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
      }, 2000);
      return false;
});

let preloader = document.querySelector('.preloader');
window.addEventListener('load', ()=>{
      document.body.style.overflowY = 'auto';
      preloader.style.opacity = '0';
      setTimeout(function(){preloader.style.display = 'none';}, 1000);
})

gsap.registerPlugin(ScrollTrigger);

if(!ScrollTrigger.isTouch){
    window.addEventListener('load', ()=>{

        let animetionElementOne = '.preview';
        let animetionElementsLeft = document.querySelectorAll('.list__block:nth-child(odd)');
        let animetionElementsRight = document.querySelectorAll('.list__block:nth-child(even)');
        
        gsap.fromTo(animetionElementOne, {opacity: 1, transform: 'scale(1)', },
            {
                opacity: 0,
                transform: 'scale(.9)',
                scrollTrigger: {
                    trigger: animetionElementOne,
                    start: 'top',
                    end: 'bottom',
                    scrub: true,
                },
            }
        )
        
        function animationGsap(element, xPosition, height){
            gsap.fromTo(element, {opacity: 0, x: xPosition, } , 
                {
                    opacity: 1, x: 0,
                    
                    scrollTrigger: {
                        trigger: element,
                        start: String(height * -2),
                        end: String(height * -0.2),
                        scrub: true,
                    },
                }
            )
        }
        function forEachElements(elements, xPosition){
            elements.forEach((element, index, array)=>{
                let heightElement = element.offsetHeight;
                if(heightElement < 300){
                    heightElement = 400;
                }else if(heightElement > 500){
                    heightElement = 500;
                }
                animationGsap(element, xPosition, heightElement);
            })
        }
        forEachElements(animetionElementsLeft, -800);
        forEachElements(animetionElementsRight, 300);
    })
}