import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class Excercises extends React.Component{
  state = {
    excercises: []
  }

  componentWillMount(){
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

  render(){
    return(
      <div>
        <Title>{this.props.name}</Title>
        {this.state.excercises.map(i =>
          <div className="col-md-12">
            <Data className="col-md-4">{i.nazwa_cwiczenia}</Data>
            <Data className="col-md-4">{i.serie}x{i.powtorzenia}</Data>
            <Data className="col-md-4">{i.przerwa}min</Data>
          </div>
        )}
      </div>
    )
  }
}

const Title = styled.div`
  font-size: 50px;
  color: white;
  text-align: center;
`

const Data = styled.div`
  font-size: 25px;
  color: white;
  text-align: center;
`
