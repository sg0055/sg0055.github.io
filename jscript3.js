var circ1 = document.getElementById('circ1');
circ1.addEventListener("click", pop);
var mask = document.getElementById('body')
var dx = [-370, 370, 270, -270, -270, 270];
var dy = [0, 0, -200, -200, 200, 200];


function test() {
    var x = document.getElementById('intro')
    console.log(x.style.fill);
}


function pop() {

    var txt = document.getElementById("mainc");
    var lis = document.getElementById('ulist');
    document.getElementById('body').classList.toggle('mask');
    circs = lis.getElementsByTagName("li");
    if (txt.innerText === "Hello!") {
        txt.innerText = "X";
        circ1.className = 'circ pop2 scaledo';
        for (var i = 0; i < circs.length; i++) {
            //var x = 'hsla(' + (Math.floor(Math.random() * 360)) + ', 80%, 60%, 2)';
            //circs[i].style.backgroundColor= x;
           // circs[i].style.border = "2px solid " + x;
            circs[i].classList.remove("fadout");
            circs[i].classList.add("fadin");
            circs[i].style.transform = 'translate(' + dx[i] + 'px,' + dy[i] + 'px)';
            
        }

    }




    else {
        txt.innerText = "Hello!";
        circ1.className = 'circ pop1 scaleup';
        var i;
        for (i = 0; i < circs.length; i++) {
            circs[i].classList.remove("fadin");
            circs[i].classList.add("fadout");
            circs[i].style.transform = 'translate(0px,0px)';
        }

    }

}

