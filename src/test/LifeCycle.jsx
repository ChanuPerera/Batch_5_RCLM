import React, { Component } from "react";

class LifeCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    console.log("1 Constructor");
  }
 
  componentDidMount() {
    console.log("2 componentDidMount");

  }

  componentDidUpdate (prevProps, prevState) {
    console.log("3 componentDidUpdate");

    console.log("prevState" , prevState , "New State", this.state.count);
  }

  componentWillUnmount(){
    console.log("4 componentWillUnmount");
  }

  increaseCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h2>RCLM</h2>
        <p>Count:</p>
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    );
  }
}




export default LifeCycle;

   