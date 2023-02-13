const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('Danny');
    const url = req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>Home page</title></head>');
        res.write('<body>Welcome home</body>');
        res.write('</html>');
        return res.end();
    }else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>About us</title></head>');
        res.write('<body>Welcome to About Us page</body>');
        res.write('</html>');
        return res.end();
    }else{
        res.write('<html>');
        res.write('<head><title>Node page</title></head>');
        res.write('<body>Welcome to my Nodejs project</body>');
        res.write('</html>');
        return res.end();
    }
})
server.listen(4000);