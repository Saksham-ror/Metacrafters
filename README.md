# Metacrafters

Metacrafters Assessment Solutions
## NFT Minting System
This JavaScript program demonstrates a simple NFT (Non-Fungible Token) minting system. The code includes functions to create and store NFT metadata, list all NFTs, and get the total number of NFTs created. Below is a detailed description of each part of the code:

1. Variable to Hold NFTs
A variable NFTvar is created to hold the NFTs. This variable is initialized as an empty array and will store the NFT objects created by the mintNFT function.


const NFTvar = [];
2. Minting NFTs
The mintNFT function takes three parameters: _name, _desc, and _img. These parameters represent the name, description, and image URL of the NFT, respectively. Inside the function, an NFT object is created with these parameters and then added to the NFTvar array. A message is logged to the console indicating that the NFT has been minted.


function mintNFT (_name, _desc, _img) {
   const NFT = {
      'name': _name,
      'description': _desc,
      'image': _img
   }
   NFTvar.push(NFT);
   console.log("Minted " + _name + " NFT");
}
3. Listing All NFTs
The listNFTs function loops through the NFTvar array and logs the metadata of each NFT to the console.

javascript
Copy code
function listNFTs () {
   for (let i = 0; i < NFTvar.length; i++) {
      console.log(NFTvar[i]);
   }
}
4. Getting the Total Supply of NFTs
The getTotalSupply function logs the total number of NFTs stored in the NFTvar array to the console.


function getTotalSupply() {
   console.log("Total NFT minted: " + NFTvar.length);
}
5. Example Usage
The following code demonstrates how to use the functions defined above. Three NFTs are minted with different metadata, all NFTs are listed, and the total supply of NFTs is printed to the console.


mintNFT("Porche Taycan", "Essay writing", "https://autonxt.net/wp-content/uploads/2019/09/Porsche-Taycan8.jpg");
mintNFT("G-Class", "Badmosi", "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/789000/800/789846.jpg?q=50&fit=contain&w=750&h=415&dpr=1.5");
mintNFT("Alto", "Lord Alto", "https://www.carblogindia.com/wp-content/uploads/2019/04/Maruti-Suzuki-launches-New-Alto-Drive-with-Pride-1024x646.jpg");
listNFTs();
getTotalSupply();
By running this example, the program will mint three NFTs, list their metadata, and show the total number of NFTs minted.








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
