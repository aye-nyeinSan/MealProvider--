import "./App.css";
import DayProvider from "./components/DayProvider";
import MealList from "./components/MealList";
import MealProvider from "./components/MealProvider";

function App() {
  return (
    <div className="App">
      <DayProvider />
      <MealProvider>
        <MealList />
      </MealProvider>
    </div>
  );
}

export default App;
