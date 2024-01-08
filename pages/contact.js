import NavBar from "@/components/layout/nav"
import { Card, Container } from "react-bootstrap"
import Image from "next/image"
import Logo_tcne_b from "../public/logo_tcne_L_black.png"
import Link from "next/link"
import Line_qr from "../public/S_gainfriends_2dbarcodes_BW.png"
import Img_ling_logo from "../public/icons8-line.svg"
import Img_fb_logo from "../public/icons8-facebook.svg"
import Head from "next/head"
export default function Contact() {
    return (
        <>
            <Head>
                <title>ติดต่อเรา - บริการ VPS ราคาประหยัด | TCNE</title>
                <meta name="description" content="ติดต่อเราสำหรับข้อมูลเพิ่มเติมเกี่ยวกับบริการ VPS ของเรา มีทีมงานคอยให้คำปรึกษาและคำแนะนำตลอด 24 ชั่วโมง" />
                <meta name="keywords" content="ติดต่อ, ติดต่อเรา, บริการ VPS, VPS, โฮสติ้ง VPS, Cloud VPS, Colocation VPS" />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content="ติดต่อเรา - บริการ VPS ราคาประหยัด | TCNE" />
                <meta property="og:description" content="ติดต่อเราสำหรับข้อมูลเพิ่มเติมเกี่ยวกับบริการ VPS ของเรา มีทีมงานคอยให้คำปรึกษาและคำแนะนำตลอด 24 ชั่วโมง" />
                <meta property="og:image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.tcne.in.th/contact" />
                <meta property="og:site_name" content="TCNE" />
                <meta name="twitter:title" content="ติดต่อเรา - บริการ VPS ราคาประหยัด | TCNE" />
                <meta name="twitter:description" content="ติดต่อเราสำหรับข้อมูลเพิ่มเติมเกี่ยวกับบริการ VPS ของเรา มีทีมงานคอยให้คำปรึกษาและคำแนะนำตลอด 24 ชั่วโมง" />
                <meta name="twitter:image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
            </Head>
            <NavBar>
                <div className=" bg-secondary bg-opacity-10">
                    <Container className=" py-5">
                        <Card className=" border-0 shadow-sm rounded-4">
                            <Card.Body>
                                <div className=" d-flex justify-content-center">
                                    <Image src={Logo_tcne_b} alt="logo tane black " width={300}></Image>
                                </div>
                                <hr className=" border-5 rounded-pill mx-auto  border-blue-400 opacity-100" style={{ width: "141px" }}></hr>
                                <div className=" d-xxl-flex  d-xl-flex d-lg-flex d-md-block d-block">
                                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Ftcnestudio&tabs=timeline&width=500&height=189&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=356080289535427" width="500" height="189" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                                    <div className=" d-flex">
                                        <Image src={Line_qr} alt="line qrcode tcne"></Image>
                                        <div>
                                            <Link href="https://lin.ee/e4CmcUw" className="mt-2  text-decoration-none">
                                                <Image src={Img_ling_logo} alt=""></Image> Line : @TCNE
                                            </Link> <br></br>
                                            <Link href="https://web.facebook.com/tcnestudio" className="mt-2 text-decoration-none">
                                                <Image src={Img_fb_logo} alt=""></Image> Facebook : TCNE
                                            </Link>
                                            <p className=" m-0">Email : support@tcne.in.th</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container>

                </div>
            </NavBar>
        </>
    )
}