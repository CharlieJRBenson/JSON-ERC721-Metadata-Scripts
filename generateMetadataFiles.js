// Import the fs module for working with the file system
const fs = require('fs');

// Function to generate ERC721 metadata files
function generateMetadata(name, ipfsHash, numFiles) {
  // Loop through the specified number of files
  for (let i = 1; i <= numFiles; i++) {
    // Create the metadata object
    const metadata = {
      name: name,
      image: ipfsHash
    };

    // Write the metadata object to a file named incrementally (eg: 1.json, 2.json, 3.json etc)
    fs.writeFileSync(`${i}.json`, JSON.stringify(metadata));
  }
}

// Call the function with the specified name, IPFS hash, and number of files to generate
generateMetadata('My Token', 'Qmabcdef1234567890', 10);
