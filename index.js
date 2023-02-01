const btn = document.querySelector("#btn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const API = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btn.innerText = "Loading.....";
    btn.disabled = true;
    quote.innerText = 'Updating...'
    author.innerText = 'Updating...'

    const response = await fetch(API);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quote.innerText = quoteContent;
    author.innerText = "~ " + quoteAuthor;

    btn.innerText = "Get a quote";
    btn.disabled = false;
} catch (error) {
    quote.innerText = "An Error happened,please try again";
    author.innerText = "An Error happened";
    btn.innerText = "Get a quote";
    btn.disabled = false;
  }
}

getQuote()

btn.addEventListener("click", getQuote);
