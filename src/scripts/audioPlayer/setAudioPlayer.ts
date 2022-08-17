/* eslint-disable no-unused-vars */
import getTimeCodeFromNum from './getTimeCodeFromNum';
import changeTimeline from './changeTimeline';
import changeVolume from './changeVolume';
import muteVoluem from './muteVolume';
import songs from '../../data/songs.json';

const play: Element = document.querySelector('.play');
const playPrev: Element = document.querySelector('.play-prev');
const playNext: Element = document.querySelector('.play-next');
const songLength = document.querySelector('.length');
const songName = document.querySelector('.song-name__title');
let isPlay: boolean = false;
let songNum: number = 0;
const audio: HTMLAudioElement = new Audio();

const playAudio = (): void => {
  audio.src = songs[songNum].src;
  audio.currentTime = 0;
  songLength.textContent = songs[songNum].duration;
  songName.textContent = songs[songNum].title;
  audio.play();
  isPlay = true;
  play.classList.add('pause');
};

const stopAudio = (): void => {
  audio.pause();
  isPlay = false;
  play.classList.remove('pause');
};

const playNextSong = (): void => {
  if (songNum + 1 === songs.length) {
    songNum = 0;
  } else {
    songNum += 1;
  }
  playAudio();
};

const playPrevSong = (): void => {
  if (songNum - 1 < 0) {
    songNum = songs.length - 1;
  } else {
    songNum -= 1;
  }
  playAudio();
};

const setAudioPlayer = (): void => {
  play.addEventListener('click', (): void => {
    if (!isPlay) {
      playAudio();
    } else {
      stopAudio();
    }
  });

  playNext.addEventListener('click', playNextSong);

  playPrev.addEventListener('click', playPrevSong);

  changeTimeline(audio);
  changeVolume(audio);
  muteVoluem(audio);
};

export default setAudioPlayer;
