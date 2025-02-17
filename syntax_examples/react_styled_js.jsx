import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello, World!</Title>
      <Text>
        This is an example of a React component using Styled Components.
      </Text>
      <Button>Click me!</Button>
      <br />
      <Link href="https://example.com">Visit example.com</Link>
    </Wrapper>
  );
};

export default App;
