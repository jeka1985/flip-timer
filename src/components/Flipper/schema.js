import { PropTypes as types} from 'react';

export default {
  types: {
    reverse: types.bool,
    now: types.number.isRequired,
    min: types.number,
    max: types.number
  },

  defaults: {
    reverse: false,
    now: 0,
    min: 0,
    max: 9
  }
};
