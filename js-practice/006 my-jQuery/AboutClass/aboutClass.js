function classCut(element) {
    element.className = element.className.trim();
    var names = element.className.split(" ");
    return names;
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function removeClass(element, value) {
    if (!element.className) {
        console.log("该元素没有这个类" + value + ",无法删除");
        // alert("该元素没有这个类" + value + ",无法删除");
        return;
    } else {
        var names = classCut(element);
        for (var i = 0; i < names.length; i++) {

            if (names[i] == value) {
                name[i] == " ";
                break;
            }
        }

        if (i == names.length) {
            console.log("该元素没有这个类" + value + ",无法删除");
            // alert("该元素没有这个类" + value + ",无法删除");
        }
        var newClass = names[0];
        for (var n = 1; n < names.length; n++) {
            newClass.concat(names[n]);
        }
        element.className = newClass;
        return;
    }

}

function hasClass(element, value) {
    var names = classCut(element);
    for (var i = 0; i < names.length; i++) {
        if (names[i] == value) {
            return true;
        }
        return false;
    }
}