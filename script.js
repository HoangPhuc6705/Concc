const ball1 = document.querySelectorAll('.ball')[0];
const ball2 = document.querySelectorAll('.ball')[1];
const dick = document.querySelector('.dick');
const head = document.querySelector('.head');

function colour() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    ball1.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    ball2.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    dick.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    head.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

ball1.onclick = function() {
    setInterval(colour, 200);
};
ball2.onclick = function() {
    setInterval(colour, 200);
};
dick.onclick = function() {
    setInterval(colour, 200);
};
head.onclick = function() {
    setInterval(colour, 200);
};

var main = document.querySelector('.container');
var slider = document.getElementById("slider");
var margin = document.getElementById("margin");
slider.oninput = function() {
    var size = this.value + 'px';
    var margin = (this.value - 170) + 'px';
    dick.style.height = size;
    dick.style.marginBottom = margin;
}

scale.oninput = function() {
    var size = this.value;
    main.style.scale = size;
    // main.style.marginTop = size + 30 + 'px'
}

margin.oninput = function() {
    var size = this.value + 'px';
    main.style.marginTop = size;
}