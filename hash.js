const { createHash } = require('crypto'); //imports the crypto npm library 


//function that generates the hash using a sha256 hash and outputs it hex values (64 characters)
function hash(input){
    return createHash('sha256').update(input).digest('hex');
}


let password = 'besttime34';
const hash1 = hash(password);

console.log(hash1)
