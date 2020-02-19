import React, { useState, ChangeEvent } from 'react';

type TodoProps = {
  onAdd: Function;
}

export default ({ onAdd }: TodoProps): JSX.Element => {
  const [ title, setTitle ] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim());
  }

  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        onChange={handleInput}
      />
      <div onClick={() => onAdd(title)}>➕</div>
    </div>
  );
};