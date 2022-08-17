/* eslint-disable no-param-reassign */
/* eslint-disable radix */
const volumeSlider: Element | null = document.querySelector('.volume-slider');
const volumePercentage: HTMLElement | null = document.querySelector('.volume-percentage');

const changeVolume = (audio: HTMLAudioElement): void => {
  if (volumeSlider) {
    volumeSlider.addEventListener('click', (e: any): void => {
      const sliderWidth: string = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      if (volumePercentage) volumePercentage.style.width = `${newVolume * 100}%`;
    }, false);
  }
};

export default changeVolume;
