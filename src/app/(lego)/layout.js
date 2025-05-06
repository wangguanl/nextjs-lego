'use client';
import Layout from './_components/layout';
import LegoProvider from './_components/provider';
// import Store from './_components/store';
import { useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { addSchema } from '@/app/(lego)/_api/schema';

// const microApp = await import('@micro-zoe/micro-app');
export default function LegoLayout({ children }) {
  useEffect(() => {
    // 初始化micro-app
    microApp.start({
      'disable-memory-router': true,
      disableScopecss: true, // 默认值false
    });

    // 向子应用发送数据
    // microApp.setData('lego-app', { type: 'setSchema', data: {} });

    // 接收子应用的数据
    microApp.addDataListener('lego-app', ({ type, data }) => {
      console.log('接收子应用的数据-' + type);
      console.log(data);
      if (type === 'setSchema') {
        (async () => {
          const { id, schema } = data;
          const res = await addSchema({
            id,
            schema,
          });
          console.log(res);
        })();
      }
    });
  }, []);
  return (
    // <Store>
    <LegoProvider>
      <Layout>
        {/* <MicroAppContext.Provider value={microAppListenerData}> */}
        {children}
        {/* </MicroAppContext.Provider> */}
      </Layout>
    </LegoProvider>
    // </Store>
  );
}
