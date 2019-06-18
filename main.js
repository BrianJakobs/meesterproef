var panelOne = document.querySelector('.panel:nth-of-type(3)'),
    animateLine = window.innerHeight * .5,
    panel1 = document.querySelector('#panel1'),
    panel1Lamp = document.querySelector('svg #panel1-lamp-parallax'),
    panel1Karakter1 = document.querySelector('#panel1-karakter1'),
    panel1Karakter2 = document.querySelector('#panel1-karakter2'),
    panel1Titel = document.querySelector('header h1'),
    metaData = document.querySelector('main #intro > .metadata'),
    
    sideScroll = document.querySelector('.sideScroll'),
    whiteSpace = document.querySelector('#white-space'),
//    sideDiv = document.querySelector('.sideScroll div'),
    whitespaceHeight = whiteSpace.innerHeight,
    
    span1 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(1)'),
    span2 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(2)'),
    span3 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(3)'),
    span4 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(4)'),
    span5 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(5)'),
    span6 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(6)'),
    span7 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(7)'),
    span8 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(8)'),
    span9 = document.querySelector('main section.panel:nth-of-type(9) p span:nth-of-type(9)'),

    viewportCheck = function(Element) {
        var bounding = Element.getBoundingClientRect();
        return (
            bounding.top <= animateLine && bounding.bottom >= 0
        )
    };

//    sideScrollAdd = function(Element) {
//        var bounding = Element.getBoundingClientRect();
//        return (
//            bounding.top <= window.innerHeight && bounding.bottom >= 0
//        )
//    };

window.addEventListener('scroll', function () {
    var startSide = whiteSpace.getBoundingClientRect(),
        scrolled = window.pageYOffset,
        rate = scrolled;
    
if (viewportCheck(metaData)) {
        metaData.classList.add('show');
} if (viewportCheck(span1)) {
    span1.classList.add('show');
} if (viewportCheck(span2)) {
    span2.classList.add('show');
} if (viewportCheck(span3)) {
    span3.classList.add('show');
} if (viewportCheck(span4)) {
    span4.classList.add('show');
} if (viewportCheck(span5)) {
    span5.classList.add('show');
} if (viewportCheck(span6)) {
    span6.classList.add('show');
} if (viewportCheck(span7)) {
    span7.classList.add('show');
} if (viewportCheck(span8)) {
    span8.classList.add('show');
} if (viewportCheck(span9)) {
    span9.classList.add('show');
}
    
//    startSide.top = start
//    startSide.bottom = eind
    
//    console.log(startSide.top + startSide.bottom);
//    console.log(startSide.top);
//    console.log(startSide.bottom);
//    console.log(window.innerHeight);

var currentX = sideScroll.style.transform;
    
if (startSide.top <= 0) {
    sideScroll.classList.add('fixed');
    sideScroll.classList.remove('bottom');
    sideScroll.style.transform = 'translateX('+ startSide.top +'px)';
} else if (startSide.top >= 0) {
    sideScroll.classList.remove('fixed');
    sideScroll.classList.remove('bottom');
    sideScroll.style.transform = 'translateX(0px)';
}
    
if (startSide.bottom  <= window.innerHeight) {
    sideScroll.classList.add('bottom');
    sideScroll.classList.remove('fixed');
    sideScroll.style.transform = currentX;
}
    panel1.style.transform = 'translateY('+ rate * .5 +'px)';
    panel1Titel.style.transform = 'translateY('+ rate * .46 +'px)';
    panel1Lamp.style.transform = 'translateY('+ rate * -.4 +'px)';
    panel1Karakter1.style.transform = 'translateY('+ rate * .05 +'px)';
    panel1Karakter2.style.transform = 'translateY('+ rate * .1 +'px)';
    panel1Karakter1.classList.add('moveDown');
});

//whiteSpace.style.height = '248vw';