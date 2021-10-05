import {Col} from "react-bootstrap";
import React from "react";
import Header from "../Components/Header";
import Download from "../Components/Download";
import ProjectIntro from "../Components/ProjectIntro";
import MainImg from "../Components/MainImg";
import Youtube from "../Components/Youtube";
import IndivMemoji from "../Components/IndivMemoji";
import "../Assets/font.css";
import Footer from "../Components/Footer";

//name자리에 링크에 들어가는 부분 props로 전달..
// 1. 메인 이미지 받아오기 -> 성공
// 2. 작품 소개 받아오기 -> 성공
// 3. 영상 링크 받아오기 -> 성공
// 4. 미모지 받아오기 -> 실패
// 5. 다운로드 링크 받아오기 -> 성공

function IndivPage( { name } ) {
  const body = {
    padding: "0px",
    margin: "0 auto",
    display: "flex"
  }
  const h3Style = {
    marginTop: "40px",
    marginBottom: "15px",
    marginLeft: "15px",
    color: "black",
    fontWeight: "bold",
  }


  return (
    <div>
      <Header />
      <Col style={body} md="10">
        <div className="d-block w-100">
          <MainImg name={name} />

          <ProjectIntro name={name} />

          <h3 style={h3Style}>시연영상</h3>
          <Youtube name={name} />

          <h3 style={h3Style}>DEVELOPERS</h3>
          <IndivMemoji name={name} />

          <h3 style={h3Style}>DOWNLOAD</h3>
          <Download name={name}/>
        </div>  
      </Col>
      <Footer />
    </div>
  );
}

export default IndivPage;
