import axios from "axios"

// z1gJXghgK8sp67E-xQbF5q4CTb0

export const getUserId = async() => {
  const res = await axios.post('http://52.65.222.108:8080/auth/login');
  console.log("res", res);
}