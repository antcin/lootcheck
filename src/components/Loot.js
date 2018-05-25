import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Loot extends Component {
  render() {
    return (
      <h3>Bitcoin balance:</h3>
    )
  }
}

export default connect()(Loot);
