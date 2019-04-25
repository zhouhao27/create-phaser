import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Game' })
  }

  preload() {
    this.load.image('logo', '../../assets/images/logo.png');
  }

  create () {    
    this.add.image(400, 300, 'logo');
  }

  update () {
  }
}

