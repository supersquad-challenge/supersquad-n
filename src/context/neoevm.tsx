// import { defineChain } from '../../utils/chain.js'
import { defineChain } from 'viem';

export const neoevm = /*#__PURE__*/ defineChain({
  id: 2970385,
  name: 'NeoEVM Chain',
  network: 'neoevm',
  nativeCurrency: {
    decimals: 18,
    name: 'GAS',
    symbol: 'GAS',
  },
  rpcUrls: {
    default: { http: ['https://evm.ngd.network:32332'] },
    public: { http: ['https://evm.ngd.network:32332'] },
  },
  blockExplorers: {
    etherscan: { name: 'NeoEVMScan', url: 'https://evm.ngd.network' },
    default: { name: 'NeoEVMScan', url: 'https://evm.ngd.network/' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244',
  //     blockCreated: 74448,
  //   },
  // },
});
