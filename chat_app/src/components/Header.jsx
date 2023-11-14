import React from 'react'
import { Outlet } from 'react-router-dom'
import { Stack, Image } from 'react-bootstrap'
import Logo from './../assets/images/logo.png'
import Avatar from './../assets/images/avatar.jpg'
function Header() {
    return (
        <>
        <Stack direction="horizontal" gap={3} className='fixed-top overflow-hidden' style={{backgroundColor: "#1687A7", color: "white", marginLeft: "5%"}}>
            <div className="p-2 m-2">
                <Image src={Logo} style={{width: "40px", marginRight: "-20px"}}/>
            </div>
            <div className='p-2 h2'>CHAT APP</div>
            <div className="p-2 ms-auto "><Image src={Avatar} style={{ borderRadius: "50%", height: "40px", width: "40px" }}/></div>
         </Stack>
        <Outlet/>
        </>
    )
}

export default Header
