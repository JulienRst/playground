import { useEffect, useState } from 'react';
import useExperienceList from 'business/sandbox/services/hooks/experienceList';
import Experience from 'business/sandbox/types';

export default function useExperience(slug: string | undefined) {
  const [experience, setExperience] = useState<Experience>();

  const experiences = useExperienceList();

  useEffect(() => {
    const e = slug ? experiences.find((exp) => exp.slug === slug) : undefined;
    setExperience(e);
  }, [slug]);

  return experience;
}
