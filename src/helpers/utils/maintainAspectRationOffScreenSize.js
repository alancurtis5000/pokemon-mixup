/** gives back obj with width and height based of screen size and ratio. args: { (16 / 9) , 40, 0} */

const maintainAspectRationOffScreenSize = (
  aspectRatio,
  paddingWidth,
  paddingHeight,
) => {
  let maxWidth =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) -
    paddingWidth; // view w
  let maxHeight =
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0) -
    paddingHeight; // view h

  let width;
  let height;

  // overide to limit max height and width if screen is really big.
  if (maxWidth > 1200) {
    maxWidth = 1200;
  }
  if (maxHeight > 800) {
    maxHeight = 800;
  }

  const html = document.getElementsByTagName('html')[0];
  if (html) {
    const htmlWidth = html.offsetWidth;
    if (htmlWidth !== width) {
      width = htmlWidth;
      height = Math.floor(htmlWidth / aspectRatio);
    } else {
      width = maxWidth;
      height = Math.floor(maxWidth / aspectRatio);
    }
  }

  if (height >= maxHeight) {
    width = Math.floor(maxHeight * aspectRatio);
    height = maxHeight;
  }

  return { width, height };
};

export default maintainAspectRationOffScreenSize;
