let blockQuotes = ["Life is hard. After all, it kills you.",
    "A good rule to remember for life is that when it comes to plastic surgery and sushi, never be attracted by a bargain.",
    "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later.",
    "The secret of staying young is to live honestly, eat slowly, and lie about your age.",
    "When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what?",
    "Those people who think they know everything are a great annoyance to those of us who do.",
    "My favorite thing to do on this planet is to play games. And if you don’t enjoy games, then you’re really missing the point of what this life is.",
    "I believe that if life gives you lemons, you should make lemonade, and try to find somebody whose life has given them vodka, and have a party.",
    "The secret of staying young is to live honestly, eat slowly and lie about your age.",
    "I want my children to have all the things I couldn't afford. Then I want to move in with them."];

let quotesListElm = document.querySelector(".quotes-list");

// console.log(blockQuotes.length)
// console.log(quotesListElm);


let i = 0
let randomQuote = blockQuotes[Math.floor(Math.random() * blockQuotes.length)];

console.log(randomQuote);

function showRandomQuote() {
    quotesListElm.innerHTML = randomQuote;
}
showRandomQuote()






// console.log(blockQuotes[i]);