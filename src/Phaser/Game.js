import React from 'react';
import Phaser from 'phaser';
import TestScene from './Scenes/TestScene';
import Movement from './Scenes/Movement';

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
      scene: [TestScene, Movement]
    };

    new Phaser.Game(config);
  }

  render() {
    return <div id="phaser-parent" />;
  }
}
