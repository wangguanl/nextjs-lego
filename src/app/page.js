import Image from 'next/image';
import { notFound } from 'next/navigation';
export default function Index() {
  const rand = Math.random();
  if (rand < 0.5) {
    notFound();
  }
  return <div>{rand}</div>;
}
