import React from 'react';
import {Link} from "react-router-dom";

const Ingredients = ({ingredients}) => {
    return (
        <div className="row">
            <h4 className="text-center mb-4">Ingredients</h4>
            {
                ingredients.map((item, idx) =>
                    <Link to={`/ingredient/${item}`} key={idx} className="ing-img col-3">
                        <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt="" />
                        <p className="dish__descr">{item}</p>
                    </Link>
                )
            }
        </div>
    );
};

export default Ingredients;