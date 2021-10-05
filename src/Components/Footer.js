import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const footer = {
    marginTop: "40px",
    marginBottom: "100px",
    opacity: "0.3",
}
const copy = {
    marginTop: "60px",
    marginLeft: "25px"
}
const context = {
    marginTop:"20px"
}

const col1 ={
    marginLeft:"30px",
    marginRight:"0px"
}

const col2 ={
    marginLeft:"20px",
    marginRight:"20px"
}

const col3 ={
    marginLeft:"20px"
}

function Footer(props){
    return (
        <Container style={footer}>
            <hr/>
                <Row style={copy}>Copyright ⓒ APPS Since 2021 All Rights Reserved.</Row>
                <Row style={context}>
                    <Col style={col1}>
                        <Row>Designers</Row>
                        <Row>김혜수 | 심채영 | 정제인</Row>
                    </Col>
                    <Col style={col2}>
                        <Row>Developers</Row>
                        <Row>유정현 | 정제인 | 최은형 | 홍희수</Row>
                    </Col>
                    <Col style={col3}>
                        <Row>Department</Row>
                        <Row>APPS of SMWU</Row>
                    </Col>
                </Row>
        </Container>
    )
}

export default Footer;