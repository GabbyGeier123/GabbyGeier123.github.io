$(document).ready(function(){

    // This definitely works, but you could also use CSS to hide your #whitebox when the page loads.
    $("#whitebox").hide();

    $("#ReadMore").click(function(){
        $("#whitebox").slideDown();
        $("#ReadMore").hide();
    });
        });