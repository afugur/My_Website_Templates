
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 500) {
        document.getElementById("navbar").style.display = "none"
    } else {
        document.getElementById("navbar").style.display = "flex"
    }
}

function launch () {
    
    var rocketfire = document.getElementById("rocketlauncher");
    rocketfire.classList.add("launched")

    setTimeout(() => rocketfire.classList.remove("launched"),1000);

}

