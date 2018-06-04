"use strict";
const http = require("http");
const getQuote = require("./quoteList");


http.createServer((request, response) => {
    console.log("the server is running on port 3000");
    response.writeHead(200, {
        "Content-type": "text/plain"
    });
    let randomQuote = getQuote();
    response.write(`Quote of the day: ${randomQuote}`);
    response.end();
}).listen(3000);