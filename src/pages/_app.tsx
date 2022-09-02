import '../styles/globals.css'
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import type { AppProps } from 'next/app'
import ZombieFactoryContract from "../../build-contracts/ZombieFactory.json"
import { ZombieFactory } from '../types/abi';

const networkAddress = "http://127.0.0.1:7545"
const web3 = new Web3(new Web3.providers.HttpProvider(networkAddress))
const contractAddress = "0xeb3554DE5ba4f7a68F2aAa2e6C2f107C7dF3dd0b"
const ABI = ZombieFactoryContract.abi as unknown  as AbiItem
const contract = new web3.eth.Contract(ABI, contractAddress) as unknown as ZombieFactory


function  MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
