import { Card, Row, Col, Container } from 'react-bootstrap';
import icon_transfer from '@/public/external-transfer-data.svg'
import icon_24h from '@/public/external-24-hours-.svg'
import icon_hi from '@/public/external-database-information.svg'
import icon_asi from '@/public/external-analysis-finances.svg'
import icon_firewall from '@/public/external-firewall-cyber.svg'
import icon_cup from '@/public/external-algorithm-data.svg'
import Image from 'next/image';
export default function Conten_Chouse_us() {
    return (
        <Container>
            <div className=" py-5">
                <div className=" d-flex justify-content-center flex-column">
                    <div className=" d-xxl-flex d-xl-flex d-lg-flex d-md-block justify-content-center lh-1">
                        <p className=" fs-1 fw-medium m-0 me-3 text-nowrap text-md-center text-sm-center text-center ">WHY YOU SHOULD </p>
                        <p className=" fs-1 fw-medium m-0 text-blue-400 text-nowrap text-md-center text-sm-center text-center">CHOSE US</p>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <p className=" fs-5 fw-light text-black-50 lh-1 text-center " style={{ width: "816px" }}>
                            เราให้ความสำคัญกับความน่าเชื่อถือและความปลอดภัยของการใช้บริการ Cloud VPS ของลูกค้า
                            ด้วยการใช้เทคโนโลยีที่มีความเชื่อถือได้และมีมาตรฐานสูงสุด
                        </p>
                    </div>
                    <hr className=" border-5 rounded-pill mx-auto m-0 border-blue-400 opacity-100" style={{ width: "141px" }}></hr>
                </div>
                <div className=' mt-5'>
                    <Row className='g-3' xxl={3} xl={3} lg={2} md={1} sm={1} xs={1}>
                        <Col>
                            <Card className=' shadow rounded-4 h-100'>
                                <Card.Body className=' d-flex align-items-center'>
                                    <Image src={icon_transfer} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน การโอนย้ายข้อมูล"></Image>

                                    <div className=' ms-3'>
                                        <p className=' fs-4 fw-medium m-0'>Unlimited Data Transfer</p>
                                        <p className=' fs-6 fw-normal text-black-50 m-0'>การถ่ายโอนข้อมูลเข้า-ออก
                                            แบบไม่จำกัดโดยไม่เสียค่าใช้จ่ายเพิ่มมเติม
                                            ให้คุณได้รับประสิทธิภาพสูงสุดในราคาที่ต่ำที่สุด</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow rounded-4 h-100'>
                                <Card.Body className=' d-flex align-items-center'>
                                    <Image src={icon_24h} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน ติดต่อได้ตลอด 24 ชั่วโมง"></Image>

                                    <div className=' ms-3'>
                                        <p className=' fs-4 fw-medium m-0'>Support 24/7</p>
                                        <p className=' fs-6 fw-normal text-black-50 m-0'>เราคอยอยู่สนับสนุนคุณด้วยทีมงานมืออาชีพ
                                            พร้อมที่จะให้บริการคุณตลอด 24 ชั่วโมง
                                            และยังมีวิธีการติดต่อเราได้หลากหลายช่องทาง</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow rounded-4 h-100'>
                                <Card.Body className=' d-flex align-items-center'>
                                    <Image src={icon_hi} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน เครื่องเซิร์ฟเวอร์ที่มีเครื่องหมายติกถูก สีฟ้า"></Image>

                                    <div className=' ms-3'>
                                        <p className=' fs-4 fw-medium m-0'>High Performance</p>
                                        <p className=' fs-6 fw-normal text-black-50 m-0'>เราให้บริการด้วยอุปกรณ์คุณภาพสูง
                                            ทั้งเซิร์ฟเวอร์และอุปกรณ์เครือข่าย
                                            ดังนั้นคุณจึงมั่นใจได้ในคุณภาพสูงระดับสูงสุด</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow rounded-4 h-100'>
                                <Card.Body className=' d-flex align-items-center'>
                                    <Image src={icon_asi} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน หน้าต่างควบคุม สีฟ้า"></Image>

                                    <div className=' ms-3'>
                                        <p className=' fs-4 fw-medium m-0'>Control Panel</p>
                                        <p className=' fs-6 fw-normal text-black-50 m-0'>สามารถควบคุมเครื่องเซิร์ฟเวอร์ได้ตามต้องการ
                                            โดยระบบควบคุมอัตโนมัติ</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow rounded-4 h-100'>
                                <Card.Body className=' d-flex align-items-center'>
                                    <Image src={icon_firewall} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน กำแพง ไฟ สีฟ้า"></Image>

                                    <div className=' ms-3'>
                                        <p className=' fs-4 fw-medium m-0'>Firewall</p>
                                        <p className=' fs-6 fw-normal text-black-50 m-0'>ทุก Server มี Firewall ป้องกันการโจมตี
                                            จากผู้ไม่หวังดี ทำให้มั่นใจในความปลอดภัย
                                            บริการ Protect layer 3 - 4 & layer 7</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=' shadow rounded-4 h-100'>
                                <Card.Body className=' d-flex align-items-center'>
                                    <Image src={icon_cup} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน ซีพียู เฟือง "></Image>

                                    <div className=' ms-3'>
                                        <p className=' fs-4 fw-medium m-0'>Auto installer</p>
                                        <p className=' fs-6 fw-normal text-black-50 m-0'>ท่านสามารถติดตั้งระบบปฏิบัติการและเลือก
                                            สเปคที่ต้องการผ่านระบบอัตโนมัติได้เลย</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </div>

            </div>
        </Container>
    )
}