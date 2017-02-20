/* globals $ */
/* eslint-env node, dirigible */

var http = require('net/http/client');
var response = require('net/http/response');

var options = {
    method: 'GET', // default
    host: 'http://jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts/',
    binary: false 
};

var httpResponse = http.request(options);

response.println(httpResponse.statusMessage);
response.println(httpResponse.data);
response.flush();
response.close();
