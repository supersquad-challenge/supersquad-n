import axios from "axios";

type Props = {
  userInfoId: string;
  address: string;
}

export const setAddress = async({ userInfoId, address }: Props) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/address`, {
      userInfoId: userInfoId,
      address: address
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
}