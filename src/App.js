import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Meals from "./components/Meals/Meals";
import MealInfo from "./views/MealInfo/MealInfo";
import Browse from "./views/Browse/Browse";
import IngredientMeal from "./views/IngredientMeal/IngredientMeal";

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path="/"><Home /></Route>
            <Route path="/meals"><Meals/></Route>
            <Route path="/meal/:id"><MealInfo/></Route>
            <Route path="/browse/:name"><Browse/></Route>
            <Route path="/ingredient/:name"><IngredientMeal/></Route>
        </Router>
    );
};

export default App;