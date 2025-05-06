'use client';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { legoReducer } from '@/app/(lego)/_store/reducer/lego';
import { usePathname } from 'next/navigation';
import { routes } from '@/app/(lego)/_route/routes';
import useLocalStorage from '@/app/(lego)/_hooks/useStorage';
import useRoute from '@/app/(lego)/_hooks/useRoute';
import { isEqual } from 'lodash-es';

const Lego = createContext();
export default function Provider({ children }) {
  const path = usePathname();

  // const { label } = GetRoute(path, routes);

  const [legoState, setLegoState] = useLocalStorage('reducer-lego', {});
  const [viewTags, dispatch] = useReducer(legoReducer, {});

  // 初始化执行
  useEffect(() => {
    if (Object.keys(legoState).length && !isEqual(legoState, viewTags)) {
      dispatch({
        type: 'SET',
        viewTags: legoState,
      });
    }
  }, [legoState]);

  // 当tags更新后进行本地持久化更新
  useEffect(() => {
    if (Object.keys(viewTags).length) {
      setLegoState(viewTags);
    }
  }, [viewTags]);

  return (
    <Lego.Provider value={{ viewTags, dispatch }}>{children}</Lego.Provider>
  );
}

export const useLegoProvider = () => useContext(Lego);
