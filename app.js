
const expressClass = require('express'); // creating class for express dependency 
//note :- before creating the class make sure u have installed the dependency first

const server = expressClass(); // creating object of the express class using constructor

const portAddress = 5000; // 'port address' where the responses will be send using methods and routes

// route(endpoint) created  using get method
//first parameter will be the path where the response will go
//note :- endpoints(routes) first character must be '/' then u can use word and letters
// second parameter will be a callback function which takes two objects
//get methods can directly accessible from the url bar
server.get('/',(req,res)=>{
    console.log(req.headers)
    res.send('hii how are you\ngo to another route by typing route1 after the /'); // method to send response to the route
})

server.get('/route1',(req,res)=>{
    res.send('you have reached to second route\nif u are here congrats u can now jump to endpoints using get method');
})

//post method use to send resources to server with giving it some resources
//we can invoke these methods using postman they cant directly accessible with url
server.post('/post',(req,res)=>{
    console.log(req.headers);
    res.send("post method was successfully requested");
})

// put method use to edit or create a resource resource on the server
// we will give path params and queries we want to edit in url if we dont give path param it will use id param by default 
server.put('/put',(req,res)=>{
    console.log(req.headers);
    res.send('put method successfullly requested')
})

// patch method use to edit a resource on the server
// we will give path params and queries we want to edit in url if we dont give path param it will use id param by default 
server.patch('/patch',(req,res)=>{
    console.log(req.headers);
    res.send('patch method successfullly requested')
})

// delete method use to delete a resource on the server
// we will give path params and queries we want to edit in url if we dont give path param it will use id param by default 
server.delete('/delete',(req,res)=>{
    console.log(req.headers);
    res.send('delete method successfullly requested')
})

// on terminal type node app.js so u can start local server for this app
// runtime checking if the connection to the local server is established or not
// the output will be in terminal for this
server.listen(portAddress,()=>{
    console.log(`the server address is ${portAddress}, go to 'localhost:${portAddress}/'`)
})