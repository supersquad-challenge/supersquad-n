export const getAllChallenge = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/challenge`, );
  const data = res.json();
  return data;
}