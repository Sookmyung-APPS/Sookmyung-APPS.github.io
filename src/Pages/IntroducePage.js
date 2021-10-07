import React from "react";
import AppsInfo from "../Components/AppsInfo";
import AppsMember from "../Components/AppsMember";
import '../Assets/IntroducePage.css'
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function IntroduePage(){
    const imgstyle={
        width:"500px"
    }
   return(
       <div>
        <div className="container">
            <Header />
        </div>

        <div id="BigAppsImg">
            <img
                src={require("../Assets/IntroducePageImg.png").default}
                style={imgstyle} alt=""
            /></div>

        <div>
            <AppsInfo/>
            <AppsMember/>
            <Footer />
        </div>
       </div>
   );
}

export default IntroduePage;