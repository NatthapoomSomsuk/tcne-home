import { Card, Row, Col, Button } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
export default function Conten_vps_m() {
    useEffect(() => {
        setval(window.innerWidth)
        window.addEventListener('resize', () => {
            setval(window.innerWidth)
        })
    }, [])
    const [Layoutch, setLayoutch] = useState("lg");
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
    return (<div className="bg-ct-2 p-5">

        <div className=" d-flex justify-content-center flex-column">
            <div className=" d-xxl-flex d-xl-flex d-lg-flex d-md-block justify-content-center lh-1">
                <p className=" fs-1 fw-medium m-0 me-3 text-nowrap text-md-center text-sm-center text-center ">CLOUND VPS </p>
                <p className=" fs-1 fw-medium m-0 text-blue-400 text-nowrap text-md-center text-sm-center text-center">PLANS</p>
            </div>
            <div className=" d-flex justify-content-center">
                <p className=" fs-5 fw-light text-black-50 lh-1 text-center " style={{ width: "816px" }}>
                    หากคุณกำลังมองหาแหล่งให้บริการ Cloud VPS ที่มีคุณภาพและประสิทธิภาพสูง ไม่ว่าจะเป็นเพื่อการใช้งานส่วนตัวหรือธุรกิจของคุณ ไม่ควรพลาดกับ Cloud VPS ของเรา!
                </p>
            </div>
            <hr className=" border-5 rounded-pill mx-auto m-0 border-blue-400 opacity-100" style={{ width: "141px" }}></hr>
        </div>
        <Row className=' d-flex justify-content-center mt-5 g-lg-0 g-xxl-0 g-xl-0 g-md-3 g-sm-3 g-3' md={2} sm={2} xs={1}>
            {Layoutch == "xxl" || Layoutch == "xl" || Layoutch == "lg" ?
                <>
                    <Col xxl={3} xl={3} lg={4}>
                        <Card className=' border-0 rounded-4 shadow' style={{ transform: "scale(0.85)" }}>
                            <Card.Body>
                                <div className=' text-center'>
                                    <p className=' text-black-50 fs-4 '>VPS Pack Small</p>
                                    <p className=' display-4 text-blue-400 fw-medium m-0 lh-1'>300.00</p>
                                    <p className=' fs-4 lh-1'>บาท/เดือน</p>
                                </div>
                                <div>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>CPU 2 vCore</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>RAM 4 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>SSD 40 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>IP ส่วนตัว</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>1 IP Address</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>Network 2 Gbps (Share)</p>
                                </div>
                                <div className=' mt-5 d-grid'>
                                    <Link href={`https://client.tcne.in.th/`} className=' btn btn-blue-400 rounded-pill text-white fw-light'>Order Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4}>
                        <Card className=' border-5 border-blue-400 rounded-4 shadow position-relative'>
                            <div className="position-absolute top-0 start-50 translate-middle badge fs-6 px-5 fw-medium rounded-pill bg-blue-400">แนะนำ</div>
                            <Card.Body>
                                <div className=' text-center'>
                                    <p className=' text-black-50 fs-4 '>VPS Pack Good</p>
                                    <p className=' display-4 text-blue-400 fw-medium m-0 lh-1'>1400.00</p>
                                    <p className=' fs-4 lh-1'>บาท/เดือน</p>
                                </div>
                                <div>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>CPU 10 vCore</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>RAM 20 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>SSD 80 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>IP ส่วนตัว</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>1 IP Address</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>Network 2 Gbps (Share)</p>
                                </div>
                                <div className=' mt-5 d-grid'>
                                    <Link href={`https://client.tcne.in.th/`} className=' btn btn-blue-400 rounded-pill text-white fw-light'>Order Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4}>
                        <Card className=' border-0 rounded-4 shadow' style={{ transform: "scale(0.85)" }}>
                            <Card.Body>
                                <div className=' text-center'>
                                    <p className=' text-black-50 fs-4 '>VPS Pack Normal</p>
                                    <p className=' display-4 text-blue-400 fw-medium m-0 lh-1'>800.00</p>
                                    <p className=' fs-4 lh-1'>บาท/เดือน</p>
                                </div>
                                <div>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>CPU 4 vCore</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>RAM 8 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>SSD 50 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>IP ส่วนตัว</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>1 IP Address</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>Network 2 Gbps (Share)</p>
                                </div>
                                <div className=' mt-5 d-grid'>
                                    <Link href={`https://client.tcne.in.th/`} className=' btn btn-blue-400 rounded-pill text-white fw-light'>Order Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </> : <>
                    <Col>
                        <Card className=' border-5 border-blue-400 rounded-4 shadow position-relative'>
                            <div className="position-absolute top-0 start-50 translate-middle badge fs-6 px-5 fw-medium rounded-pill bg-blue-400">แนะนำ</div>
                            <Card.Body>
                                <div className=' text-center'>
                                    <p className=' text-black-50 fs-4 '>VPS Pack Good</p>
                                    <p className=' display-4 text-blue-400 fw-medium m-0 lh-1'>1400.00</p>
                                    <p className=' fs-4 lh-1'>บาท/เดือน</p>
                                </div>
                                <div>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>CPU 10 vCore</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>RAM 20 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>SSD 80 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>IP ส่วนตัว</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>1 IP Address</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>Network 2 Gbps (Share)</p>
                                </div>
                                <div className=' mt-5 d-grid'>
                                    <Link href={`https://client.tcne.in.th/`} className=' btn btn-blue-400 rounded-pill text-white fw-light'>Order Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4}>
                        <Card className=' border-0 rounded-4 shadow h-100' >
                            <Card.Body>
                                <div className=' text-center'>
                                    <p className=' text-black-50 fs-4 '>VPS Pack Normal</p>
                                    <p className=' display-4 text-blue-400 fw-medium m-0 lh-1'>800.00</p>
                                    <p className=' fs-4 lh-1'>บาท/เดือน</p>
                                </div>
                                <div>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>CPU 4 vCore</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>RAM 8 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>SSD 50 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>IP ส่วนตัว</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>1 IP Address</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>Network 2 Gbps (Share)</p>
                                </div>
                                <div className=' mt-5 d-grid'>
                                    <Link href={`https://client.tcne.in.th/`} className=' btn btn-blue-400 rounded-pill text-white fw-light'>Order Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4}>
                        <Card className=' border-0 rounded-4 shadow h-100' >
                            <Card.Body>
                                <div className=' text-center'>
                                    <p className=' text-black-50 fs-4 '>VPS Pack Small</p>
                                    <p className=' display-4 text-blue-400 fw-medium m-0 lh-1'>300.00</p>
                                    <p className=' fs-4 lh-1'>บาท/เดือน</p>
                                </div>
                                <div>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>CPU 2 vCore</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>RAM 4 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>SSD 40 GB</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>IP ส่วนตัว</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>1 IP Address</p>
                                    <p className=' fs-5 m-0 d-flex align-items-center lh-1'><i className="bi bi-check fs-2 text-blue-400 "></i>Network 2 Gbps (Share)</p>
                                </div>
                                <div className=' mt-5 d-grid'>
                                    <Link href={`https://client.tcne.in.th/`} className=' btn btn-blue-400 rounded-pill text-white fw-light'>Order Now</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </>}

        </Row>
        <div className=' text-center mt-5'>
            <Link href={"/cloud-vps"} className=' text-black-50 text-decoration-none fs-5'>More VPS Server Plans <i className="bi bi-chevron-double-right"></i></Link>
        </div>
    </div>)
}