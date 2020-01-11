function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;
    if (!document.getElementsByTagName("abbr")) return false;

    var abbrs = document.getElementsByTagName("abbr");
    var dl = document.createElement("dl");
    for (var i = 0; i < abbrs.length; i++) {
        var title = abbrs[i].title;
        var text = abbrs[i].innerText;

        console.log(title, text);
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");

        var definition = document.createTextNode(title);
        var key = document.createTextNode(text);

        dt.appendChild(key);
        dd.appendChild(definition);

        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    document.body.appendChild(dl);
}

// window.onload = function() {
//     this.displayAbbreviations();
// }
addLoadEvent(displayAbbreviations);