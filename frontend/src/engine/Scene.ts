import { worldMapContract } from "../contracts/WorldMap";
import { sceneData } from "./Data";
import TileMap from "./TileMap";
import Vector2 from "./Vector2";

class Scene {
  tilemap: TileMap;

  constructor() {
    this.tilemap = new TileMap(new Vector2(), 0);

    worldMapContract.read.worldSize()
      .then(result => {
        const worldDimentions = new Vector2(Number(result), Number(result));
        sceneData.setWorldDimentions(worldDimentions);

        return worldDimentions;
      })
      .then(worldDimentions => {
        this.tilemap = new TileMap(worldDimentions, 50);
      });

  }

  update(deltatime: number) {
    sceneData.clickEvents.forEach(ce => {
      console.log(`X: ${ ce.position.x }, Y: ${ ce.position.y }`);
    });

    sceneData.setClickEvents([]);
  }

  render() {
    this.tilemap.render();
  }
}

export default Scene;