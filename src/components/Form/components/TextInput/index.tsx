import React from "react";
import {TTextInputProps} from "./types";
import styles from './TextInput.module.scss';

export const TextInput: React.FC<TTextInputProps> = ({ disabled }) => {
  return <input className={styles.default} disabled={disabled} placeholder={'Введите имя...'} />
}
