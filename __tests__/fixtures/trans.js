import React from 'react';

export default class Trans {
  defaultProps () {
    return { displayName: 'Trans' }
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
