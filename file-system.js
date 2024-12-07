const fs = require('fs')
const path = require('path')

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}


const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}


writeFileAsync(path.join(__dirname, 'test.txt'), 'data')
    .then(() => appendFileAsync(path.join(__dirname, 'test.txt'),'123'))
    .then(() => appendFileAsync(path.join(__dirname, 'test.txt'),'456'))
    .then(() => appendFileAsync(path.join(__dirname, 'test.txt'),'789'))
    .then(() => readFileAsync(path.join(__dirname, 'test.txt')))
    .then((data) => console.log(data))
    .catch(err => console.log(err))

