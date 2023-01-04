// https://eth-goerli.g.alchemy.com/v2/4S7tAfe2Ie81pefhz1ojWQuwUxjwbXaG

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/4S7tAfe2Ie81pefhz1ojWQuwUxjwbXaG',
      accounts: ['4bb466beab16573af1d986005ba974b34530e0df1c6b5a2def8705db9f1059f1']

    }
  }
}