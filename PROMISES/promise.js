var fs = require('fs');
// var fs = require('fs/promises');
// var fs = require('fs').promises;

function readFile1(fpath) //manually promisify fs.readFile()
{
    return new Promise((success, fail) => {
        fs.readFile(fpath,"utf-8",(err,data)=>{
            if(err)
                fail(err)
            else
                success(data)
        });
    });
}

readFile1("./files/file1.txt")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})