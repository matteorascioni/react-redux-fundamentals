import { useSelector, useDispatch } from 'react-redux';
import {counterAction} from '../../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(10));
  };

  const decreaseHandler = () => {
    dispatch(counterAction.decrease(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>{counter}</div>

          <div className={classes.buttonsContainer}>
            <button onClick={decrementHandler}>-</button>
            <button onClick={decreaseHandler}>-10</button>
            <button onClick={increaseHandler}>+10</button>
            <button onClick={incrementHandler}>+</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>{show ? 'Hide': 'Show'} Counter</button>
    </main>
  );
};

export default Counter;
