import type { NextPage } from 'next'

import { useWeb3 } from "@3rdweb/hooks"
import { useEffect, useState } from 'react';
import { createZombie, getDetailZombiesByOwner, levelUp } from '../contract';



const Home: NextPage = () => {
  const {connectWallet, address, chainId, error} = useWeb3()
  const [myZombie, setMyZombie] = useState<[string, string, string, string, string, string][]>()
  const [name, setName] = useState<string | undefined>(undefined)

  const handleConnectWallet = () => {
    connectWallet("injected")
  }

  const handleCreateZombie = () => {
    if(!name) {
      alert("ゾンビの名前を入力してください")
      return
    }
    if(!address){
      alert("walletに接続してください")
      return
    }
    createZombie(name, address).then(() => {
      getDetailZombiesByOwner(address).then(res => {
        setMyZombie(res)
      })
    }).catch((error) => {
      console.log(error)
    });
  }

  const handleLevelUp = (id: string) => {
    if(!address){
      alert("walletに接続してください")
      return
    }
    if(!confirm("0.001 etherがかかります")) return;
    levelUp(id, address).then(() => {
      //todo: idで指定して、そのゾンビだけのレベルを上げれば、getDetailZombiesByOwnerを実行しなくていい。
      getDetailZombiesByOwner(address).then(res => {
        setMyZombie(res)
      })
    } )
  }

  useEffect(() => {
    if(!address) return
    getDetailZombiesByOwner(address).then(res => {
      setMyZombie(res)
    })
  },[address])

  return (
    <div className='py-4 px-12 space-y-4'>
      <div className='text-right' >
        <button onClick={handleConnectWallet} className='py-2 px-4 bg-green-600 rounded text-white'>Connect Wallet</button>
      </div>
      <div className='flex justify-between'>
        <p >自分のゾンビ達</p>
        {myZombie && myZombie.length < 2 ?
          <div className='space-x-2 flex '>
            <input className='border-b' placeholder='ゾンビの名前' onChange={(e) => setName(e.currentTarget.value)} />
            <button onClick={handleCreateZombie} className='bg-blue-500 text-white py-1 px-2 rounded'>ゾンビの生成</button>
          </div>
        : null }
      </div>
      <div className='flex gap-3'>
        {myZombie?.map((zombie) => {
          const cooldownSec = (Number(zombie[3] + "000") - new Date().getTime()) / 1000
          return (
            <div key={zombie[1]} className="border p-4">
              <p>{zombie[1]}</p>
              <hr />
              <div className='mt-4'>
                <p>
                  <span className='font-bold text-lg'>{zombie[0]}</span>
                  <span className='ml-2'>(Lv.{zombie[2]})</span>
                </p>
                <p>time: { cooldownSec > 0 ? `${Math.trunc(cooldownSec / (60 * 60))}:${Math.trunc((cooldownSec / 60) % 60)}:${Math.trunc(cooldownSec % (60))}` : "準備OK"}</p>
                <p>{`win ${zombie[4]} / lose ${zombie[5]}`}</p>
                {/* TODO: コントラクト側でzombieにidを持つように修正、0をidに変更 */}
                <button onClick={() => handleLevelUp("0")}>Level Up</button>
              </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Home
