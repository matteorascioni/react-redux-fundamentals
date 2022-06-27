import { useSelector, useDispatch } from 'react-redux';
import {counterAction} from '../../store/counter';
import Button from '../Button/Button';

import styles from './Counter.module.css';

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
    <section 
      className={`
        grid-8--tablet
        grid-10--desktop-small
        grid-8--desktop-large
        grid-offset-1--desktop-small
        grid-offset-2--desktop-large
        ${styles.container}
      `}
    >
      {/* Headline */}
      <h2 className={styles.headline}>Redux Counter</h2>
      {show && (
        <>
          {/* Value */}
          <div className={styles.value}>{counter}</div>

          {/* ButtonsContainer */}
          <div className={styles.buttonsContainer}>
            <Button onClick={decrementHandler}>-</Button>
            <Button onClick={decreaseHandler}>-10</Button>
            <Button onClick={increaseHandler}>+10</Button>
            <Button onClick={incrementHandler}>+</Button>
          </div>
        </>
      )}
      <Button onClick={toggleCounterHandler}>
        {show ? 'Hide': 'Show'} Counter
      </Button>
    </section>
  );
};

export default Counter;
