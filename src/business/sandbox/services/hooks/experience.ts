import useExperienceList from 'business/sandbox/services/hooks/experienceList';

export default function useExperience(slug: string | undefined) {
  const experiences = useExperienceList();

  return slug
    ? experiences.find((experience) => experience.slug === slug)
    : undefined;
}
