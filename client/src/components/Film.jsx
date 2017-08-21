import React from 'react';

class Film extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        {this.props.children}
        <td>Showtimes</td>
      </tr>
    );
  }
}

export default Film;