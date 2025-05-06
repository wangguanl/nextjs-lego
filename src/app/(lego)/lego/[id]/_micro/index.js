'use client';
import { useEffect, useState } from 'react';
import microApp from '@micro-zoe/micro-app';
import { getSchema } from '@/app/(lego)/_api/schema';
import './style.css';
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
export default function MyApp({ id }) {
  const [status, setStatus] = useState(false);
  const [schema, setSchema] = useState({});
  useEffect(() => {
    (async () => {
      const data = await getSchema({ id });
      setSchema(data);
    })();
  }, []);
  useEffect(() => {
    microApp.setData('lego-app', {
      type: 'setSchema',
      data: {
        id,
        schema,
      },
    });
  }, [status, schema]);
  return (
    <micro-app
      name="lego-app"
      // url={'http://localhost:9990/'}
      url={'https://page-lego-micro.vercel.app/'}
      iframe
      class="h-full w-full overflow-hidden p-2"
      onMounted={() => {
        console.log('已经渲染完成');
        setStatus(true);
      }}
      keep-alive
    />
  );
}
