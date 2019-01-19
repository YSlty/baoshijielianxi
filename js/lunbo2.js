function $(that) {
        return document.getElementsByClassName(that)[0]
    }
var arrimg=$("car-lunbo").getElementsByTagName("img")
var classes=["p1","p2","p3","p4","p5"]
var arrbtn1=$("carlunbo").getElementsByClassName("img1")[0]
var arrbtn2=$("carlunbo").getElementsByClassName("img2")[0]
let lock=false;
arrbtn1.onclick = function() {

    if (lock == true) {
        return;
    }
    lock = true;
    setTimeout(function() {
            lock = false;
        },2000)
    var firstclass = classes.shift();
    classes.push(firstclass);
    console.log(classes);
    for (var i = 0; i < classes.length; i++) {
        arrimg[i].className = classes[i];
    }
}
arrbtn2.onclick = function() {
    if (lock == true) {
        return;
    }
    lock = true;

    setTimeout(function() {
            lock = false;
        }, 2000)
    classes.unshift(classes.pop());
    console.log(classes);
    for (var i = 0; i < classes.length; i++) {
        arrimg[i].className = classes[i];
    }
}
