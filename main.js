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
    
    span1 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(1)'),
    span2 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(2)'),
    span3 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(3)'),
    span4 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(4)'),
    span5 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(5)'),
    span6 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(6)'),
    span7 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(7)'),
    span8 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(8)'),
    span9 = document.querySelector('main section.panel:nth-of-type(8) p span:nth-of-type(9)'),
    shoe = document.querySelector('.panel:nth-of-type(17) .images'),
    kickedText = document.querySelector('.panel:nth-of-type(17) p'),
    choice = document.querySelector('.choice'),
    button1goed = document.querySelector('.goed1'),
    button1fout = document.querySelector('.fout1'),
    button2goed = document.querySelector('.goed2'),
    button2fout = document.querySelector('.fout2'),
    result1 = document.querySelector('.result1'),
    result2 = document.querySelector('.result2'),

    viewportCheck = function(Element) {
        var bounding = Element.getBoundingClientRect();
        return (
            bounding.top <= animateLine && bounding.bottom >= 0
        )
    };

//    sideScrollAdd = function(Element) {
//        var bounding = Element.getBoundingClientRect();
//        return (
//            bounding.top <= 0
//        )
//    },
//    
//    sideScrollRemove = function(Element) {
//        var bounding = Element.getBoundingClientRect();
//        return (
//            bounding.bottom <= window.innerHeight
//        )
//    };

button1fout.addEventListener('click', function () {
    result1.classList.add('reveal');
//    document.body.classList.toggle('goScroll');
});

button1goed.addEventListener('click', function () {
    result1.classList.add('reveal');
//    document.body.classList.toggle('goScroll');
});

button2fout.addEventListener('click', function () {
    result2.classList.add('reveal');
//    document.body.classList.toggle('goScroll');
});

button2goed.addEventListener('click', function () {
    result2.classList.add('reveal');
//    document.body.classList.toggle('goScroll');
});

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
} if (viewportCheck(kickedText)) {
    shoe.classList.add('kickshoe');
    kickedText.classList.add('kick');
} 
    
    
//if (sideScrollAdd(choice)) {
//    document.body.classList.add('stopScroll');
//}
//    
//if (sideScrollRemove(choice)) {
//    console.log('alles weg');
//    document.body.classList.remove('stopScroll');
//    document.body.classList.remove('goScroll');
//}


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