const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const newQuote = document.querySelector('.new-quote');
const copyQuote = document.querySelector('.copy-quote');
const shareQuote = document.querySelector('.share-quote');

function randomNumber(){
    const randomNumber = Math.floor(Math.random() * window.quotes.length);
    return randomNumber;
}

quoteText.textContent = `${window.quotes[randomNumber()].text}`
quoteAuthor.textContent = `-${window.quotes[randomNumber()].author}`

newQuote.addEventListener('click', () => {
    const randomQuote = randomNumber();

    quoteText.textContent = `${window.quotes[randomQuote].text}`
    quoteAuthor.textContent = `-${window.quotes[randomQuote].author}`
})


copyQuote.addEventListener('click', () => {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`
    const copyMsg = document.querySelector('.hidden');

    navigator.clipboard.writeText(fullQuote)
    .then(() => {
        copyMsg.classList.add('show');
        setTimeout(() => {
            copyMsg.classList.remove('show');
        }, 1000);
        console.log('Quote Copied');
    })
    .catch(() => {
        console.log("Failed to copy", err);
    })
})

shareQuote.addEventListener('click', () => {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;

    if(navigator.share){
        navigator.share({
            title: 'Quote Generator',
            text: fullQuote,
            url: window.location.href
        })
        .then( () => console.log('Quote Shared'))
        .catch(() => console.log('Share Failed!', err));
    } else {
        alert('Sharing not supported in this browser');
    }
});