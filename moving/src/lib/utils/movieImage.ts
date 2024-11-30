export const movieImage = (image: string) => {
  const resultImage = process.env.NEXT_PUBLIC_BACK_IMAGE_URL + image;
  return resultImage;
};
