const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function(deployer) {
  deployer.deploy(MultiSigWallet(["0x0", "0x1"], 1));
};
