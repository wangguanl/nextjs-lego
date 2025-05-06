import { readFileAsync, writeFileAsync } from '../_utils';
import Path from 'node:path';
const dirPath = Path.resolve('./src/app/api/schema/data.json');

/**
 * @method 根据ID获取Schema
 * @param { String | required } id
 * @return { Object } schema
 **/
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const json = await readFileAsync(dirPath);

  return Response.json(JSON.parse(json)[id] || {});
}

/**
 * @method 根据ID设置Schema
 * @param { String required } id
 * @param { Object required } schema
 * @return { Status } 返回值描述
 **/
export async function POST(request) {
  const json = await readFileAsync(dirPath);
  const { id, schema } = await request.json();
  const resData = JSON.parse(json);
  resData[id] = schema;
  await writeFileAsync(dirPath, JSON.stringify(resData));

  return Response.json(resData);
}
