const http = require('http')

const server= http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     res.end('welcome to our homepage')
    // }
    // if(req.url === '/about'){
    //     res.end('let me tell you a story')
    // }
    // res.end(`<h1>Ooops!</h1>
    // <p>the page you are looking for is unavailable</p>
    // <a href="/">back home</a>`)
    if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }


})

server.listen(5000)