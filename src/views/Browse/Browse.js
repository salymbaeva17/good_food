import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import BackToMealsButton from "../../components/BackToMealsButton/BackToMealsButton";
import MealsList from "../../components/MealsList/MealsList";

const Browse = () => {
    const params = useParams()
    const [meals, setMeals] = useState([])
    const [notFound, setNotFound] = useState("")
    useEffect(async () => {
        const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
        !data.meals ? setNotFound("Not Found") : setMeals(data.meals)
    }, [params.name])
    return (
        <div className="container dish pt-3">
            {notFound ?<p className="text-center">{notFound}</p> :
                <MealsList meals={meals}/>}
            <BackToMealsButton />
        </div>
);
};

export default Browse;