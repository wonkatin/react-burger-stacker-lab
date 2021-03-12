import './App.css';
import { useState, useEffect } from 'react'
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

function App() {
  const [clickedIngredients, setClickedIngredients] = useState([])

  useEffect(() => {
    console.log(clickedIngredients)
  }, [clickedIngredients] )

  const handleClick = (e) => {
    setClickedIngredients([...clickedIngredients, { name: e.target.innerText }])
  }
  return (
    <div className="App burger-stacker">
      <IngredientList handleClick={handleClick}/>
      <BurgerStack clickedIngredients={clickedIngredients}/>
    </div>
  );
}

export default App;
