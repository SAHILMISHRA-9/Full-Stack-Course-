export default function Body(){
    return(
        <main className="main">
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="one does not simply"
                        name="Top Text"
                    />
                </label>
                <label>Botton Text
                    <input 
                        type="text"
                        placeholder="Walk into Mordor"
                        name="Botton Text"
                    />
                </label>
                <button>Generate a new meme image</button>
            </div>
            <div className="meme">
                <img className="memeimg" src="../meme.jpg" />
                <span className="top">One does not simply</span>
                <span className="bottom">Walk into Mordor</span>
            </div>
        </main>
    )
}