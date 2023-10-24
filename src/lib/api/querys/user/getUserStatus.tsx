import dotenv from 'dotenv';

dotenv.config();

type Props = {
  userChallengeId: string;
}

export const getUserStatus = async({ userChallengeId }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/myStatus/${userChallengeId}`);
  const data = res.json();
  return data;
}