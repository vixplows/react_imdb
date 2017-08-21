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
        <Film key={film.id} title={film.title}></Film>
      );
    });

    return (
      <div className='filmList'>
        {filmComponents}
      </div>
    ); 
  }
}

export default FilmList;