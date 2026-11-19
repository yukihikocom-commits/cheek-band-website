import site from '../data/site.json';

export { site };

export function isCurrent(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const target = href.replace(/\/$/, '') || '/';
  return path === target;
}

export function formatDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
