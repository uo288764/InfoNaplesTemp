// game.js
class CoinFlipGame {
    constructor() {
        this.playerScore = 0;
        this.machineScore = 0;
        this.currentFlip = null;
        this.isAnimating = false;
    }

    init() {
        const gameSection = document.querySelector('section');
        gameSection.innerHTML = `
            <div class="game-container">
                <div class="coin">
                    <img src="multimedia/images/coin-heads.png" alt="Coin" id="coinImg">
                </div>
                <div class="score">Wins: <span id="playerScore">0</span></div>
                <div class="machineScore">Losses: <span id="machineScore">0</span></div>
                <div class="controls">
                    <button id="headsBtn">Choose Heads</button>
                    <button id="tailsBtn">Choose Tails</button>
                </div>
                <div id="result"></div>
            </div>
        `;

        //  event listeners for the user selection
        document.getElementById('headsBtn').addEventListener('click', () => this.makeGuess('heads'));
        document.getElementById('tailsBtn').addEventListener('click', () => this.makeGuess('tails'));
    }

    makeGuess(guess) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const coin = document.getElementById('coinImg');
        const result = document.getElementById('result');
        
        // Random flip result
        this.currentFlip = Math.random() < 0.5 ? 'heads' : 'tails';
        
        // Add animation 
        coin.style.animation = 'none';
        setTimeout(() => {
            coin.style.animation = 'flip 3s forwards';
        }, 100);

        // Update photo and result after the flip animation
        setTimeout(() => {
            coin.src = `multimedia/images/coin-${this.currentFlip}.png`;
            
            if (guess === this.currentFlip) {
                this.playerScore++;
                result.textContent = 'Correct! You won!';
                result.style.color = 'green';
            } else {
                this.machineScore++;
                result.textContent = 'Wrong! You loose!';
                result.style.color = 'red';
            }
            
            document.getElementById('playerScore').textContent = this.playerScore;
            document.getElementById('machineScore').textContent = this.machineScore; // Fixed: was showing playerScore
            this.isAnimating = false;
        }, 3000);
    }
}

// Initialize game when game.html is opened
document.addEventListener('DOMContentLoaded', () => {
    const coinGame = new CoinFlipGame();
    coinGame.init();
});