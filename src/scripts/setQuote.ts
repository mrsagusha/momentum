import quotesRus from '../data/quotes-rus.json';
import quotesEn from '../data/quotes-en.json';

const quote: Element = document.querySelector('.quote');
const author: Element = document.querySelector('.author');
const changeQuoteButton: Element = document.querySelector('.change-quote');
let prevRandomNum: number | null = null;

const changeQuote = (): void => {
  let randomNum: number = Math.round(Math.random() * 30);

  if (randomNum === prevRandomNum) {
    randomNum = Math.round(Math.random() * 30);
  }

  prevRandomNum = randomNum;
  if (window.localStorage.getItem('language') === 'rus') {
    quote.textContent = `— ${quotesRus[randomNum].text}`;
    author.textContent = `© ${quotesRus[randomNum].author}`;
  } else {
    quote.textContent = `— ${quotesEn[randomNum].text}`;
    author.textContent = `© ${quotesEn[randomNum].author}`;
  }
};

const setQuote = (): void => {
  changeQuoteButton.addEventListener('click', (): void => {
    [quote, author].forEach((el) => {
      el.classList.remove('visible');
      el.classList.add('hidden');
      setTimeout((): void => {
        el.classList.remove('hidden');
        el.classList.add('visible');
      }, 300);
      setTimeout(() => {
        el.classList.remove('visible');
      }, 400);
    });
    setTimeout(changeQuote, 300);
  });
};

export { setQuote, changeQuote };
