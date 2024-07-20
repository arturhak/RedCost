import Web3 from 'web3';
import { CustodianNFT } from './ABI/CustodianNFTABI';
import { marketABI } from './ABI/marketABI';

// Binance Smart Chain testnet RPC URL
const bscTestnetProvider = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const web3 = new Web3(new Web3.providers.HttpProvider(bscTestnetProvider));

// Test contract address on BSC testnet
const RedCostNFTCustodianAddress = "0x484D9C11f72Ba727ba1AD7E2cd442D2810c633d5";
const RedCostMarketAddress = "0x27e28889b68c0C4b3B742D4803a47e597903E296"

const contractNFTCustodian = new web3.eth.Contract(CustodianNFT, RedCostNFTCustodianAddress);
const contractMarket = new web3.eth.Contract(marketABI, RedCostMarketAddress);

// Function to get NFT data
export async function getNFT() {
    let nftInfo = []; // Initialize an array to hold NFT information
    try {
        // Fetch the total number of NFTs from the contract
        let nftLength = await contractNFTCustodian.methods.nextNftIndex().call();
        console.log(nftLength);

        // Loop through each NFT index and fetch the NFT details
        for (let index = 0; index < nftLength; index++) {
            let nftObj = {};
            nftObj = await contractNFTCustodian.methods.nftRegistry(index).call(); // Fetch the NFT details from the contract
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

        // Create the transaction object
        const tx = {
            from: _account,
            to: contractMarket.options.address,
            gas: web3.utils.toHex(estimatedGas), // Convert gas to hex
            gasPrice: web3.utils.toHex(gasPrice), // Convert gasPrice to hex
            data: contractMarket.methods.decreaseAuctionPrice(_tokenID).encodeABI()
        };
        // Send the transaction
        const dropTheRate = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx],
        });
        return web3.utils.toHex(dropTheRate); // Return the result of the transaction
    } catch (error) {
        console.error("Error DropTheRate:", error); // Log any errors that occur during the process
        // Additional error handling can be added here if needed
    }
}

// Function to buy an NFT
export async function _buy(_account, _tokenID) {
    try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Estimate the gas required for the transaction
        const estimatedGas = await contractMarket.methods.buy(_tokenID).estimateGas({ from: _account });

        // Get the current gas price
        const gasPrice = await web3.eth.getGasPrice();

        // Create the transaction object
        const tx = {
            from: _account,
            to: contractMarket.options.address,
            gas: web3.utils.toHex(estimatedGas), // Convert gas to hex
            gasPrice: web3.utils.toHex(gasPrice), // Convert gasPrice to hex
            data: contractMarket.methods.buy(_tokenID).encodeABI()
        };

        console.log("Transaction Object:", tx); // Debugging: log the transaction object

        // Send the transaction
        const buyNFT = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx],
        });

        return buyNFT; // Return the result of the transaction
    } catch (error) {
        console.error("Error Buy:", error); // Log any errors that occur during the process
        // Additional error handling can be added here if needed
    }
}

export async function getAuctionData(_tokenId) {
    try {
        let auctionData = await contractMarket.methods.auctions(_tokenId).call();
        // console.log(auctionData);
        return auctionData
    } catch (error) {
        console.error('Error: userInfo', error);
        return null; // Return a default value or handle the error as needed
    }
}

