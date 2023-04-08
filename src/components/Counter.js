import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {
 
const counter=useSelector(state=>state.counter);
const dispatch=useDispatch();
 const Increment = () => {
dispatch({type:'increment'});
  };
  const Decrement = () => {
dispatch({type:'decrement'});
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={Increment}>increment by 5</button>
            <button onClick={Decrement}>decrement by 5</button>

    </main>
  );
};

export default Counter;
