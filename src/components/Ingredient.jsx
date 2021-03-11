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