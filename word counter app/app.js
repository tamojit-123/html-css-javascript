const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

// create a new instance of Word Counter
new WordCounter(inputText);

// render the
const render = (e) => {
    statElem.innerHTML = `<p>You've written <span class="highlight">${e.detail.wordStat.words} words</span> 
        and <span class="highlight">${e.detail.wordStat.characters} characters</span>.</p>`;
}

inputText.addEventListener('count', render);