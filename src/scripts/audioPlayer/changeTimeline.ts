/* eslint-disable no-param-reassign */
/* eslint-disable no-mixed-operators */

import getTimeCodeFromNum from './getTimeCodeFromNum';

/* eslint-disable radix */
const timeline: Element | null = document.querySelector('.timeline');
const progressBar: HTMLElement | null = document.querySelector('.progress');

const changeTimeline = (audio: HTMLAudioElement): void => {
  if (timeline) {
    timeline.addEventListener('click', (e: any) => {
      const timelineWidth: string = window.getComputedStyle(timeline).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
      audio.currentTime = timeToSeek;
    }, false);
  }

  if (progressBar) {
    setInterval((): void => {
      progressBar.style.width = `${audio.currentTime / audio.duration * 100}%`;
      document.querySelector('.current').textContent = getTimeCodeFromNum(audio.currentTime);
    }, 500);
  }
};

export default changeTimeline;
