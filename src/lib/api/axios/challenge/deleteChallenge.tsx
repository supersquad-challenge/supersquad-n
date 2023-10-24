import axios from "axios";

type Props = {
  challengeId: string;
}

export const deleteChallenge = async({ challengeId }: Props) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge/delete/:${challengeId}`);
    return res.data;
  } catch (e){
    console.log(e)
  }
}