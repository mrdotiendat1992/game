function showDescription(element) {
    var description = element.querySelector('.description');
    description.classList.add('visible');
}

function hideDescription(element) {
    var description = element.querySelector('.description');
    description.classList.remove('visible');
}

document.addEventListener("DOMContentLoaded", function() {
    // Load dữ liệu từ file JSON
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('gameList');

            // Duyệt qua mỗi game trong dữ liệu JSON
            data.forEach(game => {
                // Tạo các phần tử HTML tương ứng
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

                // Thêm các phần tử vào gameDiv
                gameDiv.appendChild(title);
                gameDiv.appendChild(description);
                gameDiv.appendChild(link);

                // Thêm gameDiv vào gameList
                gameList.appendChild(gameDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
