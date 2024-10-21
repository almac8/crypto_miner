import { worldMapContract } from "../contracts/WorldMap";
import { sceneData } from "./Data";

class Scene {
  constructor() {
    worldMapContract.read.worldSize().then(result => {
      sceneData.setWorldSize(Number(result));
    });
  }

  update(deltatime: number) {
    sceneData.clickEvents.forEach(ce => {
      console.log(`X: ${ ce.position.x }, Y: ${ ce.position.y }`);
    });

    sceneData.setClickEvents([]);
  }

  render() {
    if(sceneData.renderingContext) {
      const worldSize = sceneData.worldSize;

      for(let i = 0; i < worldSize; i++) {
        const canvasDimentions = sceneData.canvasDimentions;

        const x = (canvasDimentions.x / worldSize * i) + canvasDimentions.x / worldSize / 2;
        const y = canvasDimentions.y / 2;

        sceneData.renderingContext.beginPath();
        sceneData.renderingContext.fillStyle = "olive";
        sceneData.renderingContext.arc(x, y, 50, 0, 2 * Math.PI);
        sceneData.renderingContext.fill();
      }
    }
  }
}

export default Scene;