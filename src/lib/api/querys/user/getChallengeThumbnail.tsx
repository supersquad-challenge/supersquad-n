import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
type Props = {
  userChallengeId: string;
};

export const getChallengeThumbnail = async ({ userChallengeId }: Props) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/myChallenge/thumbnail/${userChallengeId}`,
    );
    return res.data.thumbnail;
  } catch (e) {
    console.log(e);
  }
};
