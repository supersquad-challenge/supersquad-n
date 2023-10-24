export const isValidUrl = (url: string | undefined) => {
  if (url === undefined)
    return false;
  if (url.includes('supersquad'))
    return true;
  return false;
}