import axios from "axios";

type Props = {
  userId: string;
}

export const getPaybackStatus = async({ userId }: Props) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/payback/:${userId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}