import { notFound } from 'next/navigation';
export const metadata = {
  title: 'test',
};
export default function Index() {
  const rand = Math.random();
  if (rand < 0.5) {
    notFound();
  }
  return <div>{rand}</div>;
}
