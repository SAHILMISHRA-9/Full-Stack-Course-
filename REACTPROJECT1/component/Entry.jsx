// export function Entry(props){
//     return(
//         <article className="article">
//                 <img className="photo" src={props.img.src} alt={props.img.alt}></img>
//         <div>
//             <div className="head">
//                 <img className="logo" src="loc.png"/>
//                 <span>{props.country}</span>
//                 <a href={props.googleMapsLink}>View on Google Map</a>
//             </div>
//             <div className="low">
//                 <h1>{props.title}</h1>
//                 <p>{props.dates}</p>
//                 <p>{props.text}</p>
//             </div>
//         </div>
            
//         </article>
//     )
// }

// to use entry as a whole we have to do
// props.entry.attribute  notice entry here

// export function Entry(props){
//     return(
//         <article className="article">
//                 <img className="photo" src={props.entry.img.src} alt={props.entry.img.alt}></img>
//         <div>
//             <div className="head">
//                 <img className="logo" src="loc.png"/>
//                 <span>{props.entry.country}</span>
//                 <a href={props.entry.googleMapsLink}>View on Google Map</a>
//             </div>
//             <div className="low">
//                 <h1>{props.entry.title}</h1>
//                 <p>{props.entry.dates}</p>
//                 <p>{props.entry.text}</p>
//             </div>
//         </div>
            
//         </article>
//     )
// }

// And when using {...entry} we dont have to do the 
// props.entry.properties
// just simply props.properties

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