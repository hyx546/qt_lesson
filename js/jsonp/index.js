const http = require('http');

http.createServer((req, res) => {
  // /api/books?callback=getbook  pathname
  if (req.url === '/api/books?callback=getBook') {
    const methodName = require('url').parse(req.url).query &&
     require('url').parse(req.url).query.split('=')[1];
    console.log(methodName);
    let list = [ { book: 'book2'} ];
    res.end(`${methodName}(${JSON.stringify(list)})`);
  }
})
.listen(3002, () => {
  console.log('server is running http://localhost:3002');
})