import React from 'react';
import classNames from 'classNames';
import Countdown from '../Countdown';
import './style.scss';

export default class PlaygroundPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: 'Some component',
          component: <Countdown stop="Mon Nov 30 2016 12:36:45 GMT+0300 (MSK)"/>
        }
      ]
    }
  }

  render() {
    return <div className="playground">
      <div className="playground-tree">
        <ul>
          {this.state.items.map((item, i) => <li key={i}>{item.title}</li>)}
        </ul>
      </div>
      <div className="playground-demo">
        {this.state.items.map((item, i) => <div style={{ marginLeft: '5px', display: 'inline-block'}} key={i}>{item.component}</div>)}
      </div>
    </div>;
  }
};
