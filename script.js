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
                tagElement.addEventListener('click', () => filterGames(tag, data.games));
                tagList.appendChild(tagElement);
            });
        });

    // Load all games initially
    displayGames([]);

    // Function to filter games based on tag
    function filterGames(tag, games) {
        const filteredGames = games.listgame.filter(game => game.listtag.includes(tag));
        displayGames(filteredGames);
    }

    // Function to display games
    function displayGames(games) {
        const gameList = document.getElementById('gameList');
        gameList.innerHTML = '';
        games.listgame.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.textContent = game.name;
            gameList.appendChild(gameElement);
        });
    }
});
