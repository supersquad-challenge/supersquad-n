export const detectMobileDevice = (agent: string) => {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]
  return mobileRegex.some(mobile => agent.match(mobile))
}

export const isMobile = (agent: string) => {
  const _isMobile = detectMobileDevice(agent);

  if (_isMobile) {
    return true;
  }
  return false;
}