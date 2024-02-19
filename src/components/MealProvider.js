import React, { useState } from "react";
import data from "../data/data.json";


const MealContext = React.createContext();



const MealProvider = ({ children }) => {
  
  const mealObj=data;
  const [Meal, setMeal] = useState({
    ဟင်းကြှီး: "စဉ်းစားမရရင် ခလုတ်နှိပ်",
    ဟင်းချို: "စဉ်းစားမရရင် ခလုတ်နှိပ် ",
    အသုပ်: "စဉ်းစားမရရင် ခလုတ်နှိပ် ",
  });

  const randomMeal = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function changeMenu() {
    setMeal((previous) => ({
      ...previous,
      ဟင်းကြှီး: randomMeal(mealObj.ဟင်းကြှီး),
    }));
    setMeal((previous) => ({
      ...previous,
      ဟင်းချို: randomMeal(mealObj.ဟင်းချို),
    }));
    setMeal((previous) => ({ ...previous, အသုပ်: randomMeal(mealObj.အသုပ်) }));
  }
  return (
    <div>
      <h1>ဒါနဲ့ သင် ဒီနေ့ ဘာစားမှာလဲ</h1>
      <MealContext.Provider value={{ Meal }}>{children}</MealContext.Provider>
      <button onClick={changeMenu}>အခြားဟာ ပြောင်းမယ်</button>
    </div>
  );
};
export const useMealsListContext = () => React.useContext(MealContext);
export default MealProvider;
