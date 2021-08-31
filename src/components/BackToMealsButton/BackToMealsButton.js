import React from 'react';
import {Link} from "react-router-dom";

const BackToMealsButton = () => {
    return (
        <div className="dish__back pb-4 mt-3">
            <Link to="/meals" className="text-center dish__back-link">Back to Meals</Link>
        </div>
    );
};

export default BackToMealsButton;