import Project from 'business/project/types';
import classNames from 'classnames';
import React from 'react';
import Spacer from 'ui/spacer';
import Typography from 'ui/typography';
import styles from './index.module.scss';

interface ProjectItemProps {
  project: Project;
  active: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, active }) => {
  return (
    <Spacer
      className={classNames(styles.container, { [styles.active]: active })}
      direction="horizontal"
    >
      <Typography className={styles.key}>{project.id}</Typography>
      <Typography data-text={project.name} className={styles.title}>
        {project.name}
      </Typography>
      <Typography className={styles.more}>see more</Typography>
    </Spacer>
  );
};

export default ProjectItem;
