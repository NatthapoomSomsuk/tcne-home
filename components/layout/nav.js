import Image from 'next/image';
import { Navbar, Offcanvas, Nav, Container, Button } from 'react-bootstrap';
import tcne_logo from '@/public/logo_tcne_L_white.png'
import React, { useState, useEffect } from "react";
import Conten_footer from '../conten_footer';
import Conten_top from '../conten_top';
import Img_barmanu from '../../public/menu-rounded.svg'
import Link from 'next/link';
export default function NavBar({ children }) {
    useEffect(() => {
        setval(window.innerWidth)
        window.addEventListener('resize', () => {
            setval(window.innerWidth)
        })
    }, [])
    const [Layoutch, setLayoutch] = useState("lg");
    const [shadownav, setshadownav] = useState(false);
    function setval(width) {
        if (width < 576) {
            setLayoutch("sm")
        } else if (width >= 1400) {
            setLayoutch("xxl")
        } else if (width >= 1200) {
            setLayoutch("xl")
        } else if (width >= 992) {
            setLayoutch("lg")
        } else if (width >= 786) {
            setLayoutch("md")
        } else if (width >= 576) {
            setLayoutch("sm")
        } else {
            setLayoutch("xs")
        }
    }
    return (<>
        <div className=' fixed-top'>
        {/* <Navbar className=' bg-light p-1 d-sm-none d-none d-md-block '>
            <div className=' d-flex align-items-center justify-content-end small px-5'>
                ติดต่อเราได้ที่ Line : @TCNE หรือ Facebook : TCNE
            </div>
        </Navbar> */}
        <Navbar className='bg-c-1 px-xl-3 px-2 '>
            <Container>
            <Navbar.Brand href="/"><Image src={tcne_logo} alt={"TCNE LOGO White"} width={200} priority></Image></Navbar.Brand>
            {Layoutch == "xxl" || Layoutch == "xl" || Layoutch == "lg" ? <Nav className=' justify-content-end w-100'>
                <Nav.Link href='/' className=' nva-m-1 text-center position-relative border-0 fw-light' style={{ width: "8rem" }}>
                    หน้าแรก
                </Nav.Link>
                <Nav.Link href='/cloud-vps' className=' nva-m-1 text-center position-relative border-0 fw-light' style={{ width: "8rem" }}>
                    Cloud VPS
                </Nav.Link>
                <Nav.Link href='/contact' className=' nva-m-1 text-center position-relative border-0 fw-light' style={{ width: "8rem" }}>
                    ติดต่อ
                </Nav.Link>
                <Nav.Item className=' mx-2'>
                    <div className="vr border-1 border h-100"></div>
                </Nav.Item>
                <Nav.Link href='https://client.tcne.in.th/register' className=' btn btn-outline-primary border-0 rounded-pill px-4 text-white' >
                    สมัครเข้าใช้งาน
                </Nav.Link>
                {/* <Nav.Item className=' d-flex align-items-center fw-medium text-white-50 mx-3'>หรือ</Nav.Item> */}
                <Nav.Link href='https://client.tcne.in.th/login' className=' text-white-50 fw-light' >
                    เข้าสู่หน้าจัดการ
                </Nav.Link>
            </Nav> :
                <>
                <Button variant='' className=' border-0 text-white-50' onClick={()=>setshadownav(!shadownav)}>
                    <Image src={Img_barmanu} className=' text-white' alt='bar'>
                    </Image>
                </Button>
                <Offcanvas show={shadownav} onHide={() => setshadownav(!shadownav)} className=" bg-c-1">
                    <Offcanvas.Header >
                    <Image src={tcne_logo} alt={"TCNE LOGO White"} width={200} priority></Image>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                       <Link className=' text-decoration-none text-white my-3 fs-4 w-100 d-block' href={"/"}>หน้าแรก</Link>
                       <Link className=' text-decoration-none text-white my-3 fs-4 w-100 d-block' href={"/cloud-vps"}>Clound VPS</Link>
                       <Link className=' text-decoration-none text-white my-3 fs-4 w-100 d-block' href={"/contact"}>ติดต่อ</Link>
                        <hr className=' border-3 rounded-4 border-secondary'></hr>
                       <Link className=' text-decoration-none text-white my-3 fs-4 w-100 d-block' href={"https://client.tcne.in.th/register"}>สมัครเข้าใช้งาน</Link>
                       <Link className=' text-decoration-none text-white my-3 fs-4 w-100 d-block' href={"https://client.tcne.in.th/login"}>เข้าสู่หน้าจัดการ</Link>
                    </Offcanvas.Body>
                </Offcanvas></>}
            </Container>
            
        </Navbar>
        </div>
        <Conten_top/>
        { children }
        <Conten_footer/>
    </>)
}