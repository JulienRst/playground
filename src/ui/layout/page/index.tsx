import React, { PropsWithChildren } from 'react';
import Spacer from 'ui/spacer';
import styles from './index.module.scss';

interface PageProps extends PropsWithChildren {}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Spacer direction="horizontal" justify="center" className={styles.page}>
      {children}
    </Spacer>
  );
};

export default Page;
