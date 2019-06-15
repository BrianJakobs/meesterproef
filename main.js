var panelOne = document.querySelector('.panel:nth-of-type(3)'),
    animateLine = window.innerHeight * .5,
    panel1 = document.querySelector('#panel1'),
    panel1Lamp = document.querySelector('svg #panel1-lamp-parallax'),
    panel1Karakter1 = document.querySelector('#panel1-karakter1'),
    panel1Karakter2 = document.querySelector('#panel1-karakter2'),
    panel1Titel = document.querySelector('header h1'),
    metaData = document.querySelector('main #intro > .metadata'),
    sideScroll = document.querySelector('.sideScroll');

var viewportCheck = function(Element) {
    var bounding = Element.getBoundingClientRect();
    return (
        bounding.top <= animateLine && bounding.bottom >= 0
    )
};

var sideScrollAdd = function(Element) {
    var bounding = Element.getBoundingClientRect();
    return (
        bounding.top <= window.innerHeight && bounding.bottom >= 0
    )
};

var sideScrollRemove = function(Element) {
    var bounding = Element.getBoundingClientRect();
};

window.addEventListener('scroll', function () {
    var whiteSpace = document.querySelector('#white-space'),
        startSide = whiteSpace.getBoundingClientRect(),
        scrolled = window.pageYOffset,
        rate = scrolled;

    console.log("bottom startSide =" + startSide.bottom);
    console.log("innerHeight =" + window.innerHeight);
if (startSide.top <= 0) {
    sideScroll.classList.add('fixed');
    sideScroll.classList.remove('bottom');
} else if (startSide.top >= 0) {
    sideScroll.classList.remove('fixed');
    sideScroll.classList.remove('bottom');
}
    
if (startSide.bottom <= window.innerHeight) {
    sideScroll.classList.add('bottom');
    sideScroll.classList.remove('fixed');
}

    panel1.style.transform = 'translateY('+ rate * .5 +'px)';
    panel1Titel.style.transform = 'translateY('+ rate * .46 +'px)';
    panel1Lamp.style.transform = 'translateY('+ rate * -.4 +'px)';
    panel1Karakter1.style.transform = 'translateY('+ rate * .05 +'px)';
    panel1Karakter2.style.transform = 'translateY('+ rate * .1 +'px)';
    panel1Karakter1.classList.add('moveDown');
    
    if (viewportCheck(panelOne)) {
        console.log('I C U');
    } else if (viewportCheck(metaData)) {
        metaData.classList.add('show');
        console.log('My boi');
    }
});

//window.addEventListener('scroll', function(side) {
//    if (sideScrollAdd(sideScroll)) {
//        sideScroll.classList.add('fixed');
//        }
//    else {
//        sideScroll.classList.remove('fixed');
//    }
//});