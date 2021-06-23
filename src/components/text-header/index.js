import React from "react";
import { Container, Text } from "./styles/text-header";

export default function TextWrap({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TextWrap.TextArea = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
