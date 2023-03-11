import classNames from 'classnames';
import React from 'react';
import { useIsMobile } from 'technical/window/hooks/use-window-size';
import Button from 'ui/button';
import styles from './index.module.scss';

interface BackButtonProps {
  active?: boolean;
  size?: 'small' | 'big';
  back: () => void;
}
const BackButton: React.FC<BackButtonProps> = ({
  active = true,
  size = 'big',
  back,
}) => {
  const isMobile = useIsMobile();

  const computedSize = isMobile ? styles.small : styles[size];

  return (
    <Button
      onClick={back}
      className={classNames(styles.back, computedSize, {
        [styles.active]: active,
      })}
    >
      <div className={styles.mainStroke}></div>
      <div className={styles.smallStroke}></div>
      <div className={styles.smallStroke}></div>
    </Button>
  );
};

export default BackButton;
