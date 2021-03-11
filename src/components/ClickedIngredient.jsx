export default function Ingredient(props) {

  const bgStyle = {
    backgroundColor: props.color
  }

  return (
    <div>
      <div style={bgStyle}>
          {props.name}
      </div>
    </div>
  )
}