import React, {ClassAttributes} from "react";
import {TTextInputProps} from "./components/TextInput/types";

type TFormProps = ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;

export type TForm = {
  TextInput: React.FC<TTextInputProps>;
} & React.FC<TFormProps>
