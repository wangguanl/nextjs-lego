import { readFileAsync, writeFileAsync } from '../_utils';
import Path from 'node:path';
const dirPath = Path.resolve('./src/app/api/pages/data.json');
/**
 * @method 获取页面列表
 * @param { String | required } ID .
 * @return { Object } Schema
 **/
export async function GET() {
  const json = await readFileAsync(dirPath);
  return Response.json(JSON.parse(json));
}

/**
 * @method 创建页面
 * @param { String | required } ID .
 * @return { Object } Schema
 **/
export async function POST(request) {
  const { id, title } = await request.json();
  const json = await readFileAsync(dirPath);

  const resData = [
    ...JSON.parse(json),
    {
      id,
      title,
      key: id,
      visited: Math.ceil(Math.random() * 1000),
      address: 'New York No. 1 Lake Park',
    },
  ];

  await writeFileAsync(dirPath, JSON.stringify(resData));

  return Response.json(resData);
}

/**
 * @method 根据ID删除对应数据
 * @param { String | required } ID .
 * @return { Object } Schema
 **/
export async function DELETE(_request) {
  const json = await readFileAsync(dirPath);
  const searchParams = _request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const list = JSON.parse(json);
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
    }
  }

  await writeFileAsync(dirPath, JSON.stringify(list));

  return Response.json(list);
}
