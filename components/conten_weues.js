
import Image from "next/image"
import logo_1 from '../public/dell-bw-logo.png'
import logo_2 from "../public/cisco-bw-logo.png"
import logo_3 from "../public/PROXMOX-bw-logo.png"
// import logo_4 from "../public/google-bw-logo.png"
import { Container } from "react-bootstrap"
export default function Conten_weuse() {
    return(
        <div className=" bg-secondary bg-opacity-25 d-md-none d-sm-none d-none  d-lg-block">
            <Container className=" py-3 d-flex justify-content-around">
                <Image src={logo_1} alt="" ></Image>
                <Image src={logo_2} alt="" ></Image>
                <Image src={logo_3} alt="" ></Image>
                {/* <Image src={logo_4} alt="" ></Image> */}
            </Container>
        </div>
        
    )
}