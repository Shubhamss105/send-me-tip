## Tip Sending DApp on Ethereum Blockchain

This is a decentralized application built on the Ethereum blockchain where users can send tips to the owner. The project utilizes Solidity for smart contract development, Hardhat for local development environment, and Ethers.js for interacting with the blockchain. React.js is used for building the front-end interface.

Users can connect their Ethereum wallet to the DApp and send tips to the owner. Each tip transaction is stored on the Ethereum blockchain and can be viewed publicly. The DApp ensures that only the owner can receive tips and that no tips can be sent twice.

### Running the DApp

To run the DApp locally, you need to install Node.js and the Hardhat development environment. Clone the repository, install the dependencies and start the local development server using the following commands:

```
git clone https://github.com/Shubhamss105/send-me-tip.git
cd send-me-tip
npm install
npm start
```

The DApp will be running on `http://localhost:3000`. You can connect your Ethereum wallet to the DApp and start sending tips.

### Smart Contract

The smart contract is written in Solidity and is responsible for storing the tip transactions on the Ethereum blockchain. The contract ensures that only the owner can receive tips and that no tips can be sent twice. The contract is deployed on the Ethereum blockchain and can be accessed publicly.

### Front-end

The front-end of the DApp is built using React.js and provides a user-friendly interface for sending tips. Users can connect their Ethereum wallet to the DApp and send tips using a simple form. The front-end communicates with the Ethereum blockchain using Ethers.js library.

### Future Work

In future, we plan to add more features to the DApp such as the ability to withdraw tips, view a history of tip transactions, and integrate with other blockchain networks. We also plan to improve the user interface to make it more intuitive and user-friendly.
