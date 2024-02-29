document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('gameList');
            data.listtag.forEach(tag => {
                const tagLink = document.createElement('a');
                tagLink.href = `#${tag}`;
                tagLink.textContent = tag;
                tagLink.className = 'btn btn-primary';
                tagLink.style.width = '100px';

                gameList.appendChild(tagLink);

                data.forEach(game => {
                    if (game.listtag.includes(tag)) {
                        const gameDiv = document.createElement('div');
                        gameDiv.classList.add('game');

                        const description = document.createElement('p');
                        description.classList.add('description');
                        description.textContent = game.description;

                        const link = document.createElement('a');
                        link.href = game.downloadLink;
                        link.textContent = 'Tải về';

                        gameDiv.appendChild(description);
                        gameDiv.appendChild(link);

                        // Thiết lập hình ảnh là background của div game
                        const image = new Image();
                        image.src = game.image;
                        image.onload = function() {
                            gameDiv.style.backgroundImage = `url('${game.image}')`;
                        };

                        gameList.appendChild(gameDiv);
                    }
                });
            });
        });
});

