import React from "react";
import "../Assets/indiv.css";


const array = [
    {
        name: "스팟지도웹서비스",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"    
    },
    {
        name: "DeliveryRun",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "일력",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"
    },
    {
        name: "LightAway",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk" 
    },
    {
        name: "SoundOfFairies",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk" 
    },
    {
        name: "Comsongz",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"
    },
    {
        name: "ALittleDruid",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "강단이",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "김다연",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "김진영",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "박해지",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "이가을",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "장나리",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "정민영",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "정채영",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
    {
        name: "홍희수",
        link: "https://www.youtube.com/embed/Nr7R3mDeJsk"  
    },
];


function Youtube ( { name }) {

    const realName = name;
    const index = array.findIndex(i => i.name === realName);

    return (
        <div>
            <iframe src={array[index].link} title="YouTube video player"  frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Youtube;