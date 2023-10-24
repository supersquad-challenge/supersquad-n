import axios from "axios";

type Props = {
  email: string;
  nickname: string;
  address: string;
}

export const signup = async ({ email, nickname, address }: Props) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/create`, {
      email: email,
      nickname: nickname,
      address: address
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
}