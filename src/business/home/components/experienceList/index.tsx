import useExperienceList from 'business/sandbox/services/hooks/experience-list';
import React, { PropsWithChildren } from 'react';
import Spacer from 'ui/spacer';
import ExperienceItem from '../experienceItem';
import styles from './index.module.scss';

interface ExperienceListProps extends PropsWithChildren {
  active: boolean;
  goToExperience: (slug: string) => void;
}

const ExperienceList: React.FC<ExperienceListProps> = ({
  active,
  goToExperience,
}) => {
  const experiences = useExperienceList();

  return (
    <Spacer
      className={styles.experienceList}
      direction="vertical"
      justify="start"
      align="start"
    >
      {experiences.map((experience) => (
        <ExperienceItem
          onClick={goToExperience}
          key={experience.id}
          experience={experience}
          active={active}
        />
      ))}
    </Spacer>
  );
};

export default ExperienceList;
