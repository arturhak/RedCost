import Web3 from 'web3';
import { ABI } from './ABI/ABI';
import { marketABI } from './ABI/marketABI';

// Binance Smart Chain testnet RPC URL
const bscTestnetProvider = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const web3 = new Web3(new Web3.providers.HttpProvider(bscTestnetProvider));

// Test contract address on BSC testnet
const RedCostNFTAddress = "0x6f07f1C47a1A27b7d27361a5e726e8438CD0CE1c";
const RedCostMarketAddress= "0x503aE66598B1c2246f9592EAA59dC5b121e4fC43"

const contractNFT = new web3.eth.Contract(ABI, RedCostNFTAddress);
const contractMarket = new web3.eth.Contract(marketABI, RedCostMarketAddress);

// Function to get NFT data
export async function getNFT() {
    let nftInfo = [];
    try {
        let nftLength = await contractNFT.methods.nextNftIndex().call()
        console.log(nftLength);

        for (let index = 0; index < nftLength; index++) {
            let nftObj = {};
            nftObj = await contractNFT.methods.nftRegistry(index).call();
            nftInfo.push(nftObj)
        }

        console.log("nftInfo",nftInfo);
        return nft;
    } catch (error) {
        console.error("An error occurred while fetching the NFT:", error);
    }
}

export async function _decreaseAuctionPrice(_account,_tokenID) {
    try {
        // Estimate gas for the transaction
        const estimatedGas = await contractMarket.methods.decreaseAuctionPrice(_tokenID).estimateGas({ from: _account });
        let dropTheRate = await contractMarket.methods.decreaseAuctionPrice(_tokenID).send({
            from: _account,
            gas: estimatedGas, // Set the estimated gas limit
            gasPrice: gasPrice, // Set the current gas price
        });

        return dropTheRate;
    } catch (error) {
        console.error("Error DropTheRate:", error);
    }
}

export async function _buy (_tokenID){
    try {
        // Estimate gas for the transaction
        const estimatedGas = await contractMarket.methods.buy(_tokenID).estimateGas({ from: _account });
        let buyNFT = await contractMarket.methods.buy(_tokenID).send({
            from: _account,
            gas: estimatedGas, // Set the estimated gas limit
            gasPrice: gasPrice, // Set the current gas price
        });
        return buyNFT;
    } catch (error) {
        console.error("Error Buy:", error);
    }
}
