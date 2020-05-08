/** gives back obj with width and height based of screen size and ratio. args: { (16 / 9) , 40, 0} */

const maintainAspectRationOffScreenSize = (
  aspectRatio,
  paddingWidth,
  paddingHeight,
) => {
  const maxWidth =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) -
    paddingWidth; // view w
  const maxHeight =
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0) -
    paddingHeight; // view h

  let width;
  let height;

  width = maxWidth;
  height = Math.floor(maxWidth / aspectRatio);

  if (height >= maxHeight) {
    width = Math.floor(maxHeight * aspectRatio);
    height = maxHeight;
  }
  return { width, height };
};

export default maintainAspectRationOffScreenSize;
