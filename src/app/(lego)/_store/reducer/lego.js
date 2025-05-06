export function legoReducer(state = {}, action = {}) {
  switch (action.type) {
    case 'SET':
      return {
        ...action.viewTags,
      };
    case 'ADD':
      const { name, params, query, meta, path } = action.route;
      return {
        ...state,
        [path]: {
          name,
          title: meta.title,
          params,
          query,
        },
      };
    case 'REMOVE':
      const temp = {};
      for (let i in state) {
        if (i !== action.path) {
          temp[i] = { ...state[i] };
        }
      }
      return temp;
    default:
      return state;
  }
}
