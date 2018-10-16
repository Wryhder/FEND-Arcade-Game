class Hero {
    constructor() {
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) + 60;
        this.x = this.startX;
        this.y = this.startY;
        this.wonGame = false;
        this.sprite = 'images/char-princess-girl.png';
    }

    // Draw hero sprite on current x and y coordinates
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Update position
    update() {
        for (let enemy of allEnemies) {
            // Did player collide with enemy bugs?
            // if so, reset game
            if (this.y === enemy.y &&
                (enemy.x + enemy.step / 2 > this.x &&
                    enemy.x < this.x + this.step / 2)) {
                this.resetHeroPos();
            }
        }

        // Win condition
        // Did player reach final tile?
        if (this.y === 60) {
            this.wonGame = true;
        }
    }

    // Update player's position based on user input
    handleInput(input) {
        switch (input) {
        case 'up':
            if (this.y > this.jump) {
                this.y -= this.jump;
            }
            break;
        case 'down':
            if (this.y < this.jump * 4) {
                this.y += this.jump;
            }
            break;
        case 'left':
            if (this.x > 0) {
                this.x -= this.step;
            }
            break;
        case 'right':
            if (this.x < this.step * 4) {
                this.x += this.step;
            }
        }
    }

    // Reset player's current position to starting point
    resetHeroPos() {
        this.x = this.startX;
        this.y = this.startY;
    }
}

class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y + 60;
        this.speed = speed;
        this.step = 101;
        this.boundary = this.step * 5;
        this.resetX = -this.step;
        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // Any movement is multiplied by the dt parameter
        // to ensure the game runs at the same speed for
        // all computers.
        
        // If enemy is not past the boundary
        if (this.x < this.boundary) {
            // Move forward
            // Increment x by speed * dt
            this.x += this.speed * dt;
        } else {
            // Reset position to start
            this.x = this.resetX;
        }

    }

    // Draw enemy using current x and y coordinates
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Instantiate all objects
const player = new Hero(),
    enemy1 = new Enemy(-101, 0, 150),
    enemy2 = new Enemy(-101, 83, 120),
    enemy3 = new Enemy((-101 * 2.5), 83, 180),
    allEnemies = [];

allEnemies.push(enemy1, enemy2, enemy3);

// This listens for key presses and sends the keys to the
// Hero.handleInput() method
document.addEventListener('keyup', function (e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
