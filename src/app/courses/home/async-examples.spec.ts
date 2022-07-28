import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';

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
  fit('Asynchronous test example - plain Promise', fakeAsync(() => {
    let test = false;
    console.log('Creating promise');
    Promise.resolve()
      .then(() => {
        console.log('Promise first then() evaluated successfully');
        test = true;
        return Promise.resolve();
      })
      .then(() => {
        console.log('Promise second then() evaluated sucessfuly');
      });
    flushMicrotasks();
    console.log('Runing test assertions');
    expect(test).toBeTruthy();
  }));
});
