import React from 'react';

type TodoProps = {
  title: string;
  completed: boolean;
  user: number;
}

export default ({ title, completed, user}: TodoProps): JSX.Element => {
  return (
    <div>
      <div>{title}</div>
      <div>{completed ? '✅' : '⬜️'}</div>
      <div>{user}</div>
    </div>
  );
};
