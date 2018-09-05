console.log('HELLO');


$(".fa-angle-left").click(function () { 
  $(".playlistLeft").toggle();
});

$(".fa-angle-right").click(function () { 
  $(".playlistLeft").toggle();
});

$("#final_song").click(function () { 
  $(this).find('audio')[0].play();
});




/* $('.laggen-btn').click(function(){
  $('section.laggen').toggle();
  $('.laggen-btn .show-text').toggle();
  $('.laggen-btn .hide-text').toggle();
}); */