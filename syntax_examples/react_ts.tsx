import React, { useState, useEffect, Component } from "react";

type CustomUnionType = "option1" | "option2" | "option3";

interface ExampleProps {
  title: string;
  countStart: number;
  complexData: {
    key1: string;
    key2: number;
  };
  customType: CustomUnionType;
}

const ExampleComponent: React.FC<ExampleProps> = ({
  title,
  countStart,
  complexData,
  customType,
}) => {
  const [count, setCount] = useState<number>(countStart);
  const [message, setMessage] = useState<string>("");

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

class ExampleClassComponent extends Component<ExampleProps, State> {
  constructor(props: ExampleProps) {
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
        <p class="custom-class">Custom type: {customType}</p>
        <p>{message}</p>
        <button onClick={this.handleClick}>Click me</button>
        <ExampleComponent title={title} countStart={this.state.count} />
      </div>
    );
  }
}

export { ExampleComponent, ExampleClassComponent };
