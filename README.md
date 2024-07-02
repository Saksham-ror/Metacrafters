
# Simplified NFT Minting Example (NFT.js)

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




# MyToken: A Simple ERC-20 Token (myToken.sol)

This Solidity contract implements a basic ERC-20 token named "META" (with abbreviation "MTA") for educational purposes. It demonstrates core functionalities like minting and burning tokens.

**Key Features:**

- **Public Variables:**
   - `tokenName`: Stores the token's full name ("META").
   - `tokenAbbrv`: Represents the token abbreviation ("MTA").
   - `totalSupply`: Tracks the total number of tokens in circulation, initially set to 0.
- **Balance Mapping:**
   - `balances`: Maps wallet addresses to their respective token balances.
- **`mint` Function:**
   - Takes an address (`_address`) and a value (`_value`).
   - Increases the `totalSupply` by `_value`.
   - Increments the balance of the specified address (`_address`) by `_value`.
- **`burn` Function:**
   - Takes an address (`_address`) and a value (`_value`).
   - Includes a conditional check to ensure the burning account's balance (`balances[_address]`) is sufficient to burn the desired amount (`_value`).
     - If the balance is sufficient, it reduces the `totalSupply` and the account's balance by `_value`.

# errHand: Scholarship Management Contract (errHandling.sol)

This Solidity contract, `errHand`, simulates a simplified scholarship program for educational purposes. It demonstrates student registration, eligibility checks, and (intentionally flawed) transfer functionality.

**Key Functionalities:**

- **`minPercent`:** Public variable storing the minimum percentage requirement for scholarship eligibility (set to 75%).
- **`student` Mapping:** Maps student addresses to their `studentDetails` struct.
- **`studentDetails` Struct:** Holds data for each registered student:
   - `percent`: The student's recorded percentage.
   - `scholarship`: Boolean flag indicating scholarship eligibility.
- **`registerStudent` Function:**
   - Takes a student's percentage (`_percent`) as input.
   - Enforces eligibility using a `require` statement:
     - If `_percent` is less than `minPercent`, reverts the transaction with an error message.
   - If eligible, stores the percentage and sets the `scholarship` flag to `true` for the sender's address (`msg.sender`).
- **`isRegistered` Function (Flawed):**
   - Takes a student's address (`student`) as input.
   - Contains a flawed assertion statement:
     - Attempts to assert that the student is already registered (`scholarship` is not `false`). This assertion doesn't revert the transaction, potentially leading to unexpected behavior.
   - Returns the student's scholarship eligibility (if the assertion passes).
- **`transfer` Function (Flawed):**
   - Takes a recipient address (`recipient`) and an amount to transfer (`amount`) as input.
   - Contains a critical error:
     - Uses `revert(false)` instead of `revert()` or emitting an error. This will always revert the transaction without a proper error message.
   - Intends to transfer `amount` to the recipient, but due to the error, it will always revert.










# Executing programs

To run the program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension. Copy and paste the code into the file.
To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version).

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the contract from the dropdown menu, and then click on the "Deploy" button.


# Authors

Contributors names and contact info

Saksham
https://github.com/Saksham-ror
