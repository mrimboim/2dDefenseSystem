function myFunction() {
    // alert("bingbong");
    var x = document.getElementById("hider");
    var j = document.getElementById('topbottommarg');
    var m = document.getElementById('morebutton');
    var q = document.getElementById('footerid');

        x.style.display = "flex";
        j.style.marginBottom = "0%";
        m.style.display = "none";
        q.style.display = "flex";
 
}

function backToNorm() {
    // alert("bingbong");
    var x = document.getElementById("hider");
    var j = document.getElementById('topbottommarg');
    var m = document.getElementById('morebutton');
    var l = document.getElementById('lessbutton');
    var q = document.getElementById('footerid');


    x.style.display = "none";
    j.style.marginBottom = "3%";
    m.style.display = "flex"
    q.style.display = "none";
}