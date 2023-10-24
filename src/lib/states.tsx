import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isLoginState = atom({
  key: 'IsLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userInfoIdState = atom<string>({
  key: 'UserInfoIdState',
  default: '651920e49f321ba6780cae07',
});
