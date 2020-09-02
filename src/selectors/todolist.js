import { selector } from 'recoil';
import { todolistState } from '../atoms/todolist';

export const todolistCountState = selector({
  key: 'todolistCountState',
  get: ({ get }) => {
    const todos = get(todolistState);
    return todos.length;
  },
});
