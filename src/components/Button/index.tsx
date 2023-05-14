import React from "react";
import {TButtonProps} from "./types";
import styles from './Button.module.scss';

const Button: React.FC<TButtonProps> = ({text, size, reversed, ...props}) => {
  return <button className={styles[size]} data-reversed={reversed} {...props}>{text}</button>
}

export default Button;
