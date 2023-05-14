import React, {ClassAttributes} from "react";
import styles from './Button.module.scss';

export type TButtonProps = {
  text: string;
  size: keyof styles;
  reversed?: boolean;
} & Omit<ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
