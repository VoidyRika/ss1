export default function handler(req, res){
    const ip = req.headers["x-forward-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

res.setHeader("Content-Type","text/html");
res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title> IP Checker</title>
    </head>
    <body>
    <div class = "box">
        <h2>Your IP Address</h2>
        <div> ${ip}</div>
    </div>
    </body>
    </html>
    
    
    
        
    
    
    
    
    
    
    
    
    `)
}