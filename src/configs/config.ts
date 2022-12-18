const MYSQL_HOST = 'localhost';
const MYSQL_DATABASE =  'ecommercedb';
const MYSQL_USER =  'root';
const MYSQL_PASS =  'root@123';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASS
};

const SERVER_HOSTNAME = 'localhost';
const SERVER_PORT =  4000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER,
    authSecretKey: 'wewew-434ed-sder-dddf3'
};

export default config;