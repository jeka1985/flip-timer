import React from 'react';
import cn from 'classnames';
import schema from './schema.js';
import st from './style.scss';

class Flipper extends React.Component {

  constructor(props) {
    super(props);

    /**
     * @type {object}
     * @property {object} toggle - flag for switching index of current digit index
     */
    this.state = {};
  }

  /**
   * Inverse state.toggle flag
   */
  tick() {
    this.setState({ toggle: !this.state.toggle });
  }

  /**
   * Returns next/prev value of digits linked list
   * @param {number} current - currently active value
   * @param {string} direction - list move direction
   * @return {number} linked list value
   */
  getCount(current, direction) {
    let isRev = this.props.reverse,
        isNext = direction == 'next',
        head = this.props[isRev ? 'min' : 'max'],
        tail = this.props[isRev ? 'max': 'min'];

    return isNext ?
      current == head ? tail : current + (isRev ? -1 : 1):
      current == tail ? head : current + (isRev ? 1 : -1);
  }

  /**
   * Execute flip action in 'props.now' value has been changed
   * @param {object} newProps - next props object
   */
  componentWillReceiveProps(newProps) {
    newProps.now !== this.props.now && this.tick();
  }

  /**
   * Generate semi linked list structure with siblings of active number
   * Index of active number depends of 'state.toggle' flag
   * @param {object} newProps - next props object
   * @return {array} linked list slice
   */
  getRange(initial) {
    let prev = this.getCount(initial, 'prev'),
      arr = [initial, prev, this.getCount(prev, 'prev')];

    arr[!this.state.toggle ?
      'unshift' :
      'push'
    ](!this.state.toggle ?
      this.getCount(initial, 'next') :
      this.getCount(prev, 'prev'));

    return arr;
  }

  /**
   * Render card sets for number
   * @return {ReactElement} markup
   */
  render() {
    return <div className={cn(st.cards, this.props.className)}>
      {this.getRange(this.props.now).map((val, i) => {
        return <div
          key={`flip-card${i}`}
          className={cn(st.card, this.props.cardClassName, {
            [st.now]: val == this.props.now
          })}>
            <div className={cn(st.sides, this.props.sidesWrapClassName)}>
              {['front', 'back'].map(key => <div
                key={`side${key}`}
                className={cn(st.side, this.props.sideClassName, st[key])}>
                <div className={cn(st['side-num'], this.props.numClassName)}>
                  {key == 'front' ? val : this.getCount(val, 'next')}
                </div>
              </div>)}
            </div>
        </div>
      })}
    </div>;
  }
};

Flipper.propTypes = schema.types;

Flipper.defaultProps = schema.defaults;

export default Flipper;
