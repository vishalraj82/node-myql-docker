const http = require('http');
const mysql = require('mysql2');


const requestListener = (req, res) => {
  const conn = mysql.createConnection({
    host: 'db',
    user: 'demouser',
    password: 'demopswd',
    database: 'demodb'
  });
  const query = 'select * from demotable',
    queryResponseHandler = (err, results ) => {
      res.setHeader('Content-Type', 'text/json');
      res.end(JSON.stringify(results));
    };

  conn.query(query, queryResponseHandler);
};


const server = http.createServer(requestListener);

server.listen(3000);
