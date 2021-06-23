import React from "react";
import SubHeader from "./styles/header-sub";

export default function SubHead({ children, onChange, ...restProps }) {
  return <SubHeader onChange={onChange}></SubHeader>;
}
