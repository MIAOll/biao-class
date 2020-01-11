window.onload=function(){
    let test=document.getElementById("test");
    let newnode=document.createElement("a");
    test.appendChild(newnode);
    let text1=document.createTextNode("hello");
    newnode.appendChild(text1);
}