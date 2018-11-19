const net = require('net');
const fs = require('fs');

let url = __dirname;
const client = net.connect({port: 4000}, () => {
  console.log("클라이언트가 서버에 연결되었스니다.");

  client.write('hello', () => {
    client.end();
  });
});

client.on('data', (data) => {
  fs.mkdir(`${url}/${data}`, (err) => {
    if(err) throw err;

    console.log('from server:' + data);
  });
});

client.on('end', () => {
  console.log('클라이언트가 서버에서 연결을 해제되었습니다.');
});