import React, {useEffect, useState} from 'react';
import axios from "axios";
import MealsList from "../MealsList/MealsList";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(async () => {
        const {data:{meals}} = await axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
        setMeals(meals)
    }, [])
    return (
        <div className="container dish">
            <h1 className="menu__title">The Meal</h1>
           <MealsList meals={meals}/>
        </div>
    );
};

export default Meals;