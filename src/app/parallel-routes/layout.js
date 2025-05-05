export const metadata = {
  title: '并行路由',
};
export default function ({ children, users, a, b }) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <div>{children}</div>
      <div>{users}</div>
      <div>{a}</div>
      <div>{b}</div>
    </div>
  );
}
