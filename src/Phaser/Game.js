import React from 'react';
import Phaser from 'phaser';
import TestScene from './Scenes/TestScene';
import Movement from './Scenes/Movement';

export default class Game extends React.Component {
  componentDidMount() {
    const dimension = this._getDimensions();
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-parent',
      pixelArt: true,
      width: dimension * 0.8,
      height: dimension * 0.8,
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

  /**
   * Returns the smaller of window.innerWidth and window.innerHeight
   */
  _getDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width < height) {
      return width;
    } else {
      return height;
    }
  }

  render() {
    return <div id="phaser-parent" />;
  }
}
