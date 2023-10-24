type Props = {
  userChallengeId: string;
}

export const getTotalStatus = async({ userChallengeId }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/totalStatus/${userChallengeId}`);
  const data = res.json();
  return data;
}