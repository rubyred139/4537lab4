const http = require("http");
let url = require("url");

let counter = 0;
let dictionary = [];

/**
 * dictionary format
 * [
 *     {word, definition}, {word, definition}
 * ]
 */

const server = http.createServer((req, res) => {});

server.listen(8000, () => console.log("server running on port 8000"));
