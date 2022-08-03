import { About } from "./About"

export const Home = ()=>{
    return(
        <div>
        <h1>Home</h1>
        <a href={<About></About>} >go to about</a>
        </div>
    )  
    
}