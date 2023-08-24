const http = require('http');
const fs = require('fs');

let homePage ="";
let projectPage ="";
let registrationPage="";

const port = require("minimist")(process.argv.slice(2))

fs.readFile('home.html', (err, home) => {
    if (err) {
        throw err;
    }
    homePage = home;
});

fs.readFile('project.html', (err, project) => {
    if (err) {
        throw err;
    }
    projectPage = project;
});


fs.readFile('registration.html', (err, registration) => {
    if (err) {
        throw err;
    }
    registrationPage = registration;
});

const server = http.createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { 'Content-Type': 'text/html' })
        switch (url) {
        case '/project':
            response.write(projectPage);
            response.end();
            break;
        case '/registration':
            response.write(registrationPage);
            response.end();
            break;
        default:
            response.write(homePage);
            response.end();
            break;

        }
});
server.listen(port.port);
