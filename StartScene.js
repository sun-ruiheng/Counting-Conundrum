class StartScene extends Phaser.Scene {
    constructor() {
      super({ key: 'StartScene' });
    }
  
    preload() {
      this.load.spritesheet('searching', 'https://content.codecademy.com/courses/learn-phaser/Counting/codey_searching.png', { frameWidth: 300, frameHeight: 300 });
    }
  
    create() {
      // Creates the text on the start screen:
      this.add.text(10, 50, "Codey's Counting \n    Conundrum" , { fill: '#4D39E0', fontSize: '45px' });
     
  
      // Create the sprite object, animation, and play the animation: 
          gameState.startSprite = this.add.sprite(220, 320, 'searching');
      this.anims.create(
    {
      key: 'codeySearch',
      frames: 
      this.anims.generateFrameNames('searching', { start: 0, end: 5 }),
      delay: 0,
      frameRate: 2,
      repeat: -1
    }
  );
      gameState.startSprite.anims.play('codeySearch');
              
          
  
  gameState.easyButton = this.add.text(100, 500, 'Easy', { fill: '#4D39E0', fontSize: '20px' });
  gameState.easyButton.setInteractive();
  
  gameState.easyButton.on('pointerup', () => {
    gameState.difficulty = 1;
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
   });
  
  
   gameState.normalButton = this.add.text(225, 500, 'Normal', { fill: '#4D39E0', fontSize: '20px' });
  gameState.normalButton.setInteractive();
  
  gameState.normalButton.on('pointerup', () => {
    gameState.difficulty = 2;
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
   });
  
  
   gameState.hardButton = this.add.text(350, 500, 'Hard', { fill: '#4D39E0', fontSize: '20px' });
  gameState.hardButton.setInteractive();
  
  gameState.hardButton.on('pointerup', () => {
    gameState.difficulty = 3;
      this.scene.stop('StartScene');
      this.scene.start('GameScene');
   });
        
  
    }
  }
  