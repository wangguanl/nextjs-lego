'use client';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
// import Router from 'next/router';
// import { asyncRouterMap, constantRouterMap } from '../router';
const items = [
  { key: '/dashboard', icon: <PieChartOutlined />, label: '页面列表' },
  { key: '/customComponents', icon: <DesktopOutlined />, label: '自定义组件' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];
export default function MenuList(props) {
  const Router = useRouter();
  const { collapsed } = props;
  return (
    <Menu
      defaultSelectedKeys={usePathname()}
      mode="inline"
      inlineCollapsed={collapsed}
      items={items}
      onClick={({ key }) => {
        Router.push(key);
      }}
      className="w-full"
    />
  );
}
