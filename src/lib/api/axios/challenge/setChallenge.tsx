import axios, { AxiosResponse } from "axios";
import dotenv from 'dotenv';

dotenv.config();
type Props = {
  userId: string;
  challengeId: string;
}

export const setChallenge = async({ userId, challengeId }: Props): Promise<AxiosResponse | undefined> => {
  console.log(userId, challengeId)
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/register`, {
      userInfoId: userId,
      challengeId: challengeId
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error)
      return error.response;
    }
    return undefined;
  }
}