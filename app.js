var game = new Phaser.Game(
    window.innerWidth, window.innerHeight,
    Phaser.AUTO,
    'game',
    {
        preload: preload,
        create: create,
        render: render,
        update: update
    }
);

var player;
var weapon;
var lengthWorld = {x: 3920, y: 3920, padding: 400}
>>>>>>> Update app.js

function render() {
    game.debug.text( balls.countDead()   + ' Dead balls', 32, 32);
    game.debug.text( balls.countLiving() + ' Living balls', 32, 62);

<<<<<<< HEAD
    game.debug.text("Time until event: " + game.time.events.duration.toFixed(0), 32, 32*32);
    game.debug.text("Next tick: " + game.time.events.next.toFixed(0), 32, 32*4);
}
=======
}
>>>>>>> Update app.js

<<<<<<< HEAD
    game.debug.text("Time until event: " + game.time.events.duration.toFixed(0), 32, 32*32);
    game.debug.text("Next tick: " + game.time.events.next.toFixed(0), 32, 32*4);
}
=======
}
>>>>>>> Update app.js
