import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Meal = () => {
    const [meal, setMeal] = useState([]);
    const { mealId } = useParams();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(resp => resp.json())
            .then(json => setMeal(json.meals?.[0]))
    }, [mealId]);
    const { strMeal, strCategory, strArea, strMealThumb, strInstructions } = meal || {};
    console.log('meal :', meal);
    return (
        <div className='my-5'>
            {
                meal ?
                    (<div className='border rounded-lg p-2 flex flex-col w-3/4 mx-auto'>
                        <div className=''>
                            <img src={strMealThumb} alt="" className='rounded-lg mx-auto' />
                        </div>
                        <div className=' flex-auto py-5 px-2 text-center'>
                            <h2 className='text-2xl'>{strMeal}</h2>
                            <h4 className='text-xl'>Type: {strCategory}</h4>
                            <h4 className='text-xl'>Origin: {strArea}</h4>
                            <p className='text-md pt-4 text-justify'>
                                {strInstructions}
                            </p>
                        </div>
                        <div className='mx-auto'>
                            <Link to={`/restaurant`} >
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Show All Foods</button>
                            </Link>
                        </div>
                    </div >)
                    :
                    <p className='text-center text-4xl text-red-600'>Nothing Found</p>
            }
        </div>
    );
};

export default Meal;