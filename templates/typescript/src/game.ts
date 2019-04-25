import "phaser";
import { BootScene, MainScene } from "./scenes";

const config: GameConfig = {
  type: Phaser.AUTO,  
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,    
    width: 800,
    height: 600,  
  },
  scene: [BootScene,MainScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
};

// game class
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
  var game = new Game(config);
});
