const { atom } = require('recoil');

export const todolistState = atom({
  key: 'todolistState',
  default: ['me', 'you'],
});
