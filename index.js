async function fetchOldGames() {
    try {
        const response = await fetch('https://v2.api.noroff.dev/old-games');
        const data = await response.json();
        
        const gamesContainer = document.getElementById('games');

        data.data.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            gameCard.innerHTML = `
                <img src="${game.image.url}" alt="${game.image.alt}">
                <h3>${game.name}</h3>
                <p><strong>Released:</strong> ${game.released}</p>
                <p><strong>Genre:</strong> ${game.genre.join(', ')}</p>
            `;
            
            gamesContainer.appendChild(gameCard);
        });
    } catch (error) {
        console.error('Error fetching the games:', error);
    }
}

window.onload = fetchOldGames;