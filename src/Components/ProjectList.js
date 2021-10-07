//Project List Buttons in ProjectPage
import { Container, Card } from "react-bootstrap";
import React from "react";
import "../Assets/ProjectPage.css";

const yearList = ["2020", "2021"];
const typeList = ["유니티", "웹/앱", "유니티 기초"];

const projectListCopy = [
    {
        name: "A Little Druid",
        team: "Darkegg",
        img: "/images/A_Little_Druid_Horizontal.jpg",
        year: "2020",
        type: "유니티",
        display: "block"
    },
    {
        name: "DeliveryRun",
        team: "배송불가지역",
        img: "/images/DeliveryRun_Horizontal.png",
        year: "2021",
        type: "유니티",
        display: "block"
    },
    {
        name: "Light Away",
        team: "Lighting Potatoes",
        img: "/images/LightAway_Horizontal.jpg",
        year: "2021",
        type: "유니티",
        display: "block"
    },
    {
        name: "Sound Of Fairies",
        team: "아리송",
        img: "/images/SoundOfFairies_Horizontal.png",
        year: "2021",
        type: "유니티",
        display: "block"
    },
    {
        name: "스팟 지도 웹서비스",
        team: "순간포착",
        img: "/images/SGPC_Horizontal.png",
        year: "2021",
        type: "웹/앱",
        display: "block"
    },
    {
        name: "일력",
        team: "천생연분",
        img: "/images/Calendar_Horizontal.png",
        year: "2021",
        type: "웹/앱",
        display: "block"
    },
    {
        name: "Comsongz",
        team: "컴송즈",
        img: "/images/Comsongz_Horizontal.png",
        year: "2021",
        type: "웹/앱",
        display: "block"
    },
    {
        name: "눈송이 메이커",
        team: "강단이",
        img: "/images/Dani_Horizontal.jpg",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "Terraforming",
        team: "김다연",
        img: "/images/Dayeon_Horizontal.png",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "소원을 들어주세요!",
        team: "김진영",
        img: "..//images/Jinyeong_Horizontal.jpeg",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "Devil",
        team: "박해지",
        img: "/images/Haeji_Horizontal.png",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "SNOW JUMP",
        team: "이가을",
        img: "/images/Gaeul_Horizontal.png",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "Snowrun",
        team: "장나리",
        img: "/images/Nari_Horizontal.jpeg",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "2D 눈송이 게임",
        team: "정민영",
        img: "/images/Minyeong_Horizontal.jpg",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "Rolling Ball",
        team: "정채영",
        img: "/images/Chaeyoung_Horizontal.png",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    },
    {
        name: "눈송이 공 굴리기",
        team: "홍희수",
        img: "/images/Heesoo_Horizontal.png",
        year: "2021",
        type: "유니티 기초",
        display: "block"
    }
];

class ProjectList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            year: "",
            type: "",
            projectList: [
                {
                    name: "A Little Druid",
                    team: "Darkegg",
                    img: "/images/A_Little_Druid_Horizontal.jpg",
                    year: "2020",
                    type: "유니티",
                    display: "block"
                },
                {
                    name: "DeliveryRun",
                    team: "배송불가지역",
                    img: "/images/DeliveryRun_Horizontal.png",
                    year: "2021",
                    type: "유니티",
                    display: "block"
                },
                {
                    name: "Light Away",
                    team: "Lighting Potatoes",
                    img: "/images/LightAway_Horizontal.jpg",
                    year: "2021",
                    type: "유니티",
                    display: "block"
                },
                {
                    name: "Sound Of Fairies",
                    team: "아리송",
                    img: "/images/SoundOfFairies_Horizontal.png",
                    year: "2021",
                    type: "유니티",
                    display: "block"
                },
                {
                    name: "스팟 지도 웹서비스",
                    team: "순간포착",
                    img: "/images/SGPC_Horizontal.png",
                    year: "2021",
                    type: "웹/앱",
                    display: "block"
                },
                {
                    name: "일력",
                    team: "천생연분",
                    img: "/images/Calendar_Horizontal.png",
                    year: "2021",
                    type: "웹/앱",
                    display: "block"
                },
                {
                    name: "Comsongz",
                    team: "컴송즈",
                    img: "/images/Comsongz_Horizontal.png",
                    year: "2021",
                    type: "웹/앱",
                    display: "block"
                },
                {
                    name: "눈송이 메이커",
                    team: "강단이",
                    img: "/images/Dani_Horizontal.jpg",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "Terraforming",
                    team: "김다연",
                    img: "/images/Dayeon_Horizontal.png",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "소원을 들어주세요!",
                    team: "김진영",
                    img: "..//images/Jinyeong_Horizontal.jpeg",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "Devil",
                    team: "박해지",
                    img: "/images/Haeji_Horizontal.png",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "SNOW JUMP",
                    team: "이가을",
                    img: "/images/Gaeul_Horizontal.png",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "Snowrun",
                    team: "장나리",
                    img: "/images/Nari_Horizontal.jpeg",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "2D 눈송이 게임",
                    team: "정민영",
                    img: "/images/Minyeong_Horizontal.jpg",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "Rolling Ball",
                    team: "정채영",
                    img: "/images/Chaeyoung_Horizontal.png",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                },
                {
                    name: "눈송이 공 굴리기",
                    team: "홍희수",
                    img: "/images/Heesoo_Horizontal.png",
                    year: "2021",
                    type: "유니티 기초",
                    display: "block"
                }
            ]
        };

        this.Classifier = this.Classifier.bind(this);
        this.YearBtn = this.YearBtn.bind(this);
        this.TypeBtn = this.TypeBtn.bind(this);
        this.yearBtnHandler = this.yearBtnHandler.bind(this);
        this.typeBtnHandler = this.typeBtnHandler.bind(this);
        this.CardList = this.CardList.bind(this);
    }

    
    CardList({id, name, team, img, none_or_block}) {
        return (
            <div className="ProjectPage__ProjectList" style={{display: none_or_block}}>
                <a className="ProejctPage__Link" href={`/project/${name.replace(/ /g,"")}`}>
                <Card className = "card">
                    <Card.Img variant="top" 
                    src={img}
                    alt={name}/>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{name}</Card.Title>
                        <Card.Text className="card-team">
                            {team}
                            <button className="btn-gt" variant="primary">&gt;</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </a>
            </div>
        );
    }

    Classifier(){
        if(this.state.year === ""){
            for(var i = 0; i < this.state.projectList.length; i++){
                if(this.state.projectList[i].type === this.state.type){
                    projectListCopy[i].display = "block";
                    this.setState({
                        projectList: projectListCopy
                    }, () => {console.log(this.state)})
                } else{
                    projectListCopy[i].display = "none";
                    this.setState({
                        projectList: projectListCopy
                    }, () => {console.log(this.state)})
                }
            }
        } else if(this.state.type === ""){
            for(var j = 0; j < this.state.projectList.length; j++){
                if(this.state.projectList[j].year === this.state.year){
                    projectListCopy[j].display = "block";
                    this.setState({
                        projectList: projectListCopy
                    }, () => {console.log(this.state)})
                } else{
                    projectListCopy[j].display = "none";
                    this.setState({
                        projectList: projectListCopy
                    }, () => {console.log(this.state)})
                }
            }
        } else {
            for(var k = 0; k < this.state.projectList.length; k++){
                if(this.state.projectList[k].year === this.state.year
                    && this.state.projectList[k].type === this.state.type){
                    projectListCopy[k].display = "block";
                    this.setState({
                        projectList: projectListCopy
                    }, () => {console.log(this.state)})
                } else{
                    projectListCopy[k].display = "none";
                    this.setState({
                        projectList: projectListCopy
                    }, () => {console.log(this.state)})
                }
            }
        }

    };

    yearBtnHandler(e){
        let btnClicked = document.querySelectorAll(".year-btn-clicked");
        let temp = e.target.innerText;

        this.setState({ year: temp }, () => {this.Classifier()});
    
        if(btnClicked.length === 0){
          btnClicked[0].classList.replace("btn-year", "year-btn-clicked");
          e.target.classList.replace("btn-year", "year-btn-clicked");
        }
        else{
          for(var i = 0; i < btnClicked.length; i++)
            btnClicked[i].classList.replace("year-btn-clicked", "btn-year");
    
          e.target.classList.replace("btn-year", "year-btn-clicked");
        }
    };


    typeBtnHandler(e){
        let btnClicked = document.querySelectorAll(".type-btn-clicked");
        let temp = e.target.innerText;

        this.setState({ type: temp }, () => {this.Classifier()});
    
        if(btnClicked.length === 0){
          btnClicked[0].classList.replace("btn-category", "type-btn-clicked");
          e.target.classList.replace("btn-category", "type-btn-clicked");
        }
        else{
          for(var i = 0; i < btnClicked.length; i++)
            btnClicked[i].classList.replace("type-btn-clicked", "btn-category");
    
          e.target.classList.replace("btn-category", "type-btn-clicked");
        }
    };
    
    YearBtn({year}){
        return (
        <span>
          <button className="year-btn-clicked" onClick={this.yearBtnHandler}>
            {year}
          </button>
        </span>)
    };

    TypeBtn({type}){
        return (
            <span>
              <button className="type-btn-clicked" onClick={this.typeBtnHandler}>{type}</button>
            </span>
        )
    };

    render(){
        return (
            <Container className="ProjectPage__Categories">
              <div>
                {yearList.map((year, index) => <this.YearBtn year={year} key={index} />)}
              </div>
              <div>
                {typeList.map((type, index) => <this.TypeBtn type={type} key={index} />)}
              </div>
              <div>
                {this.state.projectList.map((project, id) => <this.CardList
                    key={id}
                    name={project.name}
                    team={project.team}
                    img={project.img}
                    none_or_block={project.display} />)}
              </div>
            </Container>
          );
    }
}

export default ProjectList;