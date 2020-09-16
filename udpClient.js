var host = '192.168.241.101';
var port = 8080;
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var timeSend;
var timeRecieved;
var i = 1;


var data = Buffer.from("test");


client.send(data, port, host, function () {
        timeSend = new Date().getMilliseconds()
    }
);

client.on("message", function(msg, info) {
    console.log(info.address + ':' + info.port +' - ' + msg);
    timeRecieved = new Date().getMilliseconds()
    client.send(data, port, host, function () {
        timeSend = new Date().getMilliseconds()
    });
    console.log(timeRecieved - timeSend)
    i++;
    if (i == 11){
        client.close();
    }
});