'use client';
import Link from 'next/link';
import { Space, Table } from 'antd';
export default function List() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
        <Space size="middle">
          <a href={`/preview/${record.key}`} target="_blank">
            Preview
          </a>
          <Link href={`/lego/${record.key}`}>Edit</Link>
          <a
            href="javascript:;"
            onClick={() => {
              console.log('delete');
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      visited: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      visited: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      visited: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return <Table className="mt-2" columns={columns} dataSource={data} />;
}
