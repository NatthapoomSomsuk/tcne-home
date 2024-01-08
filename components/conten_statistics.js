import { Card, Row, Col, Container } from 'react-bootstrap';
import icon_biner from '@/public/external-webinar-online.svg'
import icon_hi from '@/public/external-database-information.svg'
import icon_sie from '@/public/external-data-science.svg'
import Image from 'next/image';
export default function Conten_statistics() {
    return (
        <div className=" bg-ct-3 p-5">
            <Container>
                <div className=" d-flex justify-content-center flex-column">
                    <div className=" d-xxl-flex d-xl-flex d-lg-flex d-md-block justify-content-center lh-1">
                        <p className=" fs-1 fw-medium m-0 me-3 text-nowrap text-md-center text-sm-center text-center "> ONLINE </p>
                        <p className=" fs-1 fw-medium m-0 text-blue-400 text-nowrap text-md-center text-sm-center text-center">STATISTICS TODAY</p>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <p className=" fs-5 fw-light text-black-50 lh-1 text-center " style={{ width: "816px" }}>
                            ด้วย Cloud VPS ของเรา คุณจะได้รับประสบการณ์การใช้งานที่ง่ายและสะดวกสบาย รวมถึงความมั่นใจในการใช้งานเนื่องจากเรามีทีมงานผู้เชี่ยวชาญด้านเทคโนโลยีและระบบเครือข่ายที่พร้อมให้บริการคุณตลอดเวลา
                        </p>
                    </div>
                    <hr className=" border-5 rounded-pill mx-auto m-0 border-blue-400 opacity-100" style={{ width: "141px" }}></hr>
                </div>
                <Row className=' my-5  g-3 d-flex justify-content-center' xxl={3} xl={3} lg={3} md={2} sm={1} xs={1}>
                    <Col>
                        <Card className=' border-0 shadow rounded-4 h-100'>
                            <Card.Body className=' d-flex align-items-center'>
                                <Image src={icon_biner} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน ผู้คนจำนวนมากอยู่ในกรอบ สีฟ้า"></Image>
                                <div className=' ms-3 lh-1'>
                                    <p className=' text-black-50 fs-5 m-0'>จำนวนลูกค้าที่เราบริการ</p>
                                    <p className=' m-0 text-blue-400 display-5 fw-medium'>268</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className=' border-0 shadow rounded-4 h-100'>
                            <Card.Body className=' d-flex align-items-center'>
                                <Image src={icon_hi} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน เครื่องเซิร์ฟเวอร์ที่มีเครื่องหมายติกถูก สีฟ้า"></Image>
                                <div className=' ms-3 lh-1'>
                                    <p className=' text-black-50 fs-5 m-0'>VPS Cloud</p>
                                    <p className=' m-0 text-blue-400 display-5 fw-medium'>32</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className=' border-0 shadow rounded-4 h-100'>
                            <Card.Body className=' d-flex align-items-center'>
                                <Image src={icon_sie} style={{ width: "5rem", height: "5rem" }} alt="ไอคอน เครื่องเซิร์ฟเวอร์ที่กำลังทำงาน สีฟ้า"></Image>
                                <div className=' ms-3 lh-1'>
                                    <p className=' text-black-50 fs-5 m-0'>Physical Server</p>
                                    <p className=' m-0 text-blue-400 display-5 fw-medium'>10</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}