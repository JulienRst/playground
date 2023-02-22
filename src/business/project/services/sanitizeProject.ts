import RawProject from '../types/raw';
import slug from 'slug';
import Project from '../types';

export default function sanitizeProject(rawProject: RawProject): Project {
  return {
    ...rawProject,
    slug: slug(rawProject.name).toLowerCase(),
  };
}
