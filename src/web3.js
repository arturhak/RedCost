import Web3 from 'web3';
import { ABI } from './ABI/ABI';
import { marketABI } from './ABI/marketABI';

// Binance Smart Chain testnet RPC URL
const bscTestnetProvider = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const web3 = new Web3(new Web3.providers.HttpProvider(bscTestnetProvider));

// Test contract address on BSC testnet
const RedCostNFTAddress = "0x7eaaDD0429CCb845DC820b6ebcb4d84e5B8E10a0";
const RedCostMarketAddress= "0x503aE66598B1c2246f9592EAA59dC5b121e4fC43"

const contractNFT = new web3.eth.Contract(ABI, RedCostNFTAddress);
const contractMarket = new web3.eth.Contract(marketABI, RedCostMarketAddress);

// Function to get NFT data
export async function getNFT() {
    let nftInfo = []; // Initialize an array to hold NFT information
    try {
        // Fetch the total number of NFTs from the contract
        let nftLength = await contractNFT.methods.nextNftIndex().call();
        console.log(nftLength);

        // Loop through each NFT index and fetch the NFT details
        for (let index = 0; index < nftLength; index++) {
            let nftObj = {};
            nftObj = await contractNFT.methods.nftRegistry(index).call(); // Fetch the NFT details from the contract
            nftInfo.push(nftObj); // Add the NFT details to the array
        }

        console.log("nftInfo", nftInfo);
        return nftInfo; // Return the array of NFT information
    } catch (error) {
        console.error("An error occurred while fetching the NFT:", error); // Log any errors that occur during the process
    }
}

// Function to decrease the auction price of an NFT
export async function _decreaseAuctionPrice(_account, _tokenID) {
    try {
        // Estimate the gas required for the transaction
        const estimatedGas = await contractMarket.methods.decreaseAuctionPrice(_tokenID).estimateGas({ from: _account });
        // Get the current gas price
        const gasPrice = await web3.eth.getGasPrice();
        // Send the transaction to decrease the auction price
        let dropTheRate = await contractMarket.methods.decreaseAuctionPrice(_tokenID).send({
            from: _account,
            gas: estimatedGas, // Set the estimated gas limit
            gasPrice: gasPrice, // Set the current gas price
        });

        return dropTheRate; // Return the result of the transaction
    } catch (error) {
        console.error("Error DropTheRate:", error); // Log any errors that occur during the process
    }
}

// Function to buy an NFT
export async function _buy(_account, _tokenID) {
    try {
        // Estimate the gas required for the transaction
        const estimatedGas = await contractMarket.methods.buy(_tokenID).estimateGas({ from: _account });
        // Get the current gas price
        const gasPrice = await web3.eth.getGasPrice();
        // Send the transaction to buy the NFT
        let buyNFT = await contractMarket.methods.buy(_tokenID).send({
            from: _account,
            gas: estimatedGas, // Set the estimated gas limit
            gasPrice: gasPrice, // Set the current gas price
        });

        return buyNFT; // Return the result of the transaction
    } catch (error) {
        console.error("Error Buy:", error); // Log any errors that occur during the process
    }
}


