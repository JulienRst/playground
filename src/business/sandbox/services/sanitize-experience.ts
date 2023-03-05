import RawExperience from '../types/raw';
import slug from 'slug';
import Experience from '../types';

export default function sanitizeExperience(
  rawExperience: RawExperience,
): Experience {
  return {
    ...rawExperience,
    slug: slug(rawExperience.name).toLowerCase(),
  };
}
