/**
 * 淡入淡出 ，上卷下拉完成50%，未能解决前后顺序问题。待学完对象后回头
 * https://blog.csdn.net/Rao_Limon/article/details/90137971#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80
 */
//淡入
function fadeIn(element) {
    element.style.opacity = 0;

    var fadeInTime = setInterval(function() {
        var opacity = parseFloat(element.style.opacity);
        opacity += 0.1;
        element.style.display = "block";
        // console.log(opacity);
        element.style.opacity = opacity;
        if (element.style.opacity == 1 || element.style.opacity > 1) {
            element.style.opacity = 1;
            clearInterval(fadeInTime);
        }
    }, 500)
}

function slideDown(element, offsetHeight) {
    element.style.display = "block";
    element.style.height = "0px";
    var num = Math.floor(offsetHeight / 10);
    var curHeight = 0;
    var slideDownTime = setInterval(function() {
        curHeight += num;
        console.log(curHeight);
        element.style.height = curHeight + "px";
        console.log(element.style.height);
        if (curHeight == offsetHeight || curHeight > offsetHeight) {
            curHeight = offsetHeight;
            flag = 0;
            clearInterval(slideDownTime);
        }
    }, 200)
}