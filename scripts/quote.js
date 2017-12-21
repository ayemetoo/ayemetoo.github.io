//list of quotes

var quotes = ['Do not take life too seriously. You will never get out of it alive.', 'The place where you lock yourself in and lock all else out - that\'s not your home. Your home is sometimes a place you travel long and far to find.', 'To succeed in life, you need three things: a wishbone, a backbone and a funny bone.', 'It doesn\'t matter what you wear.... Only the heart that beats inside of ya!', 'A day without sunshine is like, you know, night.', 'The world ends with you. If you want to enjoy life, expand your world. You gotta push your horizons as far as they’ll go.'];

var author = ['Elbert Hubbard', 'Geralt (The Witcher 3)', 'Roba McEntire', 'Donald and Goofy (Kingdom Hearts)', 'Steve Martin', 'Mr. H (The World Ends With You)'];

//script for these quotes

window.onload = init;

//choose a quote
function init() {
    var index = randIndex();
    var quote = document.querySelector('#inspirational');
    quote.innerHTML = quotes[index] + '<br> - <i>' + author[index] + '</i>';

}

function randIndex() {
  return Math.floor(Math.random() * quotes.length);
}
