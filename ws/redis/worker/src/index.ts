import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
async function main(){
await client.connect()
while(1){
    const response= await client.brPop("submissions",0);
    console.log(response);
    //actually run the users code docker exec
    await new Promise((resolve) =>setTimeout(resolve, 200));
    console.log("processed successfully")
}
}
main();