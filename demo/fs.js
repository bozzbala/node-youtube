const fs = require('fs')
const path = require('path')

/*
fs.mkdir(path.join(__dirname, 'test'), (err) =>{
    if(err){
        throw err
    }

    console.log("Dir made")
})*/

const filePath = path.join(__dirname, 'test', 'text.txt')
/*fs.writeFile(filePath, 'Hello Node js haa', (err) =>{
    if(err){
        throw err
    }
    fs.appendFile(filePath, 'Hello again', (err) =>{
        if(err){
            throw err
        }

        console.log('file second')
    })
    console.log('file made')
})*/


fs.readFile(filePath, 'utf-8',(err, content) =>{
    if(err){
        throw err
    }
    const data = Buffer.from(content)
    console.log('Content: ', data.toString())
})