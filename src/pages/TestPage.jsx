import React from "react";

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>Test Page</h1>
        <p>Counter: {counter}</p>
        <button onClick={this.handleClick}>Increment Counter</button>
      </div>
    );
  }
}

export default TestPage;
