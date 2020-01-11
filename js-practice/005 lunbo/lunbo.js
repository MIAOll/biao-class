var prev = document.getElementById("arrow-left");
var next = document.getElementById("arrow-right");
var pic = document.getElementById("pic");
// var items = document.getElementsByClassName("items")[0];
var item = document.getElementsByClassName("item");
var num = pic.title;
num = parseInt(num);
num++;
setInterval(function() {
    var n = pic.title;
    n++;
    if (n == 6) {
        n = 1;
    }
    pic.src = "lunbo" + n + ".png";
    pic.title = n;
    clearActive();

    item[n - 1].className = "item active";


}, 4000);

function clearActive() {
    for (var a = 0; a < item.length; a++) {
        item[a].className = 'item';
    }
}

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
        clearActive();
        var index = this.title;
        // alert(index);
        index = parseInt(index);
        pic.src = "lunbo" + index + ".png";
        pic.title = index;
        this.className = 'item active';
    })
}

prev.addEventListener('click', function() {
    if (num == 1) {
        num = 5;
    } else {
        num--;
    }
    pic.src = "lunbo" + num + ".png";
    pic.title = num;
    clearActive();
    item[num - 1].className = "item active"
})

next.addEventListener('click', function() {
    if (num == 5) {
        num = 1;
    } else {
        num++;
    }
    pic.src = "lunbo" + num + ".png";
    pic.title = num;
    clearActive();
    item[num - 1].className = "item active";
})