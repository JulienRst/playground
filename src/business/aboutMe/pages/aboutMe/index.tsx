import React, { useState } from 'react';
import Page from 'ui/layout/page';
import Images from 'ui/images';
import styles from './index.module.scss';
import useTimeout from 'technical/window/hooks/useTimeout';
import classNames from 'classnames';
import Typography from 'ui/typography';
import Spacer from 'ui/spacer';
import BackButton from 'ui/back';
import { useNavigate } from 'react-router-dom';
import Routes from 'business/router/routes';

const AboutMePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

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
      <BackButton back={back} active={isActive} size="small" />
      <Page className={classNames(styles.about, { [styles.active]: isActive })}>
        <section>
          <article>
            <Typography>
              Hi, my name is Julien Rousset and i'm a french{' '}
              <strong>Creative Developer</strong>, currently based in Paris.
            </Typography>
            <Typography>
              Working as an <strong>Experienced Front End Developer</strong> at{' '}
              <strong>
                <a href="https://matters.tech/" target="_blank">
                  Matters
                </a>
              </strong>
              .
            </Typography>
          </article>
          <article>
            <Typography>julien.rousset01[at]gmail[dot]com</Typography>
            <Spacer className={styles.ctnSocials}>
              <a href="https://twitter.com/JulienRst" target="_blank">
                <img src={Images.Twitter} alt="twitter icon" />
              </a>
              <a href="https://github.com/JulienRst" target="_blank">
                <img src={Images.Github} alt="github icon" />
              </a>
            </Spacer>
          </article>
        </section>
      </Page>
    </>
  );
};

export default AboutMePage;
