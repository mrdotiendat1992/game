document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameListContainer = document.getElementById('gameList');

            // Tạo một đối tượng dữ liệu mới nhóm các trò chơi theo tag
            const gamesByTag = {};
            data.forEach(game => {
                game.tags.forEach(tag => {
                    if (!gamesByTag[tag]) {
                        gamesByTag[tag] = [];
                    }
                    gamesByTag[tag].push(game);
                });
            });

            // Lặp qua mỗi tag và hiển thị danh sách trò chơi tương ứng
            Object.keys(gamesByTag).forEach(tag => {
                const gamesForTag = gamesByTag[tag];
                const tagHeader = document.createElement('h2');
                tagHeader.textContent = tag;
                gameListContainer.appendChild(tagHeader);

                const tagGameList = document.createElement('div');
                tagGameList.classList.add('tag-game-list');

                gamesForTag.forEach(game => {
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

                    tagGameList.appendChild(gameDiv);
                });

                gameListContainer.appendChild(tagGameList);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});