const bitcoin = require("bitcoinjs-lib");

const contains = ["TOMA"];
let keyPair = bitcoin.ECPair.makeRandom();

while (contains.some(c => keyPair.getAddress().includes(c)) !== true) {
	keyPair = bitcoin.ECPair.makeRandom();
	console.log(`${keyPair.getAddress()}`);
}

console.log(`${keyPair.getAddress()} - ${keyPair.toWIF()}`);