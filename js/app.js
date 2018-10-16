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

    // Draw hero sprite on current x and y coord position
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {
        // Update position
        for (let enemy of allEnemies) {
            // Check collision here
            // Did player x and y collide with enemy's?
            if (this.y === enemy.y &&
                (enemy.x + enemy.step / 2 > this.x &&
                    enemy.x < this.x + this.step / 2)) {
                this.resetHeroPos();
            }
        }

        // Check win here
        // Did player's x and y reach final tile?
        if (this.y === 60) {
            this.wonGame = true;
        }
    }

    handleInput(input) {
        // Update player sprite on current x and y coord position
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

    resetHeroPos() {
        // Set x and y to starting x and y
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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

        // If enemy is not past the boundary
        if (this.x < this.boundary) {
            // Move forward
            // Increment x by speed * dt
            this.x += this.speed * dt;
        } else {
            // Reset pos to start
            this.x = this.resetX;
        }

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
