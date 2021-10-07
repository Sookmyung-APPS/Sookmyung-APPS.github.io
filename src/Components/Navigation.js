import {Link} from "react-router-dom";

function Navigation(){
    return(
        <div>
            <Link to="/introduce"/>
            <Link to="/project"/>
            <Link to="/project/스팟지도웹서비스"></Link>
            <Link to="/project/DeliveryRun"></Link>
            <Link to="/project/일력"></Link>
            <Link to="/project/LightAway"/>
            <Link to="/project/SoundOfFairies"/>
            <Link to="/project/Comsongz"/>
            <Link to="/project/ALittleDruid"/>
            <Link to="/project/눈송이메이커"/>
            <Link to="/project/Terraforming" />
            <Link to="/project/소원을들어주세요!"/>
            <Link to="/project/Devil" />
            <Link to="/project/SNOWJUMP"/>
            <Link to="/project/Snowrun" />
            <Link to="/project/2D눈송이게임"/>
            <Link to="/project/RollingBall"/>
            <Link to="/project/눈송이공굴리기"/>
            <Link to="/project/황수연"/>
        </div>
    );
}

export default Navigation;