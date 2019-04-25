import Phaser from 'phaser'
import { Boot, Game } from './scenes'

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,    
    width: 800,
    height: 600,  
  },
  scene: [
    Boot,
    Game
  ]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars
