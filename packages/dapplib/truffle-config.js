require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind concert hunt inflict swear ski'; 
let testAccounts = [
"0x78f692e5cbe98133bc9b54ad55d7457a7aeae3e493ca9432df959c7610ffeb74",
"0x500779b03d0ae5983f8cb513245996957a008b00f94218643d49ec3dc821c881",
"0x17ca078eea7ce5b6c0cafaff5100ccb69be34ec70ee3ed9870a8c80278d95724",
"0x4fced2b65db6885e8831614c38eff7832a6b7e51930b02ac700b6182b99e80a8",
"0x5878d393dfdf2f00822807b5adbefa43d144bbcc29275cf708086edc4bd651c8",
"0x9d5cdd202d547c15274b73eb69e746fe0862392a3d3af32025c1e27a0dba4441",
"0x56d8c5006f458480d3a5cd7a18e8e745abaa042a572ccaf9abdcd9754aaf2cf5",
"0x42b8cd407a814a0aa7c4014b9e409556919c302d907cff3c8aac33f2b77b5c94",
"0xf5af5105e039ec38613a85a38cfda4df06568a407529b3e08fc983786c626d46",
"0xa710582095ec5b384a3dfd342dbf03d337800f742e72591ffdc2de2dbbb75282"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

