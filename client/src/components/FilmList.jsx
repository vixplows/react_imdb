import React from 'react';

import Film from './Film.jsx'

class FilmList extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    var filmComponents = this.props.data.map(
      function(film) {
      return (
        <Film key={film.id} title={film.title} times={film.times} url={film.url}></Film>
      );
    });

    return (
      <table className='filmList'>
        <tbody>
        {filmComponents}
        </tbody>
      </table>
    ); 
  }
}

export default FilmList;