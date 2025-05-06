'use client';
import Link from 'next/link';
import { Space, Table } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/pages');
      setList(data);
    })();
  }, []);
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
  return <Table className="mt-2" columns={columns} dataSource={list} />;
}
