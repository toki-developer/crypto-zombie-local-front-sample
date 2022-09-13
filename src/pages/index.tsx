import type { NextPage } from 'next'
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import ZombieAttackContract from "../../build-contracts/ZombieAttack.json"
import { ZombieAttack } from '../types/abi';

const networkAddress = "http://127.0.0.1:7545"
const web3 = new Web3(new Web3.providers.HttpProvider(networkAddress))
const contractAddress = "0x028Cb081d8277C491Fd6F907891cC61b99e91302"
const ABI = ZombieAttackContract.abi as unknown  as AbiItem
const contract = new web3.eth.Contract(ABI, contractAddress) as unknown as ZombieAttack

const Home: NextPage = () => {

  console.log(contract.methods.testAccessContract().call())

  return (
    <div>
    </div>
  )
}

export default Home
