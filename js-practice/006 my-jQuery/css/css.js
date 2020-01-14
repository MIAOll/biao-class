function css(element, va, value) {
    element.setAttribute("style", va + ":" + value);
}

function addCss(element, va, value) {
    var prev = element.style.cssText;
    console.log(element.style.cssText);
    var now = prev + va + ":" + value + ";";
    element.style.cssText = now;
}