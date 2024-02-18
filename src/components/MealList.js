import React from "react";
import { useMealsListContext } from "./MealProvider";

const MealList = () => {
  const mealListStyle = {
    textDecoration: "none",
    listStyle: "none",
  };
 const { Meal } = useMealsListContext();

  return (
    <div>
      <ul style={mealListStyle}>
       <li>ဟင်းကြှီး = {Meal.ဟင်းကြှီး}</li>
       <li>ဟင်းချို = {Meal.ဟင်းချို}</li>
       <li>အသုပ် = {Meal.အသုပ်}</li>
        
      </ul>
    </div>
  );
};
export default MealList;
