import React from "react";
import * as actions from "./actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => dispatch(actions.incrementAsync(count))}>+</button>
      <button onClick={() => dispatch(actions.decrementAsync(count))}>-</button>
    </div>
  );
};

export default App;
