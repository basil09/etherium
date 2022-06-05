const { ethers } = require("ethers");




const INFURA_ID = 'c15d015609bd46d2bbb5294bbbdb88dc'


//const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/https://mainnet.infura.io/v3/c15d015609bd46d2bbb5294bbbdb88dc`)

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const main = async () => {

const balance = await provider.getBalance(address)
console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)

console.log(balance)
}
main()
console.log("GeeksforGeeks")
