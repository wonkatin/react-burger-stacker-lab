# Steps to Achieve

* setup project
  * mkdir ./src/components       
  * touch IngredientList.jsx Ingredient.jsx BurgerStack.jsx 

* stub components, update app

snap 1

```jsx
// Ingredient.jsx
export default function Ingredient() {
  return (
    <div>
      hello from Ingredient
    </div>
  )
}

// IngredientList.jsx
import Ingredient from './Ingredient.jsx'

export default function IngredientList() {
  return (
    <div>
      <h1>Ingredient List</h1>
      <Ingredient />
    </div>
  )
}

// BurgerStack.jsx
import Ingredient from './Ingredient.jsx'

export default function BurgerStack() {
  return (
    <div>
      <h1>Burger Stack</h1>
      <Ingredient />
    </div>
  )
}

// App.js
import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <IngredientList />
      <BurgerStack />
    </div>
  );
}

export default App;
```

* add styles to index.css and apply them

snap 2

```css
/* in index.css */
...
.burger-stacker {
    display: flex;
    justify-content: space-around;
}

```

```jsx
// in App.js
<div className="App burger-stacker">
  <IngredientList />
  <BurgerStack />
</div>
```

* add ingredients to ingredient list and map them to ingredient components
  * update the ingredient component

* snap-3

```jsx
// ingredientList.jsx
import Ingredient from './Ingredient.jsx'

export default function IngredientList() {
  const ingredientObjects = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ] 

  const ingredients = ingredientObjects.map((ingredientObject, index) => {
    return (
      <Ingredient
      key={`yum ${index}`}
        name={ingredientObject.name}
        color={ingredientObject.color} 
      />
    ) 
  })

  return (
    <div>
      <h1>Ingredient List</h1>
      {ingredients}
    </div>
  )
}

// in Ingredient.jsx
export default function Ingredient(props) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  )
}
```

* make the handler function for click events

snap-4

```jsx
// in App.js
const handleIngredientClick = (e) => {
  console.log(e)
}

return (
  <div className="App burger-stacker">
    <IngredientList handleIngredientClick={handleIngredientClick} />
    <BurgerStack />
  </div>
);

// in IngredientList.jsx
const ingredients = ingredientObjects.map((ingredientObject, index) => {
  return (
    <Ingredient
      key={`yum ${index}`}
      name={ingredientObject.name}
      color={ingredientObject.color} 
      handleIngredientClick={props.handleIngredientClick}
    />
  ) 
})

// in Ingredient.jsx
return (
  <div>
    <button onClick={props.handleIngredientClick}>{props.name}</button>
  </div>
)
```

* add styling to make buttons nice

```css
/* in index.css */
button {
  width: 100%;
}
```

* think about where state needs to live
* explore the event to find something we can get to store in state

```jsx
// in App.js
const handleIngredientClick = (e) => {
  console.log(e.target.innerText)
}
```

* make state in App.js, and set it with handleIngredientClick

```jsx
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
    setClickedIngredients([...clickedIngredients, { name: e.target.innerText }])
  }

  return (
    <div className="App burger-stacker">
      <IngredientList handleIngredientClick={handleIngredientClick} />
      <BurgerStack clickedIngredients={clickedIngredients}/>
    </div>
  );
}

export default App;
```

* render ingredients



```jsx
// in BurgerStack.jsx
import Ingredient from './Ingredient.jsx'

export default function BurgerStack(props) {
  const ingredients = props.clickedIngredients.map((ingredient, index) => {
    return (
      <Ingredient
      key={`yum ${index}`}
      name={ingredient.name}
    />
    )
  })
  return (
    <div>
      <h1>Burger Stack</h1>
      {ingredients}
    </div>
  )
}
```

* flip the burger stack

```jsx
// in App.js
setClickedIngredients([{ name: e.target.innerText }, ...clickedIngredients])
```

* add colors

```jsx
// in ingredient.jsx
export default function Ingredient(props) {

  const buttonStyle = {
    backgroundColor: props.color
  }

  return (
    <div>
      <button 
        onClick={props.handleIngredientClick}
        style={buttonStyle}
        >{props.name}</button>
    </div>
  )
}
```