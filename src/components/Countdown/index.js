import React from 'react';
import Flipper from '../Flipper';
import schema from './schema.js';
import './style.scss';

class Countdown extends React.PureComponent {

  constructor(props) {
    super(props);

    /**
     * @type {object}
     * @property {object} diff - initial diff object
     */
    this.state = {
      diff: this.getDiffObject()
    }
  }

  /**
   * Create second interval
   */
  componentDidMount() {
    this.interval = window.setInterval(() => this.updateTime(), 1000);
  }

  /**
   * Destroy second interval
   */
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  /**
   * Calculate diff object between stop and current date
   * @return {Object} formatted value
   */
  getDiffObject() {
    var ms = Math.abs(this.props.stop - (new Date()).getTime()),
        s = Math.floor(ms / 1000),
        m = Math.floor(s / 60),
        h = Math.floor(m / 60),
        d = Math.floor(h / 24);

    return {
      days: Math.floor(h / 24),
      hours: h % 24,
      minutes: m % 60,
      seconds: s % 60
    };
  }

  /**
   * Update state with calcualted diff object
   */
  updateTime() {
    this.setState({ diff: this.getDiffObject() });
  }

  /**
   * Returns formated to 2 digits string
   * @param {Number} data - raw value
   * @return {String} formatted value
   */
  getFormattedVal(data) {
    return (data < 10 ? '0' + data : data) + '';
  }

  /**
   * Render Flipper component for each digit of diff object vals
   * @return {ReactElement} markup
   */
  render() {
    let forks = {
      days: [ [0,9], [0,9] ],
      hours: [ [0,2], [0,4] ],
      minutes: [ [0,5], [0,9] ],
      seconds: [ [0,5], [0,9] ]
    };

    return <div className='countdown'>
      {Object.keys(this.state.diff).map(key => <div
          key={key}
          className={`countdown-${key}`}>
            {Array(2).fill(0).map((_, i) => <Flipper
              key={`${key}${i}`}
              reverse
              now={+this.getFormattedVal(this.state.diff[key])[i]}
              min={forks[key][i][0]}
              max={forks[key][i][1]}
            />)}
        </div>
      )}
    </div>;
  }
};

Countdown.propTypes = schema.types

Countdown.defaultProps = schema.defaults

export default Countdown;
