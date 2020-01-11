function displayCitations() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;

    var blockquote = document.getElementsByTagName("blockquote");
    var cit = document.createTextNode(blockquote[0].cite);
    var a = document.createElement("a");
    a.setAttribute("id", "cite");
    a.appendChild(cit);
    document.body.appendChild(a);
}
addLoadEvent(displayCitations);