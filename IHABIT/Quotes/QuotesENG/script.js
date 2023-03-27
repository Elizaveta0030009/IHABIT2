const endpoint = 'quotes.json';
const quoteContainer = document.querySelector('#quote');
const button = document.querySelector('#btn');

let quotes = [];

function getQuotes() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => (quotes = data))
    .catch((err) => console.log(err));
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const quote = getRandomQuote();
  const html = `
    <blockquote>
      <p>${quote.quote}</p>
      <cite>${quote.author}</cite>
    </blockquote>
  `;
  quoteContainer.innerHTML = html;
}

button.addEventListener('click', displayQuote);

getQuotes();
