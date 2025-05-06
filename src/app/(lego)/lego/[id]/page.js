// 'use client';
/* export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  return {
    title: '页面搭建 - ' + id,
    description: '页面搭建 - ' + id,
  };
}; */
import Micro from './_micro';
// import EventTouch from './_eventTouch';
export default async function Lego({ params, children }) {
  const { id } = await params;
  return (
    // <EventTouch id={id}>
    <Micro id={id} key={id} />
    // </EventTouch>
  );
}
