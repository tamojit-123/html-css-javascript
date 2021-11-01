const searchTermElem = document.querySelector('#searchTerm');
const searchResultElem = document.querySelector('#searchResult');

searchTermElem.focus();

searchTermElem.addEventListener('input', function (event) {
    console.log(event.target.value);
});

const search = async (searchTerm) => {
    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
        const response = await fetch(url);
        const searchResults = await response.json();

        // show the search result in the console
        console.log({
            'term': searchTerm,
            'results': searchResults.query.search
        });

    } catch (error) {
        console.log(error);
    }
}


