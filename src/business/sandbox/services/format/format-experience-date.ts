import { format } from 'date-fns';

export default function formatExperienceDate(date: Date): string {
  return format(date, 'MMMM yyyy');
}
