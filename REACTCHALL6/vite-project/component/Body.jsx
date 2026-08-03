import {useState} from "react"

export default function Body(){
    const [meme, setMeme]=useState({
        topText : "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "../meme.jpg"
    })
    
    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prevMeme=>({
            ...prevMeme,
            // topText:value,
            [name]:value

        }))
    }

    return(
        <main className="main">
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="one does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label>Botton Text
                    <input 
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Generate a new meme image</button>
            </div>
            <div className="meme">
                <img className="memeimg" src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}