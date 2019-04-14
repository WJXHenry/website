// import Phaser from 'phaser';
// import TestScene from './Scenes/TestScene';

// class phaserMain extends Phaser.Game {

//     constructor(props) {
//         super(props);
//     }
    
//     preload() {
//         console.log(this.props)
//         this.load.setBaseURL('http://labs.phaser.io');

//         this.load.image('sky', 'assets/skies/space3.png');
//         this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//         this.load.image('red', 'assets/particles/red.png');
//     }
    
//     create() {
//         this.add.image(400, 300, 'sky');
    
//         var particles = this.add.particles('red');
    
//         var emitter = particles.createEmitter({
//             speed: 100,
//             scale: { start: 1, end: 0 },
//             blendMode: 'ADD'
//         });
    
//         var logo = this.physics.add.image(400, 100, 'logo');
    
//         logo.setVelocity(100, 200);
//         logo.setBounce(1, 1);
//         logo.setCollideWorldBounds(true);
    
//         emitter.startFollow(logo);
//     }
    
//     // update() {
//     //     // console.log("Update: Hi")
//     // }
    
//     render() {

//         const config = {
//             type: Phaser.AUTO,
//             width: 200,
//             height: 200,
//             parent: 'phaser-parent',
//             scene: [
//                 TestScene
//             ]
//         };
    
//         const game = new Phaser.Game(config)

//         return (
//             <div id="game-screen" />
//         );
//     }
// }

// export default phaserMain;