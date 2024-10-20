import { sceneData } from "./Data";

class Scene {
  update(deltatime: number) {}

  render() {
    if(sceneData.renderingContext) {
      sceneData.renderingContext.beginPath();
      sceneData.renderingContext.fillStyle = "olive";
      sceneData.renderingContext.arc(sceneData.renderingContext.canvas.width / 2, sceneData.renderingContext.canvas.height / 2, 50, 0, 2 * Math.PI);
      sceneData.renderingContext.fill();
    }
  }
}

export default Scene;