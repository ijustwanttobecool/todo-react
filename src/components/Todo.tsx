import React from 'react';

type TodoProps = {
  title: string;
  completed: boolean;
  id: number;
  onToggle: Function;
}

export default ({
  title, completed, id, onToggle,
}: TodoProps): JSX.Element => {
  return (
    <div>
      <div>{title}</div>
      <div onClick={() => onToggle(id)}>{ completed ? '✅' : '⬜️'}</div>
    </div>
  );
};
