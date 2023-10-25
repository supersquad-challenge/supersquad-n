// @ts-nocheck

import React, { createContext, useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isPaidWithCrpytoState } from '../lib/states';

const initNeoLine = async () => {
  try {
    const instance = new NEOLineN3.Init();
    const instance2 = new NEOLine.Init();
    const network = await instance2.getNetworks();
    const account = await instance.getAccount();
    return {
      instance,
      account,
      network,
    };
  } catch (e) {
    throw new Error('Failed to connect NeoLine.');
  }
};

const NeoWalletContext = createContext(null);
export const NeoWalletProvider = (props) => {
  const [connectedWallet, setConnectedWallet] = useState(undefined);

  const connectWallet = async () => {
    try {
      const res = await initNeoLine();
      setConnectedWallet(res);
      setIsPaidWithCrypto(true);
    } catch (e) {
      console.log(e);
    }
  };

  const disConnectWallet = () => {
    setConnectedWallet(undefined);
  };

  const contextValue = {
    list: [{ label: 'NeoLine', key: 'NEO_LINE' }],
    connectedWallet,
    connectWallet,
    disConnectWallet,
  };

  return (
    <NeoWalletContext.Provider value={contextValue}>
      {props.children}
    </NeoWalletContext.Provider>
  );
};
export const useNeoWallets = () => useContext(NeoWalletContext);
