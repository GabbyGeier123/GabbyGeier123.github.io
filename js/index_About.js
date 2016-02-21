$(document).ready(function(){

    $("#whitebox").hide();
    $("#ReadLess").hide();
    $("#total").hide();

     $("#ReadMore").click(function(){
 		 $("#total").slideDown();
 		 $("#whitebox").slideDown();
        $("#ReadLess").show();
        $("#ReadMore").hide();
    });

        $("#ReadLess").click(function(){
        $("#total").slideUp();
        $("#whitebox").slideUp();
        $("#ReadMore").show();
        $("#ReadLess").hide();
    });

    $("#menu").click(function(){
     $("#header").toggleClass("expand");
     $("#menu").hide();
    });

    $("#header").click(function(){
     $("#header").toggleClass("expand");
     $("#header").hide();
     $("#menu").show();
    });
        });