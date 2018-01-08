import React from "react";
import Button from "../user-interface/Button";
import styled from "styled-components";
import axios from "axios";
import { callToast } from "../lib/alert";
import { toast } from "react-toastify";

export default class addSizes extends React.Component {
  state = {
      height: 0,
      weight: 0,
      biceps: 0,
      thigh: 0,
      waist: 0,
      wrist: 0,
      ankle: 0,
      forearm: 0,
      calf: 0,
    }

    updateHeight = e => {
      this.setState({ height: e.target.value });
    };

    updateWeight = e => {
      this.setState({ weight: e.target.value });
    };

    updateBiceps = e => {
      this.setState({ biceps: e.target.value });
    };

    updateThigh = e => {
      this.setState({ thigh: e.target.value });
    };

    updateWaist = e => {
      this.setState({ waist: e.target.value });
    };

    updateWrist = e => {
      this.setState({ wrist: e.target.value });
    };

    updateAnkle = e => {
      this.setState({ ankle: e.target.value });
    };

    updateForearm = e => {
      this.setState({ forearm: e.target.value });
    };

    updateCalf = e => {
      this.setState({ calf: e.target.value });
    };

    addSizes = () => {
      axios
      .post(`http://localhost/GymManager/index.php/Training/addSizes/${this.state.height}/${this.state.weight}/${this.state.biceps}/${this.state.thigh}/${this.state.waist}/${this.state.wrist}/${this.state.ankle}/${this.state.forearm}/${this.state.calf}/${this.props.userId}`, {

      })
        .then(response => {

        })
        .catch(error => {
          console.log(error);
        });
        callToast("Dodane nowe wymiary");
        this.props.closeModal();
    }


  render(){
    return(
      <div className="col-md-12" style={{paddingLeft: "27vw"}}>
        <div className = "col-md-12" style={{paddingLeft: "12vw"}}>
          <img
            src={require(`../images/training/muscles.png`)}
            style={{ width: "128px" }}
          />
        </div>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Wzrost:</Text>
          <input type="number" name="wzrost" onChange={this.updateHeight}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Waga:</Text>
          <input type="number" name="waga"  onChange={this.updateWeight}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Ramie:</Text>
          <input type="number" name="wiek" onChange={this.updateBiceps}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Udo</Text>
          <input type="number" name="wiek" onChange={this.updateThigh}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Pas:</Text>
          <input type="number" name="wiek" onChange={this.updateWaist}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Nadgarstek:</Text>
          <input type="number" name="wiek" onChange={this.updateWrist}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Kostka:</Text>
          <input type="number" name="wiek" onChange={this.updateAnkle}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Przedramie:</Text>
          <input type="number" name="wiek" onChange={this.updateForearm}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          <Text className="col-md-2">Łydka:</Text>
          <input type="number" name="wiek" onChange={this.updateCalf}/>
        </label>

        <div className="col-md-12" style={{marginTop: "5vh"}}>
          <ConfirmationButton
            label={"Dodaj"}
            onClick={this.addSizes}
          />
        </div>
      </div>
    )
  }
}

const ConfirmationButton = styled(Button)`
  background-color: gray;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 20px;
  width: 50%;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
`
