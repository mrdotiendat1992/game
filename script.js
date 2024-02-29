document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById('gameList');
            data.listtag.forEach(tag => {
                const tagLink = document.createElement('a');
                tagLink.href = `#${tag}`;
                tagLink.textContent = tag;

                const tagDiv = document.createElement('div');
                tagDiv.classList.add('tag');
                
                tagDiv.appendChild(tagLink);

                gameList.appendChild(tagDiv);
            });
        });
    });
