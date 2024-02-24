function showDescription(element) {
    var description = element.querySelector('.description');
    description.classList.add('visible');
}

function hideDescription(element) {
    var description = element.querySelector('.description');
    description.classList.remove('visible');
}

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

                const image = document.createElement('img');
                image.src = game.image;
                image.alt = game.name + " Image"; // Đặt alt cho ảnh

                const description = document.createElement('p');
                description.classList.add('description');
                description.textContent = game.description;

                const link = document.createElement('a');
                link.href = game.downloadLink;
                link.textContent = 'Tải về';

                gameDiv.appendChild(title);
                gameDiv.appendChild(image); // Thêm ảnh vào div game
                gameDiv.appendChild(description);
                gameDiv.appendChild(link);

                gameList.appendChild(gameDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
