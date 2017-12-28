import React from "react";
import Button from "../user-interface/Button.js"
import styled from "styled-components";

export default class Overlap extends React.Component {
  constructor(props){
    super(props);
  }

  showIcon = () => {
    if(this.props.path !== undefined){
      return(
        <img
          src={require(`../images/${this.props.path}`)}
          style={{ width: "128px" }}
        />
      )
    }
  }

  render(){
    console.log("PATH", this.props.path);
    return(
      <Content className="col-md-12">
        <Header className="col-md-12">{this.props.header}</Header>
        <div className="col-md-12" style={{textAlign: "center"}}>
          {this.showIcon()}
        </div>
        <Description className="col-md-6 col-md-offset-3">
          {this.props.description}
        </Description>
        <Button className="col-md-2 col-md-offset-5" label={this.props.label} style={{backgroundColor: "rgb(222, 129, 0)", fontWeight: "bold"}} onClick={this.props.onClick}/>
      </Content>
    )
  }
}

const Header = styled.div`
  color: white;
  text-align: center;
  font-size: 50px;
  margin-top: 70px;
  font-family: 'Oswald', sans-serif;
`

const Description = styled.div`
  color: white;
  margin-top: 25px;
  margin-bottom: 40px;
  font-size: 20px;
  text-align: center;
`

const Content = styled.div`
  height: 70vh;
`
