// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract WorldMap {
  uint public worldSize;
  uint[] private values;

  constructor(uint size) {
    worldSize = size;
    values = new uint[](worldSize);

    for(uint i = 0; i < worldSize; i++) {
      values[i] = 1000;
    }
  }

  function minableValue(uint cellIndex) public view returns(uint) {
    return values[cellIndex];
  }

  function mineCell(uint cellIndex) public {
    values[cellIndex] -= 1;
  }
}