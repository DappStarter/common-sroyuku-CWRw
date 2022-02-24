require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rifle situate upset install forum equal gift'; 
let testAccounts = [
"0xc1e134cbdbe4698908b7be16fa33c79892436a597e765b0dcfc0f36aa5132863",
"0x11f4703e7c667998f394a2a25bee37e5eea963baaa78a1206b95bd580348d6e4",
"0x498b4b4a757b27f1d734e3644abd6c35aacb8bfa0274d28a4267278aaaa661b2",
"0xad8fd2fcb6ff31035e11093616ea43fbdf5ab93c6bcf13e6f0838321db8b2dc0",
"0x6e01fe29a357b37be49bb807f50bc6aa3b41ce2ff8f3a6c2b6b3ce266d989f78",
"0x5d1c32aa394c0f577d56f207ecf45a885daa5eccf4d87e57923fbea823273202",
"0x07c00bfd4bb16fbc10aaf76f1ddbfcaae5b829f8c88cc8bdadd3f7214f7305f8",
"0xffa92abe606929c000041f3afecb31d5fc839f2e9c0011e8a992369139d8052d",
"0x809fadff81d006e03d5725f908c25d478fa61941d2f87b6245d98fdcec56cf91",
"0x88dfd64419b709460e46680b70de90de169848f73a70b3c7ad4d563adfc6c0b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


