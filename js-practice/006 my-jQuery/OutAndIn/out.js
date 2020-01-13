// 淡出
function fadeOut(element) {
    element.style.opacity = 1;
    var fadeOutTime = setInterval(function() {
        var opacity = parseFloat(element.style.opacity);
        opacity -= 0.1;
        element.style.opacity = opacity;
        if (element.style.opacity == 0 || element.style.opacity < 0) {
            element.style.opacity = 0;
            element.style.display = "none";
            clearInterval(fadeOutTime);
        }
    }, 500)
}

//卷上去
function slideUp(element) {
    // element.display = "block";
    if (!element.offsetHeight || element.offsetHeight <= 0) {
        return;
    }
    if (element.offsetHeight > 0) {
        var num = Math.floor(element.offsetHeight / 10);
        console.log(num);
    }
    var offsetHeight = parseFloat(element.offsetHeight);
    var slideUpTime = setInterval(function() {
        offsetHeight -= num;
        console.log(offsetHeight);
        element.style.height = offsetHeight + "px";
        if (offsetHeight == 0 || offsetHeight < 0) {
            offsetHeight = 0;
            element.style.display = "none";
            clearInterval(slideUpTime);
        }
    }, 200)
}