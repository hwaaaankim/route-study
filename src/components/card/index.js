import React from "react";
import { Card } from "./styles/card.js";

export default function CardContainer({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
}
