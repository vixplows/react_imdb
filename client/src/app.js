import React from 'react';
import ReactDOM from 'react-dom';

import FilmListContainer from './containers/FilmListContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    <FilmListContainer />,
    document.querySelector('#app')
  );
}
