function prepareSlideshow() {
    // Make sure the browser understands the DOM methods
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    // Make sure the elements exist
    if (!document.getElementById("intro")) return false;
    if (!document.getElementById("preview")) return false;
    // Apply styles to the preview image
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    // Get all the links in the list
    var list = document.getElementById("intro");
    var links = list.getElementsByTagName("a");
    // Attach the animation behavior to the mouseover event
    links[0].onmouseover = function() {
        moveElement("preview", -1025, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -2050, 0, 10);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -3075, 0, 10);
    }
    links[3].onmouseover = function() {
        moveElement("preview", -4100, 0, 10);
    }
}
addLoadEvent(prepareSlideshow);