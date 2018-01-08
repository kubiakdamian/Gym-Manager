import React from "react";
import Select from 'react-select';
import Button from "../user-interface/Button";
import styled from "styled-components";
import axios from "axios";
import { callToast } from "../lib/alert";
import { toast } from "react-toastify";
import 'react-select/dist/react-select.css';

export default class Calories extends React.Component {
  state = {
      selectedOption: '',
      ratio: 0,
      height: 0,
      weight: 0,
      age: 0,
    }

    handleChange = (selectedOption) => {
      this.setState({
         selectedOption: selectedOption,
         ratio: selectedOption.value
       });;
    }

    updateHeight = e => {
      this.setState({ height: e.target.value });
    };

    updateWeight = e => {
      this.setState({ weight: e.target.value });
    };

    updateAge= e => {
      this.setState({ age: e.target.value });
    };

    countCalories = () => {
      if(this.state.weight < 500 && this.state.height < 250 && this.state.age < 150 && this.state.weight > 0 && this.state.height > 0 && this.state.age > 0){
        let calories = 0;
        calories = ((9.99 * this.state.weight) + (6.25 * this.state.height) - (4.92 *this.state.age) - 161) * this.state.ratio;
        let thinning = calories - 300;
        let stagnation = calories;
        let gaining = calories + 300;

        callToast("Pomyślnie policzono kalorie.");
        axios
        .post(`http://localhost/GymManager/index.php/Calories/updateCalories/${thinning}/${stagnation}/${gaining}/${this.props.userId}`, {

        })
          .then(response => {

          })
          .catch(error => {
            console.log(error);
          });
      }else{
        callToast("Wprowadzono niepoprawne dane")
      }


    }

  render(){
    console.log(this.state.weight, this.state.height);
    return(
      <div>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          Wzrost:
          <input type="number" name="wzrost" style={{marginLeft: "8%"}} onChange={this.updateHeight}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          Waga:
          <input type="number" name="waga" style={{marginLeft: "11.5%"}} onChange={this.updateWeight}/>
        </label>
        <label className="col-md-12" style={{fontSize:"20px"}}>
          Wiek:
          <input type="number" name="wiek" style={{marginLeft: "13%"}} onChange={this.updateAge}/>
        </label>

        <div className="col-md-10" style={{marginTop: "3%"}}>
          <Select
            name="form-field-name"
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={[
              { value: 1, label: 'leżący lub siedzący tryb życia, brak aktywności fizycznej', },
              { value: 1.2, label: 'praca siedząca, aktywność fizyczna na niskim poziomie' },
              { value: 1.4, label: 'praca niefizyczna, trening 2 razy w tygodniu' },
              { value: 1.6, label: 'lekka praca fizyczna, trening 3-4 razy w tygodniu' },
              { value: 1.8, label: 'praca fizyczna, trening 5 razy w tygodniu' },
              { value: 2, label: 'ciężka praca fizyczna, codzienny trening' }
            ]}
          />
        </div>
        <div className="col-md-10" style={{marginTop: "5vh"}}>
          <ConfirmationButton
            label={"Oblicz"}
            onClick={this.countCalories}
          />
          <ConfirmationButton
            label={"Aktualne"}
            onClick={this.props.showCalories}
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
