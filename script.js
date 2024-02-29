document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('gameList');
            data.listtag.forEach(tag => {
                const tagLink = document.createElement('a');
                tagLink.textContent = tag;
                tagLink.className = 'btn btn-primary';
                tagLink.style.width = '100px';
                tagLink.onclick = function() {
                    fetch('game.json')
                        .then(response => response.json())
                        .then(data => {
                            const gameList = document.getElementById('gameList');
                            gameList.innerHTML = '';
                            data.games.forEach(game => {
                                if (game.tags.includes(tag)) {
                                    const gameItem = document.createElement('div');
                                    gameItem.className = 'game';
                                    gameItem.style.backgroundImage = `url(${game.image})`;
                                    
                                    const gameDescription = document.createElement('p');
                                    gameDescription.textContent = game.description;
                                    gameDescription.className = 'description';

                                    const gameLink = document.createElement('a');
                                    gameLink.textContent = 'Download';
                                    gameLink.href = game.downloadLink;

                                    gameList.appendChild(gameItem);

                                }
                            })
                        })
                }
                gameList.appendChild(tagLink);
                
            });
        });

    });
