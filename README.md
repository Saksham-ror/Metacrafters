# Metacrafters

Metacrafters Assessment Solutions
# Simplified NFT Minting Example

This code simulates a basic NFT minting process, demonstrating how to manage NFT metadata in JavaScript. It's intended for educational purposes and doesn't directly interact with a blockchain platform.

**Understanding NFTs and Smart Contracts**

- **NFTs (Non-Fungible Tokens):** Unique digital assets representing ownership of items on a blockchain.
- **Smart Contracts:** Self-executable programs on blockchains that govern NFT creation, ownership, and transfer.

This simplified example doesn't utilize smart contracts, as its focus is on managing NFT metadata within the code.

**Code Breakdown**

The code includes the following functions:

- **`NFTvar` Array:** Stores an array of minted NFT objects.
- **`mintNFT` Function:**
  - Takes name, description, and image URL as parameters.
  - Creates an NFT object with these properties.
  - Pushes the NFT object into the `NFTvar` array.
  - Logs a message indicating successful minting.
- **`listNFTs` Function:**
  - Iterates through the `NFTvar` array using a `for` loop.
  - Logs each NFT object (metadata) to the console.
- **`getTotalSupply` Function:**
  - Retrieves the length of the `NFTvar` array, representing the total number of minted NFTs.
  - Logs the total supply to the console.

**Running the Code**

1. Save the code as a JavaScript file (e.g., `nft_minting_example.js`).
2. Run the JavaScript file using Node.js: `node nft_minting_example.js`

The output will display information about the minted NFTs and their total count.

**Important Note**

Real-world NFT development involves interacting with blockchain platforms and smart contracts. This code provides a basic educational foundation for understanding NFT metadata management.

I hope this README file effectively explains the code and its purpose!








## Getting Started

### Executing program

To run the program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension. Copy and paste the code into the file.
To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version).

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the contract from the dropdown menu, and then click on the "Deploy" button.


## Authors

Contributors names and contact info

Saksham
https://github.com/Saksham-ror


## License

This project is licensed under the Saksham. License - see the LICENSE.md file for details
