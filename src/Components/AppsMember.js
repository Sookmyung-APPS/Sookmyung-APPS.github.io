import React from "react";
import ImageList from "./ImageList";
import dummy from "../db/MembersImg.json";



function AppsMember(){
    return(
        <div class="container">
            <p id="ImgTitle"> 2021 Sookmyung APPS Member</p>
            <ImageList/>
        </div>
    );
}

export default AppsMember;