import useExperienceList from 'business/sandbox/services/hooks/experience-list';
import React, { PropsWithChildren } from 'react';
import { useIsMobile } from 'technical/window/hooks/use-window-size';
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
  const isMobile = useIsMobile();

  return (
    <Spacer
      className={styles.experienceList}
      direction="vertical"
      justify={isMobile ? 'start' : 'center'}
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
