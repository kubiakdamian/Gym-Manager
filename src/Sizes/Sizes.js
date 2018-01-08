import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";

class Sizes extends React.Component {

  moveToHomepage = () => {
    this.props.router.push("home_page")
  }

  render(){
    return(
      <div>
        <Back className="col-md-1" onClick={this.moveToHomepage}>
          <img
            onClick={this.moveToHomepage}
            src={require(`../images/back.png`)}
            style={{ width: "64px" }}
          />
        </Back>
        <Header className="col-md-11">Wymiary</Header>
        <div className="col-md-1"/>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/biceps.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Biceps:</SizeText>
          <SizeText>Przedramie:</SizeText>
          <SizeText>Nadgarstek:</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/chest.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Klatka:</SizeText>
          <SizeText>Pas:</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/leg.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Udo:</SizeText>
          <SizeText>Łydka:</SizeText>
          <SizeText>Kostka:</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/height.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Wzrost:</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/weight.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Waga:</SizeText>
        </Size>
      </div>
    )
  }
}

export default withRouter(Sizes);

const Back = styled.div`
  &:hover{
    cursor: pointer;
  }
`

const SizeText = styled.div`
  color: white;
  font-size 22px;
  font-weight: bold;
  margin-top: 4vh;
`

const Size = styled.div`
  margin-top: 50px;

`

const AlertText = styled.div`
  font-size: 60px;
  font-style: italic;
  color: white;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
  padding-top: 40vh;
  text-align: center;
`

const Header = styled.div`
  transform: translateX(-5vw);
  font-size: 100px;
  color: rgb(228, 137, 0);
  font-weight: bold;
  text-align: center;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
`
