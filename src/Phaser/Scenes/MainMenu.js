import Phaser from 'phaser';
import { BLACK, GOLD, WHITE } from '../../common/colours';

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  preload() {
    this.load.setBaseURL(
      'https://raw.githubusercontent.com/wjxhenry/website/master'
    );
    // Load assets...
  }

  create() {
    this.cameras.main.setBackgroundColor(WHITE);
    this.keys = this.input.keyboard.addKeys({
      up: 'W',
      arrowUp: 'up',
      down: 'S',
      arrowDown: 'down',
      select: 'Enter'
    });

    this.screenLength = this.game.config.width;
    this.screenSpaceUnit = this.screenLength / 20;
    this.screenCenter = this.screenLength / 2;
    this.textSize1 = this.screenLength / 10;
    this.textSize2 = this.screenLength / 15;
    this.textSize3 = this.screenLength / 18;

    this.choice = 0;
    this.scenes = ['StartGame', 'Settings', 'Movement'];

    let title = this.add.text(
      this.screenCenter,
      this.screenSpaceUnit * 4,
      'Yet Another Maze',
      { fontFamily: 'Ubuntu', fill: BLACK, fontSize: this.textSize2 }
    );
    title.setOrigin(0.5, 0.5);
    let startGame = this.add.text(
      this.screenCenter,
      this.screenSpaceUnit * 8,
      'Start Game',
      { fontFamily: 'Ubuntu', fill: GOLD, fontSize: this.textSize3 }
    );
    startGame.setOrigin(0.5, 0.5);
    let settings = this.add.text(
      this.screenCenter,
      this.screenSpaceUnit * 12,
      'Settings',
      { fontFamily: 'Ubuntu', fill: BLACK, fontSize: this.textSize3 }
    );
    settings.setOrigin(0.5, 0.5);
    let exit = this.add.text(
      this.screenCenter,
      this.screenSpaceUnit * 16,
      'Exit',
      { fontFamily: 'Ubuntu', fill: BLACK, fontSize: this.textSize3 }
    );
    exit.setOrigin(0.5, 0.5);

    this.options = [
      { text: startGame, scene: 'StartGame' },
      { text: settings, scene: 'Settings' },
      { text: exit, scene: 'Movement' }
    ];
  }

  update() {
    if (
      Phaser.Input.Keyboard.JustDown(this.keys.up) ||
      Phaser.Input.Keyboard.JustDown(this.keys.arrowUp)
    ) {
      this.updateChoice(-1);
    }
    if (
      Phaser.Input.Keyboard.JustDown(this.keys.down) ||
      Phaser.Input.Keyboard.JustDown(this.keys.arrowDown)
    ) {
      this.updateChoice(1);
    }
    if (Phaser.Input.Keyboard.JustDown(this.keys.select)) {
      this.scene.start(this.options[this.choice].scene);
    }
  }

  updateChoice(direction) {
    let newChoice = this.choice + direction;
    if (newChoice > -1 && newChoice < this.options.length) {
      this.options[this.choice].text.setFill(BLACK);
      this.options[newChoice].text.setFill(GOLD);
      this.choice = newChoice;
    }
  }
}
