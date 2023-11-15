import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Stack, Image, Dropdown, Button } from 'react-bootstrap'
import Logo from './../assets/images/logo.png'
import Avatar from './../assets/images/avatar.jpg'
import { useAuth } from '../context/AuthContext'

function Header() {
    const auth = useAuth()
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }
    return (
        <>
        <Stack direction="horizontal" gap={3} className='fixed-top overflow-hidden d-flex justify-content-between' style={{backgroundColor: "#1687A7", color: "white", marginLeft: "5%"}}>
            <div className=" m-2 d-flex align-items-center">
                <Image src={Logo} width={40} height={40}/>
                <div className='p-2 h2'>CHAT APP</div>
            </div>

            <Dropdown className="" style={{marginRight:''}}>
                <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0'>
                     <Image src={Avatar} roundedCircle   width={50} height={50} style={{ marginRight:'60px', backgroundColor: 'transparent'}}/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-3" ><Button  style={{backgroundColor: 'transparent'}}  onClick={handleLogout}>Logout</Button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
         </Stack>
        <Outlet/>
        </>
    )
}

export default Header
