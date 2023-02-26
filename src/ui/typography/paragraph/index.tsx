import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import ReactHTMLElement from 'technical/type/reactHTMLElement';
import styles from './index.module.scss';

interface ParagraphProps
  extends PropsWithChildren,
    ReactHTMLElement<HTMLParagraphElement> {}

const Paragraph: React.FC<ParagraphProps> = ({
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

export default Paragraph;
