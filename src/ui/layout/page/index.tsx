import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import Div from 'technical/type/div';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

interface PageProps extends PropsWithChildren, Div {}

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
