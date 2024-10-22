import { worldMapContract } from "../contracts/WorldMap";
import { sceneData } from "./Data";
import Vector2 from "./Vector2";

class TileMap {
  dimentions: Vector2;
  tilePixelDepth: number;

  private canvasCenter: Vector2;
  private mapPixelDepth: Vector2;
  private mapCenter: Vector2;
  private mapOffset: Vector2;

  constructor(dimentions: Vector2, tilePixelDepth: number) {
    this.dimentions = dimentions;
    this.tilePixelDepth = tilePixelDepth;

    this.canvasCenter = sceneData.canvasDimentions.divide(2);
    this.mapPixelDepth = this.dimentions.multiply(this.tilePixelDepth);
    this.mapCenter = this.mapPixelDepth.divide(2);
    this.mapOffset = this.canvasCenter.subtract(this.mapCenter);

    sceneData.setMinableValues(new Array(8).fill(new Array(4).fill(0)));

    for(let y = 0; y < dimentions.y; y++) {
      for(let x = 0; x < dimentions.x; x++) {
        worldMapContract.read.getMinableValue([ BigInt(x), BigInt(y)]).then(result => {
          let minableValues = sceneData.minableValues;
          minableValues[x][y] = Number(result)
          
          sceneData.setMinableValues(minableValues);
        });
      }
    }
  }
  
  render() {
    if(sceneData.renderingContext) {
      for(let y = 0; y < this.dimentions.y; y++) {
        for(let x = 0; x < this.dimentions.x; x++) {
          let tilePosition = new Vector2(x, y).multiply(this.tilePixelDepth);
          tilePosition = tilePosition.add(this.mapOffset);

          sceneData.renderingContext.beginPath();
          
          if(sceneData.selectedTile?.x === x && sceneData.selectedTile?.y === y) {
            sceneData.renderingContext.fillStyle = "lime";
            sceneData.renderingContext.strokeStyle = "olive";
          } else {
            sceneData.renderingContext.fillStyle = "olive";
            sceneData.renderingContext.strokeStyle = "lime";
          }

          sceneData.renderingContext.fillRect(tilePosition.x, tilePosition.y, this.tilePixelDepth, this.tilePixelDepth);
          sceneData.renderingContext.strokeRect(tilePosition.x, tilePosition.y, this.tilePixelDepth, this.tilePixelDepth);
          sceneData.renderingContext.stroke();
          sceneData.renderingContext.fill();
        }
      }
    }
  }

  getTileIndexAtPixel(pixelPosition: Vector2) {
    const pixelOffset = pixelPosition.subtract(this.mapOffset);
    const rawIndex = pixelOffset.divide(this.tilePixelDepth);
    const flooredIndex = new Vector2(Math.floor(rawIndex.x), Math.floor(rawIndex.y));
    
    let clampedIndex = flooredIndex;
    clampedIndex.x = (clampedIndex.x < 0 || clampedIndex.x >= this.dimentions.x) ? -1 : clampedIndex.x;
    clampedIndex.y = (clampedIndex.y < 0 || clampedIndex.y >= this.dimentions.y) ? -1 : clampedIndex.y;

    return clampedIndex;
  }
}

export default TileMap;