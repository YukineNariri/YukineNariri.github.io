let isPlaying = false;
let musicFunc = async function() {
    let btn = document.getElementById("music-btn");
    let musicPlayer = document.getElementById("musicPlayer");
    btn.addEventListener('click', e => {
      if (!isPlaying) {
	  musicPlayer.load();
          musicPlayer.play();
          isPlaying = true;
        }else {
        musicPlayer.pause();
        isPlaying = false;
      }
    });
};
musicFunc();
