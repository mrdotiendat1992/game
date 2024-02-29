document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
    .then(response => response.json())
    .then(data => {
        const gameListDiv = document.getElementById('gameList');
        data.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.innerHTML = `
                <h2>${game.name}</h2>
                <p>${game.description}</p>
                <p>Tag: ${game.tag}</p>
                <a href="${game.downloadLink}">Download</a>
                <img src="${game.image}" alt="${game.name}">
            `;
            gameListDiv.appendChild(gameDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
