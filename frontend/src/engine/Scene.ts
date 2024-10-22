import { worldMapContract } from "../contracts/WorldMap";
import { sceneData } from "./Data";
import TileMap from "./TileMap";
import Vector2 from "./Vector2";

class Scene {
  tilemap: TileMap;

  constructor() {
    this.tilemap = new TileMap(new Vector2(), 0);
    
    worldMapContract.read.getWorldDimentions().then(result => {
      const worldDimentions = new Vector2(Number(result[0]), Number(result[1]));
      sceneData.setWorldDimentions(worldDimentions);

      return worldDimentions;
    }).then(worldDimentions => {
      this.tilemap = new TileMap(worldDimentions, 50);
    });
  }

  update(deltatime: number) {
    sceneData.clickEvents.forEach(e => {
      const tileIndex = this.tilemap.getTileIndexAtPixel(e.position);

      if(tileIndex.x !== -1 && tileIndex.y !== -1) {
        sceneData.setSelectedTile(tileIndex);
      } else {
        sceneData.setSelectedTile(undefined);
      }
    });

    sceneData.setClickEvents([]);
  }

  render() {
    this.tilemap.render();
  }
}

export default Scene;