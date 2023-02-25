import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Div from 'technical/type/div';
import styles from './index.module.scss';

interface ButtonProps extends PropsWithChildren, Div<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
