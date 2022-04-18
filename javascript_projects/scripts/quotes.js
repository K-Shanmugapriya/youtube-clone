const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `― Kent Beck`
}, {
    quote: `Talk is cheap. Show me the code.`,
    author: ` ― Linus Torvalds`
}, {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `― Harold Abelson`
}, {
    quote: `Truth can only be found in one place: the code.`,
    author: `― Robert C`
}, {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `― Ming Song`
},]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})