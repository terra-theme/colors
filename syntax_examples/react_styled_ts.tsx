import React from "react";
import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ primary, theme, backgroundColor }) =>
    primary ? theme.primaryColor : backgroundColor || "white"};
  color: ${({ primary, theme }) => (primary ? "white" : theme.primaryColor)};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "0.8em";
      case "medium":
        return "1em";
      case "large":
        return "1.5em";
      default:
        return "1em";
    }
  }};
  margin: 0 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 3px;
`;

export { Button, Container };
