const http = require('http');
const fs = require('fs');

const PORT = 8090;

// fs.writeFile("contact.html", "", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("File created successfully.")
//     }
// })



const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        fs.readFile('index.html', (err, data) => {
            res.end(data);
        });
    }
    else if (req.url === '/login') {
        fs.readFile('login.html', (err, data) => {
            res.end(data);
        });
    }
    else if (req.url === '/signup') {
        fs.readFile('signup.html', (err, data) => {
            res.end(data);
        });
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            res.end(data);
        });
    }
    else if (req.url === '/service') {
        fs.readFile('service.html', (err, data) => {
            res.end(data);
        });
    }
    else {
        res.end('Page not found');
    }
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
