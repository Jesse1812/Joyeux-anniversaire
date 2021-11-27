$('.image, .box1, .box2, .box3').hide();
$('#title').hover(function () {
  $('.box1').show(1000);
});
$('.box1').click(function () {
  $('.box2').show(600);
});
$('.box2').click(function () {
  $('.box3').show(600), $('.image').show(3000);
});
