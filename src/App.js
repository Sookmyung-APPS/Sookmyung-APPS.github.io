import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import MainPage from "./Pages/MainPage";
import ProjectPage from "./Pages/ProjectPage";
import IndivPage from "./Pages/IndivPage";
import IntroducePage from "./Pages/IntroducePage";

function App() {
  return (
    <span className="App">
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/introduce" exact component ={IntroducePage} />
        <Route path="/project" exact component ={ProjectPage} />
        <Route path="/project/스팟지도웹서비스" render={() => <IndivPage name="스팟지도웹서비스" />}/>
        <Route path="/project/DeliveryRun" render={() => <IndivPage name="DeliveryRun" />}/>
        <Route path="/project/일력" render={() => <IndivPage name="일력" />}/>
        <Route path="/project/LightAway" render={() => <IndivPage name="LightAway" />}/>
        <Route path="/project/SoundOfFairies" render={() => <IndivPage name="SoundOfFairies" />}/>
        <Route path="/project/Comsongz" render={() => <IndivPage name="Comsongz" />}/>
        <Route path="/project/ALittleDruid" render={() => <IndivPage name="ALittleDruid" />}/>
        <Route path="/project/눈송이메이커" render={() => <IndivPage name="강단이" />}/>
        <Route path="/project/Terraforming" render={() => <IndivPage name="김다연" />}/>
        <Route path="/project/소원을들어주세요!" render={() => <IndivPage name="김진영" />}/>
        <Route path="/project/Devil" render={() => <IndivPage name="박해지" />}/>
        <Route path="/project/SNOWJUMP" render={() => <IndivPage name="이가을" />}/>
        <Route path="/project/Snowrun" render={() => <IndivPage name="장나리" />}/>
        <Route path="/project/2D눈송이게임" render={() => <IndivPage name="정민영" />}/>
        <Route path="/project/RollingBall" render={() => <IndivPage name="정채영" />}/>
        <Route path="/project/눈송이공굴리기" render={() => <IndivPage name="홍희수" />}/>
        <Route path="/project/황수연" render={() => <IndivPage name="황수연" />}/>
      </BrowserRouter>
    </span>
  );
}

export default App;
