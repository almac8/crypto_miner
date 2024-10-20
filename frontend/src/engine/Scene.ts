import { worldMapContract } from "../contracts/WorldMap";
import { sceneData } from "./Data";

class Scene {
  constructor() {
    worldMapContract.read.worldSize().then(result => {
      sceneData.setWorldSize(Number(result));
    });
  }

  update(deltatime: number) {}

  render() {
    if(sceneData.renderingContext) {
      const worldSize = sceneData.worldSize;

      for(let i = 0; i < worldSize; i++) {
        const screenWidth = sceneData.renderingContext.canvas.width;
        const screenHeight = sceneData.renderingContext.canvas.height;

        const x = (screenWidth / worldSize * i) + screenWidth / worldSize / 2;
        const y = screenHeight / 2;

        sceneData.renderingContext.beginPath();
        sceneData.renderingContext.fillStyle = "olive";
        sceneData.renderingContext.arc(x, y, 50, 0, 2 * Math.PI);
        sceneData.renderingContext.fill();
      }
    }
  }
}

export default Scene;