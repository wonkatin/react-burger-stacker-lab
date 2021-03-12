# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Burger Stacker Lab

You will be writing an app that simulates the stacking of a burger. You are provided an array of ingredients and you need to make an app the displays all the ingredients on the left side and has an area on the right where the ingredients can be stacked to make a burger.

Here is an image of the finished app:

![](https://i.imgur.com/ovC6F3q.png)

___
## User Stories

* As a user, I want to see all available burger ingredients listed on the left side.
* I want the ability to add any ingredient onto the burger stack using a button.
* I want to see each ingredient I select added to the top of the burger stack on the right side.
* I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)
* I want the ability to clear the burger stack so I can start again.

___
## Get Started

1. Clone this repo
1. Use `create-react-app react-burger-stacker-lab` to generate a a new react app in the newly cloned repo


### Component Hierarchy:

```
App
|--IngredientList
|  |--Ingredient (clickable)
|
|--BurgerStack
|  |--Ingredient (after click)
```

### Notes:

The burger should be stacked from the bottom up, where new ingredients are being placed on top on the ones that are already there.

### Starter Data:

Here are some ingredients to get you started. Feel free to change them or add more. This will live in the `IngredientList` component.

```js
[
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
```

Look back at the component hierarchy. Where will state need to live? Where will the click event handlers be declared? How can you get two sibling components to communicate with each other?

## **PART 1:** setting up the project
___

You will need to stub out three components for this app: `IngredientList.jsx` `Ingredient.jsx` and `BurgerStack.jsx`. They should live inside a components folder. 

After you make the three components, stub them out with simple text to verify they are working and render them. App will render `IngredientList.jsx` and `BurgerStack.jsx`. You can put a single `Ingredient.jsx` in both `BurgerStack.jsx` and `IngredientList.jsx` just for testing purposes.

<details>
  <summary>HOLD UP! How do I do this?</summary>

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

</details>

___

### If your app looks something like this, then you are on the right track:

![](https://i.imgur.com/h7LCxnE.png)

___

Take a moment to do some styling, but just enough to get the page layed out. Fancy styling can come later when the app functionality is finished. 

* In `index.css` make a selector that you can use position the `IngredientList` on the left on the `BurgerStack` on the right. 
* Where can you apply this css in your app to position the elements?
  * **HINT** use flexbox for easy responsive positioning
  * **HINT** `justify-content:` is your friend. Which way of justifying the content works best? Try a few out.

<details>
  <summary>I'm allergic to CSS, just tell me</summary>

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

</details>

___

This is what you are going for:

![](https://i.imgur.com/FQKxWgT.png)

___

## **PART 2:** Rendering ingredients 

Using the provided ingredient data, render it on the page in the.

* You can make a constant in the `IngredientList` component for the data array. Since this data doesn't need to change, it doesn't have to be in state. 
* You'll have to map the data into `Ingredient` Components and render them in the `IngredientList`. 
* Don't forget to setup the `Ingredient` component to receive props and render them!

<details>
  <summary>OH NO! Something went wrong!</summary>

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

</details>

___

### If your app looks something like this, then everything is just fine:

![](https://i.imgur.com/bMpzHAq.png)

___

## **PART 3:** User Interactions

Now its time to add some click events! 

**STOP** and think about where state is going to need to live. Since `IngredientList.jsx` and `BurgerStack.jsx` are sibling components, we will need to put state in their parent component, so they can share. Since our click event will need to interact with state, the handler function will have to live in the parent component too so it access state as well.

* Stub an event handler function in `App.js` and have it `console.log()` the click event 
  * don't forget to pass in the event as a parameter to the function to log it!
* Drill the event handler function down to `IngredientList` as a prop.
* When you map each `Ingredient` component, drill the event handler down one more time.

### _GET READY_ **INCOMING ACCESSIBILITY RANT**

> Since the ingredients need to be clickable, you should put a `<button>` in the `Ingredient` component for the user to click on. Although it is very possible to make _any html element clickable_ (and unfortunately something that people do all to frequently), you should always use **semantically correct elements for click events**. This is a big **_accessibility_** concern, as screen-reader devices use `<button>`s for inform their users about possible interactions on the page. A visually impaired person relying on an screen-reader **may not have any way know** to click on a wonderfully styled div with an event listener on it, because their screen-reader will not know to tell them about it.

<details>
  <summary>HELP! I'm scared my app won't be accessible now! AND WHAT IS PROP DRILLING ANYWAYS?!?!</summary>

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

</details>

___

### Its okay if it looks like this:

![](https://i.imgur.com/YvwoakH.png)
___

Yea, buttons look just teensy bit wonky now. You can add a quick styling so they are relatively sized to their parent element.

<details>
  <summary>Relatively styled to their what now?</summary>

```css
/* in index.css */
button {
  width: 100%;
}
```

```jsx
// in App.js
<div className="App burger-stacker">
  <IngredientList />
  <BurgerStack />
</div>
```

</details>

___

### Ahhh, thats better:

![](https://i.imgur.com/HIaTCJh.png)

___

## **PART 4:** Making State Happen

You are currently logging the `synthetic event` whenever a button is clicked, but you need to get some data out of it for state, namely the text of the `<button>`.

* Take some time to explore the event object in the console (it will show up in your browser console). Find the text of the button in there so it can be used in state.
  * **HINT** I'd start sniffing around the e.target if I were you

<details>
  <summary>I'm sniffing like crazy and I CAN"T SMELL ANYTHING</summary>

```jsx
// in App.js
const handleIngredientClick = (e) => {
  console.log(e.target.innerText)
}
```

</details>

Is that a burger ingredient I smell? It is? Lets make some state to hold it!

**OH SNAP** How we gonna do this? Well state should probably definitely be an array, since there will be many ingredient names. I'd make it an array of objects, with a `key` of `name` that has a `value` of `e.target.innerText`. Why an object with one key? _spoiler alert_ you might want this object to have a key of color later too (but not until we get there...). _PRO TIP_ Keep the shape of the data consistent across the apps (just do it, it'll make things less confusing -- look at the array if ingredients to know what I mean). 


* Set initial state to be an empty array `[]`
* Wait how are we going to add to this array in state? hmmm....
  * **HINT** You know I love my spread operators...you should love them too!
* Don't forget to import `useState` state in `App.js`
  * you might want to import `useEffect` too...just to log state when you update it (nothing too fancy with `useEffect` -- so this bit is optional)

Now drill that state down into the `BurgerStack` component!

* Pass the state as props to `BurgerStack` when you render it! We'll need it in just a sec.

<details>
  <summary>I know, this is a tough one, go ahead and sneak a peak</summary>

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

</details>


## **PART 5:** Rendering the Ingredients in `BurgerStack`

So close! WE ARE ALMOST THERE!

* You know the _drill_ by now (lmao sorry), pass the state in props to the `BurgerStack` 
  * You will have to map an array of ingredients to render in `BurgerStack` -- you got this

 <details>
  <summary>Burger Stack? More Like I'm Burger Stuck!</summary>

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

</details>

Oh wait...my burger is stacking backwards **AAAAAAHHHH!!!!!**

hmm...how can we fix this? Look at how you are adding ingredients to state in `App.js`. How can this be refactored so that the ingredients appear on top of the stack?

<details>
  <summary>This is like day 3 of spread operator....give me a break here!</summary>

```jsx
// in App.js
setClickedIngredients([{ name: e.target.innerText }, ...clickedIngredients])
```

</details>

___

# BONUS TIME

* Oh no... the burger stack ingredients are buttons too. That should be fixed for sure.
* Add the ability to clear the burger stack
* Each ingredient has an associated color. Use this to give each ingredient a nice background color reminiscent of what it looks like in real life.
  * **HINT** research different ways to apply css styles in React
  * **HINT** after you apply the style, explore the event to see how you can store the color in state when it is clicked

___

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
