$ (document).ready(function(){
  
  
  $("ul li:first").addClass("selected");
  $("section article:eq(1)").addClass("middle");
  $("section article:eq(4)").addClass("middle");
  $(".list-item:odd").addClass("highlighted");

  
$(".list-item:last").css({
  border: "1px solid #eee",
});

$("input:text").focus(function(){
  $(this).css({
    border: "1px solid red",
  })
});

$("input:text").blur(function(){
  $(this).css({
    border: "1px solid black",
  })
});
































});