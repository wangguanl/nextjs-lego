import { useState } from 'react';
export default function useRoute(initialRoutes = []) {
  const [routes, setRoutes] = useState(initialRoutes);
  const GetRoute = key => {
    return (function getRoute(routes) {
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].key === key) {
          return routes[i];
        } else if (
          Array.isArray(routes[i].children) &&
          routes[i].children.length
        ) {
          getRoute(routes[i].children);
        }
      }
      return {};
    })(routes);
  };

  // 如果是单对象，则是单路由，向后添加。
  // 如果是数组，则覆盖当前路由
  const addRoute = route => {
    setRoutes(Array.isArray(route) ? route : [...routes, route]);
  };
  return [routes, { addRoute, getRoute: GetRoute }];
}
