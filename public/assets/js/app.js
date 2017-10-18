// Initial setup for the game
const Game = new Phaser.Game(840, 600, Phaser.AUTO);

const GameState = {
  // Loads the game assets before the game starts
  preload: function() {

  },

  create: function() {

  },

  update: function() {

  },
};


Game.state.add('GameState', GameState);
Game.state.start('GameState');
