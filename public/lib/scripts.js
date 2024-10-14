export const getImage = async (filePath, contentType) => {
  const data = await fetch(filePath, {
    method: "GET",
    headers: { "Content-Type": contentType },
  });
  const blob = await data.blob();
  const imageUrl = URL.createObjectURL(blob);
  console.log(imageUrl);
  return imageUrl;
};
