export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  return {
    title: '页面搭建 - ' + id,
    description: '页面搭建 - ' + id,
  };
};
export default async function Lego({ params }) {
  // console.log(params);
  const { id } = await params;
  return <div>Lego {id}</div>;
}
