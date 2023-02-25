import useExperienceList from 'business/sandbox/services/hooks/experienceList';
import React, { PropsWithChildren } from 'react';
import Spacer from 'ui/spacer';
import ExperienceItem from '../experienceItem';

interface ProjectListProps extends PropsWithChildren {
  active: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ active }) => {
  const experiences = useExperienceList();

  return (
    <Spacer direction="vertical" justify="center">
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          active={active}
        />
      ))}
    </Spacer>
  );
};

export default ProjectList;
