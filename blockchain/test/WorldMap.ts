import { expect } from "chai";
import hre from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("World Map", () => {
  const worldSize = 4;

  async function deployWorldMapFixture() {
    const WorldMap = await hre.ethers.getContractFactory("WorldMap");
    const worldMap = await WorldMap.deploy(worldSize);

    return { worldMap };
  };

  describe("Deployment", () => {
    it("Should deploy with a fixed size", async () => {
      const { worldMap } = await loadFixture(deployWorldMapFixture);

      expect(await worldMap.worldSize()).to.equal(worldSize);
    });

    it("Should return a minable value for each cell", async () => {
      const { worldMap } = await loadFixture(deployWorldMapFixture);

      for(let i = 0; i < worldSize; i++) {
        expect(await worldMap.minableValue(i)).to.equal(1000);
      }
    });
  });

  describe("Mining", () => {
    it("Should decrease the minable value for the specific cell", async () => {
      const { worldMap } = await loadFixture(deployWorldMapFixture);
      const cellIndexToMine = 0;

      for(let i = 0; i < worldSize; i++) {
        expect(await worldMap.minableValue(i)).to.equal(1000);
      }

      await worldMap.mineCell(cellIndexToMine);

      for(let i = 0; i < worldSize; i++) {
        if(i === cellIndexToMine) {
          expect(await worldMap.minableValue(i)).to.equal(999);
        } else {
          expect(await worldMap.minableValue(i)).to.equal(1000);
        }
      }
    });
  });
});