import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";
import BackgroundImage from "../images/dietBackground3.jpg"

class Diet extends React.Component {

  moveToHomepage = () => {
    this.props.router.push("home_page")
  }

  render(){
    return(
      <Background>
        <Back className="col-md-1" onClick={this.moveToHomepage}>
          <img
            src={require(`../images/back.png`)}
            style={{ width: "64px" }}
          />
        </Back>
        <div className="col-md-11" />
        <Header className="col-md-12">Dieta</Header>
        <div className="col-md-12" style={{marginTop: "10vh", paddingLeft: "32vw"}}>
          <Text className="col-md-2">BMI</Text>
          <Text className="col-md-2">BMR</Text>
          <Text className="col-md-2">KALORIE</Text>
      </div>
    </Background>
    )
  }
}

export default withRouter(Diet);

const Background = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  img{
    transform: scale(0.9);

  }
`

const Header = styled.div`
  font-size: 100px;
  color: rgb(228, 137, 0);;
  font-weight: bold;
  text-align: center;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
`

const Text = styled.div`
  font-size: 50px;
  color: white;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
  font-weight: bold;

  &:hover{
    color: rgb(228, 137, 0);
    cursor: pointer;
  }
`

const Back = styled.div`
  &:hover{
    cursor: pointer;
  }
`
