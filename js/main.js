var imagslider = Array.from(document.querySelectorAll('.slider-container img'));
var nextbutton = document.getElementById('next');
var prevbutton = document.getElementById('prev');
var countslide = imagslider.length;
var slidenumberelement = document.getElementById('slide-number');
var currentsilde = 1;
nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;

var paginationelement = document.createElement('ul');
paginationelement.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= countslide; i++) {
    var paginationitem = document.createElement('li');
    paginationitem.setAttribute('data-index', i);
    paginationitem.appendChild(document.createTextNode(i));
    paginationelement.appendChild(paginationitem);
}
document.getElementById('indicators').appendChild(paginationelement);
var paginationul = document.getElementById('pagination-ul');
var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationbullets.length; i++) {
    paginationbullets[i].onclick = function () {
        currentsilde = parseInt(this.getAttribute('data-index'));
        checker();
    }
}
checker();

function nextslide() {
    if (!nextbutton.classList.contains('disabled')) {
        currentsilde++;
        checker();
    }
}

function prevslide() {
    if (!prevbutton.classList.contains('disabled')) {
        currentsilde--;
        checker();
    }
}

function checker() {
    removeallactives();
    slidenumberelement.textContent = 'slide #' + currentsilde + ' of ' + countslide;
    imagslider[currentsilde - 1].classList.add('active');
    paginationul.children[currentsilde - 1].classList.add('active');

    if (currentsilde == 1) {
        prevbutton.classList.add('disabled');
    } else {
        prevbutton.classList.remove('disabled');
    }
    if (currentsilde == countslide) {
        nextbutton.classList.add('disabled');
    } else {
        nextbutton.classList.remove('disabled');
    }
}

function removeallactives() {
    imagslider.forEach(function(img) {
        img.classList.remove('active');
    });
    paginationbullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    });
}
