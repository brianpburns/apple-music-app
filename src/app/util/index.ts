export const validateUrl = (url: string) => {
  const idPattern = /https:\/\/music.apple.com\//i;
  const matches = idPattern.exec(url);

  return matches !== null;
};

export const generateUrl = (url: string) => {
  return url.slice(0, 8) + 'embed.' + url.slice(8);
};
