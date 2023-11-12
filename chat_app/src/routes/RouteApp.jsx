import {Routes, Route, Navigate} from "react-router-dom"
import Chat from '../pages/Chat'
import Register from '../pages/Register'
import Login from "../pages/Login"
import { RequireAuth } from "../context/RequireAuth"

function RouteApp() {
    return (
        <Routes>
        <Route path='/' element={<RequireAuth><Chat/></RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    )
}

export default RouteApp
