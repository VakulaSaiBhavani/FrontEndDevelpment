import React, { Component } from "react"; 
export class CricScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      wickets: 0,
      balls: 0,
      overs: 0
    };
  }
  changeBalls = () => {
    if ((this.state.balls + 1) % 6 === 0) {
      this.setState((prevState) => ({
        ...prevState,
        overs: this.state.overs + 1
      }));
    }
    this.setState((prevState) => ({
      ...prevState,
      balls: (this.state.balls + 1) % 6
    }));
  };
  changeScore = (value, countBall) => {
    this.setState((prevState) => ({
      ...prevState,
      score: this.state.score + value
    }));
    countBall && this.changeBalls();
  };
  handleClick = (e) => {
    const id = e.target.id;
    switch (id) {
      case "2":
        this.changeScore(2);
        this.changeBalls();
        break;
      case "3":
        this.changeScore(3);
        this.changeBalls();
        break;
      case "4":
        this.changeScore(4);
        this.changeBalls();
        break;
      case "6":
        this.changeScore(6);
        this.changeBalls();
        break;
      case "1":
        this.changeScore(1);
        this.changeBalls();
        break;
      case "No Ball":
        this.changeScore(1, false);
        break;
      case "Wide":
        this.changeScore(1, false);
        break;
      case "Wicket":
        this.setState((prevState) => ({
          ...prevState,
          wickets: this.state.wickets + 1
        }));
        this.changeBalls();
        break;
      case "0":
        this.changeBalls();
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Score Board : Cricket</h1>
        <h2>
          Score : {this.state.score} / {this.state.wickets}
        </h2>
        <h2>
          Overs : {this.state.overs}.{this.state.balls}{" "}
        </h2>
        <div>
          <button
            id="0"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            0
          </button>
          <button
            id="1"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            1
          </button>
          <button
            id="2"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            2
          </button>
          <button
            id="3"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            3
          </button>
          <button
            id="4"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            4
          </button>
          <button
            id="6"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            6
          </button>
          <button
            id="Wide"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            Wide
          </button>
          <button
            id="No Ball"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            No Ball
          </button>
          <button
            id="Wicket"
            onClick={this.handleClick}
            disabled={this.state.wickets > 9 ? true : false}
          >
            Wicket
          </button>
        </div>
      </div>
    );
  }
}
export default CricScore;
