let musiclist= [
  {
    artist: "MØ",
    song: "BB",
    mp3: "/mp3/bb.mp3",
    pic: "/img/bb.jpg"
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
    song: "Don't leave",
    mp3: "/mp3/dont_leave.mp3",
    pic: "/img/dont_leave.jpg"
  }
]

let audio = musiclist[0];


musiclist.forEach((track, index) =>{
  $('.musicList').append(`
  <li type="button" class="list-group-item list-group-item-action d-flex">
  <img src=${track.pic} class="rounded float-left p-2" alt="final_song">
  <div class="artistsong p-2">
    <span>
      <p>${track.artist}</p>
    </span>
    <span>
      <p>${track.song}</p>
    </span>
  </div>
  <i class="fas fa-play-circle ml-auto p-2"></i>
  <audio id="audio-final_song" src=${track.mp3} type="audio/mpeg"></audio>
  </li>
  `)
})

