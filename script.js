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
                tagLink.onClick = function() {
                    fetch('game.json')
                        .then(response => response.json())
                        .then(data => {
                            const gameList = document.getElementById('gameList');
                            gameList.innerHTML = '';
                            data.games.forEach(game => {
                                if (game.tags.includes(tag)) {
                                    const gameItem = document.createElement('div');
                                    gameItem.className = 'game';
                                    gameItem.innerHTML = `
                                        <img src="${game.image}" alt="${game.name}">
                                        <h3>${game.name}</h3>
                                        <p>${game.description}</p>
                                        <a href="${game.downloadLink}" target="_blank">Download</a>
                                    `;
                                    gameList.appendChild(gameItem);
                                    
                                }
                            })
                        })
                }
                gameList.appendChild(tagLink);
                
            });
        });

    });
