import { GET, POST } from './request';

export const getSchema = params => GET('/schema', params);
export const addSchema = data => POST('/schema', data);
