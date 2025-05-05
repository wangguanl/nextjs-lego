export default async function Lego({ params }) {
  const { slug } = await params;
  return <div>slug,{slug.join(' / ')}</div>;
}
