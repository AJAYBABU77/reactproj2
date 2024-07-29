import React, { useState, useEffect } from "react";
import './Product.css';

export default function App() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);

  return (
    <>
      <div className="container-fluid1  bg-secondary" style={{ backgroundColor: '#f3f4f9', minHeight: '100vh', paddingTop: 20 }}>
        <h1 className="text-center mb-4" style={{ color: 'brown' }}>Search For Products</h1>
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Products, Brands, and More"
            value={search}
            onChange={handleSearch}
            style={{ maxWidth: 400 }}
          />
          <br />
        </div>
        <div className="row bg-secondary">
          {state
            .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            .map(product => (
              <div className="col-md-4" key={product.id}>
                <div className="card bg-light" style={{ height: 500, marginBottom: 30 }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ height: 300, width: '100%', objectFit: 'cover', marginTop: 10 }}
                  />
                  <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.category}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0">Price:</p>
                      <button className="bg-warning border-0" style={{ padding: '5px 10px', fontSize: '16px' }}>
                        ${product.price}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
