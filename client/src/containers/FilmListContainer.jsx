import React from 'react';

import FilmList from '../components/FilmList.jsx';
import SeeMoreFilms from '../components/SeeMoreFilms.jsx';
import GetShowTimes from '../components/GetShowTimes';

const filmData = [
  {id: 1, title: "Sausage Party", times: ["13:00", "15:00"], url: "http://www.imdb.com/title/tt1700841/"},
  {id: 2, title: "Cafe Society", times: ["14:00", "16:30"], url: "http://www.imdb.com/title/tt4513674/"},
  {id: 3, title: "Morgan", times: ["19:00", "21:00", "23:00"], url: "http://www.imdb.com/title/tt4520364/"},
  {id: 4, title: "The 9th Life of Louis Drax", times: ["12:00", "15:45"], url: "http://www.imdb.com/title/tt3991412/"},
  {id: 5, title: "Maam Hai Akira", times: ["19:45"], url: "http://www.imdb.com/title/tt5465370/"},
  {id: 6, title: "Equity", times: ["19:00", "21:00", "23:00"], url: "http://www.imdb.com/title/tt3958780/"},
  {id: 7, title: "Things to Come", times: ["13:00", "15:00"], url: "http://www.imdb.com/title/tt4120176/"}
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
        <h2>UK Opening This Week</h2>
        <FilmList data={this.state.data}/>
        <SeeMoreFilms />
        <GetShowTimes />
      </div>
      );
  }
}

export default FilmListContainer;