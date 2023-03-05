import formatExperienceDate from 'business/sandbox/services/format/format-experience-date';
import Experience from 'business/sandbox/types';
import classNames from 'classnames';
import React from 'react';
import ReactHTMLElement from 'technical/type/reactHTMLElement';
import Images from 'ui/images';
import Spacer from 'ui/spacer';
import Typography from 'ui/typography';
import styles from './index.module.scss';

interface MoreInfoProps extends ReactHTMLElement {
  experience: Experience;
  isOpen: boolean;
  toggle: (value: boolean) => void;
}

const MoreInfo: React.FC<MoreInfoProps> = ({
  experience,
  className,
  isOpen,
  toggle,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.moreInfo, className, {
        [styles.open]: isOpen,
      })}
      {...props}
    >
      <div className={styles.button} onClick={() => toggle(!isOpen)}>
        <div className={styles.smallStroke}></div>
        <div className={styles.smallStroke}></div>
      </div>
      <div className={styles.ctnInformations}>
        <Typography.Title h={'h2'}>{experience.name}</Typography.Title>
        <Typography className={styles.date}>
          {formatExperienceDate(experience.informations.date)}
        </Typography>
        {experience.informations.technos.length > 0 ? (
          <div className={styles.block}>
            <Typography className={styles.label}>Technos</Typography>
            <Spacer className={styles.items}>
              {experience.informations.technos.map((techno) => (
                <Typography key={techno} className={styles.item}>
                  {techno}
                </Typography>
              ))}
            </Spacer>
          </div>
        ) : null}
        {experience.informations.inspirations.length > 0 ? (
          <div className={styles.block}>
            <Typography className={styles.label}>Inspirations</Typography>
            <Spacer className={styles.items}>
              {experience.informations.inspirations.map((inspiration) => (
                <Typography className={styles.item} key={inspiration.name}>
                  <a
                    className={styles.link}
                    href={inspiration.link}
                    target="_blank"
                  >
                    {inspiration.name}
                  </a>
                </Typography>
              ))}
            </Spacer>
          </div>
        ) : null}
        <Typography className={styles.source}>
          <a
            className={styles.link}
            href={experience.informations.source}
            target="_blank"
          >
            <img src={Images.Github} alt="logo github" />
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default MoreInfo;
