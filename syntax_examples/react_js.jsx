import React, { useState, useEffect, Component } from "react";

const ExampleComponent = ({ title, countStart, complexData, customType }) => {
  const [count, setCount] = useState(countStart);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > countStart) {
      setMessage(`You clicked the button ${count} times.`);
    } else {
      setMessage("Click the button to start counting.");
    }
  }, [count, countStart]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>
        Complex data: {complexData.key1}, {complexData.key2}
      </p>
      <p>Custom type: {customType}</p>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

class ExampleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.countStart,
      message: "Click the button to start counting.",
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      message: `You clicked the button ${prevState.count + 1} times.`,
    }));
  };

  render() {
    const { title, complexData, customType } = this.props;
    const { message } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>
          Complex data: {complexData.key1}, {complexData.key2}
        </p>
        <p>Custom type: {customType}</p>
        <p>{message}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export { ExampleComponent, ExampleClassComponent };
