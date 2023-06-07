import { WebSocketServer } from "ws"

const webSocketServer = new WebSocketServer({
    port: 3050
})

webSocketServer.addListener("connection", (webSocket) =>
{
    console.log("New Connection");
    
    webSocket.on("message", (messageBuffer) =>
    {
        console.log(`New Message : ${messageBuffer.toString()}`)
    })

    webSocket.on("close", (e) =>
    {
        console.log("Connection closed")
    })
})