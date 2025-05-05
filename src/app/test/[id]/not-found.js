// 'use client';
// 404 组件不接收 props， 可使用hooks获取内容
// import { usePathname } from 'next/navigation';
export default function NotFound() {
  // const pathname = usePathname();
  return (
    <div>
      <h1>Ops!! 404 NotFound - test</h1>
      {/* <h2>path {pathname}</h2> */}
    </div>
  );
}
