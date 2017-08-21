import React from 'react';

import FilmList from '../components/FilmList.jsx';

const filmData = [
  {id: 1, title: "Sausage Party", times: ["13:00", "15:00"]},
  {id: 2, title: "Cafe Society", times: ["14:00", "16:30"]},
  {id: 3, title: "Morgan", times: ["19:00", "21:00", "23:00"]},
  {id: 4, title: "The 9th Life of Louis Drax", times: ["12:00", "15:45"]},
  {id: 5, title: "Maam Hai Akira", times: ["19:45"]},
  {id: 6, title: "Equity", times: ["19:00", "21:00", "23:00"]},
  {id: 7, title: "Things to Come", times: ["13:00", "15:00"]}
];

class FilmListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: filmData
    }
  }

  render() {
    return(
      <div>
        UK Opening This Week
        <FilmList data={this.state.data}/>
      </div>
      );
  }
}

export default FilmListContainer;