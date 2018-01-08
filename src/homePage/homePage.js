import React from "react";
import styled from "styled-components";
import { Link } from "react-router";
import { connect } from "react-redux";
import NavbarLink from "../NavbarLink";
import BackgroundImage from "../images/BACKGROUND.jpg"
import Overlap from "./Overlap"
import { withRouter } from "react-router";

class homePage extends React.Component {

  moveToHomepage = () => {
    this.props.router.push("home_page");
  }

  moveToTraining = () => {
    this.props.router.push("training");
  }

  moveToDiet = () => {
    this.props.router.push("diet");
  }

  moveToSizes = () => {
    this.props.router.push("sizes");
  }

  logout = () => {
    this.props.router.push("/");
  }

  render() {
    return (
      <div>
        <Background className="col-md-12">
          <Qutation>
            "Porażka nie wchodzi w gre, każdy może osiągnąć sukces." - Arnold Shwarzenegger
          </Qutation>
        </Background>
        <NavBar className="col-md-12">
          <SiteName className="col-md-3" onClick={this.moveToHomepage}>Gym Manager</SiteName>
          <div className="col-md-5"></div>
          <Reference className="col-md-1" href="#trening">trening</Reference>
          <Reference className="col-md-1" href="#dieta">dieta</Reference>
          <Reference className="col-md-1" href="#wymiary">wymiary</Reference>
          <Logout onClick={this.logout}>
            <img
              src={require(`../images/logout.png`)}
              style={{ width: "48px" }}
            />
          </Logout>
        </NavBar>
        <hr width="75%" />
        <section id="trening">
          <Overlap
            header = "Trening"
            description="Zarządaj swoim treningiem łatwiej niż kiedykolwiek. Dodawaj nowe ćwiczenia, liczbe serii oraz powtórzeń.
            Kontroluj progress w czytelny sposób."
            label = "Edytuj trening"
            onClick = {this.moveToTraining}
            path="gym.png"
          />
        </section>
        <hr width="75%" />
        <section id="dieta">
          <Overlap
            header = "Dieta"
            description="Zaplanuj swoją dietę z Gym Managerem. Oblicz zapotrzebowanie kaloryczne i kontroluj jak jesz."
            label = "Edytuj diete"
            onClick = {this.moveToDiet}
            path="diet.png"
          />
        </section>
        <hr width="75%" />
        <hr width="75%" />
        <section id="wymiary">
          <Overlap
            header = "Wymiary"
            description="Kontroluj swoje wymiary, sprawdzaj jak zmienia się Twoje ciało."
            label = "Edytuj wymiary"
            onClick = {this.moveToSizes}
            path="shape.png"
          />
        </section>
        <Footer className="col-md-12">
           <div style={{float: "right"}}>© 2017 Damian Kubiak</div>
        </Footer>
      </div>
    );
  }
}

export default withRouter(homePage);

const Footer = styled.footer`
  color: white;
  font-size: 15px;
  background-color: rgb(40, 40, 40);
  height: 4vh;
`

const Logout = styled.div`
  margin-top: 1.5vh;
  float: right;
  &:hover{
    cursor: pointer;
  }
`

const Qutation = styled.div`
  font-family: 'Raleway', sans-serif;
  color: white;
  font-size: 40px;
  width: 60%;
  position: absolute;
  right: 0;
  bottom: 50px;
`

const Background = styled.div `
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  background-image: url(${BackgroundImage});
  min-height:70vh;
  max-height: 70vh;
  position: relative;
`

const NavBar = styled.div`
  position: fixed;
  background-color: rgb(40, 40, 40);
  overflow: hidden;
  height: 10vh;
  z-index: 1;
`

const SiteName = styled.div`
  margin-top: 1vh;
  vertical-align: middle;
  color: rgb(228, 137, 0);
  font-size: 40px;
  &:hover{
    cursor: pointer;
    color: white
  }
`

const Reference = styled.a`
  text-align: center;
  margin-top: 3vh;
  vertical-align: middle;
  font-size: 20px;
  color: white;

  &:hover{
    cursor: pointer;
    color: rgb(228, 137, 0);
  }
`
