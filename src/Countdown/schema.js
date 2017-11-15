import { instanceOf, func } from 'prop-types';

export default {

  types: {
    stop: instanceOf(Date),
    onStart: func,
    onStop: func
  },

  defaults: {
    stop: new Date("Mon Nov 30 2020 00:00:00 GMT+0300 (MSK)")
  }
};
