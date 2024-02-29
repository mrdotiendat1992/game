document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('gameList');
            const gamesByTag = {};
            data.forEach(game => {
                game.tags.forEach(tag => {
                    if (!gamesByTag[tag]) {
                        gamesByTag[tag] = [];
                    }
                    gamesByTag[tag].push(game);
                });
            });
        });
    });

