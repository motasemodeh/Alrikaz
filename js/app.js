function Scroll(){
    var introText=document.getElementsByClassName("affected");
    var  screenPos=window.innerHeight/1.35;
    for(var x=0;x<introText.length;x++){
        var introPosition=introText[x].getBoundingClientRect().top;
        if(introPosition<screenPos){
            introText[x].classList.add("appear");
        }
    }
}
window.addEventListener("scroll",Scroll)
Scroll();


// Responsive Navigation Menu

var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelector('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''            
            } else {
                link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s';
            }
        });
    });

}

navSlide();