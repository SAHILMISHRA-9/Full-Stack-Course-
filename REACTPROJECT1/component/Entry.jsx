export function Entry(props){
    return(
        <article className="article">
                <img className="photo" src={props.img.src} alt={props.img.alt}></img>
        <div>
            <div className="head">
                <img className="logo" src="loc.png"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Map</a>
            </div>
            <div className="low">
                <h1>{props.title}</h1>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </div>
            
        </article>
    )
}