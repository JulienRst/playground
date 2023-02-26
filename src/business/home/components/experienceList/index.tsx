import useExperienceList from 'business/sandbox/services/hooks/experienceList';
import React, { PropsWithChildren } from 'react';
import Spacer from 'ui/spacer';
import ExperienceItem from '../experienceItem';

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
    <Spacer direction="vertical" justify="center">
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
