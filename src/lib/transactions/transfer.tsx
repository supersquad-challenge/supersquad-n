import dotenv from 'dotenv'
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Ethereum } from '../../../@types/ethereum';
const convert = require('ethereum-unit-converter');

type Props = {
  to: string;
  value: number;
}

dotenv.config();
const changeChain = async() => {
  let res;
  const ethereum = window.ethereum as Ethereum | undefined;

  function handleChainChanged(chainId = '11155111') {
    window.location.reload();
  }

  if (ethereum) {
    const chainId = await ethereum.request({ method: 'eth_chainId' });
  }

  if (ethereum && ethereum.on) {
    ethereum.on('chainChanged', handleChainChanged);
  }

  if (ethereum) {
    res = await ethereum.request({ method: 'eth_chainId' });
  }
  
  return res === '11155111' ? true : false;
}

const transfer = async ({ to, value }: Props) => {
  const result = convert(value, 'ether')
  const chainIdRes = changeChain();
  if (!chainIdRes) {
    return {
      status: false,
      code: 1,
      msg: 'need to add chainId'
    };
  }

  const ethereum = window.ethereum as MetaMaskInpageProvider | undefined;
  if (ethereum !== undefined) {
    const account = localStorage.getItem('walletAddress');
    if (account !== undefined) {
      const res = ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: account, 
          to: to,
          value: result.wei.toString(16),
          gasLimit: '0x5028',
          maxPriorityFeePerGas: '0x3b9aca00', 
          maxFeePerGas: '0x2540be400',
        }, 
        ],
      }).then((txHash) => {
        return true;
      })
    .catch((error) => {
      console.error(error)
      return false;
    });
      if (await res === true) {
        return {
          status: true,
          code: 0,
          msg: 'transaction success'
        };
      }
    }
  }
  return {
    status: false,
    code: 2,
    msg: 'transaction failed'
  };
}

export default transfer