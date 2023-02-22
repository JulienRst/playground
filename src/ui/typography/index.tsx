import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Div from 'technical/type/div';
import styles from './index.module.scss';

interface TypographyProps extends PropsWithChildren, Div {}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={classNames(styles.paragraph, className)} {...props}>
      {children}
    </p>
  );
};

export default Typography;
