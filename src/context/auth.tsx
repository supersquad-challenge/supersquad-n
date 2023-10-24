'use client';
import { login } from '@/lib/api/axios/auth/login';
import { isLoginState, userInfoIdState } from '@/lib/states';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface authContext {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string | undefined;
  userName: string | undefined;
  userAddress: string | undefined;
  userProfile: string | undefined;
}

const defaultValue: authContext = {
  isLogin: false,
  setIsLogin: () => {},
  userId: undefined,
  userName: undefined,
  userAddress: undefined,
  userProfile: undefined,
};

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [userAddress, setUserAddress] = useState<string | undefined>(undefined);
  const [userProfile, setUserProfile] = useState<string | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [userInfoId, setUserInfoId] = useRecoilState(userInfoIdState);

  useEffect(() => {
    // handleLogin();
    // const user = localStorage.getItem('supersquad');
    // if (user !== undefined && user !== null) {
    //   setUserId(user);
    //   setIsLogin(true);
    // }
    setUserId(userInfoId);
  }, []);

  const handleLogin = async () => {
    const res = await login();
    if (res !== undefined && res.status === 200) {
      localStorage.setItem('supersquad', res.data.userInfoId);
    }
  };

  const contextValue = {
    isLogin,
    setIsLogin,
    userId,
    userName,
    userAddress,
    userProfile,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthProvider };
