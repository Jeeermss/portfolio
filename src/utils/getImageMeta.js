const getImageMeta = (imgUrl) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = imgUrl;
  });

export default getImageMeta;
