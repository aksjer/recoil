import { selector } from 'recoil';
import { nameState } from '../atoms/name';

export const nameCountState = selector({
  key: 'nameCountState',
  get: ({ get }) => {
    return get(nameState).length;
  },
});
