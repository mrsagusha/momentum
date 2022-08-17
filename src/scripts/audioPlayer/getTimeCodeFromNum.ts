/* eslint-disable radix */
const getTimeCodeFromNum = (num: number): string => {
  let seconds: number = Math.floor(num);
  let minutes: number = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  const hours: number = Math.floor(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) {
    return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  }
  return `${String(hours).padStart(2, '0')}:${minutes}:${String(seconds % 60).padStart(2, '0')}`;
};

export default getTimeCodeFromNum;
