/* eslint-disable no-param-reassign */
const volumeButton: HTMLElement | null = document.querySelector('.volume-ico');
let isMuted: boolean = false;
let currentVolume: number | null = null;

const muteVoluem = (audio: HTMLAudioElement) : void => {
  if (volumeButton) {
    volumeButton.addEventListener('click', (): void => {
      if (!isMuted) {
        currentVolume = audio.volume;
        audio.volume = 0;
        isMuted = true;
        volumeButton.classList.remove('fa-volume-high');
        volumeButton.classList.add('fa-volume-xmark');
      } else {
        audio.volume = currentVolume;
        isMuted = false;
        volumeButton.classList.remove('fa-volume-xmark');
        volumeButton.classList.add('fa-volume-high');
      }
    });
  }
};

export default muteVoluem;
