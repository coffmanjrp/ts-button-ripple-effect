"use strict";
var buttons = document.querySelectorAll('.ripple');
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // const x = e.offsetX;
        // const y = e.offsetY;
        var x = e.clientX;
        var y = e.clientY;
        var buttonTop = e.target.offsetTop;
        var buttonLeft = e.target.offsetLeft;
        var xInside = x - buttonLeft;
        var yInside = y - buttonTop;
        var circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";
        this.appendChild(circle);
        setTimeout(function () { return circle.remove(); }, 500);
    });
});
