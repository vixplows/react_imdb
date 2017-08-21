import React from 'react';

class Film extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td onClick={() => {console.log(this.props.times)}}>Showtimes</td>
        <td id='times'>{this.props.times}</td>
      </tr>
    );
  }
}

export default Film;