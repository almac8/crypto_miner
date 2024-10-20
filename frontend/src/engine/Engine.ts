import { sceneData } from "./Data";
import Scene from "./Scene";

class Engine {
  isRunning: boolean;
  lastUpdateTime: number;
  scene: Scene;

  constructor() {
    this.isRunning = false;
    this.lastUpdateTime = 0;
    this.scene = new Scene();
  }

  start() {
    this.isRunning = true;
    this.lastUpdateTime = Date.now();

    this.gameloop();
  }

  gameloop() {
    const currentTime = Date.now();
    const deltatime = currentTime - this.lastUpdateTime;
    this.lastUpdateTime = currentTime;

    this.update(deltatime);
    this.render();

    if(this.isRunning) requestAnimationFrame(() => this.gameloop());
  }

  update(deltatime: number) {
    this.scene.update(deltatime);
  }
  
  render() {
    if(sceneData.renderingContext) {
      sceneData.renderingContext.beginPath();
      sceneData.renderingContext.fillStyle = "black";
      sceneData.renderingContext.fillRect(0, 0, sceneData.renderingContext.canvas.width, sceneData.renderingContext.canvas.height);
      sceneData.renderingContext.fill();

      this.scene.render();
    }
  }
}

export default Engine;