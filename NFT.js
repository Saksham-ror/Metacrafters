/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTvar=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_desc,_img) {
   const NFT ={
   'name':_name,
   'description':_desc,
   'image':_img
   }
   NFTvar.push(NFT)
   console.log("Minted "+_name+" NFT")
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i=0;i<NFTvar.length;i++){
      console.log(NFTvar[i])
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFT minted: "+NFTvar.length)
}

// call your functions below this line
mintNFT("Porche Taycan","Essay writing","https://autonxt.net/wp-content/uploads/2019/09/Porsche-Taycan8.jpg")
mintNFT("G-Class","Badmosi","https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/789000/800/789846.jpg?q=50&fit=contain&w=750&h=415&dpr=1.5")
mintNFT("Alto","Lord Alto","https://www.carblogindia.com/wp-content/uploads/2019/04/Maruti-Suzuki-launches-New-Alto-Drive-with-Pride-1024x646.jpg")
listNFTs()
getTotalSupply()
