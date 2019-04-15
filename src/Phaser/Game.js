import React from 'react';
import Phaser from 'phaser';
import TestScene from './Scenes/TestScene';

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-parent',
      pixelArt: true,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: [TestScene]
    };

    new Phaser.Game(config);
  }

  render() {
    return <div id="phaser-parent" />;
  }
}
