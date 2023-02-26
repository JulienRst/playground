import { Canvas } from '@react-three/fiber';
import Routes from 'business/router/routes';
import useExperience from 'business/sandbox/services/hooks/experience';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTimeout from 'technical/window/hooks/useTimeout';
import BackButton from 'ui/back';
import Page from 'ui/layout/page';
import styles from './index.module.scss';

type SandboxParams = 'slug';

const SandboxPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams<SandboxParams>();

  const experience = useExperience(slug);

  useTimeout(() => {
    setIsActive(true);
  }, 0);

  const back = () => {
    setIsActive(false);
    window.setTimeout(() => {
      navigate(Routes.Home);
    }, 300);
  };

  return (
    <>
      <BackButton back={back} active={isActive} />
      <Page
        className={classNames(styles.viewer, { [styles.active]: isActive })}
      >
        <div className={styles.ctnRender}>
          <Canvas>{isActive ? experience?.component : null}</Canvas>
        </div>
      </Page>
    </>
  );
};

export default SandboxPage;
