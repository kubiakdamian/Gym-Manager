import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";

class Sizes extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      height: 0,
      weight: 0,
      biceps: 0,
      thigh: 0,
      waist: 0,
      wrist: 0,
      ankle: 0,
      forearm: 0,
      calf: 0,
      date: 0,
      page: 0,
      arrayLenght: 0
    }
  }

  getData = () => {
    axios
      .get(`http://localhost:80/GymManager/index.php/Training/getSizes/${this.props.user.id}`)
      .then(response => {
        console.log(response);
        let page = this.state.page;
        this.setState({
          height: response.data.results[page].wzrost,
          weight: response.data.results[page].waga,
          biceps: response.data.results[page].ramie,
          thigh: response.data.results[page].udo,
          waist: response.data.results[page].pas,
          wrist: response.data.results[page].nadgarstek,
          ankle: response.data.results[page].kostka,
          forearm: response.data.results[page].przedramie,
          calf: response.data.results[page].lydka,
          date: response.data.results[page].data,
          arrayLenght: response.data.results.length
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getData();
  }

  moveToHomepage = () => {
    this.props.router.push("home_page")
  }

  forward = () => {
    if(this.state.page < this.state.arrayLenght - 1){
      this.setState({
        page: this.state.page + 1
      })
      this.getData();
    }
  }

  backward = () => {
    if(this.state.page >= 0){
      this.setState({
        page: this.state.page - 1
      })
      this.getData();
    }
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
        <DateText className="col-md-7 col-md-offset-5">
          Data pomiaru: {this.state.date}
        </DateText>
        <Size className="col-md-2 col-md-offset-1">
          <img
            src={require(`../images/training/biceps.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Ramie: {this.state.biceps}cm</SizeText>
          <SizeText>Przedramie: {this.state.forearm}cm</SizeText>
          <SizeText>Nadgarstek: {this.state.wrist}cm</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/chest.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Pas: {this.state.waist}cm</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/leg.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Udo: {this.state.thigh}cm</SizeText>
          <SizeText>Łydka: {this.state.calf}cm</SizeText>
          <SizeText>Kostka: {this.state.ankle}cm</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/height.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Wzrost: {this.state.height}cm</SizeText>
        </Size>
        <Size className="col-md-2">
          <img
            src={require(`../images/training/weight.png`)}
            style={{ width: "128px" }}
          />
          <SizeText>Waga: {this.state.weight}kg</SizeText>
        </Size>
        <div className="col-md-12" style={{marginTop: "8vh", paddingLeft: "42vw"}}>
          <Arrow className="col-md-2" onClick = {this.backward}>
            <img
              src={require(`../images/training/backward.png`)}
              style={{ width: "64px" }}
            />
          </Arrow>
          <Arrow className="col-md-2" onClick = {this.forward}>
            <img
              src={require(`../images/training/forward.png`)}
              style={{ width: "64px" }}
            />
          </Arrow>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

export default connect(mapStateToProps)(withRouter(Sizes));

const Back = styled.div`
  &:hover{
    cursor: pointer;
  }
`

const Arrow = styled.div`
  &:hover{
    cursor: pointer;
  }
`

const DateText = styled.div`
  color:white;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  transform: translateX(-2vw);
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
