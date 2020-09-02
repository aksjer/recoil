import React from 'react';
import { useRecoilValue } from 'recoil';
import { nameState } from './atoms/name';
import { nameCountState } from './selectors/name';
import { todolistCountState } from './selectors/todolist';

export const Cp2 = () => {
  const count = useRecoilValue(todolistCountState);
  const name = useRecoilValue(nameState);
  const nameLength = useRecoilValue(nameCountState);

  return (
    <div style={{ border: 'solid 1px green' }}>
      <h1>{count}</h1>
      <h2>
        {nameLength} - {name}
      </h2>
    </div>
  );
};
