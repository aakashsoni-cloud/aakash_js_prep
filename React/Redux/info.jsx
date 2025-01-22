// Key Concepts of Redux
// Store:

// A single source of truth that holds the application’s state.
// The state is immutable, and the only way to update it is by dispatching actions.
// Actions:

// Plain JavaScript objects that describe what should change in the state.
// Each action must have a type property (a string constant) and may include additional data (payload).

const incrementAction = { type: "INCREMENT", payload: 1 };
// Reducers:

// Pure functions that specify how the state changes in response to an action.
// They take the current state and an action as arguments and return the updated state.
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

// Dispatch:

// A method to send actions to the store.
// The store then uses the reducer to calculate the new state based on the dispatched action.

// Selectors:

// Functions to extract specific parts of the state from the store.
// Steps to Use Redux in React

// Install Redux and React-Redux:

// npm install redux react-redux

// Set Up the Store:

// Use createStore from Redux to create a store and pass your reducer to it.
import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers";

const store = createStore(counterReducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

// Connect React Components:

// Use useSelector to access the state and useDispatch to dispatch actions.
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;



Middleware (Optional)
// Middleware like redux-thunk or redux-saga can be used for handling asynchronous logic in Redux.

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(counterReducer, applyMiddleware(thunk));

// Async action example
const fetchCount = () => {
    return async (dispatch) => {
        const response = await fetch('/api/count');
        const count = await response.json();
        dispatch({ type: 'SET_COUNT', payload: count });
    };
};