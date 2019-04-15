import Phaser from 'phaser';

export default class Movement extends Phaser.Scene {
  constructor() {
    super('Movement');
  }

  updateMovement(position, direction) {
    if (direction == 'up') {
      position.y--;
      if (position.y < 0) {
        position.y = 0;
      }
    } else if (direction == 'down') {
      position.y++;
      if (position.y > 100) {
        position.y = 100;
      }
    } else if (direction == 'left') {
      position.x--;
      if (position.x < 0) {
        position.x = 0;
      }
    } else if (direction == 'right') {
      position.x++;
      if (position.x > 100) {
        position.x = 100;
      }
    }
  }

  preload() {
    this.load.setBaseURL(
      'https://raw.githubusercontent.com/wjxhenry/website/master'
    );
    // Load assets
  }

  create() {
    this.counter = 0;
    this.keys = this.input.keyboard.addKeys({
      up: 'W',
      down: 'S',
      left: 'A',
      right: 'D'
    });
    this.playerPos = { x: 0, y: 0 };
    var keyObj = this.input.keyboard.addKey('ESC');
    keyObj.on('down', event => {
      //   this.scene.start("TestScene")
      //   Fix the issue where there are multiple logs??
    });

    // keyObj.on('up', event => {
    //   console.log('W key up');
    // });
  }

  update() {
    this.counter++;
    if (this.counter % 30 == 0) {
      // Clock updates every 60 seconds
      // console.log("Tick")
      this.counter = 0; // Reset counter (just in case of overflow?)
      if (this.keys.up.isDown) {
        console.log('Up');
        this.updateMovement(this.playerPos, 'up');
      }
      if (this.keys.down.isDown) {
        console.log('Down');
        this.updateMovement(this.playerPos, 'down');
      }
      if (this.keys.left.isDown) {
        console.log('Left');
        this.updateMovement(this.playerPos, 'left');
      }
      if (this.keys.right.isDown) {
        console.log('Right');
        this.updateMovement(this.playerPos, 'right');
      }
      console.log(this.playerPos);
    }
    // console.log("TestScene: update")
  }
}
