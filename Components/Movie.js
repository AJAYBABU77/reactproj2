import React, { useState, useEffect } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Movie.css';
 
function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetchDefaultMovies();
  }, []);
 
  const fetchDefaultMovies = () => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?s=new&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => {
        setLoading(false);
        if (value.Response === 'True') {
          setData(value.Search);
        } else {
          setData([]);
          setError(value.Error);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((response) => response.json())
      .then((value) => {
        setLoading(false);
        if (value.Response === 'True') {
          setData(value.Search);
        } else {
          setData([]);
          setError(value.Error);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };
 
  return (
    <body>
    <div className="bg-dark text-light min-vh-100">
      <div className="container-fluid py-4" id='J' >
        <h1 className="text-center mb-4">Search for Your Favorite Movie</h1>
        <form onSubmit={submitHandler} className="mb-4">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter movie title..."
              className="form-control me-2"
              style={{ maxWidth: '600px', flex: '1' }}
            />
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </div>
        </form>
        {loading && <div className="text-center mb-4">Loading...</div>}
        {error && <div className="text-center text-danger mb-4">{error}</div>}
        {data.length === 0 && !loading && !error && <div className="text-center mb-4">No movies found</div>}
        <div className="row">
          {data.map((movie) => (
            <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card custom-card">
                <img
                  src={movie.Poster}
                  className="card-img-top img-fluid custom-card-img"
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h5 className="card-title custom-card-title">
                    {movie.Title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </body>
  );
}
 
export default App;
 
 