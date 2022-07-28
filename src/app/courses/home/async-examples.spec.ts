import { fakeAsync, flush, tick } from '@angular/core/testing';

fdescribe('Async Testing Examples', () => {
  it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log('runing assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it('Asynchronous test example - setTimeout()', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      console.log('runing assertions');
      test = true;
    }, 1000);
    flush();
    expect(test).toBeTruthy();
  }));

  // EXEMPLO ONDE É POSSIVEL NOTAR QUE Promises SÃO CHAMADAS ANTES DE setTimeout()
  // ISSO ACONTECE PORQUE Promises são MicroTasks e setTimeout() são MacroTasks
  fit('Asynchronous test example - plain Promise', () => {
    let test = false;
    console.log('Creating promise');
    setTimeout(() => {
      console.log('setTimeout() first callback triggered.');
    });
    setTimeout(() => {
      console.log('setTimeout() second callback triggered.');
    });

    Promise.resolve()
      .then(() => {
        console.log('Promise first then() evaluated successfully');
        return Promise.resolve();
      })
      .then(() => {
        console.log('Promise second then() evaluated sucessfuly');
        test = true;
      });
    console.log('Runing test assertions');
    expect(test).toBeTruthy();
  });
});
