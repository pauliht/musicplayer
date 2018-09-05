console.log('HELLO');


$(".fa-angle-left").click(function () { 
  $(".playlistLeft").toggle();
});

$(".fa-angle-right").click(function () { 
  $(".playlistLeft").toggle();
});



function myFunction() {
  var x = document.getElementById('#playSong1').duration;
  document.getElementById("final_song.mp3").innerHTML = x;
}


/* $('.laggen-btn').click(function(){
  $('section.laggen').toggle();
  $('.laggen-btn .show-text').toggle();
  $('.laggen-btn .hide-text').toggle();
}); */