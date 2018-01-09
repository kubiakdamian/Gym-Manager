import React from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../user-interface/Button";
import { callToast } from "../lib/alert";

export default class Excercises extends React.Component{
  state = {
    excercises: [],
    name: "",
    series: 0,
    reps: 0,
    brake: 0
  }

  getExcercises = () => {
    axios
      .get(`http://localhost:80/GymManager/index.php/Training/getExcercises/${this.props.user}/${this.props.training}`)
      .then(response => {
        console.log("cwiczenia", response);
        this.setState({
          excercises: response.data.results
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getExcercises();
  }

  updateName = e => {
    this.setState({ name: e.target.value });
  };

  updateSeries = e => {
    this.setState({ series: e.target.value });
  };

  updateReps = e => {
    this.setState({ reps: e.target.value });
  };

  updateBrake = e => {
    this.setState({ brake: e.target.value });
  };

  addExcercise = () => {
    if(this.state.excercises.length < 10){
      if(this.state.name !== "" && this.state.reps > 0 && this.state.series > 0 && this.state.brake > 0){
        axios
        .post(`http://localhost/GymManager/index.php/Training/addExcercise/${this.state.name}/${this.state.reps}/${this.state.series}/${this.state.brake}/${this.props.training}/${this.props.user}`, {

        })
          .then(response => {

          })
          .catch(error => {
            console.log(error);
          });
          callToast("Dodano ćwiczenie");
          this.getExcercises();
      }else{
        callToast("Należy wprowadzić poprawne dane");
      }
    }else{
      callToast("Nie można dodać więcej ćwiczeń");
    }
  }

  render(){
    return(
      <div>
        <Title>{this.props.name}</Title>
        <div className="col-md-12" style={{height: "500px"}}>
          {this.state.excercises.map(i =>
            <div className="col-md-12">
              <Data className="col-md-4">{i.nazwa_cwiczenia}</Data>
              <Data className="col-md-4">{i.serie}x{i.powtorzenia}</Data>
              <Data className="col-md-4">{i.przerwa}min</Data>
            </div>
          )}
        </div>
        <Form className="col-md-12">
          <label className="col-md-3" style={{fontSize:"18px"}}>
            <Text className="col-md-4">Nazwa:</Text>
            <input type="text" name="wzrost" onChange={this.updateName}/>
          </label>
          <label className="col-md-3" style={{fontSize:"18px"}}>
            <Text className="col-md-4">Serie:</Text>
            <input type="number" name="waga"  onChange={this.updateSeries}/>
          </label>
          <label className="col-md-3" style={{fontSize:"18px"}}>
            <Text className="col-md-4">Powtorzenia:</Text>
            <input type="number" name="wiek" onChange={this.updateReps}/>
          </label>
          <label className="col-md-3" style={{fontSize:"18px"}}>
            <Text className="col-md-4">Przerwa:</Text>
            <input type="number" name="wiek" onChange={this.updateBrake}/>
          </label>
        </Form>
        <ButtonContainer className="col-md-12">
          <ConfirmationButton
            label={"Dodaj"}
            onClick={this.addExcercise}
          />
        </ButtonContainer>
      </div>
    )
  }
}

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
`

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 120px;
  left: 30px;
`

const Data = styled.div`
  font-size: 25px;
  color: white;
  text-align: center;
`
const Form = styled.div`
  position: fixed;
  bottom: 140px;
  left: 40px;
`

const Text = styled.div`
  color: white;
  font-size: 20px;
`
const ConfirmationButton = styled(Button)`
  background-color: gray;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 20px;
  width: 20%;
  position: absolute;
  left: 38%;
`;
