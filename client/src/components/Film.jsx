import React from 'react';

class Film extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>{this.props.title}</td>
            {this.props.children}
            <td>Showtimes</td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Film;