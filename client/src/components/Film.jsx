import React from 'react';

class Film extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td><a href={this.props.url}>Showtimes</a></td>
      </tr>
    );
  }
}

export default Film;