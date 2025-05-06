'use client';
import { Provider } from 'react-redux';
import store from '@/app/(lego)/_store/store';

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
