import NavBar from "@/components/layout/nav"
import { Card, Container } from "react-bootstrap"
import Head from "next/head"
export default function Terms_and_Conditions() {
    return (
        <>
            <Head>
                <title>Refund Policy | บริการให้เช่า Cloud Hosting | TCNE</title>
                <meta name="description" content="TCNE มีนโยบายการคืนเงินให้กับลูกค้าที่ไม่พอใจกับบริการ อ่านรายละเอียดเพิ่มเติมได้ที่นี่" />
                <meta name="keywords" content="Refund Policy, นโยบายการคืนเงิน, บริการให้เช่า Cloud Hosting, TCNE" />
                <meta property="og:title" content="นโยบายการคืนเงิน | บริการให้เช่า Cloud Hosting | TCNE" />
                <meta property="og:description" content="TCNE มีนโยบายการคืนเงินให้กับลูกค้าที่ไม่พอใจกับบริการ อ่านรายละเอียดเพิ่มเติมได้ที่นี่" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.tcne.in.th/refund-policy" />
                <meta property="og:image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="นโยบายการคืนเงิน | บริการให้เช่า Cloud Hosting | TCNE" />
                <meta name="twitter:description" content="TCNE มีนโยบายการคืนเงินให้กับลูกค้าที่ไม่พอใจกับบริการ อ่านรายละเอียดเพิ่มเติมได้ที่นี่" />
                <meta name="twitter:image" content="https://cdn.tcne.in.th/tcne_bbg.jpg" />
            </Head>
            <NavBar>
                <div className=" bg-secondary bg-opacity-10">
                    <Container className=" py-5">
                        <Card className=" border-0 shadow-sm rounded-4">
                            <Card.Body>
                                <p className=" fs-3 m-0">
                                    Refund Policy
                                </p>
                                <p className="fs-5 m-0">
                                    เราขอแนะนำเงื่อนไขการคืนเงินของบริการ TCNE Cloud VPS ตามดังนี้
                                </p>
                                <p style={{ textIndent: "1.5rem" }}>1 การขอคืนเงินจะสามารถทำได้ภายในเวลา 3 วัน นับจากวันที่ได้รับบริการ TCNE Cloud VPS เท่านั้น</p>
                                <p style={{ textIndent: "1.5rem" }}>2 การขอคืนเงินจะสามารถทำได้เฉพาะกรณีที่มีปัญหาจากทาง TCNE และไม่สามารถแก้ไขได้ตามข้อตกลงการใช้บริการ</p>
                                <p style={{ textIndent: "1.5rem" }}>3 การขอคืนเงินจะไม่สามารถทำได้ในกรณีที่ผู้ใช้บริการยกเลิกการใช้บริการโดยเป็นสาเหตุของตนเอง</p>
                                <p style={{ textIndent: "1.5rem" }}>4 การคืนเงินจะถูกดำเนินการโดยทีมงาน TCNE ภายใน 7 วันหลังจากที่ผู้ใช้บริการได้ยื่นคำขอคืนเงินและได้รับการอนุมัติ</p>
                                <p style={{ textIndent: "1.5rem" }}>5 การคืนเงินจะถูกดำเนินการโดยการคืนเงินผ่านทางบัญชีธนาคารของผู้ใช้บริการเท่านั้น
                                    โปรดทราบว่าเงื่อนไขการคืนเงินนี้มีผลบังคับใช้เฉพาะกับการใช้บริการ TCNE Cloud VPS เท่านั้น และ TCNE ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขนี้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า หากมีข้อสงสัยหรือข้อสอบถามเพิ่มเติม โปรดติดต่อฝ่ายบริการลูกค้าของ TCNE โดยตรง</p>


                            </Card.Body>
                        </Card>
                    </Container>

                </div>
            </NavBar>
        </>
    )
}