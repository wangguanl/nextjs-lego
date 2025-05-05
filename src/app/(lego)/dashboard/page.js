import React from 'react';
import List from './list';
import ControlBar from './control-bar';
export const metadata = {
  title: '页面列表',
  description: '页面列表',
};
export default function () {
  return (
    <div className="flex flex-col p-2">
      <ControlBar />
      <List />;
    </div>
  );
}
