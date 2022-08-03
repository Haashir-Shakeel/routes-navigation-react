import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Posts } from "./posts";
import { Notfound } from "./components/Notfound";
export const Views =()=>{
    return(
        <Routes>
        
        <Route index element={<Home></Home>}/>
        <Route path = 'posts' 
        element={
          <div>
          <div>this is posts page</div>
          <Outlet/>
          </div>
        }>
          <Route path=':id' element = {<Posts/>} ></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>

    )
}