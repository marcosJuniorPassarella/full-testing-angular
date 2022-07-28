import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Async Testing Examples', () => {
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
  it('Asynchronous test example - plain Promise', fakeAsync(() => {
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

  it('Asynchronous test example - Promises + setTimeout()', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {
      counter += 10;
      setTimeout(() => {
        counter += 1;
      }, 1000);
    });
    expect(counter).toBe(0);
    flushMicrotasks();
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(10);
    tick(500);
    expect(counter).toBe(11);
  }));

  it('Asynchronous test example - Observables', fakeAsync(() => {
    let test = false;
    console.log('Creating Observable');
    const test$ = of(test).pipe(delay(1000));
    test$.subscribe({
      next: () => (test = true),
    });
    tick(1000);
    console.log('Runing test assertions');
    expect(test).toBe(true);
  }));
});
