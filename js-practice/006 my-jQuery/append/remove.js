function remove(element) {
    var parent = element.parentNode;

    var newParent = document.createElement("div");
    console.log(parent.innerHTML);
    newParent.appendChild(element); //直接用新爹把他带走


    var str = parent.innerHTML;
    console.log(str);
    parent.innerHTML = str;
}


function empty(element) {
    console.log(element.innerHTML);
    element.innerHTML = " ";
}