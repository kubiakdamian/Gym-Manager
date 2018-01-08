import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";
import BackgroundImage from "../images/dietBackground3.jpg"
import Modal from "react-modal";
import Calories from "./Calories"
import axios from "axios";
import { connect } from "react-redux";

class Diet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveMeals: false,
      isActiveCalories: false,
      isActiveCaloriesValues: false,
      thinning: 0,
      stagnation: 0,
      gaining: 0
    };
  }

  moveToHomepage = () => {
    this.props.router.push("home_page")
  }

  toggleMeals = () => {
    this.setState({
      isActiveMeals: true,
      isActiveCalories: false,
      isActiveCaloriesValues: false
    })
  }

  toggleCalories = () => {
    this.setState({
      isActiveMeals: false,
      isActiveCalories: true,
      isActiveCaloriesValues: false
    })
  }

  toogleCaloriesValues = () => {
    this.setState({
      isActiveMeals: false,
      isActiveCalories: false,
      isActiveCaloriesValues: true
    });

    axios
      .get(`http://localhost:80/GymManager/index.php/Calories/getCalories/${this.props.user.id}`)
      .then(response => {
        this.setState({
          thinning: response.data.results[0].chudniecie,
          stagnation: response.data.results[0].utrzymanie,
          gaining: response.data.results[0].tycie
        })
      })
      .catch(error => {
        console.log(error);
      });
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
        <div className="col-md-12" style={{paddingLeft: "32vw"}}>
          <Text className="col-md-3" onClick={this.toggleMeals}>POSIŁKI</Text>
          <Text className="col-md-3" onClick={this.toggleCalories}>KALORIE</Text>
      </div>

      <Modal
        isOpen={this.state.isActiveMeals}
        className="col-md-4 col-md-offset-4"
        style={styledModal}>
        POSILKI
      </Modal>

      <Modal
        isOpen={this.state.isActiveCalories}
        className="col-md-4 col-md-offset-4"
        style={styledModal}>
        <Calories showCalories={this.toogleCaloriesValues} userId={this.props.user.id}/>
      </Modal>

      <Modal
        isOpen={this.state.isActiveCaloriesValues}
        className="col-md-4 col-md-offset-4"
        style={styledModal}>
        <CaloriesText>
          Aby schudnąć: {this.state.thinning} <br />
          Aby utrzymać wagę: {this.state.stagnation} <br />
          Aby przytyć: {this.state.gaining} <br />
        </CaloriesText>
      </Modal>
    </Background>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

export default connect(mapStateToProps)(withRouter(Diet));

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

const CaloriesText = styled.div`
  font-size: 30px;
  color: white;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
  font-weight: bold;
`

const styledModal = {
  overlay: {
    position: "fixed",
    top: "40%",
    left: "35%",
    height: "50%",
    width: "35%",
    backgroundColor: "rgba(23, 23, 23, 0)"
  },

  content: {
    position: "absolute",
    top: 0,
    left: "-35%",
    opacity: "1",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    height: "100%",
    width: "100%",
  }
};
