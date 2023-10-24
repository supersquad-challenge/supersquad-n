"use client"
import { AxiosResponse } from 'axios';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface windowContext {
  modalState: string | undefined;
  handleModalState: (stats: string | undefined) => void;
  loadingState: boolean;
  handleLoadingState: (state: boolean) => void;
  useCallHandler: <T> (args: T, func: (args: T) => Promise<AxiosResponse | undefined>) => Promise<AxiosResponse | undefined>;
  statusCode: number | undefined;
  handleStatusCode: (code: number | undefined) => void;
  isEntry: boolean;
}

const defaultValue: windowContext = {
  modalState: undefined,
  handleModalState: () => {},
  loadingState: false,
  handleLoadingState: () => {},
  useCallHandler: async () => undefined,
  statusCode: undefined,
  handleStatusCode: () => {},
  isEntry: true,
};

const WindowContext = createContext(defaultValue);

const WindowProvider = ({ children } : { children: ReactNode }) => {
  const [modalState, setModalState] = useState<string | undefined>(undefined);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [statusCode, setstatusCode ] = useState<number | undefined>(undefined);
  const [isEntry, setIsEntry] = useState<boolean>(true);

  const handleModalState = (state: string | undefined) => {
    setModalState(state)
  }

  const handleLoadingState = (state: boolean) => {
    setLoadingState(state)
  }

  async function useCallHandler<T>(args: T, func: (args: T) => Promise<AxiosResponse | undefined>): Promise<AxiosResponse | undefined> {
    setLoadingState(true);
    const res = await func(args);
    if (res !== undefined) {
      setstatusCode(res.status);
    }
    setTimeout(() => {
      setLoadingState(false);
    }, 500)

    return res;
  }

  useEffect(() => {
    const isExist = sessionStorage.getItem('supersquad');
    if (isExist === 'true') {
      setIsEntry(false)
    } else {
      setIsEntry(true);
      setTimeout(() => {
        sessionStorage.setItem('supersquad', 'true');
        setIsEntry(false)
      }, 1200)
    }
  }, [])

  const handleStatusCode = (code: number | undefined) => {
    setstatusCode(code)
  }

  const contextValue = {
    modalState,
    handleModalState,
    loadingState,
    handleLoadingState,
    useCallHandler,
    statusCode,
    handleStatusCode,
    isEntry
  }

  return (
    <>
      <WindowContext.Provider value={contextValue}>
        {children}
      </WindowContext.Provider>
    </>
  )
}
export { WindowContext, WindowProvider };
