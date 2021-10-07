import React from "react";
import Memoji from "../db/Memoji.json";

const MemojiList = [
    {
        id: 101,
        img: "/memoji/Chaeyeong(심채영).jpg"
    },
    {
        id: 102,
        img: "/memoji/Chaeyoung(정채영).png"
    },
    {
        id: 103,
        img: "/memoji/Dabin(윤다빈).png"
    },
    {
        id: 104,
        img: "/memoji/Dani(강단이).jpg"
    },
    {
        id: 105,
        img: "/memoji/Dayeon(김다연).PNG"
    },
    {
        id: 106,
        img: "/memoji/Eunhyung(최은형).png"
    },
    {
        id: 107,
        img: "/memoji/Gaeul(이가을).jpg"
    },
    {
        id: 108,
        img: "/memoji/Haeji(박해지).png"
    },
    {
        id: 109,
        img: "/memoji/Heesoo.png"
    },
    {
        id: 110,
        img: "/memoji/Hyeonae(장현애).png"
    },
    {
        id:111,
        img: "/memoji/Hyesu(김혜수).png"
    },
    {
        id: 112,
        img: "/memoji/Jane(정제인).png"
    },
    {
        id: 113,
        img: "/memoji/Jeonghyeon(황정현).jpeg"
    },
    {
        id: 114,
        img: "/memoji/Jeongyeon(서정연).jpeg"
    },
    {
        id: 115,
        img: "/memoji/Jinhee(박진희).jpg"
    },
    {
        id: 116,
        img: "/memoji/Jinyoung(김진영).png"
    },
    {
        id: 117,
        img: "/memoji/Jinyoung(신진영).png"
    },
    {
        id: 118,
        img: "/memoji/Junghyun(유정현).jpg"
    },
    {
        id: 119,
        img: "/memoji/Minji(권민지).png"
    },
    {
        id: 120,
        img: "/memoji/Minyeong(정민영).png"
    },
    {
        id: 121,
        img: "/memoji/Nari(장나리).png"
    },
    {
        id: 122,
        img: "/memoji/SuJin(조수진).png"
    },
    {
        id: 123,
        img: "/memoji/Suyeon(황수연).png"
    },
    {
        id: 124,
        img: "/memoji/Yebin(최예빈).png"
    },
    {
        id: 125,
        img: "/memoji/Yejin(김예진).jpeg"
    },
    {
        id: 126,
        img: "/memoji/Yerin(고예린).png"
    },
    {
        id: 127,
        img: "/memoji/Yoojeong(전유정).png"
    },
    {
        id: 128,
        img: "/memoji/Youngseo(조영서).png"
    },
    {
        id: 129,
        img: "/memoji/Yugyeong(현유경).png"
    },
    {
        id: 130,
        img: "/memoji/YuKyung_Hwang(황유경).png"
    },
    {
        id: 131,
        img: "/memoji/HyoRim(곽효림).png"
    }
]

function IndivMemoji ( {name} ) {

    const dev = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    }

    const devIMG = {
        justifyContent: "center",
        width: "16vw",
        margin: "10px",
    }

    const index = Memoji.findIndex(i => i.projectName === name);
    return (
        <div style={dev} >
            {Memoji[index].memoji.map(function(data) {
                const url = MemojiList[data].img;
                return (
                    <div key={MemojiList[data].id}>
                        <img style={devIMG} src={url} alt=""  /> 
                    </div>
                )
            })}
        </div>
    )
}

export default IndivMemoji;