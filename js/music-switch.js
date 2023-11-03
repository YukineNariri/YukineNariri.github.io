let musicFunc = async function() {
    let btn = document.getElementById("music-btn");
    let audioPlayer = new Audio();
    let mediaSource;
    let mediaBuffer;
    let audioContext;
    btn.addEventListener('click', e => {
        if (!audioContext) {
             audioContext = new AudioContext();
             mediaSource = new MediaSource();
             audioPlayer.src = URL.createObjectURL(mediaSource);
             mediaSource.addEventListener('sourceopen', handleSourceOpen);
        } 
        if (audioPlayer.paused) {
             startStreaming();
             audioPlayer.play();
        } else {
             audioPlayer.pause();
    }
    });
};

function handleSourceOpen() {
  mediaBuffer = mediaSource.addSourceBuffer('audio/mpeg');
}

  async function startStreaming() { // 标记为异步函数
    const musicUrl = 'https://music.163.com/song/media/outer/url?id=33861587.mp3'; // 替换为音乐文件的路径

    try {
      const response = await fetch(musicUrl);
      const stream = response.body;
      const reader = stream.getReader();

      async function readChunk() {
        const { done, value } = await reader.read();
        if (done) {
          mediaSource.endOfStream();
          return;
        }

        mediaBuffer.appendBuffer(value);
        readChunk();
      }

      readChunk();
    } catch (error) {
      console.error('Netease is to blame：', error);
    }
  }
musicFunc();

