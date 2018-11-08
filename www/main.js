let musicList= [
  {
    
    artist: "Lady Gaga",
    song: "Million reasons",
    mp3: "/mp3/dont_leave.mp3",
    pic: "/img/million_reasons.jpg"
  },
  {
    artist: "MØ",
    song: "Don't leave",
    mp3: "/mp3/dont_leave.mp3",
    pic: "/img/dont_leave.jpg"
  },
  {
    artist: "Lykke Li",
    song: "I follow rivers",
    mp3: "/mp3/i_follow_rivers.mp3",
    pic: "/img/i_follow_rivers.jpg"
  },
  {
    artist: "Amy Windehouse",
    song: "Back to black",
    mp3: "/mp3/back_to_black.mp3",
    pic: "/img/back_to_black.jpg"
  },
  {
    artist: "Tove Lo",
    song: "Disco tits",
    mp3: "/mp3/disco_tits.mp3",
    pic: "/img/disco_tits.jpg"
  },
  {
    artist: "MØ",
    song: "BB",
    mp3: "/mp3/bb.mp3",
    pic: "/img/bb.jpg"
  }
]

musicList.forEach((item, index) =>{
  $('.list-group').append(`
  <li id="final_song" type="button" class="list-group-item list-group-item-action d-flex">
  <img src=${item.pic} class="rounded float-left p-2" alt="final_song">
  <div class="artistsong p-2">
    <span>
      <p>${item.artist}</p>
    </span>
    <span>
      <p>${item.song}</p>
    </span>
  </div>
  <i class="fas fa-play-circle ml-auto p-2"></i>
  <audio id="audio-final_song" src=${item.mp3} type="audio/mpeg"></audio>
  </li>
  `)
})

 







// let tags = document.getElementsByTagName("LI");
// function playSong(){
//   for(let tag of tags){
//    document.getElementById(tag.id).addEventListener("click", function(){
//       document.getElementById('audio-' + tag.id).play();
//     });
//   }
// }
//  playSong();

// function pauseSong(){
//   let audioTag = document.getElementById('audio-bb');
//     if(!audioTag.paused){
//      alert("Playing");
//     }
//   }
// pauseSong();























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