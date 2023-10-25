import dotenv from 'dotenv';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Ethereum } from '../../../@types/ethereum';
const convert = require('ethereum-unit-converter');
import USDTABI from '../../../src/lib/api/abi/Token.json';
import PoolABI from '../../../src/lib/api/abi/Challenge.json';

import Web3 from 'web3';

const USDTAddress = '0x239fe5539b6487a55e16aab67554345b0b422d2b';
const poolAddress = '0x56d79575215f47f5F84F034D8A8E352f10DA4083';
const USDTabi = USDTABI.abi;
const poolabi = PoolABI.abi;
const transferMethodHash = '0xa9059cbb'; // ERC-20 토큰의 transfer 함수의 메서드 해시입니다.

type Props = {
  to: string;
  value: number;
};

dotenv.config();
const changeChain = async () => {
  let res;
  const ethereum = window.ethereum as Ethereum | undefined;

  function handleChainChanged(chainId = '2970385') {
    window.location.reload();
  }

  if (ethereum) {
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    if (chainId !== '0x2D5311') {
      // 0x89 is 137 in hexadecimal
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x2D5311',
              chainName: 'NeoEVM Chain',
              nativeCurrency: {
                name: 'GAS',
                symbol: 'GAS',
                decimals: 18,
              },
              rpcUrls: ['https://evm.ngd.network:32332'],
              blockExplorerUrls: ['https://evm.ngd.network'],
            },
          ],
        });
        return true;
      } catch (addError) {
        console.error(addError);
        return false;
      }
    }
  }

  if (ethereum && ethereum.on) {
    ethereum.on('chainChanged', handleChainChanged);
  }

  if (ethereum) {
    res = await ethereum.request({ method: 'eth_chainId' });
  }

  return res === '2970385' ? true : false;
};

const transferToken = async ({ to, value }: { to: string; value: number }) => {
  const chainIdRes = await changeChain();
  if (!chainIdRes) {
    return {
      status: false,
      code: 1,
      msg: 'need to add chainId',
    };
  }

  const ethereum = window.ethereum as MetaMaskInpageProvider | undefined;
  if (ethereum !== undefined) {
    const web3 = new Web3(ethereum);
    const USDTcontract = new web3.eth.Contract(USDTabi, USDTAddress);
    const poolcontract = new web3.eth.Contract(poolabi, poolAddress);
    const account = localStorage.getItem('walletAddress');
    const valueAmount = web3.utils.toWei(value.toString(), 'ether');
    if (account !== undefined) {
      try {
        // await USDTcontract.methods
        //   .transfer(to, valueUSDT)
        //   .send({ from: account!, gasPrice: web3.utils.toWei('30', 'gwei') });
        await USDTcontract.methods
          .approve(poolcontract, valueAmount)
          .send({ from: account! });

        await poolcontract.methods
          .deposit(valueAmount)
          .send({ from: account! });

        return {
          status: true,
          code: 0,
        };
      } catch (error) {
        console.error(error);
        return {
          status: false,
          code: 2,
        };
      }
    }
  }
  return {
    status: false,
    code: 2,
  };
};

export default transferToken;

// const transfer = async ({ to, value }: Props) => {
//   const result = convert(value, 'ether');
//   const chainIdRes = changeChain();
//   if (!chainIdRes) {
//     return {
//       status: false,
//       code: 1,
//       msg: 'need to add chainId',
//     };
//   }

//   const ethereum = window.ethereum as MetaMaskInpageProvider | undefined;
//   if (ethereum !== undefined) {
//     const account = localStorage.getItem('walletAddress');
//     if (account !== undefined) {
// const res = ethereum
//   .request({
//     method: 'eth_sendTransaction',
//     params: [
//       {
//         from: account,
//         to: to,
//         value: result.wei.toString(16),
//         // gasLimit: '0x5028',
//         // maxPriorityFeePerGas: '0x3b9aca00',
//         // maxFeePerGas: '0x2540be400',
//       },
//     ],
//   })
//         .then((txHash) => {
//           return true;
//         })
//         .catch((error) => {
//           console.error(error);
//           return false;
//         });
//       if ((await res) === true) {
//         return {
//           status: true,
//           code: 0,
//           msg: 'transaction success',
//         };
//       }
//     }
//   }
//   return {
//     status: false,
//     code: 2,
//     msg: 'transaction failed',
//   };
// };

// export default transfer;
