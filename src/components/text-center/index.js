import React from "react";
import { Container, Text } from "./styles/text-center";

export default function TextContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TextContainer.TextArea = function CenterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
