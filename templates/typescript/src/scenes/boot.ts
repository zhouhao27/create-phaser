export default class BootScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload(): void {
    this.load.image("logo", "./src/assets/images/logo.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(400, 300, "logo");
  }

  update(): void {
    const id = setInterval( ()=> {
      this.scene.start('MainScene')
      clearInterval(id)
    }, 1000)    
  }
}
