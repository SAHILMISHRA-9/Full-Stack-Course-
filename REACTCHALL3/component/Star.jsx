export default function Star(props){

    const starIcon = props.isFilled
    ? "/star-filled.png"
    : "/star-empty.png"
    return(
        <img
          src={starIcon}
          className="favorite"
          alt={props.isFilled? "Filled star icon" : "Empty star icon"}
          onClick={props.onClick}
          aria-label={props.isFilled? "Remove from favorite" : "Add to Favorite"}
        />
    )
}