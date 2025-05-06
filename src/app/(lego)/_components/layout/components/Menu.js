'use client';
import { Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_viewTag } from '@/app/(lego)/_store/slices/lego';
import { useLegoProvider } from '@/app/(lego)/_components/provider';
import { routes } from '@/app/(lego)/_route/routes';
import useRoute from '@/app/(lego)/_hooks/useRoute';
export default function MenuList(props) {
  const Router = useRouter();
  const { collapsed } = props;

  const [_routes, { addRoute, getRoute }] = useRoute(routes);

  const LegoReducer = useLegoProvider();
  return (
    <Menu
      defaultSelectedKeys={usePathname()}
      selectedKeys={[usePathname()]}
      mode="inline"
      inlineCollapsed={collapsed}
      items={_routes}
      onClick={({ key }) => {
        const { label } = getRoute(key);
        LegoReducer.dispatch({
          type: 'ADD',
          route: {
            path: key,
            name: label,
            meta: { title: label },
          },
        });
        Router.push(key);
        /* useDispatch(
          ADD_viewTag({
            path: key,
            name: label,
            meta: { title: label },
          })
        ); */
      }}
      className="w-full"
    />
  );
}
