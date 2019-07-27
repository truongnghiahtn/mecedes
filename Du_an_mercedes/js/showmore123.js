function showmore() {
    Showmore("hidden", "more", "hidden");

}

function hiddenmore() {
    Hiddenmore("hidden", "more", "hidden");
}

function showmore1() {
    Showmore("hidden_1", "more1", "hidden1");


}

function hiddenmore1() {
    Hiddenmore("hidden_1", "more1", "hidden1");
}

function showmore2() {
    Showmore("hidden_2", "more2", "hidden2");


}

function hiddenmore2() {
    Hiddenmore("hidden_2", "more2", "hidden2");
}

function Showmore(hidden, more, Hidden) {
    var add = document.getElementsByClassName(hidden);
    for (var i = 0; i < add.length; i++) {
        add[i].style.display = "block";
        add[i].style.opacity = "1";
        add[i].style.animation = "fadeInUp 2.5s ease";
    }
    var More = document.getElementById(more);
    var Hiden = document.getElementById(Hidden);
    More.style.display = "none";
    Hiden.style.display = "block";


}

function Hiddenmore(hidden, more, Hidden) {
    var add = document.getElementsByClassName(hidden)
    for (var i = 0; i < add.length; i++) {
        add[i].style.display = "none";
        add[i].style.opacity = "0";



    }
    var More = document.getElementById(more);
    var Hiden = document.getElementById(Hidden);
    More.style.display = "block";
    Hiden.style.display = "none";
}