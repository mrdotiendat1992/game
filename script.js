document.addEventListener("DOMContentLoaded", function() {
    fetch('game.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    });

