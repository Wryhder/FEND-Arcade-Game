# Arcade Game

## How to Play

**Head over [here](https://wryhder.github.io/FEND-Arcade-Game/) to play**, or follow the instructions below to run game locally.

The goal of the game is to reach the water tiles without colliding with enemy bugs. If you collide with any enemies, the game is reset.

Use the keyboard arrow keys to move around.

## App Description

Technologies used are HTML, CSS, JavaScript (including classes and IIFEs), and the Canvas API.

There are two classes: Hero, used to create the player, and Enemy, used to create instances of the enemy bugs.
Both classes have render() and update() methods used to render player and enemy sprites as well as update their positions. The player also has a handleInput() method that responds to keypresses (arrow keys), and a resetHeroPos() method which resets the player's position whenever there is a collision with  an enemy bug.

An engine provides game loop functionality.

The game uses an image loading utility to ease the process of loading image files. The utility includes a simple "caching" layer to enable reuse of cached images if there is an attempt to load the same image multiple times.

## Run app locally

1. Clone this repo
```
git clone https://github.com/Wryhder/FEND-Classic-Arcade-Game-Clone.git
```
2. Spin up a local server or open `index.html` in a browser
