import { expect } from "chai";
import hre from "hardhat";

describe("World Map", () => {
  describe("Deployment", () => {
    it("Should have a size of 8", async () => {
      const WorldMap = await hre.ethers.getContractFactory("WorldMap");
      const worldMap = await WorldMap.deploy();
      const mapSize = await worldMap.worldSize();

      expect(mapSize).to.equal(2);
    });
  });
});