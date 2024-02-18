import React,{useState} from "react"

const MealContext = React.createContext();

 const MealProvider =({children})=> {


    const mealObj = {
        ဟင်းကြှီး: [
          "ကြက်ပဲဟင်း",
          " ကြက်သားဟင်း",
          "အမဲအားလူးဟင်း",
          "ဝက်သားပုန်းရည်ကြီး",
        ],
        ဟင်းချို: [" ချဉ်ပေါင်ရွက်ဟင်းချို", "ကြက်ခြေထောက်ဂွေးဒေါက်ရွက်ဟင်းချို"],
        အသုပ်: ["ပဲပင်ပေါက်သုပ်", "သရက်ချဉ်သုပ်"],
      };

      const [ Meal, setMeal ] = useState({
        ဟင်းကြှီး: "မသိရင် ခလုတ်နှိပ်",
        ဟင်းချို: "မသိရင် ခလုတ်နှိပ် ",
        အသုပ်: "မသိရင် ခလုတ်နှိပ် ",
      });

      const randomMeal = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function changeMenu() {
    setMeal((previous)=>({...previous, ဟင်းကြှီး: randomMeal(mealObj.ဟင်းကြှီး)}))
    setMeal((previous)=>({...previous,  ဟင်းချို: randomMeal(mealObj.ဟင်းချို)}))
    setMeal((previous)=>({...previous, အသုပ်: randomMeal(mealObj.အသုပ်)}))
   
  }
     return (
        <div>
          
            <h1>သင် ဒီနေ့ ဘာစားမှာလဲ</h1>
            <MealContext.Provider value={{Meal}}>
                {children}
            </MealContext.Provider>
            <button onClick={changeMenu}>အခြားဟာ ပြောင်းမယ်</button>
        </div>
     )
    
}
export const useMealsListContext = ()=> React.useContext(MealContext);
export default MealProvider;