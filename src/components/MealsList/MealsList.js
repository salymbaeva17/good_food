import React from 'react';
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className="row ">
            {
                meals.map(item =>
                    <div className="col-4 mb-4 d-flex justify-content-center">
                        <div className="dish__box">
                            <Link to={`/meal/${item.idMeal}`}>
                                <img src={item.strMealThumb} className="dish__image" alt="item.strMeal" width="300px"/>
                                <h5 className="dish__title">{item.strMeal}</h5>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MealsList;