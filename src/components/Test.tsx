import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { increase, double, fetchPost } from "../actions/index";
import { TodoState } from "../types/ActionTypes";
import { ThunkDispatch } from "redux-thunk";

interface RootState {
  numbers: number;
  todos: TodoState;
}

const Test = ({ double, numbers, increase, fetchPost, todos }: Connector): JSX.Element => {
  const todoList = Object.keys(todos).map((key: string) => {
    return <li key={todos[key].id}>{todos[key].id} {todos[key].title}</li>
  });
  const [state, setState] = useState(1);
  return (
    <>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>INCREASE</button>
      <div>{numbers}</div>
      <button onClick={() => double(numbers)}>double</button>
      <button onClick={() => increase(numbers)}>increase</button>
      <button onClick={() => fetchPost(todos)}>request</button>
      <ul>{todoList}</ul>
    </>
  );
};

const connector = connect(
  (state: RootState) => ({
    numbers: state.numbers,
    todos: state.todos,
  }),
  (dispatch: ThunkDispatch<{}, {}, any>) => ({
    double: (num: number) => dispatch(double(num)),
    increase: (num: number) => dispatch(increase(num)),
    fetchPost: (todos: TodoState) => dispatch(fetchPost(todos)),
  })
);

type Connector = ConnectedProps<typeof connector>;

export default connector(Test);
