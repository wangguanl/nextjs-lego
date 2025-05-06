'use client';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Modal, Input } from 'antd';
import { useRouter } from 'next/navigation';
import { useLegoProvider } from '@/app/(lego)/_components/provider';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_viewTag } from '@/app/(lego)/_store/slices/lego';

export default function ControlBar() {
  const Router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  // const Dispatch = useDispatch();
  const legoReducer = useLegoProvider();

  return (
    <div className="flex justify-end">
      <Button type="primary" onClick={() => setOpen(true)}>
        创建
      </Button>
      <Modal
        title="请输入标题"
        open={open}
        onOk={() => {
          const path = `/lego/${nanoid()}`;
          legoReducer.dispatch({
            type: 'ADD',
            route: {
              path,
              name: '页面列表-创建-' + title,
              meta: { title: '页面列表-创建' },
            },
          });
          /* Dispatch(
            ADD_viewTag({
            })
          ); */
          Router.push(path);
        }}
        onCancel={() => setOpen(false)}
        okText="确认"
        cancelText="取消"
      >
        <Input
          placeholder="请输入标题"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Modal>
    </div>
  );
}
