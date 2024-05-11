export const getReadingTime = (content: string) => {
  const words = content?.trim().split(/\s+/).length;
  const wps = 225;
  const estimateReadingTime = Math.ceil(words / wps);
  return estimateReadingTime;
};
