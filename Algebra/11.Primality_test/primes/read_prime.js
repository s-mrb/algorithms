var fs = require('fs')
var path = require("path");
const { exit } = require('process');
const read_prime = (path2file, csv = false) => {
  try {

    let raw_text = fs.readFileSync(path2file, 'utf-8')
    let parsed_txt = raw_text.replace(/\n|\s/g, '')
    let file_name = path.basename(path.relative(process.cwd(), path2file),'.txt');
    let prime_length = parseInt(file_name)

    if(prime_length != parsed_txt.length){
      throw new Error('File is corrupted or wrongly named!!')
    }
    return BigInt(parsed_txt)
  } catch (error) {
    console.error(error)
  }
}

// read_prime('./270343.txt')
module.exports = read_prime
