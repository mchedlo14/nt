const fsPromises = require('fs').promises;
const path = require('path');

// const textData = "Hello my name is Levan, im'a Front end developer. I'll Try to tell you about my skills and experience. I know it wont be best Self Promoting but i hope this will be normal."

// //file read
// fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf-8',(err,data) => {
//     if(err) throw err;

//     console.log(data.toString());
// })

// //file write
// fs.writeFile(path.join(__dirname,'files','reply.txt'),textData,(err) => {
//     if(err) throw err;

//     console.log('Operation Complete');
// })

// //file update
// fs.appendFile(path.join(__dirname,'files','test.txt'),'test text',(err) => {
//     if(err) throw err;

//     console.log('Append Complete');
// })

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files','PromisesWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','PromisesWrite.txt'),'\n\n heyyyy')

    }catch(err){
        console.error(err)
    }
}

fileOps()
process.on('uncaughtException', err => {
    console.error('there was an error' + err)

    process.exit(1)
})