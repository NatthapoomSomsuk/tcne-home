
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
export default function Conten_top() {
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
    return (
        <div className=' bg-ct-1 ' style={{ height: "30rem" }}>
            <Container className="h-100 ">
                <div className=' h-100 d-flex flex-column align-items-center '>
                    <div className='my-auto lh-1 pt-5 w-100 '>
                        <p className=' fs-2 text-white fw-medium m-0 lh-1  text-xxl-start text-xl-start text-lg-start text-sm-center text-md-center text-center'>เปิดรับประสบการณ์ใหม่</p>
                        <h3 className='  text-cyan-500 display-3 m-0 lh-1 fw-medium  text-xxl-start text-xl-start text-lg-start text-sm-center text-md-center text-center'>กับบริการด้าน Cloud VPS </h3>
                        <p className=' fs-6 text-white fw-normal m-0 mt-2  text-xxl-start text-xl-start text-lg-start text-sm-center text-md-center text-center'>โดยบริการที่รวดเร็วผ่านระบบอัตโนมัติที่สามารถ เริ่มทำงานได้ภายใน 1 นาที</p>
                        <div className=" w-100 d-flex justify-content-md-center justify-content-sm-center justify-content-center justify-content-lg-start">
                        <Link href="https://client.tcne.in.th/login" className=' btn btn-blue-400 text-white fw-light px-4 btn-sm rounded-pill mt-3 '>เข้าสู่ระบบหน้าจัดการ</Link>

                        </div>
                    </div>
                </div>
            </Container >
        </div>

    )
}