import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";

class Training extends React.Component {

  moveToHomepage = () => {
    this.props.router.push("home_page")
  }

  render(){
    return(
      <Back className="col-md-1" onClick={this.moveToHomepage}>
        <img
          onClick={this.moveToHomepage}
          src={require(`../images/back.png`)}
          style={{ width: "64px" }}
        />
      </Back>
    )
  }
}

export default withRouter(Training);

const Back = styled.div`
  &:hover{
    cursor: pointer;
  }
`
