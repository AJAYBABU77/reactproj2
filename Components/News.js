import React, { useState, useEffect } from 'react';
import './News.css'; // Assuming your CSS file is named News.css

export default function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const primaryColors = ['#FF5733', '#33FF57', '#5733FF', 'yellow', 'violet']; // Define your primary colors here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=18ed2d1832924313ae196aabf8fb6d24');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getPrimaryColor = (index) => {
    return primaryColors[index % primaryColors.length];
  };

  return (
    <div className='container-fluid' id='WW' style={{ backgroundColor: 'Dark', minHeight: '100vh', paddingTop: 20 }}>
      <h1 className="text-center mb-4">Top Business Headlines</h1>
      <div className="d-flex justify-content-center mb-4">
        <input type="text" className="form-control" placeholder="Search by title" value={search} onChange={handleSearch} style={{ maxWidth: 400 }} />
      </div>

      <div className='row'>
        {articles
          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <div key={index} className='col-md-6 col-lg-4 mb-4'>
              <div className="card h-100" id='E' style={{ borderColor: getPrimaryColor(index), borderWidth: '2px', borderStyle: 'solid' }}>
                {item.urlToImage ? (
                  <img src={item.urlToImage} className="card-img-top" id='F' alt={item.title} />
                ) : (
                  <div className="no-image">No image available</div> // Fallback if no image
                )}
                <div className="card-body">
                  <h5 className="card-title" id='K'>{item.title}</h5>
                  <p className="card-text" id='N'>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
