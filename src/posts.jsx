import { useParams } from "react-router-dom"

export const Posts = () =>{
 const params = useParams()
 return (<div>
    {params.id}
 </div>)   
}