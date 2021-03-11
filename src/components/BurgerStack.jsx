import ClickedIngredient from './ClickedIngredient.jsx'


export default function BurgerStack(props) {
  const ingredients = props.clickedIngredients.map((ingredient, index) => {
    return (
      <ClickedIngredient
      key={`yum ${index}`}
      name={ingredient.name}
      color={ingredient.color}
    />
    )
  })
  return (
    <div>
      <h1>Burger Stack</h1>

      <div className={'burger-buttons'}>
        <button onClick={props.handleClearClick}>Clear</button>
      </div>

      {ingredients}
    </div>
  )
}