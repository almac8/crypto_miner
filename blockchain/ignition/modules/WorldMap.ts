import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WorldMapModule = buildModule("WorldMapModule", (m) => {
  const worldMap = m.contract("WorldMap", [ 8, 4 ]);

  return { worldMap };
});

export default WorldMapModule;