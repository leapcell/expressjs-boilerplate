const express = require('express');

const app = express();

app.get("/hello", (request, response) => {
    return response.send("Hello Leapcell");
});

app.listen(8080, () => {
    console.log('App is listening on port 8080');
});