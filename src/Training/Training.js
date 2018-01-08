import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";

class Training extends React.Component {

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
        <Header className="col-md-10">Trening</Header>
        <AlertText>Ups... Nie masz jeszcze żadnych treningów.</AlertText>
      </div>
    )
  }
}

export default withRouter(Training);

const Back = styled.div`
  &:hover{
    cursor: pointer;
  }
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
  font-size: 100px;
  color: rgb(228, 137, 0);
  font-weight: bold;
  text-align: center;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
`
