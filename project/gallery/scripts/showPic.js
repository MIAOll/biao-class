/**
 * 
 */
function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByClassName) return false;
    if (!document.getElementsByTagName) return false;

    var prepareGallery = document.getElementById("gallery");
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; links.length; i++) {
        var galleryClick = links[i].onclick = function() {
                return showPic(this);
            }
            // links[i].onkeypress=galleryClick;
    }

}
/**
 * 
 * @param {} pic 
 */
function showPic(pic) {
    if (!document.getElementById("placeholder")) return true;
    if (!document.getElementById("description")) return false;

    var href = pic.getAttribute("href");
    var place = document.getElementById("placeholder");
    var name = document.getElementById("description");
    var imgname = pic.getAttribute("title");
    if (imgname == '') {
        name.innerText = "美图";
    } else {
        name.innerText = imgname;
    }

    place.setAttribute("src", pic);
    return false;
}
/**
 * @param  {} newElement
 * @param  {} targetElement
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastchild == targetElement)
        parent.appendChild(newElement);
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("gallery")) return false;

    //
    var gallery = document.getElementById("gallery");
    var placeholder = document.createElement("img");
    var description = document.createElement("p");
    var desc = document.createTextNode("孙芮");
    description.appendChild(desc);

    placeholder.setAttribute("src", "image/img4.jpg");
    placeholder.setAttribute("id", "placeholder");
    description.setAttribute("id", "description");

    insertAfter(description, gallery);
    insertAfter(placeholder, gallery);
}
/**
 * 
 * @param {*} func 
 */


addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);