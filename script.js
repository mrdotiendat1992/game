document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('gameList');

            data.forEach(game => {
                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');

                const title = document.createElement('h2');
                title.textContent = game.name;

                const description = document.createElement('p');
                description.classList.add('description');
                description.textContent = game.description;

                const link = document.createElement('a');
                link.href = game.downloadLink;
                link.textContent = 'Tải về';

                gameDiv.appendChild(title);
                gameDiv.appendChild(description);
                gameDiv.appendChild(link);

                // Thiết lập hình ảnh là background của div game
                const image = new Image();
                image.src = game.image;
                image.onload = function() {
                    gameDiv.style.backgroundImage = `url('${game.image}')`;
                };

                gameList.appendChild(gameDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
