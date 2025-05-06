import { GET, POST, DELETE } from './request';

export const getPageList = params => GET('/pages', params);
export const addPageList = data => POST('/pages', data);
export const deletePageList = params => DELETE('/pages', params);
