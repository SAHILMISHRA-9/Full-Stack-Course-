export function Entry(){
    return(
        <article className="article">
                <img className="photo" src="./fuji.jpg"></img>
        <div>
            <div className="head">
                <img className="logo" src="loc.png"/>
                <span>JAPAN</span>
                <a href="https://www.bing.com/maps/directions?rtp=%7Epos.35.36055374145508_138.7274932861328__Mt.Fuji%252C%2520Shizuoka%252C%2520Japan_&cp=35.360554%7E138.727493&lvl=16&style=r">View on Google Map</a>
            </div>
            <div className="low">
                <h1>Mount Fuji</h1>
                <p>12 Jan,2021 - 24 Jan,2021</p>
                <p>Mount Fuji is Japan's tallest mountain at 
                    3,776 meters. It is an active volcano and 
                    one of the country's most iconic landmarks, 
                    attracting millions of visitors each year for 
                    hiking, sightseeing, and photography.</p>
            </div>
        </div>
            
        </article>
    )
}