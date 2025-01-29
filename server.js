const http = require('http');
const app = require('./app');

const numPort =3007;

const server = http.createServer(app);

const date = new Date();

app.set("port",numPort);

server.listen(3007, () => {
    console.log(date.toLocaleDateString()," ", date.toLocaleTimeString());
    console.log("Le serveur est activé au port :" ,numPort);
});