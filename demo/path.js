const path = require('path')

console.log('Название файла: ', path.basename(__filename))

console.log('Rasshirenie файла: ', path.extname(__filename))

console.log(path.parse(__filename))

