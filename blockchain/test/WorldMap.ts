import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("World Map", () => {
  const worldWidth = 8;
  const worldHeight = 4;

  async function deployWorldMapFixture() {
    const WorldMap = await hre.ethers.getContractFactory("WorldMap");
    const worldMap = await WorldMap.deploy(worldWidth, worldHeight);

    return { worldMap };
  };

  describe("Deployment", () => {
    it("Should deploy with a fixed size", async () => {
      const { worldMap } = await loadFixture(deployWorldMapFixture);
      
      const worldDimentions = await worldMap.getWorldDimentions();
      expect(worldDimentions[0]).to.equal(worldWidth);
      expect(worldDimentions[1]).to.equal(worldHeight);
    });

    it("Should return a minable value for each cell", async () => {
      const { worldMap } = await loadFixture(deployWorldMapFixture);

      for(let y = 0; y < worldHeight; y++) {
        for(let x = 0; x < worldWidth; x++) {
          expect(await worldMap.getMinableValue(x, y)).to.equal(1000);
        }
      }
    });
  });

  describe("Mining", () => {
    it("Should decrease the minable value for the specific cell", async () => {
      const { worldMap } = await loadFixture(deployWorldMapFixture);
      expect(await worldMap.getMinableValue(0, 0)).to.equal(1000);
      
      await worldMap.mineTile(0, 0);

      expect(await worldMap.getMinableValue(0, 0)).to.equal(999);
    });
  });
});