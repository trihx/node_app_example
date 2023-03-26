const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    '<h1>MY PORTFOLIO</h1><h4>Hello, I am Xuan-Tri, a software developer living in SaDec - Dong Thap with more than 10 years of experience.</h4><p>I love the process as much as a outcome, I take a creative, collaborative and strategic approach to defining and designing solutions</p>'
  );
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
