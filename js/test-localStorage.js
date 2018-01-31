$(document).ready(function() {
    console.log("ready!");
    $("#test").click(function() {

        window.sessionStorage.setItem('car', 'Smart ForFour');
        var b = window.sessionStorage.getItem('car');

        sessionStorage.removeItem('car');


        $('#name').text(b);

        alert(b);
        console.log(b);
    });
});

// window.localStorage.setItem("value1", true);

// var yourvar = window.localStorage.getItem("value1");
// console.log(yourvar);