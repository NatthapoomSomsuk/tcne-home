import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import tcne_logo from "../public/logo_tcne_L_white.png"
import img_qr_line from "../public/S_gainfriends_2dbarcodes_BW.png"
import img_ling_logo from "../public/icons8-line.svg"
import img_fb_logo from "../public/icons8-facebook.svg"
import Link from "next/link";
export default function Conten_footer() {
    return (<>
        <div className="bg-c-1">
            <Container className="py-5">
                <Row className="">
                    <Col xxl={8} lg={6}>
                        <Row xxl={3} md={2} sm={1} xs={1}>
                            <Col>
                                <p className=" fs-5 text-white m-0">บริการ Cloud VPS </p>
                                <Link href={'/cloud-vps'} className=" text-decoration-none text-white-50 fw-light">แพคเกจ Cloud VPS </Link>
                            </Col>
                            <Col>
                                <p className=" fs-5 text-white m-0 ">ติดต่อเรา </p>
                                <Link href={"/contact"} className=" text-decoration-none text-white-50 fw-light">ช่องทางการติดต่อเรา </Link> <br></br>
                                <Link href={"/terms"} className=" text-decoration-none text-white-50 fw-light">Terms and Conditions </Link><br></br>
                                <Link href={"/privacy-policy"} className=" text-decoration-none text-white-50 fw-light">Privacy Policy </Link><br></br>
                                <Link href={"/refund-policy"} className=" text-decoration-none text-white-50 fw-light">Refund Policy </Link><br></br>
                            </Col>
                            <Col>
                                <p className=" fs-5 text-white m-0">Client </p>
                                <Link href={"https://client.tcne.in.th/login"} className=" text-decoration-none text-white-50 fw-light">เข้าสู่ระบบหน้าจัดการ </Link> <br></br>
                                <Link href={"https://client.tcne.in.th/register"} className=" text-decoration-none text-white-50 fw-light">สมัครเข้าใช้งาน </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={4} lg={6}>
                        <Image src={tcne_logo} alt="tcne logo white" width={200}></Image>
                        <p className=" text-white-50 m-0">178 หมู่ 6 ต.ห้วยแก้ว อ.ภูกามยาว จ.พะเยา 56000</p>
                        <div className=" d-flex">
                            <Image src={img_qr_line} alt="tcne  qrcode " className=" rounded-4 mt-2"></Image>
                            <Link aria-label="Line TCNE" href="https://lin.ee/e4CmcUw" className="mt-2">
                                <Image src={img_ling_logo} alt=""></Image>
                            </Link>
                            <Link aria-label="facebook page tcne" href="https://web.facebook.com/tcnestudio" className="mt-2">
                                <Image src={img_fb_logo} alt=""></Image>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p className=" text-white-50 small fw-light m-0 text-center">
                Copyright ©2022 - 2023 TCNE All Right Reserved.
            </p>
        </div>
    </>)
}