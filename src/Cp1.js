import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nameState } from './atoms/name';
import { todolistState } from './atoms/todolist';

export const Cp1 = () => {
  const todos = useRecoilValue(todolistState);
  const [name, setName] = useRecoilState(nameState);

  return (
    <div style={{ border: 'solid 1px red' }}>
      <ul>
        {todos.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </div>
  );
};
