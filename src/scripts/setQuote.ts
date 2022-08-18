import quotes from '../data/quotes.json';

const setQuote = (): void => {
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
    quote.textContent = `— ${quotes[randomNum].text}`;
    author.textContent = `© ${quotes[randomNum].author}`;
  };

  changeQuoteButton.addEventListener('click', changeQuote);
};

export default setQuote;
