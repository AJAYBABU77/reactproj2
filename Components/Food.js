import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';

const searchIconUrl = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';

export default function Food1() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => setCategories(res.data.categories))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const fetchMealsByCategory = (category) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => {
                setMeals(res.data.meals);
                setSelectedCategory(category);
            })
            .catch(error => console.error(`Error fetching meals for category ${category}:`, error));
    };

    const resetCategorySelection = () => {
        setSelectedCategory(null);
        setMeals([]);
    };

    const handleSearchChange = (event) => setSearchTerm(event.target.value);

    const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="container-fluid my-4" id='NL'>
            <h1 className="text-center mb-4">Food Recipe</h1>
            {selectedCategory ? (
                <>
                    <button
                        className='btn btn-outline-secondary mb-3'
                        onClick={resetCategorySelection}
                    >
                        <img
                            src={searchIconUrl}
                            alt='Reset'
                            style={{ height: 30, width: 30 }}
                        />
                    </button>
                    <h2 className="text-center mb-4">{selectedCategory}</h2>
                    <div className='row mb-4'>
                        <div className='col-md-8 offset-md-2'>
                            <input
                                type='text'
                                placeholder='Search meals...'
                                className='form-control'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        {filteredMeals.map(meal => (
                            <div key={meal.idMeal} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={meal.strMealThumb}
                                        alt={meal.strMeal}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{meal.strMeal}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='row'>
                    {categories.map(category => (
                        <div key={category.idCategory} className='col-md-3 mb-4 text-center'>
                            <button
                                className='btn btn-outline-primary d-flex flex-column align-items-center'
                                onClick={() => fetchMealsByCategory(category.strCategory)}
                            >
                                <img
                                    src={category.strCategoryThumb}
                                    className='img-fluid rounded-circle mb-2'
                                    alt={category.strCategory}
                                    style={{ height: 100, width: 100 }}
                                />
                                <h5>{category.strCategory}</h5>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
