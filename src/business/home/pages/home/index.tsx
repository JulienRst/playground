import AboutMeButton from 'business/about-me/components/cta';
import ExperienceList from 'business/home/components/experienceList';
import Routes from 'business/router/routes';
import classNames from 'classnames';
import React, { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import useTimeout from 'technical/window/hooks/use-timeout';
import Page from 'ui/layout/page';
import styles from './index.module.scss';

const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useTimeout(() => {
    setIsActive(true);
  }, 0);

  const goToExperience = (slug: string) => {
    setIsActive(false);
    window.setTimeout(() => {
      navigate(generatePath(Routes.Sandbox, { slug }));
    }, 300);
  };

  const goToAboutMe = () => {
    setIsActive(false);
    window.setTimeout(() => {
      navigate(Routes.AboutMe);
    }, 300);
  };

  return (
    <Page>
      <ExperienceList active={isActive} goToExperience={goToExperience} />
      <AboutMeButton
        goToAboutMe={goToAboutMe}
        className={classNames(styles.aboutMe, { [styles.active]: isActive })}
      />
    </Page>
  );
};

export default HomePage;
