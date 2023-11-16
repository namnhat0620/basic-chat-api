import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css"
import RouteApp from './routes/RouteApp'
import { SideBar } from './components/SideBar/SideBar'
import Chat from './pages/Chat'

function App() {

  return (
   <AuthContextProvider>
      <RouteApp/>
   </AuthContextProvider>
  )
}

export default App
