$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('.header').attr('id', 'myheader');
    } else {
        $('.header').removeAttr('id', 'myheader');
    }
})
let oldValue = 0;
window.addEventListener('scroll', function(e) {

    // Get the new Value
    newValue = window.pageYOffset;

    //Subtract the two and conclude
    if (oldValue - newValue < 0) {
        console.log("Down");
        var myhead = document.getElementById("myheader");
        myhead.style.transform = "translateY(-100px)";
        myhead.style.opacity = "0";
        myhead.style.transition = "all 1s"

    } else if (oldValue - newValue > 0) {
        console.log("Up");
        var myhead = document.getElementById("myheader");
        myhead.style.transform = "translateY(0px)";
        myhead.style.opacity = "1";
        myhead.style.transition = "all 0.5s"
    }

    // Update the old value
    oldValue = newValue;
});