import type { NextPage } from 'next'
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import ZombieAttackContract from "../../build-contracts/ZombieAttack.json"
import { ZombieAttack } from '../types/abi';
import { useWeb3 } from "@3rdweb/hooks"
import { useEffect } from 'react';

const networkAddress = "http://127.0.0.1:7545"
const web3 = new Web3(new Web3.providers.HttpProvider(networkAddress))
const contractAddress = "0x028Cb081d8277C491Fd6F907891cC61b99e91302"
const ABI = ZombieAttackContract.abi as unknown  as AbiItem
const contract = new web3.eth.Contract(ABI, contractAddress) as unknown as ZombieAttack



const getZombieDetails = (id: string) => {
  return contract.methods.zombies(id).call();
}

const zombieToOwner = (id: string) => {
  return contract.methods.zombieToOwner(id).call();
}

const getZombiesByOwner = (ownerAddress: string) => {
  return contract.methods.getZombiesByOwner(ownerAddress).call()
}

const Home: NextPage = () => {
  const {connectWallet, address, chainId, error} = useWeb3()

  const handleConnectWallet = () => {
    connectWallet("injected")
  }

  useEffect(() => {
    if(!address) return
    getZombiesByOwner("0x22E9D1CccC31209F265f854bbC4867C017459ab8").then((res) => {
      console.log(res)
    })
  },[address])

  return (
    <div>
      <button onClick={handleConnectWallet} className='py-2 px-4 bg-green-600 rounded text-white'>Connect Wallet</button>
    </div>
  )
}

export default Home
