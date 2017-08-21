import React from 'react';

class Film extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Film;