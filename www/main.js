let tags = document.getElementsByTagName("LI");
function playSong(){
  for(let tag of tags){
   document.getElementById(tag.id).addEventListener("click", function(){
      document.getElementById('audio-' + tag.id).play();
    });
  }
}
 playSong();

function pauseSong(){
  let audioTag = document.getElementById('audio-bb');
    if(!audioTag.paused){
     alert("Playing");
    }
  }
pauseSong();























// $(".fa-angle-left").click(function () { 
//   $(".playlistleft").toggle();
// });

// $(".fa-angle-right").click(function () { 
//   $(".playlistleft").toggle();
// });

// $("#final_song").click(function () { 
//   $(this).find('audio')[0].play();
// });

// function pauseAudio(){
//   audio.pause();
// }

/* $('.laggen-btn').click(function(){
  $('section.laggen').toggle();
  $('.laggen-btn .show-text').toggle();
  $('.laggen-btn .hide-text').toggle();
}); */