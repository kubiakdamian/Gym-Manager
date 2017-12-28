import React from "react";
import styled from "styled-components";
import { Link } from "react-router";
import { connect } from "react-redux";
import NavbarLink from "../NavbarLink";
import BackgroundImage from "../images/BACKGROUND.jpg"
import Overlap from "./Overlap"

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
        <Overlap
          header = "Trening"
          description="Zarządaj swoim treningiem łatwiej niż kiedykolwiek. Dodawaj nowe ćwiczenia, liczbe serii oraz powtórzeń.
          Kontroluj progress w czytelny sposób."
          label = "Edytuj trening"
          path="gym.png"
        />
        <Overlap
          header = "Dieta"
          description="Zaplanuj swoją dietę z Gym Managerem. Oblicz zapotrzebowanie kaloryczne i kontroluj jak jesz."
          label = "Edytuj diete"
          path="diet.png"
        />
        <Overlap
          header = "Wymiary"
          description="Zaplanuj swoją dietę z Gym Managerem. Oblicz zapotrzebowanie kaloryczne i kontroluj jak jesz."
          label = "Edytuj diete"
          path="shape.png"
        />
      </div>
    );
  }
}


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

const Reference = styled.div`
  text-align: center;
  margin-top: 3vh;
  vertical-align: middle;
  font-size: 20px;
  color: white;

  &:hover{
    cursor: pointer;
    color: rgb(228, 137, 0)
  }
`
