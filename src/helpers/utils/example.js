class Example {
  func1 = () => {
    console.log('func1');
  };

  func2 = () => {
    console.log('this is func2');
    this.func1();
  };

  aTest = () => {
    // // left off here!!!!
    // // if html and div are not the same height or width continue process until they match.
    const playableArea = document.getElementById('PlayableArea');
    const html = document.getElementsByTagName('html')[0];
    if (playableArea && html) {
      const curWidth = playableArea.offsetWidth;
      const curHeight = playableArea.offsetHeight;
      const htmlWidth = html.offsetWidth;
      const htmlHeight = html.offsetHeight;
      console.log({
        div: { curWidth, curHeight },
        html: { htmlWidth, htmlHeight },
      });
    }
  };
}

export default new Example();
