console.log('Loaded!');
var element = document.getElementById('name text');
element.innerHTML = 'New value';
var img = document.getElementById('madi');

function moveRight () {
    var marginLeft = 0;
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
    var interval = setinterval(moveRight, 100);
};