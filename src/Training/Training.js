import React from "react";
import { withRouter, browserHistory } from "react-router";
import styled from "styled-components";
import Button from "../user-interface/Button";
import axios from "axios";
import { connect } from "react-redux";
import { callToast } from "../lib/alert";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Excercises from "./Excercises"

class Training extends React.Component {
  state = {
    trainings: [],
    name: "",
    isActiveModal: false,
    chosenName: "",
    chosenId: 0
  }

  getTrainings = () => {
    axios
      .get(`http://localhost:80/GymManager/index.php/Training/getTrainings/${this.props.user.id}`)
      .then(response => {
        console.log("treningi", response);
        this.setState({
          trainings: response.data.results
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getTrainings();
  }

  moveToHomepage = () => {
    this.props.router.push("home_page")
  }

  updateName = e => {
    this.setState({ name: e.target.value });
  };

  addTraining = () => {
    if(this.state.name !== ""){
      axios
      .post(`http://localhost/GymManager/index.php/Training/addTraining/${this.state.name}/${this.props.user.id}`, {

      })
        .then(response => {

        })
        .catch(error => {
          console.log(error);
        });
        callToast("Dodane nowy trening");
        this.getTrainings();
    }
  }

  showExcercises = (name, id) => {
    this.setState({
      chosenName: name,
      chosenId: id
    })
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      isActiveModal: !this.state.isActiveModal
    })
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
        <Header className="col-md-10">Trening</Header>
        <label className="col-md-8 col-md-offset-4" style={{fontSize:"20px", paddingBottom: "20px"}}>
          <Text className="col-md-2">Nazwa:</Text>
          <input type="text" name="nazwa treningu" onChange={this.updateName}/>
        </label>
        <div className="col-md-12" style={{height: "10vh"}}>
          <ConfirmationButton
            label={"Dodaj"}
            onClick={this.addTraining}
          />
        </div>
        {this.state.trainings.map(i =>
          <TrainingContainer className="col-md-4 col-md-offset-1" onClick={() => this.showExcercises(i.nazwa_treningu, i.idtrening)}>
            <div className="col-md-9 col-md-offset-3">
              <img
                src={require(`../images/training/muscles.png`)}
                style={{ width: "128px" }}
              />
            </div>
            <TrainingText>{i.nazwa_treningu}</TrainingText>
          </TrainingContainer>
        )}
        <Modal
          isOpen={this.state.isActiveModal}
          style={styledModal}
          onRequestClose={this.toggleModal}>

          <Excercises user={this.props.user.id} training={this.state.chosenId} name={this.state.chosenName}/>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

export default connect(mapStateToProps)(withRouter(Training));

const TrainingContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgb(60, 60, 60);
  border-radius: 15px;
  border: 1px solid white;
  margin-bottom: 50px;

  &:hover{
    cursor: pointer;
    background-color: rgb(207, 118, 0)
  }
`

const TrainingText = styled.div`
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 45%;
  font-style: oblique;
`

const Text = styled.div`
  color: black;
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

const Back = styled.div`
  &:hover{
    cursor: pointer;
  }
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
  font-size: 90px;
  color: rgb(228, 137, 0);
  font-weight: bold;
  text-align: center;
  text-shadow: 4px 4px 2px rgba(101, 99, 99, 1);
  transform: translateX(-2vw);
`

const styledModal = {
  overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0)'
    },
    content : {
      position                   : 'absolute',
      top                        : '60px',
      left                       : '60px',
      right                      : '60px',
      bottom                     : '60px',
      border                     : '1px solid #ccc',
      background                 : 'rgba(47, 47, 47, 0.99)',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'

    }
};
