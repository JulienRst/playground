import useProjectList from 'business/project/services/hooks/projectList';
import React, { PropsWithChildren } from 'react';
import Spacer from 'ui/spacer';
import ProjectItem from '../projectItem';

interface ProjectListProps extends PropsWithChildren {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const projects = useProjectList();

  return (
    <Spacer direction="vertical" justify="center">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </Spacer>
  );
};

export default ProjectList;
