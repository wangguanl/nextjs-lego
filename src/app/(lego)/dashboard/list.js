'use client';
import { Space, Table, Popconfirm } from 'antd';
import { useState, useEffect } from 'react';
import { getPageList, deletePageList } from '../_api/pages';
import { useRouter } from 'next/navigation';
import { useLegoProvider } from '@/app/(lego)/_components/provider';
export default function List() {
  const [list, setList] = useState([]);
  const Router = useRouter();
  const legoReducer = useLegoProvider();

  useEffect(() => {
    (async () => {
      const data = await getPageList();
      setList(data);
    })();
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Visited',
      dataIndex: 'visited',
      key: 'visited',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" className="cursor-pointer">
          {/* <a href={`/preview/${record.key}`} target="_blank">
            预览
          </a> */}
          <span
            onClick={() => {
              const path = `/lego/${record.key}`;
              legoReducer.dispatch({
                type: 'ADD',
                route: {
                  path,
                  name: '页面搭建' + record.title,
                  meta: { title: '页面搭建' },
                },
              });
              Router.push(path);
            }}
          >
            编辑
          </span>

          <Popconfirm
            title="Delete the task"
            description="确定要删除吗?"
            onConfirm={async () => {
              const data = await deletePageList({ id: record.key });
              setList(data);
            }}
            okText="确定"
            cancelText="取消"
          >
            删除
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return <Table className="mt-2" columns={columns} dataSource={list} />;
}
