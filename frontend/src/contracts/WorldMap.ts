import { createPublicClient, getContract, http } from "viem";
import { localhost } from "viem/chains";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const worldMapABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "worldSize",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

const publicClient = createPublicClient({
  chain: localhost,
  transport: http()
});

export const worldMapContract = getContract({
  address: contractAddress,
  abi: worldMapABI,
  client: publicClient
});