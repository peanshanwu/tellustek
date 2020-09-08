$(document).ready(function () {

    // best sellers card-1
    $("#bestSellers--productName__1").mouseenter(function () {
        $("#bestSellers--productName__1").css("display", "none");
    });
    $("#bestSellers--icon__1").mouseleave(function () {
        $("#bestSellers--productName__1").css("display", "block");
    });

    // best sellers card-2
    $("#bestSellers--productName__2").mouseenter(function () {
        $("#bestSellers--productName__2").css("display", "none");
    });
    $("#bestSellers--icon__2").mouseleave(function () {
        $("#bestSellers--productName__2").css("display", "block");
    });
    
    // best sellers card-3
    $("#bestSellers--productName__3").mouseenter(function () {
        $("#bestSellers--productName__3").css("display", "none");
    });
    $("#bestSellers--icon__3").mouseleave(function () {
        $("#bestSellers--productName__3").css("display", "block");
    });
});