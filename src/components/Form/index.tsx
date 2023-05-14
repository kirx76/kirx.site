import React from "react";
import {TForm} from "./types";
import {TextInput} from "./components";

//@ts-ignore
const Form: TForm = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

Form.TextInput = TextInput;

export default Form;

