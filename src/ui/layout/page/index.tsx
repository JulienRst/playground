import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import ReactHTMLElement from 'technical/type/reactHTMLElement';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

interface PageProps extends PropsWithChildren, ReactHTMLElement {}

const Page: React.FC<PageProps> = ({ children, className, ...props }) => {
  return (
    <Spacer
      direction="horizontal"
      justify="center"
      className={classNames(styles.page, className)}
      {...props}
    >
      {children}
    </Spacer>
  );
};

export default Page;
