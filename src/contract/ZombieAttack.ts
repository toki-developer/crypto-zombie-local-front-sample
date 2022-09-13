import Web3 from "web3";
import { AbiItem, toWei } from "web3-utils";
import ZombieAttackContract from "../../build-contracts/ZombieAttack.json";
import { ZombieAttack } from "../types/abi";

const networkAddress = "http://127.0.0.1:7545";
const web3 = new Web3(new Web3.providers.HttpProvider(networkAddress));
const contractAddress = "0xa99C9eC499960EeAA08479c26FcEeCc7b45A2018";
const ABI = ZombieAttackContract.abi as unknown as AbiItem;
const contract = new web3.eth.Contract(
  ABI,
  contractAddress
) as unknown as ZombieAttack;

export const getZombieDetails = (id: string) => {
  return contract.methods.zombies(id).call();
};

export const zombieToOwner = (id: string) => {
  return contract.methods.zombieToOwner(id).call();
};

export const getZombiesByOwner = (ownerAddress: string) => {
  return contract.methods.getZombiesByOwner(ownerAddress).call();
};

export const getDetailZombiesByOwner = (ownerAddress: string) => {
  return contract.methods.getZombiesDetailByOwner(ownerAddress).call();
};

export const createZombie = (name: string, from: string) => {
  return contract.methods
    .createRandomZombie(name)
    .send({ from, gas: "1000000" });
};

export const levelUp = (id: string, from: string) => {
  return contract.methods
    .levelUp(id)
    .send({ from, value: toWei("0.001", "ether"), gas: "1000000" });
};
