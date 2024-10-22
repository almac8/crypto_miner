// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract WorldMap {
  uint[] private worldDimentions;
  uint[][] private values;

  constructor(uint worldWidth, uint worldHeight) {
    worldDimentions.push(worldWidth);
    worldDimentions.push(worldHeight);

    for(uint x = 0; x < worldWidth; x++) {
      uint[] memory tempValues = new uint[](worldWidth);
      
      for(uint y = 0; y < worldWidth; y++) {
        tempValues[y] = 1000;
      }
      
      values.push(tempValues);
    }
  }

  function getWorldDimentions() public view returns(uint[] memory) {
    return worldDimentions;
  }

  function getMinableValue(uint x, uint y) public view returns(uint){
    return values[x][y];
  }
  
/* 
  function minableValue(uint cellIndex) public view returns(uint) {
    return values[cellIndex];
  }

  function mineCell(uint cellIndex) public {
    values[cellIndex] -= 1;
  }
   */
}