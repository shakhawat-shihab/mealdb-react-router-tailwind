import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(resp => resp.json())
            .then(json => { console.log(json.meals); setMeals(json.meals) })
    }, [searchText]);
    function handleSearchField(event) {
        const text = event.target.value;
        console.log(text);
        setSearchText(text);
    }
    return (
        <div>
            <div className='text-center py-3'>
                <input type="text" name="" id="" className=' w-1/3 border py-2 px-3 rounded rounded-tr-none rounded-br-none focus:outline-none' onChange={handleSearchField} />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded rounded-bl-none rounded-tl-none'>Search</button>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4  p-4'>
                {
                    meals ? meals.map(x => <Meals data={x} key={x.idMeal}></Meals>) : <p className='text-center text-4xl text-red-600'> Nothing Found</p>
                }
            </div>
        </div>
    );
};

export default Restaurant;