import ss from '../public/ss.png'
export default function Body(props){
    return(
        <main>
            <h1>Welcome back, {props.userName} !</h1>
            <img src={ss}/>
        </main>
        
    )
}