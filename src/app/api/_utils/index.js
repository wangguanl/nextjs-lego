import FS from 'node:fs';
import { to } from 'await-to-js';

// 读取文件夹
export const readdirAsync = path =>
  new Promise((resolve, reject) =>
    FS.readdir(path, (err, dirs) => (err ? reject(err) : resolve(dirs)))
  );
// 读取文件
export const readFileAsync = path =>
  new Promise((resolve, reject) =>
    FS.readFile(path, (err, buffer) => (err ? reject(err) : resolve(buffer)))
  );
// 写入文件
export const writeFileAsync = (path, data) =>
  new Promise((resolve, reject) =>
    FS.writeFile(path, data, err => (err ? reject(err) : resolve()))
  );
// 检查文件夹是否存在
export const statAsync = path =>
  new Promise((resolve, reject) =>
    FS.stat(path, (err, data) => (err ? reject(err) : resolve(data)))
  );
// 创建文件夹
export const mkdirAsync = path =>
  new Promise((resolve, reject) =>
    FS.mkdir(path, err => (err ? reject(err) : resolve()))
  );
// 检查文件是否存在
export const accessAsync = path =>
  new Promise((resolve, reject) =>
    FS.access(path, err => (err ? reject(err) : resolve()))
  );
// 检查数据是否是一个文件
export const isFile = path =>
  new Promise(async (resolve, reject) => {
    const [err, data] = await to(statAsync(path));
    err ? reject(err) : resolve(data.isFile());
  });
// 检查数据是否是一个文件夹
export const isDirectory = path =>
  new Promise(async (resolve, reject) => {
    const [err, data] = await to(statAsync(path));
    err ? reject(err) : resolve(data.isDirectory());
  });
// 检查数据是否是一个文件夹
export const rmdirSync = async path =>
  new Promise(async (resolve, reject) =>
    FS.rmdir(path, err => (err ? reject(err) : resolve()))
  );
// 递归删除文件夹及文件
export const rmDirFile = path =>
  new Promise(async (resolve, reject) => {
    if (FS.existsSync(path)) {
      const [err, files] = await to(readdirAsync(path));
      await Promise.allSettled(
        files.map(
          file =>
            new Promise(async (resolve, reject) => {
              let curPath = path + '/' + file;
              //判断是否是文件夹
              if (FS.statSync(curPath).isDirectory()) {
                await rmDirFile(curPath); //递归删除文件夹
              } else {
                //是文件的话说明是最后一层不需要递归
                FS.unlinkSync(curPath); //删除文件
              }
              resolve();
            })
        )
      );
      await rmdirSync(path);
      resolve();
    }
  });
export const cpAsync = (src, dest) =>
  new Promise((resolve, reject) => {
    FS.cp(src, dest, err => (err ? reject(err) : resolve()));
  });
// 获取本地IPV4
export const getLocalIP = () => {
  const os = require('os');
  const iFaces = os.networkInterfaces(); //网络信息
  let localIp = '';
  for (let dev in iFaces) {
    if (dev === '本地连接' || dev === 'WLAN' || dev === '以太网') {
      for (let j = 0; j < iFaces[dev].length; j++) {
        if (iFaces[dev][j].family === 'IPv4') {
          localIp = iFaces[dev][j].address;
          break;
        }
      }
    }
  }
  return localIp;
};
// 检测是否是本地
export const isDev = hostname =>
  ['localhost', '127.0.0.1', getLocalIP()].includes(hostname);

// 将名称转为可保存的文件格式命名
export const IllegalPipe = str => str.replace(/\"|\*|\\|\/|\||\:|\?/g, '');
