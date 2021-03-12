import Ingredient from './Ingredient'

export default function BurgerStack(props) {
    const ingredients = props.clickedIngredients.map((ingredient, index) => {
        return ( 
        <Ingredient 
            key={index}
            name={ingredient.name}
        />)
    })
    return (
        <div>
            <h1>Burger Stack</h1>
            {ingredients}
        </div>
    )
}