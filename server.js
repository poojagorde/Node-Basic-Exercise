
const Hapi = require('hapi')
const host = 'localhost';
const port = 3000; 


const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {
    await server.start();
    console.log("Server up! Port: " + port);
}
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
    
            var data = {
                message: 'API calculator'
            };
    
            return data;
        }
    });
init();
