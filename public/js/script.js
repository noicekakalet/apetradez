document.addEventListener('DOMContentLoaded', () => {
    const topThreeContainer = document.getElementById('top-three-container');
    const leaderboardBody = document.getElementById('leaderboard-body');

    const fakeLeaderboardData = [
        { place: 1, user: 'CryptoKing', reward: '$500', score: '1,250,340' },
        { place: 2, user: 'TradeMaster', reward: '$300', score: '1,110,980' },
        { place: 3, user: 'SatoshiN', reward: '$150', score: '980,500' },
        { place: 4, user: 'EtherChad', reward: '$100', score: '850,120' },
        { place: 5, user: 'LamboDreamer', reward: '$50', score: '760,880' },
        { place: 6, user: 'DiamondHand', reward: '$25', score: '690,420' },
        { place: 7, user: 'MoonRider', reward: '$25', score: '610,110' },
        { place: 8, user: 'ApeLord', reward: '$25', score: '550,730' },
        { place: 9, user: 'ShibaInuFan', reward: '$10', score: '480,990' },
        { place: 10, user: 'DeFiWizard', reward: '$10', score: '420,690' },
    ];

    function populateLeaderboard() {
        // Wyczyść kontenery
        topThreeContainer.innerHTML = '';
        leaderboardBody.innerHTML = '';

        // Podziel dane na top 3 i resztę
        const topThree = fakeLeaderboardData.slice(0, 3);
        const rest = fakeLeaderboardData.slice(3);

        // Wypełnij karty dla top 3
        topThree.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.innerHTML = `
                <div class="place">#${player.place}</div>
                <div class="username">${player.user}</div>
                <div class="score">Score: ${player.score}</div>
                <div class="reward">${player.reward}</div>
            `;
            topThreeContainer.appendChild(card);
        });

        // Wypełnij tabelę dla reszty
        rest.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>#${player.place}</td>
                <td>${player.user}</td>
                <td>${player.reward}</td>
                <td>${player.score}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }

    populateLeaderboard();
});
