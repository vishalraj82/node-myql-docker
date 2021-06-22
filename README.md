## How to use Nodejs with MySQL using Docker

This repo was created as a response to [reddit question](https://www.reddit.com/r/node/comments/o5h4zh/how_to_use_mysql_with_nodejs_and_docker/)

How to run the demo

- Checkout the repository - `git clone https://github.com/vishalraj82/node-mysql-docker`
- Start the docker containers - `docker-compose up`
- List the docker contaienrs - `docker container ls`
- Get inside the MySQL docker container - `docker exec -it node-mysql-docker_db_1 mysql -u demouser -p demodb` and enter the password `demopswd`
- Create the table `demotable` - `CREATE TABLE demotable (id TINYINT, name VARCHAR920));`
- Add some data to the table - `INSERT INTO demotable VALUES (1, 'John'), (2, 'Maria')`
- Open the browser and navigate to [http://localhost:3000](http://localhost:3000)

You should be able to see the JSON data from the table.
