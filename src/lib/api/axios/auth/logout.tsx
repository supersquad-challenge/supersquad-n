import axios from "axios";

export const logout = async() => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}