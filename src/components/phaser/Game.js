import React, { Component } from 'react';
import Phaser from 'phaser';

class Game extends Component {

  constructor(props) {
    super(props);
    this.game = null;
  }

  preload() {
    console.log(this.game)
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  create() {
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

  componentDidMount() {
    // let config = {
    //   type: Phaser.AUTO,
    //   parent: 'game-screen',
    //   pixelArt: true,
    //   width: 250,
    //   height: 250,
    //   scene: {
    //       preload: this.preload.bind(this),
    //       create: this.create.bind(this)
    //   }
    // };
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 200 }
          }
      },
      scene: {
          preload: this.preload.bind(this),
          create: this.create.bind(this)
      }
    }
    this.game = new Phaser.Game(config)
    console.log(this.game)
  }

  render() {
    return (
        <div id="game-screen" />
    );
  }
}

export default Game;
