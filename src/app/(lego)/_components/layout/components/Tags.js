'use client';
import React, { useState } from 'react';
import { Flex, Tag } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

import { useLegoProvider } from '@/app/(lego)/_components/provider';

export default function Tags() {
  const Router = useRouter();
  const legoReducer = useLegoProvider();
  const viewTags = Object.keys(legoReducer.viewTags);
  const Path = usePathname();
  return (
    <Flex gap="4px 0" className="flex pt-2" wrap>
      {viewTags.map((path, index) => {
        return (
          <Tag
            key={path}
            closable={viewTags.length > 1 ? true : false}
            style={{ userSelect: 'none' }}
            onClose={e => {
              e.preventDefault();
              const arr = [...viewTags];
              arr.splice(index, 1);
              Router.push(arr[0]);
              legoReducer.dispatch({
                type: 'REMOVE',
                path,
              });
            }}
            color={path === Path ? '#108ee9' : ''}
            className={`cursor-pointer`}
            onClick={() => {
              Router.push(path);
            }}
          >
            {legoReducer.viewTags[path].name}
          </Tag>
        );
      })}
    </Flex>
  );
}
