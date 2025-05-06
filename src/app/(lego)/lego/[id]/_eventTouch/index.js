'use client';
import { useEffect } from 'react';
import { useMicroAppProvider } from '@/app/(lego)/layout';
import { addSchema } from '@/app/(lego)/_api/schema';

import microApp from '@micro-zoe/micro-app';

// 解析子应用的命令。并调用接口
export default function EventTouch({ children, id }) {
  const microAppProvider = useMicroAppProvider();
  useEffect(() => {
    const { type, data } = microAppProvider;
    if (type === 'setSchema') {
      (async () => {
        const res = await addSchema({
          id,
          schema: data,
        });

        microApp.clearData('lego-app');
      })();
    }
  }, [microAppProvider]);
  return children;
}
