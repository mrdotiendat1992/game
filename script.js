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
            });
        });
    });
