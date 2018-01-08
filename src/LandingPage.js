import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import SignUp from "./session/SignUp";
import SignIn from "./session/SignIn";
import BackgroundImage from "./images/backgroundImage5.jpg"

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveSignIn: true,
      isActiveSignUp: false
    };
  }

  toogleModalSignIn = () => {
    this.setState({
      isActiveSignIn: !this.state.isActiveSignIn
    });
  };

  toogleModalSignUp = () => {
    this.setState({
      isActiveSignUp: !this.state.isActiveSignUp
    });
  };

  changeModal = () => {
    this.setState({
      isActiveSignUp: !this.state.isActiveSignUp,
      isActiveSignIn: !this.state.isActiveSignIn
    });
  };

  signIn = () => {
    this.toogleModalSignIn();
  };

  signUp = () => {
    this.toogleModalSignUp();
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  render() {
    return (
      <div>
      <Background>
        <StyledContainer className="container-fluid">
          <div className="col-md-6 col-md-offset-3" style={{color: "rgb(222, 129, 0)"}}>Gym Manager</div>
          <Modal
            isOpen={this.state.isActiveSignIn}
            className="col-md-4 col-md-offset-4"
            style={styledModal}>
            <SignIn onClick={this.changeModal}/>
          </Modal>
          <Modal
            isOpen={this.state.isActiveSignUp}
            className="col-md-4 col-md-offset-4"
            style={styledModal}>
            <SignUp modalClose={this.changeModal} onClick={this.changeModal} success={this.changeModal}/>
          </Modal>
        </StyledContainer>
    </Background>
  </div>
    );
  }
}

export default Home;

const Background = styled.div`
  background-color: black;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.95;
  background-size: auto;
  min-height: 100vh;
  max-width: 100vw;
`

const StyledContainer = styled.div`
  color: rgb(255, 255, 255);
  padding-top: 5vh;
  font-family: 'Permanent Marker', cursive;
  font-size: 10vh;
  text-shadow: 4px 4px 9px black;
  text-align: center;
`;

const StyledButtonContainer = styled.div`
  font-size: 30px;
  padding-top: 10vh;
`;

const Text = styled.div`
  font-size: 50%;
  padding-top: 20vh;
  color: white;
`

const StyledButton = styled.button`
  background-color: rgb(124, 132, 131);
  width: 220px;
  font-size: 25px;
  border-radius: 5px;
  border: none;
  margin: 10px 30px 15px 15px;
  padding: 15px 30px 15px 30px;
  box-shadow: 7px 6px 17px -2px rgba(0, 0, 0, 0.75);
  box-shadow: inset 125px 106px 160px -172px rgba(0, 0, 0, 0.75);
  outline: 0;
  &:hover {
    background-color: rgb(196, 196, 196);
    color: rgb(42, 42, 42);
  }
`;

const styledModal = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(23, 23, 23)"
  },
  content: {
    marginTop: "25vh",
    borderRadius: "10px",
    opacity: "1",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    height: "400px",
    color: "rgb(201, 201, 201)"
  }
};
