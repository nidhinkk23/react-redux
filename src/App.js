import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { increment, decrement, logged } from './actions';
import Component1 from './components/Component1';




function App() {

  const counter = useSelector(state =>state.counter)
  const islogged = useSelector(state =>state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <Component1 />
      {islogged?<h4 onClick={()=>dispatch(logged())}>True</h4>:<h4 onClick={()=>dispatch(logged())}>False</h4>}
    </div>
  );
}

export default App;
