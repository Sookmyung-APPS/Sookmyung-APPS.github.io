import React from "react";
import "../Assets/indiv.css";

//이미지 파일 퍼블릭 폴더에 저장

function MainImg ( { name }) {

    const imgUrl = "/img/"+name+".png"
    return (
        <div>
            <img className="d-block w-100 mainIMG" src={imgUrl} alt={name} title={name} /> 
        </div>
        
        
    )
}

export default MainImg;