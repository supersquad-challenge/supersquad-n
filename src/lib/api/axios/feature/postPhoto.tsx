import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const postPhoto = async (userChallengeId: string, veriPhoto: File) => {
  const formData = new FormData();

  formData.append("userChallengeId", userChallengeId);
  
  if (veriPhoto instanceof File) {
    formData.append("veriPhoto", veriPhoto);
  } else {
    return {
      status: 0
    };
  }

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/verify/postPhoto`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (e) {
    console.log(e);
    return {
      status: 0
    }
  }
};

export default postPhoto;