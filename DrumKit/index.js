const buttons = document.querySelectorAll('button');

var d = document.getElementById('d');
var r = document.getElementById('r');
var u = document.getElementById('u');
var m = document.getElementById('m');
var k = document.getElementById('k');
var i = document.getElementById('i');
var t = document.getElementById('t');

var audio0 = new Audio('Sounds/tom-1.mp3');
var audio1 = new Audio('Sounds/tom-2.mp3');
var audio2 = new Audio('Sounds/tom-3.mp3');
var audio3 = new Audio('Sounds/tom-4.mp3');
var audio4 = new Audio('Sounds/snare.mp3');
var audio5 = new Audio('Sounds/crash.mp3');
var audio6 = new Audio('Sounds/kick-bass.mp3');

var numberOfDrumButtons = buttons.length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        IndexButton(i);

    });

}


function IndexButton(index) {

    switch (index) {
        case 0:
            audio0.pause();
            audio0.currentTime = 0;
            audio0.play();
            buttons[0].style.border = '10px solid #FF8C00';
            d.style.color = '#FF8C00';
            d.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';

            setTimeout(function () {
                d.style.color = '#ffffff';
                buttons[0].style.border = '10px solid #552f00';
                d.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        case 1:
            audio1.pause();
            audio1.currentTime = 0;
            audio1.play();
            buttons[1].style.border = '10px solid #FF8C00';
            r.style.color = '#FF8C00';
            r.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
            r.style.border = 'color: #FF8C00';
            setTimeout(function () {
                buttons[1].style.border = '10px solid #552f00';
                r.style.color = '#ffffff';
                r.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        case 2:
            audio2.pause();
            audio2.currentTime = 0;
            audio2.play();
            buttons[2].style.border = '10px solid #FF8C00';
            u.style.color = '#FF8C00';
            u.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
            u.style.border = 'color: #FF8C00';
            setTimeout(function () {
                buttons[2].style.border = '10px solid #552f00';
                u.style.color = '#ffffff';
                u.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        case 3:
            audio3.pause();
            audio3.currentTime = 0;
            audio3.play();
            buttons[3].style.border = '10px solid #FF8C00';
            m.style.color = '#FF8C00';
            m.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
            m.style.border = 'color: #FF8C00';
            setTimeout(function () {
                buttons[3].style.border = '10px solid #552f00';
                m.style.color = '#ffffff';
                m.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        case 4:
            audio4.pause();
            audio4.currentTime = 0;
            audio4.play();
            buttons[4].style.border = '10px solid #FF8C00';
            k.style.color = '#FF8C00';
            k.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
            k.style.border = 'color: #FF8C00';
            setTimeout(function () {
                buttons[4].style.border = '10px solid #552f00';
                k.style.color = '#ffffff';
                k.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        case 5:
            audio5.pause();
            audio5.currentTime = 0;
            audio5.play();
            buttons[5].style.border = '10px solid #FF8C00';
            i.style.color = '#FF8C00';
            i.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
            i.style.border = 'color: #FF8C00';
            setTimeout(function () {
                buttons[5].style.border = '10px solid #552f00';
                i.style.color = '#ffffff';
                i.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        case 6:
            audio6.pause();
            audio6.currentTime = 0;
            audio6.play();
            buttons[6].style.border = '10px solid #FF8C00';
            t.style.color = '#FF8C00';
            t.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
            t.style.border = 'color: #FF8C00';
            setTimeout(function () {
                buttons[6].style.border = '10px solid #552f00';
                t.style.color = '#ffffff';
                t.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
            }, 150);
            break;
        default:
            break;
    }
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'w' || event.key === 'W') {

        IndexButton(0);
        isStarted = true;

    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        IndexButton(1);
        buttons[1].click();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 's' || event.key === 'S') {
        IndexButton(2);
        buttons[2].click();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'd' || event.key === 'D') {
        IndexButton(3);
        buttons[3].click();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'j' || event.key === 'J') {
        IndexButton(4);
        buttons[4].click();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'k' || event.key === 'K') {
        IndexButton(5);
        buttons[5].click();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'l' || event.key === 'L') {
        IndexButton(6);
        buttons[6].click();
    }
});
/*
buttons[0].addEventListener('click', function () {
    audio0.pause();
    audio0.currentTime = 0;
    audio0.play();
    buttons[0].style.border = '10px solid #FF8C00';
    d.style.color = '#FF8C00';
    d.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';


    setTimeout(function () {
        d.style.color = '#ffffff';
        buttons[0].style.border = '10px solid #552f00';
        d.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'w' || event.key === 'W') {

        buttons[0].click();
    }
});

buttons[1].addEventListener('click', function () {
    audio1.pause();
    audio1.currentTime = 0;
    audio1.play();
    buttons[1].style.border = '10px solid #FF8C00';
    r.style.color = '#FF8C00';
    r.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
    r.style.border = 'color: #FF8C00';
    setTimeout(function () {
        buttons[1].style.border = '10px solid #552f00';
        r.style.color = '#ffffff';
        r.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {

        buttons[1].click();
    }
});
buttons[2].addEventListener('click', function () {
    audio2.pause();
    audio2.currentTime = 0;
    audio2.play();
    buttons[2].style.border = '10px solid #FF8C00';
    u.style.color = '#FF8C00';
    u.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
    u.style.border = 'color: #FF8C00';
    setTimeout(function () {
        buttons[2].style.border = '10px solid #552f00';
        u.style.color = '#ffffff';
        u.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 's' || event.key === 'S') {

        buttons[2].click();
    }
});

buttons[3].addEventListener('click', function () {
    audio3.pause();
    audio3.currentTime = 0;
    audio3.play();
    buttons[3].style.border = '10px solid #FF8C00';
    m.style.color = '#FF8C00';
    m.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
    m.style.border = 'color: #FF8C00';
    setTimeout(function () {
        buttons[3].style.border = '10px solid #552f00';
        m.style.color = '#ffffff';
        m.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'd' || event.key === 'D') {

        buttons[3].click();
    }
});
buttons[4].addEventListener('click', function () {
    audio4.pause();
    audio4.currentTime = 0;
    audio4.play();
    buttons[4].style.border = '10px solid #FF8C00';
    k.style.color = '#FF8C00';
    k.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
    k.style.border = 'color: #FF8C00';
    setTimeout(function () {
        buttons[4].style.border = '10px solid #552f00';
        k.style.color = '#ffffff';
        k.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'j' || event.key === 'J') {

        buttons[4].click();
    }
});
buttons[5].addEventListener('click', function () {
    audio5.pause();
    audio5.currentTime = 0;
    audio5.play();
    buttons[5].style.border = '10px solid #FF8C00';
    i.style.color = '#FF8C00';
    i.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
    i.style.border = 'color: #FF8C00';
    setTimeout(function () {
        buttons[5].style.border = '10px solid #552f00';
        i.style.color = '#ffffff';
        i.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'k' || event.key === 'K') {

        buttons[5].click();
    }
});
buttons[6].addEventListener('click', function () {
    audio6.pause();
    audio6.currentTime = 0;
    audio6.play();
    buttons[6].style.border = '10px solid #FF8C00';
    t.style.color = '#FF8C00';
    t.style.textShadow = '0 0 5px #FF5733, 0 0 10px #FF5733, 0 0 15px #FF5733, 0 0 20px #FF5733';
    t.style.border = 'color: #FF8C00';
    setTimeout(function () {
        buttons[6].style.border = '10px solid #552f00';
        t.style.color = '#ffffff';
        t.style.textShadow = '0 0 5px rgba(255, 88, 51, 0), 0 0 10px rgba(255, 88, 51, 0), 0 0 15px rgba(255, 88, 51, 0), 0 0 20px rgba(255, 88, 51, 0)';
    }, 150);
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'l' || event.key === 'L') {

        buttons[6].click();
    }
});
*/
