import { Canvas } from '@react-three/fiber';
import Routes from 'business/router/routes';
import useExperience from 'business/sandbox/services/hooks/experience';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LastMouseEventContext, {
  LastMouseEvent,
} from 'technical/three-fiber/context/mouse-events';
import BackButton from 'ui/back';
import Page from 'ui/layout/page';
import Typography from 'ui/typography';
import MoreInfo from './components/moreInfo';
import styles from './index.module.scss';

type SandboxParams = 'slug';

const SandboxPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [lastMouseEvent, setLastMouseEvent] = useState<LastMouseEvent | null>(
    null,
  );
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams<SandboxParams>();

  const experience = useExperience(slug);

  const back = () => {
    setIsActive(false);
    window.setTimeout(() => {
      navigate(Routes.Home);
    }, 300);
  };

  if (!experience) {
    // @todo : Create propper 404
    return <>404</>;
  }

  return (
    <LastMouseEventContext.Provider value={lastMouseEvent}>
      <BackButton back={back} active={isActive} />
      <Page
        className={classNames(styles.viewer, { [styles.active]: isActive })}
      >
        <div className={styles.ctnRender}>
          {experience.isTitleNeeded && !isMoreInfoOpen ? (
            <Typography.Title className={styles.title}>
              {experience.name}
            </Typography.Title>
          ) : null}
          <Canvas
            onMouseDown={(event) =>
              setLastMouseEvent({ type: 'mousedown', event })
            }
            onMouseUp={(event) => setLastMouseEvent({ type: 'mouseup', event })}
            onCreated={() => setIsActive(true)}
            className={styles.render}
          >
            {experience.component}
          </Canvas>
        </div>
      </Page>
      <MoreInfo
        isOpen={isMoreInfoOpen}
        toggle={setIsMoreInfoOpen}
        experience={experience}
        className={classNames(styles.moreInfo, { [styles.active]: isActive })}
      />
    </LastMouseEventContext.Provider>
  );
};

export default SandboxPage;
