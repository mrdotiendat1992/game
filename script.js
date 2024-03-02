document.addEventListener("DOMContentLoaded", function () {
    // Load tags
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const tagList = document.getElementById('tagList');
            data.listtag.forEach(tag => {
                const tagElement = document.createElement('a');
                tagElement.textContent = tag;
                tagElement.style.padding = '10px';
                tagElement.className = 'btn btn-primary';
                tagElement.classList.add('tag');
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
            gameElement.style.backgroundImage = `url(${game.image})`;
            const gameLink = document.createElement('a');
            gameLink.href = game.downloadLink;
            gameLink.target = '_blank';
            gameLink.textContent = game.name;
            gameElement.appendChild(gameLink);
            gameElement.className = 'game';
            gameList.appendChild(gameElement);
        });
    }
});
