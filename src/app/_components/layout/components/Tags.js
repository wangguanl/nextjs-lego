'use client';
import React, { useState } from 'react';
import { Flex, Tag } from 'antd';
import { usePathname } from 'next/navigation';
export default function Tags() {
  // console.log(usePathname());
  const [tags, setTags] = useState([]);
  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    // console.log(newTags);
    setTags(newTags);
  };
  return (
    <Flex gap="4px 0" className="flex pt-2" wrap>
      {tags.map((tag, index) => {
        return (
          <Tag
            key={tag}
            closable={index !== usePathname()}
            style={{ userSelect: 'none' }}
            onClose={() => handleClose(tag)}
            color={tag === usePathname() ? '#108ee9' : ''}
            className={`cursor-pointer`}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
}
