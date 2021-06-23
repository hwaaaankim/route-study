import React from "react";
import { imgContainer } from "./styles/img-container.js";

export default function imgCon({ children, ...restProps }) {
  return <imgContainer {...restProps}>{children}</imgContainer>;
}
