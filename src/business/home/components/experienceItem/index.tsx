import Experience from 'business/sandbox/types';
import classNames from 'classnames';
import React from 'react';
import Spacer from 'ui/spacer';
import Typography from 'ui/typography';
import styles from './index.module.scss';

interface ExperienceItemProps {
  experience: Experience;
  active: boolean;
  onClick: (slug: string) => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  active,
  onClick,
}) => {
  return (
    <Spacer
      onClick={() => onClick(experience.slug)}
      className={classNames(styles.container, { [styles.active]: active })}
      direction="horizontal"
    >
      <Typography className={styles.key}>{experience.id}</Typography>
      <Typography data-text={experience.name} className={styles.title}>
        {experience.name}
      </Typography>
      <Typography className={styles.more}>see more</Typography>
    </Spacer>
  );
};

export default ExperienceItem;
