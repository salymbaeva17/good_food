import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Ingredients from "../../components/Ingredients/Ingredients";
import BackToMealsButton from "../../components/BackToMealsButton/BackToMealsButton";
import YouTube from "../../components/YouTube/YouTube";

const MealInfo = () => {
    const params = useParams()
    const [meal, setMeal] = useState({})
    const [youtube, setYoutube] = useState("")
    const [ingredients, setIngredients] = useState([])


    // useEffect() срабатывает когда рендерится компонент !important
    useEffect(async () => {
            const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`) // -создаётся запрос на сервер
            const ingredientsArray = Array(20).fill(0).reduce((acc, item, idx) => {
                const ingredient = meals[0][`strIngredient${idx + 1}`]
                return ingredient ? [...acc, ingredient] : acc
            }, []) // ingredientsArray получает массив с ингредиентами
            const youtubeCode = meals[0].strYoutube.slice(meals[0].strYoutube.indexOf("v=") + 2, meals[0].strYoutube.length)
        setIngredients(ingredientsArray)
        setMeal(meals[0])
        setYoutube(youtubeCode)
        }, [params.id])
    return (
        <div className="dish container">
            <h2 className="menu__title">Full Recipe</h2>
            <div className="meal-info row">
                <div className="col-6">
                    <div className="dish__box-big">
                        <img className="dish__img" src={meal.strMealThumb} alt={meal.strMeal}/>
                        <h3 className="dish__title dish__title2">{meal.strMeal}</h3>
                        <p className="dish__desc"><span>Instructions:</span> {meal.strInstructions}</p>
                    </div>
                </div>
                <div className="col-6 dish__right-side">
                    <Ingredients ingredients={ingredients} />
                    <YouTube youtube={youtube} />
                </div>
                <BackToMealsButton/>
            </div>
        </div>
    );
};

export default MealInfo;