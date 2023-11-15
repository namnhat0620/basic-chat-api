import { Stack, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from './../assets/images/logo_lg.png'

function WelcomeChatApp() {
    return (
    <Stack style={{ height: "100vh" }} 
        className='col border-start border-end border-1 border-secondary d-flex justify-content-center align-items-center'>
        <Image src={Logo} width={170}/>
        <h1 style={{color: "#1687A7"}} className="m-4">CHAT APP</h1>
        <h4 style={{color: "#1687A7"}}>LET`S HAVE A CHAT WITH YOUR FRIENDS!</h4>
        <Link style={{color: "#1A4C5B"}} className="text-decoration-underline h5 m-2" title="Click user">How to use Chat App</Link>

    </Stack>
    )
}

export default WelcomeChatApp
