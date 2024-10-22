import { sceneData } from "./Data";
import Vector2 from "./Vector2";

class TileMap {
  dimentions: Vector2;
  tilePixelDepth: number;

  constructor(dimentions: Vector2, tilePixelDepth: number) {
    this.dimentions = dimentions;
    this.tilePixelDepth = tilePixelDepth;
  }
  
  render() {
    if(sceneData.renderingContext) {
      const canvasCenter = sceneData.canvasDimentions.divide(2);
      const mapCenter = this.dimentions.multiply(this.tilePixelDepth).divide(2);
      const mapOffset = canvasCenter.subtract(mapCenter);

      for(let y = 0; y < this.dimentions.y; y++) {
        for(let x = 0; x < this.dimentions.x; x++) {
          let tilePosition = new Vector2(x, y).multiply(this.tilePixelDepth);
          tilePosition = tilePosition.add(mapOffset);

          sceneData.renderingContext.beginPath();
          sceneData.renderingContext.fillStyle = "olive";
          sceneData.renderingContext.strokeStyle = "lime";
          sceneData.renderingContext.fillRect(tilePosition.x, tilePosition.y, this.tilePixelDepth, this.tilePixelDepth);
          sceneData.renderingContext.strokeRect(tilePosition.x, tilePosition.y, this.tilePixelDepth, this.tilePixelDepth);
          sceneData.renderingContext.stroke();
          sceneData.renderingContext.fill();
        }
    }

    }
  }
}

export default TileMap;