const http = require("http");
const fs = require("fs");
const path = require("path");
const {MongoClient} = require("mongodb");


const PORT = 5262;

const getPrimeWebseriesData = async (client) =>{
    const cursor = client.db("PrimeWebSeriesdb").collection("PrimeWebSeries").find({});
    const results = await cursor.toArray();
    return JSON.stringify(results);
}

http.createServer(async (req,res)=>{
    if(req.url === "/api"){
        const URL = "mongodb+srv://vicky:1234@cluster0.tjmhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        const client = new MongoClient(URL);
        try{
            await client.connect();
            console.log("Database is connected sucessfully") ;
            const webSeriesData = await getPrimeWebseriesData(client);
            res.setHeader("Access-Control-Allow-Origin","*");
            res.writeHead(200,{"content-type":"application/json"});
            console.log(webSeriesData);
            res.end(webSeriesData);
        }
        catch(err){
            console.log("Error in connecting database",err);
        }
        finally{
            await client.close();
            console.log("Database connection is closed");
        }
    }
    else{
        console.log(req.url);
        let contentType;
        const filePath = path.join(__dirname, "public", req.url==="/"?"index.html":req.url.slice(1));
        if(filePath.endsWith(".png")) contentType = "image/png";
        else if(filePath.endsWith(".jpeg") || filePath.endsWith(".jpg")) contentType = "image/jpeg";
        else contentType = "text/html";
        fs.readFile(filePath,(err,content)=>{
            if(err){
                if (err.code === "ENOENT") {
                    res.writeHead(404,{"content-type":"text/html"});
                    res.end("<h1>404 Page Not Found!</h1>");
                } else {
                    res.writeHead(500,{"content-type":"text/plain"});
                    res.end("Internal Server error");
                }
            }
            else{
                res.writeHead(200,{"content-type":contentType});
                res.end(content,"utf8");
            }
        })
    }
}).listen(PORT,()=>console.log(`Server is running on ${PORT}`))