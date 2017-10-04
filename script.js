/* Exercise 2: Color picker */





function setPreviewColor(passedcolor){
  var co =($('#color').val());
  $('.preview').css('background-color',passedcolor);
  $('.color-code').text($('.preview').css('background-color'));
};

$(document).on('keyup', '#color', function() {
    var co =($('#color').val());
    setPreviewColor(co);
    $('.color-code').text($('.preview').css('background-color'));
});

function addBox(co){
  //var co =($('#color').val());
  var countcolors = $('#colors > div').length;
  if(countcolors >= 16){
    {$('#colors').children().last().remove()};
  }
  var cube = ('<div class="item" style="background-color: ' + co+ ';"></div>');


$('#colors').prepend(cube);
};


$(document).on('click', '#add-to-favorite', function() {
  var co = ($('#color').val());
  addBox(co);



  $("#color").val("");
});
var previewColor;

$(document).ready(function() {
$('#colors').on('mouseenter','.item',function(){
previewColor = $('.preview').css('background-color');
var shade =($(this).css('background-color'));
$('.preview').css('background-color',shade);
$('.color-code').text($('.preview').css('background-color'));



$('#colors').on('mouseleave','div.item', function(){
  $('.preview').css('background-color', previewColor );
  $('.color-code').text($('.preview').css('background-color'));
});
});

$('#colors')
  var colors = [ '22ac5e', 'd68236', '770077' ];
  var indice = Math.floor( Math.random() * colors.length );
  setPreviewColor(colors[indice]);
  colors.forEach(function(color){
    addBox(color);

  });
});

$(document).on('click', '#add-to-favorite', function(){
  $('#color').val('').focus();
});
