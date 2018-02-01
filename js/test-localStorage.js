$(document).ready(function() {



    $("#test").click(function() {

        window.sessionStorage.setItem('car', 'Smart ForFour');
        var b = window.sessionStorage.getItem('car');


        document.getElementById('name').innerHTML = b;

    });


});
// $(document).ready(function() {
//     if (localStorage) {

//         $("#test").click(function() {
//             // Get input name
//             var lastName = $("#test").val();

//             // Store data
//             sessionStorage.setItem("last_name", lastName);
//             alert("Your last name is saved.");

//             $("#name").click(function() {
//                 // Retrieve data
//                 alert("Hi, " + localStorage.getItem("first_name") + " " + sessionStorage.getItem("last_name"));
//             });
//         });
//     } else {
//         alert("Sorry, your browser do not support local storage.");
//     }

// });