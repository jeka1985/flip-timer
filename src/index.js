import React from 'react';
import { render } from 'react-dom';
import Countdown from './components/Countdown';

render(<Countdown
    stop={new Date("Mon Nov 30 2016 12:36:45 GMT+0300 (MSK)")}
  />, document.getElementById('application-wrapper') );
