function append(element, node) {
    element.innerHTML += node;
}

function prepend(element, node) {
    var text = element.innerHTML;
    element.innerHTML = " ";
    element.innerHTML += node;
    element.innerHTML += text;
}

function after(targetElement, newElement) {
    var parent = targetElement.parentNode;
    var parentStr = parent.innerHTML;

    var newParent = document.createElement("div");
    newParent.appendChild(targetElement);
    var str1 = newParent.innerHTML;

    var str2 = str1 + " " + newElement;
    console.log(str2);
    var newInnerHTML = parentStr.replace(str1, str2);
    parent.innerHTML = newInnerHTML;

}

function before(targetElement, newElement) {
    var parent = targetElement.parentNode;
    var parentStr = parent.innerHTML;

    var newParent = document.createElement("div");
    newParent.appendChild(targetElement);
    var str1 = newParent.innerHTML;

    var str2 = newElement + " " + str1;
    console.log(str2);
    var newInnerHTML = parentStr.replace(str1, str2);
    parent.innerHTML = newInnerHTML;
}