/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import getTimeCodeFromNum from './getTimeCodeFromNum';
import changeTimeline from './changeTimeline';
import changeVolume from './changeVolume';
import muteVoluem from './muteVolume';
import songs from '../../data/songs.json';

const play: Element = document.querySelector('.play');
const playPrev: Element = document.querySelector('.play-prev');
const playNext: Element = document.querySelector('.play-next');
const songsList: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.play-item');
const songLength: Element = document.querySelector('.length');
const songName: Element = document.querySelector('.song-name__title');
let isPlay: boolean = false;
let songNum: number = 0;
const audio: HTMLAudioElement = new Audio();
let audioCurrentTime: number = 0;

const playAudio = (): void => {
  audio.src = songs[songNum].src;
  audio.currentTime = audioCurrentTime;
  songLength.textContent = songs[songNum].duration;
  songName.textContent = `${songs[songNum].title} — Sleep Dealer`;
  for (let i = 0; i < songsList.length; i += 1) {
    if (songsList[i].textContent === songs[songNum].title) {
      songsList[i].style.opacity = '2';
      songsList[i].previousElementSibling.classList.remove('fa-play');
      songsList[i].previousElementSibling.classList.add('fa-pause');
    }
  }
  audio.play();
  isPlay = true;
  play.classList.add('pause');
};

const stopAudio = (): void => {
  for (let i = 0; i < songsList.length; i += 1) {
    if (songsList[i].textContent === songs[songNum].title) {
      songsList[i].previousElementSibling.classList.remove('fa-pause');
      songsList[i].previousElementSibling.classList.add('fa-play');
    }
  }
  audioCurrentTime = audio.currentTime;
  audio.pause();
  isPlay = false;
  play.classList.remove('pause');
};

const playNextSong = (): void => {
  audioCurrentTime = 0;
  if (songNum + 1 === songs.length) {
    songNum = 0;
  } else {
    songNum += 1;
  }
  for (let i = 0; i < songsList.length; i += 1) {
    songsList[i].style.opacity = '';
    songsList[i].previousElementSibling.classList.remove('fa-pause');
    songsList[i].previousElementSibling.classList.add('fa-play');
  }
  playAudio();
};

const playPrevSong = (): void => {
  audioCurrentTime = 0;
  if (songNum - 1 < 0) {
    songNum = songs.length - 1;
  } else {
    songNum -= 1;
  }
  for (let i = 0; i < songsList.length; i += 1) {
    songsList[i].style.opacity = '';
    songsList[i].previousElementSibling.classList.remove('fa-pause');
    songsList[i].previousElementSibling.classList.add('fa-play');
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

  for (let i = 0; i < songsList.length; i += 1) {
    songsList[i].addEventListener('click', (): void => {
      songsList.forEach((el) => {
        el.style.opacity = '';
        el.previousElementSibling.classList.remove('fa-pause');
        el.previousElementSibling.classList.add('fa-play');
      });
      for (let j = 0; j < songs.length; j += 1) {
        if (songs[j].title === songsList[i].textContent) {
          songNum = j;
        }
      }
      playAudio();
    });
  }

  playNext.addEventListener('click', playNextSong);

  playPrev.addEventListener('click', playPrevSong);

  changeTimeline(audio);
  changeVolume(audio);
  muteVoluem(audio);

  setInterval(() => {
    if (`0${getTimeCodeFromNum(audio.currentTime)}` === songs[songNum].duration) playNextSong();
  }, 500);
};

export default setAudioPlayer;
