import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterPlus, counterMinus } from '../actions';
import { RootState, AppDispatch } from '../redux/store';

const Counter: React.FC = () => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();

    const handleMinus = () => {
        dispatch(counterMinus(1));
    }

    const handlePlus = () => {
        dispatch(counterPlus(1));
    }

  return (
    <div>
        <div>Counter: {counter}</div>
        <button onClick={handleMinus}>Minus (Decrement)</button>
        <button onClick={handlePlus}>Plus (Increment)</button>
    </div>
  )
}

export default Counter;
