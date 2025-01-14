import Main from "../src/pages/main"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Logout from "./pages/logout"
import Expence from "./pages/expence"
function App() {
   return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Main/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = "/logout" element = {<Logout/>}/>
      <Route path = "/expence" element = {<Expence/>}/>



     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
