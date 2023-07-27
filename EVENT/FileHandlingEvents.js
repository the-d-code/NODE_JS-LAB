var event = require('events');
var fs = require('fs');

var EventEmitter = new event.EventEmitter();

EventEmitter.on("createFile", createFile);
EventEmitter.on("openFile", openFile);
EventEmitter.on("readFile", readFile);
EventEmitter.on("writeFile", writeFile);
EventEmitter.on("deleteFile", deleteFile);

function createFile(file) {
    fs.link("/text.txt",  file, (err) => {
        if(err.errno == null)
        {
            fs.link("/IT7_81/text.txt",  file, (err) => {
                if(err) throw err;
                console.log(file+" file Created!!");
                EventEmitter.emit("openFile", file);
            })
        }
        else if(err.errno == -4075)
        {
            console.log(file+" file Already Exist!!");
            EventEmitter.emit("openFile", file);
        }
    })
}

function openFile(file) {
    fs.open(file, (err) => {
        if(err) throw err;
        console.log(file+" file Opened!!");
        EventEmitter.emit("readFile", file);
    })
}

function readFile(file) {
    fs.readFile(file, (err, data) => {
        if(err) throw err;
        if(data.length == 0)
        {
            console.log("No File Content!!\nWritting to empty file "+file);
            EventEmitter.emit("writeFile", file);
        }
        else
        {
            console.log("File Content : \n"+data+"\n");
            EventEmitter.emit("deleteFile", file);  
        }      
    })
}

function writeFile(file) {
    fs.writeFile(file, "Hello This is NodeJS Events Program :) !!", (err) => {
        if(err) throw err;
        console.log("Content Added to "+file+" file!!"); 
        EventEmitter.emit("readFile", file);   
    })
}

function deleteFile(file) {
    fs.unlink(file, (err) => {
        if(err) throw err;
        console.log(file+" file Deleted!!");
        EventEmitter.emit("createFile", file);
    })
}

EventEmitter.emit("createFile", "text.txt");