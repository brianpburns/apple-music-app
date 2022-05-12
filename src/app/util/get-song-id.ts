export const getSongId = (url: string) => {
  const idPattern = /[track|playlist]\/(.*)\?/i;
  const matches = idPattern.exec(url);

  return matches && matches[1];
};
