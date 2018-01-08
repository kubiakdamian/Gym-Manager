import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import Input from "../user-interface/Input";
import Button from "../user-interface/Button";
import Loader from "../user-interface/Loader";
import { callToast } from "../lib/alert";
import axios from "axios";
var $ = require('jquery');

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "", loader: false,loginCheck: "",token:""};

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
  }

  updateLogin = e => {
    this.setState({ login: e.target.value });
  };

  updatePassword = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  apiErrorState = () => {
    this.setState({ login: "", password: "", loader: false });
  };

  loaderUpdate = () => {
    this.setState({
      loader: true
    });
  };

  _handleChange = e => {
    this.setState({
      login: e.target.value,
    });
  }
  // Change <textarea> value state onUpdate (while typing) so input is updated
  _handleChangeMsg = e => {
    this.setState({
      password: e.target.value
    });
  }

  _handleChange = e => {
    this.setState({
      login: e.target.value,
    });
  }
  // Change <textarea> value state onUpdate (while typing) so input is updated
  _handleChangeMsg = e =>{
    this.setState({
      password: e.target.value
    });
  }

  _handleSubmit(e){
  e.preventDefault();
  $.ajax({
      url: process.env.NODE_ENV !== "production" ? 'http://localhost:80/GymManager/index.php/Login/login' : "http://localhost:80/GymManager/index.php/Login/login",
      // url: "./php/mailer.php",
      //./index.php/Login/login
      type: 'POST',
      data: {
        'email': this.state.login,
        'password': this.state.password
      },
      success: function(data) {
        console.log("LOGIN", data.status);
        this.state.loginCheck = data['status'];
        this.state.token = data['token'];
        if(this.state.loginCheck!=null && this.state.loginCheck!="notExist"){
          this.props.router.push("home_page");
          this.props.dispatch({
            type: "LOGIN",
            data: {
              id: data.status
            }
          });
        }
        else{
          callToast("Wprowadzono niepoprawny e-mail i hasło.");
        }

      }.bind(this),
      error: function(xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          contactMessage: 'Błąd',
        });
      }.bind(this)
    });
  };


  render() {
    return (
     <div className="row">
        <div className="col-md-12 " style={{ paddingTop: "30px", width: "25vw", paddingLeft: "8vw" }}>
          <form onSubmit={this._handleSubmit}>
            <Input
              onChange={this.updateLogin}
              value={this.state.login}
              className="form-control"
              id="login"
              placeholder="E-mail"
            />
            <Input
              onChange={this.updatePassword}
              value={this.state.password}
              className="form-control"
              id="password"
              placeholder="Password"
              type="password"
            />
            <ConfirmationButton
              onClick={event => {
                this.onSubmit;
                this.loaderUpdate();
              }}
              label={"Sign In"}
            />
            <Text onClick={this.props.onClick}>Sign Up</Text>
          </form>
        </div>
      </div>
    );
  }
}
export default connect()(withRouter(SignIn));

const Text = styled.div`
  font-size: 20px;
  float:right;
  color: rgb(6, 200, 251);
  font-weight: bold;

  &:hover{
    color: rgb(60, 180, 255);
    cursor: pointer;
  }
`

const ConfirmationButton = styled(Button)`
  background-color: gray;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
`;
const loader = styled.div`text-align: center;`;
