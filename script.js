const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const newQuote = document.querySelector('.new-quote');

function randomNumber(){
    const randomNumber = Math.floor(Math.random() * window.quotes.length);
    return randomNumber;
}

newQuote.addEventListener('click', () => {
    const randomQuote = randomNumber();

    quoteText.textContent = `${window.quotes[randomQuote].text}`
    quoteAuthor.textContent = `${window.quotes[randomQuote].author}`
})