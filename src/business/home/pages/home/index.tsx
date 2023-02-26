import AboutMeButton from 'business/aboutMe/components/cta';
import ExperienceList from 'business/home/components/experienceList';
import classNames from 'classnames';
import React, { useState } from 'react';
import useTimeout from 'technical/window/hooks/useTimeout';
import Page from 'ui/layout/page';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useTimeout(() => {
    setIsActive(true);
  }, 300);

  return (
    <Page>
      <ExperienceList active={isActive} />
      <AboutMeButton
        className={classNames(styles.aboutMe, { [styles.active]: isActive })}
      />
    </Page>
  );
};

export default HomePage;
