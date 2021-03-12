export default function Ingredient(props) {
    return (

        <div>
            <button onClick={props.handleClick}>{props.name}</button>
        </div>
    )
}