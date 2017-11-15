import { bool, number } from 'prop-types';

export default {
  types: {
    reverse: bool,
    now: number,
    min: number,
    max: number
  },

  defaults: {
    reverse: false,
    now: 0,
    min: 0,
    max: 9
  }
};
