import Phaser from 'phaser';

export default class TestScene extends Phaser.Scene {
  preload() {
    this.load.setBaseURL('https://raw.githubusercontent.com/wjxhenry/website/master/');

    this.load.image('sky', 'assets/test/space3.png');
    this.load.image('logo', 'assets/test/phaser3-logo.png');
    this.load.image('red', 'assets/test/red.png');
  }

  create() {
    console.log(this);

    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  update() {
    // console.log("TestScene: update")
  }
}
