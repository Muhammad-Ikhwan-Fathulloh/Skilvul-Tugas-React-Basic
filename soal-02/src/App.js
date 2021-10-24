import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [{}],
      isLoading: false,
    };
  }

 fetchMovieList (){
  fetch('https://api.jikan.moe/v3/top/anime')
  .then((res) => res.json())
  .then(movlist => {
    // console.log(movlist);
    this.setState({movieList : movlist})
   console.log(this.state.movieList);

  })
 }

 componentDidMount(){
   this.fetchMovieList()
 }

 componentDidUpdate(prevProps, prevState){
  console.log(prevState);
  if(prevState.movieList !== this.state.movieList){
    this.setState({isLoading : true})
  }
 }






  render() {
    if(this.state.isLoading == false){
      return(
        <div className="container my-5">
          <h1 className="text-center">Anime List 2</h1>
          <div className="container my-5">
            <div id="daftar-anime" className="row">
            <h2>Loading...</h2>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <div className="container my-5">
          <h1 className="text-center">Anime List 2</h1>
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
}

export default App;