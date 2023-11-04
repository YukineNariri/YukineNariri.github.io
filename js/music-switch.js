let isPlaying = false;
let isLoaded = false;
let musicFunc = async function() {
    let btn = document.getElementById("music-btn");
    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.loop = true;
    btn.addEventListener('click', e => {
      if (!isPlaying) {
	  if (!isLoaded){
	      musicPlayer.load();
	      isLoaded = true;
	  }
          musicPlayer.play();
          isPlaying = true;
        }else {
        musicPlayer.pause();
        isPlaying = false;
      }
    });
};
musicFunc();
