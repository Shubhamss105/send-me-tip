import { ethers } from 'ethers';
import {useEffect, useState} from 'react';
import abi from './contract/chai.json'
import Buy from './components/Buy';
import Memos from './components/Memos';


function App() {

  const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const connectWallet = async()=>{
      const contractAddress= '0xF20728939524Bc657910DF2342722BAD938Ce9eB';
      const contractAbi = abi.abi;
      try{
        const {ethereum} = window;

        if(ethereum){
          const accounts = await ethereum.request({method:"eth_requestAccounts"});
          console.log(accounts);
        }
        const provider= new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractAbi, signer);
        setState({provider,signer,contract});

      }catch(error){
        console.log(error);
      }
    }
    connectWallet();
  },[])

  console.log(state);

  return (
    <div className="App">
      
      <Buy state={state}/>
      <Memos state={state}/>
    </div>
  );
}

export default App;
