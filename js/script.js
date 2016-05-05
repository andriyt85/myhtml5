$(document).ready(function () {
    function init() {
        if (localStorage["name"]) {
        $('#name').val(localStorage["name"]);
        }
        if (localStorage["lname"]) {
        $('#lname').val(localStorage["lname"]);
        }
        if (localStorage["email"]) {
        $('#email').val(localStorage["email"]);
        }
        if (localStorage["age"]) {
        $('#age').val(localStorage["age"]);
        }
        if (localStorage["birthday"]) {
        $('#birthday').val(localStorage["birthday"]);
        }
        }
        init();
    }); 
        
$('.store').change(function () {
localStorage[$(this).attr('name')] = $(this).val();
}); 

$('#reset').click(function() {
localStorage.clear();
}); 