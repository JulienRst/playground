import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import ReactHTMLElement from 'technical/type/reactHTMLElement';
import styles from './index.module.scss';

interface TitleProps
  extends PropsWithChildren,
    ReactHTMLElement<HTMLHeadingElement> {
  h?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Title: React.FC<TitleProps> = ({
  children,
  h = 'h1',
  className,
  ...props
}) => {
  return React.createElement(
    h,
    {
      className: classNames(styles.title, className),
      ...props,
    },
    children,
  );
};

export default Title;
