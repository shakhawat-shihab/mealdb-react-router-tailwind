import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Meals = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb, strInstructions } = props.data;
    const history = useHistory();
    function eventHandler() {
        history.push(`/meal/${idMeal}`);
    }
    return (
        <div className='border rounded-lg p-2 flex flex-col hover:shadow-custom shadow-md  transform hover:skew-y-1 transition duration-500 ease-in-out'>
            <div className=''>
                <img src={strMealThumb} alt="" className='rounded-lg ' />
            </div>
            <div className=' flex-auto py-5 px-2'>
                <h2 className='text-2xl'>{strMeal}</h2>
                <h4 className='text-xl'>Type: {strCategory}</h4>
                <h4 className='text-xl'>Origin: {strArea}</h4>
                <p className='text-md pt-4 text-justify'>
                    {strInstructions.length > 400 ? strInstructions.slice(0, 400).concat(' . . . ') : strInstructions}
                </p>
            </div>
            <div className='mx-auto'>
                <Link className='' to={`/meal/${idMeal}`} >
                    Show Details
                </Link>
                <hr className='border my-5' />
                <Link to={`/meal/${idMeal}`} className='' >
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Show Details</button>
                </Link>
                <hr className='border my-5' />
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded' onClick={eventHandler}  >Show Details</button>
            </div>
        </div >
    );
};

export default Meals;