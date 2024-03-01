document.addEventListener("DOMContentLoaded", function () {
    // Load tags
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const tagList = document.getElementById('tagList');
            data.listtag.forEach(tag => {
                const tagElement = document.createElement('a');
                tagElement.textContent = tag;
                tagElement.classList.add('tag');
                tagElement.style.padding = '5px';
                tagElement.addEventListener('click', () => filterGames(tag, data.listgame));
                tagList.appendChild(tagElement);
            });
        });

    // Load all games initially
    displayGames([]);

    // Function to filter games based on tag
    function filterGames(tag, games) {
        const filteredGames = games.filter(game => game.tags.includes(tag));
        displayGames(filteredGames);
    }

    // Function to display games
    function displayGames(games) {
        const gameList = document.getElementById('gameList');
        gameList.innerHTML = '';
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game');
            gameElement.style.backgroundImage = `url('${game.image}')`;
            const gameDescription = document.createElement('p');
            gameDescription.textContent = game.description;
            const gameDownloadLink = document.createElement('a');
            gameDownloadLink.textContent = 'Download';

            gameElement.appendChild(gameDescription);
            gameElement.appendChild(gameDownloadLink);
        });
    }
});
