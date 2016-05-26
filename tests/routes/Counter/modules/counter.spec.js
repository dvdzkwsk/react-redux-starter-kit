import {
  COUNTER_INCREMENT,
  DOUBLE_ASYNC_PENDING,
  DOUBLE_ASYNC_ABORTED,
  increment,
  doubleAsync,
  default as counterReducer
} from 'routes/Counter/modules/counter';


import { ActionsObservable } from 'redux-observable';
import Rx from 'rxjs';


describe('(Redux Module) Counter', () => {
  const scheduler = Rx.Scheduler.asap;

  let globalState = {
    counter: counterReducer(undefined, {})
  };
  const dispatch = action => {
    globalState = {
      counter: counterReducer(globalState.counter, action)
    };
  };
  const actions = new Rx.Subject();
  const actionsObs = new ActionsObservable(actions);
  const store = { getState: () => globalState };
  const getStateSpy = sinon.spy(store, 'getState');

  it('Should export a constant COUNTER_INCREMENT.', () => {
    expect(COUNTER_INCREMENT).to.equal('COUNTER_INCREMENT');
  });

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(counterReducer).to.be.a('function');
    });

    it('Should initialize with a state of 0 (Number).', () => {
      expect(counterReducer(undefined, {})).to.equal(5);
    });

    it('Should return the previous state if an action was not matched.', () => {
      let state = counterReducer(undefined, {});
      expect(state).to.equal(5);
      state = counterReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal(5);
      state = counterReducer(state, increment(5));
      expect(state).to.equal(10);
      state = counterReducer(state, { type: '@@@@@@@' });
      expect(state).to.equal(10);
    });
  });

  describe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(increment).to.be.a('function');
    });

    it('Should return an action with type "COUNTER_INCREMENT".', () => {
      expect(increment()).to.have.property('type', COUNTER_INCREMENT);
    });

    it('Should assign the first argument to the "payload" property.', () => {
      expect(increment(5)).to.have.property('payload', 5);
    });

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(increment()).to.have.property('payload', 1);
    });
  });

  describe('(Action Creator) doubleAsync', () => {
    const actionFactory = () => doubleAsync()(actionsObs, store);

    beforeEach(() => {
      globalState = {
        counter: counterReducer(undefined, {})
      };
      getStateSpy.reset();
    });

    it('Should be exported as a function.', () => {
      expect(doubleAsync).to.be.a('function');
    });

    it('Should return a function (is a thunk).', () => {
      expect(doubleAsync()).to.be.a('function');
    });

    it('Should return a observable from that thunk that gets fulfilled.', done => {
      actionFactory()
        .subscribe(
        () => { },
        (error) => console.error(error),
        () => { done(); }
        );
    });

    it('Should start with dispatching a pending action.', done => {
      actionFactory()
        .subscribe(
        value => {
          expect(value.type).to.equal(DOUBLE_ASYNC_PENDING);
          done();
        }
        );
    });

    it('Should be able to cancel the observable.', done => {
      let lastValue;
      actionFactory()
        .subscribe(
        (value) => { lastValue = value; },
        (error) => console.error(error),
        () => {
          expect(lastValue.type).to.be.equal(DOUBLE_ASYNC_PENDING);
          done();
        }
        );
      scheduler.schedule(
        () => {
          actions.next({ type: DOUBLE_ASYNC_ABORTED });
        }, 100);
      scheduler.flush();
    });

    it('Should call store.getState exactly once.', done => {
      actionFactory().subscribe(
        () => { },
        (error) => console.error(error),
        () => {
          getStateSpy.should.have.been.calledOnce;
          done();
        }
      );
    });

    it('Should produce a state that is double the previous state.', done => {
      const byCounterIncrement = value => value.type === COUNTER_INCREMENT;
      actionFactory()
        .filter(byCounterIncrement)
        .flatMap(
        value => {
          dispatch(value);
          getStateSpy.should.have.been.calledOnce;
          expect(globalState.counter).to.equal(10);
          return actionFactory();
        }
        )
        .filter(byCounterIncrement)
        .subscribe(
        value => {
          dispatch(value);
          getStateSpy.should.have.been.calledTwice;
          expect(globalState.counter).to.equal(20);
        },
        error => { console.error(error); },
        () => {
          done();
        }
        );
    });
  });
});
