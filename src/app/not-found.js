export const metadata = {
  title: '404 NotFound',
};
// 404 组件不接收 props， 可使用hooks获取内容
export default function NotFound() {
  return (
    <div>
      <h1>Ops!! 404 NotFound - layout</h1>
    </div>
  );
}
