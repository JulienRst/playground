import useProjectList from 'business/project/services/hooks/projectList';
import React, { PropsWithChildren } from 'react';
import Spacer from 'ui/spacer';
import ProjectItem from '../projectItem';

interface ProjectListProps extends PropsWithChildren {
  active: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ active }) => {
  const projects = useProjectList();

  return (
    <Spacer direction="vertical" justify="center">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} active={active} />
      ))}
    </Spacer>
  );
};

export default ProjectList;
