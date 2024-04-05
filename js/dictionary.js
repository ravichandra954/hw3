function searchDictionary() {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput !== '') {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
            .then(response => response.json())
            .then(data => displayResults(data))
            .catch(error => console.error('Error:', error));
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    data.forEach(entry => {
        const meanings = entry.meanings.map(meaning => meaning.definitions.map(def => def.definition).join('<br>')).join('<br><br>');
        const resultHTML = `
            <div class="entry">
                <h2>${entry.word}</h2>
                <p>${meanings}</p>
            </div>
        `;
        resultsDiv.insertAdjacentHTML('beforeend', resultHTML);
    });
}
