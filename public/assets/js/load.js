const loadState = {
  preload: function() {
    // Loading text with styles
    let loadingLabel = Game.add.text(80, 150, 'loading...',
                                    {font: '30px Courier', fill: '#ffffff'});

    // All preloading assets
    this.load.image('example', 'assets/images/example.jpg');
  },

  create: function() {
    // Call the menu state
    Game.state.start('menu');
  }
};
