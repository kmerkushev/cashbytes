var clientWidth = document.body.clientWidth;
var widthDarkBackground;
var currentSlide = 0;

if (clientWidth > 1200) {
    widthDarkBackground = clientWidth / 2 - 40;
} else {
    widthDarkBackground = clientWidth / 3;
}

document.getElementById('button2').addEventListener('click', showPopup);
document.getElementById('button3').addEventListener('click', showPopup);
document.getElementsByClassName('popupBackground')[0].addEventListener('click', hidePopup);
document.getElementsByClassName('iconClose')[0].addEventListener('click', hidePopup);

function showPopup() {
    document.getElementsByClassName('popupWrapper')[0].style.display = "flex";
}

function hidePopup() {
    document.getElementsByClassName('popupWrapper')[0].style.display = "none";
}

document.addEventListener("DOMContentLoaded", ready);
document.getElementById('arrowLeft').addEventListener('click', cardMoveLeft);
document.getElementById('arrowRight').addEventListener('click', cardMoveRight);
document.getElementById('card1tablet').addEventListener('click', toSlide1);
document.getElementById('card2tablet').addEventListener('click', toSlide2);
document.getElementById('card3tablet').addEventListener('click', toSlide3);

document.getElementById('dot1').addEventListener('click', toSlide1);
document.getElementById('dot2').addEventListener('click', toSlide2);
document.getElementById('dot3').addEventListener('click', toSlide3);

function toSlide1() {
    document.getElementsByClassName('cardsWrapper')[0].style.marginLeft = (clientWidth / 2 - 187.5) + 'px';
    document.getElementById('card1tablet').style.opacity = '1';
    document.getElementById('card2tablet').style.opacity = '0.3';
    document.getElementById('card3tablet').style.opacity = '0.3';
    document.getElementById('dot1').style.opacity = '1';
    document.getElementById('dot2').style.opacity = '0.3';
    document.getElementById('dot3').style.opacity = '0.3';
    currentSlide = 0;
    console.log(currentSlide + ' toSlide1');
}

function toSlide2() {
    document.getElementsByClassName('cardsWrapper')[0].style.marginLeft = (clientWidth / 2 - 537.5) + 'px';
    document.getElementById('card1tablet').style.opacity = '0.3';
    document.getElementById('card2tablet').style.opacity = '1';
    document.getElementById('card3tablet').style.opacity = '0.3';
    document.getElementById('dot1').style.opacity = '0.3';
    document.getElementById('dot2').style.opacity = '1';
    document.getElementById('dot3').style.opacity = '0.3';
    currentSlide = 1;
    console.log(currentSlide + ' toSlide2');
}

function toSlide3() {
    document.getElementsByClassName('cardsWrapper')[0].style.marginLeft = (clientWidth / 2 - 887.5) + 'px';
    document.getElementById('card1tablet').style.opacity = '0.3';
    document.getElementById('card2tablet').style.opacity = '0.3';
    document.getElementById('card3tablet').style.opacity = '1';
    document.getElementById('dot1').style.opacity = '0.3';
    document.getElementById('dot2').style.opacity = '0.3';
    document.getElementById('dot3').style.opacity = '1';
    currentSlide = 2;
    console.log(currentSlide + ' toSlide3');
}

function cardMoveRight() {
    if (currentSlide < 2) {
        currentSlide += 1;
        console.log(currentSlide);
        setInterval(cardMove(), 100);
    }

}

function cardMoveLeft() {
    if (currentSlide > 0) {
        currentSlide -= 1;
        console.log(currentSlide);
        setInterval(cardMove(), 100);

    }
}

function cardMove() {
    if (currentSlide === 0) {
        toSlide1();
    } else if (currentSlide === 1) {
        //console.log(currentSlide + ' asfdasdf');
        toSlide2();
    } else if (currentSlide === 2) {
        toSlide3();
    }
    console.log(currentSlide);
}

function ready() {
    var event = new Event("resize");
    window.dispatchEvent(event);
    document.getElementsByClassName('cardsWrapper')[0].style.marginLeft = (clientWidth / 2 - 187.5) + 'px';
    document.getElementsByClassName('popupWrapper')[0].style.display = "none";
}

if (clientWidth > 800) {
    resizeHandler();
    rotateAbstract1();
    rotateAbstract2();
} else {
    document.getElementById('abstract1').style.transform = 'rotate(' + '45deg)';
}


if ((clientWidth < 800) && (clientWidth > 480)) {
    //OMG Меняем переносы слов в Roadmap на планшетах
    document.getElementsByClassName('step')[0].getElementsByTagName('h5')[0].innerHTML = "Start of CashBytes<br>platform development";
    document.getElementsByClassName('step')[0].getElementsByTagName('h5')[1].innerHTML = "Start of CashBytes<br>platform development";

    document.getElementsByClassName('step')[1].getElementsByTagName('h5')[0].innerHTML = "CashBytes ERC20<br>Token generation";
    document.getElementsByClassName('step')[1].getElementsByTagName('h5')[1].innerHTML = "CashBytes ERC20<br>Token generation";

    document.getElementsByClassName('step')[5].getElementsByTagName('h5')[0].innerHTML = "Release of CashBytes<br>platform Reach of 50 Million<br>Unique users of CashBytes";
    document.getElementsByClassName('step')[5].getElementsByTagName('h5')[1].innerHTML = "Release of CashBytes<br>platform Reach of 50 Million<br>Unique users of CashBytes";

    document.getElementsByClassName('step')[6].getElementsByTagName('h5')[0].innerHTML = "Exchange of CashBytes<br>tokens to coins with<br>1 to 1 exchange ratio";
    document.getElementsByClassName('step')[6].getElementsByTagName('h5')[1].innerHTML = "Exchange of CashBytes<br>tokens to coins with<br>1 to 1 exchange ratio";

    //Переносим слово в первой подписи в легенде графика
    document.getElementsByClassName('pileLegendContainer')[0].getElementsByTagName('p')[0].innerHTML = "up to 50 M<br>registered<br>users";
}

if (clientWidth < 600) {
    document.getElementsByClassName('pileLegendContainer')[0].getElementsByTagName('p')[0].innerHTML = "up to 50 M<br>registered users";
}

isVisible(document.getElementById('card1'));

window.addEventListener("resize", resizeHandler, false);
window.addEventListener("scroll", showGraphic, false);

function resizeHandler() {
    document.getElementsByClassName('darkBackground')[0].style.width = document.getElementById('mainButton').getBoundingClientRect().left - 250 + "px";

    document.getElementsByClassName('darkBackground')[0].style.height = document.documentElement.clientHeight + "px";

    document.getElementsByClassName('cardsWrapper')[0].style.marginLeft = (clientWidth / 2 - 187.5) + 'px';
}

function rotateAbstract1() {
    setInterval(rotate, 60);
    var alpha = 360;
    var counterclockwise = true;

    function rotate() {
        if ((counterclockwise) && (alpha <= 370)) {
            alpha = alpha + 0.03;
        } else if (alpha > 350) {
            alpha = alpha - 0.03;
            counterclockwise = false;
        } else {
            counterclockwise = true;
        }
        document.getElementById('abstract1').style.transform = 'rotate(' + alpha + 'deg)';
    }
}

function rotateAbstract2() {
    setInterval(rotate, 60);
    var alpha = 360;
    var counterclockwise = false;

    function rotate() {
        if ((counterclockwise) && (alpha <= 360)) {
            alpha = alpha + 0.03;
        } else if (alpha > 340) {
            alpha = alpha - 0.03;
            counterclockwise = false;
        } else {
            counterclockwise = true;
        }
        document.getElementById('abstract2').style.transform = 'rotate(' + alpha + 'deg)';
    }
}

function isVisible(elem) {

    var coords = elem.getBoundingClientRect();

    var windowHeight = document.documentElement.clientHeight;

    // верхняя граница elem в пределах видимости
    var topVisible = coords.top > 0 && coords.top < windowHeight;

    return topVisible;
}


function showGraphic() {
    var scrolled = Math.round(window.scrollY);
    if (scrolled >= 3200) {
        document.getElementsByClassName('line1')[0].classList.add('line1Animated');
        document.getElementsByClassName('line1')[1].classList.add('line1Animated');
        setTimeout(function () {
            document.getElementsByClassName('line2')[0].classList.add('line2Animated');
            document.getElementsByClassName('line2')[1].classList.add('line2Animated');
        }, 100);
    }
    setTimeout(function () {
        document.getElementsByClassName('line3')[0].classList.add('line3Animated');
        document.getElementsByClassName('line3')[1].classList.add('line3Animated')
    }, 100);

    if (scrolled >= 3200) {
        document.getElementById('purpleRound').getElementsByClassName('mask')[0].style.transform = 'rotate(0deg)';
        document.getElementById('redRound').getElementsByClassName('mask')[0].style.transform = 'rotate(-8deg)';
    }

    if ((scrolled >= 3900) && (clientWidth > 1100)) {
        document.getElementById('pile1').style.height = '335px';
        document.getElementById('pile2').style.height = '278px';
        document.getElementById('pile3').style.height = '188px';
        document.getElementById('pile4').style.height = '163px';
        document.getElementById('pile5').style.height = '116px';
        document.getElementById('pile6').style.height = '92px';
    } else if ((scrolled >= 3900) && (clientWidth > 400) && (clientWidth <= 1100)) {
        document.getElementById('pile1').style.height = '310px';
        document.getElementById('pile2').style.height = '257px';
        document.getElementById('pile3').style.height = '173px';
        document.getElementById('pile4').style.height = '163px';
        document.getElementById('pile5').style.height = '150px';
        document.getElementById('pile6').style.height = '85px';
    } else if ((scrolled >= 3900) && (clientWidth <= 400)) {
        document.getElementById('pile1').style.height = '270px';
        document.getElementById('pile2').style.height = '227px';
        document.getElementById('pile3').style.height = '150px';
        document.getElementById('pile4').style.height = '138px';
        document.getElementById('pile5').style.height = '92px';
        document.getElementById('pile6').style.height = '70px';
    }
}

/*function cardMover() {
    var scrolled = Math.round(window.scrollY);

    if ((scrolled >= 300) && ((180 - scrolled / 4) > 60)) {
        document.getElementsByClassName('card')[0].style.marginTop = (180 - (scrolled) / 4) + "px";
    }

    if ((scrolled >= 300) && ((180 - (scrolled - 100) / 4) > 60)) {
        document.getElementsByClassName('card')[1].style.marginTop = (180 - (scrolled - 100) / 4) + "px";
    }

    if ((scrolled >= 300) && ((180 - (scrolled - 200) / 4) > 60)) {
        document.getElementsByClassName('card')[2].style.marginTop = (180 - (scrolled - 200) / 4) + "px";
    }

    if (((180 - (scrolled - 200) / 4) <= 60) || ((scrolled >= 800))) {
        document.getElementsByClassName('card')[0].style.marginTop = '60px';
        document.getElementsByClassName('card')[1].style.marginTop = '60px';
        document.getElementsByClassName('card')[2].style.marginTop = '60px';
    }
}*/


document.getElementById('phone').addEventListener('change', freezeLabel);
document.getElementById('email').addEventListener('change', freezeLabel);

document.getElementById('phonePopup').addEventListener('change', freezeLabel);
document.getElementById('emailPopup').addEventListener('change', freezeLabel);

function freezeLabel(e) {
    var n = e.target.id;

    if (!isInputEmpty(n)) {
        document.getElementById(n).nextSibling.nextSibling.className = 'labelFocused';
    } else {
        document.getElementById(n).nextSibling.nextSibling.className = '';
    }
}

function isInputEmpty(name) {
    return document.getElementById(name).value.length === 0;
}

//Пишем текущий год в футере
var currentYearFooter = new Date();
document.getElementById('current-year').innerHTML = currentYearFooter.getFullYear();