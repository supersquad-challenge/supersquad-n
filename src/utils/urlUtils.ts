export const isValidUrl = (url: string | undefined) => {
  if (url === undefined) return false;
  if (url.includes('mtistory')) return true;
  return false;
};
