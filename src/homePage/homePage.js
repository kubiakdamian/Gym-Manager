import React from "react";
import styled from "styled-components";
import { Link } from "react-router";
import { connect } from "react-redux";
import NavbarLink from "../NavbarLink";
import BackgroundImage from "../images/BACKGROUND.jpg"

export default class homePage extends React.Component {

  printHeight = () => {
    console.log(window.innerHeight);
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
          <SiteName className="col-md-3">Gym Manager</SiteName>
          <div className="col-md-6"></div>
          <Reference className="col-md-1">trening</Reference>
          <Reference className="col-md-1">dieta</Reference>
          <Reference className="col-md-1">wymiary</Reference>
        </NavBar>
        <Training>

        </Training>
      </div>
    );
  }
}

const Training = styled.div`
  height: 1000px;
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
`

const SiteName = styled.div`
  margin-top: 1vh;
  vertical-align: middle;
  color: white;
  font-size: 40px;
  &:hover{
    cursor: pointer;
    color: rgb(161, 161, 161)
  }
`

const Reference = styled.div`
  text-align: center;
  margin-top: 3vh;
  vertical-align: middle;
  font-size: 20px;
  color: white;

  &:hover{
    cursor: pointer;
    color: rgb(161, 161, 161)
  }
`
