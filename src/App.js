import { useState, useEffect } from 'react'
import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css';

function App() {

  const [clickedIngredients, setClickedIngredients] = useState([])

  useEffect(() => {
    console.log(clickedIngredients)
  }, [clickedIngredients] )


  const handleIngredientClick = (e) => {
    // console.log(e.target.innerText)
    setClickedIngredients([{ name: e.target.innerText, color: e.target.style.backgroundColor }, ...clickedIngredients])
  }

  const handleClearClick = () => {
    setClickedIngredients([])
  }

  return (
    <div className="App burger-stacker">
      <IngredientList handleIngredientClick={handleIngredientClick} />
      <BurgerStack 
        clickedIngredients={clickedIngredients}
        handleClearClick={handleClearClick}
      />
    </div>
  );
}

export default App;
