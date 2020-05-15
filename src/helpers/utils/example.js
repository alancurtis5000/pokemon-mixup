class Example {
  func1 = () => {
    console.log('func1');
  };

  func2 = () => {
    console.log('this is func2');
    this.func1();
  };
}

export default new Example();
