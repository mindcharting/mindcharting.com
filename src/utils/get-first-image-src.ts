const getFirstImageSrc = (html: string): string | undefined => {
  const match = html.match(/<img[^>]*\ssrc="([^"]+)"/);

  return match?.[1];
};

export { getFirstImageSrc };
