import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CategoryList extends Component {
  render() {
    return (
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="is-active">
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="columns is-mobile">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h2>
                    <Link to="/movies">Movies By David O'Russell</Link>
                  </h2>
                  <p>
                    Here's a list of my favorite movies directed by David
                    O'Russell.
                  </p>
                </div>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/91rUj8yMeIL._AC_SY741_.jpg"
                    alt="American Hustle Movie Poster"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h2>
                    <Link to="/video-games">Sci-Fi Video Games</Link>
                  </h2>
                  <p>Here's a list of my favorite Sci-Fi video games.</p>
                </div>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img
                    src="https://media.gamestop.com/i/gamestop/10129080/Horizon-Zero-Dawn"
                    alt="Horizon: Zero Dawn"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
