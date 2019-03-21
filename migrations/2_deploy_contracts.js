const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function(deployer) {
  deployer.deploy(MultiSigWallet, ["0x9a47603275a4b4c9005fbdf56ecb8d463bad7e8c", "0x1baced8724bbe4fb554403cc77d28d551edc2bdc", "0x65cf364b0e73a23832def044ff8364fcb67e94c6"], 2);
};
