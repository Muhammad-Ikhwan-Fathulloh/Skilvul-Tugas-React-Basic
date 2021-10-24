import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    const dataFilm = {
      mal_id: 5114,
      rank: 1,
      title: "Fullmetal Alchemist: Brotherhood",
      url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      type: "TV",
      episodes: 64,
      start_date: "Apr 2009",
      end_date: "Jul 2010",
      members: 2649743,
      score: 9.16,
    };

    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {animeList.map((res) => {
              return (
                <div className='col-lg-3 col-md-4 col-sm-5'>
                  <MovieCard movie={res} key={res.mal_id}/>

                </div>
                
                
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;