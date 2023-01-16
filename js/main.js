$(document).ready(function () {
  alert("Hi");
  $("#menu").click(function () {
    $(this).toggleClass("fa-solid fa-xmark");
    $("header").toggleClass("toggle");
  });
});
