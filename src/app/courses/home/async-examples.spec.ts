describe('Async Testing Examples', () => {
  it('Asynchronous test example with Jasmine done()', () => {
    let test = false;
    setTimeout(() => {
      console.log('runing assertions');
      test = true;
      expect(test).toBeTruthy();
    }, 1000);
  });
});
