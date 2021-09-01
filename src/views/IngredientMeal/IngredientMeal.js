import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import BackToMealsButton from "../../components/BackToMealsButton/BackToMealsButton";
import MealsList from "../../components/MealsList/MealsList";

const IngredientMeal = () => {
    const [meals, setMeals] = useState([])
    const params = useParams()
    useEffect( () => {
        const fetchData = async () => {
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            setMeals(data.meals)
        }
        fetchData()
    }, [params.name])
    return (
        <div className="container">
            <div className="row">
                <Link className="col-3">
                    <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`}
                         className="mt-5 mb-4 pt-4" alt={params.name}/>
                </Link>
            </div>
            <MealsList meals={meals}/>
            <BackToMealsButton/>
        </div>
    );
};

export default IngredientMeal;