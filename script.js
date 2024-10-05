const audio1 = document.getElementById("playContinueSong");
const audio2 = document.getElementById("playEndSong");

function playContinueSong() {
  audio2.pause();
  audio2.currentTime = 0;
    if (audio1.paused) {
      audio1.play();
    } else {
      audio1.pause();
    }
}

function endSong() {
  audio1.pause();
  audio1.currentTime = 0;
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
  }
}
