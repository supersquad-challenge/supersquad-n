import dotenv from 'dotenv';

dotenv.config();
type Props = {
  userChallengeId: string;
}

export const getChallenge = async({ userChallengeId }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge/user/${userChallengeId}`);
  const data = res.json();
  return data;
}