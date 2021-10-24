import React, { Component } from "react";

export default class MovieCard extends Component {
  render() {
      const {movie} = this.props
    return (
      <div className="col-12 my-3">
        <div class="card h-100">
          <img
            src={movie.image_url}
            class="card-img-top"
            alt="skilvul"
          />
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <h6 class="card-subtitle mb-2">
              <span class={`badge ${movie.type === 'TV' ? 'bg-danger' : 'bg-success'} `}>{movie.type}</span>
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-body">
            <a
              href={movie.url}
              class="btn btn-primary w-100 text-uppercase"
            >
              readmore
            </a>
          </div>
        </div>
      </div>
    );
  }
}