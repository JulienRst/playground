import Project from 'business/sandbox/types';
import { useState } from 'react';
import RAW_EXPERIENCES from '../data';
import sanitizeExperience from '../sanitize-experience';

export default function useProjectList(): Project[] {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    setProjects(
      RAW_EXPERIENCES.map((rawExperience) => sanitizeExperience(rawExperience)),
    );
    setLoaded(true);
  }

  return projects;
}
