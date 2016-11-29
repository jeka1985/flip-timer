import { PropTypes as types} from 'react';

export default {

  types: {
    stop: types.instanceOf(Date),
    onStart: types.func,
    onStop: types.func
  },


  defaults: {
    stop: new Date("Mon Nov 30 2020 00:00:00 GMT+0300 (MSK)")
  }
};
