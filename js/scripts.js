$(document).ready(function() {
  $("button#blue").click(function() {
    $("body").removeClass("blue-background");
    $("body").addClass("blue-background");
  });

  $("button#green").click(function() {
    $("body").removeClass("green-background");
    $("body").addClass("green-background");
  });

});
